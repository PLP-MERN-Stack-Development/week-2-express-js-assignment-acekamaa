exports.getAll = (req, res) => {
  res.json([{ id: "1", name: "Test Product", price: 100 }]);
};

exports.getById = (req, res) => {
  res.json({ id: req.params.id, name: "Test Product", price: 100 });
};

exports.create = (req, res) => {
  res.status(201).json({ id: "2", ...req.body });
};
