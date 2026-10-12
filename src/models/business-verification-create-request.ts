import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  businessVerificationCreateRequestBusinessSchema,
  type BusinessVerificationCreateRequestBusiness,
} from "./business-verification-create-request-business.js";

/** Request input for creating a business verification */
export type BusinessVerificationCreateRequest = {
  /**
   * A unique ID that identifies the end user in your system. Either a `user_id` or the
   * `client_user_id` must be provided. This ID can also be used to associate user-specific data
   * from other Plaid products. Financial Account Matching requires this field and the
   * `/link/token/create` `client_user_id` to be consistent. Personally identifiable information,
   * such as an email address or phone number, should not be used in the `client_user_id`.
   */
  clientUserId: string;
  /** Business information provided in the verification request */
  business?: BusinessVerificationCreateRequestBusiness | null;
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
