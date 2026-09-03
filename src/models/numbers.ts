import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Numbers = {
  account?: string;
  achRouting?: string;
  achWireRouting?: string;
  eftInstitution?: string;
  eftBranch?: string;
  internationalBic?: string;
  internationalIban?: string;
  bacsSortCode?: string;
};

export const numbersSchema: Schema<Numbers> = s.object<Numbers>({
  account: s.optional(s.string()),
  achRouting: s.optional(s.string()),
  achWireRouting: s.optional(s.string()),
  eftInstitution: s.optional(s.string()),
  eftBranch: s.optional(s.string()),
  internationalBic: s.optional(s.string()),
  internationalIban: s.optional(s.string()),
  bacsSortCode: s.optional(s.string()),
  _keysMap: {
    achRouting: "ach_routing",
    achWireRouting: "ach_wire_routing",
    eftInstitution: "eft_institution",
    eftBranch: "eft_branch",
    internationalBic: "international_bic",
    internationalIban: "international_iban",
    bacsSortCode: "bacs_sort_code",
  },
});
