import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Documentation not found in the MISMO model viewer and not provided by Freddie Mac. */
export type CreditFreddieMacIndividualName = {
  /** The first name of the individual represented by the parent object. */
  firstName: string;
  /** The last name of the individual represented by the parent object. */
  lastName: string;
  /** The middle name of the individual represented by the parent object. */
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
