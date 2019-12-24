const {
    env
} = process;
console.log(env.NODE_ENV);

const config = {
    env: env.NODE_ENV || 'development'
};

const devConfig = {
    db: 'mongodb://localhost:27017/todo-api',
    jwt_key: 'babylon'
};

const prodConfig = {
    // Atlas mongoDB
    db: 'mongodb+srv://dogFather2:todo-api@todo-api-xgjuk.mongodb.net/test?retryWrites=true&w=majority',
    jwt_key: 'babylon'
};

const currentConfig = config.env === 'production' ? prodConfig : devConfig;
module.exports = Object.assign({}, config, currentConfig);