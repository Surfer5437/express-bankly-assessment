app.js - file had 2 `module.exports = app;`
model/user.js - added "delete user.password;" so that the password isnt publicly accessible after check for password match.
model/user.js - removed username, password in the function call for User.getAll because it is unused.
