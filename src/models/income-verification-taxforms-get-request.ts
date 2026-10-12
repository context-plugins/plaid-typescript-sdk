import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * IncomeVerificationTaxformsGetRequest defines the request schema for
 * `/income/verification/taxforms/get`
 */
export type IncomeVerificationTaxformsGetRequest = {
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
  /**
   * The ID of the verification.
   *
   * @deprecated
   */
  incomeVerificationId?: string | null;
  /** The access token associated with the Item for which data is being requested. */
  accessToken?: string | null;
};

export const incomeVerificationTaxformsGetRequestSchema: Schema<IncomeVerificationTaxformsGetRequest> =
  s.object<IncomeVerificationTaxformsGetRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    incomeVerificationId: s.optionalNullable(s.string()),
    accessToken: s.optionalNullable(s.string()),
    _keysMap: {
      clientId: "client_id",
      incomeVerificationId: "income_verification_id",
      accessToken: "access_token",
    },
  });
