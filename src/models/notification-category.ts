import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Category of Notification */
export const NotificationCategory = {
  Security: "SECURITY",
  Maintenance: "MAINTENANCE",
  Fraud: "FRAUD",
  Consent: "CONSENT",
  NewData: "NEW_DATA",
  TokenizedAccountNumber: "TOKENIZED_ACCOUNT_NUMBER",
} as const;
export type NotificationCategory =
  | (typeof NotificationCategory)[keyof typeof NotificationCategory]
  | (string & {});

export const notificationCategorySchema: EnumSchema<NotificationCategory> =
  s.enumOf<NotificationCategory>(NotificationCategory);
