const DEFAULT_PORT = 8080;

module.exports = {
  port: process.env.PORT || DEFAULT_PORT,
  searchServiceUrl: process.env.searchUrl || 'http://localhost:8081/'
};
