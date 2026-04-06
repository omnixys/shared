import { TokenDTO } from './token.dto.js';
import { UserIdDTO } from './user.dto.js';

export interface UserCredentialsDTO extends UserIdDTO {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  invitationId?: string;
}

export interface GuestNotificationDTO extends TokenDTO {
  eventName: string;
  seat?: string;
  seatId?: string
}