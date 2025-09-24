// apps/server/src/index.ts
import express from 'express';
import connectDB from './config/db';

// Connect to database
connectDB();

const app = express();
const PORT = process.env.PORT || 8000;

app.get('/api', (req, res) => {
  res.send('Hello from the Backend!');
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});