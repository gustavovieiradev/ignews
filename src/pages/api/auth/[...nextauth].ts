import { query as q } from 'faunadb';
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

import { fauna } from '../../../services/fauna';

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      scope: 'read:user'
    }),
  ],
  jwt: {
    signingKey: process.env.JWT_SINGIN_KEY
  },
  callbacks: {
    async signIn(user, account, profile) {
      const { email } = user;

      console.log(email);

      try {
        await fauna.query(
          q.Create(
            q.Collection('users'),
            { data: { email } }
          )
        )
        return true;
      } catch(err) {
        console.log(err);
        return false;
      }
    }
  }
})