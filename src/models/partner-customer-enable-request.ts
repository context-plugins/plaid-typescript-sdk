import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PartnerCustomerEnableRequest = {
  clientId?: string;
  secret?: string;
  endCustomerClientId: string;
};

export const partnerCustomerEnableRequestSchema: Schema<PartnerCustomerEnableRequest> =
  s.object<PartnerCustomerEnableRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    endCustomerClientId: s.string(),
    _keysMap: {
      clientId: "client_id",
      endCustomerClientId: "end_customer_client_id",
    },
  });
