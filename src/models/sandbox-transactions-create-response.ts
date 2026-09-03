import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SandboxTransactionsCreateResponse = {
  requestId: string;
};

export const sandboxTransactionsCreateResponseSchema: Schema<SandboxTransactionsCreateResponse> =
  s.object<SandboxTransactionsCreateResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
