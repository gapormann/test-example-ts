export abstract class HttpException extends Error {
  public statusCode: number;
  constructor(statusCode: number, errorMessage: string) {
    super(errorMessage)
    this.statusCode = statusCode;
  }
}

export class BadRequestException extends HttpException {
  constructor(errorMessage: string = 'Bad Request.') {
    super(400, errorMessage)
  }
}

export class UnauthorizedException extends HttpException {
  constructor(errorMessage: string = 'Unauthorized.') {
    super(401, errorMessage)
  }
}

export class ForbidenException extends HttpException {
  constructor(errorMessage: string = 'Forbiden.') {
    super(403, errorMessage)
  }
}

export class InternalException extends HttpException {
  constructor(errorMessage: string = 'Internal server error.') {
    super(500, errorMessage)
  }
}