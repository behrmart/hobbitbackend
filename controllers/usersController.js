const loginUser = asyncHandler(async (req, res) => {
  //desestructurar al body
  const { email, password } = req.body;

  //verificamos que exita el usuario
  const user = await User.findOne({ email });

  //verificamos usuario y contraseña
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      _id: user.id, // representacion mongoose en modo string (en lugar de objeto ._id)
      name: user.name,
      email: user.email,
      token: generarToken(user.id),
    });
  } else {
    res.status(400);
    throw Error("usersController: Invalid credentials");
  }
});

//++++++++++++++++++++++++ User Data ++++++++++++++++++++++++++++++++++

const userData = asyncHandler(async (req, res) => {
  res.status(200).json(req.user);
});

//+++++++++++++++++++++++ Update User +++++++++++++++++++++++++++++++++ BFMM ---- Pending, user validation not working yet

const updateUser = asyncHandler(async (req, res) => {
  const user = req.user;

  //verificamos usuario
  if (user) {
    const userUpdated = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({ userUpdated });
  } else {
    res.status(400);
    throw Error("usersController: User not auth");
  }
});

// ++++++++++++++++++++++++ Funcion para generar un JWT jason web token
const generarToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" }); // JWT expira en 30 dias
};

module.exports = {
  createUser,
  loginUser,
  userData,
  updateUser,
};
