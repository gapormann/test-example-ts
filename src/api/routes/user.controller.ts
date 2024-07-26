import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import z from 'zod';

export async function userController(app: FastifyInstance) {
  app.get('/', async (request, reply) => {
    reply.status(200).send({ test: 'OK' })
  })
  app
    .withTypeProvider<ZodTypeProvider>()
    .get('/:id', {
      schema: {
        params: z.object({
          id: z.coerce.number().int(),
        }),
        response: {
          200: z.object({ id: z.number().int(), name: z.string() })
        }
      }
    },async (request, reply) => {
      const { id } = request.params
      reply.status(200).send({ id, name: 'Gabriel' })
    })
}