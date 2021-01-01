module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 800),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '276dff7dd64b60635862bb9a48afbc5e'),
    },
  },
});
