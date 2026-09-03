import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  consumerReportPermissiblePurposeSchema,
  type ConsumerReportPermissiblePurpose,
} from "./consumer-report-permissible-purpose.js";
import { countryCodeSchema, type CountryCode } from "./country-code.js";
import { linkTokenAccountFiltersSchema, type LinkTokenAccountFilters } from "./link-token-account-filters.js";
import { linkTokenCashflowReportSchema, type LinkTokenCashflowReport } from "./link-token-cashflow-report.js";
import {
  linkTokenCreateCardSwitchSchema,
  type LinkTokenCreateCardSwitch,
} from "./link-token-create-card-switch.js";
import {
  linkTokenCreateHostedLinkSchema,
  type LinkTokenCreateHostedLink,
} from "./link-token-create-hosted-link.js";
import { linkTokenCreateIdentitySchema, type LinkTokenCreateIdentity } from "./link-token-create-identity.js";
import {
  linkTokenCreateInstitutionDataSchema,
  type LinkTokenCreateInstitutionData,
} from "./link-token-create-institution-data.js";
import {
  linkTokenCreateRequestAppearanceModeSchema,
  type LinkTokenCreateRequestAppearanceMode,
} from "./link-token-create-request-appearance-mode.js";
import {
  linkTokenCreateRequestAuthSchema,
  type LinkTokenCreateRequestAuth,
} from "./link-token-create-request-auth.js";
import {
  linkTokenCreateRequestBaseReportSchema,
  type LinkTokenCreateRequestBaseReport,
} from "./link-token-create-request-base-report.js";
import {
  linkTokenCreateRequestCraOptionsSchema,
  type LinkTokenCreateRequestCraOptions,
} from "./link-token-create-request-cra-options.js";
import {
  linkTokenCreateRequestCreditPartnerInsightsSchema,
  type LinkTokenCreateRequestCreditPartnerInsights,
} from "./link-token-create-request-credit-partner-insights.js";
import {
  linkTokenCreateRequestEmploymentSchema,
  type LinkTokenCreateRequestEmployment,
} from "./link-token-create-request-employment.js";
import {
  linkTokenCreateRequestIdentityVerificationSchema,
  type LinkTokenCreateRequestIdentityVerification,
} from "./link-token-create-request-identity-verification.js";
import {
  linkTokenCreateRequestIncomeVerificationSchema,
  type LinkTokenCreateRequestIncomeVerification,
} from "./link-token-create-request-income-verification.js";
import {
  linkTokenCreateRequestPaymentConfigurationSchema,
  type LinkTokenCreateRequestPaymentConfiguration,
} from "./link-token-create-request-payment-configuration.js";
import {
  linkTokenCreateRequestPaymentInitiationSchema,
  type LinkTokenCreateRequestPaymentInitiation,
} from "./link-token-create-request-payment-initiation.js";
import {
  linkTokenCreateRequestStatementsSchema,
  type LinkTokenCreateRequestStatements,
} from "./link-token-create-request-statements.js";
import {
  linkTokenCreateRequestTransferSchema,
  type LinkTokenCreateRequestTransfer,
} from "./link-token-create-request-transfer.js";
import {
  linkTokenCreateRequestUpdateSchema,
  type LinkTokenCreateRequestUpdate,
} from "./link-token-create-request-update.js";
import {
  linkTokenCreateRequestUserSchema,
  type LinkTokenCreateRequestUser,
} from "./link-token-create-request-user.js";
import { linkTokenEuConfigSchema, type LinkTokenEuConfig } from "./link-token-eu-config.js";
import {
  linkTokenInvestmentsAuthSchema,
  type LinkTokenInvestmentsAuth,
} from "./link-token-investments-auth.js";
import { linkTokenInvestmentsSchema, type LinkTokenInvestments } from "./link-token-investments.js";
import { linkTokenTransactionsSchema, type LinkTokenTransactions } from "./link-token-transactions.js";
import { productsSchema, type Products } from "./products.js";

