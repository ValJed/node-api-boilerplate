module.exports = {
  server: {
    port: 7000,
    host: '0.0.0.0',
  },
  db: {
    uri: 'mongodb://localhost:27017/datastream',
    options: {
      useNewUrlParser: true,
    },
  },
  cors: {
    origin: '*',
    optionsSuccessStatus: 200,
    allowedHeaders: ['X-RR-Token', 'Content-Type', 'Accept'],
  },
  log: {},
}