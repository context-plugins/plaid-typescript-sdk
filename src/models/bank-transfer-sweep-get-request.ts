import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BankTransferSweepGetRequest = {
  clientId?: string;
  secret?: string;
  sweepId: string;
};

export const bankTransferSweepGetRequestSchema: Schema<BankTransferSweepGetRequest> =
  s.object<BankTransferSweepGetRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    sweepId: s.string(),
    _keysMap: {
      clientId: "client_id",
      sweepId: "sweep_id",
    },
  });
