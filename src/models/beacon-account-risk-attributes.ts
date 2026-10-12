import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The attributes object contains data that can be used to assess account risk. Examples of data
 * include: `days_since_first_plaid_connection`: The number of days since the first time the Item
 * was connected to an application via Plaid `plaid_connections_count_7d`: The number of times the
 * Item has been connected to applications via Plaid over the past 7 days
 * `plaid_connections_count_30d`: The number of times the Item has been connected to applications
 * via Plaid over the past 30 days `total_plaid_connections_count`: The number of times the Item has
 * been connected to applications via Plaid For the full list and detailed documentation of core
 * attributes available, or to request that core attributes not be returned, contact sales or your
 * Plaid account manager
 */
export type BeaconAccountRiskAttributes = {
  /** The number of days since the first time the Item was connected to an application via Plaid */
  daysSinceFirstPlaidConnection: number | null;
  /**
   * Indicates if the account has been closed by the financial institution or the consumer, or is at
   * risk of being closed
   */
  isAccountClosed: boolean | null;
  /**
   * Indicates whether the account has withdrawals and transfers disabled or if access to the
   * account is restricted. This could be due to a freeze by the credit issuer, legal restrictions
   * (e.g., sanctions), or regulatory requirements limiting monthly withdrawals, among other reasons
   */
  isAccountFrozenOrRestricted: boolean | null;
  /** The total number of times the Item has been connected to applications via Plaid */
  totalPlaidConnectionsCount: number | null;
  /**
   * The number of times the Item has been connected to applications via Plaid over the past 7 days
   */
  plaidConnectionsCount7D: number | null;
  /**
   * The number of times the Item has been connected to applications via Plaid over the past 30 days
   */
  plaidConnectionsCount30D: number | null;
  /**
   * The number of failed non-OAuth authentication attempts via Plaid for this bank account over the
   * past 3 days
   */
  failedPlaidNonOauthAuthenticationAttemptsCount3D: number | null;
  /**
   * The number of non-OAuth authentication attempts via Plaid for this bank account over the past 3
   * days
   */
  plaidNonOauthAuthenticationAttemptsCount3D: number | null;
  /**
   * The number of failed non-OAuth authentication attempts via Plaid for this bank account over the
   * past 7 days
   */
  failedPlaidNonOauthAuthenticationAttemptsCount7D: number | null;
  /**
   * The number of non-OAuth authentication attempts via Plaid for this bank account over the past 7
   * days
   */
  plaidNonOauthAuthenticationAttemptsCount7D: number | null;
  /**
   * The number of failed non-OAuth authentication attempts via Plaid for this bank account over the
   * past 30 days
   */
  failedPlaidNonOauthAuthenticationAttemptsCount30D: number | null;
  /**
   * The number of non-OAuth authentication attempts via Plaid for this bank account over the past
   * 30 days
   */
  plaidNonOauthAuthenticationAttemptsCount30D: number | null;
  /**
   * The number of distinct IP addresses linked to the same bank account during Plaid authentication
   * in the last 3 days
   */
  distinctIpAddressesCount3D: number | null;
  /**
   * The number of distinct IP addresses linked to the same bank account during Plaid authentication
   * in the last 7 days
   */
  distinctIpAddressesCount7D: number | null;
  /**
   * The number of distinct IP addresses linked to the same bank account during Plaid authentication
   * in the last 30 days
   */
  distinctIpAddressesCount30D: number | null;
  /**
   * The number of distinct IP addresses linked to the same bank account during Plaid authentication
   * in the last 90 days
   */
  distinctIpAddressesCount90D: number | null;
  /**
   * The number of distinct user agents linked to the same bank account during Plaid authentication
   * in the last 3 days
   */
  distinctUserAgentsCount3D: number | null;
  /**
   * The number of distinct user agents linked to the same bank account during Plaid authentication
   * in the last 7 days
   */
  distinctUserAgentsCount7D: number | null;
  /**
   * The number of distinct user agents linked to the same bank account during Plaid authentication
   * in the last 30 days
   */
  distinctUserAgentsCount30D: number | null;
  /**
   * The number of distinct user agents linked to the same bank account during Plaid authentication
   * in the last 90 days
   */
  distinctUserAgentsCount90D: number | null;
  /** The number of times the account's addresses on file have changed over the past 28 days */
  addressChangeCount28D: number | null;
  /**
   * The number of times the account's email addresses on file have changed over the past 28 days
   */
  emailChangeCount28D: number | null;
  /** The number of times the account's phone numbers on file have changed over the past 28 days */
  phoneChangeCount28D: number | null;
  /** The number of times the account's addresses on file have changed over the past 90 days */
  addressChangeCount90D: number | null;
  /**
   * The number of times the account's email addresses on file have changed over the past 90 days
   */
  emailChangeCount90D: number | null;
  /** The number of times the account's phone numbers on file have changed over the past 90 days */
  phoneChangeCount90D: number | null;
  /**
   * The number of days since the bank account was opened, as reported by the financial institution
   */
  daysSinceAccountOpening: number | null;
  /**
   * The number of days since the oldest transaction available to Plaid for this account. This
   * measure, combined with Plaid connection history, can be used to infer the age of the account
   */
  daysSinceFirstObservedTransaction: number | null;
};

