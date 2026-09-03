import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PartnerEndCustomerBankAddendumAcceptance = {
  customerAccepted?: boolean;
  customerIpAddress?: string;
  customerAgreementTimestamp?: Date;
};

export const partnerEndCustomerBankAddendumAcceptanceSchema: Schema<PartnerEndCustomerBankAddendumAcceptance> =
  s.object<PartnerEndCustomerBankAddendumAcceptance>({
    customerAccepted: s.optional(s.boolean()),
    customerIpAddress: s.optional(s.string()),
    customerAgreementTimestamp: s.optional(s.dateTime()),
    _keysMap: {
      customerAccepted: "customer_accepted",
      customerIpAddress: "customer_ip_address",
      customerAgreementTimestamp: "customer_agreement_timestamp",
    },
  });
