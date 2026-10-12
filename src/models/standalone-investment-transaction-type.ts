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

/**
 * Valid values for investment transaction types and subtypes. Note that transactions representing
 * inflow of cash will appear as negative amounts, outflow of cash will appear as positive amounts.
 */
export type StandaloneInvestmentTransactionType = {
  /** Buying an investment */
  buy: BuyType;
  /** Selling an investment */
  sell: SellType;
  /** A cancellation of a pending transaction */
  cancel: string;
  /** Activity that modifies a cash position */
  cash: CashType;
  /** Fees on the account, e.g. commission, bookkeeping, options-related. */
  fee: FeeType;
  /**
   * Activity that modifies a position, but not through buy/sell activity e.g. options exercise,
   * portfolio transfer
   */
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
