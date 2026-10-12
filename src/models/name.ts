import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Parent container for name that allows for choice group between parsed and unparsed containers.
 */
export type Name = {
  /** The first name of the individual represented by the parent object. */
  firstName: string;
  /** The last name of the individual represented by the parent object. */
  lastName: string;
};

export const nameSchema: Schema<Name> = s.object<Name>({
  firstName: s.string(),
  lastName: s.string(),
  _keysMap: {
    firstName: "FirstName",
    lastName: "LastName",
  },
});
