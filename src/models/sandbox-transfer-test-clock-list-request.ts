import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SandboxTransferTestClockListRequest = {
  clientId?: string;
  secret?: string;
  startVirtualTime?: Date | null;
  endVirtualTime?: Date | null;
  count?: number | null;
  offset?: number;
};

export const sandboxTransferTestClockListRequestSchema: Schema<SandboxTransferTestClockListRequest> =
  s.object<SandboxTransferTestClockListRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    startVirtualTime: s.optionalNullable(s.dateTime()),
    endVirtualTime: s.optionalNullable(s.dateTime()),
    count: s.optionalNullable(s.number()),
    offset: s.optional(s.number()),
    _keysMap: {
      clientId: "client_id",
      startVirtualTime: "start_virtual_time",
      endVirtualTime: "end_virtual_time",
    },
  });
