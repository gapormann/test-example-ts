import fastify from 'fastify'
import { fastifyCors } from '@fastify/cors'
import { 
  serializerCompiler,
  validatorCompiler,
  jsonSchemaTransform,
} from 'fastify-type-provider-zod'
import { errorHandler } from './error-handler'
import { userController } from './routes/user.controller'

const app = fastify({ logger: false })
app.register(fastifyCors, { origin: '*' })
app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(userController, { prefix: '/users' })

app.setErrorHandler(errorHandler)

app.listen({ port: 3000, host: '0.0.0.0' }).then(() => {
  console.log('App is running')
})

export { app }
