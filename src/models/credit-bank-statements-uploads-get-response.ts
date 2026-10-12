import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  creditBankStatementUploadItemSchema,
  type CreditBankStatementUploadItem,
} from "./credit-bank-statement-upload-item.js";

/**
 * CreditBankStatementsUploadsGetResponse defines the response schema for
 * `/credit/bank_statements/uploads/get`
 */
export type CreditBankStatementsUploadsGetResponse = {
  /** Array of bank statement upload items. */
  items: CreditBankStatementUploadItem[];
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const creditBankStatementsUploadsGetResponseSchema: Schema<CreditBankStatementsUploadsGetResponse> =
  s.object<CreditBankStatementsUploadsGetResponse>({
    items: s.array(s.lazy(() => creditBankStatementUploadItemSchema)),
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
