module.exports = {
    TOKEN_SECRET: process.env.TOKEN_SECRET || 'my-precious',
    MONGO_URI: process.env.MONGOLAB_URI || 'mongodb://localhost:27017/bipo',
    SALT_WORK_FACTOR: 10,

};