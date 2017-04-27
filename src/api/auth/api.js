const crypto = require('crypto');
const Config = require('../../config.js');
const Cypher = crypto.createHmac('sha256', 'smarto_api');
const _ = require('lodash');

class Authenticator {
  constructor() {
    this.users = [Config.user];
  }

  create(user) {
    return new Promise((resolve, reject) => {
      if(_.find(this.users, { name: user.name })) {
        reject('User exists');
      } else {
        this.users.push(user);
        resolve(true);
      }
    });
  }

  auth(user) {
    return new Promise((resolve, reject) => {
      this.users.forEach((usr) => {
        if(usr.name === user.name) {
          if(usr.password === user.password) {
            resolve(true);
          }
        }
      });

      reject('Authentication failed.');
    });
  }
}

module.exports = Authenticator;