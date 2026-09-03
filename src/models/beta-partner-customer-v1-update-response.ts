import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { betaPartnerEndCustomerSchema, type BetaPartnerEndCustomer } from "./beta-partner-end-customer.js";

export type BetaPartnerCustomerV1UpdateResponse = {
  endCustomer?: BetaPartnerEndCustomer;
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
