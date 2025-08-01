import Fastify from 'fastify';
import dotenv from 'dotenv';
import cors from '@fastify/cors';

dotenv.config();

const fastify = Fastify({
  logger: {
    transport: {
      target: 'pino-pretty',
      options: { colorize: true },
    },
  },
});

await fastify.register(cors, {
  origin: '*',
});

await fastify.register(import('./plugins/jwt.js'));
await fastify.register(import('@fastify/rate-limit'), {
  max: 100,
  timeWindow: '1 minute',
});

// Register proxies
await fastify.register(import('./routes/auth.js'));
await fastify.register(import('./routes/user.js'));
await fastify.register(import('./routes/admin.js'));

// Start
const PORT = Number(process.env.PORT) || 8080;

fastify.listen({ port: PORT, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  
});
