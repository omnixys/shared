import { TokenDTO } from './token.dto.js';
import { ActorIdDTO, PublicPlusOneDTO, UserIdDTO } from './user.dto.js';

export interface EventIdDTO {
  eventId: string;
}

export interface EventIdsDTO {
  eventIds: string[];
}

export interface EventCancelNotificationDTO extends EventIdsDTO {
  admins: string[];
  security: string[];
  guests: string[];
}

export interface EventActionDTO extends EventIdDTO, ActorIdDTO {}

export interface GuestEventKey extends ActorIdDTO {
  eventId: string;

  /**
   * Only references → no duplication
   */
  invitationIds: string[];
}