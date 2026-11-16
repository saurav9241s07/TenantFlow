const { Pool } = require("pg");
const env = require("./env");

// Create a PostgreSQL connection pool
const pool = new Pool({
    host: env.DB_HOST,
    port: env.DB_PORT,
    database: env.DB_NAME,
    user: env.DB_USER,
    password: env.DB_PASSWORD,

    // Connection pool configuration
    max: 10,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 5000
});

// Handle unexpected errors on idle connections
pool.on("error", (err) => {
    console.error("Unexpected PostgreSQL pool error:", err);
});

// Export the pool for use throughout the application
module.exports = pool;
