import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import entriesRouter from "./routes/entries.js";
import commentsRoute from "./routes/comments.js";
import moodRoutes from "./routes/mood.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api", authRoutes);
app.use("/entries", entriesRouter);
app.use("/api/comments", commentsRoute);
app.use("/api/moods", moodRoutes);


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
