import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountSchema, type Account } from "./account.js";
import { itemSchema, type Item } from "./item.js";
import { liabilitiesObjectSchema, type LiabilitiesObject } from "./liabilities-object.js";

export type LiabilitiesGetResponse = {
  accounts: Account[];
  item: Item;
  liabilities: LiabilitiesObject;
  requestId: string;
};

export const liabilitiesGetResponseSchema: Schema<LiabilitiesGetResponse> = s.object<LiabilitiesGetResponse>({
  accounts: s.array(s.lazy(() => accountSchema)),
  item: itemSchema,
  liabilities: liabilitiesObjectSchema,
  requestId: s.string(),
  _keysMap: {
    requestId: "request_id",
  },
});
