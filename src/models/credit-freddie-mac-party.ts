import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  creditFreddieMacPartyIndividualSchema,
  type CreditFreddieMacPartyIndividual,
} from "./credit-freddie-mac-party-individual.js";
import { rolesSchema, type Roles } from "./roles.js";
import { taxpayerIdentifiersSchema, type TaxpayerIdentifiers } from "./taxpayer-identifiers.js";

/**
 * A collection of information about a single party to a transaction. Includes direct participants
 * like the borrower and seller as well as indirect participants such as the flood certificate
 * provider.
 */
export type CreditFreddieMacParty = {
  /** Documentation not found in the MISMO model viewer and not provided by Freddie Mac. */
  individual: CreditFreddieMacPartyIndividual;
  /** Documentation not found in the MISMO model viewer and not provided by Freddie Mac. */
  roles: Roles;
  /** The collection of `TAXPAYER_IDENTIFICATION` elements */
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
