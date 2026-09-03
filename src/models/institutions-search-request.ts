import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { countryCodeSchema, type CountryCode } from "./country-code.js";
import {
  institutionsSearchRequestOptionsSchema,
  type InstitutionsSearchRequestOptions,
} from "./institutions-search-request-options.js";
import { productsSchema, type Products } from "./products.js";

export type InstitutionsSearchRequest = {
  clientId?: string;
  secret?: string;
  query: string;
  products?: Products[] | null;
  countryCodes: CountryCode[];
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
