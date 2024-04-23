import {
  BadRequestError,
  InternalServerError,
  NotFoundError,
  ForbiddenError,
} from '../errors';

import { SystemResponseCodeEnum } from './SystemResponseCodeEnum';

export class ErrorFactory {
  public static createErrorByCode (code: number, message: string): Error {
    let error: Error;
    switch (code) {
      case SystemResponseCodeEnum.BAD_REQUEST:
        error = new BadRequestError(message);
        break;
      case SystemResponseCodeEnum.FORBIDDEN:
        error = new ForbiddenError(message);
        break;
      case SystemResponseCodeEnum.NOT_FOUND:
        error = new NotFoundError(message);
        break;
      case SystemResponseCodeEnum.INTERNAL_SERVER_ERROR:
        error = new InternalServerError(message);
        break;
      default:
        error = Error(message);
    }

    return error;
  }
}
