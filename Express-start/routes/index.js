const userRouter = require('./user')
const goodsRouter = require('./goods')

module.exports = function (app) {
  app.use('/user', userRouter)
  app.use('/goods', goodsRouter)
}