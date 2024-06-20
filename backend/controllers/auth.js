const User = require("../models/user");
const bcrypt = require("bcrypt");

// module.exports.renderRegister = (req, res) => {
//   res.render("users/register");
// };

module.exports.register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    console.log(name, email, password);const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({ name, email, password: passwordHash });
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);

    // req.login(registeredUser, (err) => {
    //   if (err) return next(err);
    //   req.flash("success", "Welcome to Campedia!");
    //   res.redirect("/campgrounds");
    // });
  } catch (e) {
    res.status(500).json({ error: e.message });
    // res.redirect("register");
  }
};

// module.exports.renderLogin = (req, res) => {
//   res.render("users/login");
// };

module.exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) return res.status(400).json({ msg: "User does not exist. " });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " });

    // const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    delete user.password;
    res.status(200).json({ user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }

  // req.flash("success", "welcome back!");
  // const redirectUrl = req.session.returnTo || "/campgrounds";
  // delete req.session.returnTo;
  // res.redirect(redirectUrl);
};

// module.exports.logout = (req, res) => {
//   req.logout(function () {
//     res.redirect("/campgrounds");
//     req.flash("success", "Goodbye!");
//   });
// };
