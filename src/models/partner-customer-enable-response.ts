import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Response schema for `/partner/customer/enable`. */
export type PartnerCustomerEnableResponse = {
  /** The end customer's secret key for the Production environment. */
  productionSecret?: string;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId?: string;
};

export const partnerCustomerEnableResponseSchema: Schema<PartnerCustomerEnableResponse> =
  s.object<PartnerCustomerEnableResponse>({
    productionSecret: s.optional(s.string()),
    requestId: s.optional(s.string()),
    _keysMap: {
      productionSecret: "production_secret",
      requestId: "request_id",
    },
  });
