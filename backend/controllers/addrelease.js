const mysql = require("mysql");
const pool = require("../sql/connection");
const { handleSQLError } = require("../sql/error");

const getAllReleases = (req, res) => {
  pool.query("SELECT * FROM add_release", (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

const getReleaseById = (req, res) => {
  let sql = "SELECT * FROM add_release WHERE id = ?";
  sql = mysql.format(sql, [req.params.id]);

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

const addRelease = (req, res) => {
  const { title, thumb } = req.body;
  let sql = "INSERT INTO add_release (Title, Thumbnail) VALUES (?, ?)";
  sql = mysql.format(sql, [title, thumb]);

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err);
    return res.json({ newId: results.insertId });
  });
};

const updateReleaseById = (req, res) => {
  const { title } = req.body;
  let sql = "UPDATE add_release SET Title = ?, WHERE id = ?";
  sql = mysql.format(sql, [title, req.params.id]);

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err);
    return res.status(204).json();
  });
};

const deleteReleaseById = (req, res) => {
  let sql = "DELETE FROM add_release WHERE Id = ?";
  sql = mysql.format(sql, [req.params.id]);

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err);
    return res.json({ message: `Deleted ${results.affectedRows} user(s)` });
  });
};

module.exports = {
  getAllReleases,
  getReleaseById,
  addRelease,
  updateReleaseById,
  deleteReleaseById,
};
