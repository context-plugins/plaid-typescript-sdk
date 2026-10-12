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

/** Request schema for `/partner/customer/create`. */
export type PartnerCustomerCreateRequest = {
  /**
   * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the
   * `PLAID-CLIENT-ID` header or as part of a request body.
   */
  clientId?: string;
  /**
   * Your Plaid API `secret`. The `secret` is required and may be provided either in the
   * `PLAID-SECRET` header or as part of a request body.
   */
  secret?: string;
  /**
   * The company name of the end customer being created. This will be used to display the end
   * customer in the Plaid Dashboard. It will not be shown to end users.
   */
  companyName: string;
  /**
   * Denotes whether or not the partner has completed attestation of diligence for the end customer
   * to be created.
   */
  isDiligenceAttested: boolean;
  /**
   * The products to be enabled for the end customer. If empty or `null`, this field will default to
   * the products enabled for the reseller at the time this endpoint is called.
   */
  products?: Products[];
  /**
   * If `true`, the end customer's default Link customization will be set to match the partner's.
   * You can always change the end customer's Link customization in the Plaid Dashboard. See the
   * [Link Customization docs](https://plaid.com/docs/link/customization/) for more information. If
   * you require the ability to programmatically create end customers using multiple different Link
   * customization profiles, contact your Plaid account manager for assistance.
   *
   * Important: Data Transparency Messaging (DTM) use cases will not be copied to the end customer's
   * Link customization unless the **Publish changes** button is clicked after the use cases are
   * applied. Link will not work in Production unless the end customer's DTM use cases are
   * configured. For more details, see [Data Transparency
   * Messaging](https://plaid.com/docs/link/data-transparency-messaging-migration-guide/).
   */
  createLinkCustomization?: boolean;
  /**
   * Base64-encoded representation of the end customer's logo. Must be a PNG of size 1024x1024 under
   * 4MB. The logo will be shared with financial institutions and shown to the end user during Link
   * flows. A logo is required if `create_link_customization` is `true`. If
   * `create_link_customization` is `false` and the logo is omitted, the partner's logo will be used
   * if one exists, otherwise a stock logo will be used.
   */
  logo?: string;
  /**
   * The end customer's legal name. This will be shared with financial institutions as part of the
   * OAuth registration process. It will not be shown to end users.
   */
  legalEntityName: string;
  /** The end customer's website. */
  website: string;
  /**
   * The name of the end customer's application. This will be shown to end users when they go
   * through the Plaid Link flow. The application name must be unique and cannot match the name of
   * another application already registered with Plaid.
   */
  applicationName: string;
  /**
   * The technical contact for the end customer. Defaults to partner's technical contact if omitted.
   */
  technicalContact?: PartnerEndCustomerTechnicalContact;
  /** The billing contact for the end customer. Defaults to partner's billing contact if omitted. */
  billingContact?: PartnerEndCustomerBillingContact;
  /**
   * This information is public. Users of your app will see this information when managing
   * connections between your app and their bank accounts in Plaid Portal. Defaults to partner's
   * customer support info if omitted. This field is mandatory for partners whose Plaid accounts
   * were created after November 26, 2024 and will be mandatory for all partners by the 1033
   * compliance deadline.
   */
  customerSupportInfo?: PartnerEndCustomerCustomerSupportInfo;
  /** The end customer's address. */
  address: PartnerEndCustomerAddress;
  /** Denotes whether the partner has forwarded the Plaid bank addendum to the end customer. */
  isBankAddendumCompleted: boolean;
  /**
   * Assets under management for the given end customer. Required for end customers with monthly
   * service commitments.
   */
  assetsUnderManagement?: PartnerEndCustomerAssetsUnderManagement;
  /**
   * A list of URIs indicating the destination(s) where a user can be forwarded after completing the
   * Link flow; used to support OAuth authentication flows when launching Link in the browser or
   * another app. URIs should not contain any query parameters. When used in Production, URIs must
   * use https. To modify redirect URIs for an end customer after creating them, go to the end
   * customer's [API page](https://dashboard.plaid.com/team/api) in the Dashboard.
   */
  redirectUris?: string[];
  /**
   * The unique identifier assigned to a financial institution by regulatory authorities, if
   * applicable. For banks, this is the FDIC Certificate Number. For credit unions, this is the
   * Credit Union Charter Number.
   */
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
