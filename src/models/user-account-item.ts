import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** An Item created during a Layer authorization session. */
export type UserAccountItem = {
  /**
   * The Plaid Item ID. The `item_id` is always unique; linking the same account at the same
   * institution twice will result in two Items with different `item_id` values. Like all Plaid
   * identifiers, the `item_id` is case-sensitive.
   */
  itemId?: string;
  /** The access token associated with the Item for which data is being requested. */
  accessToken?: string;
};

export const userAccountItemSchema: Schema<UserAccountItem> = s.object<UserAccountItem>({
  itemId: s.optional(s.string()),
  accessToken: s.optional(s.string()),
  _keysMap: {
    itemId: "item_id",
    accessToken: "access_token",
  },
});
