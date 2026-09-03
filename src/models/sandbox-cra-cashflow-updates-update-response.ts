import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SandboxCraCashflowUpdatesUpdateResponse = {
  requestId: string;
};

export const sandboxCraCashflowUpdatesUpdateResponseSchema: Schema<SandboxCraCashflowUpdatesUpdateResponse> =
  s.object<SandboxCraCashflowUpdatesUpdateResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
