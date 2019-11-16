'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Project extends Model {
  // relacionamento project -> usuario
  user () {
    return this.belongsTo('App/Models/User')
  }

  // relacionamento project -> tarefa
  tasks () {
    return this.hasMany('App/Models/Task')
  }
}

module.exports = Project
