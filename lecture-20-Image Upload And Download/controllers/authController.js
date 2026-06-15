const { check, validationResult } = require("express-validator");
const { emit } = require("node:cluster");
const { error } = require("node:console");
const User = require("../model/user");
const bcrypt = require("bcryptjs");

exports.getLogin = (req, res, next) => {
  res.render("auth/login", {
    isLoggedIn: false,
    errors: [],
    oldInput: { email: "" },
    user: {},
  });
};
exports.postLogin = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  if (!user) {
    return res.status(422).render("auth/login", {
      isLoggedIn: false,
      errors: ["User does not exist"],
      oldInput: { email },
      user: {},
    });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(422).render("auth/login", {
      isLoggedIn: false,
      errors: ["Incorrect Password"],
      oldInput: { email },
      user: {},
    });
  }

  req.session.isLoggedIn = true;
  // req.session.user = user;
  req.session.userId = user._id.toString();
  await req.session.save((err) => {
    if (err) {
      console.log("Session save error:", err);
      return next(err);
    }
    res.redirect("/");
  });
};

exports.postLogout = (req, res, next) => {
  req.session.destroy(() => {
    res.redirect("/login");
  });
};

exports.getSignup = (req, res, next) => {
  res.render("auth/signup", {
    isLoggedIn: false,
    errors: [],
    oldInput: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      userType: "",
    },
    user: {},
  });
};

exports.postSignup = [
  // First Name validation
  check("firstName")
    .notEmpty()
    .withMessage("First name is required")
    .trim()
    .isLength({ min: 2 })
    .withMessage("First name must be at least 2 characters long")
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage("First name can only contain letters"),

  // Last Name validation
  check("lastName")
    .notEmpty()
    .withMessage("Last name is required")
    .trim()
    .isLength({ min: 2 })
    .withMessage("Last name must be at least 2 characters long")
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage("Last name can only contain letters"),

  // Email validation
  check("email")
    .isEmail()
    .withMessage("Please enter a valid email")
    .normalizeEmail(),

  // Password validation
  check("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long")
    .matches(/[a-z]/)
    .withMessage("Password must contain at least one lowercase letter")
    .matches(/[A-Z]/)
    .withMessage("Password must contain at least one uppercase letter")
    .matches(/[!@#$%^&*(),.?":{}|<>]/)
    .withMessage("Password must contain at least one special character")
    .trim(),

  // Confirm password validation
  check("confirmPassword")
    .trim()
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Passwords do not match");
      }
      return true;
    }),

  // User Type validation
  check("userType")
    .notEmpty()
    .withMessage("User type is required")
    .isIn(["guest", "host"])
    .withMessage("Invalid user type"),

  // Terms Accepted validation
  check("terms")
    .notEmpty()
    .withMessage("You must accept the terms and conditions")
    .custom((value) => {
      if (value !== "on") {
        throw new Error("You must accept the terms and conditions");
      }
      return true;
    }),

  // Final middleware / Controller logic
  (req, res, next) => {
    const { firstName, lastName, email, password, userType } = req.body;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).render("auth/signup", {
        isLoggedIn: false,
        errors: errors.array(),
        oldInput: {
          firstName,
          lastName,
          email,
          password,
          userType,
        },
        user: {},
      });
    }

    bcrypt.hash(password, 11).then((hashedPassword) => {
      const user = new User({
        firstName,
        lastName,
        email,
        password: hashedPassword,
        userType,
      });
      user
        .save()
        .then(() => {
          res.redirect("/login");
        })
        .catch((err) => {
          return res.status(422).render("auth/signup", {
            isLoggedIn: false,
            errors: [{ msg: err.message }],
            oldInput: {
              firstName,
              lastName,
              email,
              password,
              userType,
            },
            user: {},
          });
        });
    });
  },
];
