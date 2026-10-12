import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The details of an Item add in Link. */
export type CreditSessionItemAddResult = {
  /** Returned once a user has successfully linked their Item. */
  publicToken?: string;
  /**
   * The Plaid Item ID. The `item_id` is always unique; linking the same account at the same
   * institution twice will result in two Items with different `item_id` values. Like all Plaid
   * identifiers, the `item_id` is case-sensitive.
   */
  itemId?: string;
  /** The Plaid Institution ID associated with the Item. */
  institutionId?: string;
};

export const creditSessionItemAddResultSchema: Schema<CreditSessionItemAddResult> =
  s.object<CreditSessionItemAddResult>({
    publicToken: s.optional(s.string()),
    itemId: s.optional(s.string()),
    institutionId: s.optional(s.string()),
    _keysMap: {
      publicToken: "public_token",
      itemId: "item_id",
      institutionId: "institution_id",
    },
  });
