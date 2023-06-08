const mysql = require("mysql");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const pool = require("../sql/connection");
const { handleSQLError } = require("../sql/error");

// for bcrypt
const saltRounds = 10;

const signup = (req, res) => {
  // const { FirstName, LastName, Email, PW} = req.body
  const firstName = req.body.FirstName;
  const lastName = req.body.LastName;
  const email = req.body.Email;
  const password = req.body.PW;
  let sql =
    "INSERT INTO users (FirstName, LastName, Email, PW) VALUES (?, ?, ?, ?)";

  bcrypt.hash(password, saltRounds, function(err, hash){
      sql = mysql.format(sql, [firstName, lastName, email, hash]);
      pool.query(sql, (err, result) => {
        if (err) {
          if (err.code === "ER_DUP_ENTRY")
            return res.status(409).send("Username is taken");
          return handleSQLError(res, err);
        }
        return res.send("Sign-up successful");
      });
  });

  // sql = mysql.format(sql, [firstName, lastName, email, hash]);

  // pool.query(sql, (err, result) => {
  //   if (err) {
  //     if (err.code === "ER_DUP_ENTRY")
  //       return res.status(409).send("Username is taken");
  //     return handleSQLError(res, err);
  //   }
  //   return res.send("Sign-up successful");
  // });
};

const login = (req, res) => {
  const { Email, PW } = req.body;
  let sql = "SELECT * FROM users WHERE Email = ?";
  sql = mysql.format(sql, [Email]);

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    if (!rows.length) return res.status(404).send("No matching users");

    const hash = rows[0].password;
    bcrypt.compare(password, hash).then((result) => {
      if (!result) return res.status(400).send("Invalid password");

      const data = { ...rows[0] };
      data.password = "REDACTED";

      const token = jwt.sign(data, "secret");
      res.json({
        msg: "Login successful",
        token,
      });
    });
  });
};

module.exports = {
  signup,
  login,
};
