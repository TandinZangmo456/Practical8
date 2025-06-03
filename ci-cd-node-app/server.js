const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public')); // optional, for frontend

app.get('/', (req, res) => {
  res.send('Hello from Node.js App with CI/CD!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
