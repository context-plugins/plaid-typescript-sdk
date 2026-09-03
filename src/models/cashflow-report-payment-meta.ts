import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CashflowReportPaymentMeta = {
  referenceNumber: string | null;
  ppdId: string | null;
  payee: string | null;
  byOrderOf: string | null;
  payer: string | null;
  paymentMethod: string | null;
  paymentProcessor: string | null;
  reason: string | null;
};

export const cashflowReportPaymentMetaSchema: Schema<CashflowReportPaymentMeta> =
  s.object<CashflowReportPaymentMeta>({
    referenceNumber: s.nullable(s.string()),
    ppdId: s.nullable(s.string()),
    payee: s.nullable(s.string()),
    byOrderOf: s.nullable(s.string()),
    payer: s.nullable(s.string()),
    paymentMethod: s.nullable(s.string()),
    paymentProcessor: s.nullable(s.string()),
    reason: s.nullable(s.string()),
    _keysMap: {
      referenceNumber: "reference_number",
      ppdId: "ppd_id",
      byOrderOf: "by_order_of",
      paymentMethod: "payment_method",
      paymentProcessor: "payment_processor",
    },
  });
