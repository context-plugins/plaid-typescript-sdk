import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SignalEvaluateCoreAttributes = {
  unauthorizedTransactionsCount7D?: number | null;
  unauthorizedTransactionsCount30D?: number | null;
  unauthorizedTransactionsCount60D?: number | null;
  unauthorizedTransactionsCount90D?: number | null;
  nsfOverdraftTransactionsCount7D?: number | null;
  nsfOverdraftTransactionsCount30D?: number | null;
  nsfOverdraftTransactionsCount60D?: number | null;
  nsfOverdraftTransactionsCount90D?: number | null;
  daysSinceFirstPlaidConnection?: number | null;
  plaidConnectionsCount7D?: number | null;
  plaidConnectionsCount30D?: number | null;
  totalPlaidConnectionsCount?: number | null;
  isSavingsOrMoneyMarketAccount?: boolean | null;
  totalCreditTransactionsAmount10D?: number | null;
  totalDebitTransactionsAmount10D?: number | null;
  p50CreditTransactionsAmount28D?: number | null;
  p50DebitTransactionsAmount28D?: number | null;
  p95CreditTransactionsAmount28D?: number | null;
  p95DebitTransactionsAmount28D?: number | null;
  daysWithNegativeBalanceCount90D?: number | null;
  p90EodBalance30D?: number | null;
  p90EodBalance60D?: number | null;
  p90EodBalance90D?: number | null;
  p10EodBalance30D?: number | null;
  p10EodBalance60D?: number | null;
  p10EodBalance90D?: number | null;
  availableBalance?: number | null;
  currentBalance?: number | null;
  balanceLastUpdated?: Date | null;
  phoneChangeCount28D?: number | null;
  phoneChangeCount90D?: number | null;
  emailChangeCount28D?: number | null;
  emailChangeCount90D?: number | null;
  addressChangeCount28D?: number | null;
  addressChangeCount90D?: number | null;
  plaidNonOauthAuthenticationAttemptsCount3D?: number | null;
  plaidNonOauthAuthenticationAttemptsCount7D?: number | null;
  plaidNonOauthAuthenticationAttemptsCount30D?: number | null;
  failedPlaidNonOauthAuthenticationAttemptsCount3D?: number | null;
  failedPlaidNonOauthAuthenticationAttemptsCount7D?: number | null;
  failedPlaidNonOauthAuthenticationAttemptsCount30D?: number | null;
  debitTransactionsCount10D?: number | null;
  creditTransactionsCount10D?: number | null;
  debitTransactionsCount30D?: number | null;
  creditTransactionsCount30D?: number | null;
  debitTransactionsCount60D?: number | null;
  creditTransactionsCount60D?: number | null;
  debitTransactionsCount90D?: number | null;
  creditTransactionsCount90D?: number | null;
  totalDebitTransactionsAmount30D?: number | null;
  totalCreditTransactionsAmount30D?: number | null;
  totalDebitTransactionsAmount60D?: number | null;
  totalCreditTransactionsAmount60D?: number | null;
  totalDebitTransactionsAmount90D?: number | null;
  totalCreditTransactionsAmount90D?: number | null;
  p50EodBalance30D?: number | null;
  p50EodBalance60D?: number | null;
  p50EodBalance90D?: number | null;
  p50EodBalance31DTo60D?: number | null;
  p50EodBalance61DTo90D?: number | null;
  p90EodBalance31DTo60D?: number | null;
  p90EodBalance61DTo90D?: number | null;
  p10EodBalance31DTo60D?: number | null;
  p10EodBalance61DTo90D?: number | null;
  transactionsLastUpdated?: Date | null;
  isAccountClosed?: boolean | null;
  isAccountFrozenOrRestricted?: boolean | null;
  distinctIpAddressesCount3D?: number | null;
  distinctIpAddressesCount7D?: number | null;
  distinctIpAddressesCount30D?: number | null;
  distinctIpAddressesCount90D?: number | null;
  distinctUserAgentsCount3D?: number | null;
  distinctUserAgentsCount7D?: number | null;
  distinctUserAgentsCount30D?: number | null;
  distinctUserAgentsCount90D?: number | null;
  distinctSslTlsConnectionSessionsCount3D?: number | null;
  distinctSslTlsConnectionSessionsCount7D?: number | null;
  distinctSslTlsConnectionSessionsCount30D?: number | null;
  distinctSslTlsConnectionSessionsCount90D?: number | null;
  daysSinceAccountOpening?: number | null;
  balanceToTransactionAmountRatio?: number | null;
};

