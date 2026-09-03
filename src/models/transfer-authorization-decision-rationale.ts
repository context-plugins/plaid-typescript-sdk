import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transferAuthorizationDecisionRationaleCodeSchema,
  type TransferAuthorizationDecisionRationaleCode,
} from "./transfer-authorization-decision-rationale-code.js";

export type TransferAuthorizationDecisionRationale = {
  code: TransferAuthorizationDecisionRationaleCode | null;
  description: string;
};

export const transferAuthorizationDecisionRationaleSchema: Schema<TransferAuthorizationDecisionRationale> =
  s.object<TransferAuthorizationDecisionRationale>({
    code: s.nullable(s.lazy(() => transferAuthorizationDecisionRationaleCodeSchema)),
    description: s.string(),
  });
