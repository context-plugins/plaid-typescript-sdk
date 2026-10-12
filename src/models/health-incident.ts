import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { incidentUpdateSchema, type IncidentUpdate } from "./incident-update.js";

/** A status health incident */
export type HealthIncident = {
  /**
   * The start date of the incident, in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format, e.g.
   * `"2020-10-30T15:26:48Z"`.
   */
  startDate: Date;
  /**
   * The end date of the incident, in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format, e.g.
   * `"2020-10-30T15:26:48Z"`.
   */
  endDate?: Date | null;
  /** The title of the incident */
  title: string;
  /** Updates on the health incident. */
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
