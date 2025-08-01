import fastifyHttpProxy from '@fastify/http-proxy';

export default async function (fastify) {
  fastify.register(fastifyHttpProxy, {
    upstream: process.env.USER_SERVICE_URL,
    prefix: '/user',
    rewritePrefix: ''
  });
}
