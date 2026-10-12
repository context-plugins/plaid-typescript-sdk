import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * See the [Account type schema](https://plaid.com/docs/api/accounts/#account-type-schema) for a
 * full listing of account types and corresponding subtypes.
 */
export const AccountSubtype = {
  /** The `401a` account subtype. */
  _401A: "401a",
  /** The `401k` account subtype. */
  _401K: "401k",
  /** The `403B` account subtype. */
  _403B: "403B",
  /** The `457b` account subtype. */
  _457B: "457b",
  /** The `529` account subtype. */
  _529: "529",
  /** The `auto` account subtype. */
  Auto: "auto",
  /** The `brokerage` account subtype. */
  Brokerage: "brokerage",
  /** The `business` account subtype. */
  Business: "business",
  /** The `cash isa` account subtype. */
  CashIsa: "cash isa",
  /** The `cash management` account subtype. */
  CashManagement: "cash management",
  /** The `cd` account subtype. */
  Cd: "cd",
  /** The `checking` account subtype. */
  Checking: "checking",
  /** The `commercial` account subtype. */
  Commercial: "commercial",
  /** The `construction` account subtype. */
  Construction: "construction",
  /** The `consumer` account subtype. */
  Consumer: "consumer",
  /** The `credit card` account subtype. */
  CreditCard: "credit card",
  /** The `crypto exchange` account subtype. */
  CryptoExchange: "crypto exchange",
  /** The `ebt` account subtype. */
  Ebt: "ebt",
  /** The `education savings account` account subtype. */
  EducationSavingsAccount: "education savings account",
  /** The `fhsa` account subtype. */
  Fhsa: "fhsa",
  /** The `fixed annuity` account subtype. */
  FixedAnnuity: "fixed annuity",
  /** The `gic` account subtype. */
  Gic: "gic",
  /** The `health reimbursement arrangement` account subtype. */
  HealthReimbursementArrangement: "health reimbursement arrangement",
  /** The `home equity` account subtype. */
  HomeEquity: "home equity",
  /** The `hsa` account subtype. */
  Hsa: "hsa",
  /** The `isa` account subtype. */
  Isa: "isa",
  /** The `ira` account subtype. */
  Ira: "ira",
  /** The `keogh` account subtype. */
  Keogh: "keogh",
  /** The `lif` account subtype. */
  Lif: "lif",
  /** The `life insurance` account subtype. */
  LifeInsurance: "life insurance",
  /** The `limited purpose checking` account subtype. */
  LimitedPurposeChecking: "limited purpose checking",
  /** The `line of credit` account subtype. */
  LineOfCredit: "line of credit",
  /** The `lira` account subtype. */
  Lira: "lira",
  /** The `loan` account subtype. */
  Loan: "loan",
  /** The `lrif` account subtype. */
  Lrif: "lrif",
  /** The `lrsp` account subtype. */
  Lrsp: "lrsp",
  /** The `money market` account subtype. */
  MoneyMarket: "money market",
  /** The `mortgage` account subtype. */
  Mortgage: "mortgage",
  /** The `mutual fund` account subtype. */
  MutualFund: "mutual fund",
  /** The `non-custodial wallet` account subtype. */
  NonCustodialWallet: "non-custodial wallet",
  /** The `non-taxable brokerage account` account subtype. */
  NonTaxableBrokerageAccount: "non-taxable brokerage account",
  /** The `other` account subtype. */
  Other: "other",
  /** The `other insurance` account subtype. */
  OtherInsurance: "other insurance",
  /** The `other annuity` account subtype. */
  OtherAnnuity: "other annuity",
  /** The `overdraft` account subtype. */
  Overdraft: "overdraft",
  /** The `paypal` account subtype. */
  Paypal: "paypal",
  /** The `payroll` account subtype. */
  Payroll: "payroll",
  /** The `pension` account subtype. */
  Pension: "pension",
  /** The `prepaid` account subtype. */
  Prepaid: "prepaid",
  /** The `prif` account subtype. */
  Prif: "prif",
  /** The `profit sharing plan` account subtype. */
  ProfitSharingPlan: "profit sharing plan",
  /** The `qshr` account subtype. */
  Qshr: "qshr",
  /** The `rdsp` account subtype. */
  Rdsp: "rdsp",
  /** The `resp` account subtype. */
  Resp: "resp",
  /** The `retirement` account subtype. */
  Retirement: "retirement",
  /** The `rlif` account subtype. */
  Rlif: "rlif",
  /** The `roth` account subtype. */
  Roth: "roth",
  /** The `roth 401k` account subtype. */
  Roth401K: "roth 401k",
  /** The `roth 403B` account subtype. */
  Roth403B: "roth 403B",
  /** The `roth 457b` account subtype. */
  Roth457B: "roth 457b",
  /** The `roth pension` account subtype. */
  RothPension: "roth pension",
  /** The `roth profit sharing plan` account subtype. */
  RothProfitSharingPlan: "roth profit sharing plan",
  /** The `roth thrift savings plan` account subtype. */
  RothThriftSavingsPlan: "roth thrift savings plan",
  /** The `rrif` account subtype. */
  Rrif: "rrif",
  /** The `rrsp` account subtype. */
  Rrsp: "rrsp",
  /** The `sarsep` account subtype. */
  Sarsep: "sarsep",
  /** The `savings` account subtype. */
  Savings: "savings",
  /** The `sep ira` account subtype. */
  SepIra: "sep ira",
  /** The `simple ira` account subtype. */
  SimpleIra: "simple ira",
  /** The `sipp` account subtype. */
  Sipp: "sipp",
  /** The `stock plan` account subtype. */
  StockPlan: "stock plan",
  /** The `student` account subtype. */
  Student: "student",
  /** The `thrift savings plan` account subtype. */
  ThriftSavingsPlan: "thrift savings plan",
  /** The `tfsa` account subtype. */
  Tfsa: "tfsa",
  /** The `trust` account subtype. */
  Trust: "trust",
  /** The `ugma` account subtype. */
  Ugma: "ugma",
  /** The `utma` account subtype. */
  Utma: "utma",
  /** The `variable annuity` account subtype. */
  VariableAnnuity: "variable annuity",
} as const;
export type AccountSubtype = (typeof AccountSubtype)[keyof typeof AccountSubtype] | (string & {});

export const accountSubtypeSchema: EnumSchema<AccountSubtype> = s.enumOf<AccountSubtype>(AccountSubtype);
