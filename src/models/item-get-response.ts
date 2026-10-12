import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { itemStatusNullableSchema, type ItemStatusNullable } from "./item-status-nullable.js";
import { itemWithConsentFieldsSchema, type ItemWithConsentFields } from "./item-with-consent-fields.js";

/** ItemGetResponse defines the response schema for `/item/get` and `/item/webhook/update` */
export type ItemGetResponse = {
  /** Metadata about the Item */
  item: ItemWithConsentFields;
  /** An object with information about the status of the Item. */
  status?: ItemStatusNullable | null;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
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
