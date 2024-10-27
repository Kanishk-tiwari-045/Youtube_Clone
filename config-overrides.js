// config-overrides.js
module.exports = function override(config) {
    config.experiments = {
        topLevelAwait: true,
    };
    return config;
};