export const beaconAccountRiskAttributesSchema: Schema<BeaconAccountRiskAttributes> =
  s.object<BeaconAccountRiskAttributes>({
    daysSinceFirstPlaidConnection: s.nullable(s.int()),
    isAccountClosed: s.nullable(s.boolean()),
    isAccountFrozenOrRestricted: s.nullable(s.boolean()),
    totalPlaidConnectionsCount: s.nullable(s.int()),
    plaidConnectionsCount7D: s.nullable(s.int()),
    plaidConnectionsCount30D: s.nullable(s.int()),
    failedPlaidNonOauthAuthenticationAttemptsCount3D: s.nullable(s.int()),
    plaidNonOauthAuthenticationAttemptsCount3D: s.nullable(s.int()),
    failedPlaidNonOauthAuthenticationAttemptsCount7D: s.nullable(s.int()),
    plaidNonOauthAuthenticationAttemptsCount7D: s.nullable(s.int()),
    failedPlaidNonOauthAuthenticationAttemptsCount30D: s.nullable(s.int()),
    plaidNonOauthAuthenticationAttemptsCount30D: s.nullable(s.int()),
    distinctIpAddressesCount3D: s.nullable(s.int()),
    distinctIpAddressesCount7D: s.nullable(s.int()),
    distinctIpAddressesCount30D: s.nullable(s.int()),
    distinctIpAddressesCount90D: s.nullable(s.int()),
    distinctUserAgentsCount3D: s.nullable(s.int()),
    distinctUserAgentsCount7D: s.nullable(s.int()),
    distinctUserAgentsCount30D: s.nullable(s.int()),
    distinctUserAgentsCount90D: s.nullable(s.int()),
    addressChangeCount28D: s.nullable(s.int()),
    emailChangeCount28D: s.nullable(s.int()),
    phoneChangeCount28D: s.nullable(s.int()),
    addressChangeCount90D: s.nullable(s.int()),
    emailChangeCount90D: s.nullable(s.int()),
    phoneChangeCount90D: s.nullable(s.int()),
    daysSinceAccountOpening: s.nullable(s.int()),
    daysSinceFirstObservedTransaction: s.nullable(s.int()),
    _keysMap: {
      daysSinceFirstPlaidConnection: "days_since_first_plaid_connection",
      isAccountClosed: "is_account_closed",
      isAccountFrozenOrRestricted: "is_account_frozen_or_restricted",
      totalPlaidConnectionsCount: "total_plaid_connections_count",
      plaidConnectionsCount7D: "plaid_connections_count_7d",
      plaidConnectionsCount30D: "plaid_connections_count_30d",
      failedPlaidNonOauthAuthenticationAttemptsCount3D:
        "failed_plaid_non_oauth_authentication_attempts_count_3d",
      plaidNonOauthAuthenticationAttemptsCount3D: "plaid_non_oauth_authentication_attempts_count_3d",
      failedPlaidNonOauthAuthenticationAttemptsCount7D:
        "failed_plaid_non_oauth_authentication_attempts_count_7d",
      plaidNonOauthAuthenticationAttemptsCount7D: "plaid_non_oauth_authentication_attempts_count_7d",
      failedPlaidNonOauthAuthenticationAttemptsCount30D:
        "failed_plaid_non_oauth_authentication_attempts_count_30d",
      plaidNonOauthAuthenticationAttemptsCount30D: "plaid_non_oauth_authentication_attempts_count_30d",
      distinctIpAddressesCount3D: "distinct_ip_addresses_count_3d",
      distinctIpAddressesCount7D: "distinct_ip_addresses_count_7d",
      distinctIpAddressesCount30D: "distinct_ip_addresses_count_30d",
      distinctIpAddressesCount90D: "distinct_ip_addresses_count_90d",
      distinctUserAgentsCount3D: "distinct_user_agents_count_3d",
      distinctUserAgentsCount7D: "distinct_user_agents_count_7d",
      distinctUserAgentsCount30D: "distinct_user_agents_count_30d",
      distinctUserAgentsCount90D: "distinct_user_agents_count_90d",
      addressChangeCount28D: "address_change_count_28d",
      emailChangeCount28D: "email_change_count_28d",
      phoneChangeCount28D: "phone_change_count_28d",
      addressChangeCount90D: "address_change_count_90d",
      emailChangeCount90D: "email_change_count_90d",
      phoneChangeCount90D: "phone_change_count_90d",
      daysSinceAccountOpening: "days_since_account_opening",
      daysSinceFirstObservedTransaction: "days_since_first_observed_transaction",
    },
  });
