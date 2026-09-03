import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  partnerEndCustomerAddressSchema,
  type PartnerEndCustomerAddress,
} from "./partner-end-customer-address.js";
import {
  partnerEndCustomerAssetsUnderManagementSchema,
  type PartnerEndCustomerAssetsUnderManagement,
} from "./partner-end-customer-assets-under-management.js";
import {
  partnerEndCustomerBillingContactSchema,
  type PartnerEndCustomerBillingContact,
} from "./partner-end-customer-billing-contact.js";
import {
  partnerEndCustomerCustomerSupportInfoSchema,
  type PartnerEndCustomerCustomerSupportInfo,
} from "./partner-end-customer-customer-support-info.js";
import {
  partnerEndCustomerTechnicalContactSchema,
  type PartnerEndCustomerTechnicalContact,
} from "./partner-end-customer-technical-contact.js";
import { productsSchema, type Products } from "./products.js";

export type PartnerCustomerCreateRequest = {
  clientId?: string;
  secret?: string;
  companyName: string;
  isDiligenceAttested: boolean;
  products?: Products[];
  createLinkCustomization?: boolean;
  logo?: string;
  legalEntityName: string;
  website: string;
  applicationName: string;
  technicalContact?: PartnerEndCustomerTechnicalContact;
  billingContact?: PartnerEndCustomerBillingContact;
  customerSupportInfo?: PartnerEndCustomerCustomerSupportInfo;
  address: PartnerEndCustomerAddress;
  isBankAddendumCompleted: boolean;
  assetsUnderManagement?: PartnerEndCustomerAssetsUnderManagement;
  redirectUris?: string[];
  registrationNumber?: string;
};

export const partnerCustomerCreateRequestSchema: Schema<PartnerCustomerCreateRequest> =
  s.object<PartnerCustomerCreateRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    companyName: s.string(),
    isDiligenceAttested: s.boolean(),
    products: s.optional(s.array(s.lazy(() => productsSchema))),
    createLinkCustomization: s.optional(s.boolean()),
    logo: s.optional(s.string()),
    legalEntityName: s.string(),
    website: s.string(),
    applicationName: s.string(),
    technicalContact: s.optional(s.lazy(() => partnerEndCustomerTechnicalContactSchema)),
    billingContact: s.optional(s.lazy(() => partnerEndCustomerBillingContactSchema)),
    customerSupportInfo: s.optional(s.lazy(() => partnerEndCustomerCustomerSupportInfoSchema)),
    address: partnerEndCustomerAddressSchema,
    isBankAddendumCompleted: s.boolean(),
    assetsUnderManagement: s.optional(s.lazy(() => partnerEndCustomerAssetsUnderManagementSchema)),
    redirectUris: s.optional(s.array(s.string())),
    registrationNumber: s.optional(s.string()),
    _keysMap: {
      clientId: "client_id",
      companyName: "company_name",
      isDiligenceAttested: "is_diligence_attested",
      createLinkCustomization: "create_link_customization",
      legalEntityName: "legal_entity_name",
      applicationName: "application_name",
      technicalContact: "technical_contact",
      billingContact: "billing_contact",
      customerSupportInfo: "customer_support_info",
      isBankAddendumCompleted: "is_bank_addendum_completed",
      assetsUnderManagement: "assets_under_management",
      redirectUris: "redirect_uris",
      registrationNumber: "registration_number",
    },
  });
