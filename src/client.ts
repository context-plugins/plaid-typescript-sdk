import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "./core/api-error.js";
import type { ApiPromise } from "./core/api-promise.js";
import type { RequestOptions } from "./core/api-request.js";
import { allAuth, anyAuth, noneAuth } from "./core/auth/schemes.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import { uuid } from "./core/uuid.js";
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

/**
 * The Plaid REST API. Please see https://plaid.com/docs/api for more details.
 */
export class ThePlaidApiClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "THE_PLAID_API_CLIENT_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "ThePlaidApiClient/0.1.0 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "0.1.0", schema: s.string() },
        { name: "X-APIMatic-Gen-Version", value: "4.0.0", schema: s.string() },
        { name: "X-APIMatic-OS", value: host.operatingSystem(), schema: s.optional(s.string()) },
        { name: "X-APIMatic-Runtime", value: host.runtimeDescription(), schema: s.optional(s.string()) },
      ],
      defaultQuery: [],
      defaultPathParams: [],
    });

    this.#servers = buildServers(options);

    this.#auth = buildAuthSchemes(options, this.#servers, this.#rawClient);
  }

  /**
   * Retrieve real-time balance data
   *
   * @remarks
   * The `/accounts/balance/get` endpoint returns the real-time balance for each of an Item's
   * accounts. While other endpoints, such as `/accounts/get`, return a balance object,
   * `/accounts/balance/get` forces the available and current balance fields to be refreshed rather
   * than cached. This endpoint can be used for existing Items that were added via any of Plaid's
   * other products. This endpoint can be used as long as Link has been initialized with any other
   * product; `balance` itself is not a product that can be used to initialize Link. As this
   * endpoint triggers a synchronous request for fresh data, latency may be higher than for other
   * Plaid endpoints (typically less than 10 seconds, but occasionally up to 30 seconds or more); if
   * you encounter errors, you may find it necessary to adjust your timeout period when making
   * requests.
   *
   * Note: If you are getting real-time balance for the purpose of assessing the return risk of a
   * proposed ACH transaction, it is recommended to use `/signal/evaluate` instead of
   * `/accounts/balance/get`. `/signal/evaluate` returns the same real-time balance information and
   * also provides access to Signal Rules, which provides no-code transaction business logic
   * configuration, backtesting and recommendations for tuning your transaction acceptance logic,
   * and the ability to easily switch between Balance and Signal Transaction Scores as needed for
   * ultra-low-latency, ML-powered risk assessments. For more details, see the [Balance
   * documentation](https://plaid.com/docs/balance/#balance-integration-options).
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.AccountsBalanceGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  accountsBalanceGet(
    request: ThePlaidApiClient.AccountsBalanceGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<AccountsGetResponse, ThePlaidApiClient.AccountsBalanceGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/accounts/balance/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: accountsBalanceGetRequestSchema },
      },
      {
        success: { kind: "json", schema: accountsGetResponseSchema },
        errorFactory: ThePlaidApiClient.AccountsBalanceGetError,
      },
      options,
    );
  }

  /**
   * Retrieve accounts
   *
   * @remarks
   * The `/accounts/get` endpoint can be used to retrieve a list of accounts associated with any
   * linked Item. Plaid will only return active bank accounts -- that is, accounts that are not
   * closed and are capable of carrying a balance. To return new accounts that were created after
   * the user linked their Item, you can listen for the
   * [`NEW_ACCOUNTS_AVAILABLE`](https://plaid.com/docs/api/items/#new_accounts_available) webhook
   * and then use Link's [update mode](https://plaid.com/docs/link/update-mode/) to request that the
   * user share this new account with you.
   *
   * `/accounts/get` is free to use and retrieves cached information, rather than extracting fresh
   * information from the institution. The balance returned will reflect the balance at the time of
   * the last successful Item update. If the Item is enabled for a regularly updating product, such
   * as Transactions, Investments, or Liabilities, the balance will typically update about once a
   * day, as long as the Item is healthy. If the Item is enabled only for products that do not
   * frequently update, such as Auth or Identity, balance data may be much older.
   *
   * For real-time balance information, use the paid endpoints `/accounts/balance/get` or
   * `/signal/evaluate` instead.
   *
   * @returns success
   *
   * @throws {@link ThePlaidApiClient.AccountsGetError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  accountsGet(
    request: ThePlaidApiClient.AccountsGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<AccountsGetResponse, ThePlaidApiClient.AccountsGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/accounts/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: accountsGetRequestSchema },
      },
      {
        success: { kind: "json", schema: accountsGetResponseSchema },
        errorFactory: ThePlaidApiClient.AccountsGetError,
      },
      options,
    );
  }

  /**
   * Retrieve information about a Plaid application
   *
   * @remarks
   * Allows financial institutions to retrieve information about Plaid clients for the purpose of
   * building control-tower experiences
   *
   * @returns success
   *
   * @throws {@link ThePlaidApiClient.ApplicationGetError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  applicationGet(
    request: ThePlaidApiClient.ApplicationGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ApplicationGetResponse, ThePlaidApiClient.ApplicationGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/application/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: applicationGetRequestSchema },
      },
      {
        success: { kind: "json", schema: applicationGetResponseSchema },
        errorFactory: ThePlaidApiClient.ApplicationGetError,
      },
      options,
    );
  }

  /**
   * Create Asset Report Audit Copy
   *
   * @remarks
   * Plaid can provide an Audit Copy of any Asset Report directly to a participating third party on
   * your behalf. For example, Plaid can supply an Audit Copy directly to the GSEs on your behalf if
   * you participate in Fannie Mae's Day 1 Certainty™ program or utilize Freddie Mac's Loan Product
   * Advisor® (LPA®) Asset and Income Modeler (AIM). An Audit Copy contains the same underlying data
   * as the Asset Report.
   *
   * To grant access to an Audit Copy, use the `/asset_report/audit_copy/create` endpoint to create
   * an `audit_copy_token` and then pass that token to the third party who needs access. Each third
   * party has its own `auditor_id`, for example `fannie_mae`. You'll need to create a separate
   * Audit Copy for each third party to whom you want to grant access to the Report.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.AssetReportAuditCopyCreateError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  assetReportAuditCopyCreate(
    request: ThePlaidApiClient.AssetReportAuditCopyCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<AssetReportAuditCopyCreateResponse, ThePlaidApiClient.AssetReportAuditCopyCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/asset_report/audit_copy/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: assetReportAuditCopyCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: assetReportAuditCopyCreateResponseSchema },
        errorFactory: ThePlaidApiClient.AssetReportAuditCopyCreateError,
      },
      options,
    );
  }

  /**
   * Retrieve an Asset Report Audit Copy
   *
   * @remarks
   * `/asset_report/audit_copy/get` allows auditors to get a copy of an Asset Report that was
   * previously shared via the `/asset_report/audit_copy/create` endpoint. The caller of
   * `/asset_report/audit_copy/create` must provide the `audit_copy_token` to the auditor. This
   * token can then be used to call `/asset_report/audit_copy/get`.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.AssetReportAuditCopyGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  assetReportAuditCopyGet(
    request: ThePlaidApiClient.AssetReportAuditCopyGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<AssetReportGetResponse, ThePlaidApiClient.AssetReportAuditCopyGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/asset_report/audit_copy/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: assetReportAuditCopyGetRequestSchema },
      },
      {
        success: { kind: "json", schema: assetReportGetResponseSchema },
        errorFactory: ThePlaidApiClient.AssetReportAuditCopyGetError,
      },
      options,
    );
  }

  /**
   * Retrieve a PDF Asset Report Audit Copy
   *
   * @remarks
   * The `/asset_report/audit_copy/pdf/get` endpoint retrieves an Asset Report Audit Copy in PDF
   * format. The caller must provide the `audit_copy_token` that was shared via the
   * `/asset_report/audit_copy/create` endpoint.
   *
   * The response to `/asset_report/audit_copy/pdf/get` is the PDF binary data. The `request_id` is
   * returned in the `Plaid-Request-ID` header.
   *
   * [View a sample PDF Asset Report](https://plaid.com/documents/sample-asset-report.pdf).
   *
   * @returns A PDF of the Asset Report Audit Copy
   *
   * @throws {@link ThePlaidApiClient.AssetReportAuditCopyPdfGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  assetReportAuditCopyPdfGet(
    request: ThePlaidApiClient.AssetReportAuditCopyPdfGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, ThePlaidApiClient.AssetReportAuditCopyPdfGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/asset_report/audit_copy/pdf/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: assetReportAuditCopyPdfGetRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: ThePlaidApiClient.AssetReportAuditCopyPdfGetError,
      },
      options,
    );
  }

  /**
   * Remove Asset Report Audit Copy
   *
   * @remarks
   * The `/asset_report/audit_copy/remove` endpoint allows you to remove an Audit Copy. Removing an
   * Audit Copy invalidates the `audit_copy_token` associated with it, meaning both you and any
   * third parties holding the token will no longer be able to use it to access Report data. Items
   * associated with the Asset Report, the Asset Report itself and other Audit Copies of it are not
   * affected and will remain accessible after removing the given Audit Copy.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.AssetReportAuditCopyRemoveError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  assetReportAuditCopyRemove(
    request: ThePlaidApiClient.AssetReportAuditCopyRemoveRequestParams,
    options?: RequestOptions,
  ): ApiPromise<AssetReportAuditCopyRemoveResponse, ThePlaidApiClient.AssetReportAuditCopyRemoveError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/asset_report/audit_copy/remove"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: assetReportAuditCopyRemoveRequestSchema },
      },
      {
        success: { kind: "json", schema: assetReportAuditCopyRemoveResponseSchema },
        errorFactory: ThePlaidApiClient.AssetReportAuditCopyRemoveError,
      },
      options,
    );
  }

  /**
   * Create an Asset Report
   *
   * @remarks
   * The `/asset_report/create` endpoint initiates the process of creating an Asset Report, which
   * can then be retrieved by passing the `asset_report_token` return value to the
   * `/asset_report/get` or `/asset_report/pdf/get` endpoints.
   *
   * The Asset Report takes some time to be created and is not available immediately after calling
   * `/asset_report/create`. The exact amount of time to create the report will vary depending on
   * how many days of history are requested and will typically range from a few seconds to about one
   * minute. When the Asset Report is ready to be retrieved using `/asset_report/get` or
   * `/asset_report/pdf/get`, Plaid will fire a `PRODUCT_READY` webhook. For full details of the
   * webhook schema, see [Asset Report
   * webhooks](https://plaid.com/docs/api/products/assets/#webhooks).
   *
   * The `/asset_report/create` endpoint creates an Asset Report at a moment in time. Asset Reports
   * are immutable. To get an updated Asset Report, use the `/asset_report/refresh` endpoint.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.AssetReportCreateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  assetReportCreate(
    request: ThePlaidApiClient.AssetReportCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<AssetReportCreateResponse, ThePlaidApiClient.AssetReportCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/asset_report/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: assetReportCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: assetReportCreateResponseSchema },
        errorFactory: ThePlaidApiClient.AssetReportCreateError,
      },
      options,
    );
  }

  /**
   * Filter Asset Report
   *
   * @remarks
   * By default, an Asset Report will contain all of the accounts on a given Item. In some cases,
   * you may not want the Asset Report to contain all accounts. For example, you might have the end
   * user choose which accounts are relevant in Link using the Account Select view, which you can
   * enable in the dashboard. Or, you might always exclude certain account types or subtypes, which
   * you can identify by using the `/accounts/get` endpoint. To narrow an Asset Report to only a
   * subset of accounts, use the `/asset_report/filter` endpoint.
   *
   * To exclude certain Accounts from an Asset Report, first use the `/asset_report/create` endpoint
   * to create the report, then send the `asset_report_token` along with a list of `account_ids` to
   * exclude to the `/asset_report/filter` endpoint, to create a new Asset Report which contains
   * only a subset of the original Asset Report's data.
   *
   * Because Asset Reports are immutable, calling `/asset_report/filter` does not alter the original
   * Asset Report in any way; rather, `/asset_report/filter` creates a new Asset Report with a new
   * token and id. Asset Reports created via `/asset_report/filter` do not contain new Asset data,
   * and are not billed.
   *
   * Plaid will fire a [`PRODUCT_READY`](https://plaid.com/docs/api/products/assets/#product_ready)
   * webhook once generation of the filtered Asset Report has completed.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.AssetReportFilterError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  assetReportFilter(
    request: ThePlaidApiClient.AssetReportFilterRequestParams,
    options?: RequestOptions,
  ): ApiPromise<AssetReportFilterResponse, ThePlaidApiClient.AssetReportFilterError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/asset_report/filter"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: assetReportFilterRequestSchema },
      },
      {
        success: { kind: "json", schema: assetReportFilterResponseSchema },
        errorFactory: ThePlaidApiClient.AssetReportFilterError,
      },
      options,
    );
  }

  /**
   * Retrieve an Asset Report
   *
   * @remarks
   * The `/asset_report/get` endpoint retrieves the Asset Report in JSON format. Before calling
   * `/asset_report/get`, you must first create the Asset Report using `/asset_report/create` (or
   * filter an Asset Report using `/asset_report/filter`) and then wait for the
   * [`PRODUCT_READY`](https://plaid.com/docs/api/products/assets/#product_ready) webhook to fire,
   * indicating that the Report is ready to be retrieved.
   *
   * By default, an Asset Report includes transaction descriptions as returned by the bank, as
   * opposed to parsed and categorized by Plaid. You can also receive cleaned and categorized
   * transactions, as well as additional insights like merchant name or location information. We
   * call this an Asset Report with Insights. An Asset Report with Insights provides transaction
   * category, location, and merchant information in addition to the transaction strings provided in
   * a standard Asset Report. To retrieve an Asset Report with Insights, call the
   * `/asset_report/get` endpoint with `include_insights` set to `true`.
   *
   * For latency-sensitive applications, you can optionally call `/asset_report/create` with
   * `options.add_ons` set to `["fast_assets"]`. This will cause Plaid to create two versions of the
   * Asset Report: one with only current and available balance and identity information, and then
   * later on the complete Asset Report. You will receive separate webhooks for each version of the
   * Asset Report.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.AssetReportGetError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  assetReportGet(
    request: ThePlaidApiClient.AssetReportGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<AssetReportGetResponse, ThePlaidApiClient.AssetReportGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/asset_report/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: assetReportGetRequestSchema },
      },
      {
        success: { kind: "json", schema: assetReportGetResponseSchema },
        errorFactory: ThePlaidApiClient.AssetReportGetError,
      },
      options,
    );
  }

  /**
   * Retrieve a PDF Asset Report
   *
   * @remarks
   * The `/asset_report/pdf/get` endpoint retrieves the Asset Report in PDF format. Before calling
   * `/asset_report/pdf/get`, you must first create the Asset Report using `/asset_report/create`
   * (or filter an Asset Report using `/asset_report/filter`) and then wait for the
   * [`PRODUCT_READY`](https://plaid.com/docs/api/products/assets/#product_ready) webhook to fire,
   * indicating that the Report is ready to be retrieved.
   *
   * The response to `/asset_report/pdf/get` is the PDF binary data. The `request_id` is returned in
   * the `Plaid-Request-ID` header.
   *
   * [View a sample PDF Asset Report](https://plaid.com/documents/sample-asset-report.pdf).
   *
   * @returns A PDF of the Asset Report
   *
   * @throws {@link ThePlaidApiClient.AssetReportPdfGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  assetReportPdfGet(
    request: ThePlaidApiClient.AssetReportPdfGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, ThePlaidApiClient.AssetReportPdfGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/asset_report/pdf/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: assetReportPdfGetRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: ThePlaidApiClient.AssetReportPdfGetError,
      },
      options,
    );
  }

  /**
   * Refresh an Asset Report
   *
   * @remarks
   * An Asset Report is an immutable snapshot of a user's assets. In order to "refresh" an Asset
   * Report you created previously, you can use the `/asset_report/refresh` endpoint to create a new
   * Asset Report based on the old one, but with the most recent data available.
   *
   * The new Asset Report will contain the same Items as the original Report, as well as the same
   * filters applied by any call to `/asset_report/filter`. By default, the new Asset Report will
   * also use the same parameters you submitted with your original `/asset_report/create` request,
   * but the original `days_requested` value and the values of any parameters in the `options`
   * object can be overridden with new values. To change these arguments, simply supply new values
   * for them in your request to `/asset_report/refresh`. Submit an empty string ("") for any
   * previously-populated fields you would like set as empty.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.AssetReportRefreshError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  assetReportRefresh(
    request: ThePlaidApiClient.AssetReportRefreshRequestParams,
    options?: RequestOptions,
  ): ApiPromise<AssetReportRefreshResponse, ThePlaidApiClient.AssetReportRefreshError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/asset_report/refresh"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: assetReportRefreshRequestSchema },
      },
      {
        success: { kind: "json", schema: assetReportRefreshResponseSchema },
        errorFactory: ThePlaidApiClient.AssetReportRefreshError,
      },
      options,
    );
  }

  /**
   * Delete an Asset Report
   *
   * @remarks
   * The `/item/remove` endpoint allows you to invalidate an `access_token`, meaning you will not be
   * able to create new Asset Reports with it. Removing an Item does not affect any Asset Reports or
   * Audit Copies you have already created, which will remain accessible until you remove them
   * specifically.
   *
   * The `/asset_report/remove` endpoint allows you to remove access to an Asset Report. Removing an
   * Asset Report invalidates its `asset_report_token`, meaning you will no longer be able to use it
   * to access Report data or create new Audit Copies. Removing an Asset Report does not affect the
   * underlying Items, but does invalidate any `audit_copy_tokens` associated with the Asset Report.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.AssetReportRemoveError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  assetReportRemove(
    request: ThePlaidApiClient.AssetReportRemoveRequestParams,
    options?: RequestOptions,
  ): ApiPromise<AssetReportRemoveResponse, ThePlaidApiClient.AssetReportRemoveError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/asset_report/remove"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: assetReportRemoveRequestSchema },
      },
      {
        success: { kind: "json", schema: assetReportRemoveResponseSchema },
        errorFactory: ThePlaidApiClient.AssetReportRemoveError,
      },
      options,
    );
  }

  /**
   * Retrieve auth data
   *
   * @remarks
   * The `/auth/get` endpoint returns the bank account and bank identification numbers (such as
   * routing numbers, for US accounts) associated with an Item's checking, savings, and cash
   * management accounts, along with high-level account data and balances when available.
   *
   * Versioning note: In API version 2017-03-08, the schema of the `numbers` object returned by this
   * endpoint is substantially different. For details, see [Plaid API
   * versioning](https://plaid.com/docs/api/versioning/#version-2018-05-22).
   *
   * @returns success
   *
   * @throws {@link ThePlaidApiClient.AuthGetError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  authGet(
    request: ThePlaidApiClient.AuthGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<AuthGetResponse, ThePlaidApiClient.AuthGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/auth/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: authGetRequestSchema },
      },
      {
        success: { kind: "json", schema: authGetResponseSchema },
        errorFactory: ThePlaidApiClient.AuthGetError,
      },
      options,
    );
  }

  /**
   * Verify auth data
   *
   * @remarks
   * The `/auth/verify` endpoint verifies bank account and routing numbers and (optionally) account
   * owner names against Plaid's database via [Database
   * Auth](https://plaid.com/docs/auth/coverage/database-auth/). It can be used to verify account
   * numbers that were not collected via the Plaid Link flow.
   *
   * This endpoint is currently in Early Availability; contact sales or your Plaid account manager
   * to request access.
   *
   * @returns success
   *
   * @throws {@link ThePlaidApiClient.AuthVerifyError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  authVerify(
    request: ThePlaidApiClient.AuthVerifyRequestParams,
    options?: RequestOptions,
  ): ApiPromise<AuthVerifyResponse, ThePlaidApiClient.AuthVerifyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/auth/verify"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: authVerifyRequestSchema },
      },
      {
        success: { kind: "json", schema: authVerifyResponseSchema },
        errorFactory: ThePlaidApiClient.AuthVerifyError,
      },
      options,
    );
  }

  /**
   * (Deprecated) Get balance of your Bank Transfer account
   *
   * @remarks
   * Use the `/bank_transfer/balance/get` endpoint to see the available balance in your bank
   * transfer account. Debit transfers increase this balance once their status is posted. Credit
   * transfers decrease this balance when they are created.
   *
   * The transactable balance shows the amount in your account that you are able to use for
   * transfers, and is essentially your available balance minus your minimum balance.
   *
   * Note that this endpoint can only be used with FBO accounts, when using Bank Transfers in the
   * Full Service configuration. It cannot be used on your own account when using Bank Transfers in
   * the BTS Platform configuration.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.BankTransferBalanceGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  bankTransferBalanceGet(
    request: ThePlaidApiClient.BankTransferBalanceGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BankTransferBalanceGetResponse, ThePlaidApiClient.BankTransferBalanceGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/bank_transfer/balance/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: bankTransferBalanceGetRequestSchema },
      },
      {
        success: { kind: "json", schema: bankTransferBalanceGetResponseSchema },
        errorFactory: ThePlaidApiClient.BankTransferBalanceGetError,
      },
      options,
    );
  }

  /**
   * (Deprecated) Cancel a bank transfer
   *
   * @remarks
   * Use the `/bank_transfer/cancel` endpoint to cancel a bank transfer. A transfer is eligible for
   * cancelation if the `cancellable` property returned by `/bank_transfer/get` is `true`.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.BankTransferCancelError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  bankTransferCancel(
    request: ThePlaidApiClient.BankTransferCancelRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BankTransferCancelResponse, ThePlaidApiClient.BankTransferCancelError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/bank_transfer/cancel"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: bankTransferCancelRequestSchema },
      },
      {
        success: { kind: "json", schema: bankTransferCancelResponseSchema },
        errorFactory: ThePlaidApiClient.BankTransferCancelError,
      },
      options,
    );
  }

  /**
   * (Deprecated) Create a bank transfer
   *
   * @remarks
   * Use the `/bank_transfer/create` endpoint to initiate a new bank transfer.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.BankTransferCreateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  bankTransferCreate(
    request: ThePlaidApiClient.BankTransferCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BankTransferCreateResponse, ThePlaidApiClient.BankTransferCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/bank_transfer/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: bankTransferCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: bankTransferCreateResponseSchema },
        errorFactory: ThePlaidApiClient.BankTransferCreateError,
      },
      options,
    );
  }

  /**
   * List bank transfer events
   *
   * @remarks
   * Use the `/bank_transfer/event/list` endpoint to get a list of Plaid-initiated ACH or bank
   * transfer events based on specified filter criteria. When using Auth with micro-deposit
   * verification enabled, this endpoint can be used to fetch status updates on ACH micro-deposits.
   * For more details, see [micro-deposit
   * events](https://plaid.com/docs/auth/coverage/microdeposit-events/).
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.BankTransferEventListError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bankTransferEventList(
    request: ThePlaidApiClient.BankTransferEventListRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BankTransferEventListResponse, ThePlaidApiClient.BankTransferEventListError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/bank_transfer/event/list"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: bankTransferEventListRequestSchema },
      },
      {
        success: { kind: "json", schema: bankTransferEventListResponseSchema },
        errorFactory: ThePlaidApiClient.BankTransferEventListError,
      },
      options,
    );
  }

  /**
   * Sync bank transfer events
   *
   * @remarks
   * `/bank_transfer/event/sync` allows you to request up to the next 25 Plaid-initiated bank
   * transfer events that happened after a specific `event_id`. When using Auth with micro-deposit
   * verification enabled, this endpoint can be used to fetch status updates on ACH micro-deposits.
   * For more details, see [micro-deposit
   * events](https://plaid.com/docs/auth/coverage/microdeposit-events/).
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.BankTransferEventSyncError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bankTransferEventSync(
    request: ThePlaidApiClient.BankTransferEventSyncRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BankTransferEventSyncResponse, ThePlaidApiClient.BankTransferEventSyncError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/bank_transfer/event/sync"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: bankTransferEventSyncRequestSchema },
      },
      {
        success: { kind: "json", schema: bankTransferEventSyncResponseSchema },
        errorFactory: ThePlaidApiClient.BankTransferEventSyncError,
      },
      options,
    );
  }

  /**
   * (Deprecated) Retrieve a bank transfer
   *
   * @remarks
   * The `/bank_transfer/get` fetches information about the bank transfer corresponding to the given
   * `bank_transfer_id`.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.BankTransferGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  bankTransferGet(
    request: ThePlaidApiClient.BankTransferGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BankTransferGetResponse, ThePlaidApiClient.BankTransferGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/bank_transfer/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: bankTransferGetRequestSchema },
      },
      {
        success: { kind: "json", schema: bankTransferGetResponseSchema },
        errorFactory: ThePlaidApiClient.BankTransferGetError,
      },
      options,
    );
  }

  /**
   * (Deprecated) List bank transfers
   *
   * @remarks
   * Use the `/bank_transfer/list` endpoint to see a list of all your bank transfers and their
   * statuses. Results are paginated; use the `count` and `offset` query parameters to retrieve the
   * desired bank transfers.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.BankTransferListError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  bankTransferList(
    request: ThePlaidApiClient.BankTransferListRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BankTransferListResponse, ThePlaidApiClient.BankTransferListError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/bank_transfer/list"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: bankTransferListRequestSchema },
      },
      {
        success: { kind: "json", schema: bankTransferListResponseSchema },
        errorFactory: ThePlaidApiClient.BankTransferListError,
      },
      options,
    );
  }

  /**
   * (Deprecated) Migrate account into Bank Transfers
   *
   * @remarks
   * As an alternative to adding Items via Link, you can also use the
   * `/bank_transfer/migrate_account` endpoint to migrate known account and routing numbers to Plaid
   * Items. Note that Items created in this way are not compatible with endpoints for other
   * products, such as `/accounts/balance/get`, and can only be used with Bank Transfer endpoints.
   * If you require access to other endpoints, create the Item through Link instead. Access to
   * `/bank_transfer/migrate_account` is not enabled by default; to obtain access, contact your
   * Plaid account manager.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.BankTransferMigrateAccountError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  bankTransferMigrateAccount(
    request: ThePlaidApiClient.BankTransferMigrateAccountRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BankTransferMigrateAccountResponse, ThePlaidApiClient.BankTransferMigrateAccountError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/bank_transfer/migrate_account"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: bankTransferMigrateAccountRequestSchema },
      },
      {
        success: { kind: "json", schema: bankTransferMigrateAccountResponseSchema },
        errorFactory: ThePlaidApiClient.BankTransferMigrateAccountError,
      },
      options,
    );
  }

  /**
   * (Deprecated) Retrieve a sweep
   *
   * @remarks
   * The `/bank_transfer/sweep/get` endpoint fetches information about the sweep corresponding to
   * the given `sweep_id`.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.BankTransferSweepGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  bankTransferSweepGet(
    request: ThePlaidApiClient.BankTransferSweepGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BankTransferSweepGetResponse, ThePlaidApiClient.BankTransferSweepGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/bank_transfer/sweep/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: bankTransferSweepGetRequestSchema },
      },
      {
        success: { kind: "json", schema: bankTransferSweepGetResponseSchema },
        errorFactory: ThePlaidApiClient.BankTransferSweepGetError,
      },
      options,
    );
  }

  /**
   * (Deprecated) List sweeps
   *
   * @remarks
   * The `/bank_transfer/sweep/list` endpoint fetches information about the sweeps matching the
   * given filters.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.BankTransferSweepListError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  bankTransferSweepList(
    request: ThePlaidApiClient.BankTransferSweepListRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BankTransferSweepListResponse, ThePlaidApiClient.BankTransferSweepListError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/bank_transfer/sweep/list"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: bankTransferSweepListRequestSchema },
      },
      {
        success: { kind: "json", schema: bankTransferSweepListResponseSchema },
        errorFactory: ThePlaidApiClient.BankTransferSweepListError,
      },
      options,
    );
  }

  /**
   * (Deprecated) Evaluate risk of a bank account
   *
   * @remarks
   * Use `/beacon/account_risk/v1/evaluate` to get risk insights for a linked account.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.BeaconAccountRiskEvaluateError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  beaconAccountRiskEvaluate(
    request: ThePlaidApiClient.BeaconAccountRiskEvaluateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BeaconAccountRiskEvaluateResponse, ThePlaidApiClient.BeaconAccountRiskEvaluateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/beacon/account_risk/v1/evaluate"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: beaconAccountRiskEvaluateRequestSchema },
      },
      {
        success: { kind: "json", schema: beaconAccountRiskEvaluateResponseSchema },
        errorFactory: ThePlaidApiClient.BeaconAccountRiskEvaluateError,
      },
      options,
    );
  }

  /**
   * (Deprecated) Get a Beacon Duplicate
   *
   * @remarks
   * Returns a Beacon Duplicate for a given Beacon Duplicate id.
   *
   * A Beacon Duplicate represents a pair of similar Beacon Users within your organization.
   *
   * Two Beacon User revisions are returned for each Duplicate record in either the `beacon_user1`
   * or `beacon_user2` response fields.
   *
   * The `analysis` field in the response indicates which fields matched between `beacon_user1` and
   * `beacon_user2`.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  beaconDuplicateGet(
    request: ThePlaidApiClient.BeaconDuplicateGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BeaconDuplicateGetResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/beacon/duplicate/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: beaconDuplicateGetRequestSchema },
      },
      {
        success: { kind: "json", schema: beaconDuplicateGetResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * (Deprecated) Create a Beacon Report
   *
   * @remarks
   * Create a fraud report for a given Beacon User.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  beaconReportCreate(
    request: ThePlaidApiClient.BeaconReportCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BeaconReportCreateResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/beacon/report/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: beaconReportCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: beaconReportCreateResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * (Deprecated) Get a Beacon Report
   *
   * @remarks
   * Returns a Beacon Report for a given Beacon Report ID.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  beaconReportGet(
    request: ThePlaidApiClient.BeaconReportGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BeaconReportGetResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/beacon/report/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: beaconReportGetRequestSchema },
      },
      {
        success: { kind: "json", schema: beaconReportGetResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * (Deprecated) List Beacon Reports for a Beacon User
   *
   * @remarks
   * Use the `/beacon/report/list` endpoint to view all Beacon Reports you created for a specific
   * Beacon User. The reports returned by this endpoint are exclusively reports you created for a
   * specific user. A Beacon User can only have one active report at a time, but a new report can be
   * created if a previous report has been deleted. The results from this endpoint are paginated;
   * the `next_cursor` field will be populated if there is another page of results that can be
   * retrieved. To fetch the next page, pass the `next_cursor` value as the `cursor` parameter in
   * the next request.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  beaconReportList(
    request: ThePlaidApiClient.BeaconReportListRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BeaconReportListResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/beacon/report/list"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: beaconReportListRequestSchema },
      },
      {
        success: { kind: "json", schema: beaconReportListResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * (Deprecated) Get a Beacon Report Syndication
   *
   * @remarks
   * Returns a Beacon Report Syndication for a given Beacon Report Syndication id.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  beaconReportSyndicationGet(
    request: ThePlaidApiClient.BeaconReportSyndicationGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BeaconReportSyndicationGetResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/beacon/report_syndication/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: beaconReportSyndicationGetRequestSchema },
      },
      {
        success: { kind: "json", schema: beaconReportSyndicationGetResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * (Deprecated) List Beacon Report Syndications for a Beacon User
   *
   * @remarks
   * Use the `/beacon/report_syndication/list` endpoint to view all Beacon Reports that have been
   * syndicated to a specific Beacon User. This endpoint returns Beacon Report Syndications which
   * are references to Beacon Reports created either by you, or another Beacon customer, that
   * matched the specified Beacon User. A Beacon User can have multiple active Beacon Report
   * Syndications at once. The results from this endpoint are paginated; the `next_cursor` field
   * will be populated if there is another page of results that can be retrieved. To fetch the next
   * page, pass the `next_cursor` value as the `cursor` parameter in the next request.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  beaconReportSyndicationList(
    request: ThePlaidApiClient.BeaconReportSyndicationListRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BeaconReportSyndicationListResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/beacon/report_syndication/list"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: beaconReportSyndicationListRequestSchema },
      },
      {
        success: { kind: "json", schema: beaconReportSyndicationListResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * (Deprecated) Get Account Insights for a Beacon User
   *
   * @remarks
   * Get Account Insights for all Accounts linked to this Beacon User. The insights for each account
   * are computed based on the information that was last retrieved from the financial institution.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  beaconUserAccountInsightsGet(
    request: ThePlaidApiClient.BeaconUserAccountInsightsGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BeaconUserAccountInsightsGetResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/beacon/user/account_insights/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: beaconUserAccountInsightsGetRequestSchema },
      },
      {
        success: { kind: "json", schema: beaconUserAccountInsightsGetResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * (Deprecated) Create a Beacon User
   *
   * @remarks
   * Create and scan a Beacon User against your Beacon Program, according to your program's
   * settings.
   *
   * When you submit a new user to `/beacon/user/create`, several checks are performed immediately:
   *
   *   - The user's PII (provided within the `user` object) is searched against all other users
   *     within the Beacon Program you specified. If a match is found that violates your program's
   *     "Duplicate Information Filtering" settings, the user will be returned with a status of
   *     `pending_review`.
   *
   *   - The user's PII is also searched against all fraud reports created by your organization
   *     across all of your Beacon Programs. If the user's data matches a fraud report that your
   *     team created, the user will be returned with a status of `rejected`.
   *
   *   - Finally, the user's PII is searched against all fraud reports shared with the Beacon
   *     Network by other companies. If a matching fraud report is found, the user will be returned
   *     with a `pending_review` status if your program has enabled automatic flagging based on
   *     network fraud.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  beaconUserCreate(
    request: ThePlaidApiClient.BeaconUserCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BeaconUserCreateResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/beacon/user/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: beaconUserCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: beaconUserCreateResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * (Deprecated) Get a Beacon User
   *
   * @remarks
   * Fetch a Beacon User.
   *
   * The Beacon User is returned with all of their associated information and a `status` based on
   * the Beacon Network duplicate record and fraud checks.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  beaconUserGet(
    request: ThePlaidApiClient.BeaconUserGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BeaconUserGetResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/beacon/user/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: beaconUserGetRequestSchema },
      },
      {
        success: { kind: "json", schema: beaconUserGetResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * (Deprecated) List a Beacon User's history
   *
   * @remarks
   * List all changes to the Beacon User in reverse-chronological order.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  beaconUserHistoryList(
    request: ThePlaidApiClient.BeaconUserHistoryListRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BeaconUserHistoryListResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/beacon/user/history/list"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: beaconUserHistoryListRequestSchema },
      },
      {
        success: { kind: "json", schema: beaconUserHistoryListResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * (Deprecated) Review a Beacon User
   *
   * @remarks
   * Update the status of a Beacon User.
   *
   * When updating a Beacon User's status via this endpoint, Plaid validates that the status change
   * is consistent with the related state for this Beacon User. Specifically, we will check:
   *
   * 1. Whether there are any associated Beacon Reports connected to the Beacon User, and
   * 2. Whether there are any confirmed Beacon Report Syndications connected to the Beacon User.
   *
   * When updating a Beacon User's status to `rejected`, we enforce that either a Beacon Report has
   * been created for the Beacon User or a Beacon Report Syndication has been confirmed. When
   * updating a Beacon User's status to `cleared`, we enforce that there are no active Beacon
   * Reports or confirmed Beacon Report Syndications associated with the user. If you previously
   * created a Beacon Report for this user, you must delete it before updating the Beacon User's
   * status to `cleared`. There are no restrictions on updating a Beacon User's status to
   * `pending_review`.
   *
   * If these conditions are not met, the request will be rejected with an error explaining the
   * issue.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  beaconUserReview(
    request: ThePlaidApiClient.BeaconUserReviewRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BeaconUserGetResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/beacon/user/review"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: beaconUserReviewRequestSchema },
      },
      {
        success: { kind: "json", schema: beaconUserGetResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * (Deprecated) Update the identity data of a Beacon User
   *
   * @remarks
   * Update the identity data for a Beacon User in your Beacon Program or add new accounts to the
   * Beacon User.
   *
   * Similar to `/beacon/user/create`, several checks are performed immediately when you submit an
   * identity data change to `/beacon/user/update`:
   *
   *   - The user's updated PII is searched against all other users within the Beacon Program you
   *     specified. If a match is found that violates your program's "Duplicate Information
   *     Filtering" settings, the user will be returned with a status of `pending_review`.
   *
   *   - The user's updated PII is also searched against all fraud reports created by your
   *     organization across all of your Beacon Programs. If the user's data matches a fraud report
   *     that your team created, the user will be returned with a status of `rejected`.
   *
   *   - Finally, the user's PII is searched against all fraud reports shared with the Beacon
   *     Network by other companies. If a matching fraud report is found, the user will be returned
   *     with a `pending_review` status if your program has enabled automatic flagging based on
   *     network fraud.
   *
   * Plaid maintains a version history for each Beacon User, so the Beacon User's identity data
   * before and after the update is retained as separate versions.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  beaconUserUpdate(
    request: ThePlaidApiClient.BeaconUserUpdateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BeaconUserUpdateResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/beacon/user/update"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: beaconUserUpdateRequestSchema },
      },
      {
        success: { kind: "json", schema: beaconUserUpdateResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get EWA Score Report
   *
   * @remarks
   * The `/beta/ewa_report/v1/get` endpoint provides an Earned Wage Access (EWA) score that
   * quantifies the delinquency risk associated with a given item. The score is derived from a
   * combination of cashflow patterns and network-based behavioral features.
   *
   * The response returns a list of EWA scores, where each score corresponds to a potential advance
   * amount range. These scores estimate the likelihood of repayment for advances within that range.
   *
   * Score range: 1-99
   *
   * Interpretation: Higher scores indicate a greater likelihood of repayment.
   *
   * This endpoint enables clients to assess repayment risk and make data-driven decisions when
   * determining eligibility or limits for earned wage advances.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.BetaEwaReportV1GetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  betaEwaReportV1Get(
    request: ThePlaidApiClient.BetaEwaReportV1GetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BetaEwaReportV1GetResponse, ThePlaidApiClient.BetaEwaReportV1GetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/beta/ewa_report/v1/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: betaEwaReportV1GetRequestSchema },
      },
      {
        success: { kind: "json", schema: betaEwaReportV1GetResponseSchema },
        errorFactory: ThePlaidApiClient.BetaEwaReportV1GetError,
      },
      options,
    );
  }

  /**
   * Creates a new end customer for a Plaid reseller.
   *
   * @remarks
   * The `/beta/partner/customer/v1/create` endpoint creates a new end customer record. You can
   * provide as much information as you have available. If any required information is missing for
   * the products you intend to use, it will be listed in the `requirements_due` field of the
   * response.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.BetaPartnerCustomerV1CreateError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  betaPartnerCustomerV1Create(
    request: ThePlaidApiClient.BetaPartnerCustomerV1CreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BetaPartnerCustomerV1CreateResponse, ThePlaidApiClient.BetaPartnerCustomerV1CreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/beta/partner/customer/v1/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: betaPartnerCustomerV1CreateRequestSchema },
      },
      {
        success: { kind: "json", schema: betaPartnerCustomerV1CreateResponseSchema },
        errorFactory: ThePlaidApiClient.BetaPartnerCustomerV1CreateError,
      },
      options,
    );
  }

  /**
   * Enables a Plaid reseller's end customer in the Production environment.
   *
   * @remarks
   * The `/beta/partner/customer/v1/enable` endpoint is used by reseller partners to enable an end
   * customer in the full Production environment.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.BetaPartnerCustomerV1EnableError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  betaPartnerCustomerV1Enable(
    request: ThePlaidApiClient.BetaPartnerCustomerV1EnableRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BetaPartnerCustomerV1EnableResponse, ThePlaidApiClient.BetaPartnerCustomerV1EnableError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/beta/partner/customer/v1/enable"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: betaPartnerCustomerV1EnableRequestSchema },
      },
      {
        success: { kind: "json", schema: betaPartnerCustomerV1EnableResponseSchema },
        errorFactory: ThePlaidApiClient.BetaPartnerCustomerV1EnableError,
      },
      options,
    );
  }

  /**
   * Retrieves the details of a Plaid reseller's end customer.
   *
   * @remarks
   * The `/beta/partner/customer/v1/get` endpoint is used by reseller partners to retrieve data
   * about a single end customer.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.BetaPartnerCustomerV1GetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  betaPartnerCustomerV1Get(
    request: ThePlaidApiClient.BetaPartnerCustomerV1GetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BetaPartnerCustomerV1GetResponse, ThePlaidApiClient.BetaPartnerCustomerV1GetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/beta/partner/customer/v1/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: betaPartnerCustomerV1GetRequestSchema },
      },
      {
        success: { kind: "json", schema: betaPartnerCustomerV1GetResponseSchema },
        errorFactory: ThePlaidApiClient.BetaPartnerCustomerV1GetError,
      },
      options,
    );
  }

  /**
   * Updates an existing end customer.
   *
   * @remarks
   * The `/beta/partner/customer/v1/update` endpoint updates an existing end customer record.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.BetaPartnerCustomerV1UpdateError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  betaPartnerCustomerV1Update(
    request: ThePlaidApiClient.BetaPartnerCustomerV1UpdateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BetaPartnerCustomerV1UpdateResponse, ThePlaidApiClient.BetaPartnerCustomerV1UpdateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/beta/partner/customer/v1/update"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: betaPartnerCustomerV1UpdateRequestSchema },
      },
      {
        success: { kind: "json", schema: betaPartnerCustomerV1UpdateResponseSchema },
        errorFactory: ThePlaidApiClient.BetaPartnerCustomerV1UpdateError,
      },
      options,
    );
  }

  /**
   * Create a Business Verification
   *
   * @remarks
   * Create a new business verification to check a business's identity and risk profile.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  businessVerificationCreate(
    request: ThePlaidApiClient.BusinessVerificationCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BusinessVerificationCreateResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/business_verification/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: businessVerificationCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: businessVerificationCreateResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get a Business Verification
   *
   * @remarks
   * Retrieve the current state of a specific business verification.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  businessVerificationGet(
    request: ThePlaidApiClient.BusinessVerificationGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BusinessVerificationGetResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/business_verification/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: businessVerificationGetRequestSchema },
      },
      {
        success: { kind: "json", schema: businessVerificationGetResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Gets transaction data in `cashflow_report`
   *
   * @remarks
   * The `/cashflow_report/get` endpoint retrieves transactions data associated with an Item.
   * Transactions data is standardized across financial institutions. Transactions are returned in
   * reverse-chronological order, and the sequence of transaction ordering is stable and will not
   * shift. Transactions are not immutable and can also be removed altogether by the institution; a
   * removed transaction will no longer appear in `/cashflow_report/get`. For more details, see
   * [Pending and posted
   * transactions](https://plaid.com/docs/transactions/transactions-data/#pending-and-posted-transactions).
   * Due to the potentially large number of transactions associated with an Item, results are
   * paginated. Manipulate the `count` and `cursor` parameters in conjunction with the `has_more`
   * response body field to fetch all available transactions. Note that data isn't likely to be
   * immediately available to `/cashflow_report/get`. Plaid will begin to prepare transactions data
   * upon Item link, if Link was initialized with `cashflow_report`, or if it wasn't, upon the first
   * call to `/cashflow_report/refresh`. To be alerted when transaction data is ready to be fetched,
   * listen for the `CASHFLOW_REPORT_READY` webhook.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.CashflowReportGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cashflowReportGet(
    request: ThePlaidApiClient.CashflowReportGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CashflowReportGetResponse, ThePlaidApiClient.CashflowReportGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/cashflow_report/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: cashflowReportGetRequestSchema },
      },
      {
        success: { kind: "json", schema: cashflowReportGetResponseSchema },
        errorFactory: ThePlaidApiClient.CashflowReportGetError,
      },
      options,
    );
  }

  /**
   * Gets insights data in Cashflow Report
   *
   * @remarks
   * The `/cashflow_report/insights/get` endpoint retrieves insights data associated with an Item.
   * Insights are only calculated on credit and depository accounts.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.CashflowReportInsightsGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cashflowReportInsightsGet(
    request: ThePlaidApiClient.CashflowReportInsightsGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CashflowReportInsightsGetResponse, ThePlaidApiClient.CashflowReportInsightsGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/cashflow_report/insights/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: cashflowReportInsightsGetRequestSchema },
      },
      {
        success: { kind: "json", schema: cashflowReportInsightsGetResponseSchema },
        errorFactory: ThePlaidApiClient.CashflowReportInsightsGetError,
      },
      options,
    );
  }

  /**
   * Refresh transaction data in `cashflow_report`
   *
   * @remarks
   * `/cashflow_report/refresh` is an endpoint that initiates an on-demand extraction to fetch the
   * newest transactions for an Item (given an `item_id`). The Item must already have Cashflow
   * Report added as a product in order to call `/cashflow_report/refresh`.
   *
   * After calling `/cashflow_report/refresh`, Plaid will fire a webhook `CASHFLOW_REPORT_READY`
   * alerting clients that new transactions data can then be ingested via `/cashflow_report/get` or
   * the webhook will contain an error code informing there was an error in refreshing transactions
   * data.
   *
   * Note that the `/cashflow_report/refresh` endpoint is not supported for Capital One
   * (`ins_128026`) non-depository accounts and will result in a `PRODUCTS_NOT_SUPPORTED` error if
   * called on an Item that contains only non-depository accounts from that institution.
   *
   * As this endpoint triggers a synchronous request for fresh data, latency may be higher than for
   * other Plaid endpoints (typically less than 10 seconds, but up to 30 seconds or more). If you
   * encounter errors, you may find it necessary to adjust your timeout period for requests.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.CashflowReportRefreshError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cashflowReportRefresh(
    request: ThePlaidApiClient.CashflowReportRefreshRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CashflowReportRefreshResponse, ThePlaidApiClient.CashflowReportRefreshError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/cashflow_report/refresh"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: cashflowReportRefreshRequestSchema },
      },
      {
        success: { kind: "json", schema: cashflowReportRefreshResponseSchema },
        errorFactory: ThePlaidApiClient.CashflowReportRefreshError,
      },
      options,
    );
  }

  /**
   * Gets transaction data in `cashflow_report`
   *
   * @remarks
   * The `/cashflow_report/transactions/get` endpoint retrieves transactions data associated with an
   * Item. Transactions data is standardized across financial institutions. Transactions are
   * returned in reverse-chronological order, and the sequence of transaction ordering is stable and
   * will not shift. Transactions are not immutable and can also be removed altogether by the
   * institution; a removed transaction will no longer appear in
   * `/cashflow_report/transactions/get`. For more details, see [Pending and posted
   * transactions](https://plaid.com/docs/transactions/transactions-data/#pending-and-posted-transactions).
   * Due to the potentially large number of transactions associated with an Item, results are
   * paginated. Manipulate the `count` and `cursor` parameters in conjunction with the `has_more`
   * response body field to fetch all available transactions. Note that data isn't likely to be
   * immediately available to `/cashflow_report/transactions/get`. Plaid will begin to prepare
   * transactions data upon Item link, if Link was initialized with `cashflow_report`, or if it
   * wasn't, upon the first call to `/cashflow_report/refresh`. To be alerted when transaction data
   * is ready to be fetched, listen for the `CASHFLOW_REPORT_READY` webhook.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.CashflowReportTransactionsGetError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cashflowReportTransactionsGet(
    request: ThePlaidApiClient.CashflowReportTransactionsGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CashflowReportTransactionsGetResponse, ThePlaidApiClient.CashflowReportTransactionsGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/cashflow_report/transactions/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: cashflowReportTransactionsGetRequestSchema },
      },
      {
        success: { kind: "json", schema: cashflowReportTransactionsGetResponseSchema },
        errorFactory: ThePlaidApiClient.CashflowReportTransactionsGetError,
      },
      options,
    );
  }

  /**
   * (Deprecated) Get legacy categories
   *
   * @remarks
   * Send a request to the `/categories/get` endpoint to get detailed information on legacy
   * categories returned by Plaid. This endpoint does not require authentication.
   *
   * All implementations are recommended to [use the newer `personal_finance_category`
   * taxonomy](https://plaid.com/docs/transactions/pfc-migration/) instead of the legacy `category`
   * taxonomy supported by this endpoint.
   *
   * @returns success
   *
   * @throws {@link ThePlaidApiClient.CategoriesGetError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  categoriesGet(
    request: ThePlaidApiClient.CategoriesGetRequest,
    options?: RequestOptions,
  ): ApiPromise<CategoriesGetResponse, ThePlaidApiClient.CategoriesGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/categories/get"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.record(s.string(), s.unknown()) },
      },
      {
        success: { kind: "json", schema: categoriesGetResponseSchema },
        errorFactory: ThePlaidApiClient.CategoriesGetError,
      },
      options,
    );
  }

  /**
   * List a historical log of item consent events
   *
   * @remarks
   * List a historical log of Item consent events. Consent logs are only available for events
   * occurring on or after November 7, 2024. Extremely recent events (occurring within the past 12
   * hours) may not be available via this endpoint. Up to three years of consent logs will be
   * available via the endpoint.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.ConsentEventsGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  consentEventsGet(
    request: ThePlaidApiClient.ConsentEventsGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ConsentEventsGetResponse, ThePlaidApiClient.ConsentEventsGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/consent/events/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: consentEventsGetRequestSchema },
      },
      {
        success: { kind: "json", schema: consentEventsGetResponseSchema },
        errorFactory: ThePlaidApiClient.ConsentEventsGetError,
      },
      options,
    );
  }

  /**
   * Retrieve PDF Reports
   *
   * @remarks
   * Retrieves all existing CRB Bank Income and Base reports for the consumer in PDF format.
   *
   * Response is PDF binary data. The `request_id` is returned in the `Plaid-Request-ID` header.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.ConsumerReportPdfGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  consumerReportPdfGet(
    request: ThePlaidApiClient.ConsumerReportPdfGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, ThePlaidApiClient.ConsumerReportPdfGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/consumer_report/pdf/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: consumerReportPdfGetRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: ThePlaidApiClient.ConsumerReportPdfGetError,
      },
      options,
    );
  }

  /**
   * Retrieve a Base Report
   *
   * @remarks
   * This endpoint allows you to retrieve the Base Report for your user, allowing you to receive
   * comprehensive bank account and cash flow data. You should call this endpoint after you've
   * received a `CHECK_REPORT_READY` or a `USER_CHECK_REPORT_READY` webhook, either after the Link
   * session for the user or after calling `/cra/check_report/create`. If the most recent consumer
   * report for the user doesn't have sufficient data to generate the base report, or the consumer
   * report has expired, you will receive an error indicating that you should create a new consumer
   * report by calling `/cra/check_report/create`.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.CraCheckReportBaseReportGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  craCheckReportBaseReportGet(
    request: ThePlaidApiClient.CraCheckReportBaseReportGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CraCheckReportBaseReportGetResponse, ThePlaidApiClient.CraCheckReportBaseReportGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/cra/check_report/base_report/get"),
        auth: anyAuth(
          allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
          this.#auth.oauth2,
        ),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: craCheckReportBaseReportGetRequestSchema },
      },
      {
        success: { kind: "json", schema: craCheckReportBaseReportGetResponseSchema },
        errorFactory: ThePlaidApiClient.CraCheckReportBaseReportGetError,
      },
      options,
    );
  }

  /**
   * Retrieve cash flow insights from your user's banking data
   *
   * @remarks
   * This endpoint allows you to retrieve the Cashflow Insights report for your user. You should
   * call this endpoint after you've received a `CHECK_REPORT_READY` or a `USER_CHECK_REPORT_READY`
   * webhook, either after the Link session for the user or after calling
   * `/cra/check_report/create`. If the most recent consumer report for the user doesn't have
   * sufficient data to generate the report, or the consumer report has expired, you will receive an
   * error indicating that you should create a new consumer report by calling
   * `/cra/check_report/create`.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.CraCheckReportCashflowInsightsGetError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/cra/check_report/cashflow_insights/get"),
        auth: anyAuth(
          allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
          this.#auth.oauth2,
        ),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: craCheckReportCashflowInsightsGetRequestSchema },
      },
      {
        success: { kind: "json", schema: craCheckReportCashflowInsightsGetResponseSchema },
        errorFactory: ThePlaidApiClient.CraCheckReportCashflowInsightsGetError,
      },
      options,
    );
  }

  /**
   * Refresh or create a Consumer Report
   *
   * @remarks
   * Use `/cra/check_report/create` to refresh data in an existing report. A Consumer Report will
   * last for 24 hours before expiring; you should call any `/get` endpoints on the report before it
   * expires. If a report expires, you can call `/cra/check_report/create` again to re-generate it
   * and refresh the data in the report.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.CraCheckReportCreateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  craCheckReportCreate(
    request: ThePlaidApiClient.CraCheckReportCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CraCheckReportCreateResponse, ThePlaidApiClient.CraCheckReportCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/cra/check_report/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: craCheckReportCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: craCheckReportCreateResponseSchema },
        errorFactory: ThePlaidApiClient.CraCheckReportCreateError,
      },
      options,
    );
  }

  /**
   * Retrieve income insights from your user's banks
   *
   * @remarks
   * This endpoint allows you to retrieve the Income Insights report for your user. You should call
   * this endpoint after you've received a `CHECK_REPORT_READY` or a `USER_CHECK_REPORT_READY`
   * webhook, either after the Link session for the user or after calling
   * `/cra/check_report/create`. If the most recent consumer report for the user doesn't have
   * sufficient data to generate the report, or the consumer report has expired, you will receive an
   * error indicating that you should create a new consumer report by calling
   * `/cra/check_report/create`.
   *
   * NOTE: The following schema was updated in April 2026 to reflect the response when the provided
   * version is "II2". Please see [this
   * document](https://docs.google.com/document/d/1kQkQ7FOgFaC4n-sUGUk74hoXZNY_L_nJeCuMe7Keip4/edit?tab=t.0#heading=h.rudamzinus2i)
   * for guidance on migrating to II2 if you are currently using the II1 version, and [this
   * section](https://docs.google.com/document/d/1kQkQ7FOgFaC4n-sUGUk74hoXZNY_L_nJeCuMe7Keip4/edit?tab=t.0#bookmark=id.tdcc2wpk0h60)
   * for an example II1 response along with its
   * [documentation](https://docs.google.com/document/d/1kQkQ7FOgFaC4n-sUGUk74hoXZNY_L_nJeCuMe7Keip4/edit?tab=t.36c85n2ircqk#heading=h.79dwr5c1iszl).
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.CraCheckReportIncomeInsightsGetError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/cra/check_report/income_insights/get"),
        auth: anyAuth(
          allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
          this.#auth.oauth2,
        ),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: craCheckReportIncomeInsightsGetRequestSchema },
      },
      {
        success: { kind: "json", schema: craCheckReportIncomeInsightsGetResponseSchema },
        errorFactory: ThePlaidApiClient.CraCheckReportIncomeInsightsGetError,
      },
      options,
    );
  }

  /**
   * Retrieve the LendScore from your user's banking data
   *
   * @remarks
   * This endpoint allows you to retrieve the LendScore report for your user. You should call this
   * endpoint after you've received a `CHECK_REPORT_READY` or a `USER_CHECK_REPORT_READY` webhook,
   * either after the Link session for the user or after calling `/cra/check_report/create`. If the
   * most recent consumer report for the user doesn't have sufficient data to generate the report,
   * or the consumer report has expired, you will receive an error indicating that you should create
   * a new consumer report by calling `/cra/check_report/create`.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.CraCheckReportLendScoreGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  craCheckReportLendScoreGet(
    request: ThePlaidApiClient.CraCheckReportLendScoreGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CraCheckReportLendScoreGetResponse, ThePlaidApiClient.CraCheckReportLendScoreGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/cra/check_report/lend_score/get"),
        auth: anyAuth(
          allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
          this.#auth.oauth2,
        ),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: craCheckReportLendScoreGetRequestSchema },
      },
      {
        success: { kind: "json", schema: craCheckReportLendScoreGetResponseSchema },
        errorFactory: ThePlaidApiClient.CraCheckReportLendScoreGetError,
      },
      options,
    );
  }

  /**
   * Retrieve network attributes for the user
   *
   * @remarks
   * This endpoint allows you to retrieve the Network Insights report for your user. You should call
   * this endpoint after you've received a `CHECK_REPORT_READY` or a `USER_CHECK_REPORT_READY`
   * webhook, either after the Link session for the user or after calling
   * `/cra/check_report/create`. If the most recent consumer report for the user doesn't have
   * sufficient data to generate the report, or the consumer report has expired, you will receive an
   * error indicating that you should create a new consumer report by calling
   * `/cra/check_report/create`.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.CraCheckReportNetworkInsightsGetError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/cra/check_report/network_insights/get"),
        auth: anyAuth(
          allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
          this.#auth.oauth2,
        ),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: craCheckReportNetworkInsightsGetRequestSchema },
      },
      {
        success: { kind: "json", schema: craCheckReportNetworkInsightsGetResponseSchema },
        errorFactory: ThePlaidApiClient.CraCheckReportNetworkInsightsGetError,
      },
      options,
    );
  }

  /**
   * Retrieve cash flow insights from partners
   *
   * @remarks
   * This endpoint allows you to retrieve the Partner Insights report for your user. You should call
   * this endpoint after you've received a `CHECK_REPORT_READY` or a `USER_CHECK_REPORT_READY`
   * webhook, either after the Link session for the user or after calling
   * `/cra/check_report/create`. If the most recent consumer report for the user doesn't have
   * sufficient data to generate the report, or the consumer report has expired, you will receive an
   * error indicating that you should create a new consumer report by calling
   * `/cra/check_report/create`.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.CraCheckReportPartnerInsightsGetError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/cra/check_report/partner_insights/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: craCheckReportPartnerInsightsGetRequestSchema },
      },
      {
        success: { kind: "json", schema: craCheckReportPartnerInsightsGetResponseSchema },
        errorFactory: ThePlaidApiClient.CraCheckReportPartnerInsightsGetError,
      },
      options,
    );
  }

  /**
   * Retrieve a Consumer Report as a PDF
   *
   * @remarks
   * `/cra/check_report/pdf/get` retrieves the most recent Consumer Report in PDF format. By
   * default, the most recent Base Report (if it exists) for the user will be returned. To request
   * that the most recent Partner Insights or Income Insights report be included in the PDF as well,
   * use the `add-ons` field.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.CraCheckReportPdfGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  craCheckReportPdfGet(
    request: ThePlaidApiClient.CraCheckReportPdfGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, ThePlaidApiClient.CraCheckReportPdfGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/cra/check_report/pdf/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: craCheckReportPdfGetRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: ThePlaidApiClient.CraCheckReportPdfGetError,
      },
      options,
    );
  }

  /**
   * Retrieve various home lending reports for a user
   *
   * @remarks
   * This endpoint allows you to retrieve home lending reports for a user. To obtain a VoA or
   * Employment Refresh report, you need to make sure that `cra_base_report` is included in the
   * `products` parameter when calling `/link/token/create` or `/cra/check_report/create`.
   *
   * You should call this endpoint after you've received a `CHECK_REPORT_READY` or a
   * `USER_CHECK_REPORT_READY` webhook, either after the Link session for the user or after calling
   * `/cra/check_report/create`.
   *
   * If the most recent consumer report for the user doesn't have sufficient data to generate the
   * report, or the consumer report has expired, you will receive an error indicating that you
   * should create a new consumer report by calling `/cra/check_report/create`.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.CraCheckReportVerificationGetError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  craCheckReportVerificationGet(
    request: ThePlaidApiClient.CraCheckReportVerificationGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CraCheckReportVerificationGetResponse, ThePlaidApiClient.CraCheckReportVerificationGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/cra/check_report/verification/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: craCheckReportVerificationGetRequestSchema },
      },
      {
        success: { kind: "json", schema: craCheckReportVerificationGetResponseSchema },
        errorFactory: ThePlaidApiClient.CraCheckReportVerificationGetError,
      },
      options,
    );
  }

  /**
   * Retrieve a Consumer Report as a Verification PDF
   *
   * @remarks
   * The `/cra/check_report/verification/pdf/get` endpoint retrieves the most recent Consumer Report
   * in PDF format, specifically formatted for Home Lending verification use cases. Before calling
   * this endpoint, ensure that you've created a VOA report through Link or the
   * `/cra/check_report/create` endpoint, and have received a `CHECK_REPORT_READY` or a
   * `USER_CHECK_REPORT_READY` webhook.
   *
   * The response to `/cra/check_report/verification/pdf/get` is the PDF binary data. The
   * `request_id` is returned in the `Plaid-Request-ID` header.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.CraCheckReportVerificationPdfGetError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  craCheckReportVerificationPdfGet(
    request: ThePlaidApiClient.CraCheckReportVerificationPdfGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, ThePlaidApiClient.CraCheckReportVerificationPdfGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/cra/check_report/verification/pdf/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: craCheckReportVerificationPdfGetRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: ThePlaidApiClient.CraCheckReportVerificationPdfGetError,
      },
      options,
    );
  }

  /**
   * Retrieve the credit profile report for a user
   *
   * @remarks
   * `/cra/credit_profile/report/get` retrieves a credit profile report for a user.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.CraCreditProfileReportGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  craCreditProfileReportGet(
    request: ThePlaidApiClient.CraCreditProfileReportGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CraCreditProfileReportGetResponse, ThePlaidApiClient.CraCreditProfileReportGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/cra/credit_profile/report/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: craCreditProfileReportGetRequestSchema },
      },
      {
        success: { kind: "json", schema: craCreditProfileReportGetResponseSchema },
        errorFactory: ThePlaidApiClient.CraCreditProfileReportGetError,
      },
      options,
    );
  }

  /**
   * Register loan applications and decisions
   *
   * @remarks
   * `/cra/loans/applications/register` registers loan applications and decisions.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.CraLoansApplicationsRegisterError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  craLoansApplicationsRegister(
    request: ThePlaidApiClient.CraLoansApplicationsRegisterRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CraLoansApplicationsRegisterResponse, ThePlaidApiClient.CraLoansApplicationsRegisterError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/cra/loans/applications/register"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: craLoansApplicationsRegisterRequestSchema },
      },
      {
        success: { kind: "json", schema: craLoansApplicationsRegisterResponseSchema },
        errorFactory: ThePlaidApiClient.CraLoansApplicationsRegisterError,
      },
      options,
    );
  }

  /**
   * Register a list of loans to their applicants
   *
   * @remarks
   * `/cra/loans/register` registers a list of loans to their applicants.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.CraLoansRegisterError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  craLoansRegister(
    request: ThePlaidApiClient.CraLoansRegisterRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CraLoansRegisterResponse, ThePlaidApiClient.CraLoansRegisterError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/cra/loans/register"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: craLoansRegisterRequestSchema },
      },
      {
        success: { kind: "json", schema: craLoansRegisterResponseSchema },
        errorFactory: ThePlaidApiClient.CraLoansRegisterError,
      },
      options,
    );
  }

  /**
   * Unregister a list of loans
   *
   * @remarks
   * `/cra/loans/unregister` indicates the loans have reached a final status and no further updates
   * are expected.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.CraLoansUnregisterError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  craLoansUnregister(
    request: ThePlaidApiClient.CraLoansUnregisterRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CraLoanUnregisterResponse, ThePlaidApiClient.CraLoansUnregisterError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/cra/loans/unregister"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: craLoansUnregisterRequestSchema },
      },
      {
        success: { kind: "json", schema: craLoanUnregisterResponseSchema },
        errorFactory: ThePlaidApiClient.CraLoansUnregisterError,
      },
      options,
    );
  }

  /**
   * Update loan data
   *
   * @remarks
   * `/cra/loans/update` updates loan information such as the status and payment history.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.CraLoansUpdateError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  craLoansUpdate(
    request: ThePlaidApiClient.CraLoansUpdateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CraLoansUpdateResponse, ThePlaidApiClient.CraLoansUpdateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/cra/loans/update"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: craLoansUpdateRequestSchema },
      },
      {
        success: { kind: "json", schema: craLoansUpdateResponseSchema },
        errorFactory: ThePlaidApiClient.CraLoansUpdateError,
      },
      options,
    );
  }

  /**
   * Retrieve a Monitoring Insights Report
   *
   * @remarks
   * This endpoint allows you to retrieve a Cash Flow Updates report by passing in the `user_id`
   * referred to in the webhook you received.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.CraMonitoringInsightsGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  craMonitoringInsightsGet(
    request: ThePlaidApiClient.CraMonitoringInsightsGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CraMonitoringInsightsGetResponse, ThePlaidApiClient.CraMonitoringInsightsGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/cra/monitoring_insights/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: craMonitoringInsightsGetRequestSchema },
      },
      {
        success: { kind: "json", schema: craMonitoringInsightsGetResponseSchema },
        errorFactory: ThePlaidApiClient.CraMonitoringInsightsGetError,
      },
      options,
    );
  }

  /**
   * Subscribe to Monitoring Insights
   *
   * @remarks
   * This endpoint allows you to subscribe to insights for a user's linked CRA Item, which are
   * updated between one and four times per day (best-effort). In the current Cash Flow Updates beta
   * experience, only one Item per user may be subscribed for monitoring updates.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.CraMonitoringInsightsSubscribeError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/cra/monitoring_insights/subscribe"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: craMonitoringInsightsSubscribeRequestSchema },
      },
      {
        success: { kind: "json", schema: craMonitoringInsightsSubscribeResponseSchema },
        errorFactory: ThePlaidApiClient.CraMonitoringInsightsSubscribeError,
      },
      options,
    );
  }

  /**
   * Unsubscribe from Monitoring Insights
   *
   * @remarks
   * This endpoint allows you to unsubscribe from previously subscribed Monitoring Insights.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.CraMonitoringInsightsUnsubscribeError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/cra/monitoring_insights/unsubscribe"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: craMonitoringInsightsUnsubscribeRequestSchema },
      },
      {
        success: { kind: "json", schema: craMonitoringInsightsUnsubscribeResponseSchema },
        errorFactory: ThePlaidApiClient.CraMonitoringInsightsUnsubscribeError,
      },
      options,
    );
  }

  /**
   * Retrieve cash flow insights from the bank accounts used for income verification
   *
   * @remarks
   * `/cra/partner_insights/get` returns cash flow insights for a specified user.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.CraPartnerInsightsGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  craPartnerInsightsGet(
    request: ThePlaidApiClient.CraPartnerInsightsGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CraPartnerInsightsGetResponse, ThePlaidApiClient.CraPartnerInsightsGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/cra/partner_insights/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: craPartnerInsightsGetRequestSchema },
      },
      {
        success: { kind: "json", schema: craPartnerInsightsGetResponseSchema },
        errorFactory: ThePlaidApiClient.CraPartnerInsightsGetError,
      },
      options,
    );
  }

  /**
   * Retrieve a CRA Report for provided user
   *
   * @remarks
   * `/cra/report/get` retrieves a CRA Report for a user.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.CraReportGetError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  craReportGet(
    request: ThePlaidApiClient.CraReportGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CraReportGetResponse, ThePlaidApiClient.CraReportGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/cra/report/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: craReportGetRequestSchema },
      },
      {
        success: { kind: "json", schema: craReportGetResponseSchema },
        errorFactory: ThePlaidApiClient.CraReportGetError,
      },
      options,
    );
  }

  /**
   * Create payment token
   *
   * @remarks
   * The `/payment_initiation/payment/token/create` endpoint has been deprecated. New Plaid
   * customers will be unable to use this endpoint, and existing customers are encouraged to migrate
   * to the newer, `link_token`-based flow. The recommended flow is to provide the `payment_id` to
   * `/link/token/create`, which returns a `link_token` used to initialize Link.
   *
   * The `/payment_initiation/payment/token/create` endpoint is used to create a `payment_token`,
   * which can then be used in Link initialization to enter a payment initiation flow. You can only
   * use a `payment_token` once. If this attempt fails, the end user aborts the flow, or the token
   * expires, you will need to create a new payment token. Creating a new payment token does not
   * require end user input.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.CreatePaymentTokenError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  createPaymentToken(
    request: ThePlaidApiClient.CreatePaymentTokenRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentInitiationPaymentTokenCreateResponse, ThePlaidApiClient.CreatePaymentTokenError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/payment_initiation/payment/token/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: paymentInitiationPaymentTokenCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: paymentInitiationPaymentTokenCreateResponseSchema },
        errorFactory: ThePlaidApiClient.CreatePaymentTokenError,
      },
      options,
    );
  }

  /**
   * Retrieve an Asset Report with Freddie Mac format. Only Freddie Mac can use this endpoint.
   *
   * @remarks
   * The `/credit/asset_report/freddie_mac/get` endpoint retrieves the Asset Report in Freddie Mac's
   * JSON format.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.CreditAssetReportFreddieMacGetError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  creditAssetReportFreddieMacGet(
    request: ThePlaidApiClient.CreditAssetReportFreddieMacGetRequest,
    options?: RequestOptions,
  ): ApiPromise<AssetReportFreddieGetResponse, ThePlaidApiClient.CreditAssetReportFreddieMacGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/credit/asset_report/freddie_mac/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: assetReportFreddieGetRequestSchema },
      },
      {
        success: { kind: "json", schema: assetReportFreddieGetResponseSchema },
        errorFactory: ThePlaidApiClient.CreditAssetReportFreddieMacGetError,
      },
      options,
    );
  }

  /**
   * Create Asset or Income Report Audit Copy Token
   *
   * @remarks
   * Plaid can create an Audit Copy token of an Asset Report and/or Income Report to share with a
   * participating Government-Sponsored Enterprise (GSE) if you participate in Fannie Mae's Day 1
   * Certainty™ program or utilize Freddie Mac's Loan Product Advisor® (LPA®) Asset and Income
   * Modeler (AIM). An Audit Copy token contains the same underlying data as the Asset Report and/or
   * Income Report (result of `/credit/payroll_income/get`).
   *
   * Use the `/credit/audit_copy_token/create` endpoint to create an `audit_copy_token` and then
   * pass that token to the GSE who needs access.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.CreditAuditCopyTokenCreateError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  creditAuditCopyTokenCreate(
    request: ThePlaidApiClient.CreditAuditCopyTokenCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreditAuditCopyTokenCreateResponse, ThePlaidApiClient.CreditAuditCopyTokenCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/credit/audit_copy_token/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: creditAuditCopyTokenCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: creditAuditCopyTokenCreateResponseSchema },
        errorFactory: ThePlaidApiClient.CreditAuditCopyTokenCreateError,
      },
      options,
    );
  }

  /**
   * Update an Audit Copy Token
   *
   * @remarks
   * The `/credit/audit_copy_token/update` endpoint updates an existing Audit Copy Token by adding
   * the report tokens in the `report_tokens` field to the `audit_copy_token`. If the Audit Copy
   * Token already contains a report of a certain type, it will be replaced with the token provided
   * in the `report_tokens` field.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.CreditAuditCopyTokenUpdateError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  creditAuditCopyTokenUpdate(
    request: ThePlaidApiClient.CreditAuditCopyTokenUpdateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreditAuditCopyTokenUpdateResponse, ThePlaidApiClient.CreditAuditCopyTokenUpdateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/credit/audit_copy_token/update"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: creditAuditCopyTokenUpdateRequestSchema },
      },
      {
        success: { kind: "json", schema: creditAuditCopyTokenUpdateResponseSchema },
        errorFactory: ThePlaidApiClient.CreditAuditCopyTokenUpdateError,
      },
      options,
    );
  }

  /**
   * Retrieve information from the bank accounts used for employment verification
   *
   * @remarks
   * `/beta/credit/v1/bank_employment/get` returns the employment report(s) derived from bank
   * transaction data for a specified user.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.CreditBankEmploymentGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  creditBankEmploymentGet(
    request: ThePlaidApiClient.CreditBankEmploymentGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreditBankEmploymentGetResponse, ThePlaidApiClient.CreditBankEmploymentGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/beta/credit/v1/bank_employment/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: creditBankEmploymentGetRequestSchema },
      },
      {
        success: { kind: "json", schema: creditBankEmploymentGetResponseSchema },
        errorFactory: ThePlaidApiClient.CreditBankEmploymentGetError,
      },
      options,
    );
  }

  /**
   * Retrieve information from the bank accounts used for income verification
   *
   * @remarks
   * `/credit/bank_income/get` returns the bank income report(s) for a specified user. A single
   * report corresponds to all institutions linked in a single Link session. To include multiple
   * institutions in a single report, use [Multi-Item
   * Link](https://plaid.com/docs/link/multi-item-link). To return older reports, use the
   * `options.count` field.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.CreditBankIncomeGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  creditBankIncomeGet(
    request: ThePlaidApiClient.CreditBankIncomeGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreditBankIncomeGetResponse, ThePlaidApiClient.CreditBankIncomeGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/credit/bank_income/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: creditBankIncomeGetRequestSchema },
      },
      {
        success: { kind: "json", schema: creditBankIncomeGetResponseSchema },
        errorFactory: ThePlaidApiClient.CreditBankIncomeGetError,
      },
      options,
    );
  }

  /**
   * Retrieve information from the bank accounts used for income verification in PDF format
   *
   * @remarks
   * `/credit/bank_income/pdf/get` returns the most recent bank income report for a specified user
   * in PDF format. A single report corresponds to all institutions linked in a single Link session.
   * To include multiple institutions in a single report, use [Multi-Item
   * Link](https://plaid.com/docs/link/multi-item-link).
   *
   * @returns A PDF of the Bank Income Report
   *
   * @throws {@link ThePlaidApiClient.CreditBankIncomePdfGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  creditBankIncomePdfGet(
    request: ThePlaidApiClient.CreditBankIncomePdfGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, ThePlaidApiClient.CreditBankIncomePdfGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/credit/bank_income/pdf/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: creditBankIncomePdfGetRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: ThePlaidApiClient.CreditBankIncomePdfGetError,
      },
      options,
    );
  }

  /**
   * Refresh a user's bank income information
   *
   * @remarks
   * `/credit/bank_income/refresh` is deprecated. The backend implementation was removed (returns an
   * `Unimplemented` error at runtime), and the endpoint is no longer part of the documented API
   * surface. To refresh Bank Income data for an existing user, send the user through Link's update
   * mode so they can confirm their income sources. For a fully backend refresh, migrate to CRA
   * Income Insights and call `/cra/check_report/create`.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.CreditBankIncomeRefreshError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  creditBankIncomeRefresh(
    request: ThePlaidApiClient.CreditBankIncomeRefreshRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreditBankIncomeRefreshResponse, ThePlaidApiClient.CreditBankIncomeRefreshError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/credit/bank_income/refresh"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: creditBankIncomeRefreshRequestSchema },
      },
      {
        success: { kind: "json", schema: creditBankIncomeRefreshResponseSchema },
        errorFactory: ThePlaidApiClient.CreditBankIncomeRefreshError,
      },
      options,
    );
  }

  /**
   * Subscribe and unsubscribe to proactive notifications for a user's income profile
   *
   * @remarks
   * `/credit/bank_income/webhook/update` allows you to subscribe or unsubscribe a user for income
   * webhook notifications. By default, all users start out unsubscribed.
   *
   * If a user is subscribed, on significant changes to the user's income profile, you will receive
   * a `BANK_INCOME_REFRESH_UPDATE` webhook, prompting you to refresh bank income data for the user.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.CreditBankIncomeWebhookUpdateError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  creditBankIncomeWebhookUpdate(
    request: ThePlaidApiClient.CreditBankIncomeWebhookUpdateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreditBankIncomeWebhookUpdateResponse, ThePlaidApiClient.CreditBankIncomeWebhookUpdateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/credit/bank_income/webhook/update"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: creditBankIncomeWebhookUpdateRequestSchema },
      },
      {
        success: { kind: "json", schema: creditBankIncomeWebhookUpdateResponseSchema },
        errorFactory: ThePlaidApiClient.CreditBankIncomeWebhookUpdateError,
      },
      options,
    );
  }

  /**
   * Retrieve data for a user's uploaded bank statements
   *
   * @remarks
   * `/credit/bank_statements/uploads/get` returns parsed data from bank statements uploaded by
   * users as part of the Document Income flow. If your account is not enabled for Document Parsing,
   * contact your account manager to request access.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.CreditBankStatementsUploadsGetError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/credit/bank_statements/uploads/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: creditBankStatementsUploadsGetRequestSchema },
      },
      {
        success: { kind: "json", schema: creditBankStatementsUploadsGetResponseSchema },
        errorFactory: ThePlaidApiClient.CreditBankStatementsUploadsGetError,
      },
      options,
    );
  }

  /**
   * Retrieve a summary of an individual's employment information
   *
   * @remarks
   * `/credit/employment/get` returns a list of items with employment information from a user's
   * payroll provider that was verified by an end user.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.CreditEmploymentGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  creditEmploymentGet(
    request: ThePlaidApiClient.CreditEmploymentGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreditEmploymentGetResponse, ThePlaidApiClient.CreditEmploymentGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/credit/employment/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: creditEmploymentGetRequestSchema },
      },
      {
        success: { kind: "json", schema: creditEmploymentGetResponseSchema },
        errorFactory: ThePlaidApiClient.CreditEmploymentGetError,
      },
      options,
    );
  }

  /**
   * Retrieve an Asset Report with Freddie Mac format (aka VOA - Verification Of Assets), and a
   * Verification Of Employment (VOE) report if this one is available. Only Freddie Mac can use this
   * endpoint.
   *
   * @remarks
   * The `/credit/freddie_mac/reports/get` endpoint retrieves the Verification of Assets and
   * Verification of Employment reports.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.CreditFreddieMacReportsGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  creditFreddieMacReportsGet(
    request: ThePlaidApiClient.CreditFreddieMacReportsGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreditFreddieMacReportsGetResponse, ThePlaidApiClient.CreditFreddieMacReportsGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/credit/freddie_mac/reports/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: creditFreddieMacReportsGetRequestSchema },
      },
      {
        success: { kind: "json", schema: creditFreddieMacReportsGetResponseSchema },
        errorFactory: ThePlaidApiClient.CreditFreddieMacReportsGetError,
      },
      options,
    );
  }

  /**
   * Retrieve a user's payroll information
   *
   * @remarks
   * This endpoint gets payroll income information for a specific user, either as a result of the
   * user connecting to their payroll provider or uploading a pay related document.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.CreditPayrollIncomeGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  creditPayrollIncomeGet(
    request: ThePlaidApiClient.CreditPayrollIncomeGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreditPayrollIncomeGetResponse, ThePlaidApiClient.CreditPayrollIncomeGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/credit/payroll_income/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: creditPayrollIncomeGetRequestSchema },
      },
      {
        success: { kind: "json", schema: creditPayrollIncomeGetResponseSchema },
        errorFactory: ThePlaidApiClient.CreditPayrollIncomeGetError,
      },
      options,
    );
  }

  /**
   * Update the parsing configuration for a document income verification
   *
   * @remarks
   * `/credit/payroll_income/parsing_config/update` updates the parsing configuration for a document
   * income verification.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.CreditPayrollIncomeParsingConfigUpdateError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/credit/payroll_income/parsing_config/update"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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

  /**
   * Check income verification eligibility and optimize conversion
   *
   * @remarks
   * `/credit/payroll_income/precheck` is an optional endpoint that can be called before
   * initializing a Link session for income verification. It evaluates whether a given user is
   * supportable by digital income verification. If the user is eligible for digital verification,
   * that information will be associated with the user token, and in this way will generate a Link
   * UI optimized for the end user and their specific employer. If the user cannot be confirmed as
   * eligible, the user can still use the income verification flow, but they may be required to
   * manually upload a paystub to verify their income.
   *
   * While all request fields are optional, providing `employer` data will increase the chance of
   * receiving a useful result.
   *
   * When testing in Sandbox, you can control the results by providing special test values in the
   * `employer` and `access_tokens` fields. `employer_good` and `employer_bad` will result in `HIGH`
   * and `LOW` confidence values, respectively. `employer_multi` will result in a `HIGH` confidence
   * with multiple payroll options. Likewise, `access_good` and `access_bad` will result in `HIGH`
   * and `LOW` confidence values, respectively. Any other value for `employer` and `access_tokens`
   * in Sandbox will result in `UNKNOWN` confidence.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.CreditPayrollIncomePrecheckError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  creditPayrollIncomePrecheck(
    request: ThePlaidApiClient.CreditPayrollIncomePrecheckRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreditPayrollIncomePrecheckResponse, ThePlaidApiClient.CreditPayrollIncomePrecheckError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/credit/payroll_income/precheck"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: creditPayrollIncomePrecheckRequestSchema },
      },
      {
        success: { kind: "json", schema: creditPayrollIncomePrecheckResponseSchema },
        errorFactory: ThePlaidApiClient.CreditPayrollIncomePrecheckError,
      },
      options,
    );
  }

  /**
   * Refresh a digital payroll income verification
   *
   * @remarks
   * `/credit/payroll_income/refresh` refreshes a given digital payroll income verification.
   *
   * @returns success
   *
   * @throws {@link ThePlaidApiClient.CreditPayrollIncomeRefreshError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  creditPayrollIncomeRefresh(
    request: ThePlaidApiClient.CreditPayrollIncomeRefreshRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreditPayrollIncomeRefreshResponse, ThePlaidApiClient.CreditPayrollIncomeRefreshError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/credit/payroll_income/refresh"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: creditPayrollIncomeRefreshRequestSchema },
      },
      {
        success: { kind: "json", schema: creditPayrollIncomeRefreshResponseSchema },
        errorFactory: ThePlaidApiClient.CreditPayrollIncomeRefreshError,
      },
      options,
    );
  }

  /**
   * Retrieve fraud insights for a user's manually uploaded document(s).
   *
   * @remarks
   * `/credit/payroll_income/risk_signals/get` can be used as part of the Document Income flow to
   * assess a user-uploaded document for signs of potential fraud or tampering. It returns a risk
   * score for each uploaded document that indicates the likelihood of the document being
   * fraudulent, in addition to details on the individual risk signals contributing to the score.
   *
   * To trigger risk signal generation for an Item, call `/link/token/create` with `parsing_config`
   * set to include `risk_signals`, or call `/credit/payroll_income/parsing_config/update`. Once
   * risk signal generation has been triggered, `/credit/payroll_income/risk_signals/get` can be
   * called at any time after the `INCOME_VERIFICATION_RISK_SIGNALS` webhook has been fired.
   *
   * `/credit/payroll_income/risk_signals/get` is offered as an add-on to Document Income and is
   * billed separately. To request access to this endpoint, submit a product access request or
   * contact your Plaid account manager.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.CreditPayrollIncomeRiskSignalsGetError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/credit/payroll_income/risk_signals/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: creditPayrollIncomeRiskSignalsGetRequestSchema },
      },
      {
        success: { kind: "json", schema: creditPayrollIncomeRiskSignalsGetResponseSchema },
        errorFactory: ThePlaidApiClient.CreditPayrollIncomeRiskSignalsGetError,
      },
      options,
    );
  }

  /**
   * Create a relay token to share an Asset Report with a partner client
   *
   * @remarks
   * Plaid can share an Asset Report directly with a participating third party on your behalf. The
   * shared Asset Report is the exact same Asset Report originally created in
   * `/asset_report/create`.
   *
   * To grant a third party access to an Asset Report, use the `/credit/relay/create` endpoint to
   * create a `relay_token` and then pass that token to your third party. Each third party has its
   * own `secondary_client_id`; for example, `ce5bd328dcd34123456`. You'll need to create a separate
   * `relay_token` for each third party that needs access to the report on your behalf.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.CreditRelayCreateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  creditRelayCreate(
    request: ThePlaidApiClient.CreditRelayCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreditRelayCreateResponse, ThePlaidApiClient.CreditRelayCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/credit/relay/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: creditRelayCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: creditRelayCreateResponseSchema },
        errorFactory: ThePlaidApiClient.CreditRelayCreateError,
      },
      options,
    );
  }

  /**
   * Retrieve the reports associated with a relay token that was shared with you
   *
   * @remarks
   * `/credit/relay/get` allows third parties to receive a report that was shared with them, using a
   * `relay_token` that was created by the report owner.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.CreditRelayGetError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  creditRelayGet(
    request: ThePlaidApiClient.CreditRelayGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<AssetReportGetResponse, ThePlaidApiClient.CreditRelayGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/credit/relay/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: creditRelayGetRequestSchema },
      },
      {
        success: { kind: "json", schema: assetReportGetResponseSchema },
        errorFactory: ThePlaidApiClient.CreditRelayGetError,
      },
      options,
    );
  }

  /**
   * Retrieve the PDF reports associated with a relay token that was shared with you (beta)
   *
   * @remarks
   * `/credit/relay/pdf/get` allows third parties to receive a PDF report that was shared with them,
   * using a `relay_token` that was created by the report owner.
   *
   * The `/credit/relay/pdf/get` endpoint retrieves the Asset Report in PDF format. Before calling
   * `/credit/relay/pdf/get`, you must first create the Asset Report using `/credit/relay/create`
   * and then wait for the
   * [`PRODUCT_READY`](https://plaid.com/docs/api/products/assets/#product_ready) webhook to fire,
   * indicating that the Report is ready to be retrieved.
   *
   * The response to `/credit/relay/pdf/get` is the PDF binary data. The `request_id` is returned in
   * the `Plaid-Request-ID` header.
   *
   * [View a sample PDF Asset Report](https://plaid.com/documents/sample-asset-report.pdf).
   *
   * @returns A PDF of the Asset Report
   *
   * @throws {@link ThePlaidApiClient.CreditRelayPdfGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  creditRelayPdfGet(
    request: ThePlaidApiClient.CreditRelayPdfGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, ThePlaidApiClient.CreditRelayPdfGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/credit/relay/pdf/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: creditRelayPdfGetRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: ThePlaidApiClient.CreditRelayPdfGetError,
      },
      options,
    );
  }

  /**
   * Refresh a report of a relay token
   *
   * @remarks
   * The `/credit/relay/refresh` endpoint allows third parties to refresh a report that was relayed
   * to them, using a `relay_token` that was created by the report owner. A new report will be
   * created with the original report parameters, but with the most recent data available based on
   * the `days_requested` value of the original report.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.CreditRelayRefreshError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  creditRelayRefresh(
    request: ThePlaidApiClient.CreditRelayRefreshRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreditRelayRefreshResponse, ThePlaidApiClient.CreditRelayRefreshError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/credit/relay/refresh"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: creditRelayRefreshRequestSchema },
      },
      {
        success: { kind: "json", schema: creditRelayRefreshResponseSchema },
        errorFactory: ThePlaidApiClient.CreditRelayRefreshError,
      },
      options,
    );
  }

  /**
   * Remove relay token
   *
   * @remarks
   * The `/credit/relay/remove` endpoint allows you to invalidate a `relay_token`. The third party
   * holding the token will no longer be able to access or refresh the reports which the
   * `relay_token` gives access to. The original report, associated Items, and other relay tokens
   * that provide access to the same report are not affected and will remain accessible after
   * removing the given `relay_token`.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.CreditRelayRemoveError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  creditRelayRemove(
    request: ThePlaidApiClient.CreditRelayRemoveRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreditRelayRemoveResponse, ThePlaidApiClient.CreditRelayRemoveError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/credit/relay/remove"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: creditRelayRemoveRequestSchema },
      },
      {
        success: { kind: "json", schema: creditRelayRemoveResponseSchema },
        errorFactory: ThePlaidApiClient.CreditRelayRemoveError,
      },
      options,
    );
  }

  /**
   * Remove an Audit Copy token
   *
   * @remarks
   * The `/credit/audit_copy_token/remove` endpoint allows you to remove an Audit Copy. Removing an
   * Audit Copy invalidates the `audit_copy_token` associated with it, meaning both you and any
   * third parties holding the token will no longer be able to use it to access Report data. Items
   * associated with the Report data and other Audit Copies of it are not affected and will remain
   * accessible after removing the given Audit Copy.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.CreditReportAuditCopyRemoveError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  creditReportAuditCopyRemove(
    request: ThePlaidApiClient.CreditReportAuditCopyRemoveRequest,
    options?: RequestOptions,
  ): ApiPromise<CreditAuditCopyTokenRemoveResponse, ThePlaidApiClient.CreditReportAuditCopyRemoveError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/credit/audit_copy_token/remove"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: creditAuditCopyTokenRemoveRequestSchema },
      },
      {
        success: { kind: "json", schema: creditAuditCopyTokenRemoveResponseSchema },
        errorFactory: ThePlaidApiClient.CreditReportAuditCopyRemoveError,
      },
      options,
    );
  }

  /**
   * Retrieve Link sessions for your user
   *
   * @remarks
   * This endpoint can be used for your end users after they complete the Link flow. This endpoint
   * returns a list of Link sessions that your user completed, where each session includes the
   * results from the Link flow.
   *
   * These results include details about the Item that was created and some product related metadata
   * (showing, for example, whether the user finished the bank income verification step).
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.CreditSessionsGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  creditSessionsGet(
    request: ThePlaidApiClient.CreditSessionsGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreditSessionsGetResponse, ThePlaidApiClient.CreditSessionsGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/credit/sessions/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: creditSessionsGetRequestSchema },
      },
      {
        success: { kind: "json", schema: creditSessionsGetResponseSchema },
        errorFactory: ThePlaidApiClient.CreditSessionsGetError,
      },
      options,
    );
  }

  /**
   * Retrieve a Dashboard user
   *
   * @remarks
   * The `/dashboard_user/get` endpoint provides details (such as email address) about a specific
   * Dashboard user based on the `dashboard_user_id` field, which is returned in the `audit_trail`
   * object of certain Monitor and Beacon endpoints. This can be used to identify the specific
   * reviewer who performed a Dashboard action.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  dashboardUserGet(
    request: ThePlaidApiClient.DashboardUserGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<DashboardUserGetResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/dashboard_user/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: dashboardUserGetRequestSchema },
      },
      {
        success: { kind: "json", schema: dashboardUserGetResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List Dashboard users
   *
   * @remarks
   * The `/dashboard_user/list` endpoint provides details (such as email address) about all
   * Dashboard users associated with your account. This can be used to audit or track the list of
   * reviewers for Monitor, Beacon, and Identity Verification products.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  dashboardUserList(
    request: ThePlaidApiClient.DashboardUserListRequestParams,
    options?: RequestOptions,
  ): ApiPromise<DashboardUserListResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/dashboard_user/list"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: dashboardUserListRequestSchema },
      },
      {
        success: { kind: "json", schema: dashboardUserListResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * (Deprecated) Search employer database
   *
   * @remarks
   * `/employers/search` allows you the ability to search Plaid's database of known employers, for
   * use with Deposit Switch. You can use this endpoint to look up a user's employer in order to
   * confirm that they are supported. Users with non-supported employers can then be routed out of
   * the Deposit Switch flow.
   *
   * The data in the employer database is currently limited. As the Deposit Switch and Income
   * products progress through their respective beta periods, more employers are being regularly
   * added. Because the employer database is frequently updated, we recommend that you do not cache
   * or store data from this endpoint for more than a day.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.EmployersSearchError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  employersSearch(
    request: ThePlaidApiClient.EmployersSearchRequestParams,
    options?: RequestOptions,
  ): ApiPromise<EmployersSearchResponse, ThePlaidApiClient.EmployersSearchError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/employers/search"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: employersSearchRequestSchema },
      },
      {
        success: { kind: "json", schema: employersSearchResponseSchema },
        errorFactory: ThePlaidApiClient.EmployersSearchError,
      },
      options,
    );
  }

  /**
   * (Deprecated) Retrieve a summary of an individual's employment information
   *
   * @remarks
   * `/employment/verification/get` returns a list of employments through a user payroll that was
   * verified by an end user.
   *
   * This endpoint has been deprecated; new integrations should use `/credit/employment/get`
   * instead.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.EmploymentVerificationGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  employmentVerificationGet(
    request: ThePlaidApiClient.EmploymentVerificationGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<EmploymentVerificationGetResponse, ThePlaidApiClient.EmploymentVerificationGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/employment/verification/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: employmentVerificationGetRequestSchema },
      },
      {
        success: { kind: "json", schema: employmentVerificationGetResponseSchema },
        errorFactory: ThePlaidApiClient.EmploymentVerificationGetError,
      },
      options,
    );
  }

  /**
   * Get FDX Consent Grant
   *
   * @remarks
   * Returns a consent grant by its identifier
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.FdxConsentsGetError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fdxConsentsGet(
    request: ThePlaidApiClient.FdxConsentsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<FdxConsentGrant, ThePlaidApiClient.FdxConsentsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/fdx/consents/{consentId}"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [{ name: "consentId", value: request.consentId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: fdxConsentGrantSchema },
        errorFactory: ThePlaidApiClient.FdxConsentsGetError,
      },
      options,
    );
  }

  /**
   * List FDX Consent Grants for a customer
   *
   * @remarks
   * Returns zero or more consent grants associated with the given data provider customer,
   * optionally filtered by status.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.FdxConsentsListError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fdxConsentsList(
    request: ThePlaidApiClient.FdxConsentsListRequest,
    options?: RequestOptions,
  ): ApiPromise<GetConsentsResponse, ThePlaidApiClient.FdxConsentsListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/fdx/consents"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [
          { name: "customerId", value: request.customerId, schema: s.string() },
          {
            name: "status",
            value: request.status,
            schema: s.optional(s.lazy(() => fdxConsentGrantStatusSchema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getConsentsResponseSchema },
        errorFactory: ThePlaidApiClient.FdxConsentsListError,
      },
      options,
    );
  }

  /**
   * Retrieve FDX Consent Grant revocation records
   *
   * @remarks
   * Returns the revocation history of a consent grant
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.FdxConsentsRevocationGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fdxConsentsRevocationGet(
    request: ThePlaidApiClient.FdxConsentsRevocationGetRequest,
    options?: RequestOptions,
  ): ApiPromise<FdxConsentRevocations, ThePlaidApiClient.FdxConsentsRevocationGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/fdx/consents/{consentId}/revocation"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [{ name: "consentId", value: request.consentId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: fdxConsentRevocationsSchema },
        errorFactory: ThePlaidApiClient.FdxConsentsRevocationGetError,
      },
      options,
    );
  }

  /**
   * Revoke FDX Consent Grant
   *
   * @remarks
   * Appends a REVOKED status record to the named consent grant
   *
   * @returns No Content
   *
   * @throws {@link ThePlaidApiClient.FdxConsentsRevokeError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fdxConsentsRevoke(
    request: ThePlaidApiClient.FdxConsentsRevokeRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ThePlaidApiClient.FdxConsentsRevokeError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/fdx/consents/{consentId}/revocation"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [{ name: "consentId", value: request.consentId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: fdxConsentRevocationSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: ThePlaidApiClient.FdxConsentsRevokeError,
      },
      options,
    );
  }

  /**
   * Webhook receiver for fdx notifications
   *
   * @remarks
   * A generic webhook receiver endpoint for FDX Event Notifications
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.FdxNotificationsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fdxNotifications(
    request: ThePlaidApiClient.FdxNotificationsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ThePlaidApiClient.FdxNotificationsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/fdx/notifications"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: fdxNotificationEntitySchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: ThePlaidApiClient.FdxNotificationsError,
      },
      options,
    );
  }

  /**
   * Get Recipient
   *
   * @remarks
   * Get a specific recipient
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.GetRecipientError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getRecipient(
    request: ThePlaidApiClient.GetRecipientRequest,
    options?: RequestOptions,
  ): ApiPromise<FdxRecipientMetadata, ThePlaidApiClient.GetRecipientError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/fdx/recipient/{recipientId}"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [{ name: "recipientId", value: request.recipientId, schema: s.string() }],
        query: [],
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

  /**
   * Get Recipients
   *
   * @remarks
   * Returns a list of Recipients
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.GetRecipientsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getRecipients(
    options?: RequestOptions,
  ): ApiPromise<GetRecipientsResponse, ThePlaidApiClient.GetRecipientsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/fdx/recipients"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getRecipientsResponseSchema },
        errorFactory: ThePlaidApiClient.GetRecipientsError,
      },
      options,
    );
  }

  /**
   * Returns uploaded document identity
   *
   * @remarks
   * Use `/identity/documents/uploads/get` to retrieve identity details when using [Identity
   * Document Upload](https://plaid.com/docs/identity/identity-document-upload/).
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.IdentityDocumentsUploadsGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  identityDocumentsUploadsGet(
    request: ThePlaidApiClient.IdentityDocumentsUploadsGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<IdentityDocumentsUploadsGetResponse, ThePlaidApiClient.IdentityDocumentsUploadsGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/identity/documents/uploads/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: identityDocumentsUploadsGetRequestSchema },
      },
      {
        success: { kind: "json", schema: identityDocumentsUploadsGetResponseSchema },
        errorFactory: ThePlaidApiClient.IdentityDocumentsUploadsGetError,
      },
      options,
    );
  }

  /**
   * Retrieve identity data
   *
   * @remarks
   * The `/identity/get` endpoint allows you to retrieve various account holder information on file
   * with the financial institution, including names, emails, phone numbers, and addresses. Only
   * name data is guaranteed to be returned; other fields will be empty arrays if not provided by
   * the institution.
   *
   * Note: In API versions 2018-05-22 and earlier, the `owners` object is not returned, and instead
   * identity information is returned in the top level `identity` object. For more details, see
   * [Plaid API versioning](https://plaid.com/docs/api/versioning/#version-2019-05-29).
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.IdentityGetError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  identityGet(
    request: ThePlaidApiClient.IdentityGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<IdentityGetResponse, ThePlaidApiClient.IdentityGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/identity/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: identityGetRequestSchema },
      },
      {
        success: { kind: "json", schema: identityGetResponseSchema },
        errorFactory: ThePlaidApiClient.IdentityGetError,
      },
      options,
    );
  }

  /**
   * Retrieve identity match score
   *
   * @remarks
   * The `/identity/match` endpoint generates a match score, which indicates how well the provided
   * identity data matches the identity information on file with the account holder's financial
   * institution.
   *
   * Fields within the `balances` object will always be null when retrieved by `/identity/match`.
   * Instead, use the free `/accounts/get` endpoint to request balance cached data, or
   * `/accounts/balance/get` or `/signal/evaluate` for real-time data.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.IdentityMatchError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  identityMatch(
    request: ThePlaidApiClient.IdentityMatchRequestParams,
    options?: RequestOptions,
  ): ApiPromise<IdentityMatchResponse, ThePlaidApiClient.IdentityMatchError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/identity/match"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: identityMatchRequestSchema },
      },
      {
        success: { kind: "json", schema: identityMatchResponseSchema },
        errorFactory: ThePlaidApiClient.IdentityMatchError,
      },
      options,
    );
  }

  /**
   * Refresh identity data
   *
   * @remarks
   * `/identity/refresh` is an optional endpoint for users of the Identity product. It initiates an
   * on-demand extraction to fetch the most up to date Identity information from the Financial
   * Institution. This on-demand extraction takes place in addition to the periodic extractions that
   * automatically occur for any Identity-enabled Item. If changes to Identity are discovered after
   * calling `/identity/refresh`, Plaid will fire a webhook
   * [`DEFAULT_UPDATE`](https://plaid.com/docs/api/products/identity/#default_update).
   *
   * As this endpoint triggers a synchronous request for fresh data, latency may be higher than for
   * other Plaid endpoints (typically less than 10 seconds, but occasionally up to 30 seconds or
   * more); if you encounter errors, you may find it necessary to adjust your timeout period when
   * making requests.
   *
   * `/identity/refresh` is offered as an add-on to Identity and has a separate [fee
   * model](https://plaid.com/docs/account/billing/#per-request-flat-fee). To request access to this
   * endpoint, submit a [product access request](https://dashboard.plaid.com/team/products) or
   * contact your Plaid account manager.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.IdentityRefreshError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  identityRefresh(
    request: ThePlaidApiClient.IdentityRefreshRequestParams,
    options?: RequestOptions,
  ): ApiPromise<IdentityRefreshResponse, ThePlaidApiClient.IdentityRefreshError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/identity/refresh"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: identityRefreshRequestSchema },
      },
      {
        success: { kind: "json", schema: identityRefreshResponseSchema },
        errorFactory: ThePlaidApiClient.IdentityRefreshError,
      },
      options,
    );
  }

  /**
   * Create autofill for an Identity Verification
   *
   * @remarks
   * Try to autofill an Identity Verification based on the provided phone number, date of birth and
   * country of residence.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  identityVerificationAutofillCreate(
    request: ThePlaidApiClient.IdentityVerificationAutofillCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<IdentityVerificationAutofillCreateResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/identity_verification/autofill/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: identityVerificationAutofillCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: identityVerificationAutofillCreateResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Create a new Identity Verification
   *
   * @remarks
   * Create a new Identity Verification for the user specified by the `client_user_id` and/or
   * `user_id` field. At least one of these two fields must be provided. The requirements and
   * behavior of the verification are determined by the `template_id` provided. If `user_id` is
   * provided, there must be an associated user; otherwise, an error will be returned.
   *
   *
   * If you don't know whether an active Identity Verification exists for a given `client_user_id`
   * and/or `user_id`, you can specify `"is_idempotent": true` in the request body. With idempotency
   * enabled, a new Identity Verification will only be created if one does not already exist for the
   * associated `client_user_id` and/or `user_id`, and `template_id`. If an Identity Verification is
   * found, it will be returned unmodified with a `200 OK` HTTP status code.
   *
   *
   * If `user_id` is not provided, you can also use this endpoint to supply information you already
   * have collected about the user; if any of these fields are specified, the screens prompting the
   * user to enter them will be skipped during the Link flow. If `user_id` is provided, user
   * information can not be included in the request body. Please use the `/user/update` endpoint to
   * update user data instead.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  identityVerificationCreate(
    request: ThePlaidApiClient.IdentityVerificationCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<IdentityVerificationCreateResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/identity_verification/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: identityVerificationCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: identityVerificationCreateResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve Identity Verification
   *
   * @remarks
   * Retrieve a previously created Identity Verification.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  identityVerificationGet(
    request: ThePlaidApiClient.IdentityVerificationGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<IdentityVerificationGetResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/identity_verification/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: identityVerificationGetRequestSchema },
      },
      {
        success: { kind: "json", schema: identityVerificationGetResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List Identity Verifications
   *
   * @remarks
   * Filter and list Identity Verifications created by your account
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  identityVerificationList(
    request: ThePlaidApiClient.IdentityVerificationListRequestParams,
    options?: RequestOptions,
  ): ApiPromise<IdentityVerificationListResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/identity_verification/list"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: identityVerificationListRequestSchema },
      },
      {
        success: { kind: "json", schema: identityVerificationListResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retry an Identity Verification
   *
   * @remarks
   * Allow a customer to retry their Identity Verification
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  identityVerificationRetry(
    request: ThePlaidApiClient.IdentityVerificationRetryRequestParams,
    options?: RequestOptions,
  ): ApiPromise<IdentityVerificationRetryResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/identity_verification/retry"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: identityVerificationRetryRequestSchema },
      },
      {
        success: { kind: "json", schema: identityVerificationRetryResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * (Deprecated) Create an income verification instance
   *
   * @remarks
   * `/income/verification/create` begins the income verification process by returning an
   * `income_verification_id`. You can then provide the `income_verification_id` to
   * `/link/token/create` under the `income_verification` parameter in order to create a Link
   * instance that will prompt the user to go through the income verification flow. Plaid will fire
   * an `INCOME` webhook once the user completes the Payroll Income flow, or when the uploaded
   * documents in the Document Income flow have finished processing.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.IncomeVerificationCreateError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  incomeVerificationCreate(
    request: ThePlaidApiClient.IncomeVerificationCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<IncomeVerificationCreateResponse, ThePlaidApiClient.IncomeVerificationCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/income/verification/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: incomeVerificationCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: incomeVerificationCreateResponseSchema },
        errorFactory: ThePlaidApiClient.IncomeVerificationCreateError,
      },
      options,
    );
  }

  /**
   * (Deprecated) Download the original documents used for income verification
   *
   * @remarks
   * `/income/verification/documents/download` provides the ability to download the source documents
   * associated with the verification.
   *
   * If Document Income was used, the documents will be those the user provided in Link. For Payroll
   * Income, the most recent files available for download from the payroll provider will be
   * available from this endpoint.
   *
   * The response to `/income/verification/documents/download` is a ZIP file in binary data. If a
   * `document_id` is passed, a single document will be contained in this file. If not, the response
   * will contain all documents associated with the verification.
   *
   * The `request_id` is returned in the `Plaid-Request-ID` header.
   *
   * @returns A ZIP file containing source documents(s) used as the basis for income verification.
   *
   * @throws {@link ThePlaidApiClient.IncomeVerificationDocumentsDownloadError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  incomeVerificationDocumentsDownload(
    request: ThePlaidApiClient.IncomeVerificationDocumentsDownloadRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, ThePlaidApiClient.IncomeVerificationDocumentsDownloadError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/income/verification/documents/download"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: incomeVerificationDocumentsDownloadRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: ThePlaidApiClient.IncomeVerificationDocumentsDownloadError,
      },
      options,
    );
  }

  /**
   * (Deprecated) Retrieve information from the paystubs used for income verification
   *
   * @remarks
   * `/income/verification/paystubs/get` returns the information collected from the paystubs that
   * were used to verify an end user's income. It can be called once the status of the verification
   * has been set to `VERIFICATION_STATUS_PROCESSING_COMPLETE`, as reported by the `INCOME:
   * verification_status` webhook. Attempting to call the endpoint before verification has been
   * completed will result in an error.
   *
   * This endpoint has been deprecated; new integrations should use `/credit/payroll_income/get`
   * instead.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.IncomeVerificationPaystubsGetError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  incomeVerificationPaystubsGet(
    request: ThePlaidApiClient.IncomeVerificationPaystubsGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<IncomeVerificationPaystubsGetResponse, ThePlaidApiClient.IncomeVerificationPaystubsGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/income/verification/paystubs/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: incomeVerificationPaystubsGetRequestSchema },
      },
      {
        success: { kind: "json", schema: incomeVerificationPaystubsGetResponseSchema },
        errorFactory: ThePlaidApiClient.IncomeVerificationPaystubsGetError,
      },
      options,
    );
  }

  /**
   * (Deprecated) Check digital income verification eligibility and optimize conversion
   *
   * @remarks
   * `/income/verification/precheck` is an optional endpoint that can be called before initializing
   * a Link session for income verification. It evaluates whether a given user is supportable by
   * digital income verification and returns a `precheck_id` that can be provided to
   * `/link/token/create`. If the user is eligible for digital verification, providing the
   * `precheck_id` in this way will generate a Link UI optimized for the end user and their specific
   * employer. If the user cannot be confirmed as eligible, the `precheck_id` can still be provided
   * to `/link/token/create` and the user can still use the income verification flow, but they may
   * be required to manually upload a paystub to verify their income.
   *
   * While all request fields are optional, providing either `employer` or
   * `transactions_access_tokens` data will increase the chance of receiving a useful result.
   *
   * This endpoint has been deprecated; new integrations should use
   * `/credit/payroll_income/precheck` instead.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.IncomeVerificationPrecheckError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  incomeVerificationPrecheck(
    request: ThePlaidApiClient.IncomeVerificationPrecheckRequestParams,
    options?: RequestOptions,
  ): ApiPromise<IncomeVerificationPrecheckResponse, ThePlaidApiClient.IncomeVerificationPrecheckError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/income/verification/precheck"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: incomeVerificationPrecheckRequestSchema },
      },
      {
        success: { kind: "json", schema: incomeVerificationPrecheckResponseSchema },
        errorFactory: ThePlaidApiClient.IncomeVerificationPrecheckError,
      },
      options,
    );
  }

  /**
   * (Deprecated) Retrieve information from the tax documents used for income verification
   *
   * @remarks
   * `/income/verification/taxforms/get` returns the information collected from forms that were used
   * to verify an end user''s income. It can be called once the status of the verification has been
   * set to `VERIFICATION_STATUS_PROCESSING_COMPLETE`, as reported by the `INCOME:
   * verification_status` webhook. Attempting to call the endpoint before verification has been
   * completed will result in an error.
   *
   * This endpoint has been deprecated; new integrations should use `/credit/payroll_income/get`
   * instead.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.IncomeVerificationTaxformsGetError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  incomeVerificationTaxformsGet(
    request: ThePlaidApiClient.IncomeVerificationTaxformsGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<IncomeVerificationTaxformsGetResponse, ThePlaidApiClient.IncomeVerificationTaxformsGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/income/verification/taxforms/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: incomeVerificationTaxformsGetRequestSchema },
      },
      {
        success: { kind: "json", schema: incomeVerificationTaxformsGetResponseSchema },
        errorFactory: ThePlaidApiClient.IncomeVerificationTaxformsGetError,
      },
      options,
    );
  }

  /**
   * Get details of all supported institutions
   *
   * @remarks
   * Returns a JSON response containing details on all financial institutions currently supported by
   * Plaid. Because Plaid supports thousands of institutions, results are paginated.
   *
   * If there is no overlap between an institution's enabled products and a client's enabled
   * products, then the institution will be filtered out from the response. As a result, the number
   * of institutions returned may not match the count specified in the call.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.InstitutionsGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  institutionsGet(
    request: ThePlaidApiClient.InstitutionsGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<InstitutionsGetResponse, ThePlaidApiClient.InstitutionsGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/institutions/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: institutionsGetRequestSchema },
      },
      {
        success: { kind: "json", schema: institutionsGetResponseSchema },
        errorFactory: ThePlaidApiClient.InstitutionsGetError,
      },
      options,
    );
  }

  /**
   * Get details of an institution
   *
   * @remarks
   * Returns a JSON response containing details on a specified financial institution currently
   * supported by Plaid.
   *
   * Versioning note: API versions 2019-05-29 and earlier allow use of the `public_key` parameter
   * instead of the `client_id` and `secret` to authenticate to this endpoint. The `public_key` has
   * been deprecated; all customers are encouraged to use `client_id` and `secret` instead.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.InstitutionsGetByIdError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  institutionsGetById(
    request: ThePlaidApiClient.InstitutionsGetByIdRequestParams,
    options?: RequestOptions,
  ): ApiPromise<InstitutionsGetByIdResponse, ThePlaidApiClient.InstitutionsGetByIdError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/institutions/get_by_id"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: institutionsGetByIdRequestSchema },
      },
      {
        success: { kind: "json", schema: institutionsGetByIdResponseSchema },
        errorFactory: ThePlaidApiClient.InstitutionsGetByIdError,
      },
      options,
    );
  }

  /**
   * Search institutions
   *
   * @remarks
   * Returns a JSON response containing details for institutions that match the query parameters, up
   * to a maximum of ten institutions per query.
   *
   * Versioning note: API versions 2019-05-29 and earlier allow use of the `public_key` parameter
   * instead of the `client_id` and `secret` parameters to authenticate to this endpoint. The
   * `public_key` parameter has since been deprecated; all customers are encouraged to use
   * `client_id` and `secret` instead.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.InstitutionsSearchError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  institutionsSearch(
    request: ThePlaidApiClient.InstitutionsSearchRequestParams,
    options?: RequestOptions,
  ): ApiPromise<InstitutionsSearchResponse, ThePlaidApiClient.InstitutionsSearchError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/institutions/search"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: institutionsSearchRequestSchema },
      },
      {
        success: { kind: "json", schema: institutionsSearchResponseSchema },
        errorFactory: ThePlaidApiClient.InstitutionsSearchError,
      },
      options,
    );
  }

  /**
   * Get data needed to authorize an investments transfer
   *
   * @remarks
   * The `/investments/auth/get` endpoint allows developers to receive user-authorized data to
   * facilitate the transfer of holdings
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.InvestmentsAuthGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  investmentsAuthGet(
    request: ThePlaidApiClient.InvestmentsAuthGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<InvestmentsAuthGetResponse, ThePlaidApiClient.InvestmentsAuthGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/investments/auth/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: investmentsAuthGetRequestSchema },
      },
      {
        success: { kind: "json", schema: investmentsAuthGetResponseSchema },
        errorFactory: ThePlaidApiClient.InvestmentsAuthGetError,
      },
      options,
    );
  }

  /**
   * Get Investment holdings
   *
   * @remarks
   * The `/investments/holdings/get` endpoint allows developers to receive user-authorized stock
   * position data for `investment`-type accounts.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.InvestmentsHoldingsGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  investmentsHoldingsGet(
    request: ThePlaidApiClient.InvestmentsHoldingsGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<InvestmentsHoldingsGetResponse, ThePlaidApiClient.InvestmentsHoldingsGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/investments/holdings/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: investmentsHoldingsGetRequestSchema },
      },
      {
        success: { kind: "json", schema: investmentsHoldingsGetResponseSchema },
        errorFactory: ThePlaidApiClient.InvestmentsHoldingsGetError,
      },
      options,
    );
  }

  /**
   * Refresh investment data
   *
   * @remarks
   * `/investments/refresh` is an optional endpoint for users of the Investments product. It
   * initiates an on-demand extraction to fetch the newest investment holdings and transactions for
   * an Item. This on-demand extraction takes place in addition to the periodic extractions that
   * automatically occur one or more times per day for any Investments-enabled Item. If changes to
   * investments are discovered after calling `/investments/refresh`, Plaid will fire webhooks:
   * [`HOLDINGS:
   * DEFAULT_UPDATE`](https://plaid.com/docs/api/products/investments/#holdings-default_update) if
   * any new holdings are detected, and [`INVESTMENTS_TRANSACTIONS:
   * DEFAULT_UPDATE`](https://plaid.com/docs/api/products/investments/#investments_transactions-default_update)
   * if any new investment transactions are detected. This webhook will typically not fire in the
   * Sandbox environment, due to the lack of dynamic investment transactions and holdings data. To
   * test this webhook in Sandbox, call `/sandbox/item/fire_webhook`. Updated holdings and
   * investment transactions can be fetched by calling `/investments/holdings/get` and
   * `/investments/transactions/get`. Note that the `/investments/refresh` endpoint is not supported
   * by all institutions. If called on an Item from an institution that does not support this
   * functionality, it will return a `PRODUCT_NOT_SUPPORTED` error.
   *
   * As this endpoint triggers a synchronous request for fresh data, latency may be higher than for
   * other Plaid endpoints (typically less than 10 seconds, but occasionally up to 30 seconds or
   * more); if you encounter errors, you may find it necessary to adjust your timeout period when
   * making requests.
   *
   * `/investments/refresh` is offered as an add-on to Investments and has a separate [fee
   * model](https://plaid.com/docs/account/billing/#per-request-flat-fee). To request access to this
   * endpoint, submit a [product access request](https://dashboard.plaid.com/team/products) or
   * contact your Plaid account manager.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.InvestmentsRefreshError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  investmentsRefresh(
    request: ThePlaidApiClient.InvestmentsRefreshRequestParams,
    options?: RequestOptions,
  ): ApiPromise<InvestmentsRefreshResponse, ThePlaidApiClient.InvestmentsRefreshError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/investments/refresh"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: investmentsRefreshRequestSchema },
      },
      {
        success: { kind: "json", schema: investmentsRefreshResponseSchema },
        errorFactory: ThePlaidApiClient.InvestmentsRefreshError,
      },
      options,
    );
  }

  /**
   * Get investment transactions
   *
   * @remarks
   * The `/investments/transactions/get` endpoint allows developers to retrieve up to 24 months of
   * user-authorized transaction data for investment accounts.
   *
   * Transactions are returned in reverse-chronological order, and the sequence of transaction
   * ordering is stable and will not shift.
   *
   * Due to the potentially large number of investment transactions associated with an Item, results
   * are paginated. Manipulate the count and offset parameters in conjunction with the
   * `total_investment_transactions` response body field to fetch all available investment
   * transactions.
   *
   * Note that Investments does not have a webhook to indicate when initial transaction data has
   * loaded (unless you use the `async_update` option). Instead, if transactions data is not ready
   * when `/investments/transactions/get` is first called, Plaid will wait for the data. For this
   * reason, calling `/investments/transactions/get` immediately after Link may take up to one to
   * two minutes to return.
   *
   * Data returned by the asynchronous investments extraction flow (when `async_update` is set to
   * true) may not be immediately available to `/investments/transactions/get`. To be alerted when
   * the data is ready to be fetched, listen for the `HISTORICAL_UPDATE` webhook. If no investments
   * history is ready when `/investments/transactions/get` is called, it will return a
   * `PRODUCT_NOT_READY` error.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.InvestmentsTransactionsGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  investmentsTransactionsGet(
    request: ThePlaidApiClient.InvestmentsTransactionsGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<InvestmentsTransactionsGetResponse, ThePlaidApiClient.InvestmentsTransactionsGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/investments/transactions/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: investmentsTransactionsGetRequestSchema },
      },
      {
        success: { kind: "json", schema: investmentsTransactionsGetResponseSchema },
        errorFactory: ThePlaidApiClient.InvestmentsTransactionsGetError,
      },
      options,
    );
  }

  /**
   * Get an Issue
   *
   * @remarks
   * Retrieve detailed information about a specific `Issue`. This endpoint returns a single `Issue`
   * object.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.IssuesGetError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  issuesGet(
    request: ThePlaidApiClient.IssuesGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<IssuesGetResponse, ThePlaidApiClient.IssuesGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/issues/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: issuesGetRequestSchema },
      },
      {
        success: { kind: "json", schema: issuesGetResponseSchema },
        errorFactory: ThePlaidApiClient.IssuesGetError,
      },
      options,
    );
  }

  /**
   * Search for an Issue
   *
   * @remarks
   * Search for an issue associated with one of the following identifiers: `item_id`,
   * `link_session_id` or Link session `request_id`. This endpoint returns a list of `Issue`
   * objects, with an empty list indicating that no issues are associated with the provided
   * identifier. At least one of the identifiers must be provided to perform the search.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.IssuesSearchError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  issuesSearch(
    request: ThePlaidApiClient.IssuesSearchRequestParams,
    options?: RequestOptions,
  ): ApiPromise<IssuesSearchResponse, ThePlaidApiClient.IssuesSearchError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/issues/search"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: issuesSearchRequestSchema },
      },
      {
        success: { kind: "json", schema: issuesSearchResponseSchema },
        errorFactory: ThePlaidApiClient.IssuesSearchError,
      },
      options,
    );
  }

  /**
   * Subscribe to an Issue
   *
   * @remarks
   * Allows a user to subscribe to updates on a specific `Issue` using a POST method. Subscribers
   * will receive webhook notifications when the issue status changes, particularly when resolved.
   *
   * @returns Subscription was successful
   *
   * @throws {@link ThePlaidApiClient.IssuesSubscribeError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  issuesSubscribe(
    request: ThePlaidApiClient.IssuesSubscribeRequestParams,
    options?: RequestOptions,
  ): ApiPromise<IssuesSubscribeResponse, ThePlaidApiClient.IssuesSubscribeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/issues/subscribe"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: issuesSubscribeRequestSchema },
      },
      {
        success: { kind: "json", schema: issuesSubscribeResponseSchema },
        errorFactory: ThePlaidApiClient.IssuesSubscribeError,
      },
      options,
    );
  }

  /**
   * Invalidate access_token
   *
   * @remarks
   * By default, the `access_token` associated with an Item does not expire and should be stored in
   * a persistent, secure manner.
   *
   * You can use the `/item/access_token/invalidate` endpoint to rotate the `access_token`
   * associated with an Item. The endpoint returns a new `access_token` and immediately invalidates
   * the previous `access_token`.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.ItemAccessTokenInvalidateError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  itemAccessTokenInvalidate(
    request: ThePlaidApiClient.ItemAccessTokenInvalidateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ItemAccessTokenInvalidateResponse, ThePlaidApiClient.ItemAccessTokenInvalidateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/item/access_token/invalidate"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: itemAccessTokenInvalidateRequestSchema },
      },
      {
        success: { kind: "json", schema: itemAccessTokenInvalidateResponseSchema },
        errorFactory: ThePlaidApiClient.ItemAccessTokenInvalidateError,
      },
      options,
    );
  }

  /**
   * List a historical log of user consent events
   *
   * @remarks
   * List a historical log of user consent events
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.ItemActivityListError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  itemActivityList(
    request: ThePlaidApiClient.ItemActivityListRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ItemActivityListResponse, ThePlaidApiClient.ItemActivityListError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/item/activity/list"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: itemActivityListRequestSchema },
      },
      {
        success: { kind: "json", schema: itemActivityListResponseSchema },
        errorFactory: ThePlaidApiClient.ItemActivityListError,
      },
      options,
    );
  }

  /**
   * List a user's connected applications
   *
   * @remarks
   * List a user's connected applications
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.ItemApplicationListError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  itemApplicationList(
    request: ThePlaidApiClient.ItemApplicationListRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ItemApplicationListResponse, ThePlaidApiClient.ItemApplicationListError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/item/application/list"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: itemApplicationListRequestSchema },
      },
      {
        success: { kind: "json", schema: itemApplicationListResponseSchema },
        errorFactory: ThePlaidApiClient.ItemApplicationListError,
      },
      options,
    );
  }

  /**
   * Update the scopes of access for a particular application
   *
   * @remarks
   * Enable consumers to update product access on selected accounts for an application.
   *
   * @returns success
   *
   * @throws {@link ThePlaidApiClient.ItemApplicationScopesUpdateError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  itemApplicationScopesUpdate(
    request: ThePlaidApiClient.ItemApplicationScopesUpdateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ItemApplicationScopesUpdateResponse, ThePlaidApiClient.ItemApplicationScopesUpdateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/item/application/scopes/update"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: itemApplicationScopesUpdateRequestSchema },
      },
      {
        success: { kind: "json", schema: itemApplicationScopesUpdateResponseSchema },
        errorFactory: ThePlaidApiClient.ItemApplicationScopesUpdateError,
      },
      options,
    );
  }

  /**
   * Unlink a user's connected application
   *
   * @remarks
   * Unlink a user's connected application. On an unlink request, Plaid will immediately revoke the
   * Application's access to the User's data. The User will have to redo the OAuth authentication
   * process in order to restore functionality.
   *
   * This endpoint only removes ongoing data access permissions, therefore the User will need to
   * reach out to the Application itself in order to disable and delete their account and delete any
   * data that the Application already received (if the Application does not do so by default).
   *
   * This endpoint should be called in real time as the User is unlinking an Application, and should
   * not be batched in order to ensure that the change is reflected as soon as possible.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.ItemApplicationUnlinkError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  itemApplicationUnlink(
    request: ThePlaidApiClient.ItemApplicationUnlinkRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ItemApplicationUnlinkResponse, ThePlaidApiClient.ItemApplicationUnlinkError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/item/application/unlink"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: itemApplicationUnlinkRequestSchema },
      },
      {
        success: { kind: "json", schema: itemApplicationUnlinkResponseSchema },
        errorFactory: ThePlaidApiClient.ItemApplicationUnlinkError,
      },
      options,
    );
  }

  /**
   * (Deprecated) Create public token
   *
   * @remarks
   * Note: As of July 2020, the `/item/public_token/create` endpoint is deprecated. Instead, use
   * `/link/token/create` with an `access_token` to create a Link token for use with [update
   * mode](https://plaid.com/docs/link/update-mode).
   *
   * If you need your user to take action to restore or resolve an error associated with an Item,
   * generate a public token with the `/item/public_token/create` endpoint and then initialize Link
   * with that `public_token`.
   *
   * A `public_token` is one-time use and expires after 30 minutes. You use a `public_token` to
   * initialize Link in [update mode](https://plaid.com/docs/link/update-mode) for a particular
   * Item. You can generate a `public_token` for an Item even if you did not use Link to create the
   * Item originally.
   *
   * The `/item/public_token/create` endpoint is **not** used to create your initial `public_token`.
   * If you have not already received an `access_token` for a specific Item, use Link to obtain your
   * `public_token` instead. See the [Quickstart](https://plaid.com/docs/quickstart) for more
   * information.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.ItemCreatePublicTokenError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  itemCreatePublicToken(
    request: ThePlaidApiClient.ItemCreatePublicTokenRequest,
    options?: RequestOptions,
  ): ApiPromise<ItemPublicTokenCreateResponse, ThePlaidApiClient.ItemCreatePublicTokenError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/item/public_token/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: itemPublicTokenCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: itemPublicTokenCreateResponseSchema },
        errorFactory: ThePlaidApiClient.ItemCreatePublicTokenError,
      },
      options,
    );
  }

  /**
   * Retrieve an Item
   *
   * @remarks
   * Returns information about the status of an Item.
   *
   * @returns success
   *
   * @throws {@link ThePlaidApiClient.ItemGetError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  itemGet(
    request: ThePlaidApiClient.ItemGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ItemGetResponse, ThePlaidApiClient.ItemGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/item/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: itemGetRequestSchema },
      },
      {
        success: { kind: "json", schema: itemGetResponseSchema },
        errorFactory: ThePlaidApiClient.ItemGetError,
      },
      options,
    );
  }

  /**
   * Import Item
   *
   * @remarks
   * `/item/import` creates an Item via your Plaid Exchange Integration and returns an
   * `access_token`. As part of an `/item/import` request, you will include a User ID
   * (`user_auth.user_id`) and Authentication Token (`user_auth.auth_token`) that enable data
   * aggregation through your Plaid Exchange API endpoints. These authentication principals are to
   * be chosen by you.
   *
   * Upon creating an Item via `/item/import`, Plaid will automatically begin an extraction of that
   * Item through the Plaid Exchange infrastructure you have already integrated.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.ItemImportError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  itemImport(
    request: ThePlaidApiClient.ItemImportRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ItemImportResponse, ThePlaidApiClient.ItemImportError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/item/import"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: itemImportRequestSchema },
      },
      {
        success: { kind: "json", schema: itemImportResponseSchema },
        errorFactory: ThePlaidApiClient.ItemImportError,
      },
      options,
    );
  }

  /**
   * Terminate products for an Item
   *
   * @remarks
   * The `/item/products/terminate` endpoint allows you to terminate an Item. Once terminated, the
   * `access_token` associated with the Item is no longer valid, billing for the Item's products is
   * ended, and relevant webhooks are fired.
   *
   * `/item/products/terminate` is the recommended way to offboard users or disconnect accounts
   * linked via Plaid.
   *
   * @returns success
   *
   * @throws {@link ThePlaidApiClient.ItemProductsTerminateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  itemProductsTerminate(
    request: ThePlaidApiClient.ItemProductsTerminateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ItemProductsTerminateResponse, ThePlaidApiClient.ItemProductsTerminateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/item/products/terminate"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: itemProductsTerminateRequestSchema },
      },
      {
        success: { kind: "json", schema: itemProductsTerminateResponseSchema },
        errorFactory: ThePlaidApiClient.ItemProductsTerminateError,
      },
      options,
    );
  }

  /**
   * Exchange public token for an access token
   *
   * @remarks
   * Exchange a Link `public_token` for an API `access_token`. Link hands off the `public_token`
   * client-side via the `onSuccess` callback once a user has successfully created an Item. The
   * `public_token` is ephemeral and expires after 30 minutes. An `access_token` does not expire,
   * but can be revoked by calling `/item/remove`.
   *
   * The response also includes an `item_id` that should be stored with the `access_token`. The
   * `item_id` is used to identify an Item in a webhook. The `item_id` can also be retrieved by
   * making an `/item/get` request.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.ItemPublicTokenExchangeError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  itemPublicTokenExchange(
    request: ThePlaidApiClient.ItemPublicTokenExchangeRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ItemPublicTokenExchangeResponse, ThePlaidApiClient.ItemPublicTokenExchangeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/item/public_token/exchange"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: itemPublicTokenExchangeRequestSchema },
      },
      {
        success: { kind: "json", schema: itemPublicTokenExchangeResponseSchema },
        errorFactory: ThePlaidApiClient.ItemPublicTokenExchangeError,
      },
      options,
    );
  }

  /**
   * Remove an Item
   *
   * @remarks
   * The `/item/remove` endpoint allows you to remove an Item. Once removed, the `access_token`, as
   * well as any processor tokens or bank account tokens associated with the Item, is no longer
   * valid and cannot be used to access any data that was associated with the Item.
   *
   * Calling `/item/remove` is a recommended best practice when offboarding users or if a user
   * chooses to disconnect an account linked via Plaid. For subscription products, such as
   * Transactions, Liabilities, and Investments, calling `/item/remove` is required to end
   * subscription billing for the Item, unless the end user revoked permission (e.g. via
   * [https://my.plaid.com/](https://my.plaid.com/)). For more details, see [Subscription fee
   * model](https://plaid.com/docs/account/billing/#subscription-fee).
   *
   * On a Trial plan, calling `/item/remove` does not impact the number of remaining Trial Items
   * (bank connections) you have available.
   *
   * Removing an Item does not affect any Asset Reports or Audit Copies you have already created,
   * which will remain accessible until you remove access to them specifically using the
   * `/asset_report/remove` endpoint.
   *
   * Also note that for certain OAuth-based institutions, an Item removed via `/item/remove` may
   * still show as an active connection in the institution's OAuth permission manager.
   *
   * API versions 2019-05-29 and earlier return a `removed` boolean as part of the response.
   *
   * @returns success
   *
   * @throws {@link ThePlaidApiClient.ItemRemoveError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  itemRemove(
    request: ThePlaidApiClient.ItemRemoveRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ItemRemoveResponse, ThePlaidApiClient.ItemRemoveError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/item/remove"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: itemRemoveRequestSchema },
      },
      {
        success: { kind: "json", schema: itemRemoveResponseSchema },
        errorFactory: ThePlaidApiClient.ItemRemoveError,
      },
      options,
    );
  }

  /**
   * Update Webhook URL
   *
   * @remarks
   * The POST `/item/webhook/update` allows you to update the webhook URL associated with an Item.
   * This request triggers a
   * [`WEBHOOK_UPDATE_ACKNOWLEDGED`](https://plaid.com/docs/api/items/#webhook_update_acknowledged)
   * webhook to the newly specified webhook URL.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.ItemWebhookUpdateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  itemWebhookUpdate(
    request: ThePlaidApiClient.ItemWebhookUpdateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ItemWebhookUpdateResponse, ThePlaidApiClient.ItemWebhookUpdateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/item/webhook/update"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: itemWebhookUpdateRequestSchema },
      },
      {
        success: { kind: "json", schema: itemWebhookUpdateResponseSchema },
        errorFactory: ThePlaidApiClient.ItemWebhookUpdateError,
      },
      options,
    );
  }

  /**
   * Retrieve Liabilities data
   *
   * @remarks
   * The `/liabilities/get` endpoint returns various details about an Item with loan or credit
   * accounts. Liabilities data is available primarily for US financial institutions, with some
   * limited coverage of Canadian institutions. Currently supported account types are account type
   * `credit` with account subtype `credit card` or `paypal`, and account type `loan` with account
   * subtype `student` or `mortgage`. To limit accounts listed in Link to types and subtypes
   * supported by Liabilities, you can use the `account_filters` parameter when [creating a Link
   * token](https://plaid.com/docs/api/link/#linktokencreate).
   *
   * The types of information returned by Liabilities can include balances and due dates, loan
   * terms, and account details such as original loan amount and guarantor. Data is refreshed
   * approximately once per day; the latest data can be retrieved by calling `/liabilities/get`.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.LiabilitiesGetError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  liabilitiesGet(
    request: ThePlaidApiClient.LiabilitiesGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<LiabilitiesGetResponse, ThePlaidApiClient.LiabilitiesGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/liabilities/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: liabilitiesGetRequestSchema },
      },
      {
        success: { kind: "json", schema: liabilitiesGetResponseSchema },
        errorFactory: ThePlaidApiClient.LiabilitiesGetError,
      },
      options,
    );
  }

  /**
   * Create Hosted Link session
   *
   * @remarks
   * Use the `/link_delivery/create` endpoint to create a Hosted Link session.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.LinkDeliveryCreateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  linkDeliveryCreate(
    request: ThePlaidApiClient.LinkDeliveryCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<LinkDeliveryCreateResponse, ThePlaidApiClient.LinkDeliveryCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/link_delivery/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: linkDeliveryCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: linkDeliveryCreateResponseSchema },
        errorFactory: ThePlaidApiClient.LinkDeliveryCreateError,
      },
      options,
    );
  }

  /**
   * Get Hosted Link session
   *
   * @remarks
   * Use the `/link_delivery/get` endpoint to get the status of a Hosted Link session.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.LinkDeliveryGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  linkDeliveryGet(
    request: ThePlaidApiClient.LinkDeliveryGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<LinkDeliveryGetResponse, ThePlaidApiClient.LinkDeliveryGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/link_delivery/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: linkDeliveryGetRequestSchema },
      },
      {
        success: { kind: "json", schema: linkDeliveryGetResponseSchema },
        errorFactory: ThePlaidApiClient.LinkDeliveryGetError,
      },
      options,
    );
  }

  /**
   * Exchange the Link Correlation ID for a Link Token
   *
   * @remarks
   * Exchange an OAuth `link_correlation_id` for the corresponding `link_token`. The
   * `link_correlation_id` is only available for `payment_initiation` products and is provided to
   * the client via the OAuth `redirect_uri` as a query parameter. The `link_correlation_id` is
   * ephemeral and expires in a brief period, after which it can no longer be exchanged for the
   * `link_token`.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.LinkOauthCorrelationIdExchangeError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/link/oauth/correlation_id/exchange"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: linkOAuthCorrelationIdExchangeRequestSchema },
      },
      {
        success: { kind: "json", schema: linkOAuthCorrelationIdExchangeResponseSchema },
        errorFactory: ThePlaidApiClient.LinkOauthCorrelationIdExchangeError,
      },
      options,
    );
  }

  /**
   * Create Link Token
   *
   * @remarks
   * The `/link/token/create` endpoint creates a `link_token`, which is required as a parameter when
   * initializing Link. Once Link has been initialized, it returns a `public_token`. For most Plaid
   * products, the `public_token` is saved and exchanged for an `access_token` via
   * `/item/public_token/exchange` as part of the main Link flow. For more details, see the [Link
   * flow overview](https://plaid.com/docs/link/#link-flow-overview).
   *
   * A `link_token` generated by `/link/token/create` is also used to initialize other Link flows,
   * such as the [update mode](https://plaid.com/docs/link/update-mode) flow for tokens with expired
   * credentials, or the Identity Verification flow.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.LinkTokenCreateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  linkTokenCreate(
    request: ThePlaidApiClient.LinkTokenCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<LinkTokenCreateResponse, ThePlaidApiClient.LinkTokenCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/link/token/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: linkTokenCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: linkTokenCreateResponseSchema },
        errorFactory: ThePlaidApiClient.LinkTokenCreateError,
      },
      options,
    );
  }

  /**
   * Get Link Token
   *
   * @remarks
   * The `/link/token/get` endpoint gets information about a Link session, including all callbacks
   * fired during the session along with their metadata, including the public token. This endpoint
   * is used with Link flows that don't provide a public token via frontend callbacks, such as the
   * [Hosted Link flow](https://plaid.com/docs/link/hosted-link/) and the [Multi-Item Link
   * flow](https://plaid.com/docs/link/multi-item-link/). It also can be useful for debugging
   * purposes.
   *
   * By default, this endpoint will only return complete event data for Hosted Link sessions. To use
   * `/link/token/get` to retrieve event data for non-Hosted-Link sessions, contact your account
   * manager to request that your account be enabled for Link events. If you do not have an account
   * manager, you can submit this request via a support ticket. Enablement for Link events will also
   * cause you to receive additional webhooks related to Link events, such as the `SESSION_FINISHED`
   * and `EVENTS` webhook.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.LinkTokenGetError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  linkTokenGet(
    request: ThePlaidApiClient.LinkTokenGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<LinkTokenGetResponse, ThePlaidApiClient.LinkTokenGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/link/token/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: linkTokenGetRequestSchema },
      },
      {
        success: { kind: "json", schema: linkTokenGetResponseSchema },
        errorFactory: ThePlaidApiClient.LinkTokenGetError,
      },
      options,
    );
  }

  /**
   * Check a user's Plaid Network status
   *
   * @remarks
   * The `/network/status/get` endpoint can be used to check whether Plaid has a matching profile
   * for the user. This is useful for determining if a user is eligible for a streamlined
   * experience, such as Layer. To access this endpoint, contact your Plaid account manager.
   *
   * Note: it is strongly recommended to check for Layer eligibility in the frontend.
   * `/network/status/get` should only be used for checking Layer eligibility if a frontend check is
   * not possible for your use case. For instructions on performing a frontend eligibility check,
   * see the [Layer documentation](https://plaid.com/docs/layer/#integration-overview).
   *
   * @returns success
   *
   * @throws {@link ThePlaidApiClient.NetworkStatusGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  networkStatusGet(
    request: ThePlaidApiClient.NetworkStatusGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<NetworkStatusGetResponse, ThePlaidApiClient.NetworkStatusGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/network/status/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: networkStatusGetRequestSchema },
      },
      {
        success: { kind: "json", schema: networkStatusGetResponseSchema },
        errorFactory: ThePlaidApiClient.NetworkStatusGetError,
      },
      options,
    );
  }

  /**
   * Get metadata about an OAuth token
   *
   * @remarks
   * `/oauth/introspect` returns metadata about an access token or refresh token.
   *
   * Note: This endpoint supports `Content-Type: application/x-www-form-urlencoded` as well as JSON.
   * The fields for the form are equivalent to the fields for JSON and conform to the OAuth 2.0
   * specification.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.OauthIntrospectError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  oauthIntrospect(
    request: ThePlaidApiClient.OauthIntrospectRequest,
    options?: RequestOptions,
  ): ApiPromise<OAuthIntrospectResponse, ThePlaidApiClient.OauthIntrospectError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/oauth/introspect"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: oAuthIntrospectRequestSchema },
      },
      {
        success: { kind: "json", schema: oAuthIntrospectResponseSchema },
        errorFactory: ThePlaidApiClient.OauthIntrospectError,
      },
      options,
    );
  }

  /**
   * Revoke an OAuth token
   *
   * @remarks
   * `/oauth/revoke` revokes an access or refresh token, preventing any further use. If a refresh
   * token is revoked, all access and refresh tokens derived from it are also revoked, including
   * exchanged tokens.
   *
   * Note: This endpoint supports `Content-Type: application/x-www-form-urlencoded` as well as JSON.
   * The fields for the form are equivalent to the fields for JSON and conform to the OAuth 2.0
   * specification.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.OauthRevokeError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  oauthRevoke(
    request: ThePlaidApiClient.OauthRevokeRequest,
    options?: RequestOptions,
  ): ApiPromise<OAuthRevokeResponse, ThePlaidApiClient.OauthRevokeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/oauth/revoke"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: oAuthRevokeRequestSchema },
      },
      {
        success: { kind: "json", schema: oAuthRevokeResponseSchema },
        errorFactory: ThePlaidApiClient.OauthRevokeError,
      },
      options,
    );
  }

  /**
   * Create or refresh an OAuth access token
   *
   * @remarks
   * `/oauth/token` issues an access token and refresh token depending on the `grant_type` provided.
   * This endpoint supports `Content-Type: application/x-www-form-urlencoded` as well as JSON. The
   * fields for the form are equivalent to the fields for JSON and conform to the OAuth 2.0
   * specification.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.OauthTokenError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  oauthToken(
    request: ThePlaidApiClient.OauthTokenRequest,
    options?: RequestOptions,
  ): ApiPromise<OAuthTokenResponse, ThePlaidApiClient.OauthTokenError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/oauth/token"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: oAuthTokenRequestSchema },
      },
      {
        success: { kind: "json", schema: oAuthTokenResponseSchema },
        errorFactory: ThePlaidApiClient.OauthTokenError,
      },
      options,
    );
  }

  /**
   * Creates a new end customer for a Plaid reseller.
   *
   * @remarks
   * The `/partner/customer/create` endpoint is used by reseller partners to create end customers.
   * To create end customers, it should be called in the Production environment only, even when
   * creating Sandbox API keys. If called in the Sandbox environment, it will return a sample
   * response, but no customer will be created and the API keys will not be valid.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.PartnerCustomerCreateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  partnerCustomerCreate(
    request: ThePlaidApiClient.PartnerCustomerCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<PartnerCustomerCreateResponse, ThePlaidApiClient.PartnerCustomerCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/partner/customer/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: partnerCustomerCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: partnerCustomerCreateResponseSchema },
        errorFactory: ThePlaidApiClient.PartnerCustomerCreateError,
      },
      options,
    );
  }

  /**
   * Enables a Plaid reseller's end customer in the Production environment.
   *
   * @remarks
   * The `/partner/customer/enable` endpoint is used by reseller partners to enable an end customer
   * in the full Production environment.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.PartnerCustomerEnableError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  partnerCustomerEnable(
    request: ThePlaidApiClient.PartnerCustomerEnableRequestParams,
    options?: RequestOptions,
  ): ApiPromise<PartnerCustomerEnableResponse, ThePlaidApiClient.PartnerCustomerEnableError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/partner/customer/enable"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: partnerCustomerEnableRequestSchema },
      },
      {
        success: { kind: "json", schema: partnerCustomerEnableResponseSchema },
        errorFactory: ThePlaidApiClient.PartnerCustomerEnableError,
      },
      options,
    );
  }

  /**
   * Returns a Plaid reseller's end customer.
   *
   * @remarks
   * The `/partner/customer/get` endpoint is used by reseller partners to retrieve data about a
   * single end customer.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.PartnerCustomerGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  partnerCustomerGet(
    request: ThePlaidApiClient.PartnerCustomerGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<PartnerCustomerGetResponse, ThePlaidApiClient.PartnerCustomerGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/partner/customer/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: partnerCustomerGetRequestSchema },
      },
      {
        success: { kind: "json", schema: partnerCustomerGetResponseSchema },
        errorFactory: ThePlaidApiClient.PartnerCustomerGetError,
      },
      options,
    );
  }

  /**
   * Returns OAuth-institution registration information for a given end customer.
   *
   * @remarks
   * The `/partner/customer/oauth_institutions/get` endpoint is used by reseller partners to
   * retrieve OAuth-institution registration information about a single end customer. To learn how
   * to set up a webhook to listen to status update events, visit the [reseller
   * documentation](https://plaid.com/docs/account/resellers/#enabling-end-customers).
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.PartnerCustomerOauthInstitutionsGetError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/partner/customer/oauth_institutions/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: partnerCustomerOAuthInstitutionsGetRequestSchema },
      },
      {
        success: { kind: "json", schema: partnerCustomerOAuthInstitutionsGetResponseSchema },
        errorFactory: ThePlaidApiClient.PartnerCustomerOauthInstitutionsGetError,
      },
      options,
    );
  }

  /**
   * Removes a Plaid reseller's end customer.
   *
   * @remarks
   * The `/partner/customer/remove` endpoint is used by reseller partners to remove an end customer.
   * Removing an end customer will remove it from view in the Plaid Dashboard and deactivate its API
   * keys. This endpoint can only be used to remove an end customer that has not yet been enabled in
   * full Production.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.PartnerCustomerRemoveError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  partnerCustomerRemove(
    request: ThePlaidApiClient.PartnerCustomerRemoveRequestParams,
    options?: RequestOptions,
  ): ApiPromise<PartnerCustomerRemoveResponse, ThePlaidApiClient.PartnerCustomerRemoveError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/partner/customer/remove"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: partnerCustomerRemoveRequestSchema },
      },
      {
        success: { kind: "json", schema: partnerCustomerRemoveResponseSchema },
        errorFactory: ThePlaidApiClient.PartnerCustomerRemoveError,
      },
      options,
    );
  }

  /**
   * Create payment consent
   *
   * @remarks
   * The `/payment_initiation/consent/create` endpoint is used to create a payment consent, which
   * can be used to initiate payments on behalf of the user. Payment consents are created with
   * `UNAUTHORISED` status by default and must be authorised by the user before payments can be
   * initiated.
   *
   * Consents can be limited in time and scope, and have constraints that describe limitations for
   * payments.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.PaymentInitiationConsentCreateError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/payment_initiation/consent/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: paymentInitiationConsentCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: paymentInitiationConsentCreateResponseSchema },
        errorFactory: ThePlaidApiClient.PaymentInitiationConsentCreateError,
      },
      options,
    );
  }

  /**
   * Get payment consent
   *
   * @remarks
   * The `/payment_initiation/consent/get` endpoint can be used to check the status of a payment
   * consent, as well as to receive basic information such as recipient and constraints.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.PaymentInitiationConsentGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  paymentInitiationConsentGet(
    request: ThePlaidApiClient.PaymentInitiationConsentGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<PaymentInitiationConsentGetResponse, ThePlaidApiClient.PaymentInitiationConsentGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/payment_initiation/consent/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: paymentInitiationConsentGetRequestSchema },
      },
      {
        success: { kind: "json", schema: paymentInitiationConsentGetResponseSchema },
        errorFactory: ThePlaidApiClient.PaymentInitiationConsentGetError,
      },
      options,
    );
  }

  /**
   * Execute a single payment using consent
   *
   * @remarks
   * The `/payment_initiation/consent/payment/execute` endpoint can be used to execute payments
   * using payment consent.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.PaymentInitiationConsentPaymentExecuteError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/payment_initiation/consent/payment/execute"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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

  /**
   * Revoke payment consent
   *
   * @remarks
   * The `/payment_initiation/consent/revoke` endpoint can be used to revoke the payment consent.
   * Once the consent is revoked, it is not possible to initiate payments using it.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.PaymentInitiationConsentRevokeError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/payment_initiation/consent/revoke"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: paymentInitiationConsentRevokeRequestSchema },
      },
      {
        success: { kind: "json", schema: paymentInitiationConsentRevokeResponseSchema },
        errorFactory: ThePlaidApiClient.PaymentInitiationConsentRevokeError,
      },
      options,
    );
  }

  /**
   * Create a payment
   *
   * @remarks
   * After creating a payment recipient, you can use the `/payment_initiation/payment/create`
   * endpoint to create a payment to that recipient. Payments can be one-time or standing order
   * (recurring) and can be denominated in EUR, GBP, or another chosen
   * [currency](https://plaid.com/docs/api/products/payment-initiation/#payment_initiation-payment-create-request-amount-currency).
   * If making domestic GBP-denominated payments, your recipient must have been created with Bacs
   * numbers. In general, EUR-denominated payments will be sent via SEPA Credit Transfer,
   * GBP-denominated payments will be sent via the Faster Payments network and for non-Eurozone
   * markets typically via the local payment scheme, but the payment network used will be determined
   * by the institution. Payments sent via Faster Payments will typically arrive immediately, while
   * payments sent via SEPA Credit Transfer or other local payment schemes will typically arrive in
   * one business day.
   *
   * Standing orders (recurring payments) must be denominated in GBP and can only be sent to
   * recipients in the UK. Once created, standing order payments cannot be modified or canceled via
   * the API. An end user can cancel or modify a standing order directly on their banking
   * application or website, or by contacting the bank. Standing orders will follow the payment
   * rules of the underlying rails (Faster Payments in UK). Payments can be sent Monday to Friday,
   * excluding bank holidays. If the pre-arranged date falls on a weekend or bank holiday, the
   * payment is made on the next working day. It is not possible to guarantee the exact time the
   * payment will reach the recipient's account, although at least 90% of standing order payments
   * are sent by 6am.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.PaymentInitiationPaymentCreateError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/payment_initiation/payment/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: paymentInitiationPaymentCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: paymentInitiationPaymentCreateResponseSchema },
        errorFactory: ThePlaidApiClient.PaymentInitiationPaymentCreateError,
      },
      options,
    );
  }

  /**
   * Get payment details
   *
   * @remarks
   * The `/payment_initiation/payment/get` endpoint can be used to check the status of a payment, as
   * well as to receive basic information such as recipient and payment amount. In the case of
   * standing orders, the `/payment_initiation/payment/get` endpoint will provide information about
   * the status of the overall standing order itself; the API cannot be used to retrieve payment
   * status for individual payments within a standing order.
   *
   * Polling for status updates in Production is highly discouraged. Repeatedly calling
   * `/payment_initiation/payment/get` to check a payment's status is unreliable and may trigger API
   * rate limits. Only the `payment_status_update` webhook should be used to receive real-time
   * status updates in Production.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.PaymentInitiationPaymentGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  paymentInitiationPaymentGet(
    request: ThePlaidApiClient.PaymentInitiationPaymentGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<PaymentInitiationPaymentGetResponse, ThePlaidApiClient.PaymentInitiationPaymentGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/payment_initiation/payment/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: paymentInitiationPaymentGetRequestSchema },
      },
      {
        success: { kind: "json", schema: paymentInitiationPaymentGetResponseSchema },
        errorFactory: ThePlaidApiClient.PaymentInitiationPaymentGetError,
      },
      options,
    );
  }

  /**
   * List payments
   *
   * @remarks
   * The `/payment_initiation/payment/list` endpoint can be used to retrieve all created payments.
   * By default, the 10 most recent payments are returned. You can request more payments and
   * paginate through the results using the optional `count` and `cursor` parameters.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.PaymentInitiationPaymentListError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  paymentInitiationPaymentList(
    request: ThePlaidApiClient.PaymentInitiationPaymentListRequestParams,
    options?: RequestOptions,
  ): ApiPromise<PaymentInitiationPaymentListResponse, ThePlaidApiClient.PaymentInitiationPaymentListError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/payment_initiation/payment/list"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: paymentInitiationPaymentListRequestSchema },
      },
      {
        success: { kind: "json", schema: paymentInitiationPaymentListResponseSchema },
        errorFactory: ThePlaidApiClient.PaymentInitiationPaymentListError,
      },
      options,
    );
  }

  /**
   * Reverse an existing payment
   *
   * @remarks
   * Reverse a settled payment from a Plaid virtual account.
   *
   * The original payment must be in a settled state to be refunded. To refund partially, specify
   * the amount as part of the request. If the amount is not specified, the refund amount will be
   * equal to all of the remaining payment amount that has not been refunded yet.
   *
   * The refund will go back to the source account that initiated the payment. The original payment
   * must have been initiated to a Plaid virtual account so that this account can be used to
   * initiate the refund.
   *
   * Providing counterparty information such as date of birth and address increases the likelihood
   * of refund being successful without human intervention.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.PaymentInitiationPaymentReverseError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/payment_initiation/payment/reverse"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: paymentInitiationPaymentReverseRequestSchema },
      },
      {
        success: { kind: "json", schema: paymentInitiationPaymentReverseResponseSchema },
        errorFactory: ThePlaidApiClient.PaymentInitiationPaymentReverseError,
      },
      options,
    );
  }

  /**
   * Create payment recipient
   *
   * @remarks
   * Create a payment recipient for payment initiation. The recipient must be in Europe, within a
   * country that is a member of the Single Euro Payments Area (SEPA) or a non-Eurozone country
   * [supported](https://support.plaid.com/hc/en-us/articles/27895826947735-What-Plaid-products-are-supported-in-each-country-and-region)
   * by Plaid. For a standing order (recurring) payment, the recipient must be in the UK.
   *
   * It is recommended to use `bacs` in the UK and `iban` in EU.
   *
   * The endpoint is idempotent: if a developer has already made a request with the same payment
   * details, Plaid will return the same `recipient_id`.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.PaymentInitiationRecipientCreateError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/payment_initiation/recipient/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: paymentInitiationRecipientCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: paymentInitiationRecipientCreateResponseSchema },
        errorFactory: ThePlaidApiClient.PaymentInitiationRecipientCreateError,
      },
      options,
    );
  }

  /**
   * Get payment recipient
   *
   * @remarks
   * Get details about a payment recipient you have previously created.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.PaymentInitiationRecipientGetError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  paymentInitiationRecipientGet(
    request: ThePlaidApiClient.PaymentInitiationRecipientGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<PaymentInitiationRecipientGetResponse, ThePlaidApiClient.PaymentInitiationRecipientGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/payment_initiation/recipient/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: paymentInitiationRecipientGetRequestSchema },
      },
      {
        success: { kind: "json", schema: paymentInitiationRecipientGetResponseSchema },
        errorFactory: ThePlaidApiClient.PaymentInitiationRecipientGetError,
      },
      options,
    );
  }

  /**
   * List payment recipients
   *
   * @remarks
   * The `/payment_initiation/recipient/list` endpoint lists the payment recipients that you have
   * previously created.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.PaymentInitiationRecipientListError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/payment_initiation/recipient/list"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: paymentInitiationRecipientListRequestSchema },
      },
      {
        success: { kind: "json", schema: paymentInitiationRecipientListResponseSchema },
        errorFactory: ThePlaidApiClient.PaymentInitiationRecipientListError,
      },
      options,
    );
  }

  /**
   * Create payment profile
   *
   * @remarks
   * Use `/payment_profile/create` endpoint to create a new payment profile. To initiate the account
   * linking experience, call `/link/token/create` and provide the `payment_profile_token` in the
   * `transfer.payment_profile_token` field. You can then use the `payment_profile_token` when
   * creating transfers using `/transfer/authorization/create` and `/transfer/create`.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.PaymentProfileCreateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  paymentProfileCreate(
    request: ThePlaidApiClient.PaymentProfileCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<PaymentProfileCreateResponse, ThePlaidApiClient.PaymentProfileCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/payment_profile/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: paymentProfileCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: paymentProfileCreateResponseSchema },
        errorFactory: ThePlaidApiClient.PaymentProfileCreateError,
      },
      options,
    );
  }

  /**
   * Get payment profile
   *
   * @remarks
   * Use `/payment_profile/get` endpoint to get the status of a given Payment Profile.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.PaymentProfileGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  paymentProfileGet(
    request: ThePlaidApiClient.PaymentProfileGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<PaymentProfileGetResponse, ThePlaidApiClient.PaymentProfileGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/payment_profile/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: paymentProfileGetRequestSchema },
      },
      {
        success: { kind: "json", schema: paymentProfileGetResponseSchema },
        errorFactory: ThePlaidApiClient.PaymentProfileGetError,
      },
      options,
    );
  }

  /**
   * Remove payment profile
   *
   * @remarks
   * Use the `/payment_profile/remove` endpoint to remove a given Payment Profile. Once it's
   * removed, it can no longer be used to create transfers.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.PaymentProfileRemoveError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  paymentProfileRemove(
    request: ThePlaidApiClient.PaymentProfileRemoveRequestParams,
    options?: RequestOptions,
  ): ApiPromise<PaymentProfileRemoveResponse, ThePlaidApiClient.PaymentProfileRemoveError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/payment_profile/remove"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: paymentProfileRemoveRequestSchema },
      },
      {
        success: { kind: "json", schema: paymentProfileRemoveResponseSchema },
        errorFactory: ThePlaidApiClient.PaymentProfileRemoveError,
      },
      options,
    );
  }

  /**
   * Retrieve the account associated with a processor token
   *
   * @remarks
   * This endpoint returns the account associated with a given processor token.
   *
   * This endpoint retrieves cached information, rather than extracting fresh information from the
   * institution. As a result, the account balance returned may not be up-to-date; for real-time
   * balance information, use `/processor/balance/get` instead. Note that some information is
   * nullable.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.ProcessorAccountGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  processorAccountGet(
    request: ThePlaidApiClient.ProcessorAccountGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ProcessorAccountGetResponse, ThePlaidApiClient.ProcessorAccountGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/processor/account/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: processorAccountGetRequestSchema },
      },
      {
        success: { kind: "json", schema: processorAccountGetResponseSchema },
        errorFactory: ThePlaidApiClient.ProcessorAccountGetError,
      },
      options,
    );
  }

  /**
   * Create Apex processor token
   *
   * @remarks
   * Used to create a token suitable for sending to Apex to enable Plaid-Apex integrations.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.ProcessorApexProcessorTokenCreateError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  processorApexProcessorTokenCreate(
    request: ThePlaidApiClient.ProcessorApexProcessorTokenCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ProcessorTokenCreateResponse, ThePlaidApiClient.ProcessorApexProcessorTokenCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/processor/apex/processor_token/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: processorApexProcessorTokenCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: processorTokenCreateResponseSchema },
        errorFactory: ThePlaidApiClient.ProcessorApexProcessorTokenCreateError,
      },
      options,
    );
  }

  /**
   * Retrieve Auth data
   *
   * @remarks
   * The `/processor/auth/get` endpoint returns the bank account and bank identification number
   * (such as the routing number, for US accounts), for a checking, savings, or cash management
   * account that''s associated with a given `processor_token`. The endpoint also returns high-level
   * account data and balances when available.
   *
   * Versioning note: API versions 2019-05-29 and earlier use a different schema for the `numbers`
   * object returned by this endpoint. For details, see [Plaid API
   * versioning](https://plaid.com/docs/api/versioning/#version-2020-09-14).
   *
   * @returns success
   *
   * @throws {@link ThePlaidApiClient.ProcessorAuthGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  processorAuthGet(
    request: ThePlaidApiClient.ProcessorAuthGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ProcessorAuthGetResponse, ThePlaidApiClient.ProcessorAuthGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/processor/auth/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: processorAuthGetRequestSchema },
      },
      {
        success: { kind: "json", schema: processorAuthGetResponseSchema },
        errorFactory: ThePlaidApiClient.ProcessorAuthGetError,
      },
      options,
    );
  }

  /**
   * Retrieve Balance data
   *
   * @remarks
   * The `/processor/balance/get` endpoint returns the real-time balance for each of an Item's
   * accounts. While other endpoints may return a balance object, only `/processor/balance/get`
   * forces the available and current balance fields to be refreshed rather than cached.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.ProcessorBalanceGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  processorBalanceGet(
    request: ThePlaidApiClient.ProcessorBalanceGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ProcessorBalanceGetResponse, ThePlaidApiClient.ProcessorBalanceGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/processor/balance/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: processorBalanceGetRequestSchema },
      },
      {
        success: { kind: "json", schema: processorBalanceGetResponseSchema },
        errorFactory: ThePlaidApiClient.ProcessorBalanceGetError,
      },
      options,
    );
  }

  /**
   * (Deprecated) Create a bank transfer as a processor
   *
   * @remarks
   * Use the `/processor/bank_transfer/create` endpoint to initiate a new bank transfer as a
   * processor
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.ProcessorBankTransferCreateError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  processorBankTransferCreate(
    request: ThePlaidApiClient.ProcessorBankTransferCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ProcessorBankTransferCreateResponse, ThePlaidApiClient.ProcessorBankTransferCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/processor/bank_transfer/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: processorBankTransferCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: processorBankTransferCreateResponseSchema },
        errorFactory: ThePlaidApiClient.ProcessorBankTransferCreateError,
      },
      options,
    );
  }

  /**
   * Retrieve Identity data
   *
   * @remarks
   * The `/processor/identity/get` endpoint allows you to retrieve various account holder
   * information on file with the financial institution, including names, emails, phone numbers, and
   * addresses.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.ProcessorIdentityGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  processorIdentityGet(
    request: ThePlaidApiClient.ProcessorIdentityGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ProcessorIdentityGetResponse, ThePlaidApiClient.ProcessorIdentityGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/processor/identity/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: processorIdentityGetRequestSchema },
      },
      {
        success: { kind: "json", schema: processorIdentityGetResponseSchema },
        errorFactory: ThePlaidApiClient.ProcessorIdentityGetError,
      },
      options,
    );
  }

  /**
   * Retrieve identity match score
   *
   * @remarks
   * The `/processor/identity/match` endpoint generates a match score, which indicates how well the
   * provided identity data matches the identity information on file with the account holder's
   * financial institution.
   *
   * Fields within the `balances` object will always be null when retrieved by
   * `/processor/identity/match`. Instead, use the `/processor/balance/get` endpoint to retrieve
   * balance data.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.ProcessorIdentityMatchError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  processorIdentityMatch(
    request: ThePlaidApiClient.ProcessorIdentityMatchRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ProcessorIdentityMatchResponse, ThePlaidApiClient.ProcessorIdentityMatchError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/processor/identity/match"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: processorIdentityMatchRequestSchema },
      },
      {
        success: { kind: "json", schema: processorIdentityMatchResponseSchema },
        errorFactory: ThePlaidApiClient.ProcessorIdentityMatchError,
      },
      options,
    );
  }

  /**
   * Get investment account authentication data
   *
   * @remarks
   * The `/processor/investments/auth/get` endpoint allows you to retrieve information about the
   * account authorized by a processor token, including account numbers, account owners, holdings,
   * and data provenance information.
   *
   * To receive Investments Auth webhooks for a processor token, set its webhook URL via the
   * [`/processor/token/webhook/update`](https://plaid.com/docs/api/processor-partners/#processortokenwebhookupdate)
   * endpoint.
   *
   * @returns success
   *
   * @throws {@link ThePlaidApiClient.ProcessorInvestmentsAuthGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  processorInvestmentsAuthGet(
    request: ThePlaidApiClient.ProcessorInvestmentsAuthGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ProcessorInvestmentsAuthGetResponse, ThePlaidApiClient.ProcessorInvestmentsAuthGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/processor/investments/auth/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: processorInvestmentsAuthGetRequestSchema },
      },
      {
        success: { kind: "json", schema: processorInvestmentsAuthGetResponseSchema },
        errorFactory: ThePlaidApiClient.ProcessorInvestmentsAuthGetError,
      },
      options,
    );
  }

  /**
   * Retrieve Investment Holdings
   *
   * @remarks
   * This endpoint returns the stock position data of the account associated with a given processor
   * token.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.ProcessorInvestmentsHoldingsGetError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/processor/investments/holdings/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: processorInvestmentsHoldingsGetRequestSchema },
      },
      {
        success: { kind: "json", schema: processorInvestmentsHoldingsGetResponseSchema },
        errorFactory: ThePlaidApiClient.ProcessorInvestmentsHoldingsGetError,
      },
      options,
    );
  }

  /**
   * Get investment transactions data
   *
   * @remarks
   * The `/processor/investments/transactions/get` endpoint allows developers to retrieve up to 24
   * months of user-authorized transaction data for the investment account associated with the
   * processor token.
   *
   * Transactions are returned in reverse-chronological order, and the sequence of transaction
   * ordering is stable and will not shift.
   *
   * Due to the potentially large number of investment transactions associated with the account,
   * results are paginated. Manipulate the count and offset parameters in conjunction with the
   * `total_investment_transactions` response body field to fetch all available investment
   * transactions.
   *
   * Note that Investments does not have a webhook to indicate when initial transaction data has
   * loaded (unless you use the `async_update` option). Instead, if transactions data is not ready
   * when `/processor/investments/transactions/get` is first called, Plaid will wait for the data.
   * For this reason, calling `/processor/investments/transactions/get` immediately after Link may
   * take up to one to two minutes to return.
   *
   * Data returned by the asynchronous investments extraction flow (when `async_update` is set to
   * true) may not be immediately available to `/processor/investments/transactions/get`. To be
   * alerted when the data is ready to be fetched, listen for the `HISTORICAL_UPDATE` webhook. If no
   * investments history is ready when `/processor/investments/transactions/get` is called, it will
   * return a `PRODUCT_NOT_READY` error.
   *
   * To receive Investments Transactions webhooks for a processor token, set its webhook URL via the
   * [`/processor/token/webhook/update`](https://plaid.com/docs/api/processor-partners/#processortokenwebhookupdate)
   * endpoint.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.ProcessorInvestmentsTransactionsGetError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/processor/investments/transactions/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: processorInvestmentsTransactionsGetRequestSchema },
      },
      {
        success: { kind: "json", schema: processorInvestmentsTransactionsGetResponseSchema },
        errorFactory: ThePlaidApiClient.ProcessorInvestmentsTransactionsGetError,
      },
      options,
    );
  }

  /**
   * Retrieve Liabilities data
   *
   * @remarks
   * The `/processor/liabilities/get` endpoint returns various details about a loan or credit
   * account. Liabilities data is available primarily for US financial institutions, with some
   * limited coverage of Canadian institutions. Currently supported account types are account type
   * `credit` with account subtype `credit card` or `paypal`, and account type `loan` with account
   * subtype `student` or `mortgage`.
   *
   * The types of information returned by Liabilities can include balances and due dates, loan
   * terms, and account details such as original loan amount and guarantor. Data is refreshed
   * approximately once per day; the latest data can be retrieved by calling
   * `/processor/liabilities/get`.
   *
   * Note: This request may take some time to complete if `liabilities` was not specified as an
   * initial product when creating the processor token. This is because Plaid must communicate
   * directly with the institution to retrieve the additional data.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.ProcessorLiabilitiesGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  processorLiabilitiesGet(
    request: ThePlaidApiClient.ProcessorLiabilitiesGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ProcessorLiabilitiesGetResponse, ThePlaidApiClient.ProcessorLiabilitiesGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/processor/liabilities/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: processorLiabilitiesGetRequestSchema },
      },
      {
        success: { kind: "json", schema: processorLiabilitiesGetResponseSchema },
        errorFactory: ThePlaidApiClient.ProcessorLiabilitiesGetError,
      },
      options,
    );
  }

  /**
   * Report whether you initiated an ACH transaction
   *
   * @remarks
   * After you call `/processor/signal/evaluate`, Plaid will normally infer the outcome from your
   * Signal Rules. However, if you are not using Signal Rules, if the Signal Rules outcome was
   * `REVIEW`, or if you take a different action than the one determined by the Signal Rules, you
   * will need to call `/processor/signal/decision/report`. This helps improve Signal Transaction
   * Score accuracy for your account and is necessary for proper functioning of the rule performance
   * and rule tuning capabilities in the Dashboard. If your effective decision changes after calling
   * `/processor/signal/decision/report` (for example, you indicated that you accepted a
   * transaction, but later on, your payment processor rejected it, so it was never initiated), call
   * `/processor/signal/decision/report` again for the transaction to correct Plaid's records.
   *
   * If you are using Plaid Transfer as your payment processor, you also do not need to call
   * `/processor/signal/decision/report`, as Plaid can infer outcomes from your Transfer activity.
   *
   * If using a Balance-only ruleset, this endpoint will not impact scores (Balance does not use
   * scores), but is necessary to view accurate transaction outcomes and tune rule logic in the
   * Dashboard.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.ProcessorSignalDecisionReportError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  processorSignalDecisionReport(
    request: ThePlaidApiClient.ProcessorSignalDecisionReportRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ProcessorSignalDecisionReportResponse, ThePlaidApiClient.ProcessorSignalDecisionReportError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/processor/signal/decision/report"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: processorSignalDecisionReportRequestSchema },
      },
      {
        success: { kind: "json", schema: processorSignalDecisionReportResponseSchema },
        errorFactory: ThePlaidApiClient.ProcessorSignalDecisionReportError,
      },
      options,
    );
  }

  /**
   * Evaluate a planned ACH transaction
   *
   * @remarks
   * Use `/processor/signal/evaluate` to evaluate a planned ACH transaction to get a return risk
   * assessment and additional risk signals.
   *
   * `/processor/signal/evaluate` uses Rulesets that are configured on the end customer's Dashboard
   * and can be used with either the Signal Transaction Scores product or the Balance product. Which
   * product is used will be determined by the `ruleset_key` that you provide. Note that only
   * customer-configured rulesets work with this endpoint; as a processor partner, you cannot create
   * or configure your own rulesets. For more details, see [Signal
   * Rules](https://plaid.com/docs/signal/signal-rules/).
   *
   * Note: This request may have higher latency if Signal Transaction Scores is being added to an
   * existing Item for the first time, or when using a Balance-only ruleset. This is because Plaid
   * must communicate directly with the institution to request data.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.ProcessorSignalEvaluateError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  processorSignalEvaluate(
    request: ThePlaidApiClient.ProcessorSignalEvaluateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ProcessorSignalEvaluateResponse, ThePlaidApiClient.ProcessorSignalEvaluateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/processor/signal/evaluate"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: processorSignalEvaluateRequestSchema },
      },
      {
        success: { kind: "json", schema: processorSignalEvaluateResponseSchema },
        errorFactory: ThePlaidApiClient.ProcessorSignalEvaluateError,
      },
      options,
    );
  }

  /**
   * Opt-in a processor token to Signal
   *
   * @remarks
   * When a processor token is not initialized with `signal`, call `/processor/signal/prepare` to
   * opt-in that processor token to the data collection process, which will improve the accuracy of
   * the Signal Transaction Score.
   *
   * If this endpoint is called with a processor token that is already initialized with `signal`, it
   * will return a 200 response and will not modify the processor token.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.ProcessorSignalPrepareError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  processorSignalPrepare(
    request: ThePlaidApiClient.ProcessorSignalPrepareRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ProcessorSignalPrepareResponse, ThePlaidApiClient.ProcessorSignalPrepareError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/processor/signal/prepare"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: processorSignalPrepareRequestSchema },
      },
      {
        success: { kind: "json", schema: processorSignalPrepareResponseSchema },
        errorFactory: ThePlaidApiClient.ProcessorSignalPrepareError,
      },
      options,
    );
  }

  /**
   * Report a return for an ACH transaction
   *
   * @remarks
   * Call the `/processor/signal/return/report` endpoint to report a returned transaction that was
   * previously sent to the `/processor/signal/evaluate` endpoint. Your feedback will be used by the
   * model to incorporate the latest risk trend in your portfolio.
   *
   * If you are using the [Plaid Transfer product](https://plaid.com/docs/transfer) to create
   * transfers, it is not necessary to use this endpoint, as Plaid already knows whether the
   * transfer was returned.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.ProcessorSignalReturnReportError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  processorSignalReturnReport(
    request: ThePlaidApiClient.ProcessorSignalReturnReportRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ProcessorSignalReturnReportResponse, ThePlaidApiClient.ProcessorSignalReturnReportError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/processor/signal/return/report"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: processorSignalReturnReportRequestSchema },
      },
      {
        success: { kind: "json", schema: processorSignalReturnReportResponseSchema },
        errorFactory: ThePlaidApiClient.ProcessorSignalReturnReportError,
      },
      options,
    );
  }

  /**
   * Create Stripe bank account token
   *
   * @remarks
   *
   * Used to create a token suitable for sending to Stripe to enable Plaid-Stripe integrations. For
   * a detailed guide on integrating Stripe, see [Add Stripe to your
   * app](https://plaid.com/docs/auth/partnerships/stripe/).
   *
   * Note that the Stripe bank account token is a one-time use token. To store bank account
   * information for later use, you can use a Stripe customer object and create an associated bank
   * account from the token, or you can use a Stripe Custom account and create an associated
   * external bank account from the token. This bank account information should work indefinitely,
   * unless the user's bank account information changes or they revoke Plaid's permissions to access
   * their account. Stripe bank account information cannot be modified once the bank account token
   * has been created. If you ever need to change the bank account details used by Stripe for a
   * specific customer, have the user go through Link again and create a new bank account token from
   * the new `access_token`.
   *
   * To revoke a bank account token, the entire underlying access token must be revoked using
   * `/item/remove`.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.ProcessorStripeBankAccountTokenCreateError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/processor/stripe/bank_account_token/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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

  /**
   * Create processor token
   *
   * @remarks
   * Used to create a token suitable for sending to one of Plaid's partners to enable integrations.
   * Note that Stripe partnerships use bank account tokens instead; see
   * `/processor/stripe/bank_account_token/create` for creating tokens for use with Stripe
   * integrations. If using multiple processors, multiple different processor tokens can be created
   * for a single access token. Once created, a processor token for a given Item can be modified by
   * calling `/processor/token/permissions/set`. To revoke the processor's access, the entire Item
   * must be deleted by calling `/item/remove`.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.ProcessorTokenCreateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  processorTokenCreate(
    request: ThePlaidApiClient.ProcessorTokenCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ProcessorTokenCreateResponse, ThePlaidApiClient.ProcessorTokenCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/processor/token/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: processorTokenCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: processorTokenCreateResponseSchema },
        errorFactory: ThePlaidApiClient.ProcessorTokenCreateError,
      },
      options,
    );
  }

  /**
   * Get a processor token's product permissions
   *
   * @remarks
   * Used to get a processor token's product permissions. The `products` field will be an empty list
   * if the processor can access all available products.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.ProcessorTokenPermissionsGetError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  processorTokenPermissionsGet(
    request: ThePlaidApiClient.ProcessorTokenPermissionsGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ProcessorTokenPermissionsGetResponse, ThePlaidApiClient.ProcessorTokenPermissionsGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/processor/token/permissions/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: processorTokenPermissionsGetRequestSchema },
      },
      {
        success: { kind: "json", schema: processorTokenPermissionsGetResponseSchema },
        errorFactory: ThePlaidApiClient.ProcessorTokenPermissionsGetError,
      },
      options,
    );
  }

  /**
   * Control a processor's access to products
   *
   * @remarks
   * Used to control a processor's access to products on the given processor token. By default, a
   * processor will have access to all available products on the corresponding item. To restrict
   * access to a particular set of products, call this endpoint with the desired products. To
   * restore access to all available products, call this endpoint with an empty list. This endpoint
   * can be called multiple times as your needs and your processor's needs change.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.ProcessorTokenPermissionsSetError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  processorTokenPermissionsSet(
    request: ThePlaidApiClient.ProcessorTokenPermissionsSetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ProcessorTokenPermissionsSetResponse, ThePlaidApiClient.ProcessorTokenPermissionsSetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/processor/token/permissions/set"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: processorTokenPermissionsSetRequestSchema },
      },
      {
        success: { kind: "json", schema: processorTokenPermissionsSetResponseSchema },
        errorFactory: ThePlaidApiClient.ProcessorTokenPermissionsSetError,
      },
      options,
    );
  }

  /**
   * Update a processor token's webhook URL
   *
   * @remarks
   * This endpoint allows you, the processor, to update the webhook URL associated with a processor
   * token. This request triggers a `WEBHOOK_UPDATE_ACKNOWLEDGED` webhook to the newly specified
   * webhook URL.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.ProcessorTokenWebhookUpdateError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  processorTokenWebhookUpdate(
    request: ThePlaidApiClient.ProcessorTokenWebhookUpdateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ProcessorTokenWebhookUpdateResponse, ThePlaidApiClient.ProcessorTokenWebhookUpdateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/processor/token/webhook/update"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: processorTokenWebhookUpdateRequestSchema },
      },
      {
        success: { kind: "json", schema: processorTokenWebhookUpdateResponseSchema },
        errorFactory: ThePlaidApiClient.ProcessorTokenWebhookUpdateError,
      },
      options,
    );
  }

  /**
   * Get transaction data
   *
   * @remarks
   * The `/processor/transactions/get` endpoint allows developers to receive user-authorized
   * transaction data for credit, depository, and some loan-type accounts (only those with account
   * subtype `student` or `mortgage`; coverage may be limited). Transaction data is standardized
   * across financial institutions, and in many cases transactions are linked to a clean name,
   * entity type, location, and category. Similarly, account data is standardized and returned with
   * a clean name, number, balance, and other meta information where available.
   *
   * Transactions are returned in reverse-chronological order, and the sequence of transaction
   * ordering is stable and will not shift. Transactions are not immutable and can also be removed
   * altogether by the institution; a removed transaction will no longer appear in
   * `/processor/transactions/get`. For more details, see [Pending and posted
   * transactions](https://plaid.com/docs/transactions/transactions-data/#pending-and-posted-transactions).
   *
   * Due to the potentially large number of transactions associated with a processor token, results
   * are paginated. Manipulate the `count` and `offset` parameters in conjunction with the
   * `total_transactions` response body field to fetch all available transactions.
   *
   * Data returned by `/processor/transactions/get` will be the data available for the processor
   * token as of the most recent successful check for new transactions. Plaid typically checks for
   * new data multiple times a day, but these checks may occur less frequently, such as once a day,
   * depending on the institution. To force Plaid to check for new transactions, you can use the
   * `/processor/transactions/refresh` endpoint.
   *
   * Note that data may not be immediately available to `/processor/transactions/get`. Plaid will
   * begin to prepare transactions data upon Item link, if Link was initialized with `transactions`,
   * or upon the first call to `/processor/transactions/get`, if it wasn't. If no transaction
   * history is ready when `/processor/transactions/get` is called, it will return a
   * `PRODUCT_NOT_READY` error.
   *
   * To receive Transactions webhooks for a processor token, set its webhook URL via the
   * [`/processor/token/webhook/update`](https://plaid.com/docs/api/processor-partners/#processortokenwebhookupdate)
   * endpoint.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.ProcessorTransactionsGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  processorTransactionsGet(
    request: ThePlaidApiClient.ProcessorTransactionsGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ProcessorTransactionsGetResponse, ThePlaidApiClient.ProcessorTransactionsGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/processor/transactions/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: processorTransactionsGetRequestSchema },
      },
      {
        success: { kind: "json", schema: processorTransactionsGetResponseSchema },
        errorFactory: ThePlaidApiClient.ProcessorTransactionsGetError,
      },
      options,
    );
  }

  /**
   * Fetch recurring transaction streams
   *
   * @remarks
   * The `/processor/transactions/recurring/get` endpoint allows developers to receive a summary of
   * the recurring outflow and inflow streams (expenses and deposits) from a user's checking,
   * savings or credit card accounts. Additionally, Plaid provides key insights about each recurring
   * stream including the category, merchant, last amount, and more. Developers can use these
   * insights to build tools and experiences that help their users better manage cash flow, monitor
   * subscriptions, reduce spend, and stay on track with bill payments.
   *
   * This endpoint is offered as an add-on to Transactions. To request access to this endpoint,
   * submit a [product access request](https://dashboard.plaid.com/team/products) or contact your
   * Plaid account manager.
   *
   * This endpoint can only be called on a processor token that has already been initialized with
   * Transactions (either during Link, by specifying it in `/link/token/create`; or after Link, by
   * calling `/processor/transactions/get` or `/processor/transactions/sync`). Once all historical
   * transactions have been fetched, call `/processor/transactions/recurring/get` to receive the
   * Recurring Transactions streams and subscribe to the
   * [`RECURRING_TRANSACTIONS_UPDATE`](https://plaid.com/docs/api/products/transactions/#recurring_transactions_update)
   * webhook. To know when historical transactions have been fetched, if you are using
   * `/processor/transactions/sync` listen for the
   * [`SYNC_UPDATES_AVAILABLE`](https://plaid.com/docs/api/products/transactions/#SyncUpdatesAvailableWebhook-historical-update-complete)
   * webhook and check that the `historical_update_complete` field in the payload is `true`. If
   * using `/processor/transactions/get`, listen for the
   * [`HISTORICAL_UPDATE`](https://plaid.com/docs/api/products/transactions/#historical_update)
   * webhook.
   *
   * After the initial call, you can call the `/processor/transactions/recurring/get` endpoint at
   * any point in the future to retrieve the latest summary of recurring streams. Listen to the
   * [`RECURRING_TRANSACTIONS_UPDATE`](https://plaid.com/docs/api/products/transactions/#recurring_transactions_update)
   * webhook to be notified when new updates are available.
   *
   * To receive Transactions webhooks for a processor token, set its webhook URL via the
   * [`/processor/token/webhook/update`](https://plaid.com/docs/api/processor-partners/#processortokenwebhookupdate)
   * endpoint.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.ProcessorTransactionsRecurringGetError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/processor/transactions/recurring/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: processorTransactionsRecurringGetRequestSchema },
      },
      {
        success: { kind: "json", schema: processorTransactionsRecurringGetResponseSchema },
        errorFactory: ThePlaidApiClient.ProcessorTransactionsRecurringGetError,
      },
      options,
    );
  }

  /**
   * Refresh transaction data
   *
   * @remarks
   * `/processor/transactions/refresh` is an optional endpoint for users of the Transactions
   * product. It initiates an on-demand extraction to fetch the newest transactions for a processor
   * token. This on-demand extraction takes place in addition to the periodic extractions that
   * automatically occur one or more times per day for any Transactions-enabled processor token. If
   * changes to transactions are discovered after calling `/processor/transactions/refresh`, Plaid
   * will fire a webhook: for `/processor/transactions/sync` users,
   * [`SYNC_UPDATES_AVAILABLE`](https://plaid.com/docs/api/products/transactions/#sync_updates_available)
   * will be fired if there are any transactions updated, added, or removed. For users of both
   * `/processor/transactions/sync` and `/processor/transactions/get`,
   * [`TRANSACTIONS_REMOVED`](https://plaid.com/docs/api/products/transactions/#transactions_removed)
   * will be fired if any removed transactions are detected, and
   * [`DEFAULT_UPDATE`](https://plaid.com/docs/api/products/transactions/#default_update) will be
   * fired if any new transactions are detected. New transactions can be fetched by calling
   * `/processor/transactions/get` or `/processor/transactions/sync`. Note that the
   * `/processor/transactions/refresh` endpoint is not supported for Capital One (`ins_128026`)
   * non-depository accounts and will result in a `PRODUCTS_NOT_SUPPORTED` error if called on an
   * Item that contains only non-depository accounts from that institution.
   *
   * As this endpoint triggers a synchronous request for fresh data, latency may be higher than for
   * other Plaid endpoints (typically less than 10 seconds, but occasionally up to 30 seconds or
   * more); if you encounter errors, you may find it necessary to adjust your timeout period when
   * making requests.
   *
   * `/processor/transactions/refresh` is offered as an add-on to Transactions and has a separate
   * [fee model](https://plaid.com/docs/account/billing/#per-request-flat-fee). To request access to
   * this endpoint, submit a [product access request](https://dashboard.plaid.com/team/products) or
   * contact your Plaid account manager.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.ProcessorTransactionsRefreshError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  processorTransactionsRefresh(
    request: ThePlaidApiClient.ProcessorTransactionsRefreshRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ProcessorTransactionsRefreshResponse, ThePlaidApiClient.ProcessorTransactionsRefreshError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/processor/transactions/refresh"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: processorTransactionsRefreshRequestSchema },
      },
      {
        success: { kind: "json", schema: processorTransactionsRefreshResponseSchema },
        errorFactory: ThePlaidApiClient.ProcessorTransactionsRefreshError,
      },
      options,
    );
  }

  /**
   * Get incremental transaction updates on a processor token
   *
   * @remarks
   *
   * The `/processor/transactions/sync` endpoint retrieves transactions associated with an Item and
   * can fetch updates using a cursor to track which updates have already been seen.
   *
   * For important instructions on integrating with `/processor/transactions/sync`, see the
   * [Transactions integration overview](https://plaid.com/docs/transactions/#integration-overview).
   * If you are migrating from an existing integration using `/processor/transactions/get`, see the
   * [Transactions Sync migration guide](https://plaid.com/docs/transactions/sync-migration/).
   *
   * This endpoint supports `credit`, `depository`, and some `loan`-type accounts (only those with
   * account subtype `student` or `mortgage`). For `investments` accounts, use
   * `/investments/transactions/get` instead.
   *
   * When retrieving paginated updates, track both the `next_cursor` from the latest response and
   * the original cursor from the first call in which `has_more` was `true`; if a call to
   * `/processor/transactions/sync` fails when retrieving a paginated update (e.g. due to the
   * [`TRANSACTIONS_SYNC_MUTATION_DURING_PAGINATION`](https://plaid.com/docs/errors/transactions/#transactions_sync_mutation_during_pagination)
   * error), the entire pagination request loop must be restarted beginning with the cursor for the
   * first page of the update, rather than retrying only the single request that failed.
   *
   * If transactions data is not yet available for the Item, which can happen if the Item was not
   * initialized with transactions during the `/link/token/create` call or if
   * `/processor/transactions/sync` was called within a few seconds of Item creation,
   * `/processor/transactions/sync` will return empty transactions arrays.
   *
   * Plaid typically checks for new transactions data between one and four times per day, depending
   * on the institution. To find out when transactions were last updated for an Item, use the [Item
   * Debugger](https://plaid.com/docs/account/activity/#troubleshooting-with-item-debugger) or call
   * `/item/get`; the `item.status.transactions.last_successful_update` field will show the
   * timestamp of the most recent successful update. To force Plaid to check for new transactions,
   * use the `/processor/transactions/refresh` endpoint.
   *
   * To be alerted when new transactions are available, listen for the
   * [`SYNC_UPDATES_AVAILABLE`](https://plaid.com/docs/api/products/transactions/#sync_updates_available)
   * webhook.
   *
   * To receive Transactions webhooks for a processor token, set its webhook URL via the
   * [`/processor/token/webhook/update`](https://plaid.com/docs/api/processor-partners/#processortokenwebhookupdate)
   * endpoint.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.ProcessorTransactionsSyncError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  processorTransactionsSync(
    request: ThePlaidApiClient.ProcessorTransactionsSyncRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ProcessorTransactionsSyncResponse, ThePlaidApiClient.ProcessorTransactionsSyncError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/processor/transactions/sync"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: processorTransactionsSyncRequestSchema },
      },
      {
        success: { kind: "json", schema: processorTransactionsSyncResponseSchema },
        errorFactory: ThePlaidApiClient.ProcessorTransactionsSyncError,
      },
      options,
    );
  }

  /**
   * Check a user's Plaid Network status
   *
   * @remarks
   * The `/profile/network_status/get` endpoint can be used to check whether Plaid has a matching
   * profile for the user.
   *
   * @returns success
   *
   * @throws {@link ThePlaidApiClient.ProfileNetworkStatusGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  profileNetworkStatusGet(
    request: ThePlaidApiClient.ProfileNetworkStatusGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ProfileNetworkStatusGetResponse, ThePlaidApiClient.ProfileNetworkStatusGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/profile/network_status/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: profileNetworkStatusGetRequestSchema },
      },
      {
        success: { kind: "json", schema: profileNetworkStatusGetResponseSchema },
        errorFactory: ThePlaidApiClient.ProfileNetworkStatusGetError,
      },
      options,
    );
  }

  /**
   * Compute Protect Trust Index scores and subscores
   *
   * @remarks
   * Compute a Protect Trust Index score for a user. The model selected determines what is scored
   * and what additional fields the response contains. For example, `ti-link-session-2.0` scores a
   * completed Link session for fraud risk; `cash-advance-onboarding-1.0` scores repayment risk for
   * a first-time cash advance and additionally populates per-amount-bucket subscores. Cash-advance
   * models require that the user have a Plaid Item with Transactions enabled, or an Assets Report,
   * before scoring.
   *
   * The endpoint returns HTTP 400 with `error_type` = `INVALID_REQUEST` and `error_code` =
   * `FAILED_PRECONDITION` when a required precondition is not met: for link-session models, when
   * the Link session has not completed; for cash-advance models, when the user has not successfully
   * linked any Item.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  protectCompute(
    request: ThePlaidApiClient.ProtectComputeRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ProtectComputeResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/protect/compute"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: protectComputeRequestSchema },
      },
      {
        success: { kind: "json", schema: protectComputeResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get information about a user event
   *
   * @remarks
   * Get information about a user event including Trust Index score and fraud attributes.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  protectEventGet(
    request: ThePlaidApiClient.ProtectEventGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ProtectEventGetResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/protect/event/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: protectEventGetRequestSchema },
      },
      {
        success: { kind: "json", schema: protectEventGetResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Send a new event to enrich user data
   *
   * @remarks
   * Send a new event to enrich user data and optionally get a Trust Index score for the event.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  protectEventSend(
    request: ThePlaidApiClient.ProtectEventSendRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ProtectEventSendResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/protect/event/send"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: protectEventSendRequestSchema },
      },
      {
        success: { kind: "json", schema: protectEventSendResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Create a Protect report
   *
   * @remarks
   * Use this endpoint to create a Protect report to document fraud incidents, investigation
   * outcomes, or other risk events. This endpoint allows you to report various types of incidents
   * including account takeovers, identity fraud, unauthorized transactions, and other security
   * events. The reported data helps improve fraud detection models and provides valuable feedback
   * to enhance the overall security of the Plaid network. Reports can be created for confirmed
   * incidents that have been fully investigated, or for suspected incidents that require further
   * review. You can associate reports with specific users, sessions, or transactions to provide
   * comprehensive context about the incident. Each report must include `user_id`, or an
   * `incident_event` with at least one supported identifier: `link_session_id`, `idv_session_id`,
   * `protect_event_id`, `signal_client_transaction_id`, or `access_token`. Context fields such as
   * `internal_reference`, `time`, `amount`, and `bank_account` do not satisfy this identifier
   * requirement.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  protectReportCreate(
    request: ThePlaidApiClient.ProtectReportCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ProtectReportCreateResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/protect/report/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: protectReportCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: protectReportCreateResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get Protect user insights
   *
   * @remarks
   * Use this endpoint to get basic information about a user as it relates to their fraud profile
   * with Protect.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  protectUserInsightsGet(
    request: ThePlaidApiClient.ProtectUserInsightsGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ProtectUserInsightsGetResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/protect/user/insights/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: protectUserInsightsGetRequestSchema },
      },
      {
        success: { kind: "json", schema: protectUserInsightsGetResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * (Deprecated) Manually fire a Bank Income webhook in Sandbox
   *
   * @remarks
   * Use the `/sandbox/bank_income/fire_webhook` endpoint to manually trigger a Bank Income webhook
   * in the Sandbox environment.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.SandboxBankIncomeFireWebhookError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  sandboxBankIncomeFireWebhook(
    request: ThePlaidApiClient.SandboxBankIncomeFireWebhookRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SandboxBankIncomeFireWebhookResponse, ThePlaidApiClient.SandboxBankIncomeFireWebhookError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sandbox/bank_income/fire_webhook"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: sandboxBankIncomeFireWebhookRequestSchema },
      },
      {
        success: { kind: "json", schema: sandboxBankIncomeFireWebhookResponseSchema },
        errorFactory: ThePlaidApiClient.SandboxBankIncomeFireWebhookError,
      },
      options,
    );
  }

  /**
   * (Deprecated) Manually fire a Bank Transfer webhook
   *
   * @remarks
   * Use the `/sandbox/bank_transfer/fire_webhook` endpoint to manually trigger a Bank Transfers
   * webhook in the Sandbox environment.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.SandboxBankTransferFireWebhookError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
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
        urlTemplate: this.#servers.default("/sandbox/bank_transfer/fire_webhook"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: sandboxBankTransferFireWebhookRequestSchema },
      },
      {
        success: { kind: "json", schema: sandboxBankTransferFireWebhookResponseSchema },
        errorFactory: ThePlaidApiClient.SandboxBankTransferFireWebhookError,
      },
      options,
    );
  }

  /**
   * (Deprecated) Simulate a bank transfer event in Sandbox
   *
   * @remarks
   * Use the `/sandbox/bank_transfer/simulate` endpoint to simulate a bank transfer event in the
   * Sandbox environment. Note that while an event will be simulated and will appear when using
   * endpoints such as `/bank_transfer/event/sync` or `/bank_transfer/event/list`, no transactions
   * will actually take place and funds will not move between accounts, even within the Sandbox.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.SandboxBankTransferSimulateError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  sandboxBankTransferSimulate(
    request: ThePlaidApiClient.SandboxBankTransferSimulateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SandboxBankTransferSimulateResponse, ThePlaidApiClient.SandboxBankTransferSimulateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sandbox/bank_transfer/simulate"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: sandboxBankTransferSimulateRequestSchema },
      },
      {
        success: { kind: "json", schema: sandboxBankTransferSimulateResponseSchema },
        errorFactory: ThePlaidApiClient.SandboxBankTransferSimulateError,
      },
      options,
    );
  }

  /**
   * Trigger an update for Cash Flow Updates
   *
   * @remarks
   * Use the `/sandbox/cra/cashflow_updates/update` endpoint to manually trigger an update for Cash
   * Flow Updates (Monitoring) in the Sandbox environment.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.SandboxCraCashflowUpdatesUpdateError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/sandbox/cra/cashflow_updates/update"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: sandboxCraCashflowUpdatesUpdateRequestSchema },
      },
      {
        success: { kind: "json", schema: sandboxCraCashflowUpdatesUpdateResponseSchema },
        errorFactory: ThePlaidApiClient.SandboxCraCashflowUpdatesUpdateError,
      },
      options,
    );
  }

  /**
   * Seed an FDX consent grant for a sandbox data partner
   *
   * @remarks
   * `/sandbox/fdx/consent/seed` creates a test FDX consent grant (and a backing Item) for a data
   * provider's customer in Sandbox, so the FDX Consent API endpoints can be exercised end-to-end
   * without a live data provider connection.
   *
   * `customer_id` is the data provider's identifier for the end user and `application_id`
   * identifies the data recipient application the consent is granted to; both are required.
   * Optionally provide `consent_id` (a UUIDv4) to control the seeded grant's identifier; one is
   * generated when omitted. The seeded grant is returned by `/fdx/consents` and
   * `/fdx/consents/{consentId}`, and can be revoked via `/fdx/consents/{consentId}/revocation`.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.SandboxFdxConsentSeedError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sandboxFdxConsentSeed(
    request: ThePlaidApiClient.SandboxFdxConsentSeedRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SandboxFdxConsentSeedResponse, ThePlaidApiClient.SandboxFdxConsentSeedError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sandbox/fdx/consent/seed"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: sandboxFdxConsentSeedRequestSchema },
      },
      {
        success: { kind: "json", schema: sandboxFdxConsentSeedResponseSchema },
        errorFactory: ThePlaidApiClient.SandboxFdxConsentSeedError,
      },
      options,
    );
  }

  /**
   * Manually fire an Income webhook
   *
   * @remarks
   * Use the `/sandbox/income/fire_webhook` endpoint to manually trigger a Payroll or Document
   * Income webhook in the Sandbox environment.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.SandboxIncomeFireWebhookError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sandboxIncomeFireWebhook(
    request: ThePlaidApiClient.SandboxIncomeFireWebhookRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SandboxIncomeFireWebhookResponse, ThePlaidApiClient.SandboxIncomeFireWebhookError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sandbox/income/fire_webhook"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: sandboxIncomeFireWebhookRequestSchema },
      },
      {
        success: { kind: "json", schema: sandboxIncomeFireWebhookResponseSchema },
        errorFactory: ThePlaidApiClient.SandboxIncomeFireWebhookError,
      },
      options,
    );
  }

  /**
   * Seed a connected application for a Permissions Manager sandbox item
   *
   * @remarks
   * `/sandbox/item/application/seed` creates a test connected application on an existing
   * Permissions Manager Item's login. The seeded application will appear in subsequent calls to
   * `/item/application/list`.
   *
   * The `access_token` must belong to a Permissions Manager Item created via `/item/import` in
   * Sandbox. The `application_id` identifies the application to seed as a connected app. To
   * disconnect a seeded application, use `/item/application/unlink`.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.SandboxItemApplicationSeedError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sandboxItemApplicationSeed(
    request: ThePlaidApiClient.SandboxItemApplicationSeedRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SandboxItemApplicationSeedResponse, ThePlaidApiClient.SandboxItemApplicationSeedError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sandbox/item/application/seed"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: sandboxItemApplicationSeedRequestSchema },
      },
      {
        success: { kind: "json", schema: sandboxItemApplicationSeedResponseSchema },
        errorFactory: ThePlaidApiClient.SandboxItemApplicationSeedError,
      },
      options,
    );
  }

  /**
   * Fire a test webhook
   *
   * @remarks
   * The `/sandbox/item/fire_webhook` endpoint is used to test that code correctly handles webhooks.
   * This endpoint can trigger the following webhooks:
   *
   * `DEFAULT_UPDATE`: Webhook to be fired for a given Sandbox Item simulating a default update
   * event for the respective product as specified with the `webhook_type` in the request body.
   * Valid Sandbox `DEFAULT_UPDATE` webhook types include: `AUTH`, `IDENTITY`, `TRANSACTIONS`,
   * `INVESTMENTS_TRANSACTIONS`, `LIABILITIES`, `HOLDINGS`. If the Item does not support the
   * product, a `SANDBOX_PRODUCT_NOT_ENABLED` error will result.
   *
   * `NEW_ACCOUNTS_AVAILABLE`: Fired to indicate that a new account is available on the Item and you
   * can launch update mode to request access to it.
   *
   * `SMS_MICRODEPOSITS_VERIFICATION`: Fired when a given Same-Day Micro-deposit Item is verified
   * via SMS verification.
   *
   * `LOGIN_REPAIRED`: Fired when an Item recovers from the `ITEM_LOGIN_REQUIRED` without the user
   * going through update mode in your app.
   *
   * `PENDING_DISCONNECT`: Fired when an Item will stop working in the near future (e.g. due to a
   * planned bank migration) and must be sent through update mode to continue working.
   *
   * `RECURRING_TRANSACTIONS_UPDATE`: Recurring Transactions webhook to be fired for a given Sandbox
   * Item. If the Item does not support Recurring Transactions, a `SANDBOX_PRODUCT_NOT_ENABLED`
   * error will result.
   *
   * `SYNC_UPDATES_AVAILABLE`: Transactions webhook to be fired for a given Sandbox Item. If the
   * Item does not support Transactions, a `SANDBOX_PRODUCT_NOT_ENABLED` error will result.
   *
   * `PRODUCT_READY`: Assets webhook to be fired when a given asset report has been successfully
   * generated. If the Item does not support Assets, a `SANDBOX_PRODUCT_NOT_ENABLED` error will
   * result.
   *
   * `ERROR`: Assets webhook to be fired when asset report generation has failed. If the Item does
   * not support Assets, a `SANDBOX_PRODUCT_NOT_ENABLED` error will result.
   *
   * `USER_PERMISSION_REVOKED`: Indicates an end user has revoked the permission that they
   * previously granted to access an Item. May not always fire upon revocation, as some
   * institutions' consent portals do not trigger this webhook. Upon receiving this webhook, it is
   * recommended to delete any stored data from Plaid associated with the account or Item.
   *
   * `USER_ACCOUNT_REVOKED`: Fired when an end user has revoked access to their account on the Data
   * Provider's portal. This webhook is currently sent only for PNC Items, but may be sent in the
   * future for other financial institutions. Upon receiving this webhook, it is recommended to
   * delete any stored data from Plaid associated with the account or Item.
   *
   * Note that this endpoint is provided for developer ease-of-use and is not required for testing
   * webhooks; webhooks will also fire in Sandbox under the same conditions that they would in
   * Production (except for webhooks of type `TRANSFER`).
   *
   * @returns success
   *
   * @throws {@link ThePlaidApiClient.SandboxItemFireWebhookError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sandboxItemFireWebhook(
    request: ThePlaidApiClient.SandboxItemFireWebhookRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SandboxItemFireWebhookResponse, ThePlaidApiClient.SandboxItemFireWebhookError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sandbox/item/fire_webhook"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: sandboxItemFireWebhookRequestSchema },
      },
      {
        success: { kind: "json", schema: sandboxItemFireWebhookResponseSchema },
        errorFactory: ThePlaidApiClient.SandboxItemFireWebhookError,
      },
      options,
    );
  }

  /**
   * Force a Sandbox Item into an error state
   *
   * @remarks
   * `/sandbox/item/reset_login` forces an Item into an `ITEM_LOGIN_REQUIRED` state in order to
   * simulate an Item whose login is no longer valid. This makes it easy to test Link's [update
   * mode](https://plaid.com/docs/link/update-mode) flow in the Sandbox environment. After calling
   * `/sandbox/item/reset_login`, you can then use Plaid Link update mode to restore the Item to a
   * good state. An `ITEM_LOGIN_REQUIRED` webhook will also be fired after a call to this endpoint,
   * if one is associated with the Item. In the Sandbox, Items will transition to an
   * `ITEM_LOGIN_REQUIRED` error state automatically after 30 days, even if this endpoint is not
   * called.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.SandboxItemResetLoginError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sandboxItemResetLogin(
    request: ThePlaidApiClient.SandboxItemResetLoginRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SandboxItemResetLoginResponse, ThePlaidApiClient.SandboxItemResetLoginError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sandbox/item/reset_login"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: sandboxItemResetLoginRequestSchema },
      },
      {
        success: { kind: "json", schema: sandboxItemResetLoginResponseSchema },
        errorFactory: ThePlaidApiClient.SandboxItemResetLoginError,
      },
      options,
    );
  }

  /**
   * Set verification status for Sandbox account
   *
   * @remarks
   * The `/sandbox/item/set_verification_status` endpoint can be used to change the verification
   * status of an Item in the Sandbox in order to simulate the Automated Micro-deposit flow.
   *
   * For more information on testing Automated Micro-deposits in Sandbox, see [Auth full coverage
   * testing](https://plaid.com/docs/auth/coverage/testing#).
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.SandboxItemSetVerificationStatusError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/sandbox/item/set_verification_status"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: sandboxItemSetVerificationStatusRequestSchema },
      },
      {
        success: { kind: "json", schema: sandboxItemSetVerificationStatusResponseSchema },
        errorFactory: ThePlaidApiClient.SandboxItemSetVerificationStatusError,
      },
      options,
    );
  }

  /**
   * Save the selected accounts when connecting to the Platypus OAuth institution
   *
   * @remarks
   * Save the selected accounts when connecting to the Platypus OAuth institution
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.SandboxOauthSelectAccountsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sandboxOauthSelectAccounts(
    request: ThePlaidApiClient.SandboxOauthSelectAccountsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, ThePlaidApiClient.SandboxOauthSelectAccountsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sandbox/oauth/select_accounts"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: sandboxOauthSelectAccountsRequestSchema },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ThePlaidApiClient.SandboxOauthSelectAccountsError,
      },
      options,
    );
  }

  /**
   * Reset the login of a Payment Profile
   *
   * @remarks
   * `/sandbox/payment_profile/reset_login` forces a Payment Profile into a state where the login is
   * no longer valid. This makes it easy to test update mode for Payment Profile in the Sandbox
   * environment.
   *
   * After calling `/sandbox/payment_profile/reset_login`, calls to the
   * `/transfer/authorization/create` with the Payment Profile will result in a `decision_rationale`
   * `PAYMENT_PROFILE_LOGIN_REQUIRED`. You can then use update mode for Payment Profile to restore
   * it into a good state.
   *
   * In order to invoke this endpoint, you must first [create a Payment
   * Profile](https://plaid.com/docs/transfer/add-to-app/#create-a-payment-profile-optional) and [go
   * through the Link flow](https://plaid.com/docs/transfer/add-to-app/#create-a-link-token).
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.SandboxPaymentProfileResetLoginError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
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
        urlTemplate: this.#servers.default("/sandbox/payment_profile/reset_login"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: sandboxPaymentProfileResetLoginRequestSchema },
      },
      {
        success: { kind: "json", schema: sandboxPaymentProfileResetLoginResponseSchema },
        errorFactory: ThePlaidApiClient.SandboxPaymentProfileResetLoginError,
      },
      options,
    );
  }

  /**
   * Simulate a payment event in Sandbox
   *
   * @remarks
   * Use the `/sandbox/payment/simulate` endpoint to simulate various payment events in the Sandbox
   * environment. This endpoint will trigger the corresponding payment status webhook.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.SandboxPaymentSimulateError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sandboxPaymentSimulate(
    request: ThePlaidApiClient.SandboxPaymentSimulateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SandboxPaymentSimulateResponse, ThePlaidApiClient.SandboxPaymentSimulateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sandbox/payment/simulate"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: sandboxPaymentSimulateRequestSchema },
      },
      {
        success: { kind: "json", schema: sandboxPaymentSimulateResponseSchema },
        errorFactory: ThePlaidApiClient.SandboxPaymentSimulateError,
      },
      options,
    );
  }

  /**
   * Create a test Item and processor token
   *
   * @remarks
   * Use the `/sandbox/processor_token/create` endpoint to create a valid `processor_token` for an
   * arbitrary institution ID and test credentials. The created `processor_token` corresponds to a
   * new Sandbox Item. You can then use this `processor_token` with the `/processor/` API endpoints
   * in Sandbox. You can also use `/sandbox/processor_token/create` with the [`user_custom` test
   * username](https://plaid.com/docs/sandbox/user-custom) to generate a test account with custom
   * data.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.SandboxProcessorTokenCreateError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sandboxProcessorTokenCreate(
    request: ThePlaidApiClient.SandboxProcessorTokenCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SandboxProcessorTokenCreateResponse, ThePlaidApiClient.SandboxProcessorTokenCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sandbox/processor_token/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: sandboxProcessorTokenCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: sandboxProcessorTokenCreateResponseSchema },
        errorFactory: ThePlaidApiClient.SandboxProcessorTokenCreateError,
      },
      options,
    );
  }

  /**
   * Create a test Item
   *
   * @remarks
   * Use the `/sandbox/public_token/create` endpoint to create a valid `public_token` for an
   * arbitrary institution ID, initial products, and test credentials. The created `public_token`
   * maps to a new Sandbox Item. You can then call `/item/public_token/exchange` to exchange the
   * `public_token` for an `access_token` and perform all API actions.
   * `/sandbox/public_token/create` can also be used with the [`user_custom` test
   * username](https://plaid.com/docs/sandbox/user-custom) to generate a test account with custom
   * data, or with Plaid's [pre-populated Sandbox test
   * accounts](https://plaid.com/docs/sandbox/test-credentials/).
   *
   * @returns success
   *
   * @throws {@link ThePlaidApiClient.SandboxPublicTokenCreateError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sandboxPublicTokenCreate(
    request: ThePlaidApiClient.SandboxPublicTokenCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SandboxPublicTokenCreateResponse, ThePlaidApiClient.SandboxPublicTokenCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sandbox/public_token/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: sandboxPublicTokenCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: sandboxPublicTokenCreateResponseSchema },
        errorFactory: ThePlaidApiClient.SandboxPublicTokenCreateError,
      },
      options,
    );
  }

  /**
   * Create sandbox transactions
   *
   * @remarks
   * Use the `/sandbox/transactions/create` endpoint to create new transactions for an existing
   * Item. This endpoint can be used to add up to 10 transactions to any Item at a time.
   *
   * This endpoint can only be used with Items that were created in the Sandbox environment using
   * the `user_transactions_dynamic` test user. You can use this to add transactions to test the
   * `/transactions/get` and `/transactions/sync` endpoints.
   *
   * Custom transactions are only applied to the depository account. Support for per-account
   * targeting may be added in the future.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.SandboxTransactionsCreateError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sandboxTransactionsCreate(
    request: ThePlaidApiClient.SandboxTransactionsCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SandboxTransactionsCreateResponse, ThePlaidApiClient.SandboxTransactionsCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sandbox/transactions/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: sandboxTransactionsCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: sandboxTransactionsCreateResponseSchema },
        errorFactory: ThePlaidApiClient.SandboxTransactionsCreateError,
      },
      options,
    );
  }

  /**
   * Manually fire a Transfer webhook
   *
   * @remarks
   * Use the `/sandbox/transfer/fire_webhook` endpoint to manually trigger a
   * `TRANSFER_EVENTS_UPDATE` webhook in the Sandbox environment.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.SandboxTransferFireWebhookError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sandboxTransferFireWebhook(
    request: ThePlaidApiClient.SandboxTransferFireWebhookRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SandboxTransferFireWebhookResponse, ThePlaidApiClient.SandboxTransferFireWebhookError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sandbox/transfer/fire_webhook"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: sandboxTransferFireWebhookRequestSchema },
      },
      {
        success: { kind: "json", schema: sandboxTransferFireWebhookResponseSchema },
        errorFactory: ThePlaidApiClient.SandboxTransferFireWebhookError,
      },
      options,
    );
  }

  /**
   * Simulate a ledger deposit event in Sandbox
   *
   * @remarks
   * Use the `/sandbox/transfer/ledger/deposit/simulate` endpoint to simulate a ledger deposit event
   * in the Sandbox environment.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.SandboxTransferLedgerDepositSimulateError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/sandbox/transfer/ledger/deposit/simulate"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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

  /**
   * Simulate converting pending balance to available balance
   *
   * @remarks
   * Use the `/sandbox/transfer/ledger/simulate_available` endpoint to simulate converting pending
   * balance to available balance for all originators in the Sandbox environment.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.SandboxTransferLedgerSimulateAvailableError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/sandbox/transfer/ledger/simulate_available"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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

  /**
   * Simulate a ledger withdraw event in Sandbox
   *
   * @remarks
   * Use the `/sandbox/transfer/ledger/withdraw/simulate` endpoint to simulate a ledger withdraw
   * event in the Sandbox environment.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.SandboxTransferLedgerWithdrawSimulateError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/sandbox/transfer/ledger/withdraw/simulate"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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

  /**
   * Simulate a refund event in Sandbox
   *
   * @remarks
   * Use the `/sandbox/transfer/refund/simulate` endpoint to simulate a refund event in the Sandbox
   * environment. Note that while an event will be simulated and will appear when using endpoints
   * such as `/transfer/event/sync` or `/transfer/event/list`, no transactions will actually take
   * place and funds will not move between accounts, even within the Sandbox.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.SandboxTransferRefundSimulateError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sandboxTransferRefundSimulate(
    request: ThePlaidApiClient.SandboxTransferRefundSimulateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SandboxTransferRefundSimulateResponse, ThePlaidApiClient.SandboxTransferRefundSimulateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sandbox/transfer/refund/simulate"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: sandboxTransferRefundSimulateRequestSchema },
      },
      {
        success: { kind: "json", schema: sandboxTransferRefundSimulateResponseSchema },
        errorFactory: ThePlaidApiClient.SandboxTransferRefundSimulateError,
      },
      options,
    );
  }

  /**
   * Trigger the creation of a repayment
   *
   * @remarks
   * Use the `/sandbox/transfer/repayment/simulate` endpoint to trigger the creation of a repayment.
   * As a side effect of calling this route, a repayment is created that includes all unreimbursed
   * returns of guaranteed transfers. If there are no such returns, a 400 error is returned.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.SandboxTransferRepaymentSimulateError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/sandbox/transfer/repayment/simulate"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: sandboxTransferRepaymentSimulateRequestSchema },
      },
      {
        success: { kind: "json", schema: sandboxTransferRepaymentSimulateResponseSchema },
        errorFactory: ThePlaidApiClient.SandboxTransferRepaymentSimulateError,
      },
      options,
    );
  }

  /**
   * Simulate a transfer event in Sandbox
   *
   * @remarks
   * Use the `/sandbox/transfer/simulate` endpoint to simulate a transfer event in the Sandbox
   * environment. Note that while an event will be simulated and will appear when using endpoints
   * such as `/transfer/event/sync` or `/transfer/event/list`, no transactions will actually take
   * place and funds will not move between accounts, even within the Sandbox.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.SandboxTransferSimulateError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sandboxTransferSimulate(
    request: ThePlaidApiClient.SandboxTransferSimulateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SandboxTransferSimulateResponse, ThePlaidApiClient.SandboxTransferSimulateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sandbox/transfer/simulate"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: sandboxTransferSimulateRequestSchema },
      },
      {
        success: { kind: "json", schema: sandboxTransferSimulateResponseSchema },
        errorFactory: ThePlaidApiClient.SandboxTransferSimulateError,
      },
      options,
    );
  }

  /**
   * Simulate creating a sweep
   *
   * @remarks
   * Use the `/sandbox/transfer/sweep/simulate` endpoint to create a sweep and associated events in
   * the Sandbox environment. Upon calling this endpoint, all transfers with a sweep status of
   * `swept` will become `swept_settled`, all `posted` or `pending` transfers with a sweep status of
   * `unswept` will become `swept`, and all `returned` transfers with a sweep status of `swept` will
   * become `return_swept`.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.SandboxTransferSweepSimulateError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sandboxTransferSweepSimulate(
    request: ThePlaidApiClient.SandboxTransferSweepSimulateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SandboxTransferSweepSimulateResponse, ThePlaidApiClient.SandboxTransferSweepSimulateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sandbox/transfer/sweep/simulate"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: sandboxTransferSweepSimulateRequestSchema },
      },
      {
        success: { kind: "json", schema: sandboxTransferSweepSimulateResponseSchema },
        errorFactory: ThePlaidApiClient.SandboxTransferSweepSimulateError,
      },
      options,
    );
  }

  /**
   * Advance a test clock
   *
   * @remarks
   * Use the `/sandbox/transfer/test_clock/advance` endpoint to advance a `test_clock` in the
   * Sandbox environment.
   *
   * A test clock object represents an independent timeline and has a `virtual_time` field
   * indicating the current timestamp of the timeline. A test clock can be advanced by incrementing
   * `virtual_time`, but may never go back to a lower `virtual_time`.
   *
   * If a test clock is advanced, we will simulate the changes that ought to occur during the time
   * that elapsed.
   *
   * For example, a client creates a weekly recurring transfer with a test clock set at t. When the
   * client advances the test clock by setting `virtual_time` = t + 15 days, 2 new originations
   * should be created, along with the webhook events.
   *
   * The advancement of the test clock from its current `virtual_time` should be limited such that
   * there are no more than 20 originations resulting from the advance operation on each
   * `recurring_transfer` associated with the `test_clock`.
   *
   * For example, if the recurring transfer associated with this test clock originates once every 4
   * weeks, you can advance the `virtual_time` up to 80 weeks on each API call.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.SandboxTransferTestClockAdvanceError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/sandbox/transfer/test_clock/advance"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: sandboxTransferTestClockAdvanceRequestSchema },
      },
      {
        success: { kind: "json", schema: sandboxTransferTestClockAdvanceResponseSchema },
        errorFactory: ThePlaidApiClient.SandboxTransferTestClockAdvanceError,
      },
      options,
    );
  }

  /**
   * Create a test clock
   *
   * @remarks
   * Use the `/sandbox/transfer/test_clock/create` endpoint to create a `test_clock` in the Sandbox
   * environment.
   *
   * A test clock object represents an independent timeline and has a `virtual_time` field
   * indicating the current timestamp of the timeline. Test clocks are used for testing recurring
   * transfers in Sandbox.
   *
   * A test clock can be associated with up to 5 recurring transfers.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.SandboxTransferTestClockCreateError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/sandbox/transfer/test_clock/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: sandboxTransferTestClockCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: sandboxTransferTestClockCreateResponseSchema },
        errorFactory: ThePlaidApiClient.SandboxTransferTestClockCreateError,
      },
      options,
    );
  }

  /**
   * Get a test clock
   *
   * @remarks
   * Use the `/sandbox/transfer/test_clock/get` endpoint to get a `test_clock` in the Sandbox
   * environment.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.SandboxTransferTestClockGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sandboxTransferTestClockGet(
    request: ThePlaidApiClient.SandboxTransferTestClockGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SandboxTransferTestClockGetResponse, ThePlaidApiClient.SandboxTransferTestClockGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sandbox/transfer/test_clock/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: sandboxTransferTestClockGetRequestSchema },
      },
      {
        success: { kind: "json", schema: sandboxTransferTestClockGetResponseSchema },
        errorFactory: ThePlaidApiClient.SandboxTransferTestClockGetError,
      },
      options,
    );
  }

  /**
   * List test clocks
   *
   * @remarks
   * Use the `/sandbox/transfer/test_clock/list` endpoint to see a list of all your test clocks in
   * the Sandbox environment, by ascending `virtual_time`. Results are paginated; use the `count`
   * and `offset` query parameters to retrieve the desired test clocks.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.SandboxTransferTestClockListError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sandboxTransferTestClockList(
    request: ThePlaidApiClient.SandboxTransferTestClockListRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SandboxTransferTestClockListResponse, ThePlaidApiClient.SandboxTransferTestClockListError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sandbox/transfer/test_clock/list"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: sandboxTransferTestClockListRequestSchema },
      },
      {
        success: { kind: "json", schema: sandboxTransferTestClockListResponseSchema },
        errorFactory: ThePlaidApiClient.SandboxTransferTestClockListError,
      },
      options,
    );
  }

  /**
   * Force item(s) for a Sandbox User into an error state
   *
   * @remarks
   * `/sandbox/user/reset_login` functions the same as `/sandbox/item/reset_login`, but will modify
   * Items related to a User. This endpoint forces each Item into an `ITEM_LOGIN_REQUIRED` state in
   * order to simulate an Item whose login is no longer valid. This makes it easy to test Link's
   * [update mode](https://plaid.com/docs/link/update-mode) flow in the Sandbox environment. After
   * calling `/sandbox/user/reset_login`, you can then use Plaid Link update mode to restore Items
   * associated with the User to a good state. An `ITEM_LOGIN_REQUIRED` webhook will also be fired
   * after a call to this endpoint, if one is associated with the Item. In the Sandbox, Items will
   * transition to an `ITEM_LOGIN_REQUIRED` error state automatically after 30 days, even if this
   * endpoint is not called.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.SandboxUserResetLoginError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sandboxUserResetLogin(
    request: ThePlaidApiClient.SandboxUserResetLoginRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SandboxUserResetLoginResponse, ThePlaidApiClient.SandboxUserResetLoginError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sandbox/user/reset_login"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: sandboxUserResetLoginRequestSchema },
      },
      {
        success: { kind: "json", schema: sandboxUserResetLoginResponseSchema },
        errorFactory: ThePlaidApiClient.SandboxUserResetLoginError,
      },
      options,
    );
  }

  /**
   * Create a Link token for Layer
   *
   * @remarks
   * `/session/token/create` is used to create a Link token for Layer. The returned Link token is
   * used as a parameter when initializing the Link SDK. For more details, see the [Link flow
   * overview](https://plaid.com/docs/link/#link-flow-overview).
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.SessionTokenCreateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sessionTokenCreate(
    request: ThePlaidApiClient.SessionTokenCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SessionTokenCreateResponse, ThePlaidApiClient.SessionTokenCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/session/token/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: sessionTokenCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: sessionTokenCreateResponseSchema },
        errorFactory: ThePlaidApiClient.SessionTokenCreateError,
      },
      options,
    );
  }

  /**
   * Report whether you initiated an ACH transaction
   *
   * @remarks
   * After you call `/signal/evaluate`, Plaid will normally infer the outcome from your Signal
   * Rules. However, if you are not using Signal Rules, if the Signal Rules outcome was `REVIEW`, or
   * if you take a different action than the one determined by the Signal Rules, you will need to
   * call `/signal/decision/report`. This helps improve Signal Transaction Score accuracy for your
   * account and is necessary for proper functioning of the rule performance and rule tuning
   * capabilities in the Dashboard. If your effective decision changes after calling
   * `/signal/decision/report` (for example, you indicated that you accepted a transaction, but
   * later on, your payment processor rejected it, so it was never initiated), call
   * `/signal/decision/report` again for the transaction to correct Plaid's records.
   *
   * If you are using Plaid Transfer as your payment processor, you also do not need to call
   * `/signal/decision/report`, as Plaid can infer outcomes from your Transfer activity.
   *
   * If using a Balance-only ruleset, this endpoint will not impact scores (Balance does not use
   * scores), but is necessary to view accurate transaction outcomes and tune rule logic in the
   * Dashboard.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.SignalDecisionReportError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  signalDecisionReport(
    request: ThePlaidApiClient.SignalDecisionReportRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SignalDecisionReportResponse, ThePlaidApiClient.SignalDecisionReportError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/signal/decision/report"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: signalDecisionReportRequestSchema },
      },
      {
        success: { kind: "json", schema: signalDecisionReportResponseSchema },
        errorFactory: ThePlaidApiClient.SignalDecisionReportError,
      },
      options,
    );
  }

  /**
   * Evaluate a planned ACH transaction
   *
   * @remarks
   * Use `/signal/evaluate` to evaluate a planned ACH transaction to get a return risk assessment
   * and additional risk signals.
   *
   * Before using `/signal/evaluate`, you must first [create a
   * ruleset](https://plaid.com/docs/signal/signal-rules/) in the Dashboard under
   * [**Signal->Rules**](https://dashboard.plaid.com/signal/risk-profiles).
   *
   * `/signal/evaluate` can be used with either Signal Transaction Scores or the Balance product.
   * Which product is used will be determined by the `ruleset_key` that you provide. For more
   * details, see [Signal Rules](https://plaid.com/docs/signal/signal-rules/).
   *
   * Note: This request may have higher latency when using a Balance-only ruleset. This is because
   * Plaid must communicate directly with the institution to request data. Balance-only rulesets may
   * have latency of up to 30 seconds or more; if you encounter errors, you may find it necessary to
   * adjust your timeout period when making requests.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.SignalEvaluateError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  signalEvaluate(
    request: ThePlaidApiClient.SignalEvaluateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SignalEvaluateResponse, ThePlaidApiClient.SignalEvaluateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/signal/evaluate"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: signalEvaluateRequestSchema },
      },
      {
        success: { kind: "json", schema: signalEvaluateResponseSchema },
        errorFactory: ThePlaidApiClient.SignalEvaluateError,
      },
      options,
    );
  }

  /**
   * Opt-in an Item to Signal Transaction Scores
   *
   * @remarks
   * When an Item is not initialized with `signal`, call `/signal/prepare` to opt-in that Item to
   * the data collection process used to develop a Signal Transaction Score. This should be done on
   * Items where `signal` was added in the `additional_consented_products` array but not in the
   * `products`, `optional_products`, or `required_if_supported_products` array. If
   * `/signal/prepare` is skipped on an Item that is not initialized with `signal`, the initial call
   * to `/signal/evaluate` on that Item will be less accurate, because Plaid will have access to
   * less data for computing the Signal Transaction Score.
   *
   * If your integration is purely Balance-only, this endpoint will have no effect, as Balance-only
   * rulesets do not calculate a Signal Transaction Score.
   *
   * If run on an Item that is already initialized with `signal`, this endpoint will return a 200
   * response and will not modify the Item.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.SignalPrepareError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  signalPrepare(
    request: ThePlaidApiClient.SignalPrepareRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SignalPrepareResponse, ThePlaidApiClient.SignalPrepareError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/signal/prepare"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: signalPrepareRequestSchema },
      },
      {
        success: { kind: "json", schema: signalPrepareResponseSchema },
        errorFactory: ThePlaidApiClient.SignalPrepareError,
      },
      options,
    );
  }

  /**
   * Report a return for an ACH transaction
   *
   * @remarks
   * Call the `/signal/return/report` endpoint to report a returned transaction that was previously
   * sent to the `/signal/evaluate` endpoint. Your feedback will be used by the model to incorporate
   * the latest risk trends into your scores and tune rule logic. If using a Balance-only ruleset,
   * this endpoint will not impact scores (as Balance does not use scores), but is necessary to view
   * accurate transaction outcomes and tune rule logic in the Dashboard.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.SignalReturnReportError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  signalReturnReport(
    request: ThePlaidApiClient.SignalReturnReportRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SignalReturnReportResponse, ThePlaidApiClient.SignalReturnReportError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/signal/return/report"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: signalReturnReportRequestSchema },
      },
      {
        success: { kind: "json", schema: signalReturnReportResponseSchema },
        errorFactory: ThePlaidApiClient.SignalReturnReportError,
      },
      options,
    );
  }

  /**
   * Schedule a planned ACH transaction
   *
   * @remarks
   * Use `/signal/schedule` to schedule a planned ACH transaction.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.SignalScheduleError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  signalSchedule(
    request: ThePlaidApiClient.SignalScheduleRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SignalScheduleResponse, ThePlaidApiClient.SignalScheduleError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/signal/schedule"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: signalScheduleRequestSchema },
      },
      {
        success: { kind: "json", schema: signalScheduleResponseSchema },
        errorFactory: ThePlaidApiClient.SignalScheduleError,
      },
      options,
    );
  }

  /**
   * Retrieve a single statement.
   *
   * @remarks
   * The `/statements/download` endpoint retrieves a single statement PDF in binary format. The
   * response will contain a `Plaid-Content-Hash` header containing a SHA 256 checksum of the
   * statement. This can be used to verify that the file being sent by Plaid is the same file that
   * was downloaded to your system.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.StatementsDownloadError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  statementsDownload(
    request: ThePlaidApiClient.StatementsDownloadRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, ThePlaidApiClient.StatementsDownloadError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/statements/download"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: statementsDownloadRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: ThePlaidApiClient.StatementsDownloadError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of all statements associated with an Item.
   *
   * @remarks
   * The `/statements/list` endpoint retrieves a list of all statements associated with an Item.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.StatementsListError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  statementsList(
    request: ThePlaidApiClient.StatementsListRequestParams,
    options?: RequestOptions,
  ): ApiPromise<StatementsListResponse, ThePlaidApiClient.StatementsListError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/statements/list"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: statementsListRequestSchema },
      },
      {
        success: { kind: "json", schema: statementsListResponseSchema },
        errorFactory: ThePlaidApiClient.StatementsListError,
      },
      options,
    );
  }

  /**
   * Refresh statements data.
   *
   * @remarks
   * `/statements/refresh` initiates an on-demand extraction to fetch the statements for the
   * provided dates.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.StatementsRefreshError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  statementsRefresh(
    request: ThePlaidApiClient.StatementsRefreshRequestParams,
    options?: RequestOptions,
  ): ApiPromise<StatementsRefreshResponse, ThePlaidApiClient.StatementsRefreshError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/statements/refresh"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: statementsRefreshRequestSchema },
      },
      {
        success: { kind: "json", schema: statementsRefreshResponseSchema },
        errorFactory: ThePlaidApiClient.StatementsRefreshError,
      },
      options,
    );
  }

  /**
   * Enhance locally-held transaction data
   *
   * @remarks
   * The `/beta/transactions/v1/enhance` endpoint enriches raw transaction data provided directly by
   * clients.
   *
   * The product is currently in beta.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.TransactionsEnhanceError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  transactionsEnhance(
    request: ThePlaidApiClient.TransactionsEnhanceRequest,
    options?: RequestOptions,
  ): ApiPromise<TransactionsEnhanceGetResponse, ThePlaidApiClient.TransactionsEnhanceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/beta/transactions/v1/enhance"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: transactionsEnhanceGetRequestSchema },
      },
      {
        success: { kind: "json", schema: transactionsEnhanceGetResponseSchema },
        errorFactory: ThePlaidApiClient.TransactionsEnhanceError,
      },
      options,
    );
  }

  /**
   * Enrich locally-held transaction data
   *
   * @remarks
   * The `/transactions/enrich` endpoint enriches raw transaction data generated by your own banking
   * products or retrieved from other non-Plaid sources.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.TransactionsEnrichError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  transactionsEnrich(
    request: ThePlaidApiClient.TransactionsEnrichRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransactionsEnrichResponse, ThePlaidApiClient.TransactionsEnrichError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/transactions/enrich"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: transactionsEnrichRequestSchema },
      },
      {
        success: { kind: "json", schema: transactionsEnrichResponseSchema },
        errorFactory: ThePlaidApiClient.TransactionsEnrichError,
      },
      options,
    );
  }

  /**
   * Get transaction data
   *
   * @remarks
   * Note: All new implementations are encouraged to use `/transactions/sync` rather than
   * `/transactions/get`. `/transactions/sync` provides the same functionality as
   * `/transactions/get` and improves developer ease-of-use for handling transactions updates. The
   * `/transactions/get` endpoint allows developers to receive user-authorized transaction data for
   * credit, depository, and some loan-type accounts (only those with account subtype `student` or
   * `mortgage`; coverage may be limited). For transaction history from investment accounts, use the
   * [Investments endpoint](https://plaid.com/docs/api/products/investments/) instead. Transaction
   * data is standardized across financial institutions, and in many cases transactions are linked
   * to a clean name, entity type, location, and category. Similarly, account data is standardized
   * and returned with a clean name, number, balance, and other meta information where available.
   * Transactions are returned in reverse-chronological order, and the sequence of transaction
   * ordering is stable and will not shift. Transactions are not immutable and can also be removed
   * altogether by the institution; a removed transaction will no longer appear in
   * `/transactions/get`. For more details, see [Pending and posted
   * transactions](https://plaid.com/docs/transactions/transactions-data/#pending-and-posted-transactions).
   * Due to the potentially large number of transactions associated with an Item, results are
   * paginated. Manipulate the `count` and `offset` parameters in conjunction with the
   * `total_transactions` response body field to fetch all available transactions. Data returned by
   * `/transactions/get` will be the data available for the Item as of the most recent successful
   * check for new transactions. Plaid typically checks for new data multiple times a day, but these
   * checks may occur less frequently, such as once a day, depending on the institution. To find out
   * when the Item was last updated, use the [Item
   * Debugger](https://plaid.com/docs/account/activity/#troubleshooting-with-item-debugger) or call
   * `/item/get`; the `item.status.transactions.last_successful_update` field will show the
   * timestamp of the most recent successful update. To force Plaid to check for new transactions,
   * you can use the `/transactions/refresh` endpoint.
   *
   *
   * Note that data may not be immediately available to `/transactions/get`. Plaid will begin to
   * prepare transactions data upon Item link, if Link was initialized with `transactions`, or upon
   * the first call to `/transactions/get`, if it wasn't. To be alerted when transaction data is
   * ready to be fetched, listen for the
   * [`INITIAL_UPDATE`](https://plaid.com/docs/api/products/transactions/#initial_update) and
   * [`HISTORICAL_UPDATE`](https://plaid.com/docs/api/products/transactions/#historical_update)
   * webhooks. If no transaction history is ready when `/transactions/get` is called, it will return
   * a `PRODUCT_NOT_READY` error.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.TransactionsGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  transactionsGet(
    request: ThePlaidApiClient.TransactionsGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransactionsGetResponse, ThePlaidApiClient.TransactionsGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/transactions/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: transactionsGetRequestSchema },
      },
      {
        success: { kind: "json", schema: transactionsGetResponseSchema },
        errorFactory: ThePlaidApiClient.TransactionsGetError,
      },
      options,
    );
  }

  /**
   * Fetch recurring transaction streams
   *
   * @remarks
   * The `/transactions/recurring/get` endpoint allows developers to receive a summary of the
   * recurring outflow and inflow streams (expenses and deposits) from a user's checking, savings or
   * credit card accounts. Additionally, Plaid provides key insights about each recurring stream
   * including the category, merchant, last amount, and more. Developers can use these insights to
   * build tools and experiences that help their users better manage cash flow, monitor
   * subscriptions, reduce spend, and stay on track with bill payments.
   *
   * This endpoint is offered as an add-on to Transactions. To request access to this endpoint,
   * submit a [product access request](https://dashboard.plaid.com/team/products) or contact your
   * Plaid account manager.
   *
   * This endpoint can only be called on an Item that has already been initialized with Transactions
   * (either during Link, by specifying it in `/link/token/create`; or after Link, by calling
   * `/transactions/get` or `/transactions/sync`).
   *
   * When using Recurring Transactions, for best results, make sure to use the
   * [`days_requested`](https://plaid.com/docs/api/link/#link-token-create-request-transactions-days-requested)
   * parameter to request at least 180 days of history when initializing Items with Transactions.
   * Once all historical transactions have been fetched, call `/transactions/recurring/get` to
   * receive the Recurring Transactions streams and subscribe to the
   * [`RECURRING_TRANSACTIONS_UPDATE`](https://plaid.com/docs/api/products/transactions/#recurring_transactions_update)
   * webhook. To know when historical transactions have been fetched, if you are using
   * `/transactions/sync` listen for the
   * [`SYNC_UPDATES_AVAILABLE`](https://plaid.com/docs/api/products/transactions/#SyncUpdatesAvailableWebhook-historical-update-complete)
   * webhook and check that the `historical_update_complete` field in the payload is `true`. If
   * using `/transactions/get`, listen for the
   * [`HISTORICAL_UPDATE`](https://plaid.com/docs/api/products/transactions/#historical_update)
   * webhook.
   *
   * After the initial call, you can call the `/transactions/recurring/get` endpoint at any point in
   * the future to retrieve the latest summary of recurring streams. Listen to the
   * [`RECURRING_TRANSACTIONS_UPDATE`](https://plaid.com/docs/api/products/transactions/#recurring_transactions_update)
   * webhook to be notified when new updates are available.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.TransactionsRecurringGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  transactionsRecurringGet(
    request: ThePlaidApiClient.TransactionsRecurringGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransactionsRecurringGetResponse, ThePlaidApiClient.TransactionsRecurringGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/transactions/recurring/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: transactionsRecurringGetRequestSchema },
      },
      {
        success: { kind: "json", schema: transactionsRecurringGetResponseSchema },
        errorFactory: ThePlaidApiClient.TransactionsRecurringGetError,
      },
      options,
    );
  }

  /**
   * Refresh transaction data
   *
   * @remarks
   * `/transactions/refresh` is an optional endpoint that initiates an on-demand extraction to fetch
   * the newest transactions for an Item. The on-demand extraction takes place in addition to the
   * periodic extractions that automatically occur one or more times per day for any
   * Transactions-enabled Item. The Item must already have Transactions added as a product in order
   * to call `/transactions/refresh`.
   *
   * If changes to transactions are discovered after calling `/transactions/refresh`, Plaid will
   * fire a webhook: for `/transactions/sync` users,
   * [`SYNC_UPDATES_AVAILABLE`](https://plaid.com/docs/api/products/transactions/#sync_updates_available)
   * will be fired if there are any transactions updated, added, or removed. For users of both
   * `/transactions/sync` and `/transactions/get`,
   * [`TRANSACTIONS_REMOVED`](https://plaid.com/docs/api/products/transactions/#transactions_removed)
   * will be fired if any removed transactions are detected, and
   * [`DEFAULT_UPDATE`](https://plaid.com/docs/api/products/transactions/#default_update) will be
   * fired if any new transactions are detected. New transactions can be fetched by calling
   * `/transactions/get` or `/transactions/sync`.
   *
   * Note that the `/transactions/refresh` endpoint is not supported for Capital One (`ins_128026`)
   * non-depository accounts and will result in a `PRODUCTS_NOT_SUPPORTED` error if called on an
   * Item that contains only non-depository accounts from that institution.
   *
   * As this endpoint triggers a synchronous request for fresh data, latency may be higher than for
   * other Plaid endpoints (typically less than 10 seconds, but occasionally up to 30 seconds or
   * more); if you encounter errors, you may find it necessary to adjust your timeout period when
   * making requests.
   *
   * `/transactions/refresh` is offered as an optional add-on to Transactions and has a separate
   * [fee model](https://plaid.com/docs/account/billing/#per-request-flat-fee). To request access to
   * this endpoint, submit a [product access request](https://dashboard.plaid.com/team/products) or
   * contact your Plaid account manager.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.TransactionsRefreshError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  transactionsRefresh(
    request: ThePlaidApiClient.TransactionsRefreshRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransactionsRefreshResponse, ThePlaidApiClient.TransactionsRefreshError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/transactions/refresh"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: transactionsRefreshRequestSchema },
      },
      {
        success: { kind: "json", schema: transactionsRefreshResponseSchema },
        errorFactory: ThePlaidApiClient.TransactionsRefreshError,
      },
      options,
    );
  }

  /**
   * Create transaction category rule
   *
   * @remarks
   * The `/beta/transactions/rules/v1/create` endpoint creates transaction categorization rules.
   *
   * Rules will be applied on the Item's transactions returned in `/transactions/get` response.
   *
   * The product is currently in beta. To request access, contact transactions-feedback@plaid.com.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.TransactionsRulesCreateError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  transactionsRulesCreate(
    request: ThePlaidApiClient.TransactionsRulesCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransactionsRulesCreateResponse, ThePlaidApiClient.TransactionsRulesCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/beta/transactions/rules/v1/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: transactionsRulesCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: transactionsRulesCreateResponseSchema },
        errorFactory: ThePlaidApiClient.TransactionsRulesCreateError,
      },
      options,
    );
  }

  /**
   * Return a list of rules created for the Item associated with the access token.
   *
   * @remarks
   * The `/beta/transactions/rules/v1/list` returns a list of transaction rules created for the Item
   * associated with the access token.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.TransactionsRulesListError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  transactionsRulesList(
    request: ThePlaidApiClient.TransactionsRulesListRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransactionsRulesListResponse, ThePlaidApiClient.TransactionsRulesListError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/beta/transactions/rules/v1/list"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: transactionsRulesListRequestSchema },
      },
      {
        success: { kind: "json", schema: transactionsRulesListResponseSchema },
        errorFactory: ThePlaidApiClient.TransactionsRulesListError,
      },
      options,
    );
  }

  /**
   * Remove transaction rule
   *
   * @remarks
   * The `/beta/transactions/rules/v1/remove` endpoint is used to remove a transaction rule.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.TransactionsRulesRemoveError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  transactionsRulesRemove(
    request: ThePlaidApiClient.TransactionsRulesRemoveRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransactionsRulesRemoveResponse, ThePlaidApiClient.TransactionsRulesRemoveError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/beta/transactions/rules/v1/remove"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: transactionsRulesRemoveRequestSchema },
      },
      {
        success: { kind: "json", schema: transactionsRulesRemoveResponseSchema },
        errorFactory: ThePlaidApiClient.TransactionsRulesRemoveError,
      },
      options,
    );
  }

  /**
   * Get incremental transaction updates on an Item
   *
   * @remarks
   * The `/transactions/sync` endpoint retrieves transactions associated with an Item and can fetch
   * updates using a cursor to track which updates have already been seen.
   *
   * For important instructions on integrating with `/transactions/sync`, see the [Transactions
   * integration overview](https://plaid.com/docs/transactions/#integration-overview). If you are
   * migrating from an existing integration using `/transactions/get`, see the [Transactions Sync
   * migration guide](https://plaid.com/docs/transactions/sync-migration/).
   *
   * This endpoint supports `credit`, `depository`, and some `loan`-type accounts (only those with
   * account subtype `student` or `mortgage`). For `investments` accounts, use
   * `/investments/transactions/get` instead.
   *
   * When retrieving paginated updates, track both the `next_cursor` from the latest response and
   * the original cursor from the first call in which `has_more` was `true`; if a call to
   * `/transactions/sync` fails when retrieving a paginated update (e.g. due to the
   * [`TRANSACTIONS_SYNC_MUTATION_DURING_PAGINATION`](https://plaid.com/docs/errors/transactions/#transactions_sync_mutation_during_pagination)
   * error), the entire pagination request loop must be restarted beginning with the cursor for the
   * first page of the update, rather than retrying only the single request that failed.
   *
   * If transactions data is not yet available for the Item, which can happen if the Item was not
   * initialized with transactions during the `/link/token/create` call or if `/transactions/sync`
   * was called within a few seconds of Item creation, `/transactions/sync` will return empty
   * transactions arrays.
   *
   * Plaid typically checks for new transactions data between one and four times per day, depending
   * on the institution. To find out when transactions were last updated for an Item, use the [Item
   * Debugger](https://plaid.com/docs/account/activity/#troubleshooting-with-item-debugger) or call
   * `/item/get`; the `item.status.transactions.last_successful_update` field will show the
   * timestamp of the most recent successful update. To force Plaid to check for new transactions,
   * use the `/transactions/refresh` endpoint.
   *
   * To be alerted when new transactions are available, listen for the
   * [`SYNC_UPDATES_AVAILABLE`](https://plaid.com/docs/api/products/transactions/#sync_updates_available)
   * webhook.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.TransactionsSyncError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  transactionsSync(
    request: ThePlaidApiClient.TransactionsSyncRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransactionsSyncResponse, ThePlaidApiClient.TransactionsSyncError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/transactions/sync"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: transactionsSyncRequestSchema },
      },
      {
        success: { kind: "json", schema: transactionsSyncResponseSchema },
        errorFactory: ThePlaidApiClient.TransactionsSyncError,
      },
      options,
    );
  }

  /**
   * Obtain user insights based on transactions sent through the transactions enrich endpoint
   *
   * @remarks
   * The `/beta/transactions/user_insights/v1/get` gets user insights for clients who have enriched
   * data with `/transactions/enrich`.
   *
   * The product is currently in beta.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.TransactionsUserInsightsGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  transactionsUserInsightsGet(
    request: ThePlaidApiClient.TransactionsUserInsightsGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransactionsUserInsightsGetResponse, ThePlaidApiClient.TransactionsUserInsightsGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/beta/transactions/user_insights/v1/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: transactionsUserInsightsGetRequestSchema },
      },
      {
        success: { kind: "json", schema: transactionsUserInsightsGetResponseSchema },
        errorFactory: ThePlaidApiClient.TransactionsUserInsightsGetError,
      },
      options,
    );
  }

  /**
   * Cancel a transfer authorization
   *
   * @remarks
   * Use the `/transfer/authorization/cancel` endpoint to cancel a transfer authorization. A
   * transfer authorization is eligible for cancellation if it has not yet been used to create a
   * transfer.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.TransferAuthorizationCancelError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  transferAuthorizationCancel(
    request: ThePlaidApiClient.TransferAuthorizationCancelRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransferAuthorizationCancelResponse, ThePlaidApiClient.TransferAuthorizationCancelError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/transfer/authorization/cancel"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: transferAuthorizationCancelRequestSchema },
      },
      {
        success: { kind: "json", schema: transferAuthorizationCancelResponseSchema },
        errorFactory: ThePlaidApiClient.TransferAuthorizationCancelError,
      },
      options,
    );
  }

  /**
   * Create a transfer authorization
   *
   * @remarks
   * Use the `/transfer/authorization/create` endpoint to authorize a transfer. This endpoint must
   * be called prior to calling `/transfer/create`. The transfer authorization will expire if not
   * used after one hour. (You can contact your account manager to change the default authorization
   * lifetime.)
   *
   * There are four possible outcomes to calling this endpoint:
   *
   *   - If the `authorization.decision` in the response is `declined`, the proposed transfer has
   *     failed the risk check and you cannot proceed with the transfer.
   *
   *   - If the `authorization.decision` is `user_action_required`, additional user input is needed,
   *     usually to fix a broken bank connection, before Plaid can properly assess the risk. You
   *     need to launch Link in update mode to complete the required user action. When calling
   *     `/link/token/create` to get a new Link token, instead of providing `access_token` in the
   *     request, you should set
   *     [`transfer.authorization_id`](https://plaid.com/docs/api/link/#link-token-create-request-transfer-authorization-id)
   *     as the `authorization.id`. After the Link flow is completed, you may re-attempt the
   *     authorization.
   *
   *   - If the `authorization.decision` is `approved`, and the
   *     `authorization.decision_rationale.code` is `null`, the transfer has passed the risk check
   *     and you can proceed to call `/transfer/create`.
   *
   *   - If the `authorization.decision` is `approved` and the
   *     `authorization.decision_rationale.code` is non-`null`, the risk check could not be run: you
   *     may proceed with the transfer, but should perform your own risk evaluation. For more
   *     details, see the response schema.
   *
   * In Plaid's Sandbox environment the decisions will be returned as follows:
   *
   *   - To approve a transfer with `null` rationale code, make an authorization request with an
   *     `amount` less than the available balance in the account.
   *
   *   - To approve a transfer with the rationale code `MANUALLY_VERIFIED_ITEM`, create an Item in
   *     Link through the [Same-Day Micro-deposits
   *     flow](https://plaid.com/docs/auth/coverage/testing/#testing-same-day-micro-deposits).
   *
   *   - To get an authorization decision of `user_action_required`, [reset the login for an
   *     Item](https://plaid.com/docs/sandbox/#item_login_required).
   *
   *   - To decline a transfer with the rationale code `NSF`, the available balance on the account
   *     must be less than the authorization `amount`. See [Create Sandbox test
   *     data](https://plaid.com/docs/sandbox/user-custom/) for details on how to customize data in
   *     Sandbox.
   *
   *   - To decline a transfer with the rationale code `RISK`, the available balance on the account
   *     must be exactly $0. See [Create Sandbox test
   *     data](https://plaid.com/docs/sandbox/user-custom/) for details on how to customize data in
   *     Sandbox.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.TransferAuthorizationCreateError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  transferAuthorizationCreate(
    request: ThePlaidApiClient.TransferAuthorizationCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransferAuthorizationCreateResponse, ThePlaidApiClient.TransferAuthorizationCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/transfer/authorization/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: transferAuthorizationCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: transferAuthorizationCreateResponseSchema },
        errorFactory: ThePlaidApiClient.TransferAuthorizationCreateError,
      },
      options,
    );
  }

  /**
   * (Deprecated) Retrieve a balance held with Plaid
   *
   * @remarks
   * (Deprecated) Use the `/transfer/ledger/get` endpoint to view a balance held with Plaid.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.TransferBalanceGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  transferBalanceGet(
    request: ThePlaidApiClient.TransferBalanceGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransferBalanceGetResponse, ThePlaidApiClient.TransferBalanceGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/transfer/balance/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: transferBalanceGetRequestSchema },
      },
      {
        success: { kind: "json", schema: transferBalanceGetResponseSchema },
        errorFactory: ThePlaidApiClient.TransferBalanceGetError,
      },
      options,
    );
  }

  /**
   * Cancel a transfer
   *
   * @remarks
   * Use the `/transfer/cancel` endpoint to cancel a transfer. A transfer is eligible for
   * cancellation if the `cancellable` property returned by `/transfer/get` is `true`.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.TransferCancelError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  transferCancel(
    request: ThePlaidApiClient.TransferCancelRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransferCancelResponse, ThePlaidApiClient.TransferCancelError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/transfer/cancel"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: transferCancelRequestSchema },
      },
      {
        success: { kind: "json", schema: transferCancelResponseSchema },
        errorFactory: ThePlaidApiClient.TransferCancelError,
      },
      options,
    );
  }

  /**
   * Get RTP eligibility information of a transfer
   *
   * @remarks
   * Use the `/transfer/capabilities/get` endpoint to determine the RTP eligibility information of
   * an account to be used with Transfer. This endpoint works on all Transfer-capable Items,
   * including those created by `/transfer/migrate_account`.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.TransferCapabilitiesGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  transferCapabilitiesGet(
    request: ThePlaidApiClient.TransferCapabilitiesGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransferCapabilitiesGetResponse, ThePlaidApiClient.TransferCapabilitiesGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/transfer/capabilities/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: transferCapabilitiesGetRequestSchema },
      },
      {
        success: { kind: "json", schema: transferCapabilitiesGetResponseSchema },
        errorFactory: ThePlaidApiClient.TransferCapabilitiesGetError,
      },
      options,
    );
  }

  /**
   * Get transfer product configuration
   *
   * @remarks
   * Use the `/transfer/configuration/get` endpoint to view your transfer product configurations.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.TransferConfigurationGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  transferConfigurationGet(
    request: ThePlaidApiClient.TransferConfigurationGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransferConfigurationGetResponse, ThePlaidApiClient.TransferConfigurationGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/transfer/configuration/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: transferConfigurationGetRequestSchema },
      },
      {
        success: { kind: "json", schema: transferConfigurationGetResponseSchema },
        errorFactory: ThePlaidApiClient.TransferConfigurationGetError,
      },
      options,
    );
  }

  /**
   * Create a transfer
   *
   * @remarks
   * Use the `/transfer/create` endpoint to initiate a new transfer. This endpoint is retryable and
   * idempotent; if a transfer with the provided `transfer_id` has already been created, it will
   * return the transfer details without creating a new transfer. A transfer may still be created if
   * a 500 error is returned; to detect this scenario, use [Transfer
   * events](https://plaid.com/docs/transfer/reconciling-transfers/).
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.TransferCreateError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  transferCreate(
    request: ThePlaidApiClient.TransferCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransferCreateResponse, ThePlaidApiClient.TransferCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/transfer/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: transferCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: transferCreateResponseSchema },
        errorFactory: ThePlaidApiClient.TransferCreateError,
      },
      options,
    );
  }

  /**
   * Upload transfer diligence document on behalf of the originator
   *
   * @remarks
   * Third-party sender customers can use the `/transfer/diligence/document/upload` endpoint to
   * upload a document on behalf of their end customer (i.e. originator) to Plaid. You'll need to
   * send a request of type `multipart/form-data`. You must provide the `client_id` in the
   * `PLAID-CLIENT-ID` header and `secret` in the `PLAID-SECRET` header.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.TransferDiligenceDocumentUploadError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/transfer/diligence/document/upload"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: transferDiligenceDocumentUploadRequestSchema },
      },
      {
        success: { kind: "json", schema: transferDiligenceDocumentUploadResponseSchema },
        errorFactory: ThePlaidApiClient.TransferDiligenceDocumentUploadError,
      },
      options,
    );
  }

  /**
   * Submit transfer diligence on behalf of the originator
   *
   * @remarks
   * Use the `/transfer/diligence/submit` endpoint to submit transfer diligence on behalf of the
   * originator (i.e., the end customer).
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.TransferDiligenceSubmitError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  transferDiligenceSubmit(
    request: ThePlaidApiClient.TransferDiligenceSubmitRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransferDiligenceSubmitResponse, ThePlaidApiClient.TransferDiligenceSubmitError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/transfer/diligence/submit"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: transferDiligenceSubmitRequestSchema },
      },
      {
        success: { kind: "json", schema: transferDiligenceSubmitResponseSchema },
        errorFactory: ThePlaidApiClient.TransferDiligenceSubmitError,
      },
      options,
    );
  }

  /**
   * List transfer events
   *
   * @remarks
   * Use the `/transfer/event/list` endpoint to get a list of transfer events based on specified
   * filter criteria.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.TransferEventListError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  transferEventList(
    request: ThePlaidApiClient.TransferEventListRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransferEventListResponse, ThePlaidApiClient.TransferEventListError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/transfer/event/list"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: transferEventListRequestSchema },
      },
      {
        success: { kind: "json", schema: transferEventListResponseSchema },
        errorFactory: ThePlaidApiClient.TransferEventListError,
      },
      options,
    );
  }

  /**
   * Sync transfer events
   *
   * @remarks
   * `/transfer/event/sync` allows you to request up to the next 500 transfer events that happened
   * after a specific `event_id`. Use the `/transfer/event/sync` endpoint to guarantee you have seen
   * all transfer events.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.TransferEventSyncError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  transferEventSync(
    request: ThePlaidApiClient.TransferEventSyncRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransferEventSyncResponse, ThePlaidApiClient.TransferEventSyncError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/transfer/event/sync"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: transferEventSyncRequestSchema },
      },
      {
        success: { kind: "json", schema: transferEventSyncResponseSchema },
        errorFactory: ThePlaidApiClient.TransferEventSyncError,
      },
      options,
    );
  }

  /**
   * Retrieve a transfer
   *
   * @remarks
   * The `/transfer/get` endpoint fetches information about the transfer corresponding to the given
   * `transfer_id` or `authorization_id`. One of `transfer_id` or `authorization_id` must be
   * populated but not both.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.TransferGetError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  transferGet(
    request: ThePlaidApiClient.TransferGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransferGetResponse, ThePlaidApiClient.TransferGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/transfer/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: transferGetRequestSchema },
      },
      {
        success: { kind: "json", schema: transferGetResponseSchema },
        errorFactory: ThePlaidApiClient.TransferGetError,
      },
      options,
    );
  }

  /**
   * Create a transfer intent object to invoke the Transfer UI
   *
   * @remarks
   * Use the `/transfer/intent/create` endpoint to generate a transfer intent object and invoke the
   * Transfer UI.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.TransferIntentCreateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  transferIntentCreate(
    request: ThePlaidApiClient.TransferIntentCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransferIntentCreateResponse, ThePlaidApiClient.TransferIntentCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/transfer/intent/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: transferIntentCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: transferIntentCreateResponseSchema },
        errorFactory: ThePlaidApiClient.TransferIntentCreateError,
      },
      options,
    );
  }

  /**
   * Retrieve more information about a transfer intent
   *
   * @remarks
   * Use the `/transfer/intent/get` endpoint to retrieve more information about a transfer intent.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.TransferIntentGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  transferIntentGet(
    request: ThePlaidApiClient.TransferIntentGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransferIntentGetResponse, ThePlaidApiClient.TransferIntentGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/transfer/intent/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: transferIntentGetRequestSchema },
      },
      {
        success: { kind: "json", schema: transferIntentGetResponseSchema },
        errorFactory: ThePlaidApiClient.TransferIntentGetError,
      },
      options,
    );
  }

  /**
   * Deposit funds into a Plaid Ledger balance
   *
   * @remarks
   * Use the `/transfer/ledger/deposit` endpoint to deposit funds into Plaid Ledger.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.TransferLedgerDepositError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  transferLedgerDeposit(
    request: ThePlaidApiClient.TransferLedgerDepositRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransferLedgerDepositResponse, ThePlaidApiClient.TransferLedgerDepositError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/transfer/ledger/deposit"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: transferLedgerDepositRequestSchema },
      },
      {
        success: { kind: "json", schema: transferLedgerDepositResponseSchema },
        errorFactory: ThePlaidApiClient.TransferLedgerDepositError,
      },
      options,
    );
  }

  /**
   * Move available balance between ledgers
   *
   * @remarks
   * Use the `/transfer/ledger/distribute` endpoint to move available balance between ledgers, if
   * you have multiple. If you're a platform, you can move funds between one of your ledgers and one
   * of your customer's ledgers.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.TransferLedgerDistributeError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  transferLedgerDistribute(
    request: ThePlaidApiClient.TransferLedgerDistributeRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransferLedgerDistributeResponse, ThePlaidApiClient.TransferLedgerDistributeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/transfer/ledger/distribute"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: transferLedgerDistributeRequestSchema },
      },
      {
        success: { kind: "json", schema: transferLedgerDistributeResponseSchema },
        errorFactory: ThePlaidApiClient.TransferLedgerDistributeError,
      },
      options,
    );
  }

  /**
   * List transfer ledger events
   *
   * @remarks
   * Use the `/transfer/ledger/event/list` endpoint to get a list of ledger events for a specific
   * ledger based on specified filter criteria.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.TransferLedgerEventListError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  transferLedgerEventList(
    request: ThePlaidApiClient.TransferLedgerEventListRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransferLedgerEventListResponse, ThePlaidApiClient.TransferLedgerEventListError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/transfer/ledger/event/list"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: transferLedgerEventListRequestSchema },
      },
      {
        success: { kind: "json", schema: transferLedgerEventListResponseSchema },
        errorFactory: ThePlaidApiClient.TransferLedgerEventListError,
      },
      options,
    );
  }

  /**
   * Retrieve Plaid Ledger balance
   *
   * @remarks
   * Use the `/transfer/ledger/get` endpoint to view a balance on the ledger held with Plaid.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.TransferLedgerGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  transferLedgerGet(
    request: ThePlaidApiClient.TransferLedgerGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransferLedgerGetResponse, ThePlaidApiClient.TransferLedgerGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/transfer/ledger/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: transferLedgerGetRequestSchema },
      },
      {
        success: { kind: "json", schema: transferLedgerGetResponseSchema },
        errorFactory: ThePlaidApiClient.TransferLedgerGetError,
      },
      options,
    );
  }

  /**
   * Withdraw funds from a Plaid Ledger balance
   *
   * @remarks
   * Use the `/transfer/ledger/withdraw` endpoint to withdraw funds from a Plaid Ledger balance.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.TransferLedgerWithdrawError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  transferLedgerWithdraw(
    request: ThePlaidApiClient.TransferLedgerWithdrawRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransferLedgerWithdrawResponse, ThePlaidApiClient.TransferLedgerWithdrawError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/transfer/ledger/withdraw"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: transferLedgerWithdrawRequestSchema },
      },
      {
        success: { kind: "json", schema: transferLedgerWithdrawResponseSchema },
        errorFactory: ThePlaidApiClient.TransferLedgerWithdrawError,
      },
      options,
    );
  }

  /**
   * List transfers
   *
   * @remarks
   * Use the `/transfer/list` endpoint to see a list of all your transfers and their statuses.
   * Results are paginated; use the `count` and `offset` query parameters to retrieve the desired
   * transfers.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.TransferListError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  transferList(
    request: ThePlaidApiClient.TransferListRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransferListResponse, ThePlaidApiClient.TransferListError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/transfer/list"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: transferListRequestSchema },
      },
      {
        success: { kind: "json", schema: transferListResponseSchema },
        errorFactory: ThePlaidApiClient.TransferListError,
      },
      options,
    );
  }

  /**
   * Get transfer product usage metrics
   *
   * @remarks
   * Use the `/transfer/metrics/get` endpoint to view your transfer product usage metrics.
   *
   * In the Sandbox environment, this endpoint returns static placeholder values rather than metrics
   * computed from your Sandbox transfer activity.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.TransferMetricsGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  transferMetricsGet(
    request: ThePlaidApiClient.TransferMetricsGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransferMetricsGetResponse, ThePlaidApiClient.TransferMetricsGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/transfer/metrics/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: transferMetricsGetRequestSchema },
      },
      {
        success: { kind: "json", schema: transferMetricsGetResponseSchema },
        errorFactory: ThePlaidApiClient.TransferMetricsGetError,
      },
      options,
    );
  }

  /**
   * Migrate account into Transfers
   *
   * @remarks
   * As an alternative to adding Items via Link, you can also use the `/transfer/migrate_account`
   * endpoint to migrate previously-verified account and routing numbers to Plaid Items. This
   * endpoint is also required when adding an Item for use with wire transfers; if you intend to
   * create wire transfers on this account, you must provide `wire_routing_number`. Note that Items
   * created in this way are not compatible with endpoints for other products, such as
   * `/accounts/balance/get`, and can only be used with Transfer endpoints. If you require access to
   * other endpoints, create the Item through Link instead. Access to `/transfer/migrate_account` is
   * not enabled by default; to obtain access, contact your Plaid account manager or
   * [support](https://dashboard.plaid.com/support).
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.TransferMigrateAccountError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  transferMigrateAccount(
    request: ThePlaidApiClient.TransferMigrateAccountRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransferMigrateAccountResponse, ThePlaidApiClient.TransferMigrateAccountError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/transfer/migrate_account"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: transferMigrateAccountRequestSchema },
      },
      {
        success: { kind: "json", schema: transferMigrateAccountResponseSchema },
        errorFactory: ThePlaidApiClient.TransferMigrateAccountError,
      },
      options,
    );
  }

  /**
   * Create a new originator
   *
   * @remarks
   * Use the `/transfer/originator/create` endpoint to create a new originator and return an
   * `originator_client_id`.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.TransferOriginatorCreateError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  transferOriginatorCreate(
    request: ThePlaidApiClient.TransferOriginatorCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransferOriginatorCreateResponse, ThePlaidApiClient.TransferOriginatorCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/transfer/originator/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: transferOriginatorCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: transferOriginatorCreateResponseSchema },
        errorFactory: ThePlaidApiClient.TransferOriginatorCreateError,
      },
      options,
    );
  }

  /**
   * Create a new funding account for an originator
   *
   * @remarks
   * Use the `/transfer/originator/funding_account/create` endpoint to create a new funding account
   * for the originator.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.TransferOriginatorFundingAccountCreateError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/transfer/originator/funding_account/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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

  /**
   * Update the funding account associated with the originator
   *
   * @remarks
   * Use the `/transfer/originator/funding_account/update` endpoint to update the funding account
   * associated with the originator.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.TransferOriginatorFundingAccountUpdateError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/transfer/originator/funding_account/update"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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

  /**
   * Get status of an originator's onboarding
   *
   * @remarks
   * The `/transfer/originator/get` endpoint gets status updates for an originator's onboarding
   * process. This information is also available via the Transfer page on the Plaid dashboard.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.TransferOriginatorGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  transferOriginatorGet(
    request: ThePlaidApiClient.TransferOriginatorGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransferOriginatorGetResponse, ThePlaidApiClient.TransferOriginatorGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/transfer/originator/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: transferOriginatorGetRequestSchema },
      },
      {
        success: { kind: "json", schema: transferOriginatorGetResponseSchema },
        errorFactory: ThePlaidApiClient.TransferOriginatorGetError,
      },
      options,
    );
  }

  /**
   * Get status of all originators' onboarding
   *
   * @remarks
   * The `/transfer/originator/list` endpoint gets status updates for all of your originators'
   * onboarding. This information is also available via the Plaid dashboard.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.TransferOriginatorListError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  transferOriginatorList(
    request: ThePlaidApiClient.TransferOriginatorListRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransferOriginatorListResponse, ThePlaidApiClient.TransferOriginatorListError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/transfer/originator/list"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: transferOriginatorListRequestSchema },
      },
      {
        success: { kind: "json", schema: transferOriginatorListResponseSchema },
        errorFactory: ThePlaidApiClient.TransferOriginatorListError,
      },
      options,
    );
  }

  /**
   * Create an originator for Transfer for Platforms customers
   *
   * @remarks
   * Use the `/transfer/platform/originator/create` endpoint to submit information about the
   * originator you are onboarding, including the originator's agreement to the required legal
   * terms.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.TransferPlatformOriginatorCreateError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/transfer/platform/originator/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: transferPlatformOriginatorCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: transferPlatformOriginatorCreateResponseSchema },
        errorFactory: ThePlaidApiClient.TransferPlatformOriginatorCreateError,
      },
      options,
    );
  }

  /**
   * Create a person associated with an originator
   *
   * @remarks
   * Use the `/transfer/platform/person/create` endpoint to create a person associated with an
   * originator (e.g. beneficial owner or control person) and optionally submit personal
   * identification information for them.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.TransferPlatformPersonCreateError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  transferPlatformPersonCreate(
    request: ThePlaidApiClient.TransferPlatformPersonCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransferPlatformPersonCreateResponse, ThePlaidApiClient.TransferPlatformPersonCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/transfer/platform/person/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: transferPlatformPersonCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: transferPlatformPersonCreateResponseSchema },
        errorFactory: ThePlaidApiClient.TransferPlatformPersonCreateError,
      },
      options,
    );
  }

  /**
   * Submit additional onboarding information on behalf of an originator
   *
   * @remarks
   * Use the `/transfer/platform/requirement/submit` endpoint to submit additional onboarding
   * information that is needed by Plaid to approve or decline the originator. See [Requirement type
   * schema
   * documentation](https://docs.google.com/document/d/1NEQkTD0sVK50iAQi6xHigrexDUxZ4QxXqSEfV_FFTiU/)
   * for a list of requirement types and possible values.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.TransferPlatformRequirementSubmitError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/transfer/platform/requirement/submit"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: transferPlatformRequirementSubmitRequestSchema },
      },
      {
        success: { kind: "json", schema: transferPlatformRequirementSubmitResponseSchema },
        errorFactory: ThePlaidApiClient.TransferPlatformRequirementSubmitError,
      },
      options,
    );
  }

  /**
   * Generate a Plaid-hosted onboarding UI URL.
   *
   * @remarks
   * The `/transfer/questionnaire/create` endpoint generates a Plaid-hosted onboarding UI URL.
   * Redirect the originator to this URL to provide their due diligence information and agree to
   * Plaid's terms for ACH money movement.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.TransferQuestionnaireCreateError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  transferQuestionnaireCreate(
    request: ThePlaidApiClient.TransferQuestionnaireCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransferQuestionnaireCreateResponse, ThePlaidApiClient.TransferQuestionnaireCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/transfer/questionnaire/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: transferQuestionnaireCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: transferQuestionnaireCreateResponseSchema },
        errorFactory: ThePlaidApiClient.TransferQuestionnaireCreateError,
      },
      options,
    );
  }

  /**
   * Cancel a recurring transfer.
   *
   * @remarks
   * Use the `/transfer/recurring/cancel` endpoint to cancel a recurring transfer. A scheduled
   * transfer that hasn't been submitted to the bank will be cancelled.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.TransferRecurringCancelError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  transferRecurringCancel(
    request: ThePlaidApiClient.TransferRecurringCancelRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransferRecurringCancelResponse, ThePlaidApiClient.TransferRecurringCancelError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/transfer/recurring/cancel"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: transferRecurringCancelRequestSchema },
      },
      {
        success: { kind: "json", schema: transferRecurringCancelResponseSchema },
        errorFactory: ThePlaidApiClient.TransferRecurringCancelError,
      },
      options,
    );
  }

  /**
   * Create a recurring transfer
   *
   * @remarks
   * Use the `/transfer/recurring/create` endpoint to initiate a new recurring transfer. This
   * capability is not currently supported for Transfer UI or Transfer for Platforms (beta)
   * customers.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.TransferRecurringCreateError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  transferRecurringCreate(
    request: ThePlaidApiClient.TransferRecurringCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransferRecurringCreateResponse, ThePlaidApiClient.TransferRecurringCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/transfer/recurring/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: transferRecurringCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: transferRecurringCreateResponseSchema },
        errorFactory: ThePlaidApiClient.TransferRecurringCreateError,
      },
      options,
    );
  }

  /**
   * Retrieve a recurring transfer
   *
   * @remarks
   * The `/transfer/recurring/get` fetches information about the recurring transfer corresponding to
   * the given `recurring_transfer_id`.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.TransferRecurringGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  transferRecurringGet(
    request: ThePlaidApiClient.TransferRecurringGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransferRecurringGetResponse, ThePlaidApiClient.TransferRecurringGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/transfer/recurring/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: transferRecurringGetRequestSchema },
      },
      {
        success: { kind: "json", schema: transferRecurringGetResponseSchema },
        errorFactory: ThePlaidApiClient.TransferRecurringGetError,
      },
      options,
    );
  }

  /**
   * List recurring transfers
   *
   * @remarks
   * Use the `/transfer/recurring/list` endpoint to see a list of all your recurring transfers and
   * their statuses. Results are paginated; use the `count` and `offset` query parameters to
   * retrieve the desired recurring transfers.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.TransferRecurringListError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  transferRecurringList(
    request: ThePlaidApiClient.TransferRecurringListRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransferRecurringListResponse, ThePlaidApiClient.TransferRecurringListError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/transfer/recurring/list"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: transferRecurringListRequestSchema },
      },
      {
        success: { kind: "json", schema: transferRecurringListResponseSchema },
        errorFactory: ThePlaidApiClient.TransferRecurringListError,
      },
      options,
    );
  }

  /**
   * Cancel a refund
   *
   * @remarks
   * Use the `/transfer/refund/cancel` endpoint to cancel a refund. A refund is eligible for
   * cancellation if it has not yet been submitted to the payment network.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.TransferRefundCancelError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  transferRefundCancel(
    request: ThePlaidApiClient.TransferRefundCancelRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransferRefundCancelResponse, ThePlaidApiClient.TransferRefundCancelError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/transfer/refund/cancel"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: transferRefundCancelRequestSchema },
      },
      {
        success: { kind: "json", schema: transferRefundCancelResponseSchema },
        errorFactory: ThePlaidApiClient.TransferRefundCancelError,
      },
      options,
    );
  }

  /**
   * Create a refund
   *
   * @remarks
   * Use the `/transfer/refund/create` endpoint to create a refund for a transfer. A transfer can be
   * refunded if the transfer was initiated in the past 180 days.
   *
   * Refunds come out of the available balance of the ledger used for the original debit transfer.
   * If there are not enough funds in the available balance to cover the refund amount, the refund
   * will be rejected. You can create a refund at any time. Plaid does not impose any hold time on
   * refunds.
   *
   * A refund can still be issued even if the Item's `access_token` is no longer valid (e.g. if the
   * user revoked OAuth consent or the Item was deleted via `/item/remove`), as long as the account
   * and routing number pair used to make the original transaction is still valid. A refund cannot
   * be issued if the Item has an [invalidated
   * TAN](https://plaid.com/docs/auth/#tokenized-account-numbers), which can occur at Chase or PNC.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.TransferRefundCreateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  transferRefundCreate(
    request: ThePlaidApiClient.TransferRefundCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransferRefundCreateResponse, ThePlaidApiClient.TransferRefundCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/transfer/refund/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: transferRefundCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: transferRefundCreateResponseSchema },
        errorFactory: ThePlaidApiClient.TransferRefundCreateError,
      },
      options,
    );
  }

  /**
   * Retrieve a refund
   *
   * @remarks
   * The `/transfer/refund/get` endpoint fetches information about the refund corresponding to the
   * given `refund_id`.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.TransferRefundGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  transferRefundGet(
    request: ThePlaidApiClient.TransferRefundGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransferRefundGetResponse, ThePlaidApiClient.TransferRefundGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/transfer/refund/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: transferRefundGetRequestSchema },
      },
      {
        success: { kind: "json", schema: transferRefundGetResponseSchema },
        errorFactory: ThePlaidApiClient.TransferRefundGetError,
      },
      options,
    );
  }

  /**
   * Lists historical repayments
   *
   * @remarks
   * The `/transfer/repayment/list` endpoint fetches repayments matching the given filters.
   * Repayments are returned in reverse-chronological order (most recent first) starting at the
   * given `start_time`.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.TransferRepaymentListError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  transferRepaymentList(
    request: ThePlaidApiClient.TransferRepaymentListRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransferRepaymentListResponse, ThePlaidApiClient.TransferRepaymentListError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/transfer/repayment/list"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: transferRepaymentListRequestSchema },
      },
      {
        success: { kind: "json", schema: transferRepaymentListResponseSchema },
        errorFactory: ThePlaidApiClient.TransferRepaymentListError,
      },
      options,
    );
  }

  /**
   * List the returns included in a repayment
   *
   * @remarks
   * The `/transfer/repayment/return/list` endpoint retrieves the set of returns that were batched
   * together into the specified repayment. The sum of amounts of returns retrieved by this request
   * equals the amount of the repayment.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.TransferRepaymentReturnListError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  transferRepaymentReturnList(
    request: ThePlaidApiClient.TransferRepaymentReturnListRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransferRepaymentReturnListResponse, ThePlaidApiClient.TransferRepaymentReturnListError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/transfer/repayment/return/list"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: transferRepaymentReturnListRequestSchema },
      },
      {
        success: { kind: "json", schema: transferRepaymentReturnListResponseSchema },
        errorFactory: ThePlaidApiClient.TransferRepaymentReturnListError,
      },
      options,
    );
  }

  /**
   * Report a return recovery
   *
   * @remarks
   * Use the `/transfer/return/recover` endpoint to notify Plaid that you have recovered some or all
   * of the loss on a returned guaranteed transfer.
   *
   * Recovery can be reported in full or in parts; the sum of recovered amounts across calls cannot
   * exceed the original transfer's amount.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.TransferReturnRecoverError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  transferReturnRecover(
    request: ThePlaidApiClient.TransferReturnRecoverRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransferReturnRecoverResponse, ThePlaidApiClient.TransferReturnRecoverError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/transfer/return/recover"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: transferReturnRecoverRequestSchema },
      },
      {
        success: { kind: "json", schema: transferReturnRecoverResponseSchema },
        errorFactory: ThePlaidApiClient.TransferReturnRecoverError,
      },
      options,
    );
  }

  /**
   * Retrieve a sweep
   *
   * @remarks
   * The `/transfer/sweep/get` endpoint fetches a sweep corresponding to the given `sweep_id`.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.TransferSweepGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  transferSweepGet(
    request: ThePlaidApiClient.TransferSweepGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransferSweepGetResponse, ThePlaidApiClient.TransferSweepGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/transfer/sweep/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: transferSweepGetRequestSchema },
      },
      {
        success: { kind: "json", schema: transferSweepGetResponseSchema },
        errorFactory: ThePlaidApiClient.TransferSweepGetError,
      },
      options,
    );
  }

  /**
   * List sweeps
   *
   * @remarks
   * The `/transfer/sweep/list` endpoint fetches sweeps matching the given filters.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.TransferSweepListError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  transferSweepList(
    request: ThePlaidApiClient.TransferSweepListRequestParams,
    options?: RequestOptions,
  ): ApiPromise<TransferSweepListResponse, ThePlaidApiClient.TransferSweepListError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/transfer/sweep/list"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: transferSweepListRequestSchema },
      },
      {
        success: { kind: "json", schema: transferSweepListResponseSchema },
        errorFactory: ThePlaidApiClient.TransferSweepListError,
      },
      options,
    );
  }

  /**
   * Send User Account Session Event
   *
   * @remarks
   * This endpoint allows sending client-specific events related to Layer sessions for analytics and
   * tracking purposes.
   *
   * @returns success
   *
   * @throws {@link ThePlaidApiClient.UserAccountSessionEventSendError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  userAccountSessionEventSend(
    request: ThePlaidApiClient.UserAccountSessionEventSendRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UserAccountSessionEventSendResponse, ThePlaidApiClient.UserAccountSessionEventSendError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/user_account/session/event/send"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: userAccountSessionEventSendRequestSchema },
      },
      {
        success: { kind: "json", schema: userAccountSessionEventSendResponseSchema },
        errorFactory: ThePlaidApiClient.UserAccountSessionEventSendError,
      },
      options,
    );
  }

  /**
   * Retrieve User Account
   *
   * @remarks
   * This endpoint returns user permissioned account data, including identity and Item access
   * tokens, for use with [Plaid Layer](https://plaid.com/docs/layer). Note that end users are
   * permitted to edit the prefilled identity data in the Link flow before sharing it with you; you
   * should treat any identity data returned by this endpoint as user-submitted, unverified data.
   * For a verification layer, you can add [Identity
   * Verification](https://plaid.com/docs/identity-verification/) to your flow, or check the
   * submitted identity data against bank account data from linked accounts using [Identity
   * Match](https://plaid.com/docs/identity/#identity-match).
   *
   * @returns success
   *
   * @throws {@link ThePlaidApiClient.UserAccountSessionGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  userAccountSessionGet(
    request: ThePlaidApiClient.UserAccountSessionGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UserAccountSessionGetResponse, ThePlaidApiClient.UserAccountSessionGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/user_account/session/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: userAccountSessionGetRequestSchema },
      },
      {
        success: { kind: "json", schema: userAccountSessionGetResponseSchema },
        errorFactory: ThePlaidApiClient.UserAccountSessionGetError,
      },
      options,
    );
  }

  /**
   * Create user
   *
   * @remarks
   * For Plaid products and flows that use the user object, `/user/create` provides you a single
   * token to access all data associated with the user. You must call this endpoint before calling
   * `/link/token/create` if you are using any of the following: Plaid Check, Income Verification,
   * Multi-Item Link, or Plaid Protect (Identity). If you are using Plaid Protect Link session
   * scoring, you do not need to call `/user/create` first; Plaid will resolve or create the user
   * when `user.client_user_id` is provided in `/link/token/create`. For customers who began using
   * this endpoint on or after December 10, 2025, this endpoint takes a `client_user_id` and an
   * `identity` object and will return a `user_id`. For customers who began using it before that
   * date, the endpoint takes a `client_user_id` and a `consumer_report_user_identity` object and
   * will return a `user_token` and `user_id`. For more details, see [New User
   * APIs](https://plaid.com/docs/api/users/user-apis). In order to create a Plaid Check Consumer
   * Report for a user, the `identity` (new) or `consumer_report_user_identity` (legacy) object must
   * be present. If it is not provided during the `/user/create` call, it can be added later by
   * calling `/user/update`.
   *
   *
   * In order to generate a Plaid Check Consumer Report, the following `identity` fields, at
   * minimum, are required and must be non-empty: `name`, `date_of_birth`, `emails`,
   * `phone_numbers`, and `addresses` (with at least one email, phone number, and address designated
   * as `primary`). Plaid Check Consumer Reports can only be created for US-based users; the user's
   * address country must be `US`. If creating a report for sharing with a GSE such as Fannie or
   * Freddie, the user's full SSN must be provided via the `id_numbers` field. Providing at least a
   * partial SSN is also strongly recommended for all use cases, since it improves the accuracy of
   * matching user records during compliance processes such as file disclosure, dispute, or security
   * freeze requests.
   *
   *
   * When using Plaid Protect, it is highly recommended that you provide an `identity` object to
   * better identify and block fraud across your Link sessions.
   *
   *
   * Plaid will normalize identity fields before storing them and utilize the same identity across
   * different user-based products.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.UserCreateError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  userCreate(
    request: ThePlaidApiClient.UserCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UserCreateResponse, ThePlaidApiClient.UserCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/user/create"),
        auth: anyAuth(
          allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
          this.#auth.oauth2,
        ),
        pathParams: [],
        query: [],
        headers: [
          {
            name: "Plaid-New-User-API-Enabled",
            value: request.plaidNewUserApiEnabled,
            schema: s.defaulted(s.boolean(), false),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
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

  /**
   * Refresh user items for Financial-Insights bundle
   *
   * @remarks
   * `/user/financial_data/refresh` is an optional endpoint that initiates an on-demand extraction
   * to fetch the newest transactions for a User using the Financial Insights bundle. This bundle
   * refreshes the Transactions, Investments, and Liabilities product data. This endpoint is for
   * clients who use the Financial Insights bundle and want to proactively update all linked Items
   * under a user. The refresh may succeed or fail on a per-Item basis. Use the `results` array in
   * the response to understand the outcome for each Item.
   *
   * This endpoint is distinct from `/transactions/refresh`, which triggers a refresh for a single
   * Item. Use `/user/financial_data/refresh` to target all Items for a user instead.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.UserFinancialDataRefreshError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  userFinancialDataRefresh(
    request: ThePlaidApiClient.UserFinancialDataRefreshRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UserFinancialDataRefreshResponse, ThePlaidApiClient.UserFinancialDataRefreshError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/user/financial_data/refresh"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: userFinancialDataRefreshRequestSchema },
      },
      {
        success: { kind: "json", schema: userFinancialDataRefreshResponseSchema },
        errorFactory: ThePlaidApiClient.UserFinancialDataRefreshError,
      },
      options,
    );
  }

  /**
   * Retrieve user identity and information
   *
   * @remarks
   * Get user details using a `user_id`. This endpoint only supports users that were created on the
   * new user API flow, without a `user_token`. For more details, see [New User
   * APIs](https://plaid.com/docs/api/users/user-apis).
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.UserGetError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  userGet(
    request: ThePlaidApiClient.UserGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UserGetResponse, ThePlaidApiClient.UserGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/user/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [
          {
            name: "Plaid-New-User-API-Enabled",
            value: request.plaidNewUserApiEnabled,
            schema: s.defaulted(s.boolean(), false),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
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

  /**
   * Remove user identity data
   *
   * @remarks
   * This endpoint allows customers to explicitly purge identity/PII data provided to Plaid for a
   * given user. This is not exposed to customers by default, as it is meant for special scenarios
   * or requests, but Plaid is obligated to enable customers to delete PII provided to us.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.UserIdentityRemoveError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  userIdentityRemove(
    request: ThePlaidApiClient.UserIdentityRemoveRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UserIdentityRemoveResponse, ThePlaidApiClient.UserIdentityRemoveError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/user/identity/remove"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [
          {
            name: "Plaid-New-User-API-Enabled",
            value: request.plaidNewUserApiEnabled,
            schema: s.defaulted(s.boolean(), false),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
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

  /**
   * Associate Items to a User
   *
   * @remarks
   * Associates Items to the target user. If an Item is already associated to another user, the Item
   * will be disassociated with the existing user and associated to the target user. This operation
   * supports a max of 100 Items.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.UserItemsAssociateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  userItemsAssociate(
    request: ThePlaidApiClient.UserItemsAssociateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UserItemsAssociateResponse, ThePlaidApiClient.UserItemsAssociateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/user/items/associate"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: userItemsAssociateRequestSchema },
      },
      {
        success: { kind: "json", schema: userItemsAssociateResponseSchema },
        errorFactory: ThePlaidApiClient.UserItemsAssociateError,
      },
      options,
    );
  }

  /**
   * Get Items associated with a User
   *
   * @remarks
   * Returns Items associated with a `user_id`, along with their corresponding statuses. Plaid
   * associates an Item with a User when it has been successfully connected within a Link session
   * initialized with that `user_id`.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.UserItemsGetError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  userItemsGet(
    request: ThePlaidApiClient.UserItemsGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UserItemsGetResponse, ThePlaidApiClient.UserItemsGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/user/items/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: userItemsGetRequestSchema },
      },
      {
        success: { kind: "json", schema: userItemsGetResponseSchema },
        errorFactory: ThePlaidApiClient.UserItemsGetError,
      },
      options,
    );
  }

  /**
   * Remove Items from a User
   *
   * @remarks
   * Removes specific Items associated with a user. It is equivalent to calling `/item/remove` on
   * each Item individually, but supports use cases (such as Plaid Check) where access tokens are
   * not available. All specified Items must belong to the user or the entire operation fails.
   * Similar to `/item/remove`, this deletes Item product data and terminates billing on the Item's
   * products. Once removed, Items cannot be reconnected without going through Link again. This
   * endpoint is not intended to remove all data for a user, as it will only remove Items and no
   * other data for the user. If the user has any user-based recurring subscription products
   * (Financial Management, Plaid Protect, or CRA Cash Flow Updates) and is deleting their account
   * with your product, also call `/user/products/terminate` to end those subscriptions; per-Item
   * billing is already terminated by this endpoint. For a user initiated data deletion request, see
   * the [Consumer Service Center](https://plaid.com/check/consumer-service-center/) to revoke
   * access to data.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.UserItemsRemoveError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  userItemsRemove(
    request: ThePlaidApiClient.UserItemsRemoveRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UserItemsRemoveResponse, ThePlaidApiClient.UserItemsRemoveError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/user/items/remove"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: userItemsRemoveRequestSchema },
      },
      {
        success: { kind: "json", schema: userItemsRemoveResponseSchema },
        errorFactory: ThePlaidApiClient.UserItemsRemoveError,
      },
      options,
    );
  }

  /**
   * Terminate user-based products
   *
   * @remarks
   * Terminates user-based recurring subscription bundles or products (Financial Management, Plaid
   * Protect, and CRA Cash Flow Updates) associated with a `user_id`. After you call this endpoint,
   * the user will no longer be billed for these products. For CRA Monitoring, the subscription is
   * canceled but historical data remains available for future report requests.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.UserProductsTerminateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  userProductsTerminate(
    request: ThePlaidApiClient.UserProductsTerminateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UserProductsTerminateResponse, ThePlaidApiClient.UserProductsTerminateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/user/products/terminate"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: userProductsTerminateRequestSchema },
      },
      {
        success: { kind: "json", schema: userProductsTerminateResponseSchema },
        errorFactory: ThePlaidApiClient.UserProductsTerminateError,
      },
      options,
    );
  }

  /**
   * Remove user
   *
   * @remarks
   * `/user/remove` deletes a `user_id` or `user_token` and associated information, including any
   * Items associated with the user.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.UserRemoveError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  userRemove(
    request: ThePlaidApiClient.UserRemoveRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UserRemoveResponse, ThePlaidApiClient.UserRemoveError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/user/remove"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [
          {
            name: "Plaid-New-User-API-Enabled",
            value: request.plaidNewUserApiEnabled,
            schema: s.defaulted(s.boolean(), false),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
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

  /**
   * Create a third-party user token
   *
   * @remarks
   * This endpoint is used to create a third-party user token. This token can be shared with and
   * used by a specified third-party client to access data associated with the user through
   * supported endpoints.
   *
   * Ensure you store the `third_party_user_token` along with the `user_token` and
   * `third_party_client_id`, as it is not possible to retrieve a previously created
   * `third_party_user_token`.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.UserThirdPartyTokenCreateError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  userThirdPartyTokenCreate(
    request: ThePlaidApiClient.UserThirdPartyTokenCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UserThirdPartyTokenCreateResponse, ThePlaidApiClient.UserThirdPartyTokenCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/user/third_party_token/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: userThirdPartyTokenCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: userThirdPartyTokenCreateResponseSchema },
        errorFactory: ThePlaidApiClient.UserThirdPartyTokenCreateError,
      },
      options,
    );
  }

  /**
   * Remove a third-party user token
   *
   * @remarks
   * This endpoint is used to delete a third-party user token. Once removed, the token can no longer
   * be used to access data associated with the user.
   *
   * Any subsequent calls to retrieve information using the same third-party user token will result
   * in an error stating the third-party user token does not exist.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.UserThirdPartyTokenRemoveError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  userThirdPartyTokenRemove(
    request: ThePlaidApiClient.UserThirdPartyTokenRemoveRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UserThirdPartyTokenRemoveResponse, ThePlaidApiClient.UserThirdPartyTokenRemoveError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/user/third_party_token/remove"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: userThirdPartyTokenRemoveRequestSchema },
      },
      {
        success: { kind: "json", schema: userThirdPartyTokenRemoveResponseSchema },
        errorFactory: ThePlaidApiClient.UserThirdPartyTokenRemoveError,
      },
      options,
    );
  }

  /**
   * Refresh user items for Transactions bundle
   *
   * @remarks
   * `/user/transactions/refresh` is an optional endpoint that initiates an on-demand extraction to
   * fetch the newest transactions for a User using the Transactions bundle. This bundle refreshes
   * only the Transactions product data. This endpoint is for clients who use the Transactions
   * Insights bundle and want to proactively update all linked Items under a user. The refresh may
   * succeed or fail on a per-Item basis. Use the `results` array in the response to understand the
   * outcome for each Item.
   *
   * This endpoint is distinct from `/transactions/refresh`, which triggers a refresh for a single
   * Item. Use `/user/transactions/refresh` to target all Items for a user instead.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.UserTransactionsRefreshError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  userTransactionsRefresh(
    request: ThePlaidApiClient.UserTransactionsRefreshRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UserTransactionsRefreshResponse, ThePlaidApiClient.UserTransactionsRefreshError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/user/transactions/refresh"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: userTransactionsRefreshRequestSchema },
      },
      {
        success: { kind: "json", schema: userTransactionsRefreshResponseSchema },
        errorFactory: ThePlaidApiClient.UserTransactionsRefreshError,
      },
      options,
    );
  }

  /**
   * Update user information
   *
   * @remarks
   * This endpoint updates user information for an existing `user_id` or `user_token`. If an
   * existing `user_id` or `user_token` is missing fields required for a given use case (e.g.
   * creating a Consumer Report) use `/user/update` to add values for those fields.
   *
   * Identity updates use merge semantics: provided fields overwrite existing ones; omitted fields
   * remain unchanged.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.UserUpdateError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  userUpdate(
    request: ThePlaidApiClient.UserUpdateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UserUpdateResponse, ThePlaidApiClient.UserUpdateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/user/update"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [
          {
            name: "Plaid-New-User-API-Enabled",
            value: request.plaidNewUserApiEnabled,
            schema: s.defaulted(s.boolean(), false),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
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

  /**
   * Create an e-wallet
   *
   * @remarks
   * Create an e-wallet. The response is the newly created e-wallet object.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.WalletCreateError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  walletCreate(
    request: ThePlaidApiClient.WalletCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<WalletCreateResponse, ThePlaidApiClient.WalletCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/wallet/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: walletCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: walletCreateResponseSchema },
        errorFactory: ThePlaidApiClient.WalletCreateError,
      },
      options,
    );
  }

  /**
   * Fetch an e-wallet
   *
   * @remarks
   * Fetch an e-wallet. The response includes the current balance.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.WalletGetError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  walletGet(
    request: ThePlaidApiClient.WalletGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<WalletGetResponse, ThePlaidApiClient.WalletGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/wallet/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: walletGetRequestSchema },
      },
      {
        success: { kind: "json", schema: walletGetResponseSchema },
        errorFactory: ThePlaidApiClient.WalletGetError,
      },
      options,
    );
  }

  /**
   * Fetch a list of e-wallets
   *
   * @remarks
   * This endpoint lists all e-wallets in descending order of creation.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.WalletListError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  walletList(
    request: ThePlaidApiClient.WalletListRequestParams,
    options?: RequestOptions,
  ): ApiPromise<WalletListResponse, ThePlaidApiClient.WalletListError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/wallet/list"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: walletListRequestSchema },
      },
      {
        success: { kind: "json", schema: walletListResponseSchema },
        errorFactory: ThePlaidApiClient.WalletListError,
      },
      options,
    );
  }

  /**
   * Execute a transaction using an e-wallet
   *
   * @remarks
   * Execute a transaction using the specified e-wallet. Specify the e-wallet to debit from, the
   * counterparty to credit to, the idempotency key to prevent duplicate transactions, the amount
   * and reference for the transaction. Transactions will settle in seconds to several days,
   * depending on the underlying payment rail.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.WalletTransactionExecuteError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  walletTransactionExecute(
    request: ThePlaidApiClient.WalletTransactionExecuteRequestParams,
    options?: RequestOptions,
  ): ApiPromise<WalletTransactionExecuteResponse, ThePlaidApiClient.WalletTransactionExecuteError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/wallet/transaction/execute"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: walletTransactionExecuteRequestSchema },
      },
      {
        success: { kind: "json", schema: walletTransactionExecuteResponseSchema },
        errorFactory: ThePlaidApiClient.WalletTransactionExecuteError,
      },
      options,
    );
  }

  /**
   * Fetch an e-wallet transaction
   *
   * @remarks
   * Fetch a specific e-wallet transaction
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.WalletTransactionGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  walletTransactionGet(
    request: ThePlaidApiClient.WalletTransactionGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<WalletTransactionGetResponse, ThePlaidApiClient.WalletTransactionGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/wallet/transaction/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: walletTransactionGetRequestSchema },
      },
      {
        success: { kind: "json", schema: walletTransactionGetResponseSchema },
        errorFactory: ThePlaidApiClient.WalletTransactionGetError,
      },
      options,
    );
  }

  /**
   * List e-wallet transactions
   *
   * @remarks
   * This endpoint lists the latest transactions of the specified e-wallet. Transactions are
   * returned in descending order by the `created_at` time.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.WalletTransactionListError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  walletTransactionList(
    request: ThePlaidApiClient.WalletTransactionListRequestParams,
    options?: RequestOptions,
  ): ApiPromise<WalletTransactionListResponse, ThePlaidApiClient.WalletTransactionListError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/wallet/transaction/list"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: walletTransactionListRequestSchema },
      },
      {
        success: { kind: "json", schema: walletTransactionListResponseSchema },
        errorFactory: ThePlaidApiClient.WalletTransactionListError,
      },
      options,
    );
  }

  /**
   * Create a watchlist screening for an entity
   *
   * @remarks
   * Create a new entity watchlist screening to check your customer against watchlists defined in
   * the associated entity watchlist program. If your associated program has ongoing screening
   * enabled, this is the profile information that will be used to monitor your customer over time.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  watchlistScreeningEntityCreate(
    request: ThePlaidApiClient.WatchlistScreeningEntityCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<WatchlistScreeningEntityCreateResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/watchlist_screening/entity/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: watchlistScreeningEntityCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: watchlistScreeningEntityCreateResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get an entity screening
   *
   * @remarks
   * Retrieve an entity watchlist screening.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  watchlistScreeningEntityGet(
    request: ThePlaidApiClient.WatchlistScreeningEntityGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<WatchlistScreeningEntityGetResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/watchlist_screening/entity/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: watchlistScreeningEntityGetRequestSchema },
      },
      {
        success: { kind: "json", schema: watchlistScreeningEntityGetResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List history for entity watchlist screenings
   *
   * @remarks
   * List all changes to the entity watchlist screening in reverse-chronological order. If the
   * watchlist screening has not been edited, no history will be returned.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  watchlistScreeningEntityHistoryList(
    request: ThePlaidApiClient.WatchlistScreeningEntityHistoryListRequestParams,
    options?: RequestOptions,
  ): ApiPromise<WatchlistScreeningEntityHistoryListResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/watchlist_screening/entity/history/list"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: watchlistScreeningEntityHistoryListRequestSchema },
      },
      {
        success: { kind: "json", schema: watchlistScreeningEntityHistoryListResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List hits for entity watchlist screenings
   *
   * @remarks
   * List all hits for the entity watchlist screening.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  watchlistScreeningEntityHitList(
    request: ThePlaidApiClient.WatchlistScreeningEntityHitListRequestParams,
    options?: RequestOptions,
  ): ApiPromise<WatchlistScreeningEntityHitListResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/watchlist_screening/entity/hit/list"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: watchlistScreeningEntityHitListRequestSchema },
      },
      {
        success: { kind: "json", schema: watchlistScreeningEntityHitListResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List entity watchlist screenings
   *
   * @remarks
   * List all entity screenings.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  watchlistScreeningEntityList(
    request: ThePlaidApiClient.WatchlistScreeningEntityListRequestParams,
    options?: RequestOptions,
  ): ApiPromise<WatchlistScreeningEntityListResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/watchlist_screening/entity/list"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: watchlistScreeningEntityListRequestSchema },
      },
      {
        success: { kind: "json", schema: watchlistScreeningEntityListResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get entity watchlist screening program
   *
   * @remarks
   * Get an entity watchlist screening program
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  watchlistScreeningEntityProgramGet(
    request: ThePlaidApiClient.WatchlistScreeningEntityProgramGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<WatchlistScreeningEntityProgramGetResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/watchlist_screening/entity/program/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: watchlistScreeningEntityProgramGetRequestSchema },
      },
      {
        success: { kind: "json", schema: watchlistScreeningEntityProgramGetResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List entity watchlist screening programs
   *
   * @remarks
   * List all entity watchlist screening programs
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  watchlistScreeningEntityProgramList(
    request: ThePlaidApiClient.WatchlistScreeningEntityProgramListRequestParams,
    options?: RequestOptions,
  ): ApiPromise<WatchlistScreeningEntityProgramListResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/watchlist_screening/entity/program/list"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: watchlistScreeningEntityProgramListRequestSchema },
      },
      {
        success: { kind: "json", schema: watchlistScreeningEntityProgramListResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Create a review for an entity watchlist screening
   *
   * @remarks
   * Create a review for an entity watchlist screening. Reviews are compliance reports created by
   * users in your organization regarding the relevance of potential hits found by Plaid.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  watchlistScreeningEntityReviewCreate(
    request: ThePlaidApiClient.WatchlistScreeningEntityReviewCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<WatchlistScreeningEntityReviewCreateResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/watchlist_screening/entity/review/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: watchlistScreeningEntityReviewCreateRequestSchema,
        },
      },
      {
        success: { kind: "json", schema: watchlistScreeningEntityReviewCreateResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List reviews for entity watchlist screenings
   *
   * @remarks
   * List all reviews for a particular entity watchlist screening. Reviews are compliance reports
   * created by users in your organization regarding the relevance of potential hits found by Plaid.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  watchlistScreeningEntityReviewList(
    request: ThePlaidApiClient.WatchlistScreeningEntityReviewListRequestParams,
    options?: RequestOptions,
  ): ApiPromise<WatchlistScreeningEntityReviewListResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/watchlist_screening/entity/review/list"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: watchlistScreeningEntityReviewListRequestSchema },
      },
      {
        success: { kind: "json", schema: watchlistScreeningEntityReviewListResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update an entity screening
   *
   * @remarks
   * Update an entity watchlist screening.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  watchlistScreeningEntityUpdate(
    request: ThePlaidApiClient.WatchlistScreeningEntityUpdateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<WatchlistScreeningEntityUpdateResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/watchlist_screening/entity/update"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: watchlistScreeningEntityUpdateRequestSchema },
      },
      {
        success: { kind: "json", schema: watchlistScreeningEntityUpdateResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Create a watchlist screening for a person
   *
   * @remarks
   * Create a new Watchlist Screening to check your customer against watchlists defined in the
   * associated Watchlist Program. If your associated program has ongoing screening enabled, this is
   * the profile information that will be used to monitor your customer over time.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  watchlistScreeningIndividualCreate(
    request: ThePlaidApiClient.WatchlistScreeningIndividualCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<WatchlistScreeningIndividualCreateResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/watchlist_screening/individual/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: watchlistScreeningIndividualCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: watchlistScreeningIndividualCreateResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve an individual watchlist screening
   *
   * @remarks
   * Retrieve a previously created individual watchlist screening
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  watchlistScreeningIndividualGet(
    request: ThePlaidApiClient.WatchlistScreeningIndividualGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<WatchlistScreeningIndividualGetResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/watchlist_screening/individual/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: watchlistScreeningIndividualGetRequestSchema },
      },
      {
        success: { kind: "json", schema: watchlistScreeningIndividualGetResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List history for individual watchlist screenings
   *
   * @remarks
   * List all changes to the individual watchlist screening in reverse-chronological order. If the
   * watchlist screening has not been edited, no history will be returned.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  watchlistScreeningIndividualHistoryList(
    request: ThePlaidApiClient.WatchlistScreeningIndividualHistoryListRequestParams,
    options?: RequestOptions,
  ): ApiPromise<WatchlistScreeningIndividualHistoryListResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/watchlist_screening/individual/history/list"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: watchlistScreeningIndividualHistoryListRequestSchema,
        },
      },
      {
        success: { kind: "json", schema: watchlistScreeningIndividualHistoryListResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List hits for individual watchlist screening
   *
   * @remarks
   * List all hits found by Plaid for a particular individual watchlist screening.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  watchlistScreeningIndividualHitList(
    request: ThePlaidApiClient.WatchlistScreeningIndividualHitListRequestParams,
    options?: RequestOptions,
  ): ApiPromise<WatchlistScreeningIndividualHitListResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/watchlist_screening/individual/hit/list"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: watchlistScreeningIndividualHitListRequestSchema },
      },
      {
        success: { kind: "json", schema: watchlistScreeningIndividualHitListResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List Individual Watchlist Screenings
   *
   * @remarks
   * List previously created watchlist screenings for individuals
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  watchlistScreeningIndividualList(
    request: ThePlaidApiClient.WatchlistScreeningIndividualListRequestParams,
    options?: RequestOptions,
  ): ApiPromise<WatchlistScreeningIndividualListResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/watchlist_screening/individual/list"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: watchlistScreeningIndividualListRequestSchema },
      },
      {
        success: { kind: "json", schema: watchlistScreeningIndividualListResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get individual watchlist screening program
   *
   * @remarks
   * Get an individual watchlist screening program
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  watchlistScreeningIndividualProgramGet(
    request: ThePlaidApiClient.WatchlistScreeningIndividualProgramGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<WatchlistScreeningIndividualProgramGetResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/watchlist_screening/individual/program/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: watchlistScreeningIndividualProgramGetRequestSchema,
        },
      },
      {
        success: { kind: "json", schema: watchlistScreeningIndividualProgramGetResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List individual watchlist screening programs
   *
   * @remarks
   * List all individual watchlist screening programs
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  watchlistScreeningIndividualProgramList(
    request: ThePlaidApiClient.WatchlistScreeningIndividualProgramListRequestParams,
    options?: RequestOptions,
  ): ApiPromise<WatchlistScreeningIndividualProgramListResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/watchlist_screening/individual/program/list"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: watchlistScreeningIndividualProgramListRequestSchema,
        },
      },
      {
        success: { kind: "json", schema: watchlistScreeningIndividualProgramListResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Create a review for an individual watchlist screening
   *
   * @remarks
   * Create a review for the individual watchlist screening. Reviews are compliance reports created
   * by users in your organization regarding the relevance of potential hits found by Plaid.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  watchlistScreeningIndividualReviewCreate(
    request: ThePlaidApiClient.WatchlistScreeningIndividualReviewCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<WatchlistScreeningIndividualReviewCreateResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/watchlist_screening/individual/review/create"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: watchlistScreeningIndividualReviewCreateRequestSchema,
        },
      },
      {
        success: { kind: "json", schema: watchlistScreeningIndividualReviewCreateResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List reviews for individual watchlist screenings
   *
   * @remarks
   * List all reviews for the individual watchlist screening.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  watchlistScreeningIndividualReviewList(
    request: ThePlaidApiClient.WatchlistScreeningIndividualReviewListRequestParams,
    options?: RequestOptions,
  ): ApiPromise<WatchlistScreeningIndividualReviewListResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/watchlist_screening/individual/review/list"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: watchlistScreeningIndividualReviewListRequestSchema,
        },
      },
      {
        success: { kind: "json", schema: watchlistScreeningIndividualReviewListResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update individual watchlist screening
   *
   * @remarks
   * Update a specific individual watchlist screening. This endpoint can be used to add additional
   * customer information, correct outdated information, add a reference id, assign the individual
   * to a reviewer, and update which program it is associated with. Please note that you may not
   * update `search_terms` and `status` at the same time since editing `search_terms` may trigger an
   * automatic `status` change.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  watchlistScreeningIndividualUpdate(
    request: ThePlaidApiClient.WatchlistScreeningIndividualUpdateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<WatchlistScreeningIndividualUpdateResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/watchlist_screening/individual/update"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: watchlistScreeningIndividualUpdateRequestSchema },
      },
      {
        success: { kind: "json", schema: watchlistScreeningIndividualUpdateResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get webhook verification key
   *
   * @remarks
   * Plaid signs all outgoing webhooks and provides JSON Web Tokens (JWTs) so that you can verify
   * the authenticity of any incoming webhooks to your application. A message signature is included
   * in the `Plaid-Verification` header.
   *
   * The `/webhook_verification_key/get` endpoint provides a JSON Web Key (JWK) that can be used to
   * verify a JWT.
   *
   * @returns OK
   *
   * @throws {@link ThePlaidApiClient.WebhookVerificationKeyGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ThePlaidApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  webhookVerificationKeyGet(
    request: ThePlaidApiClient.WebhookVerificationKeyGetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<WebhookVerificationKeyGetResponse, ThePlaidApiClient.WebhookVerificationKeyGetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/webhook_verification_key/get"),
        auth: allAuth(this.#auth.clientId, this.#auth.secret, this.#auth.plaidVersion),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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

  export class AccountsBalanceGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<AccountsBalanceGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type AccountsGetRequestParams = {
    body: AccountsGetRequest;
  };

  export class AccountsGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<AccountsGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ApplicationGetRequestParams = {
    body: ApplicationGetRequest;
  };

  export class ApplicationGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<ApplicationGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type AssetReportAuditCopyCreateRequestParams = {
    body: AssetReportAuditCopyCreateRequest;
  };

  export class AssetReportAuditCopyCreateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<AssetReportAuditCopyCreateError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type AssetReportAuditCopyGetRequestParams = {
    body: AssetReportAuditCopyGetRequest;
  };

  export class AssetReportAuditCopyGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<AssetReportAuditCopyGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type AssetReportAuditCopyPdfGetRequestParams = {
    body: AssetReportAuditCopyPdfGetRequest;
  };

  export class AssetReportAuditCopyPdfGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<AssetReportAuditCopyPdfGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type AssetReportAuditCopyRemoveRequestParams = {
    body: AssetReportAuditCopyRemoveRequest;
  };

  export class AssetReportAuditCopyRemoveError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<AssetReportAuditCopyRemoveError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type AssetReportCreateRequestParams = {
    body: AssetReportCreateRequest;
  };

  export class AssetReportCreateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<AssetReportCreateError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type AssetReportFilterRequestParams = {
    body: AssetReportFilterRequest;
  };

  export class AssetReportFilterError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<AssetReportFilterError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type AssetReportGetRequestParams = {
    body: AssetReportGetRequest;
  };

  export class AssetReportGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<AssetReportGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type AssetReportPdfGetRequestParams = {
    body: AssetReportPdfGetRequest;
  };

  export class AssetReportPdfGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<AssetReportPdfGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type AssetReportRefreshRequestParams = {
    body: AssetReportRefreshRequest;
  };

  export class AssetReportRefreshError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<AssetReportRefreshError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type AssetReportRemoveRequestParams = {
    body: AssetReportRemoveRequest;
  };

  export class AssetReportRemoveError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<AssetReportRemoveError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type AuthGetRequestParams = {
    body: AuthGetRequest;
  };

  export class AuthGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<AuthGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type AuthVerifyRequestParams = {
    body: AuthVerifyRequest;
  };

  export class AuthVerifyError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<AuthVerifyError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type BankTransferBalanceGetRequestParams = {
    body: BankTransferBalanceGetRequest;
  };

  export class BankTransferBalanceGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<BankTransferBalanceGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type BankTransferCancelRequestParams = {
    body: BankTransferCancelRequest;
  };

  export class BankTransferCancelError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<BankTransferCancelError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type BankTransferCreateRequestParams = {
    body: BankTransferCreateRequest;
  };

  export class BankTransferCreateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<BankTransferCreateError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type BankTransferEventListRequestParams = {
    body: BankTransferEventListRequest;
  };

  export class BankTransferEventListError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<BankTransferEventListError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type BankTransferEventSyncRequestParams = {
    body: BankTransferEventSyncRequest;
  };

  export class BankTransferEventSyncError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<BankTransferEventSyncError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type BankTransferGetRequestParams = {
    body: BankTransferGetRequest;
  };

  export class BankTransferGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<BankTransferGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type BankTransferListRequestParams = {
    body: BankTransferListRequest;
  };

  export class BankTransferListError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<BankTransferListError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type BankTransferMigrateAccountRequestParams = {
    body: BankTransferMigrateAccountRequest;
  };

  export class BankTransferMigrateAccountError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<BankTransferMigrateAccountError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type BankTransferSweepGetRequestParams = {
    body: BankTransferSweepGetRequest;
  };

  export class BankTransferSweepGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<BankTransferSweepGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type BankTransferSweepListRequestParams = {
    body: BankTransferSweepListRequest;
  };

  export class BankTransferSweepListError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<BankTransferSweepListError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type BeaconAccountRiskEvaluateRequestParams = {
    body: BeaconAccountRiskEvaluateRequest;
  };

  export class BeaconAccountRiskEvaluateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<BeaconAccountRiskEvaluateError> = [
      {
        on: "default",
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

  export class BetaEwaReportV1GetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<BetaEwaReportV1GetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type BetaPartnerCustomerV1CreateRequestParams = {
    body: BetaPartnerCustomerV1CreateRequest;
  };

  export class BetaPartnerCustomerV1CreateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<BetaPartnerCustomerV1CreateError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type BetaPartnerCustomerV1EnableRequestParams = {
    body: BetaPartnerCustomerV1EnableRequest;
  };

  export class BetaPartnerCustomerV1EnableError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<BetaPartnerCustomerV1EnableError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type BetaPartnerCustomerV1GetRequestParams = {
    body: BetaPartnerCustomerV1GetRequest;
  };

  export class BetaPartnerCustomerV1GetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<BetaPartnerCustomerV1GetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type BetaPartnerCustomerV1UpdateRequestParams = {
    body: BetaPartnerCustomerV1UpdateRequest;
  };

  export class BetaPartnerCustomerV1UpdateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<BetaPartnerCustomerV1UpdateError> = [
      {
        on: "default",
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

  export class CashflowReportGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<CashflowReportGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CashflowReportInsightsGetRequestParams = {
    body: CashflowReportInsightsGetRequest;
  };

  export class CashflowReportInsightsGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<CashflowReportInsightsGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CashflowReportRefreshRequestParams = {
    body: CashflowReportRefreshRequest;
  };

  export class CashflowReportRefreshError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<CashflowReportRefreshError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CashflowReportTransactionsGetRequestParams = {
    body: CashflowReportTransactionsGetRequest;
  };

  export class CashflowReportTransactionsGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<CashflowReportTransactionsGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CategoriesGetRequest = {
    body: Record<string, unknown>;
  };

  export class CategoriesGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<CategoriesGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ConsentEventsGetRequestParams = {
    body: ConsentEventsGetRequest;
  };

  export class ConsentEventsGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<ConsentEventsGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ConsumerReportPdfGetRequestParams = {
    body: ConsumerReportPdfGetRequest;
  };

  export class ConsumerReportPdfGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<ConsumerReportPdfGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CraCheckReportBaseReportGetRequestParams = {
    body: CraCheckReportBaseReportGetRequest;
  };

  export class CraCheckReportBaseReportGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<CraCheckReportBaseReportGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CraCheckReportCashflowInsightsGetRequestParams = {
    body: CraCheckReportCashflowInsightsGetRequest;
  };

  export class CraCheckReportCashflowInsightsGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<CraCheckReportCashflowInsightsGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CraCheckReportCreateRequestParams = {
    body: CraCheckReportCreateRequest;
  };

  export class CraCheckReportCreateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<CraCheckReportCreateError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CraCheckReportIncomeInsightsGetRequestParams = {
    body: CraCheckReportIncomeInsightsGetRequest;
  };

  export class CraCheckReportIncomeInsightsGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<CraCheckReportIncomeInsightsGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CraCheckReportLendScoreGetRequestParams = {
    body: CraCheckReportLendScoreGetRequest;
  };

  export class CraCheckReportLendScoreGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<CraCheckReportLendScoreGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CraCheckReportNetworkInsightsGetRequestParams = {
    body: CraCheckReportNetworkInsightsGetRequest;
  };

  export class CraCheckReportNetworkInsightsGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<CraCheckReportNetworkInsightsGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CraCheckReportPartnerInsightsGetRequestParams = {
    body: CraCheckReportPartnerInsightsGetRequest;
  };

  export class CraCheckReportPartnerInsightsGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<CraCheckReportPartnerInsightsGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CraCheckReportPdfGetRequestParams = {
    body: CraCheckReportPdfGetRequest;
  };

  export class CraCheckReportPdfGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<CraCheckReportPdfGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CraCheckReportVerificationGetRequestParams = {
    body: CraCheckReportVerificationGetRequest;
  };

  export class CraCheckReportVerificationGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<CraCheckReportVerificationGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CraCheckReportVerificationPdfGetRequestParams = {
    body: CraCheckReportVerificationPdfGetRequest;
  };

  export class CraCheckReportVerificationPdfGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<CraCheckReportVerificationPdfGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CraCreditProfileReportGetRequestParams = {
    body: CraCreditProfileReportGetRequest;
  };

  export class CraCreditProfileReportGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<CraCreditProfileReportGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CraLoansApplicationsRegisterRequestParams = {
    body: CraLoansApplicationsRegisterRequest;
  };

  export class CraLoansApplicationsRegisterError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<CraLoansApplicationsRegisterError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CraLoansRegisterRequestParams = {
    body: CraLoansRegisterRequest;
  };

  export class CraLoansRegisterError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<CraLoansRegisterError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CraLoansUnregisterRequestParams = {
    body: CraLoansUnregisterRequest;
  };

  export class CraLoansUnregisterError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<CraLoansUnregisterError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CraLoansUpdateRequestParams = {
    body: CraLoansUpdateRequest;
  };

  export class CraLoansUpdateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<CraLoansUpdateError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CraMonitoringInsightsGetRequestParams = {
    body: CraMonitoringInsightsGetRequest;
  };

  export class CraMonitoringInsightsGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<CraMonitoringInsightsGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CraMonitoringInsightsSubscribeRequestParams = {
    body: CraMonitoringInsightsSubscribeRequest;
  };

  export class CraMonitoringInsightsSubscribeError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<CraMonitoringInsightsSubscribeError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CraMonitoringInsightsUnsubscribeRequestParams = {
    body: CraMonitoringInsightsUnsubscribeRequest;
  };

  export class CraMonitoringInsightsUnsubscribeError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<CraMonitoringInsightsUnsubscribeError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CraPartnerInsightsGetRequestParams = {
    body: CraPartnerInsightsGetRequest;
  };

  export class CraPartnerInsightsGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<CraPartnerInsightsGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CraReportGetRequestParams = {
    body: CraReportGetRequest;
  };

  export class CraReportGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<CraReportGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CreatePaymentTokenRequest = {
    body: PaymentInitiationPaymentTokenCreateRequest;
  };

  export class CreatePaymentTokenError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<CreatePaymentTokenError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CreditAssetReportFreddieMacGetRequest = {
    body: AssetReportFreddieGetRequest;
  };

  export class CreditAssetReportFreddieMacGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<CreditAssetReportFreddieMacGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CreditAuditCopyTokenCreateRequestParams = {
    body: CreditAuditCopyTokenCreateRequest;
  };

  export class CreditAuditCopyTokenCreateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<CreditAuditCopyTokenCreateError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CreditAuditCopyTokenUpdateRequestParams = {
    body: CreditAuditCopyTokenUpdateRequest;
  };

  export class CreditAuditCopyTokenUpdateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<CreditAuditCopyTokenUpdateError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CreditBankEmploymentGetRequestParams = {
    body: CreditBankEmploymentGetRequest;
  };

  export class CreditBankEmploymentGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<CreditBankEmploymentGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CreditBankIncomeGetRequestParams = {
    body: CreditBankIncomeGetRequest;
  };

  export class CreditBankIncomeGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<CreditBankIncomeGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CreditBankIncomePdfGetRequestParams = {
    body: CreditBankIncomePdfGetRequest;
  };

  export class CreditBankIncomePdfGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<CreditBankIncomePdfGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CreditBankIncomeRefreshRequestParams = {
    body: CreditBankIncomeRefreshRequest;
  };

  export class CreditBankIncomeRefreshError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<CreditBankIncomeRefreshError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CreditBankIncomeWebhookUpdateRequestParams = {
    body: CreditBankIncomeWebhookUpdateRequest;
  };

  export class CreditBankIncomeWebhookUpdateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<CreditBankIncomeWebhookUpdateError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CreditBankStatementsUploadsGetRequestParams = {
    body: CreditBankStatementsUploadsGetRequest;
  };

  export class CreditBankStatementsUploadsGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<CreditBankStatementsUploadsGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CreditEmploymentGetRequestParams = {
    body: CreditEmploymentGetRequest;
  };

  export class CreditEmploymentGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<CreditEmploymentGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CreditFreddieMacReportsGetRequestParams = {
    body: CreditFreddieMacReportsGetRequest;
  };

  export class CreditFreddieMacReportsGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<CreditFreddieMacReportsGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CreditPayrollIncomeGetRequestParams = {
    body: CreditPayrollIncomeGetRequest;
  };

  export class CreditPayrollIncomeGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<CreditPayrollIncomeGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CreditPayrollIncomeParsingConfigUpdateRequestParams = {
    body: CreditPayrollIncomeParsingConfigUpdateRequest;
  };

  export class CreditPayrollIncomeParsingConfigUpdateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<CreditPayrollIncomeParsingConfigUpdateError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CreditPayrollIncomePrecheckRequestParams = {
    body: CreditPayrollIncomePrecheckRequest;
  };

  export class CreditPayrollIncomePrecheckError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<CreditPayrollIncomePrecheckError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CreditPayrollIncomeRefreshRequestParams = {
    body: CreditPayrollIncomeRefreshRequest;
  };

  export class CreditPayrollIncomeRefreshError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<CreditPayrollIncomeRefreshError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CreditPayrollIncomeRiskSignalsGetRequestParams = {
    body: CreditPayrollIncomeRiskSignalsGetRequest;
  };

  export class CreditPayrollIncomeRiskSignalsGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<CreditPayrollIncomeRiskSignalsGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CreditRelayCreateRequestParams = {
    body: CreditRelayCreateRequest;
  };

  export class CreditRelayCreateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<CreditRelayCreateError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CreditRelayGetRequestParams = {
    body: CreditRelayGetRequest;
  };

  export class CreditRelayGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<CreditRelayGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CreditRelayPdfGetRequestParams = {
    body: CreditRelayPdfGetRequest;
  };

  export class CreditRelayPdfGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<CreditRelayPdfGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CreditRelayRefreshRequestParams = {
    body: CreditRelayRefreshRequest;
  };

  export class CreditRelayRefreshError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<CreditRelayRefreshError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CreditRelayRemoveRequestParams = {
    body: CreditRelayRemoveRequest;
  };

  export class CreditRelayRemoveError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<CreditRelayRemoveError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CreditReportAuditCopyRemoveRequest = {
    body: CreditAuditCopyTokenRemoveRequest;
  };

  export class CreditReportAuditCopyRemoveError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<CreditReportAuditCopyRemoveError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type CreditSessionsGetRequestParams = {
    body: CreditSessionsGetRequest;
  };

  export class CreditSessionsGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<CreditSessionsGetError> = [
      {
        on: "default",
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

  export class EmployersSearchError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<EmployersSearchError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type EmploymentVerificationGetRequestParams = {
    body: EmploymentVerificationGetRequest;
  };

  export class EmploymentVerificationGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<EmploymentVerificationGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type FdxConsentsGetRequest = {
    /** Consent Grant Identifier. Uniquely identifies the consent grant */
    consentId: string;
  };

  export class FdxConsentsGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<FdxConsentsGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type FdxConsentsListRequest = {
    /** Data provider customer identifier whose consent grants to return. */
    customerId: string;
    /**
     * Optional filter restricting results to a single consent grant status. One of `ACTIVE`,
     * `REVOKED`, `EXPIRED`.
     */
    status?: FdxConsentGrantStatus;
  };

  export class FdxConsentsListError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<FdxConsentsListError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type FdxConsentsRevocationGetRequest = {
    /** Consent Grant Identifier. Uniquely identifies the consent grant */
    consentId: string;
  };

  export class FdxConsentsRevocationGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<FdxConsentsRevocationGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type FdxConsentsRevokeRequest = {
    /** Consent Grant Identifier. Uniquely identifies the consent grant */
    consentId: string;
    body: FdxConsentRevocation;
  };

  export class FdxConsentsRevokeError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<FdxConsentsRevokeError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type FdxNotificationsRequest = {
    body: FdxNotificationEntity;
  };

  export class FdxNotificationsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<FdxNotificationsError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type GetRecipientRequest = {
    /** Recipient Identifier. Uniquely identifies the recipient */
    recipientId: string;
    /** The value that is passed into the OAuth URI 'state' query parameter. */
    oauthStateId?: string;
  };

  export class GetRecipientError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<GetRecipientError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export class GetRecipientsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<GetRecipientsError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type IdentityDocumentsUploadsGetRequestParams = {
    body: IdentityDocumentsUploadsGetRequest;
  };

  export class IdentityDocumentsUploadsGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<IdentityDocumentsUploadsGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type IdentityGetRequestParams = {
    body: IdentityGetRequest;
  };

  export class IdentityGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<IdentityGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type IdentityMatchRequestParams = {
    body: IdentityMatchRequest;
  };

  export class IdentityMatchError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<IdentityMatchError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type IdentityRefreshRequestParams = {
    body: IdentityRefreshRequest;
  };

  export class IdentityRefreshError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<IdentityRefreshError> = [
      {
        on: "default",
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

  export class IncomeVerificationCreateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<IncomeVerificationCreateError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type IncomeVerificationDocumentsDownloadRequestParams = {
    body: IncomeVerificationDocumentsDownloadRequest;
  };

  export class IncomeVerificationDocumentsDownloadError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<IncomeVerificationDocumentsDownloadError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type IncomeVerificationPaystubsGetRequestParams = {
    body: IncomeVerificationPaystubsGetRequest;
  };

  export class IncomeVerificationPaystubsGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<IncomeVerificationPaystubsGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type IncomeVerificationPrecheckRequestParams = {
    body: IncomeVerificationPrecheckRequest;
  };

  export class IncomeVerificationPrecheckError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<IncomeVerificationPrecheckError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type IncomeVerificationTaxformsGetRequestParams = {
    body: IncomeVerificationTaxformsGetRequest;
  };

  export class IncomeVerificationTaxformsGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<IncomeVerificationTaxformsGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type InstitutionsGetRequestParams = {
    body: InstitutionsGetRequest;
  };

  export class InstitutionsGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<InstitutionsGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type InstitutionsGetByIdRequestParams = {
    body: InstitutionsGetByIdRequest;
  };

  export class InstitutionsGetByIdError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<InstitutionsGetByIdError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type InstitutionsSearchRequestParams = {
    body: InstitutionsSearchRequest;
  };

  export class InstitutionsSearchError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<InstitutionsSearchError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type InvestmentsAuthGetRequestParams = {
    body: InvestmentsAuthGetRequest;
  };

  export class InvestmentsAuthGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<InvestmentsAuthGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type InvestmentsHoldingsGetRequestParams = {
    body: InvestmentsHoldingsGetRequest;
  };

  export class InvestmentsHoldingsGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<InvestmentsHoldingsGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type InvestmentsRefreshRequestParams = {
    body: InvestmentsRefreshRequest;
  };

  export class InvestmentsRefreshError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<InvestmentsRefreshError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type InvestmentsTransactionsGetRequestParams = {
    body: InvestmentsTransactionsGetRequest;
  };

  export class InvestmentsTransactionsGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<InvestmentsTransactionsGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type IssuesGetRequestParams = {
    body: IssuesGetRequest;
  };

  export class IssuesGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<IssuesGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type IssuesSearchRequestParams = {
    body: IssuesSearchRequest;
  };

  export class IssuesSearchError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<IssuesSearchError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type IssuesSubscribeRequestParams = {
    body: IssuesSubscribeRequest;
  };

  export class IssuesSubscribeError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<IssuesSubscribeError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ItemAccessTokenInvalidateRequestParams = {
    body: ItemAccessTokenInvalidateRequest;
  };

  export class ItemAccessTokenInvalidateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<ItemAccessTokenInvalidateError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ItemActivityListRequestParams = {
    body: ItemActivityListRequest;
  };

  export class ItemActivityListError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<ItemActivityListError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ItemApplicationListRequestParams = {
    body: ItemApplicationListRequest;
  };

  export class ItemApplicationListError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<ItemApplicationListError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ItemApplicationScopesUpdateRequestParams = {
    body: ItemApplicationScopesUpdateRequest;
  };

  export class ItemApplicationScopesUpdateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<ItemApplicationScopesUpdateError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ItemApplicationUnlinkRequestParams = {
    body: ItemApplicationUnlinkRequest;
  };

  export class ItemApplicationUnlinkError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<ItemApplicationUnlinkError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ItemCreatePublicTokenRequest = {
    body: ItemPublicTokenCreateRequest;
  };

  export class ItemCreatePublicTokenError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<ItemCreatePublicTokenError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ItemGetRequestParams = {
    body: ItemGetRequest;
  };

  export class ItemGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<ItemGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ItemImportRequestParams = {
    body: ItemImportRequest;
  };

  export class ItemImportError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<ItemImportError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ItemProductsTerminateRequestParams = {
    body: ItemProductsTerminateRequest;
  };

  export class ItemProductsTerminateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<ItemProductsTerminateError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ItemPublicTokenExchangeRequestParams = {
    body: ItemPublicTokenExchangeRequest;
  };

  export class ItemPublicTokenExchangeError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<ItemPublicTokenExchangeError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ItemRemoveRequestParams = {
    body: ItemRemoveRequest;
  };

  export class ItemRemoveError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<ItemRemoveError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ItemWebhookUpdateRequestParams = {
    body: ItemWebhookUpdateRequest;
  };

  export class ItemWebhookUpdateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<ItemWebhookUpdateError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type LiabilitiesGetRequestParams = {
    body: LiabilitiesGetRequest;
  };

  export class LiabilitiesGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<LiabilitiesGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type LinkDeliveryCreateRequestParams = {
    body: LinkDeliveryCreateRequest;
  };

  export class LinkDeliveryCreateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<LinkDeliveryCreateError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type LinkDeliveryGetRequestParams = {
    body: LinkDeliveryGetRequest;
  };

  export class LinkDeliveryGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<LinkDeliveryGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type LinkOauthCorrelationIdExchangeRequest = {
    body: LinkOAuthCorrelationIdExchangeRequest;
  };

  export class LinkOauthCorrelationIdExchangeError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<LinkOauthCorrelationIdExchangeError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type LinkTokenCreateRequestParams = {
    body: LinkTokenCreateRequest;
  };

  export class LinkTokenCreateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<LinkTokenCreateError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type LinkTokenGetRequestParams = {
    body: LinkTokenGetRequest;
  };

  export class LinkTokenGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<LinkTokenGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type NetworkStatusGetRequestParams = {
    body: NetworkStatusGetRequest;
  };

  export class NetworkStatusGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<NetworkStatusGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type OauthIntrospectRequest = {
    body: OAuthIntrospectRequest;
  };

  export class OauthIntrospectError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"oAuthErrorResponse", OAuthErrorResponse>>;

    static readonly errors: ErrorDecoders<OauthIntrospectError> = [
      {
        on: "default",
        kind: "oAuthErrorResponse",
        decode: { kind: "json", schema: oAuthErrorResponseSchema },
      },
    ];
  }

  export type OauthRevokeRequest = {
    body: OAuthRevokeRequest;
  };

  export class OauthRevokeError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"oAuthErrorResponse", OAuthErrorResponse>>;

    static readonly errors: ErrorDecoders<OauthRevokeError> = [
      {
        on: "default",
        kind: "oAuthErrorResponse",
        decode: { kind: "json", schema: oAuthErrorResponseSchema },
      },
    ];
  }

  export type OauthTokenRequest = {
    body: OAuthTokenRequest;
  };

  export class OauthTokenError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"oAuthErrorResponse", OAuthErrorResponse>>;

    static readonly errors: ErrorDecoders<OauthTokenError> = [
      {
        on: "default",
        kind: "oAuthErrorResponse",
        decode: { kind: "json", schema: oAuthErrorResponseSchema },
      },
    ];
  }

  export type PartnerCustomerCreateRequestParams = {
    body: PartnerCustomerCreateRequest;
  };

  export class PartnerCustomerCreateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<PartnerCustomerCreateError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type PartnerCustomerEnableRequestParams = {
    body: PartnerCustomerEnableRequest;
  };

  export class PartnerCustomerEnableError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<PartnerCustomerEnableError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type PartnerCustomerGetRequestParams = {
    body: PartnerCustomerGetRequest;
  };

  export class PartnerCustomerGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<PartnerCustomerGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type PartnerCustomerOauthInstitutionsGetRequest = {
    body: PartnerCustomerOAuthInstitutionsGetRequest;
  };

  export class PartnerCustomerOauthInstitutionsGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<PartnerCustomerOauthInstitutionsGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type PartnerCustomerRemoveRequestParams = {
    body: PartnerCustomerRemoveRequest;
  };

  export class PartnerCustomerRemoveError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<PartnerCustomerRemoveError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type PaymentInitiationConsentCreateRequestParams = {
    body: PaymentInitiationConsentCreateRequest;
  };

  export class PaymentInitiationConsentCreateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<PaymentInitiationConsentCreateError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type PaymentInitiationConsentGetRequestParams = {
    body: PaymentInitiationConsentGetRequest;
  };

  export class PaymentInitiationConsentGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<PaymentInitiationConsentGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type PaymentInitiationConsentPaymentExecuteRequestParams = {
    body: PaymentInitiationConsentPaymentExecuteRequest;
  };

  export class PaymentInitiationConsentPaymentExecuteError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<PaymentInitiationConsentPaymentExecuteError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type PaymentInitiationConsentRevokeRequestParams = {
    body: PaymentInitiationConsentRevokeRequest;
  };

  export class PaymentInitiationConsentRevokeError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<PaymentInitiationConsentRevokeError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type PaymentInitiationPaymentCreateRequestParams = {
    body: PaymentInitiationPaymentCreateRequest;
  };

  export class PaymentInitiationPaymentCreateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<PaymentInitiationPaymentCreateError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type PaymentInitiationPaymentGetRequestParams = {
    body: PaymentInitiationPaymentGetRequest;
  };

  export class PaymentInitiationPaymentGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<PaymentInitiationPaymentGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type PaymentInitiationPaymentListRequestParams = {
    body: PaymentInitiationPaymentListRequest;
  };

  export class PaymentInitiationPaymentListError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<PaymentInitiationPaymentListError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type PaymentInitiationPaymentReverseRequestParams = {
    body: PaymentInitiationPaymentReverseRequest;
  };

  export class PaymentInitiationPaymentReverseError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<PaymentInitiationPaymentReverseError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type PaymentInitiationRecipientCreateRequestParams = {
    body: PaymentInitiationRecipientCreateRequest;
  };

  export class PaymentInitiationRecipientCreateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<PaymentInitiationRecipientCreateError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type PaymentInitiationRecipientGetRequestParams = {
    body: PaymentInitiationRecipientGetRequest;
  };

  export class PaymentInitiationRecipientGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<PaymentInitiationRecipientGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type PaymentInitiationRecipientListRequestParams = {
    body: PaymentInitiationRecipientListRequest;
  };

  export class PaymentInitiationRecipientListError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<PaymentInitiationRecipientListError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type PaymentProfileCreateRequestParams = {
    body: PaymentProfileCreateRequest;
  };

  export class PaymentProfileCreateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<PaymentProfileCreateError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type PaymentProfileGetRequestParams = {
    body: PaymentProfileGetRequest;
  };

  export class PaymentProfileGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<PaymentProfileGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type PaymentProfileRemoveRequestParams = {
    body: PaymentProfileRemoveRequest;
  };

  export class PaymentProfileRemoveError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<PaymentProfileRemoveError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ProcessorAccountGetRequestParams = {
    body: ProcessorAccountGetRequest;
  };

  export class ProcessorAccountGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<ProcessorAccountGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ProcessorApexProcessorTokenCreateRequestParams = {
    body: ProcessorApexProcessorTokenCreateRequest;
  };

  export class ProcessorApexProcessorTokenCreateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<ProcessorApexProcessorTokenCreateError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ProcessorAuthGetRequestParams = {
    body: ProcessorAuthGetRequest;
  };

  export class ProcessorAuthGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<ProcessorAuthGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ProcessorBalanceGetRequestParams = {
    /**
     * The `/processor/balance/get` endpoint returns the real-time balance for the account
     * associated with a given `processor_token`.
     *
     * The current balance is the total amount of funds in the account. The available balance is the
     * current balance less any outstanding holds or debits that have not yet posted to the account.
     *
     * Note that not all institutions calculate the available balance. In the event that available
     * balance is unavailable from the institution, Plaid will return an available balance value of
     * `null`.
     */
    body: ProcessorBalanceGetRequest;
  };

  export class ProcessorBalanceGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<ProcessorBalanceGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ProcessorBankTransferCreateRequestParams = {
    body: ProcessorBankTransferCreateRequest;
  };

  export class ProcessorBankTransferCreateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<ProcessorBankTransferCreateError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ProcessorIdentityGetRequestParams = {
    body: ProcessorIdentityGetRequest;
  };

  export class ProcessorIdentityGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<ProcessorIdentityGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ProcessorIdentityMatchRequestParams = {
    body: ProcessorIdentityMatchRequest;
  };

  export class ProcessorIdentityMatchError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<ProcessorIdentityMatchError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ProcessorInvestmentsAuthGetRequestParams = {
    body: ProcessorInvestmentsAuthGetRequest;
  };

  export class ProcessorInvestmentsAuthGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<ProcessorInvestmentsAuthGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ProcessorInvestmentsHoldingsGetRequestParams = {
    body: ProcessorInvestmentsHoldingsGetRequest;
  };

  export class ProcessorInvestmentsHoldingsGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<ProcessorInvestmentsHoldingsGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ProcessorInvestmentsTransactionsGetRequestParams = {
    body: ProcessorInvestmentsTransactionsGetRequest;
  };

  export class ProcessorInvestmentsTransactionsGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<ProcessorInvestmentsTransactionsGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ProcessorLiabilitiesGetRequestParams = {
    body: ProcessorLiabilitiesGetRequest;
  };

  export class ProcessorLiabilitiesGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<ProcessorLiabilitiesGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ProcessorSignalDecisionReportRequestParams = {
    body: ProcessorSignalDecisionReportRequest;
  };

  export class ProcessorSignalDecisionReportError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<ProcessorSignalDecisionReportError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ProcessorSignalEvaluateRequestParams = {
    body: ProcessorSignalEvaluateRequest;
  };

  export class ProcessorSignalEvaluateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<ProcessorSignalEvaluateError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ProcessorSignalPrepareRequestParams = {
    body: ProcessorSignalPrepareRequest;
  };

  export class ProcessorSignalPrepareError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<ProcessorSignalPrepareError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ProcessorSignalReturnReportRequestParams = {
    body: ProcessorSignalReturnReportRequest;
  };

  export class ProcessorSignalReturnReportError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<ProcessorSignalReturnReportError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ProcessorStripeBankAccountTokenCreateRequestParams = {
    body: ProcessorStripeBankAccountTokenCreateRequest;
  };

  export class ProcessorStripeBankAccountTokenCreateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<ProcessorStripeBankAccountTokenCreateError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ProcessorTokenCreateRequestParams = {
    body: ProcessorTokenCreateRequest;
  };

  export class ProcessorTokenCreateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<ProcessorTokenCreateError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ProcessorTokenPermissionsGetRequestParams = {
    body: ProcessorTokenPermissionsGetRequest;
  };

  export class ProcessorTokenPermissionsGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<ProcessorTokenPermissionsGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ProcessorTokenPermissionsSetRequestParams = {
    body: ProcessorTokenPermissionsSetRequest;
  };

  export class ProcessorTokenPermissionsSetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<ProcessorTokenPermissionsSetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ProcessorTokenWebhookUpdateRequestParams = {
    body: ProcessorTokenWebhookUpdateRequest;
  };

  export class ProcessorTokenWebhookUpdateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<ProcessorTokenWebhookUpdateError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ProcessorTransactionsGetRequestParams = {
    body: ProcessorTransactionsGetRequest;
  };

  export class ProcessorTransactionsGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<ProcessorTransactionsGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ProcessorTransactionsRecurringGetRequestParams = {
    body: ProcessorTransactionsRecurringGetRequest;
  };

  export class ProcessorTransactionsRecurringGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<ProcessorTransactionsRecurringGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ProcessorTransactionsRefreshRequestParams = {
    body: ProcessorTransactionsRefreshRequest;
  };

  export class ProcessorTransactionsRefreshError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<ProcessorTransactionsRefreshError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ProcessorTransactionsSyncRequestParams = {
    body: ProcessorTransactionsSyncRequest;
  };

  export class ProcessorTransactionsSyncError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<ProcessorTransactionsSyncError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type ProfileNetworkStatusGetRequestParams = {
    body: ProfileNetworkStatusGetRequest;
  };

  export class ProfileNetworkStatusGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<ProfileNetworkStatusGetError> = [
      {
        on: "default",
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

  export class SandboxBankIncomeFireWebhookError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<SandboxBankIncomeFireWebhookError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type SandboxBankTransferFireWebhookRequestParams = {
    body: SandboxBankTransferFireWebhookRequest;
  };

  export class SandboxBankTransferFireWebhookError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<SandboxBankTransferFireWebhookError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type SandboxBankTransferSimulateRequestParams = {
    body: SandboxBankTransferSimulateRequest;
  };

  export class SandboxBankTransferSimulateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<SandboxBankTransferSimulateError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type SandboxCraCashflowUpdatesUpdateRequestParams = {
    body: SandboxCraCashflowUpdatesUpdateRequest;
  };

  export class SandboxCraCashflowUpdatesUpdateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<SandboxCraCashflowUpdatesUpdateError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type SandboxFdxConsentSeedRequestParams = {
    body: SandboxFdxConsentSeedRequest;
  };

  export class SandboxFdxConsentSeedError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<SandboxFdxConsentSeedError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type SandboxIncomeFireWebhookRequestParams = {
    body: SandboxIncomeFireWebhookRequest;
  };

  export class SandboxIncomeFireWebhookError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<SandboxIncomeFireWebhookError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type SandboxItemApplicationSeedRequestParams = {
    body: SandboxItemApplicationSeedRequest;
  };

  export class SandboxItemApplicationSeedError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<SandboxItemApplicationSeedError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type SandboxItemFireWebhookRequestParams = {
    body: SandboxItemFireWebhookRequest;
  };

  export class SandboxItemFireWebhookError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<SandboxItemFireWebhookError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type SandboxItemResetLoginRequestParams = {
    body: SandboxItemResetLoginRequest;
  };

  export class SandboxItemResetLoginError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<SandboxItemResetLoginError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type SandboxItemSetVerificationStatusRequestParams = {
    body: SandboxItemSetVerificationStatusRequest;
  };

  export class SandboxItemSetVerificationStatusError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<SandboxItemSetVerificationStatusError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type SandboxOauthSelectAccountsRequestParams = {
    body: SandboxOauthSelectAccountsRequest;
  };

  export class SandboxOauthSelectAccountsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<SandboxOauthSelectAccountsError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type SandboxPaymentProfileResetLoginRequestParams = {
    body: SandboxPaymentProfileResetLoginRequest;
  };

  export class SandboxPaymentProfileResetLoginError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<SandboxPaymentProfileResetLoginError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type SandboxPaymentSimulateRequestParams = {
    body: SandboxPaymentSimulateRequest;
  };

  export class SandboxPaymentSimulateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<SandboxPaymentSimulateError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type SandboxProcessorTokenCreateRequestParams = {
    body: SandboxProcessorTokenCreateRequest;
  };

  export class SandboxProcessorTokenCreateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<SandboxProcessorTokenCreateError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type SandboxPublicTokenCreateRequestParams = {
    body: SandboxPublicTokenCreateRequest;
  };

  export class SandboxPublicTokenCreateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<SandboxPublicTokenCreateError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type SandboxTransactionsCreateRequestParams = {
    body: SandboxTransactionsCreateRequest;
  };

  export class SandboxTransactionsCreateError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"error", Error | null> | Declared<"error2", Error | null>
    >;

    static readonly errors: ErrorDecoders<SandboxTransactionsCreateError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) } },
      {
        on: "default",
        kind: "error2",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type SandboxTransferFireWebhookRequestParams = {
    body: SandboxTransferFireWebhookRequest;
  };

  export class SandboxTransferFireWebhookError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<SandboxTransferFireWebhookError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type SandboxTransferLedgerDepositSimulateRequestParams = {
    body: SandboxTransferLedgerDepositSimulateRequest;
  };

  export class SandboxTransferLedgerDepositSimulateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<SandboxTransferLedgerDepositSimulateError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type SandboxTransferLedgerSimulateAvailableRequestParams = {
    body: SandboxTransferLedgerSimulateAvailableRequest;
  };

  export class SandboxTransferLedgerSimulateAvailableError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<SandboxTransferLedgerSimulateAvailableError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type SandboxTransferLedgerWithdrawSimulateRequestParams = {
    body: SandboxTransferLedgerWithdrawSimulateRequest;
  };

  export class SandboxTransferLedgerWithdrawSimulateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<SandboxTransferLedgerWithdrawSimulateError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type SandboxTransferRefundSimulateRequestParams = {
    body: SandboxTransferRefundSimulateRequest;
  };

  export class SandboxTransferRefundSimulateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<SandboxTransferRefundSimulateError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type SandboxTransferRepaymentSimulateRequestParams = {
    body: SandboxTransferRepaymentSimulateRequest;
  };

  export class SandboxTransferRepaymentSimulateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<SandboxTransferRepaymentSimulateError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type SandboxTransferSimulateRequestParams = {
    body: SandboxTransferSimulateRequest;
  };

  export class SandboxTransferSimulateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<SandboxTransferSimulateError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type SandboxTransferSweepSimulateRequestParams = {
    body: SandboxTransferSweepSimulateRequest;
  };

  export class SandboxTransferSweepSimulateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<SandboxTransferSweepSimulateError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type SandboxTransferTestClockAdvanceRequestParams = {
    body: SandboxTransferTestClockAdvanceRequest;
  };

  export class SandboxTransferTestClockAdvanceError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<SandboxTransferTestClockAdvanceError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type SandboxTransferTestClockCreateRequestParams = {
    body: SandboxTransferTestClockCreateRequest;
  };

  export class SandboxTransferTestClockCreateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<SandboxTransferTestClockCreateError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type SandboxTransferTestClockGetRequestParams = {
    body: SandboxTransferTestClockGetRequest;
  };

  export class SandboxTransferTestClockGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<SandboxTransferTestClockGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type SandboxTransferTestClockListRequestParams = {
    body: SandboxTransferTestClockListRequest;
  };

  export class SandboxTransferTestClockListError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<SandboxTransferTestClockListError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type SandboxUserResetLoginRequestParams = {
    body: SandboxUserResetLoginRequest;
  };

  export class SandboxUserResetLoginError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<SandboxUserResetLoginError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type SessionTokenCreateRequestParams = {
    body: SessionTokenCreateRequest;
  };

  export class SessionTokenCreateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<SessionTokenCreateError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type SignalDecisionReportRequestParams = {
    body: SignalDecisionReportRequest;
  };

  export class SignalDecisionReportError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<SignalDecisionReportError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type SignalEvaluateRequestParams = {
    body: SignalEvaluateRequest;
  };

  export class SignalEvaluateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<SignalEvaluateError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type SignalPrepareRequestParams = {
    body: SignalPrepareRequest;
  };

  export class SignalPrepareError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<SignalPrepareError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type SignalReturnReportRequestParams = {
    body: SignalReturnReportRequest;
  };

  export class SignalReturnReportError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<SignalReturnReportError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type SignalScheduleRequestParams = {
    body: SignalScheduleRequest;
  };

  export class SignalScheduleError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<SignalScheduleError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type StatementsDownloadRequestParams = {
    body: StatementsDownloadRequest;
  };

  export class StatementsDownloadError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<StatementsDownloadError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type StatementsListRequestParams = {
    body: StatementsListRequest;
  };

  export class StatementsListError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<StatementsListError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type StatementsRefreshRequestParams = {
    body: StatementsRefreshRequest;
  };

  export class StatementsRefreshError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<StatementsRefreshError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransactionsEnhanceRequest = {
    body: TransactionsEnhanceGetRequest;
  };

  export class TransactionsEnhanceError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<TransactionsEnhanceError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransactionsEnrichRequestParams = {
    body: TransactionsEnrichRequest;
  };

  export class TransactionsEnrichError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<TransactionsEnrichError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransactionsGetRequestParams = {
    body: TransactionsGetRequest;
  };

  export class TransactionsGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<TransactionsGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransactionsRecurringGetRequestParams = {
    body: TransactionsRecurringGetRequest;
  };

  export class TransactionsRecurringGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<TransactionsRecurringGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransactionsRefreshRequestParams = {
    body: TransactionsRefreshRequest;
  };

  export class TransactionsRefreshError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<TransactionsRefreshError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransactionsRulesCreateRequestParams = {
    body: TransactionsRulesCreateRequest;
  };

  export class TransactionsRulesCreateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<TransactionsRulesCreateError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransactionsRulesListRequestParams = {
    body: TransactionsRulesListRequest;
  };

  export class TransactionsRulesListError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<TransactionsRulesListError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransactionsRulesRemoveRequestParams = {
    body: TransactionsRulesRemoveRequest;
  };

  export class TransactionsRulesRemoveError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<TransactionsRulesRemoveError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransactionsSyncRequestParams = {
    body: TransactionsSyncRequest;
  };

  export class TransactionsSyncError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<TransactionsSyncError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransactionsUserInsightsGetRequestParams = {
    body: TransactionsUserInsightsGetRequest;
  };

  export class TransactionsUserInsightsGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<TransactionsUserInsightsGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferAuthorizationCancelRequestParams = {
    body: TransferAuthorizationCancelRequest;
  };

  export class TransferAuthorizationCancelError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<TransferAuthorizationCancelError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferAuthorizationCreateRequestParams = {
    body: TransferAuthorizationCreateRequest;
  };

  export class TransferAuthorizationCreateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<TransferAuthorizationCreateError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferBalanceGetRequestParams = {
    body: TransferBalanceGetRequest;
  };

  export class TransferBalanceGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<TransferBalanceGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferCancelRequestParams = {
    body: TransferCancelRequest;
  };

  export class TransferCancelError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<TransferCancelError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferCapabilitiesGetRequestParams = {
    body: TransferCapabilitiesGetRequest;
  };

  export class TransferCapabilitiesGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<TransferCapabilitiesGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferConfigurationGetRequestParams = {
    body: TransferConfigurationGetRequest;
  };

  export class TransferConfigurationGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<TransferConfigurationGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferCreateRequestParams = {
    body: TransferCreateRequest;
  };

  export class TransferCreateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<TransferCreateError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferDiligenceDocumentUploadRequestParams = {
    body: TransferDiligenceDocumentUploadRequest;
  };

  export class TransferDiligenceDocumentUploadError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<TransferDiligenceDocumentUploadError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferDiligenceSubmitRequestParams = {
    body: TransferDiligenceSubmitRequest;
  };

  export class TransferDiligenceSubmitError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<TransferDiligenceSubmitError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferEventListRequestParams = {
    body: TransferEventListRequest;
  };

  export class TransferEventListError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<TransferEventListError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferEventSyncRequestParams = {
    body: TransferEventSyncRequest;
  };

  export class TransferEventSyncError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<TransferEventSyncError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferGetRequestParams = {
    body: TransferGetRequest;
  };

  export class TransferGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<TransferGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferIntentCreateRequestParams = {
    body: TransferIntentCreateRequest;
  };

  export class TransferIntentCreateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<TransferIntentCreateError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferIntentGetRequestParams = {
    body: TransferIntentGetRequest;
  };

  export class TransferIntentGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<TransferIntentGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferLedgerDepositRequestParams = {
    body: TransferLedgerDepositRequest;
  };

  export class TransferLedgerDepositError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<TransferLedgerDepositError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferLedgerDistributeRequestParams = {
    body: TransferLedgerDistributeRequest;
  };

  export class TransferLedgerDistributeError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<TransferLedgerDistributeError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferLedgerEventListRequestParams = {
    body: TransferLedgerEventListRequest;
  };

  export class TransferLedgerEventListError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<TransferLedgerEventListError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferLedgerGetRequestParams = {
    body: TransferLedgerGetRequest;
  };

  export class TransferLedgerGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<TransferLedgerGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferLedgerWithdrawRequestParams = {
    body: TransferLedgerWithdrawRequest;
  };

  export class TransferLedgerWithdrawError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<TransferLedgerWithdrawError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferListRequestParams = {
    body: TransferListRequest;
  };

  export class TransferListError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<TransferListError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferMetricsGetRequestParams = {
    body: TransferMetricsGetRequest;
  };

  export class TransferMetricsGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<TransferMetricsGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferMigrateAccountRequestParams = {
    body: TransferMigrateAccountRequest;
  };

  export class TransferMigrateAccountError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<TransferMigrateAccountError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferOriginatorCreateRequestParams = {
    body: TransferOriginatorCreateRequest;
  };

  export class TransferOriginatorCreateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<TransferOriginatorCreateError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferOriginatorFundingAccountCreateRequestParams = {
    body: TransferOriginatorFundingAccountCreateRequest;
  };

  export class TransferOriginatorFundingAccountCreateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<TransferOriginatorFundingAccountCreateError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferOriginatorFundingAccountUpdateRequestParams = {
    body: TransferOriginatorFundingAccountUpdateRequest;
  };

  export class TransferOriginatorFundingAccountUpdateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<TransferOriginatorFundingAccountUpdateError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferOriginatorGetRequestParams = {
    body: TransferOriginatorGetRequest;
  };

  export class TransferOriginatorGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<TransferOriginatorGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferOriginatorListRequestParams = {
    body: TransferOriginatorListRequest;
  };

  export class TransferOriginatorListError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<TransferOriginatorListError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferPlatformOriginatorCreateRequestParams = {
    body: TransferPlatformOriginatorCreateRequest;
  };

  export class TransferPlatformOriginatorCreateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<TransferPlatformOriginatorCreateError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferPlatformPersonCreateRequestParams = {
    body: TransferPlatformPersonCreateRequest;
  };

  export class TransferPlatformPersonCreateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<TransferPlatformPersonCreateError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferPlatformRequirementSubmitRequestParams = {
    body: TransferPlatformRequirementSubmitRequest;
  };

  export class TransferPlatformRequirementSubmitError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<TransferPlatformRequirementSubmitError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferQuestionnaireCreateRequestParams = {
    body: TransferQuestionnaireCreateRequest;
  };

  export class TransferQuestionnaireCreateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<TransferQuestionnaireCreateError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferRecurringCancelRequestParams = {
    body: TransferRecurringCancelRequest;
  };

  export class TransferRecurringCancelError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<TransferRecurringCancelError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferRecurringCreateRequestParams = {
    body: TransferRecurringCreateRequest;
  };

  export class TransferRecurringCreateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<TransferRecurringCreateError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferRecurringGetRequestParams = {
    body: TransferRecurringGetRequest;
  };

  export class TransferRecurringGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<TransferRecurringGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferRecurringListRequestParams = {
    body: TransferRecurringListRequest;
  };

  export class TransferRecurringListError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<TransferRecurringListError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferRefundCancelRequestParams = {
    body: TransferRefundCancelRequest;
  };

  export class TransferRefundCancelError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<TransferRefundCancelError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferRefundCreateRequestParams = {
    body: TransferRefundCreateRequest;
  };

  export class TransferRefundCreateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<TransferRefundCreateError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferRefundGetRequestParams = {
    body: TransferRefundGetRequest;
  };

  export class TransferRefundGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<TransferRefundGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferRepaymentListRequestParams = {
    body: TransferRepaymentListRequest;
  };

  export class TransferRepaymentListError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<TransferRepaymentListError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferRepaymentReturnListRequestParams = {
    body: TransferRepaymentReturnListRequest;
  };

  export class TransferRepaymentReturnListError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<TransferRepaymentReturnListError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferReturnRecoverRequestParams = {
    body: TransferReturnRecoverRequest;
  };

  export class TransferReturnRecoverError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<TransferReturnRecoverError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferSweepGetRequestParams = {
    body: TransferSweepGetRequest;
  };

  export class TransferSweepGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<TransferSweepGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type TransferSweepListRequestParams = {
    body: TransferSweepListRequest;
  };

  export class TransferSweepListError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<TransferSweepListError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type UserAccountSessionEventSendRequestParams = {
    body: UserAccountSessionEventSendRequest;
  };

  export class UserAccountSessionEventSendError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<UserAccountSessionEventSendError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type UserAccountSessionGetRequestParams = {
    body: UserAccountSessionGetRequest;
  };

  export class UserAccountSessionGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<UserAccountSessionGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type UserCreateRequestParams = {
    /**
     * The HTTP header used in API requests to determine which set of User APIs to invoke: the
     * legacy CRA version or the new User API version.
     *
     * @default false
     */
    plaidNewUserApiEnabled?: boolean;
    body: UserCreateRequest;
  };

  export class UserCreateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<UserCreateError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type UserFinancialDataRefreshRequestParams = {
    body: UserFinancialDataRefreshRequest;
  };

  export class UserFinancialDataRefreshError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<UserFinancialDataRefreshError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type UserGetRequestParams = {
    /**
     * The HTTP header used in API requests to determine which set of User APIs to invoke: the
     * legacy CRA version or the new User API version.
     *
     * @default false
     */
    plaidNewUserApiEnabled?: boolean;
    body: UserGetRequest;
  };

  export class UserGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<UserGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type UserIdentityRemoveRequestParams = {
    /**
     * The HTTP header used in API requests to determine which set of User APIs to invoke: the
     * legacy CRA version or the new User API version.
     *
     * @default false
     */
    plaidNewUserApiEnabled?: boolean;
    body: UserIdentityRemoveRequest;
  };

  export class UserIdentityRemoveError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<UserIdentityRemoveError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type UserItemsAssociateRequestParams = {
    body: UserItemsAssociateRequest;
  };

  export class UserItemsAssociateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<UserItemsAssociateError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type UserItemsGetRequestParams = {
    body: UserItemsGetRequest;
  };

  export class UserItemsGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<UserItemsGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type UserItemsRemoveRequestParams = {
    body: UserItemsRemoveRequest;
  };

  export class UserItemsRemoveError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<UserItemsRemoveError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type UserProductsTerminateRequestParams = {
    body: UserProductsTerminateRequest;
  };

  export class UserProductsTerminateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<UserProductsTerminateError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type UserRemoveRequestParams = {
    /**
     * The HTTP header used in API requests to determine which set of User APIs to invoke: the
     * legacy CRA version or the new User API version.
     *
     * @default false
     */
    plaidNewUserApiEnabled?: boolean;
    body: UserRemoveRequest;
  };

  export class UserRemoveError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<UserRemoveError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type UserThirdPartyTokenCreateRequestParams = {
    body: UserThirdPartyTokenCreateRequest;
  };

  export class UserThirdPartyTokenCreateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<UserThirdPartyTokenCreateError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type UserThirdPartyTokenRemoveRequestParams = {
    body: UserThirdPartyTokenRemoveRequest;
  };

  export class UserThirdPartyTokenRemoveError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<UserThirdPartyTokenRemoveError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type UserTransactionsRefreshRequestParams = {
    body: UserTransactionsRefreshRequest;
  };

  export class UserTransactionsRefreshError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<UserTransactionsRefreshError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type UserUpdateRequestParams = {
    /**
     * The HTTP header used in API requests to determine which set of User APIs to invoke: the
     * legacy CRA version or the new User API version.
     *
     * @default false
     */
    plaidNewUserApiEnabled?: boolean;
    body: UserUpdateRequest;
  };

  export class UserUpdateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<UserUpdateError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type WalletCreateRequestParams = {
    body: WalletCreateRequest;
  };

  export class WalletCreateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<WalletCreateError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type WalletGetRequestParams = {
    body: WalletGetRequest;
  };

  export class WalletGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<WalletGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type WalletListRequestParams = {
    body: WalletListRequest;
  };

  export class WalletListError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<WalletListError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type WalletTransactionExecuteRequestParams = {
    body: WalletTransactionExecuteRequest;
  };

  export class WalletTransactionExecuteError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<WalletTransactionExecuteError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type WalletTransactionGetRequestParams = {
    body: WalletTransactionGetRequest;
  };

  export class WalletTransactionGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<WalletTransactionGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }

  export type WalletTransactionListRequestParams = {
    body: WalletTransactionListRequest;
  };

  export class WalletTransactionListError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<WalletTransactionListError> = [
      {
        on: "default",
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
    /** The entity screening was successfully updated. */
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

  export class WebhookVerificationKeyGetError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"error", Error | null>>;

    static readonly errors: ErrorDecoders<WebhookVerificationKeyGetError> = [
      {
        on: "default",
        kind: "error",
        decode: { kind: "json", schema: s.nullable(s.lazy(() => errorSchema)) },
      },
    ];
  }
}
