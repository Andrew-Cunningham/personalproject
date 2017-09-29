require('dotenv').config();
const express=require('express'),
        bodyParser=require('body-parser'),
        massive= require('massive'),
        session= require('express-session'),
        passport= require('passport'),
        Auth0Strategy= require('passport-auth0'),
        cors=require('cors');

const app= express();
app.use(session({
    secret: process.env.SECRET,
    resave:false,
    saveUninitialized: true
}))
app.use(passport.initialize());
app.use(passport.session());
app.use( bodyParser.json() );
app.use(cors());

massive(process.env.CONNECTION_STRING)
.then( db=>{
    app.set('db',db);
    const port= 3535;
    app.listen(port, ()=>console.log('listening on port: ', port))
})

passport.use(new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL:process.env.AUTH_CALLBACK
},function(accessToken, refreshToken, extraParams, profile, done){

    const db=app.get('db');
     console.log('id',profile.identities[0].user_id)

    db.get_user([profile.identities[0].user_id]).then(user=>{
         console.log('hello', user)
        if (user[0]){
            done(null, user[0].id)
        } else{
           db.create_user([profile.displayName, profile.emails[0].value, 
            profile.picture, profile.identities[0].user_id]).then (user=>{
                done(null, user[0].id)
            }) 
        }
    }).catch(err=>console.log('err', err))
    
    
}))

passport.serializeUser(function(userId, done){
    console.log('serialize', userId)
    done(null, userId)
})

passport.deserializeUser(function(userId, done){
    console.log('deserialize');
    app.get('db').current_user([userId]).then( user=>{
        done(null, user[0]);
    })
})

app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0',{
    successRedirect:'http://localhost:3000/#/home',
    failureRedirect:'/'
}));


app.get('/auth/user', (req, res)=>{
    console.log('req.user', req.user);
    console.log('session', req.session);
    
    
    if (!req.user){
        return res.status(404).send('User not found')

    }else {
        return res.status(200).json(req.user);
    }
})

app.get('/auth/logout', (req,res)=>{
    req.logOut();
    res.redirect(302, 'http://localhost:3000')
})

app.post('/chore/name', (req,res)=>{      
    const dbInstance = req.app.get('db');
    console.log(req.user.id)

    dbInstance.create_chores([req.body.choreName, req.user.id]).then(function(response){
        res.send('okay')
    })

})

app.get('/chores/name', (req, res)=>{
    const dbInstance = req.app.get('db');
    // console.log('req.chores', req.chores);
    // console.log('session', req.session);
    
    
    dbInstance.get_chores().then(function(response){
        res.send(response)
    })
})
app.put('/chores/progress/:id', (req, res)=>{
    const dbInstance = req.app.get('db'); 
    dbInstance.update_progress(req.params.id).then(function(response){
        res.send(response)
    })
})





