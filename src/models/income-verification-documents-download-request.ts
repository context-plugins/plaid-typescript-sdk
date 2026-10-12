import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * IncomeVerificationDocumentsDownloadRequest defines the request schema for
 * `/income/verification/documents/download`.
 */
export type IncomeVerificationDocumentsDownloadRequest = {
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
  /**
   * The ID of the verification.
   *
   * @deprecated
   */
  incomeVerificationId?: string | null;
  /** The access token associated with the Item for which data is being requested. */
  accessToken?: string | null;
  /**
   * The document ID to download. If passed, a single document will be returned in the resulting zip
   * file, rather than all document
   */
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
