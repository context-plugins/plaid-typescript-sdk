import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fdxConsentResourceTypeSchema, type FdxConsentResourceType } from "./fdx-consent-resource-type.js";
import { fdxDataClusterSchema, type FdxDataCluster } from "./fdx-data-cluster.js";

/** One permissioned resource on a consent grant. */
export type FdxConsentGrantResource = {
  /** Type of resource permissioned on a consent grant. */
  resourceType: FdxConsentResourceType;
  /** Identifier of the resource permissioned. */
  resourceId: string;
  /** Names of clusters of data elements permissioned. */
  dataClusters: FdxDataCluster[];
};

export const fdxConsentGrantResourceSchema: Schema<FdxConsentGrantResource> =
  s.object<FdxConsentGrantResource>({
    resourceType: fdxConsentResourceTypeSchema,
    resourceId: s.string(),
    dataClusters: s.array(s.lazy(() => fdxDataClusterSchema)),
  });
