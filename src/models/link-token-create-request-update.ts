import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LinkTokenCreateRequestUpdate = {
  accountSelectionEnabled?: boolean;
  reauthorizationEnabled?: boolean;
  user?: boolean;
  itemIds?: string[] | null;
};

export const linkTokenCreateRequestUpdateSchema: Schema<LinkTokenCreateRequestUpdate> =
  s.object<LinkTokenCreateRequestUpdate>({
    accountSelectionEnabled: s.optional(s.boolean()),
    reauthorizationEnabled: s.optional(s.boolean()),
    user: s.optional(s.boolean()),
    itemIds: s.optionalNullable(s.array(s.string())),
    _keysMap: {
      accountSelectionEnabled: "account_selection_enabled",
      reauthorizationEnabled: "reauthorization_enabled",
      itemIds: "item_ids",
    },
  });
