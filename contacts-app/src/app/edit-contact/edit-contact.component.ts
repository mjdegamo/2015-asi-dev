import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from '../contacts/contacts.service';
import { restrictedWords } from '../validators/restricted-words.validators';
import { distinctUntilChanged } from 'rxjs';

@Component({
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  contactForm = this.fb.nonNullable.group({
    id: '',
    icon: '',
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    dateOfBirth: <Date | null>null,
    favoritesRanking: <number | null>null,
    isPersonal: false,
    phones: this.fb.array([
      this.createPhoneGroup()
    ]),
    address: this.fb.nonNullable.group({
      streetAddress: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      postalCode: ['', Validators.required],
      addressType: '',
    }),
    notes: ['', restrictedWords(['foo', 'bar', 'zig', 'zag'])]
  })

  phoneTypeValues = [
    { title: 'Mobile', value: 'mobile' },
    { title: 'Work', value: 'work' },
    { title: 'Other', value: 'other' },
  ]

  addressTypeValues = [
    { title: 'Home', value: 'home' },
    { title: 'Work', value: 'work' },
    { title: 'Other', value: 'other' },
  ]

  constructor(
    private route: ActivatedRoute,
    private contactsService: ContactsService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    const contactId = this.route.snapshot.params['id'];
    if (!contactId) return

    this.contactsService.getContact(contactId).subscribe(contact => {
      if (!contact?.id) return;

      for (let i = 1; i < contact.phones.length; i++) {
        this.addPhone()
      }

      this.contactForm.setValue(contact)
    })
  }

  saveContact() {
    this.contactsService.saveContact(this.contactForm.getRawValue()).subscribe({
      next: () => this.router.navigate(['/contacts'])
    })
  }

  stringifyCompare(a: any, b: any) {
    return JSON.stringify(a) === JSON.stringify(b)
  }

  createPhoneGroup() {
    const phoneGroup = this.fb.nonNullable.group({
      phoneNumber: '',
      phoneType: '',
      preferred: false
    })

    phoneGroup.controls.preferred.valueChanges
    .pipe(distinctUntilChanged(this.stringifyCompare))
    .subscribe(value => {
      if(value) {
        phoneGroup.controls.phoneNumber.addValidators([Validators.required])
      } else {
        phoneGroup.controls.phoneNumber.removeValidators([Validators.required])
      }
      phoneGroup.controls.phoneNumber.updateValueAndValidity()
    })

    return phoneGroup
  }

  addPhone() {
    this.contactForm.controls.phones.push(this.createPhoneGroup())
  }

  get firstName() {
    return this.contactForm.controls.firstName
  }

  get notes() {
    return this.contactForm.controls.notes
  }
}
