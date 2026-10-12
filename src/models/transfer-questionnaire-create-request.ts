import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Defines the request schema for `/transfer/questionnaire/create` */
export type TransferQuestionnaireCreateRequest = {
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
  /** Client ID of the end customer. */
  originatorClientId: string;
  /**
   * URL the end customer will be redirected to after completing questions in Plaid-hosted
   * onboarding flow.
   */
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
