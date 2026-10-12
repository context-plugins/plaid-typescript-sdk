import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  paymentInitiationOptionalRestrictionBacsSchema,
  type PaymentInitiationOptionalRestrictionBacs,
} from "./payment-initiation-optional-restriction-bacs.js";

/**
 * (Deprecated) Additional payment consent options. Please use `payer_details` to specify the
 * account.
 */
export type ExternalPaymentInitiationConsentOptions = {
  /**
   * When `true`, Plaid will attempt to request refund details from the payee's financial
   * institution. Support varies between financial institutions and will not always be available. If
   * refund details could be retrieved, they will be available in the
   * `/payment_initiation/payment/get` response.
   */
  requestRefundDetails?: boolean | null;
  /**
   * The International Bank Account Number (IBAN) for the payer's account. Where possible, the end
   * user will be able to set up payment consent using only the specified bank account if provided.
   */
  iban?: string | null;
  /**
   * An optional object used to restrict the accounts used for payments. If provided, the end user
   * will be able to send payments only from the specified bank account.
   */
  bacs?: PaymentInitiationOptionalRestrictionBacs | null;
};

export const externalPaymentInitiationConsentOptionsSchema: Schema<ExternalPaymentInitiationConsentOptions> =
  s.object<ExternalPaymentInitiationConsentOptions>({
    requestRefundDetails: s.optionalNullable(s.boolean()),
    iban: s.optionalNullable(s.string()),
    bacs: s.optionalNullable(s.lazy(() => paymentInitiationOptionalRestrictionBacsSchema)),
    _keysMap: {
      requestRefundDetails: "request_refund_details",
    },
  });
