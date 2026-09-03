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

export type InstitutionSupportedNetworks = {
  rtp: TransferCapabilitiesGetRtp;
  rfp: TransferCapabilitiesGetRfP;
};

export const institutionSupportedNetworksSchema: Schema<InstitutionSupportedNetworks> =
  s.object<InstitutionSupportedNetworks>({
    rtp: transferCapabilitiesGetRtpSchema,
    rfp: transferCapabilitiesGetRfPSchema,
  });
