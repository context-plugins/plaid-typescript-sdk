import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const WebhookCode = {
  DefaultUpdate: "DEFAULT_UPDATE",
  NewAccountsAvailable: "NEW_ACCOUNTS_AVAILABLE",
  SmsMicrodepositsVerification: "SMS_MICRODEPOSITS_VERIFICATION",
  AuthorizationGranted: "AUTHORIZATION_GRANTED",
  UserPermissionRevoked: "USER_PERMISSION_REVOKED",
  UserAccountRevoked: "USER_ACCOUNT_REVOKED",
  PendingDisconnect: "PENDING_DISCONNECT",
  RecurringTransactionsUpdate: "RECURRING_TRANSACTIONS_UPDATE",
  LoginRepaired: "LOGIN_REPAIRED",
  SyncUpdatesAvailable: "SYNC_UPDATES_AVAILABLE",
  ProductReady: "PRODUCT_READY",
  Error: "ERROR",
} as const;
export type WebhookCode = (typeof WebhookCode)[keyof typeof WebhookCode] | (string & {});

export const webhookCodeSchema: EnumSchema<WebhookCode> = s.enumOf<WebhookCode>(WebhookCode);
