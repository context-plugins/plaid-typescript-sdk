import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { partnerEndCustomerSchema, type PartnerEndCustomer } from "./partner-end-customer.js";

export type PartnerCustomerGetResponse = {
  endCustomer?: PartnerEndCustomer;
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
