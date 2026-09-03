import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { individualSchema, type Individual } from "./individual.js";
import { rolesSchema, type Roles } from "./roles.js";
import { taxpayerIdentifiersSchema, type TaxpayerIdentifiers } from "./taxpayer-identifiers.js";

export type Party = {
  individual: Individual;
  roles: Roles;
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
