import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Metadata related to the acceptance of Terms of Service */
export type TosAcceptanceMetadata = {
  /** Indicates whether the TOS agreement was accepted */
  agreementAccepted: boolean;
  /**
   * The IP address of the originator when they accepted the TOS. Formatted as an IPv4 or IPv6 IP
   * address
   */
  originatorIpAddress: string;
  /** ISO8601 timestamp indicating when the originator accepted the TOS */
  agreementAcceptedAt: Date;
};

export const tosAcceptanceMetadataSchema: Schema<TosAcceptanceMetadata> = s.object<TosAcceptanceMetadata>({
  agreementAccepted: s.boolean(),
  originatorIpAddress: s.string(),
  agreementAcceptedAt: s.dateTime(),
  _keysMap: {
    agreementAccepted: "agreement_accepted",
    originatorIpAddress: "originator_ip_address",
    agreementAcceptedAt: "agreement_accepted_at",
  },
});
