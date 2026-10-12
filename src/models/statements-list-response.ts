import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { statementsAccountSchema, type StatementsAccount } from "./statements-account.js";

/** StatementsListResponse defines the response schema for `/statements/list` */
export type StatementsListResponse = {
  accounts: StatementsAccount[];
  /** The Plaid Institution ID associated with the Item. */
  institutionId: string;
  /** The name of the institution associated with the Item. */
  institutionName: string;
  /**
   * The Plaid Item ID. The `item_id` is always unique; linking the same account at the same
   * institution twice will result in two Items with different `item_id` values. Like all Plaid
   * identifiers, the `item_id` is case-sensitive.
   */
  itemId: string;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const statementsListResponseSchema: Schema<StatementsListResponse> = s.object<StatementsListResponse>({
  accounts: s.array(s.lazy(() => statementsAccountSchema)),
  institutionId: s.string(),
  institutionName: s.string(),
  itemId: s.string(),
  requestId: s.string(),
  _keysMap: {
    institutionId: "institution_id",
    institutionName: "institution_name",
    itemId: "item_id",
    requestId: "request_id",
  },
});
