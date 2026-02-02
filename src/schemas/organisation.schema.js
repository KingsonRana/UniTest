import { z } from "zod";

export const createOrganisationSchema = z.object({
  name: z
    .string()
    .min(2, "Organisation name must be at least 2 characters")
    .max(30, "Organisation name must be at most 30 characters"),
});