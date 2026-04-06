import { HttpException, HttpStatus } from '@nestjs/common';
interface Props {
  retryAfterSeconds?: number;
  message?: string;
}

export class TooManyRequestsException extends HttpException {
  constructor({
    retryAfterSeconds = 3600,
    message = 'Too many requests',
  }: Props) {
    super(
      {
        message,
        retryAfter: retryAfterSeconds,
      },
      HttpStatus.TOO_MANY_REQUESTS,
    );
  }
}

// // import { HttpStatus } from '@nestjs/common';
// // import { GraphQLError } from 'graphql';

// import { BadRequestException } from "@nestjs/common";

// // interface Props {
// //   retryAfterSeconds?: number;
// //   message?: string;
// // }

// // export class TooManyRequestsException extends GraphQLError {
// //   constructor({
// //     retryAfterSeconds = 3600,
// //     message = 'Too many requests',
// //   }: Props) {
// //     super(message, {
// //       extensions: {
// //         code: 'RATE_LIMIT_EXCEEDED',
// //         http: {
// //           status: HttpStatus.TOO_MANY_REQUESTS,
// //         },
// //         retryAfterSeconds,
// //       },
// //     });
// //   }
// // }

// export class TooManyRequestsException extends BadRequestException {
//   constructor() {
//     super({
//       code: 'RATE_LIMIT_EXCEEDED',
//       message: 'Too many requests',
//       errorId: 429
//     });
//   }
// }

// export class OmnixysException extends GraphQLError {
//   constructor(
//     message: string,
//     code: string,
//     status: number,
//     extensions?: Record<string, unknown>,
//   ) {
//     super(message, {
//       extensions: {
//         code,
//         http: { status },
//         ...extensions,
//       },
//     });
//   }
// }