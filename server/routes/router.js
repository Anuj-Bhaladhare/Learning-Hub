const express = require("express");
const router = express.Router();

const {login, signup, editUser, deletUser} = require("./../controllers/auth");

router.post("/login", login);
router.post("/signup", signup);
router.put("/update_user", editUser);
router.delete("/delet_user", deletUser);


module.exports = router;