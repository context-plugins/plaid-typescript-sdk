import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BeaconAccountRiskAttributes = {
  daysSinceFirstPlaidConnection: number | null;
  isAccountClosed: boolean | null;
  isAccountFrozenOrRestricted: boolean | null;
  totalPlaidConnectionsCount: number | null;
  plaidConnectionsCount7D: number | null;
  plaidConnectionsCount30D: number | null;
  failedPlaidNonOauthAuthenticationAttemptsCount3D: number | null;
  plaidNonOauthAuthenticationAttemptsCount3D: number | null;
  failedPlaidNonOauthAuthenticationAttemptsCount7D: number | null;
  plaidNonOauthAuthenticationAttemptsCount7D: number | null;
  failedPlaidNonOauthAuthenticationAttemptsCount30D: number | null;
  plaidNonOauthAuthenticationAttemptsCount30D: number | null;
  distinctIpAddressesCount3D: number | null;
  distinctIpAddressesCount7D: number | null;
  distinctIpAddressesCount30D: number | null;
  distinctIpAddressesCount90D: number | null;
  distinctUserAgentsCount3D: number | null;
  distinctUserAgentsCount7D: number | null;
  distinctUserAgentsCount30D: number | null;
  distinctUserAgentsCount90D: number | null;
  addressChangeCount28D: number | null;
  emailChangeCount28D: number | null;
  phoneChangeCount28D: number | null;
  addressChangeCount90D: number | null;
  emailChangeCount90D: number | null;
  phoneChangeCount90D: number | null;
  daysSinceAccountOpening: number | null;
  daysSinceFirstObservedTransaction: number | null;
};

export const beaconAccountRiskAttributesSchema: Schema<BeaconAccountRiskAttributes> =
  s.object<BeaconAccountRiskAttributes>({
    daysSinceFirstPlaidConnection: s.nullable(s.number()),
    isAccountClosed: s.nullable(s.boolean()),
    isAccountFrozenOrRestricted: s.nullable(s.boolean()),
    totalPlaidConnectionsCount: s.nullable(s.number()),
    plaidConnectionsCount7D: s.nullable(s.number()),
    plaidConnectionsCount30D: s.nullable(s.number()),
    failedPlaidNonOauthAuthenticationAttemptsCount3D: s.nullable(s.number()),
    plaidNonOauthAuthenticationAttemptsCount3D: s.nullable(s.number()),
    failedPlaidNonOauthAuthenticationAttemptsCount7D: s.nullable(s.number()),
    plaidNonOauthAuthenticationAttemptsCount7D: s.nullable(s.number()),
    failedPlaidNonOauthAuthenticationAttemptsCount30D: s.nullable(s.number()),
    plaidNonOauthAuthenticationAttemptsCount30D: s.nullable(s.number()),
    distinctIpAddressesCount3D: s.nullable(s.number()),
    distinctIpAddressesCount7D: s.nullable(s.number()),
    distinctIpAddressesCount30D: s.nullable(s.number()),
    distinctIpAddressesCount90D: s.nullable(s.number()),
    distinctUserAgentsCount3D: s.nullable(s.number()),
    distinctUserAgentsCount7D: s.nullable(s.number()),
    distinctUserAgentsCount30D: s.nullable(s.number()),
    distinctUserAgentsCount90D: s.nullable(s.number()),
    addressChangeCount28D: s.nullable(s.number()),
    emailChangeCount28D: s.nullable(s.number()),
    phoneChangeCount28D: s.nullable(s.number()),
    addressChangeCount90D: s.nullable(s.number()),
    emailChangeCount90D: s.nullable(s.number()),
    phoneChangeCount90D: s.nullable(s.number()),
    daysSinceAccountOpening: s.nullable(s.number()),
    daysSinceFirstObservedTransaction: s.nullable(s.number()),
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
