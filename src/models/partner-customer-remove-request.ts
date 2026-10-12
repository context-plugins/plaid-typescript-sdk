import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Request schema for `/partner/customer/remove`. */
export type PartnerCustomerRemoveRequest = {
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
  /** The `client_id` of the end customer to be removed. */
  endCustomerClientId: string;
};

export const partnerCustomerRemoveRequestSchema: Schema<PartnerCustomerRemoveRequest> =
  s.object<PartnerCustomerRemoveRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    endCustomerClientId: s.string(),
    _keysMap: {
      clientId: "client_id",
      endCustomerClientId: "end_customer_client_id",
    },
  });
