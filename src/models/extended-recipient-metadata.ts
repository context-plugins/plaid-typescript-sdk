import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Plaid and FDX-defined recipient metadata fields */
export type ExtendedRecipientMetadata = {
  /** The recipient identifier */
  recipientId: string;
  /** The recipient name displayed by the Data Provider during the consent flow */
  clientName: string;
  /** Data Recipient Logo URL location */
  logoUri?: string | null;
  /** The legal name of the recipient */
  thirdPartyLegalName: string;
  /** The category that the recipient falls under */
  category: string;
  /** The date at which the recipient gained production access to Plaid */
  joinedDate: string;
  /** The number of consumers connected to the recipient through this Data Partner */
  connectionCount: number;
};

export const extendedRecipientMetadataSchema: Schema<ExtendedRecipientMetadata> =
  s.object<ExtendedRecipientMetadata>({
    recipientId: s.string(),
    clientName: s.string(),
    logoUri: s.optionalNullable(s.string()),
    thirdPartyLegalName: s.string(),
    category: s.string(),
    joinedDate: s.dateOnly(),
    connectionCount: s.int(),
    _keysMap: {
      recipientId: "recipient_id",
      clientName: "client_name",
      logoUri: "logo_uri",
      thirdPartyLegalName: "third_party_legal_name",
      joinedDate: "joined_date",
      connectionCount: "connection_count",
    },
  });
