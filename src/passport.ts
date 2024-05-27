var bcrypt = require('bcryptjs');

export const generateHash = (password: string) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

export const authFlow = (user, passport) => {
    var User = user;
    var LocalStrategy = require('passport-local').Strategy;
    passport.use(
        'local-signup',
        new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true,
        }),
    );
};
