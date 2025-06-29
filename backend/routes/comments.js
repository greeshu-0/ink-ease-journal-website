import express from "express";
import pool from "../db.js";

const router = express.Router();

// GET all comments
router.get("/", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM comments ORDER BY created_at DESC"
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch comments" });
  }
});

// POST a new comment
router.post("/", async (req, res) => {
  const { name, message } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO comments (name, message) VALUES ($1, $2) RETURNING *",
      [name, message]
    );
    res.status(201).json(result.rows[0]); // ✅ Return the inserted comment
  } catch (err) {
    console.error("❌ Failed to insert comment:", err);
    res.status(500).json({ error: "Failed to add comment" });
  }
});

export default router;
