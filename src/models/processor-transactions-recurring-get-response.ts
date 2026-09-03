import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  personalFinanceCategoryVersionSchema,
  type PersonalFinanceCategoryVersion,
} from "./personal-finance-category-version.js";
import { transactionStreamSchema, type TransactionStream } from "./transaction-stream.js";

export type ProcessorTransactionsRecurringGetResponse = {
  inflowStreams: TransactionStream[];
  outflowStreams: TransactionStream[];
  updatedDatetime: Date;
  personalFinanceCategoryVersion?: PersonalFinanceCategoryVersion;
  requestId: string;
};

export const processorTransactionsRecurringGetResponseSchema: Schema<ProcessorTransactionsRecurringGetResponse> =
  s.object<ProcessorTransactionsRecurringGetResponse>({
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
