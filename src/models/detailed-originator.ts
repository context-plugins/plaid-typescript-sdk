import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transferDiligenceStatusSchema, type TransferDiligenceStatus } from "./transfer-diligence-status.js";
import {
  transferPlatformRequirementSchema,
  type TransferPlatformRequirement,
} from "./transfer-platform-requirement.js";

/** Originator and their status. */
export type DetailedOriginator = {
  /** Originator's client ID. */
  clientId: string;
  /** Originator's diligence status. */
  transferDiligenceStatus: TransferDiligenceStatus;
  /** The company name of the end customer. */
  companyName: string;
  /**
   * List of outstanding requirements that must be submitted before Plaid can approve the
   * originator. Only populated when `transfer_diligence_status` is `more_information_required`.
   */
  outstandingRequirements?: TransferPlatformRequirement[];
};

export const detailedOriginatorSchema: Schema<DetailedOriginator> = s.object<DetailedOriginator>({
  clientId: s.string(),
  transferDiligenceStatus: transferDiligenceStatusSchema,
  companyName: s.string(),
  outstandingRequirements: s.optional(s.array(s.lazy(() => transferPlatformRequirementSchema))),
  _keysMap: {
    clientId: "client_id",
    transferDiligenceStatus: "transfer_diligence_status",
    companyName: "company_name",
    outstandingRequirements: "outstanding_requirements",
  },
});
