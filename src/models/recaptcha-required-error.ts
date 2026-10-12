import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The request was flagged by Plaid's fraud system and requires additional verification to ensure
 * the user is not a bot.
 */
export type RecaptchaRequiredError = {
  /** `RECAPTCHA_ERROR` */
  errorType: string;
  /** `RECAPTCHA_REQUIRED` */
  errorCode: string;
  displayMessage: string | null;
  /** 400 */
  httpCode: number;
  /**
   * Your user will be prompted to solve a Google reCAPTCHA challenge in the Link Recaptcha pane. If
   * they solve the challenge successfully, the user's request is resubmitted and they are directed
   * to the next Item creation step.
   */
  linkUserExperience?: string;
  /**
   * Plaid's fraud system detects abusive traffic and considers a variety of parameters throughout
   * Item creation requests. When a request is considered risky or possibly fraudulent, Link
   * presents a reCAPTCHA for the user to solve.
   */
  commonCauses?: string;
  /**
   * Link will automatically guide your user through reCAPTCHA verification. As a general rule, we
   * recommend instrumenting basic fraud monitoring to detect and protect your website from spam and
   * abuse.
   *
   * If your user cannot verify their session, please submit a support ticket with the following
   * identifiers: `link_session_id` or `request_id`
   */
  troubleshootingSteps?: string;
};

export const recaptchaRequiredErrorSchema: Schema<RecaptchaRequiredError> = s.object<RecaptchaRequiredError>({
  errorType: s.string(),
  errorCode: s.string(),
  displayMessage: s.nullable(s.string()),
  httpCode: s.int(),
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
