'use strict'

const Route = use('Route')

Route.post('users', 'UserController.store')
Route.post('sessions', 'SessionController.store')

Route.post('passwords', 'ForgotPasswordController.store')
Route.put('passwords', 'ForgotPasswordController.update')

Route.get('/files/:id', 'FileController.show')

// rotas que serao chamadas somente se o usuario estiver logado
Route.group(() => {
  Route.post('/files', 'FileController.store')
  // crud routes -> adonis route:list to see them
  Route.resource('projects', 'ProjectController').apiOnly()
  // id do projeto
  Route.resource('projects.tasks', 'TaskController').apiOnly()
}).middleware(['auth'])
