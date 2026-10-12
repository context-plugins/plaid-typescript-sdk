import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Defines the response schema for `/transfer/questionnaire/create` */
export type TransferQuestionnaireCreateResponse = {
  /** Plaid-hosted onboarding URL that you will redirect the end customer to. */
  onboardingUrl: string;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const transferQuestionnaireCreateResponseSchema: Schema<TransferQuestionnaireCreateResponse> =
  s.object<TransferQuestionnaireCreateResponse>({
    onboardingUrl: s.string(),
    requestId: s.string(),
    _keysMap: {
      onboardingUrl: "onboarding_url",
      requestId: "request_id",
    },
  });
