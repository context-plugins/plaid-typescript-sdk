import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  institutionSupportedNetworksSchema,
  type InstitutionSupportedNetworks,
} from "./institution-supported-networks.js";

/** Defines the response schema for `/transfer/capabilities/get` */
export type TransferCapabilitiesGetResponse = {
  /** Contains the RTP and RfP network and types supported by the linked Item's institution. */
  institutionSupportedNetworks: InstitutionSupportedNetworks;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
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
