import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountSchema, type Account } from "./account.js";
import { authGetNumbersSchema, type AuthGetNumbers } from "./auth-get-numbers.js";
import { itemSchema, type Item } from "./item.js";

export type AuthGetResponse = {
  accounts: Account[];
  numbers: AuthGetNumbers;
  item: Item;
  requestId: string;
};

export const authGetResponseSchema: Schema<AuthGetResponse> = s.object<AuthGetResponse>({
  accounts: s.array(s.lazy(() => accountSchema)),
  numbers: authGetNumbersSchema,
  item: itemSchema,
  requestId: s.string(),
  _keysMap: {
    requestId: "request_id",
  },
});
