import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Response schema for `/partner/customer/remove`. */
export type PartnerCustomerRemoveResponse = {
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId?: string;
};

export const partnerCustomerRemoveResponseSchema: Schema<PartnerCustomerRemoveResponse> =
  s.object<PartnerCustomerRemoveResponse>({
    requestId: s.optional(s.string()),
    _keysMap: {
      requestId: "request_id",
    },
  });
