import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ProductAccess = {
  statements?: boolean | null;
  identity?: boolean | null;
  auth?: boolean | null;
  transactions?: boolean | null;
  accountsDetailsTransactions?: boolean | null;
  accountsRoutingNumber?: boolean | null;
  accountsStatements?: boolean | null;
  accountsTaxStatements?: boolean | null;
  customersProfiles?: boolean | null;
};

export const productAccessSchema: Schema<ProductAccess> = s.object<ProductAccess>({
  statements: s.optionalNullable(s.boolean()),
  identity: s.optionalNullable(s.boolean()),
  auth: s.optionalNullable(s.boolean()),
  transactions: s.optionalNullable(s.boolean()),
  accountsDetailsTransactions: s.optionalNullable(s.boolean()),
  accountsRoutingNumber: s.optionalNullable(s.boolean()),
  accountsStatements: s.optionalNullable(s.boolean()),
  accountsTaxStatements: s.optionalNullable(s.boolean()),
  customersProfiles: s.optionalNullable(s.boolean()),
  _keysMap: {
    accountsDetailsTransactions: "accounts_details_transactions",
    accountsRoutingNumber: "accounts_routing_number",
    accountsStatements: "accounts_statements",
    accountsTaxStatements: "accounts_tax_statements",
    customersProfiles: "customers_profiles",
  },
});
