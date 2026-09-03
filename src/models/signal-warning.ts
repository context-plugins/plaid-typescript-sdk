import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SignalWarning = {
  warningType?: string;
  warningCode?: string;
  warningMessage?: string;
};

export const signalWarningSchema: Schema<SignalWarning> = s.object<SignalWarning>({
  warningType: s.optional(s.string()),
  warningCode: s.optional(s.string()),
  warningMessage: s.optional(s.string()),
  _keysMap: {
    warningType: "warning_type",
    warningCode: "warning_code",
    warningMessage: "warning_message",
  },
});
