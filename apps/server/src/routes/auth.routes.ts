import { Router } from 'express';
import passport from 'passport';

const router = Router();

router.get('/github', passport.authenticate('github', { scope: ['user:email', 'read:user'] }));


router.get(
  '/github/callback',
  passport.authenticate('github', { failureRedirect: 'http://localhost:5173/login' }),
  (req, res) => {
    
    res.redirect('http://localhost:5173/dashboard');
  }
);

export default router;