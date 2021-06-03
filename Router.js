class Router {

    constructor(app,db) {
        this.login(app,db);
        this.logout(app,db);
        this.isLoggedIn(app,db);
    }

    login(app,db) {

        app.post('/login', (req,res) => {
            let username = req.body.username;
            let password = req.body.password;

            if (username.length > 12 || password.length > 12) {
                res.json({
                    success: false,
                    msg: 'An errors occured, please try again'
                })
                return;
            }

            let cols = [username];
            db.query('SELECT * FROM Users WHERE userID = ? LIMIT 1', cols, (err, data, fields) => {
                if (err) {
                    res.json({
                        success: false,
                        msg: 'No username found, please try again'
                    })
                    return;
                }

                if (data && data.length === 1) {
                    if (data[0].passWord === password) {
                        req.session.userID = data[0].userID;
                        res.json({
                            success: true,
                            username: data[0].userID
                        })
                        return;

                    } else {
                        res.json({
                            success: false,
                            msg: 'Incorrect password, please try again'
                        })
                    }
                } else {
                    res.json({
                        success: false,
                        msg: 'User not found, please try again'
                    })
                }
            });
        });
    }


    logout(app,db) {
        app.post('/logout', (req,res) => {

            if (req.session.userID) {
                req.session.destroy();
                res.json({
                    success: true,
                })

                return true;
            } else {
                res.json({
                    success: false
                });

                return false;
            }
        });
    }

    isLoggedIn(app,db) {
        app.post('/isLoggedIn', (req, res) => {

            if (req.session.userID) {
                
                let cols = [req.session.userID];
                db.query('SELECT * FROM Users WHERE userID = ? LIMIT 1', cols, (err, data, fields) => {
                    if (data && data.length === 1) {
                        
                        req.json({
                            success: true,
                            username: data[0].userID
                        })

                        return true;
                    
                    } else {
                        req.json({
                            success: false
                        })
                    }
                });
            } else {
                res.json({
                    success: false
                })

                return false;
            }
        })
    }

}

module.exports = Router;