import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BaseReportAccountMetadata = {
  startDate: string | null;
  endDate: string | null;
};

export const baseReportAccountMetadataSchema: Schema<BaseReportAccountMetadata> =
  s.object<BaseReportAccountMetadata>({
    startDate: s.nullable(s.dateOnly()),
    endDate: s.nullable(s.dateOnly()),
    _keysMap: {
      startDate: "start_date",
      endDate: "end_date",
    },
  });
