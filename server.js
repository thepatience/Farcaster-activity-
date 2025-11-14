import express from "express";
import fetch from "node-fetch";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`
    <h1>Farcaster MiniApp</h1>
    <p>Click the button to post GM!</p>
    <button onclick="postGM()">Post GM</button>
    <script>
      async function postGM() {
        const res = await fetch('/post-gm', { method: 'POST' });
        const data = await res.json();
        alert(data.message);
      }
    </script>
  `);
});

app.post("/post-gm", async (req, res) => {
  try {
    console.log("Posting GM ke Farcaster...");
    res.json({ message: "GM posted successfully!" });
  } catch (err) {
    res.json({ message: "Error posting GM." });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
           
