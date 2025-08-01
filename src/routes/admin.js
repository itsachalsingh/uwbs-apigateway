import fastifyHttpProxy from '@fastify/http-proxy';

export default async function (fastify) {
  fastify.register(fastifyHttpProxy, {
    upstream: process.env.ADMIN_SERVICE_URL,
    prefix: '/admin',
    rewritePrefix: ''
  });
}
