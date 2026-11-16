
const app = require("./app");
const env = require("./config/env");

// Get the port from environment configuration
const PORT = env.PORT || 3000;

// Start the HTTP server
const server = app.listen(PORT, () => {
    console.log(`TenantFlow server running on port ${PORT}`);
});

// Handle server startup errors
server.on("error", (error) => {
    console.error("Server startup failed:", error.message);
    process.exit(1);
});
