import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Metadata about the extracted account. */
export type BaseReportAccountMetadata = {
  /**
   * The beginning of the range of the financial institution provided data for the account, in [ISO
   * 8601](https://wikipedia.org/wiki/ISO_8601) format ("yyyy-mm-dd").
   */
  startDate: string | null;
  /**
   * The end of the range of the financial institution provided data for the account, in [ISO
   * 8601](https://wikipedia.org/wiki/ISO_8601) format ("yyyy-mm-dd").
   */
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
