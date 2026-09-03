import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dataSourcesSchema, type DataSources } from "./data-sources.js";

export type InvestmentsAuthDataSources = {
  numbers?: DataSources;
  owners?: DataSources;
  holdings?: DataSources;
};

export const investmentsAuthDataSourcesSchema: Schema<InvestmentsAuthDataSources> =
  s.object<InvestmentsAuthDataSources>({
    numbers: s.optional(s.lazy(() => dataSourcesSchema)),
    owners: s.optional(s.lazy(() => dataSourcesSchema)),
    holdings: s.optional(s.lazy(() => dataSourcesSchema)),
  });
