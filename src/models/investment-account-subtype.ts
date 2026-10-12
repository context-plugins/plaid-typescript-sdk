import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Valid account subtypes for investment accounts. For a list containing descriptions of each
 * subtype, see [Account
 * schemas](https://plaid.com/docs/api/accounts/#StandaloneAccountType-investment).
 */
export const InvestmentAccountSubtype = {
  /** The `529` investment account subtype. */
  _529: "529",
  /** The `401a` investment account subtype. */
  _401A: "401a",
  /** The `401k` investment account subtype. */
  _401K: "401k",
  /** The `403B` investment account subtype. */
  _403B: "403B",
  /** The `457b` investment account subtype. */
  _457B: "457b",
  /** The `brokerage` investment account subtype. */
  Brokerage: "brokerage",
  /** The `cash isa` investment account subtype. */
  CashIsa: "cash isa",
  /** The `crypto exchange` investment account subtype. */
  CryptoExchange: "crypto exchange",
  /** The `education savings account` investment account subtype. */
  EducationSavingsAccount: "education savings account",
  /** The `fhsa` investment account subtype. */
  Fhsa: "fhsa",
  /** The `fixed annuity` investment account subtype. */
  FixedAnnuity: "fixed annuity",
  /** The `gic` investment account subtype. */
  Gic: "gic",
  /** The `health reimbursement arrangement` investment account subtype. */
  HealthReimbursementArrangement: "health reimbursement arrangement",
  /** The `hsa` investment account subtype. */
  Hsa: "hsa",
  /** The `ira` investment account subtype. */
  Ira: "ira",
  /** The `isa` investment account subtype. */
  Isa: "isa",
  /** The `keogh` investment account subtype. */
  Keogh: "keogh",
  /** The `lif` investment account subtype. */
  Lif: "lif",
  /** The `life insurance` investment account subtype. */
  LifeInsurance: "life insurance",
  /** The `line of credit` investment account subtype. */
  LineOfCredit: "line of credit",
  /** The `lira` investment account subtype. */
  Lira: "lira",
  /** The `lrif` investment account subtype. */
  Lrif: "lrif",
  /** The `lrsp` investment account subtype. */
  Lrsp: "lrsp",
  /** The `mutual fund` investment account subtype. */
  MutualFund: "mutual fund",
  /** The `non-custodial wallet` investment account subtype. */
  NonCustodialWallet: "non-custodial wallet",
  /** The `non-taxable brokerage account` investment account subtype. */
  NonTaxableBrokerageAccount: "non-taxable brokerage account",
  /** The `other` investment account subtype. */
  Other: "other",
  /** The `other annuity` investment account subtype. */
  OtherAnnuity: "other annuity",
  /** The `other insurance` investment account subtype. */
  OtherInsurance: "other insurance",
  /** The `pension` investment account subtype. */
  Pension: "pension",
  /** The `prif` investment account subtype. */
  Prif: "prif",
  /** The `profit sharing plan` investment account subtype. */
  ProfitSharingPlan: "profit sharing plan",
  /** The `qshr` investment account subtype. */
  Qshr: "qshr",
  /** The `rdsp` investment account subtype. */
  Rdsp: "rdsp",
  /** The `resp` investment account subtype. */
  Resp: "resp",
  /** The `retirement` investment account subtype. */
  Retirement: "retirement",
  /** The `rlif` investment account subtype. */
  Rlif: "rlif",
  /** The `roth` investment account subtype. */
  Roth: "roth",
  /** The `roth 401k` investment account subtype. */
  Roth401K: "roth 401k",
  /** The `roth 403B` investment account subtype. */
  Roth403B: "roth 403B",
  /** The `roth 457b` investment account subtype. */
  Roth457B: "roth 457b",
  /** The `roth pension` investment account subtype. */
  RothPension: "roth pension",
  /** The `roth profit sharing plan` investment account subtype. */
  RothProfitSharingPlan: "roth profit sharing plan",
  /** The `roth thrift savings plan` investment account subtype. */
  RothThriftSavingsPlan: "roth thrift savings plan",
  /** The `rrif` investment account subtype. */
  Rrif: "rrif",
  /** The `rrsp` investment account subtype. */
  Rrsp: "rrsp",
  /** The `sarsep` investment account subtype. */
  Sarsep: "sarsep",
  /** The `sep ira` investment account subtype. */
  SepIra: "sep ira",
  /** The `simple ira` investment account subtype. */
  SimpleIra: "simple ira",
  /** The `sipp` investment account subtype. */
  Sipp: "sipp",
  /** The `stock plan` investment account subtype. */
  StockPlan: "stock plan",
  /** The `thrift savings plan` investment account subtype. */
  ThriftSavingsPlan: "thrift savings plan",
  /** The `tfsa` investment account subtype. */
  Tfsa: "tfsa",
  /** The `trust` investment account subtype. */
  Trust: "trust",
  /** The `ugma` investment account subtype. */
  Ugma: "ugma",
  /** The `utma` investment account subtype. */
  Utma: "utma",
  /** The `variable annuity` investment account subtype. */
  VariableAnnuity: "variable annuity",
  /** The `all` investment account subtype. */
  All: "all",
} as const;
export type InvestmentAccountSubtype =
  | (typeof InvestmentAccountSubtype)[keyof typeof InvestmentAccountSubtype]
  | (string & {});

export const investmentAccountSubtypeSchema: EnumSchema<InvestmentAccountSubtype> =
  s.enumOf<InvestmentAccountSubtype>(InvestmentAccountSubtype);
