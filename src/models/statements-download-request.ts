import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** StatementsDownloadRequest defines the request schema for `/statements/download` */
export type StatementsDownloadRequest = {
  /** The access token associated with the Item for which data is being requested. */
  accessToken: string;
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
  /** Plaid's unique identifier for the statement. */
  statementId: string;
};

export const statementsDownloadRequestSchema: Schema<StatementsDownloadRequest> =
  s.object<StatementsDownloadRequest>({
    accessToken: s.string(),
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    statementId: s.string(),
    _keysMap: {
      accessToken: "access_token",
      clientId: "client_id",
      statementId: "statement_id",
    },
  });
