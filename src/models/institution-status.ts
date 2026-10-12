import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { healthIncidentSchema, type HealthIncident } from "./health-incident.js";
import { productStatusSchema, type ProductStatus } from "./product-status.js";

/**
 * The status of an institution is determined by the health of its Item logins, Transactions
 * updates, Investments updates, Liabilities updates, Auth requests, Balance requests, Identity
 * requests, Investments requests, and Liabilities requests. A login attempt is conducted during the
 * initial Item add in Link. If there is not enough traffic to accurately calculate an institution's
 * status, Plaid will return null rather than potentially inaccurate data.
 *
 * Institution status is accessible in the Dashboard and via the API using the
 * `/institutions/get_by_id` endpoint with the `options.include_status` option set to true. Note
 * that institution status is not available in the Sandbox environment.
 */
export type InstitutionStatus = {
  /**
   * A representation of the status health of a request type. Auth requests, Balance requests,
   * Identity requests, Investments requests, Liabilities requests, Transactions updates,
   * Investments updates, Liabilities updates, and Item logins each have their own status object.
   */
  itemLogins?: ProductStatus | null;
  /**
   * A representation of the status health of a request type. Auth requests, Balance requests,
   * Identity requests, Investments requests, Liabilities requests, Transactions updates,
   * Investments updates, Liabilities updates, and Item logins each have their own status object.
   */
  transactionsUpdates?: ProductStatus | null;
  /**
   * A representation of the status health of a request type. Auth requests, Balance requests,
   * Identity requests, Investments requests, Liabilities requests, Transactions updates,
   * Investments updates, Liabilities updates, and Item logins each have their own status object.
   */
  auth?: ProductStatus | null;
  /**
   * A representation of the status health of a request type. Auth requests, Balance requests,
   * Identity requests, Investments requests, Liabilities requests, Transactions updates,
   * Investments updates, Liabilities updates, and Item logins each have their own status object.
   */
  identity?: ProductStatus | null;
  /**
   * A representation of the status health of a request type. Auth requests, Balance requests,
   * Identity requests, Investments requests, Liabilities requests, Transactions updates,
   * Investments updates, Liabilities updates, and Item logins each have their own status object.
   */
  investmentsUpdates?: ProductStatus | null;
  /**
   * A representation of the status health of a request type. Auth requests, Balance requests,
   * Identity requests, Investments requests, Liabilities requests, Transactions updates,
   * Investments updates, Liabilities updates, and Item logins each have their own status object.
   */
  liabilitiesUpdates?: ProductStatus | null;
  /**
   * A representation of the status health of a request type. Auth requests, Balance requests,
   * Identity requests, Investments requests, Liabilities requests, Transactions updates,
   * Investments updates, Liabilities updates, and Item logins each have their own status object.
   */
  liabilities?: ProductStatus | null;
  /**
   * A representation of the status health of a request type. Auth requests, Balance requests,
   * Identity requests, Investments requests, Liabilities requests, Transactions updates,
   * Investments updates, Liabilities updates, and Item logins each have their own status object.
   */
  investments?: ProductStatus | null;
  /** Details of recent health incidents associated with the institution. */
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
