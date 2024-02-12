import { Component, Provider, forwardRef } from '@angular/core';

import { profileIconNames } from './profile-icon-names';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const PROFILE_ICON_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  multi: true,
  useExisting: forwardRef(() => ProfileIconSelectorComponent)
}

@Component({
  selector: 'con-profile-icon-selector',
  templateUrl: './profile-icon-selector.component.html',
  styleUrls: ['./profile-icon-selector.component.css'],
  providers: [PROFILE_ICON_VALUE_ACCESSOR]
})
export class ProfileIconSelectorComponent implements ControlValueAccessor {
  profileIcons = profileIconNames
  showAllIcons: boolean = true;
  selectedIcon!: string | null
  private onChange!: Function
  private onTouched!: Function

  writeValue(icon: string | null): void {
    if (icon && icon !== '') {
      this.selectedIcon = icon
      this.showAllIcons = false
      return
    }

    this.showAllIcons = true
  }
  registerOnChange(fn: Function): void {
    this.onChange = (icon: string) => { fn(icon) }
  }

  registerOnTouched(fn: Function): void {
    this.onTouched = fn
  }

  selectIcon(icon: string) {
    this.showAllIcons = false
    this.selectedIcon = icon
    this.onChange(icon)
  }
}
