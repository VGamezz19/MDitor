import passport from "passport";
import { User } from "../../models/User";
import { CallbackHandler } from "supertest";

const LocalStrategy = require("passport-local");
const { Strategy: JwtStrategy, ExtractJwt } = require("passport-jwt");

const secret = process.env.JWT_SECRET;

export const strategyUser = passport.use(
    new JwtStrategy(
        {
            secretOrKey: secret,
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
        },
        (payload: any, done: any) => {
            const { id } = payload;

            User.findById(id)
                .then(user => done(undefined, user ? user : false))
                .catch(done);
        }
    )
);