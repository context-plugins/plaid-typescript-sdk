import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { incidentUpdateSchema, type IncidentUpdate } from "./incident-update.js";

export type HealthIncident = {
  startDate: Date;
  endDate?: Date | null;
  title: string;
  incidentUpdates: IncidentUpdate[];
};

export const healthIncidentSchema: Schema<HealthIncident> = s.object<HealthIncident>({
  startDate: s.dateTime(),
  endDate: s.optionalNullable(s.dateTime()),
  title: s.string(),
  incidentUpdates: s.array(s.lazy(() => incidentUpdateSchema)),
  _keysMap: {
    startDate: "start_date",
    endDate: "end_date",
    incidentUpdates: "incident_updates",
  },
});
