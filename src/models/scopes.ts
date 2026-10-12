import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountAccessSchema, type AccountAccess } from "./account-access.js";
import { productAccessSchema, type ProductAccess } from "./product-access.js";

/** The scopes object */
export type Scopes = {
  /**
   * The product access being requested. Used to allow or disallow product access across all
   * accounts. If unset, defaults to all products allowed.
   */
  productAccess?: ProductAccess;
  accounts?: AccountAccess[];
  /**
   * Allow access to newly opened accounts as they are opened. If unset, defaults to `true`.
   *
   * @default true
   */
  newAccounts?: boolean | null;
};

export const scopesSchema: Schema<Scopes> = s.object<Scopes>({
  productAccess: s.optional(s.lazy(() => productAccessSchema)),
  accounts: s.optional(s.array(s.lazy(() => accountAccessSchema))),
  newAccounts: s.defaulted(s.nullable(s.boolean()), true),
  _keysMap: {
    productAccess: "product_access",
    newAccounts: "new_accounts",
  },
});
