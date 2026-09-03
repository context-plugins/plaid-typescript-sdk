import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SandboxTransferRepaymentSimulateRequest = {
  clientId?: string;
  secret?: string;
};

export const sandboxTransferRepaymentSimulateRequestSchema: Schema<SandboxTransferRepaymentSimulateRequest> =
  s.object<SandboxTransferRepaymentSimulateRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    _keysMap: {
      clientId: "client_id",
    },
  });
