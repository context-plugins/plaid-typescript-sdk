import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { individualSchema, type Individual } from "./individual.js";
import { rolesSchema, type Roles } from "./roles.js";
import { taxpayerIdentifiersSchema, type TaxpayerIdentifiers } from "./taxpayer-identifiers.js";

/**
 * A collection of information about a single party to a transaction. Includes direct participants
 * like the borrower and seller as well as indirect participants such as the flood certificate
 * provider.
 */
export type Party = {
  /** Documentation not found in the MISMO model viewer and not provided by Freddie Mac. */
  individual: Individual;
  /** Documentation not found in the MISMO model viewer and not provided by Freddie Mac. */
  roles: Roles;
  /** The collection of `TAXPAYER_IDENTIFICATION` elements */
  taxpayerIdentifiers: TaxpayerIdentifiers;
};

export const partySchema: Schema<Party> = s.object<Party>({
  individual: individualSchema,
  roles: rolesSchema,
  taxpayerIdentifiers: taxpayerIdentifiersSchema,
  _keysMap: {
    individual: "INDIVIDUAL",
    roles: "ROLES",
    taxpayerIdentifiers: "TAXPAYER_IDENTIFIERS",
  },
});
