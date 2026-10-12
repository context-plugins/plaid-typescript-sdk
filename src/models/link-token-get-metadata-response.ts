import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountFiltersResponseSchema, type AccountFiltersResponse } from "./account-filters-response.js";
import { countryCodeSchema, type CountryCode } from "./country-code.js";
import {
  linkTokenCreateInstitutionDataSchema,
  type LinkTokenCreateInstitutionData,
} from "./link-token-create-institution-data.js";
import { productsSchema, type Products } from "./products.js";

/** An object specifying the arguments originally provided to the `/link/token/create` call. */
export type LinkTokenGetMetadataResponse = {
  /** The `products` specified in the `/link/token/create` call. */
  initialProducts: Products[];
  /** The `webhook` specified in the `/link/token/create` call. */
  webhook: string | null;
  /** The `country_codes` specified in the `/link/token/create` call. */
  countryCodes: CountryCode[];
  /** The `language` specified in the `/link/token/create` call. */
  language: string | null;
  /** A map containing data used to highlight institutions in Link. */
  institutionData?: LinkTokenCreateInstitutionData;
  /** The `account_filters` specified in the original call to `/link/token/create`. */
  accountFilters?: AccountFiltersResponse;
  /** The `redirect_uri` specified in the `/link/token/create` call. */
  redirectUri: string | null;
  /** The `client_name` specified in the `/link/token/create` call. */
  clientName: string | null;
};

export const linkTokenGetMetadataResponseSchema: Schema<LinkTokenGetMetadataResponse> =
  s.object<LinkTokenGetMetadataResponse>({
    initialProducts: s.array(s.lazy(() => productsSchema)),
    webhook: s.nullable(s.string()),
    countryCodes: s.array(s.lazy(() => countryCodeSchema)),
    language: s.nullable(s.string()),
    institutionData: s.optional(s.lazy(() => linkTokenCreateInstitutionDataSchema)),
    accountFilters: s.optional(s.lazy(() => accountFiltersResponseSchema)),
    redirectUri: s.nullable(s.string()),
    clientName: s.nullable(s.string()),
    _keysMap: {
      initialProducts: "initial_products",
      countryCodes: "country_codes",
      institutionData: "institution_data",
      accountFilters: "account_filters",
      redirectUri: "redirect_uri",
      clientName: "client_name",
    },
  });
