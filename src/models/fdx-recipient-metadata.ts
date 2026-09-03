import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FdxRecipientMetadata = {
  recipientId: string;
  clientName: string;
  logoUri?: string | null;
  thirdPartyLegalName: string;
};

export const fdxRecipientMetadataSchema: Schema<FdxRecipientMetadata> = s.object<FdxRecipientMetadata>({
  recipientId: s.string(),
  clientName: s.string(),
  logoUri: s.optionalNullable(s.string()),
  thirdPartyLegalName: s.string(),
  _keysMap: {
    recipientId: "recipient_id",
    clientName: "client_name",
    logoUri: "logo_uri",
    thirdPartyLegalName: "third_party_legal_name",
  },
});
