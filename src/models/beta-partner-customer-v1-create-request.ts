import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  partnerEndCustomerAddressSchema,
  type PartnerEndCustomerAddress,
} from "./partner-end-customer-address.js";
import {
  partnerEndCustomerBankAddendumAcceptanceSchema,
  type PartnerEndCustomerBankAddendumAcceptance,
} from "./partner-end-customer-bank-addendum-acceptance.js";
import {
  partnerEndCustomerBillingContactSchema,
  type PartnerEndCustomerBillingContact,
} from "./partner-end-customer-billing-contact.js";
import {
  partnerEndCustomerCustomerSupportInfoSchema,
  type PartnerEndCustomerCustomerSupportInfo,
} from "./partner-end-customer-customer-support-info.js";
import {
  partnerEndCustomerQuestionnairesSchema,
  type PartnerEndCustomerQuestionnaires,
} from "./partner-end-customer-questionnaires.js";
import {
  partnerEndCustomerTechnicalContactSchema,
  type PartnerEndCustomerTechnicalContact,
} from "./partner-end-customer-technical-contact.js";
import { productsSchema, type Products } from "./products.js";

export type BetaPartnerCustomerV1CreateRequest = {
  clientId?: string;
  secret?: string;
  companyName: string;
  isDiligenceAttested?: boolean;
  products?: Products[];
  createLinkCustomization?: boolean;
  logo?: string;
  legalEntityName?: string;
  website: string;
  applicationName: string;
  technicalContact?: PartnerEndCustomerTechnicalContact;
  billingContact?: PartnerEndCustomerBillingContact;
  customerSupportInfo: PartnerEndCustomerCustomerSupportInfo;
  address: PartnerEndCustomerAddress;
  redirectUris?: string[];
  bankAddendumAcceptance?: PartnerEndCustomerBankAddendumAcceptance;
  questionnaires?: PartnerEndCustomerQuestionnaires;
};

export const betaPartnerCustomerV1CreateRequestSchema: Schema<BetaPartnerCustomerV1CreateRequest> =
  s.object<BetaPartnerCustomerV1CreateRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    companyName: s.string(),
    isDiligenceAttested: s.optional(s.boolean()),
    products: s.optional(s.array(s.lazy(() => productsSchema))),
    createLinkCustomization: s.optional(s.boolean()),
    logo: s.optional(s.string()),
    legalEntityName: s.optional(s.string()),
    website: s.string(),
    applicationName: s.string(),
    technicalContact: s.optional(s.lazy(() => partnerEndCustomerTechnicalContactSchema)),
    billingContact: s.optional(s.lazy(() => partnerEndCustomerBillingContactSchema)),
    customerSupportInfo: partnerEndCustomerCustomerSupportInfoSchema,
    address: partnerEndCustomerAddressSchema,
    redirectUris: s.optional(s.array(s.string())),
    bankAddendumAcceptance: s.optional(s.lazy(() => partnerEndCustomerBankAddendumAcceptanceSchema)),
    questionnaires: s.optional(s.lazy(() => partnerEndCustomerQuestionnairesSchema)),
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
      redirectUris: "redirect_uris",
      bankAddendumAcceptance: "bank_addendum_acceptance",
    },
  });
