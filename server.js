importconst express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Halaman utama
app.get("/", (req, res) => {
  res.send(`
    <h1>Farcaster MiniApp</h1>
    <p>Click the button to post GM!</p>
    <button onclick="postGM()">Post GM</button>
    <script>
      async function postGM() {
        alert("GM posted successfully!");
      }
    </script>
  `);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

