import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Priority of notification */
export const NotificationPriority = {
  High: "HIGH",
  Medium: "MEDIUM",
  Low: "LOW",
} as const;
export type NotificationPriority =
  | (typeof NotificationPriority)[keyof typeof NotificationPriority]
  | (string & {});

export const notificationPrioritySchema: EnumSchema<NotificationPriority> =
  s.enumOf<NotificationPriority>(NotificationPriority);
