const express = require("express");
const path = require("path");

const app = express();

// View engine
app.set("view engine", "ejs");

// Static
app.use(express.static(path.join(__dirname, "public")));

// Routes
// dashboardRoute
const dashboardRoutes = require("./app/routes/dashboardRoutes");
app.use("/", dashboardRoutes);

// buttonRoute
const buttonsRoutes = require("./app/routes/buttonsRoutes");
app.use("/buttons", buttonsRoutes);

// cardsRoute
const cardsRoutes = require("./app/routes/cardsRoutes");
app.use("/cards", cardsRoutes);

// loginRoute
const loginRoutes = require("./app/routes/loginRoutes");
app.use("/login", loginRoutes);

// registerRoute
const registerRoutes = require("./app/routes/registerRoutes");
app.use("/register", registerRoutes);

// colorsUtilitiesRoute
const colorsRoutes = require("./app/routes/colorsRoutes");
app.use("/utilities-color", colorsRoutes);

// bordersUtilitiesRoute
const bordersRoutes = require("./app/routes/bordersRoutes");
app.use("/utilities-border", bordersRoutes);

// animationUtilitiesRoute
const animationRoutes = require("./app/routes/animationRoutes");
app.use("/utilities-animation", animationRoutes);

// othersUtilitiesRoute
const othersRoutes = require("./app/routes/othersRoutes");
app.use("/utilities-other", othersRoutes);

// forgotPasswordRoute
const forgotPasswordRoutes = require("./app/routes/forgotPasswordRoutes");
app.use("/forgot-password", forgotPasswordRoutes);

// 404Route
const errorRoutes = require("./app/routes/404Routes");
app.use("/404", errorRoutes);

// blankRoute
const blankRoutes = require("./app/routes/blankRoutes");
app.use("/blank", blankRoutes);

// chartsRoute
const chartsRoutes = require("./app/routes/chartsRoutes");
app.use("/charts", chartsRoutes);

// tablesRoute
const tablesRoutes = require("./app/routes/tablesRoutes");
app.use("/tables", tablesRoutes);

// Server
const PORT = 6077;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
