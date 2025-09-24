import express from 'express';
import session from 'express-session';
import passport from 'passport';
import connectDB from './config/db';
import authRoutes from './routes/auth.routes';
import dotenv from 'dotenv';


dotenv.config();
import './config/passport'; 


connectDB();
const app = express();
const PORT = process.env.PORT || 8000;


app.use(
  session({
    secret: process.env.SESSION_SECRET as string, 
    resave: false, 
    saveUninitialized: false, 
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use('/api/auth', authRoutes);

app.get('/api', (req, res) => {
  res.send('Hello from the DevDash Backend!');
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
