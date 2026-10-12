import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  externalPaymentInitiationConsentOptionsSchema,
  type ExternalPaymentInitiationConsentOptions,
} from "./external-payment-initiation-consent-options.js";
import {
  paymentInitiationConsentConstraintsSchema,
  type PaymentInitiationConsentConstraints,
} from "./payment-initiation-consent-constraints.js";
import {
  paymentInitiationConsentPayerDetailsSchema,
  type PaymentInitiationConsentPayerDetails,
} from "./payment-initiation-consent-payer-details.js";
import {
  paymentInitiationConsentScopeSchema,
  type PaymentInitiationConsentScope,
} from "./payment-initiation-consent-scope.js";
import {
  paymentInitiationConsentTypeSchema,
  type PaymentInitiationConsentType,
} from "./payment-initiation-consent-type.js";

/**
 * PaymentInitiationConsentCreateRequest defines the request schema for
 * `/payment_initiation/consent/create`
 */
export type PaymentInitiationConsentCreateRequest = {
  /**
   * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the
   * `PLAID-CLIENT-ID` header or as part of a request body.
   */
  clientId?: string;
  /**
   * Your Plaid API `secret`. The `secret` is required and may be provided either in the
   * `PLAID-SECRET` header or as part of a request body.
   */
  secret?: string;
  /**
   * The ID of the recipient the payment consent is for. The created consent can be used to transfer
   * funds to this recipient only.
   */
  recipientId: string;
  /**
   * A reference for the payment consent. This must be an alphanumeric string with at most 18
   * characters and must not contain any special characters.
   */
  reference: string;
  /**
   * An array of payment consent scopes.
   *
   * @deprecated
   */
  scopes?: PaymentInitiationConsentScope[];
  /**
   * Payment consent type. Defines possible use case for payments made with the given consent.
   *
   * `SWEEPING`: Allows moving money between accounts owned by the same user.
   *
   * `COMMERCIAL`: Allows initiating payments from the user's account to third parties.
   */
  type?: PaymentInitiationConsentType;
  /** Limitations that will be applied to payments initiated using the payment consent. */
  constraints: PaymentInitiationConsentConstraints;
  /**
   * (Deprecated) Additional payment consent options. Please use `payer_details` to specify the
   * account.
   *
   * @deprecated
   */
  options?: ExternalPaymentInitiationConsentOptions | null;
  /**
   * An object representing the payment consent payer details. Payer `name` and account `numbers`
   * are required to lock the account to which the consent can be created.
   */
  payerDetails?: PaymentInitiationConsentPayerDetails | null;
};

export const paymentInitiationConsentCreateRequestSchema: Schema<PaymentInitiationConsentCreateRequest> =
  s.object<PaymentInitiationConsentCreateRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    recipientId: s.string(),
    reference: s.string(),
    scopes: s.optional(s.array(s.lazy(() => paymentInitiationConsentScopeSchema))),
    type: s.optional(s.lazy(() => paymentInitiationConsentTypeSchema)),
    constraints: paymentInitiationConsentConstraintsSchema,
    options: s.optionalNullable(s.lazy(() => externalPaymentInitiationConsentOptionsSchema)),
    payerDetails: s.optionalNullable(s.lazy(() => paymentInitiationConsentPayerDetailsSchema)),
    _keysMap: {
      clientId: "client_id",
      recipientId: "recipient_id",
      payerDetails: "payer_details",
    },
  });
