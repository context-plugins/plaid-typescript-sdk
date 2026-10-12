import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Recipient metadata fields that are defined by FDX. */
export type FdxRecipientMetadata = {
  /** The recipient identifier */
  recipientId: string;
  /** The recipient name displayed by the Data Provider during the consent flow */
  clientName: string;
  /** Data Recipient Logo URL location */
  logoUri?: string | null;
  /** The legal name of the recipient */
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
