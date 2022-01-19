const express = require("express");
const app = express();
const { getSingleUser } = require("./crud/getSingleUser");
const { deposit } = require("./crud/deposit");
const { updateCredit } = require("./crud/updateCredit");
const { withdrow } = require("./crud/withdrow");
const { transferring } = require("./crud/Transferring");
// please move all the users functions in to a controller and export from there
const userRouter = require("./routes/user");

//app.use(express.json());  // rmeove commnets
app.use(express.urlencoded());
//get all users // remove comments we dont need that you tell us what we do here we know how to read

app.use("/users", userRouter);
// please move the functionality to the controllers and routes

//add new user

//***************************************************************** */
//get user by id // instad to tell us what you do here just do it like that app.get("/users " ,function)
app.get("/:id", (req, res) => {
  try {
    res.status(200).send(getSingleUser(req.params.id));
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

// please move routes to routes folder and move the funcion into the controller like I showed

// deposit
app.put("/deposit/:id", (req, res) => {
  try {
    res.status(200).send(deposit(req.params.id, req.body.amount));
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});
//update credit
app.put("/updateCredit/:id", (req, res) => {
  try {
    res.status(200).send(updateCredit(req.params.id, req.body.newCredit));
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});
//withdrow money
app.put("/withdrow/:id", (req, res) => {
  try {
    let acutalWithdrow = withdrow(req.params.id, req.body.amount);

    if (acutalWithdrow === parseInt(req.body.amount)) {
      return res.status(200).send("all the amount withdrowed !!");
    } else if (!acutalWithdrow) {
      return res.status(200).send("you can't withdrow");
    } else {
      return res
        .status(200)
        .send(
          "you can't withdrow all the amount , only " +
            acutalWithdrow +
            " withdrowed !!"
        );
    }
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

// this is a very complex function please simplfy it that it will be more readable
// try to avoid from doing multiple things in one funciton

//transfer money
app.put("/transfer/:id", (req, res) => {
  try {
    res
      .status(200)
      .send(transferring(req.params.id, req.body.to, req.body.amount));
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

app.listen(3000, () => {
  console.log("hello server 3000 !! ");
});

// good code keep going
