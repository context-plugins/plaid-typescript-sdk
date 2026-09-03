import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const LinkDeliverySessionStatus = {
  Created: "CREATED",
  Opened: "OPENED",
  Exited: "EXITED",
  Completed: "COMPLETED",
  Expired: "EXPIRED",
} as const;
export type LinkDeliverySessionStatus =
  | (typeof LinkDeliverySessionStatus)[keyof typeof LinkDeliverySessionStatus]
  | (string & {});

export const linkDeliverySessionStatusSchema: EnumSchema<LinkDeliverySessionStatus> =
  s.enumOf<LinkDeliverySessionStatus>(LinkDeliverySessionStatus);
