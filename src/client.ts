import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import { DEFAULT_CLIENT_OPTIONS, type ClientOptions } from "./client-options.js";
import type { ApiPromise } from "./core/api-promise.js";
import type { RequestOptions } from "./core/api-request.js";
import { allAuth, anyAuth, noneAuth } from "./core/auth/schemes.js";
import { RawClient } from "./core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "./core/response-error.js";
import * as s from "./core/validation/index.js";
import {
  accountsBalanceGetRequestSchema,
  type AccountsBalanceGetRequest,
} from "./models/accounts-balance-get-request.js";
import { accountsGetRequestSchema, type AccountsGetRequest } from "./models/accounts-get-request.js";
import { accountsGetResponseSchema, type AccountsGetResponse } from "./models/accounts-get-response.js";
import { applicationGetRequestSchema, type ApplicationGetRequest } from "./models/application-get-request.js";
import {
  applicationGetResponseSchema,
  type ApplicationGetResponse,
} from "./models/application-get-response.js";
import {
  assetReportAuditCopyCreateRequestSchema,
  type AssetReportAuditCopyCreateRequest,
} from "./models/asset-report-audit-copy-create-request.js";
import {
  assetReportAuditCopyCreateResponseSchema,
  type AssetReportAuditCopyCreateResponse,
} from "./models/asset-report-audit-copy-create-response.js";
import {
  assetReportAuditCopyGetRequestSchema,
  type AssetReportAuditCopyGetRequest,
} from "./models/asset-report-audit-copy-get-request.js";
import {
  assetReportAuditCopyPdfGetRequestSchema,
  type AssetReportAuditCopyPdfGetRequest,
} from "./models/asset-report-audit-copy-pdf-get-request.js";
import {
  assetReportAuditCopyRemoveRequestSchema,
  type AssetReportAuditCopyRemoveRequest,
} from "./models/asset-report-audit-copy-remove-request.js";
import {
  assetReportAuditCopyRemoveResponseSchema,
  type AssetReportAuditCopyRemoveResponse,
} from "./models/asset-report-audit-copy-remove-response.js";
import {
  assetReportCreateRequestSchema,
  type AssetReportCreateRequest,
} from "./models/asset-report-create-request.js";
import {
  assetReportCreateResponseSchema,
  type AssetReportCreateResponse,
} from "./models/asset-report-create-response.js";
import {
  assetReportFilterRequestSchema,
  type AssetReportFilterRequest,
} from "./models/asset-report-filter-request.js";
import {
  assetReportFilterResponseSchema,
  type AssetReportFilterResponse,
} from "./models/asset-report-filter-response.js";
import {
  assetReportFreddieGetRequestSchema,
  type AssetReportFreddieGetRequest,
} from "./models/asset-report-freddie-get-request.js";
import {
  assetReportFreddieGetResponseSchema,
  type AssetReportFreddieGetResponse,
} from "./models/asset-report-freddie-get-response.js";
import {
  assetReportGetRequestSchema,
  type AssetReportGetRequest,
} from "./models/asset-report-get-request.js";
import {
  assetReportGetResponseSchema,
  type AssetReportGetResponse,
} from "./models/asset-report-get-response.js";
import {
  assetReportPdfGetRequestSchema,
  type AssetReportPdfGetRequest,
} from "./models/asset-report-pdf-get-request.js";
import {
  assetReportRefreshRequestSchema,
  type AssetReportRefreshRequest,
} from "./models/asset-report-refresh-request.js";
import {
  assetReportRefreshResponseSchema,
  type AssetReportRefreshResponse,
} from "./models/asset-report-refresh-response.js";
import {
  assetReportRemoveRequestSchema,
  type AssetReportRemoveRequest,
} from "./models/asset-report-remove-request.js";
import {
  assetReportRemoveResponseSchema,
  type AssetReportRemoveResponse,
} from "./models/asset-report-remove-response.js";
import { authGetRequestSchema, type AuthGetRequest } from "./models/auth-get-request.js";
import { authGetResponseSchema, type AuthGetResponse } from "./models/auth-get-response.js";
import { authVerifyRequestSchema, type AuthVerifyRequest } from "./models/auth-verify-request.js";
import { authVerifyResponseSchema, type AuthVerifyResponse } from "./models/auth-verify-response.js";
import {
  bankTransferBalanceGetRequestSchema,
  type BankTransferBalanceGetRequest,
} from "./models/bank-transfer-balance-get-request.js";
import {
  bankTransferBalanceGetResponseSchema,
  type BankTransferBalanceGetResponse,
} from "./models/bank-transfer-balance-get-response.js";
import {
  bankTransferCancelRequestSchema,
  type BankTransferCancelRequest,
} from "./models/bank-transfer-cancel-request.js";
import {
  bankTransferCancelResponseSchema,
  type BankTransferCancelResponse,
} from "./models/bank-transfer-cancel-response.js";
import {
  bankTransferCreateRequestSchema,
  type BankTransferCreateRequest,
} from "./models/bank-transfer-create-request.js";
import {
  bankTransferCreateResponseSchema,
  type BankTransferCreateResponse,
} from "./models/bank-transfer-create-response.js";
import {
  bankTransferEventListRequestSchema,
  type BankTransferEventListRequest,
} from "./models/bank-transfer-event-list-request.js";
import {
  bankTransferEventListResponseSchema,
  type BankTransferEventListResponse,
} from "./models/bank-transfer-event-list-response.js";
import {
  bankTransferEventSyncRequestSchema,
  type BankTransferEventSyncRequest,
} from "./models/bank-transfer-event-sync-request.js";
import {
  bankTransferEventSyncResponseSchema,
  type BankTransferEventSyncResponse,
} from "./models/bank-transfer-event-sync-response.js";
import {
  bankTransferGetRequestSchema,
  type BankTransferGetRequest,
} from "./models/bank-transfer-get-request.js";
import {
  bankTransferGetResponseSchema,
  type BankTransferGetResponse,
} from "./models/bank-transfer-get-response.js";
import {
  bankTransferListRequestSchema,
  type BankTransferListRequest,
} from "./models/bank-transfer-list-request.js";
import {
  bankTransferListResponseSchema,
  type BankTransferListResponse,
} from "./models/bank-transfer-list-response.js";
import {
  bankTransferMigrateAccountRequestSchema,
  type BankTransferMigrateAccountRequest,
} from "./models/bank-transfer-migrate-account-request.js";
import {
  bankTransferMigrateAccountResponseSchema,
  type BankTransferMigrateAccountResponse,
} from "./models/bank-transfer-migrate-account-response.js";
import {
  bankTransferSweepGetRequestSchema,
  type BankTransferSweepGetRequest,
} from "./models/bank-transfer-sweep-get-request.js";
import {
  bankTransferSweepGetResponseSchema,
  type BankTransferSweepGetResponse,
} from "./models/bank-transfer-sweep-get-response.js";
import {
  bankTransferSweepListRequestSchema,
  type BankTransferSweepListRequest,
} from "./models/bank-transfer-sweep-list-request.js";
import {
  bankTransferSweepListResponseSchema,
  type BankTransferSweepListResponse,
} from "./models/bank-transfer-sweep-list-response.js";
import {
  beaconAccountRiskEvaluateRequestSchema,
  type BeaconAccountRiskEvaluateRequest,
} from "./models/beacon-account-risk-evaluate-request.js";
import {
  beaconAccountRiskEvaluateResponseSchema,
  type BeaconAccountRiskEvaluateResponse,
} from "./models/beacon-account-risk-evaluate-response.js";
import {
  beaconDuplicateGetRequestSchema,
  type BeaconDuplicateGetRequest,
} from "./models/beacon-duplicate-get-request.js";
import {
  beaconDuplicateGetResponseSchema,
  type BeaconDuplicateGetResponse,
} from "./models/beacon-duplicate-get-response.js";
import {
  beaconReportCreateRequestSchema,
  type BeaconReportCreateRequest,
} from "./models/beacon-report-create-request.js";
import {
  beaconReportCreateResponseSchema,
  type BeaconReportCreateResponse,
} from "./models/beacon-report-create-response.js";
import {
  beaconReportGetRequestSchema,
  type BeaconReportGetRequest,
} from "./models/beacon-report-get-request.js";
import {
  beaconReportGetResponseSchema,
  type BeaconReportGetResponse,
} from "./models/beacon-report-get-response.js";
import {
  beaconReportListRequestSchema,
  type BeaconReportListRequest,
} from "./models/beacon-report-list-request.js";
import {
  beaconReportListResponseSchema,
  type BeaconReportListResponse,
} from "./models/beacon-report-list-response.js";
import {
  beaconReportSyndicationGetRequestSchema,
  type BeaconReportSyndicationGetRequest,
} from "./models/beacon-report-syndication-get-request.js";
import {
  beaconReportSyndicationGetResponseSchema,
  type BeaconReportSyndicationGetResponse,
} from "./models/beacon-report-syndication-get-response.js";
import {
  beaconReportSyndicationListRequestSchema,
  type BeaconReportSyndicationListRequest,
} from "./models/beacon-report-syndication-list-request.js";
import {
  beaconReportSyndicationListResponseSchema,
  type BeaconReportSyndicationListResponse,
} from "./models/beacon-report-syndication-list-response.js";
import {
  beaconUserAccountInsightsGetRequestSchema,
  type BeaconUserAccountInsightsGetRequest,
} from "./models/beacon-user-account-insights-get-request.js";
import {
  beaconUserAccountInsightsGetResponseSchema,
  type BeaconUserAccountInsightsGetResponse,
} from "./models/beacon-user-account-insights-get-response.js";
import {
  beaconUserCreateRequestSchema,
  type BeaconUserCreateRequest,
} from "./models/beacon-user-create-request.js";
import {
  beaconUserCreateResponseSchema,
  type BeaconUserCreateResponse,
} from "./models/beacon-user-create-response.js";
import { beaconUserGetRequestSchema, type BeaconUserGetRequest } from "./models/beacon-user-get-request.js";
import {
  beaconUserGetResponseSchema,
  type BeaconUserGetResponse,
} from "./models/beacon-user-get-response.js";
import {
  beaconUserHistoryListRequestSchema,
  type BeaconUserHistoryListRequest,
} from "./models/beacon-user-history-list-request.js";
import {
  beaconUserHistoryListResponseSchema,
  type BeaconUserHistoryListResponse,
} from "./models/beacon-user-history-list-response.js";
import {
  beaconUserReviewRequestSchema,
  type BeaconUserReviewRequest,
} from "./models/beacon-user-review-request.js";
import {
  beaconUserUpdateRequestSchema,
  type BeaconUserUpdateRequest,
} from "./models/beacon-user-update-request.js";
import {
  beaconUserUpdateResponseSchema,
  type BeaconUserUpdateResponse,
} from "./models/beacon-user-update-response.js";
import {
  betaEwaReportV1GetRequestSchema,
  type BetaEwaReportV1GetRequest,
} from "./models/beta-ewa-report-v1-get-request.js";
import {
  betaEwaReportV1GetResponseSchema,
  type BetaEwaReportV1GetResponse,
} from "./models/beta-ewa-report-v1-get-response.js";
import {
  betaPartnerCustomerV1CreateRequestSchema,
  type BetaPartnerCustomerV1CreateRequest,
} from "./models/beta-partner-customer-v1-create-request.js";
import {
  betaPartnerCustomerV1CreateResponseSchema,
  type BetaPartnerCustomerV1CreateResponse,
} from "./models/beta-partner-customer-v1-create-response.js";
import {
  betaPartnerCustomerV1EnableRequestSchema,
  type BetaPartnerCustomerV1EnableRequest,
} from "./models/beta-partner-customer-v1-enable-request.js";
import {
  betaPartnerCustomerV1EnableResponseSchema,
  type BetaPartnerCustomerV1EnableResponse,
} from "./models/beta-partner-customer-v1-enable-response.js";
import {
  betaPartnerCustomerV1GetRequestSchema,
  type BetaPartnerCustomerV1GetRequest,
} from "./models/beta-partner-customer-v1-get-request.js";
import {
  betaPartnerCustomerV1GetResponseSchema,
  type BetaPartnerCustomerV1GetResponse,
} from "./models/beta-partner-customer-v1-get-response.js";
import {
  betaPartnerCustomerV1UpdateRequestSchema,
  type BetaPartnerCustomerV1UpdateRequest,
} from "./models/beta-partner-customer-v1-update-request.js";
import {
  betaPartnerCustomerV1UpdateResponseSchema,
  type BetaPartnerCustomerV1UpdateResponse,
} from "./models/beta-partner-customer-v1-update-response.js";
import {
  businessVerificationCreateRequestSchema,
  type BusinessVerificationCreateRequest,
} from "./models/business-verification-create-request.js";
import {
  businessVerificationCreateResponseSchema,
  type BusinessVerificationCreateResponse,
} from "./models/business-verification-create-response.js";
import {
  businessVerificationGetRequestSchema,
  type BusinessVerificationGetRequest,
} from "./models/business-verification-get-request.js";
import {
  businessVerificationGetResponseSchema,
  type BusinessVerificationGetResponse,
} from "./models/business-verification-get-response.js";
import {
  cashflowReportGetRequestSchema,
  type CashflowReportGetRequest,
} from "./models/cashflow-report-get-request.js";
import {
  cashflowReportGetResponseSchema,
  type CashflowReportGetResponse,
} from "./models/cashflow-report-get-response.js";
import {
  cashflowReportInsightsGetRequestSchema,
  type CashflowReportInsightsGetRequest,
} from "./models/cashflow-report-insights-get-request.js";
import {
  cashflowReportInsightsGetResponseSchema,
  type CashflowReportInsightsGetResponse,
} from "./models/cashflow-report-insights-get-response.js";
import {
  cashflowReportRefreshRequestSchema,
  type CashflowReportRefreshRequest,
} from "./models/cashflow-report-refresh-request.js";
import {
  cashflowReportRefreshResponseSchema,
  type CashflowReportRefreshResponse,
} from "./models/cashflow-report-refresh-response.js";
import {
  cashflowReportTransactionsGetRequestSchema,
  type CashflowReportTransactionsGetRequest,
} from "./models/cashflow-report-transactions-get-request.js";
import {
  cashflowReportTransactionsGetResponseSchema,
  type CashflowReportTransactionsGetResponse,
} from "./models/cashflow-report-transactions-get-response.js";
import { categoriesGetResponseSchema, type CategoriesGetResponse } from "./models/categories-get-response.js";
import {
  consentEventsGetRequestSchema,
  type ConsentEventsGetRequest,
} from "./models/consent-events-get-request.js";
import {
  consentEventsGetResponseSchema,
  type ConsentEventsGetResponse,
} from "./models/consent-events-get-response.js";
import {
  consumerReportPdfGetRequestSchema,
  type ConsumerReportPdfGetRequest,
} from "./models/consumer-report-pdf-get-request.js";
import {
  craCheckReportBaseReportGetRequestSchema,
  type CraCheckReportBaseReportGetRequest,
} from "./models/cra-check-report-base-report-get-request.js";
import {
  craCheckReportBaseReportGetResponseSchema,
  type CraCheckReportBaseReportGetResponse,
} from "./models/cra-check-report-base-report-get-response.js";
import {
  craCheckReportCashflowInsightsGetRequestSchema,
  type CraCheckReportCashflowInsightsGetRequest,
} from "./models/cra-check-report-cashflow-insights-get-request.js";
import {
  craCheckReportCashflowInsightsGetResponseSchema,
  type CraCheckReportCashflowInsightsGetResponse,
} from "./models/cra-check-report-cashflow-insights-get-response.js";
import {
  craCheckReportCreateRequestSchema,
  type CraCheckReportCreateRequest,
} from "./models/cra-check-report-create-request.js";
import {
  craCheckReportCreateResponseSchema,
  type CraCheckReportCreateResponse,
} from "./models/cra-check-report-create-response.js";
import {
  craCheckReportIncomeInsightsGetRequestSchema,
  type CraCheckReportIncomeInsightsGetRequest,
} from "./models/cra-check-report-income-insights-get-request.js";
import {
  craCheckReportIncomeInsightsGetResponseSchema,
  type CraCheckReportIncomeInsightsGetResponse,
} from "./models/cra-check-report-income-insights-get-response.js";
import {
  craCheckReportLendScoreGetRequestSchema,
  type CraCheckReportLendScoreGetRequest,
} from "./models/cra-check-report-lend-score-get-request.js";
import {
  craCheckReportLendScoreGetResponseSchema,
  type CraCheckReportLendScoreGetResponse,
} from "./models/cra-check-report-lend-score-get-response.js";
import {
  craCheckReportNetworkInsightsGetRequestSchema,
  type CraCheckReportNetworkInsightsGetRequest,
} from "./models/cra-check-report-network-insights-get-request.js";
import {
  craCheckReportNetworkInsightsGetResponseSchema,
  type CraCheckReportNetworkInsightsGetResponse,
} from "./models/cra-check-report-network-insights-get-response.js";
import {
  craCheckReportPartnerInsightsGetRequestSchema,
  type CraCheckReportPartnerInsightsGetRequest,
} from "./models/cra-check-report-partner-insights-get-request.js";
import {
  craCheckReportPartnerInsightsGetResponseSchema,
  type CraCheckReportPartnerInsightsGetResponse,
} from "./models/cra-check-report-partner-insights-get-response.js";
import {
  craCheckReportPdfGetRequestSchema,
  type CraCheckReportPdfGetRequest,
} from "./models/cra-check-report-pdf-get-request.js";
import {
  craCheckReportVerificationGetRequestSchema,
  type CraCheckReportVerificationGetRequest,
} from "./models/cra-check-report-verification-get-request.js";
import {
  craCheckReportVerificationGetResponseSchema,
  type CraCheckReportVerificationGetResponse,
} from "./models/cra-check-report-verification-get-response.js";
import {
  craCheckReportVerificationPdfGetRequestSchema,
  type CraCheckReportVerificationPdfGetRequest,
} from "./models/cra-check-report-verification-pdf-get-request.js";
import {
  craCreditProfileReportGetRequestSchema,
  type CraCreditProfileReportGetRequest,
} from "./models/cra-credit-profile-report-get-request.js";
import {
  craCreditProfileReportGetResponseSchema,
  type CraCreditProfileReportGetResponse,
} from "./models/cra-credit-profile-report-get-response.js";
import {
  craLoanUnregisterResponseSchema,
  type CraLoanUnregisterResponse,
} from "./models/cra-loan-unregister-response.js";
import {
  craLoansApplicationsRegisterRequestSchema,
  type CraLoansApplicationsRegisterRequest,
} from "./models/cra-loans-applications-register-request.js";
import {
  craLoansApplicationsRegisterResponseSchema,
  type CraLoansApplicationsRegisterResponse,
} from "./models/cra-loans-applications-register-response.js";
import {
  craLoansRegisterRequestSchema,
  type CraLoansRegisterRequest,
} from "./models/cra-loans-register-request.js";
import {
  craLoansRegisterResponseSchema,
  type CraLoansRegisterResponse,
} from "./models/cra-loans-register-response.js";
import {
  craLoansUnregisterRequestSchema,
  type CraLoansUnregisterRequest,
} from "./models/cra-loans-unregister-request.js";
import {
  craLoansUpdateRequestSchema,
  type CraLoansUpdateRequest,
} from "./models/cra-loans-update-request.js";
import {
  craLoansUpdateResponseSchema,
  type CraLoansUpdateResponse,
} from "./models/cra-loans-update-response.js";
import {
  craMonitoringInsightsGetRequestSchema,
  type CraMonitoringInsightsGetRequest,
} from "./models/cra-monitoring-insights-get-request.js";
import {
  craMonitoringInsightsGetResponseSchema,
  type CraMonitoringInsightsGetResponse,
} from "./models/cra-monitoring-insights-get-response.js";
import {
  craMonitoringInsightsSubscribeRequestSchema,
  type CraMonitoringInsightsSubscribeRequest,
} from "./models/cra-monitoring-insights-subscribe-request.js";
import {
  craMonitoringInsightsSubscribeResponseSchema,
  type CraMonitoringInsightsSubscribeResponse,
} from "./models/cra-monitoring-insights-subscribe-response.js";
import {
  craMonitoringInsightsUnsubscribeRequestSchema,
  type CraMonitoringInsightsUnsubscribeRequest,
} from "./models/cra-monitoring-insights-unsubscribe-request.js";
import {
  craMonitoringInsightsUnsubscribeResponseSchema,
  type CraMonitoringInsightsUnsubscribeResponse,
} from "./models/cra-monitoring-insights-unsubscribe-response.js";
import {
  craPartnerInsightsGetRequestSchema,
  type CraPartnerInsightsGetRequest,
} from "./models/cra-partner-insights-get-request.js";
import {
  craPartnerInsightsGetResponseSchema,
  type CraPartnerInsightsGetResponse,
} from "./models/cra-partner-insights-get-response.js";
import { craReportGetRequestSchema, type CraReportGetRequest } from "./models/cra-report-get-request.js";
import { craReportGetResponseSchema, type CraReportGetResponse } from "./models/cra-report-get-response.js";
import {
  creditAuditCopyTokenCreateRequestSchema,
  type CreditAuditCopyTokenCreateRequest,
} from "./models/credit-audit-copy-token-create-request.js";
import {
  creditAuditCopyTokenCreateResponseSchema,
  type CreditAuditCopyTokenCreateResponse,
} from "./models/credit-audit-copy-token-create-response.js";
import {
  creditAuditCopyTokenRemoveRequestSchema,
  type CreditAuditCopyTokenRemoveRequest,
} from "./models/credit-audit-copy-token-remove-request.js";
import {
  creditAuditCopyTokenRemoveResponseSchema,
  type CreditAuditCopyTokenRemoveResponse,
} from "./models/credit-audit-copy-token-remove-response.js";
import {
  creditAuditCopyTokenUpdateRequestSchema,
  type CreditAuditCopyTokenUpdateRequest,
} from "./models/credit-audit-copy-token-update-request.js";
import {
  creditAuditCopyTokenUpdateResponseSchema,
  type CreditAuditCopyTokenUpdateResponse,
} from "./models/credit-audit-copy-token-update-response.js";
import {
  creditBankEmploymentGetRequestSchema,
  type CreditBankEmploymentGetRequest,
} from "./models/credit-bank-employment-get-request.js";
import {
  creditBankEmploymentGetResponseSchema,
  type CreditBankEmploymentGetResponse,
} from "./models/credit-bank-employment-get-response.js";
import {
  creditBankIncomeGetRequestSchema,
  type CreditBankIncomeGetRequest,
} from "./models/credit-bank-income-get-request.js";
import {
  creditBankIncomeGetResponseSchema,
  type CreditBankIncomeGetResponse,
} from "./models/credit-bank-income-get-response.js";
import {
  creditBankIncomePdfGetRequestSchema,
  type CreditBankIncomePdfGetRequest,
} from "./models/credit-bank-income-pdf-get-request.js";
import {
  creditBankIncomeRefreshRequestSchema,
  type CreditBankIncomeRefreshRequest,
} from "./models/credit-bank-income-refresh-request.js";
import {
  creditBankIncomeRefreshResponseSchema,
  type CreditBankIncomeRefreshResponse,
} from "./models/credit-bank-income-refresh-response.js";
import {
  creditBankIncomeWebhookUpdateRequestSchema,
  type CreditBankIncomeWebhookUpdateRequest,
} from "./models/credit-bank-income-webhook-update-request.js";
import {
  creditBankIncomeWebhookUpdateResponseSchema,
  type CreditBankIncomeWebhookUpdateResponse,
} from "./models/credit-bank-income-webhook-update-response.js";
import {
  creditBankStatementsUploadsGetRequestSchema,
  type CreditBankStatementsUploadsGetRequest,
} from "./models/credit-bank-statements-uploads-get-request.js";
import {
  creditBankStatementsUploadsGetResponseSchema,
  type CreditBankStatementsUploadsGetResponse,
} from "./models/credit-bank-statements-uploads-get-response.js";
import {
  creditEmploymentGetRequestSchema,
  type CreditEmploymentGetRequest,
} from "./models/credit-employment-get-request.js";
import {
  creditEmploymentGetResponseSchema,
  type CreditEmploymentGetResponse,
} from "./models/credit-employment-get-response.js";
import {
  creditFreddieMacReportsGetRequestSchema,
  type CreditFreddieMacReportsGetRequest,
} from "./models/credit-freddie-mac-reports-get-request.js";
import {
  creditFreddieMacReportsGetResponseSchema,
  type CreditFreddieMacReportsGetResponse,
} from "./models/credit-freddie-mac-reports-get-response.js";
import {
  creditPayrollIncomeGetRequestSchema,
  type CreditPayrollIncomeGetRequest,
} from "./models/credit-payroll-income-get-request.js";
import {
  creditPayrollIncomeGetResponseSchema,
  type CreditPayrollIncomeGetResponse,
} from "./models/credit-payroll-income-get-response.js";
import {
  creditPayrollIncomeParsingConfigUpdateRequestSchema,
  type CreditPayrollIncomeParsingConfigUpdateRequest,
} from "./models/credit-payroll-income-parsing-config-update-request.js";
import {
  creditPayrollIncomeParsingConfigUpdateResponseSchema,
  type CreditPayrollIncomeParsingConfigUpdateResponse,
} from "./models/credit-payroll-income-parsing-config-update-response.js";
import {
  creditPayrollIncomePrecheckRequestSchema,
  type CreditPayrollIncomePrecheckRequest,
} from "./models/credit-payroll-income-precheck-request.js";
import {
  creditPayrollIncomePrecheckResponseSchema,
  type CreditPayrollIncomePrecheckResponse,
} from "./models/credit-payroll-income-precheck-response.js";
import {
  creditPayrollIncomeRefreshRequestSchema,
  type CreditPayrollIncomeRefreshRequest,
} from "./models/credit-payroll-income-refresh-request.js";
import {
  creditPayrollIncomeRefreshResponseSchema,
  type CreditPayrollIncomeRefreshResponse,
} from "./models/credit-payroll-income-refresh-response.js";
import {
  creditPayrollIncomeRiskSignalsGetRequestSchema,
  type CreditPayrollIncomeRiskSignalsGetRequest,
} from "./models/credit-payroll-income-risk-signals-get-request.js";
import {
  creditPayrollIncomeRiskSignalsGetResponseSchema,
  type CreditPayrollIncomeRiskSignalsGetResponse,
} from "./models/credit-payroll-income-risk-signals-get-response.js";
import {
  creditRelayCreateRequestSchema,
  type CreditRelayCreateRequest,
} from "./models/credit-relay-create-request.js";
import {
  creditRelayCreateResponseSchema,
  type CreditRelayCreateResponse,
} from "./models/credit-relay-create-response.js";
import {
  creditRelayGetRequestSchema,
  type CreditRelayGetRequest,
} from "./models/credit-relay-get-request.js";
import {
  creditRelayPdfGetRequestSchema,
  type CreditRelayPdfGetRequest,
} from "./models/credit-relay-pdf-get-request.js";
import {
  creditRelayRefreshRequestSchema,
  type CreditRelayRefreshRequest,
} from "./models/credit-relay-refresh-request.js";
import {
  creditRelayRefreshResponseSchema,
  type CreditRelayRefreshResponse,
} from "./models/credit-relay-refresh-response.js";
import {
  creditRelayRemoveRequestSchema,
  type CreditRelayRemoveRequest,
} from "./models/credit-relay-remove-request.js";
import {
  creditRelayRemoveResponseSchema,
  type CreditRelayRemoveResponse,
} from "./models/credit-relay-remove-response.js";
import {
  creditSessionsGetRequestSchema,
  type CreditSessionsGetRequest,
} from "./models/credit-sessions-get-request.js";
import {
  creditSessionsGetResponseSchema,
  type CreditSessionsGetResponse,
} from "./models/credit-sessions-get-response.js";
import {
  dashboardUserGetRequestSchema,
  type DashboardUserGetRequest,
} from "./models/dashboard-user-get-request.js";
import {
  dashboardUserGetResponseSchema,
  type DashboardUserGetResponse,
} from "./models/dashboard-user-get-response.js";
import {
  dashboardUserListRequestSchema,
  type DashboardUserListRequest,
} from "./models/dashboard-user-list-request.js";
import {
  dashboardUserListResponseSchema,
  type DashboardUserListResponse,
} from "./models/dashboard-user-list-response.js";
import {
  employersSearchRequestSchema,
  type EmployersSearchRequest,
} from "./models/employers-search-request.js";
import {
  employersSearchResponseSchema,
  type EmployersSearchResponse,
} from "./models/employers-search-response.js";
import {
  employmentVerificationGetRequestSchema,
  type EmploymentVerificationGetRequest,
} from "./models/employment-verification-get-request.js";
import {
  employmentVerificationGetResponseSchema,
  type EmploymentVerificationGetResponse,
} from "./models/employment-verification-get-response.js";
import { errorSchema, type Error } from "./models/error.js";
import {
  fdxConsentGrantStatusSchema,
  type FdxConsentGrantStatus,
} from "./models/fdx-consent-grant-status.js";
import { fdxConsentGrantSchema, type FdxConsentGrant } from "./models/fdx-consent-grant.js";
import { fdxConsentRevocationSchema, type FdxConsentRevocation } from "./models/fdx-consent-revocation.js";
import { fdxConsentRevocationsSchema, type FdxConsentRevocations } from "./models/fdx-consent-revocations.js";
import { fdxNotificationEntitySchema, type FdxNotificationEntity } from "./models/fdx-notification-entity.js";
import { fdxRecipientMetadataSchema, type FdxRecipientMetadata } from "./models/fdx-recipient-metadata.js";
import { getConsentsResponseSchema, type GetConsentsResponse } from "./models/get-consents-response.js";
import { getRecipientsResponseSchema, type GetRecipientsResponse } from "./models/get-recipients-response.js";
import {
  identityDocumentsUploadsGetRequestSchema,
  type IdentityDocumentsUploadsGetRequest,
} from "./models/identity-documents-uploads-get-request.js";
import {
  identityDocumentsUploadsGetResponseSchema,
  type IdentityDocumentsUploadsGetResponse,
} from "./models/identity-documents-uploads-get-response.js";
import { identityGetRequestSchema, type IdentityGetRequest } from "./models/identity-get-request.js";
import { identityGetResponseSchema, type IdentityGetResponse } from "./models/identity-get-response.js";
import { identityMatchRequestSchema, type IdentityMatchRequest } from "./models/identity-match-request.js";
import { identityMatchResponseSchema, type IdentityMatchResponse } from "./models/identity-match-response.js";
import {
  identityRefreshRequestSchema,
  type IdentityRefreshRequest,
} from "./models/identity-refresh-request.js";
import {
  identityRefreshResponseSchema,
  type IdentityRefreshResponse,
} from "./models/identity-refresh-response.js";
import {
  identityVerificationAutofillCreateRequestSchema,
  type IdentityVerificationAutofillCreateRequest,
} from "./models/identity-verification-autofill-create-request.js";
import {
  identityVerificationAutofillCreateResponseSchema,
  type IdentityVerificationAutofillCreateResponse,
} from "./models/identity-verification-autofill-create-response.js";
import {
  identityVerificationCreateRequestSchema,
  type IdentityVerificationCreateRequest,
} from "./models/identity-verification-create-request.js";
import {
  identityVerificationCreateResponseSchema,
  type IdentityVerificationCreateResponse,
} from "./models/identity-verification-create-response.js";
import {
  identityVerificationGetRequestSchema,
  type IdentityVerificationGetRequest,
} from "./models/identity-verification-get-request.js";
import {
  identityVerificationGetResponseSchema,
  type IdentityVerificationGetResponse,
} from "./models/identity-verification-get-response.js";
import {
  identityVerificationListRequestSchema,
  type IdentityVerificationListRequest,
} from "./models/identity-verification-list-request.js";
import {
  identityVerificationListResponseSchema,
  type IdentityVerificationListResponse,
} from "./models/identity-verification-list-response.js";
import {
  identityVerificationRetryRequestSchema,
  type IdentityVerificationRetryRequest,
} from "./models/identity-verification-retry-request.js";
import {
  identityVerificationRetryResponseSchema,
  type IdentityVerificationRetryResponse,
} from "./models/identity-verification-retry-response.js";
import {
  incomeVerificationCreateRequestSchema,
  type IncomeVerificationCreateRequest,
} from "./models/income-verification-create-request.js";
import {
  incomeVerificationCreateResponseSchema,
  type IncomeVerificationCreateResponse,
} from "./models/income-verification-create-response.js";
import {
  incomeVerificationDocumentsDownloadRequestSchema,
  type IncomeVerificationDocumentsDownloadRequest,
} from "./models/income-verification-documents-download-request.js";
import {
  incomeVerificationPaystubsGetRequestSchema,
  type IncomeVerificationPaystubsGetRequest,
} from "./models/income-verification-paystubs-get-request.js";
import {
  incomeVerificationPaystubsGetResponseSchema,
  type IncomeVerificationPaystubsGetResponse,
} from "./models/income-verification-paystubs-get-response.js";
import {
  incomeVerificationPrecheckRequestSchema,
  type IncomeVerificationPrecheckRequest,
} from "./models/income-verification-precheck-request.js";
import {
  incomeVerificationPrecheckResponseSchema,
  type IncomeVerificationPrecheckResponse,
} from "./models/income-verification-precheck-response.js";
import {
  incomeVerificationTaxformsGetRequestSchema,
  type IncomeVerificationTaxformsGetRequest,
} from "./models/income-verification-taxforms-get-request.js";
import {
  incomeVerificationTaxformsGetResponseSchema,
  type IncomeVerificationTaxformsGetResponse,
} from "./models/income-verification-taxforms-get-response.js";
import {
  institutionsGetByIdRequestSchema,
  type InstitutionsGetByIdRequest,
} from "./models/institutions-get-by-id-request.js";
import {
  institutionsGetByIdResponseSchema,
  type InstitutionsGetByIdResponse,
} from "./models/institutions-get-by-id-response.js";
import {
  institutionsGetRequestSchema,
  type InstitutionsGetRequest,
} from "./models/institutions-get-request.js";
import {
  institutionsGetResponseSchema,
  type InstitutionsGetResponse,
} from "./models/institutions-get-response.js";
import {
  institutionsSearchRequestSchema,
  type InstitutionsSearchRequest,
} from "./models/institutions-search-request.js";
import {
  institutionsSearchResponseSchema,
  type InstitutionsSearchResponse,
} from "./models/institutions-search-response.js";
import {
  investmentsAuthGetRequestSchema,
  type InvestmentsAuthGetRequest,
} from "./models/investments-auth-get-request.js";
import {
  investmentsAuthGetResponseSchema,
  type InvestmentsAuthGetResponse,
} from "./models/investments-auth-get-response.js";
import {
  investmentsHoldingsGetRequestSchema,
  type InvestmentsHoldingsGetRequest,
} from "./models/investments-holdings-get-request.js";
import {
  investmentsHoldingsGetResponseSchema,
  type InvestmentsHoldingsGetResponse,
} from "./models/investments-holdings-get-response.js";
import {
  investmentsRefreshRequestSchema,
  type InvestmentsRefreshRequest,
} from "./models/investments-refresh-request.js";
import {
  investmentsRefreshResponseSchema,
  type InvestmentsRefreshResponse,
} from "./models/investments-refresh-response.js";
import {
  investmentsTransactionsGetRequestSchema,
  type InvestmentsTransactionsGetRequest,
} from "./models/investments-transactions-get-request.js";
import {
  investmentsTransactionsGetResponseSchema,
  type InvestmentsTransactionsGetResponse,
} from "./models/investments-transactions-get-response.js";
import { issuesGetRequestSchema, type IssuesGetRequest } from "./models/issues-get-request.js";
import { issuesGetResponseSchema, type IssuesGetResponse } from "./models/issues-get-response.js";
import { issuesSearchRequestSchema, type IssuesSearchRequest } from "./models/issues-search-request.js";
import { issuesSearchResponseSchema, type IssuesSearchResponse } from "./models/issues-search-response.js";
import {
  issuesSubscribeRequestSchema,
  type IssuesSubscribeRequest,
} from "./models/issues-subscribe-request.js";
import {
  issuesSubscribeResponseSchema,
  type IssuesSubscribeResponse,
} from "./models/issues-subscribe-response.js";
import {
  itemAccessTokenInvalidateRequestSchema,
  type ItemAccessTokenInvalidateRequest,
} from "./models/item-access-token-invalidate-request.js";
import {
  itemAccessTokenInvalidateResponseSchema,
  type ItemAccessTokenInvalidateResponse,
} from "./models/item-access-token-invalidate-response.js";
import {
  itemActivityListRequestSchema,
  type ItemActivityListRequest,
} from "./models/item-activity-list-request.js";
import {
  itemActivityListResponseSchema,
  type ItemActivityListResponse,
} from "./models/item-activity-list-response.js";
import {
  itemApplicationListRequestSchema,
  type ItemApplicationListRequest,
} from "./models/item-application-list-request.js";
import {
  itemApplicationListResponseSchema,
  type ItemApplicationListResponse,
} from "./models/item-application-list-response.js";
import {
  itemApplicationScopesUpdateRequestSchema,
  type ItemApplicationScopesUpdateRequest,
} from "./models/item-application-scopes-update-request.js";
import {
  itemApplicationScopesUpdateResponseSchema,
  type ItemApplicationScopesUpdateResponse,
} from "./models/item-application-scopes-update-response.js";
import {
  itemApplicationUnlinkRequestSchema,
  type ItemApplicationUnlinkRequest,
} from "./models/item-application-unlink-request.js";
import {
  itemApplicationUnlinkResponseSchema,
  type ItemApplicationUnlinkResponse,
} from "./models/item-application-unlink-response.js";
import { itemGetRequestSchema, type ItemGetRequest } from "./models/item-get-request.js";
import { itemGetResponseSchema, type ItemGetResponse } from "./models/item-get-response.js";
import { itemImportRequestSchema, type ItemImportRequest } from "./models/item-import-request.js";
import { itemImportResponseSchema, type ItemImportResponse } from "./models/item-import-response.js";
import {
  itemProductsTerminateRequestSchema,
  type ItemProductsTerminateRequest,
} from "./models/item-products-terminate-request.js";
import {
  itemProductsTerminateResponseSchema,
  type ItemProductsTerminateResponse,
} from "./models/item-products-terminate-response.js";
import {
  itemPublicTokenCreateRequestSchema,
  type ItemPublicTokenCreateRequest,
} from "./models/item-public-token-create-request.js";
import {
  itemPublicTokenCreateResponseSchema,
  type ItemPublicTokenCreateResponse,
} from "./models/item-public-token-create-response.js";
import {
  itemPublicTokenExchangeRequestSchema,
  type ItemPublicTokenExchangeRequest,
} from "./models/item-public-token-exchange-request.js";
import {
  itemPublicTokenExchangeResponseSchema,
  type ItemPublicTokenExchangeResponse,
} from "./models/item-public-token-exchange-response.js";
import { itemRemoveRequestSchema, type ItemRemoveRequest } from "./models/item-remove-request.js";
import { itemRemoveResponseSchema, type ItemRemoveResponse } from "./models/item-remove-response.js";
import {
  itemWebhookUpdateRequestSchema,
  type ItemWebhookUpdateRequest,
} from "./models/item-webhook-update-request.js";
import {
  itemWebhookUpdateResponseSchema,
  type ItemWebhookUpdateResponse,
} from "./models/item-webhook-update-response.js";
import { liabilitiesGetRequestSchema, type LiabilitiesGetRequest } from "./models/liabilities-get-request.js";
import {
  liabilitiesGetResponseSchema,
  type LiabilitiesGetResponse,
} from "./models/liabilities-get-response.js";
import {
  linkDeliveryCreateRequestSchema,
  type LinkDeliveryCreateRequest,
} from "./models/link-delivery-create-request.js";
import {
  linkDeliveryCreateResponseSchema,
  type LinkDeliveryCreateResponse,
} from "./models/link-delivery-create-response.js";
import {
  linkDeliveryGetRequestSchema,
  type LinkDeliveryGetRequest,
} from "./models/link-delivery-get-request.js";
import {
  linkDeliveryGetResponseSchema,
  type LinkDeliveryGetResponse,
} from "./models/link-delivery-get-response.js";
import {
  linkOAuthCorrelationIdExchangeRequestSchema,
  type LinkOAuthCorrelationIdExchangeRequest,
} from "./models/link-oauth-correlation-id-exchange-request.js";
import {
  linkOAuthCorrelationIdExchangeResponseSchema,
  type LinkOAuthCorrelationIdExchangeResponse,
} from "./models/link-oauth-correlation-id-exchange-response.js";
import {
  linkTokenCreateRequestSchema,
  type LinkTokenCreateRequest,
} from "./models/link-token-create-request.js";
import {
  linkTokenCreateResponseSchema,
  type LinkTokenCreateResponse,
} from "./models/link-token-create-response.js";
import { linkTokenGetRequestSchema, type LinkTokenGetRequest } from "./models/link-token-get-request.js";
import { linkTokenGetResponseSchema, type LinkTokenGetResponse } from "./models/link-token-get-response.js";
import {
  networkStatusGetRequestSchema,
  type NetworkStatusGetRequest,
} from "./models/network-status-get-request.js";
import {
  networkStatusGetResponseSchema,
  type NetworkStatusGetResponse,
} from "./models/network-status-get-response.js";
import { oAuthErrorResponseSchema, type OAuthErrorResponse } from "./models/oauth-error-response.js";
import {
  oAuthIntrospectRequestSchema,
  type OAuthIntrospectRequest,
} from "./models/oauth-introspect-request.js";
import {
  oAuthIntrospectResponseSchema,
  type OAuthIntrospectResponse,
} from "./models/oauth-introspect-response.js";
import { oAuthRevokeRequestSchema, type OAuthRevokeRequest } from "./models/oauth-revoke-request.js";
import { oAuthRevokeResponseSchema, type OAuthRevokeResponse } from "./models/oauth-revoke-response.js";
import { oAuthTokenRequestSchema, type OAuthTokenRequest } from "./models/oauth-token-request.js";
import { oAuthTokenResponseSchema, type OAuthTokenResponse } from "./models/oauth-token-response.js";
import {
  partnerCustomerCreateRequestSchema,
  type PartnerCustomerCreateRequest,
} from "./models/partner-customer-create-request.js";
import {
  partnerCustomerCreateResponseSchema,
  type PartnerCustomerCreateResponse,
} from "./models/partner-customer-create-response.js";
import {
  partnerCustomerEnableRequestSchema,
  type PartnerCustomerEnableRequest,
} from "./models/partner-customer-enable-request.js";
import {
  partnerCustomerEnableResponseSchema,
  type PartnerCustomerEnableResponse,
} from "./models/partner-customer-enable-response.js";
import {
  partnerCustomerGetRequestSchema,
  type PartnerCustomerGetRequest,
} from "./models/partner-customer-get-request.js";
import {
  partnerCustomerGetResponseSchema,
  type PartnerCustomerGetResponse,
} from "./models/partner-customer-get-response.js";
import {
  partnerCustomerOAuthInstitutionsGetRequestSchema,
  type PartnerCustomerOAuthInstitutionsGetRequest,
} from "./models/partner-customer-oauth-institutions-get-request.js";
import {
  partnerCustomerOAuthInstitutionsGetResponseSchema,
  type PartnerCustomerOAuthInstitutionsGetResponse,
} from "./models/partner-customer-oauth-institutions-get-response.js";
import {
  partnerCustomerRemoveRequestSchema,
  type PartnerCustomerRemoveRequest,
} from "./models/partner-customer-remove-request.js";
import {
  partnerCustomerRemoveResponseSchema,
  type PartnerCustomerRemoveResponse,
} from "./models/partner-customer-remove-response.js";
import {
  paymentInitiationConsentCreateRequestSchema,
  type PaymentInitiationConsentCreateRequest,
} from "./models/payment-initiation-consent-create-request.js";
import {
  paymentInitiationConsentCreateResponseSchema,
  type PaymentInitiationConsentCreateResponse,
} from "./models/payment-initiation-consent-create-response.js";
import {
  paymentInitiationConsentGetRequestSchema,
  type PaymentInitiationConsentGetRequest,
} from "./models/payment-initiation-consent-get-request.js";
import {
  paymentInitiationConsentGetResponseSchema,
  type PaymentInitiationConsentGetResponse,
} from "./models/payment-initiation-consent-get-response.js";
import {
  paymentInitiationConsentPaymentExecuteRequestSchema,
  type PaymentInitiationConsentPaymentExecuteRequest,
} from "./models/payment-initiation-consent-payment-execute-request.js";
import {
  paymentInitiationConsentPaymentExecuteResponseSchema,
  type PaymentInitiationConsentPaymentExecuteResponse,
} from "./models/payment-initiation-consent-payment-execute-response.js";
import {
  paymentInitiationConsentRevokeRequestSchema,
  type PaymentInitiationConsentRevokeRequest,
} from "./models/payment-initiation-consent-revoke-request.js";
import {
  paymentInitiationConsentRevokeResponseSchema,
  type PaymentInitiationConsentRevokeResponse,
} from "./models/payment-initiation-consent-revoke-response.js";
import {
  paymentInitiationPaymentCreateRequestSchema,
  type PaymentInitiationPaymentCreateRequest,
} from "./models/payment-initiation-payment-create-request.js";
import {
  paymentInitiationPaymentCreateResponseSchema,
  type PaymentInitiationPaymentCreateResponse,
} from "./models/payment-initiation-payment-create-response.js";
import {
  paymentInitiationPaymentGetRequestSchema,
  type PaymentInitiationPaymentGetRequest,
} from "./models/payment-initiation-payment-get-request.js";
import {
  paymentInitiationPaymentGetResponseSchema,
  type PaymentInitiationPaymentGetResponse,
} from "./models/payment-initiation-payment-get-response.js";
import {
  paymentInitiationPaymentListRequestSchema,
  type PaymentInitiationPaymentListRequest,
} from "./models/payment-initiation-payment-list-request.js";
import {
  paymentInitiationPaymentListResponseSchema,
  type PaymentInitiationPaymentListResponse,
} from "./models/payment-initiation-payment-list-response.js";
import {
  paymentInitiationPaymentReverseRequestSchema,
  type PaymentInitiationPaymentReverseRequest,
} from "./models/payment-initiation-payment-reverse-request.js";
import {
  paymentInitiationPaymentReverseResponseSchema,
  type PaymentInitiationPaymentReverseResponse,
} from "./models/payment-initiation-payment-reverse-response.js";
import {
  paymentInitiationPaymentTokenCreateRequestSchema,
  type PaymentInitiationPaymentTokenCreateRequest,
} from "./models/payment-initiation-payment-token-create-request.js";
import {
  paymentInitiationPaymentTokenCreateResponseSchema,
  type PaymentInitiationPaymentTokenCreateResponse,
} from "./models/payment-initiation-payment-token-create-response.js";
import {
  paymentInitiationRecipientCreateRequestSchema,
  type PaymentInitiationRecipientCreateRequest,
} from "./models/payment-initiation-recipient-create-request.js";
import {
  paymentInitiationRecipientCreateResponseSchema,
  type PaymentInitiationRecipientCreateResponse,
} from "./models/payment-initiation-recipient-create-response.js";
import {
  paymentInitiationRecipientGetRequestSchema,
  type PaymentInitiationRecipientGetRequest,
} from "./models/payment-initiation-recipient-get-request.js";
import {
  paymentInitiationRecipientGetResponseSchema,
  type PaymentInitiationRecipientGetResponse,
} from "./models/payment-initiation-recipient-get-response.js";
import {
  paymentInitiationRecipientListRequestSchema,
  type PaymentInitiationRecipientListRequest,
} from "./models/payment-initiation-recipient-list-request.js";
import {
  paymentInitiationRecipientListResponseSchema,
  type PaymentInitiationRecipientListResponse,
} from "./models/payment-initiation-recipient-list-response.js";
import {
  paymentProfileCreateRequestSchema,
  type PaymentProfileCreateRequest,
} from "./models/payment-profile-create-request.js";
import {
  paymentProfileCreateResponseSchema,
  type PaymentProfileCreateResponse,
} from "./models/payment-profile-create-response.js";
import {
  paymentProfileGetRequestSchema,
  type PaymentProfileGetRequest,
} from "./models/payment-profile-get-request.js";
import {
  paymentProfileGetResponseSchema,
  type PaymentProfileGetResponse,
} from "./models/payment-profile-get-response.js";
import {
  paymentProfileRemoveRequestSchema,
  type PaymentProfileRemoveRequest,
} from "./models/payment-profile-remove-request.js";
import {
  paymentProfileRemoveResponseSchema,
  type PaymentProfileRemoveResponse,
} from "./models/payment-profile-remove-response.js";
import {
  processorAccountGetRequestSchema,
  type ProcessorAccountGetRequest,
} from "./models/processor-account-get-request.js";
import {
  processorAccountGetResponseSchema,
  type ProcessorAccountGetResponse,
} from "./models/processor-account-get-response.js";
import {
  processorApexProcessorTokenCreateRequestSchema,
  type ProcessorApexProcessorTokenCreateRequest,
} from "./models/processor-apex-processor-token-create-request.js";
import {
  processorAuthGetRequestSchema,
  type ProcessorAuthGetRequest,
} from "./models/processor-auth-get-request.js";
import {
  processorAuthGetResponseSchema,
  type ProcessorAuthGetResponse,
} from "./models/processor-auth-get-response.js";
import {
  processorBalanceGetRequestSchema,
  type ProcessorBalanceGetRequest,
} from "./models/processor-balance-get-request.js";
import {
  processorBalanceGetResponseSchema,
  type ProcessorBalanceGetResponse,
} from "./models/processor-balance-get-response.js";
import {
  processorBankTransferCreateRequestSchema,
  type ProcessorBankTransferCreateRequest,
} from "./models/processor-bank-transfer-create-request.js";
import {
  processorBankTransferCreateResponseSchema,
  type ProcessorBankTransferCreateResponse,
} from "./models/processor-bank-transfer-create-response.js";
import {
  processorIdentityGetRequestSchema,
  type ProcessorIdentityGetRequest,
} from "./models/processor-identity-get-request.js";
import {
  processorIdentityGetResponseSchema,
  type ProcessorIdentityGetResponse,
} from "./models/processor-identity-get-response.js";
import {
  processorIdentityMatchRequestSchema,
  type ProcessorIdentityMatchRequest,
} from "./models/processor-identity-match-request.js";
import {
  processorIdentityMatchResponseSchema,
  type ProcessorIdentityMatchResponse,
} from "./models/processor-identity-match-response.js";
import {
  processorInvestmentsAuthGetRequestSchema,
  type ProcessorInvestmentsAuthGetRequest,
} from "./models/processor-investments-auth-get-request.js";
import {
  processorInvestmentsAuthGetResponseSchema,
  type ProcessorInvestmentsAuthGetResponse,
} from "./models/processor-investments-auth-get-response.js";
import {
  processorInvestmentsHoldingsGetRequestSchema,
  type ProcessorInvestmentsHoldingsGetRequest,
} from "./models/processor-investments-holdings-get-request.js";
import {
  processorInvestmentsHoldingsGetResponseSchema,
  type ProcessorInvestmentsHoldingsGetResponse,
} from "./models/processor-investments-holdings-get-response.js";
import {
  processorInvestmentsTransactionsGetRequestSchema,
  type ProcessorInvestmentsTransactionsGetRequest,
} from "./models/processor-investments-transactions-get-request.js";
import {
  processorInvestmentsTransactionsGetResponseSchema,
  type ProcessorInvestmentsTransactionsGetResponse,
} from "./models/processor-investments-transactions-get-response.js";
import {
  processorLiabilitiesGetRequestSchema,
  type ProcessorLiabilitiesGetRequest,
} from "./models/processor-liabilities-get-request.js";
import {
  processorLiabilitiesGetResponseSchema,
  type ProcessorLiabilitiesGetResponse,
} from "./models/processor-liabilities-get-response.js";
import {
  processorSignalDecisionReportRequestSchema,
  type ProcessorSignalDecisionReportRequest,
} from "./models/processor-signal-decision-report-request.js";
import {
  processorSignalDecisionReportResponseSchema,
  type ProcessorSignalDecisionReportResponse,
} from "./models/processor-signal-decision-report-response.js";
import {
  processorSignalEvaluateRequestSchema,
  type ProcessorSignalEvaluateRequest,
} from "./models/processor-signal-evaluate-request.js";
import {
  processorSignalEvaluateResponseSchema,
  type ProcessorSignalEvaluateResponse,
} from "./models/processor-signal-evaluate-response.js";
import {
  processorSignalPrepareRequestSchema,
  type ProcessorSignalPrepareRequest,
} from "./models/processor-signal-prepare-request.js";
import {
  processorSignalPrepareResponseSchema,
  type ProcessorSignalPrepareResponse,
} from "./models/processor-signal-prepare-response.js";
import {
  processorSignalReturnReportRequestSchema,
  type ProcessorSignalReturnReportRequest,
} from "./models/processor-signal-return-report-request.js";
import {
  processorSignalReturnReportResponseSchema,
  type ProcessorSignalReturnReportResponse,
} from "./models/processor-signal-return-report-response.js";
import {
  processorStripeBankAccountTokenCreateRequestSchema,
  type ProcessorStripeBankAccountTokenCreateRequest,
} from "./models/processor-stripe-bank-account-token-create-request.js";
import {
  processorStripeBankAccountTokenCreateResponseSchema,
  type ProcessorStripeBankAccountTokenCreateResponse,
} from "./models/processor-stripe-bank-account-token-create-response.js";
import {
  processorTokenCreateRequestSchema,
  type ProcessorTokenCreateRequest,
} from "./models/processor-token-create-request.js";
import {
  processorTokenCreateResponseSchema,
  type ProcessorTokenCreateResponse,
} from "./models/processor-token-create-response.js";
import {
  processorTokenPermissionsGetRequestSchema,
  type ProcessorTokenPermissionsGetRequest,
} from "./models/processor-token-permissions-get-request.js";
import {
  processorTokenPermissionsGetResponseSchema,
  type ProcessorTokenPermissionsGetResponse,
} from "./models/processor-token-permissions-get-response.js";
import {
  processorTokenPermissionsSetRequestSchema,
  type ProcessorTokenPermissionsSetRequest,
} from "./models/processor-token-permissions-set-request.js";
import {
  processorTokenPermissionsSetResponseSchema,
  type ProcessorTokenPermissionsSetResponse,
} from "./models/processor-token-permissions-set-response.js";
import {
  processorTokenWebhookUpdateRequestSchema,
  type ProcessorTokenWebhookUpdateRequest,
} from "./models/processor-token-webhook-update-request.js";
import {
  processorTokenWebhookUpdateResponseSchema,
  type ProcessorTokenWebhookUpdateResponse,
} from "./models/processor-token-webhook-update-response.js";
import {
  processorTransactionsGetRequestSchema,
  type ProcessorTransactionsGetRequest,
} from "./models/processor-transactions-get-request.js";
import {
  processorTransactionsGetResponseSchema,
  type ProcessorTransactionsGetResponse,
} from "./models/processor-transactions-get-response.js";
import {
  processorTransactionsRecurringGetRequestSchema,
  type ProcessorTransactionsRecurringGetRequest,
} from "./models/processor-transactions-recurring-get-request.js";
import {
  processorTransactionsRecurringGetResponseSchema,
  type ProcessorTransactionsRecurringGetResponse,
} from "./models/processor-transactions-recurring-get-response.js";
import {
  processorTransactionsRefreshRequestSchema,
  type ProcessorTransactionsRefreshRequest,
} from "./models/processor-transactions-refresh-request.js";
import {
  processorTransactionsRefreshResponseSchema,
  type ProcessorTransactionsRefreshResponse,
} from "./models/processor-transactions-refresh-response.js";
import {
  processorTransactionsSyncRequestSchema,
  type ProcessorTransactionsSyncRequest,
} from "./models/processor-transactions-sync-request.js";
import {
  processorTransactionsSyncResponseSchema,
  type ProcessorTransactionsSyncResponse,
} from "./models/processor-transactions-sync-response.js";
import {
  profileNetworkStatusGetRequestSchema,
  type ProfileNetworkStatusGetRequest,
} from "./models/profile-network-status-get-request.js";
import {
  profileNetworkStatusGetResponseSchema,
  type ProfileNetworkStatusGetResponse,
} from "./models/profile-network-status-get-response.js";
import { protectComputeRequestSchema, type ProtectComputeRequest } from "./models/protect-compute-request.js";
import {
  protectComputeResponseSchema,
  type ProtectComputeResponse,
} from "./models/protect-compute-response.js";
import {
  protectEventGetRequestSchema,
  type ProtectEventGetRequest,
} from "./models/protect-event-get-request.js";
import {
  protectEventGetResponseSchema,
  type ProtectEventGetResponse,
} from "./models/protect-event-get-response.js";
import {
  protectEventSendRequestSchema,
  type ProtectEventSendRequest,
} from "./models/protect-event-send-request.js";
import {
  protectEventSendResponseSchema,
  type ProtectEventSendResponse,
} from "./models/protect-event-send-response.js";
import {
  protectReportCreateRequestSchema,
  type ProtectReportCreateRequest,
} from "./models/protect-report-create-request.js";
import {
  protectReportCreateResponseSchema,
  type ProtectReportCreateResponse,
} from "./models/protect-report-create-response.js";
import {
  protectUserInsightsGetRequestSchema,
  type ProtectUserInsightsGetRequest,
} from "./models/protect-user-insights-get-request.js";
import {
  protectUserInsightsGetResponseSchema,
  type ProtectUserInsightsGetResponse,
} from "./models/protect-user-insights-get-response.js";
import {
  sandboxBankIncomeFireWebhookRequestSchema,
  type SandboxBankIncomeFireWebhookRequest,
} from "./models/sandbox-bank-income-fire-webhook-request.js";
import {
  sandboxBankIncomeFireWebhookResponseSchema,
  type SandboxBankIncomeFireWebhookResponse,
} from "./models/sandbox-bank-income-fire-webhook-response.js";
import {
  sandboxBankTransferFireWebhookRequestSchema,
  type SandboxBankTransferFireWebhookRequest,
} from "./models/sandbox-bank-transfer-fire-webhook-request.js";
import {
  sandboxBankTransferFireWebhookResponseSchema,
  type SandboxBankTransferFireWebhookResponse,
} from "./models/sandbox-bank-transfer-fire-webhook-response.js";
import {
  sandboxBankTransferSimulateRequestSchema,
  type SandboxBankTransferSimulateRequest,
} from "./models/sandbox-bank-transfer-simulate-request.js";
import {
  sandboxBankTransferSimulateResponseSchema,
  type SandboxBankTransferSimulateResponse,
} from "./models/sandbox-bank-transfer-simulate-response.js";
import {
  sandboxCraCashflowUpdatesUpdateRequestSchema,
  type SandboxCraCashflowUpdatesUpdateRequest,
} from "./models/sandbox-cra-cashflow-updates-update-request.js";
import {
  sandboxCraCashflowUpdatesUpdateResponseSchema,
  type SandboxCraCashflowUpdatesUpdateResponse,
} from "./models/sandbox-cra-cashflow-updates-update-response.js";
import {
  sandboxFdxConsentSeedRequestSchema,
  type SandboxFdxConsentSeedRequest,
} from "./models/sandbox-fdx-consent-seed-request.js";
import {
  sandboxFdxConsentSeedResponseSchema,
  type SandboxFdxConsentSeedResponse,
} from "./models/sandbox-fdx-consent-seed-response.js";
import {
  sandboxIncomeFireWebhookRequestSchema,
  type SandboxIncomeFireWebhookRequest,
} from "./models/sandbox-income-fire-webhook-request.js";
import {
  sandboxIncomeFireWebhookResponseSchema,
  type SandboxIncomeFireWebhookResponse,
} from "./models/sandbox-income-fire-webhook-response.js";
import {
  sandboxItemApplicationSeedRequestSchema,
  type SandboxItemApplicationSeedRequest,
} from "./models/sandbox-item-application-seed-request.js";
import {
  sandboxItemApplicationSeedResponseSchema,
  type SandboxItemApplicationSeedResponse,
} from "./models/sandbox-item-application-seed-response.js";
import {
  sandboxItemFireWebhookRequestSchema,
  type SandboxItemFireWebhookRequest,
} from "./models/sandbox-item-fire-webhook-request.js";
import {
  sandboxItemFireWebhookResponseSchema,
  type SandboxItemFireWebhookResponse,
} from "./models/sandbox-item-fire-webhook-response.js";
import {
  sandboxItemResetLoginRequestSchema,
  type SandboxItemResetLoginRequest,
} from "./models/sandbox-item-reset-login-request.js";
import {
  sandboxItemResetLoginResponseSchema,
  type SandboxItemResetLoginResponse,
} from "./models/sandbox-item-reset-login-response.js";
import {
  sandboxItemSetVerificationStatusRequestSchema,
  type SandboxItemSetVerificationStatusRequest,
} from "./models/sandbox-item-set-verification-status-request.js";
import {
  sandboxItemSetVerificationStatusResponseSchema,
  type SandboxItemSetVerificationStatusResponse,
} from "./models/sandbox-item-set-verification-status-response.js";
import {
  sandboxOauthSelectAccountsRequestSchema,
  type SandboxOauthSelectAccountsRequest,
} from "./models/sandbox-oauth-select-accounts-request.js";
import {
  sandboxPaymentProfileResetLoginRequestSchema,
  type SandboxPaymentProfileResetLoginRequest,
} from "./models/sandbox-payment-profile-reset-login-request.js";
import {
  sandboxPaymentProfileResetLoginResponseSchema,
  type SandboxPaymentProfileResetLoginResponse,
} from "./models/sandbox-payment-profile-reset-login-response.js";
import {
  sandboxPaymentSimulateRequestSchema,
  type SandboxPaymentSimulateRequest,
} from "./models/sandbox-payment-simulate-request.js";
import {
  sandboxPaymentSimulateResponseSchema,
  type SandboxPaymentSimulateResponse,
} from "./models/sandbox-payment-simulate-response.js";
import {
  sandboxProcessorTokenCreateRequestSchema,
  type SandboxProcessorTokenCreateRequest,
} from "./models/sandbox-processor-token-create-request.js";
import {
  sandboxProcessorTokenCreateResponseSchema,
  type SandboxProcessorTokenCreateResponse,
} from "./models/sandbox-processor-token-create-response.js";
import {
  sandboxPublicTokenCreateRequestSchema,
  type SandboxPublicTokenCreateRequest,
} from "./models/sandbox-public-token-create-request.js";
import {
  sandboxPublicTokenCreateResponseSchema,
  type SandboxPublicTokenCreateResponse,
} from "./models/sandbox-public-token-create-response.js";
import {
  sandboxTransactionsCreateRequestSchema,
  type SandboxTransactionsCreateRequest,
} from "./models/sandbox-transactions-create-request.js";
import {
  sandboxTransactionsCreateResponseSchema,
  type SandboxTransactionsCreateResponse,
} from "./models/sandbox-transactions-create-response.js";
import {
  sandboxTransferFireWebhookRequestSchema,
  type SandboxTransferFireWebhookRequest,
} from "./models/sandbox-transfer-fire-webhook-request.js";
import {
  sandboxTransferFireWebhookResponseSchema,
  type SandboxTransferFireWebhookResponse,
} from "./models/sandbox-transfer-fire-webhook-response.js";
import {
  sandboxTransferLedgerDepositSimulateRequestSchema,
  type SandboxTransferLedgerDepositSimulateRequest,
} from "./models/sandbox-transfer-ledger-deposit-simulate-request.js";
import {
  sandboxTransferLedgerDepositSimulateResponseSchema,
  type SandboxTransferLedgerDepositSimulateResponse,
} from "./models/sandbox-transfer-ledger-deposit-simulate-response.js";
import {
  sandboxTransferLedgerSimulateAvailableRequestSchema,
  type SandboxTransferLedgerSimulateAvailableRequest,
} from "./models/sandbox-transfer-ledger-simulate-available-request.js";
import {
  sandboxTransferLedgerSimulateAvailableResponseSchema,
  type SandboxTransferLedgerSimulateAvailableResponse,
} from "./models/sandbox-transfer-ledger-simulate-available-response.js";
import {
  sandboxTransferLedgerWithdrawSimulateRequestSchema,
  type SandboxTransferLedgerWithdrawSimulateRequest,
} from "./models/sandbox-transfer-ledger-withdraw-simulate-request.js";
import {
  sandboxTransferLedgerWithdrawSimulateResponseSchema,
  type SandboxTransferLedgerWithdrawSimulateResponse,
} from "./models/sandbox-transfer-ledger-withdraw-simulate-response.js";
import {
  sandboxTransferRefundSimulateRequestSchema,
  type SandboxTransferRefundSimulateRequest,
} from "./models/sandbox-transfer-refund-simulate-request.js";
import {
  sandboxTransferRefundSimulateResponseSchema,
  type SandboxTransferRefundSimulateResponse,
} from "./models/sandbox-transfer-refund-simulate-response.js";
import {
  sandboxTransferRepaymentSimulateRequestSchema,
  type SandboxTransferRepaymentSimulateRequest,
} from "./models/sandbox-transfer-repayment-simulate-request.js";
import {
  sandboxTransferRepaymentSimulateResponseSchema,
  type SandboxTransferRepaymentSimulateResponse,
} from "./models/sandbox-transfer-repayment-simulate-response.js";
import {
  sandboxTransferSimulateRequestSchema,
  type SandboxTransferSimulateRequest,
} from "./models/sandbox-transfer-simulate-request.js";
import {
  sandboxTransferSimulateResponseSchema,
  type SandboxTransferSimulateResponse,
} from "./models/sandbox-transfer-simulate-response.js";
import {
  sandboxTransferSweepSimulateRequestSchema,
  type SandboxTransferSweepSimulateRequest,
} from "./models/sandbox-transfer-sweep-simulate-request.js";
import {
  sandboxTransferSweepSimulateResponseSchema,
  type SandboxTransferSweepSimulateResponse,
} from "./models/sandbox-transfer-sweep-simulate-response.js";
import {
  sandboxTransferTestClockAdvanceRequestSchema,
  type SandboxTransferTestClockAdvanceRequest,
} from "./models/sandbox-transfer-test-clock-advance-request.js";
import {
  sandboxTransferTestClockAdvanceResponseSchema,
  type SandboxTransferTestClockAdvanceResponse,
} from "./models/sandbox-transfer-test-clock-advance-response.js";
import {
  sandboxTransferTestClockCreateRequestSchema,
  type SandboxTransferTestClockCreateRequest,
} from "./models/sandbox-transfer-test-clock-create-request.js";
import {
  sandboxTransferTestClockCreateResponseSchema,
  type SandboxTransferTestClockCreateResponse,
} from "./models/sandbox-transfer-test-clock-create-response.js";
import {
  sandboxTransferTestClockGetRequestSchema,
  type SandboxTransferTestClockGetRequest,
} from "./models/sandbox-transfer-test-clock-get-request.js";
import {
  sandboxTransferTestClockGetResponseSchema,
  type SandboxTransferTestClockGetResponse,
} from "./models/sandbox-transfer-test-clock-get-response.js";
import {
  sandboxTransferTestClockListRequestSchema,
  type SandboxTransferTestClockListRequest,
} from "./models/sandbox-transfer-test-clock-list-request.js";
import {
  sandboxTransferTestClockListResponseSchema,
  type SandboxTransferTestClockListResponse,
} from "./models/sandbox-transfer-test-clock-list-response.js";
import {
  sandboxUserResetLoginRequestSchema,
  type SandboxUserResetLoginRequest,
} from "./models/sandbox-user-reset-login-request.js";
import {
  sandboxUserResetLoginResponseSchema,
  type SandboxUserResetLoginResponse,
} from "./models/sandbox-user-reset-login-response.js";
import {
  sessionTokenCreateRequestSchema,
  type SessionTokenCreateRequest,
} from "./models/session-token-create-request.js";
import {
  sessionTokenCreateResponseSchema,
  type SessionTokenCreateResponse,
} from "./models/session-token-create-response.js";
import {
  signalDecisionReportRequestSchema,
  type SignalDecisionReportRequest,
} from "./models/signal-decision-report-request.js";
import {
  signalDecisionReportResponseSchema,
  type SignalDecisionReportResponse,
} from "./models/signal-decision-report-response.js";
import { signalEvaluateRequestSchema, type SignalEvaluateRequest } from "./models/signal-evaluate-request.js";
import {
  signalEvaluateResponseSchema,
  type SignalEvaluateResponse,
} from "./models/signal-evaluate-response.js";
import { signalPrepareRequestSchema, type SignalPrepareRequest } from "./models/signal-prepare-request.js";
import { signalPrepareResponseSchema, type SignalPrepareResponse } from "./models/signal-prepare-response.js";
import {
  signalReturnReportRequestSchema,
  type SignalReturnReportRequest,
} from "./models/signal-return-report-request.js";
import {
  signalReturnReportResponseSchema,
  type SignalReturnReportResponse,
} from "./models/signal-return-report-response.js";
import { signalScheduleRequestSchema, type SignalScheduleRequest } from "./models/signal-schedule-request.js";
import {
  signalScheduleResponseSchema,
  type SignalScheduleResponse,
} from "./models/signal-schedule-response.js";
import {
  statementsDownloadRequestSchema,
  type StatementsDownloadRequest,
} from "./models/statements-download-request.js";
import { statementsListRequestSchema, type StatementsListRequest } from "./models/statements-list-request.js";
import {
  statementsListResponseSchema,
  type StatementsListResponse,
} from "./models/statements-list-response.js";
import {
  statementsRefreshRequestSchema,
  type StatementsRefreshRequest,
} from "./models/statements-refresh-request.js";
import {
  statementsRefreshResponseSchema,
  type StatementsRefreshResponse,
} from "./models/statements-refresh-response.js";
import {
  transactionsEnhanceGetRequestSchema,
  type TransactionsEnhanceGetRequest,
} from "./models/transactions-enhance-get-request.js";
import {
  transactionsEnhanceGetResponseSchema,
  type TransactionsEnhanceGetResponse,
} from "./models/transactions-enhance-get-response.js";
import {
  transactionsEnrichRequestSchema,
  type TransactionsEnrichRequest,
} from "./models/transactions-enrich-request.js";
import {
  transactionsEnrichResponseSchema,
  type TransactionsEnrichResponse,
} from "./models/transactions-enrich-response.js";
import {
  transactionsGetRequestSchema,
  type TransactionsGetRequest,
} from "./models/transactions-get-request.js";
import {
  transactionsGetResponseSchema,
  type TransactionsGetResponse,
} from "./models/transactions-get-response.js";
import {
  transactionsRecurringGetRequestSchema,
  type TransactionsRecurringGetRequest,
} from "./models/transactions-recurring-get-request.js";
import {
  transactionsRecurringGetResponseSchema,
  type TransactionsRecurringGetResponse,
} from "./models/transactions-recurring-get-response.js";
import {
  transactionsRefreshRequestSchema,
  type TransactionsRefreshRequest,
} from "./models/transactions-refresh-request.js";
import {
  transactionsRefreshResponseSchema,
  type TransactionsRefreshResponse,
} from "./models/transactions-refresh-response.js";
import {
  transactionsRulesCreateRequestSchema,
  type TransactionsRulesCreateRequest,
} from "./models/transactions-rules-create-request.js";
import {
  transactionsRulesCreateResponseSchema,
  type TransactionsRulesCreateResponse,
} from "./models/transactions-rules-create-response.js";
import {
  transactionsRulesListRequestSchema,
  type TransactionsRulesListRequest,
} from "./models/transactions-rules-list-request.js";
import {
  transactionsRulesListResponseSchema,
  type TransactionsRulesListResponse,
} from "./models/transactions-rules-list-response.js";
import {
  transactionsRulesRemoveRequestSchema,
  type TransactionsRulesRemoveRequest,
} from "./models/transactions-rules-remove-request.js";
import {
  transactionsRulesRemoveResponseSchema,
  type TransactionsRulesRemoveResponse,
} from "./models/transactions-rules-remove-response.js";
import {
  transactionsSyncRequestSchema,
  type TransactionsSyncRequest,
} from "./models/transactions-sync-request.js";
import {
  transactionsSyncResponseSchema,
  type TransactionsSyncResponse,
} from "./models/transactions-sync-response.js";
import {
  transactionsUserInsightsGetRequestSchema,
  type TransactionsUserInsightsGetRequest,
} from "./models/transactions-user-insights-get-request.js";
import {
  transactionsUserInsightsGetResponseSchema,
  type TransactionsUserInsightsGetResponse,
} from "./models/transactions-user-insights-get-response.js";
import {
  transferAuthorizationCancelRequestSchema,
  type TransferAuthorizationCancelRequest,
} from "./models/transfer-authorization-cancel-request.js";
import {
  transferAuthorizationCancelResponseSchema,
  type TransferAuthorizationCancelResponse,
} from "./models/transfer-authorization-cancel-response.js";
import {
  transferAuthorizationCreateRequestSchema,
  type TransferAuthorizationCreateRequest,
} from "./models/transfer-authorization-create-request.js";
import {
  transferAuthorizationCreateResponseSchema,
  type TransferAuthorizationCreateResponse,
} from "./models/transfer-authorization-create-response.js";
import {
  transferBalanceGetRequestSchema,
  type TransferBalanceGetRequest,
} from "./models/transfer-balance-get-request.js";
import {
  transferBalanceGetResponseSchema,
  type TransferBalanceGetResponse,
} from "./models/transfer-balance-get-response.js";
import { transferCancelRequestSchema, type TransferCancelRequest } from "./models/transfer-cancel-request.js";
import {
  transferCancelResponseSchema,
  type TransferCancelResponse,
} from "./models/transfer-cancel-response.js";
import {
  transferCapabilitiesGetRequestSchema,
  type TransferCapabilitiesGetRequest,
} from "./models/transfer-capabilities-get-request.js";
import {
  transferCapabilitiesGetResponseSchema,
  type TransferCapabilitiesGetResponse,
} from "./models/transfer-capabilities-get-response.js";
import {
  transferConfigurationGetRequestSchema,
  type TransferConfigurationGetRequest,
} from "./models/transfer-configuration-get-request.js";
import {
  transferConfigurationGetResponseSchema,
  type TransferConfigurationGetResponse,
} from "./models/transfer-configuration-get-response.js";
import { transferCreateRequestSchema, type TransferCreateRequest } from "./models/transfer-create-request.js";
import {
  transferCreateResponseSchema,
  type TransferCreateResponse,
} from "./models/transfer-create-response.js";
import {
  transferDiligenceDocumentUploadRequestSchema,
  type TransferDiligenceDocumentUploadRequest,
} from "./models/transfer-diligence-document-upload-request.js";
import {
  transferDiligenceDocumentUploadResponseSchema,
  type TransferDiligenceDocumentUploadResponse,
} from "./models/transfer-diligence-document-upload-response.js";
import {
  transferDiligenceSubmitRequestSchema,
  type TransferDiligenceSubmitRequest,
} from "./models/transfer-diligence-submit-request.js";
import {
  transferDiligenceSubmitResponseSchema,
  type TransferDiligenceSubmitResponse,
} from "./models/transfer-diligence-submit-response.js";
import {
  transferEventListRequestSchema,
  type TransferEventListRequest,
} from "./models/transfer-event-list-request.js";
import {
  transferEventListResponseSchema,
  type TransferEventListResponse,
} from "./models/transfer-event-list-response.js";
import {
  transferEventSyncRequestSchema,
  type TransferEventSyncRequest,
} from "./models/transfer-event-sync-request.js";
import {
  transferEventSyncResponseSchema,
  type TransferEventSyncResponse,
} from "./models/transfer-event-sync-response.js";
import { transferGetRequestSchema, type TransferGetRequest } from "./models/transfer-get-request.js";
import { transferGetResponseSchema, type TransferGetResponse } from "./models/transfer-get-response.js";
import {
  transferIntentCreateRequestSchema,
  type TransferIntentCreateRequest,
} from "./models/transfer-intent-create-request.js";
import {
  transferIntentCreateResponseSchema,
  type TransferIntentCreateResponse,
} from "./models/transfer-intent-create-response.js";
import {
  transferIntentGetRequestSchema,
  type TransferIntentGetRequest,
} from "./models/transfer-intent-get-request.js";
import {
  transferIntentGetResponseSchema,
  type TransferIntentGetResponse,
} from "./models/transfer-intent-get-response.js";
import {
  transferLedgerDepositRequestSchema,
  type TransferLedgerDepositRequest,
} from "./models/transfer-ledger-deposit-request.js";
import {
  transferLedgerDepositResponseSchema,
  type TransferLedgerDepositResponse,
} from "./models/transfer-ledger-deposit-response.js";
import {
  transferLedgerDistributeRequestSchema,
  type TransferLedgerDistributeRequest,
} from "./models/transfer-ledger-distribute-request.js";
import {
  transferLedgerDistributeResponseSchema,
  type TransferLedgerDistributeResponse,
} from "./models/transfer-ledger-distribute-response.js";
import {
  transferLedgerEventListRequestSchema,
  type TransferLedgerEventListRequest,
} from "./models/transfer-ledger-event-list-request.js";
import {
  transferLedgerEventListResponseSchema,
  type TransferLedgerEventListResponse,
} from "./models/transfer-ledger-event-list-response.js";
import {
  transferLedgerGetRequestSchema,
  type TransferLedgerGetRequest,
} from "./models/transfer-ledger-get-request.js";
import {
  transferLedgerGetResponseSchema,
  type TransferLedgerGetResponse,
} from "./models/transfer-ledger-get-response.js";
import {
  transferLedgerWithdrawRequestSchema,
  type TransferLedgerWithdrawRequest,
} from "./models/transfer-ledger-withdraw-request.js";
import {
  transferLedgerWithdrawResponseSchema,
  type TransferLedgerWithdrawResponse,
} from "./models/transfer-ledger-withdraw-response.js";
import { transferListRequestSchema, type TransferListRequest } from "./models/transfer-list-request.js";
import { transferListResponseSchema, type TransferListResponse } from "./models/transfer-list-response.js";
import {
  transferMetricsGetRequestSchema,
  type TransferMetricsGetRequest,
} from "./models/transfer-metrics-get-request.js";
import {
  transferMetricsGetResponseSchema,
  type TransferMetricsGetResponse,
} from "./models/transfer-metrics-get-response.js";
import {
  transferMigrateAccountRequestSchema,
  type TransferMigrateAccountRequest,
} from "./models/transfer-migrate-account-request.js";
import {
  transferMigrateAccountResponseSchema,
  type TransferMigrateAccountResponse,
} from "./models/transfer-migrate-account-response.js";
import {
  transferOriginatorCreateRequestSchema,
  type TransferOriginatorCreateRequest,
} from "./models/transfer-originator-create-request.js";
import {
  transferOriginatorCreateResponseSchema,
  type TransferOriginatorCreateResponse,
} from "./models/transfer-originator-create-response.js";
import {
  transferOriginatorFundingAccountCreateRequestSchema,
  type TransferOriginatorFundingAccountCreateRequest,
} from "./models/transfer-originator-funding-account-create-request.js";
import {
  transferOriginatorFundingAccountCreateResponseSchema,
  type TransferOriginatorFundingAccountCreateResponse,
} from "./models/transfer-originator-funding-account-create-response.js";
import {
  transferOriginatorFundingAccountUpdateRequestSchema,
  type TransferOriginatorFundingAccountUpdateRequest,
} from "./models/transfer-originator-funding-account-update-request.js";
import {
  transferOriginatorFundingAccountUpdateResponseSchema,
  type TransferOriginatorFundingAccountUpdateResponse,
} from "./models/transfer-originator-funding-account-update-response.js";
import {
  transferOriginatorGetRequestSchema,
  type TransferOriginatorGetRequest,
} from "./models/transfer-originator-get-request.js";
import {
  transferOriginatorGetResponseSchema,
  type TransferOriginatorGetResponse,
} from "./models/transfer-originator-get-response.js";
import {
  transferOriginatorListRequestSchema,
  type TransferOriginatorListRequest,
} from "./models/transfer-originator-list-request.js";
import {
  transferOriginatorListResponseSchema,
  type TransferOriginatorListResponse,
} from "./models/transfer-originator-list-response.js";
import {
  transferPlatformOriginatorCreateRequestSchema,
  type TransferPlatformOriginatorCreateRequest,
} from "./models/transfer-platform-originator-create-request.js";
import {
  transferPlatformOriginatorCreateResponseSchema,
  type TransferPlatformOriginatorCreateResponse,
} from "./models/transfer-platform-originator-create-response.js";
import {
  transferPlatformPersonCreateRequestSchema,
  type TransferPlatformPersonCreateRequest,
} from "./models/transfer-platform-person-create-request.js";
import {
  transferPlatformPersonCreateResponseSchema,
  type TransferPlatformPersonCreateResponse,
} from "./models/transfer-platform-person-create-response.js";
import {
  transferPlatformRequirementSubmitRequestSchema,
  type TransferPlatformRequirementSubmitRequest,
} from "./models/transfer-platform-requirement-submit-request.js";
import {
  transferPlatformRequirementSubmitResponseSchema,
  type TransferPlatformRequirementSubmitResponse,
} from "./models/transfer-platform-requirement-submit-response.js";
import {
  transferQuestionnaireCreateRequestSchema,
  type TransferQuestionnaireCreateRequest,
} from "./models/transfer-questionnaire-create-request.js";
import {
  transferQuestionnaireCreateResponseSchema,
  type TransferQuestionnaireCreateResponse,
} from "./models/transfer-questionnaire-create-response.js";
import {
  transferRecurringCancelRequestSchema,
  type TransferRecurringCancelRequest,
} from "./models/transfer-recurring-cancel-request.js";
import {
  transferRecurringCancelResponseSchema,
  type TransferRecurringCancelResponse,
} from "./models/transfer-recurring-cancel-response.js";
import {
  transferRecurringCreateRequestSchema,
  type TransferRecurringCreateRequest,
} from "./models/transfer-recurring-create-request.js";
import {
  transferRecurringCreateResponseSchema,
  type TransferRecurringCreateResponse,
} from "./models/transfer-recurring-create-response.js";
import {
  transferRecurringGetRequestSchema,
  type TransferRecurringGetRequest,
} from "./models/transfer-recurring-get-request.js";
import {
  transferRecurringGetResponseSchema,
  type TransferRecurringGetResponse,
} from "./models/transfer-recurring-get-response.js";
import {
  transferRecurringListRequestSchema,
  type TransferRecurringListRequest,
} from "./models/transfer-recurring-list-request.js";
import {
  transferRecurringListResponseSchema,
  type TransferRecurringListResponse,
} from "./models/transfer-recurring-list-response.js";
import {
  transferRefundCancelRequestSchema,
  type TransferRefundCancelRequest,
} from "./models/transfer-refund-cancel-request.js";
import {
  transferRefundCancelResponseSchema,
  type TransferRefundCancelResponse,
} from "./models/transfer-refund-cancel-response.js";
import {
  transferRefundCreateRequestSchema,
  type TransferRefundCreateRequest,
} from "./models/transfer-refund-create-request.js";
import {
  transferRefundCreateResponseSchema,
  type TransferRefundCreateResponse,
} from "./models/transfer-refund-create-response.js";
import {
  transferRefundGetRequestSchema,
  type TransferRefundGetRequest,
} from "./models/transfer-refund-get-request.js";
import {
  transferRefundGetResponseSchema,
  type TransferRefundGetResponse,
} from "./models/transfer-refund-get-response.js";
import {
  transferRepaymentListRequestSchema,
  type TransferRepaymentListRequest,
} from "./models/transfer-repayment-list-request.js";
import {
  transferRepaymentListResponseSchema,
  type TransferRepaymentListResponse,
} from "./models/transfer-repayment-list-response.js";
import {
  transferRepaymentReturnListRequestSchema,
  type TransferRepaymentReturnListRequest,
} from "./models/transfer-repayment-return-list-request.js";
import {
  transferRepaymentReturnListResponseSchema,
  type TransferRepaymentReturnListResponse,
} from "./models/transfer-repayment-return-list-response.js";
import {
  transferReturnRecoverRequestSchema,
  type TransferReturnRecoverRequest,
} from "./models/transfer-return-recover-request.js";
import {
  transferReturnRecoverResponseSchema,
  type TransferReturnRecoverResponse,
} from "./models/transfer-return-recover-response.js";
import {
  transferSweepGetRequestSchema,
  type TransferSweepGetRequest,
} from "./models/transfer-sweep-get-request.js";
import {
  transferSweepGetResponseSchema,
  type TransferSweepGetResponse,
} from "./models/transfer-sweep-get-response.js";
import {
  transferSweepListRequestSchema,
  type TransferSweepListRequest,
} from "./models/transfer-sweep-list-request.js";
import {
  transferSweepListResponseSchema,
  type TransferSweepListResponse,
} from "./models/transfer-sweep-list-response.js";
import {
  userAccountSessionEventSendRequestSchema,
  type UserAccountSessionEventSendRequest,
} from "./models/user-account-session-event-send-request.js";
import {
  userAccountSessionEventSendResponseSchema,
  type UserAccountSessionEventSendResponse,
} from "./models/user-account-session-event-send-response.js";
import {
  userAccountSessionGetRequestSchema,
  type UserAccountSessionGetRequest,
} from "./models/user-account-session-get-request.js";
import {
  userAccountSessionGetResponseSchema,
  type UserAccountSessionGetResponse,
} from "./models/user-account-session-get-response.js";
import { userCreateRequestSchema, type UserCreateRequest } from "./models/user-create-request.js";
import { userCreateResponseSchema, type UserCreateResponse } from "./models/user-create-response.js";
import {
  userFinancialDataRefreshRequestSchema,
  type UserFinancialDataRefreshRequest,
} from "./models/user-financial-data-refresh-request.js";
import {
  userFinancialDataRefreshResponseSchema,
  type UserFinancialDataRefreshResponse,
} from "./models/user-financial-data-refresh-response.js";
import { userGetRequestSchema, type UserGetRequest } from "./models/user-get-request.js";
import { userGetResponseSchema, type UserGetResponse } from "./models/user-get-response.js";
import {
  userIdentityRemoveRequestSchema,
  type UserIdentityRemoveRequest,
} from "./models/user-identity-remove-request.js";
import {
  userIdentityRemoveResponseSchema,
  type UserIdentityRemoveResponse,
} from "./models/user-identity-remove-response.js";
import {
  userItemsAssociateRequestSchema,
  type UserItemsAssociateRequest,
} from "./models/user-items-associate-request.js";
import {
  userItemsAssociateResponseSchema,
  type UserItemsAssociateResponse,
} from "./models/user-items-associate-response.js";
import { userItemsGetRequestSchema, type UserItemsGetRequest } from "./models/user-items-get-request.js";
import { userItemsGetResponseSchema, type UserItemsGetResponse } from "./models/user-items-get-response.js";
import {
  userItemsRemoveRequestSchema,
  type UserItemsRemoveRequest,
} from "./models/user-items-remove-request.js";
import {
  userItemsRemoveResponseSchema,
  type UserItemsRemoveResponse,
} from "./models/user-items-remove-response.js";
import {
  userProductsTerminateRequestSchema,
  type UserProductsTerminateRequest,
} from "./models/user-products-terminate-request.js";
import {
  userProductsTerminateResponseSchema,
  type UserProductsTerminateResponse,
} from "./models/user-products-terminate-response.js";
import { userRemoveRequestSchema, type UserRemoveRequest } from "./models/user-remove-request.js";
import { userRemoveResponseSchema, type UserRemoveResponse } from "./models/user-remove-response.js";
import {
  userThirdPartyTokenCreateRequestSchema,
  type UserThirdPartyTokenCreateRequest,
} from "./models/user-third-party-token-create-request.js";
import {
  userThirdPartyTokenCreateResponseSchema,
  type UserThirdPartyTokenCreateResponse,
} from "./models/user-third-party-token-create-response.js";
import {
  userThirdPartyTokenRemoveRequestSchema,
  type UserThirdPartyTokenRemoveRequest,
} from "./models/user-third-party-token-remove-request.js";
import {
  userThirdPartyTokenRemoveResponseSchema,
  type UserThirdPartyTokenRemoveResponse,
} from "./models/user-third-party-token-remove-response.js";
import {
  userTransactionsRefreshRequestSchema,
  type UserTransactionsRefreshRequest,
} from "./models/user-transactions-refresh-request.js";
import {
  userTransactionsRefreshResponseSchema,
  type UserTransactionsRefreshResponse,
} from "./models/user-transactions-refresh-response.js";
import { userUpdateRequestSchema, type UserUpdateRequest } from "./models/user-update-request.js";
import { userUpdateResponseSchema, type UserUpdateResponse } from "./models/user-update-response.js";
import { walletCreateRequestSchema, type WalletCreateRequest } from "./models/wallet-create-request.js";
import { walletCreateResponseSchema, type WalletCreateResponse } from "./models/wallet-create-response.js";
import { walletGetRequestSchema, type WalletGetRequest } from "./models/wallet-get-request.js";
import { walletGetResponseSchema, type WalletGetResponse } from "./models/wallet-get-response.js";
import { walletListRequestSchema, type WalletListRequest } from "./models/wallet-list-request.js";
import { walletListResponseSchema, type WalletListResponse } from "./models/wallet-list-response.js";
import {
  walletTransactionExecuteRequestSchema,
  type WalletTransactionExecuteRequest,
} from "./models/wallet-transaction-execute-request.js";
import {
  walletTransactionExecuteResponseSchema,
  type WalletTransactionExecuteResponse,
} from "./models/wallet-transaction-execute-response.js";
import {
  walletTransactionGetRequestSchema,
  type WalletTransactionGetRequest,
} from "./models/wallet-transaction-get-request.js";
import {
  walletTransactionGetResponseSchema,
  type WalletTransactionGetResponse,
} from "./models/wallet-transaction-get-response.js";
import {
  walletTransactionListRequestSchema,
  type WalletTransactionListRequest,
} from "./models/wallet-transaction-list-request.js";
import {
  walletTransactionListResponseSchema,
  type WalletTransactionListResponse,
} from "./models/wallet-transaction-list-response.js";
import {
  watchlistScreeningEntityCreateRequestSchema,
  type WatchlistScreeningEntityCreateRequest,
} from "./models/watchlist-screening-entity-create-request.js";
import {
  watchlistScreeningEntityCreateResponseSchema,
  type WatchlistScreeningEntityCreateResponse,
} from "./models/watchlist-screening-entity-create-response.js";
import {
  watchlistScreeningEntityGetRequestSchema,
  type WatchlistScreeningEntityGetRequest,
} from "./models/watchlist-screening-entity-get-request.js";
import {
  watchlistScreeningEntityGetResponseSchema,
  type WatchlistScreeningEntityGetResponse,
} from "./models/watchlist-screening-entity-get-response.js";
import {
  watchlistScreeningEntityHistoryListRequestSchema,
  type WatchlistScreeningEntityHistoryListRequest,
} from "./models/watchlist-screening-entity-history-list-request.js";
import {
  watchlistScreeningEntityHistoryListResponseSchema,
  type WatchlistScreeningEntityHistoryListResponse,
} from "./models/watchlist-screening-entity-history-list-response.js";
import {
  watchlistScreeningEntityHitListRequestSchema,
  type WatchlistScreeningEntityHitListRequest,
} from "./models/watchlist-screening-entity-hit-list-request.js";
import {
  watchlistScreeningEntityHitListResponseSchema,
  type WatchlistScreeningEntityHitListResponse,
} from "./models/watchlist-screening-entity-hit-list-response.js";
import {
  watchlistScreeningEntityListRequestSchema,
  type WatchlistScreeningEntityListRequest,
} from "./models/watchlist-screening-entity-list-request.js";
import {
  watchlistScreeningEntityListResponseSchema,
  type WatchlistScreeningEntityListResponse,
} from "./models/watchlist-screening-entity-list-response.js";
import {
  watchlistScreeningEntityProgramGetRequestSchema,
  type WatchlistScreeningEntityProgramGetRequest,
} from "./models/watchlist-screening-entity-program-get-request.js";
import {
  watchlistScreeningEntityProgramGetResponseSchema,
  type WatchlistScreeningEntityProgramGetResponse,
} from "./models/watchlist-screening-entity-program-get-response.js";
import {
  watchlistScreeningEntityProgramListRequestSchema,
  type WatchlistScreeningEntityProgramListRequest,
} from "./models/watchlist-screening-entity-program-list-request.js";
import {
  watchlistScreeningEntityProgramListResponseSchema,
  type WatchlistScreeningEntityProgramListResponse,
} from "./models/watchlist-screening-entity-program-list-response.js";
import {
  watchlistScreeningEntityReviewCreateRequestSchema,
  type WatchlistScreeningEntityReviewCreateRequest,
} from "./models/watchlist-screening-entity-review-create-request.js";
import {
  watchlistScreeningEntityReviewCreateResponseSchema,
  type WatchlistScreeningEntityReviewCreateResponse,
} from "./models/watchlist-screening-entity-review-create-response.js";
import {
  watchlistScreeningEntityReviewListRequestSchema,
  type WatchlistScreeningEntityReviewListRequest,
} from "./models/watchlist-screening-entity-review-list-request.js";
import {
  watchlistScreeningEntityReviewListResponseSchema,
  type WatchlistScreeningEntityReviewListResponse,
} from "./models/watchlist-screening-entity-review-list-response.js";
import {
  watchlistScreeningEntityUpdateRequestSchema,
  type WatchlistScreeningEntityUpdateRequest,
} from "./models/watchlist-screening-entity-update-request.js";
import {
  watchlistScreeningEntityUpdateResponseSchema,
  type WatchlistScreeningEntityUpdateResponse,
} from "./models/watchlist-screening-entity-update-response.js";
import {
  watchlistScreeningIndividualCreateRequestSchema,
  type WatchlistScreeningIndividualCreateRequest,
} from "./models/watchlist-screening-individual-create-request.js";
import {
  watchlistScreeningIndividualCreateResponseSchema,
  type WatchlistScreeningIndividualCreateResponse,
} from "./models/watchlist-screening-individual-create-response.js";
import {
  watchlistScreeningIndividualGetRequestSchema,
  type WatchlistScreeningIndividualGetRequest,
} from "./models/watchlist-screening-individual-get-request.js";
import {
  watchlistScreeningIndividualGetResponseSchema,
  type WatchlistScreeningIndividualGetResponse,
} from "./models/watchlist-screening-individual-get-response.js";
import {
  watchlistScreeningIndividualHistoryListRequestSchema,
  type WatchlistScreeningIndividualHistoryListRequest,
} from "./models/watchlist-screening-individual-history-list-request.js";
import {
  watchlistScreeningIndividualHistoryListResponseSchema,
  type WatchlistScreeningIndividualHistoryListResponse,
} from "./models/watchlist-screening-individual-history-list-response.js";
import {
  watchlistScreeningIndividualHitListRequestSchema,
  type WatchlistScreeningIndividualHitListRequest,
} from "./models/watchlist-screening-individual-hit-list-request.js";
import {
  watchlistScreeningIndividualHitListResponseSchema,
  type WatchlistScreeningIndividualHitListResponse,
} from "./models/watchlist-screening-individual-hit-list-response.js";
import {
  watchlistScreeningIndividualListRequestSchema,
  type WatchlistScreeningIndividualListRequest,
} from "./models/watchlist-screening-individual-list-request.js";
import {
  watchlistScreeningIndividualListResponseSchema,
  type WatchlistScreeningIndividualListResponse,
} from "./models/watchlist-screening-individual-list-response.js";
import {
  watchlistScreeningIndividualProgramGetRequestSchema,
  type WatchlistScreeningIndividualProgramGetRequest,
} from "./models/watchlist-screening-individual-program-get-request.js";
import {
  watchlistScreeningIndividualProgramGetResponseSchema,
  type WatchlistScreeningIndividualProgramGetResponse,
} from "./models/watchlist-screening-individual-program-get-response.js";
import {
  watchlistScreeningIndividualProgramListRequestSchema,
  type WatchlistScreeningIndividualProgramListRequest,
} from "./models/watchlist-screening-individual-program-list-request.js";
import {
  watchlistScreeningIndividualProgramListResponseSchema,
  type WatchlistScreeningIndividualProgramListResponse,
} from "./models/watchlist-screening-individual-program-list-response.js";
import {
  watchlistScreeningIndividualReviewCreateRequestSchema,
  type WatchlistScreeningIndividualReviewCreateRequest,
} from "./models/watchlist-screening-individual-review-create-request.js";
import {
  watchlistScreeningIndividualReviewCreateResponseSchema,
  type WatchlistScreeningIndividualReviewCreateResponse,
} from "./models/watchlist-screening-individual-review-create-response.js";
import {
  watchlistScreeningIndividualReviewListRequestSchema,
  type WatchlistScreeningIndividualReviewListRequest,
} from "./models/watchlist-screening-individual-review-list-request.js";
import {
  watchlistScreeningIndividualReviewListResponseSchema,
  type WatchlistScreeningIndividualReviewListResponse,
} from "./models/watchlist-screening-individual-review-list-response.js";
import {
  watchlistScreeningIndividualUpdateRequestSchema,
  type WatchlistScreeningIndividualUpdateRequest,
} from "./models/watchlist-screening-individual-update-request.js";
import {
  watchlistScreeningIndividualUpdateResponseSchema,
  type WatchlistScreeningIndividualUpdateResponse,
} from "./models/watchlist-screening-individual-update-response.js";
import {
  webhookVerificationKeyGetRequestSchema,
  type WebhookVerificationKeyGetRequest,
} from "./models/webhook-verification-key-get-request.js";
import {
  webhookVerificationKeyGetResponseSchema,
  type WebhookVerificationKeyGetResponse,
} from "./models/webhook-verification-key-get-response.js";
import { buildServers, type Servers } from "./servers.js";

