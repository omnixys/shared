import { TokenDTO } from './token.dto.js';
import { UserIdDTO } from './user.dto.js';

export interface CreateUserAddressDTO extends UserIdDTO, TokenDTO {}

export interface EventAddress {
  street?: string;
  houseNumber?: string;
  postalCode?: string;
  city: string;
  state?: string;
  country: string;
  eventType?: string;
  additionalInfo?: string;
}
