import fastifyHttpProxy from '@fastify/http-proxy';

export default async function (fastify) {
  fastify.register(fastifyHttpProxy, {
    upstream: process.env.AUTH_SERVICE_URL,
    prefix: '/auth',
    rewritePrefix: '',
  });
}
