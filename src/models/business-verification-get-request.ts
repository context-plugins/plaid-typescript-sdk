import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BusinessVerificationGetRequest = {
  businessVerificationId: string;
  secret?: string;
  clientId?: string;
};

export const businessVerificationGetRequestSchema: Schema<BusinessVerificationGetRequest> =
  s.object<BusinessVerificationGetRequest>({
    businessVerificationId: s.string(),
    secret: s.optional(s.string()),
    clientId: s.optional(s.string()),
    _keysMap: {
      businessVerificationId: "business_verification_id",
      clientId: "client_id",
    },
  });
