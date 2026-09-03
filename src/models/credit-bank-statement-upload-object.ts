import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  creditBankStatementUploadBankAccountSchema,
  type CreditBankStatementUploadBankAccount,
} from "./credit-bank-statement-upload-bank-account.js";
import {
  creditBankStatementUploadTransactionSchema,
  type CreditBankStatementUploadTransaction,
} from "./credit-bank-statement-upload-transaction.js";
import { creditDocumentMetadataSchema, type CreditDocumentMetadata } from "./credit-document-metadata.js";

export type CreditBankStatementUploadObject = {
  transactions: CreditBankStatementUploadTransaction[];
  documentMetadata: CreditDocumentMetadata;
  documentId: string | null;
  bankAccounts: CreditBankStatementUploadBankAccount[];
};

export const creditBankStatementUploadObjectSchema: Schema<CreditBankStatementUploadObject> =
  s.object<CreditBankStatementUploadObject>({
    transactions: s.array(s.lazy(() => creditBankStatementUploadTransactionSchema)),
    documentMetadata: creditDocumentMetadataSchema,
    documentId: s.nullable(s.string()),
    bankAccounts: s.array(s.lazy(() => creditBankStatementUploadBankAccountSchema)),
    _keysMap: {
      documentMetadata: "document_metadata",
      documentId: "document_id",
      bankAccounts: "bank_accounts",
    },
  });
