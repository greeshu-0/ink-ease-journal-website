import express from "express";
import pool from "../db.js"; // assuming you have this

const router = express.Router();

// POST a new mood entry
router.post("/", async (req, res) => {
  const { email, date, mood, emoji } = req.body;

  try {
    // 1️⃣ Get user_id from email
    const userResult = await pool.query(
      "SELECT id FROM users WHERE email = $1",
      [email]
    );
    if (userResult.rows.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    const userId = userResult.rows[0].id;

    // 2️⃣ Insert mood with user_id
    const moodResult = await pool.query(
      "INSERT INTO moods (user_id, date, mood, emoji) VALUES ($1, $2, $3, $4) RETURNING *",
      [userId, date, mood, emoji]
    );

    res.status(201).json(moodResult.rows[0]);
  } catch (err) {
    console.error("Error saving mood:", err);
    res.status(500).json({ error: "Failed to save mood" });
  }
});

// GET moods for a specific user
router.get("/:email", async (req, res) => {
  const { email } = req.params;

  try {
    // 1️⃣ Get user_id
    const userResult = await pool.query(
      "SELECT id FROM users WHERE email = $1",
      [email]
    );
    if (userResult.rows.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    const userId = userResult.rows[0].id;

    // 2️⃣ Fetch moods
    const moodsResult = await pool.query(
      "SELECT * FROM moods WHERE user_id = $1 ORDER BY created_at DESC",
      [userId]
    );

    res.json(moodsResult.rows);
  } catch (err) {
    console.error("Error fetching moods:", err);
    res.status(500).json({ error: "Failed to fetch moods" });
  }
});

export default router;
