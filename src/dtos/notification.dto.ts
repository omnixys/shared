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
  seatId?: string;
}

export interface WhatsAppMessageDTO {
  key: string;
  value: {
    id: string;
    chatId: string;
    direction: string;
    from: string;
    to: string;
    body: string | null;
    createdAt: Date;
  };
}

export interface WhatsAppOutgoingDTO {
  messageId: string;
  to: string;
  message: string;
  retryCount?: number;
  createdAt?: string;
}

export interface WhatsAppRetryDTO {
  key: string;
  value: WhatsAppOutgoingDTO;
}

export interface WhatsAppDLQValueDTO extends WhatsAppOutgoingDTO {
  error: string;
  failedAt: string;
}

export interface WhatsAppDLQDTO {
  key: string;
  value: WhatsAppDLQValueDTO;
}