var Config = {
  binding: process.env.SERVER_BINDING || '0.0.0.0',
  address: process.env.SERVER_ADDR || '192.168.99.100',
  port: process.env.SERVER_PORT || '80',
  endpoint: process.env.SERVER_ENDPOINT || 'ws',
  serverUri: function() {
    return 'http://' + this.address + ':' + this.port + '/' + this.endpoint;
  }
};

module.exports = Config;
