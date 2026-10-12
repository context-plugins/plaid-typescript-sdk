import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  userStatedIncomeSourceCategorySchema,
  type UserStatedIncomeSourceCategory,
} from "./user-stated-income-source-category.js";
import {
  userStatedIncomeSourceFrequencySchema,
  type UserStatedIncomeSourceFrequency,
} from "./user-stated-income-source-frequency.js";
import {
  userStatedIncomeSourcePayTypeSchema,
  type UserStatedIncomeSourcePayType,
} from "./user-stated-income-source-pay-type.js";

/** Specifies user stated income sources for the Income product */
export type LinkTokenCreateRequestUserStatedIncomeSource = {
  /** The employer corresponding to an income source specified by the user */
  employer?: string;
  /** The income category for a specified income source */
  category?: UserStatedIncomeSourceCategory;
  /** The income amount paid per cycle for a specified income source */
  payPerCycle?: number;
  /** The income amount paid annually for a specified income source */
  payAnnual?: number;
  /** The pay type - `GROSS`, `NET`, or `UNKNOWN` for a specified income source */
  payType?: UserStatedIncomeSourcePayType;
  /** The pay frequency of a specified income source */
  payFrequency?: UserStatedIncomeSourceFrequency;
};

export const linkTokenCreateRequestUserStatedIncomeSourceSchema: Schema<LinkTokenCreateRequestUserStatedIncomeSource> =
  s.object<LinkTokenCreateRequestUserStatedIncomeSource>({
    employer: s.optional(s.string()),
    category: s.optional(s.lazy(() => userStatedIncomeSourceCategorySchema)),
    payPerCycle: s.optional(s.float64()),
    payAnnual: s.optional(s.float64()),
    payType: s.optional(s.lazy(() => userStatedIncomeSourcePayTypeSchema)),
    payFrequency: s.optional(s.lazy(() => userStatedIncomeSourceFrequencySchema)),
    _keysMap: {
      payPerCycle: "pay_per_cycle",
      payAnnual: "pay_annual",
      payType: "pay_type",
      payFrequency: "pay_frequency",
    },
  });
