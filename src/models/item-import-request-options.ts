import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** An optional object to configure `/item/import` request. */
export type ItemImportRequestOptions = {
  /**
   * Specifies a webhook URL to associate with an Item. Plaid fires a webhook if credentials fail.
   */
  webhook?: string;
};

export const itemImportRequestOptionsSchema: Schema<ItemImportRequestOptions> =
  s.object<ItemImportRequestOptions>({
    webhook: s.optional(s.string()),
  });
