const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const usuario = require('../modelos/user');

passport.serializeUser((usuario, done)=>{
    done(null, usuario._id);
})

passport.deserializeUser((id, done)=>{
    usuario.findById(id,(err,usuario)=>{
        done(err,usuario)
    })
})

passport.use(new LocalStrategy(
    {usernameField: 'email'},
    (email, password, done)=>{
        usuario.findOne({email},(err, usuario)=>{
            if(!usuario){
                return done(null,false, {message: 'este email ${email} no esta registrado'}); 
            } else {
                usuario.compararPassword(password, (err,sonIguales) =>{
                    if(sonIguales){
                        return done(null, usuario)
                    } else {
                        return done(null, false, {message: 'la contraseña no es válida'})
                    }
                })
            }
        })
    }
))

exports.estaAutenticado = (req, res, next) => {
    if (req.isAuthenticated()){
        return next();
    }
    res.status(401).send('Tienes que hacer login')
}