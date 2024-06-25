import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as GoogleStrategy } from "passport-google-oauth2";
//import usersManager from "../data/mongo/UsersManager.mongo.js";
import { createHash, verifyHash } from "../utils/hash.util.js";
import { createToken } from "../utils/token.util.js";
import UsersDTO from "../dto/users.dto.js";
import authRepository from "../repositories/auth.rep.js";

passport.use(
  "register",
  new LocalStrategy(
    { passReqToCallback: true, usernameField: "email" },
    async (req, email, password, done) => {
      try {
        let user = await authRepository.readByEmailRepository(email);
        if (user) {
          const error = new Error("Invalid credentials");
          error.statusCode = 400;
          return done(error);
        }
        const data = new UsersDTO(req.body);
        user = await authRepository.create(data);
        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);
passport.use(
  "login",
  new LocalStrategy(
    { passReqToCallback: true, usernameField: "email" },
    async (req, email, password, done) => {
      try {
        const one = await authRepository.readByEmailRepository(email);
        if (!one) {
          const error = new Error("Invalid credentials");
          error.statusCode = 400;
          return done(error);
        }
        const verify = verifyHash(password, one.password);
        if (!verify) {
          const error = new Error("Invalid credentials");
          error.statusCode = 400;
          return done(error);
        }
        delete one.password;
        const token = createToken({ email: one.email, role: one.role });
        req.token = token;
        return done(null, one);
      } catch (error) {
        return done(error);
      }
    }
  )
);
passport.use(
  "google",
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:8080/api/sessions/google/callback",
      passReqToCallback: true,
    },
    async (req, accesToken, refreshToken, profile, done) => {
      try {
        //profile es el objeto que devuelve google con todos los datos del usuario
        //nosotros vamos a registrar un id en lugar de un email
        const { id, picture } = profile;
        console.log(profile);
        //let user = await usersManager.readByEmail(id);
        if (!user) {
          user = {
            email: id,
            password: createHash(id),
            photo: picture,
          };
          //user = await usersManager.create(user);
        }
        req.session.email = user.email;
        req.session.online = true;
        req.session.role = user.role;
        req.session.photo = user.photo;
        req.session.user_id = user._id;
        //const token = createToken(data)
        //req.token = token
        //cuando llegan al controller setean la cookie con req.token
        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);

export default passport;
