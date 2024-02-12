export interface Contact {
  id: string,
  icon: string,
  firstName: string,
  lastName: string,
  dateOfBirth: Date | null,
  favoritesRanking: number | null,
  isPersonal: boolean,
  notes: string,
  phones: Phone[],
  address: Address,
}

export interface Phone {
  phoneNumber: string,
  phoneType: string,
  preferred: boolean
}

export interface Address {
  streetAddress: string,
  city: string,
  state: string,
  postalCode: string,
  addressType: string,
}