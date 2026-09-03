import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { reasonCodeSchema, type ReasonCode } from "./reason-code.js";

export type TransferCancelRequest = {
  clientId?: string;
  secret?: string;
  transferId: string;
  originatorClientId?: string | null;
  reasonCode?: ReasonCode;
};

export const transferCancelRequestSchema: Schema<TransferCancelRequest> = s.object<TransferCancelRequest>({
  clientId: s.optional(s.string()),
  secret: s.optional(s.string()),
  transferId: s.string(),
  originatorClientId: s.optionalNullable(s.string()),
  reasonCode: s.optional(s.lazy(() => reasonCodeSchema)),
  _keysMap: {
    clientId: "client_id",
    transferId: "transfer_id",
    originatorClientId: "originator_client_id",
    reasonCode: "reason_code",
  },
});
