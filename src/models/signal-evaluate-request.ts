import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { signalEvaluateDeviceSchema, type SignalEvaluateDevice } from "./signal-evaluate-device.js";
import { signalUserSchema, type SignalUser } from "./signal-user.js";

export type SignalEvaluateRequest = {
  clientId?: string;
  secret?: string;
  accessToken: string;
  accountId: string;
  clientTransactionId: string;
  amount: number;
  userPresent?: boolean | null;
  clientUserId?: string;
  isRecurring?: boolean | null;
  defaultPaymentMethod?: string | null;
  user?: SignalUser;
  device?: SignalEvaluateDevice;
  riskProfileKey?: string | null;
  rulesetKey?: string | null;
};

export const signalEvaluateRequestSchema: Schema<SignalEvaluateRequest> = s.object<SignalEvaluateRequest>({
  clientId: s.optional(s.string()),
  secret: s.optional(s.string()),
  accessToken: s.string(),
  accountId: s.string(),
  clientTransactionId: s.string(),
  amount: s.number(),
  userPresent: s.optionalNullable(s.boolean()),
  clientUserId: s.optional(s.string()),
  isRecurring: s.optionalNullable(s.boolean()),
  defaultPaymentMethod: s.optionalNullable(s.string()),
  user: s.optional(s.lazy(() => signalUserSchema)),
  device: s.optional(s.lazy(() => signalEvaluateDeviceSchema)),
  riskProfileKey: s.optionalNullable(s.string()),
  rulesetKey: s.optionalNullable(s.string()),
  _keysMap: {
    clientId: "client_id",
    accessToken: "access_token",
    accountId: "account_id",
    clientTransactionId: "client_transaction_id",
    userPresent: "user_present",
    clientUserId: "client_user_id",
    isRecurring: "is_recurring",
    defaultPaymentMethod: "default_payment_method",
    riskProfileKey: "risk_profile_key",
    rulesetKey: "ruleset_key",
  },
});
