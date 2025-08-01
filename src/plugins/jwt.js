import fp from 'fastify-plugin';
import fastifyJWT from 'fastify-jwt';

export default fp(async (fastify) => {
  fastify.register(fastifyJWT, {
    secret: process.env.JWT_SECRET,
  });

  fastify.decorate('authenticate', async (request, reply) => {
    try {
      await request.jwtVerify();
    } catch {
      reply.status(401).send({ error: 'Unauthorized' });
    }
  });
});
