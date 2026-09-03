import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const InvestmentTransactionSubtype = {
  AccountFee: "account fee",
  Adjustment: "adjustment",
  Assignment: "assignment",
  Buy: "buy",
  BuyToCover: "buy to cover",
  Contribution: "contribution",
  Deposit: "deposit",
  Distribution: "distribution",
  Dividend: "dividend",
  DividendReinvestment: "dividend reinvestment",
  Exercise: "exercise",
  Expire: "expire",
  FundFee: "fund fee",
  Interest: "interest",
  InterestReceivable: "interest receivable",
  InterestReinvestment: "interest reinvestment",
  LegalFee: "legal fee",
  LoanPayment: "loan payment",
  LongTermCapitalGain: "long-term capital gain",
  LongTermCapitalGainReinvestment: "long-term capital gain reinvestment",
  ManagementFee: "management fee",
  MarginExpense: "margin expense",
  Merger: "merger",
  MiscellaneousFee: "miscellaneous fee",
  NonQualifiedDividend: "non-qualified dividend",
  NonResidentTax: "non-resident tax",
  PendingCredit: "pending credit",
  PendingDebit: "pending debit",
  QualifiedDividend: "qualified dividend",
  Rebalance: "rebalance",
  ReturnOfPrincipal: "return of principal",
  Request: "request",
  Sell: "sell",
  SellShort: "sell short",
  Send: "send",
  ShortTermCapitalGain: "short-term capital gain",
  ShortTermCapitalGainReinvestment: "short-term capital gain reinvestment",
  SpinOff: "spin off",
  Split: "split",
  StockDistribution: "stock distribution",
  Tax: "tax",
  TaxWithheld: "tax withheld",
  Trade: "trade",
  Transfer: "transfer",
  TransferFee: "transfer fee",
  TrustFee: "trust fee",
  UnqualifiedGain: "unqualified gain",
  Withdrawal: "withdrawal",
} as const;
export type InvestmentTransactionSubtype =
  | (typeof InvestmentTransactionSubtype)[keyof typeof InvestmentTransactionSubtype]
  | (string & {});

export const investmentTransactionSubtypeSchema: EnumSchema<InvestmentTransactionSubtype> =
  s.enumOf<InvestmentTransactionSubtype>(InvestmentTransactionSubtype);
