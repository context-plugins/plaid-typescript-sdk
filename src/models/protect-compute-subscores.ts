import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ProtectComputeSubscores = {
  cashAdvanceBucket025?: number | null;
  cashAdvanceBucket2550?: number | null;
  cashAdvanceBucket50100?: number | null;
  cashAdvanceBucket100200?: number | null;
  cashAdvanceBucket200300?: number | null;
  cashAdvanceBucket300400?: number | null;
  cashAdvanceBucket400500?: number | null;
};

export const protectComputeSubscoresSchema: Schema<ProtectComputeSubscores> =
  s.object<ProtectComputeSubscores>({
    cashAdvanceBucket025: s.optionalNullable(s.number()),
    cashAdvanceBucket2550: s.optionalNullable(s.number()),
    cashAdvanceBucket50100: s.optionalNullable(s.number()),
    cashAdvanceBucket100200: s.optionalNullable(s.number()),
    cashAdvanceBucket200300: s.optionalNullable(s.number()),
    cashAdvanceBucket300400: s.optionalNullable(s.number()),
    cashAdvanceBucket400500: s.optionalNullable(s.number()),
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
