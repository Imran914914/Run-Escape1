import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import https from 'https';
import fs from 'fs';

// Define __dirname manually
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// Example API endpoint
app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from the API!' });
});

app.set('trust proxy', true);

// Fallback for SPA routing
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// SSL options (Replace with your certificate paths)
const options = {
    key: fs.readFileSync("/root/private.key"), // Replace with your private key file path
    cert: fs.readFileSync("/root/root.crt"), // Replace with your certificate file path
};

// Start the HTTPS server
const PORT = process.env.PORT || 3001;
https.createServer(options, app).listen(PORT, () => {
    console.log(`HTTPS server running on https://localhost:${PORT}`);
});
