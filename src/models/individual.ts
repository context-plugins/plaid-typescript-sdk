import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { nameSchema, type Name } from "./name.js";

/** Documentation not found in the MISMO model viewer and not provided by Freddie Mac. */
export type Individual = {
  /**
   * Parent container for name that allows for choice group between parsed and unparsed containers.
   */
  name: Name;
};

export const individualSchema: Schema<Individual> = s.object<Individual>({
  name: nameSchema,
  _keysMap: {
    name: "NAME",
  },
});
