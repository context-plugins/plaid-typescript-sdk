import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IncomeVerificationDocumentsDownloadRequest = {
  clientId?: string;
  secret?: string;
  incomeVerificationId?: string | null;
  accessToken?: string | null;
  documentId?: string | null;
};

export const incomeVerificationDocumentsDownloadRequestSchema: Schema<IncomeVerificationDocumentsDownloadRequest> =
  s.object<IncomeVerificationDocumentsDownloadRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    incomeVerificationId: s.optionalNullable(s.string()),
    accessToken: s.optionalNullable(s.string()),
    documentId: s.optionalNullable(s.string()),
    _keysMap: {
      clientId: "client_id",
      incomeVerificationId: "income_verification_id",
      accessToken: "access_token",
      documentId: "document_id",
    },
  });