export type LinkTokenCreateRequest = {
  clientId?: string;
  secret?: string;
  clientName: string;
  language: string;
  countryCodes: CountryCode[];
  user?: LinkTokenCreateRequestUser;
  userId?: string;
  products?: Products[] | null;
  requiredIfSupportedProducts?: Products[] | null;
  optionalProducts?: Products[] | null;
  additionalConsentedProducts?: Products[] | null;
  webhook?: string;
  accessToken?: string | null;
  accessTokens?: string[];
  linkCustomizationName?: string;
  appearanceMode?: LinkTokenCreateRequestAppearanceMode | null;
  redirectUri?: string;
  androidPackageName?: string;
  institutionData?: LinkTokenCreateInstitutionData;
  cardSwitch?: LinkTokenCreateCardSwitch;
  accountFilters?: LinkTokenAccountFilters;
  euConfig?: LinkTokenEuConfig;
  institutionId?: string;
  paymentConfiguration?: LinkTokenCreateRequestPaymentConfiguration;
  paymentInitiation?: LinkTokenCreateRequestPaymentInitiation;
  employment?: LinkTokenCreateRequestEmployment;
  incomeVerification?: LinkTokenCreateRequestIncomeVerification;
  baseReport?: LinkTokenCreateRequestBaseReport;
  creditPartnerInsights?: LinkTokenCreateRequestCreditPartnerInsights;
  craOptions?: LinkTokenCreateRequestCraOptions;
  consumerReportPermissiblePurpose?: ConsumerReportPermissiblePurpose;
  auth?: LinkTokenCreateRequestAuth;
  transfer?: LinkTokenCreateRequestTransfer;
  update?: LinkTokenCreateRequestUpdate;
  identityVerification?: LinkTokenCreateRequestIdentityVerification;
  statements?: LinkTokenCreateRequestStatements;
  thirdPartyUserToken?: string;
  investments?: LinkTokenInvestments;
  investmentsAuth?: LinkTokenInvestmentsAuth;
  hostedLink?: LinkTokenCreateHostedLink;
  transactions?: LinkTokenTransactions;
  cashflowReport?: LinkTokenCashflowReport;
  craEnabled?: boolean;
  identity?: LinkTokenCreateIdentity;
  financekitSupported?: boolean;
  enableMultiItemLink?: boolean;
  userToken?: string;
};

