import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { scopesNullableSchema, type ScopesNullable } from "./scopes-nullable.js";

export type ConnectedApplication = {
  applicationId: string;
  name: string;
  displayName?: string | null;
  logoUrl?: string | null;
  applicationUrl?: string | null;
  reasonForAccess?: string | null;
  createdAt: Date;
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
