import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PartnerCustomerGetRequest = {
  clientId?: string;
  secret?: string;
  endCustomerClientId: string;
};

export const partnerCustomerGetRequestSchema: Schema<PartnerCustomerGetRequest> =
  s.object<PartnerCustomerGetRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    endCustomerClientId: s.string(),
    _keysMap: {
      clientId: "client_id",
      endCustomerClientId: "end_customer_client_id",
    },
  });
