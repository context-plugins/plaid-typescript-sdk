import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  itemImportRequestOptionsSchema,
  type ItemImportRequestOptions,
} from "./item-import-request-options.js";
import {
  itemImportRequestUserAuthSchema,
  type ItemImportRequestUserAuth,
} from "./item-import-request-user-auth.js";
import { productsSchema, type Products } from "./products.js";

/** ItemImportRequest defines the request schema for `/item/import` */
export type ItemImportRequest = {
  /**
   * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the
   * `PLAID-CLIENT-ID` header or as part of a request body.
   */
  clientId?: string;
  /**
   * Your Plaid API `secret`. The `secret` is required and may be provided either in the
   * `PLAID-SECRET` header or as part of a request body.
   */
  secret?: string;
  /** The Plaid Institution ID associated with the Item. */
  institutionId?: string;
  /** Array of product strings */
  products: Products[];
  /** Object of user ID and auth token pair, permitting Plaid to aggregate a user's accounts */
  userAuth: ItemImportRequestUserAuth;
  /** An optional object to configure `/item/import` request. */
  options?: ItemImportRequestOptions;
};

export const itemImportRequestSchema: Schema<ItemImportRequest> = s.object<ItemImportRequest>({
  clientId: s.optional(s.string()),
  secret: s.optional(s.string()),
  institutionId: s.optional(s.string()),
  products: s.array(s.lazy(() => productsSchema)),
  userAuth: itemImportRequestUserAuthSchema,
  options: s.optional(s.lazy(() => itemImportRequestOptionsSchema)),
  _keysMap: {
    clientId: "client_id",
    institutionId: "institution_id",
    userAuth: "user_auth",
  },
});
