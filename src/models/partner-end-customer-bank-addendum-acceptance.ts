import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The bank addendum acceptance for the end customer. */
export type PartnerEndCustomerBankAddendumAcceptance = {
  /** Denotes whether the end customer has accepted the bank addendum terms. */
  customerAccepted?: boolean;
  /** The IP address of the end customer when they accepted the bank addendum. */
  customerIpAddress?: string;
  /**
   * The timestamp of when the end customer accepted the bank addendum in [ISO
   * 8601](https://wikipedia.org/wiki/ISO_8601) format (`YYYY-MM-DDTHH:mm:ssZ`).
   */
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
