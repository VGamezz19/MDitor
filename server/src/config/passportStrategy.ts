import passport = require("passport");

const JwtStrategy = require("passport-jwt").Strategy;

const LocalStrategy = require("passport-local");

import { ExtractJwt, StrategyOptions } from "passport-jwt";

const secret = process.env.JWT_SECRET;

import { logic } from "../logic";

/**
 * JWT Strategy
 * Auth all methods File and Folder logic (Routes)
 */
const opts: StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: secret
};

passport.use(new JwtStrategy(opts, function (payload: any, done: any) {

    const { _id } = payload;

    logic.user.retrieve(_id)
        .then(user => done(undefined, user ? user : false))
        .catch(done);
}));

/**
 * Local Strategy
 * Auth login user (Routes)
 */
passport.use(new LocalStrategy((username: string, password: string, done: any) => {

    logic.user.verify(username, password)
        .then((user: any) => {

            if (!user) return done(undefined, false, { "status": "KO" });

            done(undefined, user);
        })
        .catch(done);
}));