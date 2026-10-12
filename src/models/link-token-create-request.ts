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

/** LinkTokenCreateRequest defines the request schema for `/link/token/create` */
export type LinkTokenCreateRequest = {
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
   * The name of your application, as it should be displayed in Link. Maximum length of 30
   * characters. If a value longer than 30 characters is provided, Link will display "This
   * Application" instead.
   */
  clientName: string;
  /**
   * The language that Link should be displayed in. When initializing with Identity Verification,
   * this field is not used; for more details, see [Identity Verification supported
   * languages](https://plaid.com/docs/identity-verification/#supported-languages).
   *
   * Supported languages are:
   * - Danish (`'da'`)
   * - Dutch (`'nl'`)
   * - English (`'en'`)
   * - Estonian (`'et'`)
   * - French (`'fr'`)
   * - German (`'de'`)
   * - Hindi (`'hi'`)
   * - Italian (`'it'`)
   * - Latvian (`'lv'`)
   * - Lithuanian (`'lt'`)
   * - Norwegian (`'no'`)
   * - Polish (`'pl'`)
   * - Portuguese (`'pt'`)
   * - Romanian (`'ro'`)
   * - Spanish (`'es'`)
   * - Swedish (`'sv'`)
   * - Vietnamese (`'vi'`)
   *
   * When using a Link customization, the language configured here must match the setting in the
   * customization, or the customization will not be applied.
   */
  language: string;
  /**
   * Specify an array of Plaid-supported country codes using the ISO-3166-1 alpha-2 country code
   * standard. Institutions from all listed countries will be shown. For a complete mapping of
   * supported products by country, see
   * https://support.plaid.com/hc/en-us/articles/27895826947735-What-Plaid-products-are-supported-in-each-country-and-region.
   * For access to additional countries beyond what you have been approved for, [contact
   * sales](https://plaid.com/contact/), your account manager, or support.
   *
   * If using Identity Verification, `country_codes` should be set to the country where your company
   * is based, not the country where your user is located. For all other products, `country_codes`
   * represents the location of your user's financial institution.
   *
   * If Link is launched with multiple country codes, only products that you are enabled for in all
   * countries will be used by Link. While all countries are enabled by default in Sandbox, in
   * Production only the countries you have requested access for are shown. To request access to
   * additional countries, [file a product access Support
   * ticket](https://dashboard.plaid.com/support/new/product-and-development/product-troubleshooting/request-product-access)
   * via the Plaid dashboard.
   *
   * If using a Link customization, make sure the country codes in the customization match those
   * specified in `country_codes`, or the customization may not be applied.
   *
   * If using the Auth features Instant Match, Instant Micro-deposits, Same-Day Micro-deposits,
   * Automated Micro-deposits, or Database Auth, `country_codes` must be set to `['US']`.
   */
  countryCodes: CountryCode[];
  /**
   * An object specifying information about the end user who will be linking their account.
   * **Required** if `user_id` isn't included.
   */
  user?: LinkTokenCreateRequestUser;
  /**
   * A `user_id` generated using `/user/create`. Required for integrations that began using Plaid
   * Protect, Multi-Item Link, or Plaid Check Consumer Report after December 10, 2025. For more
   * details, see [New User APIs](https://plaid.com/docs/api/users/user-apis). One of either the
   * `user_id` or the `user` field is required.
   */
  userId?: string;
  /**
   * List of Plaid product(s) that the linked Item must support. If launching Link in update mode,
   * should be omitted (unless you are using update mode to add a credit product, such as Assets,
   * Statements, Income, or Plaid Check Consumer Report, to an existing Item); at least one
   * `product` is required otherwise.
   *
   * To maximize the number of institutions and accounts available, initialize Link with the minimal
   * product set required for your use case, as the products specified will limit which institutions
   * and account types will be available to your users in Link. Only institutions that support *all*
   * requested products can be selected; if a user attempts to select an institution that does not
   * support a listed product, a "Connectivity not supported" error message will appear in Link. For
   * each specified product, the Item connected by the user must contain at least one compatible
   * account. For details on compatible product / account type combinations, see [the account
   * type/product support
   * matrix](https://plaid.com/docs/api/accounts/#account-type--product-support-matrix).
   *
   * To add products without limiting the institution list or account types, use the
   * [`optional_products`](https://plaid.com/docs/api/link/#link-token-create-request-optional-products)
   * or
   * [`required_if_supported_products`](https://plaid.com/docs/api/link/#link-token-create-request-required-if-supported-products)
   * fields. Products can also be added to an Item by calling the product endpoint after obtaining
   * an access token; this may require the product to be listed in the
   * [`additional_consented_products`](https://plaid.com/docs/api/link/#link-token-create-request-additional-consented-products)
   * array. For details, see [Choosing when to initialize
   * products](https://plaid.com/docs/link/initializing-products/).
   *
   * `balance` is *not* a valid value, the Balance product does not require explicit initialization
   * and will automatically be initialized when any other product is initialized.
   *
   * If launching Link with CRA products, `cra_base_report` is required and must be included in the
   * `products` array.
   *
   * Note that, unless you have opted to disable Instant Match support, institutions that support
   * Instant Match will also be shown in Link if `auth` is specified as a product, even though these
   * institutions do not contain `auth` in their product array.
   *
   * In Production, you will be billed for each product that you specify when initializing Link.
   * Note that a product cannot be removed from an Item once the Item has been initialized with that
   * product. To stop billing on an Item for subscription-based products, such as Liabilities,
   * Investments, and Transactions, remove the Item via `/item/remove`.
   */
  products?: Products[] | null;
  /**
   * List of Plaid product(s) you wish to use only if the institution and account(s) selected by the
   * user support the product. Institutions that do not support these products will still be shown
   * in Link. The products will only be extracted and billed if the user selects an institution and
   * account type that supports them.
   *
   * There should be no overlap between this array and the `products`, `optional_products`, or
   * `additional_consented_products` arrays. The `products` array must have at least one product.
   *
   * For more details on using this feature, see [Required if Supported
   * Products](https://plaid.com/docs/link/initializing-products/#required-if-supported-products).
   */
  requiredIfSupportedProducts?: Products[] | null;
  /**
   * List of Plaid product(s) that will enhance the consumer's use case, but that your app can
   * function without. Plaid will attempt to fetch data for these products on a best-effort basis,
   * and failure to support these products will not affect Item creation.
   *
   * There should be no overlap between this array and the `products`,
   * `required_if_supported_products`, or `additional_consented_products` arrays. The `products`
   * array must have at least one product.
   *
   * For more details on using this feature, see [Optional
   * Products](https://plaid.com/docs/link/initializing-products/#optional-products).
   */
  optionalProducts?: Products[] | null;
  /**
   * List of additional Plaid product(s) you wish to collect consent for to support your use case.
   * These products will not be billed until you start using them by calling the relevant endpoints.
   *
   * `balance` is *not* a valid value, the Balance product does not require explicit initialization
   * and will automatically have consent collected.
   *
   * Institutions that do not support these products will still be shown in Link.
   *
   * There should be no overlap between this array and the `products` or
   * `required_if_supported_products` arrays.
   *
   * If you include `signal` in `additional_consented_products`, you will need to call
   * [`/signal/prepare`](https://plaid.com/docs/api/products/signal/#signalprepare) before calling
   * `/signal/evaluate` for the first time on an Item in order to get the most accurate results. For
   * more details, see
   * [`/signal/prepare`](https://plaid.com/docs/api/products/signal/#signalprepare).
   */
  additionalConsentedProducts?: Products[] | null;
  /**
   * The destination URL to which any webhooks should be sent. Note that webhooks for Payment
   * Initiation (e-wallet transactions only), Transfer, Bank Transfer (including Auth micro-deposit
   * notification webhooks), Monitor, and Identity Verification are configured via the Dashboard
   * instead. In update mode, this field will not have an effect; to update the webhook receiver
   * endpoint for an existing Item, use `/item/webhook/update` instead.
   */
  webhook?: string;
  /**
   * The `access_token` associated with the Item to update or reference, used when updating,
   * modifying, or accessing an existing `access_token`. Used when launching Link in update mode,
   * when completing the Same-Day Micro-deposit (manual) flow, or (optionally) when initializing
   * Link for a returning user as part of the Transfer UI flow.
   */
  accessToken?: string | null;
  /**
   * A list of access tokens associated with the items to update in Link update mode for the Assets
   * product. Using this instead of the `access_token` field allows the updating of multiple items
   * at once. This feature is in closed beta, please contact your account manager for more info.
   */
  accessTokens?: string[];
  /**
   * The name of the Link customization from the Plaid Dashboard to be applied to Link. If not
   * specified, the `default` customization will be used. When using a Link customization, the
   * language in the customization must match the language selected via the `language` parameter,
   * and the countries in the customization should match the country codes selected via
   * `country_codes`.
   */
  linkCustomizationName?: string;
  /**
   * Enum representing the desired appearance mode for Link, used to force light or dark modes or
   * set Link to change depending on user system settings. Currently in closed beta.
   */
  appearanceMode?: LinkTokenCreateRequestAppearanceMode | null;
  /**
   * A URI indicating the destination where a user should be forwarded after completing the Link
   * flow; used to support OAuth authentication flows when launching Link in the browser or another
   * app. The `redirect_uri` should not contain any query parameters. When used in Production, must
   * be an https URI. Note that any redirect URI must also be added to the Allowed redirect URIs
   * list in the [developer dashboard](https://dashboard.plaid.com/team/api). If initializing on
   * Android, `android_package_name` must be specified instead and `redirect_uri` should be left
   * blank.
   */
  redirectUri?: string;
  /**
   * The name of your app's Android package. Required if using the `link_token` to initialize Link
   * on Android. Any package name specified here must also be added to the Allowed Android package
   * names setting on the [developer dashboard](https://dashboard.plaid.com/team/api). When creating
   * a `link_token` for initializing Link on other platforms, `android_package_name` must be left
   * blank and `redirect_uri` should be used instead.
   */
  androidPackageName?: string;
  /** A map containing data used to highlight institutions in Link. */
  institutionData?: LinkTokenCreateInstitutionData;
  /** A map containing data to pass in for the Card Switch flow. */
  cardSwitch?: LinkTokenCreateCardSwitch;
  /**
   * By default, Link will provide limited account filtering: it will only display Institutions that
   * are compatible with all products supplied in the `products` parameter of `/link/token/create`,
   * and, if `auth` is specified in the `products` array, will also filter out accounts other than
   * `checking`, `savings`, and `cash management` accounts on the Account Select pane. You can
   * further limit the accounts shown in Link by using `account_filters` to specify the account
   * subtypes to be shown in Link. Only the specified subtypes will be shown. This filtering applies
   * to both the Account Select view (if enabled) and the Institution Select view. Institutions that
   * do not support the selected subtypes will be omitted from Link. To indicate that all subtypes
   * should be shown, use the value `"all"`. If the `account_filters` filter is used, any account
   * type for which a filter is not specified will be entirely omitted from Link. For a full list of
   * valid types and subtypes, see the [Account
   * schema](https://plaid.com/docs/api/accounts#account-type-schema).
   *
   * The filter may or may not impact the list of accounts shown by the institution in the OAuth
   * account selection flow, depending on the specific institution. If the user selects excluded
   * account subtypes in the OAuth flow, these accounts will not be added to the Item. If the user
   * selects only excluded account subtypes, the link attempt will fail and the user will be
   * prompted to try again.
   */
  accountFilters?: LinkTokenAccountFilters;
  /**
   * Configuration parameters for EU flows
   *
   * @deprecated
   */
  euConfig?: LinkTokenEuConfig;
  /** Used for certain legacy use cases */
  institutionId?: string;
  /**
   * Specifies options for initializing Link for use with the Pay By Bank flow. This is an optional
   * field to configure the user experience, and currently requires the amount field to be set.
   */
  paymentConfiguration?: LinkTokenCreateRequestPaymentConfiguration;
  /**
   * Specifies options for initializing Link for use with the Payment Initiation (Europe) product.
   * This field is required if `payment_initiation` is included in the `products` array. Either
   * `payment_id` or `consent_id` must be provided.
   */
  paymentInitiation?: LinkTokenCreateRequestPaymentInitiation;
  /**
   * Specifies options for initializing Link for use with the Employment product. This field is
   * required if `employment` is included in the `products` array.
   */
  employment?: LinkTokenCreateRequestEmployment;
  /**
   * Specifies options for initializing Link for use with the Income product. This field is required
   * if `income_verification` is included in the `products` array.
   */
  incomeVerification?: LinkTokenCreateRequestIncomeVerification;
  /**
   * Specifies options for initializing Link for use with the Base Report product. This field is
   * required if `assets` is included in the `products` array and the client is CRA-enabled.
   *
   * @deprecated
   */
  baseReport?: LinkTokenCreateRequestBaseReport;
  /** Specifies options for initializing Link for use with the Credit Partner Insights product. */
  creditPartnerInsights?: LinkTokenCreateRequestCreditPartnerInsights;
  /** Specifies options for initializing Link for use with Plaid Check products */
  craOptions?: LinkTokenCreateRequestCraOptions;
  /**
   * Describes the reason you are generating a Consumer Report for this user. When calling
   * `/link/token/create`, this field is required when using Plaid Check (CRA) products; invalid if
   * not using Plaid Check (CRA) products.
   *
   * `ACCOUNT_REVIEW_CREDIT`: In connection with a consumer credit transaction for the review or
   * collection of an account pursuant to FCRA Section 604(a)(3)(A).
   *
   * `ACCOUNT_REVIEW_NON_CREDIT`: For a legitimate business need of the information to review a
   * non-credit account provided primarily for personal, family, or household purposes to determine
   * whether the consumer continues to meet the terms of the account pursuant to FCRA Section
   * 604(a)(3)(F)(2).
   *
   * `EXTENSION_OF_CREDIT`: In connection with a credit transaction initiated by and involving the
   * consumer pursuant to FCRA Section 604(a)(3)(A).
   *
   * `LEGITIMATE_BUSINESS_NEED_TENANT_SCREENING`: For a legitimate business need in connection with
   * a business transaction initiated by the consumer primarily for personal, family, or household
   * purposes in connection with a property rental assessment pursuant to FCRA Section
   * 604(a)(3)(F)(i).
   *
   * `LEGITIMATE_BUSINESS_NEED_OTHER`: For a legitimate business need in connection with a business
   * transaction made primarily for personal, family, or household initiated by the consumer
   * pursuant to FCRA Section 604(a)(3)(F)(i).
   *
   * `WRITTEN_INSTRUCTION_PREQUALIFICATION`: In accordance with the written instructions of the
   * consumer pursuant to FCRA Section 604(a)(2), to evaluate an application's profile to make an
   * offer to the consumer.
   *
   * `WRITTEN_INSTRUCTION_OTHER`: In accordance with the written instructions of the consumer
   * pursuant to FCRA Section 604(a)(2), such as when an individual agrees to act as a guarantor or
   * assumes personal liability for a consumer, business, or commercial loan.
   *
   * `ELIGIBILITY_FOR_GOVT_BENEFITS`: In connection with an eligibility determination for a
   * government benefit where the entity is required to consider an applicant's financial status
   * pursuant to FCRA Section 604(a)(3)(D).
   */
  consumerReportPermissiblePurpose?: ConsumerReportPermissiblePurpose;
  /**
   * Specifies options for initializing Link for use with the Auth product. This field can be used
   * to enable or disable extended Auth flows for the resulting Link session. Omitting any field
   * will result in a default that can be configured by your account manager. The default behavior
   * described in the documentation is the default behavior that will apply if you have not
   * requested your account manager to apply a different default. If you have enabled the [Dashboard
   * Account Verification pane](https://dashboard.plaid.com/account-verification), the settings
   * enabled there will override any settings in this object.
   */
  auth?: LinkTokenCreateRequestAuth;
  /** Specifies options for initializing Link for use with the Transfer product. */
  transfer?: LinkTokenCreateRequestTransfer;
  /**
   * Specifies options for initializing Link for [update
   * mode](https://plaid.com/docs/link/update-mode).
   */
  update?: LinkTokenCreateRequestUpdate;
  /** Specifies option for initializing Link for use with the Identity Verification product. */
  identityVerification?: LinkTokenCreateRequestIdentityVerification;
  /**
   * Specifies options for initializing Link for use with the Statements product. This field is
   * required for the statements product.
   */
  statements?: LinkTokenCreateRequestStatements;
  /** A third party user token associated with the current user. */
  thirdPartyUserToken?: string;
  /** Configuration parameters for the Investments product */
  investments?: LinkTokenInvestments;
  /** Configuration parameters for the Investments Move product */
  investmentsAuth?: LinkTokenInvestmentsAuth;
  /**
   * Configuration parameters for Hosted Link. To enable the session for Hosted Link, send this
   * object in the request. It can be empty.
   */
  hostedLink?: LinkTokenCreateHostedLink;
  /** Configuration parameters for the Transactions product */
  transactions?: LinkTokenTransactions;
  /** Configuration parameters for the Cashflow Report product. Currently in closed beta. */
  cashflowReport?: LinkTokenCashflowReport;
  /** If `true`, request a CRA connection. Defaults to `false`. */
  craEnabled?: boolean;
  /** Identity object used to specify document upload */
  identity?: LinkTokenCreateIdentity;
  /**
   * If `true`, indicates that client supports linking FinanceKit / AppleCard items. Defaults to
   * `false`.
   */
  financekitSupported?: boolean;
  /** If `true`, enable linking multiple items in the same Link session. Defaults to `false`. */
  enableMultiItemLink?: boolean;
  /**
   * A user token generated using `/user/create`. Any Item created during the Link session will be
   * associated with the user. Integrations that began using Plaid Protect, Multi-Item Link, or
   * Plaid Check Consumer Report before December 10, 2025 use this field instead of the `user_id`.
   */
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
