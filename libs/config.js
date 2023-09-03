
const config = {  
    database: 'task-db',
    username: '',
    password: '',
    params: {
        dialect: 'sqlite',
        storage: 'task-db.sqlite',
        // databaseVersion: '3.43.0',
        define: {
            underscored: true
        }
    },
    jwtSecret: 'chavesecretaparaencodedecodetokenshahahahahahaha',
    jwtSession: {session: false}
};

module.exports = config;