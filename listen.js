const app = require("./app");

const PORT = 5500;

app.listen(PORT, () => {
  console.log(`Listening at port ${PORT} - http://localhost:${PORT}`);
});
