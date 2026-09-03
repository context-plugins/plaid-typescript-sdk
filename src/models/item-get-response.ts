import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { itemStatusNullableSchema, type ItemStatusNullable } from "./item-status-nullable.js";
import { itemWithConsentFieldsSchema, type ItemWithConsentFields } from "./item-with-consent-fields.js";

export type ItemGetResponse = {
  item: ItemWithConsentFields;
  status?: ItemStatusNullable | null;
  requestId: string;
};

export const itemGetResponseSchema: Schema<ItemGetResponse> = s.object<ItemGetResponse>({
  item: itemWithConsentFieldsSchema,
  status: s.optionalNullable(s.lazy(() => itemStatusNullableSchema)),
  requestId: s.string(),
  _keysMap: {
    requestId: "request_id",
  },
});
