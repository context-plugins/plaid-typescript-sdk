import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DataSources = {
  Institution: "INSTITUTION",
  InstitutionMask: "INSTITUTION_MASK",
  User: "USER",
} as const;
export type DataSources = (typeof DataSources)[keyof typeof DataSources] | (string & {});

export const dataSourcesSchema: EnumSchema<DataSources> = s.enumOf<DataSources>(DataSources);
