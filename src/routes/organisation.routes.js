import express from "express";
import { validateBody } from "../middleware/validate.js";
import {
  createOrganisation,
  listOrganisations,
} from "../controllers/organisation.controller.js";
import { createOrganisationSchema } from "../schemas/organisation.schema.js";

const organisationRouter = express.Router();

organisationRouter.post(
  "/",
  validateBody(createOrganisationSchema),
  createOrganisation
);

organisationRouter.get("/", listOrganisations);

export default organisationRouter;

