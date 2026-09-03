import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transferDiligenceStatusSchema, type TransferDiligenceStatus } from "./transfer-diligence-status.js";
import {
  transferPlatformRequirementSchema,
  type TransferPlatformRequirement,
} from "./transfer-platform-requirement.js";

export type DetailedOriginator = {
  clientId: string;
  transferDiligenceStatus: TransferDiligenceStatus;
  companyName: string;
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
