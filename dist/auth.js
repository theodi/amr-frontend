const auth = require('basic-auth')

const admin = {
	'amrinitiative': { password: 'amr2018'}
}

module.exports = function(req, res, next) {

	const user = auth(req)
	if (!user || !admin[user.name] || admin[user.name].password !== user.pass) {
    res.set('WWW-Authenticate', 'Basic realm="example"');
    return res.status(401).send();
  }
  return next();
}
