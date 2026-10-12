import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { betaPartnerEndCustomerSchema, type BetaPartnerEndCustomer } from "./beta-partner-end-customer.js";

/** Response schema for `/beta/partner/customer/v1/get`. */
export type BetaPartnerCustomerV1GetResponse = {
  /** The details for an end customer. */
  endCustomer?: BetaPartnerEndCustomer;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId?: string;
};

export const betaPartnerCustomerV1GetResponseSchema: Schema<BetaPartnerCustomerV1GetResponse> =
  s.object<BetaPartnerCustomerV1GetResponse>({
    endCustomer: s.optional(s.lazy(() => betaPartnerEndCustomerSchema)),
    requestId: s.optional(s.string()),
    _keysMap: {
      endCustomer: "end_customer",
      requestId: "request_id",
    },
  });
