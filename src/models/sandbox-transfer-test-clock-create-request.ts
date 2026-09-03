import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SandboxTransferTestClockCreateRequest = {
  clientId?: string;
  secret?: string;
  virtualTime?: Date | null;
};

export const sandboxTransferTestClockCreateRequestSchema: Schema<SandboxTransferTestClockCreateRequest> =
  s.object<SandboxTransferTestClockCreateRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    virtualTime: s.optionalNullable(s.dateTime()),
    _keysMap: {
      clientId: "client_id",
      virtualTime: "virtual_time",
    },
  });
