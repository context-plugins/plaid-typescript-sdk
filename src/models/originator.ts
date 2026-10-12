import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transferDiligenceStatusSchema, type TransferDiligenceStatus } from "./transfer-diligence-status.js";

/** Originator and their status. */
export type Originator = {
  /** Originator's client ID. */
  clientId: string;
  /** Originator's diligence status. */
  transferDiligenceStatus: TransferDiligenceStatus;
};

export const originatorSchema: Schema<Originator> = s.object<Originator>({
  clientId: s.string(),
  transferDiligenceStatus: transferDiligenceStatusSchema,
  _keysMap: {
    clientId: "client_id",
    transferDiligenceStatus: "transfer_diligence_status",
  },
});
