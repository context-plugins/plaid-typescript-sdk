import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  creditFreddieMacIndividualNameSchema,
  type CreditFreddieMacIndividualName,
} from "./credit-freddie-mac-individual-name.js";

/** Documentation not found in the MISMO model viewer and not provided by Freddie Mac. */
export type CreditFreddieMacPartyIndividual = {
  /** Documentation not found in the MISMO model viewer and not provided by Freddie Mac. */
  name: CreditFreddieMacIndividualName;
};

export const creditFreddieMacPartyIndividualSchema: Schema<CreditFreddieMacPartyIndividual> =
  s.object<CreditFreddieMacPartyIndividual>({
    name: creditFreddieMacIndividualNameSchema,
    _keysMap: {
      name: "NAME",
    },
  });
