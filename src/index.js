require("./config/config");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const LoginRouter = require("./routes/LoginRouter");
const SignUpRouter = require("./routes/SignUpRouter");
const ForgotPasswordRouter = require("./routes/ForgotPasswordRouter");
const ResetPasswordRouter = require("./routes/ResetPasswordRouter");
const UpdatePasswordViaEmailRouter = require("./routes/UpdatePasswordViaEmailRouter");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Backend for Java site");
});

app.use("/user", LoginRouter);
app.use("/user/Signup", SignUpRouter);
app.use("/forgotPassword", ForgotPasswordRouter);
app.use("/reset", ResetPasswordRouter);
app.use("/updatePasswordViaEmail", UpdatePasswordViaEmailRouter);

const server = app.listen(4000, () => {
  console.log("Server running on port " + server.address().port);
});
