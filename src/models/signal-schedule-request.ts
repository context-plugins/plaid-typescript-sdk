import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  signalScheduleDefaultPaymentMethodSchema,
  type SignalScheduleDefaultPaymentMethod,
} from "./signal-schedule-default-payment-method.js";

export type SignalScheduleRequest = {
  clientId?: string;
  secret?: string;
  accessToken: string;
  accountId: string;
  clientTransactionId: string;
  amount: number;
  defaultPaymentMethod?: SignalScheduleDefaultPaymentMethod;
};

export const signalScheduleRequestSchema: Schema<SignalScheduleRequest> = s.object<SignalScheduleRequest>({
  clientId: s.optional(s.string()),
  secret: s.optional(s.string()),
  accessToken: s.string(),
  accountId: s.string(),
  clientTransactionId: s.string(),
  amount: s.number(),
  defaultPaymentMethod: s.optional(s.lazy(() => signalScheduleDefaultPaymentMethodSchema)),
  _keysMap: {
    clientId: "client_id",
    accessToken: "access_token",
    accountId: "account_id",
    clientTransactionId: "client_transaction_id",
    defaultPaymentMethod: "default_payment_method",
  },
});
