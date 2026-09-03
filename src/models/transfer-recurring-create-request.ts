import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { achClassSchema, type AchClass } from "./ach-class.js";
import { transferDeviceSchema, type TransferDevice } from "./transfer-device.js";
import {
  transferRecurringNetworkSchema,
  type TransferRecurringNetwork,
} from "./transfer-recurring-network.js";
import {
  transferRecurringScheduleSchema,
  type TransferRecurringSchedule,
} from "./transfer-recurring-schedule.js";
import { transferTypeSchema, type TransferType } from "./transfer-type.js";
import { transferUserInRequestSchema, type TransferUserInRequest } from "./transfer-user-in-request.js";

export type TransferRecurringCreateRequest = {
  clientId?: string;
  secret?: string;
  accessToken: string;
  idempotencyKey: string;
  accountId: string;
  fundingAccountId?: string | null;
  type: TransferType;
  network: TransferRecurringNetwork;
  achClass?: AchClass;
  amount: string;
  userPresent?: boolean | null;
  isoCurrencyCode?: string;
  description: string;
  testClockId?: string | null;
  schedule: TransferRecurringSchedule;
  user: TransferUserInRequest;
  device?: TransferDevice;
};

export const transferRecurringCreateRequestSchema: Schema<TransferRecurringCreateRequest> =
  s.object<TransferRecurringCreateRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    accessToken: s.string(),
    idempotencyKey: s.string(),
    accountId: s.string(),
    fundingAccountId: s.optionalNullable(s.string()),
    type: transferTypeSchema,
    network: transferRecurringNetworkSchema,
    achClass: s.optional(s.lazy(() => achClassSchema)),
    amount: s.string(),
    userPresent: s.optionalNullable(s.boolean()),
    isoCurrencyCode: s.optional(s.string()),
    description: s.string(),
    testClockId: s.optionalNullable(s.string()),
    schedule: transferRecurringScheduleSchema,
    user: transferUserInRequestSchema,
    device: s.optional(s.lazy(() => transferDeviceSchema)),
    _keysMap: {
      clientId: "client_id",
      accessToken: "access_token",
      idempotencyKey: "idempotency_key",
      accountId: "account_id",
      fundingAccountId: "funding_account_id",
      achClass: "ach_class",
      userPresent: "user_present",
      isoCurrencyCode: "iso_currency_code",
      testClockId: "test_clock_id",
    },
  });
