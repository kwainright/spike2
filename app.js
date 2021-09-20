const Koa = require('koa');
const app = new Koa();

const db = require('./db');
const myDb = new db();

app.use(async ctx => {
  const results = await myDb.queryAll();
  console.log(results);
  ctx.body = results;
});

app.listen(3000);