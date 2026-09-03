import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { partySchema, type Party } from "./party.js";

export type Parties = {
  party: Party[];
};

export const partiesSchema: Schema<Parties> = s.object<Parties>({
  party: s.array(s.lazy(() => partySchema)),
  _keysMap: {
    party: "PARTY",
  },
});
