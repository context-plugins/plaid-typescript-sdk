import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CraBankIncomeAccountMetadata = {
  startDate: string | null;
  endDate: string | null;
};

export const craBankIncomeAccountMetadataSchema: Schema<CraBankIncomeAccountMetadata> =
  s.object<CraBankIncomeAccountMetadata>({
    startDate: s.nullable(s.dateOnly()),
    endDate: s.nullable(s.dateOnly()),
    _keysMap: {
      startDate: "start_date",
      endDate: "end_date",
    },
  });
