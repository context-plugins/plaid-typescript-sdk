import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { countryCodeSchema, type CountryCode } from "./country-code.js";
import {
  institutionsGetRequestOptionsSchema,
  type InstitutionsGetRequestOptions,
} from "./institutions-get-request-options.js";

/** InstitutionsGetRequest defines the request schema for `/institutions/get` */
export type InstitutionsGetRequest = {
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
  /** The total number of Institutions to return. */
  count: number;
  /** The number of Institutions to skip. */
  offset: number;
  /**
   * Specify which country or countries to include institutions from, using the ISO-3166-1 alpha-2
   * country code standard.
   *
   * In API versions 2019-05-29 and earlier, the `country_codes` parameter is an optional parameter
   * within the `options` object and will default to `[US]` if it is not supplied.
   */
  countryCodes: CountryCode[];
  /** An optional object to filter `/institutions/get` results. */
  options?: InstitutionsGetRequestOptions;
};

export const institutionsGetRequestSchema: Schema<InstitutionsGetRequest> = s.object<InstitutionsGetRequest>({
  clientId: s.optional(s.string()),
  secret: s.optional(s.string()),
  count: s.int(),
  offset: s.int(),
  countryCodes: s.array(s.lazy(() => countryCodeSchema)),
  options: s.optional(s.lazy(() => institutionsGetRequestOptionsSchema)),
  _keysMap: {
    clientId: "client_id",
    countryCodes: "country_codes",
  },
});
