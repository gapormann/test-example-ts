import { FastifyInstance } from 'fastify';
import { ZodError } from 'zod';
import { HttpException } from './http-exceptions';

type FastifyErrorHandler = FastifyInstance['errorHandler']
export const errorHandler: FastifyErrorHandler = ( error, request, reply ) => {
  if (error instanceof ZodError)
    return reply.status(400).send({
      message: `Error during validation`,
      errors: error.flatten().fieldErrors,
    })
  if (error instanceof HttpException)
    return reply.status(error.statusCode).send({ message: error.message })
  return reply.status(500).send({ message: 'Internal server error.' })
}