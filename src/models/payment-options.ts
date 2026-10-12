import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  paymentInitiationOptionalRestrictionBacsSchema,
  type PaymentInitiationOptionalRestrictionBacs,
} from "./payment-initiation-optional-restriction-bacs.js";
import { paymentSchemeSchema, type PaymentScheme } from "./payment-scheme.js";

/** Additional payment options */
export type PaymentOptions = {
  /**
   * When `true`, Plaid will attempt to request refund details from the payee's financial
   * institution. Support varies between financial institutions and will not always be available. If
   * refund details could be retrieved, they will be available in the
   * `/payment_initiation/payment/get` response.
   */
  requestRefundDetails?: boolean | null;
  /**
   * The International Bank Account Number (IBAN) for the payer's account. Where possible, the end
   * user will be able to send payments only from the specified bank account if provided.
   */
  iban?: string | null;
  /**
   * An optional object used to restrict the accounts used for payments. If provided, the end user
   * will be able to send payments only from the specified bank account.
   */
  bacs?: PaymentInitiationOptionalRestrictionBacs | null;
  /**
   * Payment scheme. If not specified - the default in the region will be used (e.g.
   * `SEPA_CREDIT_TRANSFER` for EU). In responses, if the scheme is not explicitly specified in the
   * request, this value will be `null`. Using unsupported values will result in a failed payment.
   *
   * `LOCAL_DEFAULT`: The default payment scheme for the selected market and currency will be used.
   *
   * `LOCAL_INSTANT`: The instant payment scheme for the selected market and currency will be used
   * (if applicable). Fees may be applied by the institution.
   *
   * `SEPA_CREDIT_TRANSFER`: The standard payment to a beneficiary within the SEPA area.
   *
   * `SEPA_CREDIT_TRANSFER_INSTANT`: Instant payment within the SEPA area. May involve additional
   * fees and may not be available at some banks.
   */
  scheme?: PaymentScheme | null;
};

export const paymentOptionsSchema: Schema<PaymentOptions> = s.object<PaymentOptions>({
  requestRefundDetails: s.optionalNullable(s.boolean()),
  iban: s.optionalNullable(s.string()),
  bacs: s.optionalNullable(s.lazy(() => paymentInitiationOptionalRestrictionBacsSchema)),
  scheme: s.optionalNullable(s.lazy(() => paymentSchemeSchema)),
  _keysMap: {
    requestRefundDetails: "request_refund_details",
  },
});
