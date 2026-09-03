import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  documentRiskSignalsObjectSchema,
  type DocumentRiskSignalsObject,
} from "./document-risk-signals-object.js";

export type PayrollRiskSignalsItem = {
  itemId: string;
  verificationRiskSignals: DocumentRiskSignalsObject[];
};

export const payrollRiskSignalsItemSchema: Schema<PayrollRiskSignalsItem> = s.object<PayrollRiskSignalsItem>({
  itemId: s.string(),
  verificationRiskSignals: s.array(s.lazy(() => documentRiskSignalsObjectSchema)),
  _keysMap: {
    itemId: "item_id",
    verificationRiskSignals: "verification_risk_signals",
  },
});
