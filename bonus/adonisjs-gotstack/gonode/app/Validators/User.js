'use strict'

class User {
  get rules () {
    return {
      // validation rules
      username: 'required|unique:users',
      email: 'required|email|unique:users',
      password: 'required|confirmed'
    }
  }
}

module.exports = User
