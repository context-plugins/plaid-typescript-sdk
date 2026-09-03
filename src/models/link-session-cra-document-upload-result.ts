import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LinkSessionCraDocumentUploadResult = {
  numBankStatementsUploaded: number;
};

export const linkSessionCraDocumentUploadResultSchema: Schema<LinkSessionCraDocumentUploadResult> =
  s.object<LinkSessionCraDocumentUploadResult>({
    numBankStatementsUploaded: s.number(),
    _keysMap: {
      numBankStatementsUploaded: "num_bank_statements_uploaded",
    },
  });
