const { v4: uuidv4 } = require('uuid');
const Product = require('../models/productModel');

exports.getAll = (req, res) => {
  let products = Product.getAll();

  // Filtering
  const search = req.query.search;
  if (search) {
    products = Product.search(search);
  }

  // Pagination
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const start = (page - 1) * limit;
  const paginated = products.slice(start, start + limit);

  res.json(paginated);
};

exports.getById = (req, res) => {
  const product = Product.getById(req.params.id);
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
};

exports.create = (req, res) => {
  const product = { id: uuidv4(), ...req.body };
  Product.create(product);
  res.status(201).json(product);
};

exports.update = (req, res) => {
  const updated = Product.update(req.params.id, req.body);
  if (!updated) return res.status(404).json({ message: 'Product not found' });
  res.json(updated);
};

exports.remove = (req, res) => {
  const deleted = Product.delete(req.params.id);
  if (!deleted) return res.status(404).json({ message: 'Product not found' });
  res.json({ message: 'Deleted successfully' });
};
