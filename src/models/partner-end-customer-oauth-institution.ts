import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import {
  partnerEndCustomerOAuthInstitutionEnvironmentsSchema,
  type PartnerEndCustomerOAuthInstitutionEnvironments,
} from "./partner-end-customer-oauth-institution-environments.js";

export type PartnerEndCustomerOAuthInstitution = {
  name?: string;
  institutionId?: string;
  environments?: PartnerEndCustomerOAuthInstitutionEnvironments;
  productionEnablementDate?: string | null;
  classicDisablementDate?: string | null;
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
