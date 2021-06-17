import express from "express";
import {
  colorController,
  deskController,
} from "../controllers/adminController";

const adminRouter = express.Router();

adminRouter.get("/color", colorController);
adminRouter.get("/desk", deskController);

export default adminRouter;
