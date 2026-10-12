import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { countryCodeSchema, type CountryCode } from "./country-code.js";
import {
  institutionsSearchRequestOptionsSchema,
  type InstitutionsSearchRequestOptions,
} from "./institutions-search-request-options.js";
import { productsSchema, type Products } from "./products.js";

/** InstitutionsSearchRequest defines the request schema for `/institutions/search` */
export type InstitutionsSearchRequest = {
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
  /** The search query. Institutions with names matching the query are returned */
  query: string;
  /**
   * Filter the Institutions based on whether they support all products listed in `products`.
   * Provide `null` to get institutions regardless of supported products. Note that when `auth` is
   * specified as a product, if you are enabled for Instant Match or Automated Micro-deposits,
   * institutions that support those products will be returned even if `auth` is not present in
   * their product array. To search for Transfer support, use `auth`; to search for Signal
   * Transaction Scores support, use `balance`.
   */
  products?: Products[] | null;
  /**
   * Specify which country or countries to include institutions from, using the ISO-3166-1 alpha-2
   * country code standard. In API versions 2019-05-29 and earlier, the `country_codes` parameter is
   * an optional parameter within the `options` object and will default to `[US]` if it is not
   * supplied.
   */
  countryCodes: CountryCode[];
  /** An optional object to filter `/institutions/search` results. */
  options?: InstitutionsSearchRequestOptions;
};

export const institutionsSearchRequestSchema: Schema<InstitutionsSearchRequest> =
  s.object<InstitutionsSearchRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    query: s.string(),
    products: s.optionalNullable(s.array(s.lazy(() => productsSchema))),
    countryCodes: s.array(s.lazy(() => countryCodeSchema)),
    options: s.optional(s.lazy(() => institutionsSearchRequestOptionsSchema)),
    _keysMap: {
      clientId: "client_id",
      countryCodes: "country_codes",
    },
  });
