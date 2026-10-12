import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  partnerEndCustomerOAuthInstitutionApplicationStatusSchema,
  type PartnerEndCustomerOAuthInstitutionApplicationStatus,
} from "./partner-end-customer-oauth-institution-application-status.js";

/** Registration statuses by environment. */
export type PartnerEndCustomerOAuthInstitutionEnvironments = {
  /** The registration status for the end customer's application. */
  development?: PartnerEndCustomerOAuthInstitutionApplicationStatus;
  /** The registration status for the end customer's application. */
  production?: PartnerEndCustomerOAuthInstitutionApplicationStatus;
};

export const partnerEndCustomerOAuthInstitutionEnvironmentsSchema: Schema<PartnerEndCustomerOAuthInstitutionEnvironments> =
  s.object<PartnerEndCustomerOAuthInstitutionEnvironments>({
    development: s.optional(s.lazy(() => partnerEndCustomerOAuthInstitutionApplicationStatusSchema)),
    production: s.optional(s.lazy(() => partnerEndCustomerOAuthInstitutionApplicationStatusSchema)),
  });
