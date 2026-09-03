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

export type ItemImportRequest = {
  clientId?: string;
  secret?: string;
  institutionId?: string;
  products: Products[];
  userAuth: ItemImportRequestUserAuth;
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
