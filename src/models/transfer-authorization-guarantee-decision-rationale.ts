import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transferAuthorizationGuaranteeDecisionRationaleCodeSchema,
  type TransferAuthorizationGuaranteeDecisionRationaleCode,
} from "./transfer-authorization-guarantee-decision-rationale-code.js";

export type TransferAuthorizationGuaranteeDecisionRationale = {
  code: TransferAuthorizationGuaranteeDecisionRationaleCode;
  description: string;
};

export const transferAuthorizationGuaranteeDecisionRationaleSchema: Schema<TransferAuthorizationGuaranteeDecisionRationale> =
  s.object<TransferAuthorizationGuaranteeDecisionRationale>({
    code: transferAuthorizationGuaranteeDecisionRationaleCodeSchema,
    description: s.string(),
  });
