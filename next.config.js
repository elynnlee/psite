const debug = process.env.NODE_ENV !== "production";

module.exports = {
  basePath: !debug ? '/psite' : '',
  assetPrefix: !debug ? '/psite' : '',
};