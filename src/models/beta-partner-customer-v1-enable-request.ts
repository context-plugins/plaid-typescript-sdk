import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { productsSchema, type Products } from "./products.js";

export type BetaPartnerCustomerV1EnableRequest = {
  clientId?: string;
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
