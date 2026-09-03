import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountFiltersResponseSchema, type AccountFiltersResponse } from "./account-filters-response.js";
import { countryCodeSchema, type CountryCode } from "./country-code.js";
import {
  linkTokenCreateInstitutionDataSchema,
  type LinkTokenCreateInstitutionData,
} from "./link-token-create-institution-data.js";
import { productsSchema, type Products } from "./products.js";

export type LinkTokenGetMetadataResponse = {
  initialProducts: Products[];
  webhook: string | null;
  countryCodes: CountryCode[];
  language: string | null;
  institutionData?: LinkTokenCreateInstitutionData;
  accountFilters?: AccountFiltersResponse;
  redirectUri: string | null;
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
