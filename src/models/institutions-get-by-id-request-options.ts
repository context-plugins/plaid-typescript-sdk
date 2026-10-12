import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Specifies optional parameters for `/institutions/get_by_id`. If provided, must not be `null`. */
export type InstitutionsGetByIdRequestOptions = {
  /**
   * When `true`, return an institution's logo, brand color, and URL. When available, the bank's
   * logo is returned as a base64 encoded 152x152 PNG, the brand color is in hexadecimal format. The
   * default value is `false`.
   *
   * Note that Plaid does not own any of the logos shared by the API and that by accessing or using
   * these logos, you agree that you are doing so at your own risk and will, if necessary, obtain
   * all required permissions from the appropriate rights holders and adhere to any applicable usage
   * guidelines. Plaid disclaims all express or implied warranties with respect to the logos.
   *
   * @default false
   */
  includeOptionalMetadata?: boolean;
  /**
   * If `true`, the response will include status information about the institution. Default value is
   * `false`.
   *
   * @default false
   */
  includeStatus?: boolean;
  /**
   * When `true`, returns metadata related to the Auth product indicating which auth methods are
   * supported.
   *
   * @default false
   */
  includeAuthMetadata?: boolean;
  /**
   * When `true`, returns metadata related to the Payment Initiation product indicating which
   * payment configurations are supported.
   *
   * @default false
   */
  includePaymentInitiationMetadata?: boolean;
};

export const institutionsGetByIdRequestOptionsSchema: Schema<InstitutionsGetByIdRequestOptions> =
  s.object<InstitutionsGetByIdRequestOptions>({
    includeOptionalMetadata: s.defaulted(s.boolean(), false),
    includeStatus: s.defaulted(s.boolean(), false),
    includeAuthMetadata: s.defaulted(s.boolean(), false),
    includePaymentInitiationMetadata: s.defaulted(s.boolean(), false),
    _keysMap: {
      includeOptionalMetadata: "include_optional_metadata",
      includeStatus: "include_status",
      includeAuthMetadata: "include_auth_metadata",
      includePaymentInitiationMetadata: "include_payment_initiation_metadata",
    },
  });
