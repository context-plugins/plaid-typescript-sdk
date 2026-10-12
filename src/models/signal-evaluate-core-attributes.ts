import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The core attributes object contains additional data that can be used to assess the ACH return
 * risk.
 *
 * If using a Balance-only ruleset, only `available_balance` and `current_balance` will be returned
 * as core attributes. If using a Signal Transaction Scores ruleset, over 80 core attributes will be
 * returned. Examples of attributes include:
 *
 * `available_balance` and `current_balance`: The balance in the ACH transaction funding account
 * `days_since_first_plaid_connection`: The number of days since the first time the Item was
 * connected to an application via Plaid `plaid_connections_count_7d`: The number of times the Item
 * has been connected to applications via Plaid over the past 7 days `plaid_connections_count_30d`:
 * The number of times the Item has been connected to applications via Plaid over the past 30 days
 * `total_plaid_connections_count`: The number of times the Item has been connected to applications
 * via Plaid `is_savings_or_money_market_account`: Indicates whether the ACH transaction funding
 * account is a savings/money market account
 *
 * For the full list and detailed documentation of core attributes available, or to request that
 * core attributes not be returned, contact sales or your Plaid account manager.
 */
export type SignalEvaluateCoreAttributes = {
  /**
   * We parse and analyze historical transaction metadata to identify the number of possible past
   * returns due to unauthorized transactions over the past 7 days from the account that will be
   * debited.
   */
  unauthorizedTransactionsCount7D?: number | null;
  /**
   * We parse and analyze historical transaction metadata to identify the number of possible past
   * returns due to unauthorized transactions over the past 30 days from the account that will be
   * debited.
   */
  unauthorizedTransactionsCount30D?: number | null;
  /**
   * We parse and analyze historical transaction metadata to identify the number of possible past
   * returns due to unauthorized transactions over the past 60 days from the account that will be
   * debited.
   */
  unauthorizedTransactionsCount60D?: number | null;
  /**
   * We parse and analyze historical transaction metadata to identify the number of possible past
   * returns due to unauthorized transactions over the past 90 days from the account that will be
   * debited.
   */
  unauthorizedTransactionsCount90D?: number | null;
  /**
   * We parse and analyze historical transaction metadata to identify the number of possible past
   * returns due to non-sufficient funds/overdrafts over the past 7 days from the account that will
   * be debited.
   */
  nsfOverdraftTransactionsCount7D?: number | null;
  /**
   * We parse and analyze historical transaction metadata to identify the number of possible past
   * returns due to non-sufficient funds/overdrafts over the past 30 days from the account that will
   * be debited.
   */
  nsfOverdraftTransactionsCount30D?: number | null;
  /**
   * We parse and analyze historical transaction metadata to identify the number of possible past
   * returns due to non-sufficient funds/overdrafts over the past 60 days from the account that will
   * be debited.
   */
  nsfOverdraftTransactionsCount60D?: number | null;
  /**
   * We parse and analyze historical transaction metadata to identify the number of possible past
   * returns due to non-sufficient funds/overdrafts over the past 90 days from the account that will
   * be debited.
   */
  nsfOverdraftTransactionsCount90D?: number | null;
  /** The number of days since the first time the Item was connected to an application via Plaid */
  daysSinceFirstPlaidConnection?: number | null;
  /**
   * The number of times the Item has been connected to applications via Plaid over the past 7 days
   */
  plaidConnectionsCount7D?: number | null;
  /**
   * The number of times the Item has been connected to applications via Plaid over the past 30 days
   */
  plaidConnectionsCount30D?: number | null;
  /** The total number of times the Item has been connected to applications via Plaid */
  totalPlaidConnectionsCount?: number | null;
  /** Indicates if the ACH transaction funding account is a savings/money market account */
  isSavingsOrMoneyMarketAccount?: boolean | null;
  /**
   * The total credit (inflow) transaction amount over the past 10 days from the account that will
   * be debited
   */
  totalCreditTransactionsAmount10D?: number | null;
  /**
   * The total debit (outflow) transaction amount over the past 10 days from the account that will
   * be debited
   */
  totalDebitTransactionsAmount10D?: number | null;
  /**
   * The 50th percentile of all credit (inflow) transaction amounts over the past 28 days from the
   * account that will be debited
   */
  p50CreditTransactionsAmount28D?: number | null;
  /**
   * The 50th percentile of all debit (outflow) transaction amounts over the past 28 days from the
   * account that will be debited
   */
  p50DebitTransactionsAmount28D?: number | null;
  /**
   * The 95th percentile of all credit (inflow) transaction amounts over the past 28 days from the
   * account that will be debited
   */
  p95CreditTransactionsAmount28D?: number | null;
  /**
   * The 95th percentile of all debit (outflow) transaction amounts over the past 28 days from the
   * account that will be debited
   */
  p95DebitTransactionsAmount28D?: number | null;
  /**
   * The number of days within the past 90 days when the account that will be debited had a negative
   * end-of-day available balance
   */
  daysWithNegativeBalanceCount90D?: number | null;
  /**
   * The 90th percentile of the end-of-day available balance over the past 30 days of the account
   * that will be debited
   */
  p90EodBalance30D?: number | null;
  /**
   * The 90th percentile of the end-of-day available balance over the past 60 days of the account
   * that will be debited
   */
  p90EodBalance60D?: number | null;
  /**
   * The 90th percentile of the end-of-day available balance over the past 90 days of the account
   * that will be debited
   */
  p90EodBalance90D?: number | null;
  /**
   * The 10th percentile of the end-of-day available balance over the past 30 days of the account
   * that will be debited
   */
  p10EodBalance30D?: number | null;
  /**
   * The 10th percentile of the end-of-day available balance over the past 60 days of the account
   * that will be debited
   */
  p10EodBalance60D?: number | null;
  /**
   * The 10th percentile of the end-of-day available balance over the past 90 days of the account
   * that will be debited
   */
  p10EodBalance90D?: number | null;
  /**
   * Available balance, as of the `balance_last_updated` time. The available balance is the current
   * balance less any outstanding holds or debits that have not yet posted to the account.
   */
  availableBalance?: number | null;
  /**
   * Current balance, as of the `balance_last_updated` time. The current balance is the total amount
   * of funds in the account.
   */
  currentBalance?: number | null;
  /**
   * Timestamp in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format (YYYY-MM-DDTHH:mm:ssZ)
   * indicating the last time that the balance for the given account has been updated.
   */
  balanceLastUpdated?: Date | null;
  /** The number of times the account's phone numbers on file have changed over the past 28 days */
  phoneChangeCount28D?: number | null;
  /** The number of times the account's phone numbers on file have changed over the past 90 days */
  phoneChangeCount90D?: number | null;
  /**
   * The number of times the account's email addresses on file have changed over the past 28 days
   */
  emailChangeCount28D?: number | null;
  /**
   * The number of times the account's email addresses on file have changed over the past 90 days
   */
  emailChangeCount90D?: number | null;
  /** The number of times the account's addresses on file have changed over the past 28 days */
  addressChangeCount28D?: number | null;
  /** The number of times the account's addresses on file have changed over the past 90 days */
  addressChangeCount90D?: number | null;
  /**
   * The number of non-OAuth authentication attempts via Plaid for this bank account over the past 3
   * days
   */
  plaidNonOauthAuthenticationAttemptsCount3D?: number | null;
  /**
   * The number of non-OAuth authentication attempts via Plaid for this bank account over the past 7
   * days
   */
  plaidNonOauthAuthenticationAttemptsCount7D?: number | null;
  /**
   * The number of non-OAuth authentication attempts via Plaid for this bank account over the past
   * 30 days
   */
  plaidNonOauthAuthenticationAttemptsCount30D?: number | null;
  /**
   * The number of failed non-OAuth authentication attempts via Plaid for this bank account over the
   * past 3 days
   */
  failedPlaidNonOauthAuthenticationAttemptsCount3D?: number | null;
  /**
   * The number of failed non-OAuth authentication attempts via Plaid for this bank account over the
   * past 7 days
   */
  failedPlaidNonOauthAuthenticationAttemptsCount7D?: number | null;
  /**
   * The number of failed non-OAuth authentication attempts via Plaid for this bank account over the
   * past 30 days
   */
  failedPlaidNonOauthAuthenticationAttemptsCount30D?: number | null;
  /**
   * The total number of debit (outflow) transactions over the past 10 days from the account that
   * will be debited
   */
  debitTransactionsCount10D?: number | null;
  /**
   * The total number of credit (inflow) transactions over the past 10 days from the account that
   * will be debited
   */
  creditTransactionsCount10D?: number | null;
  /**
   * The total number of debit (outflow) transactions over the past 30 days from the account that
   * will be debited
   */
  debitTransactionsCount30D?: number | null;
  /**
   * The total number of credit (inflow) transactions over the past 30 days from the account that
   * will be debited
   */
  creditTransactionsCount30D?: number | null;
  /**
   * The total number of debit (outflow) transactions over the past 60 days from the account that
   * will be debited
   */
  debitTransactionsCount60D?: number | null;
  /**
   * The total number of credit (inflow) transactions over the past 60 days from the account that
   * will be debited
   */
  creditTransactionsCount60D?: number | null;
  /**
   * The total number of debit (outflow) transactions over the past 90 days from the account that
   * will be debited
   */
  debitTransactionsCount90D?: number | null;
  /**
   * The total number of credit (inflow) transactions over the past 90 days from the account that
   * will be debited
   */
  creditTransactionsCount90D?: number | null;
  /**
   * The total debit (outflow) transaction amount over the past 30 days from the account that will
   * be debited
   */
  totalDebitTransactionsAmount30D?: number | null;
  /**
   * The total credit (inflow) transaction amount over the past 30 days from the account that will
   * be debited
   */
  totalCreditTransactionsAmount30D?: number | null;
  /**
   * The total debit (outflow) transaction amount over the past 60 days from the account that will
   * be debited
   */
  totalDebitTransactionsAmount60D?: number | null;
  /**
   * The total credit (inflow) transaction amount over the past 60 days from the account that will
   * be debited
   */
  totalCreditTransactionsAmount60D?: number | null;
  /**
   * The total debit (outflow) transaction amount over the past 90 days from the account that will
   * be debited
   */
  totalDebitTransactionsAmount90D?: number | null;
  /**
   * The total credit (inflow) transaction amount over the past 90 days from the account that will
   * be debited
   */
  totalCreditTransactionsAmount90D?: number | null;
  /**
   * The 50th percentile of the end-of-day available balance over the past 30 days of the account
   * that will be debited
   */
  p50EodBalance30D?: number | null;
  /**
   * The 50th percentile of the end-of-day available balance over the past 60 days of the account
   * that will be debited
   */
  p50EodBalance60D?: number | null;
  /**
   * The 50th percentile of the end-of-day available balance over the past 90 days of the account
   * that will be debited
   */
  p50EodBalance90D?: number | null;
  /**
   * The 50th percentile of the end-of-day available balance between day 31 and day 60 over the past
   * 60 days of the account that will be debited
   */
  p50EodBalance31DTo60D?: number | null;
  /**
   * The 50th percentile of the end-of-day available balance between day 61 and day 90 over the past
   * 90 days of the account that will be debited
   */
  p50EodBalance61DTo90D?: number | null;
  /**
   * The 90th percentile of the end-of-day available balance between day 31 and day 60 over the past
   * 60 days of the account that will be debited
   */
  p90EodBalance31DTo60D?: number | null;
  /**
   * The 90th percentile of the end-of-day available balance between day 61 and day 90 over the past
   * 90 days of the account that will be debited
   */
  p90EodBalance61DTo90D?: number | null;
  /**
   * The 10th percentile of the end-of-day available balance between day 31 and day 60 over the past
   * 60 days of the account that will be debited
   */
  p10EodBalance31DTo60D?: number | null;
  /**
   * The 10th percentile of the end-of-day available balance between day 61 and day 90 over the past
   * 90 days of the account that will be debited
   */
  p10EodBalance61DTo90D?: number | null;
  /**
   * Timestamp in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format (YYYY-MM-DDTHH:mm:ssZ)
   * indicating the last time that the transactions for the given account have been updated.
   */
  transactionsLastUpdated?: Date | null;
  /** Indicates if the account that will be debited is closed */
  isAccountClosed?: boolean | null;
  /** Indicates if the account that will be debited is either frozen or restricted */
  isAccountFrozenOrRestricted?: boolean | null;
  /**
   * The number of distinct IP addresses linked to the same bank account during Plaid authentication
   * in the last 3 days
   */
  distinctIpAddressesCount3D?: number | null;
  /**
   * The number of distinct IP addresses linked to the same bank account during Plaid authentication
   * in the last 7 days
   */
  distinctIpAddressesCount7D?: number | null;
  /**
   * The number of distinct IP addresses linked to the same bank account during Plaid authentication
   * in the last 30 days (max 100)
   */
  distinctIpAddressesCount30D?: number | null;
  /**
   * The number of distinct IP addresses linked to the same bank account during Plaid authentication
   * in the last 90 days (max 100)
   */
  distinctIpAddressesCount90D?: number | null;
  /**
   * The number of distinct user agents linked to the same bank account during Plaid authentication
   * in the last 3 days
   */
  distinctUserAgentsCount3D?: number | null;
  /**
   * The number of distinct user agents linked to the same bank account during Plaid authentication
   * in the last 7 days
   */
  distinctUserAgentsCount7D?: number | null;
  /**
   * The number of distinct user agents linked to the same bank account during Plaid authentication
   * in the last 30 days
   */
  distinctUserAgentsCount30D?: number | null;
  /**
   * The number of distinct user agents linked to the same bank account during Plaid authentication
   * in the last 90 days
   */
  distinctUserAgentsCount90D?: number | null;
  /**
   * The number of distinct SSL/TLS connection sessions linked to the same bank account during Plaid
   * authentication in the last 3 days
   */
  distinctSslTlsConnectionSessionsCount3D?: number | null;
  /**
   * The number of distinct SSL/TLS connection sessions linked to the same bank account during Plaid
   * authentication in the last 7 days
   */
  distinctSslTlsConnectionSessionsCount7D?: number | null;
  /**
   * The number of distinct SSL/TLS connection sessions linked to the same bank account during Plaid
   * authentication in the last 30 days
   */
  distinctSslTlsConnectionSessionsCount30D?: number | null;
  /**
   * The number of distinct SSL/TLS connection sessions linked to the same bank account during Plaid
   * authentication in the last 90 days
   */
  distinctSslTlsConnectionSessionsCount90D?: number | null;
  /**
   * The number of days since the bank account was opened, as reported by the financial institution
   */
  daysSinceAccountOpening?: number | null;
  /**
   * Taking `available_or_current_balance` and dividing it by the transaction amount. Useful to say
   * "10% buffer", for example. This is a convenience function to build Signal Rules upon.
   */
  balanceToTransactionAmountRatio?: number | null;
};

