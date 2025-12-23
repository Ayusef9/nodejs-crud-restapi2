import db from "../config/db.js";

export const getProducts = (req, res) => {
  db.query(
    `SELECT products.*, categories.name AS category_name 
     FROM products 
     LEFT JOIN categories ON products.category_id = categories.id`,
    (err, results) => {
      if (err) return res.status(500).json({ message: err });
      res.json(results);
    }
  );
};

export const getProductById = (req, res) => {
  db.query(
    "SELECT * FROM products WHERE id=?",
    [req.params.id],
    (err, results) => {
      if (err) return res.status(500).json({ message: err });
      if (results.length === 0)
        return res.status(404).json({ message: "Produk tidak ditemukan" });
      res.json(results[0]);
    }
  );
};

export const createProduct = (req, res) => {
  const { name, price, category_id } = req.body;
  db.query(
    "INSERT INTO products (name, price, category_id) VALUES (?, ?, ?)",
    [name, price, category_id],
    (err, results) => {
      if (err) return res.status(500).json({ message: err });
      res.json({ id: results.insertId, name, price, category_id });
    }
  );
};

export const updateProduct = (req, res) => {
  const { name, price, category_id } = req.body;
  db.query(
    "UPDATE products SET name=?, price=?, category_id=? WHERE id=?",
    [name, price, category_id, req.params.id],
    (err) => {
      if (err) return res.status(500).json({ message: err });
      res.json({ message: "Produk berhasil diupdate" });
    }
  );
};

export const deleteProduct = (req, res) => {
  db.query("DELETE FROM products WHERE id=?", [req.params.id], (err) => {
    if (err) return res.status(500).json({ message: err });
    res.json({ message: "Produk berhasil dihapus" });
  });
};
