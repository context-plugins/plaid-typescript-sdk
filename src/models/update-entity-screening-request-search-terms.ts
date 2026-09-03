import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UpdateEntityScreeningRequestSearchTerms = {
  entityWatchlistProgramId: string;
  legalName?: string;
  documentNumber?: string;
  emailAddress?: string;
  country?: string;
  phoneNumber?: string;
  url?: string;
};

export const updateEntityScreeningRequestSearchTermsSchema: Schema<UpdateEntityScreeningRequestSearchTerms> =
  s.object<UpdateEntityScreeningRequestSearchTerms>({
    entityWatchlistProgramId: s.string(),
    legalName: s.optional(s.string()),
    documentNumber: s.optional(s.string()),
    emailAddress: s.optional(s.string()),
    country: s.optional(s.string()),
    phoneNumber: s.optional(s.string()),
    url: s.optional(s.string()),
    _keysMap: {
      entityWatchlistProgramId: "entity_watchlist_program_id",
      legalName: "legal_name",
      documentNumber: "document_number",
      emailAddress: "email_address",
      phoneNumber: "phone_number",
    },
  });
