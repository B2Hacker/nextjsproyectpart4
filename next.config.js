require('dotenv').config()

module.exports = {
    env: {
        MY_STEP: process.env.STEP,
        API_ENDPOINT: '/myapi/version/1'
    },
    serverRuntimeConfig: {
        // Will only be available on the server side
        MY_SECRET: process.env.MY_SECRET,
    },
    publicRuntimeConfig: {
        // Will be available on both server and client
        API_ENDPOINT: '/myapi/version/1',
    },
}