import { Router } from "express";
const router = Router();


// controlling the API SERVER SIDE FOR THE APPLICATION

router.get("/",  (req, res) => {
  res.json({
        message: "Welcome to the API"
    });
});


export default router;