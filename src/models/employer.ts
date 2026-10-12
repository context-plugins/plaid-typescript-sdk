import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addressDataNullableSchema, type AddressDataNullable } from "./address-data-nullable.js";

/** Data about the employer. */
export type Employer = {
  /** Plaid's unique identifier for the employer. */
  employerId: string;
  /** The name of the employer */
  name: string;
  /** Data about the components comprising an address. */
  address: AddressDataNullable | null;
  /**
   * A number from 0 to 1 indicating Plaid's level of confidence in the pairing between the employer
   * and the institution (not yet implemented).
   */
  confidenceScore: number;
};

export const employerSchema: Schema<Employer> = s.object<Employer>({
  employerId: s.string(),
  name: s.string(),
  address: s.nullable(s.lazy(() => addressDataNullableSchema)),
  confidenceScore: s.float64(),
  _keysMap: {
    employerId: "employer_id",
    confidenceScore: "confidence_score",
  },
});
