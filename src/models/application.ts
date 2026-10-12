import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Metadata about the application */
export type Application = {
  /**
   * This field will map to the application ID that is returned from `/item/application/list`, or
   * provided to the institution in an oauth redirect.
   */
  applicationId: string;
  /** The name of the application */
  name: string;
  /** A human-readable name of the application for display purposes */
  displayName: string | null;
  /**
   * The date this application was granted production access at Plaid in [ISO
   * 8601](https://wikipedia.org/wiki/ISO_8601) (YYYY-MM-DD) format in UTC.
   */
  joinDate: string;
  /** A URL that links to the application logo image. */
  logoUrl: string | null;
  /** The URL for the application's website */
  applicationUrl: string | null;
  /**
   * A string provided by the connected app stating why they use their respective enabled products.
   */
  reasonForAccess: string | null;
  /** A string representing client's broad use case as assessed by Plaid. */
  useCase: string | null;
  /** A string representing the name of client's legal entity. */
  companyLegalName: string | null;
  /** A string representing the city of the client's headquarters. */
  city: string | null;
  /** A string representing the region of the client's headquarters. */
  region: string | null;
  /** A string representing the postal code of the client's headquarters. */
  postalCode: string | null;
  /** A string representing the country code of the client's headquarters. */
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
