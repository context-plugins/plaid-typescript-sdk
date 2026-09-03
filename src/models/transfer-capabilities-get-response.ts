import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  institutionSupportedNetworksSchema,
  type InstitutionSupportedNetworks,
} from "./institution-supported-networks.js";

export type TransferCapabilitiesGetResponse = {
  institutionSupportedNetworks: InstitutionSupportedNetworks;
  requestId: string;
};

export const transferCapabilitiesGetResponseSchema: Schema<TransferCapabilitiesGetResponse> =
  s.object<TransferCapabilitiesGetResponse>({
    institutionSupportedNetworks: institutionSupportedNetworksSchema,
    requestId: s.string(),
    _keysMap: {
      institutionSupportedNetworks: "institution_supported_networks",
      requestId: "request_id",
    },
  });
