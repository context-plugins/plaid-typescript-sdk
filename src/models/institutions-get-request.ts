import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { countryCodeSchema, type CountryCode } from "./country-code.js";
import {
  institutionsGetRequestOptionsSchema,
  type InstitutionsGetRequestOptions,
} from "./institutions-get-request-options.js";

export type InstitutionsGetRequest = {
  clientId?: string;
  secret?: string;
  count: number;
  offset: number;
  countryCodes: CountryCode[];
  options?: InstitutionsGetRequestOptions;
};

export const institutionsGetRequestSchema: Schema<InstitutionsGetRequest> = s.object<InstitutionsGetRequest>({
  clientId: s.optional(s.string()),
  secret: s.optional(s.string()),
  count: s.number(),
  offset: s.number(),
  countryCodes: s.array(s.lazy(() => countryCodeSchema)),
  options: s.optional(s.lazy(() => institutionsGetRequestOptionsSchema)),
  _keysMap: {
    clientId: "client_id",
    countryCodes: "country_codes",
  },
});
