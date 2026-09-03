import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { scopesContextSchema, type ScopesContext } from "./scopes-context.js";
import { scopesSchema, type Scopes } from "./scopes.js";

export type ItemApplicationScopesUpdateRequest = {
  clientId?: string;
  secret?: string;
  accessToken: string;
  applicationId: string;
  scopes: Scopes;
  state?: string;
  context: ScopesContext;
};

export const itemApplicationScopesUpdateRequestSchema: Schema<ItemApplicationScopesUpdateRequest> =
  s.object<ItemApplicationScopesUpdateRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    accessToken: s.string(),
    applicationId: s.string(),
    scopes: scopesSchema,
    state: s.optional(s.string()),
    context: scopesContextSchema,
    _keysMap: {
      clientId: "client_id",
      accessToken: "access_token",
      applicationId: "application_id",
    },
  });
