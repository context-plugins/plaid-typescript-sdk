import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Activity that modifies a position, but not through buy/sell activity e.g. options exercise,
 * portfolio transfer
 */
export const StandaloneInvestmentTransactionTransferType = {
  Assignment: "assignment",
  Adjustment: "adjustment",
  Exercise: "exercise",
  Expire: "expire",
  Merger: "merger",
  Request: "request",
  Send: "send",
  SpinOff: "spin off",
  Split: "split",
  Trade: "trade",
  Transfer: "transfer",
} as const;
export type StandaloneInvestmentTransactionTransferType =
  | (typeof StandaloneInvestmentTransactionTransferType)[keyof typeof StandaloneInvestmentTransactionTransferType]
  | (string & {});

export const standaloneInvestmentTransactionTransferTypeSchema: EnumSchema<StandaloneInvestmentTransactionTransferType> =
  s.enumOf<StandaloneInvestmentTransactionTransferType>(StandaloneInvestmentTransactionTransferType);
