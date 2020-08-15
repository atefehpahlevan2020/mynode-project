const database = require('./database');
const session = require('./session');
const layout = require('./layout');
const service = require('./service');

module.exports = {
    database,
    session,
    layout,
    service,
    port : process.env.APPLICATION_PORT,
    cookie_secretkey : process.env.COOKIE_SECRETKEY,
    debug : true,
    siteurl : process.env.WEBSITE_URL,
    jwt : {
        secret_key : 'fkdm$$*(*#gkjg5t0565-5050504'
    }
}