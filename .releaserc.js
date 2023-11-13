const config = require("@tiwariav/semantic-release-config");

module.exports = {
  ...config,
  plugins: [
    ...config.plugins,
    "@semantic-release/github",
    "@semantic-release/npm",
  ],
};
