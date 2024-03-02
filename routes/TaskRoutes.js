const {Router} = require("express");

const {getTasks , saveTask, deleteTask, updateTask} = require("../controllers/TaskController")
const router = Router()

router.get("/get",getTasks);
console.log("calling api gettask.... From routes 1");
router.post("/save", saveTask)
router.put("/update/:id",updateTask)
router.delete("/delete/:id",deleteTask)

module.exports = router