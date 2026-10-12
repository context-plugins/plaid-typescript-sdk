import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  identityVerificationRequestUserSchema,
  type IdentityVerificationRequestUser,
} from "./identity-verification-request-user.js";
import {
  identityVerificationRetryRequestStepsObjectSchema,
  type IdentityVerificationRetryRequestStepsObject,
} from "./identity-verification-retry-request-steps-object.js";
import { strategySchema, type Strategy } from "./strategy.js";

/** Request input for retrying an identity verification attempt */
export type IdentityVerificationRetryRequest = {
  /**
   * A unique ID that identifies the end user in your system. Either a `user_id` or the
   * `client_user_id` must be provided. This ID can also be used to associate user-specific data
   * from other Plaid products. Financial Account Matching requires this field and the
   * `/link/token/create` `client_user_id` to be consistent. Personally identifiable information,
   * such as an email address or phone number, should not be used in the `client_user_id`.
   */
  clientUserId: string;
  /**
   * ID of the associated Identity Verification template. Like all Plaid identifiers, this is
   * case-sensitive.
   */
  templateId: string;
  /**
   * An instruction specifying what steps the new Identity Verification attempt should require the
   * user to complete:
   *
   *
   * `reset` - Restart the user at the beginning of the session, regardless of whether they
   * successfully completed part of their previous session.
   *
   * `incomplete` - Start the new session at the step that the user failed in the previous session,
   * skipping steps that have already been successfully completed.
   *
   * `infer` - If the most recent Identity Verification attempt associated with the given
   * `client_user_id` has a status of `failed` or `expired`, retry using the `incomplete` strategy.
   * Otherwise, use the `reset` strategy.
   *
   * `custom` - Start the new session with a custom configuration, specified by the value of the
   * `steps` field
   *
   * Note:
   *
   * The `incomplete` strategy cannot be applied if the session's failing step is
   * `watchlist_screening` or `risk_check`.
   *
   * The `infer` strategy cannot be applied if the session's status is still `active`
   */
  strategy: Strategy;
  /**
   * User information collected outside of Link, most likely via your own onboarding process.
   *
   * Each of the following identity fields are optional:
   *
   * `email_address`
   *
   * `phone_number`
   *
   * `date_of_birth`
   *
   * `name`
   *
   * `address`
   *
   * `id_number`
   *
   * Specifically, these fields are optional in that they can either be fully provided (satisfying
   * every required field in their subschema) or omitted from the request entirely by not providing
   * the key or value. Providing these fields via the API will result in Link skipping the data
   * collection process for the associated user. All verification steps enabled in the associated
   * Identity Verification Template will still be run. Verification steps will either be run
   * immediately, or once the user completes the `accept_tos` step, depending on the value provided
   * to the `gave_consent` field.
   */
  user?: IdentityVerificationRequestUser | null;
  /**
   * Instructions for the `custom` retry strategy specifying which steps should be required or
   * skipped.
   *
   *
   * Note:
   *
   *
   * This field must be provided when the retry strategy is `custom` and must be omitted otherwise.
   *
   * Custom retries override settings in your Plaid Template. For example, if your Plaid Template
   * has `verify_sms` disabled, a custom retry with `verify_sms` enabled will still require the
   * step.
   *
   * The `selfie_check` step is currently not supported on the sandbox server. Sandbox requests will
   * silently disable the `selfie_check` step when provided.
   */
  steps?: IdentityVerificationRetryRequestStepsObject | null;
  /**
   * A flag specifying whether you would like Plaid to expose a shareable URL for the verification
   * being retried. If a value for this flag is not specified, the `is_shareable` setting from the
   * original verification attempt will be used.
   */
  isShareable?: boolean | null;
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
};

export const identityVerificationRetryRequestSchema: Schema<IdentityVerificationRetryRequest> =
  s.object<IdentityVerificationRetryRequest>({
    clientUserId: s.string(),
    templateId: s.string(),
    strategy: strategySchema,
    user: s.optionalNullable(s.lazy(() => identityVerificationRequestUserSchema)),
    steps: s.optionalNullable(s.lazy(() => identityVerificationRetryRequestStepsObjectSchema)),
    isShareable: s.optionalNullable(s.boolean()),
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    _keysMap: {
      clientUserId: "client_user_id",
      templateId: "template_id",
      isShareable: "is_shareable",
      clientId: "client_id",
    },
  });
