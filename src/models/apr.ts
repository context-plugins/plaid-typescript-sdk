import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { aprTypeSchema, type AprType } from "./apr-type.js";

export type Apr = {
  aprPercentage: number;
  aprType: AprType;
  balanceSubjectToApr: number | null;
  interestChargeAmount: number | null;
};

export const aprSchema: Schema<Apr> = s.object<Apr>({
  aprPercentage: s.number(),
  aprType: aprTypeSchema,
  balanceSubjectToApr: s.nullable(s.number()),
  interestChargeAmount: s.nullable(s.number()),
  _keysMap: {
    aprPercentage: "apr_percentage",
    aprType: "apr_type",
    balanceSubjectToApr: "balance_subject_to_apr",
    interestChargeAmount: "interest_charge_amount",
  },
});
