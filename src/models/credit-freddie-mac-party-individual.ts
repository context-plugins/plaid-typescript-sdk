import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  creditFreddieMacIndividualNameSchema,
  type CreditFreddieMacIndividualName,
} from "./credit-freddie-mac-individual-name.js";

export type CreditFreddieMacPartyIndividual = {
  name: CreditFreddieMacIndividualName;
};

export const creditFreddieMacPartyIndividualSchema: Schema<CreditFreddieMacPartyIndividual> =
  s.object<CreditFreddieMacPartyIndividual>({
    name: creditFreddieMacIndividualNameSchema,
    _keysMap: {
      name: "NAME",
    },
  });
