exports.pathError = async (req, res, next) => {
  const user = await User.findById(req.session.userId);
  res.status(404).render("error", { isLoggedIn: req.isLoggedIn, user });
  console.log("in last handler middleware", req.url, req.method);
};
