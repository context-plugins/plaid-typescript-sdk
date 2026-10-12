import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Request schema for `/beta/partner/customer/v1/get`. */
export type BetaPartnerCustomerV1GetRequest = {
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
  endCustomerClientId: string;
};

export const betaPartnerCustomerV1GetRequestSchema: Schema<BetaPartnerCustomerV1GetRequest> =
  s.object<BetaPartnerCustomerV1GetRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    endCustomerClientId: s.string(),
    _keysMap: {
      clientId: "client_id",
      endCustomerClientId: "end_customer_client_id",
    },
  });
