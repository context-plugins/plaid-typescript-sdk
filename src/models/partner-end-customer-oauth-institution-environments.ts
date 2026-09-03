import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  partnerEndCustomerOAuthInstitutionApplicationStatusSchema,
  type PartnerEndCustomerOAuthInstitutionApplicationStatus,
} from "./partner-end-customer-oauth-institution-application-status.js";

export type PartnerEndCustomerOAuthInstitutionEnvironments = {
  development?: PartnerEndCustomerOAuthInstitutionApplicationStatus;
  production?: PartnerEndCustomerOAuthInstitutionApplicationStatus;
};

export const partnerEndCustomerOAuthInstitutionEnvironmentsSchema: Schema<PartnerEndCustomerOAuthInstitutionEnvironments> =
  s.object<PartnerEndCustomerOAuthInstitutionEnvironments>({
    development: s.optional(s.lazy(() => partnerEndCustomerOAuthInstitutionApplicationStatusSchema)),
    production: s.optional(s.lazy(() => partnerEndCustomerOAuthInstitutionApplicationStatusSchema)),
  });
