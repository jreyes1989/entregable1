exports.getAllDataUsers = (req, res) => {
  res.json({
    status: 'success',
    message: 'Method GET ALL Database was called',
  });
};

exports.enterDataUSers = (req, res) => {
  const { id } = req.params;

  res.json({
    status: 'success',
    message: 'Method GET User ID was called',
    user: {
      id,
    },
  });
};

exports.createUsers = (req, res) => {
  const { name, email, password, role } = req.body;

  res.json({
    status: 'success',
    message: 'Method POST signup was called',
    user: {
      name,
      email,
      password,
      role,
    },
  });
};

exports.updateUsers = (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  res.json({
    status: 'success',
    message: 'Method GET Update User was called',
    user: {
      id,
      name,
      email,
    },
  });
};

exports.deleteUser = (req, res) => {
  const { id } = req.params;
  const { name, email, password, role } = req.body;

  res.json({
    status: 'success',
    message: 'Method GET Delete User was called',
    user: {
      id,
      name,
      email,
      password,
      role,
    },
  });
};
