import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  personalFinanceCategoryVersionSchema,
  type PersonalFinanceCategoryVersion,
} from "./personal-finance-category-version.js";
import { transactionStreamSchema, type TransactionStream } from "./transaction-stream.js";

/**
 * TransactionsRecurringGetResponse defines the response schema for `/transactions/recurring/get`
 */
export type TransactionsRecurringGetResponse = {
  /** An array of inflow transaction streams. */
  inflowStreams: TransactionStream[];
  /** An array of expense transaction streams. */
  outflowStreams: TransactionStream[];
  /**
   * Timestamp in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format (`YYYY-MM-DDTHH:mm:ssZ`)
   * indicating the last time transaction streams for the given account were updated on
   */
  updatedDatetime: Date;
  /**
   * Indicates which version of the personal finance category taxonomy is being used. [View PFCv2
   * and PFCv1 taxonomies](https://plaid.com/documents/pfc-taxonomy-all.csv).
   *
   * If you enabled Transactions or Enrich before December 3, 2025 you will receive the `v1`
   * taxonomy by default and may request `v2` by explicitly setting this field to `v2` in the
   * request.
   *
   * If you enabled Transactions or Enrich on or after December 3, 2025, you may only receive the
   * `v2` taxonomy.
   */
  personalFinanceCategoryVersion?: PersonalFinanceCategoryVersion;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const transactionsRecurringGetResponseSchema: Schema<TransactionsRecurringGetResponse> =
  s.object<TransactionsRecurringGetResponse>({
    inflowStreams: s.array(s.lazy(() => transactionStreamSchema)),
    outflowStreams: s.array(s.lazy(() => transactionStreamSchema)),
    updatedDatetime: s.dateTime(),
    personalFinanceCategoryVersion: s.optional(s.lazy(() => personalFinanceCategoryVersionSchema)),
    requestId: s.string(),
    _keysMap: {
      inflowStreams: "inflow_streams",
      outflowStreams: "outflow_streams",
      updatedDatetime: "updated_datetime",
      personalFinanceCategoryVersion: "personal_finance_category_version",
      requestId: "request_id",
    },
  });