export class ThePlaidApiClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(clientOptions: Partial<ClientOptions> = {}) {
    const options = { ...DEFAULT_CLIENT_OPTIONS, ...clientOptions };

    this.#rawClient = new RawClient({
      timeout: options.timeout,
      defaultHeaders: [],
      defaultQuery: [],
      defaultPathParams: [],
      fetch: options.fetch,
    });

    this.#servers = buildServers(options.serverEnvironment, options.serverOptions);

    this.#auth = buildAuthSchemes(options, this.#servers, this.#rawClient);
  }

  accountsBalanceGet(
    request: ThePlaidApiClient.AccountsBalanceGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<AccountsGetResponse, ThePlaidApiClient.AccountsBalanceGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/accounts/balance/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: accountsBalanceGetRequestSchema },
      },
      {
        success: { kind: "json", schema: accountsGetResponseSchema },
        errorFactory: ThePlaidApiClient.AccountsBalanceGetError,
      },
      options,
    );
  }

  accountsGet(
    request: ThePlaidApiClient.AccountsGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<AccountsGetResponse, ThePlaidApiClient.AccountsGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/accounts/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: accountsGetRequestSchema },
      },
      {
        success: { kind: "json", schema: accountsGetResponseSchema },
        errorFactory: ThePlaidApiClient.AccountsGetError,
      },
      options,
    );
  }

  applicationGet(
    request: ThePlaidApiClient.ApplicationGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ApplicationGetResponse, ThePlaidApiClient.ApplicationGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/application/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: applicationGetRequestSchema },
      },
      {
        success: { kind: "json", schema: applicationGetResponseSchema },
        errorFactory: ThePlaidApiClient.ApplicationGetError,
      },
      options,
    );
  }

  assetReportAuditCopyCreate(
    request: ThePlaidApiClient.AssetReportAuditCopyCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<AssetReportAuditCopyCreateResponse, ThePlaidApiClient.AssetReportAuditCopyCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/asset_report/audit_copy/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: assetReportAuditCopyCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: assetReportAuditCopyCreateResponseSchema },
        errorFactory: ThePlaidApiClient.AssetReportAuditCopyCreateError,
      },
      options,
    );
  }

  assetReportAuditCopyGet(
    request: ThePlaidApiClient.AssetReportAuditCopyGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<AssetReportGetResponse, ThePlaidApiClient.AssetReportAuditCopyGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/asset_report/audit_copy/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: assetReportAuditCopyGetRequestSchema },
      },
      {
        success: { kind: "json", schema: assetReportGetResponseSchema },
        errorFactory: ThePlaidApiClient.AssetReportAuditCopyGetError,
      },
      options,
    );
  }

  assetReportAuditCopyPdfGet(
    request: ThePlaidApiClient.AssetReportAuditCopyPdfGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, ThePlaidApiClient.AssetReportAuditCopyPdfGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/asset_report/audit_copy/pdf/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: assetReportAuditCopyPdfGetRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: ThePlaidApiClient.AssetReportAuditCopyPdfGetError,
      },
      options,
    );
  }

  assetReportAuditCopyRemove(
    request: ThePlaidApiClient.AssetReportAuditCopyRemoveRequestParams,
    options?: RequestOptions,
  ): ApiPromise<AssetReportAuditCopyRemoveResponse, ThePlaidApiClient.AssetReportAuditCopyRemoveError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/asset_report/audit_copy/remove"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: assetReportAuditCopyRemoveRequestSchema },
      },
      {
        success: { kind: "json", schema: assetReportAuditCopyRemoveResponseSchema },
        errorFactory: ThePlaidApiClient.AssetReportAuditCopyRemoveError,
      },
      options,
    );
  }

  assetReportCreate(
    request: ThePlaidApiClient.AssetReportCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<AssetReportCreateResponse, ThePlaidApiClient.AssetReportCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/asset_report/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: assetReportCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: assetReportCreateResponseSchema },
        errorFactory: ThePlaidApiClient.AssetReportCreateError,
      },
      options,
    );
  }

  assetReportFilter(
    request: ThePlaidApiClient.AssetReportFilterRequestParams,
    options?: RequestOptions,
  ): ApiPromise<AssetReportFilterResponse, ThePlaidApiClient.AssetReportFilterError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/asset_report/filter"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: assetReportFilterRequestSchema },
      },
      {
        success: { kind: "json", schema: assetReportFilterResponseSchema },
        errorFactory: ThePlaidApiClient.AssetReportFilterError,
      },
      options,
    );
  }

  assetReportGet(
    request: ThePlaidApiClient.AssetReportGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<AssetReportGetResponse, ThePlaidApiClient.AssetReportGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/asset_report/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: assetReportGetRequestSchema },
      },
      {
        success: { kind: "json", schema: assetReportGetResponseSchema },
        errorFactory: ThePlaidApiClient.AssetReportGetError,
      },
      options,
    );
  }

  assetReportPdfGet(
    request: ThePlaidApiClient.AssetReportPdfGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, ThePlaidApiClient.AssetReportPdfGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/asset_report/pdf/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: assetReportPdfGetRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: ThePlaidApiClient.AssetReportPdfGetError,
      },
      options,
    );
  }

  assetReportRefresh(
    request: ThePlaidApiClient.AssetReportRefreshRequestParams,
    options?: RequestOptions,
  ): ApiPromise<AssetReportRefreshResponse, ThePlaidApiClient.AssetReportRefreshError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/asset_report/refresh"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: assetReportRefreshRequestSchema },
      },
      {
        success: { kind: "json", schema: assetReportRefreshResponseSchema },
        errorFactory: ThePlaidApiClient.AssetReportRefreshError,
      },
      options,
    );
  }

  assetReportRemove(
    request: ThePlaidApiClient.AssetReportRemoveRequestParams,
    options?: RequestOptions,
  ): ApiPromise<AssetReportRemoveResponse, ThePlaidApiClient.AssetReportRemoveError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/asset_report/remove"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: assetReportRemoveRequestSchema },
      },
      {
        success: { kind: "json", schema: assetReportRemoveResponseSchema },
        errorFactory: ThePlaidApiClient.AssetReportRemoveError,
      },
      options,
    );
  }

  authGet(
    request: ThePlaidApiClient.AuthGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<AuthGetResponse, ThePlaidApiClient.AuthGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/auth/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: authGetRequestSchema },
      },
      {
        success: { kind: "json", schema: authGetResponseSchema },
        errorFactory: ThePlaidApiClient.AuthGetError,
      },
      options,
    );
  }

  authVerify(
    request: ThePlaidApiClient.AuthVerifyRequestParams,
    options?: RequestOptions,
  ): ApiPromise<AuthVerifyResponse, ThePlaidApiClient.AuthVerifyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/auth/verify"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: authVerifyRequestSchema },
      },
      {
        success: { kind: "json", schema: authVerifyResponseSchema },
        errorFactory: ThePlaidApiClient.AuthVerifyError,
      },
      options,
    );
  }

  bankTransferBalanceGet(
    request: ThePlaidApiClient.BankTransferBalanceGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BankTransferBalanceGetResponse, ThePlaidApiClient.BankTransferBalanceGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/bank_transfer/balance/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: bankTransferBalanceGetRequestSchema },
      },
      {
        success: { kind: "json", schema: bankTransferBalanceGetResponseSchema },
        errorFactory: ThePlaidApiClient.BankTransferBalanceGetError,
      },
      options,
    );
  }

  bankTransferCancel(
    request: ThePlaidApiClient.BankTransferCancelRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BankTransferCancelResponse, ThePlaidApiClient.BankTransferCancelError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/bank_transfer/cancel"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: bankTransferCancelRequestSchema },
      },
      {
        success: { kind: "json", schema: bankTransferCancelResponseSchema },
        errorFactory: ThePlaidApiClient.BankTransferCancelError,
      },
      options,
    );
  }

  bankTransferCreate(
    request: ThePlaidApiClient.BankTransferCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BankTransferCreateResponse, ThePlaidApiClient.BankTransferCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/bank_transfer/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: bankTransferCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: bankTransferCreateResponseSchema },
        errorFactory: ThePlaidApiClient.BankTransferCreateError,
      },
      options,
    );
  }

  bankTransferEventList(
    request: ThePlaidApiClient.BankTransferEventListRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BankTransferEventListResponse, ThePlaidApiClient.BankTransferEventListError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/bank_transfer/event/list"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: bankTransferEventListRequestSchema },
      },
      {
        success: { kind: "json", schema: bankTransferEventListResponseSchema },
        errorFactory: ThePlaidApiClient.BankTransferEventListError,
      },
      options,
    );
  }

  bankTransferEventSync(
    request: ThePlaidApiClient.BankTransferEventSyncRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BankTransferEventSyncResponse, ThePlaidApiClient.BankTransferEventSyncError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/bank_transfer/event/sync"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: bankTransferEventSyncRequestSchema },
      },
      {
        success: { kind: "json", schema: bankTransferEventSyncResponseSchema },
        errorFactory: ThePlaidApiClient.BankTransferEventSyncError,
      },
      options,
    );
  }

  bankTransferGet(
    request: ThePlaidApiClient.BankTransferGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BankTransferGetResponse, ThePlaidApiClient.BankTransferGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/bank_transfer/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: bankTransferGetRequestSchema },
      },
      {
        success: { kind: "json", schema: bankTransferGetResponseSchema },
        errorFactory: ThePlaidApiClient.BankTransferGetError,
      },
      options,
    );
  }

  bankTransferList(
    request: ThePlaidApiClient.BankTransferListRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BankTransferListResponse, ThePlaidApiClient.BankTransferListError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/bank_transfer/list"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: bankTransferListRequestSchema },
      },
      {
        success: { kind: "json", schema: bankTransferListResponseSchema },
        errorFactory: ThePlaidApiClient.BankTransferListError,
      },
      options,
    );
  }

  bankTransferMigrateAccount(
    request: ThePlaidApiClient.BankTransferMigrateAccountRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BankTransferMigrateAccountResponse, ThePlaidApiClient.BankTransferMigrateAccountError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/bank_transfer/migrate_account"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: bankTransferMigrateAccountRequestSchema },
      },
      {
        success: { kind: "json", schema: bankTransferMigrateAccountResponseSchema },
        errorFactory: ThePlaidApiClient.BankTransferMigrateAccountError,
      },
      options,
    );
  }

  bankTransferSweepGet(
    request: ThePlaidApiClient.BankTransferSweepGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BankTransferSweepGetResponse, ThePlaidApiClient.BankTransferSweepGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/bank_transfer/sweep/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: bankTransferSweepGetRequestSchema },
      },
      {
        success: { kind: "json", schema: bankTransferSweepGetResponseSchema },
        errorFactory: ThePlaidApiClient.BankTransferSweepGetError,
      },
      options,
    );
  }

  bankTransferSweepList(
    request: ThePlaidApiClient.BankTransferSweepListRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BankTransferSweepListResponse, ThePlaidApiClient.BankTransferSweepListError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/bank_transfer/sweep/list"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: bankTransferSweepListRequestSchema },
      },
      {
        success: { kind: "json", schema: bankTransferSweepListResponseSchema },
        errorFactory: ThePlaidApiClient.BankTransferSweepListError,
      },
      options,
    );
  }

  beaconAccountRiskEvaluate(
    request: ThePlaidApiClient.BeaconAccountRiskEvaluateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BeaconAccountRiskEvaluateResponse, ThePlaidApiClient.BeaconAccountRiskEvaluateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/beacon/account_risk/v1/evaluate"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: beaconAccountRiskEvaluateRequestSchema },
      },
      {
        success: { kind: "json", schema: beaconAccountRiskEvaluateResponseSchema },
        errorFactory: ThePlaidApiClient.BeaconAccountRiskEvaluateError,
      },
      options,
    );
  }

  beaconDuplicateGet(
    request: ThePlaidApiClient.BeaconDuplicateGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BeaconDuplicateGetResponse, ResponseError> {
    return this.#rawClient.execute<BeaconDuplicateGetResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/beacon/duplicate/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: beaconDuplicateGetRequestSchema },
      },
      {
        success: { kind: "json", schema: beaconDuplicateGetResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  beaconReportCreate(
    request: ThePlaidApiClient.BeaconReportCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BeaconReportCreateResponse, ResponseError> {
    return this.#rawClient.execute<BeaconReportCreateResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/beacon/report/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: beaconReportCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: beaconReportCreateResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  beaconReportGet(
    request: ThePlaidApiClient.BeaconReportGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BeaconReportGetResponse, ResponseError> {
    return this.#rawClient.execute<BeaconReportGetResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/beacon/report/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: beaconReportGetRequestSchema },
      },
      {
        success: { kind: "json", schema: beaconReportGetResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  beaconReportList(
    request: ThePlaidApiClient.BeaconReportListRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BeaconReportListResponse, ResponseError> {
    return this.#rawClient.execute<BeaconReportListResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/beacon/report/list"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: beaconReportListRequestSchema },
      },
      {
        success: { kind: "json", schema: beaconReportListResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  beaconReportSyndicationGet(
    request: ThePlaidApiClient.BeaconReportSyndicationGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BeaconReportSyndicationGetResponse, ResponseError> {
    return this.#rawClient.execute<BeaconReportSyndicationGetResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/beacon/report_syndication/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: beaconReportSyndicationGetRequestSchema },
      },
      {
        success: { kind: "json", schema: beaconReportSyndicationGetResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  beaconReportSyndicationList(
    request: ThePlaidApiClient.BeaconReportSyndicationListRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BeaconReportSyndicationListResponse, ResponseError> {
    return this.#rawClient.execute<BeaconReportSyndicationListResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/beacon/report_syndication/list"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: beaconReportSyndicationListRequestSchema },
      },
      {
        success: { kind: "json", schema: beaconReportSyndicationListResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  beaconUserAccountInsightsGet(
    request: ThePlaidApiClient.BeaconUserAccountInsightsGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BeaconUserAccountInsightsGetResponse, ResponseError> {
    return this.#rawClient.execute<BeaconUserAccountInsightsGetResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/beacon/user/account_insights/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: beaconUserAccountInsightsGetRequestSchema },
      },
      {
        success: { kind: "json", schema: beaconUserAccountInsightsGetResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  beaconUserCreate(
    request: ThePlaidApiClient.BeaconUserCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BeaconUserCreateResponse, ResponseError> {
    return this.#rawClient.execute<BeaconUserCreateResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/beacon/user/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: beaconUserCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: beaconUserCreateResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  beaconUserGet(
    request: ThePlaidApiClient.BeaconUserGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BeaconUserGetResponse, ResponseError> {
    return this.#rawClient.execute<BeaconUserGetResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/beacon/user/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: beaconUserGetRequestSchema },
      },
      {
        success: { kind: "json", schema: beaconUserGetResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  beaconUserHistoryList(
    request: ThePlaidApiClient.BeaconUserHistoryListRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BeaconUserHistoryListResponse, ResponseError> {
    return this.#rawClient.execute<BeaconUserHistoryListResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/beacon/user/history/list"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: beaconUserHistoryListRequestSchema },
      },
      {
        success: { kind: "json", schema: beaconUserHistoryListResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  beaconUserReview(
    request: ThePlaidApiClient.BeaconUserReviewRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BeaconUserGetResponse, ResponseError> {
    return this.#rawClient.execute<BeaconUserGetResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/beacon/user/review"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: beaconUserReviewRequestSchema },
      },
      {
        success: { kind: "json", schema: beaconUserGetResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  beaconUserUpdate(
    request: ThePlaidApiClient.BeaconUserUpdateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BeaconUserUpdateResponse, ResponseError> {
    return this.#rawClient.execute<BeaconUserUpdateResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/beacon/user/update"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: beaconUserUpdateRequestSchema },
      },
      {
        success: { kind: "json", schema: beaconUserUpdateResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  betaEwaReportV1Get(
    request: ThePlaidApiClient.BetaEwaReportV1GetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BetaEwaReportV1GetResponse, ThePlaidApiClient.BetaEwaReportV1GetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/beta/ewa_report/v1/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: betaEwaReportV1GetRequestSchema },
      },
      {
        success: { kind: "json", schema: betaEwaReportV1GetResponseSchema },
        errorFactory: ThePlaidApiClient.BetaEwaReportV1GetError,
      },
      options,
    );
  }

  betaPartnerCustomerV1Create(
    request: ThePlaidApiClient.BetaPartnerCustomerV1CreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BetaPartnerCustomerV1CreateResponse, ThePlaidApiClient.BetaPartnerCustomerV1CreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/beta/partner/customer/v1/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: betaPartnerCustomerV1CreateRequestSchema },
      },
      {
        success: { kind: "json", schema: betaPartnerCustomerV1CreateResponseSchema },
        errorFactory: ThePlaidApiClient.BetaPartnerCustomerV1CreateError,
      },
      options,
    );
  }

  betaPartnerCustomerV1Enable(
    request: ThePlaidApiClient.BetaPartnerCustomerV1EnableRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BetaPartnerCustomerV1EnableResponse, ThePlaidApiClient.BetaPartnerCustomerV1EnableError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/beta/partner/customer/v1/enable"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: betaPartnerCustomerV1EnableRequestSchema },
      },
      {
        success: { kind: "json", schema: betaPartnerCustomerV1EnableResponseSchema },
        errorFactory: ThePlaidApiClient.BetaPartnerCustomerV1EnableError,
      },
      options,
    );
  }

  betaPartnerCustomerV1Get(
    request: ThePlaidApiClient.BetaPartnerCustomerV1GetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BetaPartnerCustomerV1GetResponse, ThePlaidApiClient.BetaPartnerCustomerV1GetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/beta/partner/customer/v1/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: betaPartnerCustomerV1GetRequestSchema },
      },
      {
        success: { kind: "json", schema: betaPartnerCustomerV1GetResponseSchema },
        errorFactory: ThePlaidApiClient.BetaPartnerCustomerV1GetError,
      },
      options,
    );
  }

  betaPartnerCustomerV1Update(
    request: ThePlaidApiClient.BetaPartnerCustomerV1UpdateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BetaPartnerCustomerV1UpdateResponse, ThePlaidApiClient.BetaPartnerCustomerV1UpdateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/beta/partner/customer/v1/update"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: betaPartnerCustomerV1UpdateRequestSchema },
      },
      {
        success: { kind: "json", schema: betaPartnerCustomerV1UpdateResponseSchema },
        errorFactory: ThePlaidApiClient.BetaPartnerCustomerV1UpdateError,
      },
      options,
    );
  }

  businessVerificationCreate(
    request: ThePlaidApiClient.BusinessVerificationCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BusinessVerificationCreateResponse, ResponseError> {
    return this.#rawClient.execute<BusinessVerificationCreateResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/business_verification/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: businessVerificationCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: businessVerificationCreateResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  businessVerificationGet(
    request: ThePlaidApiClient.BusinessVerificationGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BusinessVerificationGetResponse, ResponseError> {
    return this.#rawClient.execute<BusinessVerificationGetResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/business_verification/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: businessVerificationGetRequestSchema },
      },
      {
        success: { kind: "json", schema: businessVerificationGetResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  cashflowReportGet(
    request: ThePlaidApiClient.CashflowReportGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CashflowReportGetResponse, ThePlaidApiClient.CashflowReportGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/cashflow_report/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: cashflowReportGetRequestSchema },
      },
      {
        success: { kind: "json", schema: cashflowReportGetResponseSchema },
        errorFactory: ThePlaidApiClient.CashflowReportGetError,
      },
      options,
    );
  }

  cashflowReportInsightsGet(
    request: ThePlaidApiClient.CashflowReportInsightsGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CashflowReportInsightsGetResponse, ThePlaidApiClient.CashflowReportInsightsGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/cashflow_report/insights/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: cashflowReportInsightsGetRequestSchema },
      },
      {
        success: { kind: "json", schema: cashflowReportInsightsGetResponseSchema },
        errorFactory: ThePlaidApiClient.CashflowReportInsightsGetError,
      },
      options,
    );
  }

  cashflowReportRefresh(
    request: ThePlaidApiClient.CashflowReportRefreshRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CashflowReportRefreshResponse, ThePlaidApiClient.CashflowReportRefreshError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/cashflow_report/refresh"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: cashflowReportRefreshRequestSchema },
      },
      {
        success: { kind: "json", schema: cashflowReportRefreshResponseSchema },
        errorFactory: ThePlaidApiClient.CashflowReportRefreshError,
      },
      options,
    );
  }

  cashflowReportTransactionsGet(
    request: ThePlaidApiClient.CashflowReportTransactionsGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CashflowReportTransactionsGetResponse, ThePlaidApiClient.CashflowReportTransactionsGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/cashflow_report/transactions/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: cashflowReportTransactionsGetRequestSchema },
      },
      {
        success: { kind: "json", schema: cashflowReportTransactionsGetResponseSchema },
        errorFactory: ThePlaidApiClient.CashflowReportTransactionsGetError,
      },
      options,
    );
  }

  categoriesGet(
    request: ThePlaidApiClient.CategoriesGetRequest,
    options?: RequestOptions,
  ): ApiPromise<CategoriesGetResponse, ThePlaidApiClient.CategoriesGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/categories/get"),
        auth: noneAuth,
        body: { kind: "json", value: request.body, schema: s.record(s.string(), s.unknown()) },
      },
      {
        success: { kind: "json", schema: categoriesGetResponseSchema },
        errorFactory: ThePlaidApiClient.CategoriesGetError,
      },
      options,
    );
  }

  consentEventsGet(
    request: ThePlaidApiClient.ConsentEventsGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ConsentEventsGetResponse, ThePlaidApiClient.ConsentEventsGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/consent/events/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: consentEventsGetRequestSchema },
      },
      {
        success: { kind: "json", schema: consentEventsGetResponseSchema },
        errorFactory: ThePlaidApiClient.ConsentEventsGetError,
      },
      options,
    );
  }

  consumerReportPdfGet(
    request: ThePlaidApiClient.ConsumerReportPdfGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, ThePlaidApiClient.ConsumerReportPdfGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/consumer_report/pdf/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: consumerReportPdfGetRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: ThePlaidApiClient.ConsumerReportPdfGetError,
      },
      options,
    );
  }

  craCheckReportBaseReportGet(
    request: ThePlaidApiClient.CraCheckReportBaseReportGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CraCheckReportBaseReportGetResponse, ThePlaidApiClient.CraCheckReportBaseReportGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/cra/check_report/base_report/get"),
        auth: anyAuth(
          allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
          this.#auth.oauth2,
        ),
        body: { kind: "json", value: request.body, schema: craCheckReportBaseReportGetRequestSchema },
      },
      {
        success: { kind: "json", schema: craCheckReportBaseReportGetResponseSchema },
        errorFactory: ThePlaidApiClient.CraCheckReportBaseReportGetError,
      },
      options,
    );
  }

  craCheckReportCashflowInsightsGet(
    request: ThePlaidApiClient.CraCheckReportCashflowInsightsGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<
    CraCheckReportCashflowInsightsGetResponse,
    ThePlaidApiClient.CraCheckReportCashflowInsightsGetError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/cra/check_report/cashflow_insights/get"),
        auth: anyAuth(
          allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
          this.#auth.oauth2,
        ),
        body: { kind: "json", value: request.body, schema: craCheckReportCashflowInsightsGetRequestSchema },
      },
      {
        success: { kind: "json", schema: craCheckReportCashflowInsightsGetResponseSchema },
        errorFactory: ThePlaidApiClient.CraCheckReportCashflowInsightsGetError,
      },
      options,
    );
  }

  craCheckReportCreate(
    request: ThePlaidApiClient.CraCheckReportCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CraCheckReportCreateResponse, ThePlaidApiClient.CraCheckReportCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/cra/check_report/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: craCheckReportCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: craCheckReportCreateResponseSchema },
        errorFactory: ThePlaidApiClient.CraCheckReportCreateError,
      },
      options,
    );
  }

  craCheckReportIncomeInsightsGet(
    request: ThePlaidApiClient.CraCheckReportIncomeInsightsGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<
    CraCheckReportIncomeInsightsGetResponse,
    ThePlaidApiClient.CraCheckReportIncomeInsightsGetError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/cra/check_report/income_insights/get"),
        auth: anyAuth(
          allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
          this.#auth.oauth2,
        ),
        body: { kind: "json", value: request.body, schema: craCheckReportIncomeInsightsGetRequestSchema },
      },
      {
        success: { kind: "json", schema: craCheckReportIncomeInsightsGetResponseSchema },
        errorFactory: ThePlaidApiClient.CraCheckReportIncomeInsightsGetError,
      },
      options,
    );
  }

  craCheckReportLendScoreGet(
    request: ThePlaidApiClient.CraCheckReportLendScoreGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CraCheckReportLendScoreGetResponse, ThePlaidApiClient.CraCheckReportLendScoreGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/cra/check_report/lend_score/get"),
        auth: anyAuth(
          allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
          this.#auth.oauth2,
        ),
        body: { kind: "json", value: request.body, schema: craCheckReportLendScoreGetRequestSchema },
      },
      {
        success: { kind: "json", schema: craCheckReportLendScoreGetResponseSchema },
        errorFactory: ThePlaidApiClient.CraCheckReportLendScoreGetError,
      },
      options,
    );
  }

  craCheckReportNetworkInsightsGet(
    request: ThePlaidApiClient.CraCheckReportNetworkInsightsGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<
    CraCheckReportNetworkInsightsGetResponse,
    ThePlaidApiClient.CraCheckReportNetworkInsightsGetError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/cra/check_report/network_insights/get"),
        auth: anyAuth(
          allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
          this.#auth.oauth2,
        ),
        body: { kind: "json", value: request.body, schema: craCheckReportNetworkInsightsGetRequestSchema },
      },
      {
        success: { kind: "json", schema: craCheckReportNetworkInsightsGetResponseSchema },
        errorFactory: ThePlaidApiClient.CraCheckReportNetworkInsightsGetError,
      },
      options,
    );
  }

  craCheckReportPartnerInsightsGet(
    request: ThePlaidApiClient.CraCheckReportPartnerInsightsGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<
    CraCheckReportPartnerInsightsGetResponse,
    ThePlaidApiClient.CraCheckReportPartnerInsightsGetError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/cra/check_report/partner_insights/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: craCheckReportPartnerInsightsGetRequestSchema },
      },
      {
        success: { kind: "json", schema: craCheckReportPartnerInsightsGetResponseSchema },
        errorFactory: ThePlaidApiClient.CraCheckReportPartnerInsightsGetError,
      },
      options,
    );
  }

  craCheckReportPdfGet(
    request: ThePlaidApiClient.CraCheckReportPdfGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, ThePlaidApiClient.CraCheckReportPdfGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/cra/check_report/pdf/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: craCheckReportPdfGetRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: ThePlaidApiClient.CraCheckReportPdfGetError,
      },
      options,
    );
  }

  craCheckReportVerificationGet(
    request: ThePlaidApiClient.CraCheckReportVerificationGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CraCheckReportVerificationGetResponse, ThePlaidApiClient.CraCheckReportVerificationGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/cra/check_report/verification/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: craCheckReportVerificationGetRequestSchema },
      },
      {
        success: { kind: "json", schema: craCheckReportVerificationGetResponseSchema },
        errorFactory: ThePlaidApiClient.CraCheckReportVerificationGetError,
      },
      options,
    );
  }

  craCheckReportVerificationPdfGet(
    request: ThePlaidApiClient.CraCheckReportVerificationPdfGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, ThePlaidApiClient.CraCheckReportVerificationPdfGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/cra/check_report/verification/pdf/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: craCheckReportVerificationPdfGetRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: ThePlaidApiClient.CraCheckReportVerificationPdfGetError,
      },
      options,
    );
  }

  craCreditProfileReportGet(
    request: ThePlaidApiClient.CraCreditProfileReportGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CraCreditProfileReportGetResponse, ThePlaidApiClient.CraCreditProfileReportGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/cra/credit_profile/report/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: craCreditProfileReportGetRequestSchema },
      },
      {
        success: { kind: "json", schema: craCreditProfileReportGetResponseSchema },
        errorFactory: ThePlaidApiClient.CraCreditProfileReportGetError,
      },
      options,
    );
  }

  craLoansApplicationsRegister(
    request: ThePlaidApiClient.CraLoansApplicationsRegisterRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CraLoansApplicationsRegisterResponse, ThePlaidApiClient.CraLoansApplicationsRegisterError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/cra/loans/applications/register"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: craLoansApplicationsRegisterRequestSchema },
      },
      {
        success: { kind: "json", schema: craLoansApplicationsRegisterResponseSchema },
        errorFactory: ThePlaidApiClient.CraLoansApplicationsRegisterError,
      },
      options,
    );
  }

  craLoansRegister(
    request: ThePlaidApiClient.CraLoansRegisterRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CraLoansRegisterResponse, ThePlaidApiClient.CraLoansRegisterError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/cra/loans/register"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: craLoansRegisterRequestSchema },
      },
      {
        success: { kind: "json", schema: craLoansRegisterResponseSchema },
        errorFactory: ThePlaidApiClient.CraLoansRegisterError,
      },
      options,
    );
  }

  craLoansUnregister(
    request: ThePlaidApiClient.CraLoansUnregisterRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CraLoanUnregisterResponse, ThePlaidApiClient.CraLoansUnregisterError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/cra/loans/unregister"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: craLoansUnregisterRequestSchema },
      },
      {
        success: { kind: "json", schema: craLoanUnregisterResponseSchema },
        errorFactory: ThePlaidApiClient.CraLoansUnregisterError,
      },
      options,
    );
  }

  craLoansUpdate(
    request: ThePlaidApiClient.CraLoansUpdateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CraLoansUpdateResponse, ThePlaidApiClient.CraLoansUpdateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/cra/loans/update"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: craLoansUpdateRequestSchema },
      },
      {
        success: { kind: "json", schema: craLoansUpdateResponseSchema },
        errorFactory: ThePlaidApiClient.CraLoansUpdateError,
      },
      options,
    );
  }

  craMonitoringInsightsGet(
    request: ThePlaidApiClient.CraMonitoringInsightsGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CraMonitoringInsightsGetResponse, ThePlaidApiClient.CraMonitoringInsightsGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/cra/monitoring_insights/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: craMonitoringInsightsGetRequestSchema },
      },
      {
        success: { kind: "json", schema: craMonitoringInsightsGetResponseSchema },
        errorFactory: ThePlaidApiClient.CraMonitoringInsightsGetError,
      },
      options,
    );
  }

  craMonitoringInsightsSubscribe(
    request: ThePlaidApiClient.CraMonitoringInsightsSubscribeRequestParams,
    options?: RequestOptions,
  ): ApiPromise<
    CraMonitoringInsightsSubscribeResponse,
    ThePlaidApiClient.CraMonitoringInsightsSubscribeError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/cra/monitoring_insights/subscribe"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: craMonitoringInsightsSubscribeRequestSchema },
      },
      {
        success: { kind: "json", schema: craMonitoringInsightsSubscribeResponseSchema },
        errorFactory: ThePlaidApiClient.CraMonitoringInsightsSubscribeError,
      },
      options,
    );
  }

  craMonitoringInsightsUnsubscribe(
    request: ThePlaidApiClient.CraMonitoringInsightsUnsubscribeRequestParams,
    options?: RequestOptions,
  ): ApiPromise<
    CraMonitoringInsightsUnsubscribeResponse,
    ThePlaidApiClient.CraMonitoringInsightsUnsubscribeError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/cra/monitoring_insights/unsubscribe"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: craMonitoringInsightsUnsubscribeRequestSchema },
      },
      {
        success: { kind: "json", schema: craMonitoringInsightsUnsubscribeResponseSchema },
        errorFactory: ThePlaidApiClient.CraMonitoringInsightsUnsubscribeError,
      },
      options,
    );
  }

  craPartnerInsightsGet(
    request: ThePlaidApiClient.CraPartnerInsightsGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CraPartnerInsightsGetResponse, ThePlaidApiClient.CraPartnerInsightsGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/cra/partner_insights/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: craPartnerInsightsGetRequestSchema },
      },
      {
        success: { kind: "json", schema: craPartnerInsightsGetResponseSchema },
        errorFactory: ThePlaidApiClient.CraPartnerInsightsGetError,
      },
      options,
    );
  }

  craReportGet(
    request: ThePlaidApiClient.CraReportGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CraReportGetResponse, ThePlaidApiClient.CraReportGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/cra/report/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: craReportGetRequestSchema },
      },
      {
        success: { kind: "json", schema: craReportGetResponseSchema },
        errorFactory: ThePlaidApiClient.CraReportGetError,
      },
      options,
    );
  }

  createPaymentToken(
    request: ThePlaidApiClient.CreatePaymentTokenRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentInitiationPaymentTokenCreateResponse, ThePlaidApiClient.CreatePaymentTokenError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/payment_initiation/payment/token/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: paymentInitiationPaymentTokenCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: paymentInitiationPaymentTokenCreateResponseSchema },
        errorFactory: ThePlaidApiClient.CreatePaymentTokenError,
      },
      options,
    );
  }

  creditAssetReportFreddieMacGet(
    request: ThePlaidApiClient.CreditAssetReportFreddieMacGetRequest,
    options?: RequestOptions,
  ): ApiPromise<AssetReportFreddieGetResponse, ThePlaidApiClient.CreditAssetReportFreddieMacGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/credit/asset_report/freddie_mac/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: assetReportFreddieGetRequestSchema },
      },
      {
        success: { kind: "json", schema: assetReportFreddieGetResponseSchema },
        errorFactory: ThePlaidApiClient.CreditAssetReportFreddieMacGetError,
      },
      options,
    );
  }

  creditAuditCopyTokenCreate(
    request: ThePlaidApiClient.CreditAuditCopyTokenCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreditAuditCopyTokenCreateResponse, ThePlaidApiClient.CreditAuditCopyTokenCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/credit/audit_copy_token/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: creditAuditCopyTokenCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: creditAuditCopyTokenCreateResponseSchema },
        errorFactory: ThePlaidApiClient.CreditAuditCopyTokenCreateError,
      },
      options,
    );
  }

  creditAuditCopyTokenUpdate(
    request: ThePlaidApiClient.CreditAuditCopyTokenUpdateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreditAuditCopyTokenUpdateResponse, ThePlaidApiClient.CreditAuditCopyTokenUpdateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/credit/audit_copy_token/update"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: creditAuditCopyTokenUpdateRequestSchema },
      },
      {
        success: { kind: "json", schema: creditAuditCopyTokenUpdateResponseSchema },
        errorFactory: ThePlaidApiClient.CreditAuditCopyTokenUpdateError,
      },
      options,
    );
  }

  creditBankEmploymentGet(
    request: ThePlaidApiClient.CreditBankEmploymentGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreditBankEmploymentGetResponse, ThePlaidApiClient.CreditBankEmploymentGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/beta/credit/v1/bank_employment/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: creditBankEmploymentGetRequestSchema },
      },
      {
        success: { kind: "json", schema: creditBankEmploymentGetResponseSchema },
        errorFactory: ThePlaidApiClient.CreditBankEmploymentGetError,
      },
      options,
    );
  }

  creditBankIncomeGet(
    request: ThePlaidApiClient.CreditBankIncomeGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreditBankIncomeGetResponse, ThePlaidApiClient.CreditBankIncomeGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/credit/bank_income/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: creditBankIncomeGetRequestSchema },
      },
      {
        success: { kind: "json", schema: creditBankIncomeGetResponseSchema },
        errorFactory: ThePlaidApiClient.CreditBankIncomeGetError,
      },
      options,
    );
  }

  creditBankIncomePdfGet(
    request: ThePlaidApiClient.CreditBankIncomePdfGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, ThePlaidApiClient.CreditBankIncomePdfGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/credit/bank_income/pdf/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: creditBankIncomePdfGetRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: ThePlaidApiClient.CreditBankIncomePdfGetError,
      },
      options,
    );
  }

  creditBankIncomeRefresh(
    request: ThePlaidApiClient.CreditBankIncomeRefreshRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreditBankIncomeRefreshResponse, ThePlaidApiClient.CreditBankIncomeRefreshError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/credit/bank_income/refresh"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: creditBankIncomeRefreshRequestSchema },
      },
      {
        success: { kind: "json", schema: creditBankIncomeRefreshResponseSchema },
        errorFactory: ThePlaidApiClient.CreditBankIncomeRefreshError,
      },
      options,
    );
  }

  creditBankIncomeWebhookUpdate(
    request: ThePlaidApiClient.CreditBankIncomeWebhookUpdateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreditBankIncomeWebhookUpdateResponse, ThePlaidApiClient.CreditBankIncomeWebhookUpdateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/credit/bank_income/webhook/update"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: creditBankIncomeWebhookUpdateRequestSchema },
      },
      {
        success: { kind: "json", schema: creditBankIncomeWebhookUpdateResponseSchema },
        errorFactory: ThePlaidApiClient.CreditBankIncomeWebhookUpdateError,
      },
      options,
    );
  }

  creditBankStatementsUploadsGet(
    request: ThePlaidApiClient.CreditBankStatementsUploadsGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<
    CreditBankStatementsUploadsGetResponse,
    ThePlaidApiClient.CreditBankStatementsUploadsGetError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/credit/bank_statements/uploads/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: creditBankStatementsUploadsGetRequestSchema },
      },
      {
        success: { kind: "json", schema: creditBankStatementsUploadsGetResponseSchema },
        errorFactory: ThePlaidApiClient.CreditBankStatementsUploadsGetError,
      },
      options,
    );
  }

  creditEmploymentGet(
    request: ThePlaidApiClient.CreditEmploymentGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreditEmploymentGetResponse, ThePlaidApiClient.CreditEmploymentGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/credit/employment/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: creditEmploymentGetRequestSchema },
      },
      {
        success: { kind: "json", schema: creditEmploymentGetResponseSchema },
        errorFactory: ThePlaidApiClient.CreditEmploymentGetError,
      },
      options,
    );
  }

  creditFreddieMacReportsGet(
    request: ThePlaidApiClient.CreditFreddieMacReportsGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreditFreddieMacReportsGetResponse, ThePlaidApiClient.CreditFreddieMacReportsGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/credit/freddie_mac/reports/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: creditFreddieMacReportsGetRequestSchema },
      },
      {
        success: { kind: "json", schema: creditFreddieMacReportsGetResponseSchema },
        errorFactory: ThePlaidApiClient.CreditFreddieMacReportsGetError,
      },
      options,
    );
  }

  creditPayrollIncomeGet(
    request: ThePlaidApiClient.CreditPayrollIncomeGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreditPayrollIncomeGetResponse, ThePlaidApiClient.CreditPayrollIncomeGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/credit/payroll_income/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: creditPayrollIncomeGetRequestSchema },
      },
      {
        success: { kind: "json", schema: creditPayrollIncomeGetResponseSchema },
        errorFactory: ThePlaidApiClient.CreditPayrollIncomeGetError,
      },
      options,
    );
  }

  creditPayrollIncomeParsingConfigUpdate(
    request: ThePlaidApiClient.CreditPayrollIncomeParsingConfigUpdateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<
    CreditPayrollIncomeParsingConfigUpdateResponse,
    ThePlaidApiClient.CreditPayrollIncomeParsingConfigUpdateError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/credit/payroll_income/parsing_config/update"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: {
          kind: "json",
          value: request.body,
          schema: creditPayrollIncomeParsingConfigUpdateRequestSchema,
        },
      },
      {
        success: { kind: "json", schema: creditPayrollIncomeParsingConfigUpdateResponseSchema },
        errorFactory: ThePlaidApiClient.CreditPayrollIncomeParsingConfigUpdateError,
      },
      options,
    );
  }

  creditPayrollIncomePrecheck(
    request: ThePlaidApiClient.CreditPayrollIncomePrecheckRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreditPayrollIncomePrecheckResponse, ThePlaidApiClient.CreditPayrollIncomePrecheckError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/credit/payroll_income/precheck"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: creditPayrollIncomePrecheckRequestSchema },
      },
      {
        success: { kind: "json", schema: creditPayrollIncomePrecheckResponseSchema },
        errorFactory: ThePlaidApiClient.CreditPayrollIncomePrecheckError,
      },
      options,
    );
  }

  creditPayrollIncomeRefresh(
    request: ThePlaidApiClient.CreditPayrollIncomeRefreshRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreditPayrollIncomeRefreshResponse, ThePlaidApiClient.CreditPayrollIncomeRefreshError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/credit/payroll_income/refresh"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: creditPayrollIncomeRefreshRequestSchema },
      },
      {
        success: { kind: "json", schema: creditPayrollIncomeRefreshResponseSchema },
        errorFactory: ThePlaidApiClient.CreditPayrollIncomeRefreshError,
      },
      options,
    );
  }

  creditPayrollIncomeRiskSignalsGet(
    request: ThePlaidApiClient.CreditPayrollIncomeRiskSignalsGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<
    CreditPayrollIncomeRiskSignalsGetResponse,
    ThePlaidApiClient.CreditPayrollIncomeRiskSignalsGetError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/credit/payroll_income/risk_signals/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: creditPayrollIncomeRiskSignalsGetRequestSchema },
      },
      {
        success: { kind: "json", schema: creditPayrollIncomeRiskSignalsGetResponseSchema },
        errorFactory: ThePlaidApiClient.CreditPayrollIncomeRiskSignalsGetError,
      },
      options,
    );
  }

  creditRelayCreate(
    request: ThePlaidApiClient.CreditRelayCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreditRelayCreateResponse, ThePlaidApiClient.CreditRelayCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/credit/relay/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: creditRelayCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: creditRelayCreateResponseSchema },
        errorFactory: ThePlaidApiClient.CreditRelayCreateError,
      },
      options,
    );
  }

  creditRelayGet(
    request: ThePlaidApiClient.CreditRelayGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<AssetReportGetResponse, ThePlaidApiClient.CreditRelayGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/credit/relay/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: creditRelayGetRequestSchema },
      },
      {
        success: { kind: "json", schema: assetReportGetResponseSchema },
        errorFactory: ThePlaidApiClient.CreditRelayGetError,
      },
      options,
    );
  }

  creditRelayPdfGet(
    request: ThePlaidApiClient.CreditRelayPdfGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, ThePlaidApiClient.CreditRelayPdfGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/credit/relay/pdf/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: creditRelayPdfGetRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: ThePlaidApiClient.CreditRelayPdfGetError,
      },
      options,
    );
  }

  creditRelayRefresh(
    request: ThePlaidApiClient.CreditRelayRefreshRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreditRelayRefreshResponse, ThePlaidApiClient.CreditRelayRefreshError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/credit/relay/refresh"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: creditRelayRefreshRequestSchema },
      },
      {
        success: { kind: "json", schema: creditRelayRefreshResponseSchema },
        errorFactory: ThePlaidApiClient.CreditRelayRefreshError,
      },
      options,
    );
  }

  creditRelayRemove(
    request: ThePlaidApiClient.CreditRelayRemoveRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreditRelayRemoveResponse, ThePlaidApiClient.CreditRelayRemoveError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/credit/relay/remove"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: creditRelayRemoveRequestSchema },
      },
      {
        success: { kind: "json", schema: creditRelayRemoveResponseSchema },
        errorFactory: ThePlaidApiClient.CreditRelayRemoveError,
      },
      options,
    );
  }

  creditReportAuditCopyRemove(
    request: ThePlaidApiClient.CreditReportAuditCopyRemoveRequest,
    options?: RequestOptions,
  ): ApiPromise<CreditAuditCopyTokenRemoveResponse, ThePlaidApiClient.CreditReportAuditCopyRemoveError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/credit/audit_copy_token/remove"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: creditAuditCopyTokenRemoveRequestSchema },
      },
      {
        success: { kind: "json", schema: creditAuditCopyTokenRemoveResponseSchema },
        errorFactory: ThePlaidApiClient.CreditReportAuditCopyRemoveError,
      },
      options,
    );
  }

  creditSessionsGet(
    request: ThePlaidApiClient.CreditSessionsGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreditSessionsGetResponse, ThePlaidApiClient.CreditSessionsGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/credit/sessions/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: creditSessionsGetRequestSchema },
      },
      {
        success: { kind: "json", schema: creditSessionsGetResponseSchema },
        errorFactory: ThePlaidApiClient.CreditSessionsGetError,
      },
      options,
    );
  }

  dashboardUserGet(
    request: ThePlaidApiClient.DashboardUserGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<DashboardUserGetResponse, ResponseError> {
    return this.#rawClient.execute<DashboardUserGetResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/dashboard_user/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: dashboardUserGetRequestSchema },
      },
      {
        success: { kind: "json", schema: dashboardUserGetResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  dashboardUserList(
    request: ThePlaidApiClient.DashboardUserListRequestParams,
    options?: RequestOptions,
  ): ApiPromise<DashboardUserListResponse, ResponseError> {
    return this.#rawClient.execute<DashboardUserListResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/dashboard_user/list"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: dashboardUserListRequestSchema },
      },
      {
        success: { kind: "json", schema: dashboardUserListResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  employersSearch(
    request: ThePlaidApiClient.EmployersSearchRequestParams,
    options?: RequestOptions,
  ): ApiPromise<EmployersSearchResponse, ThePlaidApiClient.EmployersSearchError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/employers/search"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: employersSearchRequestSchema },
      },
      {
        success: { kind: "json", schema: employersSearchResponseSchema },
        errorFactory: ThePlaidApiClient.EmployersSearchError,
      },
      options,
    );
  }

  employmentVerificationGet(
    request: ThePlaidApiClient.EmploymentVerificationGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<EmploymentVerificationGetResponse, ThePlaidApiClient.EmploymentVerificationGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/employment/verification/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: employmentVerificationGetRequestSchema },
      },
      {
        success: { kind: "json", schema: employmentVerificationGetResponseSchema },
        errorFactory: ThePlaidApiClient.EmploymentVerificationGetError,
      },
      options,
    );
  }

  fdxConsentsGet(
    request: ThePlaidApiClient.FdxConsentsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<FdxConsentGrant, ThePlaidApiClient.FdxConsentsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/fdx/consents/{consentId}"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [{ name: "consentId", value: request.consentId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: fdxConsentGrantSchema },
        errorFactory: ThePlaidApiClient.FdxConsentsGetError,
      },
      options,
    );
  }

  fdxConsentsList(
    request: ThePlaidApiClient.FdxConsentsListRequest,
    options?: RequestOptions,
  ): ApiPromise<GetConsentsResponse, ThePlaidApiClient.FdxConsentsListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/fdx/consents"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        query: [
          { name: "customerId", value: request.customerId, schema: s.string() },
          {
            name: "status",
            value: request.status,
            schema: s.optional(s.lazy(() => fdxConsentGrantStatusSchema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getConsentsResponseSchema },
        errorFactory: ThePlaidApiClient.FdxConsentsListError,
      },
      options,
    );
  }

  fdxConsentsRevocationGet(
    request: ThePlaidApiClient.FdxConsentsRevocationGetRequest,
    options?: RequestOptions,
  ): ApiPromise<FdxConsentRevocations, ThePlaidApiClient.FdxConsentsRevocationGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/fdx/consents/{consentId}/revocation"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [{ name: "consentId", value: request.consentId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: fdxConsentRevocationsSchema },
        errorFactory: ThePlaidApiClient.FdxConsentsRevocationGetError,
      },
      options,
    );
  }

  fdxConsentsRevoke(
    request: ThePlaidApiClient.FdxConsentsRevokeRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ThePlaidApiClient.FdxConsentsRevokeError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.default("/fdx/consents/{consentId}/revocation"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [{ name: "consentId", value: request.consentId, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: fdxConsentRevocationSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: ThePlaidApiClient.FdxConsentsRevokeError,
      },
      options,
    );
  }

  fdxNotifications(
    request: ThePlaidApiClient.FdxNotificationsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ThePlaidApiClient.FdxNotificationsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/fdx/notifications"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: fdxNotificationEntitySchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: ThePlaidApiClient.FdxNotificationsError,
      },
      options,
    );
  }

  getRecipient(
    request: ThePlaidApiClient.GetRecipientRequest,
    options?: RequestOptions,
  ): ApiPromise<FdxRecipientMetadata, ThePlaidApiClient.GetRecipientError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/fdx/recipient/{recipientId}"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [{ name: "recipientId", value: request.recipientId, schema: s.string() }],
        headers: [{ name: "OAUTH-STATE-ID", value: request.oauthStateId, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: fdxRecipientMetadataSchema },
        errorFactory: ThePlaidApiClient.GetRecipientError,
      },
      options,
    );
  }

  getRecipients(
    options?: RequestOptions,
  ): ApiPromise<GetRecipientsResponse, ThePlaidApiClient.GetRecipientsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/fdx/recipients"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getRecipientsResponseSchema },
        errorFactory: ThePlaidApiClient.GetRecipientsError,
      },
      options,
    );
  }

  identityDocumentsUploadsGet(
    request: ThePlaidApiClient.IdentityDocumentsUploadsGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<IdentityDocumentsUploadsGetResponse, ThePlaidApiClient.IdentityDocumentsUploadsGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/identity/documents/uploads/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: identityDocumentsUploadsGetRequestSchema },
      },
      {
        success: { kind: "json", schema: identityDocumentsUploadsGetResponseSchema },
        errorFactory: ThePlaidApiClient.IdentityDocumentsUploadsGetError,
      },
      options,
    );
  }

  identityGet(
    request: ThePlaidApiClient.IdentityGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<IdentityGetResponse, ThePlaidApiClient.IdentityGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/identity/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: identityGetRequestSchema },
      },
      {
        success: { kind: "json", schema: identityGetResponseSchema },
        errorFactory: ThePlaidApiClient.IdentityGetError,
      },
      options,
    );
  }

  identityMatch(
    request: ThePlaidApiClient.IdentityMatchRequestParams,
    options?: RequestOptions,
  ): ApiPromise<IdentityMatchResponse, ThePlaidApiClient.IdentityMatchError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/identity/match"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: identityMatchRequestSchema },
      },
      {
        success: { kind: "json", schema: identityMatchResponseSchema },
        errorFactory: ThePlaidApiClient.IdentityMatchError,
      },
      options,
    );
  }

  identityRefresh(
    request: ThePlaidApiClient.IdentityRefreshRequestParams,
    options?: RequestOptions,
  ): ApiPromise<IdentityRefreshResponse, ThePlaidApiClient.IdentityRefreshError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/identity/refresh"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: identityRefreshRequestSchema },
      },
      {
        success: { kind: "json", schema: identityRefreshResponseSchema },
        errorFactory: ThePlaidApiClient.IdentityRefreshError,
      },
      options,
    );
  }

  identityVerificationAutofillCreate(
    request: ThePlaidApiClient.IdentityVerificationAutofillCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<IdentityVerificationAutofillCreateResponse, ResponseError> {
    return this.#rawClient.execute<IdentityVerificationAutofillCreateResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/identity_verification/autofill/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: identityVerificationAutofillCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: identityVerificationAutofillCreateResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  identityVerificationCreate(
    request: ThePlaidApiClient.IdentityVerificationCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<IdentityVerificationCreateResponse, ResponseError> {
    return this.#rawClient.execute<IdentityVerificationCreateResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/identity_verification/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: identityVerificationCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: identityVerificationCreateResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  identityVerificationGet(
    request: ThePlaidApiClient.IdentityVerificationGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<IdentityVerificationGetResponse, ResponseError> {
    return this.#rawClient.execute<IdentityVerificationGetResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/identity_verification/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: identityVerificationGetRequestSchema },
      },
      {
        success: { kind: "json", schema: identityVerificationGetResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  identityVerificationList(
    request: ThePlaidApiClient.IdentityVerificationListRequestParams,
    options?: RequestOptions,
  ): ApiPromise<IdentityVerificationListResponse, ResponseError> {
    return this.#rawClient.execute<IdentityVerificationListResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/identity_verification/list"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: identityVerificationListRequestSchema },
      },
      {
        success: { kind: "json", schema: identityVerificationListResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  identityVerificationRetry(
    request: ThePlaidApiClient.IdentityVerificationRetryRequestParams,
    options?: RequestOptions,
  ): ApiPromise<IdentityVerificationRetryResponse, ResponseError> {
    return this.#rawClient.execute<IdentityVerificationRetryResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/identity_verification/retry"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: identityVerificationRetryRequestSchema },
      },
      {
        success: { kind: "json", schema: identityVerificationRetryResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  incomeVerificationCreate(
    request: ThePlaidApiClient.IncomeVerificationCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<IncomeVerificationCreateResponse, ThePlaidApiClient.IncomeVerificationCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/income/verification/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: incomeVerificationCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: incomeVerificationCreateResponseSchema },
        errorFactory: ThePlaidApiClient.IncomeVerificationCreateError,
      },
      options,
    );
  }

  incomeVerificationDocumentsDownload(
    request: ThePlaidApiClient.IncomeVerificationDocumentsDownloadRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, ThePlaidApiClient.IncomeVerificationDocumentsDownloadError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/income/verification/documents/download"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: incomeVerificationDocumentsDownloadRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: ThePlaidApiClient.IncomeVerificationDocumentsDownloadError,
      },
      options,
    );
  }

  incomeVerificationPaystubsGet(
    request: ThePlaidApiClient.IncomeVerificationPaystubsGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<IncomeVerificationPaystubsGetResponse, ThePlaidApiClient.IncomeVerificationPaystubsGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/income/verification/paystubs/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: incomeVerificationPaystubsGetRequestSchema },
      },
      {
        success: { kind: "json", schema: incomeVerificationPaystubsGetResponseSchema },
        errorFactory: ThePlaidApiClient.IncomeVerificationPaystubsGetError,
      },
      options,
    );
  }

  incomeVerificationPrecheck(
    request: ThePlaidApiClient.IncomeVerificationPrecheckRequestParams,
    options?: RequestOptions,
  ): ApiPromise<IncomeVerificationPrecheckResponse, ThePlaidApiClient.IncomeVerificationPrecheckError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/income/verification/precheck"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: incomeVerificationPrecheckRequestSchema },
      },
      {
        success: { kind: "json", schema: incomeVerificationPrecheckResponseSchema },
        errorFactory: ThePlaidApiClient.IncomeVerificationPrecheckError,
      },
      options,
    );
  }

  incomeVerificationTaxformsGet(
    request: ThePlaidApiClient.IncomeVerificationTaxformsGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<IncomeVerificationTaxformsGetResponse, ThePlaidApiClient.IncomeVerificationTaxformsGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/income/verification/taxforms/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: incomeVerificationTaxformsGetRequestSchema },
      },
      {
        success: { kind: "json", schema: incomeVerificationTaxformsGetResponseSchema },
        errorFactory: ThePlaidApiClient.IncomeVerificationTaxformsGetError,
      },
      options,
    );
  }

  institutionsGet(
    request: ThePlaidApiClient.InstitutionsGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<InstitutionsGetResponse, ThePlaidApiClient.InstitutionsGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/institutions/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: institutionsGetRequestSchema },
      },
      {
        success: { kind: "json", schema: institutionsGetResponseSchema },
        errorFactory: ThePlaidApiClient.InstitutionsGetError,
      },
      options,
    );
  }

  institutionsGetById(
    request: ThePlaidApiClient.InstitutionsGetByIdRequestParams,
    options?: RequestOptions,
  ): ApiPromise<InstitutionsGetByIdResponse, ThePlaidApiClient.InstitutionsGetByIdError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/institutions/get_by_id"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: institutionsGetByIdRequestSchema },
      },
      {
        success: { kind: "json", schema: institutionsGetByIdResponseSchema },
        errorFactory: ThePlaidApiClient.InstitutionsGetByIdError,
      },
      options,
    );
  }

  institutionsSearch(
    request: ThePlaidApiClient.InstitutionsSearchRequestParams,
    options?: RequestOptions,
  ): ApiPromise<InstitutionsSearchResponse, ThePlaidApiClient.InstitutionsSearchError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/institutions/search"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: institutionsSearchRequestSchema },
      },
      {
        success: { kind: "json", schema: institutionsSearchResponseSchema },
        errorFactory: ThePlaidApiClient.InstitutionsSearchError,
      },
      options,
    );
  }

  investmentsAuthGet(
    request: ThePlaidApiClient.InvestmentsAuthGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<InvestmentsAuthGetResponse, ThePlaidApiClient.InvestmentsAuthGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/investments/auth/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: investmentsAuthGetRequestSchema },
      },
      {
        success: { kind: "json", schema: investmentsAuthGetResponseSchema },
        errorFactory: ThePlaidApiClient.InvestmentsAuthGetError,
      },
      options,
    );
  }

  investmentsHoldingsGet(
    request: ThePlaidApiClient.InvestmentsHoldingsGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<InvestmentsHoldingsGetResponse, ThePlaidApiClient.InvestmentsHoldingsGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/investments/holdings/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: investmentsHoldingsGetRequestSchema },
      },
      {
        success: { kind: "json", schema: investmentsHoldingsGetResponseSchema },
        errorFactory: ThePlaidApiClient.InvestmentsHoldingsGetError,
      },
      options,
    );
  }

  investmentsRefresh(
    request: ThePlaidApiClient.InvestmentsRefreshRequestParams,
    options?: RequestOptions,
  ): ApiPromise<InvestmentsRefreshResponse, ThePlaidApiClient.InvestmentsRefreshError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/investments/refresh"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: investmentsRefreshRequestSchema },
      },
      {
        success: { kind: "json", schema: investmentsRefreshResponseSchema },
        errorFactory: ThePlaidApiClient.InvestmentsRefreshError,
      },
      options,
    );
  }

  investmentsTransactionsGet(
    request: ThePlaidApiClient.InvestmentsTransactionsGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<InvestmentsTransactionsGetResponse, ThePlaidApiClient.InvestmentsTransactionsGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/investments/transactions/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: investmentsTransactionsGetRequestSchema },
      },
      {
        success: { kind: "json", schema: investmentsTransactionsGetResponseSchema },
        errorFactory: ThePlaidApiClient.InvestmentsTransactionsGetError,
      },
      options,
    );
  }

  issuesGet(
    request: ThePlaidApiClient.IssuesGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<IssuesGetResponse, ThePlaidApiClient.IssuesGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/issues/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: issuesGetRequestSchema },
      },
      {
        success: { kind: "json", schema: issuesGetResponseSchema },
        errorFactory: ThePlaidApiClient.IssuesGetError,
      },
      options,
    );
  }

  issuesSearch(
    request: ThePlaidApiClient.IssuesSearchRequestParams,
    options?: RequestOptions,
  ): ApiPromise<IssuesSearchResponse, ThePlaidApiClient.IssuesSearchError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/issues/search"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: issuesSearchRequestSchema },
      },
      {
        success: { kind: "json", schema: issuesSearchResponseSchema },
        errorFactory: ThePlaidApiClient.IssuesSearchError,
      },
      options,
    );
  }

  issuesSubscribe(
    request: ThePlaidApiClient.IssuesSubscribeRequestParams,
    options?: RequestOptions,
  ): ApiPromise<IssuesSubscribeResponse, ThePlaidApiClient.IssuesSubscribeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/issues/subscribe"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: issuesSubscribeRequestSchema },
      },
      {
        success: { kind: "json", schema: issuesSubscribeResponseSchema },
        errorFactory: ThePlaidApiClient.IssuesSubscribeError,
      },
      options,
    );
  }

  itemAccessTokenInvalidate(
    request: ThePlaidApiClient.ItemAccessTokenInvalidateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ItemAccessTokenInvalidateResponse, ThePlaidApiClient.ItemAccessTokenInvalidateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/item/access_token/invalidate"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: itemAccessTokenInvalidateRequestSchema },
      },
      {
        success: { kind: "json", schema: itemAccessTokenInvalidateResponseSchema },
        errorFactory: ThePlaidApiClient.ItemAccessTokenInvalidateError,
      },
      options,
    );
  }

  itemActivityList(
    request: ThePlaidApiClient.ItemActivityListRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ItemActivityListResponse, ThePlaidApiClient.ItemActivityListError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/item/activity/list"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: itemActivityListRequestSchema },
      },
      {
        success: { kind: "json", schema: itemActivityListResponseSchema },
        errorFactory: ThePlaidApiClient.ItemActivityListError,
      },
      options,
    );
  }

  itemApplicationList(
    request: ThePlaidApiClient.ItemApplicationListRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ItemApplicationListResponse, ThePlaidApiClient.ItemApplicationListError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/item/application/list"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: itemApplicationListRequestSchema },
      },
      {
        success: { kind: "json", schema: itemApplicationListResponseSchema },
        errorFactory: ThePlaidApiClient.ItemApplicationListError,
      },
      options,
    );
  }

  itemApplicationScopesUpdate(
    request: ThePlaidApiClient.ItemApplicationScopesUpdateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ItemApplicationScopesUpdateResponse, ThePlaidApiClient.ItemApplicationScopesUpdateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/item/application/scopes/update"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: itemApplicationScopesUpdateRequestSchema },
      },
      {
        success: { kind: "json", schema: itemApplicationScopesUpdateResponseSchema },
        errorFactory: ThePlaidApiClient.ItemApplicationScopesUpdateError,
      },
      options,
    );
  }

  itemApplicationUnlink(
    request: ThePlaidApiClient.ItemApplicationUnlinkRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ItemApplicationUnlinkResponse, ThePlaidApiClient.ItemApplicationUnlinkError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/item/application/unlink"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: itemApplicationUnlinkRequestSchema },
      },
      {
        success: { kind: "json", schema: itemApplicationUnlinkResponseSchema },
        errorFactory: ThePlaidApiClient.ItemApplicationUnlinkError,
      },
      options,
    );
  }

  itemCreatePublicToken(
    request: ThePlaidApiClient.ItemCreatePublicTokenRequest,
    options?: RequestOptions,
  ): ApiPromise<ItemPublicTokenCreateResponse, ThePlaidApiClient.ItemCreatePublicTokenError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/item/public_token/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: itemPublicTokenCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: itemPublicTokenCreateResponseSchema },
        errorFactory: ThePlaidApiClient.ItemCreatePublicTokenError,
      },
      options,
    );
  }

  itemGet(
    request: ThePlaidApiClient.ItemGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ItemGetResponse, ThePlaidApiClient.ItemGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/item/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: itemGetRequestSchema },
      },
      {
        success: { kind: "json", schema: itemGetResponseSchema },
        errorFactory: ThePlaidApiClient.ItemGetError,
      },
      options,
    );
  }

  itemImport(
    request: ThePlaidApiClient.ItemImportRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ItemImportResponse, ThePlaidApiClient.ItemImportError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/item/import"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: itemImportRequestSchema },
      },
      {
        success: { kind: "json", schema: itemImportResponseSchema },
        errorFactory: ThePlaidApiClient.ItemImportError,
      },
      options,
    );
  }

  itemProductsTerminate(
    request: ThePlaidApiClient.ItemProductsTerminateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ItemProductsTerminateResponse, ThePlaidApiClient.ItemProductsTerminateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/item/products/terminate"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: itemProductsTerminateRequestSchema },
      },
      {
        success: { kind: "json", schema: itemProductsTerminateResponseSchema },
        errorFactory: ThePlaidApiClient.ItemProductsTerminateError,
      },
      options,
    );
  }

  itemPublicTokenExchange(
    request: ThePlaidApiClient.ItemPublicTokenExchangeRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ItemPublicTokenExchangeResponse, ThePlaidApiClient.ItemPublicTokenExchangeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/item/public_token/exchange"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: itemPublicTokenExchangeRequestSchema },
      },
      {
        success: { kind: "json", schema: itemPublicTokenExchangeResponseSchema },
        errorFactory: ThePlaidApiClient.ItemPublicTokenExchangeError,
      },
      options,
    );
  }

  itemRemove(
    request: ThePlaidApiClient.ItemRemoveRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ItemRemoveResponse, ThePlaidApiClient.ItemRemoveError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/item/remove"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: itemRemoveRequestSchema },
      },
      {
        success: { kind: "json", schema: itemRemoveResponseSchema },
        errorFactory: ThePlaidApiClient.ItemRemoveError,
      },
      options,
    );
  }

  itemWebhookUpdate(
    request: ThePlaidApiClient.ItemWebhookUpdateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ItemWebhookUpdateResponse, ThePlaidApiClient.ItemWebhookUpdateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/item/webhook/update"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: itemWebhookUpdateRequestSchema },
      },
      {
        success: { kind: "json", schema: itemWebhookUpdateResponseSchema },
        errorFactory: ThePlaidApiClient.ItemWebhookUpdateError,
      },
      options,
    );
  }

  liabilitiesGet(
    request: ThePlaidApiClient.LiabilitiesGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<LiabilitiesGetResponse, ThePlaidApiClient.LiabilitiesGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/liabilities/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: liabilitiesGetRequestSchema },
      },
      {
        success: { kind: "json", schema: liabilitiesGetResponseSchema },
        errorFactory: ThePlaidApiClient.LiabilitiesGetError,
      },
      options,
    );
  }

  linkDeliveryCreate(
    request: ThePlaidApiClient.LinkDeliveryCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<LinkDeliveryCreateResponse, ThePlaidApiClient.LinkDeliveryCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/link_delivery/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: linkDeliveryCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: linkDeliveryCreateResponseSchema },
        errorFactory: ThePlaidApiClient.LinkDeliveryCreateError,
      },
      options,
    );
  }

  linkDeliveryGet(
    request: ThePlaidApiClient.LinkDeliveryGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<LinkDeliveryGetResponse, ThePlaidApiClient.LinkDeliveryGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/link_delivery/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: linkDeliveryGetRequestSchema },
      },
      {
        success: { kind: "json", schema: linkDeliveryGetResponseSchema },
        errorFactory: ThePlaidApiClient.LinkDeliveryGetError,
      },
      options,
    );
  }

  linkOauthCorrelationIdExchange(
    request: ThePlaidApiClient.LinkOauthCorrelationIdExchangeRequest,
    options?: RequestOptions,
  ): ApiPromise<
    LinkOAuthCorrelationIdExchangeResponse,
    ThePlaidApiClient.LinkOauthCorrelationIdExchangeError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/link/oauth/correlation_id/exchange"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: linkOAuthCorrelationIdExchangeRequestSchema },
      },
      {
        success: { kind: "json", schema: linkOAuthCorrelationIdExchangeResponseSchema },
        errorFactory: ThePlaidApiClient.LinkOauthCorrelationIdExchangeError,
      },
      options,
    );
  }

  linkTokenCreate(
    request: ThePlaidApiClient.LinkTokenCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<LinkTokenCreateResponse, ThePlaidApiClient.LinkTokenCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/link/token/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: linkTokenCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: linkTokenCreateResponseSchema },
        errorFactory: ThePlaidApiClient.LinkTokenCreateError,
      },
      options,
    );
  }

  linkTokenGet(
    request: ThePlaidApiClient.LinkTokenGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<LinkTokenGetResponse, ThePlaidApiClient.LinkTokenGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/link/token/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: linkTokenGetRequestSchema },
      },
      {
        success: { kind: "json", schema: linkTokenGetResponseSchema },
        errorFactory: ThePlaidApiClient.LinkTokenGetError,
      },
      options,
    );
  }

  networkStatusGet(
    request: ThePlaidApiClient.NetworkStatusGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<NetworkStatusGetResponse, ThePlaidApiClient.NetworkStatusGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/network/status/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: networkStatusGetRequestSchema },
      },
      {
        success: { kind: "json", schema: networkStatusGetResponseSchema },
        errorFactory: ThePlaidApiClient.NetworkStatusGetError,
      },
      options,
    );
  }

  oauthIntrospect(
    request: ThePlaidApiClient.OauthIntrospectRequest,
    options?: RequestOptions,
  ): ApiPromise<OAuthIntrospectResponse, ThePlaidApiClient.OauthIntrospectError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/oauth/introspect"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: oAuthIntrospectRequestSchema },
      },
      {
        success: { kind: "json", schema: oAuthIntrospectResponseSchema },
        errorFactory: ThePlaidApiClient.OauthIntrospectError,
      },
      options,
    );
  }

  oauthRevoke(
    request: ThePlaidApiClient.OauthRevokeRequest,
    options?: RequestOptions,
  ): ApiPromise<OAuthRevokeResponse, ThePlaidApiClient.OauthRevokeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/oauth/revoke"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: oAuthRevokeRequestSchema },
      },
      {
        success: { kind: "json", schema: oAuthRevokeResponseSchema },
        errorFactory: ThePlaidApiClient.OauthRevokeError,
      },
      options,
    );
  }

  oauthToken(
    request: ThePlaidApiClient.OauthTokenRequest,
    options?: RequestOptions,
  ): ApiPromise<OAuthTokenResponse, ThePlaidApiClient.OauthTokenError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/oauth/token"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: oAuthTokenRequestSchema },
      },
      {
        success: { kind: "json", schema: oAuthTokenResponseSchema },
        errorFactory: ThePlaidApiClient.OauthTokenError,
      },
      options,
    );
  }

  partnerCustomerCreate(
    request: ThePlaidApiClient.PartnerCustomerCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<PartnerCustomerCreateResponse, ThePlaidApiClient.PartnerCustomerCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/partner/customer/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: partnerCustomerCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: partnerCustomerCreateResponseSchema },
        errorFactory: ThePlaidApiClient.PartnerCustomerCreateError,
      },
      options,
    );
  }

  partnerCustomerEnable(
    request: ThePlaidApiClient.PartnerCustomerEnableRequestParams,
    options?: RequestOptions,
  ): ApiPromise<PartnerCustomerEnableResponse, ThePlaidApiClient.PartnerCustomerEnableError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/partner/customer/enable"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: partnerCustomerEnableRequestSchema },
      },
      {
        success: { kind: "json", schema: partnerCustomerEnableResponseSchema },
        errorFactory: ThePlaidApiClient.PartnerCustomerEnableError,
      },
      options,
    );
  }

  partnerCustomerGet(
    request: ThePlaidApiClient.PartnerCustomerGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<PartnerCustomerGetResponse, ThePlaidApiClient.PartnerCustomerGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/partner/customer/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: partnerCustomerGetRequestSchema },
      },
      {
        success: { kind: "json", schema: partnerCustomerGetResponseSchema },
        errorFactory: ThePlaidApiClient.PartnerCustomerGetError,
      },
      options,
    );
  }

  partnerCustomerOauthInstitutionsGet(
    request: ThePlaidApiClient.PartnerCustomerOauthInstitutionsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<
    PartnerCustomerOAuthInstitutionsGetResponse,
    ThePlaidApiClient.PartnerCustomerOauthInstitutionsGetError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/partner/customer/oauth_institutions/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: partnerCustomerOAuthInstitutionsGetRequestSchema },
      },
      {
        success: { kind: "json", schema: partnerCustomerOAuthInstitutionsGetResponseSchema },
        errorFactory: ThePlaidApiClient.PartnerCustomerOauthInstitutionsGetError,
      },
      options,
    );
  }

  partnerCustomerRemove(
    request: ThePlaidApiClient.PartnerCustomerRemoveRequestParams,
    options?: RequestOptions,
  ): ApiPromise<PartnerCustomerRemoveResponse, ThePlaidApiClient.PartnerCustomerRemoveError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/partner/customer/remove"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: partnerCustomerRemoveRequestSchema },
      },
      {
        success: { kind: "json", schema: partnerCustomerRemoveResponseSchema },
        errorFactory: ThePlaidApiClient.PartnerCustomerRemoveError,
      },
      options,
    );
  }

  paymentInitiationConsentCreate(
    request: ThePlaidApiClient.PaymentInitiationConsentCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<
    PaymentInitiationConsentCreateResponse,
    ThePlaidApiClient.PaymentInitiationConsentCreateError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/payment_initiation/consent/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: paymentInitiationConsentCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: paymentInitiationConsentCreateResponseSchema },
        errorFactory: ThePlaidApiClient.PaymentInitiationConsentCreateError,
      },
      options,
    );
  }

  paymentInitiationConsentGet(
    request: ThePlaidApiClient.PaymentInitiationConsentGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<PaymentInitiationConsentGetResponse, ThePlaidApiClient.PaymentInitiationConsentGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/payment_initiation/consent/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: paymentInitiationConsentGetRequestSchema },
      },
      {
        success: { kind: "json", schema: paymentInitiationConsentGetResponseSchema },
        errorFactory: ThePlaidApiClient.PaymentInitiationConsentGetError,
      },
      options,
    );
  }

  paymentInitiationConsentPaymentExecute(
    request: ThePlaidApiClient.PaymentInitiationConsentPaymentExecuteRequestParams,
    options?: RequestOptions,
  ): ApiPromise<
    PaymentInitiationConsentPaymentExecuteResponse,
    ThePlaidApiClient.PaymentInitiationConsentPaymentExecuteError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/payment_initiation/consent/payment/execute"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: {
          kind: "json",
          value: request.body,
          schema: paymentInitiationConsentPaymentExecuteRequestSchema,
        },
      },
      {
        success: { kind: "json", schema: paymentInitiationConsentPaymentExecuteResponseSchema },
        errorFactory: ThePlaidApiClient.PaymentInitiationConsentPaymentExecuteError,
      },
      options,
    );
  }

  paymentInitiationConsentRevoke(
    request: ThePlaidApiClient.PaymentInitiationConsentRevokeRequestParams,
    options?: RequestOptions,
  ): ApiPromise<
    PaymentInitiationConsentRevokeResponse,
    ThePlaidApiClient.PaymentInitiationConsentRevokeError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/payment_initiation/consent/revoke"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: paymentInitiationConsentRevokeRequestSchema },
      },
      {
        success: { kind: "json", schema: paymentInitiationConsentRevokeResponseSchema },
        errorFactory: ThePlaidApiClient.PaymentInitiationConsentRevokeError,
      },
      options,
    );
  }

  paymentInitiationPaymentCreate(
    request: ThePlaidApiClient.PaymentInitiationPaymentCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<
    PaymentInitiationPaymentCreateResponse,
    ThePlaidApiClient.PaymentInitiationPaymentCreateError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/payment_initiation/payment/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: paymentInitiationPaymentCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: paymentInitiationPaymentCreateResponseSchema },
        errorFactory: ThePlaidApiClient.PaymentInitiationPaymentCreateError,
      },
      options,
    );
  }

  paymentInitiationPaymentGet(
    request: ThePlaidApiClient.PaymentInitiationPaymentGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<PaymentInitiationPaymentGetResponse, ThePlaidApiClient.PaymentInitiationPaymentGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/payment_initiation/payment/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: paymentInitiationPaymentGetRequestSchema },
      },
      {
        success: { kind: "json", schema: paymentInitiationPaymentGetResponseSchema },
        errorFactory: ThePlaidApiClient.PaymentInitiationPaymentGetError,
      },
      options,
    );
  }

  paymentInitiationPaymentList(
    request: ThePlaidApiClient.PaymentInitiationPaymentListRequestParams,
    options?: RequestOptions,
  ): ApiPromise<PaymentInitiationPaymentListResponse, ThePlaidApiClient.PaymentInitiationPaymentListError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/payment_initiation/payment/list"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: paymentInitiationPaymentListRequestSchema },
      },
      {
        success: { kind: "json", schema: paymentInitiationPaymentListResponseSchema },
        errorFactory: ThePlaidApiClient.PaymentInitiationPaymentListError,
      },
      options,
    );
  }

  paymentInitiationPaymentReverse(
    request: ThePlaidApiClient.PaymentInitiationPaymentReverseRequestParams,
    options?: RequestOptions,
  ): ApiPromise<
    PaymentInitiationPaymentReverseResponse,
    ThePlaidApiClient.PaymentInitiationPaymentReverseError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/payment_initiation/payment/reverse"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: paymentInitiationPaymentReverseRequestSchema },
      },
      {
        success: { kind: "json", schema: paymentInitiationPaymentReverseResponseSchema },
        errorFactory: ThePlaidApiClient.PaymentInitiationPaymentReverseError,
      },
      options,
    );
  }

  paymentInitiationRecipientCreate(
    request: ThePlaidApiClient.PaymentInitiationRecipientCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<
    PaymentInitiationRecipientCreateResponse,
    ThePlaidApiClient.PaymentInitiationRecipientCreateError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/payment_initiation/recipient/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: paymentInitiationRecipientCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: paymentInitiationRecipientCreateResponseSchema },
        errorFactory: ThePlaidApiClient.PaymentInitiationRecipientCreateError,
      },
      options,
    );
  }

  paymentInitiationRecipientGet(
    request: ThePlaidApiClient.PaymentInitiationRecipientGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<PaymentInitiationRecipientGetResponse, ThePlaidApiClient.PaymentInitiationRecipientGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/payment_initiation/recipient/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: paymentInitiationRecipientGetRequestSchema },
      },
      {
        success: { kind: "json", schema: paymentInitiationRecipientGetResponseSchema },
        errorFactory: ThePlaidApiClient.PaymentInitiationRecipientGetError,
      },
      options,
    );
  }

  paymentInitiationRecipientList(
    request: ThePlaidApiClient.PaymentInitiationRecipientListRequestParams,
    options?: RequestOptions,
  ): ApiPromise<
    PaymentInitiationRecipientListResponse,
    ThePlaidApiClient.PaymentInitiationRecipientListError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/payment_initiation/recipient/list"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: paymentInitiationRecipientListRequestSchema },
      },
      {
        success: { kind: "json", schema: paymentInitiationRecipientListResponseSchema },
        errorFactory: ThePlaidApiClient.PaymentInitiationRecipientListError,
      },
      options,
    );
  }

  paymentProfileCreate(
    request: ThePlaidApiClient.PaymentProfileCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<PaymentProfileCreateResponse, ThePlaidApiClient.PaymentProfileCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/payment_profile/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: paymentProfileCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: paymentProfileCreateResponseSchema },
        errorFactory: ThePlaidApiClient.PaymentProfileCreateError,
      },
      options,
    );
  }

  paymentProfileGet(
    request: ThePlaidApiClient.PaymentProfileGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<PaymentProfileGetResponse, ThePlaidApiClient.PaymentProfileGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/payment_profile/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: paymentProfileGetRequestSchema },
      },
      {
        success: { kind: "json", schema: paymentProfileGetResponseSchema },
        errorFactory: ThePlaidApiClient.PaymentProfileGetError,
      },
      options,
    );
  }

  paymentProfileRemove(
    request: ThePlaidApiClient.PaymentProfileRemoveRequestParams,
    options?: RequestOptions,
  ): ApiPromise<PaymentProfileRemoveResponse, ThePlaidApiClient.PaymentProfileRemoveError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/payment_profile/remove"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: paymentProfileRemoveRequestSchema },
      },
      {
        success: { kind: "json", schema: paymentProfileRemoveResponseSchema },
        errorFactory: ThePlaidApiClient.PaymentProfileRemoveError,
      },
      options,
    );
  }

  processorAccountGet(
    request: ThePlaidApiClient.ProcessorAccountGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ProcessorAccountGetResponse, ThePlaidApiClient.ProcessorAccountGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/processor/account/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: processorAccountGetRequestSchema },
      },
      {
        success: { kind: "json", schema: processorAccountGetResponseSchema },
        errorFactory: ThePlaidApiClient.ProcessorAccountGetError,
      },
      options,
    );
  }

  processorApexProcessorTokenCreate(
    request: ThePlaidApiClient.ProcessorApexProcessorTokenCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ProcessorTokenCreateResponse, ThePlaidApiClient.ProcessorApexProcessorTokenCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/processor/apex/processor_token/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: processorApexProcessorTokenCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: processorTokenCreateResponseSchema },
        errorFactory: ThePlaidApiClient.ProcessorApexProcessorTokenCreateError,
      },
      options,
    );
  }

  processorAuthGet(
    request: ThePlaidApiClient.ProcessorAuthGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ProcessorAuthGetResponse, ThePlaidApiClient.ProcessorAuthGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/processor/auth/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: processorAuthGetRequestSchema },
      },
      {
        success: { kind: "json", schema: processorAuthGetResponseSchema },
        errorFactory: ThePlaidApiClient.ProcessorAuthGetError,
      },
      options,
    );
  }

  processorBalanceGet(
    request: ThePlaidApiClient.ProcessorBalanceGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ProcessorBalanceGetResponse, ThePlaidApiClient.ProcessorBalanceGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/processor/balance/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: processorBalanceGetRequestSchema },
      },
      {
        success: { kind: "json", schema: processorBalanceGetResponseSchema },
        errorFactory: ThePlaidApiClient.ProcessorBalanceGetError,
      },
      options,
    );
  }

  processorBankTransferCreate(
    request: ThePlaidApiClient.ProcessorBankTransferCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ProcessorBankTransferCreateResponse, ThePlaidApiClient.ProcessorBankTransferCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/processor/bank_transfer/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: processorBankTransferCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: processorBankTransferCreateResponseSchema },
        errorFactory: ThePlaidApiClient.ProcessorBankTransferCreateError,
      },
      options,
    );
  }

  processorIdentityGet(
    request: ThePlaidApiClient.ProcessorIdentityGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ProcessorIdentityGetResponse, ThePlaidApiClient.ProcessorIdentityGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/processor/identity/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: processorIdentityGetRequestSchema },
      },
      {
        success: { kind: "json", schema: processorIdentityGetResponseSchema },
        errorFactory: ThePlaidApiClient.ProcessorIdentityGetError,
      },
      options,
    );
  }

  processorIdentityMatch(
    request: ThePlaidApiClient.ProcessorIdentityMatchRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ProcessorIdentityMatchResponse, ThePlaidApiClient.ProcessorIdentityMatchError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/processor/identity/match"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: processorIdentityMatchRequestSchema },
      },
      {
        success: { kind: "json", schema: processorIdentityMatchResponseSchema },
        errorFactory: ThePlaidApiClient.ProcessorIdentityMatchError,
      },
      options,
    );
  }

  processorInvestmentsAuthGet(
    request: ThePlaidApiClient.ProcessorInvestmentsAuthGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ProcessorInvestmentsAuthGetResponse, ThePlaidApiClient.ProcessorInvestmentsAuthGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/processor/investments/auth/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: processorInvestmentsAuthGetRequestSchema },
      },
      {
        success: { kind: "json", schema: processorInvestmentsAuthGetResponseSchema },
        errorFactory: ThePlaidApiClient.ProcessorInvestmentsAuthGetError,
      },
      options,
    );
  }

  processorInvestmentsHoldingsGet(
    request: ThePlaidApiClient.ProcessorInvestmentsHoldingsGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<
    ProcessorInvestmentsHoldingsGetResponse,
    ThePlaidApiClient.ProcessorInvestmentsHoldingsGetError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/processor/investments/holdings/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: processorInvestmentsHoldingsGetRequestSchema },
      },
      {
        success: { kind: "json", schema: processorInvestmentsHoldingsGetResponseSchema },
        errorFactory: ThePlaidApiClient.ProcessorInvestmentsHoldingsGetError,
      },
      options,
    );
  }

  processorInvestmentsTransactionsGet(
    request: ThePlaidApiClient.ProcessorInvestmentsTransactionsGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<
    ProcessorInvestmentsTransactionsGetResponse,
    ThePlaidApiClient.ProcessorInvestmentsTransactionsGetError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/processor/investments/transactions/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: processorInvestmentsTransactionsGetRequestSchema },
      },
      {
        success: { kind: "json", schema: processorInvestmentsTransactionsGetResponseSchema },
        errorFactory: ThePlaidApiClient.ProcessorInvestmentsTransactionsGetError,
      },
      options,
    );
  }

  processorLiabilitiesGet(
    request: ThePlaidApiClient.ProcessorLiabilitiesGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ProcessorLiabilitiesGetResponse, ThePlaidApiClient.ProcessorLiabilitiesGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/processor/liabilities/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: processorLiabilitiesGetRequestSchema },
      },
      {
        success: { kind: "json", schema: processorLiabilitiesGetResponseSchema },
        errorFactory: ThePlaidApiClient.ProcessorLiabilitiesGetError,
      },
      options,
    );
  }

  processorSignalDecisionReport(
    request: ThePlaidApiClient.ProcessorSignalDecisionReportRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ProcessorSignalDecisionReportResponse, ThePlaidApiClient.ProcessorSignalDecisionReportError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/processor/signal/decision/report"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: processorSignalDecisionReportRequestSchema },
      },
      {
        success: { kind: "json", schema: processorSignalDecisionReportResponseSchema },
        errorFactory: ThePlaidApiClient.ProcessorSignalDecisionReportError,
      },
      options,
    );
  }

  processorSignalEvaluate(
    request: ThePlaidApiClient.ProcessorSignalEvaluateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ProcessorSignalEvaluateResponse, ThePlaidApiClient.ProcessorSignalEvaluateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/processor/signal/evaluate"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: processorSignalEvaluateRequestSchema },
      },
      {
        success: { kind: "json", schema: processorSignalEvaluateResponseSchema },
        errorFactory: ThePlaidApiClient.ProcessorSignalEvaluateError,
      },
      options,
    );
  }

  processorSignalPrepare(
    request: ThePlaidApiClient.ProcessorSignalPrepareRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ProcessorSignalPrepareResponse, ThePlaidApiClient.ProcessorSignalPrepareError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/processor/signal/prepare"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: processorSignalPrepareRequestSchema },
      },
      {
        success: { kind: "json", schema: processorSignalPrepareResponseSchema },
        errorFactory: ThePlaidApiClient.ProcessorSignalPrepareError,
      },
      options,
    );
  }

  processorSignalReturnReport(
    request: ThePlaidApiClient.ProcessorSignalReturnReportRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ProcessorSignalReturnReportResponse, ThePlaidApiClient.ProcessorSignalReturnReportError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/processor/signal/return/report"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: processorSignalReturnReportRequestSchema },
      },
      {
        success: { kind: "json", schema: processorSignalReturnReportResponseSchema },
        errorFactory: ThePlaidApiClient.ProcessorSignalReturnReportError,
      },
      options,
    );
  }

  processorStripeBankAccountTokenCreate(
    request: ThePlaidApiClient.ProcessorStripeBankAccountTokenCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<
    ProcessorStripeBankAccountTokenCreateResponse,
    ThePlaidApiClient.ProcessorStripeBankAccountTokenCreateError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/processor/stripe/bank_account_token/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: {
          kind: "json",
          value: request.body,
          schema: processorStripeBankAccountTokenCreateRequestSchema,
        },
      },
      {
        success: { kind: "json", schema: processorStripeBankAccountTokenCreateResponseSchema },
        errorFactory: ThePlaidApiClient.ProcessorStripeBankAccountTokenCreateError,
      },
      options,
    );
  }

  processorTokenCreate(
    request: ThePlaidApiClient.ProcessorTokenCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ProcessorTokenCreateResponse, ThePlaidApiClient.ProcessorTokenCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/processor/token/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: processorTokenCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: processorTokenCreateResponseSchema },
        errorFactory: ThePlaidApiClient.ProcessorTokenCreateError,
      },
      options,
    );
  }

  processorTokenPermissionsGet(
    request: ThePlaidApiClient.ProcessorTokenPermissionsGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ProcessorTokenPermissionsGetResponse, ThePlaidApiClient.ProcessorTokenPermissionsGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/processor/token/permissions/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: processorTokenPermissionsGetRequestSchema },
      },
      {
        success: { kind: "json", schema: processorTokenPermissionsGetResponseSchema },
        errorFactory: ThePlaidApiClient.ProcessorTokenPermissionsGetError,
      },
      options,
    );
  }

  processorTokenPermissionsSet(
    request: ThePlaidApiClient.ProcessorTokenPermissionsSetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ProcessorTokenPermissionsSetResponse, ThePlaidApiClient.ProcessorTokenPermissionsSetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/processor/token/permissions/set"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: processorTokenPermissionsSetRequestSchema },
      },
      {
        success: { kind: "json", schema: processorTokenPermissionsSetResponseSchema },
        errorFactory: ThePlaidApiClient.ProcessorTokenPermissionsSetError,
      },
      options,
    );
  }

  processorTokenWebhookUpdate(
    request: ThePlaidApiClient.ProcessorTokenWebhookUpdateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ProcessorTokenWebhookUpdateResponse, ThePlaidApiClient.ProcessorTokenWebhookUpdateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/processor/token/webhook/update"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: processorTokenWebhookUpdateRequestSchema },
      },
      {
        success: { kind: "json", schema: processorTokenWebhookUpdateResponseSchema },
        errorFactory: ThePlaidApiClient.ProcessorTokenWebhookUpdateError,
      },
      options,
    );
  }

  processorTransactionsGet(
    request: ThePlaidApiClient.ProcessorTransactionsGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ProcessorTransactionsGetResponse, ThePlaidApiClient.ProcessorTransactionsGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/processor/transactions/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: processorTransactionsGetRequestSchema },
      },
      {
        success: { kind: "json", schema: processorTransactionsGetResponseSchema },
        errorFactory: ThePlaidApiClient.ProcessorTransactionsGetError,
      },
      options,
    );
  }

  processorTransactionsRecurringGet(
    request: ThePlaidApiClient.ProcessorTransactionsRecurringGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<
    ProcessorTransactionsRecurringGetResponse,
    ThePlaidApiClient.ProcessorTransactionsRecurringGetError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/processor/transactions/recurring/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: processorTransactionsRecurringGetRequestSchema },
      },
      {
        success: { kind: "json", schema: processorTransactionsRecurringGetResponseSchema },
        errorFactory: ThePlaidApiClient.ProcessorTransactionsRecurringGetError,
      },
      options,
    );
  }

  processorTransactionsRefresh(
    request: ThePlaidApiClient.ProcessorTransactionsRefreshRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ProcessorTransactionsRefreshResponse, ThePlaidApiClient.ProcessorTransactionsRefreshError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/processor/transactions/refresh"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: processorTransactionsRefreshRequestSchema },
      },
      {
        success: { kind: "json", schema: processorTransactionsRefreshResponseSchema },
        errorFactory: ThePlaidApiClient.ProcessorTransactionsRefreshError,
      },
      options,
    );
  }

  processorTransactionsSync(
    request: ThePlaidApiClient.ProcessorTransactionsSyncRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ProcessorTransactionsSyncResponse, ThePlaidApiClient.ProcessorTransactionsSyncError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/processor/transactions/sync"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: processorTransactionsSyncRequestSchema },
      },
      {
        success: { kind: "json", schema: processorTransactionsSyncResponseSchema },
        errorFactory: ThePlaidApiClient.ProcessorTransactionsSyncError,
      },
      options,
    );
  }

  profileNetworkStatusGet(
    request: ThePlaidApiClient.ProfileNetworkStatusGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ProfileNetworkStatusGetResponse, ThePlaidApiClient.ProfileNetworkStatusGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/profile/network_status/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: profileNetworkStatusGetRequestSchema },
      },
      {
        success: { kind: "json", schema: profileNetworkStatusGetResponseSchema },
        errorFactory: ThePlaidApiClient.ProfileNetworkStatusGetError,
      },
      options,
    );
  }

  protectCompute(
    request: ThePlaidApiClient.ProtectComputeRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ProtectComputeResponse, ResponseError> {
    return this.#rawClient.execute<ProtectComputeResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/protect/compute"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: protectComputeRequestSchema },
      },
      {
        success: { kind: "json", schema: protectComputeResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  protectEventGet(
    request: ThePlaidApiClient.ProtectEventGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ProtectEventGetResponse, ResponseError> {
    return this.#rawClient.execute<ProtectEventGetResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/protect/event/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: protectEventGetRequestSchema },
      },
      {
        success: { kind: "json", schema: protectEventGetResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  protectEventSend(
    request: ThePlaidApiClient.ProtectEventSendRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ProtectEventSendResponse, ResponseError> {
    return this.#rawClient.execute<ProtectEventSendResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/protect/event/send"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: protectEventSendRequestSchema },
      },
      {
        success: { kind: "json", schema: protectEventSendResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  protectReportCreate(
    request: ThePlaidApiClient.ProtectReportCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ProtectReportCreateResponse, ResponseError> {
    return this.#rawClient.execute<ProtectReportCreateResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/protect/report/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: protectReportCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: protectReportCreateResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  protectUserInsightsGet(
    request: ThePlaidApiClient.ProtectUserInsightsGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ProtectUserInsightsGetResponse, ResponseError> {
    return this.#rawClient.execute<ProtectUserInsightsGetResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/protect/user/insights/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: protectUserInsightsGetRequestSchema },
      },
      {
        success: { kind: "json", schema: protectUserInsightsGetResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  sandboxBankIncomeFireWebhook(
    request: ThePlaidApiClient.SandboxBankIncomeFireWebhookRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SandboxBankIncomeFireWebhookResponse, ThePlaidApiClient.SandboxBankIncomeFireWebhookError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sandbox/bank_income/fire_webhook"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: sandboxBankIncomeFireWebhookRequestSchema },
      },
      {
        success: { kind: "json", schema: sandboxBankIncomeFireWebhookResponseSchema },
        errorFactory: ThePlaidApiClient.SandboxBankIncomeFireWebhookError,
      },
      options,
    );
  }

  sandboxBankTransferFireWebhook(
    request: ThePlaidApiClient.SandboxBankTransferFireWebhookRequestParams,
    options?: RequestOptions,
  ): ApiPromise<
    SandboxBankTransferFireWebhookResponse,
    ThePlaidApiClient.SandboxBankTransferFireWebhookError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sandbox/bank_transfer/fire_webhook"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: sandboxBankTransferFireWebhookRequestSchema },
      },
      {
        success: { kind: "json", schema: sandboxBankTransferFireWebhookResponseSchema },
        errorFactory: ThePlaidApiClient.SandboxBankTransferFireWebhookError,
      },
      options,
    );
  }

  sandboxBankTransferSimulate(
    request: ThePlaidApiClient.SandboxBankTransferSimulateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SandboxBankTransferSimulateResponse, ThePlaidApiClient.SandboxBankTransferSimulateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sandbox/bank_transfer/simulate"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: sandboxBankTransferSimulateRequestSchema },
      },
      {
        success: { kind: "json", schema: sandboxBankTransferSimulateResponseSchema },
        errorFactory: ThePlaidApiClient.SandboxBankTransferSimulateError,
      },
      options,
    );
  }

  sandboxCraCashflowUpdatesUpdate(
    request: ThePlaidApiClient.SandboxCraCashflowUpdatesUpdateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<
    SandboxCraCashflowUpdatesUpdateResponse,
    ThePlaidApiClient.SandboxCraCashflowUpdatesUpdateError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sandbox/cra/cashflow_updates/update"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: sandboxCraCashflowUpdatesUpdateRequestSchema },
      },
      {
        success: { kind: "json", schema: sandboxCraCashflowUpdatesUpdateResponseSchema },
        errorFactory: ThePlaidApiClient.SandboxCraCashflowUpdatesUpdateError,
      },
      options,
    );
  }

  sandboxFdxConsentSeed(
    request: ThePlaidApiClient.SandboxFdxConsentSeedRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SandboxFdxConsentSeedResponse, ThePlaidApiClient.SandboxFdxConsentSeedError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sandbox/fdx/consent/seed"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: sandboxFdxConsentSeedRequestSchema },
      },
      {
        success: { kind: "json", schema: sandboxFdxConsentSeedResponseSchema },
        errorFactory: ThePlaidApiClient.SandboxFdxConsentSeedError,
      },
      options,
    );
  }

  sandboxIncomeFireWebhook(
    request: ThePlaidApiClient.SandboxIncomeFireWebhookRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SandboxIncomeFireWebhookResponse, ThePlaidApiClient.SandboxIncomeFireWebhookError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sandbox/income/fire_webhook"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: sandboxIncomeFireWebhookRequestSchema },
      },
      {
        success: { kind: "json", schema: sandboxIncomeFireWebhookResponseSchema },
        errorFactory: ThePlaidApiClient.SandboxIncomeFireWebhookError,
      },
      options,
    );
  }

  sandboxItemApplicationSeed(
    request: ThePlaidApiClient.SandboxItemApplicationSeedRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SandboxItemApplicationSeedResponse, ThePlaidApiClient.SandboxItemApplicationSeedError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sandbox/item/application/seed"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: sandboxItemApplicationSeedRequestSchema },
      },
      {
        success: { kind: "json", schema: sandboxItemApplicationSeedResponseSchema },
        errorFactory: ThePlaidApiClient.SandboxItemApplicationSeedError,
      },
      options,
    );
  }

  sandboxItemFireWebhook(
    request: ThePlaidApiClient.SandboxItemFireWebhookRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SandboxItemFireWebhookResponse, ThePlaidApiClient.SandboxItemFireWebhookError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sandbox/item/fire_webhook"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: sandboxItemFireWebhookRequestSchema },
      },
      {
        success: { kind: "json", schema: sandboxItemFireWebhookResponseSchema },
        errorFactory: ThePlaidApiClient.SandboxItemFireWebhookError,
      },
      options,
    );
  }

  sandboxItemResetLogin(
    request: ThePlaidApiClient.SandboxItemResetLoginRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SandboxItemResetLoginResponse, ThePlaidApiClient.SandboxItemResetLoginError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sandbox/item/reset_login"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: sandboxItemResetLoginRequestSchema },
      },
      {
        success: { kind: "json", schema: sandboxItemResetLoginResponseSchema },
        errorFactory: ThePlaidApiClient.SandboxItemResetLoginError,
      },
      options,
    );
  }

  sandboxItemSetVerificationStatus(
    request: ThePlaidApiClient.SandboxItemSetVerificationStatusRequestParams,
    options?: RequestOptions,
  ): ApiPromise<
    SandboxItemSetVerificationStatusResponse,
    ThePlaidApiClient.SandboxItemSetVerificationStatusError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sandbox/item/set_verification_status"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: sandboxItemSetVerificationStatusRequestSchema },
      },
      {
        success: { kind: "json", schema: sandboxItemSetVerificationStatusResponseSchema },
        errorFactory: ThePlaidApiClient.SandboxItemSetVerificationStatusError,
      },
      options,
    );
  }

  sandboxOauthSelectAccounts(
    request: ThePlaidApiClient.SandboxOauthSelectAccountsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, ThePlaidApiClient.SandboxOauthSelectAccountsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sandbox/oauth/select_accounts"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: sandboxOauthSelectAccountsRequestSchema },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ThePlaidApiClient.SandboxOauthSelectAccountsError,
      },
      options,
    );
  }

  sandboxPaymentProfileResetLogin(
    request: ThePlaidApiClient.SandboxPaymentProfileResetLoginRequestParams,
    options?: RequestOptions,
  ): ApiPromise<
    SandboxPaymentProfileResetLoginResponse,
    ThePlaidApiClient.SandboxPaymentProfileResetLoginError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sandbox/payment_profile/reset_login"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: sandboxPaymentProfileResetLoginRequestSchema },
      },
      {
        success: { kind: "json", schema: sandboxPaymentProfileResetLoginResponseSchema },
        errorFactory: ThePlaidApiClient.SandboxPaymentProfileResetLoginError,
      },
      options,
    );
  }

  sandboxPaymentSimulate(
    request: ThePlaidApiClient.SandboxPaymentSimulateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SandboxPaymentSimulateResponse, ThePlaidApiClient.SandboxPaymentSimulateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sandbox/payment/simulate"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: sandboxPaymentSimulateRequestSchema },
      },
      {
        success: { kind: "json", schema: sandboxPaymentSimulateResponseSchema },
        errorFactory: ThePlaidApiClient.SandboxPaymentSimulateError,
      },
      options,
    );
  }

  sandboxProcessorTokenCreate(
    request: ThePlaidApiClient.SandboxProcessorTokenCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SandboxProcessorTokenCreateResponse, ThePlaidApiClient.SandboxProcessorTokenCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sandbox/processor_token/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: sandboxProcessorTokenCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: sandboxProcessorTokenCreateResponseSchema },
        errorFactory: ThePlaidApiClient.SandboxProcessorTokenCreateError,
      },
      options,
    );
  }

  sandboxPublicTokenCreate(
    request: ThePlaidApiClient.SandboxPublicTokenCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SandboxPublicTokenCreateResponse, ThePlaidApiClient.SandboxPublicTokenCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sandbox/public_token/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: sandboxPublicTokenCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: sandboxPublicTokenCreateResponseSchema },
        errorFactory: ThePlaidApiClient.SandboxPublicTokenCreateError,
      },
      options,
    );
  }

  sandboxTransactionsCreate(
    request: ThePlaidApiClient.SandboxTransactionsCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SandboxTransactionsCreateResponse, ThePlaidApiClient.SandboxTransactionsCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sandbox/transactions/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: sandboxTransactionsCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: sandboxTransactionsCreateResponseSchema },
        errorFactory: ThePlaidApiClient.SandboxTransactionsCreateError,
      },
      options,
    );
  }

  sandboxTransferFireWebhook(
    request: ThePlaidApiClient.SandboxTransferFireWebhookRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SandboxTransferFireWebhookResponse, ThePlaidApiClient.SandboxTransferFireWebhookError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sandbox/transfer/fire_webhook"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: sandboxTransferFireWebhookRequestSchema },
      },
      {
        success: { kind: "json", schema: sandboxTransferFireWebhookResponseSchema },
        errorFactory: ThePlaidApiClient.SandboxTransferFireWebhookError,
      },
      options,
    );
  }

  sandboxTransferLedgerDepositSimulate(
    request: ThePlaidApiClient.SandboxTransferLedgerDepositSimulateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<
    SandboxTransferLedgerDepositSimulateResponse,
    ThePlaidApiClient.SandboxTransferLedgerDepositSimulateError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sandbox/transfer/ledger/deposit/simulate"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: {
          kind: "json",
          value: request.body,
          schema: sandboxTransferLedgerDepositSimulateRequestSchema,
        },
      },
      {
        success: { kind: "json", schema: sandboxTransferLedgerDepositSimulateResponseSchema },
        errorFactory: ThePlaidApiClient.SandboxTransferLedgerDepositSimulateError,
      },
      options,
    );
  }

  sandboxTransferLedgerSimulateAvailable(
    request: ThePlaidApiClient.SandboxTransferLedgerSimulateAvailableRequestParams,
    options?: RequestOptions,
  ): ApiPromise<
    SandboxTransferLedgerSimulateAvailableResponse,
    ThePlaidApiClient.SandboxTransferLedgerSimulateAvailableError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sandbox/transfer/ledger/simulate_available"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: {
          kind: "json",
          value: request.body,
          schema: sandboxTransferLedgerSimulateAvailableRequestSchema,
        },
      },
      {
        success: { kind: "json", schema: sandboxTransferLedgerSimulateAvailableResponseSchema },
        errorFactory: ThePlaidApiClient.SandboxTransferLedgerSimulateAvailableError,
      },
      options,
    );
  }

  sandboxTransferLedgerWithdrawSimulate(
    request: ThePlaidApiClient.SandboxTransferLedgerWithdrawSimulateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<
    SandboxTransferLedgerWithdrawSimulateResponse,
    ThePlaidApiClient.SandboxTransferLedgerWithdrawSimulateError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sandbox/transfer/ledger/withdraw/simulate"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: {
          kind: "json",
          value: request.body,
          schema: sandboxTransferLedgerWithdrawSimulateRequestSchema,
        },
      },
      {
        success: { kind: "json", schema: sandboxTransferLedgerWithdrawSimulateResponseSchema },
        errorFactory: ThePlaidApiClient.SandboxTransferLedgerWithdrawSimulateError,
      },
      options,
    );
  }

  sandboxTransferRefundSimulate(
    request: ThePlaidApiClient.SandboxTransferRefundSimulateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SandboxTransferRefundSimulateResponse, ThePlaidApiClient.SandboxTransferRefundSimulateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sandbox/transfer/refund/simulate"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: sandboxTransferRefundSimulateRequestSchema },
      },
      {
        success: { kind: "json", schema: sandboxTransferRefundSimulateResponseSchema },
        errorFactory: ThePlaidApiClient.SandboxTransferRefundSimulateError,
      },
      options,
    );
  }

  sandboxTransferRepaymentSimulate(
    request: ThePlaidApiClient.SandboxTransferRepaymentSimulateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<
    SandboxTransferRepaymentSimulateResponse,
    ThePlaidApiClient.SandboxTransferRepaymentSimulateError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sandbox/transfer/repayment/simulate"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: sandboxTransferRepaymentSimulateRequestSchema },
      },
      {
        success: { kind: "json", schema: sandboxTransferRepaymentSimulateResponseSchema },
        errorFactory: ThePlaidApiClient.SandboxTransferRepaymentSimulateError,
      },
      options,
    );
  }

  sandboxTransferSimulate(
    request: ThePlaidApiClient.SandboxTransferSimulateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SandboxTransferSimulateResponse, ThePlaidApiClient.SandboxTransferSimulateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sandbox/transfer/simulate"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: sandboxTransferSimulateRequestSchema },
      },
      {
        success: { kind: "json", schema: sandboxTransferSimulateResponseSchema },
        errorFactory: ThePlaidApiClient.SandboxTransferSimulateError,
      },
      options,
    );
  }

  sandboxTransferSweepSimulate(
    request: ThePlaidApiClient.SandboxTransferSweepSimulateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SandboxTransferSweepSimulateResponse, ThePlaidApiClient.SandboxTransferSweepSimulateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sandbox/transfer/sweep/simulate"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: sandboxTransferSweepSimulateRequestSchema },
      },
      {
        success: { kind: "json", schema: sandboxTransferSweepSimulateResponseSchema },
        errorFactory: ThePlaidApiClient.SandboxTransferSweepSimulateError,
      },
      options,
    );
  }

  sandboxTransferTestClockAdvance(
    request: ThePlaidApiClient.SandboxTransferTestClockAdvanceRequestParams,
    options?: RequestOptions,
  ): ApiPromise<
    SandboxTransferTestClockAdvanceResponse,
    ThePlaidApiClient.SandboxTransferTestClockAdvanceError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sandbox/transfer/test_clock/advance"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: sandboxTransferTestClockAdvanceRequestSchema },
      },
      {
        success: { kind: "json", schema: sandboxTransferTestClockAdvanceResponseSchema },
        errorFactory: ThePlaidApiClient.SandboxTransferTestClockAdvanceError,
      },
      options,
    );
  }

  sandboxTransferTestClockCreate(
    request: ThePlaidApiClient.SandboxTransferTestClockCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<
    SandboxTransferTestClockCreateResponse,
    ThePlaidApiClient.SandboxTransferTestClockCreateError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sandbox/transfer/test_clock/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: sandboxTransferTestClockCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: sandboxTransferTestClockCreateResponseSchema },
        errorFactory: ThePlaidApiClient.SandboxTransferTestClockCreateError,
      },
      options,
    );
  }

  sandboxTransferTestClockGet(
    request: ThePlaidApiClient.SandboxTransferTestClockGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SandboxTransferTestClockGetResponse, ThePlaidApiClient.SandboxTransferTestClockGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sandbox/transfer/test_clock/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: sandboxTransferTestClockGetRequestSchema },
      },
      {
        success: { kind: "json", schema: sandboxTransferTestClockGetResponseSchema },
        errorFactory: ThePlaidApiClient.SandboxTransferTestClockGetError,
      },
      options,
    );
  }

  sandboxTransferTestClockList(
    request: ThePlaidApiClient.SandboxTransferTestClockListRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SandboxTransferTestClockListResponse, ThePlaidApiClient.SandboxTransferTestClockListError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sandbox/transfer/test_clock/list"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: sandboxTransferTestClockListRequestSchema },
      },
      {
        success: { kind: "json", schema: sandboxTransferTestClockListResponseSchema },
        errorFactory: ThePlaidApiClient.SandboxTransferTestClockListError,
      },
      options,
    );
  }

  sandboxUserResetLogin(
    request: ThePlaidApiClient.SandboxUserResetLoginRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SandboxUserResetLoginResponse, ThePlaidApiClient.SandboxUserResetLoginError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/sandbox/user/reset_login"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: sandboxUserResetLoginRequestSchema },
      },
      {
        success: { kind: "json", schema: sandboxUserResetLoginResponseSchema },
        errorFactory: ThePlaidApiClient.SandboxUserResetLoginError,
      },
      options,
    );
  }

  sessionTokenCreate(
    request: ThePlaidApiClient.SessionTokenCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SessionTokenCreateResponse, ThePlaidApiClient.SessionTokenCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/session/token/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: sessionTokenCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: sessionTokenCreateResponseSchema },
        errorFactory: ThePlaidApiClient.SessionTokenCreateError,
      },
      options,
    );
  }

  signalDecisionReport(
    request: ThePlaidApiClient.SignalDecisionReportRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SignalDecisionReportResponse, ThePlaidApiClient.SignalDecisionReportError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/signal/decision/report"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: signalDecisionReportRequestSchema },
      },
      {
        success: { kind: "json", schema: signalDecisionReportResponseSchema },
        errorFactory: ThePlaidApiClient.SignalDecisionReportError,
      },
      options,
    );
  }

  signalEvaluate(
    request: ThePlaidApiClient.SignalEvaluateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SignalEvaluateResponse, ThePlaidApiClient.SignalEvaluateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/signal/evaluate"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: signalEvaluateRequestSchema },
      },
      {
        success: { kind: "json", schema: signalEvaluateResponseSchema },
        errorFactory: ThePlaidApiClient.SignalEvaluateError,
      },
      options,
    );
  }

  signalPrepare(
    request: ThePlaidApiClient.SignalPrepareRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SignalPrepareResponse, ThePlaidApiClient.SignalPrepareError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/signal/prepare"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: signalPrepareRequestSchema },
      },
      {
        success: { kind: "json", schema: signalPrepareResponseSchema },
        errorFactory: ThePlaidApiClient.SignalPrepareError,
      },
      options,
    );
  }

  signalReturnReport(
    request: ThePlaidApiClient.SignalReturnReportRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SignalReturnReportResponse, ThePlaidApiClient.SignalReturnReportError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/signal/return/report"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: signalReturnReportRequestSchema },
      },
      {
        success: { kind: "json", schema: signalReturnReportResponseSchema },
        errorFactory: ThePlaidApiClient.SignalReturnReportError,
      },
      options,
    );
  }

  signalSchedule(
    request: ThePlaidApiClient.SignalScheduleRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SignalScheduleResponse, ThePlaidApiClient.SignalScheduleError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/signal/schedule"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: signalScheduleRequestSchema },
      },
      {
        success: { kind: "json", schema: signalScheduleResponseSchema },
        errorFactory: ThePlaidApiClient.SignalScheduleError,
      },
      options,
    );
  }

  statementsDownload(
    request: ThePlaidApiClient.StatementsDownloadRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, ThePlaidApiClient.StatementsDownloadError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/statements/download"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: statementsDownloadRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: ThePlaidApiClient.StatementsDownloadError,
      },
      options,
    );
  }

  statementsList(
    request: ThePlaidApiClient.StatementsListRequestParams,
    options?: RequestOptions,
  ): ApiPromise<StatementsListResponse, ThePlaidApiClient.StatementsListError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/statements/list"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: statementsListRequestSchema },
      },
      {
        success: { kind: "json", schema: statementsListResponseSchema },
        errorFactory: ThePlaidApiClient.StatementsListError,
      },
      options,
    );
  }

  statementsRefresh(
    request: ThePlaidApiClient.StatementsRefreshRequestParams,
    options?: RequestOptions,
  ): ApiPromise<StatementsRefreshResponse, ThePlaidApiClient.StatementsRefreshError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/statements/refresh"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: statementsRefreshRequestSchema },
      },
      {
        success: { kind: "json", schema: statementsRefreshResponseSchema },
        errorFactory: ThePlaidApiClient.StatementsRefreshError,
      },
      options,
    );
  }

  transactionsEnhance(
    request: ThePlaidApiClient.TransactionsEnhanceRequest,
    options?: RequestOptions,
  ): ApiPromise<TransactionsEnhanceGetResponse, ThePlaidApiClient.TransactionsEnhanceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/beta/transactions/v1/enhance"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: transactionsEnhanceGetRequestSchema },
      },
      {
        success: { kind: "json", schema: transactionsEnhanceGetResponseSchema },
        errorFactory: ThePlaidApiClient.TransactionsEnhanceError,
      },
      options,
    );
  }

  transactionsEnrich(
    request: ThePlaidApiClient.TransactionsEnrichRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransactionsEnrichResponse, ThePlaidApiClient.TransactionsEnrichError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/transactions/enrich"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: transactionsEnrichRequestSchema },
      },
      {
        success: { kind: "json", schema: transactionsEnrichResponseSchema },
        errorFactory: ThePlaidApiClient.TransactionsEnrichError,
      },
      options,
    );
  }

  transactionsGet(
    request: ThePlaidApiClient.TransactionsGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransactionsGetResponse, ThePlaidApiClient.TransactionsGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/transactions/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: transactionsGetRequestSchema },
      },
      {
        success: { kind: "json", schema: transactionsGetResponseSchema },
        errorFactory: ThePlaidApiClient.TransactionsGetError,
      },
      options,
    );
  }

  transactionsRecurringGet(
    request: ThePlaidApiClient.TransactionsRecurringGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransactionsRecurringGetResponse, ThePlaidApiClient.TransactionsRecurringGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/transactions/recurring/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: transactionsRecurringGetRequestSchema },
      },
      {
        success: { kind: "json", schema: transactionsRecurringGetResponseSchema },
        errorFactory: ThePlaidApiClient.TransactionsRecurringGetError,
      },
      options,
    );
  }

  transactionsRefresh(
    request: ThePlaidApiClient.TransactionsRefreshRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransactionsRefreshResponse, ThePlaidApiClient.TransactionsRefreshError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/transactions/refresh"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: transactionsRefreshRequestSchema },
      },
      {
        success: { kind: "json", schema: transactionsRefreshResponseSchema },
        errorFactory: ThePlaidApiClient.TransactionsRefreshError,
      },
      options,
    );
  }

  transactionsRulesCreate(
    request: ThePlaidApiClient.TransactionsRulesCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransactionsRulesCreateResponse, ThePlaidApiClient.TransactionsRulesCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/beta/transactions/rules/v1/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: transactionsRulesCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: transactionsRulesCreateResponseSchema },
        errorFactory: ThePlaidApiClient.TransactionsRulesCreateError,
      },
      options,
    );
  }

  transactionsRulesList(
    request: ThePlaidApiClient.TransactionsRulesListRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransactionsRulesListResponse, ThePlaidApiClient.TransactionsRulesListError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/beta/transactions/rules/v1/list"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: transactionsRulesListRequestSchema },
      },
      {
        success: { kind: "json", schema: transactionsRulesListResponseSchema },
        errorFactory: ThePlaidApiClient.TransactionsRulesListError,
      },
      options,
    );
  }

  transactionsRulesRemove(
    request: ThePlaidApiClient.TransactionsRulesRemoveRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransactionsRulesRemoveResponse, ThePlaidApiClient.TransactionsRulesRemoveError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/beta/transactions/rules/v1/remove"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: transactionsRulesRemoveRequestSchema },
      },
      {
        success: { kind: "json", schema: transactionsRulesRemoveResponseSchema },
        errorFactory: ThePlaidApiClient.TransactionsRulesRemoveError,
      },
      options,
    );
  }

  transactionsSync(
    request: ThePlaidApiClient.TransactionsSyncRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransactionsSyncResponse, ThePlaidApiClient.TransactionsSyncError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/transactions/sync"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: transactionsSyncRequestSchema },
      },
      {
        success: { kind: "json", schema: transactionsSyncResponseSchema },
        errorFactory: ThePlaidApiClient.TransactionsSyncError,
      },
      options,
    );
  }

  transactionsUserInsightsGet(
    request: ThePlaidApiClient.TransactionsUserInsightsGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransactionsUserInsightsGetResponse, ThePlaidApiClient.TransactionsUserInsightsGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/beta/transactions/user_insights/v1/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: transactionsUserInsightsGetRequestSchema },
      },
      {
        success: { kind: "json", schema: transactionsUserInsightsGetResponseSchema },
        errorFactory: ThePlaidApiClient.TransactionsUserInsightsGetError,
      },
      options,
    );
  }

  transferAuthorizationCancel(
    request: ThePlaidApiClient.TransferAuthorizationCancelRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransferAuthorizationCancelResponse, ThePlaidApiClient.TransferAuthorizationCancelError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/transfer/authorization/cancel"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: transferAuthorizationCancelRequestSchema },
      },
      {
        success: { kind: "json", schema: transferAuthorizationCancelResponseSchema },
        errorFactory: ThePlaidApiClient.TransferAuthorizationCancelError,
      },
      options,
    );
  }

  transferAuthorizationCreate(
    request: ThePlaidApiClient.TransferAuthorizationCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransferAuthorizationCreateResponse, ThePlaidApiClient.TransferAuthorizationCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/transfer/authorization/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: transferAuthorizationCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: transferAuthorizationCreateResponseSchema },
        errorFactory: ThePlaidApiClient.TransferAuthorizationCreateError,
      },
      options,
    );
  }

  transferBalanceGet(
    request: ThePlaidApiClient.TransferBalanceGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransferBalanceGetResponse, ThePlaidApiClient.TransferBalanceGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/transfer/balance/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: transferBalanceGetRequestSchema },
      },
      {
        success: { kind: "json", schema: transferBalanceGetResponseSchema },
        errorFactory: ThePlaidApiClient.TransferBalanceGetError,
      },
      options,
    );
  }

  transferCancel(
    request: ThePlaidApiClient.TransferCancelRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransferCancelResponse, ThePlaidApiClient.TransferCancelError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/transfer/cancel"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: transferCancelRequestSchema },
      },
      {
        success: { kind: "json", schema: transferCancelResponseSchema },
        errorFactory: ThePlaidApiClient.TransferCancelError,
      },
      options,
    );
  }

  transferCapabilitiesGet(
    request: ThePlaidApiClient.TransferCapabilitiesGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransferCapabilitiesGetResponse, ThePlaidApiClient.TransferCapabilitiesGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/transfer/capabilities/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: transferCapabilitiesGetRequestSchema },
      },
      {
        success: { kind: "json", schema: transferCapabilitiesGetResponseSchema },
        errorFactory: ThePlaidApiClient.TransferCapabilitiesGetError,
      },
      options,
    );
  }

  transferConfigurationGet(
    request: ThePlaidApiClient.TransferConfigurationGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransferConfigurationGetResponse, ThePlaidApiClient.TransferConfigurationGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/transfer/configuration/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: transferConfigurationGetRequestSchema },
      },
      {
        success: { kind: "json", schema: transferConfigurationGetResponseSchema },
        errorFactory: ThePlaidApiClient.TransferConfigurationGetError,
      },
      options,
    );
  }

  transferCreate(
    request: ThePlaidApiClient.TransferCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransferCreateResponse, ThePlaidApiClient.TransferCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/transfer/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: transferCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: transferCreateResponseSchema },
        errorFactory: ThePlaidApiClient.TransferCreateError,
      },
      options,
    );
  }

  transferDiligenceDocumentUpload(
    request: ThePlaidApiClient.TransferDiligenceDocumentUploadRequestParams,
    options?: RequestOptions,
  ): ApiPromise<
    TransferDiligenceDocumentUploadResponse,
    ThePlaidApiClient.TransferDiligenceDocumentUploadError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/transfer/diligence/document/upload"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: transferDiligenceDocumentUploadRequestSchema },
      },
      {
        success: { kind: "json", schema: transferDiligenceDocumentUploadResponseSchema },
        errorFactory: ThePlaidApiClient.TransferDiligenceDocumentUploadError,
      },
      options,
    );
  }

  transferDiligenceSubmit(
    request: ThePlaidApiClient.TransferDiligenceSubmitRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransferDiligenceSubmitResponse, ThePlaidApiClient.TransferDiligenceSubmitError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/transfer/diligence/submit"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: transferDiligenceSubmitRequestSchema },
      },
      {
        success: { kind: "json", schema: transferDiligenceSubmitResponseSchema },
        errorFactory: ThePlaidApiClient.TransferDiligenceSubmitError,
      },
      options,
    );
  }

  transferEventList(
    request: ThePlaidApiClient.TransferEventListRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransferEventListResponse, ThePlaidApiClient.TransferEventListError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/transfer/event/list"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: transferEventListRequestSchema },
      },
      {
        success: { kind: "json", schema: transferEventListResponseSchema },
        errorFactory: ThePlaidApiClient.TransferEventListError,
      },
      options,
    );
  }

  transferEventSync(
    request: ThePlaidApiClient.TransferEventSyncRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransferEventSyncResponse, ThePlaidApiClient.TransferEventSyncError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/transfer/event/sync"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: transferEventSyncRequestSchema },
      },
      {
        success: { kind: "json", schema: transferEventSyncResponseSchema },
        errorFactory: ThePlaidApiClient.TransferEventSyncError,
      },
      options,
    );
  }

  transferGet(
    request: ThePlaidApiClient.TransferGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransferGetResponse, ThePlaidApiClient.TransferGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/transfer/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: transferGetRequestSchema },
      },
      {
        success: { kind: "json", schema: transferGetResponseSchema },
        errorFactory: ThePlaidApiClient.TransferGetError,
      },
      options,
    );
  }

  transferIntentCreate(
    request: ThePlaidApiClient.TransferIntentCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransferIntentCreateResponse, ThePlaidApiClient.TransferIntentCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/transfer/intent/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: transferIntentCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: transferIntentCreateResponseSchema },
        errorFactory: ThePlaidApiClient.TransferIntentCreateError,
      },
      options,
    );
  }

  transferIntentGet(
    request: ThePlaidApiClient.TransferIntentGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransferIntentGetResponse, ThePlaidApiClient.TransferIntentGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/transfer/intent/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: transferIntentGetRequestSchema },
      },
      {
        success: { kind: "json", schema: transferIntentGetResponseSchema },
        errorFactory: ThePlaidApiClient.TransferIntentGetError,
      },
      options,
    );
  }

  transferLedgerDeposit(
    request: ThePlaidApiClient.TransferLedgerDepositRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransferLedgerDepositResponse, ThePlaidApiClient.TransferLedgerDepositError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/transfer/ledger/deposit"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: transferLedgerDepositRequestSchema },
      },
      {
        success: { kind: "json", schema: transferLedgerDepositResponseSchema },
        errorFactory: ThePlaidApiClient.TransferLedgerDepositError,
      },
      options,
    );
  }

  transferLedgerDistribute(
    request: ThePlaidApiClient.TransferLedgerDistributeRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransferLedgerDistributeResponse, ThePlaidApiClient.TransferLedgerDistributeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/transfer/ledger/distribute"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: transferLedgerDistributeRequestSchema },
      },
      {
        success: { kind: "json", schema: transferLedgerDistributeResponseSchema },
        errorFactory: ThePlaidApiClient.TransferLedgerDistributeError,
      },
      options,
    );
  }

  transferLedgerEventList(
    request: ThePlaidApiClient.TransferLedgerEventListRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransferLedgerEventListResponse, ThePlaidApiClient.TransferLedgerEventListError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/transfer/ledger/event/list"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: transferLedgerEventListRequestSchema },
      },
      {
        success: { kind: "json", schema: transferLedgerEventListResponseSchema },
        errorFactory: ThePlaidApiClient.TransferLedgerEventListError,
      },
      options,
    );
  }

  transferLedgerGet(
    request: ThePlaidApiClient.TransferLedgerGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransferLedgerGetResponse, ThePlaidApiClient.TransferLedgerGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/transfer/ledger/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: transferLedgerGetRequestSchema },
      },
      {
        success: { kind: "json", schema: transferLedgerGetResponseSchema },
        errorFactory: ThePlaidApiClient.TransferLedgerGetError,
      },
      options,
    );
  }

  transferLedgerWithdraw(
    request: ThePlaidApiClient.TransferLedgerWithdrawRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransferLedgerWithdrawResponse, ThePlaidApiClient.TransferLedgerWithdrawError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/transfer/ledger/withdraw"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: transferLedgerWithdrawRequestSchema },
      },
      {
        success: { kind: "json", schema: transferLedgerWithdrawResponseSchema },
        errorFactory: ThePlaidApiClient.TransferLedgerWithdrawError,
      },
      options,
    );
  }

  transferList(
    request: ThePlaidApiClient.TransferListRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransferListResponse, ThePlaidApiClient.TransferListError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/transfer/list"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: transferListRequestSchema },
      },
      {
        success: { kind: "json", schema: transferListResponseSchema },
        errorFactory: ThePlaidApiClient.TransferListError,
      },
      options,
    );
  }

  transferMetricsGet(
    request: ThePlaidApiClient.TransferMetricsGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransferMetricsGetResponse, ThePlaidApiClient.TransferMetricsGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/transfer/metrics/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: transferMetricsGetRequestSchema },
      },
      {
        success: { kind: "json", schema: transferMetricsGetResponseSchema },
        errorFactory: ThePlaidApiClient.TransferMetricsGetError,
      },
      options,
    );
  }

  transferMigrateAccount(
    request: ThePlaidApiClient.TransferMigrateAccountRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransferMigrateAccountResponse, ThePlaidApiClient.TransferMigrateAccountError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/transfer/migrate_account"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: transferMigrateAccountRequestSchema },
      },
      {
        success: { kind: "json", schema: transferMigrateAccountResponseSchema },
        errorFactory: ThePlaidApiClient.TransferMigrateAccountError,
      },
      options,
    );
  }

  transferOriginatorCreate(
    request: ThePlaidApiClient.TransferOriginatorCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransferOriginatorCreateResponse, ThePlaidApiClient.TransferOriginatorCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/transfer/originator/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: transferOriginatorCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: transferOriginatorCreateResponseSchema },
        errorFactory: ThePlaidApiClient.TransferOriginatorCreateError,
      },
      options,
    );
  }

  transferOriginatorFundingAccountCreate(
    request: ThePlaidApiClient.TransferOriginatorFundingAccountCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<
    TransferOriginatorFundingAccountCreateResponse,
    ThePlaidApiClient.TransferOriginatorFundingAccountCreateError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/transfer/originator/funding_account/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: {
          kind: "json",
          value: request.body,
          schema: transferOriginatorFundingAccountCreateRequestSchema,
        },
      },
      {
        success: { kind: "json", schema: transferOriginatorFundingAccountCreateResponseSchema },
        errorFactory: ThePlaidApiClient.TransferOriginatorFundingAccountCreateError,
      },
      options,
    );
  }

  transferOriginatorFundingAccountUpdate(
    request: ThePlaidApiClient.TransferOriginatorFundingAccountUpdateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<
    TransferOriginatorFundingAccountUpdateResponse,
    ThePlaidApiClient.TransferOriginatorFundingAccountUpdateError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/transfer/originator/funding_account/update"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: {
          kind: "json",
          value: request.body,
          schema: transferOriginatorFundingAccountUpdateRequestSchema,
        },
      },
      {
        success: { kind: "json", schema: transferOriginatorFundingAccountUpdateResponseSchema },
        errorFactory: ThePlaidApiClient.TransferOriginatorFundingAccountUpdateError,
      },
      options,
    );
  }

  transferOriginatorGet(
    request: ThePlaidApiClient.TransferOriginatorGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransferOriginatorGetResponse, ThePlaidApiClient.TransferOriginatorGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/transfer/originator/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: transferOriginatorGetRequestSchema },
      },
      {
        success: { kind: "json", schema: transferOriginatorGetResponseSchema },
        errorFactory: ThePlaidApiClient.TransferOriginatorGetError,
      },
      options,
    );
  }

  transferOriginatorList(
    request: ThePlaidApiClient.TransferOriginatorListRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransferOriginatorListResponse, ThePlaidApiClient.TransferOriginatorListError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/transfer/originator/list"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: transferOriginatorListRequestSchema },
      },
      {
        success: { kind: "json", schema: transferOriginatorListResponseSchema },
        errorFactory: ThePlaidApiClient.TransferOriginatorListError,
      },
      options,
    );
  }

  transferPlatformOriginatorCreate(
    request: ThePlaidApiClient.TransferPlatformOriginatorCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<
    TransferPlatformOriginatorCreateResponse,
    ThePlaidApiClient.TransferPlatformOriginatorCreateError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/transfer/platform/originator/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: transferPlatformOriginatorCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: transferPlatformOriginatorCreateResponseSchema },
        errorFactory: ThePlaidApiClient.TransferPlatformOriginatorCreateError,
      },
      options,
    );
  }

  transferPlatformPersonCreate(
    request: ThePlaidApiClient.TransferPlatformPersonCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransferPlatformPersonCreateResponse, ThePlaidApiClient.TransferPlatformPersonCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/transfer/platform/person/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: transferPlatformPersonCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: transferPlatformPersonCreateResponseSchema },
        errorFactory: ThePlaidApiClient.TransferPlatformPersonCreateError,
      },
      options,
    );
  }

  transferPlatformRequirementSubmit(
    request: ThePlaidApiClient.TransferPlatformRequirementSubmitRequestParams,
    options?: RequestOptions,
  ): ApiPromise<
    TransferPlatformRequirementSubmitResponse,
    ThePlaidApiClient.TransferPlatformRequirementSubmitError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/transfer/platform/requirement/submit"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: transferPlatformRequirementSubmitRequestSchema },
      },
      {
        success: { kind: "json", schema: transferPlatformRequirementSubmitResponseSchema },
        errorFactory: ThePlaidApiClient.TransferPlatformRequirementSubmitError,
      },
      options,
    );
  }

  transferQuestionnaireCreate(
    request: ThePlaidApiClient.TransferQuestionnaireCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransferQuestionnaireCreateResponse, ThePlaidApiClient.TransferQuestionnaireCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/transfer/questionnaire/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: transferQuestionnaireCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: transferQuestionnaireCreateResponseSchema },
        errorFactory: ThePlaidApiClient.TransferQuestionnaireCreateError,
      },
      options,
    );
  }

  transferRecurringCancel(
    request: ThePlaidApiClient.TransferRecurringCancelRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransferRecurringCancelResponse, ThePlaidApiClient.TransferRecurringCancelError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/transfer/recurring/cancel"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: transferRecurringCancelRequestSchema },
      },
      {
        success: { kind: "json", schema: transferRecurringCancelResponseSchema },
        errorFactory: ThePlaidApiClient.TransferRecurringCancelError,
      },
      options,
    );
  }

  transferRecurringCreate(
    request: ThePlaidApiClient.TransferRecurringCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransferRecurringCreateResponse, ThePlaidApiClient.TransferRecurringCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/transfer/recurring/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: transferRecurringCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: transferRecurringCreateResponseSchema },
        errorFactory: ThePlaidApiClient.TransferRecurringCreateError,
      },
      options,
    );
  }

  transferRecurringGet(
    request: ThePlaidApiClient.TransferRecurringGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransferRecurringGetResponse, ThePlaidApiClient.TransferRecurringGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/transfer/recurring/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: transferRecurringGetRequestSchema },
      },
      {
        success: { kind: "json", schema: transferRecurringGetResponseSchema },
        errorFactory: ThePlaidApiClient.TransferRecurringGetError,
      },
      options,
    );
  }

  transferRecurringList(
    request: ThePlaidApiClient.TransferRecurringListRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransferRecurringListResponse, ThePlaidApiClient.TransferRecurringListError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/transfer/recurring/list"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: transferRecurringListRequestSchema },
      },
      {
        success: { kind: "json", schema: transferRecurringListResponseSchema },
        errorFactory: ThePlaidApiClient.TransferRecurringListError,
      },
      options,
    );
  }

  transferRefundCancel(
    request: ThePlaidApiClient.TransferRefundCancelRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransferRefundCancelResponse, ThePlaidApiClient.TransferRefundCancelError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/transfer/refund/cancel"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: transferRefundCancelRequestSchema },
      },
      {
        success: { kind: "json", schema: transferRefundCancelResponseSchema },
        errorFactory: ThePlaidApiClient.TransferRefundCancelError,
      },
      options,
    );
  }

  transferRefundCreate(
    request: ThePlaidApiClient.TransferRefundCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransferRefundCreateResponse, ThePlaidApiClient.TransferRefundCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/transfer/refund/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: transferRefundCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: transferRefundCreateResponseSchema },
        errorFactory: ThePlaidApiClient.TransferRefundCreateError,
      },
      options,
    );
  }

  transferRefundGet(
    request: ThePlaidApiClient.TransferRefundGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransferRefundGetResponse, ThePlaidApiClient.TransferRefundGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/transfer/refund/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: transferRefundGetRequestSchema },
      },
      {
        success: { kind: "json", schema: transferRefundGetResponseSchema },
        errorFactory: ThePlaidApiClient.TransferRefundGetError,
      },
      options,
    );
  }

  transferRepaymentList(
    request: ThePlaidApiClient.TransferRepaymentListRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransferRepaymentListResponse, ThePlaidApiClient.TransferRepaymentListError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/transfer/repayment/list"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: transferRepaymentListRequestSchema },
      },
      {
        success: { kind: "json", schema: transferRepaymentListResponseSchema },
        errorFactory: ThePlaidApiClient.TransferRepaymentListError,
      },
      options,
    );
  }

  transferRepaymentReturnList(
    request: ThePlaidApiClient.TransferRepaymentReturnListRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransferRepaymentReturnListResponse, ThePlaidApiClient.TransferRepaymentReturnListError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/transfer/repayment/return/list"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: transferRepaymentReturnListRequestSchema },
      },
      {
        success: { kind: "json", schema: transferRepaymentReturnListResponseSchema },
        errorFactory: ThePlaidApiClient.TransferRepaymentReturnListError,
      },
      options,
    );
  }

  transferReturnRecover(
    request: ThePlaidApiClient.TransferReturnRecoverRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransferReturnRecoverResponse, ThePlaidApiClient.TransferReturnRecoverError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/transfer/return/recover"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: transferReturnRecoverRequestSchema },
      },
      {
        success: { kind: "json", schema: transferReturnRecoverResponseSchema },
        errorFactory: ThePlaidApiClient.TransferReturnRecoverError,
      },
      options,
    );
  }

  transferSweepGet(
    request: ThePlaidApiClient.TransferSweepGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransferSweepGetResponse, ThePlaidApiClient.TransferSweepGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/transfer/sweep/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: transferSweepGetRequestSchema },
      },
      {
        success: { kind: "json", schema: transferSweepGetResponseSchema },
        errorFactory: ThePlaidApiClient.TransferSweepGetError,
      },
      options,
    );
  }

  transferSweepList(
    request: ThePlaidApiClient.TransferSweepListRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransferSweepListResponse, ThePlaidApiClient.TransferSweepListError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/transfer/sweep/list"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: transferSweepListRequestSchema },
      },
      {
        success: { kind: "json", schema: transferSweepListResponseSchema },
        errorFactory: ThePlaidApiClient.TransferSweepListError,
      },
      options,
    );
  }

  userAccountSessionEventSend(
    request: ThePlaidApiClient.UserAccountSessionEventSendRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UserAccountSessionEventSendResponse, ThePlaidApiClient.UserAccountSessionEventSendError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/user_account/session/event/send"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: userAccountSessionEventSendRequestSchema },
      },
      {
        success: { kind: "json", schema: userAccountSessionEventSendResponseSchema },
        errorFactory: ThePlaidApiClient.UserAccountSessionEventSendError,
      },
      options,
    );
  }

  userAccountSessionGet(
    request: ThePlaidApiClient.UserAccountSessionGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UserAccountSessionGetResponse, ThePlaidApiClient.UserAccountSessionGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/user_account/session/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: userAccountSessionGetRequestSchema },
      },
      {
        success: { kind: "json", schema: userAccountSessionGetResponseSchema },
        errorFactory: ThePlaidApiClient.UserAccountSessionGetError,
      },
      options,
    );
  }

  userCreate(
    request: ThePlaidApiClient.UserCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UserCreateResponse, ThePlaidApiClient.UserCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/user/create"),
        auth: anyAuth(
          allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
          this.#auth.oauth2,
        ),
        headers: [
          {
            name: "Plaid-New-User-API-Enabled",
            value: request.plaidNewUserApiEnabled,
            schema: s.defaulted(s.boolean(), false),
          },
        ],
        body: { kind: "json", value: request.body, schema: userCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: userCreateResponseSchema },
        errorFactory: ThePlaidApiClient.UserCreateError,
      },
      options,
    );
  }

  userFinancialDataRefresh(
    request: ThePlaidApiClient.UserFinancialDataRefreshRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UserFinancialDataRefreshResponse, ThePlaidApiClient.UserFinancialDataRefreshError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/user/financial_data/refresh"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: userFinancialDataRefreshRequestSchema },
      },
      {
        success: { kind: "json", schema: userFinancialDataRefreshResponseSchema },
        errorFactory: ThePlaidApiClient.UserFinancialDataRefreshError,
      },
      options,
    );
  }

  userGet(
    request: ThePlaidApiClient.UserGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UserGetResponse, ThePlaidApiClient.UserGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/user/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        headers: [
          {
            name: "Plaid-New-User-API-Enabled",
            value: request.plaidNewUserApiEnabled,
            schema: s.defaulted(s.boolean(), false),
          },
        ],
        body: { kind: "json", value: request.body, schema: userGetRequestSchema },
      },
      {
        success: { kind: "json", schema: userGetResponseSchema },
        errorFactory: ThePlaidApiClient.UserGetError,
      },
      options,
    );
  }

  userIdentityRemove(
    request: ThePlaidApiClient.UserIdentityRemoveRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UserIdentityRemoveResponse, ThePlaidApiClient.UserIdentityRemoveError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/user/identity/remove"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        headers: [
          {
            name: "Plaid-New-User-API-Enabled",
            value: request.plaidNewUserApiEnabled,
            schema: s.defaulted(s.boolean(), false),
          },
        ],
        body: { kind: "json", value: request.body, schema: userIdentityRemoveRequestSchema },
      },
      {
        success: { kind: "json", schema: userIdentityRemoveResponseSchema },
        errorFactory: ThePlaidApiClient.UserIdentityRemoveError,
      },
      options,
    );
  }

  userItemsAssociate(
    request: ThePlaidApiClient.UserItemsAssociateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UserItemsAssociateResponse, ThePlaidApiClient.UserItemsAssociateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/user/items/associate"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: userItemsAssociateRequestSchema },
      },
      {
        success: { kind: "json", schema: userItemsAssociateResponseSchema },
        errorFactory: ThePlaidApiClient.UserItemsAssociateError,
      },
      options,
    );
  }

  userItemsGet(
    request: ThePlaidApiClient.UserItemsGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UserItemsGetResponse, ThePlaidApiClient.UserItemsGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/user/items/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: userItemsGetRequestSchema },
      },
      {
        success: { kind: "json", schema: userItemsGetResponseSchema },
        errorFactory: ThePlaidApiClient.UserItemsGetError,
      },
      options,
    );
  }

  userItemsRemove(
    request: ThePlaidApiClient.UserItemsRemoveRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UserItemsRemoveResponse, ThePlaidApiClient.UserItemsRemoveError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/user/items/remove"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: userItemsRemoveRequestSchema },
      },
      {
        success: { kind: "json", schema: userItemsRemoveResponseSchema },
        errorFactory: ThePlaidApiClient.UserItemsRemoveError,
      },
      options,
    );
  }

  userProductsTerminate(
    request: ThePlaidApiClient.UserProductsTerminateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UserProductsTerminateResponse, ThePlaidApiClient.UserProductsTerminateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/user/products/terminate"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: userProductsTerminateRequestSchema },
      },
      {
        success: { kind: "json", schema: userProductsTerminateResponseSchema },
        errorFactory: ThePlaidApiClient.UserProductsTerminateError,
      },
      options,
    );
  }

  userRemove(
    request: ThePlaidApiClient.UserRemoveRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UserRemoveResponse, ThePlaidApiClient.UserRemoveError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/user/remove"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        headers: [
          {
            name: "Plaid-New-User-API-Enabled",
            value: request.plaidNewUserApiEnabled,
            schema: s.defaulted(s.boolean(), false),
          },
        ],
        body: { kind: "json", value: request.body, schema: userRemoveRequestSchema },
      },
      {
        success: { kind: "json", schema: userRemoveResponseSchema },
        errorFactory: ThePlaidApiClient.UserRemoveError,
      },
      options,
    );
  }

  userThirdPartyTokenCreate(
    request: ThePlaidApiClient.UserThirdPartyTokenCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UserThirdPartyTokenCreateResponse, ThePlaidApiClient.UserThirdPartyTokenCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/user/third_party_token/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: userThirdPartyTokenCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: userThirdPartyTokenCreateResponseSchema },
        errorFactory: ThePlaidApiClient.UserThirdPartyTokenCreateError,
      },
      options,
    );
  }

  userThirdPartyTokenRemove(
    request: ThePlaidApiClient.UserThirdPartyTokenRemoveRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UserThirdPartyTokenRemoveResponse, ThePlaidApiClient.UserThirdPartyTokenRemoveError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/user/third_party_token/remove"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: userThirdPartyTokenRemoveRequestSchema },
      },
      {
        success: { kind: "json", schema: userThirdPartyTokenRemoveResponseSchema },
        errorFactory: ThePlaidApiClient.UserThirdPartyTokenRemoveError,
      },
      options,
    );
  }

  userTransactionsRefresh(
    request: ThePlaidApiClient.UserTransactionsRefreshRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UserTransactionsRefreshResponse, ThePlaidApiClient.UserTransactionsRefreshError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/user/transactions/refresh"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: userTransactionsRefreshRequestSchema },
      },
      {
        success: { kind: "json", schema: userTransactionsRefreshResponseSchema },
        errorFactory: ThePlaidApiClient.UserTransactionsRefreshError,
      },
      options,
    );
  }

  userUpdate(
    request: ThePlaidApiClient.UserUpdateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UserUpdateResponse, ThePlaidApiClient.UserUpdateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/user/update"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        headers: [
          {
            name: "Plaid-New-User-API-Enabled",
            value: request.plaidNewUserApiEnabled,
            schema: s.defaulted(s.boolean(), false),
          },
        ],
        body: { kind: "json", value: request.body, schema: userUpdateRequestSchema },
      },
      {
        success: { kind: "json", schema: userUpdateResponseSchema },
        errorFactory: ThePlaidApiClient.UserUpdateError,
      },
      options,
    );
  }

  walletCreate(
    request: ThePlaidApiClient.WalletCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<WalletCreateResponse, ThePlaidApiClient.WalletCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/wallet/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: walletCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: walletCreateResponseSchema },
        errorFactory: ThePlaidApiClient.WalletCreateError,
      },
      options,
    );
  }

  walletGet(
    request: ThePlaidApiClient.WalletGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<WalletGetResponse, ThePlaidApiClient.WalletGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/wallet/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: walletGetRequestSchema },
      },
      {
        success: { kind: "json", schema: walletGetResponseSchema },
        errorFactory: ThePlaidApiClient.WalletGetError,
      },
      options,
    );
  }

  walletList(
    request: ThePlaidApiClient.WalletListRequestParams,
    options?: RequestOptions,
  ): ApiPromise<WalletListResponse, ThePlaidApiClient.WalletListError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/wallet/list"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: walletListRequestSchema },
      },
      {
        success: { kind: "json", schema: walletListResponseSchema },
        errorFactory: ThePlaidApiClient.WalletListError,
      },
      options,
    );
  }

  walletTransactionExecute(
    request: ThePlaidApiClient.WalletTransactionExecuteRequestParams,
    options?: RequestOptions,
  ): ApiPromise<WalletTransactionExecuteResponse, ThePlaidApiClient.WalletTransactionExecuteError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/wallet/transaction/execute"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: walletTransactionExecuteRequestSchema },
      },
      {
        success: { kind: "json", schema: walletTransactionExecuteResponseSchema },
        errorFactory: ThePlaidApiClient.WalletTransactionExecuteError,
      },
      options,
    );
  }

  walletTransactionGet(
    request: ThePlaidApiClient.WalletTransactionGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<WalletTransactionGetResponse, ThePlaidApiClient.WalletTransactionGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/wallet/transaction/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: walletTransactionGetRequestSchema },
      },
      {
        success: { kind: "json", schema: walletTransactionGetResponseSchema },
        errorFactory: ThePlaidApiClient.WalletTransactionGetError,
      },
      options,
    );
  }

  walletTransactionList(
    request: ThePlaidApiClient.WalletTransactionListRequestParams,
    options?: RequestOptions,
  ): ApiPromise<WalletTransactionListResponse, ThePlaidApiClient.WalletTransactionListError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/wallet/transaction/list"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: walletTransactionListRequestSchema },
      },
      {
        success: { kind: "json", schema: walletTransactionListResponseSchema },
        errorFactory: ThePlaidApiClient.WalletTransactionListError,
      },
      options,
    );
  }

  watchlistScreeningEntityCreate(
    request: ThePlaidApiClient.WatchlistScreeningEntityCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<WatchlistScreeningEntityCreateResponse, ResponseError> {
    return this.#rawClient.execute<WatchlistScreeningEntityCreateResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/watchlist_screening/entity/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: watchlistScreeningEntityCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: watchlistScreeningEntityCreateResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  watchlistScreeningEntityGet(
    request: ThePlaidApiClient.WatchlistScreeningEntityGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<WatchlistScreeningEntityGetResponse, ResponseError> {
    return this.#rawClient.execute<WatchlistScreeningEntityGetResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/watchlist_screening/entity/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: watchlistScreeningEntityGetRequestSchema },
      },
      {
        success: { kind: "json", schema: watchlistScreeningEntityGetResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  watchlistScreeningEntityHistoryList(
    request: ThePlaidApiClient.WatchlistScreeningEntityHistoryListRequestParams,
    options?: RequestOptions,
  ): ApiPromise<WatchlistScreeningEntityHistoryListResponse, ResponseError> {
    return this.#rawClient.execute<WatchlistScreeningEntityHistoryListResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/watchlist_screening/entity/history/list"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: watchlistScreeningEntityHistoryListRequestSchema },
      },
      {
        success: { kind: "json", schema: watchlistScreeningEntityHistoryListResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  watchlistScreeningEntityHitList(
    request: ThePlaidApiClient.WatchlistScreeningEntityHitListRequestParams,
    options?: RequestOptions,
  ): ApiPromise<WatchlistScreeningEntityHitListResponse, ResponseError> {
    return this.#rawClient.execute<WatchlistScreeningEntityHitListResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/watchlist_screening/entity/hit/list"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: watchlistScreeningEntityHitListRequestSchema },
      },
      {
        success: { kind: "json", schema: watchlistScreeningEntityHitListResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  watchlistScreeningEntityList(
    request: ThePlaidApiClient.WatchlistScreeningEntityListRequestParams,
    options?: RequestOptions,
  ): ApiPromise<WatchlistScreeningEntityListResponse, ResponseError> {
    return this.#rawClient.execute<WatchlistScreeningEntityListResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/watchlist_screening/entity/list"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: watchlistScreeningEntityListRequestSchema },
      },
      {
        success: { kind: "json", schema: watchlistScreeningEntityListResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  watchlistScreeningEntityProgramGet(
    request: ThePlaidApiClient.WatchlistScreeningEntityProgramGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<WatchlistScreeningEntityProgramGetResponse, ResponseError> {
    return this.#rawClient.execute<WatchlistScreeningEntityProgramGetResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/watchlist_screening/entity/program/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: watchlistScreeningEntityProgramGetRequestSchema },
      },
      {
        success: { kind: "json", schema: watchlistScreeningEntityProgramGetResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  watchlistScreeningEntityProgramList(
    request: ThePlaidApiClient.WatchlistScreeningEntityProgramListRequestParams,
    options?: RequestOptions,
  ): ApiPromise<WatchlistScreeningEntityProgramListResponse, ResponseError> {
    return this.#rawClient.execute<WatchlistScreeningEntityProgramListResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/watchlist_screening/entity/program/list"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: watchlistScreeningEntityProgramListRequestSchema },
      },
      {
        success: { kind: "json", schema: watchlistScreeningEntityProgramListResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  watchlistScreeningEntityReviewCreate(
    request: ThePlaidApiClient.WatchlistScreeningEntityReviewCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<WatchlistScreeningEntityReviewCreateResponse, ResponseError> {
    return this.#rawClient.execute<WatchlistScreeningEntityReviewCreateResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/watchlist_screening/entity/review/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: {
          kind: "json",
          value: request.body,
          schema: watchlistScreeningEntityReviewCreateRequestSchema,
        },
      },
      {
        success: { kind: "json", schema: watchlistScreeningEntityReviewCreateResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  watchlistScreeningEntityReviewList(
    request: ThePlaidApiClient.WatchlistScreeningEntityReviewListRequestParams,
    options?: RequestOptions,
  ): ApiPromise<WatchlistScreeningEntityReviewListResponse, ResponseError> {
    return this.#rawClient.execute<WatchlistScreeningEntityReviewListResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/watchlist_screening/entity/review/list"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: watchlistScreeningEntityReviewListRequestSchema },
      },
      {
        success: { kind: "json", schema: watchlistScreeningEntityReviewListResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  watchlistScreeningEntityUpdate(
    request: ThePlaidApiClient.WatchlistScreeningEntityUpdateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<WatchlistScreeningEntityUpdateResponse, ResponseError> {
    return this.#rawClient.execute<WatchlistScreeningEntityUpdateResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/watchlist_screening/entity/update"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: watchlistScreeningEntityUpdateRequestSchema },
      },
      {
        success: { kind: "json", schema: watchlistScreeningEntityUpdateResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  watchlistScreeningIndividualCreate(
    request: ThePlaidApiClient.WatchlistScreeningIndividualCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<WatchlistScreeningIndividualCreateResponse, ResponseError> {
    return this.#rawClient.execute<WatchlistScreeningIndividualCreateResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/watchlist_screening/individual/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: watchlistScreeningIndividualCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: watchlistScreeningIndividualCreateResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  watchlistScreeningIndividualGet(
    request: ThePlaidApiClient.WatchlistScreeningIndividualGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<WatchlistScreeningIndividualGetResponse, ResponseError> {
    return this.#rawClient.execute<WatchlistScreeningIndividualGetResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/watchlist_screening/individual/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: watchlistScreeningIndividualGetRequestSchema },
      },
      {
        success: { kind: "json", schema: watchlistScreeningIndividualGetResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  watchlistScreeningIndividualHistoryList(
    request: ThePlaidApiClient.WatchlistScreeningIndividualHistoryListRequestParams,
    options?: RequestOptions,
  ): ApiPromise<WatchlistScreeningIndividualHistoryListResponse, ResponseError> {
    return this.#rawClient.execute<WatchlistScreeningIndividualHistoryListResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/watchlist_screening/individual/history/list"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: {
          kind: "json",
          value: request.body,
          schema: watchlistScreeningIndividualHistoryListRequestSchema,
        },
      },
      {
        success: { kind: "json", schema: watchlistScreeningIndividualHistoryListResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  watchlistScreeningIndividualHitList(
    request: ThePlaidApiClient.WatchlistScreeningIndividualHitListRequestParams,
    options?: RequestOptions,
  ): ApiPromise<WatchlistScreeningIndividualHitListResponse, ResponseError> {
    return this.#rawClient.execute<WatchlistScreeningIndividualHitListResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/watchlist_screening/individual/hit/list"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: watchlistScreeningIndividualHitListRequestSchema },
      },
      {
        success: { kind: "json", schema: watchlistScreeningIndividualHitListResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  watchlistScreeningIndividualList(
    request: ThePlaidApiClient.WatchlistScreeningIndividualListRequestParams,
    options?: RequestOptions,
  ): ApiPromise<WatchlistScreeningIndividualListResponse, ResponseError> {
    return this.#rawClient.execute<WatchlistScreeningIndividualListResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/watchlist_screening/individual/list"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: watchlistScreeningIndividualListRequestSchema },
      },
      {
        success: { kind: "json", schema: watchlistScreeningIndividualListResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  watchlistScreeningIndividualProgramGet(
    request: ThePlaidApiClient.WatchlistScreeningIndividualProgramGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<WatchlistScreeningIndividualProgramGetResponse, ResponseError> {
    return this.#rawClient.execute<WatchlistScreeningIndividualProgramGetResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/watchlist_screening/individual/program/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: {
          kind: "json",
          value: request.body,
          schema: watchlistScreeningIndividualProgramGetRequestSchema,
        },
      },
      {
        success: { kind: "json", schema: watchlistScreeningIndividualProgramGetResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  watchlistScreeningIndividualProgramList(
    request: ThePlaidApiClient.WatchlistScreeningIndividualProgramListRequestParams,
    options?: RequestOptions,
  ): ApiPromise<WatchlistScreeningIndividualProgramListResponse, ResponseError> {
    return this.#rawClient.execute<WatchlistScreeningIndividualProgramListResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/watchlist_screening/individual/program/list"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: {
          kind: "json",
          value: request.body,
          schema: watchlistScreeningIndividualProgramListRequestSchema,
        },
      },
      {
        success: { kind: "json", schema: watchlistScreeningIndividualProgramListResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  watchlistScreeningIndividualReviewCreate(
    request: ThePlaidApiClient.WatchlistScreeningIndividualReviewCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<WatchlistScreeningIndividualReviewCreateResponse, ResponseError> {
    return this.#rawClient.execute<WatchlistScreeningIndividualReviewCreateResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/watchlist_screening/individual/review/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: {
          kind: "json",
          value: request.body,
          schema: watchlistScreeningIndividualReviewCreateRequestSchema,
        },
      },
      {
        success: { kind: "json", schema: watchlistScreeningIndividualReviewCreateResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  watchlistScreeningIndividualReviewList(
    request: ThePlaidApiClient.WatchlistScreeningIndividualReviewListRequestParams,
    options?: RequestOptions,
  ): ApiPromise<WatchlistScreeningIndividualReviewListResponse, ResponseError> {
    return this.#rawClient.execute<WatchlistScreeningIndividualReviewListResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/watchlist_screening/individual/review/list"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: {
          kind: "json",
          value: request.body,
          schema: watchlistScreeningIndividualReviewListRequestSchema,
        },
      },
      {
        success: { kind: "json", schema: watchlistScreeningIndividualReviewListResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  watchlistScreeningIndividualUpdate(
    request: ThePlaidApiClient.WatchlistScreeningIndividualUpdateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<WatchlistScreeningIndividualUpdateResponse, ResponseError> {
    return this.#rawClient.execute<WatchlistScreeningIndividualUpdateResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/watchlist_screening/individual/update"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: watchlistScreeningIndividualUpdateRequestSchema },
      },
      {
        success: { kind: "json", schema: watchlistScreeningIndividualUpdateResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  webhookVerificationKeyGet(
    request: ThePlaidApiClient.WebhookVerificationKeyGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<WebhookVerificationKeyGetResponse, ThePlaidApiClient.WebhookVerificationKeyGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/webhook_verification_key/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        body: { kind: "json", value: request.body, schema: webhookVerificationKeyGetRequestSchema },
      },
      {
        success: { kind: "json", schema: webhookVerificationKeyGetResponseSchema },
        errorFactory: ThePlaidApiClient.WebhookVerificationKeyGetError,
      },
      options,
    );
  }
}

export namespace ThePlaidApiClient {
  export type AccountsBalanceGetRequestParams = {
    body: AccountsBalanceGetRequest;
  };

  export class AccountsBalanceGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<AccountsBalanceGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type AccountsGetRequestParams = {
    body: AccountsGetRequest;
  };

  export class AccountsGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<AccountsGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ApplicationGetRequestParams = {
    body: ApplicationGetRequest;
  };

  export class ApplicationGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<ApplicationGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type AssetReportAuditCopyCreateRequestParams = {
    body: AssetReportAuditCopyCreateRequest;
  };

  export class AssetReportAuditCopyCreateError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<AssetReportAuditCopyCreateError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type AssetReportAuditCopyGetRequestParams = {
    body: AssetReportAuditCopyGetRequest;
  };

  export class AssetReportAuditCopyGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<AssetReportAuditCopyGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type AssetReportAuditCopyPdfGetRequestParams = {
    body: AssetReportAuditCopyPdfGetRequest;
  };

  export class AssetReportAuditCopyPdfGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<AssetReportAuditCopyPdfGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type AssetReportAuditCopyRemoveRequestParams = {
    body: AssetReportAuditCopyRemoveRequest;
  };

  export class AssetReportAuditCopyRemoveError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<AssetReportAuditCopyRemoveError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type AssetReportCreateRequestParams = {
    body: AssetReportCreateRequest;
  };

  export class AssetReportCreateError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<AssetReportCreateError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type AssetReportFilterRequestParams = {
    body: AssetReportFilterRequest;
  };

  export class AssetReportFilterError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<AssetReportFilterError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type AssetReportGetRequestParams = {
    body: AssetReportGetRequest;
  };

  export class AssetReportGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<AssetReportGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type AssetReportPdfGetRequestParams = {
    body: AssetReportPdfGetRequest;
  };

  export class AssetReportPdfGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<AssetReportPdfGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type AssetReportRefreshRequestParams = {
    body: AssetReportRefreshRequest;
  };

  export class AssetReportRefreshError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<AssetReportRefreshError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type AssetReportRemoveRequestParams = {
    body: AssetReportRemoveRequest;
  };

  export class AssetReportRemoveError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<AssetReportRemoveError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type AuthGetRequestParams = {
    body: AuthGetRequest;
  };

  export class AuthGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<AuthGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type AuthVerifyRequestParams = {
    body: AuthVerifyRequest;
  };

  export class AuthVerifyError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<AuthVerifyError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type BankTransferBalanceGetRequestParams = {
    body: BankTransferBalanceGetRequest;
  };

  export class BankTransferBalanceGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<BankTransferBalanceGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type BankTransferCancelRequestParams = {
    body: BankTransferCancelRequest;
  };

  export class BankTransferCancelError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<BankTransferCancelError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type BankTransferCreateRequestParams = {
    body: BankTransferCreateRequest;
  };

  export class BankTransferCreateError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<BankTransferCreateError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type BankTransferEventListRequestParams = {
    body: BankTransferEventListRequest;
  };

  export class BankTransferEventListError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<BankTransferEventListError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type BankTransferEventSyncRequestParams = {
    body: BankTransferEventSyncRequest;
  };

  export class BankTransferEventSyncError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<BankTransferEventSyncError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type BankTransferGetRequestParams = {
    body: BankTransferGetRequest;
  };

  export class BankTransferGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<BankTransferGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type BankTransferListRequestParams = {
    body: BankTransferListRequest;
  };

  export class BankTransferListError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<BankTransferListError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type BankTransferMigrateAccountRequestParams = {
    body: BankTransferMigrateAccountRequest;
  };

  export class BankTransferMigrateAccountError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<BankTransferMigrateAccountError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type BankTransferSweepGetRequestParams = {
    body: BankTransferSweepGetRequest;
  };

  export class BankTransferSweepGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<BankTransferSweepGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type BankTransferSweepListRequestParams = {
    body: BankTransferSweepListRequest;
  };

  export class BankTransferSweepListError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<BankTransferSweepListError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type BeaconAccountRiskEvaluateRequestParams = {
    body: BeaconAccountRiskEvaluateRequest;
  };

  export class BeaconAccountRiskEvaluateError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<BeaconAccountRiskEvaluateError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type BeaconDuplicateGetRequestParams = {
    body: BeaconDuplicateGetRequest;
  };

  export type BeaconReportCreateRequestParams = {
    body: BeaconReportCreateRequest;
  };

  export type BeaconReportGetRequestParams = {
    body: BeaconReportGetRequest;
  };

  export type BeaconReportListRequestParams = {
    body: BeaconReportListRequest;
  };

  export type BeaconReportSyndicationGetRequestParams = {
    body: BeaconReportSyndicationGetRequest;
  };

  export type BeaconReportSyndicationListRequestParams = {
    body: BeaconReportSyndicationListRequest;
  };

  export type BeaconUserAccountInsightsGetRequestParams = {
    body: BeaconUserAccountInsightsGetRequest;
  };

  export type BeaconUserCreateRequestParams = {
    body: BeaconUserCreateRequest;
  };

  export type BeaconUserGetRequestParams = {
    body: BeaconUserGetRequest;
  };

  export type BeaconUserHistoryListRequestParams = {
    body: BeaconUserHistoryListRequest;
  };

  export type BeaconUserReviewRequestParams = {
    body: BeaconUserReviewRequest;
  };

  export type BeaconUserUpdateRequestParams = {
    body: BeaconUserUpdateRequest;
  };

  export type BetaEwaReportV1GetRequestParams = {
    body: BetaEwaReportV1GetRequest;
  };

  export class BetaEwaReportV1GetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<BetaEwaReportV1GetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type BetaPartnerCustomerV1CreateRequestParams = {
    body: BetaPartnerCustomerV1CreateRequest;
  };

  export class BetaPartnerCustomerV1CreateError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<BetaPartnerCustomerV1CreateError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type BetaPartnerCustomerV1EnableRequestParams = {
    body: BetaPartnerCustomerV1EnableRequest;
  };

  export class BetaPartnerCustomerV1EnableError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<BetaPartnerCustomerV1EnableError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type BetaPartnerCustomerV1GetRequestParams = {
    body: BetaPartnerCustomerV1GetRequest;
  };

  export class BetaPartnerCustomerV1GetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<BetaPartnerCustomerV1GetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type BetaPartnerCustomerV1UpdateRequestParams = {
    body: BetaPartnerCustomerV1UpdateRequest;
  };

  export class BetaPartnerCustomerV1UpdateError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<BetaPartnerCustomerV1UpdateError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type BusinessVerificationCreateRequestParams = {
    body: BusinessVerificationCreateRequest;
  };

  export type BusinessVerificationGetRequestParams = {
    body: BusinessVerificationGetRequest;
  };

  export type CashflowReportGetRequestParams = {
    body: CashflowReportGetRequest;
  };

  export class CashflowReportGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<CashflowReportGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CashflowReportInsightsGetRequestParams = {
    body: CashflowReportInsightsGetRequest;
  };

  export class CashflowReportInsightsGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<CashflowReportInsightsGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CashflowReportRefreshRequestParams = {
    body: CashflowReportRefreshRequest;
  };

  export class CashflowReportRefreshError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<CashflowReportRefreshError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CashflowReportTransactionsGetRequestParams = {
    body: CashflowReportTransactionsGetRequest;
  };

  export class CashflowReportTransactionsGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<CashflowReportTransactionsGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CategoriesGetRequest = {
    body: Record<string, unknown>;
  };

  export class CategoriesGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<CategoriesGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ConsentEventsGetRequestParams = {
    body: ConsentEventsGetRequest;
  };

  export class ConsentEventsGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<ConsentEventsGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ConsumerReportPdfGetRequestParams = {
    body: ConsumerReportPdfGetRequest;
  };

  export class ConsumerReportPdfGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<ConsumerReportPdfGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CraCheckReportBaseReportGetRequestParams = {
    body: CraCheckReportBaseReportGetRequest;
  };

  export class CraCheckReportBaseReportGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<CraCheckReportBaseReportGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CraCheckReportCashflowInsightsGetRequestParams = {
    body: CraCheckReportCashflowInsightsGetRequest;
  };

  export class CraCheckReportCashflowInsightsGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<CraCheckReportCashflowInsightsGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CraCheckReportCreateRequestParams = {
    body: CraCheckReportCreateRequest;
  };

  export class CraCheckReportCreateError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<CraCheckReportCreateError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CraCheckReportIncomeInsightsGetRequestParams = {
    body: CraCheckReportIncomeInsightsGetRequest;
  };

  export class CraCheckReportIncomeInsightsGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<CraCheckReportIncomeInsightsGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CraCheckReportLendScoreGetRequestParams = {
    body: CraCheckReportLendScoreGetRequest;
  };

  export class CraCheckReportLendScoreGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<CraCheckReportLendScoreGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CraCheckReportNetworkInsightsGetRequestParams = {
    body: CraCheckReportNetworkInsightsGetRequest;
  };

  export class CraCheckReportNetworkInsightsGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<CraCheckReportNetworkInsightsGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CraCheckReportPartnerInsightsGetRequestParams = {
    body: CraCheckReportPartnerInsightsGetRequest;
  };

  export class CraCheckReportPartnerInsightsGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<CraCheckReportPartnerInsightsGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CraCheckReportPdfGetRequestParams = {
    body: CraCheckReportPdfGetRequest;
  };

  export class CraCheckReportPdfGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<CraCheckReportPdfGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CraCheckReportVerificationGetRequestParams = {
    body: CraCheckReportVerificationGetRequest;
  };

  export class CraCheckReportVerificationGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<CraCheckReportVerificationGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CraCheckReportVerificationPdfGetRequestParams = {
    body: CraCheckReportVerificationPdfGetRequest;
  };

  export class CraCheckReportVerificationPdfGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<CraCheckReportVerificationPdfGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CraCreditProfileReportGetRequestParams = {
    body: CraCreditProfileReportGetRequest;
  };

  export class CraCreditProfileReportGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<CraCreditProfileReportGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CraLoansApplicationsRegisterRequestParams = {
    body: CraLoansApplicationsRegisterRequest;
  };

  export class CraLoansApplicationsRegisterError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<CraLoansApplicationsRegisterError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CraLoansRegisterRequestParams = {
    body: CraLoansRegisterRequest;
  };

  export class CraLoansRegisterError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<CraLoansRegisterError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CraLoansUnregisterRequestParams = {
    body: CraLoansUnregisterRequest;
  };

  export class CraLoansUnregisterError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<CraLoansUnregisterError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CraLoansUpdateRequestParams = {
    body: CraLoansUpdateRequest;
  };

  export class CraLoansUpdateError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<CraLoansUpdateError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CraMonitoringInsightsGetRequestParams = {
    body: CraMonitoringInsightsGetRequest;
  };

  export class CraMonitoringInsightsGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<CraMonitoringInsightsGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CraMonitoringInsightsSubscribeRequestParams = {
    body: CraMonitoringInsightsSubscribeRequest;
  };

  export class CraMonitoringInsightsSubscribeError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<CraMonitoringInsightsSubscribeError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CraMonitoringInsightsUnsubscribeRequestParams = {
    body: CraMonitoringInsightsUnsubscribeRequest;
  };

  export class CraMonitoringInsightsUnsubscribeError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<CraMonitoringInsightsUnsubscribeError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CraPartnerInsightsGetRequestParams = {
    body: CraPartnerInsightsGetRequest;
  };

  export class CraPartnerInsightsGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<CraPartnerInsightsGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CraReportGetRequestParams = {
    body: CraReportGetRequest;
  };

  export class CraReportGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<CraReportGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CreatePaymentTokenRequest = {
    body: PaymentInitiationPaymentTokenCreateRequest;
  };

  export class CreatePaymentTokenError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<CreatePaymentTokenError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CreditAssetReportFreddieMacGetRequest = {
    body: AssetReportFreddieGetRequest;
  };

  export class CreditAssetReportFreddieMacGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<CreditAssetReportFreddieMacGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CreditAuditCopyTokenCreateRequestParams = {
    body: CreditAuditCopyTokenCreateRequest;
  };

  export class CreditAuditCopyTokenCreateError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<CreditAuditCopyTokenCreateError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CreditAuditCopyTokenUpdateRequestParams = {
    body: CreditAuditCopyTokenUpdateRequest;
  };

  export class CreditAuditCopyTokenUpdateError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<CreditAuditCopyTokenUpdateError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CreditBankEmploymentGetRequestParams = {
    body: CreditBankEmploymentGetRequest;
  };

  export class CreditBankEmploymentGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<CreditBankEmploymentGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CreditBankIncomeGetRequestParams = {
    body: CreditBankIncomeGetRequest;
  };

  export class CreditBankIncomeGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<CreditBankIncomeGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CreditBankIncomePdfGetRequestParams = {
    body: CreditBankIncomePdfGetRequest;
  };

  export class CreditBankIncomePdfGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<CreditBankIncomePdfGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CreditBankIncomeRefreshRequestParams = {
    body: CreditBankIncomeRefreshRequest;
  };

  export class CreditBankIncomeRefreshError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<CreditBankIncomeRefreshError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CreditBankIncomeWebhookUpdateRequestParams = {
    body: CreditBankIncomeWebhookUpdateRequest;
  };

  export class CreditBankIncomeWebhookUpdateError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<CreditBankIncomeWebhookUpdateError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CreditBankStatementsUploadsGetRequestParams = {
    body: CreditBankStatementsUploadsGetRequest;
  };

  export class CreditBankStatementsUploadsGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<CreditBankStatementsUploadsGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CreditEmploymentGetRequestParams = {
    body: CreditEmploymentGetRequest;
  };

  export class CreditEmploymentGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<CreditEmploymentGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CreditFreddieMacReportsGetRequestParams = {
    body: CreditFreddieMacReportsGetRequest;
  };

  export class CreditFreddieMacReportsGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<CreditFreddieMacReportsGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CreditPayrollIncomeGetRequestParams = {
    body: CreditPayrollIncomeGetRequest;
  };

  export class CreditPayrollIncomeGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<CreditPayrollIncomeGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CreditPayrollIncomeParsingConfigUpdateRequestParams = {
    body: CreditPayrollIncomeParsingConfigUpdateRequest;
  };

  export class CreditPayrollIncomeParsingConfigUpdateError extends ResponseError<
    Declared<"error", Error | null>
  > {
    static readonly errors: ErrorDecoders<CreditPayrollIncomeParsingConfigUpdateError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CreditPayrollIncomePrecheckRequestParams = {
    body: CreditPayrollIncomePrecheckRequest;
  };

  export class CreditPayrollIncomePrecheckError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<CreditPayrollIncomePrecheckError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CreditPayrollIncomeRefreshRequestParams = {
    body: CreditPayrollIncomeRefreshRequest;
  };

  export class CreditPayrollIncomeRefreshError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<CreditPayrollIncomeRefreshError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CreditPayrollIncomeRiskSignalsGetRequestParams = {
    body: CreditPayrollIncomeRiskSignalsGetRequest;
  };

  export class CreditPayrollIncomeRiskSignalsGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<CreditPayrollIncomeRiskSignalsGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CreditRelayCreateRequestParams = {
    body: CreditRelayCreateRequest;
  };

  export class CreditRelayCreateError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<CreditRelayCreateError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CreditRelayGetRequestParams = {
    body: CreditRelayGetRequest;
  };

  export class CreditRelayGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<CreditRelayGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CreditRelayPdfGetRequestParams = {
    body: CreditRelayPdfGetRequest;
  };

  export class CreditRelayPdfGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<CreditRelayPdfGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CreditRelayRefreshRequestParams = {
    body: CreditRelayRefreshRequest;
  };

  export class CreditRelayRefreshError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<CreditRelayRefreshError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CreditRelayRemoveRequestParams = {
    body: CreditRelayRemoveRequest;
  };

  export class CreditRelayRemoveError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<CreditRelayRemoveError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CreditReportAuditCopyRemoveRequest = {
    body: CreditAuditCopyTokenRemoveRequest;
  };

  export class CreditReportAuditCopyRemoveError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<CreditReportAuditCopyRemoveError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CreditSessionsGetRequestParams = {
    body: CreditSessionsGetRequest;
  };

  export class CreditSessionsGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<CreditSessionsGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type DashboardUserGetRequestParams = {
    body: DashboardUserGetRequest;
  };

  export type DashboardUserListRequestParams = {
    body: DashboardUserListRequest;
  };

  export type EmployersSearchRequestParams = {
    body: EmployersSearchRequest;
  };

  export class EmployersSearchError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<EmployersSearchError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type EmploymentVerificationGetRequestParams = {
    body: EmploymentVerificationGetRequest;
  };

  export class EmploymentVerificationGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<EmploymentVerificationGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type FdxConsentsGetRequest = {
    consentId: string;
  };

  export class FdxConsentsGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<FdxConsentsGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type FdxConsentsListRequest = {
    customerId: string;
    status?: FdxConsentGrantStatus;
  };

  export class FdxConsentsListError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<FdxConsentsListError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type FdxConsentsRevocationGetRequest = {
    consentId: string;
  };

  export class FdxConsentsRevocationGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<FdxConsentsRevocationGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type FdxConsentsRevokeRequest = {
    consentId: string;
    body: FdxConsentRevocation;
  };

  export class FdxConsentsRevokeError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<FdxConsentsRevokeError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type FdxNotificationsRequest = {
    body: FdxNotificationEntity;
  };

  export class FdxNotificationsError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<FdxNotificationsError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type GetRecipientRequest = {
    recipientId: string;
    oauthStateId?: string;
  };

  export class GetRecipientError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<GetRecipientError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export class GetRecipientsError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<GetRecipientsError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type IdentityDocumentsUploadsGetRequestParams = {
    body: IdentityDocumentsUploadsGetRequest;
  };

  export class IdentityDocumentsUploadsGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<IdentityDocumentsUploadsGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type IdentityGetRequestParams = {
    body: IdentityGetRequest;
  };

  export class IdentityGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<IdentityGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type IdentityMatchRequestParams = {
    body: IdentityMatchRequest;
  };

  export class IdentityMatchError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<IdentityMatchError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type IdentityRefreshRequestParams = {
    body: IdentityRefreshRequest;
  };

  export class IdentityRefreshError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<IdentityRefreshError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type IdentityVerificationAutofillCreateRequestParams = {
    body: IdentityVerificationAutofillCreateRequest;
  };

  export type IdentityVerificationCreateRequestParams = {
    body: IdentityVerificationCreateRequest;
  };

  export type IdentityVerificationGetRequestParams = {
    body: IdentityVerificationGetRequest;
  };

  export type IdentityVerificationListRequestParams = {
    body: IdentityVerificationListRequest;
  };

  export type IdentityVerificationRetryRequestParams = {
    body: IdentityVerificationRetryRequest;
  };

  export type IncomeVerificationCreateRequestParams = {
    body: IncomeVerificationCreateRequest;
  };

  export class IncomeVerificationCreateError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<IncomeVerificationCreateError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type IncomeVerificationDocumentsDownloadRequestParams = {
    body: IncomeVerificationDocumentsDownloadRequest;
  };

  export class IncomeVerificationDocumentsDownloadError extends ResponseError<
    Declared<"error", Error | null>
  > {
    static readonly errors: ErrorDecoders<IncomeVerificationDocumentsDownloadError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type IncomeVerificationPaystubsGetRequestParams = {
    body: IncomeVerificationPaystubsGetRequest;
  };

  export class IncomeVerificationPaystubsGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<IncomeVerificationPaystubsGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type IncomeVerificationPrecheckRequestParams = {
    body: IncomeVerificationPrecheckRequest;
  };

  export class IncomeVerificationPrecheckError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<IncomeVerificationPrecheckError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type IncomeVerificationTaxformsGetRequestParams = {
    body: IncomeVerificationTaxformsGetRequest;
  };

  export class IncomeVerificationTaxformsGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<IncomeVerificationTaxformsGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type InstitutionsGetRequestParams = {
    body: InstitutionsGetRequest;
  };

  export class InstitutionsGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<InstitutionsGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type InstitutionsGetByIdRequestParams = {
    body: InstitutionsGetByIdRequest;
  };

  export class InstitutionsGetByIdError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<InstitutionsGetByIdError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type InstitutionsSearchRequestParams = {
    body: InstitutionsSearchRequest;
  };

  export class InstitutionsSearchError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<InstitutionsSearchError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type InvestmentsAuthGetRequestParams = {
    body: InvestmentsAuthGetRequest;
  };

  export class InvestmentsAuthGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<InvestmentsAuthGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type InvestmentsHoldingsGetRequestParams = {
    body: InvestmentsHoldingsGetRequest;
  };

  export class InvestmentsHoldingsGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<InvestmentsHoldingsGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type InvestmentsRefreshRequestParams = {
    body: InvestmentsRefreshRequest;
  };

  export class InvestmentsRefreshError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<InvestmentsRefreshError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type InvestmentsTransactionsGetRequestParams = {
    body: InvestmentsTransactionsGetRequest;
  };

  export class InvestmentsTransactionsGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<InvestmentsTransactionsGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type IssuesGetRequestParams = {
    body: IssuesGetRequest;
  };

  export class IssuesGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<IssuesGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type IssuesSearchRequestParams = {
    body: IssuesSearchRequest;
  };

  export class IssuesSearchError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<IssuesSearchError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type IssuesSubscribeRequestParams = {
    body: IssuesSubscribeRequest;
  };

  export class IssuesSubscribeError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<IssuesSubscribeError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ItemAccessTokenInvalidateRequestParams = {
    body: ItemAccessTokenInvalidateRequest;
  };

  export class ItemAccessTokenInvalidateError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<ItemAccessTokenInvalidateError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ItemActivityListRequestParams = {
    body: ItemActivityListRequest;
  };

  export class ItemActivityListError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<ItemActivityListError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ItemApplicationListRequestParams = {
    body: ItemApplicationListRequest;
  };

  export class ItemApplicationListError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<ItemApplicationListError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ItemApplicationScopesUpdateRequestParams = {
    body: ItemApplicationScopesUpdateRequest;
  };

  export class ItemApplicationScopesUpdateError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<ItemApplicationScopesUpdateError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ItemApplicationUnlinkRequestParams = {
    body: ItemApplicationUnlinkRequest;
  };

  export class ItemApplicationUnlinkError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<ItemApplicationUnlinkError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ItemCreatePublicTokenRequest = {
    body: ItemPublicTokenCreateRequest;
  };

  export class ItemCreatePublicTokenError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<ItemCreatePublicTokenError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ItemGetRequestParams = {
    body: ItemGetRequest;
  };

  export class ItemGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<ItemGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ItemImportRequestParams = {
    body: ItemImportRequest;
  };

  export class ItemImportError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<ItemImportError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ItemProductsTerminateRequestParams = {
    body: ItemProductsTerminateRequest;
  };

  export class ItemProductsTerminateError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<ItemProductsTerminateError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ItemPublicTokenExchangeRequestParams = {
    body: ItemPublicTokenExchangeRequest;
  };

  export class ItemPublicTokenExchangeError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<ItemPublicTokenExchangeError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ItemRemoveRequestParams = {
    body: ItemRemoveRequest;
  };

  export class ItemRemoveError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<ItemRemoveError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ItemWebhookUpdateRequestParams = {
    body: ItemWebhookUpdateRequest;
  };

  export class ItemWebhookUpdateError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<ItemWebhookUpdateError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type LiabilitiesGetRequestParams = {
    body: LiabilitiesGetRequest;
  };

  export class LiabilitiesGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<LiabilitiesGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type LinkDeliveryCreateRequestParams = {
    body: LinkDeliveryCreateRequest;
  };

  export class LinkDeliveryCreateError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<LinkDeliveryCreateError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type LinkDeliveryGetRequestParams = {
    body: LinkDeliveryGetRequest;
  };

  export class LinkDeliveryGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<LinkDeliveryGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type LinkOauthCorrelationIdExchangeRequest = {
    body: LinkOAuthCorrelationIdExchangeRequest;
  };

  export class LinkOauthCorrelationIdExchangeError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<LinkOauthCorrelationIdExchangeError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type LinkTokenCreateRequestParams = {
    body: LinkTokenCreateRequest;
  };

  export class LinkTokenCreateError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<LinkTokenCreateError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type LinkTokenGetRequestParams = {
    body: LinkTokenGetRequest;
  };

  export class LinkTokenGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<LinkTokenGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type NetworkStatusGetRequestParams = {
    body: NetworkStatusGetRequest;
  };

  export class NetworkStatusGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<NetworkStatusGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type OauthIntrospectRequest = {
    body: OAuthIntrospectRequest;
  };

  export class OauthIntrospectError extends ResponseError<
    Declared<"oAuthErrorResponse", OAuthErrorResponse>
  > {
    static readonly errors: ErrorDecoders<OauthIntrospectError> = [
      {
        on: [400, 599],
        kind: "oAuthErrorResponse",
        decode: { kind: "json", schema: oAuthErrorResponseSchema },
      },
    ];
  }

  export type OauthRevokeRequest = {
    body: OAuthRevokeRequest;
  };

  export class OauthRevokeError extends ResponseError<Declared<"oAuthErrorResponse", OAuthErrorResponse>> {
    static readonly errors: ErrorDecoders<OauthRevokeError> = [
      {
        on: [400, 599],
        kind: "oAuthErrorResponse",
        decode: { kind: "json", schema: oAuthErrorResponseSchema },
      },
    ];
  }

  export type OauthTokenRequest = {
    body: OAuthTokenRequest;
  };

  export class OauthTokenError extends ResponseError<Declared<"oAuthErrorResponse", OAuthErrorResponse>> {
    static readonly errors: ErrorDecoders<OauthTokenError> = [
      {
        on: [400, 599],
        kind: "oAuthErrorResponse",
        decode: { kind: "json", schema: oAuthErrorResponseSchema },
      },
    ];
  }

  export type PartnerCustomerCreateRequestParams = {
    body: PartnerCustomerCreateRequest;
  };

  export class PartnerCustomerCreateError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<PartnerCustomerCreateError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type PartnerCustomerEnableRequestParams = {
    body: PartnerCustomerEnableRequest;
  };

  export class PartnerCustomerEnableError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<PartnerCustomerEnableError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type PartnerCustomerGetRequestParams = {
    body: PartnerCustomerGetRequest;
  };

  export class PartnerCustomerGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<PartnerCustomerGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type PartnerCustomerOauthInstitutionsGetRequest = {
    body: PartnerCustomerOAuthInstitutionsGetRequest;
  };

  export class PartnerCustomerOauthInstitutionsGetError extends ResponseError<
    Declared<"error", Error | null>
  > {
    static readonly errors: ErrorDecoders<PartnerCustomerOauthInstitutionsGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type PartnerCustomerRemoveRequestParams = {
    body: PartnerCustomerRemoveRequest;
  };

  export class PartnerCustomerRemoveError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<PartnerCustomerRemoveError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type PaymentInitiationConsentCreateRequestParams = {
    body: PaymentInitiationConsentCreateRequest;
  };

  export class PaymentInitiationConsentCreateError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<PaymentInitiationConsentCreateError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type PaymentInitiationConsentGetRequestParams = {
    body: PaymentInitiationConsentGetRequest;
  };

  export class PaymentInitiationConsentGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<PaymentInitiationConsentGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type PaymentInitiationConsentPaymentExecuteRequestParams = {
    body: PaymentInitiationConsentPaymentExecuteRequest;
  };

  export class PaymentInitiationConsentPaymentExecuteError extends ResponseError<
    Declared<"error", Error | null>
  > {
    static readonly errors: ErrorDecoders<PaymentInitiationConsentPaymentExecuteError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type PaymentInitiationConsentRevokeRequestParams = {
    body: PaymentInitiationConsentRevokeRequest;
  };

  export class PaymentInitiationConsentRevokeError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<PaymentInitiationConsentRevokeError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type PaymentInitiationPaymentCreateRequestParams = {
    body: PaymentInitiationPaymentCreateRequest;
  };

  export class PaymentInitiationPaymentCreateError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<PaymentInitiationPaymentCreateError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type PaymentInitiationPaymentGetRequestParams = {
    body: PaymentInitiationPaymentGetRequest;
  };

  export class PaymentInitiationPaymentGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<PaymentInitiationPaymentGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type PaymentInitiationPaymentListRequestParams = {
    body: PaymentInitiationPaymentListRequest;
  };

  export class PaymentInitiationPaymentListError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<PaymentInitiationPaymentListError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type PaymentInitiationPaymentReverseRequestParams = {
    body: PaymentInitiationPaymentReverseRequest;
  };

  export class PaymentInitiationPaymentReverseError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<PaymentInitiationPaymentReverseError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type PaymentInitiationRecipientCreateRequestParams = {
    body: PaymentInitiationRecipientCreateRequest;
  };

  export class PaymentInitiationRecipientCreateError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<PaymentInitiationRecipientCreateError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type PaymentInitiationRecipientGetRequestParams = {
    body: PaymentInitiationRecipientGetRequest;
  };

  export class PaymentInitiationRecipientGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<PaymentInitiationRecipientGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type PaymentInitiationRecipientListRequestParams = {
    body: PaymentInitiationRecipientListRequest;
  };

  export class PaymentInitiationRecipientListError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<PaymentInitiationRecipientListError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type PaymentProfileCreateRequestParams = {
    body: PaymentProfileCreateRequest;
  };

  export class PaymentProfileCreateError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<PaymentProfileCreateError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type PaymentProfileGetRequestParams = {
    body: PaymentProfileGetRequest;
  };

  export class PaymentProfileGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<PaymentProfileGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type PaymentProfileRemoveRequestParams = {
    body: PaymentProfileRemoveRequest;
  };

  export class PaymentProfileRemoveError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<PaymentProfileRemoveError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ProcessorAccountGetRequestParams = {
    body: ProcessorAccountGetRequest;
  };

  export class ProcessorAccountGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<ProcessorAccountGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ProcessorApexProcessorTokenCreateRequestParams = {
    body: ProcessorApexProcessorTokenCreateRequest;
  };

  export class ProcessorApexProcessorTokenCreateError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<ProcessorApexProcessorTokenCreateError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ProcessorAuthGetRequestParams = {
    body: ProcessorAuthGetRequest;
  };

  export class ProcessorAuthGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<ProcessorAuthGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ProcessorBalanceGetRequestParams = {
    body: ProcessorBalanceGetRequest;
  };

  export class ProcessorBalanceGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<ProcessorBalanceGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ProcessorBankTransferCreateRequestParams = {
    body: ProcessorBankTransferCreateRequest;
  };

  export class ProcessorBankTransferCreateError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<ProcessorBankTransferCreateError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ProcessorIdentityGetRequestParams = {
    body: ProcessorIdentityGetRequest;
  };

  export class ProcessorIdentityGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<ProcessorIdentityGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ProcessorIdentityMatchRequestParams = {
    body: ProcessorIdentityMatchRequest;
  };

  export class ProcessorIdentityMatchError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<ProcessorIdentityMatchError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ProcessorInvestmentsAuthGetRequestParams = {
    body: ProcessorInvestmentsAuthGetRequest;
  };

  export class ProcessorInvestmentsAuthGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<ProcessorInvestmentsAuthGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ProcessorInvestmentsHoldingsGetRequestParams = {
    body: ProcessorInvestmentsHoldingsGetRequest;
  };

  export class ProcessorInvestmentsHoldingsGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<ProcessorInvestmentsHoldingsGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ProcessorInvestmentsTransactionsGetRequestParams = {
    body: ProcessorInvestmentsTransactionsGetRequest;
  };

  export class ProcessorInvestmentsTransactionsGetError extends ResponseError<
    Declared<"error", Error | null>
  > {
    static readonly errors: ErrorDecoders<ProcessorInvestmentsTransactionsGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ProcessorLiabilitiesGetRequestParams = {
    body: ProcessorLiabilitiesGetRequest;
  };

  export class ProcessorLiabilitiesGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<ProcessorLiabilitiesGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ProcessorSignalDecisionReportRequestParams = {
    body: ProcessorSignalDecisionReportRequest;
  };

  export class ProcessorSignalDecisionReportError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<ProcessorSignalDecisionReportError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ProcessorSignalEvaluateRequestParams = {
    body: ProcessorSignalEvaluateRequest;
  };

  export class ProcessorSignalEvaluateError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<ProcessorSignalEvaluateError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ProcessorSignalPrepareRequestParams = {
    body: ProcessorSignalPrepareRequest;
  };

  export class ProcessorSignalPrepareError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<ProcessorSignalPrepareError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ProcessorSignalReturnReportRequestParams = {
    body: ProcessorSignalReturnReportRequest;
  };

  export class ProcessorSignalReturnReportError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<ProcessorSignalReturnReportError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ProcessorStripeBankAccountTokenCreateRequestParams = {
    body: ProcessorStripeBankAccountTokenCreateRequest;
  };

  export class ProcessorStripeBankAccountTokenCreateError extends ResponseError<
    Declared<"error", Error | null>
  > {
    static readonly errors: ErrorDecoders<ProcessorStripeBankAccountTokenCreateError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ProcessorTokenCreateRequestParams = {
    body: ProcessorTokenCreateRequest;
  };

  export class ProcessorTokenCreateError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<ProcessorTokenCreateError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ProcessorTokenPermissionsGetRequestParams = {
    body: ProcessorTokenPermissionsGetRequest;
  };

  export class ProcessorTokenPermissionsGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<ProcessorTokenPermissionsGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ProcessorTokenPermissionsSetRequestParams = {
    body: ProcessorTokenPermissionsSetRequest;
  };

  export class ProcessorTokenPermissionsSetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<ProcessorTokenPermissionsSetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ProcessorTokenWebhookUpdateRequestParams = {
    body: ProcessorTokenWebhookUpdateRequest;
  };

  export class ProcessorTokenWebhookUpdateError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<ProcessorTokenWebhookUpdateError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ProcessorTransactionsGetRequestParams = {
    body: ProcessorTransactionsGetRequest;
  };

  export class ProcessorTransactionsGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<ProcessorTransactionsGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ProcessorTransactionsRecurringGetRequestParams = {
    body: ProcessorTransactionsRecurringGetRequest;
  };

  export class ProcessorTransactionsRecurringGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<ProcessorTransactionsRecurringGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ProcessorTransactionsRefreshRequestParams = {
    body: ProcessorTransactionsRefreshRequest;
  };

  export class ProcessorTransactionsRefreshError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<ProcessorTransactionsRefreshError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ProcessorTransactionsSyncRequestParams = {
    body: ProcessorTransactionsSyncRequest;
  };

  export class ProcessorTransactionsSyncError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<ProcessorTransactionsSyncError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ProfileNetworkStatusGetRequestParams = {
    body: ProfileNetworkStatusGetRequest;
  };

  export class ProfileNetworkStatusGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<ProfileNetworkStatusGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ProtectComputeRequestParams = {
    body: ProtectComputeRequest;
  };

  export type ProtectEventGetRequestParams = {
    body: ProtectEventGetRequest;
  };

  export type ProtectEventSendRequestParams = {
    body: ProtectEventSendRequest;
  };

  export type ProtectReportCreateRequestParams = {
    body: ProtectReportCreateRequest;
  };

  export type ProtectUserInsightsGetRequestParams = {
    body: ProtectUserInsightsGetRequest;
  };

  export type SandboxBankIncomeFireWebhookRequestParams = {
    body: SandboxBankIncomeFireWebhookRequest;
  };

  export class SandboxBankIncomeFireWebhookError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<SandboxBankIncomeFireWebhookError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type SandboxBankTransferFireWebhookRequestParams = {
    body: SandboxBankTransferFireWebhookRequest;
  };

  export class SandboxBankTransferFireWebhookError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<SandboxBankTransferFireWebhookError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type SandboxBankTransferSimulateRequestParams = {
    body: SandboxBankTransferSimulateRequest;
  };

  export class SandboxBankTransferSimulateError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<SandboxBankTransferSimulateError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type SandboxCraCashflowUpdatesUpdateRequestParams = {
    body: SandboxCraCashflowUpdatesUpdateRequest;
  };

  export class SandboxCraCashflowUpdatesUpdateError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<SandboxCraCashflowUpdatesUpdateError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type SandboxFdxConsentSeedRequestParams = {
    body: SandboxFdxConsentSeedRequest;
  };

  export class SandboxFdxConsentSeedError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<SandboxFdxConsentSeedError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type SandboxIncomeFireWebhookRequestParams = {
    body: SandboxIncomeFireWebhookRequest;
  };

  export class SandboxIncomeFireWebhookError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<SandboxIncomeFireWebhookError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type SandboxItemApplicationSeedRequestParams = {
    body: SandboxItemApplicationSeedRequest;
  };

  export class SandboxItemApplicationSeedError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<SandboxItemApplicationSeedError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type SandboxItemFireWebhookRequestParams = {
    body: SandboxItemFireWebhookRequest;
  };

  export class SandboxItemFireWebhookError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<SandboxItemFireWebhookError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type SandboxItemResetLoginRequestParams = {
    body: SandboxItemResetLoginRequest;
  };

  export class SandboxItemResetLoginError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<SandboxItemResetLoginError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type SandboxItemSetVerificationStatusRequestParams = {
    body: SandboxItemSetVerificationStatusRequest;
  };

  export class SandboxItemSetVerificationStatusError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<SandboxItemSetVerificationStatusError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type SandboxOauthSelectAccountsRequestParams = {
    body: SandboxOauthSelectAccountsRequest;
  };

  export class SandboxOauthSelectAccountsError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<SandboxOauthSelectAccountsError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type SandboxPaymentProfileResetLoginRequestParams = {
    body: SandboxPaymentProfileResetLoginRequest;
  };

  export class SandboxPaymentProfileResetLoginError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<SandboxPaymentProfileResetLoginError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type SandboxPaymentSimulateRequestParams = {
    body: SandboxPaymentSimulateRequest;
  };

  export class SandboxPaymentSimulateError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<SandboxPaymentSimulateError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type SandboxProcessorTokenCreateRequestParams = {
    body: SandboxProcessorTokenCreateRequest;
  };

  export class SandboxProcessorTokenCreateError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<SandboxProcessorTokenCreateError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type SandboxPublicTokenCreateRequestParams = {
    body: SandboxPublicTokenCreateRequest;
  };

  export class SandboxPublicTokenCreateError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<SandboxPublicTokenCreateError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type SandboxTransactionsCreateRequestParams = {
    body: SandboxTransactionsCreateRequest;
  };

  export class SandboxTransactionsCreateError extends ResponseError<
    Declared<"error", Error | null> | Declared<"error2", Error | null>
  > {
    static readonly errors: ErrorDecoders<SandboxTransactionsCreateError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) } },
      {
        on: [400, 599],
        kind: "error2",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type SandboxTransferFireWebhookRequestParams = {
    body: SandboxTransferFireWebhookRequest;
  };

  export class SandboxTransferFireWebhookError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<SandboxTransferFireWebhookError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type SandboxTransferLedgerDepositSimulateRequestParams = {
    body: SandboxTransferLedgerDepositSimulateRequest;
  };

  export class SandboxTransferLedgerDepositSimulateError extends ResponseError<
    Declared<"error", Error | null>
  > {
    static readonly errors: ErrorDecoders<SandboxTransferLedgerDepositSimulateError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type SandboxTransferLedgerSimulateAvailableRequestParams = {
    body: SandboxTransferLedgerSimulateAvailableRequest;
  };

  export class SandboxTransferLedgerSimulateAvailableError extends ResponseError<
    Declared<"error", Error | null>
  > {
    static readonly errors: ErrorDecoders<SandboxTransferLedgerSimulateAvailableError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type SandboxTransferLedgerWithdrawSimulateRequestParams = {
    body: SandboxTransferLedgerWithdrawSimulateRequest;
  };

  export class SandboxTransferLedgerWithdrawSimulateError extends ResponseError<
    Declared<"error", Error | null>
  > {
    static readonly errors: ErrorDecoders<SandboxTransferLedgerWithdrawSimulateError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type SandboxTransferRefundSimulateRequestParams = {
    body: SandboxTransferRefundSimulateRequest;
  };

  export class SandboxTransferRefundSimulateError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<SandboxTransferRefundSimulateError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type SandboxTransferRepaymentSimulateRequestParams = {
    body: SandboxTransferRepaymentSimulateRequest;
  };

  export class SandboxTransferRepaymentSimulateError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<SandboxTransferRepaymentSimulateError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type SandboxTransferSimulateRequestParams = {
    body: SandboxTransferSimulateRequest;
  };

  export class SandboxTransferSimulateError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<SandboxTransferSimulateError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type SandboxTransferSweepSimulateRequestParams = {
    body: SandboxTransferSweepSimulateRequest;
  };

  export class SandboxTransferSweepSimulateError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<SandboxTransferSweepSimulateError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type SandboxTransferTestClockAdvanceRequestParams = {
    body: SandboxTransferTestClockAdvanceRequest;
  };

  export class SandboxTransferTestClockAdvanceError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<SandboxTransferTestClockAdvanceError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type SandboxTransferTestClockCreateRequestParams = {
    body: SandboxTransferTestClockCreateRequest;
  };

  export class SandboxTransferTestClockCreateError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<SandboxTransferTestClockCreateError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type SandboxTransferTestClockGetRequestParams = {
    body: SandboxTransferTestClockGetRequest;
  };

  export class SandboxTransferTestClockGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<SandboxTransferTestClockGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type SandboxTransferTestClockListRequestParams = {
    body: SandboxTransferTestClockListRequest;
  };

  export class SandboxTransferTestClockListError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<SandboxTransferTestClockListError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type SandboxUserResetLoginRequestParams = {
    body: SandboxUserResetLoginRequest;
  };

  export class SandboxUserResetLoginError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<SandboxUserResetLoginError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type SessionTokenCreateRequestParams = {
    body: SessionTokenCreateRequest;
  };

  export class SessionTokenCreateError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<SessionTokenCreateError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type SignalDecisionReportRequestParams = {
    body: SignalDecisionReportRequest;
  };

  export class SignalDecisionReportError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<SignalDecisionReportError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type SignalEvaluateRequestParams = {
    body: SignalEvaluateRequest;
  };

  export class SignalEvaluateError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<SignalEvaluateError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type SignalPrepareRequestParams = {
    body: SignalPrepareRequest;
  };

  export class SignalPrepareError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<SignalPrepareError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type SignalReturnReportRequestParams = {
    body: SignalReturnReportRequest;
  };

  export class SignalReturnReportError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<SignalReturnReportError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type SignalScheduleRequestParams = {
    body: SignalScheduleRequest;
  };

  export class SignalScheduleError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<SignalScheduleError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type StatementsDownloadRequestParams = {
    body: StatementsDownloadRequest;
  };

  export class StatementsDownloadError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<StatementsDownloadError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type StatementsListRequestParams = {
    body: StatementsListRequest;
  };

  export class StatementsListError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<StatementsListError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type StatementsRefreshRequestParams = {
    body: StatementsRefreshRequest;
  };

  export class StatementsRefreshError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<StatementsRefreshError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransactionsEnhanceRequest = {
    body: TransactionsEnhanceGetRequest;
  };

  export class TransactionsEnhanceError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<TransactionsEnhanceError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransactionsEnrichRequestParams = {
    body: TransactionsEnrichRequest;
  };

  export class TransactionsEnrichError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<TransactionsEnrichError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransactionsGetRequestParams = {
    body: TransactionsGetRequest;
  };

  export class TransactionsGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<TransactionsGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransactionsRecurringGetRequestParams = {
    body: TransactionsRecurringGetRequest;
  };

  export class TransactionsRecurringGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<TransactionsRecurringGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransactionsRefreshRequestParams = {
    body: TransactionsRefreshRequest;
  };

  export class TransactionsRefreshError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<TransactionsRefreshError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransactionsRulesCreateRequestParams = {
    body: TransactionsRulesCreateRequest;
  };

  export class TransactionsRulesCreateError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<TransactionsRulesCreateError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransactionsRulesListRequestParams = {
    body: TransactionsRulesListRequest;
  };

  export class TransactionsRulesListError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<TransactionsRulesListError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransactionsRulesRemoveRequestParams = {
    body: TransactionsRulesRemoveRequest;
  };

  export class TransactionsRulesRemoveError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<TransactionsRulesRemoveError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransactionsSyncRequestParams = {
    body: TransactionsSyncRequest;
  };

  export class TransactionsSyncError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<TransactionsSyncError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransactionsUserInsightsGetRequestParams = {
    body: TransactionsUserInsightsGetRequest;
  };

  export class TransactionsUserInsightsGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<TransactionsUserInsightsGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferAuthorizationCancelRequestParams = {
    body: TransferAuthorizationCancelRequest;
  };

  export class TransferAuthorizationCancelError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<TransferAuthorizationCancelError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferAuthorizationCreateRequestParams = {
    body: TransferAuthorizationCreateRequest;
  };

  export class TransferAuthorizationCreateError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<TransferAuthorizationCreateError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferBalanceGetRequestParams = {
    body: TransferBalanceGetRequest;
  };

  export class TransferBalanceGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<TransferBalanceGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferCancelRequestParams = {
    body: TransferCancelRequest;
  };

  export class TransferCancelError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<TransferCancelError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferCapabilitiesGetRequestParams = {
    body: TransferCapabilitiesGetRequest;
  };

  export class TransferCapabilitiesGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<TransferCapabilitiesGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferConfigurationGetRequestParams = {
    body: TransferConfigurationGetRequest;
  };

  export class TransferConfigurationGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<TransferConfigurationGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferCreateRequestParams = {
    body: TransferCreateRequest;
  };

  export class TransferCreateError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<TransferCreateError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferDiligenceDocumentUploadRequestParams = {
    body: TransferDiligenceDocumentUploadRequest;
  };

  export class TransferDiligenceDocumentUploadError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<TransferDiligenceDocumentUploadError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferDiligenceSubmitRequestParams = {
    body: TransferDiligenceSubmitRequest;
  };

  export class TransferDiligenceSubmitError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<TransferDiligenceSubmitError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferEventListRequestParams = {
    body: TransferEventListRequest;
  };

  export class TransferEventListError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<TransferEventListError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferEventSyncRequestParams = {
    body: TransferEventSyncRequest;
  };

  export class TransferEventSyncError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<TransferEventSyncError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferGetRequestParams = {
    body: TransferGetRequest;
  };

  export class TransferGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<TransferGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferIntentCreateRequestParams = {
    body: TransferIntentCreateRequest;
  };

  export class TransferIntentCreateError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<TransferIntentCreateError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferIntentGetRequestParams = {
    body: TransferIntentGetRequest;
  };

  export class TransferIntentGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<TransferIntentGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferLedgerDepositRequestParams = {
    body: TransferLedgerDepositRequest;
  };

  export class TransferLedgerDepositError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<TransferLedgerDepositError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferLedgerDistributeRequestParams = {
    body: TransferLedgerDistributeRequest;
  };

  export class TransferLedgerDistributeError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<TransferLedgerDistributeError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferLedgerEventListRequestParams = {
    body: TransferLedgerEventListRequest;
  };

  export class TransferLedgerEventListError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<TransferLedgerEventListError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferLedgerGetRequestParams = {
    body: TransferLedgerGetRequest;
  };

  export class TransferLedgerGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<TransferLedgerGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferLedgerWithdrawRequestParams = {
    body: TransferLedgerWithdrawRequest;
  };

  export class TransferLedgerWithdrawError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<TransferLedgerWithdrawError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferListRequestParams = {
    body: TransferListRequest;
  };

  export class TransferListError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<TransferListError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferMetricsGetRequestParams = {
    body: TransferMetricsGetRequest;
  };

  export class TransferMetricsGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<TransferMetricsGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferMigrateAccountRequestParams = {
    body: TransferMigrateAccountRequest;
  };

  export class TransferMigrateAccountError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<TransferMigrateAccountError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferOriginatorCreateRequestParams = {
    body: TransferOriginatorCreateRequest;
  };

  export class TransferOriginatorCreateError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<TransferOriginatorCreateError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferOriginatorFundingAccountCreateRequestParams = {
    body: TransferOriginatorFundingAccountCreateRequest;
  };

  export class TransferOriginatorFundingAccountCreateError extends ResponseError<
    Declared<"error", Error | null>
  > {
    static readonly errors: ErrorDecoders<TransferOriginatorFundingAccountCreateError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferOriginatorFundingAccountUpdateRequestParams = {
    body: TransferOriginatorFundingAccountUpdateRequest;
  };

  export class TransferOriginatorFundingAccountUpdateError extends ResponseError<
    Declared<"error", Error | null>
  > {
    static readonly errors: ErrorDecoders<TransferOriginatorFundingAccountUpdateError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferOriginatorGetRequestParams = {
    body: TransferOriginatorGetRequest;
  };

  export class TransferOriginatorGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<TransferOriginatorGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferOriginatorListRequestParams = {
    body: TransferOriginatorListRequest;
  };

  export class TransferOriginatorListError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<TransferOriginatorListError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferPlatformOriginatorCreateRequestParams = {
    body: TransferPlatformOriginatorCreateRequest;
  };

  export class TransferPlatformOriginatorCreateError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<TransferPlatformOriginatorCreateError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferPlatformPersonCreateRequestParams = {
    body: TransferPlatformPersonCreateRequest;
  };

  export class TransferPlatformPersonCreateError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<TransferPlatformPersonCreateError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferPlatformRequirementSubmitRequestParams = {
    body: TransferPlatformRequirementSubmitRequest;
  };

  export class TransferPlatformRequirementSubmitError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<TransferPlatformRequirementSubmitError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferQuestionnaireCreateRequestParams = {
    body: TransferQuestionnaireCreateRequest;
  };

  export class TransferQuestionnaireCreateError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<TransferQuestionnaireCreateError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferRecurringCancelRequestParams = {
    body: TransferRecurringCancelRequest;
  };

  export class TransferRecurringCancelError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<TransferRecurringCancelError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferRecurringCreateRequestParams = {
    body: TransferRecurringCreateRequest;
  };

  export class TransferRecurringCreateError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<TransferRecurringCreateError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferRecurringGetRequestParams = {
    body: TransferRecurringGetRequest;
  };

  export class TransferRecurringGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<TransferRecurringGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferRecurringListRequestParams = {
    body: TransferRecurringListRequest;
  };

  export class TransferRecurringListError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<TransferRecurringListError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferRefundCancelRequestParams = {
    body: TransferRefundCancelRequest;
  };

  export class TransferRefundCancelError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<TransferRefundCancelError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferRefundCreateRequestParams = {
    body: TransferRefundCreateRequest;
  };

  export class TransferRefundCreateError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<TransferRefundCreateError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferRefundGetRequestParams = {
    body: TransferRefundGetRequest;
  };

  export class TransferRefundGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<TransferRefundGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferRepaymentListRequestParams = {
    body: TransferRepaymentListRequest;
  };

  export class TransferRepaymentListError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<TransferRepaymentListError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferRepaymentReturnListRequestParams = {
    body: TransferRepaymentReturnListRequest;
  };

  export class TransferRepaymentReturnListError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<TransferRepaymentReturnListError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferReturnRecoverRequestParams = {
    body: TransferReturnRecoverRequest;
  };

  export class TransferReturnRecoverError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<TransferReturnRecoverError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferSweepGetRequestParams = {
    body: TransferSweepGetRequest;
  };

  export class TransferSweepGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<TransferSweepGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferSweepListRequestParams = {
    body: TransferSweepListRequest;
  };

  export class TransferSweepListError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<TransferSweepListError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type UserAccountSessionEventSendRequestParams = {
    body: UserAccountSessionEventSendRequest;
  };

  export class UserAccountSessionEventSendError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<UserAccountSessionEventSendError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type UserAccountSessionGetRequestParams = {
    body: UserAccountSessionGetRequest;
  };

  export class UserAccountSessionGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<UserAccountSessionGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type UserCreateRequestParams = {
    plaidNewUserApiEnabled?: boolean;
    body: UserCreateRequest;
  };

  export class UserCreateError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<UserCreateError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type UserFinancialDataRefreshRequestParams = {
    body: UserFinancialDataRefreshRequest;
  };

  export class UserFinancialDataRefreshError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<UserFinancialDataRefreshError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type UserGetRequestParams = {
    plaidNewUserApiEnabled?: boolean;
    body: UserGetRequest;
  };

  export class UserGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<UserGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type UserIdentityRemoveRequestParams = {
    plaidNewUserApiEnabled?: boolean;
    body: UserIdentityRemoveRequest;
  };

  export class UserIdentityRemoveError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<UserIdentityRemoveError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type UserItemsAssociateRequestParams = {
    body: UserItemsAssociateRequest;
  };

  export class UserItemsAssociateError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<UserItemsAssociateError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type UserItemsGetRequestParams = {
    body: UserItemsGetRequest;
  };

  export class UserItemsGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<UserItemsGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type UserItemsRemoveRequestParams = {
    body: UserItemsRemoveRequest;
  };

  export class UserItemsRemoveError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<UserItemsRemoveError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type UserProductsTerminateRequestParams = {
    body: UserProductsTerminateRequest;
  };

  export class UserProductsTerminateError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<UserProductsTerminateError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type UserRemoveRequestParams = {
    plaidNewUserApiEnabled?: boolean;
    body: UserRemoveRequest;
  };

  export class UserRemoveError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<UserRemoveError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type UserThirdPartyTokenCreateRequestParams = {
    body: UserThirdPartyTokenCreateRequest;
  };

  export class UserThirdPartyTokenCreateError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<UserThirdPartyTokenCreateError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type UserThirdPartyTokenRemoveRequestParams = {
    body: UserThirdPartyTokenRemoveRequest;
  };

  export class UserThirdPartyTokenRemoveError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<UserThirdPartyTokenRemoveError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type UserTransactionsRefreshRequestParams = {
    body: UserTransactionsRefreshRequest;
  };

  export class UserTransactionsRefreshError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<UserTransactionsRefreshError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type UserUpdateRequestParams = {
    plaidNewUserApiEnabled?: boolean;
    body: UserUpdateRequest;
  };

  export class UserUpdateError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<UserUpdateError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type WalletCreateRequestParams = {
    body: WalletCreateRequest;
  };

  export class WalletCreateError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<WalletCreateError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type WalletGetRequestParams = {
    body: WalletGetRequest;
  };

  export class WalletGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<WalletGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type WalletListRequestParams = {
    body: WalletListRequest;
  };

  export class WalletListError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<WalletListError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type WalletTransactionExecuteRequestParams = {
    body: WalletTransactionExecuteRequest;
  };

  export class WalletTransactionExecuteError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<WalletTransactionExecuteError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type WalletTransactionGetRequestParams = {
    body: WalletTransactionGetRequest;
  };

  export class WalletTransactionGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<WalletTransactionGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type WalletTransactionListRequestParams = {
    body: WalletTransactionListRequest;
  };

  export class WalletTransactionListError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<WalletTransactionListError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type WatchlistScreeningEntityCreateRequestParams = {
    body: WatchlistScreeningEntityCreateRequest;
  };

  export type WatchlistScreeningEntityGetRequestParams = {
    body: WatchlistScreeningEntityGetRequest;
  };

  export type WatchlistScreeningEntityHistoryListRequestParams = {
    body: WatchlistScreeningEntityHistoryListRequest;
  };

  export type WatchlistScreeningEntityHitListRequestParams = {
    body: WatchlistScreeningEntityHitListRequest;
  };

  export type WatchlistScreeningEntityListRequestParams = {
    body: WatchlistScreeningEntityListRequest;
  };

  export type WatchlistScreeningEntityProgramGetRequestParams = {
    body: WatchlistScreeningEntityProgramGetRequest;
  };

  export type WatchlistScreeningEntityProgramListRequestParams = {
    body: WatchlistScreeningEntityProgramListRequest;
  };

  export type WatchlistScreeningEntityReviewCreateRequestParams = {
    body: WatchlistScreeningEntityReviewCreateRequest;
  };

  export type WatchlistScreeningEntityReviewListRequestParams = {
    body: WatchlistScreeningEntityReviewListRequest;
  };

  export type WatchlistScreeningEntityUpdateRequestParams = {
    body: WatchlistScreeningEntityUpdateRequest;
  };

  export type WatchlistScreeningIndividualCreateRequestParams = {
    body: WatchlistScreeningIndividualCreateRequest;
  };

  export type WatchlistScreeningIndividualGetRequestParams = {
    body: WatchlistScreeningIndividualGetRequest;
  };

  export type WatchlistScreeningIndividualHistoryListRequestParams = {
    body: WatchlistScreeningIndividualHistoryListRequest;
  };

  export type WatchlistScreeningIndividualHitListRequestParams = {
    body: WatchlistScreeningIndividualHitListRequest;
  };

  export type WatchlistScreeningIndividualListRequestParams = {
    body: WatchlistScreeningIndividualListRequest;
  };

  export type WatchlistScreeningIndividualProgramGetRequestParams = {
    body: WatchlistScreeningIndividualProgramGetRequest;
  };

  export type WatchlistScreeningIndividualProgramListRequestParams = {
    body: WatchlistScreeningIndividualProgramListRequest;
  };

  export type WatchlistScreeningIndividualReviewCreateRequestParams = {
    body: WatchlistScreeningIndividualReviewCreateRequest;
  };

  export type WatchlistScreeningIndividualReviewListRequestParams = {
    body: WatchlistScreeningIndividualReviewListRequest;
  };

  export type WatchlistScreeningIndividualUpdateRequestParams = {
    body: WatchlistScreeningIndividualUpdateRequest;
  };

  export type WebhookVerificationKeyGetRequestParams = {
    body: WebhookVerificationKeyGetRequest;
  };

  export class WebhookVerificationKeyGetError extends ResponseError<Declared<"error", Error | null>> {
    static readonly errors: ErrorDecoders<WebhookVerificationKeyGetError> = [
      {
        on: [400, 599],
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }
}
