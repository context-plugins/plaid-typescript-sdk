import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Transaction information specific to inter-bank transfers. If the transaction was not an
 * inter-bank transfer, all fields will be `null`.
 */
export type CashflowReportPaymentMeta = {
  /** The transaction reference number supplied by the financial institution. */
  referenceNumber: string | null;
  /** The ACH PPD ID for the payer. */
  ppdId: string | null;
  /** For transfers, the party that is receiving the transaction. */
  payee: string | null;
  /**
   * The party initiating a wire transfer. Will be `null` if the transaction is not a wire transfer.
   */
  byOrderOf: string | null;
  /** For transfers, the party that is paying the transaction. */
  payer: string | null;
  /** The type of transfer, e.g. 'ACH' */
  paymentMethod: string | null;
  /** The name of the payment processor */
  paymentProcessor: string | null;
  /** The payer-supplied description of the transfer. */
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
