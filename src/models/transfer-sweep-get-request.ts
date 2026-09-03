import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferSweepGetRequest = {
  clientId?: string;
  secret?: string;
  sweepId: string;
};

export const transferSweepGetRequestSchema: Schema<TransferSweepGetRequest> =
  s.object<TransferSweepGetRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    sweepId: s.string(),
    _keysMap: {
      clientId: "client_id",
      sweepId: "sweep_id",
    },
  });
