import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { signalEvaluateDeviceSchema, type SignalEvaluateDevice } from "./signal-evaluate-device.js";
import { signalUserSchema, type SignalUser } from "./signal-user.js";

export type ProcessorSignalEvaluateRequest = {
  clientId?: string;
  secret?: string;
  processorToken: string;
  clientTransactionId: string;
  amount: number;
  userPresent?: boolean | null;
  clientUserId?: string;
  isRecurring?: boolean | null;
  defaultPaymentMethod?: string | null;
  user?: SignalUser;
  device?: SignalEvaluateDevice;
  rulesetKey?: string | null;
};

export const processorSignalEvaluateRequestSchema: Schema<ProcessorSignalEvaluateRequest> =
  s.object<ProcessorSignalEvaluateRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    processorToken: s.string(),
    clientTransactionId: s.string(),
    amount: s.number(),
    userPresent: s.optionalNullable(s.boolean()),
    clientUserId: s.optional(s.string()),
    isRecurring: s.optionalNullable(s.boolean()),
    defaultPaymentMethod: s.optionalNullable(s.string()),
    user: s.optional(s.lazy(() => signalUserSchema)),
    device: s.optional(s.lazy(() => signalEvaluateDeviceSchema)),
    rulesetKey: s.optionalNullable(s.string()),
    _keysMap: {
      clientId: "client_id",
      processorToken: "processor_token",
      clientTransactionId: "client_transaction_id",
      userPresent: "user_present",
      clientUserId: "client_user_id",
      isRecurring: "is_recurring",
      defaultPaymentMethod: "default_payment_method",
      rulesetKey: "ruleset_key",
    },
  });
