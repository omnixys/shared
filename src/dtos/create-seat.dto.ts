export interface CreateSeatDTO {
  eventId: string;
  maxSeats: number;
  actorId: string;
}

export interface CreateSeatMessageDTO {
  payload: CreateSeatDTO
}
