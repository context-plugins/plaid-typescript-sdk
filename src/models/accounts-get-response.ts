import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountSchema, type Account } from "./account.js";
import { itemSchema, type Item } from "./item.js";

export type AccountsGetResponse = {
  accounts: Account[];
  item: Item;
  requestId: string;
};

export const accountsGetResponseSchema: Schema<AccountsGetResponse> = s.object<AccountsGetResponse>({
  accounts: s.array(s.lazy(() => accountSchema)),
  item: itemSchema,
  requestId: s.string(),
  _keysMap: {
    requestId: "request_id",
  },
});
