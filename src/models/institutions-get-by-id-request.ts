import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { countryCodeSchema, type CountryCode } from "./country-code.js";
import {
  institutionsGetByIdRequestOptionsSchema,
  type InstitutionsGetByIdRequestOptions,
} from "./institutions-get-by-id-request-options.js";

export type InstitutionsGetByIdRequest = {
  clientId?: string;
  secret?: string;
  institutionId: string;
  countryCodes: CountryCode[];
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