export const signalEvaluateCoreAttributesSchema: Schema<SignalEvaluateCoreAttributes> =
  s.object<SignalEvaluateCoreAttributes>({
    unauthorizedTransactionsCount7D: s.optionalNullable(s.int()),
    unauthorizedTransactionsCount30D: s.optionalNullable(s.int()),
    unauthorizedTransactionsCount60D: s.optionalNullable(s.int()),
    unauthorizedTransactionsCount90D: s.optionalNullable(s.int()),
    nsfOverdraftTransactionsCount7D: s.optionalNullable(s.int()),
    nsfOverdraftTransactionsCount30D: s.optionalNullable(s.int()),
    nsfOverdraftTransactionsCount60D: s.optionalNullable(s.int()),
    nsfOverdraftTransactionsCount90D: s.optionalNullable(s.int()),
    daysSinceFirstPlaidConnection: s.optionalNullable(s.int()),
    plaidConnectionsCount7D: s.optionalNullable(s.int()),
    plaidConnectionsCount30D: s.optionalNullable(s.int()),
    totalPlaidConnectionsCount: s.optionalNullable(s.int()),
    isSavingsOrMoneyMarketAccount: s.optionalNullable(s.boolean()),
    totalCreditTransactionsAmount10D: s.optionalNullable(s.float64()),
    totalDebitTransactionsAmount10D: s.optionalNullable(s.float64()),
    p50CreditTransactionsAmount28D: s.optionalNullable(s.float64()),
    p50DebitTransactionsAmount28D: s.optionalNullable(s.float64()),
    p95CreditTransactionsAmount28D: s.optionalNullable(s.float64()),
    p95DebitTransactionsAmount28D: s.optionalNullable(s.float64()),
    daysWithNegativeBalanceCount90D: s.optionalNullable(s.int()),
    p90EodBalance30D: s.optionalNullable(s.float64()),
    p90EodBalance60D: s.optionalNullable(s.float64()),
    p90EodBalance90D: s.optionalNullable(s.float64()),
    p10EodBalance30D: s.optionalNullable(s.float64()),
    p10EodBalance60D: s.optionalNullable(s.float64()),
    p10EodBalance90D: s.optionalNullable(s.float64()),
    availableBalance: s.optionalNullable(s.float64()),
    currentBalance: s.optionalNullable(s.float64()),
    balanceLastUpdated: s.optionalNullable(s.dateTime()),
    phoneChangeCount28D: s.optionalNullable(s.int()),
    phoneChangeCount90D: s.optionalNullable(s.int()),
    emailChangeCount28D: s.optionalNullable(s.int()),
    emailChangeCount90D: s.optionalNullable(s.int()),
    addressChangeCount28D: s.optionalNullable(s.int()),
    addressChangeCount90D: s.optionalNullable(s.int()),
    plaidNonOauthAuthenticationAttemptsCount3D: s.optionalNullable(s.int()),
    plaidNonOauthAuthenticationAttemptsCount7D: s.optionalNullable(s.int()),
    plaidNonOauthAuthenticationAttemptsCount30D: s.optionalNullable(s.int()),
    failedPlaidNonOauthAuthenticationAttemptsCount3D: s.optionalNullable(s.int()),
    failedPlaidNonOauthAuthenticationAttemptsCount7D: s.optionalNullable(s.int()),
    failedPlaidNonOauthAuthenticationAttemptsCount30D: s.optionalNullable(s.int()),
    debitTransactionsCount10D: s.optionalNullable(s.int()),
    creditTransactionsCount10D: s.optionalNullable(s.int()),
    debitTransactionsCount30D: s.optionalNullable(s.int()),
    creditTransactionsCount30D: s.optionalNullable(s.int()),
    debitTransactionsCount60D: s.optionalNullable(s.int()),
    creditTransactionsCount60D: s.optionalNullable(s.int()),
    debitTransactionsCount90D: s.optionalNullable(s.int()),
    creditTransactionsCount90D: s.optionalNullable(s.int()),
    totalDebitTransactionsAmount30D: s.optionalNullable(s.float64()),
    totalCreditTransactionsAmount30D: s.optionalNullable(s.float64()),
    totalDebitTransactionsAmount60D: s.optionalNullable(s.float64()),
    totalCreditTransactionsAmount60D: s.optionalNullable(s.float64()),
    totalDebitTransactionsAmount90D: s.optionalNullable(s.float64()),
    totalCreditTransactionsAmount90D: s.optionalNullable(s.float64()),
    p50EodBalance30D: s.optionalNullable(s.float64()),
    p50EodBalance60D: s.optionalNullable(s.float64()),
    p50EodBalance90D: s.optionalNullable(s.float64()),
    p50EodBalance31DTo60D: s.optionalNullable(s.float64()),
    p50EodBalance61DTo90D: s.optionalNullable(s.float64()),
    p90EodBalance31DTo60D: s.optionalNullable(s.float64()),
    p90EodBalance61DTo90D: s.optionalNullable(s.float64()),
    p10EodBalance31DTo60D: s.optionalNullable(s.float64()),
    p10EodBalance61DTo90D: s.optionalNullable(s.float64()),
    transactionsLastUpdated: s.optionalNullable(s.dateTime()),
    isAccountClosed: s.optionalNullable(s.boolean()),
    isAccountFrozenOrRestricted: s.optionalNullable(s.boolean()),
    distinctIpAddressesCount3D: s.optionalNullable(s.int()),
    distinctIpAddressesCount7D: s.optionalNullable(s.int()),
    distinctIpAddressesCount30D: s.optionalNullable(s.int()),
    distinctIpAddressesCount90D: s.optionalNullable(s.int()),
    distinctUserAgentsCount3D: s.optionalNullable(s.int()),
    distinctUserAgentsCount7D: s.optionalNullable(s.int()),
    distinctUserAgentsCount30D: s.optionalNullable(s.int()),
    distinctUserAgentsCount90D: s.optionalNullable(s.int()),
    distinctSslTlsConnectionSessionsCount3D: s.optionalNullable(s.int()),
    distinctSslTlsConnectionSessionsCount7D: s.optionalNullable(s.int()),
    distinctSslTlsConnectionSessionsCount30D: s.optionalNullable(s.int()),
    distinctSslTlsConnectionSessionsCount90D: s.optionalNullable(s.int()),
    daysSinceAccountOpening: s.optionalNullable(s.int()),
    balanceToTransactionAmountRatio: s.optionalNullable(s.float64()),
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
