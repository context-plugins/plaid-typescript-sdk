import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountSchema, type Account } from "./account.js";
import { itemSchema, type Item } from "./item.js";
import { liabilitiesObjectSchema, type LiabilitiesObject } from "./liabilities-object.js";

/** LiabilitiesGetResponse defines the response schema for `/liabilities/get` */
export type LiabilitiesGetResponse = {
  /** An array of accounts associated with the Item */
  accounts: Account[];
  /** Metadata about the Item. */
  item: Item;
  /** An object containing liability accounts */
  liabilities: LiabilitiesObject;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
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
