import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creditFreddieMacPartySchema, type CreditFreddieMacParty } from "./credit-freddie-mac-party.js";

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
