import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { identityMatchUserSchema, type IdentityMatchUser } from "./identity-match-user.js";

export type ProcessorIdentityMatchRequest = {
  clientId?: string;
  secret?: string;
  processorToken: string;
  user?: IdentityMatchUser;
};

export const processorIdentityMatchRequestSchema: Schema<ProcessorIdentityMatchRequest> =
  s.object<ProcessorIdentityMatchRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    processorToken: s.string(),
    user: s.optional(s.lazy(() => identityMatchUserSchema)),
    _keysMap: {
      clientId: "client_id",
      processorToken: "processor_token",
    },
  });
