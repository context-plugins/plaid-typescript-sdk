import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RecaptchaRequiredError = {
  errorType: string;
  errorCode: string;
  displayMessage: string | null;
  httpCode: number;
  linkUserExperience?: string;
  commonCauses?: string;
  troubleshootingSteps?: string;
};

export const recaptchaRequiredErrorSchema: Schema<RecaptchaRequiredError> = s.object<RecaptchaRequiredError>({
  errorType: s.string(),
  errorCode: s.string(),
  displayMessage: s.nullable(s.string()),
  httpCode: s.number(),
  linkUserExperience: s.optional(s.string()),
  commonCauses: s.optional(s.string()),
  troubleshootingSteps: s.optional(s.string()),
  _keysMap: {
    errorType: "error_type",
    errorCode: "error_code",
    displayMessage: "display_message",
    httpCode: "http_code",
    linkUserExperience: "link_user_experience",
    commonCauses: "common_causes",
    troubleshootingSteps: "troubleshooting_steps",
  },
});
