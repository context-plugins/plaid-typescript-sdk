import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { partySchema, type Party } from "./party.js";

/**
 * A collection of objects that define specific parties to a deal. This includes the direct
 * participating parties, such as borrower and seller and the indirect parties such as the credit
 * report provider.
 */
export type Parties = {
  party: Party[];
};

export const partiesSchema: Schema<Parties> = s.object<Parties>({
  party: s.array(s.lazy(() => partySchema)),
  _keysMap: {
    party: "PARTY",
  },
});
