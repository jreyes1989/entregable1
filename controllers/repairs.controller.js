exports.allPendingRepairs = (req, res) => {
  res.json({
    status: 'pending',
    message: 'Method GET list Date Repairs was called',
  });
};

exports.enterDataRepairs = (req, res) => {
  const { id } = req.body;

  res.json({
    status: 'pending',
    message: 'Method GET Pending Repairs was called',
    id: {
      id,
    },
  });
};

exports.createRepairs = (req, res) => {
  const { id } = req.params;
  const { date, userId } = req.body;

  res.json({
    status: 'success',
    message: 'Method POST Create appointment Repairs was called',
    id: {
      id,
      date,
      userId,
    },
  });
};

exports.updateRepairs = (req, res) => {
  const { status } = req.body;

  res.json({
    status: 'completed',
    message: 'Method PATCH Update Repairs was called',
    id: {
      status,
    },
  });
};

exports.deleteRepairs = (req, res) => {
  const { status } = req.body;

  res.json({
    status: 'cancelled',
    message: 'Method DELETE  Repairs was called',
    id: {
      status,
    },
  });
};
