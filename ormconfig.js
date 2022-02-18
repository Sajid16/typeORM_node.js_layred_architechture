function getOrmConfig() {

   const nodeEnv = "prod";
   const DB_TYPE = "mysql";

   // conf for Oracle database
   if (DB_TYPE === "mysql") {

       let ormConf = {
         "type": "mysql",
         "host": "localhost",
         "port": 3306,
         "username": "root",
         "password": "",
         "database": "assignment-task",
         "synchronize": true,
         "logging": false,
         "entities": [
            "build/entity/*.js"
         ],
         "migrations": [
            "migration/*.js"
         ],
         "subscribers": [
            "src/subscriber/**/*.ts"
         ],
         "cli": {
            "entitiesDir": "src/entity",
            "migrationsDir": "src/migration",
            "subscribersDir": "src/subscriber"
         }

         //   "type": "oracle",
         //   "username": "SYSTEM",
         //   "password": "remit@12345",
         //   "connectString": "10.11.201.92/XEPDB1",
         //   "entities": [
         //       "build/entity/*.js"
         //   ],
         //   "migrations": ["migration/*.js"],
         //   "cli": {
         //       "migrationsDir": "migration"
         //   },
         //   "logging": false,
         //   "synchronize": false
       }

       if (nodeEnv === "dev") {
           ormConf.entities[0] = "src/entity/**/*.ts";
           //ormConf.logging = true;
           ormConf.synchronize = true;
       }

       return ormConf;
   }

}

module.exports = getOrmConfig();