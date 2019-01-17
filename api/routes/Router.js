import RegEx from "./../lib/RegEx";

const Router = (app, Drivers) => {
	app.get("/verify", (req, res, next) => {
		Drivers.TSQL.ConnectionPool(res, `SELECT SYSUTCDATETIME() AS 'Now', DATEADD(DAY, 1, GETDATE()) AS 'Tomorrow'`);
	});

	app.get("/auth/:uid/:pw", (req, res, next) => {
		let uid = req.params.uid,
			pw = req.params.pw;
			
		Authentication.Attempt(uid, pw).then((obj) => {
			res.json(obj);
		});
	});
	app.post("/auth", (req, res, next) => {
		let uid = req.body.uid,
			pw = req.body.pw;
			
		Authentication.Attempt(uid, pw).then((obj) => {
			res.json(obj);
		});
	});

	app.ws("/ws", function (client, req) {
		client.on("connection", function(conn) {});

		client.on("message", function(msg) {
			const message = JSON.parse(msg);
			
			console.log(message);
		});

		client.on("close", function() {});
	});
};

const Authentication = {
	Attempt: async (uid, pw) => {
		let token = await `${ uid }${ pw }${ Date.now() }`;

		return {
			Token: token
		};
	}
};

export default Router;