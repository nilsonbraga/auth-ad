import ActiveDirectory from 'activedirectory';
//File for configuring Active Directory connection data

const config = {
    url: 'ldap://00.00.0.00', //'ldap://your AD ip address'
    baseDN: '', //'dc=domain,dc=com'
    username: '', //'username@domain.com'
    password: '',
};

const ad = new ActiveDirectory(config);


module.exports = ad;