import pg from 'pg';
import "dotenv/config";

const { Pool } = pg;

export const pool = new Pool({
    user: "neondb_owner",
    host: "ep-delicate-field-a55rp2zd.us-east-2.aws.neon.tech",
    database: "neondb",
    password: "Ojw2P9spnKCV",
    port: 5432,
    ssl: true
});

import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
    "postgres://neondb_owner:Ojw2P9spnKCV@ep-delicate-field-a55rp2zd.us-east-2.aws.neon.tech:5432/neondb?sslmode=require"
);

try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
} catch (error) {
    console.error("Unable to connect to the database:", error);
}