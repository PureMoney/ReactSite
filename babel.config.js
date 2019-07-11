/* eslint func-names: 0 */
module.exports = function(api) {
    const config = {
        presets: ['@babel/preset-react', '@babel/preset-typescript'],
        plugins: ['@babel/plugin-proposal-class-properties'],
    };

    // If test environment, transpile to commonjs so that node can run it.
    if (api.env() === 'test') {
        config.presets.push([
            '@babel/preset-env',
            {
                targets: {
                    node: 'current',
                },
            },
        ]);

        // If browser, leave it as es6 modules
    } else {
        config.presets.push([
            '@babel/preset-env',
            {
                modules: false,
                useBuiltIns: 'usage',
                targets: {
                    browsers: 'defaults',
                },
            },
        ]);
    }

    return config;
};
