import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  businessVerificationCreateRequestBusinessSchema,
  type BusinessVerificationCreateRequestBusiness,
} from "./business-verification-create-request-business.js";

export type BusinessVerificationCreateRequest = {
  clientUserId: string;
  business?: BusinessVerificationCreateRequestBusiness | null;
  clientId?: string;
  secret?: string;
};

export const businessVerificationCreateRequestSchema: Schema<BusinessVerificationCreateRequest> =
  s.object<BusinessVerificationCreateRequest>({
    clientUserId: s.string(),
    business: s.optionalNullable(s.lazy(() => businessVerificationCreateRequestBusinessSchema)),
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    _keysMap: {
      clientUserId: "client_user_id",
      clientId: "client_id",
    },
  });
