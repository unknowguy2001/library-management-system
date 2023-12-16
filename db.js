function db(host, user, database) {
  const mysql = require("mysql2");

  try {
    const connection = mysql.createConnection({
      host,
      user,
      database,
    });

    if (!connection) {
      return res.status(500).json({ message: "Can't connect to database!" });
    }

    return res.status(200).json({ message: "Connected!" });
  } catch (error) {
    return res.status(500).json({ message: `Error: ${error.message}` });
  }
}
module.exports = { db };
