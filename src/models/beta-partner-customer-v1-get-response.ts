import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { betaPartnerEndCustomerSchema, type BetaPartnerEndCustomer } from "./beta-partner-end-customer.js";

export type BetaPartnerCustomerV1GetResponse = {
  endCustomer?: BetaPartnerEndCustomer;
  requestId?: string;
};

export const betaPartnerCustomerV1GetResponseSchema: Schema<BetaPartnerCustomerV1GetResponse> =
  s.object<BetaPartnerCustomerV1GetResponse>({
    endCustomer: s.optional(s.lazy(() => betaPartnerEndCustomerSchema)),
    requestId: s.optional(s.string()),
    _keysMap: {
      endCustomer: "end_customer",
      requestId: "request_id",
    },
  });
