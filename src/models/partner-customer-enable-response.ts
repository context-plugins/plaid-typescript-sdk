import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PartnerCustomerEnableResponse = {
  productionSecret?: string;
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
