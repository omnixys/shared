import { PhoneNumberDTO } from '../dtos/phone-number.dto.js';

export function getPrimaryPhoneNumber(phoneNumbers?: PhoneNumberDTO[]): string | undefined {
  if (!phoneNumbers || phoneNumbers.length === 0) {
    console.error('No phone numbers provided');
    return;
  }

  const primary = phoneNumbers.find((p) => p.isPrimary === true);

  const selected = primary ?? phoneNumbers[0];

  if (!selected.countryCode || !selected.number) {
    console.error('Invalid phone number data');
    return;
  }

  return `${selected.countryCode}${selected.number}`;
}