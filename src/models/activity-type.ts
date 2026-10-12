import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Types of consent activities */
export const ActivityType = {
  Unknown: "UNKNOWN",
  ItemCreate: "ITEM_CREATE",
  ItemImport: "ITEM_IMPORT",
  ItemUpdate: "ITEM_UPDATE",
  ItemUnlink: "ITEM_UNLINK",
  PortalUnlink: "PORTAL_UNLINK",
  PortalItemsDelete: "PORTAL_ITEMS_DELETE",
  ItemRemove: "ITEM_REMOVE",
  InvariantCheckerDeletion: "INVARIANT_CHECKER_DELETION",
  ScopesUpdate: "SCOPES_UPDATE",
} as const;
export type ActivityType = (typeof ActivityType)[keyof typeof ActivityType] | (string & {});

export const activityTypeSchema: EnumSchema<ActivityType> = s.enumOf<ActivityType>(ActivityType);
