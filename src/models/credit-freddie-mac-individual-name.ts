import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreditFreddieMacIndividualName = {
  firstName: string;
  lastName: string;
  middleName: string;
};

export const creditFreddieMacIndividualNameSchema: Schema<CreditFreddieMacIndividualName> =
  s.object<CreditFreddieMacIndividualName>({
    firstName: s.string(),
    lastName: s.string(),
    middleName: s.string(),
    _keysMap: {
      firstName: "FirstName",
      lastName: "LastName",
      middleName: "MiddleName",
    },
  });
