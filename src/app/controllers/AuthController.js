import authAd from '../config/auth';
import authConfig from '../config/authConfig';
import jwt from 'jsonwebtoken';

class Auth {
    async login(req, res) {
        const { username, password } = req.body;
        //transform username to username@domain
        const usernamedomain = `${username}@domain.com`

        authAd.authenticate(usernamedomain, password, function (err, auth) {
            res.json({ auth, username });
        });
    }

    async loginGroup(req, res) {
        const { username, groupName, password } = req.body;
        //transform username to username@domain
        const usernamedomain = `${username}@domain.com`
        let login = null;
    
        authAd.authenticate(usernamedomain, password, function (err, auth) {
            if (auth) {
                login = auth;
                authAd.isUserMemberOf(username, groupName, function(err, isMember) {
                    if (isMember) {
                        res.json({ 
                            user: {
                                login, 
                                isMember, 
                                groupName, 
                                username, 
                            },
                            token: jwt.sign({ username }, authConfig.secret, {
                                expiresIn: authConfig.expiresIn,
                              }),
                        });
                        console.log(authAd);
                    }
                    else {
                        return res.status(401).json({ error: 'Invalid data entered.' });
                    }
                   
                });
            }
            else {
                return res.status(401).json({ error: 'Invalid data entered.' });
            }
            
        });
        
    }

}

export default new Auth();