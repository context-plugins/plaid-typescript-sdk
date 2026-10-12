import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of entity causing origination of a notification */
export const NotificationPayloadIdType = {
  Account: "ACCOUNT",
  Customer: "CUSTOMER",
  Party: "PARTY",
  Maintenance: "MAINTENANCE",
  Consent: "CONSENT",
} as const;
export type NotificationPayloadIdType =
  | (typeof NotificationPayloadIdType)[keyof typeof NotificationPayloadIdType]
  | (string & {});

export const notificationPayloadIdTypeSchema: EnumSchema<NotificationPayloadIdType> =
  s.enumOf<NotificationPayloadIdType>(NotificationPayloadIdType);
