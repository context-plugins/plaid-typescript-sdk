import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authMetadataSchema, type AuthMetadata } from "./auth-metadata.js";
import { countryCodeSchema, type CountryCode } from "./country-code.js";
import { institutionStatusSchema, type InstitutionStatus } from "./institution-status.js";
import {
  paymentInitiationMetadataSchema,
  type PaymentInitiationMetadata,
} from "./payment-initiation-metadata.js";
import { productsSchema, type Products } from "./products.js";

export type Institution = {
  institutionId: string;
  name: string;
  products: Products[];
  countryCodes: CountryCode[];
  url?: string | null;
  primaryColor?: string | null;
  logo?: string | null;
  routingNumbers: string[];
  dtcNumbers?: string[];
  oauth: boolean;
  status?: InstitutionStatus | null;
  paymentInitiationMetadata?: PaymentInitiationMetadata | null;
  authMetadata?: AuthMetadata | null;
};

export const institutionSchema: Schema<Institution> = s.object<Institution>({
  institutionId: s.string(),
  name: s.string(),
  products: s.array(s.lazy(() => productsSchema)),
  countryCodes: s.array(s.lazy(() => countryCodeSchema)),
  url: s.optionalNullable(s.string()),
  primaryColor: s.optionalNullable(s.string()),
  logo: s.optionalNullable(s.string()),
  routingNumbers: s.array(s.string()),
  dtcNumbers: s.optional(s.array(s.string())),
  oauth: s.boolean(),
  status: s.optionalNullable(s.lazy(() => institutionStatusSchema)),
  paymentInitiationMetadata: s.optionalNullable(s.lazy(() => paymentInitiationMetadataSchema)),
  authMetadata: s.optionalNullable(s.lazy(() => authMetadataSchema)),
  _keysMap: {
    institutionId: "institution_id",
    countryCodes: "country_codes",
    primaryColor: "primary_color",
    routingNumbers: "routing_numbers",
    dtcNumbers: "dtc_numbers",
    paymentInitiationMetadata: "payment_initiation_metadata",
    authMetadata: "auth_metadata",
  },
});
