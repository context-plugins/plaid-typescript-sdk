import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { productsSchema, type Products } from "./products.js";

/** Request schema for `/beta/partner/customer/v1/enable`. */
export type BetaPartnerCustomerV1EnableRequest = {
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
  products?: Products[];
};

export const betaPartnerCustomerV1EnableRequestSchema: Schema<BetaPartnerCustomerV1EnableRequest> =
  s.object<BetaPartnerCustomerV1EnableRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    endCustomerClientId: s.string(),
    products: s.optional(s.array(s.lazy(() => productsSchema))),
    _keysMap: {
      clientId: "client_id",
      endCustomerClientId: "end_customer_client_id",
    },
  });
