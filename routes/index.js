/**
 * @file routes
 * @author littlewin(littlewin.wang@gmail.com)
 */

const router = require('koa-router')()
const User = require('controllers/user')
const Category = require('controllers/category')
const middleware = require('middlewares')

router
  .get('/', (ctx) => {
    ctx.body = {
      title: "littlewin.server API",
      version: "v1",
      author: "littlewin.wang@gmail.com"
    }
  })
  .post('/login', User.login)
  .post('/user', middleware.verifyToken, User.create)

  .post('/category', Category.create)
  .get('/category', Category.list)
  .get('/category/:id', Category.get)
  .put('/category/:id', Category.modify)
  .delete('/category/:id', Category.delete)

module.exports = router