import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EntityWatchlistScreeningSearchTerms = {
  entityWatchlistProgramId: string;
  legalName: string;
  documentNumber: string | null;
  emailAddress: string | null;
  country: string | null;
  phoneNumber: string | null;
  url: string | null;
  version: number;
};

export const entityWatchlistScreeningSearchTermsSchema: Schema<EntityWatchlistScreeningSearchTerms> =
  s.object<EntityWatchlistScreeningSearchTerms>({
    entityWatchlistProgramId: s.string(),
    legalName: s.string(),
    documentNumber: s.nullable(s.string()),
    emailAddress: s.nullable(s.string()),
    country: s.nullable(s.string()),
    phoneNumber: s.nullable(s.string()),
    url: s.nullable(s.string()),
    version: s.number(),
    _keysMap: {
      entityWatchlistProgramId: "entity_watchlist_program_id",
      legalName: "legal_name",
      documentNumber: "document_number",
      emailAddress: "email_address",
      phoneNumber: "phone_number",
    },
  });
