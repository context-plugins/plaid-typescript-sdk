import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fdxConsentResourceTypeSchema, type FdxConsentResourceType } from "./fdx-consent-resource-type.js";
import { fdxDataClusterSchema, type FdxDataCluster } from "./fdx-data-cluster.js";

export type FdxConsentGrantResource = {
  resourceType: FdxConsentResourceType;
  resourceId: string;
  dataClusters: FdxDataCluster[];
};

export const fdxConsentGrantResourceSchema: Schema<FdxConsentGrantResource> =
  s.object<FdxConsentGrantResource>({
    resourceType: fdxConsentResourceTypeSchema,
    resourceId: s.string(),
    dataClusters: s.array(s.lazy(() => fdxDataClusterSchema)),
  });
