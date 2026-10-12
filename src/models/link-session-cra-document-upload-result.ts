import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The details of a document upload CRA session in Link */
export type LinkSessionCraDocumentUploadResult = {
  /** The number of bank statements uploaded by the user. */
  numBankStatementsUploaded: number;
};

export const linkSessionCraDocumentUploadResultSchema: Schema<LinkSessionCraDocumentUploadResult> =
  s.object<LinkSessionCraDocumentUploadResult>({
    numBankStatementsUploaded: s.int(),
    _keysMap: {
      numBankStatementsUploaded: "num_bank_statements_uploaded",
    },
  });
