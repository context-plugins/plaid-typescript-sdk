import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { healthIncidentSchema, type HealthIncident } from "./health-incident.js";
import { productStatusSchema, type ProductStatus } from "./product-status.js";

export type InstitutionStatus = {
  itemLogins?: ProductStatus | null;
  transactionsUpdates?: ProductStatus | null;
  auth?: ProductStatus | null;
  identity?: ProductStatus | null;
  investmentsUpdates?: ProductStatus | null;
  liabilitiesUpdates?: ProductStatus | null;
  liabilities?: ProductStatus | null;
  investments?: ProductStatus | null;
  healthIncidents?: HealthIncident[] | null;
};

export const institutionStatusSchema: Schema<InstitutionStatus> = s.object<InstitutionStatus>({
  itemLogins: s.optionalNullable(s.lazy(() => productStatusSchema)),
  transactionsUpdates: s.optionalNullable(s.lazy(() => productStatusSchema)),
  auth: s.optionalNullable(s.lazy(() => productStatusSchema)),
  identity: s.optionalNullable(s.lazy(() => productStatusSchema)),
  investmentsUpdates: s.optionalNullable(s.lazy(() => productStatusSchema)),
  liabilitiesUpdates: s.optionalNullable(s.lazy(() => productStatusSchema)),
  liabilities: s.optionalNullable(s.lazy(() => productStatusSchema)),
  investments: s.optionalNullable(s.lazy(() => productStatusSchema)),
  healthIncidents: s.optionalNullable(s.array(s.lazy(() => healthIncidentSchema))),
  _keysMap: {
    itemLogins: "item_logins",
    transactionsUpdates: "transactions_updates",
    investmentsUpdates: "investments_updates",
    liabilitiesUpdates: "liabilities_updates",
    healthIncidents: "health_incidents",
  },
});
