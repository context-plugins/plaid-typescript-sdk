import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ReportingInformation = {
  reportingInformationIdentifier: string;
};

export const reportingInformationSchema: Schema<ReportingInformation> = s.object<ReportingInformation>({
  reportingInformationIdentifier: s.string(),
  _keysMap: {
    reportingInformationIdentifier: "ReportingInformationIdentifier",
  },
});
