import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creditFreddieMacPartySchema, type CreditFreddieMacParty } from "./credit-freddie-mac-party.js";

/**
 * A collection of objects that define specific parties to a deal. This includes the direct
 * participating parties, such as borrower and seller and the indirect parties such as the credit
 * report provider.
 */
export type CreditFreddieMacParties = {
  party: CreditFreddieMacParty[];
};

export const creditFreddieMacPartiesSchema: Schema<CreditFreddieMacParties> =
  s.object<CreditFreddieMacParties>({
    party: s.array(s.lazy(() => creditFreddieMacPartySchema)),
    _keysMap: {
      party: "PARTY",
    },
  });
