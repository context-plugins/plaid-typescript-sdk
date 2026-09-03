import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferQuestionnaireCreateResponse = {
  onboardingUrl: string;
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
