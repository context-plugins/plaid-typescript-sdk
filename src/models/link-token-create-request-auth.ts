import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { flowTypeSchema, type FlowType } from "./flow-type.js";
import { rerouteToCredentialsSchema, type RerouteToCredentials } from "./reroute-to-credentials.js";

export type LinkTokenCreateRequestAuth = {
  authTypeSelectEnabled?: boolean;
  automatedMicrodepositsEnabled?: boolean;
  instantMatchEnabled?: boolean;
  sameDayMicrodepositsEnabled?: boolean;
  instantMicrodepositsEnabled?: boolean;
  rerouteToCredentials?: RerouteToCredentials;
  databaseMatchEnabled?: boolean;
  databaseInsightsEnabled?: boolean;
  flowType?: FlowType;
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
