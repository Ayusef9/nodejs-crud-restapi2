import db from "../config/db.js";

export const getCategories = (req, res) => {
  db.query("SELECT * FROM categories", (err, results) => {
    if (err) return res.status(500).json({ message: err });
    res.json(results);
  });
};

export const getCategoryById = (req, res) => {
  db.query("SELECT * FROM categories WHERE id=?", [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ message: err });
    if (results.length === 0)
      return res.status(404).json({ message: "Kategori tidak ditemukan" });
    res.json(results[0]);
  });
};

export const createCategory = (req, res) => {
  const { name } = req.body;
  db.query("INSERT INTO categories (name) VALUES (?)", [name], (err, results) => {
    if (err) return res.status(500).json({ message: err });
    res.json({ id: results.insertId, name });
  });
};

export const updateCategory = (req, res) => {
  db.query(
    "UPDATE categories SET name=? WHERE id=?",
    [req.body.name, req.params.id],
    (err) => {
      if (err) return res.status(500).json({ message: err });
      res.json({ message: "Kategori berhasil diupdate" });
    }
  );
};

export const deleteCategory = (req, res) => {
  db.query("DELETE FROM categories WHERE id=?", [req.params.id], (err) => {
    if (err) return res.status(500).json({ message: err });
    res.json({ message: "Kategori berhasil dihapus" });
  });
};
