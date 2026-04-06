import { EventActionDTO, EventIdDTO } from './event.dto.js';
import { ActorIdDTO, PublicPlusOneDTO, UserIdDTO } from './user.dto.js';

export interface CreateSeatDTO extends ActorIdDTO, EventIdDTO {
  maxSeats: number;
}

export interface AddGuestToSeatDTO extends ActorIdDTO, EventIdDTO, UserIdDTO {
  seatId: string;
  note?: string;
}


export interface AddGuestToSeatDTO extends ActorIdDTO, EventIdDTO, UserIdDTO {
  seatId: string;
  note?: string;
}


export interface GuestSeatKey extends ActorIdDTO {
  eventId: string;

  assignments: Array<{
    invitationId: string;
    seatId?: string;
    note?: string;
  }>;
}