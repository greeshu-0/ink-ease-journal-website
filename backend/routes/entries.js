import express from "express";
import pool from "../db.js";

const router = express.Router();

// Get entries for logged-in user
router.get("/", async (req, res) => {
  const { user_id } = req.query; // Email passed as query param
  try {
    const result = await pool.query(
      "SELECT * FROM entries WHERE user_id = $1 ORDER BY date DESC",
      [user_id]
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch entries" });
  }
});

// Add new entry
router.post("/", async (req, res) => {
  const { title, content, mood, user_id } = req.body;
  const today = new Date();
  try {
    const result = await pool.query(
      "INSERT INTO entries (date, title, content, mood, user_id) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [today, title, content, mood, user_id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to insert entry" });
  }
});

// Edit entry (only if user_id matches)
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, content, mood, user_id } = req.body;
  try {
    const result = await pool.query(
      "UPDATE entries SET title=$1, content=$2, mood=$3 WHERE id=$4 AND user_id=$5",
      [title, content, mood, id, user_id]
    );
    if (result.rowCount === 0) {
      return res
        .status(403)
        .json({ error: "Not allowed to update this entry" });
    }
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update entry" });
  }
});

// Delete entry (only if user_id matches)
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const { user_id } = req.body;
  try {
    const result = await pool.query(
      "DELETE FROM entries WHERE id=$1 AND user_id=$2",
      [id, user_id]
    );
    if (result.rowCount === 0) {
      return res
        .status(403)
        .json({ error: "Not allowed to delete this entry" });
    }
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to delete entry" });
  }
});

export default router;
