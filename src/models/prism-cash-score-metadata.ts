import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PrismCashScoreMetadata = {
  maxAge: number | null;
  minAge: number | null;
  minAgeCredit: number | null;
  minAgeDebit: number | null;
  maxAgeDebit: number | null;
  maxAgeCredit: number | null;
  numTrxnCredit: number | null;
  numTrxnDebit: number | null;
  l1MCreditValueCnt: number | null;
  l1MDebitValueCnt: number | null;
};

export const prismCashScoreMetadataSchema: Schema<PrismCashScoreMetadata> = s.object<PrismCashScoreMetadata>({
  maxAge: s.nullable(s.number()),
  minAge: s.nullable(s.number()),
  minAgeCredit: s.nullable(s.number()),
  minAgeDebit: s.nullable(s.number()),
  maxAgeDebit: s.nullable(s.number()),
  maxAgeCredit: s.nullable(s.number()),
  numTrxnCredit: s.nullable(s.number()),
  numTrxnDebit: s.nullable(s.number()),
  l1MCreditValueCnt: s.nullable(s.number()),
  l1MDebitValueCnt: s.nullable(s.number()),
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
