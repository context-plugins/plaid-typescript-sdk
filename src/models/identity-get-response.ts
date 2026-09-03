import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountIdentitySchema, type AccountIdentity } from "./account-identity.js";
import { itemSchema, type Item } from "./item.js";

export type IdentityGetResponse = {
  accounts: AccountIdentity[];
  item: Item;
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
