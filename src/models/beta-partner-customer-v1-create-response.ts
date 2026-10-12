import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  betaPartnerEndCustomerWithSecretsSchema,
  type BetaPartnerEndCustomerWithSecrets,
} from "./beta-partner-end-customer-with-secrets.js";

/** Response schema for `/beta/partner/customer/v1/create`. */
export type BetaPartnerCustomerV1CreateResponse = {
  /**
   * The details for the newly created end customer, including secrets for non-Production
   * environments.
   */
  endCustomer?: BetaPartnerEndCustomerWithSecrets;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId?: string;
};

export const betaPartnerCustomerV1CreateResponseSchema: Schema<BetaPartnerCustomerV1CreateResponse> =
  s.object<BetaPartnerCustomerV1CreateResponse>({
    endCustomer: s.optional(s.lazy(() => betaPartnerEndCustomerWithSecretsSchema)),
    requestId: s.optional(s.string()),
    _keysMap: {
      endCustomer: "end_customer",
      requestId: "request_id",
    },
  });
