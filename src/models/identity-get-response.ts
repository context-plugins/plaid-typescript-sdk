import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountIdentitySchema, type AccountIdentity } from "./account-identity.js";
import { itemSchema, type Item } from "./item.js";

/** IdentityGetResponse defines the response schema for `/identity/get` */
export type IdentityGetResponse = {
  /** The accounts for which Identity data has been requested */
  accounts: AccountIdentity[];
  /** Metadata about the Item. */
  item: Item;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const identityGetResponseSchema: Schema<IdentityGetResponse> = s.object<IdentityGetResponse>({
  accounts: s.array(s.lazy(() => accountIdentitySchema)),
  item: itemSchema,
  requestId: s.string(),
  _keysMap: {
    requestId: "request_id",
  },
});
