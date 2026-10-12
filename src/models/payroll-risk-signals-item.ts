import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  documentRiskSignalsObjectSchema,
  type DocumentRiskSignalsObject,
} from "./document-risk-signals-object.js";

/** Object containing fraud risk data pertaining to the Item linked as part of the verification. */
export type PayrollRiskSignalsItem = {
  /** The `item_id` of the Item associated with this webhook, warning, or error */
  itemId: string;
  /**
   * Array of payroll income document authenticity data retrieved for each of the user's accounts.
   */
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
