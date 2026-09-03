import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SandboxItemApplicationSeedRequest = {
  clientId?: string;
  secret?: string;
  accessToken: string;
  applicationId: string;
};

export const sandboxItemApplicationSeedRequestSchema: Schema<SandboxItemApplicationSeedRequest> =
  s.object<SandboxItemApplicationSeedRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    accessToken: s.string(),
    applicationId: s.string(),
    _keysMap: {
      clientId: "client_id",
      accessToken: "access_token",
      applicationId: "application_id",
    },
  });
