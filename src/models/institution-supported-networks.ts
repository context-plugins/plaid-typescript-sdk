import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transferCapabilitiesGetRfPSchema,
  type TransferCapabilitiesGetRfP,
} from "./transfer-capabilities-get-rf-p.js";
import {
  transferCapabilitiesGetRtpSchema,
  type TransferCapabilitiesGetRtp,
} from "./transfer-capabilities-get-rtp.js";

/** Contains the RTP and RfP network and types supported by the linked Item's institution. */
export type InstitutionSupportedNetworks = {
  /** Contains the supported service types in RTP */
  rtp: TransferCapabilitiesGetRtp;
  /** Contains the supported service types in RfP */
  rfp: TransferCapabilitiesGetRfP;
};

export const institutionSupportedNetworksSchema: Schema<InstitutionSupportedNetworks> =
  s.object<InstitutionSupportedNetworks>({
    rtp: transferCapabilitiesGetRtpSchema,
    rfp: transferCapabilitiesGetRfPSchema,
  });
