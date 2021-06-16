module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env("QOVERY_DATABASE_PSQL_HOST", "localhost"),
        port: env.int("DATABASE_PORT", 5432),
        database: env("QOVERY_DATABASE_PSQL_DATABASE", "strapi"),
        username: env("QOVERY_DATABASE_PSQL_USERNAME", "strapi"),
        password: env("QOVERY_DATABASE_PSQL_PASSWORD", "strapi"),
        schema: env("DATABASE_SCHEMA", "public"), // Not Required
        ssl: {
          rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false), // For self-signed certificates
        },
      },
      options: {},
    },
  },
});
