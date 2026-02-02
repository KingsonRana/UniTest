import { pool } from "../db/pool.js";
import {createOrganisationQuery, getAllOrganisationsQuery} from "../queries/organisation.queries.js"


export async function createOrganisation({ name }) {
  const query = createOrganisationQuery;
  const { rows } = await pool.query(query, [name]);
  return rows[0];
}

export async function listOrganisations() {
  const query = getAllOrganisationsQuery;
  const { rows } = await pool.query(query);
  return rows;
}
