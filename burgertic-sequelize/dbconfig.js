import pg from 'pg'


const { Pool } = pg;


export const pool = new Pool({
    user: "neondb_owner",
    host: "ep-delicate-field-a55rp2zd.us-east-2.aws.neon.tech",
    database: "neondb",
    password: "Ojw2P9spnKCV" ,
    port: 5432,
    ssl: true
});

