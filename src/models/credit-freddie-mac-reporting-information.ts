import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreditFreddieMacReportingInformation = {
  reportDateTime?: string;
  reportIdentifierType?: string;
  reportingInformationParentIdentifier?: string;
  reportingInformationIdentifier: string;
};

export const creditFreddieMacReportingInformationSchema: Schema<CreditFreddieMacReportingInformation> =
  s.object<CreditFreddieMacReportingInformation>({
    reportDateTime: s.optional(s.string()),
    reportIdentifierType: s.optional(s.string()),
    reportingInformationParentIdentifier: s.optional(s.string()),
    reportingInformationIdentifier: s.string(),
    _keysMap: {
      reportDateTime: "ReportDateTime",
      reportIdentifierType: "ReportIdentifierType",
      reportingInformationParentIdentifier: "ReportingInformationParentIdentifier",
      reportingInformationIdentifier: "ReportingInformationIdentifier",
    },
  });
