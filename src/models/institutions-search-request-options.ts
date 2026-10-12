import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  institutionsSearchPaymentInitiationOptionsSchema,
  type InstitutionsSearchPaymentInitiationOptions,
} from "./institutions-search-payment-initiation-options.js";

/** An optional object to filter `/institutions/search` results. */
export type InstitutionsSearchRequestOptions = {
  /**
   * Limit results to institutions with or without OAuth login flows. Note that institutions will
   * have `oauth` set to `true` if some Items associated with that institution are required to use
   * OAuth flows; institutions in a state of migration to OAuth will have the `oauth` attribute set
   * to `true`.
   */
  oauth?: boolean | null;
  /** When true, return the institution's homepage URL, logo and primary brand color. */
  includeOptionalMetadata?: boolean;
  /**
   * When `true`, returns metadata related to the Auth product indicating which auth methods are
   * supported.
   *
   * @default false
   */
  includeAuthMetadata?: boolean | null;
  /**
   * When `true`, returns metadata related to the Payment Initiation product indicating which
   * payment configurations are supported.
   *
   * @default false
   */
  includePaymentInitiationMetadata?: boolean | null;
  /**
   * Additional options that will be used to filter institutions by various Payment Initiation
   * configurations.
   */
  paymentInitiation?: InstitutionsSearchPaymentInitiationOptions | null;
};

export const institutionsSearchRequestOptionsSchema: Schema<InstitutionsSearchRequestOptions> =
  s.object<InstitutionsSearchRequestOptions>({
    oauth: s.optionalNullable(s.boolean()),
    includeOptionalMetadata: s.optional(s.boolean()),
    includeAuthMetadata: s.defaulted(s.nullable(s.boolean()), false),
    includePaymentInitiationMetadata: s.defaulted(s.nullable(s.boolean()), false),
    paymentInitiation: s.optionalNullable(s.lazy(() => institutionsSearchPaymentInitiationOptionsSchema)),
    _keysMap: {
      includeOptionalMetadata: "include_optional_metadata",
      includeAuthMetadata: "include_auth_metadata",
      includePaymentInitiationMetadata: "include_payment_initiation_metadata",
      paymentInitiation: "payment_initiation",
    },
  });
