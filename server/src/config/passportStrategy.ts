import passport = require("passport");

const JwtStrategy = require("passport-jwt").Strategy;

const LocalStrategy = require("passport-local");

import { ExtractJwt, StrategyOptions } from "passport-jwt";

const secret = process.env.JWT_SECRET;

import { logic } from "../logic";

/**
 * Local Strategy
 * Auth login user (Routes)
 *
 * Passport put as default, User or Error in  req.user
 */
passport.use(new LocalStrategy((username: string, password: string, done: any) => {

    logic.user.verify(username, password)
        .then((user: any) => {

            if (!user) return done(undefined, Error("username or/and password wrong"));

            done(undefined, user);
        })
        .catch((err: Error) => done(undefined, Error("username or/and password wrong")));
}));

/**
 * JWT Strategy
 * Auth all methods File and Folder logic (Routes)
 *
 * Passport put as default, User or Error in  req.user
 */
const opts: StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: secret
};

passport.use(new JwtStrategy(opts, function (payload: any, done: any) {

    const { _id } = payload;

    logic.user.retrieve(_id)
        .then((user: any) => {

            if (!user) return done(undefined, Error("invalid token"));

            done(undefined, user);
        })
        .catch((err: Error) => done(undefined, Error("invalid token")));
}));