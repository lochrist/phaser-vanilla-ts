require.config({
    baseUrl: 'dist',

    paths: {
        'lodash': '../lib/lodash.min',
        'phaser': '../lib/phaser'
    },

    shim: {
    }
});

require(['main']);