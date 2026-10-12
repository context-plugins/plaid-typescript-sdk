import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** An object containing metadata about the provided transactions. */
export type PrismCashScoreMetadata = {
  /** Number of days since the oldest transaction. */
  maxAge: number | null;
  /** Number of days since the latest transaction. */
  minAge: number | null;
  /** Number of days since the latest credit transaction. */
  minAgeCredit: number | null;
  /** Number of days since the latest debit transaction. */
  minAgeDebit: number | null;
  /** Number of days since the oldest debit transaction. */
  maxAgeDebit: number | null;
  /** Number of days since the oldest credit transaction. */
  maxAgeCredit: number | null;
  /** Number of credit transactions. */
  numTrxnCredit: number | null;
  /** Number of debit transactions. */
  numTrxnDebit: number | null;
  /** Number of credit transactions in the last 30 days. */
  l1MCreditValueCnt: number | null;
  /** Number of debit transactions in the last 30 days. */
  l1MDebitValueCnt: number | null;
};

export const prismCashScoreMetadataSchema: Schema<PrismCashScoreMetadata> = s.object<PrismCashScoreMetadata>({
  maxAge: s.nullable(s.int()),
  minAge: s.nullable(s.int()),
  minAgeCredit: s.nullable(s.int()),
  minAgeDebit: s.nullable(s.int()),
  maxAgeDebit: s.nullable(s.int()),
  maxAgeCredit: s.nullable(s.int()),
  numTrxnCredit: s.nullable(s.int()),
  numTrxnDebit: s.nullable(s.int()),
  l1MCreditValueCnt: s.nullable(s.int()),
  l1MDebitValueCnt: s.nullable(s.int()),
  _keysMap: {
    maxAge: "max_age",
    minAge: "min_age",
    minAgeCredit: "min_age_credit",
    minAgeDebit: "min_age_debit",
    maxAgeDebit: "max_age_debit",
    maxAgeCredit: "max_age_credit",
    numTrxnCredit: "num_trxn_credit",
    numTrxnDebit: "num_trxn_debit",
    l1MCreditValueCnt: "l1m_credit_value_cnt",
    l1MDebitValueCnt: "l1m_debit_value_cnt",
  },
});
