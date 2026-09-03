import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { buyTypeSchema, type BuyType } from "./buy-type.js";
import { cashTypeSchema, type CashType } from "./cash-type.js";
import { feeTypeSchema, type FeeType } from "./fee-type.js";
import { sellTypeSchema, type SellType } from "./sell-type.js";
import {
  standaloneInvestmentTransactionTransferTypeSchema,
  type StandaloneInvestmentTransactionTransferType,
} from "./standalone-investment-transaction-transfer-type.js";

export type StandaloneInvestmentTransactionType = {
  buy: BuyType;
  sell: SellType;
  cancel: string;
  cash: CashType;
  fee: FeeType;
  transfer: StandaloneInvestmentTransactionTransferType;
};

export const standaloneInvestmentTransactionTypeSchema: Schema<StandaloneInvestmentTransactionType> =
  s.object<StandaloneInvestmentTransactionType>({
    buy: buyTypeSchema,
    sell: sellTypeSchema,
    cancel: s.string(),
    cash: cashTypeSchema,
    fee: feeTypeSchema,
    transfer: standaloneInvestmentTransactionTransferTypeSchema,
  });
