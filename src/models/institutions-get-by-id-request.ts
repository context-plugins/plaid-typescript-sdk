import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { countryCodeSchema, type CountryCode } from "./country-code.js";
import {
  institutionsGetByIdRequestOptionsSchema,
  type InstitutionsGetByIdRequestOptions,
} from "./institutions-get-by-id-request-options.js";

/** InstitutionsGetByIdRequest defines the request schema for `/institutions/get_by_id` */
export type InstitutionsGetByIdRequest = {
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
  /** The ID of the institution to get details about */
  institutionId: string;
  /**
   * Specify which country or countries to include institutions from, using the ISO-3166-1 alpha-2
   * country code standard. In API versions 2019-05-29 and earlier, the `country_codes` parameter is
   * an optional parameter within the `options` object and will default to `[US]` if it is not
   * supplied.
   */
  countryCodes: CountryCode[];
  /**
   * Specifies optional parameters for `/institutions/get_by_id`. If provided, must not be `null`.
   */
  options?: InstitutionsGetByIdRequestOptions;
};

export const institutionsGetByIdRequestSchema: Schema<InstitutionsGetByIdRequest> =
  s.object<InstitutionsGetByIdRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    institutionId: s.string(),
    countryCodes: s.array(s.lazy(() => countryCodeSchema)),
    options: s.optional(s.lazy(() => institutionsGetByIdRequestOptionsSchema)),
    _keysMap: {
      clientId: "client_id",
      institutionId: "institution_id",
      countryCodes: "country_codes",
    },
  });
