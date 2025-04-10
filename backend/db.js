import mysql from "mysql";

export const db = mysql.createConnection({ //NESTOR SEMPRE VEJA ISSO AQUI PRA CONECTAR SEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
    host: "localhost",
    user: "root",
    password: "",
    database: "crud"
});