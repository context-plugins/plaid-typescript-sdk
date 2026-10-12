import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { betaPartnerEndCustomerSchema, type BetaPartnerEndCustomer } from "./beta-partner-end-customer.js";

/** Response schema for `/beta/partner/customer/v1/update`. */
export type BetaPartnerCustomerV1UpdateResponse = {
  /** The details for an end customer. */
  endCustomer?: BetaPartnerEndCustomer;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId?: string;
};

export const betaPartnerCustomerV1UpdateResponseSchema: Schema<BetaPartnerCustomerV1UpdateResponse> =
  s.object<BetaPartnerCustomerV1UpdateResponse>({
    endCustomer: s.optional(s.lazy(() => betaPartnerEndCustomerSchema)),
    requestId: s.optional(s.string()),
    _keysMap: {
      endCustomer: "end_customer",
      requestId: "request_id",
    },
  });
