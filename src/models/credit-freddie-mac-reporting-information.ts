import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about a report identifier and a report name. */
export type CreditFreddieMacReportingInformation = {
  /** Documentation not found in the MISMO model viewer and not provided by Freddie Mac. */
  reportDateTime?: string;
  /**
   * Documentation not found in the MISMO model viewer and not provided by Freddie Mac. The value
   * can only be "ReportID".
   */
  reportIdentifierType?: string;
  /** Documentation not found in the MISMO model viewer and not provided by Freddie Mac. */
  reportingInformationParentIdentifier?: string;
  /** Documentation not found in the MISMO model viewer and not provided by Freddie Mac. */
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
