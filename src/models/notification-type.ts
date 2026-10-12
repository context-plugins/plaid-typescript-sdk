import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of Notification */
export const NotificationType = {
  AccountTakeover: "ACCOUNT_TAKEOVER",
  AddressChanged: "ADDRESS_CHANGED",
  Balance: "BALANCE",
  ConsentExpired: "CONSENT_EXPIRED",
  ConsentGranted: "CONSENT_GRANTED",
  ConsentRevoked: "CONSENT_REVOKED",
  ConsentUpdated: "CONSENT_UPDATED",
  Custom: "CUSTOM",
  MfaTargetChanged: "MFA_TARGET_CHANGED",
  PhoneChanged: "PHONE_CHANGED",
  PlannedOutage: "PLANNED_OUTAGE",
  Risk: "RISK",
  Service: "SERVICE",
  SuspectedIncident: "SUSPECTED_INCIDENT",
  TanActivated: "TAN_ACTIVATED",
  TanCreated: "TAN_CREATED",
  TanRevoked: "TAN_REVOKED",
  TanSuspended: "TAN_SUSPENDED",
} as const;
export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType] | (string & {});

export const notificationTypeSchema: EnumSchema<NotificationType> =
  s.enumOf<NotificationType>(NotificationType);
