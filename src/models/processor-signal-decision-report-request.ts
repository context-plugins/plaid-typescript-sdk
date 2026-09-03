import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { signalDecisionOutcomeSchema, type SignalDecisionOutcome } from "./signal-decision-outcome.js";
import { signalPaymentMethodSchema, type SignalPaymentMethod } from "./signal-payment-method.js";

export type ProcessorSignalDecisionReportRequest = {
  clientId?: string;
  secret?: string;
  processorToken: string;
  clientTransactionId: string;
  initiated: boolean;
  daysFundsOnHold?: number | null;
  decisionOutcome?: SignalDecisionOutcome | null;
  paymentMethod?: SignalPaymentMethod | null;
  amountInstantlyAvailable?: number | null;
};

export const processorSignalDecisionReportRequestSchema: Schema<ProcessorSignalDecisionReportRequest> =
  s.object<ProcessorSignalDecisionReportRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    processorToken: s.string(),
    clientTransactionId: s.string(),
    initiated: s.boolean(),
    daysFundsOnHold: s.optionalNullable(s.number()),
    decisionOutcome: s.optionalNullable(s.lazy(() => signalDecisionOutcomeSchema)),
    paymentMethod: s.optionalNullable(s.lazy(() => signalPaymentMethodSchema)),
    amountInstantlyAvailable: s.optionalNullable(s.number()),
    _keysMap: {
      clientId: "client_id",
      processorToken: "processor_token",
      clientTransactionId: "client_transaction_id",
      daysFundsOnHold: "days_funds_on_hold",
      decisionOutcome: "decision_outcome",
      paymentMethod: "payment_method",
      amountInstantlyAvailable: "amount_instantly_available",
    },
  });
