import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { status1Schema, type Status1 } from "./status1.js";

export type IncidentUpdate = {
  description?: string;
  status?: Status1;
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
