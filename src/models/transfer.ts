import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { achClassSchema, type AchClass } from "./ach-class.js";
import {
  transferAuthorizationGuaranteeDecisionRationaleSchema,
  type TransferAuthorizationGuaranteeDecisionRationale,
} from "./transfer-authorization-guarantee-decision-rationale.js";
import {
  transferAuthorizationGuaranteeDecisionSchema,
  type TransferAuthorizationGuaranteeDecision,
} from "./transfer-authorization-guarantee-decision.js";
import {
  transferCreditFundsSourceSchema,
  type TransferCreditFundsSource,
} from "./transfer-credit-funds-source.js";
import {
  transferExpectedSweepSettlementScheduleItemSchema,
  type TransferExpectedSweepSettlementScheduleItem,
} from "./transfer-expected-sweep-settlement-schedule-item.js";
import { transferFailureSchema, type TransferFailure } from "./transfer-failure.js";
import {
  transferGuaranteeDetailsSchema,
  type TransferGuaranteeDetails,
} from "./transfer-guarantee-details.js";
import { transferNetworkSchema, type TransferNetwork } from "./transfer-network.js";
import { transferRefundSchema, type TransferRefund } from "./transfer-refund.js";
import { transferStatusSchema, type TransferStatus } from "./transfer-status.js";
import { transferSweepStatusSchema, type TransferSweepStatus } from "./transfer-sweep-status.js";
import { transferTypeSchema, type TransferType } from "./transfer-type.js";
import { transferUserInResponseSchema, type TransferUserInResponse } from "./transfer-user-in-response.js";
import { transferWireDetailsSchema, type TransferWireDetails } from "./transfer-wire-details.js";

export type Transfer = {
  id: string;
  authorizationId: string;
  achClass?: AchClass;
  accountId?: string;
  fundingAccountId: string | null;
  ledgerId?: string | null;
  type: TransferType;
  user: TransferUserInResponse;
  amount: string;
  description: string;
  created: Date;
  status: TransferStatus;
  sweepStatus?: TransferSweepStatus | null;
  network: TransferNetwork;
  wireDetails?: TransferWireDetails | null;
  cancellable: boolean;
  failureReason: TransferFailure | null;
  metadata: Record<string, string> | null;
  originationAccountId: string;
  guaranteeDecision: TransferAuthorizationGuaranteeDecision | null;
  guaranteeDecisionRationale: TransferAuthorizationGuaranteeDecisionRationale | null;
  guaranteeDetails?: TransferGuaranteeDetails | null;
  isoCurrencyCode: string;
  standardReturnWindow: string | null;
  unauthorizedReturnWindow: string | null;
  expectedSettlementDate: string | null;
  expectedFundsAvailableDate?: string | null;
  originatorClientId: string | null;
  refunds: TransferRefund[];
  recurringTransferId: string | null;
  expectedSweepSettlementSchedule?: TransferExpectedSweepSettlementScheduleItem[];
  creditFundsSource: TransferCreditFundsSource | null;
  facilitatorFee?: string;
  networkTraceId?: string | null;
};

export const transferSchema: Schema<Transfer> = s.object<Transfer>({
  id: s.string(),
  authorizationId: s.string(),
  achClass: s.optional(s.lazy(() => achClassSchema)),
  accountId: s.optional(s.string()),
  fundingAccountId: s.nullable(s.string()),
  ledgerId: s.optionalNullable(s.string()),
  type: transferTypeSchema,
  user: transferUserInResponseSchema,
  amount: s.string(),
  description: s.string(),
  created: s.dateTime(),
  status: transferStatusSchema,
  sweepStatus: s.optionalNullable(s.lazy(() => transferSweepStatusSchema)),
  network: transferNetworkSchema,
  wireDetails: s.optionalNullable(s.lazy(() => transferWireDetailsSchema)),
  cancellable: s.boolean(),
  failureReason: s.nullable(s.lazy(() => transferFailureSchema)),
  metadata: s.nullable(s.record(s.string(), s.string())),
  originationAccountId: s.string(),
  guaranteeDecision: s.nullable(s.lazy(() => transferAuthorizationGuaranteeDecisionSchema)),
  guaranteeDecisionRationale: s.nullable(s.lazy(() => transferAuthorizationGuaranteeDecisionRationaleSchema)),
  guaranteeDetails: s.optionalNullable(s.lazy(() => transferGuaranteeDetailsSchema)),
  isoCurrencyCode: s.string(),
  standardReturnWindow: s.nullable(s.dateOnly()),
  unauthorizedReturnWindow: s.nullable(s.dateOnly()),
  expectedSettlementDate: s.nullable(s.dateOnly()),
  expectedFundsAvailableDate: s.optionalNullable(s.dateOnly()),
  originatorClientId: s.nullable(s.string()),
  refunds: s.array(s.lazy(() => transferRefundSchema)),
  recurringTransferId: s.nullable(s.string()),
  expectedSweepSettlementSchedule: s.optional(
    s.array(s.lazy(() => transferExpectedSweepSettlementScheduleItemSchema)),
  ),
  creditFundsSource: s.nullable(s.lazy(() => transferCreditFundsSourceSchema)),
  facilitatorFee: s.optional(s.string()),
  networkTraceId: s.optionalNullable(s.string()),
  _keysMap: {
    authorizationId: "authorization_id",
    achClass: "ach_class",
    accountId: "account_id",
    fundingAccountId: "funding_account_id",
    ledgerId: "ledger_id",
    sweepStatus: "sweep_status",
    wireDetails: "wire_details",
    failureReason: "failure_reason",
    originationAccountId: "origination_account_id",
    guaranteeDecision: "guarantee_decision",
    guaranteeDecisionRationale: "guarantee_decision_rationale",
    guaranteeDetails: "guarantee_details",
    isoCurrencyCode: "iso_currency_code",
    standardReturnWindow: "standard_return_window",
    unauthorizedReturnWindow: "unauthorized_return_window",
    expectedSettlementDate: "expected_settlement_date",
    expectedFundsAvailableDate: "expected_funds_available_date",
    originatorClientId: "originator_client_id",
    recurringTransferId: "recurring_transfer_id",
    expectedSweepSettlementSchedule: "expected_sweep_settlement_schedule",
    creditFundsSource: "credit_funds_source",
    facilitatorFee: "facilitator_fee",
    networkTraceId: "network_trace_id",
  },
});
