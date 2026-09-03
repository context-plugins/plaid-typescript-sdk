import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  creditBankStatementUploadItemSchema,
  type CreditBankStatementUploadItem,
} from "./credit-bank-statement-upload-item.js";

export type CreditBankStatementsUploadsGetResponse = {
  items: CreditBankStatementUploadItem[];
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
