import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const NotificationSeverity = {
  Emergency: "EMERGENCY",
  Alert: "ALERT",
  Warning: "WARNING",
  Notice: "NOTICE",
  Info: "INFO",
} as const;
export type NotificationSeverity =
  | (typeof NotificationSeverity)[keyof typeof NotificationSeverity]
  | (string & {});

export const notificationSeveritySchema: EnumSchema<NotificationSeverity> =
  s.enumOf<NotificationSeverity>(NotificationSeverity);
