export default () => ({
    env: process.env.NODE_ENV,
    port: parseInt(process.env.PORT, 10) || 5555,
    frontURL: process.env.FRONT_END_URL,
    baseURL: process.env.BASE_URL,
    jwt: {
        access: {
            secret: process.env.JWT_ACCESS_SECRET,
            expiresIn: process.env.JWT_ACCESS_EXPIRES_IN,
        },
        refresh: {
            secret: process.env.JWT_REFRESH_SECRET,
            expiresIn: process.env.JWT_REFRESH_EXPIRES_IN,
        },
        reset: {
            secret: process.env.JWT_RESET_SECRET,
            expiresIn: process.env.JWT_RESET_EXPIRES_IN,
        }
    },
    database: {
        mongoConnectionString: process.env.MONGO_CONNECTION_STRING
    },

});
