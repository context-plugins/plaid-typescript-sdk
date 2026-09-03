import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ExtendedRecipientMetadata = {
  recipientId: string;
  clientName: string;
  logoUri?: string | null;
  thirdPartyLegalName: string;
  category: string;
  joinedDate: string;
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
    connectionCount: s.number(),
    _keysMap: {
      recipientId: "recipient_id",
      clientName: "client_name",
      logoUri: "logo_uri",
      thirdPartyLegalName: "third_party_legal_name",
      joinedDate: "joined_date",
      connectionCount: "connection_count",
    },
  });
