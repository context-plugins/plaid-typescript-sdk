import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transferOriginatorDiligenceSchema,
  type TransferOriginatorDiligence,
} from "./transfer-originator-diligence.js";

export type TransferDiligenceSubmitRequest = {
  clientId?: string;
  secret?: string;
  originatorClientId: string;
  originatorDiligence: TransferOriginatorDiligence;
};

export const transferDiligenceSubmitRequestSchema: Schema<TransferDiligenceSubmitRequest> =
  s.object<TransferDiligenceSubmitRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    originatorClientId: s.string(),
    originatorDiligence: transferOriginatorDiligenceSchema,
    _keysMap: {
      clientId: "client_id",
      originatorClientId: "originator_client_id",
      originatorDiligence: "originator_diligence",
    },
  });
