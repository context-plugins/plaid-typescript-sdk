import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { achClassSchema, type AchClass } from "./ach-class.js";
import { transferNetworkSchema, type TransferNetwork } from "./transfer-network.js";
import { transferTypeSchema, type TransferType } from "./transfer-type.js";
import {
  transferUserInRequestDeprecatedSchema,
  type TransferUserInRequestDeprecated,
} from "./transfer-user-in-request-deprecated.js";

export type TransferCreateRequest = {
  clientId?: string;
  secret?: string;
  idempotencyKey?: string;
  accessToken: string;
  accountId: string;
  authorizationId: string;
  type?: TransferType;
  network?: TransferNetwork;
  amount?: string;
  description: string;
  achClass?: AchClass;
  user?: TransferUserInRequestDeprecated | null;
  metadata?: Record<string, string> | null;
  originationAccountId?: string | null;
  isoCurrencyCode?: string;
  testClockId?: string | null;
  facilitatorFee?: string;
};

export const transferCreateRequestSchema: Schema<TransferCreateRequest> = s.object<TransferCreateRequest>({
  clientId: s.optional(s.string()),
  secret: s.optional(s.string()),
  idempotencyKey: s.optional(s.string()),
  accessToken: s.string(),
  accountId: s.string(),
  authorizationId: s.string(),
  type: s.optional(s.lazy(() => transferTypeSchema)),
  network: s.optional(s.lazy(() => transferNetworkSchema)),
  amount: s.optional(s.string()),
  description: s.string(),
  achClass: s.optional(s.lazy(() => achClassSchema)),
  user: s.optionalNullable(s.lazy(() => transferUserInRequestDeprecatedSchema)),
  metadata: s.optionalNullable(s.record(s.string(), s.string())),
  originationAccountId: s.optionalNullable(s.string()),
  isoCurrencyCode: s.optional(s.string()),
  testClockId: s.optionalNullable(s.string()),
  facilitatorFee: s.optional(s.string()),
  _keysMap: {
    clientId: "client_id",
    idempotencyKey: "idempotency_key",
    accessToken: "access_token",
    accountId: "account_id",
    authorizationId: "authorization_id",
    achClass: "ach_class",
    originationAccountId: "origination_account_id",
    isoCurrencyCode: "iso_currency_code",
    testClockId: "test_clock_id",
    facilitatorFee: "facilitator_fee",
  },
});
