import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountAccessSchema, type AccountAccess } from "./account-access.js";
import { productAccessSchema, type ProductAccess } from "./product-access.js";

export type ScopesNullable = {
  productAccess?: ProductAccess;
  accounts?: AccountAccess[];
  newAccounts?: boolean | null;
};

export const scopesNullableSchema: Schema<ScopesNullable> = s.object<ScopesNullable>({
  productAccess: s.optional(s.lazy(() => productAccessSchema)),
  accounts: s.optional(s.array(s.lazy(() => accountAccessSchema))),
  newAccounts: s.optionalNullable(s.boolean()),
  _keysMap: {
    productAccess: "product_access",
    newAccounts: "new_accounts",
  },
});
