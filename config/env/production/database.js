module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: "ec2-54-73-58-75.eu-west-1.compute.amazonaws.com",
        port: env.int("DATABASE_PORT", 5432),
        database: "d191b9blbbdp3g",
        username: "drldaklludevat",
        password:
          "44be89ba33454ce8c82f6153fa17fd0e2fe09a7af520900b0bfe0f72558305ce",
        schema: env("DATABASE_SCHEMA", "public"), // Not Required
        ssl: {
          rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false), // For self-signed certificates
        },
      },
      options: {
        ssl: true,
      },
    },
  },
});
