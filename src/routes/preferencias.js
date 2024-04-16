import express from "express";
import {withErrorHandling} from "./utils";
import {getAll} from "../controllers/preferencias";

const router = express.Router();

router.get('/', withErrorHandling(getAll))