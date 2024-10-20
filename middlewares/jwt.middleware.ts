import passport from "passport";
import { ExtractJwt, Strategy, StrategyOptions } from "passport-jwt";
import { JWTPayloadType } from "../types";

// declare global {
//   namespace Express {
//     interface Request {
//       user: JWTPayloadType;
//     }
//   }
// }

const opts: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET as string,
};

const JWTStartegy = async (jwt_payload: JWTPayloadType, done: any) => {
  if (jwt_payload?._id) {
    return done(null, jwt_payload);
  }
  return done(null, false);
};

passport.use(new Strategy(opts, JWTStartegy));

export { passport };
