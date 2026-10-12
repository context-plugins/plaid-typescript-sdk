import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  signalEvaluateCoreAttributesSchema,
  type SignalEvaluateCoreAttributes,
} from "./signal-evaluate-core-attributes.js";
import { signalEvaluateRulesetSchema, type SignalEvaluateRuleset } from "./signal-evaluate-ruleset.js";
import { signalEvaluateScoresSchema, type SignalEvaluateScores } from "./signal-evaluate-scores.js";
import { signalWarningSchema, type SignalWarning } from "./signal-warning.js";

/** ProcessorSignalEvaluateResponse defines the response schema for `/processor/signal/evaluate` */
export type ProcessorSignalEvaluateResponse = {
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
  /**
   * Risk scoring details broken down by risk category. When using a Balance-only ruleset, this
   * object will not be returned.
   */
  scores: SignalEvaluateScores | null;
  /**
   * The core attributes object contains additional data that can be used to assess the ACH return
   * risk.
   *
   * If using a Balance-only ruleset, only `available_balance` and `current_balance` will be
   * returned as core attributes. If using a Signal Transaction Scores ruleset, over 80 core
   * attributes will be returned. Examples of attributes include:
   *
   * `available_balance` and `current_balance`: The balance in the ACH transaction funding account
   * `days_since_first_plaid_connection`: The number of days since the first time the Item was
   * connected to an application via Plaid `plaid_connections_count_7d`: The number of times the
   * Item has been connected to applications via Plaid over the past 7 days
   * `plaid_connections_count_30d`: The number of times the Item has been connected to applications
   * via Plaid over the past 30 days `total_plaid_connections_count`: The number of times the Item
   * has been connected to applications via Plaid `is_savings_or_money_market_account`: Indicates
   * whether the ACH transaction funding account is a savings/money market account
   *
   * For the full list and detailed documentation of core attributes available, or to request that
   * core attributes not be returned, contact sales or your Plaid account manager.
   */
  coreAttributes?: SignalEvaluateCoreAttributes;
  /**
   * Details about the transaction result after evaluation by the requested Ruleset. If a
   * `ruleset_key` is not provided, for customers who began using Signal Transaction Scores before
   * October 15, 2025, by default, this field will be omitted. To learn more, see [Signal
   * Rules](https://plaid.com/docs/signal/signal-rules/).
   */
  ruleset?: SignalEvaluateRuleset | null;
  /**
   * If bank information was not available to be used in the Signal Transaction Scores model, this
   * array contains warnings describing why bank data is missing. If you want to receive an API
   * error instead of scores in the case of missing bank data, file a support ticket or contact your
   * Plaid account manager.
   */
  warnings?: SignalWarning[];
};

export const processorSignalEvaluateResponseSchema: Schema<ProcessorSignalEvaluateResponse> =
  s.object<ProcessorSignalEvaluateResponse>({
    requestId: s.string(),
    scores: s.nullable(s.lazy(() => signalEvaluateScoresSchema)),
    coreAttributes: s.optional(s.lazy(() => signalEvaluateCoreAttributesSchema)),
    ruleset: s.optionalNullable(s.lazy(() => signalEvaluateRulesetSchema)),
    warnings: s.optional(s.array(s.lazy(() => signalWarningSchema))),
    _keysMap: {
      requestId: "request_id",
      coreAttributes: "core_attributes",
    },
  });
