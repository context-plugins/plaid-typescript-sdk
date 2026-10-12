import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { flowTypeSchema, type FlowType } from "./flow-type.js";
import { rerouteToCredentialsSchema, type RerouteToCredentials } from "./reroute-to-credentials.js";

/**
 * Specifies options for initializing Link for use with the Auth product. This field can be used to
 * enable or disable extended Auth flows for the resulting Link session. Omitting any field will
 * result in a default that can be configured by your account manager. The default behavior
 * described in the documentation is the default behavior that will apply if you have not requested
 * your account manager to apply a different default. If you have enabled the [Dashboard Account
 * Verification pane](https://dashboard.plaid.com/account-verification), the settings enabled there
 * will override any settings in this object.
 */
export type LinkTokenCreateRequestAuth = {
  /**
   * Specifies whether Auth Type Select is enabled for the Link session, allowing the end user to
   * choose between linking via a credentials-based flow (i.e. Instant Auth, Instant Match,
   * Automated Micro-deposits) or a manual flow that does not require login (all other Auth flows)
   * prior to selecting their financial institution. Default behavior is `false`.
   */
  authTypeSelectEnabled?: boolean;
  /**
   * Specifies whether the Link session is enabled for the Automated Micro-deposits flow. Default
   * behavior is `false`.
   */
  automatedMicrodepositsEnabled?: boolean;
  /**
   * Specifies whether the Link session is enabled for the Instant Match flow. Instant Match is
   * enabled by default. Instant Match can be disabled by setting this field to `false`.
   */
  instantMatchEnabled?: boolean;
  /**
   * Specifies whether the Link session is enabled for the Same-Day Micro-deposits flow. Default
   * behavior is `false`.
   */
  sameDayMicrodepositsEnabled?: boolean;
  /**
   * Specifies whether the Link session is enabled for the Instant Micro-deposits flow. Default
   * behavior for Plaid teams created after November 2023 is `false`; default behavior for Plaid
   * teams created before that date is `true`.
   */
  instantMicrodepositsEnabled?: boolean;
  /**
   * Specifies what type of [Reroute to
   * Credentials](https://plaid.com/docs/auth/coverage/flow-options/#removing-manual-verification-entry-points-with-reroute-to-credentials)
   * pane should be used in the Link session for the Same-Day Micro-deposits flow. Default behavior
   * is `OPTIONAL`.
   */
  rerouteToCredentials?: RerouteToCredentials;
  /**
   * Database Match has been deprecated and replaced with Database Auth. Use the [Account
   * Verification Dashboard](https://dashboard.plaid.com/account-verification) to enable Database
   * Auth.
   *
   * @deprecated
   */
  databaseMatchEnabled?: boolean;
  /**
   * Database Insights has been deprecated and replaced with Database Auth. Use the [Account
   * Verification Dashboard](https://dashboard.plaid.com/account-verification) to enable Database
   * Auth. In Canada, Database Auth is in early availability and cannot yet be managed via the
   * Dashboard; it must be enabled by passing `database_insights_enabled: true` in
   * `/link/token/create`.
   *
   * @deprecated
   */
  databaseInsightsEnabled?: boolean;
  /**
   * This field has been deprecated in favor of `auth_type_select_enabled`.
   *
   * @deprecated
   */
  flowType?: FlowType;
  /**
   * Specifies whether the Link session is enabled for SMS micro-deposits verification. Default
   * behavior is `true`.
   */
  smsMicrodepositsVerificationEnabled?: boolean;
};

export const linkTokenCreateRequestAuthSchema: Schema<LinkTokenCreateRequestAuth> =
  s.object<LinkTokenCreateRequestAuth>({
    authTypeSelectEnabled: s.optional(s.boolean()),
    automatedMicrodepositsEnabled: s.optional(s.boolean()),
    instantMatchEnabled: s.optional(s.boolean()),
    sameDayMicrodepositsEnabled: s.optional(s.boolean()),
    instantMicrodepositsEnabled: s.optional(s.boolean()),
    rerouteToCredentials: s.optional(s.lazy(() => rerouteToCredentialsSchema)),
    databaseMatchEnabled: s.optional(s.boolean()),
    databaseInsightsEnabled: s.optional(s.boolean()),
    flowType: s.optional(s.lazy(() => flowTypeSchema)),
    smsMicrodepositsVerificationEnabled: s.optional(s.boolean()),
    _keysMap: {
      authTypeSelectEnabled: "auth_type_select_enabled",
      automatedMicrodepositsEnabled: "automated_microdeposits_enabled",
      instantMatchEnabled: "instant_match_enabled",
      sameDayMicrodepositsEnabled: "same_day_microdeposits_enabled",
      instantMicrodepositsEnabled: "instant_microdeposits_enabled",
      rerouteToCredentials: "reroute_to_credentials",
      databaseMatchEnabled: "database_match_enabled",
      databaseInsightsEnabled: "database_insights_enabled",
      flowType: "flow_type",
      smsMicrodepositsVerificationEnabled: "sms_microdeposits_verification_enabled",
    },
  });
