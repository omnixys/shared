import { HttpException, HttpStatus } from '@nestjs/common';

export class TooManyRequestsException extends HttpException {
  constructor(retryAfterSeconds = 3600) {
    super(
      {
        message: 'Too many requests',
        retryAfter: retryAfterSeconds,
      },
      HttpStatus.TOO_MANY_REQUESTS
    );
  }
}