import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  partnerEndCustomerWithSecretsSchema,
  type PartnerEndCustomerWithSecrets,
} from "./partner-end-customer-with-secrets.js";

export type PartnerCustomerCreateResponse = {
  endCustomer?: PartnerEndCustomerWithSecrets;
  requestId?: string;
};

export const partnerCustomerCreateResponseSchema: Schema<PartnerCustomerCreateResponse> =
  s.object<PartnerCustomerCreateResponse>({
    endCustomer: s.optional(s.lazy(() => partnerEndCustomerWithSecretsSchema)),
    requestId: s.optional(s.string()),
    _keysMap: {
      endCustomer: "end_customer",
      requestId: "request_id",
    },
  });
