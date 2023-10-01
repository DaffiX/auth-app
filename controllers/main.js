const User = require('../models/user');

exports.index = (req, res, next) => {
	res.send("Hello world");
};

exports.getSignup = (req, res, next) => {
	res.render('signup')
};

exports.postSignup = async (req, res, next) => {
	//the user register then redirext to login 
	const firstName = req.body.firstName;
	const lastName = req.body.lastName;
	const username = req.body.username;
	const email = req.body.email;
	const password = req.body.password;
	//validate
	//check if this exist in db
	// res.send(`Signup successfuly, Email: ${email}, ${username}, ${password}`);

	// console.log(req.body);
	//we need to save these data to db
	try {
		const newUser = await User.create({
			firstName,
			lastName,
			username,
			email,
			password,
		});

		// Redirect to the login page after successful registration
		res.redirect('/login');
	} catch (error) {
		console.error('Error creating user:', error);
		res.status(500).send('Registration failed');
	}
};

exports.getLogin = (req, res) => {
	res.render('login')
};

exports.postLogin = async (req, res) => {
	const email = req.body.email;
	const password = req.body.password;

	try {
		const user = await User.findOne({ where: { email } });

		if (!user) {
			// User not found
			return res.status(401).send('Invalid email or password');
		}

		if (password !== user.password) {
			// Passwords don't match
			return res.status(401).send('Invalid email or password');
		}

		// Authentication successful, you can set a session or JWT token here

		res.send(`Login successful. Welcome, ${user.username}!`);
		//   res.redirect('/dashboard');
	} catch (error) {
		console.error('Error during login:', error);
		res.status(500).send('Login failed');
	}
};

