import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { partnerEndCustomerSchema, type PartnerEndCustomer } from "./partner-end-customer.js";

/** Response schema for `/partner/customer/get`. */
export type PartnerCustomerGetResponse = {
  /** The details for an end customer. */
  endCustomer?: PartnerEndCustomer;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId?: string;
};

export const partnerCustomerGetResponseSchema: Schema<PartnerCustomerGetResponse> =
  s.object<PartnerCustomerGetResponse>({
    endCustomer: s.optional(s.lazy(() => partnerEndCustomerSchema)),
    requestId: s.optional(s.string()),
    _keysMap: {
      endCustomer: "end_customer",
      requestId: "request_id",
    },
  });
