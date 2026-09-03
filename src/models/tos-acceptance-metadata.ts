import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TosAcceptanceMetadata = {
  agreementAccepted: boolean;
  originatorIpAddress: string;
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
