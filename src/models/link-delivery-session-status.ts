import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the given Hosted Link session.
 *
 * `CREATED`: The session is created but not yet accessed by the user
 *
 * `OPENED`: The session is opened by the user but not yet completed
 *
 * `EXITED`: The session has been exited by the user
 *
 * `COMPLETED`: The session has been completed by the user
 *
 * `EXPIRED`: The session has expired
 */
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
