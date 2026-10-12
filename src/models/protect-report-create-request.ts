import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { protectBankAccountSchema, type ProtectBankAccount } from "./protect-bank-account.js";
import { protectIncidentEventSchema, type ProtectIncidentEvent } from "./protect-incident-event.js";
import { protectReportConfidenceSchema, type ProtectReportConfidence } from "./protect-report-confidence.js";
import { protectReportSourceSchema, type ProtectReportSource } from "./protect-report-source.js";
import { protectReportTypeSchema, type ProtectReportType } from "./protect-report-type.js";

/**
 * Request object for `/protect/report/create`. You must provide either `user_id`, or an
 * `incident_event` with at least one supported identifier: `link_session_id`, `idv_session_id`,
 * `protect_event_id`, `signal_client_transaction_id`, or `access_token`. Context fields such as
 * `internal_reference`, `time`, `amount`, and `bank_account` do not satisfy this identifier
 * requirement.
 */
export type ProtectReportCreateRequest = {
  /**
   * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the
   * `PLAID-CLIENT-ID` header or as part of a request body.
   */
  clientId?: string;
  /**
   * Your Plaid API `secret`. The `secret` is required and may be provided either in the
   * `PLAID-SECRET` header or as part of a request body.
   */
  secret?: string;
  /** The Plaid User ID associated with the report. */
  userId?: string;
  /** Details about the incident event. */
  incidentEvent?: ProtectIncidentEvent | null;
  /**
   * The confidence level of the incident report. `CONFIRMED` indicates the incident has been
   * verified and definitively occurred.
   *
   * `SUSPECTED` indicates the incident is believed to have occurred but has not been fully
   * verified.
   */
  reportConfidence: ProtectReportConfidence;
  /**
   * The type of incident being reported.
   *
   * `USER_ACCOUNT_TAKEOVER` - Indicates that a legitimate user's account was accessed or controlled
   * by an unauthorized party.
   *
   * `FALSE_IDENTITY` - Indicates that a user created an account using stolen or fabricated identity
   * information.
   *
   * `STOLEN_IDENTITY` - Indicates that a user created an account using identity information
   * belonging to a real individual without their consent.
   *
   * `SYNTHETIC_IDENTITY` - Indicates that a user created an account using a fake or partially
   * fabricated identity (e.g., combining real and fake information to form a new persona).
   *
   * `MULTIPLE_USER_ACCOUNTS` - Indicates that the same individual is operating multiple accounts in
   * violation of policy.
   *
   * `SCAM_VICTIM` - Indicates that the user was tricked into authorizing or sending funds as part
   * of a scam.
   *
   * `BANK_ACCOUNT_TAKEOVER` - Indicates that a user's linked bank account was accessed or misused
   * by an unauthorized party.
   *
   * `BANK_CONNECTION_REVOKED` - Indicates that a linked bank account connection was revoked by the
   * financial institution, often due to suspected misuse, fraud, or security concerns.
   *
   * `CARD_TESTING` - Indicates that a card was used in small or repeated transactions to test its
   * validity.
   *
   * `UNAUTHORIZED_TRANSACTION` - Indicates that a transaction was made without the user's consent
   * or authorization.
   *
   * `CARD_CHARGEBACK` - Indicates that a card transaction was reversed via a chargeback claim.
   *
   * `ACH_RETURN` - Indicates that an ACH transaction was returned or reversed by the bank.
   *
   * `DISPUTE` - Indicates that a user filed a dispute regarding a transaction or account activity.
   *
   * `FIRST_PARTY_FRAUD` - Indicates that a user intentionally misrepresented themselves or their
   * actions for financial gain.
   *
   * `MISSED_PAYMENT` - Indicates that a user failed to make a required payment on time.
   *
   * `LOAN_STACKING` - Indicates that a user applied for or took out multiple loans simultaneously
   * beyond their ability to repay.
   *
   * `MONEY_LAUNDERING` - Indicates that funds are being moved through accounts to obscure their
   * illicit origin.
   *
   * `NO_FRAUD` - Indicates that an investigation determined no fraudulent activity occurred on
   * user/event (positive label).
   *
   * `OTHER` - Indicates that the case involves fraud or financial risk not covered by other report
   * types. Requires notes describing the report.
   */
  reportType: ProtectReportType;
  /**
   * The source that identified or reported the incident.
   *
   * `INTERNAL_REVIEW` - Incident was identified through internal fraud investigations or review
   * processes.
   *
   * `USER_SELF_REPORTED` - Incident was reported directly by the affected user.
   *
   * `BANK_FEEDBACK` - Incident was identified through bank feedback, including ACH returns and
   * connection revocations.
   *
   * `NETWORK_FEEDBACK` - Incident was identified through card network alerts or chargebacks.
   *
   * `AUTOMATED_SYSTEM` - Incident was detected by automated systems such as fraud models or rule
   * engines.
   *
   * `THIRD_PARTY_ALERT` - Incident was identified through external vendor or consortium alerts.
   *
   * `OTHER` - Incident was identified through a source not covered by other categories.
   */
  reportSource: ProtectReportSource;
  /** Bank account information associated with the incident. */
  bankAccount?: ProtectBankAccount | null;
  /** Must be a valid ACH return code (e.g. `R01`), required if `report_type` is `ACH_RETURN`. */
  achReturnCode?: string | null;
  /** Additional context or details about the report, required if `report_type` is `OTHER`. */
  notes?: string | null;
};

export const protectReportCreateRequestSchema: Schema<ProtectReportCreateRequest> =
  s.object<ProtectReportCreateRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    userId: s.optional(s.string()),
    incidentEvent: s.optionalNullable(s.lazy(() => protectIncidentEventSchema)),
    reportConfidence: protectReportConfidenceSchema,
    reportType: protectReportTypeSchema,
    reportSource: protectReportSourceSchema,
    bankAccount: s.optionalNullable(s.lazy(() => protectBankAccountSchema)),
    achReturnCode: s.optionalNullable(s.string()),
    notes: s.optionalNullable(s.string()),
    _keysMap: {
      clientId: "client_id",
      userId: "user_id",
      incidentEvent: "incident_event",
      reportConfidence: "report_confidence",
      reportType: "report_type",
      reportSource: "report_source",
      bankAccount: "bank_account",
      achReturnCode: "ach_return_code",
    },
  });
