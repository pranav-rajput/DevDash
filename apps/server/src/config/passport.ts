import { Strategy as GitHubStrategy } from 'passport-github2';
import passport from 'passport';
import { User, IUser } from '../models/user.model';
import dotenv from 'dotenv';

dotenv.config();

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
      callbackURL: '/api/auth/github/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
      // function  called after user authorizes on GitHub
      console.log('GitHub Profile:', profile);
      const newUser = {
        githubId: profile.id,
        username: profile.username || profile.displayName,
        avatarUrl: profile.photos?.[0].value || '',
      };

      try {
        let user = await User.findOne({ githubId: profile.id });

        if (user) {
          // User exists already
          done(null, user);
        } else {
          // Create a new user
          user = await User.create(newUser);
          done(null, user);
        }
      } catch (err) {
        console.error(err);
        done(err, undefined);
      }
    }
  )
);

// saves userid to session
passport.serializeUser((user, done) => {
  done(null, (user as IUser).id);
});

//retrieves user from the database using ID from session
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});
