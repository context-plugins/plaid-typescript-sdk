import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Per-bucket subscores returned alongside the overall Trust Index score. For cash-advance models,
 * each key maps to an amount-bucket subscore (0-100); higher values indicate lower fraud risk. Only
 * buckets that were scored are included in the response.
 */
export type ProtectComputeSubscores = {
  /** Subscore for cash advance amounts in the range $0-$25. */
  cashAdvanceBucket025?: number | null;
  /** Subscore for cash advance amounts in the range $25-$50. */
  cashAdvanceBucket2550?: number | null;
  /** Subscore for cash advance amounts in the range $50-$100. */
  cashAdvanceBucket50100?: number | null;
  /** Subscore for cash advance amounts in the range $100-$200. */
  cashAdvanceBucket100200?: number | null;
  /** Subscore for cash advance amounts in the range $200-$300. */
  cashAdvanceBucket200300?: number | null;
  /** Subscore for cash advance amounts in the range $300-$400. */
  cashAdvanceBucket300400?: number | null;
  /** Subscore for cash advance amounts in the range $400-$500. */
  cashAdvanceBucket400500?: number | null;
};

export const protectComputeSubscoresSchema: Schema<ProtectComputeSubscores> =
  s.object<ProtectComputeSubscores>({
    cashAdvanceBucket025: s.optionalNullable(s.int()),
    cashAdvanceBucket2550: s.optionalNullable(s.int()),
    cashAdvanceBucket50100: s.optionalNullable(s.int()),
    cashAdvanceBucket100200: s.optionalNullable(s.int()),
    cashAdvanceBucket200300: s.optionalNullable(s.int()),
    cashAdvanceBucket300400: s.optionalNullable(s.int()),
    cashAdvanceBucket400500: s.optionalNullable(s.int()),
    _keysMap: {
      cashAdvanceBucket025: "cash_advance_bucket_0_25",
      cashAdvanceBucket2550: "cash_advance_bucket_25_50",
      cashAdvanceBucket50100: "cash_advance_bucket_50_100",
      cashAdvanceBucket100200: "cash_advance_bucket_100_200",
      cashAdvanceBucket200300: "cash_advance_bucket_200_300",
      cashAdvanceBucket300400: "cash_advance_bucket_300_400",
      cashAdvanceBucket400500: "cash_advance_bucket_400_500",
    },
  });
