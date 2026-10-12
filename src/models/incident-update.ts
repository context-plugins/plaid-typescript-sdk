import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { status1Schema, type Status1 } from "./status1.js";

/** An update on the health incident */
export type IncidentUpdate = {
  /** The content of the update. */
  description?: string;
  /** The status of the incident. */
  status?: Status1;
  /**
   * The date when the update was published, in [ISO 8601](https://wikipedia.org/wiki/ISO_8601)
   * format, e.g. `"2020-10-30T15:26:48Z"`.
   */
  updatedDate?: Date;
};

export const incidentUpdateSchema: Schema<IncidentUpdate> = s.object<IncidentUpdate>({
  description: s.optional(s.string()),
  status: s.optional(s.lazy(() => status1Schema)),
  updatedDate: s.optional(s.dateTime()),
  _keysMap: {
    updatedDate: "updated_date",
  },
});
