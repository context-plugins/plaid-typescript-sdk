import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about a report identifier and a report name. */
export type ReportingInformation = {
  /** Documentation not found in the MISMO model viewer and not provided by Freddie Mac. */
  reportingInformationIdentifier: string;
};

export const reportingInformationSchema: Schema<ReportingInformation> = s.object<ReportingInformation>({
  reportingInformationIdentifier: s.string(),
  _keysMap: {
    reportingInformationIdentifier: "ReportingInformationIdentifier",
  },
});
