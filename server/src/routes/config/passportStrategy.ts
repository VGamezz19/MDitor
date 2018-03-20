import passport from "passport";
import { User } from "../../models/User";
import { CallbackHandler } from "supertest";

const LocalStrategy = require("passport-local");

const secret = process.env.JWT_SECRET;

export const strategyUser = passport.use(
    new LocalStrategy(
        function (username: string, password: string, done: any): void {

            User.findOne({ username, password })
                .then(user => {

                    if (!user) return done(undefined, false);

                    done(undefined, user);
                })
                .catch(done);
        }
    )
);