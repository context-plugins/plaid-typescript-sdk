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

export type IdentityVerificationRetryRequest = {
  clientUserId: string;
  templateId: string;
  strategy: Strategy;
  user?: IdentityVerificationRequestUser | null;
  steps?: IdentityVerificationRetryRequestStepsObject | null;
  isShareable?: boolean | null;
  clientId?: string;
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
