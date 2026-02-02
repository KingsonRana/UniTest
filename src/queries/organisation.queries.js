export const createOrganisationQuery = `
    INSERT INTO organisation (name)
    VALUES ($1)
    RETURNING id, name, status, created_at
  `
  
export const getAllOrganisationsQuery = `
    SELECT id, name, status, created_at
    FROM organisation
    ORDER BY created_at DESC
  `   