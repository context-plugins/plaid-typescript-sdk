import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { individualWatchlistCodeSchema, type IndividualWatchlistCode } from "./individual-watchlist-code.js";
import { programNameSensitivitySchema, type ProgramNameSensitivity } from "./program-name-sensitivity.js";
import {
  watchlistScreeningAuditTrailSchema,
  type WatchlistScreeningAuditTrail,
} from "./watchlist-screening-audit-trail.js";

export type IndividualWatchlistProgram = {
  id: string;
  createdAt: Date;
  isRescanningEnabled: boolean;
  listsEnabled: IndividualWatchlistCode[];
  name: string;
  nameSensitivity: ProgramNameSensitivity;
  auditTrail: WatchlistScreeningAuditTrail;
  isArchived: boolean;
};

export const individualWatchlistProgramSchema: Schema<IndividualWatchlistProgram> =
  s.object<IndividualWatchlistProgram>({
    id: s.string(),
    createdAt: s.dateTime(),
    isRescanningEnabled: s.boolean(),
    listsEnabled: s.array(s.lazy(() => individualWatchlistCodeSchema)),
    name: s.string(),
    nameSensitivity: programNameSensitivitySchema,
    auditTrail: watchlistScreeningAuditTrailSchema,
    isArchived: s.boolean(),
    _keysMap: {
      createdAt: "created_at",
      isRescanningEnabled: "is_rescanning_enabled",
      listsEnabled: "lists_enabled",
      nameSensitivity: "name_sensitivity",
      auditTrail: "audit_trail",
      isArchived: "is_archived",
    },
  });
