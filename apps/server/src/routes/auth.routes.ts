// apps/server/src/routes/auth.routes.ts
import { Router } from 'express';

const router = Router();

// @desc    Auth with GitHub
// @route   GET /api/auth/github
router.get('/github', (req, res) => res.send('Redirecting to GitHub...'));

// @desc    GitHub auth callback
// @route   GET /api/auth/github/callback
router.get('/github/callback', (req, res) => res.send('Callback from GitHub!'));

export default router;
