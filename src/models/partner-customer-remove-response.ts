import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PartnerCustomerRemoveResponse = {
  requestId?: string;
};

export const partnerCustomerRemoveResponseSchema: Schema<PartnerCustomerRemoveResponse> =
  s.object<PartnerCustomerRemoveResponse>({
    requestId: s.optional(s.string()),
    _keysMap: {
      requestId: "request_id",
    },
  });
