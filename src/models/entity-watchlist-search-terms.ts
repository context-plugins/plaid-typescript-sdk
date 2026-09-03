import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EntityWatchlistSearchTerms = {
  entityWatchlistProgramId: string;
  legalName: string;
  documentNumber?: string | null;
  emailAddress?: string | null;
  country?: string | null;
  phoneNumber?: string | null;
  url?: string | null;
};

export const entityWatchlistSearchTermsSchema: Schema<EntityWatchlistSearchTerms> =
  s.object<EntityWatchlistSearchTerms>({
    entityWatchlistProgramId: s.string(),
    legalName: s.string(),
    documentNumber: s.optionalNullable(s.string()),
    emailAddress: s.optionalNullable(s.string()),
    country: s.optionalNullable(s.string()),
    phoneNumber: s.optionalNullable(s.string()),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      entityWatchlistProgramId: "entity_watchlist_program_id",
      legalName: "legal_name",
      documentNumber: "document_number",
      emailAddress: "email_address",
      phoneNumber: "phone_number",
    },
  });
