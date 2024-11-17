import pg from 'pg';
import "dotenv/config";
import { Sequelize } from "sequelize";

const { Pool } = pg;

export const pool = new Pool({
    user: "neondb_owner",
    host: "ep-delicate-field-a55rp2zd.us-east-2.aws.neon.tech",
    database: "neondb",
    password: "Ojw2P9spnKCV",
    port: 5432,
    ssl: true
});

export const sequelize = new Sequelize(
    'neondb', // database name
    'neondb_owner', // username
    'Ojw2P9spnKCV', // password
    {
        host: 'ep-delicate-field-a55rp2zd.us-east-2.aws.neon.tech',
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false // You might need to adjust this based on your SSL configuration
            }
        }
    }
);

try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
} catch (error) {
    console.error("Unable to connect to the database:", error);
}