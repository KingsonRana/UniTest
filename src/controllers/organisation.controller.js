import * as organisationService from "../services/organisation.service.js";

export async function createOrganisation(req, res) {
  try {
    const organisation = await organisationService.createOrganisation(req.body);

    return res.status(201).json({
      data: organisation,
    });
  } catch (err) {
    // Unique constraint (organisation name)
    if (err.code === "23505") {
      return res.status(409).json({
        error: {
          code: "DUPLICATE_ORGANISATION",
          message: "Organisation with this name already exists",
        },
      });
    }

    console.error(err);
    return res.status(500).json({
      error: {
        code: "INTERNAL_ERROR",
        message: "Failed to create organisation",
      },
    });
  }
}

export async function listOrganisations(req, res) {
  try {
    const organisations = await organisationService.listOrganisations();

    return res.json({
      data: organisations,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      error: {
        code: "INTERNAL_ERROR",
        message: "Failed to fetch organisations",
      },
    });
  }
}
