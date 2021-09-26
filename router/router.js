'use strict';
const router = require('koa-router')();
const send = require('koa-send');

const db = require('../db');
const myDb = new db();

// router.get('/react', async (ctx, next) => {
//     console.log('inside route');
//     ctx.state = {
//         title: 'test'
//     };
// 	await ctx.render('index', {
// 		// version: stats.appVersion,
// 		// commit: stats.appCommit,
// 		// STYLE_URL: STYLE_URL,
// 		// SCRIPT_URL: SCRIPT_URL_APP
// 	});
// });

// var views = require('koa-views');
// const render = views( 'views', {
// 	map: {
// 	  html: 'underscore'
// 	}
//   });

// router.use(render);  
// router.get('/', async function (ctx, next) {
//     console.log('inside router');
// 	ctx.state = {
// 		title: 'koa2 title'
// 	};
	
// 	await ctx.render('index', {
// 		user: 'kaleb'
// 	});
//     // ctx.body = await render("index");
// });

router.get('/', async (ctx, next) => {
	try {
		await send(ctx, './react-app/build/index.html');
	} catch(err) {
		console.log('error in / route');
		return next();
	}
});

router.get('/fetchAll', async (ctx, next) => {
	try {
		const results = await myDb.queryAll();
		console.log(results);
		ctx.body = results;
	} catch(err) {
		// TODO: handle err?
		return next();
	}
});

module.exports = router;