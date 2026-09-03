import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ProcessorBalanceGetRequestOptions = {
  minLastUpdatedDatetime?: Date;
};

export const processorBalanceGetRequestOptionsSchema: Schema<ProcessorBalanceGetRequestOptions> =
  s.object<ProcessorBalanceGetRequestOptions>({
    minLastUpdatedDatetime: s.optional(s.dateTime()),
    _keysMap: {
      minLastUpdatedDatetime: "min_last_updated_datetime",
    },
  });
