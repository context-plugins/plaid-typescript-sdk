import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { beaconReportTypeSchema, type BeaconReportType } from "./beacon-report-type.js";

export type BeaconReportSyndicationOriginalReport = {
  id: string | null;
  createdAt: Date;
  type: BeaconReportType;
  fraudDate: string | null;
  eventDate: string;
};

export const beaconReportSyndicationOriginalReportSchema: Schema<BeaconReportSyndicationOriginalReport> =
  s.object<BeaconReportSyndicationOriginalReport>({
    id: s.nullable(s.string()),
    createdAt: s.dateTime(),
    type: beaconReportTypeSchema,
    fraudDate: s.nullable(s.dateOnly()),
    eventDate: s.dateOnly(),
    _keysMap: {
      createdAt: "created_at",
      fraudDate: "fraud_date",
      eventDate: "event_date",
    },
  });