export const signalEvaluateCoreAttributesSchema: Schema<SignalEvaluateCoreAttributes> =
  s.object<SignalEvaluateCoreAttributes>({
    unauthorizedTransactionsCount7D: s.optionalNullable(s.number()),
    unauthorizedTransactionsCount30D: s.optionalNullable(s.number()),
    unauthorizedTransactionsCount60D: s.optionalNullable(s.number()),
    unauthorizedTransactionsCount90D: s.optionalNullable(s.number()),
    nsfOverdraftTransactionsCount7D: s.optionalNullable(s.number()),
    nsfOverdraftTransactionsCount30D: s.optionalNullable(s.number()),
    nsfOverdraftTransactionsCount60D: s.optionalNullable(s.number()),
    nsfOverdraftTransactionsCount90D: s.optionalNullable(s.number()),
    daysSinceFirstPlaidConnection: s.optionalNullable(s.number()),
    plaidConnectionsCount7D: s.optionalNullable(s.number()),
    plaidConnectionsCount30D: s.optionalNullable(s.number()),
    totalPlaidConnectionsCount: s.optionalNullable(s.number()),
    isSavingsOrMoneyMarketAccount: s.optionalNullable(s.boolean()),
    totalCreditTransactionsAmount10D: s.optionalNullable(s.number()),
    totalDebitTransactionsAmount10D: s.optionalNullable(s.number()),
    p50CreditTransactionsAmount28D: s.optionalNullable(s.number()),
    p50DebitTransactionsAmount28D: s.optionalNullable(s.number()),
    p95CreditTransactionsAmount28D: s.optionalNullable(s.number()),
    p95DebitTransactionsAmount28D: s.optionalNullable(s.number()),
    daysWithNegativeBalanceCount90D: s.optionalNullable(s.number()),
    p90EodBalance30D: s.optionalNullable(s.number()),
    p90EodBalance60D: s.optionalNullable(s.number()),
    p90EodBalance90D: s.optionalNullable(s.number()),
    p10EodBalance30D: s.optionalNullable(s.number()),
    p10EodBalance60D: s.optionalNullable(s.number()),
    p10EodBalance90D: s.optionalNullable(s.number()),
    availableBalance: s.optionalNullable(s.number()),
    currentBalance: s.optionalNullable(s.number()),
    balanceLastUpdated: s.optionalNullable(s.dateTime()),
    phoneChangeCount28D: s.optionalNullable(s.number()),
    phoneChangeCount90D: s.optionalNullable(s.number()),
    emailChangeCount28D: s.optionalNullable(s.number()),
    emailChangeCount90D: s.optionalNullable(s.number()),
    addressChangeCount28D: s.optionalNullable(s.number()),
    addressChangeCount90D: s.optionalNullable(s.number()),
    plaidNonOauthAuthenticationAttemptsCount3D: s.optionalNullable(s.number()),
    plaidNonOauthAuthenticationAttemptsCount7D: s.optionalNullable(s.number()),
    plaidNonOauthAuthenticationAttemptsCount30D: s.optionalNullable(s.number()),
    failedPlaidNonOauthAuthenticationAttemptsCount3D: s.optionalNullable(s.number()),
    failedPlaidNonOauthAuthenticationAttemptsCount7D: s.optionalNullable(s.number()),
    failedPlaidNonOauthAuthenticationAttemptsCount30D: s.optionalNullable(s.number()),
    debitTransactionsCount10D: s.optionalNullable(s.number()),
    creditTransactionsCount10D: s.optionalNullable(s.number()),
    debitTransactionsCount30D: s.optionalNullable(s.number()),
    creditTransactionsCount30D: s.optionalNullable(s.number()),
    debitTransactionsCount60D: s.optionalNullable(s.number()),
    creditTransactionsCount60D: s.optionalNullable(s.number()),
    debitTransactionsCount90D: s.optionalNullable(s.number()),
    creditTransactionsCount90D: s.optionalNullable(s.number()),
    totalDebitTransactionsAmount30D: s.optionalNullable(s.number()),
    totalCreditTransactionsAmount30D: s.optionalNullable(s.number()),
    totalDebitTransactionsAmount60D: s.optionalNullable(s.number()),
    totalCreditTransactionsAmount60D: s.optionalNullable(s.number()),
    totalDebitTransactionsAmount90D: s.optionalNullable(s.number()),
    totalCreditTransactionsAmount90D: s.optionalNullable(s.number()),
    p50EodBalance30D: s.optionalNullable(s.number()),
    p50EodBalance60D: s.optionalNullable(s.number()),
    p50EodBalance90D: s.optionalNullable(s.number()),
    p50EodBalance31DTo60D: s.optionalNullable(s.number()),
    p50EodBalance61DTo90D: s.optionalNullable(s.number()),
    p90EodBalance31DTo60D: s.optionalNullable(s.number()),
    p90EodBalance61DTo90D: s.optionalNullable(s.number()),
    p10EodBalance31DTo60D: s.optionalNullable(s.number()),
    p10EodBalance61DTo90D: s.optionalNullable(s.number()),
    transactionsLastUpdated: s.optionalNullable(s.dateTime()),
    isAccountClosed: s.optionalNullable(s.boolean()),
    isAccountFrozenOrRestricted: s.optionalNullable(s.boolean()),
    distinctIpAddressesCount3D: s.optionalNullable(s.number()),
    distinctIpAddressesCount7D: s.optionalNullable(s.number()),
    distinctIpAddressesCount30D: s.optionalNullable(s.number()),
    distinctIpAddressesCount90D: s.optionalNullable(s.number()),
    distinctUserAgentsCount3D: s.optionalNullable(s.number()),
    distinctUserAgentsCount7D: s.optionalNullable(s.number()),
    distinctUserAgentsCount30D: s.optionalNullable(s.number()),
    distinctUserAgentsCount90D: s.optionalNullable(s.number()),
    distinctSslTlsConnectionSessionsCount3D: s.optionalNullable(s.number()),
    distinctSslTlsConnectionSessionsCount7D: s.optionalNullable(s.number()),
    distinctSslTlsConnectionSessionsCount30D: s.optionalNullable(s.number()),
    distinctSslTlsConnectionSessionsCount90D: s.optionalNullable(s.number()),
    daysSinceAccountOpening: s.optionalNullable(s.number()),
    balanceToTransactionAmountRatio: s.optionalNullable(s.number()),
    _keysMap: {
      unauthorizedTransactionsCount7D: "unauthorized_transactions_count_7d",
      unauthorizedTransactionsCount30D: "unauthorized_transactions_count_30d",
      unauthorizedTransactionsCount60D: "unauthorized_transactions_count_60d",
      unauthorizedTransactionsCount90D: "unauthorized_transactions_count_90d",
      nsfOverdraftTransactionsCount7D: "nsf_overdraft_transactions_count_7d",
      nsfOverdraftTransactionsCount30D: "nsf_overdraft_transactions_count_30d",
      nsfOverdraftTransactionsCount60D: "nsf_overdraft_transactions_count_60d",
      nsfOverdraftTransactionsCount90D: "nsf_overdraft_transactions_count_90d",
      daysSinceFirstPlaidConnection: "days_since_first_plaid_connection",
      plaidConnectionsCount7D: "plaid_connections_count_7d",
      plaidConnectionsCount30D: "plaid_connections_count_30d",
      totalPlaidConnectionsCount: "total_plaid_connections_count",
      isSavingsOrMoneyMarketAccount: "is_savings_or_money_market_account",
      totalCreditTransactionsAmount10D: "total_credit_transactions_amount_10d",
      totalDebitTransactionsAmount10D: "total_debit_transactions_amount_10d",
      p50CreditTransactionsAmount28D: "p50_credit_transactions_amount_28d",
      p50DebitTransactionsAmount28D: "p50_debit_transactions_amount_28d",
      p95CreditTransactionsAmount28D: "p95_credit_transactions_amount_28d",
      p95DebitTransactionsAmount28D: "p95_debit_transactions_amount_28d",
      daysWithNegativeBalanceCount90D: "days_with_negative_balance_count_90d",
      p90EodBalance30D: "p90_eod_balance_30d",
      p90EodBalance60D: "p90_eod_balance_60d",
      p90EodBalance90D: "p90_eod_balance_90d",
      p10EodBalance30D: "p10_eod_balance_30d",
      p10EodBalance60D: "p10_eod_balance_60d",
      p10EodBalance90D: "p10_eod_balance_90d",
      availableBalance: "available_balance",
      currentBalance: "current_balance",
      balanceLastUpdated: "balance_last_updated",
      phoneChangeCount28D: "phone_change_count_28d",
      phoneChangeCount90D: "phone_change_count_90d",
      emailChangeCount28D: "email_change_count_28d",
      emailChangeCount90D: "email_change_count_90d",
      addressChangeCount28D: "address_change_count_28d",
      addressChangeCount90D: "address_change_count_90d",
      plaidNonOauthAuthenticationAttemptsCount3D: "plaid_non_oauth_authentication_attempts_count_3d",
      plaidNonOauthAuthenticationAttemptsCount7D: "plaid_non_oauth_authentication_attempts_count_7d",
      plaidNonOauthAuthenticationAttemptsCount30D: "plaid_non_oauth_authentication_attempts_count_30d",
      failedPlaidNonOauthAuthenticationAttemptsCount3D:
        "failed_plaid_non_oauth_authentication_attempts_count_3d",
      failedPlaidNonOauthAuthenticationAttemptsCount7D:
        "failed_plaid_non_oauth_authentication_attempts_count_7d",
      failedPlaidNonOauthAuthenticationAttemptsCount30D:
        "failed_plaid_non_oauth_authentication_attempts_count_30d",
      debitTransactionsCount10D: "debit_transactions_count_10d",
      creditTransactionsCount10D: "credit_transactions_count_10d",
      debitTransactionsCount30D: "debit_transactions_count_30d",
      creditTransactionsCount30D: "credit_transactions_count_30d",
      debitTransactionsCount60D: "debit_transactions_count_60d",
      creditTransactionsCount60D: "credit_transactions_count_60d",
      debitTransactionsCount90D: "debit_transactions_count_90d",
      creditTransactionsCount90D: "credit_transactions_count_90d",
      totalDebitTransactionsAmount30D: "total_debit_transactions_amount_30d",
      totalCreditTransactionsAmount30D: "total_credit_transactions_amount_30d",
      totalDebitTransactionsAmount60D: "total_debit_transactions_amount_60d",
      totalCreditTransactionsAmount60D: "total_credit_transactions_amount_60d",
      totalDebitTransactionsAmount90D: "total_debit_transactions_amount_90d",
      totalCreditTransactionsAmount90D: "total_credit_transactions_amount_90d",
      p50EodBalance30D: "p50_eod_balance_30d",
      p50EodBalance60D: "p50_eod_balance_60d",
      p50EodBalance90D: "p50_eod_balance_90d",
      p50EodBalance31DTo60D: "p50_eod_balance_31d_to_60d",
      p50EodBalance61DTo90D: "p50_eod_balance_61d_to_90d",
      p90EodBalance31DTo60D: "p90_eod_balance_31d_to_60d",
      p90EodBalance61DTo90D: "p90_eod_balance_61d_to_90d",
      p10EodBalance31DTo60D: "p10_eod_balance_31d_to_60d",
      p10EodBalance61DTo90D: "p10_eod_balance_61d_to_90d",
      transactionsLastUpdated: "transactions_last_updated",
      isAccountClosed: "is_account_closed",
      isAccountFrozenOrRestricted: "is_account_frozen_or_restricted",
      distinctIpAddressesCount3D: "distinct_ip_addresses_count_3d",
      distinctIpAddressesCount7D: "distinct_ip_addresses_count_7d",
      distinctIpAddressesCount30D: "distinct_ip_addresses_count_30d",
      distinctIpAddressesCount90D: "distinct_ip_addresses_count_90d",
      distinctUserAgentsCount3D: "distinct_user_agents_count_3d",
      distinctUserAgentsCount7D: "distinct_user_agents_count_7d",
      distinctUserAgentsCount30D: "distinct_user_agents_count_30d",
      distinctUserAgentsCount90D: "distinct_user_agents_count_90d",
      distinctSslTlsConnectionSessionsCount3D: "distinct_ssl_tls_connection_sessions_count_3d",
      distinctSslTlsConnectionSessionsCount7D: "distinct_ssl_tls_connection_sessions_count_7d",
      distinctSslTlsConnectionSessionsCount30D: "distinct_ssl_tls_connection_sessions_count_30d",
      distinctSslTlsConnectionSessionsCount90D: "distinct_ssl_tls_connection_sessions_count_90d",
      daysSinceAccountOpening: "days_since_account_opening",
      balanceToTransactionAmountRatio: "balance_to_transaction_amount_ratio",
    },
  });
