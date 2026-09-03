import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  creditFreddieMacPartyIndividualSchema,
  type CreditFreddieMacPartyIndividual,
} from "./credit-freddie-mac-party-individual.js";
import { rolesSchema, type Roles } from "./roles.js";
import { taxpayerIdentifiersSchema, type TaxpayerIdentifiers } from "./taxpayer-identifiers.js";

export type CreditFreddieMacParty = {
  individual: CreditFreddieMacPartyIndividual;
  roles: Roles;
  taxpayerIdentifiers: TaxpayerIdentifiers;
};

export const creditFreddieMacPartySchema: Schema<CreditFreddieMacParty> = s.object<CreditFreddieMacParty>({
  individual: creditFreddieMacPartyIndividualSchema,
  roles: rolesSchema,
  taxpayerIdentifiers: taxpayerIdentifiersSchema,
  _keysMap: {
    individual: "INDIVIDUAL",
    roles: "ROLES",
    taxpayerIdentifiers: "TAXPAYER_IDENTIFIERS",
  },
});
