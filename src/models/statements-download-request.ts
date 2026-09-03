import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type StatementsDownloadRequest = {
  accessToken: string;
  clientId?: string;
  secret?: string;
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
