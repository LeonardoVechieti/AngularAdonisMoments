import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/', async () => {
    return { hello: 'world' }
  })

  Route.resource('/moments', 'MomentsController').apiOnly()
  Route.post('/moments/:momentId/comments', 'CommentsController.store')
}).prefix('/api')
