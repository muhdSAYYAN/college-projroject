import mysql from "mysql2"

export const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"SAYYANsql@327",
    database:"amalclg"
});