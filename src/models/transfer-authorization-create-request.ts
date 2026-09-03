import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { achClassSchema, type AchClass } from "./ach-class.js";
import {
  transferAuthorizationDeviceSchema,
  type TransferAuthorizationDevice,
} from "./transfer-authorization-device.js";
import {
  transferAuthorizationUserInRequestSchema,
  type TransferAuthorizationUserInRequest,
} from "./transfer-authorization-user-in-request.js";
import {
  transferCreditFundsSourceSchema,
  type TransferCreditFundsSource,
} from "./transfer-credit-funds-source.js";
import { transferNetworkSchema, type TransferNetwork } from "./transfer-network.js";
import { transferTypeSchema, type TransferType } from "./transfer-type.js";
import { transferWireDetailsSchema, type TransferWireDetails } from "./transfer-wire-details.js";

export type TransferAuthorizationCreateRequest = {
  clientId?: string;
  secret?: string;
  accessToken: string;
  accountId: string;
  fundingAccountId?: string | null;
  ledgerId?: string | null;
  paymentProfileToken?: string;
  type: TransferType;
  network: TransferNetwork;
  amount: string;
  achClass?: AchClass;
  wireDetails?: TransferWireDetails | null;
  user: TransferAuthorizationUserInRequest;
  device?: TransferAuthorizationDevice;
  originationAccountId?: string;
  isoCurrencyCode?: string;
  idempotencyKey?: string | null;
  userPresent?: boolean | null;
  withGuarantee?: boolean | null;
  requestGuarantee?: boolean | null;
  beaconSessionId?: string | null;
  originatorClientId?: string | null;
  creditFundsSource?: TransferCreditFundsSource | null;
  testClockId?: string | null;
  rulesetKey?: string | null;
  customAttributes?: Record<string, string> | null;
};

export const transferAuthorizationCreateRequestSchema: Schema<TransferAuthorizationCreateRequest> =
  s.object<TransferAuthorizationCreateRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    accessToken: s.string(),
    accountId: s.string(),
    fundingAccountId: s.optionalNullable(s.string()),
    ledgerId: s.optionalNullable(s.string()),
    paymentProfileToken: s.optional(s.string()),
    type: transferTypeSchema,
    network: transferNetworkSchema,
    amount: s.string(),
    achClass: s.optional(s.lazy(() => achClassSchema)),
    wireDetails: s.optionalNullable(s.lazy(() => transferWireDetailsSchema)),
    user: transferAuthorizationUserInRequestSchema,
    device: s.optional(s.lazy(() => transferAuthorizationDeviceSchema)),
    originationAccountId: s.optional(s.string()),
    isoCurrencyCode: s.optional(s.string()),
    idempotencyKey: s.optionalNullable(s.string()),
    userPresent: s.optionalNullable(s.boolean()),
    withGuarantee: s.optionalNullable(s.boolean()),
    requestGuarantee: s.optionalNullable(s.boolean()),
    beaconSessionId: s.optionalNullable(s.string()),
    originatorClientId: s.optionalNullable(s.string()),
    creditFundsSource: s.optionalNullable(s.lazy(() => transferCreditFundsSourceSchema)),
    testClockId: s.optionalNullable(s.string()),
    rulesetKey: s.optionalNullable(s.string()),
    customAttributes: s.optionalNullable(s.record(s.string(), s.string())),
    _keysMap: {
      clientId: "client_id",
      accessToken: "access_token",
      accountId: "account_id",
      fundingAccountId: "funding_account_id",
      ledgerId: "ledger_id",
      paymentProfileToken: "payment_profile_token",
      achClass: "ach_class",
      wireDetails: "wire_details",
      originationAccountId: "origination_account_id",
      isoCurrencyCode: "iso_currency_code",
      idempotencyKey: "idempotency_key",
      userPresent: "user_present",
      withGuarantee: "with_guarantee",
      requestGuarantee: "request_guarantee",
      beaconSessionId: "beacon_session_id",
      originatorClientId: "originator_client_id",
      creditFundsSource: "credit_funds_source",
      testClockId: "test_clock_id",
      rulesetKey: "ruleset_key",
      customAttributes: "custom_attributes",
    },
  });
