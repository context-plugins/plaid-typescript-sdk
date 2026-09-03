import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferQuestionnaireCreateRequest = {
  clientId?: string;
  secret?: string;
  originatorClientId: string;
  redirectUri: string;
};

export const transferQuestionnaireCreateRequestSchema: Schema<TransferQuestionnaireCreateRequest> =
  s.object<TransferQuestionnaireCreateRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    originatorClientId: s.string(),
    redirectUri: s.string(),
    _keysMap: {
      clientId: "client_id",
      originatorClientId: "originator_client_id",
      redirectUri: "redirect_uri",
    },
  });
