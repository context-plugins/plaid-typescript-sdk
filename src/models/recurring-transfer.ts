import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { achClassSchema, type AchClass } from "./ach-class.js";
import {
  transferRecurringNetworkSchema,
  type TransferRecurringNetwork,
} from "./transfer-recurring-network.js";
import {
  transferRecurringScheduleSchema,
  type TransferRecurringSchedule,
} from "./transfer-recurring-schedule.js";
import { transferRecurringStatusSchema, type TransferRecurringStatus } from "./transfer-recurring-status.js";
import { transferTypeSchema, type TransferType } from "./transfer-type.js";
import { transferUserInResponseSchema, type TransferUserInResponse } from "./transfer-user-in-response.js";

export type RecurringTransfer = {
  recurringTransferId: string;
  created: Date;
  nextOriginationDate: string | null;
  testClockId?: string | null;
  type: TransferType;
  amount: string;
  status: TransferRecurringStatus;
  achClass?: AchClass;
  network: TransferRecurringNetwork;
  originationAccountId: string;
  accountId: string;
  fundingAccountId: string;
  isoCurrencyCode: string;
  description: string;
  transferIds: string[];
  user: TransferUserInResponse;
  schedule: TransferRecurringSchedule;
};

export const recurringTransferSchema: Schema<RecurringTransfer> = s.object<RecurringTransfer>({
  recurringTransferId: s.string(),
  created: s.dateTime(),
  nextOriginationDate: s.nullable(s.dateOnly()),
  testClockId: s.optionalNullable(s.string()),
  type: transferTypeSchema,
  amount: s.string(),
  status: transferRecurringStatusSchema,
  achClass: s.optional(s.lazy(() => achClassSchema)),
  network: transferRecurringNetworkSchema,
  originationAccountId: s.string(),
  accountId: s.string(),
  fundingAccountId: s.string(),
  isoCurrencyCode: s.string(),
  description: s.string(),
  transferIds: s.array(s.string()),
  user: transferUserInResponseSchema,
  schedule: transferRecurringScheduleSchema,
  _keysMap: {
    recurringTransferId: "recurring_transfer_id",
    nextOriginationDate: "next_origination_date",
    testClockId: "test_clock_id",
    achClass: "ach_class",
    originationAccountId: "origination_account_id",
    accountId: "account_id",
    fundingAccountId: "funding_account_id",
    isoCurrencyCode: "iso_currency_code",
    transferIds: "transfer_ids",
  },
});
