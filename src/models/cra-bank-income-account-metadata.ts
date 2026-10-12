import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** An object containing metadata about the extracted account. */
export type CraBankIncomeAccountMetadata = {
  /**
   * The date of the earliest extracted transaction, in [ISO
   * 8601](https://wikipedia.org/wiki/ISO_8601) format ("yyyy-mm-dd").
   */
  startDate: string | null;
  /**
   * The date of the most recent extracted transaction, in [ISO
   * 8601](https://wikipedia.org/wiki/ISO_8601) format ("yyyy-mm-dd").
   */
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
