import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import {
  partnerEndCustomerOAuthInstitutionEnvironmentsSchema,
  type PartnerEndCustomerOAuthInstitutionEnvironments,
} from "./partner-end-customer-oauth-institution-environments.js";

/** The OAuth registration information for an institution. */
export type PartnerEndCustomerOAuthInstitution = {
  name?: string;
  institutionId?: string;
  /** Registration statuses by environment. */
  environments?: PartnerEndCustomerOAuthInstitutionEnvironments;
  /**
   * The date on which the end customer's application was approved by the institution, or an empty
   * string if their application has not yet been approved.
   */
  productionEnablementDate?: string | null;
  /**
   * The date on which non-OAuth Item adds will no longer be supported for this institution, or an
   * empty string if no such date has been set by the institution.
   */
  classicDisablementDate?: string | null;
  /**
   * The errors encountered while registering the end customer's application with the institutions.
   */
  errors?: (Error | null)[];
};

export const partnerEndCustomerOAuthInstitutionSchema: Schema<PartnerEndCustomerOAuthInstitution> =
  s.object<PartnerEndCustomerOAuthInstitution>({
    name: s.optional(s.string()),
    institutionId: s.optional(s.string()),
    environments: s.optional(s.lazy(() => partnerEndCustomerOAuthInstitutionEnvironmentsSchema)),
    productionEnablementDate: s.optionalNullable(s.string()),
    classicDisablementDate: s.optionalNullable(s.string()),
    errors: s.optional(s.array(s.nullable(s.lazy(() => errorSchema)))),
    _keysMap: {
      institutionId: "institution_id",
      productionEnablementDate: "production_enablement_date",
      classicDisablementDate: "classic_disablement_date",
    },
  });
