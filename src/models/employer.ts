import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addressDataNullableSchema, type AddressDataNullable } from "./address-data-nullable.js";

export type Employer = {
  employerId: string;
  name: string;
  address: AddressDataNullable | null;
  confidenceScore: number;
};

export const employerSchema: Schema<Employer> = s.object<Employer>({
  employerId: s.string(),
  name: s.string(),
  address: s.nullable(s.lazy(() => addressDataNullableSchema)),
  confidenceScore: s.number(),
  _keysMap: {
    employerId: "employer_id",
    confidenceScore: "confidence_score",
  },
});
