import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { scopesNullableSchema, type ScopesNullable } from "./scopes-nullable.js";

/** Describes the connected application for a particular end user. */
export type ConnectedApplication = {
  /**
   * This field will map to the application ID that is returned from `/item/application/list`, or
   * provided to the institution in an oauth redirect.
   */
  applicationId: string;
  /** The name of the application */
  name: string;
  /** A human-readable name of the application for display purposes */
  displayName?: string | null;
  /** A URL that links to the application logo image. */
  logoUrl?: string | null;
  /** The URL for the application's website */
  applicationUrl?: string | null;
  /**
   * A string provided by the connected app stating why they use their respective enabled products.
   */
  reasonForAccess?: string | null;
  /**
   * The date and time this application was linked, in [ISO
   * 8601](https://wikipedia.org/wiki/ISO_8601) format in UTC (e.g. `"2020-01-01T00:00:00Z"`). Note
   * that older, legacy integrations instead receive this value as a date only, in `YYYY-MM-DD`
   * format (e.g. `"2020-01-01"`).
   */
  createdAt: Date;
  /** The scopes object */
  scopes?: ScopesNullable | null;
};

export const connectedApplicationSchema: Schema<ConnectedApplication> = s.object<ConnectedApplication>({
  applicationId: s.string(),
  name: s.string(),
  displayName: s.optionalNullable(s.string()),
  logoUrl: s.optionalNullable(s.string()),
  applicationUrl: s.optionalNullable(s.string()),
  reasonForAccess: s.optionalNullable(s.string()),
  createdAt: s.dateTime(),
  scopes: s.optionalNullable(s.lazy(() => scopesNullableSchema)),
  _keysMap: {
    applicationId: "application_id",
    displayName: "display_name",
    logoUrl: "logo_url",
    applicationUrl: "application_url",
    reasonForAccess: "reason_for_access",
    createdAt: "created_at",
  },
});
