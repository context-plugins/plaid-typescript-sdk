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

/** Details relating to a specific financial institution */
export type Institution = {
  /**
   * Unique identifier for the institution. Note that the same institution may have multiple
   * records, each with different institution IDs; for example, if the institution has migrated to
   * OAuth, there may be separate `institution_id`s for the OAuth and non-OAuth versions of the
   * institution. Institutions that operate in different countries or with multiple login portals
   * may also have separate `institution_id`s for each country or portal.
   */
  institutionId: string;
  /** The official name of the institution. */
  name: string;
  /**
   * A list of the Plaid products supported by the institution. Note that only institutions that
   * support Instant Auth will return `auth` in the product array; institutions that do not list
   * `auth` may still support other Auth methods such as Instant Match or Automated Micro-deposit
   * Verification. To identify institutions that support those methods, use the `auth_metadata`
   * object. For more details, see [Full Auth coverage](https://plaid.com/docs/auth/coverage/). The
   * `income_verification` product here indicates support for Bank Income. Note: For Signal
   * Transaction Scores and Transfer, listed institutions may be incomplete or incorrect. Instead,
   * use the following: `balance` support also indicates coverage of Signal Transaction Scores;
   * `auth` support also indicates coverage of Transfer.
   */
  products: Products[];
  /** A list of the country codes supported by the institution. */
  countryCodes: CountryCode[];
  /** The URL for the institution's website */
  url?: string | null;
  /**
   * Hexadecimal representation of the primary color used by the institution. If Plaid does not have
   * primary color data for the institution, this field will be a deterministically generated
   * fallback color.
   */
  primaryColor?: string | null;
  /**
   * Base64 encoded representation of the institution's logo, returned as a base64 encoded 152x152
   * PNG. Not all institutions' logos are available.
   */
  logo?: string | null;
  /**
   * A list of routing numbers known to be associated with the institution. This list is provided
   * for the purpose of looking up institutions by routing number. It is generally comprehensive but
   * is not guaranteed to be a complete list of routing numbers for an institution.
   */
  routingNumbers: string[];
  /** A partial list of DTC numbers associated with the institution. */
  dtcNumbers?: string[];
  /**
   * Indicates that the institution has an OAuth login flow. This will be `true` if OAuth is
   * supported for any Items associated with the institution, even if the institution also supports
   * non-OAuth connections.
   */
  oauth: boolean;
  /**
   * The status of an institution is determined by the health of its Item logins, Transactions
   * updates, Investments updates, Liabilities updates, Auth requests, Balance requests, Identity
   * requests, Investments requests, and Liabilities requests. A login attempt is conducted during
   * the initial Item add in Link. If there is not enough traffic to accurately calculate an
   * institution's status, Plaid will return null rather than potentially inaccurate data.
   *
   * Institution status is accessible in the Dashboard and via the API using the
   * `/institutions/get_by_id` endpoint with the `options.include_status` option set to true. Note
   * that institution status is not available in the Sandbox environment.
   */
  status?: InstitutionStatus | null;
  /**
   * Metadata that captures what specific payment configurations an institution supports when making
   * Payment Initiation requests.
   */
  paymentInitiationMetadata?: PaymentInitiationMetadata | null;
  /** Metadata that captures information about the Auth features of an institution. */
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