export const linkTokenCreateRequestSchema: Schema<LinkTokenCreateRequest> = s.object<LinkTokenCreateRequest>({
  clientId: s.optional(s.string()),
  secret: s.optional(s.string()),
  clientName: s.string(),
  language: s.string(),
  countryCodes: s.array(s.lazy(() => countryCodeSchema)),
  user: s.optional(s.lazy(() => linkTokenCreateRequestUserSchema)),
  userId: s.optional(s.string()),
  products: s.optionalNullable(s.array(s.lazy(() => productsSchema))),
  requiredIfSupportedProducts: s.optionalNullable(s.array(s.lazy(() => productsSchema))),
  optionalProducts: s.optionalNullable(s.array(s.lazy(() => productsSchema))),
  additionalConsentedProducts: s.optionalNullable(s.array(s.lazy(() => productsSchema))),
  webhook: s.optional(s.string()),
  accessToken: s.optionalNullable(s.string()),
  accessTokens: s.optional(s.array(s.string())),
  linkCustomizationName: s.optional(s.string()),
  appearanceMode: s.optionalNullable(s.lazy(() => linkTokenCreateRequestAppearanceModeSchema)),
  redirectUri: s.optional(s.string()),
  androidPackageName: s.optional(s.string()),
  institutionData: s.optional(s.lazy(() => linkTokenCreateInstitutionDataSchema)),
  cardSwitch: s.optional(s.lazy(() => linkTokenCreateCardSwitchSchema)),
  accountFilters: s.optional(s.lazy(() => linkTokenAccountFiltersSchema)),
  euConfig: s.optional(s.lazy(() => linkTokenEuConfigSchema)),
  institutionId: s.optional(s.string()),
  paymentConfiguration: s.optional(s.lazy(() => linkTokenCreateRequestPaymentConfigurationSchema)),
  paymentInitiation: s.optional(s.lazy(() => linkTokenCreateRequestPaymentInitiationSchema)),
  employment: s.optional(s.lazy(() => linkTokenCreateRequestEmploymentSchema)),
  incomeVerification: s.optional(s.lazy(() => linkTokenCreateRequestIncomeVerificationSchema)),
  baseReport: s.optional(s.lazy(() => linkTokenCreateRequestBaseReportSchema)),
  creditPartnerInsights: s.optional(s.lazy(() => linkTokenCreateRequestCreditPartnerInsightsSchema)),
  craOptions: s.optional(s.lazy(() => linkTokenCreateRequestCraOptionsSchema)),
  consumerReportPermissiblePurpose: s.optional(s.lazy(() => consumerReportPermissiblePurposeSchema)),
  auth: s.optional(s.lazy(() => linkTokenCreateRequestAuthSchema)),
  transfer: s.optional(s.lazy(() => linkTokenCreateRequestTransferSchema)),
  update: s.optional(s.lazy(() => linkTokenCreateRequestUpdateSchema)),
  identityVerification: s.optional(s.lazy(() => linkTokenCreateRequestIdentityVerificationSchema)),
  statements: s.optional(s.lazy(() => linkTokenCreateRequestStatementsSchema)),
  thirdPartyUserToken: s.optional(s.string()),
  investments: s.optional(s.lazy(() => linkTokenInvestmentsSchema)),
  investmentsAuth: s.optional(s.lazy(() => linkTokenInvestmentsAuthSchema)),
  hostedLink: s.optional(s.lazy(() => linkTokenCreateHostedLinkSchema)),
  transactions: s.optional(s.lazy(() => linkTokenTransactionsSchema)),
  cashflowReport: s.optional(s.lazy(() => linkTokenCashflowReportSchema)),
  craEnabled: s.optional(s.boolean()),
  identity: s.optional(s.lazy(() => linkTokenCreateIdentitySchema)),
  financekitSupported: s.optional(s.boolean()),
  enableMultiItemLink: s.optional(s.boolean()),
  userToken: s.optional(s.string()),
  _keysMap: {
    clientId: "client_id",
    clientName: "client_name",
    countryCodes: "country_codes",
    userId: "user_id",
    requiredIfSupportedProducts: "required_if_supported_products",
    optionalProducts: "optional_products",
    additionalConsentedProducts: "additional_consented_products",
    accessToken: "access_token",
    accessTokens: "access_tokens",
    linkCustomizationName: "link_customization_name",
    appearanceMode: "appearance_mode",
    redirectUri: "redirect_uri",
    androidPackageName: "android_package_name",
    institutionData: "institution_data",
    cardSwitch: "card_switch",
    accountFilters: "account_filters",
    euConfig: "eu_config",
    institutionId: "institution_id",
    paymentConfiguration: "payment_configuration",
    paymentInitiation: "payment_initiation",
    incomeVerification: "income_verification",
    baseReport: "base_report",
    creditPartnerInsights: "credit_partner_insights",
    craOptions: "cra_options",
    consumerReportPermissiblePurpose: "consumer_report_permissible_purpose",
    identityVerification: "identity_verification",
    thirdPartyUserToken: "third_party_user_token",
    investmentsAuth: "investments_auth",
    hostedLink: "hosted_link",
    cashflowReport: "cashflow_report",
    craEnabled: "cra_enabled",
    financekitSupported: "financekit_supported",
    enableMultiItemLink: "enable_multi_item_link",
    userToken: "user_token",
  },
});
