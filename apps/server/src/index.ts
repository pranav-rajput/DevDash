// apps/server/src/index.ts
import express from 'express';
import connectDB from './config/db';
import authRoutes from './routes/auth.routes';

connectDB();
const app = express();
const PORT = process.env.PORT || 8000;

// ... other middleware later

// Routes
app.use('/api/auth', authRoutes);

app.get('/api', (req, res) => {
  res.send('Hello from the Backend!');
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
