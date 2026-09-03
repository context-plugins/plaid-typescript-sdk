import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Application = {
  applicationId: string;
  name: string;
  displayName: string | null;
  joinDate: string;
  logoUrl: string | null;
  applicationUrl: string | null;
  reasonForAccess: string | null;
  useCase: string | null;
  companyLegalName: string | null;
  city: string | null;
  region: string | null;
  postalCode: string | null;
  countryCode: string | null;
};

export const applicationSchema: Schema<Application> = s.object<Application>({
  applicationId: s.string(),
  name: s.string(),
  displayName: s.nullable(s.string()),
  joinDate: s.dateOnly(),
  logoUrl: s.nullable(s.string()),
  applicationUrl: s.nullable(s.string()),
  reasonForAccess: s.nullable(s.string()),
  useCase: s.nullable(s.string()),
  companyLegalName: s.nullable(s.string()),
  city: s.nullable(s.string()),
  region: s.nullable(s.string()),
  postalCode: s.nullable(s.string()),
  countryCode: s.nullable(s.string()),
  _keysMap: {
    applicationId: "application_id",
    displayName: "display_name",
    joinDate: "join_date",
    logoUrl: "logo_url",
    applicationUrl: "application_url",
    reasonForAccess: "reason_for_access",
    useCase: "use_case",
    companyLegalName: "company_legal_name",
    postalCode: "postal_code",
    countryCode: "country_code",
  },
});
