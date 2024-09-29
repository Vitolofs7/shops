module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "VICJB7m5",
    DB: "db_shops",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

// Si queremos cambiar de mysql a otra base de datos por ejemplo
// posgre, tendremos que cambiar la información