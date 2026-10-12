# Reference

> Source: [ThePlaidApiClient](src/client.ts)

<details>
<summary><code>accountsBalanceGet(request: ThePlaidApiClient.AccountsBalanceGetRequestParams, options?: RequestOptions): ApiPromise&lt;AccountsGetResponse, ThePlaidApiClient.AccountsBalanceGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/accounts/balance/get` endpoint returns the real-time balance for each of an Item's accounts. While other endpoints, such as `/accounts/get`, return a balance object,  `/accounts/balance/get` forces the available and current balance fields to be refreshed rather than cached. This endpoint can be used for existing Items that were added via any of Plaid's other products. This endpoint can be used as long as Link has been initialized with any other product; `balance` itself is not a product that can be used to initialize Link. As this endpoint triggers a synchronous request for fresh data, latency may be higher than for other Plaid endpoints (typically less than 10 seconds, but occasionally up to 30 seconds or more); if you encounter errors, you may find it necessary to adjust your timeout period when making requests.

Note: If you are getting real-time balance for the purpose of assessing the return risk of a proposed ACH transaction, it is recommended to use `/signal/evaluate` instead of `/accounts/balance/get`. `/signal/evaluate` returns the same real-time balance information and also provides access to Signal Rules, which provides no-code transaction business logic configuration, backtesting and recommendations for tuning your transaction acceptance logic, and the ability to easily switch between Balance and Signal Transaction Scores as needed for ultra-low-latency, ML-powered risk assessments. For more details, see the [Balance documentation](https://plaid.com/docs/balance/#balance-integration-options).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.accountsBalanceGet({
    body: {
      accessToken: "string",
      secret: "string",
      clientId: "string",
      options: { accountIds: ["string"] },
    },
  });
  // TODO: Handle 'response' of type AccountsGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.AccountsBalanceGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.accountsBalanceGet({
  body: { accessToken: "string", secret: "string", clientId: "string", options: { accountIds: ["string"] } },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AccountsGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[AccountsBalanceGetRequest](src/models/accounts-balance-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.accountsBalanceGet(request)`

- **OnSuccess**: <code>[AccountsGetResponse](src/models/accounts-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.AccountsBalanceGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.accountsBalanceGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AccountsGetResponse, ThePlaidApiClient.AccountsBalanceGetError&gt;</code>, with `result.value` of type <code>[AccountsGetResponse](src/models/accounts-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>accountsGet(request: ThePlaidApiClient.AccountsGetRequestParams, options?: RequestOptions): ApiPromise&lt;AccountsGetResponse, ThePlaidApiClient.AccountsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/accounts/get` endpoint can be used to retrieve a list of accounts associated with any linked Item. Plaid will only return active bank accounts -- that is, accounts that are not closed and are capable of carrying a balance.
To return new accounts that were created after the user linked their Item, you can listen for the [`NEW_ACCOUNTS_AVAILABLE`](https://plaid.com/docs/api/items/#new_accounts_available) webhook and then use Link's [update mode](https://plaid.com/docs/link/update-mode/) to request that the user share this new account with you.

`/accounts/get` is free to use and retrieves cached information, rather than extracting fresh information from the institution. The balance returned will reflect the balance at the time of the last successful Item update. If the Item is enabled for a regularly updating product, such as Transactions, Investments, or Liabilities, the balance will typically update about once a day, as long as the Item is healthy. If the Item is enabled only for products that do not frequently update, such as Auth or Identity, balance data may be much older.

For real-time balance information, use the paid endpoints `/accounts/balance/get` or `/signal/evaluate` instead.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.accountsGet({
    body: {
      clientId: "string",
      secret: "string",
      accessToken: "string",
      options: { accountIds: ["string"] },
    },
  });
  // TODO: Handle 'response' of type AccountsGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.AccountsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.accountsGet({
  body: { clientId: "string", secret: "string", accessToken: "string", options: { accountIds: ["string"] } },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AccountsGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[AccountsGetRequest](src/models/accounts-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.accountsGet(request)`

- **OnSuccess**: <code>[AccountsGetResponse](src/models/accounts-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.AccountsGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.accountsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AccountsGetResponse, ThePlaidApiClient.AccountsGetError&gt;</code>, with `result.value` of type <code>[AccountsGetResponse](src/models/accounts-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>applicationGet(request: ThePlaidApiClient.ApplicationGetRequestParams, options?: RequestOptions): ApiPromise&lt;ApplicationGetResponse, ThePlaidApiClient.ApplicationGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Allows financial institutions to retrieve information about Plaid clients for the purpose of building control-tower experiences

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.applicationGet({
    body: {
      clientId: "some example string",
      secret: "some example string",
      applicationId: "some example string",
    },
  });
  // TODO: Handle 'response' of type ApplicationGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.ApplicationGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.applicationGet({
  body: {
    clientId: "some example string",
    secret: "some example string",
    applicationId: "some example string",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApplicationGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ApplicationGetRequest](src/models/application-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.applicationGet(request)`

- **OnSuccess**: <code>[ApplicationGetResponse](src/models/application-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.ApplicationGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.applicationGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApplicationGetResponse, ThePlaidApiClient.ApplicationGetError&gt;</code>, with `result.value` of type <code>[ApplicationGetResponse](src/models/application-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>assetReportAuditCopyCreate(request: ThePlaidApiClient.AssetReportAuditCopyCreateRequestParams, options?: RequestOptions): ApiPromise&lt;AssetReportAuditCopyCreateResponse, ThePlaidApiClient.AssetReportAuditCopyCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Plaid can provide an Audit Copy of any Asset Report directly to a participating third party on your behalf. For example, Plaid can supply an Audit Copy directly to the GSEs on your behalf if you participate in Fannie Mae's Day 1 Certainty™ program or utilize Freddie Mac's Loan Product Advisor® (LPA®) Asset and Income Modeler (AIM). An Audit Copy contains the same underlying data as the Asset Report.

To grant access to an Audit Copy, use the `/asset_report/audit_copy/create` endpoint to create an `audit_copy_token` and then pass that token to the third party who needs access. Each third party has its own `auditor_id`, for example `fannie_mae`. You'll need to create a separate Audit Copy for each third party to whom you want to grant access to the Report.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.assetReportAuditCopyCreate({
    body: { assetReportToken: "some example string" },
  });
  // TODO: Handle 'response' of type AssetReportAuditCopyCreateResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.AssetReportAuditCopyCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.assetReportAuditCopyCreate({
  body: { assetReportToken: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AssetReportAuditCopyCreateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[AssetReportAuditCopyCreateRequest](src/models/asset-report-audit-copy-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.assetReportAuditCopyCreate(request)`

- **OnSuccess**: <code>[AssetReportAuditCopyCreateResponse](src/models/asset-report-audit-copy-create-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.AssetReportAuditCopyCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.assetReportAuditCopyCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AssetReportAuditCopyCreateResponse, ThePlaidApiClient.AssetReportAuditCopyCreateError&gt;</code>, with `result.value` of type <code>[AssetReportAuditCopyCreateResponse](src/models/asset-report-audit-copy-create-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>assetReportAuditCopyGet(request: ThePlaidApiClient.AssetReportAuditCopyGetRequestParams, options?: RequestOptions): ApiPromise&lt;AssetReportGetResponse, ThePlaidApiClient.AssetReportAuditCopyGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

`/asset_report/audit_copy/get` allows auditors to get a copy of an Asset Report that was previously shared via the `/asset_report/audit_copy/create` endpoint.  The caller of `/asset_report/audit_copy/create` must provide the `audit_copy_token` to the auditor.  This token can then be used to call `/asset_report/audit_copy/get`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.assetReportAuditCopyGet({ body: { auditCopyToken: "some example string" } });
  // TODO: Handle 'response' of type AssetReportGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.AssetReportAuditCopyGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.assetReportAuditCopyGet({
  body: { auditCopyToken: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AssetReportGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[AssetReportAuditCopyGetRequest](src/models/asset-report-audit-copy-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.assetReportAuditCopyGet(request)`

- **OnSuccess**: <code>[AssetReportGetResponse](src/models/asset-report-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.AssetReportAuditCopyGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.assetReportAuditCopyGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AssetReportGetResponse, ThePlaidApiClient.AssetReportAuditCopyGetError&gt;</code>, with `result.value` of type <code>[AssetReportGetResponse](src/models/asset-report-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>assetReportAuditCopyPdfGet(request: ThePlaidApiClient.AssetReportAuditCopyPdfGetRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, ThePlaidApiClient.AssetReportAuditCopyPdfGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/asset_report/audit_copy/pdf/get` endpoint retrieves an Asset Report Audit Copy in PDF format. The caller must provide the `audit_copy_token` that was shared via the `/asset_report/audit_copy/create` endpoint.

The response to `/asset_report/audit_copy/pdf/get` is the PDF binary data. The `request_id` is returned in the `Plaid-Request-ID` header.

[View a sample PDF Asset Report](https://plaid.com/documents/sample-asset-report.pdf).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.assetReportAuditCopyPdfGet({ body: { auditCopyToken: "some example string" } });
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.AssetReportAuditCopyPdfGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.assetReportAuditCopyPdfGet({
  body: { auditCopyToken: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[AssetReportAuditCopyPdfGetRequest](src/models/asset-report-audit-copy-pdf-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.assetReportAuditCopyPdfGet(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ThePlaidApiClient.AssetReportAuditCopyPdfGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.assetReportAuditCopyPdfGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ThePlaidApiClient.AssetReportAuditCopyPdfGetError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>assetReportAuditCopyRemove(request: ThePlaidApiClient.AssetReportAuditCopyRemoveRequestParams, options?: RequestOptions): ApiPromise&lt;AssetReportAuditCopyRemoveResponse, ThePlaidApiClient.AssetReportAuditCopyRemoveError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/asset_report/audit_copy/remove` endpoint allows you to remove an Audit Copy. Removing an Audit Copy invalidates the `audit_copy_token` associated with it, meaning both you and any third parties holding the token will no longer be able to use it to access Report data. Items associated with the Asset Report, the Asset Report itself and other Audit Copies of it are not affected and will remain accessible after removing the given Audit Copy.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.assetReportAuditCopyRemove({
    body: { auditCopyToken: "some example string" },
  });
  // TODO: Handle 'response' of type AssetReportAuditCopyRemoveResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.AssetReportAuditCopyRemoveError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.assetReportAuditCopyRemove({
  body: { auditCopyToken: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AssetReportAuditCopyRemoveResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[AssetReportAuditCopyRemoveRequest](src/models/asset-report-audit-copy-remove-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.assetReportAuditCopyRemove(request)`

- **OnSuccess**: <code>[AssetReportAuditCopyRemoveResponse](src/models/asset-report-audit-copy-remove-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.AssetReportAuditCopyRemoveError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.assetReportAuditCopyRemove(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AssetReportAuditCopyRemoveResponse, ThePlaidApiClient.AssetReportAuditCopyRemoveError&gt;</code>, with `result.value` of type <code>[AssetReportAuditCopyRemoveResponse](src/models/asset-report-audit-copy-remove-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>assetReportCreate(request: ThePlaidApiClient.AssetReportCreateRequestParams, options?: RequestOptions): ApiPromise&lt;AssetReportCreateResponse, ThePlaidApiClient.AssetReportCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/asset_report/create` endpoint initiates the process of creating an Asset Report, which can then be retrieved by passing the `asset_report_token` return value to the `/asset_report/get` or `/asset_report/pdf/get` endpoints.

The Asset Report takes some time to be created and is not available immediately after calling `/asset_report/create`. The exact amount of time to create the report will vary depending on how many days of history are requested and will typically range from a few seconds to about one minute. When the Asset Report is ready to be retrieved using `/asset_report/get` or `/asset_report/pdf/get`, Plaid will fire a `PRODUCT_READY` webhook. For full details of the webhook schema, see [Asset Report webhooks](https://plaid.com/docs/api/products/assets/#webhooks).

The `/asset_report/create` endpoint creates an Asset Report at a moment in time. Asset Reports are immutable. To get an updated Asset Report, use the `/asset_report/refresh` endpoint.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.assetReportCreate({ body: { daysRequested: 1 } });
  // TODO: Handle 'response' of type AssetReportCreateResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.AssetReportCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.assetReportCreate({ body: { daysRequested: 1 } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AssetReportCreateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[AssetReportCreateRequest](src/models/asset-report-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.assetReportCreate(request)`

- **OnSuccess**: <code>[AssetReportCreateResponse](src/models/asset-report-create-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.AssetReportCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.assetReportCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AssetReportCreateResponse, ThePlaidApiClient.AssetReportCreateError&gt;</code>, with `result.value` of type <code>[AssetReportCreateResponse](src/models/asset-report-create-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>assetReportFilter(request: ThePlaidApiClient.AssetReportFilterRequestParams, options?: RequestOptions): ApiPromise&lt;AssetReportFilterResponse, ThePlaidApiClient.AssetReportFilterError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

By default, an Asset Report will contain all of the accounts on a given Item. In some cases, you may not want the Asset Report to contain all accounts. For example, you might have the end user choose which accounts are relevant in Link using the Account Select view, which you can enable in the dashboard. Or, you might always exclude certain account types or subtypes, which you can identify by using the `/accounts/get` endpoint. To narrow an Asset Report to only a subset of accounts, use the `/asset_report/filter` endpoint.

To exclude certain Accounts from an Asset Report, first use the `/asset_report/create` endpoint to create the report, then send the `asset_report_token` along with a list of `account_ids` to exclude to the `/asset_report/filter` endpoint, to create a new Asset Report which contains only a subset of the original Asset Report's data.

Because Asset Reports are immutable, calling `/asset_report/filter` does not alter the original Asset Report in any way; rather, `/asset_report/filter` creates a new Asset Report with a new token and id. Asset Reports created via `/asset_report/filter` do not contain new Asset data, and are not billed.

Plaid will fire a [`PRODUCT_READY`](https://plaid.com/docs/api/products/assets/#product_ready) webhook once generation of the filtered Asset Report has completed.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.assetReportFilter({
    body: { assetReportToken: "some example string", accountIdsToExclude: ["some example string"] },
  });
  // TODO: Handle 'response' of type AssetReportFilterResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.AssetReportFilterError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.assetReportFilter({
  body: { assetReportToken: "some example string", accountIdsToExclude: ["some example string"] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AssetReportFilterResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[AssetReportFilterRequest](src/models/asset-report-filter-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.assetReportFilter(request)`

- **OnSuccess**: <code>[AssetReportFilterResponse](src/models/asset-report-filter-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.AssetReportFilterError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.assetReportFilter(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AssetReportFilterResponse, ThePlaidApiClient.AssetReportFilterError&gt;</code>, with `result.value` of type <code>[AssetReportFilterResponse](src/models/asset-report-filter-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>assetReportGet(request: ThePlaidApiClient.AssetReportGetRequestParams, options?: RequestOptions): ApiPromise&lt;AssetReportGetResponse, ThePlaidApiClient.AssetReportGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/asset_report/get` endpoint retrieves the Asset Report in JSON format. Before calling `/asset_report/get`, you must first create the Asset Report using `/asset_report/create` (or filter an Asset Report using `/asset_report/filter`) and then wait for the [`PRODUCT_READY`](https://plaid.com/docs/api/products/assets/#product_ready) webhook to fire, indicating that the Report is ready to be retrieved.

By default, an Asset Report includes transaction descriptions as returned by the bank, as opposed to parsed and categorized by Plaid. You can also receive cleaned and categorized transactions, as well as additional insights like merchant name or location information. We call this an Asset Report with Insights. An Asset Report with Insights provides transaction category, location, and merchant information in addition to the transaction strings provided in a standard Asset Report. To retrieve an Asset Report with Insights, call the `/asset_report/get` endpoint with `include_insights` set to `true`.

For latency-sensitive applications, you can optionally call `/asset_report/create` with `options.add_ons` set to `["fast_assets"]`. This will cause Plaid to create two versions of the Asset Report: one with only current and available balance and identity information, and then later on the complete Asset Report. You will receive separate webhooks for each version of the Asset Report.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.assetReportGet({ body: {} });
  // TODO: Handle 'response' of type AssetReportGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.AssetReportGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.assetReportGet({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AssetReportGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[AssetReportGetRequest](src/models/asset-report-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.assetReportGet(request)`

- **OnSuccess**: <code>[AssetReportGetResponse](src/models/asset-report-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.AssetReportGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.assetReportGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AssetReportGetResponse, ThePlaidApiClient.AssetReportGetError&gt;</code>, with `result.value` of type <code>[AssetReportGetResponse](src/models/asset-report-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>assetReportPdfGet(request: ThePlaidApiClient.AssetReportPdfGetRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, ThePlaidApiClient.AssetReportPdfGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/asset_report/pdf/get` endpoint retrieves the Asset Report in PDF format. Before calling `/asset_report/pdf/get`, you must first create the Asset Report using `/asset_report/create` (or filter an Asset Report using `/asset_report/filter`) and then wait for the [`PRODUCT_READY`](https://plaid.com/docs/api/products/assets/#product_ready) webhook to fire, indicating that the Report is ready to be retrieved.

The response to `/asset_report/pdf/get` is the PDF binary data. The `request_id`  is returned in the `Plaid-Request-ID` header.

[View a sample PDF Asset Report](https://plaid.com/documents/sample-asset-report.pdf).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.assetReportPdfGet({ body: { assetReportToken: "some example string" } });
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.AssetReportPdfGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.assetReportPdfGet({
  body: { assetReportToken: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[AssetReportPdfGetRequest](src/models/asset-report-pdf-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.assetReportPdfGet(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ThePlaidApiClient.AssetReportPdfGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.assetReportPdfGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ThePlaidApiClient.AssetReportPdfGetError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>assetReportRefresh(request: ThePlaidApiClient.AssetReportRefreshRequestParams, options?: RequestOptions): ApiPromise&lt;AssetReportRefreshResponse, ThePlaidApiClient.AssetReportRefreshError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

An Asset Report is an immutable snapshot of a user's assets. In order to "refresh" an Asset Report you created previously, you can use the `/asset_report/refresh` endpoint to create a new Asset Report based on the old one, but with the most recent data available.

The new Asset Report will contain the same Items as the original Report, as well as the same filters applied by any call to `/asset_report/filter`. By default, the new Asset Report will also use the same parameters you submitted with your original `/asset_report/create` request, but the original `days_requested` value and the values of any parameters in the `options` object can be overridden with new values. To change these arguments, simply supply new values for them in your request to `/asset_report/refresh`. Submit an empty string ("") for any previously-populated fields you would like set as empty.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.assetReportRefresh({ body: { assetReportToken: "some example string" } });
  // TODO: Handle 'response' of type AssetReportRefreshResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.AssetReportRefreshError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.assetReportRefresh({
  body: { assetReportToken: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AssetReportRefreshResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[AssetReportRefreshRequest](src/models/asset-report-refresh-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.assetReportRefresh(request)`

- **OnSuccess**: <code>[AssetReportRefreshResponse](src/models/asset-report-refresh-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.AssetReportRefreshError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.assetReportRefresh(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AssetReportRefreshResponse, ThePlaidApiClient.AssetReportRefreshError&gt;</code>, with `result.value` of type <code>[AssetReportRefreshResponse](src/models/asset-report-refresh-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>assetReportRemove(request: ThePlaidApiClient.AssetReportRemoveRequestParams, options?: RequestOptions): ApiPromise&lt;AssetReportRemoveResponse, ThePlaidApiClient.AssetReportRemoveError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/item/remove` endpoint allows you to invalidate an `access_token`, meaning you will not be able to create new Asset Reports with it. Removing an Item does not affect any Asset Reports or Audit Copies you have already created, which will remain accessible until you remove them specifically.

The `/asset_report/remove` endpoint allows you to remove access to an Asset Report. Removing an Asset Report invalidates its `asset_report_token`, meaning you will no longer be able to use it to access Report data or create new Audit Copies. Removing an Asset Report does not affect the underlying Items, but does invalidate any `audit_copy_tokens` associated with the Asset Report.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.assetReportRemove({ body: { assetReportToken: "some example string" } });
  // TODO: Handle 'response' of type AssetReportRemoveResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.AssetReportRemoveError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.assetReportRemove({
  body: { assetReportToken: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AssetReportRemoveResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[AssetReportRemoveRequest](src/models/asset-report-remove-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.assetReportRemove(request)`

- **OnSuccess**: <code>[AssetReportRemoveResponse](src/models/asset-report-remove-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.AssetReportRemoveError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.assetReportRemove(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AssetReportRemoveResponse, ThePlaidApiClient.AssetReportRemoveError&gt;</code>, with `result.value` of type <code>[AssetReportRemoveResponse](src/models/asset-report-remove-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>authGet(request: ThePlaidApiClient.AuthGetRequestParams, options?: RequestOptions): ApiPromise&lt;AuthGetResponse, ThePlaidApiClient.AuthGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/auth/get` endpoint returns the bank account and bank identification numbers (such as routing numbers, for US accounts) associated with an Item's checking, savings, and cash management accounts, along with high-level account data and balances when available.

Versioning note: In API version 2017-03-08, the schema of the `numbers` object returned by this endpoint is substantially different. For details, see [Plaid API versioning](https://plaid.com/docs/api/versioning/#version-2018-05-22).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.authGet({ body: { accessToken: "some example string" } });
  // TODO: Handle 'response' of type AuthGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.AuthGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.authGet({ body: { accessToken: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AuthGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[AuthGetRequest](src/models/auth-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.authGet(request)`

- **OnSuccess**: <code>[AuthGetResponse](src/models/auth-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.AuthGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.authGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AuthGetResponse, ThePlaidApiClient.AuthGetError&gt;</code>, with `result.value` of type <code>[AuthGetResponse](src/models/auth-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>authVerify(request: ThePlaidApiClient.AuthVerifyRequestParams, options?: RequestOptions): ApiPromise&lt;AuthVerifyResponse, ThePlaidApiClient.AuthVerifyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/auth/verify` endpoint verifies bank account and routing numbers and (optionally) account owner names against Plaid's database via [Database Auth](https://plaid.com/docs/auth/coverage/database-auth/). It can be used to verify account numbers that were not collected via the Plaid Link flow.

This endpoint is currently in Early Availability; contact sales or your Plaid account manager to request access.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.authVerify({
    body: { numbers: { ach: { account: "some example string", routing: "some example string" } } },
  });
  // TODO: Handle 'response' of type AuthVerifyResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.AuthVerifyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.authVerify({
  body: { numbers: { ach: { account: "some example string", routing: "some example string" } } },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AuthVerifyResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[AuthVerifyRequest](src/models/auth-verify-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.authVerify(request)`

- **OnSuccess**: <code>[AuthVerifyResponse](src/models/auth-verify-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.AuthVerifyError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.authVerify(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AuthVerifyResponse, ThePlaidApiClient.AuthVerifyError&gt;</code>, with `result.value` of type <code>[AuthVerifyResponse](src/models/auth-verify-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bankTransferBalanceGet(request: ThePlaidApiClient.BankTransferBalanceGetRequestParams, options?: RequestOptions): ApiPromise&lt;BankTransferBalanceGetResponse, ThePlaidApiClient.BankTransferBalanceGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use the `/bank_transfer/balance/get` endpoint to see the available balance in your bank transfer account. Debit transfers increase this balance once their status is posted. Credit transfers decrease this balance when they are created.

The transactable balance shows the amount in your account that you are able to use for transfers, and is essentially your available balance minus your minimum balance.

Note that this endpoint can only be used with FBO accounts, when using Bank Transfers in the Full Service configuration. It cannot be used on your own account when using Bank Transfers in the BTS Platform configuration.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bankTransferBalanceGet({ body: {} });
  // TODO: Handle 'response' of type BankTransferBalanceGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.BankTransferBalanceGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bankTransferBalanceGet({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BankTransferBalanceGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BankTransferBalanceGetRequest](src/models/bank-transfer-balance-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bankTransferBalanceGet(request)`

- **OnSuccess**: <code>[BankTransferBalanceGetResponse](src/models/bank-transfer-balance-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.BankTransferBalanceGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bankTransferBalanceGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BankTransferBalanceGetResponse, ThePlaidApiClient.BankTransferBalanceGetError&gt;</code>, with `result.value` of type <code>[BankTransferBalanceGetResponse](src/models/bank-transfer-balance-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bankTransferCancel(request: ThePlaidApiClient.BankTransferCancelRequestParams, options?: RequestOptions): ApiPromise&lt;BankTransferCancelResponse, ThePlaidApiClient.BankTransferCancelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use the `/bank_transfer/cancel` endpoint to cancel a bank transfer.  A transfer is eligible for cancelation if the `cancellable` property returned by `/bank_transfer/get` is `true`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bankTransferCancel({ body: { bankTransferId: "some example string" } });
  // TODO: Handle 'response' of type BankTransferCancelResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.BankTransferCancelError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bankTransferCancel({
  body: { bankTransferId: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BankTransferCancelResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BankTransferCancelRequest](src/models/bank-transfer-cancel-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bankTransferCancel(request)`

- **OnSuccess**: <code>[BankTransferCancelResponse](src/models/bank-transfer-cancel-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.BankTransferCancelError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bankTransferCancel(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BankTransferCancelResponse, ThePlaidApiClient.BankTransferCancelError&gt;</code>, with `result.value` of type <code>[BankTransferCancelResponse](src/models/bank-transfer-cancel-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bankTransferCreate(request: ThePlaidApiClient.BankTransferCreateRequestParams, options?: RequestOptions): ApiPromise&lt;BankTransferCreateResponse, ThePlaidApiClient.BankTransferCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use the `/bank_transfer/create` endpoint to initiate a new bank transfer.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bankTransferCreate({
    body: {
      idempotencyKey: "some example string",
      accessToken: "some example string",
      accountId: "some example string",
      type: BankTransferType.Debit,
      network: BankTransferNetwork.Ach,
      amount: "some example string",
      isoCurrencyCode: "some example string",
      description: "some example string",
      user: { legalName: "some example string" },
    },
  });
  // TODO: Handle 'response' of type BankTransferCreateResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.BankTransferCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bankTransferCreate({
  body: {
    idempotencyKey: "some example string",
    accessToken: "some example string",
    accountId: "some example string",
    type: BankTransferType.Debit,
    network: BankTransferNetwork.Ach,
    amount: "some example string",
    isoCurrencyCode: "some example string",
    description: "some example string",
    user: { legalName: "some example string" },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BankTransferCreateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BankTransferCreateRequest](src/models/bank-transfer-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bankTransferCreate(request)`

- **OnSuccess**: <code>[BankTransferCreateResponse](src/models/bank-transfer-create-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.BankTransferCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bankTransferCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BankTransferCreateResponse, ThePlaidApiClient.BankTransferCreateError&gt;</code>, with `result.value` of type <code>[BankTransferCreateResponse](src/models/bank-transfer-create-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bankTransferEventList(request: ThePlaidApiClient.BankTransferEventListRequestParams, options?: RequestOptions): ApiPromise&lt;BankTransferEventListResponse, ThePlaidApiClient.BankTransferEventListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use the `/bank_transfer/event/list` endpoint to get a list of Plaid-initiated ACH or bank transfer events based on specified filter criteria. When using Auth with micro-deposit verification enabled, this endpoint can be used to fetch status updates on ACH micro-deposits. For more details, see [micro-deposit events](https://plaid.com/docs/auth/coverage/microdeposit-events/).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bankTransferEventList({ body: {} });
  // TODO: Handle 'response' of type BankTransferEventListResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.BankTransferEventListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bankTransferEventList({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BankTransferEventListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BankTransferEventListRequest](src/models/bank-transfer-event-list-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bankTransferEventList(request)`

- **OnSuccess**: <code>[BankTransferEventListResponse](src/models/bank-transfer-event-list-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.BankTransferEventListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bankTransferEventList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BankTransferEventListResponse, ThePlaidApiClient.BankTransferEventListError&gt;</code>, with `result.value` of type <code>[BankTransferEventListResponse](src/models/bank-transfer-event-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bankTransferEventSync(request: ThePlaidApiClient.BankTransferEventSyncRequestParams, options?: RequestOptions): ApiPromise&lt;BankTransferEventSyncResponse, ThePlaidApiClient.BankTransferEventSyncError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

`/bank_transfer/event/sync` allows you to request up to the next 25 Plaid-initiated bank transfer events that happened after a specific `event_id`. When using Auth with micro-deposit verification enabled, this endpoint can be used to fetch status updates on ACH micro-deposits. For more details, see [micro-deposit events](https://plaid.com/docs/auth/coverage/microdeposit-events/).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bankTransferEventSync({ body: { afterId: 1 } });
  // TODO: Handle 'response' of type BankTransferEventSyncResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.BankTransferEventSyncError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bankTransferEventSync({ body: { afterId: 1 } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BankTransferEventSyncResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BankTransferEventSyncRequest](src/models/bank-transfer-event-sync-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bankTransferEventSync(request)`

- **OnSuccess**: <code>[BankTransferEventSyncResponse](src/models/bank-transfer-event-sync-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.BankTransferEventSyncError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bankTransferEventSync(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BankTransferEventSyncResponse, ThePlaidApiClient.BankTransferEventSyncError&gt;</code>, with `result.value` of type <code>[BankTransferEventSyncResponse](src/models/bank-transfer-event-sync-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bankTransferGet(request: ThePlaidApiClient.BankTransferGetRequestParams, options?: RequestOptions): ApiPromise&lt;BankTransferGetResponse, ThePlaidApiClient.BankTransferGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/bank_transfer/get` fetches information about the bank transfer corresponding to the given `bank_transfer_id`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bankTransferGet({ body: { bankTransferId: "some example string" } });
  // TODO: Handle 'response' of type BankTransferGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.BankTransferGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bankTransferGet({
  body: { bankTransferId: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BankTransferGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BankTransferGetRequest](src/models/bank-transfer-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bankTransferGet(request)`

- **OnSuccess**: <code>[BankTransferGetResponse](src/models/bank-transfer-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.BankTransferGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bankTransferGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BankTransferGetResponse, ThePlaidApiClient.BankTransferGetError&gt;</code>, with `result.value` of type <code>[BankTransferGetResponse](src/models/bank-transfer-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bankTransferList(request: ThePlaidApiClient.BankTransferListRequestParams, options?: RequestOptions): ApiPromise&lt;BankTransferListResponse, ThePlaidApiClient.BankTransferListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use the `/bank_transfer/list` endpoint to see a list of all your bank transfers and their statuses. Results are paginated; use the `count` and `offset` query parameters to retrieve the desired bank transfers.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bankTransferList({ body: {} });
  // TODO: Handle 'response' of type BankTransferListResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.BankTransferListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bankTransferList({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BankTransferListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BankTransferListRequest](src/models/bank-transfer-list-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bankTransferList(request)`

- **OnSuccess**: <code>[BankTransferListResponse](src/models/bank-transfer-list-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.BankTransferListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bankTransferList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BankTransferListResponse, ThePlaidApiClient.BankTransferListError&gt;</code>, with `result.value` of type <code>[BankTransferListResponse](src/models/bank-transfer-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bankTransferMigrateAccount(request: ThePlaidApiClient.BankTransferMigrateAccountRequestParams, options?: RequestOptions): ApiPromise&lt;BankTransferMigrateAccountResponse, ThePlaidApiClient.BankTransferMigrateAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

As an alternative to adding Items via Link, you can also use the `/bank_transfer/migrate_account` endpoint to migrate known account and routing numbers to Plaid Items.  Note that Items created in this way are not compatible with endpoints for other products, such as `/accounts/balance/get`, and can only be used with Bank Transfer endpoints.  If you require access to other endpoints, create the Item through Link instead.  Access to `/bank_transfer/migrate_account` is not enabled by default; to obtain access, contact your Plaid account manager.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bankTransferMigrateAccount({
    body: {
      accountNumber: "some example string",
      routingNumber: "some example string",
      accountType: "some example string",
    },
  });
  // TODO: Handle 'response' of type BankTransferMigrateAccountResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.BankTransferMigrateAccountError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bankTransferMigrateAccount({
  body: {
    accountNumber: "some example string",
    routingNumber: "some example string",
    accountType: "some example string",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BankTransferMigrateAccountResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BankTransferMigrateAccountRequest](src/models/bank-transfer-migrate-account-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bankTransferMigrateAccount(request)`

- **OnSuccess**: <code>[BankTransferMigrateAccountResponse](src/models/bank-transfer-migrate-account-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.BankTransferMigrateAccountError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bankTransferMigrateAccount(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BankTransferMigrateAccountResponse, ThePlaidApiClient.BankTransferMigrateAccountError&gt;</code>, with `result.value` of type <code>[BankTransferMigrateAccountResponse](src/models/bank-transfer-migrate-account-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bankTransferSweepGet(request: ThePlaidApiClient.BankTransferSweepGetRequestParams, options?: RequestOptions): ApiPromise&lt;BankTransferSweepGetResponse, ThePlaidApiClient.BankTransferSweepGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/bank_transfer/sweep/get` endpoint fetches information about the sweep corresponding to the given `sweep_id`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bankTransferSweepGet({ body: { sweepId: "some example string" } });
  // TODO: Handle 'response' of type BankTransferSweepGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.BankTransferSweepGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bankTransferSweepGet({ body: { sweepId: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BankTransferSweepGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BankTransferSweepGetRequest](src/models/bank-transfer-sweep-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bankTransferSweepGet(request)`

- **OnSuccess**: <code>[BankTransferSweepGetResponse](src/models/bank-transfer-sweep-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.BankTransferSweepGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bankTransferSweepGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BankTransferSweepGetResponse, ThePlaidApiClient.BankTransferSweepGetError&gt;</code>, with `result.value` of type <code>[BankTransferSweepGetResponse](src/models/bank-transfer-sweep-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bankTransferSweepList(request: ThePlaidApiClient.BankTransferSweepListRequestParams, options?: RequestOptions): ApiPromise&lt;BankTransferSweepListResponse, ThePlaidApiClient.BankTransferSweepListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/bank_transfer/sweep/list` endpoint fetches information about the sweeps matching the given filters.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bankTransferSweepList({ body: {} });
  // TODO: Handle 'response' of type BankTransferSweepListResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.BankTransferSweepListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bankTransferSweepList({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BankTransferSweepListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BankTransferSweepListRequest](src/models/bank-transfer-sweep-list-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bankTransferSweepList(request)`

- **OnSuccess**: <code>[BankTransferSweepListResponse](src/models/bank-transfer-sweep-list-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.BankTransferSweepListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bankTransferSweepList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BankTransferSweepListResponse, ThePlaidApiClient.BankTransferSweepListError&gt;</code>, with `result.value` of type <code>[BankTransferSweepListResponse](src/models/bank-transfer-sweep-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>beaconAccountRiskEvaluate(request: ThePlaidApiClient.BeaconAccountRiskEvaluateRequestParams, options?: RequestOptions): ApiPromise&lt;BeaconAccountRiskEvaluateResponse, ThePlaidApiClient.BeaconAccountRiskEvaluateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use `/beacon/account_risk/v1/evaluate` to get risk insights for a linked account.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.beaconAccountRiskEvaluate({ body: {} });
  // TODO: Handle 'response' of type BeaconAccountRiskEvaluateResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.BeaconAccountRiskEvaluateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.beaconAccountRiskEvaluate({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BeaconAccountRiskEvaluateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BeaconAccountRiskEvaluateRequest](src/models/beacon-account-risk-evaluate-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.beaconAccountRiskEvaluate(request)`

- **OnSuccess**: <code>[BeaconAccountRiskEvaluateResponse](src/models/beacon-account-risk-evaluate-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.BeaconAccountRiskEvaluateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.beaconAccountRiskEvaluate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BeaconAccountRiskEvaluateResponse, ThePlaidApiClient.BeaconAccountRiskEvaluateError&gt;</code>, with `result.value` of type <code>[BeaconAccountRiskEvaluateResponse](src/models/beacon-account-risk-evaluate-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>beaconDuplicateGet(request: ThePlaidApiClient.BeaconDuplicateGetRequestParams, options?: RequestOptions): ApiPromise&lt;BeaconDuplicateGetResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a Beacon Duplicate for a given Beacon Duplicate id.

A Beacon Duplicate represents a pair of similar Beacon Users within your organization.

Two Beacon User revisions are returned for each Duplicate record in either the `beacon_user1` or `beacon_user2` response fields.

The `analysis` field in the response indicates which fields matched between `beacon_user1` and `beacon_user2`.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.beaconDuplicateGet({ body: { beaconDuplicateId: "some example string" } });
  // TODO: Handle 'response' of type BeaconDuplicateGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.beaconDuplicateGet({
  body: { beaconDuplicateId: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BeaconDuplicateGetResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BeaconDuplicateGetRequest](src/models/beacon-duplicate-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.beaconDuplicateGet(request)`

- **OnSuccess**: <code>[BeaconDuplicateGetResponse](src/models/beacon-duplicate-get-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.beaconDuplicateGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BeaconDuplicateGetResponse, ApiError&gt;</code>, with `result.value` of type <code>[BeaconDuplicateGetResponse](src/models/beacon-duplicate-get-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>beaconReportCreate(request: ThePlaidApiClient.BeaconReportCreateRequestParams, options?: RequestOptions): ApiPromise&lt;BeaconReportCreateResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a fraud report for a given Beacon User.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.beaconReportCreate({
    body: {
      beaconUserId: "some example string",
      type: BeaconReportCreateType.FirstParty,
      fraudDate: "2024-01-15",
    },
  });
  // TODO: Handle 'response' of type BeaconReportCreateResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.beaconReportCreate({
  body: {
    beaconUserId: "some example string",
    type: BeaconReportCreateType.FirstParty,
    fraudDate: "2024-01-15",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BeaconReportCreateResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BeaconReportCreateRequest](src/models/beacon-report-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.beaconReportCreate(request)`

- **OnSuccess**: <code>[BeaconReportCreateResponse](src/models/beacon-report-create-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.beaconReportCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BeaconReportCreateResponse, ApiError&gt;</code>, with `result.value` of type <code>[BeaconReportCreateResponse](src/models/beacon-report-create-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>beaconReportGet(request: ThePlaidApiClient.BeaconReportGetRequestParams, options?: RequestOptions): ApiPromise&lt;BeaconReportGetResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a Beacon Report for a given Beacon Report ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.beaconReportGet({ body: { beaconReportId: "some example string" } });
  // TODO: Handle 'response' of type BeaconReportGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.beaconReportGet({
  body: { beaconReportId: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BeaconReportGetResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BeaconReportGetRequest](src/models/beacon-report-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.beaconReportGet(request)`

- **OnSuccess**: <code>[BeaconReportGetResponse](src/models/beacon-report-get-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.beaconReportGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BeaconReportGetResponse, ApiError&gt;</code>, with `result.value` of type <code>[BeaconReportGetResponse](src/models/beacon-report-get-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>beaconReportList(request: ThePlaidApiClient.BeaconReportListRequestParams, options?: RequestOptions): ApiPromise&lt;BeaconReportListResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use the `/beacon/report/list` endpoint to view all Beacon Reports you created for a specific Beacon User. The reports returned by this endpoint are exclusively reports you created for a specific user. A Beacon User can only have one active report at a time, but a new report can be created if a previous report has been deleted. The results from this endpoint are paginated; the `next_cursor` field will be populated if there is another page of results that can be retrieved. To fetch the next page, pass the `next_cursor` value as the `cursor` parameter in the next request.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.beaconReportList({ body: { beaconUserId: "some example string" } });
  // TODO: Handle 'response' of type BeaconReportListResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.beaconReportList({ body: { beaconUserId: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BeaconReportListResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BeaconReportListRequest](src/models/beacon-report-list-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.beaconReportList(request)`

- **OnSuccess**: <code>[BeaconReportListResponse](src/models/beacon-report-list-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.beaconReportList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BeaconReportListResponse, ApiError&gt;</code>, with `result.value` of type <code>[BeaconReportListResponse](src/models/beacon-report-list-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>beaconReportSyndicationGet(request: ThePlaidApiClient.BeaconReportSyndicationGetRequestParams, options?: RequestOptions): ApiPromise&lt;BeaconReportSyndicationGetResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a Beacon Report Syndication for a given Beacon Report Syndication id.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.beaconReportSyndicationGet({
    body: { beaconReportSyndicationId: "some example string" },
  });
  // TODO: Handle 'response' of type BeaconReportSyndicationGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.beaconReportSyndicationGet({
  body: { beaconReportSyndicationId: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BeaconReportSyndicationGetResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BeaconReportSyndicationGetRequest](src/models/beacon-report-syndication-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.beaconReportSyndicationGet(request)`

- **OnSuccess**: <code>[BeaconReportSyndicationGetResponse](src/models/beacon-report-syndication-get-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.beaconReportSyndicationGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BeaconReportSyndicationGetResponse, ApiError&gt;</code>, with `result.value` of type <code>[BeaconReportSyndicationGetResponse](src/models/beacon-report-syndication-get-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>beaconReportSyndicationList(request: ThePlaidApiClient.BeaconReportSyndicationListRequestParams, options?: RequestOptions): ApiPromise&lt;BeaconReportSyndicationListResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use the `/beacon/report_syndication/list` endpoint to view all Beacon Reports that have been syndicated to a specific Beacon User. This endpoint returns Beacon Report Syndications which are references to Beacon Reports created either by you, or another Beacon customer, that matched the specified Beacon User. A Beacon User can have multiple active Beacon Report Syndications at once. The results from this endpoint are paginated; the `next_cursor` field will be populated if there is another page of results that can be retrieved. To fetch the next page, pass the `next_cursor` value as the `cursor` parameter in the next request.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.beaconReportSyndicationList({
    body: { beaconUserId: "some example string" },
  });
  // TODO: Handle 'response' of type BeaconReportSyndicationListResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.beaconReportSyndicationList({
  body: { beaconUserId: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BeaconReportSyndicationListResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BeaconReportSyndicationListRequest](src/models/beacon-report-syndication-list-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.beaconReportSyndicationList(request)`

- **OnSuccess**: <code>[BeaconReportSyndicationListResponse](src/models/beacon-report-syndication-list-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.beaconReportSyndicationList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BeaconReportSyndicationListResponse, ApiError&gt;</code>, with `result.value` of type <code>[BeaconReportSyndicationListResponse](src/models/beacon-report-syndication-list-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>beaconUserAccountInsightsGet(request: ThePlaidApiClient.BeaconUserAccountInsightsGetRequestParams, options?: RequestOptions): ApiPromise&lt;BeaconUserAccountInsightsGetResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Account Insights for all Accounts linked to this Beacon User. The insights for each account are computed based on the information that was last retrieved from the financial institution.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.beaconUserAccountInsightsGet({
    body: { beaconUserId: "some example string", accessToken: "some example string" },
  });
  // TODO: Handle 'response' of type BeaconUserAccountInsightsGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.beaconUserAccountInsightsGet({
  body: { beaconUserId: "some example string", accessToken: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BeaconUserAccountInsightsGetResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BeaconUserAccountInsightsGetRequest](src/models/beacon-user-account-insights-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.beaconUserAccountInsightsGet(request)`

- **OnSuccess**: <code>[BeaconUserAccountInsightsGetResponse](src/models/beacon-user-account-insights-get-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.beaconUserAccountInsightsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BeaconUserAccountInsightsGetResponse, ApiError&gt;</code>, with `result.value` of type <code>[BeaconUserAccountInsightsGetResponse](src/models/beacon-user-account-insights-get-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>beaconUserCreate(request: ThePlaidApiClient.BeaconUserCreateRequestParams, options?: RequestOptions): ApiPromise&lt;BeaconUserCreateResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create and scan a Beacon User against your Beacon Program, according to your program's settings.

When you submit a new user to `/beacon/user/create`, several checks are performed immediately:

  - The user's PII (provided within the `user` object) is searched against all other users within the Beacon Program you specified. If a match is found that violates your program's "Duplicate Information Filtering" settings, the user will be returned with a status of `pending_review`.

  - The user's PII is also searched against all fraud reports created by your organization across all of your Beacon Programs. If the user's data matches a fraud report that your team created, the user will be returned with a status of `rejected`.

  - Finally, the user's PII is searched against all fraud reports shared with the Beacon Network by other companies. If a matching fraud report is found, the user will be returned with a `pending_review` status if your program has enabled automatic flagging based on network fraud.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.beaconUserCreate({
    body: {
      programId: "some example string",
      clientUserId: "some example string",
      user: { name: { givenName: "some example string", familyName: "some example string" } },
    },
  });
  // TODO: Handle 'response' of type BeaconUserCreateResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.beaconUserCreate({
  body: {
    programId: "some example string",
    clientUserId: "some example string",
    user: { name: { givenName: "some example string", familyName: "some example string" } },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BeaconUserCreateResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BeaconUserCreateRequest](src/models/beacon-user-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.beaconUserCreate(request)`

- **OnSuccess**: <code>[BeaconUserCreateResponse](src/models/beacon-user-create-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.beaconUserCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BeaconUserCreateResponse, ApiError&gt;</code>, with `result.value` of type <code>[BeaconUserCreateResponse](src/models/beacon-user-create-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>beaconUserGet(request: ThePlaidApiClient.BeaconUserGetRequestParams, options?: RequestOptions): ApiPromise&lt;BeaconUserGetResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch a Beacon User.

The Beacon User is returned with all of their associated information and a `status` based on the Beacon Network duplicate record and fraud checks.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.beaconUserGet({ body: { beaconUserId: "some example string" } });
  // TODO: Handle 'response' of type BeaconUserGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.beaconUserGet({ body: { beaconUserId: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BeaconUserGetResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BeaconUserGetRequest](src/models/beacon-user-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.beaconUserGet(request)`

- **OnSuccess**: <code>[BeaconUserGetResponse](src/models/beacon-user-get-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.beaconUserGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BeaconUserGetResponse, ApiError&gt;</code>, with `result.value` of type <code>[BeaconUserGetResponse](src/models/beacon-user-get-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>beaconUserHistoryList(request: ThePlaidApiClient.BeaconUserHistoryListRequestParams, options?: RequestOptions): ApiPromise&lt;BeaconUserHistoryListResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all changes to the Beacon User in reverse-chronological order.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.beaconUserHistoryList({ body: { beaconUserId: "some example string" } });
  // TODO: Handle 'response' of type BeaconUserHistoryListResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.beaconUserHistoryList({
  body: { beaconUserId: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BeaconUserHistoryListResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BeaconUserHistoryListRequest](src/models/beacon-user-history-list-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.beaconUserHistoryList(request)`

- **OnSuccess**: <code>[BeaconUserHistoryListResponse](src/models/beacon-user-history-list-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.beaconUserHistoryList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BeaconUserHistoryListResponse, ApiError&gt;</code>, with `result.value` of type <code>[BeaconUserHistoryListResponse](src/models/beacon-user-history-list-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>beaconUserReview(request: ThePlaidApiClient.BeaconUserReviewRequestParams, options?: RequestOptions): ApiPromise&lt;BeaconUserGetResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the status of a Beacon User.

When updating a Beacon User's status via this endpoint, Plaid validates that the status change is consistent with the related state for this Beacon User. Specifically, we will check:

1. Whether there are any associated Beacon Reports connected to the Beacon User, and
2. Whether there are any confirmed Beacon Report Syndications connected to the Beacon User.

When updating a Beacon User's status to `rejected`, we enforce that either a Beacon Report has been created for the Beacon User or a Beacon Report Syndication has been confirmed.
When updating a Beacon User's status to `cleared`, we enforce that there are no active Beacon Reports or confirmed Beacon Report Syndications associated with the user. If you previously created a Beacon Report for this user, you must delete it before updating the Beacon User's status to `cleared`.
There are no restrictions on updating a Beacon User's status to `pending_review`.

If these conditions are not met, the request will be rejected with an error explaining the issue.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.beaconUserReview({
    body: { beaconUserId: "some example string", status: BeaconUserStatus.Rejected },
  });
  // TODO: Handle 'response' of type BeaconUserGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.beaconUserReview({
  body: { beaconUserId: "some example string", status: BeaconUserStatus.Rejected },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BeaconUserGetResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BeaconUserReviewRequest](src/models/beacon-user-review-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.beaconUserReview(request)`

- **OnSuccess**: <code>[BeaconUserGetResponse](src/models/beacon-user-get-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.beaconUserReview(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BeaconUserGetResponse, ApiError&gt;</code>, with `result.value` of type <code>[BeaconUserGetResponse](src/models/beacon-user-get-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>beaconUserUpdate(request: ThePlaidApiClient.BeaconUserUpdateRequestParams, options?: RequestOptions): ApiPromise&lt;BeaconUserUpdateResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the identity data for a Beacon User in your Beacon Program or add new accounts to the Beacon User.

Similar to `/beacon/user/create`, several checks are performed immediately when you submit an identity data change to `/beacon/user/update`:

  - The user's updated PII is searched against all other users within the Beacon Program you specified. If a match is found that violates your program's "Duplicate Information Filtering" settings, the user will be returned with a status of `pending_review`.

  - The user's updated PII is also searched against all fraud reports created by your organization across all of your Beacon Programs. If the user's data matches a fraud report that your team created, the user will be returned with a status of `rejected`.

  - Finally, the user's PII is searched against all fraud reports shared with the Beacon Network by other companies. If a matching fraud report is found, the user will be returned with a `pending_review` status if your program has enabled automatic flagging based on network fraud.

Plaid maintains a version history for each Beacon User, so the Beacon User's identity data before and after the update is retained as separate versions.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.beaconUserUpdate({ body: { beaconUserId: "some example string" } });
  // TODO: Handle 'response' of type BeaconUserUpdateResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.beaconUserUpdate({ body: { beaconUserId: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BeaconUserUpdateResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BeaconUserUpdateRequest](src/models/beacon-user-update-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.beaconUserUpdate(request)`

- **OnSuccess**: <code>[BeaconUserUpdateResponse](src/models/beacon-user-update-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.beaconUserUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BeaconUserUpdateResponse, ApiError&gt;</code>, with `result.value` of type <code>[BeaconUserUpdateResponse](src/models/beacon-user-update-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>betaEwaReportV1Get(request: ThePlaidApiClient.BetaEwaReportV1GetRequestParams, options?: RequestOptions): ApiPromise&lt;BetaEwaReportV1GetResponse, ThePlaidApiClient.BetaEwaReportV1GetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/beta/ewa_report/v1/get` endpoint provides an Earned Wage Access (EWA) score that quantifies the delinquency risk associated with a given item. The score is derived from a combination of cashflow patterns and network-based behavioral features.

The response returns a list of EWA scores, where each score corresponds to a potential advance amount range. These scores estimate the likelihood of repayment for advances within that range.

Score range: 1-99

Interpretation: Higher scores indicate a greater likelihood of repayment.

This endpoint enables clients to assess repayment risk and make data-driven decisions when determining eligibility or limits for earned wage advances.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.betaEwaReportV1Get({
    body: { accessToken: "access-sandbox-71e02f71-0960-4a27-abd2-5631e04f2175" },
  });
  // TODO: Handle 'response' of type BetaEwaReportV1GetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.BetaEwaReportV1GetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.betaEwaReportV1Get({
  body: { accessToken: "access-sandbox-71e02f71-0960-4a27-abd2-5631e04f2175" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BetaEwaReportV1GetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BetaEwaReportV1GetRequest](src/models/beta-ewa-report-v1-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.betaEwaReportV1Get(request)`

- **OnSuccess**: <code>[BetaEwaReportV1GetResponse](src/models/beta-ewa-report-v1-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.BetaEwaReportV1GetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.betaEwaReportV1Get(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BetaEwaReportV1GetResponse, ThePlaidApiClient.BetaEwaReportV1GetError&gt;</code>, with `result.value` of type <code>[BetaEwaReportV1GetResponse](src/models/beta-ewa-report-v1-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>betaPartnerCustomerV1Create(request: ThePlaidApiClient.BetaPartnerCustomerV1CreateRequestParams, options?: RequestOptions): ApiPromise&lt;BetaPartnerCustomerV1CreateResponse, ThePlaidApiClient.BetaPartnerCustomerV1CreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/beta/partner/customer/v1/create` endpoint creates a new end customer record. You can provide as much information as you have available. If any required information is missing for the products you intend to use, it will be listed in the `requirements_due` field of the response.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.betaPartnerCustomerV1Create({
    body: {
      clientId: "7f57eb3d2a9j6480121fx361",
      secret: "79g03eoofwl8240v776r2h667442119",
      companyName: "Plaid",
      products: [Products.Auth, Products.Identity],
      createLinkCustomization: true,
      legalEntityName: "Plaid",
      website: "plaid.com",
      applicationName: "Plaid",
      technicalContact: { givenName: "Alice", familyName: "Smith", email: "alice.smith@example.com" },
      billingContact: { givenName: "Bob", familyName: "Jones", email: "bob.jones@example.com" },
      customerSupportInfo: {
        email: "support@example.com",
        phoneNumber: "1234567890",
        contactUrl: "example.com/contact",
        linkUpdateUrl: "example.com/update",
      },
      address: {
        city: "New York",
        street: "123 Main St",
        region: "NY",
        postalCode: "12345",
        countryCode: "US",
      },
      redirectUris: ["http://localhost/oauth.html", "https://www.example.com/oauth.html"],
    },
  });
  // TODO: Handle 'response' of type BetaPartnerCustomerV1CreateResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.BetaPartnerCustomerV1CreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.betaPartnerCustomerV1Create({
  body: {
    clientId: "7f57eb3d2a9j6480121fx361",
    secret: "79g03eoofwl8240v776r2h667442119",
    companyName: "Plaid",
    products: [Products.Auth, Products.Identity],
    createLinkCustomization: true,
    legalEntityName: "Plaid",
    website: "plaid.com",
    applicationName: "Plaid",
    technicalContact: { givenName: "Alice", familyName: "Smith", email: "alice.smith@example.com" },
    billingContact: { givenName: "Bob", familyName: "Jones", email: "bob.jones@example.com" },
    customerSupportInfo: {
      email: "support@example.com",
      phoneNumber: "1234567890",
      contactUrl: "example.com/contact",
      linkUpdateUrl: "example.com/update",
    },
    address: {
      city: "New York",
      street: "123 Main St",
      region: "NY",
      postalCode: "12345",
      countryCode: "US",
    },
    redirectUris: ["http://localhost/oauth.html", "https://www.example.com/oauth.html"],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BetaPartnerCustomerV1CreateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BetaPartnerCustomerV1CreateRequest](src/models/beta-partner-customer-v1-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.betaPartnerCustomerV1Create(request)`

- **OnSuccess**: <code>[BetaPartnerCustomerV1CreateResponse](src/models/beta-partner-customer-v1-create-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.BetaPartnerCustomerV1CreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.betaPartnerCustomerV1Create(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BetaPartnerCustomerV1CreateResponse, ThePlaidApiClient.BetaPartnerCustomerV1CreateError&gt;</code>, with `result.value` of type <code>[BetaPartnerCustomerV1CreateResponse](src/models/beta-partner-customer-v1-create-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>betaPartnerCustomerV1Enable(request: ThePlaidApiClient.BetaPartnerCustomerV1EnableRequestParams, options?: RequestOptions): ApiPromise&lt;BetaPartnerCustomerV1EnableResponse, ThePlaidApiClient.BetaPartnerCustomerV1EnableError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/beta/partner/customer/v1/enable` endpoint is used by reseller partners to enable an end customer in the full Production environment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.betaPartnerCustomerV1Enable({
    body: {
      clientId: "7f57eb3d2a9j6480121fx361",
      secret: "79g03eoofwl8240v776r2h667442119",
      endCustomerClientId: "634758733ebb4f00134b85ea",
      products: [Products.Auth],
    },
  });
  // TODO: Handle 'response' of type BetaPartnerCustomerV1EnableResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.BetaPartnerCustomerV1EnableError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.betaPartnerCustomerV1Enable({
  body: {
    clientId: "7f57eb3d2a9j6480121fx361",
    secret: "79g03eoofwl8240v776r2h667442119",
    endCustomerClientId: "634758733ebb4f00134b85ea",
    products: [Products.Auth],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BetaPartnerCustomerV1EnableResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BetaPartnerCustomerV1EnableRequest](src/models/beta-partner-customer-v1-enable-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.betaPartnerCustomerV1Enable(request)`

- **OnSuccess**: <code>[BetaPartnerCustomerV1EnableResponse](src/models/beta-partner-customer-v1-enable-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.BetaPartnerCustomerV1EnableError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.betaPartnerCustomerV1Enable(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BetaPartnerCustomerV1EnableResponse, ThePlaidApiClient.BetaPartnerCustomerV1EnableError&gt;</code>, with `result.value` of type <code>[BetaPartnerCustomerV1EnableResponse](src/models/beta-partner-customer-v1-enable-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>betaPartnerCustomerV1Get(request: ThePlaidApiClient.BetaPartnerCustomerV1GetRequestParams, options?: RequestOptions): ApiPromise&lt;BetaPartnerCustomerV1GetResponse, ThePlaidApiClient.BetaPartnerCustomerV1GetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/beta/partner/customer/v1/get` endpoint is used by reseller partners to retrieve data about a single end customer.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.betaPartnerCustomerV1Get({
    body: {
      clientId: "7f57eb3d2a9j6480121fx361",
      secret: "79g03eoofwl8240v776r2h667442119",
      endCustomerClientId: "634758733ebb4f00134b85ea",
    },
  });
  // TODO: Handle 'response' of type BetaPartnerCustomerV1GetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.BetaPartnerCustomerV1GetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.betaPartnerCustomerV1Get({
  body: {
    clientId: "7f57eb3d2a9j6480121fx361",
    secret: "79g03eoofwl8240v776r2h667442119",
    endCustomerClientId: "634758733ebb4f00134b85ea",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BetaPartnerCustomerV1GetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BetaPartnerCustomerV1GetRequest](src/models/beta-partner-customer-v1-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.betaPartnerCustomerV1Get(request)`

- **OnSuccess**: <code>[BetaPartnerCustomerV1GetResponse](src/models/beta-partner-customer-v1-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.BetaPartnerCustomerV1GetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.betaPartnerCustomerV1Get(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BetaPartnerCustomerV1GetResponse, ThePlaidApiClient.BetaPartnerCustomerV1GetError&gt;</code>, with `result.value` of type <code>[BetaPartnerCustomerV1GetResponse](src/models/beta-partner-customer-v1-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>betaPartnerCustomerV1Update(request: ThePlaidApiClient.BetaPartnerCustomerV1UpdateRequestParams, options?: RequestOptions): ApiPromise&lt;BetaPartnerCustomerV1UpdateResponse, ThePlaidApiClient.BetaPartnerCustomerV1UpdateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/beta/partner/customer/v1/update` endpoint updates an existing end customer record.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.betaPartnerCustomerV1Update({
    body: {
      clientId: "7f57eb3d2a9j6480121fx361",
      secret: "79g03eoofwl8240v776r2h667442119",
      endCustomerClientId: "634758733ebb4f00134b85ea",
      bankAddendumAcceptance: {
        customerAccepted: true,
        customerIpAddress: "127.0.0.1",
        customerAgreementTimestamp: new Date(Date.UTC(2025, 0, 1, 1, 0, 0)),
      },
      questionnaires: {
        cra: { purposes: {}, isThirdPartyInvolved: true, isTechnicalServiceProviderInvolved: true },
      },
    },
  });
  // TODO: Handle 'response' of type BetaPartnerCustomerV1UpdateResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.BetaPartnerCustomerV1UpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.betaPartnerCustomerV1Update({
  body: {
    clientId: "7f57eb3d2a9j6480121fx361",
    secret: "79g03eoofwl8240v776r2h667442119",
    endCustomerClientId: "634758733ebb4f00134b85ea",
    bankAddendumAcceptance: {
      customerAccepted: true,
      customerIpAddress: "127.0.0.1",
      customerAgreementTimestamp: new Date(Date.UTC(2025, 0, 1, 1, 0, 0)),
    },
    questionnaires: {
      cra: { purposes: {}, isThirdPartyInvolved: true, isTechnicalServiceProviderInvolved: true },
    },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BetaPartnerCustomerV1UpdateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BetaPartnerCustomerV1UpdateRequest](src/models/beta-partner-customer-v1-update-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.betaPartnerCustomerV1Update(request)`

- **OnSuccess**: <code>[BetaPartnerCustomerV1UpdateResponse](src/models/beta-partner-customer-v1-update-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.BetaPartnerCustomerV1UpdateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.betaPartnerCustomerV1Update(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BetaPartnerCustomerV1UpdateResponse, ThePlaidApiClient.BetaPartnerCustomerV1UpdateError&gt;</code>, with `result.value` of type <code>[BetaPartnerCustomerV1UpdateResponse](src/models/beta-partner-customer-v1-update-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>businessVerificationCreate(request: ThePlaidApiClient.BusinessVerificationCreateRequestParams, options?: RequestOptions): ApiPromise&lt;BusinessVerificationCreateResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new business verification to check a business's identity and risk profile.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.businessVerificationCreate({ body: { clientUserId: "some example string" } });
  // TODO: Handle 'response' of type BusinessVerificationCreateResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.businessVerificationCreate({
  body: { clientUserId: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BusinessVerificationCreateResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BusinessVerificationCreateRequest](src/models/business-verification-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.businessVerificationCreate(request)`

- **OnSuccess**: <code>[BusinessVerificationCreateResponse](src/models/business-verification-create-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.businessVerificationCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BusinessVerificationCreateResponse, ApiError&gt;</code>, with `result.value` of type <code>[BusinessVerificationCreateResponse](src/models/business-verification-create-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>businessVerificationGet(request: ThePlaidApiClient.BusinessVerificationGetRequestParams, options?: RequestOptions): ApiPromise&lt;BusinessVerificationGetResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the current state of a specific business verification.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.businessVerificationGet({
    body: { businessVerificationId: "some example string" },
  });
  // TODO: Handle 'response' of type BusinessVerificationGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.businessVerificationGet({
  body: { businessVerificationId: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BusinessVerificationGetResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BusinessVerificationGetRequest](src/models/business-verification-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.businessVerificationGet(request)`

- **OnSuccess**: <code>[BusinessVerificationGetResponse](src/models/business-verification-get-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.businessVerificationGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BusinessVerificationGetResponse, ApiError&gt;</code>, with `result.value` of type <code>[BusinessVerificationGetResponse](src/models/business-verification-get-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cashflowReportGet(request: ThePlaidApiClient.CashflowReportGetRequestParams, options?: RequestOptions): ApiPromise&lt;CashflowReportGetResponse, ThePlaidApiClient.CashflowReportGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/cashflow_report/get` endpoint retrieves transactions data associated with an Item. Transactions data is standardized across financial institutions.
Transactions are returned in reverse-chronological order, and the sequence of transaction ordering is stable and will not shift. Transactions are not immutable and can also be removed altogether by the institution; a removed transaction will no longer appear in `/cashflow_report/get`.  For more details, see [Pending and posted transactions](https://plaid.com/docs/transactions/transactions-data/#pending-and-posted-transactions).
Due to the potentially large number of transactions associated with an Item, results are paginated. Manipulate the `count` and `cursor` parameters in conjunction with the `has_more` response body field to fetch all available transactions.
Note that data isn't likely to be immediately available to `/cashflow_report/get`. Plaid will begin to prepare transactions data upon Item link, if Link was initialized with `cashflow_report`, or if it wasn't, upon the first call to `/cashflow_report/refresh`. To be alerted when transaction data is ready to be fetched, listen for the `CASHFLOW_REPORT_READY` webhook.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cashflowReportGet({
    body: { accessToken: "some example string", daysRequested: 1 },
  });
  // TODO: Handle 'response' of type CashflowReportGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.CashflowReportGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.cashflowReportGet({
  body: { accessToken: "some example string", daysRequested: 1 },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CashflowReportGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CashflowReportGetRequest](src/models/cashflow-report-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cashflowReportGet(request)`

- **OnSuccess**: <code>[CashflowReportGetResponse](src/models/cashflow-report-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.CashflowReportGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cashflowReportGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CashflowReportGetResponse, ThePlaidApiClient.CashflowReportGetError&gt;</code>, with `result.value` of type <code>[CashflowReportGetResponse](src/models/cashflow-report-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cashflowReportInsightsGet(request: ThePlaidApiClient.CashflowReportInsightsGetRequestParams, options?: RequestOptions): ApiPromise&lt;CashflowReportInsightsGetResponse, ThePlaidApiClient.CashflowReportInsightsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/cashflow_report/insights/get` endpoint retrieves insights data associated with an Item. Insights are only calculated on credit and depository accounts.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cashflowReportInsightsGet({ body: { accessToken: "some example string" } });
  // TODO: Handle 'response' of type CashflowReportInsightsGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.CashflowReportInsightsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.cashflowReportInsightsGet({
  body: { accessToken: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CashflowReportInsightsGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CashflowReportInsightsGetRequest](src/models/cashflow-report-insights-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cashflowReportInsightsGet(request)`

- **OnSuccess**: <code>[CashflowReportInsightsGetResponse](src/models/cashflow-report-insights-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.CashflowReportInsightsGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cashflowReportInsightsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CashflowReportInsightsGetResponse, ThePlaidApiClient.CashflowReportInsightsGetError&gt;</code>, with `result.value` of type <code>[CashflowReportInsightsGetResponse](src/models/cashflow-report-insights-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cashflowReportRefresh(request: ThePlaidApiClient.CashflowReportRefreshRequestParams, options?: RequestOptions): ApiPromise&lt;CashflowReportRefreshResponse, ThePlaidApiClient.CashflowReportRefreshError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

`/cashflow_report/refresh` is an endpoint that initiates an on-demand extraction to fetch the newest transactions for an Item (given an `item_id`). The Item must already have Cashflow Report added as a product in order to call `/cashflow_report/refresh`.

After calling `/cashflow_report/refresh`, Plaid will fire a webhook `CASHFLOW_REPORT_READY` alerting clients that new transactions data can then be ingested via `/cashflow_report/get` or the webhook will contain an error code informing there was an error in refreshing transactions data.

Note that the `/cashflow_report/refresh` endpoint is not supported for Capital One (`ins_128026`) non-depository accounts and will result in a `PRODUCTS_NOT_SUPPORTED` error if called on an Item that contains only non-depository accounts from that institution.

As this endpoint triggers a synchronous request for fresh data, latency may be higher than for other Plaid endpoints (typically less than 10 seconds, but up to 30 seconds or more). If you encounter errors, you may find it necessary to adjust your timeout period for requests.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cashflowReportRefresh({
    body: { accessToken: "some example string", daysRequested: 1 },
  });
  // TODO: Handle 'response' of type CashflowReportRefreshResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.CashflowReportRefreshError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.cashflowReportRefresh({
  body: { accessToken: "some example string", daysRequested: 1 },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CashflowReportRefreshResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CashflowReportRefreshRequest](src/models/cashflow-report-refresh-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cashflowReportRefresh(request)`

- **OnSuccess**: <code>[CashflowReportRefreshResponse](src/models/cashflow-report-refresh-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.CashflowReportRefreshError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cashflowReportRefresh(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CashflowReportRefreshResponse, ThePlaidApiClient.CashflowReportRefreshError&gt;</code>, with `result.value` of type <code>[CashflowReportRefreshResponse](src/models/cashflow-report-refresh-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cashflowReportTransactionsGet(request: ThePlaidApiClient.CashflowReportTransactionsGetRequestParams, options?: RequestOptions): ApiPromise&lt;CashflowReportTransactionsGetResponse, ThePlaidApiClient.CashflowReportTransactionsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/cashflow_report/transactions/get` endpoint retrieves transactions data associated with an Item. Transactions data is standardized across financial institutions.
Transactions are returned in reverse-chronological order, and the sequence of transaction ordering is stable and will not shift. Transactions are not immutable and can also be removed altogether by the institution; a removed transaction will no longer appear in `/cashflow_report/transactions/get`.  For more details, see [Pending and posted transactions](https://plaid.com/docs/transactions/transactions-data/#pending-and-posted-transactions).
Due to the potentially large number of transactions associated with an Item, results are paginated. Manipulate the `count` and `cursor` parameters in conjunction with the `has_more` response body field to fetch all available transactions.
Note that data isn't likely to be immediately available to `/cashflow_report/transactions/get`. Plaid will begin to prepare transactions data upon Item link, if Link was initialized with `cashflow_report`, or if it wasn't, upon the first call to `/cashflow_report/refresh`. To be alerted when transaction data is ready to be fetched, listen for the `CASHFLOW_REPORT_READY` webhook.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cashflowReportTransactionsGet({
    body: { accessToken: "some example string" },
  });
  // TODO: Handle 'response' of type CashflowReportTransactionsGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.CashflowReportTransactionsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.cashflowReportTransactionsGet({
  body: { accessToken: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CashflowReportTransactionsGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CashflowReportTransactionsGetRequest](src/models/cashflow-report-transactions-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cashflowReportTransactionsGet(request)`

- **OnSuccess**: <code>[CashflowReportTransactionsGetResponse](src/models/cashflow-report-transactions-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.CashflowReportTransactionsGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.cashflowReportTransactionsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CashflowReportTransactionsGetResponse, ThePlaidApiClient.CashflowReportTransactionsGetError&gt;</code>, with `result.value` of type <code>[CashflowReportTransactionsGetResponse](src/models/cashflow-report-transactions-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>categoriesGet(request: ThePlaidApiClient.CategoriesGetRequest, options?: RequestOptions): ApiPromise&lt;CategoriesGetResponse, ThePlaidApiClient.CategoriesGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a request to the `/categories/get` endpoint to get detailed information on legacy categories returned by Plaid. This endpoint does not require authentication.

All implementations are recommended to [use the newer `personal_finance_category` taxonomy](https://plaid.com/docs/transactions/pfc-migration/) instead of the legacy `category` taxonomy supported by this endpoint.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.categoriesGet({ body: {} });
  // TODO: Handle 'response' of type CategoriesGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.CategoriesGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.categoriesGet({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CategoriesGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>Record&lt;string, unknown&gt;</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.categoriesGet(request)`

- **OnSuccess**: <code>[CategoriesGetResponse](src/models/categories-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.CategoriesGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.categoriesGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CategoriesGetResponse, ThePlaidApiClient.CategoriesGetError&gt;</code>, with `result.value` of type <code>[CategoriesGetResponse](src/models/categories-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>consentEventsGet(request: ThePlaidApiClient.ConsentEventsGetRequestParams, options?: RequestOptions): ApiPromise&lt;ConsentEventsGetResponse, ThePlaidApiClient.ConsentEventsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List a historical log of Item consent events. Consent logs are only available for events occurring on or after November 7, 2024. Extremely recent events (occurring within the past 12 hours) may not be available via this endpoint. Up to three years of consent logs will be available via the endpoint.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.consentEventsGet({ body: { accessToken: "some example string" } });
  // TODO: Handle 'response' of type ConsentEventsGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.ConsentEventsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.consentEventsGet({ body: { accessToken: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConsentEventsGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ConsentEventsGetRequest](src/models/consent-events-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.consentEventsGet(request)`

- **OnSuccess**: <code>[ConsentEventsGetResponse](src/models/consent-events-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.ConsentEventsGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.consentEventsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConsentEventsGetResponse, ThePlaidApiClient.ConsentEventsGetError&gt;</code>, with `result.value` of type <code>[ConsentEventsGetResponse](src/models/consent-events-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>consumerReportPdfGet(request: ThePlaidApiClient.ConsumerReportPdfGetRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, ThePlaidApiClient.ConsumerReportPdfGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves all existing CRB Bank Income and Base reports for the consumer in PDF format.

Response is PDF binary data. The `request_id` is returned in the `Plaid-Request-ID` header.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.consumerReportPdfGet({ body: { userToken: "some example string" } });
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.ConsumerReportPdfGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.consumerReportPdfGet({
  body: { userToken: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ConsumerReportPdfGetRequest](src/models/consumer-report-pdf-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.consumerReportPdfGet(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ThePlaidApiClient.ConsumerReportPdfGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.consumerReportPdfGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ThePlaidApiClient.ConsumerReportPdfGetError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>craCheckReportBaseReportGet(request: ThePlaidApiClient.CraCheckReportBaseReportGetRequestParams, options?: RequestOptions): ApiPromise&lt;CraCheckReportBaseReportGetResponse, ThePlaidApiClient.CraCheckReportBaseReportGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows you to retrieve the Base Report for your user, allowing you to receive comprehensive bank account and cash flow data. You should call this endpoint after you've received a `CHECK_REPORT_READY` or a `USER_CHECK_REPORT_READY` webhook, either after the Link session for the user or after calling `/cra/check_report/create`. If the most recent consumer report for the user doesn't have sufficient data to generate the base report, or the consumer report has expired, you will receive an error indicating that you should create a new consumer report by calling `/cra/check_report/create`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.craCheckReportBaseReportGet({ body: {} });
  // TODO: Handle 'response' of type CraCheckReportBaseReportGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.CraCheckReportBaseReportGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.craCheckReportBaseReportGet({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CraCheckReportBaseReportGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CraCheckReportBaseReportGetRequest](src/models/cra-check-report-base-report-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.craCheckReportBaseReportGet(request)`

- **OnSuccess**: <code>[CraCheckReportBaseReportGetResponse](src/models/cra-check-report-base-report-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.CraCheckReportBaseReportGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.craCheckReportBaseReportGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CraCheckReportBaseReportGetResponse, ThePlaidApiClient.CraCheckReportBaseReportGetError&gt;</code>, with `result.value` of type <code>[CraCheckReportBaseReportGetResponse](src/models/cra-check-report-base-report-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>craCheckReportCashflowInsightsGet(request: ThePlaidApiClient.CraCheckReportCashflowInsightsGetRequestParams, options?: RequestOptions): ApiPromise&lt;CraCheckReportCashflowInsightsGetResponse, ThePlaidApiClient.CraCheckReportCashflowInsightsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows you to retrieve the Cashflow Insights report for your user. You should call this endpoint after you've received a `CHECK_REPORT_READY` or a `USER_CHECK_REPORT_READY` webhook, either after the Link session for the user or after calling `/cra/check_report/create`. If the most recent consumer report for the user doesn't have sufficient data to generate the report, or the consumer report has expired, you will receive an error indicating that you should create a new consumer report by calling `/cra/check_report/create`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.craCheckReportCashflowInsightsGet({ body: {} });
  // TODO: Handle 'response' of type CraCheckReportCashflowInsightsGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.CraCheckReportCashflowInsightsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.craCheckReportCashflowInsightsGet({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CraCheckReportCashflowInsightsGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CraCheckReportCashflowInsightsGetRequest](src/models/cra-check-report-cashflow-insights-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.craCheckReportCashflowInsightsGet(request)`

- **OnSuccess**: <code>[CraCheckReportCashflowInsightsGetResponse](src/models/cra-check-report-cashflow-insights-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.CraCheckReportCashflowInsightsGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.craCheckReportCashflowInsightsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CraCheckReportCashflowInsightsGetResponse, ThePlaidApiClient.CraCheckReportCashflowInsightsGetError&gt;</code>, with `result.value` of type <code>[CraCheckReportCashflowInsightsGetResponse](src/models/cra-check-report-cashflow-insights-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>craCheckReportCreate(request: ThePlaidApiClient.CraCheckReportCreateRequestParams, options?: RequestOptions): ApiPromise&lt;CraCheckReportCreateResponse, ThePlaidApiClient.CraCheckReportCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use `/cra/check_report/create` to refresh data in an existing report. A Consumer Report will last for 24 hours before expiring; you should call any `/get` endpoints on the report before it expires. If a report expires, you can call `/cra/check_report/create` again to re-generate it and refresh the data in the report.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.craCheckReportCreate({
    body: {
      webhook: "some example string",
      daysRequested: 1,
      consumerReportPermissiblePurpose: ConsumerReportPermissiblePurpose.AccountReviewCredit,
    },
  });
  // TODO: Handle 'response' of type CraCheckReportCreateResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.CraCheckReportCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.craCheckReportCreate({
  body: {
    webhook: "some example string",
    daysRequested: 1,
    consumerReportPermissiblePurpose: ConsumerReportPermissiblePurpose.AccountReviewCredit,
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CraCheckReportCreateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CraCheckReportCreateRequest](src/models/cra-check-report-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.craCheckReportCreate(request)`

- **OnSuccess**: <code>[CraCheckReportCreateResponse](src/models/cra-check-report-create-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.CraCheckReportCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.craCheckReportCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CraCheckReportCreateResponse, ThePlaidApiClient.CraCheckReportCreateError&gt;</code>, with `result.value` of type <code>[CraCheckReportCreateResponse](src/models/cra-check-report-create-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>craCheckReportIncomeInsightsGet(request: ThePlaidApiClient.CraCheckReportIncomeInsightsGetRequestParams, options?: RequestOptions): ApiPromise&lt;CraCheckReportIncomeInsightsGetResponse, ThePlaidApiClient.CraCheckReportIncomeInsightsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows you to retrieve the Income Insights report for your user. You should call this endpoint after you've received a `CHECK_REPORT_READY` or a `USER_CHECK_REPORT_READY` webhook, either after the Link session for the user or after calling `/cra/check_report/create`. If the most recent consumer report for the user doesn't have sufficient data to generate the report, or the consumer report has expired, you will receive an error indicating that you should create a new consumer report by calling `/cra/check_report/create`.

NOTE: The following schema was updated in April 2026 to reflect the response when the provided version is "II2". Please see [this document](https://docs.google.com/document/d/1kQkQ7FOgFaC4n-sUGUk74hoXZNY_L_nJeCuMe7Keip4/edit?tab=t.0#heading=h.rudamzinus2i) for guidance on migrating to II2 if you are currently using the II1 version, and [this section](https://docs.google.com/document/d/1kQkQ7FOgFaC4n-sUGUk74hoXZNY_L_nJeCuMe7Keip4/edit?tab=t.0#bookmark=id.tdcc2wpk0h60) for an example II1 response along with its [documentation](https://docs.google.com/document/d/1kQkQ7FOgFaC4n-sUGUk74hoXZNY_L_nJeCuMe7Keip4/edit?tab=t.36c85n2ircqk#heading=h.79dwr5c1iszl).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.craCheckReportIncomeInsightsGet({ body: {} });
  // TODO: Handle 'response' of type CraCheckReportIncomeInsightsGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.CraCheckReportIncomeInsightsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.craCheckReportIncomeInsightsGet({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CraCheckReportIncomeInsightsGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CraCheckReportIncomeInsightsGetRequest](src/models/cra-check-report-income-insights-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.craCheckReportIncomeInsightsGet(request)`

- **OnSuccess**: <code>[CraCheckReportIncomeInsightsGetResponse](src/models/cra-check-report-income-insights-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.CraCheckReportIncomeInsightsGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.craCheckReportIncomeInsightsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CraCheckReportIncomeInsightsGetResponse, ThePlaidApiClient.CraCheckReportIncomeInsightsGetError&gt;</code>, with `result.value` of type <code>[CraCheckReportIncomeInsightsGetResponse](src/models/cra-check-report-income-insights-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>craCheckReportLendScoreGet(request: ThePlaidApiClient.CraCheckReportLendScoreGetRequestParams, options?: RequestOptions): ApiPromise&lt;CraCheckReportLendScoreGetResponse, ThePlaidApiClient.CraCheckReportLendScoreGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows you to retrieve the LendScore report for your user. You should call this endpoint after you've received a `CHECK_REPORT_READY` or a `USER_CHECK_REPORT_READY` webhook, either after the Link session for the user or after calling `/cra/check_report/create`. If the most recent consumer report for the user doesn't have sufficient data to generate the report, or the consumer report has expired, you will receive an error indicating that you should create a new consumer report by calling `/cra/check_report/create`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.craCheckReportLendScoreGet({ body: {} });
  // TODO: Handle 'response' of type CraCheckReportLendScoreGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.CraCheckReportLendScoreGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.craCheckReportLendScoreGet({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CraCheckReportLendScoreGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CraCheckReportLendScoreGetRequest](src/models/cra-check-report-lend-score-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.craCheckReportLendScoreGet(request)`

- **OnSuccess**: <code>[CraCheckReportLendScoreGetResponse](src/models/cra-check-report-lend-score-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.CraCheckReportLendScoreGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.craCheckReportLendScoreGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CraCheckReportLendScoreGetResponse, ThePlaidApiClient.CraCheckReportLendScoreGetError&gt;</code>, with `result.value` of type <code>[CraCheckReportLendScoreGetResponse](src/models/cra-check-report-lend-score-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>craCheckReportNetworkInsightsGet(request: ThePlaidApiClient.CraCheckReportNetworkInsightsGetRequestParams, options?: RequestOptions): ApiPromise&lt;CraCheckReportNetworkInsightsGetResponse, ThePlaidApiClient.CraCheckReportNetworkInsightsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows you to retrieve the Network Insights report for your user. You should call this endpoint after you've received a `CHECK_REPORT_READY` or a `USER_CHECK_REPORT_READY` webhook, either after the Link session for the user or after calling `/cra/check_report/create`. If the most recent consumer report for the user doesn't have sufficient data to generate the report, or the consumer report has expired, you will receive an error indicating that you should create a new consumer report by calling `/cra/check_report/create`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.craCheckReportNetworkInsightsGet({ body: {} });
  // TODO: Handle 'response' of type CraCheckReportNetworkInsightsGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.CraCheckReportNetworkInsightsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.craCheckReportNetworkInsightsGet({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CraCheckReportNetworkInsightsGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CraCheckReportNetworkInsightsGetRequest](src/models/cra-check-report-network-insights-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.craCheckReportNetworkInsightsGet(request)`

- **OnSuccess**: <code>[CraCheckReportNetworkInsightsGetResponse](src/models/cra-check-report-network-insights-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.CraCheckReportNetworkInsightsGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.craCheckReportNetworkInsightsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CraCheckReportNetworkInsightsGetResponse, ThePlaidApiClient.CraCheckReportNetworkInsightsGetError&gt;</code>, with `result.value` of type <code>[CraCheckReportNetworkInsightsGetResponse](src/models/cra-check-report-network-insights-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>craCheckReportPartnerInsightsGet(request: ThePlaidApiClient.CraCheckReportPartnerInsightsGetRequestParams, options?: RequestOptions): ApiPromise&lt;CraCheckReportPartnerInsightsGetResponse, ThePlaidApiClient.CraCheckReportPartnerInsightsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows you to retrieve the Partner Insights report for your user. You should call this endpoint after you've received a `CHECK_REPORT_READY` or a `USER_CHECK_REPORT_READY` webhook, either after the Link session for the user or after calling `/cra/check_report/create`. If the most recent consumer report for the user doesn't have sufficient data to generate the report, or the consumer report has expired, you will receive an error indicating that you should create a new consumer report by calling `/cra/check_report/create`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.craCheckReportPartnerInsightsGet({ body: {} });
  // TODO: Handle 'response' of type CraCheckReportPartnerInsightsGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.CraCheckReportPartnerInsightsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.craCheckReportPartnerInsightsGet({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CraCheckReportPartnerInsightsGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CraCheckReportPartnerInsightsGetRequest](src/models/cra-check-report-partner-insights-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.craCheckReportPartnerInsightsGet(request)`

- **OnSuccess**: <code>[CraCheckReportPartnerInsightsGetResponse](src/models/cra-check-report-partner-insights-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.CraCheckReportPartnerInsightsGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.craCheckReportPartnerInsightsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CraCheckReportPartnerInsightsGetResponse, ThePlaidApiClient.CraCheckReportPartnerInsightsGetError&gt;</code>, with `result.value` of type <code>[CraCheckReportPartnerInsightsGetResponse](src/models/cra-check-report-partner-insights-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>craCheckReportPdfGet(request: ThePlaidApiClient.CraCheckReportPdfGetRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, ThePlaidApiClient.CraCheckReportPdfGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

`/cra/check_report/pdf/get` retrieves the most recent Consumer Report in PDF format. By default, the most recent Base Report (if it exists) for the user will be returned. To request that the most recent Partner Insights or Income Insights report be included in the PDF as well, use the `add-ons` field.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.craCheckReportPdfGet({ body: {} });
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.CraCheckReportPdfGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.craCheckReportPdfGet({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CraCheckReportPdfGetRequest](src/models/cra-check-report-pdf-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.craCheckReportPdfGet(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ThePlaidApiClient.CraCheckReportPdfGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.craCheckReportPdfGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ThePlaidApiClient.CraCheckReportPdfGetError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>craCheckReportVerificationGet(request: ThePlaidApiClient.CraCheckReportVerificationGetRequestParams, options?: RequestOptions): ApiPromise&lt;CraCheckReportVerificationGetResponse, ThePlaidApiClient.CraCheckReportVerificationGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows you to retrieve home lending reports for a user. To obtain a VoA or Employment Refresh report, you need to make sure that `cra_base_report` is included in the `products` parameter when calling `/link/token/create` or `/cra/check_report/create`.

You should call this endpoint after you've received a `CHECK_REPORT_READY` or a `USER_CHECK_REPORT_READY` webhook, either after the Link session for the user or after calling `/cra/check_report/create`.

If the most recent consumer report for the user doesn't have sufficient data to generate the report, or the consumer report has expired, you will receive an error indicating that you should create a new consumer report by calling `/cra/check_report/create`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.craCheckReportVerificationGet({
    body: { reportsRequested: [CraCheckReportVerificationGetReportType.Voa] },
  });
  // TODO: Handle 'response' of type CraCheckReportVerificationGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.CraCheckReportVerificationGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.craCheckReportVerificationGet({
  body: { reportsRequested: [CraCheckReportVerificationGetReportType.Voa] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CraCheckReportVerificationGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CraCheckReportVerificationGetRequest](src/models/cra-check-report-verification-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.craCheckReportVerificationGet(request)`

- **OnSuccess**: <code>[CraCheckReportVerificationGetResponse](src/models/cra-check-report-verification-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.CraCheckReportVerificationGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.craCheckReportVerificationGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CraCheckReportVerificationGetResponse, ThePlaidApiClient.CraCheckReportVerificationGetError&gt;</code>, with `result.value` of type <code>[CraCheckReportVerificationGetResponse](src/models/cra-check-report-verification-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>craCheckReportVerificationPdfGet(request: ThePlaidApiClient.CraCheckReportVerificationPdfGetRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, ThePlaidApiClient.CraCheckReportVerificationPdfGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/cra/check_report/verification/pdf/get` endpoint retrieves the most recent Consumer Report in PDF format, specifically formatted for Home Lending verification use cases. Before calling this endpoint, ensure that you've created a VOA report through Link or the `/cra/check_report/create` endpoint, and have received a `CHECK_REPORT_READY` or a `USER_CHECK_REPORT_READY` webhook.

The response to `/cra/check_report/verification/pdf/get` is the PDF binary data. The `request_id`  is returned in the `Plaid-Request-ID` header.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.craCheckReportVerificationPdfGet({ body: {} });
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.CraCheckReportVerificationPdfGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.craCheckReportVerificationPdfGet({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CraCheckReportVerificationPdfGetRequest](src/models/cra-check-report-verification-pdf-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.craCheckReportVerificationPdfGet(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ThePlaidApiClient.CraCheckReportVerificationPdfGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.craCheckReportVerificationPdfGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ThePlaidApiClient.CraCheckReportVerificationPdfGetError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>craCreditProfileReportGet(request: ThePlaidApiClient.CraCreditProfileReportGetRequestParams, options?: RequestOptions): ApiPromise&lt;CraCreditProfileReportGetResponse, ThePlaidApiClient.CraCreditProfileReportGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

`/cra/credit_profile/report/get` retrieves a credit profile report for a user.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.craCreditProfileReportGet({
    body: {
      userId: "some example string",
      consumerReportPermissiblePurpose: ConsumerReportPermissiblePurpose.AccountReviewCredit,
      clientReportId: "some example string",
      reportType: CraCreditProfileReportType.Qualify,
      inquiryType: CraCreditProfileInquiryType.SoftInquiry,
      version: CraCreditProfileReportVersion.V1,
    },
  });
  // TODO: Handle 'response' of type CraCreditProfileReportGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.CraCreditProfileReportGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.craCreditProfileReportGet({
  body: {
    userId: "some example string",
    consumerReportPermissiblePurpose: ConsumerReportPermissiblePurpose.AccountReviewCredit,
    clientReportId: "some example string",
    reportType: CraCreditProfileReportType.Qualify,
    inquiryType: CraCreditProfileInquiryType.SoftInquiry,
    version: CraCreditProfileReportVersion.V1,
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CraCreditProfileReportGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CraCreditProfileReportGetRequest](src/models/cra-credit-profile-report-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.craCreditProfileReportGet(request)`

- **OnSuccess**: <code>[CraCreditProfileReportGetResponse](src/models/cra-credit-profile-report-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.CraCreditProfileReportGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.craCreditProfileReportGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CraCreditProfileReportGetResponse, ThePlaidApiClient.CraCreditProfileReportGetError&gt;</code>, with `result.value` of type <code>[CraCreditProfileReportGetResponse](src/models/cra-credit-profile-report-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>craLoansApplicationsRegister(request: ThePlaidApiClient.CraLoansApplicationsRegisterRequestParams, options?: RequestOptions): ApiPromise&lt;CraLoansApplicationsRegisterResponse, ThePlaidApiClient.CraLoansApplicationsRegisterError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

`/cra/loans/applications/register` registers loan applications and decisions.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.craLoansApplicationsRegister({
    body: {
      applications: [
        {
          userToken: "some example string",
          applicationId: "some example string",
          type: CraLoanType.Personal,
          decision: CraLoanApplicationDecision.Approved,
        },
      ],
    },
  });
  // TODO: Handle 'response' of type CraLoansApplicationsRegisterResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.CraLoansApplicationsRegisterError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.craLoansApplicationsRegister({
  body: {
    applications: [
      {
        userToken: "some example string",
        applicationId: "some example string",
        type: CraLoanType.Personal,
        decision: CraLoanApplicationDecision.Approved,
      },
    ],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CraLoansApplicationsRegisterResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CraLoansApplicationsRegisterRequest](src/models/cra-loans-applications-register-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.craLoansApplicationsRegister(request)`

- **OnSuccess**: <code>[CraLoansApplicationsRegisterResponse](src/models/cra-loans-applications-register-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.CraLoansApplicationsRegisterError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.craLoansApplicationsRegister(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CraLoansApplicationsRegisterResponse, ThePlaidApiClient.CraLoansApplicationsRegisterError&gt;</code>, with `result.value` of type <code>[CraLoansApplicationsRegisterResponse](src/models/cra-loans-applications-register-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>craLoansRegister(request: ThePlaidApiClient.CraLoansRegisterRequestParams, options?: RequestOptions): ApiPromise&lt;CraLoansRegisterResponse, ThePlaidApiClient.CraLoansRegisterError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

`/cra/loans/register` registers a list of loans to their applicants.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.craLoansRegister({
    body: {
      loans: [
        {
          userToken: "some example string",
          loanId: "some example string",
          type: CraLoanType.Personal,
          paymentSchedule: CraLoanPaymentSchedule.Daily,
          openedDate: "2024-01-15",
          openedWithStatus: { status: CraLoanStatus.Approved, date: "2024-01-15" },
        },
      ],
    },
  });
  // TODO: Handle 'response' of type CraLoansRegisterResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.CraLoansRegisterError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.craLoansRegister({
  body: {
    loans: [
      {
        userToken: "some example string",
        loanId: "some example string",
        type: CraLoanType.Personal,
        paymentSchedule: CraLoanPaymentSchedule.Daily,
        openedDate: "2024-01-15",
        openedWithStatus: { status: CraLoanStatus.Approved, date: "2024-01-15" },
      },
    ],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CraLoansRegisterResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CraLoansRegisterRequest](src/models/cra-loans-register-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.craLoansRegister(request)`

- **OnSuccess**: <code>[CraLoansRegisterResponse](src/models/cra-loans-register-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.CraLoansRegisterError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.craLoansRegister(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CraLoansRegisterResponse, ThePlaidApiClient.CraLoansRegisterError&gt;</code>, with `result.value` of type <code>[CraLoansRegisterResponse](src/models/cra-loans-register-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>craLoansUnregister(request: ThePlaidApiClient.CraLoansUnregisterRequestParams, options?: RequestOptions): ApiPromise&lt;CraLoanUnregisterResponse, ThePlaidApiClient.CraLoansUnregisterError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

`/cra/loans/unregister` indicates the loans have reached a final status and no further updates are expected.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.craLoansUnregister({
    body: {
      loans: [
        {
          loanId: "some example string",
          closedWithStatus: { status: CraLoanStatus.Approved, date: "2024-01-15" },
        },
      ],
    },
  });
  // TODO: Handle 'response' of type CraLoanUnregisterResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.CraLoansUnregisterError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.craLoansUnregister({
  body: {
    loans: [
      {
        loanId: "some example string",
        closedWithStatus: { status: CraLoanStatus.Approved, date: "2024-01-15" },
      },
    ],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CraLoanUnregisterResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CraLoansUnregisterRequest](src/models/cra-loans-unregister-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.craLoansUnregister(request)`

- **OnSuccess**: <code>[CraLoanUnregisterResponse](src/models/cra-loan-unregister-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.CraLoansUnregisterError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.craLoansUnregister(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CraLoanUnregisterResponse, ThePlaidApiClient.CraLoansUnregisterError&gt;</code>, with `result.value` of type <code>[CraLoanUnregisterResponse](src/models/cra-loan-unregister-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>craLoansUpdate(request: ThePlaidApiClient.CraLoansUpdateRequestParams, options?: RequestOptions): ApiPromise&lt;CraLoansUpdateResponse, ThePlaidApiClient.CraLoansUpdateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

`/cra/loans/update` updates loan information such as the status and payment history.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.craLoansUpdate({ body: { loans: [{}] } });
  // TODO: Handle 'response' of type CraLoansUpdateResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.CraLoansUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.craLoansUpdate({ body: { loans: [{}] } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CraLoansUpdateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CraLoansUpdateRequest](src/models/cra-loans-update-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.craLoansUpdate(request)`

- **OnSuccess**: <code>[CraLoansUpdateResponse](src/models/cra-loans-update-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.CraLoansUpdateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.craLoansUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CraLoansUpdateResponse, ThePlaidApiClient.CraLoansUpdateError&gt;</code>, with `result.value` of type <code>[CraLoansUpdateResponse](src/models/cra-loans-update-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>craMonitoringInsightsGet(request: ThePlaidApiClient.CraMonitoringInsightsGetRequestParams, options?: RequestOptions): ApiPromise&lt;CraMonitoringInsightsGetResponse, ThePlaidApiClient.CraMonitoringInsightsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows you to retrieve a Cash Flow Updates report by passing in the `user_id` referred to in the webhook you received.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.craMonitoringInsightsGet({
    body: {
      consumerReportPermissiblePurpose: MonitoringConsumerReportPermissiblePurpose.AccountReviewCredit,
    },
  });
  // TODO: Handle 'response' of type CraMonitoringInsightsGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.CraMonitoringInsightsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.craMonitoringInsightsGet({
  body: { consumerReportPermissiblePurpose: MonitoringConsumerReportPermissiblePurpose.AccountReviewCredit },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CraMonitoringInsightsGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CraMonitoringInsightsGetRequest](src/models/cra-monitoring-insights-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.craMonitoringInsightsGet(request)`

- **OnSuccess**: <code>[CraMonitoringInsightsGetResponse](src/models/cra-monitoring-insights-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.CraMonitoringInsightsGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.craMonitoringInsightsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CraMonitoringInsightsGetResponse, ThePlaidApiClient.CraMonitoringInsightsGetError&gt;</code>, with `result.value` of type <code>[CraMonitoringInsightsGetResponse](src/models/cra-monitoring-insights-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>craMonitoringInsightsSubscribe(request: ThePlaidApiClient.CraMonitoringInsightsSubscribeRequestParams, options?: RequestOptions): ApiPromise&lt;CraMonitoringInsightsSubscribeResponse, ThePlaidApiClient.CraMonitoringInsightsSubscribeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows you to subscribe to insights for a user's linked CRA Item, which are updated between one and four times per day (best-effort). In the current Cash Flow Updates beta experience, only one Item per user may be subscribed for monitoring updates.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.craMonitoringInsightsSubscribe({ body: { webhook: "some example string" } });
  // TODO: Handle 'response' of type CraMonitoringInsightsSubscribeResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.CraMonitoringInsightsSubscribeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.craMonitoringInsightsSubscribe({
  body: { webhook: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CraMonitoringInsightsSubscribeResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CraMonitoringInsightsSubscribeRequest](src/models/cra-monitoring-insights-subscribe-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.craMonitoringInsightsSubscribe(request)`

- **OnSuccess**: <code>[CraMonitoringInsightsSubscribeResponse](src/models/cra-monitoring-insights-subscribe-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.CraMonitoringInsightsSubscribeError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.craMonitoringInsightsSubscribe(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CraMonitoringInsightsSubscribeResponse, ThePlaidApiClient.CraMonitoringInsightsSubscribeError&gt;</code>, with `result.value` of type <code>[CraMonitoringInsightsSubscribeResponse](src/models/cra-monitoring-insights-subscribe-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>craMonitoringInsightsUnsubscribe(request: ThePlaidApiClient.CraMonitoringInsightsUnsubscribeRequestParams, options?: RequestOptions): ApiPromise&lt;CraMonitoringInsightsUnsubscribeResponse, ThePlaidApiClient.CraMonitoringInsightsUnsubscribeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows you to unsubscribe from previously subscribed Monitoring Insights.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.craMonitoringInsightsUnsubscribe({
    body: { subscriptionId: "some example string" },
  });
  // TODO: Handle 'response' of type CraMonitoringInsightsUnsubscribeResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.CraMonitoringInsightsUnsubscribeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.craMonitoringInsightsUnsubscribe({
  body: { subscriptionId: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CraMonitoringInsightsUnsubscribeResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CraMonitoringInsightsUnsubscribeRequest](src/models/cra-monitoring-insights-unsubscribe-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.craMonitoringInsightsUnsubscribe(request)`

- **OnSuccess**: <code>[CraMonitoringInsightsUnsubscribeResponse](src/models/cra-monitoring-insights-unsubscribe-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.CraMonitoringInsightsUnsubscribeError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.craMonitoringInsightsUnsubscribe(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CraMonitoringInsightsUnsubscribeResponse, ThePlaidApiClient.CraMonitoringInsightsUnsubscribeError&gt;</code>, with `result.value` of type <code>[CraMonitoringInsightsUnsubscribeResponse](src/models/cra-monitoring-insights-unsubscribe-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>craPartnerInsightsGet(request: ThePlaidApiClient.CraPartnerInsightsGetRequestParams, options?: RequestOptions): ApiPromise&lt;CraPartnerInsightsGetResponse, ThePlaidApiClient.CraPartnerInsightsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

`/cra/partner_insights/get` returns cash flow insights for a specified user.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.craPartnerInsightsGet({ body: { userToken: "some example string" } });
  // TODO: Handle 'response' of type CraPartnerInsightsGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.CraPartnerInsightsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.craPartnerInsightsGet({
  body: { userToken: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CraPartnerInsightsGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CraPartnerInsightsGetRequest](src/models/cra-partner-insights-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.craPartnerInsightsGet(request)`

- **OnSuccess**: <code>[CraPartnerInsightsGetResponse](src/models/cra-partner-insights-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.CraPartnerInsightsGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.craPartnerInsightsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CraPartnerInsightsGetResponse, ThePlaidApiClient.CraPartnerInsightsGetError&gt;</code>, with `result.value` of type <code>[CraPartnerInsightsGetResponse](src/models/cra-partner-insights-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>craReportGet(request: ThePlaidApiClient.CraReportGetRequestParams, options?: RequestOptions): ApiPromise&lt;CraReportGetResponse, ThePlaidApiClient.CraReportGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

`/cra/report/get` retrieves a CRA Report for a user.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.craReportGet({
    body: {
      userId: "some example string",
      products: [{ product: Products.Assets, version: "some example string" }],
      decisionStage: CraReportDecisionStage.Prequalification,
      consumerReportPermissiblePurpose: ConsumerReportPermissiblePurpose.AccountReviewCredit,
    },
  });
  // TODO: Handle 'response' of type CraReportGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.CraReportGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.craReportGet({
  body: {
    userId: "some example string",
    products: [{ product: Products.Assets, version: "some example string" }],
    decisionStage: CraReportDecisionStage.Prequalification,
    consumerReportPermissiblePurpose: ConsumerReportPermissiblePurpose.AccountReviewCredit,
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CraReportGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CraReportGetRequest](src/models/cra-report-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.craReportGet(request)`

- **OnSuccess**: <code>[CraReportGetResponse](src/models/cra-report-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.CraReportGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.craReportGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CraReportGetResponse, ThePlaidApiClient.CraReportGetError&gt;</code>, with `result.value` of type <code>[CraReportGetResponse](src/models/cra-report-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createPaymentToken(request: ThePlaidApiClient.CreatePaymentTokenRequest, options?: RequestOptions): ApiPromise&lt;PaymentInitiationPaymentTokenCreateResponse, ThePlaidApiClient.CreatePaymentTokenError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/payment_initiation/payment/token/create` endpoint has been deprecated. New Plaid customers will be unable to use this endpoint, and existing customers are encouraged to migrate to the newer, `link_token`-based flow. The recommended flow is to provide the `payment_id` to `/link/token/create`, which returns a `link_token` used to initialize Link.

The `/payment_initiation/payment/token/create` endpoint is used to create a `payment_token`, which can then be used in Link initialization to enter a payment initiation flow. You can only use a `payment_token` once. If this attempt fails, the end user aborts the flow, or the token expires, you will need to create a new payment token. Creating a new payment token does not require end user input.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.createPaymentToken({ body: { paymentId: "some example string" } });
  // TODO: Handle 'response' of type PaymentInitiationPaymentTokenCreateResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.CreatePaymentTokenError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.createPaymentToken({ body: { paymentId: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaymentInitiationPaymentTokenCreateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PaymentInitiationPaymentTokenCreateRequest](src/models/payment-initiation-payment-token-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.createPaymentToken(request)`

- **OnSuccess**: <code>[PaymentInitiationPaymentTokenCreateResponse](src/models/payment-initiation-payment-token-create-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.CreatePaymentTokenError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.createPaymentToken(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaymentInitiationPaymentTokenCreateResponse, ThePlaidApiClient.CreatePaymentTokenError&gt;</code>, with `result.value` of type <code>[PaymentInitiationPaymentTokenCreateResponse](src/models/payment-initiation-payment-token-create-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>creditAssetReportFreddieMacGet(request: ThePlaidApiClient.CreditAssetReportFreddieMacGetRequest, options?: RequestOptions): ApiPromise&lt;AssetReportFreddieGetResponse, ThePlaidApiClient.CreditAssetReportFreddieMacGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/credit/asset_report/freddie_mac/get` endpoint retrieves the Asset Report in Freddie Mac's JSON format.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.creditAssetReportFreddieMacGet({
    body: { auditCopyToken: "some example string" },
  });
  // TODO: Handle 'response' of type AssetReportFreddieGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.CreditAssetReportFreddieMacGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.creditAssetReportFreddieMacGet({
  body: { auditCopyToken: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AssetReportFreddieGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[AssetReportFreddieGetRequest](src/models/asset-report-freddie-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.creditAssetReportFreddieMacGet(request)`

- **OnSuccess**: <code>[AssetReportFreddieGetResponse](src/models/asset-report-freddie-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.CreditAssetReportFreddieMacGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.creditAssetReportFreddieMacGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AssetReportFreddieGetResponse, ThePlaidApiClient.CreditAssetReportFreddieMacGetError&gt;</code>, with `result.value` of type <code>[AssetReportFreddieGetResponse](src/models/asset-report-freddie-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>creditAuditCopyTokenCreate(request: ThePlaidApiClient.CreditAuditCopyTokenCreateRequestParams, options?: RequestOptions): ApiPromise&lt;CreditAuditCopyTokenCreateResponse, ThePlaidApiClient.CreditAuditCopyTokenCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Plaid can create an Audit Copy token of an Asset Report and/or Income Report to share with a participating Government-Sponsored Enterprise (GSE) if you participate in Fannie Mae's Day 1 Certainty™ program or utilize Freddie Mac's Loan Product Advisor® (LPA®) Asset and Income Modeler (AIM). An Audit Copy token contains the same underlying data as the Asset Report and/or Income Report (result of `/credit/payroll_income/get`).

Use the `/credit/audit_copy_token/create` endpoint to create an `audit_copy_token` and then pass that token to the GSE who needs access.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.creditAuditCopyTokenCreate({
    body: { reportTokens: ["some example string"] },
  });
  // TODO: Handle 'response' of type CreditAuditCopyTokenCreateResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.CreditAuditCopyTokenCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.creditAuditCopyTokenCreate({
  body: { reportTokens: ["some example string"] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreditAuditCopyTokenCreateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreditAuditCopyTokenCreateRequest](src/models/credit-audit-copy-token-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.creditAuditCopyTokenCreate(request)`

- **OnSuccess**: <code>[CreditAuditCopyTokenCreateResponse](src/models/credit-audit-copy-token-create-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.CreditAuditCopyTokenCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.creditAuditCopyTokenCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreditAuditCopyTokenCreateResponse, ThePlaidApiClient.CreditAuditCopyTokenCreateError&gt;</code>, with `result.value` of type <code>[CreditAuditCopyTokenCreateResponse](src/models/credit-audit-copy-token-create-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>creditAuditCopyTokenUpdate(request: ThePlaidApiClient.CreditAuditCopyTokenUpdateRequestParams, options?: RequestOptions): ApiPromise&lt;CreditAuditCopyTokenUpdateResponse, ThePlaidApiClient.CreditAuditCopyTokenUpdateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/credit/audit_copy_token/update` endpoint updates an existing Audit Copy Token by adding the report tokens in the `report_tokens` field to the `audit_copy_token`. If the Audit Copy Token already contains a report of a certain type, it will be replaced with the token provided in the `report_tokens` field.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.creditAuditCopyTokenUpdate({
    body: { auditCopyToken: "some example string", reportTokens: ["some example string"] },
  });
  // TODO: Handle 'response' of type CreditAuditCopyTokenUpdateResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.CreditAuditCopyTokenUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.creditAuditCopyTokenUpdate({
  body: { auditCopyToken: "some example string", reportTokens: ["some example string"] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreditAuditCopyTokenUpdateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreditAuditCopyTokenUpdateRequest](src/models/credit-audit-copy-token-update-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.creditAuditCopyTokenUpdate(request)`

- **OnSuccess**: <code>[CreditAuditCopyTokenUpdateResponse](src/models/credit-audit-copy-token-update-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.CreditAuditCopyTokenUpdateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.creditAuditCopyTokenUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreditAuditCopyTokenUpdateResponse, ThePlaidApiClient.CreditAuditCopyTokenUpdateError&gt;</code>, with `result.value` of type <code>[CreditAuditCopyTokenUpdateResponse](src/models/credit-audit-copy-token-update-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>creditBankEmploymentGet(request: ThePlaidApiClient.CreditBankEmploymentGetRequestParams, options?: RequestOptions): ApiPromise&lt;CreditBankEmploymentGetResponse, ThePlaidApiClient.CreditBankEmploymentGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

`/beta/credit/v1/bank_employment/get` returns the employment report(s) derived from bank transaction data for a specified user.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.creditBankEmploymentGet({ body: { userToken: "some example string" } });
  // TODO: Handle 'response' of type CreditBankEmploymentGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.CreditBankEmploymentGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.creditBankEmploymentGet({
  body: { userToken: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreditBankEmploymentGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreditBankEmploymentGetRequest](src/models/credit-bank-employment-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.creditBankEmploymentGet(request)`

- **OnSuccess**: <code>[CreditBankEmploymentGetResponse](src/models/credit-bank-employment-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.CreditBankEmploymentGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.creditBankEmploymentGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreditBankEmploymentGetResponse, ThePlaidApiClient.CreditBankEmploymentGetError&gt;</code>, with `result.value` of type <code>[CreditBankEmploymentGetResponse](src/models/credit-bank-employment-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>creditBankIncomeGet(request: ThePlaidApiClient.CreditBankIncomeGetRequestParams, options?: RequestOptions): ApiPromise&lt;CreditBankIncomeGetResponse, ThePlaidApiClient.CreditBankIncomeGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

`/credit/bank_income/get` returns the bank income report(s) for a specified user. A single report corresponds to all institutions linked in a single Link session. To include multiple institutions in a single report, use [Multi-Item Link](https://plaid.com/docs/link/multi-item-link). To return older reports, use the `options.count` field.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.creditBankIncomeGet({ body: {} });
  // TODO: Handle 'response' of type CreditBankIncomeGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.CreditBankIncomeGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.creditBankIncomeGet({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreditBankIncomeGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreditBankIncomeGetRequest](src/models/credit-bank-income-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.creditBankIncomeGet(request)`

- **OnSuccess**: <code>[CreditBankIncomeGetResponse](src/models/credit-bank-income-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.CreditBankIncomeGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.creditBankIncomeGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreditBankIncomeGetResponse, ThePlaidApiClient.CreditBankIncomeGetError&gt;</code>, with `result.value` of type <code>[CreditBankIncomeGetResponse](src/models/credit-bank-income-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>creditBankIncomePdfGet(request: ThePlaidApiClient.CreditBankIncomePdfGetRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, ThePlaidApiClient.CreditBankIncomePdfGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

`/credit/bank_income/pdf/get` returns the most recent bank income report for a specified user in PDF format.  A single report corresponds to all institutions linked in a single Link session. To include multiple institutions in a single report, use [Multi-Item Link](https://plaid.com/docs/link/multi-item-link).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.creditBankIncomePdfGet({ body: { userToken: "some example string" } });
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.CreditBankIncomePdfGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.creditBankIncomePdfGet({
  body: { userToken: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreditBankIncomePdfGetRequest](src/models/credit-bank-income-pdf-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.creditBankIncomePdfGet(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ThePlaidApiClient.CreditBankIncomePdfGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.creditBankIncomePdfGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ThePlaidApiClient.CreditBankIncomePdfGetError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>creditBankIncomeRefresh(request: ThePlaidApiClient.CreditBankIncomeRefreshRequestParams, options?: RequestOptions): ApiPromise&lt;CreditBankIncomeRefreshResponse, ThePlaidApiClient.CreditBankIncomeRefreshError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

`/credit/bank_income/refresh` is deprecated. The backend implementation was removed (returns an `Unimplemented` error at runtime), and the endpoint is no longer part of the documented API surface. To refresh Bank Income data for an existing user, send the user through Link's update mode so they can confirm their income sources. For a fully backend refresh, migrate to CRA Income Insights and call `/cra/check_report/create`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.creditBankIncomeRefresh({ body: { userToken: "some example string" } });
  // TODO: Handle 'response' of type CreditBankIncomeRefreshResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.CreditBankIncomeRefreshError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.creditBankIncomeRefresh({
  body: { userToken: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreditBankIncomeRefreshResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreditBankIncomeRefreshRequest](src/models/credit-bank-income-refresh-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.creditBankIncomeRefresh(request)`

- **OnSuccess**: <code>[CreditBankIncomeRefreshResponse](src/models/credit-bank-income-refresh-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.CreditBankIncomeRefreshError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.creditBankIncomeRefresh(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreditBankIncomeRefreshResponse, ThePlaidApiClient.CreditBankIncomeRefreshError&gt;</code>, with `result.value` of type <code>[CreditBankIncomeRefreshResponse](src/models/credit-bank-income-refresh-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>creditBankIncomeWebhookUpdate(request: ThePlaidApiClient.CreditBankIncomeWebhookUpdateRequestParams, options?: RequestOptions): ApiPromise&lt;CreditBankIncomeWebhookUpdateResponse, ThePlaidApiClient.CreditBankIncomeWebhookUpdateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

`/credit/bank_income/webhook/update` allows you to subscribe or unsubscribe a user for income webhook notifications. By default, all users start out unsubscribed.

If a user is subscribed, on significant changes to the user's income profile, you will receive a `BANK_INCOME_REFRESH_UPDATE` webhook, prompting you to refresh bank income data for the user.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.creditBankIncomeWebhookUpdate({
    body: { userToken: "some example string", enableWebhooks: true },
  });
  // TODO: Handle 'response' of type CreditBankIncomeWebhookUpdateResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.CreditBankIncomeWebhookUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.creditBankIncomeWebhookUpdate({
  body: { userToken: "some example string", enableWebhooks: true },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreditBankIncomeWebhookUpdateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreditBankIncomeWebhookUpdateRequest](src/models/credit-bank-income-webhook-update-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.creditBankIncomeWebhookUpdate(request)`

- **OnSuccess**: <code>[CreditBankIncomeWebhookUpdateResponse](src/models/credit-bank-income-webhook-update-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.CreditBankIncomeWebhookUpdateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.creditBankIncomeWebhookUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreditBankIncomeWebhookUpdateResponse, ThePlaidApiClient.CreditBankIncomeWebhookUpdateError&gt;</code>, with `result.value` of type <code>[CreditBankIncomeWebhookUpdateResponse](src/models/credit-bank-income-webhook-update-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>creditBankStatementsUploadsGet(request: ThePlaidApiClient.CreditBankStatementsUploadsGetRequestParams, options?: RequestOptions): ApiPromise&lt;CreditBankStatementsUploadsGetResponse, ThePlaidApiClient.CreditBankStatementsUploadsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

`/credit/bank_statements/uploads/get` returns parsed data from bank statements uploaded by users as part of the Document Income flow. If your account is not enabled for Document Parsing, contact your account manager to request access.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.creditBankStatementsUploadsGet({
    body: { userToken: "some example string" },
  });
  // TODO: Handle 'response' of type CreditBankStatementsUploadsGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.CreditBankStatementsUploadsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.creditBankStatementsUploadsGet({
  body: { userToken: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreditBankStatementsUploadsGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreditBankStatementsUploadsGetRequest](src/models/credit-bank-statements-uploads-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.creditBankStatementsUploadsGet(request)`

- **OnSuccess**: <code>[CreditBankStatementsUploadsGetResponse](src/models/credit-bank-statements-uploads-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.CreditBankStatementsUploadsGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.creditBankStatementsUploadsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreditBankStatementsUploadsGetResponse, ThePlaidApiClient.CreditBankStatementsUploadsGetError&gt;</code>, with `result.value` of type <code>[CreditBankStatementsUploadsGetResponse](src/models/credit-bank-statements-uploads-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>creditEmploymentGet(request: ThePlaidApiClient.CreditEmploymentGetRequestParams, options?: RequestOptions): ApiPromise&lt;CreditEmploymentGetResponse, ThePlaidApiClient.CreditEmploymentGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

`/credit/employment/get` returns a list of items with employment information from a user's payroll provider that was verified by an end user.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.creditEmploymentGet({ body: { userToken: "some example string" } });
  // TODO: Handle 'response' of type CreditEmploymentGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.CreditEmploymentGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.creditEmploymentGet({ body: { userToken: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreditEmploymentGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreditEmploymentGetRequest](src/models/credit-employment-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.creditEmploymentGet(request)`

- **OnSuccess**: <code>[CreditEmploymentGetResponse](src/models/credit-employment-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.CreditEmploymentGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.creditEmploymentGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreditEmploymentGetResponse, ThePlaidApiClient.CreditEmploymentGetError&gt;</code>, with `result.value` of type <code>[CreditEmploymentGetResponse](src/models/credit-employment-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>creditFreddieMacReportsGet(request: ThePlaidApiClient.CreditFreddieMacReportsGetRequestParams, options?: RequestOptions): ApiPromise&lt;CreditFreddieMacReportsGetResponse, ThePlaidApiClient.CreditFreddieMacReportsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/credit/freddie_mac/reports/get` endpoint retrieves the Verification of Assets and Verification of Employment reports.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.creditFreddieMacReportsGet({
    body: { auditCopyToken: "some example string" },
  });
  // TODO: Handle 'response' of type CreditFreddieMacReportsGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.CreditFreddieMacReportsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.creditFreddieMacReportsGet({
  body: { auditCopyToken: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreditFreddieMacReportsGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreditFreddieMacReportsGetRequest](src/models/credit-freddie-mac-reports-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.creditFreddieMacReportsGet(request)`

- **OnSuccess**: <code>[CreditFreddieMacReportsGetResponse](src/models/credit-freddie-mac-reports-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.CreditFreddieMacReportsGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.creditFreddieMacReportsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreditFreddieMacReportsGetResponse, ThePlaidApiClient.CreditFreddieMacReportsGetError&gt;</code>, with `result.value` of type <code>[CreditFreddieMacReportsGetResponse](src/models/credit-freddie-mac-reports-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>creditPayrollIncomeGet(request: ThePlaidApiClient.CreditPayrollIncomeGetRequestParams, options?: RequestOptions): ApiPromise&lt;CreditPayrollIncomeGetResponse, ThePlaidApiClient.CreditPayrollIncomeGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint gets payroll income information for a specific user, either as a result of the user connecting to their payroll provider or uploading a pay related document.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.creditPayrollIncomeGet({ body: {} });
  // TODO: Handle 'response' of type CreditPayrollIncomeGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.CreditPayrollIncomeGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.creditPayrollIncomeGet({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreditPayrollIncomeGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreditPayrollIncomeGetRequest](src/models/credit-payroll-income-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.creditPayrollIncomeGet(request)`

- **OnSuccess**: <code>[CreditPayrollIncomeGetResponse](src/models/credit-payroll-income-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.CreditPayrollIncomeGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.creditPayrollIncomeGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreditPayrollIncomeGetResponse, ThePlaidApiClient.CreditPayrollIncomeGetError&gt;</code>, with `result.value` of type <code>[CreditPayrollIncomeGetResponse](src/models/credit-payroll-income-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>creditPayrollIncomeParsingConfigUpdate(request: ThePlaidApiClient.CreditPayrollIncomeParsingConfigUpdateRequestParams, options?: RequestOptions): ApiPromise&lt;CreditPayrollIncomeParsingConfigUpdateResponse, ThePlaidApiClient.CreditPayrollIncomeParsingConfigUpdateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

`/credit/payroll_income/parsing_config/update` updates the parsing configuration for a document income verification.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.creditPayrollIncomeParsingConfigUpdate({
    body: { userToken: "some example string", parsingConfig: [IncomeVerificationDocParsingConfig.Ocr] },
  });
  // TODO: Handle 'response' of type CreditPayrollIncomeParsingConfigUpdateResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.CreditPayrollIncomeParsingConfigUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.creditPayrollIncomeParsingConfigUpdate({
  body: { userToken: "some example string", parsingConfig: [IncomeVerificationDocParsingConfig.Ocr] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreditPayrollIncomeParsingConfigUpdateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreditPayrollIncomeParsingConfigUpdateRequest](src/models/credit-payroll-income-parsing-config-update-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.creditPayrollIncomeParsingConfigUpdate(request)`

- **OnSuccess**: <code>[CreditPayrollIncomeParsingConfigUpdateResponse](src/models/credit-payroll-income-parsing-config-update-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.CreditPayrollIncomeParsingConfigUpdateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.creditPayrollIncomeParsingConfigUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreditPayrollIncomeParsingConfigUpdateResponse, ThePlaidApiClient.CreditPayrollIncomeParsingConfigUpdateError&gt;</code>, with `result.value` of type <code>[CreditPayrollIncomeParsingConfigUpdateResponse](src/models/credit-payroll-income-parsing-config-update-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>creditPayrollIncomePrecheck(request: ThePlaidApiClient.CreditPayrollIncomePrecheckRequestParams, options?: RequestOptions): ApiPromise&lt;CreditPayrollIncomePrecheckResponse, ThePlaidApiClient.CreditPayrollIncomePrecheckError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

`/credit/payroll_income/precheck` is an optional endpoint that can be called before initializing a Link session for income verification. It evaluates whether a given user is supportable by digital income verification. If the user is eligible for digital verification, that information will be associated with the user token, and in this way will generate a Link UI optimized for the end user and their specific employer. If the user cannot be confirmed as eligible, the user can still use the income verification flow, but they may be required to manually upload a paystub to verify their income.

While all request fields are optional, providing `employer` data will increase the chance of receiving a useful result.

When testing in Sandbox, you can control the results by providing special test values in the `employer` and `access_tokens` fields. `employer_good` and `employer_bad` will result in `HIGH` and `LOW` confidence values, respectively. `employer_multi` will result in a `HIGH` confidence with multiple payroll options. Likewise, `access_good` and `access_bad` will result in `HIGH` and `LOW` confidence values, respectively. Any other value for `employer` and `access_tokens` in Sandbox will result in `UNKNOWN` confidence.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.creditPayrollIncomePrecheck({ body: {} });
  // TODO: Handle 'response' of type CreditPayrollIncomePrecheckResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.CreditPayrollIncomePrecheckError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.creditPayrollIncomePrecheck({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreditPayrollIncomePrecheckResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreditPayrollIncomePrecheckRequest](src/models/credit-payroll-income-precheck-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.creditPayrollIncomePrecheck(request)`

- **OnSuccess**: <code>[CreditPayrollIncomePrecheckResponse](src/models/credit-payroll-income-precheck-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.CreditPayrollIncomePrecheckError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.creditPayrollIncomePrecheck(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreditPayrollIncomePrecheckResponse, ThePlaidApiClient.CreditPayrollIncomePrecheckError&gt;</code>, with `result.value` of type <code>[CreditPayrollIncomePrecheckResponse](src/models/credit-payroll-income-precheck-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>creditPayrollIncomeRefresh(request: ThePlaidApiClient.CreditPayrollIncomeRefreshRequestParams, options?: RequestOptions): ApiPromise&lt;CreditPayrollIncomeRefreshResponse, ThePlaidApiClient.CreditPayrollIncomeRefreshError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

`/credit/payroll_income/refresh` refreshes a given digital payroll income verification.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.creditPayrollIncomeRefresh({ body: { userToken: "some example string" } });
  // TODO: Handle 'response' of type CreditPayrollIncomeRefreshResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.CreditPayrollIncomeRefreshError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.creditPayrollIncomeRefresh({
  body: { userToken: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreditPayrollIncomeRefreshResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreditPayrollIncomeRefreshRequest](src/models/credit-payroll-income-refresh-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.creditPayrollIncomeRefresh(request)`

- **OnSuccess**: <code>[CreditPayrollIncomeRefreshResponse](src/models/credit-payroll-income-refresh-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.CreditPayrollIncomeRefreshError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.creditPayrollIncomeRefresh(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreditPayrollIncomeRefreshResponse, ThePlaidApiClient.CreditPayrollIncomeRefreshError&gt;</code>, with `result.value` of type <code>[CreditPayrollIncomeRefreshResponse](src/models/credit-payroll-income-refresh-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>creditPayrollIncomeRiskSignalsGet(request: ThePlaidApiClient.CreditPayrollIncomeRiskSignalsGetRequestParams, options?: RequestOptions): ApiPromise&lt;CreditPayrollIncomeRiskSignalsGetResponse, ThePlaidApiClient.CreditPayrollIncomeRiskSignalsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

`/credit/payroll_income/risk_signals/get` can be used as part of the Document Income flow to assess a user-uploaded document for signs of potential fraud or tampering. It returns a risk score for each uploaded document that indicates the likelihood of the document being fraudulent, in addition to details on the individual risk signals contributing to the score.

To trigger risk signal generation for an Item, call `/link/token/create` with `parsing_config` set to include `risk_signals`, or call `/credit/payroll_income/parsing_config/update`. Once risk signal generation has been triggered, `/credit/payroll_income/risk_signals/get` can be called at any time after the `INCOME_VERIFICATION_RISK_SIGNALS` webhook has been fired.

`/credit/payroll_income/risk_signals/get` is offered as an add-on to Document Income and is billed separately. To request access to this endpoint, submit a product access request or contact your Plaid account manager.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.creditPayrollIncomeRiskSignalsGet({ body: {} });
  // TODO: Handle 'response' of type CreditPayrollIncomeRiskSignalsGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.CreditPayrollIncomeRiskSignalsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.creditPayrollIncomeRiskSignalsGet({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreditPayrollIncomeRiskSignalsGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreditPayrollIncomeRiskSignalsGetRequest](src/models/credit-payroll-income-risk-signals-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.creditPayrollIncomeRiskSignalsGet(request)`

- **OnSuccess**: <code>[CreditPayrollIncomeRiskSignalsGetResponse](src/models/credit-payroll-income-risk-signals-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.CreditPayrollIncomeRiskSignalsGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.creditPayrollIncomeRiskSignalsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreditPayrollIncomeRiskSignalsGetResponse, ThePlaidApiClient.CreditPayrollIncomeRiskSignalsGetError&gt;</code>, with `result.value` of type <code>[CreditPayrollIncomeRiskSignalsGetResponse](src/models/credit-payroll-income-risk-signals-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>creditRelayCreate(request: ThePlaidApiClient.CreditRelayCreateRequestParams, options?: RequestOptions): ApiPromise&lt;CreditRelayCreateResponse, ThePlaidApiClient.CreditRelayCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Plaid can share an Asset Report directly with a participating third party on your behalf. The shared Asset Report is the exact same Asset Report originally created in `/asset_report/create`.

To grant a third party access to an Asset Report, use the `/credit/relay/create` endpoint to create a `relay_token` and then pass that token to your third party. Each third party has its own `secondary_client_id`; for example, `ce5bd328dcd34123456`. You'll need to create a separate `relay_token` for each third party that needs access to the report on your behalf.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.creditRelayCreate({
    body: { reportTokens: ["some example string"], secondaryClientId: "some example string" },
  });
  // TODO: Handle 'response' of type CreditRelayCreateResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.CreditRelayCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.creditRelayCreate({
  body: { reportTokens: ["some example string"], secondaryClientId: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreditRelayCreateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreditRelayCreateRequest](src/models/credit-relay-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.creditRelayCreate(request)`

- **OnSuccess**: <code>[CreditRelayCreateResponse](src/models/credit-relay-create-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.CreditRelayCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.creditRelayCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreditRelayCreateResponse, ThePlaidApiClient.CreditRelayCreateError&gt;</code>, with `result.value` of type <code>[CreditRelayCreateResponse](src/models/credit-relay-create-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>creditRelayGet(request: ThePlaidApiClient.CreditRelayGetRequestParams, options?: RequestOptions): ApiPromise&lt;AssetReportGetResponse, ThePlaidApiClient.CreditRelayGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

`/credit/relay/get` allows third parties to receive a report that was shared with them, using a `relay_token` that was created by the report owner.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.creditRelayGet({
    body: { relayToken: "some example string", reportType: ReportType.Asset },
  });
  // TODO: Handle 'response' of type AssetReportGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.CreditRelayGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.creditRelayGet({
  body: { relayToken: "some example string", reportType: ReportType.Asset },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AssetReportGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreditRelayGetRequest](src/models/credit-relay-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.creditRelayGet(request)`

- **OnSuccess**: <code>[AssetReportGetResponse](src/models/asset-report-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.CreditRelayGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.creditRelayGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AssetReportGetResponse, ThePlaidApiClient.CreditRelayGetError&gt;</code>, with `result.value` of type <code>[AssetReportGetResponse](src/models/asset-report-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>creditRelayPdfGet(request: ThePlaidApiClient.CreditRelayPdfGetRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, ThePlaidApiClient.CreditRelayPdfGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

`/credit/relay/pdf/get` allows third parties to receive a PDF report that was shared with them, using a `relay_token` that was created by the report owner.

The `/credit/relay/pdf/get` endpoint retrieves the Asset Report in PDF format. Before calling `/credit/relay/pdf/get`, you must first create the Asset Report using `/credit/relay/create` and then wait for the [`PRODUCT_READY`](https://plaid.com/docs/api/products/assets/#product_ready) webhook to fire, indicating that the Report is ready to be retrieved.

The response to `/credit/relay/pdf/get` is the PDF binary data. The `request_id` is returned in the `Plaid-Request-ID` header.

[View a sample PDF Asset Report](https://plaid.com/documents/sample-asset-report.pdf).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.creditRelayPdfGet({
    body: { relayToken: "some example string", reportType: ReportType.Asset },
  });
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.CreditRelayPdfGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.creditRelayPdfGet({
  body: { relayToken: "some example string", reportType: ReportType.Asset },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreditRelayPdfGetRequest](src/models/credit-relay-pdf-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.creditRelayPdfGet(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ThePlaidApiClient.CreditRelayPdfGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.creditRelayPdfGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ThePlaidApiClient.CreditRelayPdfGetError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>creditRelayRefresh(request: ThePlaidApiClient.CreditRelayRefreshRequestParams, options?: RequestOptions): ApiPromise&lt;CreditRelayRefreshResponse, ThePlaidApiClient.CreditRelayRefreshError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/credit/relay/refresh` endpoint allows third parties to refresh a report that was relayed to them, using a `relay_token` that was created by the report owner. A new report will be created with the original report parameters, but with the most recent data available based on the `days_requested` value of the original report.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.creditRelayRefresh({
    body: { relayToken: "some example string", reportType: ReportType.Asset },
  });
  // TODO: Handle 'response' of type CreditRelayRefreshResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.CreditRelayRefreshError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.creditRelayRefresh({
  body: { relayToken: "some example string", reportType: ReportType.Asset },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreditRelayRefreshResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreditRelayRefreshRequest](src/models/credit-relay-refresh-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.creditRelayRefresh(request)`

- **OnSuccess**: <code>[CreditRelayRefreshResponse](src/models/credit-relay-refresh-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.CreditRelayRefreshError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.creditRelayRefresh(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreditRelayRefreshResponse, ThePlaidApiClient.CreditRelayRefreshError&gt;</code>, with `result.value` of type <code>[CreditRelayRefreshResponse](src/models/credit-relay-refresh-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>creditRelayRemove(request: ThePlaidApiClient.CreditRelayRemoveRequestParams, options?: RequestOptions): ApiPromise&lt;CreditRelayRemoveResponse, ThePlaidApiClient.CreditRelayRemoveError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/credit/relay/remove` endpoint allows you to invalidate a `relay_token`. The third party holding the token will no longer be able to access or refresh the reports which the `relay_token` gives access to. The original report, associated Items, and other relay tokens that provide access to the same report are not affected and will remain accessible after removing the given `relay_token`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.creditRelayRemove({ body: { relayToken: "some example string" } });
  // TODO: Handle 'response' of type CreditRelayRemoveResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.CreditRelayRemoveError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.creditRelayRemove({ body: { relayToken: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreditRelayRemoveResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreditRelayRemoveRequest](src/models/credit-relay-remove-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.creditRelayRemove(request)`

- **OnSuccess**: <code>[CreditRelayRemoveResponse](src/models/credit-relay-remove-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.CreditRelayRemoveError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.creditRelayRemove(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreditRelayRemoveResponse, ThePlaidApiClient.CreditRelayRemoveError&gt;</code>, with `result.value` of type <code>[CreditRelayRemoveResponse](src/models/credit-relay-remove-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>creditReportAuditCopyRemove(request: ThePlaidApiClient.CreditReportAuditCopyRemoveRequest, options?: RequestOptions): ApiPromise&lt;CreditAuditCopyTokenRemoveResponse, ThePlaidApiClient.CreditReportAuditCopyRemoveError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/credit/audit_copy_token/remove` endpoint allows you to remove an Audit Copy. Removing an Audit Copy invalidates the `audit_copy_token` associated with it, meaning both you and any third parties holding the token will no longer be able to use it to access Report data. Items associated with the Report data and other Audit Copies of it are not affected and will remain accessible after removing the given Audit Copy.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.creditReportAuditCopyRemove({
    body: { auditCopyToken: "some example string" },
  });
  // TODO: Handle 'response' of type CreditAuditCopyTokenRemoveResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.CreditReportAuditCopyRemoveError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.creditReportAuditCopyRemove({
  body: { auditCopyToken: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreditAuditCopyTokenRemoveResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreditAuditCopyTokenRemoveRequest](src/models/credit-audit-copy-token-remove-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.creditReportAuditCopyRemove(request)`

- **OnSuccess**: <code>[CreditAuditCopyTokenRemoveResponse](src/models/credit-audit-copy-token-remove-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.CreditReportAuditCopyRemoveError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.creditReportAuditCopyRemove(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreditAuditCopyTokenRemoveResponse, ThePlaidApiClient.CreditReportAuditCopyRemoveError&gt;</code>, with `result.value` of type <code>[CreditAuditCopyTokenRemoveResponse](src/models/credit-audit-copy-token-remove-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>creditSessionsGet(request: ThePlaidApiClient.CreditSessionsGetRequestParams, options?: RequestOptions): ApiPromise&lt;CreditSessionsGetResponse, ThePlaidApiClient.CreditSessionsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint can be used for your end users after they complete the Link flow. This endpoint returns a list of Link sessions that your user completed, where each session includes the results from the Link flow.

These results include details about the Item that was created and some product related metadata (showing, for example, whether the user finished the bank income verification step).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.creditSessionsGet({ body: { userToken: "some example string" } });
  // TODO: Handle 'response' of type CreditSessionsGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.CreditSessionsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.creditSessionsGet({ body: { userToken: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreditSessionsGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreditSessionsGetRequest](src/models/credit-sessions-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.creditSessionsGet(request)`

- **OnSuccess**: <code>[CreditSessionsGetResponse](src/models/credit-sessions-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.CreditSessionsGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.creditSessionsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreditSessionsGetResponse, ThePlaidApiClient.CreditSessionsGetError&gt;</code>, with `result.value` of type <code>[CreditSessionsGetResponse](src/models/credit-sessions-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dashboardUserGet(request: ThePlaidApiClient.DashboardUserGetRequestParams, options?: RequestOptions): ApiPromise&lt;DashboardUserGetResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/dashboard_user/get` endpoint provides details (such as email address) about a specific Dashboard user based on the `dashboard_user_id` field, which is returned in the `audit_trail` object of certain Monitor and Beacon endpoints. This can be used to identify the specific reviewer who performed a Dashboard action.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dashboardUserGet({ body: { dashboardUserId: "some example string" } });
  // TODO: Handle 'response' of type DashboardUserGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dashboardUserGet({
  body: { dashboardUserId: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DashboardUserGetResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DashboardUserGetRequest](src/models/dashboard-user-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dashboardUserGet(request)`

- **OnSuccess**: <code>[DashboardUserGetResponse](src/models/dashboard-user-get-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.dashboardUserGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DashboardUserGetResponse, ApiError&gt;</code>, with `result.value` of type <code>[DashboardUserGetResponse](src/models/dashboard-user-get-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dashboardUserList(request: ThePlaidApiClient.DashboardUserListRequestParams, options?: RequestOptions): ApiPromise&lt;DashboardUserListResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/dashboard_user/list` endpoint provides details (such as email address) about all Dashboard users associated with your account. This can be used to audit or track the list of reviewers for Monitor, Beacon, and Identity Verification products.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dashboardUserList({ body: {} });
  // TODO: Handle 'response' of type DashboardUserListResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dashboardUserList({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DashboardUserListResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DashboardUserListRequest](src/models/dashboard-user-list-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dashboardUserList(request)`

- **OnSuccess**: <code>[DashboardUserListResponse](src/models/dashboard-user-list-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.dashboardUserList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DashboardUserListResponse, ApiError&gt;</code>, with `result.value` of type <code>[DashboardUserListResponse](src/models/dashboard-user-list-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>employersSearch(request: ThePlaidApiClient.EmployersSearchRequestParams, options?: RequestOptions): ApiPromise&lt;EmployersSearchResponse, ThePlaidApiClient.EmployersSearchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

`/employers/search` allows you the ability to search Plaid's database of known employers, for use with Deposit Switch. You can use this endpoint to look up a user's employer in order to confirm that they are supported. Users with non-supported employers can then be routed out of the Deposit Switch flow.

The data in the employer database is currently limited. As the Deposit Switch and Income products progress through their respective beta periods, more employers are being regularly added. Because the employer database is frequently updated, we recommend that you do not cache or store data from this endpoint for more than a day.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.employersSearch({
    body: { query: "some example string", products: ["some example string"] },
  });
  // TODO: Handle 'response' of type EmployersSearchResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.EmployersSearchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.employersSearch({
  body: { query: "some example string", products: ["some example string"] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EmployersSearchResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[EmployersSearchRequest](src/models/employers-search-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.employersSearch(request)`

- **OnSuccess**: <code>[EmployersSearchResponse](src/models/employers-search-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.EmployersSearchError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.employersSearch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EmployersSearchResponse, ThePlaidApiClient.EmployersSearchError&gt;</code>, with `result.value` of type <code>[EmployersSearchResponse](src/models/employers-search-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>employmentVerificationGet(request: ThePlaidApiClient.EmploymentVerificationGetRequestParams, options?: RequestOptions): ApiPromise&lt;EmploymentVerificationGetResponse, ThePlaidApiClient.EmploymentVerificationGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

`/employment/verification/get` returns a list of employments through a user payroll that was verified by an end user.

This endpoint has been deprecated; new integrations should use `/credit/employment/get` instead.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.employmentVerificationGet({ body: { accessToken: "some example string" } });
  // TODO: Handle 'response' of type EmploymentVerificationGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.EmploymentVerificationGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.employmentVerificationGet({
  body: { accessToken: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EmploymentVerificationGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[EmploymentVerificationGetRequest](src/models/employment-verification-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.employmentVerificationGet(request)`

- **OnSuccess**: <code>[EmploymentVerificationGetResponse](src/models/employment-verification-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.EmploymentVerificationGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.employmentVerificationGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EmploymentVerificationGetResponse, ThePlaidApiClient.EmploymentVerificationGetError&gt;</code>, with `result.value` of type <code>[EmploymentVerificationGetResponse](src/models/employment-verification-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>fdxConsentsGet(request: ThePlaidApiClient.FdxConsentsGetRequest, options?: RequestOptions): ApiPromise&lt;FdxConsentGrant, ThePlaidApiClient.FdxConsentsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a consent grant by its identifier

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.fdxConsentsGet({ consentId: "some example string" });
  // TODO: Handle 'response' of type FdxConsentGrant
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.FdxConsentsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.fdxConsentsGet({ consentId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FdxConsentGrant
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>consentId</code> | <code>string</code> | Consent Grant Identifier. Uniquely identifies the consent grant |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.fdxConsentsGet(request)`

- **OnSuccess**: <code>[FdxConsentGrant](src/models/fdx-consent-grant.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.FdxConsentsGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.fdxConsentsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FdxConsentGrant, ThePlaidApiClient.FdxConsentsGetError&gt;</code>, with `result.value` of type <code>[FdxConsentGrant](src/models/fdx-consent-grant.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>fdxConsentsList(request: ThePlaidApiClient.FdxConsentsListRequest, options?: RequestOptions): ApiPromise&lt;GetConsentsResponse, ThePlaidApiClient.FdxConsentsListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns zero or more consent grants associated with the given data provider customer, optionally filtered by status.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.fdxConsentsList({ customerId: "some example string" });
  // TODO: Handle 'response' of type GetConsentsResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.FdxConsentsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.fdxConsentsList({ customerId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetConsentsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customerId</code> | <code>string</code> | Data provider customer identifier whose consent grants to return. |
| <code>status?</code> | <code>[FdxConsentGrantStatus](src/models/fdx-consent-grant-status.ts)</code> | Optional filter restricting results to a single consent grant status. One of `ACTIVE`, `REVOKED`, `EXPIRED`. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.fdxConsentsList(request)`

- **OnSuccess**: <code>[GetConsentsResponse](src/models/get-consents-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.FdxConsentsListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.fdxConsentsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetConsentsResponse, ThePlaidApiClient.FdxConsentsListError&gt;</code>, with `result.value` of type <code>[GetConsentsResponse](src/models/get-consents-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>fdxConsentsRevocationGet(request: ThePlaidApiClient.FdxConsentsRevocationGetRequest, options?: RequestOptions): ApiPromise&lt;FdxConsentRevocations, ThePlaidApiClient.FdxConsentsRevocationGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the revocation history of a consent grant

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.fdxConsentsRevocationGet({ consentId: "some example string" });
  // TODO: Handle 'response' of type FdxConsentRevocations
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.FdxConsentsRevocationGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.fdxConsentsRevocationGet({ consentId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FdxConsentRevocations
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>consentId</code> | <code>string</code> | Consent Grant Identifier. Uniquely identifies the consent grant |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.fdxConsentsRevocationGet(request)`

- **OnSuccess**: <code>[FdxConsentRevocations](src/models/fdx-consent-revocations.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.FdxConsentsRevocationGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.fdxConsentsRevocationGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FdxConsentRevocations, ThePlaidApiClient.FdxConsentsRevocationGetError&gt;</code>, with `result.value` of type <code>[FdxConsentRevocations](src/models/fdx-consent-revocations.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>fdxConsentsRevoke(request: ThePlaidApiClient.FdxConsentsRevokeRequest, options?: RequestOptions): ApiPromise&lt;undefined, ThePlaidApiClient.FdxConsentsRevokeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Appends a REVOKED status record to the named consent grant

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.fdxConsentsRevoke({
    consentId: "some example string",
    body: { initiator: PartyType.DataAccessPlatform, reason: FdxUpdateReason.BusinessRule },
  });
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.FdxConsentsRevokeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.fdxConsentsRevoke({
  consentId: "some example string",
  body: { initiator: PartyType.DataAccessPlatform, reason: FdxUpdateReason.BusinessRule },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>consentId</code> | <code>string</code> | Consent Grant Identifier. Uniquely identifies the consent grant |
| <code>body</code> | <code>[FdxConsentRevocation](src/models/fdx-consent-revocation.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.fdxConsentsRevoke(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ThePlaidApiClient.FdxConsentsRevokeError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.fdxConsentsRevoke(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ThePlaidApiClient.FdxConsentsRevokeError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>fdxNotifications(request: ThePlaidApiClient.FdxNotificationsRequest, options?: RequestOptions): ApiPromise&lt;undefined, ThePlaidApiClient.FdxNotificationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

A generic webhook receiver endpoint for FDX Event Notifications

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.fdxNotifications({
    body: {
      notificationId: "some example string",
      type: NotificationType.AccountTakeover,
      sentOn: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
      category: NotificationCategory.Security,
      notificationPayload: {},
    },
  });
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.FdxNotificationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.fdxNotifications({
  body: {
    notificationId: "some example string",
    type: NotificationType.AccountTakeover,
    sentOn: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
    category: NotificationCategory.Security,
    notificationPayload: {},
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[FdxNotificationEntity](src/models/fdx-notification-entity.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.fdxNotifications(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ThePlaidApiClient.FdxNotificationsError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.fdxNotifications(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ThePlaidApiClient.FdxNotificationsError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getRecipient(request: ThePlaidApiClient.GetRecipientRequest, options?: RequestOptions): ApiPromise&lt;FdxRecipientMetadata, ThePlaidApiClient.GetRecipientError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a specific recipient

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.getRecipient({ recipientId: "some example string" });
  // TODO: Handle 'response' of type FdxRecipientMetadata
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.GetRecipientError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.getRecipient({ recipientId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FdxRecipientMetadata
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>recipientId</code> | <code>string</code> | Recipient Identifier. Uniquely identifies the recipient |
| <code>oauthStateId?</code> | <code>string</code> | The value that is passed into the OAuth URI 'state' query parameter. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.getRecipient(request)`

- **OnSuccess**: <code>[FdxRecipientMetadata](src/models/fdx-recipient-metadata.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.GetRecipientError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.getRecipient(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FdxRecipientMetadata, ThePlaidApiClient.GetRecipientError&gt;</code>, with `result.value` of type <code>[FdxRecipientMetadata](src/models/fdx-recipient-metadata.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getRecipients(options?: RequestOptions): ApiPromise&lt;GetRecipientsResponse, ThePlaidApiClient.GetRecipientsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of Recipients

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.getRecipients();
  // TODO: Handle 'response' of type GetRecipientsResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.GetRecipientsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.getRecipients().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetRecipientsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.getRecipients()`

- **OnSuccess**: <code>[GetRecipientsResponse](src/models/get-recipients-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.GetRecipientsError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.getRecipients().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetRecipientsResponse, ThePlaidApiClient.GetRecipientsError&gt;</code>, with `result.value` of type <code>[GetRecipientsResponse](src/models/get-recipients-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>identityDocumentsUploadsGet(request: ThePlaidApiClient.IdentityDocumentsUploadsGetRequestParams, options?: RequestOptions): ApiPromise&lt;IdentityDocumentsUploadsGetResponse, ThePlaidApiClient.IdentityDocumentsUploadsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use `/identity/documents/uploads/get` to retrieve identity details when using [Identity Document Upload](https://plaid.com/docs/identity/identity-document-upload/).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.identityDocumentsUploadsGet({ body: { accessToken: "some example string" } });
  // TODO: Handle 'response' of type IdentityDocumentsUploadsGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.IdentityDocumentsUploadsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.identityDocumentsUploadsGet({
  body: { accessToken: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IdentityDocumentsUploadsGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[IdentityDocumentsUploadsGetRequest](src/models/identity-documents-uploads-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.identityDocumentsUploadsGet(request)`

- **OnSuccess**: <code>[IdentityDocumentsUploadsGetResponse](src/models/identity-documents-uploads-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.IdentityDocumentsUploadsGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.identityDocumentsUploadsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IdentityDocumentsUploadsGetResponse, ThePlaidApiClient.IdentityDocumentsUploadsGetError&gt;</code>, with `result.value` of type <code>[IdentityDocumentsUploadsGetResponse](src/models/identity-documents-uploads-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>identityGet(request: ThePlaidApiClient.IdentityGetRequestParams, options?: RequestOptions): ApiPromise&lt;IdentityGetResponse, ThePlaidApiClient.IdentityGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/identity/get` endpoint allows you to retrieve various account holder information on file with the financial institution, including names, emails, phone numbers, and addresses. Only name data is guaranteed to be returned; other fields will be empty arrays if not provided by the institution.

Note: In API versions 2018-05-22 and earlier, the `owners` object is not returned, and instead identity information is returned in the top level `identity` object. For more details, see [Plaid API versioning](https://plaid.com/docs/api/versioning/#version-2019-05-29).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.identityGet({ body: { accessToken: "some example string" } });
  // TODO: Handle 'response' of type IdentityGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.IdentityGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.identityGet({ body: { accessToken: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IdentityGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[IdentityGetRequest](src/models/identity-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.identityGet(request)`

- **OnSuccess**: <code>[IdentityGetResponse](src/models/identity-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.IdentityGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.identityGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IdentityGetResponse, ThePlaidApiClient.IdentityGetError&gt;</code>, with `result.value` of type <code>[IdentityGetResponse](src/models/identity-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>identityMatch(request: ThePlaidApiClient.IdentityMatchRequestParams, options?: RequestOptions): ApiPromise&lt;IdentityMatchResponse, ThePlaidApiClient.IdentityMatchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/identity/match` endpoint generates a match score, which indicates how well the provided identity data matches the identity information on file with the account holder's financial institution.

Fields within the `balances` object will always be null when retrieved by `/identity/match`. Instead, use the free `/accounts/get` endpoint to request balance cached data, or `/accounts/balance/get` or `/signal/evaluate` for real-time data.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.identityMatch({ body: { accessToken: "some example string" } });
  // TODO: Handle 'response' of type IdentityMatchResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.IdentityMatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.identityMatch({ body: { accessToken: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IdentityMatchResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[IdentityMatchRequest](src/models/identity-match-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.identityMatch(request)`

- **OnSuccess**: <code>[IdentityMatchResponse](src/models/identity-match-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.IdentityMatchError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.identityMatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IdentityMatchResponse, ThePlaidApiClient.IdentityMatchError&gt;</code>, with `result.value` of type <code>[IdentityMatchResponse](src/models/identity-match-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>identityRefresh(request: ThePlaidApiClient.IdentityRefreshRequestParams, options?: RequestOptions): ApiPromise&lt;IdentityRefreshResponse, ThePlaidApiClient.IdentityRefreshError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

`/identity/refresh` is an optional endpoint for users of the Identity product. It initiates an on-demand extraction to fetch the most up to date Identity information from the Financial Institution. This on-demand extraction takes place in addition to the periodic extractions that automatically occur for any Identity-enabled Item. If changes to Identity are discovered after calling `/identity/refresh`, Plaid will fire a webhook [`DEFAULT_UPDATE`](https://plaid.com/docs/api/products/identity/#default_update).

As this endpoint triggers a synchronous request for fresh data, latency may be higher than for other Plaid endpoints (typically less than 10 seconds, but occasionally up to 30 seconds or more); if you encounter errors, you may find it necessary to adjust your timeout period when making requests.

`/identity/refresh` is offered as an add-on to Identity and has a separate [fee model](https://plaid.com/docs/account/billing/#per-request-flat-fee). To request access to this endpoint, submit a [product access request](https://dashboard.plaid.com/team/products) or contact your Plaid account manager.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.identityRefresh({ body: { accessToken: "some example string" } });
  // TODO: Handle 'response' of type IdentityRefreshResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.IdentityRefreshError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.identityRefresh({ body: { accessToken: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IdentityRefreshResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[IdentityRefreshRequest](src/models/identity-refresh-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.identityRefresh(request)`

- **OnSuccess**: <code>[IdentityRefreshResponse](src/models/identity-refresh-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.IdentityRefreshError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.identityRefresh(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IdentityRefreshResponse, ThePlaidApiClient.IdentityRefreshError&gt;</code>, with `result.value` of type <code>[IdentityRefreshResponse](src/models/identity-refresh-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>identityVerificationAutofillCreate(request: ThePlaidApiClient.IdentityVerificationAutofillCreateRequestParams, options?: RequestOptions): ApiPromise&lt;IdentityVerificationAutofillCreateResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Try to autofill an Identity Verification based on the provided phone number, date of birth and country of residence.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.identityVerificationAutofillCreate({
    body: { identityVerificationId: "flwses_42cF1MNo42r9Xj" },
  });
  // TODO: Handle 'response' of type IdentityVerificationAutofillCreateResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.identityVerificationAutofillCreate({
  body: { identityVerificationId: "flwses_42cF1MNo42r9Xj" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IdentityVerificationAutofillCreateResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[IdentityVerificationAutofillCreateRequest](src/models/identity-verification-autofill-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.identityVerificationAutofillCreate(request)`

- **OnSuccess**: <code>[IdentityVerificationAutofillCreateResponse](src/models/identity-verification-autofill-create-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.identityVerificationAutofillCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IdentityVerificationAutofillCreateResponse, ApiError&gt;</code>, with `result.value` of type <code>[IdentityVerificationAutofillCreateResponse](src/models/identity-verification-autofill-create-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>identityVerificationCreate(request: ThePlaidApiClient.IdentityVerificationCreateRequestParams, options?: RequestOptions): ApiPromise&lt;IdentityVerificationCreateResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new Identity Verification for the user specified by the `client_user_id` and/or `user_id` field. At least one of these two fields must be provided. The requirements and behavior of the verification are determined by the `template_id` provided. If `user_id` is provided, there must be an associated user; otherwise, an error will be returned.


If you don't know whether an active Identity Verification exists for a given `client_user_id` and/or `user_id`, you can specify `"is_idempotent": true` in the request body. With idempotency enabled, a new Identity Verification will only be created if one does not already exist for the associated `client_user_id` and/or `user_id`, and `template_id`. If an Identity Verification is found, it will be returned unmodified with a `200 OK` HTTP status code.


If `user_id` is not provided, you can also use this endpoint to supply information you already have collected about the user; if any of these fields are specified, the screens prompting the user to enter them will be skipped during the Link flow. If `user_id` is provided, user information can not be included in the request body. Please use the `/user/update` endpoint to update user data instead.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.identityVerificationCreate({
    body: { isShareable: true, templateId: "some example string", gaveConsent: true },
  });
  // TODO: Handle 'response' of type IdentityVerificationCreateResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.identityVerificationCreate({
  body: { isShareable: true, templateId: "some example string", gaveConsent: true },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IdentityVerificationCreateResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[IdentityVerificationCreateRequest](src/models/identity-verification-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.identityVerificationCreate(request)`

- **OnSuccess**: <code>[IdentityVerificationCreateResponse](src/models/identity-verification-create-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.identityVerificationCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IdentityVerificationCreateResponse, ApiError&gt;</code>, with `result.value` of type <code>[IdentityVerificationCreateResponse](src/models/identity-verification-create-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>identityVerificationGet(request: ThePlaidApiClient.IdentityVerificationGetRequestParams, options?: RequestOptions): ApiPromise&lt;IdentityVerificationGetResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a previously created Identity Verification.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.identityVerificationGet({
    body: { identityVerificationId: "some example string" },
  });
  // TODO: Handle 'response' of type IdentityVerificationGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.identityVerificationGet({
  body: { identityVerificationId: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IdentityVerificationGetResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[IdentityVerificationGetRequest](src/models/identity-verification-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.identityVerificationGet(request)`

- **OnSuccess**: <code>[IdentityVerificationGetResponse](src/models/identity-verification-get-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.identityVerificationGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IdentityVerificationGetResponse, ApiError&gt;</code>, with `result.value` of type <code>[IdentityVerificationGetResponse](src/models/identity-verification-get-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>identityVerificationList(request: ThePlaidApiClient.IdentityVerificationListRequestParams, options?: RequestOptions): ApiPromise&lt;IdentityVerificationListResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Filter and list Identity Verifications created by your account

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.identityVerificationList({ body: { templateId: "some example string" } });
  // TODO: Handle 'response' of type IdentityVerificationListResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.identityVerificationList({
  body: { templateId: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IdentityVerificationListResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[IdentityVerificationListRequest](src/models/identity-verification-list-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.identityVerificationList(request)`

- **OnSuccess**: <code>[IdentityVerificationListResponse](src/models/identity-verification-list-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.identityVerificationList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IdentityVerificationListResponse, ApiError&gt;</code>, with `result.value` of type <code>[IdentityVerificationListResponse](src/models/identity-verification-list-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>identityVerificationRetry(request: ThePlaidApiClient.IdentityVerificationRetryRequestParams, options?: RequestOptions): ApiPromise&lt;IdentityVerificationRetryResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Allow a customer to retry their Identity Verification

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.identityVerificationRetry({
    body: {
      clientUserId: "some example string",
      templateId: "some example string",
      strategy: Strategy.Reset,
    },
  });
  // TODO: Handle 'response' of type IdentityVerificationRetryResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.identityVerificationRetry({
  body: { clientUserId: "some example string", templateId: "some example string", strategy: Strategy.Reset },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IdentityVerificationRetryResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[IdentityVerificationRetryRequest](src/models/identity-verification-retry-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.identityVerificationRetry(request)`

- **OnSuccess**: <code>[IdentityVerificationRetryResponse](src/models/identity-verification-retry-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.identityVerificationRetry(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IdentityVerificationRetryResponse, ApiError&gt;</code>, with `result.value` of type <code>[IdentityVerificationRetryResponse](src/models/identity-verification-retry-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>incomeVerificationCreate(request: ThePlaidApiClient.IncomeVerificationCreateRequestParams, options?: RequestOptions): ApiPromise&lt;IncomeVerificationCreateResponse, ThePlaidApiClient.IncomeVerificationCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

`/income/verification/create` begins the income verification process by returning an `income_verification_id`. You can then provide the `income_verification_id` to `/link/token/create` under the `income_verification` parameter in order to create a Link instance that will prompt the user to go through the income verification flow. Plaid will fire an `INCOME` webhook once the user completes the Payroll Income flow, or when the uploaded documents in the Document Income flow have finished processing. 

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.incomeVerificationCreate({ body: { webhook: "some example string" } });
  // TODO: Handle 'response' of type IncomeVerificationCreateResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.IncomeVerificationCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.incomeVerificationCreate({
  body: { webhook: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IncomeVerificationCreateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[IncomeVerificationCreateRequest](src/models/income-verification-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.incomeVerificationCreate(request)`

- **OnSuccess**: <code>[IncomeVerificationCreateResponse](src/models/income-verification-create-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.IncomeVerificationCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.incomeVerificationCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IncomeVerificationCreateResponse, ThePlaidApiClient.IncomeVerificationCreateError&gt;</code>, with `result.value` of type <code>[IncomeVerificationCreateResponse](src/models/income-verification-create-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>incomeVerificationDocumentsDownload(request: ThePlaidApiClient.IncomeVerificationDocumentsDownloadRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, ThePlaidApiClient.IncomeVerificationDocumentsDownloadError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

`/income/verification/documents/download` provides the ability to download the source documents associated with the verification.

If Document Income was used, the documents will be those the user provided in Link. For Payroll Income, the most recent files available for download from the payroll provider will be available from this endpoint.

The response to `/income/verification/documents/download` is a ZIP file in binary data. If a `document_id` is passed, a single document will be contained in this file.
If not, the response will contain all documents associated with the verification.

The `request_id` is returned in the `Plaid-Request-ID` header.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.incomeVerificationDocumentsDownload({ body: {} });
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.IncomeVerificationDocumentsDownloadError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.incomeVerificationDocumentsDownload({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[IncomeVerificationDocumentsDownloadRequest](src/models/income-verification-documents-download-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.incomeVerificationDocumentsDownload(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ThePlaidApiClient.IncomeVerificationDocumentsDownloadError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.incomeVerificationDocumentsDownload(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ThePlaidApiClient.IncomeVerificationDocumentsDownloadError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>incomeVerificationPaystubsGet(request: ThePlaidApiClient.IncomeVerificationPaystubsGetRequestParams, options?: RequestOptions): ApiPromise&lt;IncomeVerificationPaystubsGetResponse, ThePlaidApiClient.IncomeVerificationPaystubsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

`/income/verification/paystubs/get` returns the information collected from the paystubs that were used to verify an end user's income. It can be called once the status of the verification has been set to `VERIFICATION_STATUS_PROCESSING_COMPLETE`, as reported by the `INCOME: verification_status` webhook. Attempting to call the endpoint before verification has been completed will result in an error.

This endpoint has been deprecated; new integrations should use `/credit/payroll_income/get` instead.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.incomeVerificationPaystubsGet({ body: {} });
  // TODO: Handle 'response' of type IncomeVerificationPaystubsGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.IncomeVerificationPaystubsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.incomeVerificationPaystubsGet({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IncomeVerificationPaystubsGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[IncomeVerificationPaystubsGetRequest](src/models/income-verification-paystubs-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.incomeVerificationPaystubsGet(request)`

- **OnSuccess**: <code>[IncomeVerificationPaystubsGetResponse](src/models/income-verification-paystubs-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.IncomeVerificationPaystubsGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.incomeVerificationPaystubsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IncomeVerificationPaystubsGetResponse, ThePlaidApiClient.IncomeVerificationPaystubsGetError&gt;</code>, with `result.value` of type <code>[IncomeVerificationPaystubsGetResponse](src/models/income-verification-paystubs-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>incomeVerificationPrecheck(request: ThePlaidApiClient.IncomeVerificationPrecheckRequestParams, options?: RequestOptions): ApiPromise&lt;IncomeVerificationPrecheckResponse, ThePlaidApiClient.IncomeVerificationPrecheckError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

`/income/verification/precheck` is an optional endpoint that can be called before initializing a Link session for income verification. It evaluates whether a given user is supportable by digital income verification and returns a `precheck_id` that can be provided to `/link/token/create`. If the user is eligible for digital verification, providing the `precheck_id` in this way will generate a Link UI optimized for the end user and their specific employer. If the user cannot be confirmed as eligible, the `precheck_id` can still be provided to `/link/token/create` and the user can still use the income verification flow, but they may be required to manually upload a paystub to verify their income.

While all request fields are optional, providing either `employer` or `transactions_access_tokens` data will increase the chance of receiving a useful result.

This endpoint has been deprecated; new integrations should use `/credit/payroll_income/precheck` instead.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.incomeVerificationPrecheck({ body: {} });
  // TODO: Handle 'response' of type IncomeVerificationPrecheckResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.IncomeVerificationPrecheckError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.incomeVerificationPrecheck({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IncomeVerificationPrecheckResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[IncomeVerificationPrecheckRequest](src/models/income-verification-precheck-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.incomeVerificationPrecheck(request)`

- **OnSuccess**: <code>[IncomeVerificationPrecheckResponse](src/models/income-verification-precheck-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.IncomeVerificationPrecheckError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.incomeVerificationPrecheck(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IncomeVerificationPrecheckResponse, ThePlaidApiClient.IncomeVerificationPrecheckError&gt;</code>, with `result.value` of type <code>[IncomeVerificationPrecheckResponse](src/models/income-verification-precheck-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>incomeVerificationTaxformsGet(request: ThePlaidApiClient.IncomeVerificationTaxformsGetRequestParams, options?: RequestOptions): ApiPromise&lt;IncomeVerificationTaxformsGetResponse, ThePlaidApiClient.IncomeVerificationTaxformsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

`/income/verification/taxforms/get` returns the information collected from forms that were used to verify an end user''s income. It can be called once the status of the verification has been set to `VERIFICATION_STATUS_PROCESSING_COMPLETE`, as reported by the `INCOME: verification_status` webhook. Attempting to call the endpoint before verification has been completed will result in an error.

This endpoint has been deprecated; new integrations should use `/credit/payroll_income/get` instead.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.incomeVerificationTaxformsGet({ body: {} });
  // TODO: Handle 'response' of type IncomeVerificationTaxformsGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.IncomeVerificationTaxformsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.incomeVerificationTaxformsGet({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IncomeVerificationTaxformsGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[IncomeVerificationTaxformsGetRequest](src/models/income-verification-taxforms-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.incomeVerificationTaxformsGet(request)`

- **OnSuccess**: <code>[IncomeVerificationTaxformsGetResponse](src/models/income-verification-taxforms-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.IncomeVerificationTaxformsGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.incomeVerificationTaxformsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IncomeVerificationTaxformsGetResponse, ThePlaidApiClient.IncomeVerificationTaxformsGetError&gt;</code>, with `result.value` of type <code>[IncomeVerificationTaxformsGetResponse](src/models/income-verification-taxforms-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>institutionsGet(request: ThePlaidApiClient.InstitutionsGetRequestParams, options?: RequestOptions): ApiPromise&lt;InstitutionsGetResponse, ThePlaidApiClient.InstitutionsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a JSON response containing details on all financial institutions currently supported by Plaid. Because Plaid supports thousands of institutions, results are paginated.

If there is no overlap between an institution's enabled products and a client's enabled products, then the institution will be filtered out from the response. As a result, the number of institutions returned may not match the count specified in the call.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.institutionsGet({
    body: { count: 1, offset: 1, countryCodes: [CountryCode.Us] },
  });
  // TODO: Handle 'response' of type InstitutionsGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.InstitutionsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.institutionsGet({
  body: { count: 1, offset: 1, countryCodes: [CountryCode.Us] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InstitutionsGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[InstitutionsGetRequest](src/models/institutions-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.institutionsGet(request)`

- **OnSuccess**: <code>[InstitutionsGetResponse](src/models/institutions-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.InstitutionsGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.institutionsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InstitutionsGetResponse, ThePlaidApiClient.InstitutionsGetError&gt;</code>, with `result.value` of type <code>[InstitutionsGetResponse](src/models/institutions-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>institutionsGetById(request: ThePlaidApiClient.InstitutionsGetByIdRequestParams, options?: RequestOptions): ApiPromise&lt;InstitutionsGetByIdResponse, ThePlaidApiClient.InstitutionsGetByIdError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a JSON response containing details on a specified financial institution currently supported by Plaid.

Versioning note: API versions 2019-05-29 and earlier allow use of the `public_key` parameter instead of the `client_id` and `secret` to authenticate to this endpoint. The `public_key` has been deprecated; all customers are encouraged to use `client_id` and `secret` instead.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.institutionsGetById({
    body: { institutionId: "some example string", countryCodes: [CountryCode.Us] },
  });
  // TODO: Handle 'response' of type InstitutionsGetByIdResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.InstitutionsGetByIdError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.institutionsGetById({
  body: { institutionId: "some example string", countryCodes: [CountryCode.Us] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InstitutionsGetByIdResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[InstitutionsGetByIdRequest](src/models/institutions-get-by-id-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.institutionsGetById(request)`

- **OnSuccess**: <code>[InstitutionsGetByIdResponse](src/models/institutions-get-by-id-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.InstitutionsGetByIdError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.institutionsGetById(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InstitutionsGetByIdResponse, ThePlaidApiClient.InstitutionsGetByIdError&gt;</code>, with `result.value` of type <code>[InstitutionsGetByIdResponse](src/models/institutions-get-by-id-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>institutionsSearch(request: ThePlaidApiClient.InstitutionsSearchRequestParams, options?: RequestOptions): ApiPromise&lt;InstitutionsSearchResponse, ThePlaidApiClient.InstitutionsSearchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a JSON response containing details for institutions that match the query parameters, up to a maximum of ten institutions per query.

Versioning note: API versions 2019-05-29 and earlier allow use of the `public_key` parameter instead of the `client_id` and `secret` parameters to authenticate to this endpoint. The `public_key` parameter has since been deprecated; all customers are encouraged to use `client_id` and `secret` instead.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.institutionsSearch({
    body: { query: "some example string", countryCodes: [CountryCode.Us] },
  });
  // TODO: Handle 'response' of type InstitutionsSearchResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.InstitutionsSearchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.institutionsSearch({
  body: { query: "some example string", countryCodes: [CountryCode.Us] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InstitutionsSearchResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[InstitutionsSearchRequest](src/models/institutions-search-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.institutionsSearch(request)`

- **OnSuccess**: <code>[InstitutionsSearchResponse](src/models/institutions-search-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.InstitutionsSearchError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.institutionsSearch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InstitutionsSearchResponse, ThePlaidApiClient.InstitutionsSearchError&gt;</code>, with `result.value` of type <code>[InstitutionsSearchResponse](src/models/institutions-search-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>investmentsAuthGet(request: ThePlaidApiClient.InvestmentsAuthGetRequestParams, options?: RequestOptions): ApiPromise&lt;InvestmentsAuthGetResponse, ThePlaidApiClient.InvestmentsAuthGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/investments/auth/get` endpoint allows developers to receive user-authorized data to facilitate the transfer of holdings

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.investmentsAuthGet({ body: { accessToken: "some example string" } });
  // TODO: Handle 'response' of type InvestmentsAuthGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.InvestmentsAuthGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.investmentsAuthGet({
  body: { accessToken: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InvestmentsAuthGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[InvestmentsAuthGetRequest](src/models/investments-auth-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.investmentsAuthGet(request)`

- **OnSuccess**: <code>[InvestmentsAuthGetResponse](src/models/investments-auth-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.InvestmentsAuthGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.investmentsAuthGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InvestmentsAuthGetResponse, ThePlaidApiClient.InvestmentsAuthGetError&gt;</code>, with `result.value` of type <code>[InvestmentsAuthGetResponse](src/models/investments-auth-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>investmentsHoldingsGet(request: ThePlaidApiClient.InvestmentsHoldingsGetRequestParams, options?: RequestOptions): ApiPromise&lt;InvestmentsHoldingsGetResponse, ThePlaidApiClient.InvestmentsHoldingsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/investments/holdings/get` endpoint allows developers to receive user-authorized stock position data for `investment`-type accounts.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.investmentsHoldingsGet({ body: { accessToken: "some example string" } });
  // TODO: Handle 'response' of type InvestmentsHoldingsGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.InvestmentsHoldingsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.investmentsHoldingsGet({
  body: { accessToken: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InvestmentsHoldingsGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[InvestmentsHoldingsGetRequest](src/models/investments-holdings-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.investmentsHoldingsGet(request)`

- **OnSuccess**: <code>[InvestmentsHoldingsGetResponse](src/models/investments-holdings-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.InvestmentsHoldingsGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.investmentsHoldingsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InvestmentsHoldingsGetResponse, ThePlaidApiClient.InvestmentsHoldingsGetError&gt;</code>, with `result.value` of type <code>[InvestmentsHoldingsGetResponse](src/models/investments-holdings-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>investmentsRefresh(request: ThePlaidApiClient.InvestmentsRefreshRequestParams, options?: RequestOptions): ApiPromise&lt;InvestmentsRefreshResponse, ThePlaidApiClient.InvestmentsRefreshError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

`/investments/refresh` is an optional endpoint for users of the Investments product. It initiates an on-demand extraction to fetch the newest investment holdings and transactions for an Item. This on-demand extraction takes place in addition to the periodic extractions that automatically occur one or more times per day for any Investments-enabled Item. If changes to investments are discovered after calling `/investments/refresh`, Plaid will fire webhooks: [`HOLDINGS: DEFAULT_UPDATE`](https://plaid.com/docs/api/products/investments/#holdings-default_update) if any new holdings are detected, and [`INVESTMENTS_TRANSACTIONS: DEFAULT_UPDATE`](https://plaid.com/docs/api/products/investments/#investments_transactions-default_update) if any new investment transactions are detected. This webhook will typically not fire in the Sandbox environment, due to the lack of dynamic investment transactions and holdings data. To test this webhook in Sandbox, call `/sandbox/item/fire_webhook`. Updated holdings and investment transactions can be fetched by calling `/investments/holdings/get` and `/investments/transactions/get`. Note that the `/investments/refresh` endpoint is not supported by all institutions. If called on an Item from an institution that does not support this functionality, it will return a `PRODUCT_NOT_SUPPORTED` error.

As this endpoint triggers a synchronous request for fresh data, latency may be higher than for other Plaid endpoints (typically less than 10 seconds, but occasionally up to 30 seconds or more); if you encounter errors, you may find it necessary to adjust your timeout period when making requests.

`/investments/refresh` is offered as an add-on to Investments and has a separate [fee model](https://plaid.com/docs/account/billing/#per-request-flat-fee). To request access to this endpoint, submit a [product access request](https://dashboard.plaid.com/team/products) or contact your Plaid account manager.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.investmentsRefresh({ body: { accessToken: "some example string" } });
  // TODO: Handle 'response' of type InvestmentsRefreshResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.InvestmentsRefreshError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.investmentsRefresh({
  body: { accessToken: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InvestmentsRefreshResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[InvestmentsRefreshRequest](src/models/investments-refresh-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.investmentsRefresh(request)`

- **OnSuccess**: <code>[InvestmentsRefreshResponse](src/models/investments-refresh-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.InvestmentsRefreshError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.investmentsRefresh(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InvestmentsRefreshResponse, ThePlaidApiClient.InvestmentsRefreshError&gt;</code>, with `result.value` of type <code>[InvestmentsRefreshResponse](src/models/investments-refresh-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>investmentsTransactionsGet(request: ThePlaidApiClient.InvestmentsTransactionsGetRequestParams, options?: RequestOptions): ApiPromise&lt;InvestmentsTransactionsGetResponse, ThePlaidApiClient.InvestmentsTransactionsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/investments/transactions/get` endpoint allows developers to retrieve up to 24 months of user-authorized transaction data for investment accounts.

Transactions are returned in reverse-chronological order, and the sequence of transaction ordering is stable and will not shift.

Due to the potentially large number of investment transactions associated with an Item, results are paginated. Manipulate the count and offset parameters in conjunction with the `total_investment_transactions` response body field to fetch all available investment transactions.

Note that Investments does not have a webhook to indicate when initial transaction data has loaded (unless you use the `async_update` option). Instead, if transactions data is not ready when `/investments/transactions/get` is first called, Plaid will wait for the data. For this reason, calling `/investments/transactions/get` immediately after Link may take up to one to two minutes to return.

Data returned by the asynchronous investments extraction flow (when `async_update` is set to true) may not be immediately available to `/investments/transactions/get`. To be alerted when the data is ready to be fetched, listen for the `HISTORICAL_UPDATE` webhook. If no investments history is ready when `/investments/transactions/get` is called, it will return a `PRODUCT_NOT_READY` error.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.investmentsTransactionsGet({
    body: { accessToken: "some example string", startDate: "2024-01-15", endDate: "2024-01-15" },
  });
  // TODO: Handle 'response' of type InvestmentsTransactionsGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.InvestmentsTransactionsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.investmentsTransactionsGet({
  body: { accessToken: "some example string", startDate: "2024-01-15", endDate: "2024-01-15" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type InvestmentsTransactionsGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[InvestmentsTransactionsGetRequest](src/models/investments-transactions-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.investmentsTransactionsGet(request)`

- **OnSuccess**: <code>[InvestmentsTransactionsGetResponse](src/models/investments-transactions-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.InvestmentsTransactionsGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.investmentsTransactionsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;InvestmentsTransactionsGetResponse, ThePlaidApiClient.InvestmentsTransactionsGetError&gt;</code>, with `result.value` of type <code>[InvestmentsTransactionsGetResponse](src/models/investments-transactions-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>issuesGet(request: ThePlaidApiClient.IssuesGetRequestParams, options?: RequestOptions): ApiPromise&lt;IssuesGetResponse, ThePlaidApiClient.IssuesGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve detailed information about a specific `Issue`. This endpoint returns a single `Issue` object.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.issuesGet({ body: { issueId: "some example string" } });
  // TODO: Handle 'response' of type IssuesGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.IssuesGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.issuesGet({ body: { issueId: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IssuesGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[IssuesGetRequest](src/models/issues-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.issuesGet(request)`

- **OnSuccess**: <code>[IssuesGetResponse](src/models/issues-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.IssuesGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.issuesGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IssuesGetResponse, ThePlaidApiClient.IssuesGetError&gt;</code>, with `result.value` of type <code>[IssuesGetResponse](src/models/issues-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>issuesSearch(request: ThePlaidApiClient.IssuesSearchRequestParams, options?: RequestOptions): ApiPromise&lt;IssuesSearchResponse, ThePlaidApiClient.IssuesSearchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search for an issue associated with one of the following identifiers:  `item_id`, `link_session_id` or Link session `request_id`. This endpoint returns a list of `Issue` objects, with an empty list indicating that no issues are associated with the provided identifier. At least one of the identifiers must be provided to perform the search.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.issuesSearch({ body: {} });
  // TODO: Handle 'response' of type IssuesSearchResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.IssuesSearchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.issuesSearch({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IssuesSearchResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[IssuesSearchRequest](src/models/issues-search-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.issuesSearch(request)`

- **OnSuccess**: <code>[IssuesSearchResponse](src/models/issues-search-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.IssuesSearchError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.issuesSearch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IssuesSearchResponse, ThePlaidApiClient.IssuesSearchError&gt;</code>, with `result.value` of type <code>[IssuesSearchResponse](src/models/issues-search-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>issuesSubscribe(request: ThePlaidApiClient.IssuesSubscribeRequestParams, options?: RequestOptions): ApiPromise&lt;IssuesSubscribeResponse, ThePlaidApiClient.IssuesSubscribeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Allows a user to subscribe to updates on a specific `Issue` using a POST method. Subscribers will receive webhook notifications when the issue status changes, particularly when resolved.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.issuesSubscribe({
    body: { issueId: "some example string", webhook: "some example string" },
  });
  // TODO: Handle 'response' of type IssuesSubscribeResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.IssuesSubscribeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.issuesSubscribe({
  body: { issueId: "some example string", webhook: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IssuesSubscribeResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[IssuesSubscribeRequest](src/models/issues-subscribe-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.issuesSubscribe(request)`

- **OnSuccess**: <code>[IssuesSubscribeResponse](src/models/issues-subscribe-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.IssuesSubscribeError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.issuesSubscribe(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IssuesSubscribeResponse, ThePlaidApiClient.IssuesSubscribeError&gt;</code>, with `result.value` of type <code>[IssuesSubscribeResponse](src/models/issues-subscribe-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>itemAccessTokenInvalidate(request: ThePlaidApiClient.ItemAccessTokenInvalidateRequestParams, options?: RequestOptions): ApiPromise&lt;ItemAccessTokenInvalidateResponse, ThePlaidApiClient.ItemAccessTokenInvalidateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

By default, the `access_token` associated with an Item does not expire and should be stored in a persistent, secure manner.

You can use the `/item/access_token/invalidate` endpoint to rotate the `access_token` associated with an Item. The endpoint returns a new `access_token` and immediately invalidates the previous `access_token`.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.itemAccessTokenInvalidate({ body: { accessToken: "some example string" } });
  // TODO: Handle 'response' of type ItemAccessTokenInvalidateResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.ItemAccessTokenInvalidateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.itemAccessTokenInvalidate({
  body: { accessToken: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ItemAccessTokenInvalidateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ItemAccessTokenInvalidateRequest](src/models/item-access-token-invalidate-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.itemAccessTokenInvalidate(request)`

- **OnSuccess**: <code>[ItemAccessTokenInvalidateResponse](src/models/item-access-token-invalidate-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.ItemAccessTokenInvalidateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.itemAccessTokenInvalidate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ItemAccessTokenInvalidateResponse, ThePlaidApiClient.ItemAccessTokenInvalidateError&gt;</code>, with `result.value` of type <code>[ItemAccessTokenInvalidateResponse](src/models/item-access-token-invalidate-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>itemActivityList(request: ThePlaidApiClient.ItemActivityListRequestParams, options?: RequestOptions): ApiPromise&lt;ItemActivityListResponse, ThePlaidApiClient.ItemActivityListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List a historical log of user consent events

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.itemActivityList({ body: {} });
  // TODO: Handle 'response' of type ItemActivityListResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.ItemActivityListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.itemActivityList({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ItemActivityListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ItemActivityListRequest](src/models/item-activity-list-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.itemActivityList(request)`

- **OnSuccess**: <code>[ItemActivityListResponse](src/models/item-activity-list-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.ItemActivityListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.itemActivityList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ItemActivityListResponse, ThePlaidApiClient.ItemActivityListError&gt;</code>, with `result.value` of type <code>[ItemActivityListResponse](src/models/item-activity-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>itemApplicationList(request: ThePlaidApiClient.ItemApplicationListRequestParams, options?: RequestOptions): ApiPromise&lt;ItemApplicationListResponse, ThePlaidApiClient.ItemApplicationListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List a user's connected applications

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.itemApplicationList({ body: {} });
  // TODO: Handle 'response' of type ItemApplicationListResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.ItemApplicationListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.itemApplicationList({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ItemApplicationListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ItemApplicationListRequest](src/models/item-application-list-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.itemApplicationList(request)`

- **OnSuccess**: <code>[ItemApplicationListResponse](src/models/item-application-list-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.ItemApplicationListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.itemApplicationList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ItemApplicationListResponse, ThePlaidApiClient.ItemApplicationListError&gt;</code>, with `result.value` of type <code>[ItemApplicationListResponse](src/models/item-application-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>itemApplicationScopesUpdate(request: ThePlaidApiClient.ItemApplicationScopesUpdateRequestParams, options?: RequestOptions): ApiPromise&lt;ItemApplicationScopesUpdateResponse, ThePlaidApiClient.ItemApplicationScopesUpdateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enable consumers to update product access on selected accounts for an application.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.itemApplicationScopesUpdate({
    body: {
      accessToken: "some example string",
      applicationId: "some example string",
      scopes: {},
      context: ScopesContext.Enrollment,
    },
  });
  // TODO: Handle 'response' of type ItemApplicationScopesUpdateResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.ItemApplicationScopesUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.itemApplicationScopesUpdate({
  body: {
    accessToken: "some example string",
    applicationId: "some example string",
    scopes: {},
    context: ScopesContext.Enrollment,
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ItemApplicationScopesUpdateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ItemApplicationScopesUpdateRequest](src/models/item-application-scopes-update-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.itemApplicationScopesUpdate(request)`

- **OnSuccess**: <code>[ItemApplicationScopesUpdateResponse](src/models/item-application-scopes-update-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.ItemApplicationScopesUpdateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.itemApplicationScopesUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ItemApplicationScopesUpdateResponse, ThePlaidApiClient.ItemApplicationScopesUpdateError&gt;</code>, with `result.value` of type <code>[ItemApplicationScopesUpdateResponse](src/models/item-application-scopes-update-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>itemApplicationUnlink(request: ThePlaidApiClient.ItemApplicationUnlinkRequestParams, options?: RequestOptions): ApiPromise&lt;ItemApplicationUnlinkResponse, ThePlaidApiClient.ItemApplicationUnlinkError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Unlink a user's connected application. On an unlink request, Plaid will immediately revoke the Application's access to the User's data.  The User will have to redo the OAuth authentication process in order to restore functionality.

This endpoint only removes ongoing data access permissions, therefore the User will need to reach out to the Application itself in order to disable and delete their account and delete any data that the Application already received (if the Application does not do so by default).

This endpoint should be called in real time as the User is unlinking an Application, and should not be batched in order to ensure that the change is reflected as soon as possible.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.itemApplicationUnlink({
    body: { accessToken: "some example string", applicationId: "some example string" },
  });
  // TODO: Handle 'response' of type ItemApplicationUnlinkResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.ItemApplicationUnlinkError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.itemApplicationUnlink({
  body: { accessToken: "some example string", applicationId: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ItemApplicationUnlinkResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ItemApplicationUnlinkRequest](src/models/item-application-unlink-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.itemApplicationUnlink(request)`

- **OnSuccess**: <code>[ItemApplicationUnlinkResponse](src/models/item-application-unlink-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.ItemApplicationUnlinkError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.itemApplicationUnlink(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ItemApplicationUnlinkResponse, ThePlaidApiClient.ItemApplicationUnlinkError&gt;</code>, with `result.value` of type <code>[ItemApplicationUnlinkResponse](src/models/item-application-unlink-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>itemCreatePublicToken(request: ThePlaidApiClient.ItemCreatePublicTokenRequest, options?: RequestOptions): ApiPromise&lt;ItemPublicTokenCreateResponse, ThePlaidApiClient.ItemCreatePublicTokenError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Note: As of July 2020, the `/item/public_token/create` endpoint is deprecated. Instead, use `/link/token/create` with an `access_token` to create a Link token for use with [update mode](https://plaid.com/docs/link/update-mode).

If you need your user to take action to restore or resolve an error associated with an Item, generate a public token with the `/item/public_token/create` endpoint and then initialize Link with that `public_token`.

A `public_token` is one-time use and expires after 30 minutes. You use a `public_token` to initialize Link in [update mode](https://plaid.com/docs/link/update-mode) for a particular Item. You can generate a `public_token` for an Item even if you did not use Link to create the Item originally.

The `/item/public_token/create` endpoint is **not** used to create your initial `public_token`. If you have not already received an `access_token` for a specific Item, use Link to obtain your `public_token` instead. See the [Quickstart](https://plaid.com/docs/quickstart) for more information.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.itemCreatePublicToken({ body: { accessToken: "some example string" } });
  // TODO: Handle 'response' of type ItemPublicTokenCreateResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.ItemCreatePublicTokenError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.itemCreatePublicToken({
  body: { accessToken: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ItemPublicTokenCreateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ItemPublicTokenCreateRequest](src/models/item-public-token-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.itemCreatePublicToken(request)`

- **OnSuccess**: <code>[ItemPublicTokenCreateResponse](src/models/item-public-token-create-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.ItemCreatePublicTokenError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.itemCreatePublicToken(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ItemPublicTokenCreateResponse, ThePlaidApiClient.ItemCreatePublicTokenError&gt;</code>, with `result.value` of type <code>[ItemPublicTokenCreateResponse](src/models/item-public-token-create-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>itemGet(request: ThePlaidApiClient.ItemGetRequestParams, options?: RequestOptions): ApiPromise&lt;ItemGetResponse, ThePlaidApiClient.ItemGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about the status of an Item.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.itemGet({ body: { accessToken: "some example string" } });
  // TODO: Handle 'response' of type ItemGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.ItemGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.itemGet({ body: { accessToken: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ItemGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ItemGetRequest](src/models/item-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.itemGet(request)`

- **OnSuccess**: <code>[ItemGetResponse](src/models/item-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.ItemGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.itemGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ItemGetResponse, ThePlaidApiClient.ItemGetError&gt;</code>, with `result.value` of type <code>[ItemGetResponse](src/models/item-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>itemImport(request: ThePlaidApiClient.ItemImportRequestParams, options?: RequestOptions): ApiPromise&lt;ItemImportResponse, ThePlaidApiClient.ItemImportError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

`/item/import` creates an Item via your Plaid Exchange Integration and returns an `access_token`. As part of an `/item/import` request, you will include a User ID (`user_auth.user_id`) and Authentication Token (`user_auth.auth_token`) that enable data aggregation through your Plaid Exchange API endpoints. These authentication principals are to be chosen by you.

Upon creating an Item via `/item/import`, Plaid will automatically begin an extraction of that Item through the Plaid Exchange infrastructure you have already integrated.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.itemImport({
    body: {
      products: [Products.Assets],
      userAuth: { userId: "some example string", authToken: "some example string" },
    },
  });
  // TODO: Handle 'response' of type ItemImportResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.ItemImportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.itemImport({
  body: {
    products: [Products.Assets],
    userAuth: { userId: "some example string", authToken: "some example string" },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ItemImportResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ItemImportRequest](src/models/item-import-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.itemImport(request)`

- **OnSuccess**: <code>[ItemImportResponse](src/models/item-import-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.ItemImportError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.itemImport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ItemImportResponse, ThePlaidApiClient.ItemImportError&gt;</code>, with `result.value` of type <code>[ItemImportResponse](src/models/item-import-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>itemProductsTerminate(request: ThePlaidApiClient.ItemProductsTerminateRequestParams, options?: RequestOptions): ApiPromise&lt;ItemProductsTerminateResponse, ThePlaidApiClient.ItemProductsTerminateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/item/products/terminate` endpoint allows you to terminate an Item. Once terminated, the `access_token` associated with the Item is no longer valid, billing for the Item's products is ended, and relevant webhooks are fired.

`/item/products/terminate` is the recommended way to offboard users or disconnect accounts linked via Plaid.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.itemProductsTerminate({
    body: { accessToken: "some example string", reasonCode: ProductsTerminateReasonCode.FraudFirstParty },
  });
  // TODO: Handle 'response' of type ItemProductsTerminateResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.ItemProductsTerminateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.itemProductsTerminate({
  body: { accessToken: "some example string", reasonCode: ProductsTerminateReasonCode.FraudFirstParty },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ItemProductsTerminateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ItemProductsTerminateRequest](src/models/item-products-terminate-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.itemProductsTerminate(request)`

- **OnSuccess**: <code>[ItemProductsTerminateResponse](src/models/item-products-terminate-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.ItemProductsTerminateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.itemProductsTerminate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ItemProductsTerminateResponse, ThePlaidApiClient.ItemProductsTerminateError&gt;</code>, with `result.value` of type <code>[ItemProductsTerminateResponse](src/models/item-products-terminate-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>itemPublicTokenExchange(request: ThePlaidApiClient.ItemPublicTokenExchangeRequestParams, options?: RequestOptions): ApiPromise&lt;ItemPublicTokenExchangeResponse, ThePlaidApiClient.ItemPublicTokenExchangeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Exchange a Link `public_token` for an API `access_token`. Link hands off the `public_token` client-side via the `onSuccess` callback once a user has successfully created an Item. The `public_token` is ephemeral and expires after 30 minutes. An `access_token` does not expire, but can be revoked by calling `/item/remove`.

The response also includes an `item_id` that should be stored with the `access_token`. The `item_id` is used to identify an Item in a webhook. The `item_id` can also be retrieved by making an `/item/get` request.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.itemPublicTokenExchange({ body: { publicToken: "some example string" } });
  // TODO: Handle 'response' of type ItemPublicTokenExchangeResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.ItemPublicTokenExchangeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.itemPublicTokenExchange({
  body: { publicToken: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ItemPublicTokenExchangeResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ItemPublicTokenExchangeRequest](src/models/item-public-token-exchange-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.itemPublicTokenExchange(request)`

- **OnSuccess**: <code>[ItemPublicTokenExchangeResponse](src/models/item-public-token-exchange-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.ItemPublicTokenExchangeError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.itemPublicTokenExchange(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ItemPublicTokenExchangeResponse, ThePlaidApiClient.ItemPublicTokenExchangeError&gt;</code>, with `result.value` of type <code>[ItemPublicTokenExchangeResponse](src/models/item-public-token-exchange-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>itemRemove(request: ThePlaidApiClient.ItemRemoveRequestParams, options?: RequestOptions): ApiPromise&lt;ItemRemoveResponse, ThePlaidApiClient.ItemRemoveError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/item/remove` endpoint allows you to remove an Item. Once removed, the `access_token`, as well as any processor tokens or bank account tokens associated with the Item, is no longer valid and cannot be used to access any data that was associated with the Item.

Calling `/item/remove` is a recommended best practice when offboarding users or if a user chooses to disconnect an account linked via Plaid. For subscription products, such as Transactions, Liabilities, and Investments, calling `/item/remove` is required to end subscription billing for the Item, unless the end user revoked permission (e.g. via [https://my.plaid.com/](https://my.plaid.com/)). For more details, see [Subscription fee model](https://plaid.com/docs/account/billing/#subscription-fee).

On a Trial plan, calling `/item/remove` does not impact the number of remaining Trial Items (bank connections) you have available.

Removing an Item does not affect any Asset Reports or Audit Copies you have already created, which will remain accessible until you remove access to them specifically using the `/asset_report/remove` endpoint.

Also note that for certain OAuth-based institutions, an Item removed via `/item/remove` may still show as an active connection in the institution's OAuth permission manager.

API versions 2019-05-29 and earlier return a `removed` boolean as part of the response.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.itemRemove({ body: { accessToken: "some example string" } });
  // TODO: Handle 'response' of type ItemRemoveResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.ItemRemoveError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.itemRemove({ body: { accessToken: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ItemRemoveResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ItemRemoveRequest](src/models/item-remove-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.itemRemove(request)`

- **OnSuccess**: <code>[ItemRemoveResponse](src/models/item-remove-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.ItemRemoveError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.itemRemove(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ItemRemoveResponse, ThePlaidApiClient.ItemRemoveError&gt;</code>, with `result.value` of type <code>[ItemRemoveResponse](src/models/item-remove-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>itemWebhookUpdate(request: ThePlaidApiClient.ItemWebhookUpdateRequestParams, options?: RequestOptions): ApiPromise&lt;ItemWebhookUpdateResponse, ThePlaidApiClient.ItemWebhookUpdateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The POST `/item/webhook/update` allows you to update the webhook URL associated with an Item. This request triggers a [`WEBHOOK_UPDATE_ACKNOWLEDGED`](https://plaid.com/docs/api/items/#webhook_update_acknowledged) webhook to the newly specified webhook URL.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.itemWebhookUpdate({ body: { accessToken: "some example string" } });
  // TODO: Handle 'response' of type ItemWebhookUpdateResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.ItemWebhookUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.itemWebhookUpdate({ body: { accessToken: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ItemWebhookUpdateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ItemWebhookUpdateRequest](src/models/item-webhook-update-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.itemWebhookUpdate(request)`

- **OnSuccess**: <code>[ItemWebhookUpdateResponse](src/models/item-webhook-update-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.ItemWebhookUpdateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.itemWebhookUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ItemWebhookUpdateResponse, ThePlaidApiClient.ItemWebhookUpdateError&gt;</code>, with `result.value` of type <code>[ItemWebhookUpdateResponse](src/models/item-webhook-update-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>liabilitiesGet(request: ThePlaidApiClient.LiabilitiesGetRequestParams, options?: RequestOptions): ApiPromise&lt;LiabilitiesGetResponse, ThePlaidApiClient.LiabilitiesGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/liabilities/get` endpoint returns various details about an Item with loan or credit accounts. Liabilities data is available primarily for US financial institutions, with some limited coverage of Canadian institutions. Currently supported account types are account type `credit` with account subtype `credit card` or `paypal`, and account type `loan` with account subtype `student` or `mortgage`. To limit accounts listed in Link to types and subtypes supported by Liabilities, you can use the `account_filters` parameter when [creating a Link token](https://plaid.com/docs/api/link/#linktokencreate).

The types of information returned by Liabilities can include balances and due dates, loan terms, and account details such as original loan amount and guarantor. Data is refreshed approximately once per day; the latest data can be retrieved by calling `/liabilities/get`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.liabilitiesGet({ body: { accessToken: "some example string" } });
  // TODO: Handle 'response' of type LiabilitiesGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.LiabilitiesGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.liabilitiesGet({ body: { accessToken: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type LiabilitiesGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[LiabilitiesGetRequest](src/models/liabilities-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.liabilitiesGet(request)`

- **OnSuccess**: <code>[LiabilitiesGetResponse](src/models/liabilities-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.LiabilitiesGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.liabilitiesGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;LiabilitiesGetResponse, ThePlaidApiClient.LiabilitiesGetError&gt;</code>, with `result.value` of type <code>[LiabilitiesGetResponse](src/models/liabilities-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>linkDeliveryCreate(request: ThePlaidApiClient.LinkDeliveryCreateRequestParams, options?: RequestOptions): ApiPromise&lt;LinkDeliveryCreateResponse, ThePlaidApiClient.LinkDeliveryCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use the `/link_delivery/create` endpoint to create a Hosted Link session.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.linkDeliveryCreate({ body: { linkToken: "some example string" } });
  // TODO: Handle 'response' of type LinkDeliveryCreateResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.LinkDeliveryCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.linkDeliveryCreate({ body: { linkToken: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type LinkDeliveryCreateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[LinkDeliveryCreateRequest](src/models/link-delivery-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.linkDeliveryCreate(request)`

- **OnSuccess**: <code>[LinkDeliveryCreateResponse](src/models/link-delivery-create-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.LinkDeliveryCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.linkDeliveryCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;LinkDeliveryCreateResponse, ThePlaidApiClient.LinkDeliveryCreateError&gt;</code>, with `result.value` of type <code>[LinkDeliveryCreateResponse](src/models/link-delivery-create-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>linkDeliveryGet(request: ThePlaidApiClient.LinkDeliveryGetRequestParams, options?: RequestOptions): ApiPromise&lt;LinkDeliveryGetResponse, ThePlaidApiClient.LinkDeliveryGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use the `/link_delivery/get` endpoint to get the status of a Hosted Link session.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.linkDeliveryGet({ body: { linkDeliverySessionId: "some example string" } });
  // TODO: Handle 'response' of type LinkDeliveryGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.LinkDeliveryGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.linkDeliveryGet({
  body: { linkDeliverySessionId: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type LinkDeliveryGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[LinkDeliveryGetRequest](src/models/link-delivery-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.linkDeliveryGet(request)`

- **OnSuccess**: <code>[LinkDeliveryGetResponse](src/models/link-delivery-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.LinkDeliveryGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.linkDeliveryGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;LinkDeliveryGetResponse, ThePlaidApiClient.LinkDeliveryGetError&gt;</code>, with `result.value` of type <code>[LinkDeliveryGetResponse](src/models/link-delivery-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>linkOauthCorrelationIdExchange(request: ThePlaidApiClient.LinkOauthCorrelationIdExchangeRequest, options?: RequestOptions): ApiPromise&lt;LinkOAuthCorrelationIdExchangeResponse, ThePlaidApiClient.LinkOauthCorrelationIdExchangeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Exchange an OAuth `link_correlation_id` for the corresponding `link_token`. The `link_correlation_id` is only available for `payment_initiation` products and is provided to the client via the OAuth `redirect_uri` as a query parameter.
The `link_correlation_id` is ephemeral and expires in a brief period, after which it can no longer be exchanged for the `link_token`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.linkOauthCorrelationIdExchange({
    body: { linkCorrelationId: "some example string" },
  });
  // TODO: Handle 'response' of type LinkOAuthCorrelationIdExchangeResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.LinkOauthCorrelationIdExchangeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.linkOauthCorrelationIdExchange({
  body: { linkCorrelationId: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type LinkOAuthCorrelationIdExchangeResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[LinkOAuthCorrelationIdExchangeRequest](src/models/link-oauth-correlation-id-exchange-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.linkOauthCorrelationIdExchange(request)`

- **OnSuccess**: <code>[LinkOAuthCorrelationIdExchangeResponse](src/models/link-oauth-correlation-id-exchange-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.LinkOauthCorrelationIdExchangeError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.linkOauthCorrelationIdExchange(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;LinkOAuthCorrelationIdExchangeResponse, ThePlaidApiClient.LinkOauthCorrelationIdExchangeError&gt;</code>, with `result.value` of type <code>[LinkOAuthCorrelationIdExchangeResponse](src/models/link-oauth-correlation-id-exchange-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>linkTokenCreate(request: ThePlaidApiClient.LinkTokenCreateRequestParams, options?: RequestOptions): ApiPromise&lt;LinkTokenCreateResponse, ThePlaidApiClient.LinkTokenCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/link/token/create` endpoint creates a `link_token`, which is required as a parameter when initializing Link. Once Link has been initialized, it returns a `public_token`. For most Plaid products, the `public_token` is saved and exchanged for an `access_token` via `/item/public_token/exchange` as part of the main Link flow. For more details, see the [Link flow overview](https://plaid.com/docs/link/#link-flow-overview).

A `link_token` generated by `/link/token/create` is also used to initialize other Link flows, such as the [update mode](https://plaid.com/docs/link/update-mode) flow for tokens with expired credentials, or the Identity Verification flow.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.linkTokenCreate({
    body: {
      clientName: "some example string",
      language: "some example string",
      countryCodes: [CountryCode.Us],
    },
  });
  // TODO: Handle 'response' of type LinkTokenCreateResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.LinkTokenCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.linkTokenCreate({
  body: {
    clientName: "some example string",
    language: "some example string",
    countryCodes: [CountryCode.Us],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type LinkTokenCreateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[LinkTokenCreateRequest](src/models/link-token-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.linkTokenCreate(request)`

- **OnSuccess**: <code>[LinkTokenCreateResponse](src/models/link-token-create-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.LinkTokenCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.linkTokenCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;LinkTokenCreateResponse, ThePlaidApiClient.LinkTokenCreateError&gt;</code>, with `result.value` of type <code>[LinkTokenCreateResponse](src/models/link-token-create-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>linkTokenGet(request: ThePlaidApiClient.LinkTokenGetRequestParams, options?: RequestOptions): ApiPromise&lt;LinkTokenGetResponse, ThePlaidApiClient.LinkTokenGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/link/token/get` endpoint gets information about a Link session, including all callbacks fired during the session along with their metadata, including the public token. This endpoint is used with Link flows that don't provide a public token via frontend callbacks, such as the [Hosted Link flow](https://plaid.com/docs/link/hosted-link/) and the [Multi-Item Link flow](https://plaid.com/docs/link/multi-item-link/). It also can be useful for debugging purposes.

By default, this endpoint will only return complete event data for Hosted Link sessions. To use `/link/token/get` to retrieve event data for non-Hosted-Link sessions, contact your account manager to request that your account be enabled for Link events. If you do not have an account manager, you can submit this request via a support ticket. Enablement for Link events will also cause you to receive additional webhooks related to Link events, such as the `SESSION_FINISHED` and `EVENTS` webhook.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.linkTokenGet({ body: { linkToken: "some example string" } });
  // TODO: Handle 'response' of type LinkTokenGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.LinkTokenGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.linkTokenGet({ body: { linkToken: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type LinkTokenGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[LinkTokenGetRequest](src/models/link-token-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.linkTokenGet(request)`

- **OnSuccess**: <code>[LinkTokenGetResponse](src/models/link-token-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.LinkTokenGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.linkTokenGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;LinkTokenGetResponse, ThePlaidApiClient.LinkTokenGetError&gt;</code>, with `result.value` of type <code>[LinkTokenGetResponse](src/models/link-token-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>networkStatusGet(request: ThePlaidApiClient.NetworkStatusGetRequestParams, options?: RequestOptions): ApiPromise&lt;NetworkStatusGetResponse, ThePlaidApiClient.NetworkStatusGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/network/status/get` endpoint can be used to check whether Plaid has a matching profile for the user.
This is useful for determining if a user is eligible for a streamlined experience, such as Layer. To access this endpoint, contact your Plaid account manager.

Note: it is strongly recommended to check for Layer eligibility in the frontend. `/network/status/get` should only be used for checking Layer eligibility if a frontend check is not possible for your use case.
For instructions on performing a frontend eligibility check, see the [Layer documentation](https://plaid.com/docs/layer/#integration-overview).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.networkStatusGet({ body: { user: { phoneNumber: "some example string" } } });
  // TODO: Handle 'response' of type NetworkStatusGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.NetworkStatusGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.networkStatusGet({
  body: { user: { phoneNumber: "some example string" } },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type NetworkStatusGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[NetworkStatusGetRequest](src/models/network-status-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.networkStatusGet(request)`

- **OnSuccess**: <code>[NetworkStatusGetResponse](src/models/network-status-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.NetworkStatusGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.networkStatusGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;NetworkStatusGetResponse, ThePlaidApiClient.NetworkStatusGetError&gt;</code>, with `result.value` of type <code>[NetworkStatusGetResponse](src/models/network-status-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>oauthIntrospect(request: ThePlaidApiClient.OauthIntrospectRequest, options?: RequestOptions): ApiPromise&lt;OAuthIntrospectResponse, ThePlaidApiClient.OauthIntrospectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

`/oauth/introspect` returns metadata about an access token or refresh token.

Note: This endpoint supports `Content-Type: application/x-www-form-urlencoded` as well as JSON. The fields for the form are equivalent to the fields for JSON and conform to the OAuth 2.0 specification.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.oauthIntrospect({ body: { token: "some example string" } });
  // TODO: Handle 'response' of type OAuthIntrospectResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.OauthIntrospectError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.oauthIntrospect({ body: { token: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OAuthIntrospectResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[OAuthIntrospectRequest](src/models/oauth-introspect-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.oauthIntrospect(request)`

- **OnSuccess**: <code>[OAuthIntrospectResponse](src/models/oauth-introspect-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.OauthIntrospectError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.oauthIntrospect(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OAuthIntrospectResponse, ThePlaidApiClient.OauthIntrospectError&gt;</code>, with `result.value` of type <code>[OAuthIntrospectResponse](src/models/oauth-introspect-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>oauthRevoke(request: ThePlaidApiClient.OauthRevokeRequest, options?: RequestOptions): ApiPromise&lt;OAuthRevokeResponse, ThePlaidApiClient.OauthRevokeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

`/oauth/revoke` revokes an access or refresh token, preventing any further use. If a refresh token is revoked, all access and refresh tokens derived from it are also revoked, including exchanged tokens.

Note: This endpoint supports `Content-Type: application/x-www-form-urlencoded` as well as JSON. The fields for the form are equivalent to the fields for JSON and conform to the OAuth 2.0 specification.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.oauthRevoke({ body: { token: "some example string" } });
  // TODO: Handle 'response' of type OAuthRevokeResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.OauthRevokeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.oauthRevoke({ body: { token: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OAuthRevokeResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[OAuthRevokeRequest](src/models/oauth-revoke-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.oauthRevoke(request)`

- **OnSuccess**: <code>[OAuthRevokeResponse](src/models/oauth-revoke-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.OauthRevokeError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.oauthRevoke(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OAuthRevokeResponse, ThePlaidApiClient.OauthRevokeError&gt;</code>, with `result.value` of type <code>[OAuthRevokeResponse](src/models/oauth-revoke-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>oauthToken(request: ThePlaidApiClient.OauthTokenRequest, options?: RequestOptions): ApiPromise&lt;OAuthTokenResponse, ThePlaidApiClient.OauthTokenError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

`/oauth/token` issues an access token and refresh token depending on the `grant_type` provided. This endpoint supports `Content-Type: application/x-www-form-urlencoded` as well as JSON. The fields for the form are equivalent to the fields for JSON and conform to the OAuth 2.0 specification.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.oauthToken({ body: { grantType: OAuthGrantType.RefreshToken } });
  // TODO: Handle 'response' of type OAuthTokenResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.OauthTokenError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.oauthToken({ body: { grantType: OAuthGrantType.RefreshToken } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type OAuthTokenResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[OAuthTokenRequest](src/models/oauth-token-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.oauthToken(request)`

- **OnSuccess**: <code>[OAuthTokenResponse](src/models/oauth-token-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.OauthTokenError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.oauthToken(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;OAuthTokenResponse, ThePlaidApiClient.OauthTokenError&gt;</code>, with `result.value` of type <code>[OAuthTokenResponse](src/models/oauth-token-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>partnerCustomerCreate(request: ThePlaidApiClient.PartnerCustomerCreateRequestParams, options?: RequestOptions): ApiPromise&lt;PartnerCustomerCreateResponse, ThePlaidApiClient.PartnerCustomerCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/partner/customer/create` endpoint is used by reseller partners to create end customers. To create end customers, it should be called in the Production environment only, even when creating Sandbox API keys. If called in the Sandbox environment, it will return a sample response, but no customer will be created and the API keys will not be valid.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.partnerCustomerCreate({
    body: {
      clientId: "7f57eb3d2a9j6480121fx361",
      secret: "79g03eoofwl8240v776r2h667442119",
      companyName: "Plaid",
      isDiligenceAttested: true,
      products: [Products.Auth, Products.Identity],
      createLinkCustomization: true,
      legalEntityName: "Plaid",
      website: "plaid.com",
      applicationName: "Plaid",
      technicalContact: { givenName: "Alice", familyName: "Smith", email: "alice.smith@example.com" },
      billingContact: { givenName: "Bob", familyName: "Jones", email: "bob.jones@example.com" },
      customerSupportInfo: {
        email: "support@example.com",
        phoneNumber: "1234567890",
        contactUrl: "example.com/contact",
        linkUpdateUrl: "example.com/update",
      },
      address: {
        city: "New York",
        street: "123 Main St",
        region: "NY",
        postalCode: "12345",
        countryCode: "US",
      },
      isBankAddendumCompleted: true,
      redirectUris: ["http://localhost/oauth.html", "https://www.example.com/oauth.html"],
    },
  });
  // TODO: Handle 'response' of type PartnerCustomerCreateResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.PartnerCustomerCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.partnerCustomerCreate({
  body: {
    clientId: "7f57eb3d2a9j6480121fx361",
    secret: "79g03eoofwl8240v776r2h667442119",
    companyName: "Plaid",
    isDiligenceAttested: true,
    products: [Products.Auth, Products.Identity],
    createLinkCustomization: true,
    legalEntityName: "Plaid",
    website: "plaid.com",
    applicationName: "Plaid",
    technicalContact: { givenName: "Alice", familyName: "Smith", email: "alice.smith@example.com" },
    billingContact: { givenName: "Bob", familyName: "Jones", email: "bob.jones@example.com" },
    customerSupportInfo: {
      email: "support@example.com",
      phoneNumber: "1234567890",
      contactUrl: "example.com/contact",
      linkUpdateUrl: "example.com/update",
    },
    address: {
      city: "New York",
      street: "123 Main St",
      region: "NY",
      postalCode: "12345",
      countryCode: "US",
    },
    isBankAddendumCompleted: true,
    redirectUris: ["http://localhost/oauth.html", "https://www.example.com/oauth.html"],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PartnerCustomerCreateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PartnerCustomerCreateRequest](src/models/partner-customer-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.partnerCustomerCreate(request)`

- **OnSuccess**: <code>[PartnerCustomerCreateResponse](src/models/partner-customer-create-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.PartnerCustomerCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.partnerCustomerCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PartnerCustomerCreateResponse, ThePlaidApiClient.PartnerCustomerCreateError&gt;</code>, with `result.value` of type <code>[PartnerCustomerCreateResponse](src/models/partner-customer-create-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>partnerCustomerEnable(request: ThePlaidApiClient.PartnerCustomerEnableRequestParams, options?: RequestOptions): ApiPromise&lt;PartnerCustomerEnableResponse, ThePlaidApiClient.PartnerCustomerEnableError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/partner/customer/enable` endpoint is used by reseller partners to enable an end customer in the full Production environment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.partnerCustomerEnable({
    body: {
      clientId: "7f57eb3d2a9j6480121fx361",
      secret: "79g03eoofwl8240v776r2h667442119",
      endCustomerClientId: "7f57eb3d2a9j6480121fx361",
    },
  });
  // TODO: Handle 'response' of type PartnerCustomerEnableResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.PartnerCustomerEnableError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.partnerCustomerEnable({
  body: {
    clientId: "7f57eb3d2a9j6480121fx361",
    secret: "79g03eoofwl8240v776r2h667442119",
    endCustomerClientId: "7f57eb3d2a9j6480121fx361",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PartnerCustomerEnableResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PartnerCustomerEnableRequest](src/models/partner-customer-enable-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.partnerCustomerEnable(request)`

- **OnSuccess**: <code>[PartnerCustomerEnableResponse](src/models/partner-customer-enable-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.PartnerCustomerEnableError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.partnerCustomerEnable(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PartnerCustomerEnableResponse, ThePlaidApiClient.PartnerCustomerEnableError&gt;</code>, with `result.value` of type <code>[PartnerCustomerEnableResponse](src/models/partner-customer-enable-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>partnerCustomerGet(request: ThePlaidApiClient.PartnerCustomerGetRequestParams, options?: RequestOptions): ApiPromise&lt;PartnerCustomerGetResponse, ThePlaidApiClient.PartnerCustomerGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/partner/customer/get` endpoint is used by reseller partners to retrieve data about a single end customer.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.partnerCustomerGet({
    body: {
      clientId: "7f57eb3d2a9j6480121fx361",
      secret: "79g03eoofwl8240v776r2h667442119",
      endCustomerClientId: "7f57eb3d2a9j6480121fx361",
    },
  });
  // TODO: Handle 'response' of type PartnerCustomerGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.PartnerCustomerGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.partnerCustomerGet({
  body: {
    clientId: "7f57eb3d2a9j6480121fx361",
    secret: "79g03eoofwl8240v776r2h667442119",
    endCustomerClientId: "7f57eb3d2a9j6480121fx361",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PartnerCustomerGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PartnerCustomerGetRequest](src/models/partner-customer-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.partnerCustomerGet(request)`

- **OnSuccess**: <code>[PartnerCustomerGetResponse](src/models/partner-customer-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.PartnerCustomerGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.partnerCustomerGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PartnerCustomerGetResponse, ThePlaidApiClient.PartnerCustomerGetError&gt;</code>, with `result.value` of type <code>[PartnerCustomerGetResponse](src/models/partner-customer-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>partnerCustomerOauthInstitutionsGet(request: ThePlaidApiClient.PartnerCustomerOauthInstitutionsGetRequest, options?: RequestOptions): ApiPromise&lt;PartnerCustomerOAuthInstitutionsGetResponse, ThePlaidApiClient.PartnerCustomerOauthInstitutionsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/partner/customer/oauth_institutions/get` endpoint is used by reseller partners to retrieve OAuth-institution registration information about a single end customer. To learn how to set up a webhook to listen to status update events, visit the [reseller documentation](https://plaid.com/docs/account/resellers/#enabling-end-customers).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.partnerCustomerOauthInstitutionsGet({
    body: {
      clientId: "7f57eb3d2a9j6480121fx361",
      secret: "79g03eoofwl8240v776r2h667442119",
      endCustomerClientId: "7f57eb3d2a9j6480121fx361",
    },
  });
  // TODO: Handle 'response' of type PartnerCustomerOAuthInstitutionsGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.PartnerCustomerOauthInstitutionsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.partnerCustomerOauthInstitutionsGet({
  body: {
    clientId: "7f57eb3d2a9j6480121fx361",
    secret: "79g03eoofwl8240v776r2h667442119",
    endCustomerClientId: "7f57eb3d2a9j6480121fx361",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PartnerCustomerOAuthInstitutionsGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PartnerCustomerOAuthInstitutionsGetRequest](src/models/partner-customer-oauth-institutions-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.partnerCustomerOauthInstitutionsGet(request)`

- **OnSuccess**: <code>[PartnerCustomerOAuthInstitutionsGetResponse](src/models/partner-customer-oauth-institutions-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.PartnerCustomerOauthInstitutionsGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.partnerCustomerOauthInstitutionsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PartnerCustomerOAuthInstitutionsGetResponse, ThePlaidApiClient.PartnerCustomerOauthInstitutionsGetError&gt;</code>, with `result.value` of type <code>[PartnerCustomerOAuthInstitutionsGetResponse](src/models/partner-customer-oauth-institutions-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>partnerCustomerRemove(request: ThePlaidApiClient.PartnerCustomerRemoveRequestParams, options?: RequestOptions): ApiPromise&lt;PartnerCustomerRemoveResponse, ThePlaidApiClient.PartnerCustomerRemoveError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/partner/customer/remove` endpoint is used by reseller partners to remove an end customer. Removing an end customer will remove it from view in the Plaid Dashboard and deactivate its API keys. This endpoint can only be used to remove an end customer that has not yet been enabled in full Production.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.partnerCustomerRemove({
    body: {
      clientId: "7f57eb3d2a9j6480121fx361",
      secret: "79g03eoofwl8240v776r2h667442119",
      endCustomerClientId: "7f57eb3d2a9j6480121fx361",
    },
  });
  // TODO: Handle 'response' of type PartnerCustomerRemoveResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.PartnerCustomerRemoveError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.partnerCustomerRemove({
  body: {
    clientId: "7f57eb3d2a9j6480121fx361",
    secret: "79g03eoofwl8240v776r2h667442119",
    endCustomerClientId: "7f57eb3d2a9j6480121fx361",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PartnerCustomerRemoveResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PartnerCustomerRemoveRequest](src/models/partner-customer-remove-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.partnerCustomerRemove(request)`

- **OnSuccess**: <code>[PartnerCustomerRemoveResponse](src/models/partner-customer-remove-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.PartnerCustomerRemoveError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.partnerCustomerRemove(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PartnerCustomerRemoveResponse, ThePlaidApiClient.PartnerCustomerRemoveError&gt;</code>, with `result.value` of type <code>[PartnerCustomerRemoveResponse](src/models/partner-customer-remove-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>paymentInitiationConsentCreate(request: ThePlaidApiClient.PaymentInitiationConsentCreateRequestParams, options?: RequestOptions): ApiPromise&lt;PaymentInitiationConsentCreateResponse, ThePlaidApiClient.PaymentInitiationConsentCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/payment_initiation/consent/create` endpoint is used to create a payment consent, which can be used to initiate payments on behalf of the user. Payment consents are created with `UNAUTHORISED` status by default and must be authorised by the user before payments can be initiated.

Consents can be limited in time and scope, and have constraints that describe limitations for payments.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentInitiationConsentCreate({
    body: {
      recipientId: "some example string",
      reference: "some example string",
      constraints: {
        maxPaymentAmount: { currency: PaymentAmountCurrency.Gbp, value: 1.5 },
        periodicAmounts: [
          {
            amount: {},
            interval: PaymentConsentPeriodicInterval.Day,
            alignment: PaymentConsentPeriodicAlignment.Calendar,
          },
        ],
      },
    },
  });
  // TODO: Handle 'response' of type PaymentInitiationConsentCreateResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.PaymentInitiationConsentCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentInitiationConsentCreate({
  body: {
    recipientId: "some example string",
    reference: "some example string",
    constraints: {
      maxPaymentAmount: { currency: PaymentAmountCurrency.Gbp, value: 1.5 },
      periodicAmounts: [
        {
          amount: {},
          interval: PaymentConsentPeriodicInterval.Day,
          alignment: PaymentConsentPeriodicAlignment.Calendar,
        },
      ],
    },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaymentInitiationConsentCreateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PaymentInitiationConsentCreateRequest](src/models/payment-initiation-consent-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentInitiationConsentCreate(request)`

- **OnSuccess**: <code>[PaymentInitiationConsentCreateResponse](src/models/payment-initiation-consent-create-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.PaymentInitiationConsentCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentInitiationConsentCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaymentInitiationConsentCreateResponse, ThePlaidApiClient.PaymentInitiationConsentCreateError&gt;</code>, with `result.value` of type <code>[PaymentInitiationConsentCreateResponse](src/models/payment-initiation-consent-create-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>paymentInitiationConsentGet(request: ThePlaidApiClient.PaymentInitiationConsentGetRequestParams, options?: RequestOptions): ApiPromise&lt;PaymentInitiationConsentGetResponse, ThePlaidApiClient.PaymentInitiationConsentGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/payment_initiation/consent/get` endpoint can be used to check the status of a payment consent, as well as to receive basic information such as recipient and constraints.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentInitiationConsentGet({ body: { consentId: "some example string" } });
  // TODO: Handle 'response' of type PaymentInitiationConsentGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.PaymentInitiationConsentGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentInitiationConsentGet({
  body: { consentId: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaymentInitiationConsentGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PaymentInitiationConsentGetRequest](src/models/payment-initiation-consent-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentInitiationConsentGet(request)`

- **OnSuccess**: <code>[PaymentInitiationConsentGetResponse](src/models/payment-initiation-consent-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.PaymentInitiationConsentGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentInitiationConsentGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaymentInitiationConsentGetResponse, ThePlaidApiClient.PaymentInitiationConsentGetError&gt;</code>, with `result.value` of type <code>[PaymentInitiationConsentGetResponse](src/models/payment-initiation-consent-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>paymentInitiationConsentPaymentExecute(request: ThePlaidApiClient.PaymentInitiationConsentPaymentExecuteRequestParams, options?: RequestOptions): ApiPromise&lt;PaymentInitiationConsentPaymentExecuteResponse, ThePlaidApiClient.PaymentInitiationConsentPaymentExecuteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/payment_initiation/consent/payment/execute` endpoint can be used to execute payments using payment consent.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentInitiationConsentPaymentExecute({
    body: {
      consentId: "some example string",
      amount: { currency: PaymentAmountCurrency.Gbp, value: 1.5 },
      idempotencyKey: "some example string",
    },
  });
  // TODO: Handle 'response' of type PaymentInitiationConsentPaymentExecuteResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.PaymentInitiationConsentPaymentExecuteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentInitiationConsentPaymentExecute({
  body: {
    consentId: "some example string",
    amount: { currency: PaymentAmountCurrency.Gbp, value: 1.5 },
    idempotencyKey: "some example string",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaymentInitiationConsentPaymentExecuteResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PaymentInitiationConsentPaymentExecuteRequest](src/models/payment-initiation-consent-payment-execute-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentInitiationConsentPaymentExecute(request)`

- **OnSuccess**: <code>[PaymentInitiationConsentPaymentExecuteResponse](src/models/payment-initiation-consent-payment-execute-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.PaymentInitiationConsentPaymentExecuteError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentInitiationConsentPaymentExecute(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaymentInitiationConsentPaymentExecuteResponse, ThePlaidApiClient.PaymentInitiationConsentPaymentExecuteError&gt;</code>, with `result.value` of type <code>[PaymentInitiationConsentPaymentExecuteResponse](src/models/payment-initiation-consent-payment-execute-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>paymentInitiationConsentRevoke(request: ThePlaidApiClient.PaymentInitiationConsentRevokeRequestParams, options?: RequestOptions): ApiPromise&lt;PaymentInitiationConsentRevokeResponse, ThePlaidApiClient.PaymentInitiationConsentRevokeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/payment_initiation/consent/revoke` endpoint can be used to revoke the payment consent. Once the consent is revoked, it is not possible to initiate payments using it.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentInitiationConsentRevoke({
    body: { consentId: "some example string" },
  });
  // TODO: Handle 'response' of type PaymentInitiationConsentRevokeResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.PaymentInitiationConsentRevokeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentInitiationConsentRevoke({
  body: { consentId: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaymentInitiationConsentRevokeResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PaymentInitiationConsentRevokeRequest](src/models/payment-initiation-consent-revoke-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentInitiationConsentRevoke(request)`

- **OnSuccess**: <code>[PaymentInitiationConsentRevokeResponse](src/models/payment-initiation-consent-revoke-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.PaymentInitiationConsentRevokeError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentInitiationConsentRevoke(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaymentInitiationConsentRevokeResponse, ThePlaidApiClient.PaymentInitiationConsentRevokeError&gt;</code>, with `result.value` of type <code>[PaymentInitiationConsentRevokeResponse](src/models/payment-initiation-consent-revoke-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>paymentInitiationPaymentCreate(request: ThePlaidApiClient.PaymentInitiationPaymentCreateRequestParams, options?: RequestOptions): ApiPromise&lt;PaymentInitiationPaymentCreateResponse, ThePlaidApiClient.PaymentInitiationPaymentCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

After creating a payment recipient, you can use the `/payment_initiation/payment/create` endpoint to create a payment to that recipient.  Payments can be one-time or standing order (recurring) and can be denominated in EUR, GBP, or another chosen [currency](https://plaid.com/docs/api/products/payment-initiation/#payment_initiation-payment-create-request-amount-currency).  If making domestic GBP-denominated payments, your recipient must have been created with Bacs numbers. In general, EUR-denominated payments will be sent via SEPA Credit Transfer, GBP-denominated payments will be sent via the Faster Payments network and for non-Eurozone markets typically via the local payment scheme, but the payment network used will be determined by the institution. Payments sent via Faster Payments will typically arrive immediately, while payments sent via SEPA Credit Transfer or other local payment schemes will typically arrive in one business day.

Standing orders (recurring payments) must be denominated in GBP and can only be sent to recipients in the UK. Once created, standing order payments cannot be modified or canceled via the API. An end user can cancel or modify a standing order directly on their banking application or website, or by contacting the bank. Standing orders will follow the payment rules of the underlying rails (Faster Payments in UK). Payments can be sent Monday to Friday, excluding bank holidays. If the pre-arranged date falls on a weekend or bank holiday, the payment is made on the next working day. It is not possible to guarantee the exact time the payment will reach the recipient's account, although at least 90% of standing order payments are sent by 6am.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentInitiationPaymentCreate({
    body: {
      recipientId: "some example string",
      reference: "some example string",
      amount: { currency: PaymentAmountCurrency.Gbp, value: 1.5 },
    },
  });
  // TODO: Handle 'response' of type PaymentInitiationPaymentCreateResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.PaymentInitiationPaymentCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentInitiationPaymentCreate({
  body: {
    recipientId: "some example string",
    reference: "some example string",
    amount: { currency: PaymentAmountCurrency.Gbp, value: 1.5 },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaymentInitiationPaymentCreateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PaymentInitiationPaymentCreateRequest](src/models/payment-initiation-payment-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentInitiationPaymentCreate(request)`

- **OnSuccess**: <code>[PaymentInitiationPaymentCreateResponse](src/models/payment-initiation-payment-create-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.PaymentInitiationPaymentCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentInitiationPaymentCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaymentInitiationPaymentCreateResponse, ThePlaidApiClient.PaymentInitiationPaymentCreateError&gt;</code>, with `result.value` of type <code>[PaymentInitiationPaymentCreateResponse](src/models/payment-initiation-payment-create-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>paymentInitiationPaymentGet(request: ThePlaidApiClient.PaymentInitiationPaymentGetRequestParams, options?: RequestOptions): ApiPromise&lt;PaymentInitiationPaymentGetResponse, ThePlaidApiClient.PaymentInitiationPaymentGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/payment_initiation/payment/get` endpoint can be used to check the status of a payment, as well as to receive basic information such as recipient and payment amount. In the case of standing orders, the `/payment_initiation/payment/get` endpoint will provide information about the status of the overall standing order itself; the API cannot be used to retrieve payment status for individual payments within a standing order.

Polling for status updates in Production is highly discouraged. Repeatedly calling `/payment_initiation/payment/get` to check a payment's status is unreliable and may trigger API rate limits. Only the `payment_status_update` webhook should be used to receive real-time status updates in Production.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentInitiationPaymentGet({ body: { paymentId: "some example string" } });
  // TODO: Handle 'response' of type PaymentInitiationPaymentGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.PaymentInitiationPaymentGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentInitiationPaymentGet({
  body: { paymentId: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaymentInitiationPaymentGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PaymentInitiationPaymentGetRequest](src/models/payment-initiation-payment-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentInitiationPaymentGet(request)`

- **OnSuccess**: <code>[PaymentInitiationPaymentGetResponse](src/models/payment-initiation-payment-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.PaymentInitiationPaymentGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentInitiationPaymentGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaymentInitiationPaymentGetResponse, ThePlaidApiClient.PaymentInitiationPaymentGetError&gt;</code>, with `result.value` of type <code>[PaymentInitiationPaymentGetResponse](src/models/payment-initiation-payment-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>paymentInitiationPaymentList(request: ThePlaidApiClient.PaymentInitiationPaymentListRequestParams, options?: RequestOptions): ApiPromise&lt;PaymentInitiationPaymentListResponse, ThePlaidApiClient.PaymentInitiationPaymentListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/payment_initiation/payment/list` endpoint can be used to retrieve all created payments. By default, the 10 most recent payments are returned. You can request more payments and paginate through the results using the optional `count` and `cursor` parameters.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentInitiationPaymentList({ body: {} });
  // TODO: Handle 'response' of type PaymentInitiationPaymentListResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.PaymentInitiationPaymentListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentInitiationPaymentList({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaymentInitiationPaymentListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PaymentInitiationPaymentListRequest](src/models/payment-initiation-payment-list-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentInitiationPaymentList(request)`

- **OnSuccess**: <code>[PaymentInitiationPaymentListResponse](src/models/payment-initiation-payment-list-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.PaymentInitiationPaymentListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentInitiationPaymentList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaymentInitiationPaymentListResponse, ThePlaidApiClient.PaymentInitiationPaymentListError&gt;</code>, with `result.value` of type <code>[PaymentInitiationPaymentListResponse](src/models/payment-initiation-payment-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>paymentInitiationPaymentReverse(request: ThePlaidApiClient.PaymentInitiationPaymentReverseRequestParams, options?: RequestOptions): ApiPromise&lt;PaymentInitiationPaymentReverseResponse, ThePlaidApiClient.PaymentInitiationPaymentReverseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Reverse a settled payment from a Plaid virtual account.

The original payment must be in a settled state to be refunded.
To refund partially, specify the amount as part of the request.
If the amount is not specified, the refund amount will be equal to all
of the remaining payment amount that has not been refunded yet.

The refund will go back to the source account that initiated the payment.
The original payment must have been initiated to a Plaid virtual account
so that this account can be used to initiate the refund.

Providing counterparty information such as date of birth and address increases
the likelihood of refund being successful without human intervention.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentInitiationPaymentReverse({
    body: {
      paymentId: "some example string",
      idempotencyKey: "some example string",
      reference: "some example string",
    },
  });
  // TODO: Handle 'response' of type PaymentInitiationPaymentReverseResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.PaymentInitiationPaymentReverseError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentInitiationPaymentReverse({
  body: {
    paymentId: "some example string",
    idempotencyKey: "some example string",
    reference: "some example string",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaymentInitiationPaymentReverseResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PaymentInitiationPaymentReverseRequest](src/models/payment-initiation-payment-reverse-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentInitiationPaymentReverse(request)`

- **OnSuccess**: <code>[PaymentInitiationPaymentReverseResponse](src/models/payment-initiation-payment-reverse-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.PaymentInitiationPaymentReverseError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentInitiationPaymentReverse(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaymentInitiationPaymentReverseResponse, ThePlaidApiClient.PaymentInitiationPaymentReverseError&gt;</code>, with `result.value` of type <code>[PaymentInitiationPaymentReverseResponse](src/models/payment-initiation-payment-reverse-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>paymentInitiationRecipientCreate(request: ThePlaidApiClient.PaymentInitiationRecipientCreateRequestParams, options?: RequestOptions): ApiPromise&lt;PaymentInitiationRecipientCreateResponse, ThePlaidApiClient.PaymentInitiationRecipientCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a payment recipient for payment initiation.  The recipient must be in Europe, within a country that is a member of the Single Euro Payments Area (SEPA) or a non-Eurozone country [supported](https://support.plaid.com/hc/en-us/articles/27895826947735-What-Plaid-products-are-supported-in-each-country-and-region) by Plaid. For a standing order (recurring) payment, the recipient must be in the UK.

It is recommended to use `bacs` in the UK and `iban` in EU.

The endpoint is idempotent: if a developer has already made a request with the same payment details, Plaid will return the same `recipient_id`.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentInitiationRecipientCreate({ body: { name: "some example string" } });
  // TODO: Handle 'response' of type PaymentInitiationRecipientCreateResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.PaymentInitiationRecipientCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentInitiationRecipientCreate({
  body: { name: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaymentInitiationRecipientCreateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PaymentInitiationRecipientCreateRequest](src/models/payment-initiation-recipient-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentInitiationRecipientCreate(request)`

- **OnSuccess**: <code>[PaymentInitiationRecipientCreateResponse](src/models/payment-initiation-recipient-create-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.PaymentInitiationRecipientCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentInitiationRecipientCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaymentInitiationRecipientCreateResponse, ThePlaidApiClient.PaymentInitiationRecipientCreateError&gt;</code>, with `result.value` of type <code>[PaymentInitiationRecipientCreateResponse](src/models/payment-initiation-recipient-create-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>paymentInitiationRecipientGet(request: ThePlaidApiClient.PaymentInitiationRecipientGetRequestParams, options?: RequestOptions): ApiPromise&lt;PaymentInitiationRecipientGetResponse, ThePlaidApiClient.PaymentInitiationRecipientGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get details about a payment recipient you have previously created.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentInitiationRecipientGet({
    body: { recipientId: "some example string" },
  });
  // TODO: Handle 'response' of type PaymentInitiationRecipientGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.PaymentInitiationRecipientGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentInitiationRecipientGet({
  body: { recipientId: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaymentInitiationRecipientGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PaymentInitiationRecipientGetRequest](src/models/payment-initiation-recipient-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentInitiationRecipientGet(request)`

- **OnSuccess**: <code>[PaymentInitiationRecipientGetResponse](src/models/payment-initiation-recipient-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.PaymentInitiationRecipientGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentInitiationRecipientGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaymentInitiationRecipientGetResponse, ThePlaidApiClient.PaymentInitiationRecipientGetError&gt;</code>, with `result.value` of type <code>[PaymentInitiationRecipientGetResponse](src/models/payment-initiation-recipient-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>paymentInitiationRecipientList(request: ThePlaidApiClient.PaymentInitiationRecipientListRequestParams, options?: RequestOptions): ApiPromise&lt;PaymentInitiationRecipientListResponse, ThePlaidApiClient.PaymentInitiationRecipientListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/payment_initiation/recipient/list` endpoint lists the payment recipients that you have previously created.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentInitiationRecipientList({ body: {} });
  // TODO: Handle 'response' of type PaymentInitiationRecipientListResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.PaymentInitiationRecipientListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentInitiationRecipientList({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaymentInitiationRecipientListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PaymentInitiationRecipientListRequest](src/models/payment-initiation-recipient-list-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentInitiationRecipientList(request)`

- **OnSuccess**: <code>[PaymentInitiationRecipientListResponse](src/models/payment-initiation-recipient-list-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.PaymentInitiationRecipientListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentInitiationRecipientList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaymentInitiationRecipientListResponse, ThePlaidApiClient.PaymentInitiationRecipientListError&gt;</code>, with `result.value` of type <code>[PaymentInitiationRecipientListResponse](src/models/payment-initiation-recipient-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>paymentProfileCreate(request: ThePlaidApiClient.PaymentProfileCreateRequestParams, options?: RequestOptions): ApiPromise&lt;PaymentProfileCreateResponse, ThePlaidApiClient.PaymentProfileCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use `/payment_profile/create` endpoint to create a new payment profile.
To initiate the account linking experience, call `/link/token/create` and provide the `payment_profile_token` in the `transfer.payment_profile_token` field.
You can then use the `payment_profile_token` when creating transfers using `/transfer/authorization/create` and `/transfer/create`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentProfileCreate({ body: {} });
  // TODO: Handle 'response' of type PaymentProfileCreateResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.PaymentProfileCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentProfileCreate({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaymentProfileCreateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PaymentProfileCreateRequest](src/models/payment-profile-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentProfileCreate(request)`

- **OnSuccess**: <code>[PaymentProfileCreateResponse](src/models/payment-profile-create-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.PaymentProfileCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentProfileCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaymentProfileCreateResponse, ThePlaidApiClient.PaymentProfileCreateError&gt;</code>, with `result.value` of type <code>[PaymentProfileCreateResponse](src/models/payment-profile-create-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>paymentProfileGet(request: ThePlaidApiClient.PaymentProfileGetRequestParams, options?: RequestOptions): ApiPromise&lt;PaymentProfileGetResponse, ThePlaidApiClient.PaymentProfileGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use `/payment_profile/get` endpoint to get the status of a given Payment Profile.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentProfileGet({ body: { paymentProfileToken: "some example string" } });
  // TODO: Handle 'response' of type PaymentProfileGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.PaymentProfileGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentProfileGet({
  body: { paymentProfileToken: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaymentProfileGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PaymentProfileGetRequest](src/models/payment-profile-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentProfileGet(request)`

- **OnSuccess**: <code>[PaymentProfileGetResponse](src/models/payment-profile-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.PaymentProfileGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentProfileGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaymentProfileGetResponse, ThePlaidApiClient.PaymentProfileGetError&gt;</code>, with `result.value` of type <code>[PaymentProfileGetResponse](src/models/payment-profile-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>paymentProfileRemove(request: ThePlaidApiClient.PaymentProfileRemoveRequestParams, options?: RequestOptions): ApiPromise&lt;PaymentProfileRemoveResponse, ThePlaidApiClient.PaymentProfileRemoveError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use the `/payment_profile/remove` endpoint to remove a given Payment Profile. Once it's removed, it can no longer be used to create transfers.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.paymentProfileRemove({
    body: { paymentProfileToken: "some example string" },
  });
  // TODO: Handle 'response' of type PaymentProfileRemoveResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.PaymentProfileRemoveError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.paymentProfileRemove({
  body: { paymentProfileToken: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PaymentProfileRemoveResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PaymentProfileRemoveRequest](src/models/payment-profile-remove-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.paymentProfileRemove(request)`

- **OnSuccess**: <code>[PaymentProfileRemoveResponse](src/models/payment-profile-remove-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.PaymentProfileRemoveError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.paymentProfileRemove(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PaymentProfileRemoveResponse, ThePlaidApiClient.PaymentProfileRemoveError&gt;</code>, with `result.value` of type <code>[PaymentProfileRemoveResponse](src/models/payment-profile-remove-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>processorAccountGet(request: ThePlaidApiClient.ProcessorAccountGetRequestParams, options?: RequestOptions): ApiPromise&lt;ProcessorAccountGetResponse, ThePlaidApiClient.ProcessorAccountGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint returns the account associated with a given processor token.

This endpoint retrieves cached information, rather than extracting fresh information from the institution. As a result, the account balance returned may not be up-to-date; for real-time balance information, use `/processor/balance/get` instead. Note that some information is nullable.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.processorAccountGet({ body: { processorToken: "some example string" } });
  // TODO: Handle 'response' of type ProcessorAccountGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.ProcessorAccountGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.processorAccountGet({
  body: { processorToken: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProcessorAccountGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ProcessorAccountGetRequest](src/models/processor-account-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.processorAccountGet(request)`

- **OnSuccess**: <code>[ProcessorAccountGetResponse](src/models/processor-account-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.ProcessorAccountGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.processorAccountGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProcessorAccountGetResponse, ThePlaidApiClient.ProcessorAccountGetError&gt;</code>, with `result.value` of type <code>[ProcessorAccountGetResponse](src/models/processor-account-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>processorApexProcessorTokenCreate(request: ThePlaidApiClient.ProcessorApexProcessorTokenCreateRequestParams, options?: RequestOptions): ApiPromise&lt;ProcessorTokenCreateResponse, ThePlaidApiClient.ProcessorApexProcessorTokenCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Used to create a token suitable for sending to Apex to enable Plaid-Apex integrations.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.processorApexProcessorTokenCreate({
    body: { accessToken: "some example string", accountId: "some example string" },
  });
  // TODO: Handle 'response' of type ProcessorTokenCreateResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.ProcessorApexProcessorTokenCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.processorApexProcessorTokenCreate({
  body: { accessToken: "some example string", accountId: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProcessorTokenCreateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ProcessorApexProcessorTokenCreateRequest](src/models/processor-apex-processor-token-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.processorApexProcessorTokenCreate(request)`

- **OnSuccess**: <code>[ProcessorTokenCreateResponse](src/models/processor-token-create-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.ProcessorApexProcessorTokenCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.processorApexProcessorTokenCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProcessorTokenCreateResponse, ThePlaidApiClient.ProcessorApexProcessorTokenCreateError&gt;</code>, with `result.value` of type <code>[ProcessorTokenCreateResponse](src/models/processor-token-create-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>processorAuthGet(request: ThePlaidApiClient.ProcessorAuthGetRequestParams, options?: RequestOptions): ApiPromise&lt;ProcessorAuthGetResponse, ThePlaidApiClient.ProcessorAuthGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/processor/auth/get` endpoint returns the bank account and bank identification number (such as the routing number, for US accounts), for a checking, savings, or cash management account that''s associated with a given `processor_token`. The endpoint also returns high-level account data and balances when available.

Versioning note: API versions 2019-05-29 and earlier use a different schema for the `numbers` object returned by this endpoint. For details, see [Plaid API versioning](https://plaid.com/docs/api/versioning/#version-2020-09-14).


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.processorAuthGet({ body: { processorToken: "some example string" } });
  // TODO: Handle 'response' of type ProcessorAuthGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.ProcessorAuthGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.processorAuthGet({
  body: { processorToken: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProcessorAuthGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ProcessorAuthGetRequest](src/models/processor-auth-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.processorAuthGet(request)`

- **OnSuccess**: <code>[ProcessorAuthGetResponse](src/models/processor-auth-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.ProcessorAuthGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.processorAuthGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProcessorAuthGetResponse, ThePlaidApiClient.ProcessorAuthGetError&gt;</code>, with `result.value` of type <code>[ProcessorAuthGetResponse](src/models/processor-auth-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>processorBalanceGet(request: ThePlaidApiClient.ProcessorBalanceGetRequestParams, options?: RequestOptions): ApiPromise&lt;ProcessorBalanceGetResponse, ThePlaidApiClient.ProcessorBalanceGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/processor/balance/get` endpoint returns the real-time balance for each of an Item's accounts. While other endpoints may return a balance object, only `/processor/balance/get` forces the available and current balance fields to be refreshed rather than cached. 

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.processorBalanceGet({ body: { processorToken: "some example string" } });
  // TODO: Handle 'response' of type ProcessorBalanceGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.ProcessorBalanceGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.processorBalanceGet({
  body: { processorToken: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProcessorBalanceGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ProcessorBalanceGetRequest](src/models/processor-balance-get-request.ts)</code> | The `/processor/balance/get` endpoint returns the real-time balance for the account associated with a given `processor_token`.<br><br>The current balance is the total amount of funds in the account. The available balance is the current balance less any outstanding holds or debits that have not yet posted to the account.<br><br>Note that not all institutions calculate the available balance. In the event that available balance is unavailable from the institution, Plaid will return an available balance value of `null`. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.processorBalanceGet(request)`

- **OnSuccess**: <code>[ProcessorBalanceGetResponse](src/models/processor-balance-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.ProcessorBalanceGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.processorBalanceGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProcessorBalanceGetResponse, ThePlaidApiClient.ProcessorBalanceGetError&gt;</code>, with `result.value` of type <code>[ProcessorBalanceGetResponse](src/models/processor-balance-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>processorBankTransferCreate(request: ThePlaidApiClient.ProcessorBankTransferCreateRequestParams, options?: RequestOptions): ApiPromise&lt;ProcessorBankTransferCreateResponse, ThePlaidApiClient.ProcessorBankTransferCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use the `/processor/bank_transfer/create` endpoint to initiate a new bank transfer as a processor

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.processorBankTransferCreate({
    body: {
      idempotencyKey: "some example string",
      processorToken: "some example string",
      type: BankTransferType.Debit,
      network: BankTransferNetwork.Ach,
      amount: "some example string",
      isoCurrencyCode: "some example string",
      description: "some example string",
      user: { legalName: "some example string" },
    },
  });
  // TODO: Handle 'response' of type ProcessorBankTransferCreateResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.ProcessorBankTransferCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.processorBankTransferCreate({
  body: {
    idempotencyKey: "some example string",
    processorToken: "some example string",
    type: BankTransferType.Debit,
    network: BankTransferNetwork.Ach,
    amount: "some example string",
    isoCurrencyCode: "some example string",
    description: "some example string",
    user: { legalName: "some example string" },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProcessorBankTransferCreateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ProcessorBankTransferCreateRequest](src/models/processor-bank-transfer-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.processorBankTransferCreate(request)`

- **OnSuccess**: <code>[ProcessorBankTransferCreateResponse](src/models/processor-bank-transfer-create-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.ProcessorBankTransferCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.processorBankTransferCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProcessorBankTransferCreateResponse, ThePlaidApiClient.ProcessorBankTransferCreateError&gt;</code>, with `result.value` of type <code>[ProcessorBankTransferCreateResponse](src/models/processor-bank-transfer-create-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>processorIdentityGet(request: ThePlaidApiClient.ProcessorIdentityGetRequestParams, options?: RequestOptions): ApiPromise&lt;ProcessorIdentityGetResponse, ThePlaidApiClient.ProcessorIdentityGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/processor/identity/get` endpoint allows you to retrieve various account holder information on file with the financial institution, including names, emails, phone numbers, and addresses.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.processorIdentityGet({ body: { processorToken: "some example string" } });
  // TODO: Handle 'response' of type ProcessorIdentityGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.ProcessorIdentityGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.processorIdentityGet({
  body: { processorToken: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProcessorIdentityGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ProcessorIdentityGetRequest](src/models/processor-identity-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.processorIdentityGet(request)`

- **OnSuccess**: <code>[ProcessorIdentityGetResponse](src/models/processor-identity-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.ProcessorIdentityGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.processorIdentityGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProcessorIdentityGetResponse, ThePlaidApiClient.ProcessorIdentityGetError&gt;</code>, with `result.value` of type <code>[ProcessorIdentityGetResponse](src/models/processor-identity-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>processorIdentityMatch(request: ThePlaidApiClient.ProcessorIdentityMatchRequestParams, options?: RequestOptions): ApiPromise&lt;ProcessorIdentityMatchResponse, ThePlaidApiClient.ProcessorIdentityMatchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/processor/identity/match` endpoint generates a match score, which indicates how well the provided identity data matches the identity information on file with the account holder's financial institution.

Fields within the `balances` object will always be null when retrieved by `/processor/identity/match`. Instead, use the `/processor/balance/get` endpoint to retrieve balance data.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.processorIdentityMatch({ body: { processorToken: "some example string" } });
  // TODO: Handle 'response' of type ProcessorIdentityMatchResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.ProcessorIdentityMatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.processorIdentityMatch({
  body: { processorToken: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProcessorIdentityMatchResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ProcessorIdentityMatchRequest](src/models/processor-identity-match-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.processorIdentityMatch(request)`

- **OnSuccess**: <code>[ProcessorIdentityMatchResponse](src/models/processor-identity-match-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.ProcessorIdentityMatchError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.processorIdentityMatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProcessorIdentityMatchResponse, ThePlaidApiClient.ProcessorIdentityMatchError&gt;</code>, with `result.value` of type <code>[ProcessorIdentityMatchResponse](src/models/processor-identity-match-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>processorInvestmentsAuthGet(request: ThePlaidApiClient.ProcessorInvestmentsAuthGetRequestParams, options?: RequestOptions): ApiPromise&lt;ProcessorInvestmentsAuthGetResponse, ThePlaidApiClient.ProcessorInvestmentsAuthGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/processor/investments/auth/get` endpoint allows you to retrieve information about the account
authorized by a processor token, including account numbers, account owners, holdings, and data provenance information.

To receive Investments Auth webhooks for a processor token, set its webhook URL via the [`/processor/token/webhook/update`](https://plaid.com/docs/api/processor-partners/#processortokenwebhookupdate) endpoint.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.processorInvestmentsAuthGet({
    body: { processorToken: "some example string" },
  });
  // TODO: Handle 'response' of type ProcessorInvestmentsAuthGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.ProcessorInvestmentsAuthGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.processorInvestmentsAuthGet({
  body: { processorToken: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProcessorInvestmentsAuthGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ProcessorInvestmentsAuthGetRequest](src/models/processor-investments-auth-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.processorInvestmentsAuthGet(request)`

- **OnSuccess**: <code>[ProcessorInvestmentsAuthGetResponse](src/models/processor-investments-auth-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.ProcessorInvestmentsAuthGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.processorInvestmentsAuthGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProcessorInvestmentsAuthGetResponse, ThePlaidApiClient.ProcessorInvestmentsAuthGetError&gt;</code>, with `result.value` of type <code>[ProcessorInvestmentsAuthGetResponse](src/models/processor-investments-auth-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>processorInvestmentsHoldingsGet(request: ThePlaidApiClient.ProcessorInvestmentsHoldingsGetRequestParams, options?: RequestOptions): ApiPromise&lt;ProcessorInvestmentsHoldingsGetResponse, ThePlaidApiClient.ProcessorInvestmentsHoldingsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint returns the stock position data of the account associated with a given processor token.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.processorInvestmentsHoldingsGet({
    body: { processorToken: "some example string" },
  });
  // TODO: Handle 'response' of type ProcessorInvestmentsHoldingsGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.ProcessorInvestmentsHoldingsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.processorInvestmentsHoldingsGet({
  body: { processorToken: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProcessorInvestmentsHoldingsGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ProcessorInvestmentsHoldingsGetRequest](src/models/processor-investments-holdings-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.processorInvestmentsHoldingsGet(request)`

- **OnSuccess**: <code>[ProcessorInvestmentsHoldingsGetResponse](src/models/processor-investments-holdings-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.ProcessorInvestmentsHoldingsGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.processorInvestmentsHoldingsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProcessorInvestmentsHoldingsGetResponse, ThePlaidApiClient.ProcessorInvestmentsHoldingsGetError&gt;</code>, with `result.value` of type <code>[ProcessorInvestmentsHoldingsGetResponse](src/models/processor-investments-holdings-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>processorInvestmentsTransactionsGet(request: ThePlaidApiClient.ProcessorInvestmentsTransactionsGetRequestParams, options?: RequestOptions): ApiPromise&lt;ProcessorInvestmentsTransactionsGetResponse, ThePlaidApiClient.ProcessorInvestmentsTransactionsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/processor/investments/transactions/get` endpoint allows developers to retrieve up to 24 months of user-authorized transaction data for the investment account associated with the processor token.

Transactions are returned in reverse-chronological order, and the sequence of transaction ordering is stable and will not shift.

Due to the potentially large number of investment transactions associated with the account, results are paginated. Manipulate the count and offset parameters in conjunction with the `total_investment_transactions` response body field to fetch all available investment transactions.

Note that Investments does not have a webhook to indicate when initial transaction data has loaded (unless you use the `async_update` option). Instead, if transactions data is not ready when `/processor/investments/transactions/get` is first called, Plaid will wait for the data. For this reason, calling `/processor/investments/transactions/get` immediately after Link may take up to one to two minutes to return.

Data returned by the asynchronous investments extraction flow (when `async_update` is set to true) may not be immediately available to `/processor/investments/transactions/get`. To be alerted when the data is ready to be fetched, listen for the `HISTORICAL_UPDATE` webhook. If no investments history is ready when `/processor/investments/transactions/get` is called, it will return a `PRODUCT_NOT_READY` error.

To receive Investments Transactions webhooks for a processor token, set its webhook URL via the [`/processor/token/webhook/update`](https://plaid.com/docs/api/processor-partners/#processortokenwebhookupdate) endpoint.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.processorInvestmentsTransactionsGet({
    body: { processorToken: "some example string", startDate: "2024-01-15", endDate: "2024-01-15" },
  });
  // TODO: Handle 'response' of type ProcessorInvestmentsTransactionsGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.ProcessorInvestmentsTransactionsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.processorInvestmentsTransactionsGet({
  body: { processorToken: "some example string", startDate: "2024-01-15", endDate: "2024-01-15" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProcessorInvestmentsTransactionsGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ProcessorInvestmentsTransactionsGetRequest](src/models/processor-investments-transactions-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.processorInvestmentsTransactionsGet(request)`

- **OnSuccess**: <code>[ProcessorInvestmentsTransactionsGetResponse](src/models/processor-investments-transactions-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.ProcessorInvestmentsTransactionsGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.processorInvestmentsTransactionsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProcessorInvestmentsTransactionsGetResponse, ThePlaidApiClient.ProcessorInvestmentsTransactionsGetError&gt;</code>, with `result.value` of type <code>[ProcessorInvestmentsTransactionsGetResponse](src/models/processor-investments-transactions-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>processorLiabilitiesGet(request: ThePlaidApiClient.ProcessorLiabilitiesGetRequestParams, options?: RequestOptions): ApiPromise&lt;ProcessorLiabilitiesGetResponse, ThePlaidApiClient.ProcessorLiabilitiesGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/processor/liabilities/get` endpoint returns various details about a loan or credit account. Liabilities data is available primarily for US financial institutions, with some limited coverage of Canadian institutions. Currently supported account types are account type `credit` with account subtype `credit card` or `paypal`, and account type `loan` with account subtype `student` or `mortgage`.

The types of information returned by Liabilities can include balances and due dates, loan terms, and account details such as original loan amount and guarantor. Data is refreshed approximately once per day; the latest data can be retrieved by calling `/processor/liabilities/get`.

Note: This request may take some time to complete if `liabilities` was not specified as an initial product when creating the processor token. This is because Plaid must communicate directly with the institution to retrieve the additional data.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.processorLiabilitiesGet({ body: { processorToken: "some example string" } });
  // TODO: Handle 'response' of type ProcessorLiabilitiesGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.ProcessorLiabilitiesGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.processorLiabilitiesGet({
  body: { processorToken: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProcessorLiabilitiesGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ProcessorLiabilitiesGetRequest](src/models/processor-liabilities-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.processorLiabilitiesGet(request)`

- **OnSuccess**: <code>[ProcessorLiabilitiesGetResponse](src/models/processor-liabilities-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.ProcessorLiabilitiesGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.processorLiabilitiesGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProcessorLiabilitiesGetResponse, ThePlaidApiClient.ProcessorLiabilitiesGetError&gt;</code>, with `result.value` of type <code>[ProcessorLiabilitiesGetResponse](src/models/processor-liabilities-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>processorSignalDecisionReport(request: ThePlaidApiClient.ProcessorSignalDecisionReportRequestParams, options?: RequestOptions): ApiPromise&lt;ProcessorSignalDecisionReportResponse, ThePlaidApiClient.ProcessorSignalDecisionReportError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

After you call `/processor/signal/evaluate`, Plaid will normally infer the outcome from your Signal Rules. However, if you are not using Signal Rules, if the Signal Rules outcome was `REVIEW`, or if you take a different action than the one determined by the Signal Rules, you will need to call `/processor/signal/decision/report`. This helps improve Signal Transaction Score accuracy for your account and is necessary for proper functioning of the rule performance and rule tuning capabilities in the Dashboard. If your effective decision changes after calling `/processor/signal/decision/report` (for example, you indicated that you accepted a transaction, but later on, your payment processor rejected it, so it was never initiated), call `/processor/signal/decision/report` again for the transaction to correct Plaid's records.

If you are using Plaid Transfer as your payment processor, you also do not need to call `/processor/signal/decision/report`, as Plaid can infer outcomes from your Transfer activity.

If using a Balance-only ruleset, this endpoint will not impact scores (Balance does not use scores), but is necessary to view accurate transaction outcomes and tune rule logic in the Dashboard.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.processorSignalDecisionReport({
    body: {
      processorToken: "some example string",
      clientTransactionId: "some example string",
      initiated: true,
    },
  });
  // TODO: Handle 'response' of type ProcessorSignalDecisionReportResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.ProcessorSignalDecisionReportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.processorSignalDecisionReport({
  body: {
    processorToken: "some example string",
    clientTransactionId: "some example string",
    initiated: true,
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProcessorSignalDecisionReportResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ProcessorSignalDecisionReportRequest](src/models/processor-signal-decision-report-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.processorSignalDecisionReport(request)`

- **OnSuccess**: <code>[ProcessorSignalDecisionReportResponse](src/models/processor-signal-decision-report-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.ProcessorSignalDecisionReportError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.processorSignalDecisionReport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProcessorSignalDecisionReportResponse, ThePlaidApiClient.ProcessorSignalDecisionReportError&gt;</code>, with `result.value` of type <code>[ProcessorSignalDecisionReportResponse](src/models/processor-signal-decision-report-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>processorSignalEvaluate(request: ThePlaidApiClient.ProcessorSignalEvaluateRequestParams, options?: RequestOptions): ApiPromise&lt;ProcessorSignalEvaluateResponse, ThePlaidApiClient.ProcessorSignalEvaluateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use `/processor/signal/evaluate` to evaluate a planned ACH transaction to get a return risk assessment and additional risk signals.

`/processor/signal/evaluate` uses Rulesets that are configured on the end customer's Dashboard and can be used with either the Signal Transaction Scores product or the Balance product. Which product is used will be determined by the `ruleset_key` that you provide. Note that only customer-configured rulesets work with this endpoint; as a processor partner, you cannot create or configure your own rulesets. For more details, see [Signal Rules](https://plaid.com/docs/signal/signal-rules/).

Note: This request may have higher latency if Signal Transaction Scores is being added to an existing Item for the first time, or when using a Balance-only ruleset. This is because Plaid must communicate directly with the institution to request data.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.processorSignalEvaluate({
    body: { processorToken: "some example string", clientTransactionId: "some example string", amount: 1.5 },
  });
  // TODO: Handle 'response' of type ProcessorSignalEvaluateResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.ProcessorSignalEvaluateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.processorSignalEvaluate({
  body: { processorToken: "some example string", clientTransactionId: "some example string", amount: 1.5 },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProcessorSignalEvaluateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ProcessorSignalEvaluateRequest](src/models/processor-signal-evaluate-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.processorSignalEvaluate(request)`

- **OnSuccess**: <code>[ProcessorSignalEvaluateResponse](src/models/processor-signal-evaluate-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.ProcessorSignalEvaluateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.processorSignalEvaluate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProcessorSignalEvaluateResponse, ThePlaidApiClient.ProcessorSignalEvaluateError&gt;</code>, with `result.value` of type <code>[ProcessorSignalEvaluateResponse](src/models/processor-signal-evaluate-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>processorSignalPrepare(request: ThePlaidApiClient.ProcessorSignalPrepareRequestParams, options?: RequestOptions): ApiPromise&lt;ProcessorSignalPrepareResponse, ThePlaidApiClient.ProcessorSignalPrepareError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

When a processor token is not initialized with `signal`, call `/processor/signal/prepare` to opt-in that processor token to the data collection process, which will improve the accuracy of the Signal Transaction Score.

If this endpoint is called with a processor token that is already initialized with `signal`, it will return a 200 response and will not modify the processor token.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.processorSignalPrepare({ body: { processorToken: "some example string" } });
  // TODO: Handle 'response' of type ProcessorSignalPrepareResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.ProcessorSignalPrepareError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.processorSignalPrepare({
  body: { processorToken: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProcessorSignalPrepareResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ProcessorSignalPrepareRequest](src/models/processor-signal-prepare-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.processorSignalPrepare(request)`

- **OnSuccess**: <code>[ProcessorSignalPrepareResponse](src/models/processor-signal-prepare-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.ProcessorSignalPrepareError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.processorSignalPrepare(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProcessorSignalPrepareResponse, ThePlaidApiClient.ProcessorSignalPrepareError&gt;</code>, with `result.value` of type <code>[ProcessorSignalPrepareResponse](src/models/processor-signal-prepare-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>processorSignalReturnReport(request: ThePlaidApiClient.ProcessorSignalReturnReportRequestParams, options?: RequestOptions): ApiPromise&lt;ProcessorSignalReturnReportResponse, ThePlaidApiClient.ProcessorSignalReturnReportError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Call the `/processor/signal/return/report` endpoint to report a returned transaction that was previously sent to the `/processor/signal/evaluate` endpoint. Your feedback will be used by the model to incorporate the latest risk trend in your portfolio.

If you are using the [Plaid Transfer product](https://plaid.com/docs/transfer) to create transfers, it is not necessary to use this endpoint, as Plaid already knows whether the transfer was returned.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.processorSignalReturnReport({
    body: {
      processorToken: "some example string",
      clientTransactionId: "some example string",
      returnCode: "some example string",
    },
  });
  // TODO: Handle 'response' of type ProcessorSignalReturnReportResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.ProcessorSignalReturnReportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.processorSignalReturnReport({
  body: {
    processorToken: "some example string",
    clientTransactionId: "some example string",
    returnCode: "some example string",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProcessorSignalReturnReportResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ProcessorSignalReturnReportRequest](src/models/processor-signal-return-report-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.processorSignalReturnReport(request)`

- **OnSuccess**: <code>[ProcessorSignalReturnReportResponse](src/models/processor-signal-return-report-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.ProcessorSignalReturnReportError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.processorSignalReturnReport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProcessorSignalReturnReportResponse, ThePlaidApiClient.ProcessorSignalReturnReportError&gt;</code>, with `result.value` of type <code>[ProcessorSignalReturnReportResponse](src/models/processor-signal-return-report-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>processorStripeBankAccountTokenCreate(request: ThePlaidApiClient.ProcessorStripeBankAccountTokenCreateRequestParams, options?: RequestOptions): ApiPromise&lt;ProcessorStripeBankAccountTokenCreateResponse, ThePlaidApiClient.ProcessorStripeBankAccountTokenCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>


Used to create a token suitable for sending to Stripe to enable Plaid-Stripe integrations. For a detailed guide on integrating Stripe, see [Add Stripe to your app](https://plaid.com/docs/auth/partnerships/stripe/).

Note that the Stripe bank account token is a one-time use token. To store bank account information for later use, you can use a Stripe customer object and create an associated bank account from the token, or you can use a Stripe Custom account and create an associated external bank account from the token. This bank account information should work indefinitely, unless the user's bank account information changes or they revoke Plaid's permissions to access their account. Stripe bank account information cannot be modified once the bank account token has been created. If you ever need to change the bank account details used by Stripe for a specific customer, have the user go through Link again and create a new bank account token from the new `access_token`.

To revoke a bank account token, the entire underlying access token must be revoked using `/item/remove`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.processorStripeBankAccountTokenCreate({
    body: { accessToken: "some example string", accountId: "some example string" },
  });
  // TODO: Handle 'response' of type ProcessorStripeBankAccountTokenCreateResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.ProcessorStripeBankAccountTokenCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.processorStripeBankAccountTokenCreate({
  body: { accessToken: "some example string", accountId: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProcessorStripeBankAccountTokenCreateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ProcessorStripeBankAccountTokenCreateRequest](src/models/processor-stripe-bank-account-token-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.processorStripeBankAccountTokenCreate(request)`

- **OnSuccess**: <code>[ProcessorStripeBankAccountTokenCreateResponse](src/models/processor-stripe-bank-account-token-create-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.ProcessorStripeBankAccountTokenCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.processorStripeBankAccountTokenCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProcessorStripeBankAccountTokenCreateResponse, ThePlaidApiClient.ProcessorStripeBankAccountTokenCreateError&gt;</code>, with `result.value` of type <code>[ProcessorStripeBankAccountTokenCreateResponse](src/models/processor-stripe-bank-account-token-create-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>processorTokenCreate(request: ThePlaidApiClient.ProcessorTokenCreateRequestParams, options?: RequestOptions): ApiPromise&lt;ProcessorTokenCreateResponse, ThePlaidApiClient.ProcessorTokenCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Used to create a token suitable for sending to one of Plaid's partners to enable integrations. Note that Stripe partnerships use bank account tokens instead; see `/processor/stripe/bank_account_token/create` for creating tokens for use with Stripe integrations. If using multiple processors, multiple different processor tokens can be created for a single access token. Once created, a processor token for a given Item can be modified by calling `/processor/token/permissions/set`. To revoke the processor's access, the entire Item must be deleted by calling `/item/remove`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.processorTokenCreate({
    body: {
      accessToken: "some example string",
      accountId: "some example string",
      processor: Processor.Dwolla,
    },
  });
  // TODO: Handle 'response' of type ProcessorTokenCreateResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.ProcessorTokenCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.processorTokenCreate({
  body: { accessToken: "some example string", accountId: "some example string", processor: Processor.Dwolla },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProcessorTokenCreateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ProcessorTokenCreateRequest](src/models/processor-token-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.processorTokenCreate(request)`

- **OnSuccess**: <code>[ProcessorTokenCreateResponse](src/models/processor-token-create-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.ProcessorTokenCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.processorTokenCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProcessorTokenCreateResponse, ThePlaidApiClient.ProcessorTokenCreateError&gt;</code>, with `result.value` of type <code>[ProcessorTokenCreateResponse](src/models/processor-token-create-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>processorTokenPermissionsGet(request: ThePlaidApiClient.ProcessorTokenPermissionsGetRequestParams, options?: RequestOptions): ApiPromise&lt;ProcessorTokenPermissionsGetResponse, ThePlaidApiClient.ProcessorTokenPermissionsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Used to get a processor token's product permissions. The `products` field will be an empty list if the processor can access all available products.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.processorTokenPermissionsGet({
    body: { processorToken: "some example string" },
  });
  // TODO: Handle 'response' of type ProcessorTokenPermissionsGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.ProcessorTokenPermissionsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.processorTokenPermissionsGet({
  body: { processorToken: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProcessorTokenPermissionsGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ProcessorTokenPermissionsGetRequest](src/models/processor-token-permissions-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.processorTokenPermissionsGet(request)`

- **OnSuccess**: <code>[ProcessorTokenPermissionsGetResponse](src/models/processor-token-permissions-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.ProcessorTokenPermissionsGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.processorTokenPermissionsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProcessorTokenPermissionsGetResponse, ThePlaidApiClient.ProcessorTokenPermissionsGetError&gt;</code>, with `result.value` of type <code>[ProcessorTokenPermissionsGetResponse](src/models/processor-token-permissions-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>processorTokenPermissionsSet(request: ThePlaidApiClient.ProcessorTokenPermissionsSetRequestParams, options?: RequestOptions): ApiPromise&lt;ProcessorTokenPermissionsSetResponse, ThePlaidApiClient.ProcessorTokenPermissionsSetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Used to control a processor's access to products on the given processor token. By default, a processor will have access to all available products on the corresponding item. To restrict access to a particular set of products, call this endpoint with the desired products. To restore access to all available products, call this endpoint with an empty list. This endpoint can be called multiple times as your needs and your processor's needs change.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.processorTokenPermissionsSet({
    body: { processorToken: "some example string", products: [Products.Assets] },
  });
  // TODO: Handle 'response' of type ProcessorTokenPermissionsSetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.ProcessorTokenPermissionsSetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.processorTokenPermissionsSet({
  body: { processorToken: "some example string", products: [Products.Assets] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProcessorTokenPermissionsSetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ProcessorTokenPermissionsSetRequest](src/models/processor-token-permissions-set-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.processorTokenPermissionsSet(request)`

- **OnSuccess**: <code>[ProcessorTokenPermissionsSetResponse](src/models/processor-token-permissions-set-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.ProcessorTokenPermissionsSetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.processorTokenPermissionsSet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProcessorTokenPermissionsSetResponse, ThePlaidApiClient.ProcessorTokenPermissionsSetError&gt;</code>, with `result.value` of type <code>[ProcessorTokenPermissionsSetResponse](src/models/processor-token-permissions-set-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>processorTokenWebhookUpdate(request: ThePlaidApiClient.ProcessorTokenWebhookUpdateRequestParams, options?: RequestOptions): ApiPromise&lt;ProcessorTokenWebhookUpdateResponse, ThePlaidApiClient.ProcessorTokenWebhookUpdateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows you, the processor, to update the webhook URL associated with a processor token. This request triggers a `WEBHOOK_UPDATE_ACKNOWLEDGED` webhook to the newly specified webhook URL.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.processorTokenWebhookUpdate({
    body: { processorToken: "some example string", webhook: "some example string" },
  });
  // TODO: Handle 'response' of type ProcessorTokenWebhookUpdateResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.ProcessorTokenWebhookUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.processorTokenWebhookUpdate({
  body: { processorToken: "some example string", webhook: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProcessorTokenWebhookUpdateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ProcessorTokenWebhookUpdateRequest](src/models/processor-token-webhook-update-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.processorTokenWebhookUpdate(request)`

- **OnSuccess**: <code>[ProcessorTokenWebhookUpdateResponse](src/models/processor-token-webhook-update-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.ProcessorTokenWebhookUpdateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.processorTokenWebhookUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProcessorTokenWebhookUpdateResponse, ThePlaidApiClient.ProcessorTokenWebhookUpdateError&gt;</code>, with `result.value` of type <code>[ProcessorTokenWebhookUpdateResponse](src/models/processor-token-webhook-update-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>processorTransactionsGet(request: ThePlaidApiClient.ProcessorTransactionsGetRequestParams, options?: RequestOptions): ApiPromise&lt;ProcessorTransactionsGetResponse, ThePlaidApiClient.ProcessorTransactionsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/processor/transactions/get` endpoint allows developers to receive user-authorized transaction data for credit, depository, and some loan-type accounts (only those with account subtype `student` or `mortgage`; coverage may be limited). Transaction data is standardized across financial institutions, and in many cases transactions are linked to a clean name, entity type, location, and category. Similarly, account data is standardized and returned with a clean name, number, balance, and other meta information where available.

Transactions are returned in reverse-chronological order, and the sequence of transaction ordering is stable and will not shift.  Transactions are not immutable and can also be removed altogether by the institution; a removed transaction will no longer appear in `/processor/transactions/get`.  For more details, see [Pending and posted transactions](https://plaid.com/docs/transactions/transactions-data/#pending-and-posted-transactions).

Due to the potentially large number of transactions associated with a processor token, results are paginated. Manipulate the `count` and `offset` parameters in conjunction with the `total_transactions` response body field to fetch all available transactions.

Data returned by `/processor/transactions/get` will be the data available for the processor token as of the most recent successful check for new transactions. Plaid typically checks for new data multiple times a day, but these checks may occur less frequently, such as once a day, depending on the institution. To force Plaid to check for new transactions, you can use the `/processor/transactions/refresh` endpoint.

Note that data may not be immediately available to `/processor/transactions/get`. Plaid will begin to prepare transactions data upon Item link, if Link was initialized with `transactions`, or upon the first call to `/processor/transactions/get`, if it wasn't. If no transaction history is ready when `/processor/transactions/get` is called, it will return a `PRODUCT_NOT_READY` error.

To receive Transactions webhooks for a processor token, set its webhook URL via the [`/processor/token/webhook/update`](https://plaid.com/docs/api/processor-partners/#processortokenwebhookupdate) endpoint.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.processorTransactionsGet({
    body: { processorToken: "some example string", startDate: "2024-01-15", endDate: "2024-01-15" },
  });
  // TODO: Handle 'response' of type ProcessorTransactionsGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.ProcessorTransactionsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.processorTransactionsGet({
  body: { processorToken: "some example string", startDate: "2024-01-15", endDate: "2024-01-15" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProcessorTransactionsGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ProcessorTransactionsGetRequest](src/models/processor-transactions-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.processorTransactionsGet(request)`

- **OnSuccess**: <code>[ProcessorTransactionsGetResponse](src/models/processor-transactions-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.ProcessorTransactionsGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.processorTransactionsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProcessorTransactionsGetResponse, ThePlaidApiClient.ProcessorTransactionsGetError&gt;</code>, with `result.value` of type <code>[ProcessorTransactionsGetResponse](src/models/processor-transactions-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>processorTransactionsRecurringGet(request: ThePlaidApiClient.ProcessorTransactionsRecurringGetRequestParams, options?: RequestOptions): ApiPromise&lt;ProcessorTransactionsRecurringGetResponse, ThePlaidApiClient.ProcessorTransactionsRecurringGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/processor/transactions/recurring/get` endpoint allows developers to receive a summary of the recurring outflow and inflow streams (expenses and deposits) from a user's checking, savings or credit card accounts. Additionally, Plaid provides key insights about each recurring stream including the category, merchant, last amount, and more. Developers can use these insights to build tools and experiences that help their users better manage cash flow, monitor subscriptions, reduce spend, and stay on track with bill payments.

This endpoint is offered as an add-on to Transactions. To request access to this endpoint, submit a [product access request](https://dashboard.plaid.com/team/products) or contact your Plaid account manager.

This endpoint can only be called on a processor token that has already been initialized with Transactions (either during Link, by specifying it in `/link/token/create`; or after Link, by calling `/processor/transactions/get` or `/processor/transactions/sync`). Once all historical transactions have been fetched, call `/processor/transactions/recurring/get` to receive the Recurring Transactions streams and subscribe to the [`RECURRING_TRANSACTIONS_UPDATE`](https://plaid.com/docs/api/products/transactions/#recurring_transactions_update) webhook. To know when historical transactions have been fetched, if you are using `/processor/transactions/sync` listen for the [`SYNC_UPDATES_AVAILABLE`](https://plaid.com/docs/api/products/transactions/#SyncUpdatesAvailableWebhook-historical-update-complete) webhook and check that the `historical_update_complete` field in the payload is `true`. If using `/processor/transactions/get`, listen for the [`HISTORICAL_UPDATE`](https://plaid.com/docs/api/products/transactions/#historical_update) webhook.

After the initial call, you can call the `/processor/transactions/recurring/get` endpoint at any point in the future to retrieve the latest summary of recurring streams. Listen to the [`RECURRING_TRANSACTIONS_UPDATE`](https://plaid.com/docs/api/products/transactions/#recurring_transactions_update) webhook to be notified when new updates are available.

To receive Transactions webhooks for a processor token, set its webhook URL via the [`/processor/token/webhook/update`](https://plaid.com/docs/api/processor-partners/#processortokenwebhookupdate) endpoint.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.processorTransactionsRecurringGet({
    body: { processorToken: "some example string" },
  });
  // TODO: Handle 'response' of type ProcessorTransactionsRecurringGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.ProcessorTransactionsRecurringGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.processorTransactionsRecurringGet({
  body: { processorToken: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProcessorTransactionsRecurringGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ProcessorTransactionsRecurringGetRequest](src/models/processor-transactions-recurring-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.processorTransactionsRecurringGet(request)`

- **OnSuccess**: <code>[ProcessorTransactionsRecurringGetResponse](src/models/processor-transactions-recurring-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.ProcessorTransactionsRecurringGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.processorTransactionsRecurringGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProcessorTransactionsRecurringGetResponse, ThePlaidApiClient.ProcessorTransactionsRecurringGetError&gt;</code>, with `result.value` of type <code>[ProcessorTransactionsRecurringGetResponse](src/models/processor-transactions-recurring-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>processorTransactionsRefresh(request: ThePlaidApiClient.ProcessorTransactionsRefreshRequestParams, options?: RequestOptions): ApiPromise&lt;ProcessorTransactionsRefreshResponse, ThePlaidApiClient.ProcessorTransactionsRefreshError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

`/processor/transactions/refresh` is an optional endpoint for users of the Transactions product. It initiates an on-demand extraction to fetch the newest transactions for a processor token. This on-demand extraction takes place in addition to the periodic extractions that automatically occur one or more times per day for any Transactions-enabled processor token. If changes to transactions are discovered after calling `/processor/transactions/refresh`, Plaid will fire a webhook: for `/processor/transactions/sync` users, [`SYNC_UPDATES_AVAILABLE`](https://plaid.com/docs/api/products/transactions/#sync_updates_available) will be fired if there are any transactions updated, added, or removed. For users of both `/processor/transactions/sync` and `/processor/transactions/get`, [`TRANSACTIONS_REMOVED`](https://plaid.com/docs/api/products/transactions/#transactions_removed) will be fired if any removed transactions are detected, and [`DEFAULT_UPDATE`](https://plaid.com/docs/api/products/transactions/#default_update) will be fired if any new transactions are detected. New transactions can be fetched by calling `/processor/transactions/get` or `/processor/transactions/sync`. Note that the `/processor/transactions/refresh` endpoint is not supported for Capital One (`ins_128026`) non-depository accounts and will result in a `PRODUCTS_NOT_SUPPORTED` error if called on an Item that contains only non-depository accounts from that institution.

As this endpoint triggers a synchronous request for fresh data, latency may be higher than for other Plaid endpoints (typically less than 10 seconds, but occasionally up to 30 seconds or more); if you encounter errors, you may find it necessary to adjust your timeout period when making requests.

`/processor/transactions/refresh` is offered as an add-on to Transactions and has a separate [fee model](https://plaid.com/docs/account/billing/#per-request-flat-fee). To request access to this endpoint, submit a [product access request](https://dashboard.plaid.com/team/products) or contact your Plaid account manager.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.processorTransactionsRefresh({
    body: { processorToken: "some example string" },
  });
  // TODO: Handle 'response' of type ProcessorTransactionsRefreshResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.ProcessorTransactionsRefreshError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.processorTransactionsRefresh({
  body: { processorToken: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProcessorTransactionsRefreshResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ProcessorTransactionsRefreshRequest](src/models/processor-transactions-refresh-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.processorTransactionsRefresh(request)`

- **OnSuccess**: <code>[ProcessorTransactionsRefreshResponse](src/models/processor-transactions-refresh-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.ProcessorTransactionsRefreshError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.processorTransactionsRefresh(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProcessorTransactionsRefreshResponse, ThePlaidApiClient.ProcessorTransactionsRefreshError&gt;</code>, with `result.value` of type <code>[ProcessorTransactionsRefreshResponse](src/models/processor-transactions-refresh-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>processorTransactionsSync(request: ThePlaidApiClient.ProcessorTransactionsSyncRequestParams, options?: RequestOptions): ApiPromise&lt;ProcessorTransactionsSyncResponse, ThePlaidApiClient.ProcessorTransactionsSyncError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>


The `/processor/transactions/sync` endpoint retrieves transactions associated with an Item and can fetch updates using a cursor to track which updates have already been seen.

For important instructions on integrating with `/processor/transactions/sync`, see the [Transactions integration overview](https://plaid.com/docs/transactions/#integration-overview). If you are migrating from an existing integration using `/processor/transactions/get`, see the [Transactions Sync migration guide](https://plaid.com/docs/transactions/sync-migration/).

This endpoint supports `credit`, `depository`, and some `loan`-type accounts (only those with account subtype `student` or `mortgage`). For `investments` accounts, use `/investments/transactions/get` instead.

When retrieving paginated updates, track both the `next_cursor` from the latest response and the original cursor from the first call in which `has_more` was `true`; if a call to `/processor/transactions/sync` fails when retrieving a paginated update (e.g. due to the [`TRANSACTIONS_SYNC_MUTATION_DURING_PAGINATION`](https://plaid.com/docs/errors/transactions/#transactions_sync_mutation_during_pagination) error), the entire pagination request loop must be restarted beginning with the cursor for the first page of the update, rather than retrying only the single request that failed.

If transactions data is not yet available for the Item, which can happen if the Item was not initialized with transactions during the `/link/token/create` call or if `/processor/transactions/sync` was called within a few seconds of Item creation, `/processor/transactions/sync` will return empty transactions arrays.

Plaid typically checks for new transactions data between one and four times per day, depending on the institution. To find out when transactions were last updated for an Item, use the [Item Debugger](https://plaid.com/docs/account/activity/#troubleshooting-with-item-debugger) or call `/item/get`; the `item.status.transactions.last_successful_update` field will show the timestamp of the most recent successful update. To force Plaid to check for new transactions, use the `/processor/transactions/refresh` endpoint.

To be alerted when new transactions are available, listen for the [`SYNC_UPDATES_AVAILABLE`](https://plaid.com/docs/api/products/transactions/#sync_updates_available) webhook.

To receive Transactions webhooks for a processor token, set its webhook URL via the [`/processor/token/webhook/update`](https://plaid.com/docs/api/processor-partners/#processortokenwebhookupdate) endpoint.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.processorTransactionsSync({
    body: { processorToken: "some example string" },
  });
  // TODO: Handle 'response' of type ProcessorTransactionsSyncResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.ProcessorTransactionsSyncError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.processorTransactionsSync({
  body: { processorToken: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProcessorTransactionsSyncResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ProcessorTransactionsSyncRequest](src/models/processor-transactions-sync-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.processorTransactionsSync(request)`

- **OnSuccess**: <code>[ProcessorTransactionsSyncResponse](src/models/processor-transactions-sync-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.ProcessorTransactionsSyncError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.processorTransactionsSync(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProcessorTransactionsSyncResponse, ThePlaidApiClient.ProcessorTransactionsSyncError&gt;</code>, with `result.value` of type <code>[ProcessorTransactionsSyncResponse](src/models/processor-transactions-sync-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>profileNetworkStatusGet(request: ThePlaidApiClient.ProfileNetworkStatusGetRequestParams, options?: RequestOptions): ApiPromise&lt;ProfileNetworkStatusGetResponse, ThePlaidApiClient.ProfileNetworkStatusGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/profile/network_status/get` endpoint can be used to check whether Plaid has a matching profile for the user.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.profileNetworkStatusGet({
    body: { user: { phoneNumber: "some example string" } },
  });
  // TODO: Handle 'response' of type ProfileNetworkStatusGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.ProfileNetworkStatusGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.profileNetworkStatusGet({
  body: { user: { phoneNumber: "some example string" } },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProfileNetworkStatusGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ProfileNetworkStatusGetRequest](src/models/profile-network-status-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.profileNetworkStatusGet(request)`

- **OnSuccess**: <code>[ProfileNetworkStatusGetResponse](src/models/profile-network-status-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.ProfileNetworkStatusGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.profileNetworkStatusGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProfileNetworkStatusGetResponse, ThePlaidApiClient.ProfileNetworkStatusGetError&gt;</code>, with `result.value` of type <code>[ProfileNetworkStatusGetResponse](src/models/profile-network-status-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>protectCompute(request: ThePlaidApiClient.ProtectComputeRequestParams, options?: RequestOptions): ApiPromise&lt;ProtectComputeResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Compute a Protect Trust Index score for a user. The model selected determines what is scored and what additional fields the response contains. For example, `ti-link-session-2.0` scores a completed Link session for fraud risk; `cash-advance-onboarding-1.0` scores repayment risk for a first-time cash advance and additionally populates per-amount-bucket subscores. Cash-advance models require that the user have a Plaid Item with Transactions enabled, or an Assets Report, before scoring.

The endpoint returns HTTP 400 with `error_type` = `INVALID_REQUEST` and `error_code` = `FAILED_PRECONDITION` when a required precondition is not met: for link-session models, when the Link session has not completed; for cash-advance models, when the user has not successfully linked any Item.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.protectCompute({ body: { model: "some example string", user: {} } });
  // TODO: Handle 'response' of type ProtectComputeResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.protectCompute({
  body: { model: "some example string", user: {} },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProtectComputeResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ProtectComputeRequest](src/models/protect-compute-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.protectCompute(request)`

- **OnSuccess**: <code>[ProtectComputeResponse](src/models/protect-compute-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.protectCompute(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProtectComputeResponse, ApiError&gt;</code>, with `result.value` of type <code>[ProtectComputeResponse](src/models/protect-compute-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>protectEventGet(request: ThePlaidApiClient.ProtectEventGetRequestParams, options?: RequestOptions): ApiPromise&lt;ProtectEventGetResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get information about a user event including Trust Index score and fraud attributes.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.protectEventGet({ body: { eventId: "some example string" } });
  // TODO: Handle 'response' of type ProtectEventGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.protectEventGet({ body: { eventId: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProtectEventGetResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ProtectEventGetRequest](src/models/protect-event-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.protectEventGet(request)`

- **OnSuccess**: <code>[ProtectEventGetResponse](src/models/protect-event-get-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.protectEventGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProtectEventGetResponse, ApiError&gt;</code>, with `result.value` of type <code>[ProtectEventGetResponse](src/models/protect-event-get-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>protectEventSend(request: ThePlaidApiClient.ProtectEventSendRequestParams, options?: RequestOptions): ApiPromise&lt;ProtectEventSendResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a new event to enrich user data and optionally get a Trust Index score for the event.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.protectEventSend({
    body: { event: { timestamp: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)) } },
  });
  // TODO: Handle 'response' of type ProtectEventSendResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.protectEventSend({
  body: { event: { timestamp: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)) } },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProtectEventSendResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ProtectEventSendRequest](src/models/protect-event-send-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.protectEventSend(request)`

- **OnSuccess**: <code>[ProtectEventSendResponse](src/models/protect-event-send-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.protectEventSend(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProtectEventSendResponse, ApiError&gt;</code>, with `result.value` of type <code>[ProtectEventSendResponse](src/models/protect-event-send-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>protectReportCreate(request: ThePlaidApiClient.ProtectReportCreateRequestParams, options?: RequestOptions): ApiPromise&lt;ProtectReportCreateResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this endpoint to create a Protect report to document fraud incidents, investigation outcomes, or other risk events.
This endpoint allows you to report various types of incidents including account takeovers, identity fraud, unauthorized transactions, and other security events.
The reported data helps improve fraud detection models and provides valuable feedback to enhance the overall security of the Plaid network.
Reports can be created for confirmed incidents that have been fully investigated, or for suspected incidents that require further review.
You can associate reports with specific users, sessions, or transactions to provide comprehensive context about the incident.
Each report must include `user_id`, or an `incident_event` with at least one supported identifier: `link_session_id`, `idv_session_id`, `protect_event_id`, `signal_client_transaction_id`, or `access_token`. Context fields such as `internal_reference`, `time`, `amount`, and `bank_account` do not satisfy this identifier requirement.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.protectReportCreate({
    body: {
      reportConfidence: ProtectReportConfidence.Confirmed,
      reportType: ProtectReportType.UserAccountTakeover,
      reportSource: ProtectReportSource.InternalReview,
    },
  });
  // TODO: Handle 'response' of type ProtectReportCreateResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.protectReportCreate({
  body: {
    reportConfidence: ProtectReportConfidence.Confirmed,
    reportType: ProtectReportType.UserAccountTakeover,
    reportSource: ProtectReportSource.InternalReview,
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProtectReportCreateResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ProtectReportCreateRequest](src/models/protect-report-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.protectReportCreate(request)`

- **OnSuccess**: <code>[ProtectReportCreateResponse](src/models/protect-report-create-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.protectReportCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProtectReportCreateResponse, ApiError&gt;</code>, with `result.value` of type <code>[ProtectReportCreateResponse](src/models/protect-report-create-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>protectUserInsightsGet(request: ThePlaidApiClient.ProtectUserInsightsGetRequestParams, options?: RequestOptions): ApiPromise&lt;ProtectUserInsightsGetResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use this endpoint to get basic information about a user as it relates to their fraud profile with Protect.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.protectUserInsightsGet({ body: {} });
  // TODO: Handle 'response' of type ProtectUserInsightsGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.protectUserInsightsGet({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProtectUserInsightsGetResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ProtectUserInsightsGetRequest](src/models/protect-user-insights-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.protectUserInsightsGet(request)`

- **OnSuccess**: <code>[ProtectUserInsightsGetResponse](src/models/protect-user-insights-get-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.protectUserInsightsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProtectUserInsightsGetResponse, ApiError&gt;</code>, with `result.value` of type <code>[ProtectUserInsightsGetResponse](src/models/protect-user-insights-get-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sandboxBankIncomeFireWebhook(request: ThePlaidApiClient.SandboxBankIncomeFireWebhookRequestParams, options?: RequestOptions): ApiPromise&lt;SandboxBankIncomeFireWebhookResponse, ThePlaidApiClient.SandboxBankIncomeFireWebhookError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use the `/sandbox/bank_income/fire_webhook` endpoint to manually trigger a Bank Income webhook in the Sandbox environment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sandboxBankIncomeFireWebhook({
    body: {
      webhookCode: SandboxBankIncomeWebhookFireRequestWebhookCode.BankIncomeRefreshUpdate,
      webhookFields: { userId: "some example string" },
    },
  });
  // TODO: Handle 'response' of type SandboxBankIncomeFireWebhookResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.SandboxBankIncomeFireWebhookError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sandboxBankIncomeFireWebhook({
  body: {
    webhookCode: SandboxBankIncomeWebhookFireRequestWebhookCode.BankIncomeRefreshUpdate,
    webhookFields: { userId: "some example string" },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SandboxBankIncomeFireWebhookResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SandboxBankIncomeFireWebhookRequest](src/models/sandbox-bank-income-fire-webhook-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sandboxBankIncomeFireWebhook(request)`

- **OnSuccess**: <code>[SandboxBankIncomeFireWebhookResponse](src/models/sandbox-bank-income-fire-webhook-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.SandboxBankIncomeFireWebhookError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sandboxBankIncomeFireWebhook(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SandboxBankIncomeFireWebhookResponse, ThePlaidApiClient.SandboxBankIncomeFireWebhookError&gt;</code>, with `result.value` of type <code>[SandboxBankIncomeFireWebhookResponse](src/models/sandbox-bank-income-fire-webhook-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sandboxBankTransferFireWebhook(request: ThePlaidApiClient.SandboxBankTransferFireWebhookRequestParams, options?: RequestOptions): ApiPromise&lt;SandboxBankTransferFireWebhookResponse, ThePlaidApiClient.SandboxBankTransferFireWebhookError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use the `/sandbox/bank_transfer/fire_webhook` endpoint to manually trigger a Bank Transfers webhook in the Sandbox environment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sandboxBankTransferFireWebhook({ body: { webhook: "some example string" } });
  // TODO: Handle 'response' of type SandboxBankTransferFireWebhookResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.SandboxBankTransferFireWebhookError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sandboxBankTransferFireWebhook({
  body: { webhook: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SandboxBankTransferFireWebhookResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SandboxBankTransferFireWebhookRequest](src/models/sandbox-bank-transfer-fire-webhook-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sandboxBankTransferFireWebhook(request)`

- **OnSuccess**: <code>[SandboxBankTransferFireWebhookResponse](src/models/sandbox-bank-transfer-fire-webhook-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.SandboxBankTransferFireWebhookError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sandboxBankTransferFireWebhook(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SandboxBankTransferFireWebhookResponse, ThePlaidApiClient.SandboxBankTransferFireWebhookError&gt;</code>, with `result.value` of type <code>[SandboxBankTransferFireWebhookResponse](src/models/sandbox-bank-transfer-fire-webhook-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sandboxBankTransferSimulate(request: ThePlaidApiClient.SandboxBankTransferSimulateRequestParams, options?: RequestOptions): ApiPromise&lt;SandboxBankTransferSimulateResponse, ThePlaidApiClient.SandboxBankTransferSimulateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use the `/sandbox/bank_transfer/simulate` endpoint to simulate a bank transfer event in the Sandbox environment.  Note that while an event will be simulated and will appear when using endpoints such as `/bank_transfer/event/sync` or `/bank_transfer/event/list`, no transactions will actually take place and funds will not move between accounts, even within the Sandbox.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sandboxBankTransferSimulate({
    body: { bankTransferId: "some example string", eventType: "some example string" },
  });
  // TODO: Handle 'response' of type SandboxBankTransferSimulateResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.SandboxBankTransferSimulateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sandboxBankTransferSimulate({
  body: { bankTransferId: "some example string", eventType: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SandboxBankTransferSimulateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SandboxBankTransferSimulateRequest](src/models/sandbox-bank-transfer-simulate-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sandboxBankTransferSimulate(request)`

- **OnSuccess**: <code>[SandboxBankTransferSimulateResponse](src/models/sandbox-bank-transfer-simulate-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.SandboxBankTransferSimulateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sandboxBankTransferSimulate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SandboxBankTransferSimulateResponse, ThePlaidApiClient.SandboxBankTransferSimulateError&gt;</code>, with `result.value` of type <code>[SandboxBankTransferSimulateResponse](src/models/sandbox-bank-transfer-simulate-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sandboxCraCashflowUpdatesUpdate(request: ThePlaidApiClient.SandboxCraCashflowUpdatesUpdateRequestParams, options?: RequestOptions): ApiPromise&lt;SandboxCraCashflowUpdatesUpdateResponse, ThePlaidApiClient.SandboxCraCashflowUpdatesUpdateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use the `/sandbox/cra/cashflow_updates/update` endpoint to manually trigger an update for Cash Flow Updates (Monitoring) in the Sandbox environment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sandboxCraCashflowUpdatesUpdate({ body: {} });
  // TODO: Handle 'response' of type SandboxCraCashflowUpdatesUpdateResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.SandboxCraCashflowUpdatesUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sandboxCraCashflowUpdatesUpdate({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SandboxCraCashflowUpdatesUpdateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SandboxCraCashflowUpdatesUpdateRequest](src/models/sandbox-cra-cashflow-updates-update-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sandboxCraCashflowUpdatesUpdate(request)`

- **OnSuccess**: <code>[SandboxCraCashflowUpdatesUpdateResponse](src/models/sandbox-cra-cashflow-updates-update-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.SandboxCraCashflowUpdatesUpdateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sandboxCraCashflowUpdatesUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SandboxCraCashflowUpdatesUpdateResponse, ThePlaidApiClient.SandboxCraCashflowUpdatesUpdateError&gt;</code>, with `result.value` of type <code>[SandboxCraCashflowUpdatesUpdateResponse](src/models/sandbox-cra-cashflow-updates-update-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sandboxFdxConsentSeed(request: ThePlaidApiClient.SandboxFdxConsentSeedRequestParams, options?: RequestOptions): ApiPromise&lt;SandboxFdxConsentSeedResponse, ThePlaidApiClient.SandboxFdxConsentSeedError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

`/sandbox/fdx/consent/seed` creates a test FDX consent grant (and a backing Item) for a data provider's customer in Sandbox, so the FDX Consent API endpoints can be exercised end-to-end without a live data provider connection.

`customer_id` is the data provider's identifier for the end user and `application_id` identifies the data recipient application the consent is granted to; both are required. Optionally provide `consent_id` (a UUIDv4) to control the seeded grant's identifier; one is generated when omitted. The seeded grant is returned by `/fdx/consents` and `/fdx/consents/{consentId}`, and can be revoked via `/fdx/consents/{consentId}/revocation`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sandboxFdxConsentSeed({
    body: { customerId: "some example string", applicationId: "some example string" },
  });
  // TODO: Handle 'response' of type SandboxFdxConsentSeedResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.SandboxFdxConsentSeedError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sandboxFdxConsentSeed({
  body: { customerId: "some example string", applicationId: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SandboxFdxConsentSeedResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SandboxFdxConsentSeedRequest](src/models/sandbox-fdx-consent-seed-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sandboxFdxConsentSeed(request)`

- **OnSuccess**: <code>[SandboxFdxConsentSeedResponse](src/models/sandbox-fdx-consent-seed-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.SandboxFdxConsentSeedError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sandboxFdxConsentSeed(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SandboxFdxConsentSeedResponse, ThePlaidApiClient.SandboxFdxConsentSeedError&gt;</code>, with `result.value` of type <code>[SandboxFdxConsentSeedResponse](src/models/sandbox-fdx-consent-seed-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sandboxIncomeFireWebhook(request: ThePlaidApiClient.SandboxIncomeFireWebhookRequestParams, options?: RequestOptions): ApiPromise&lt;SandboxIncomeFireWebhookResponse, ThePlaidApiClient.SandboxIncomeFireWebhookError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use the `/sandbox/income/fire_webhook` endpoint to manually trigger a Payroll or Document Income webhook in the Sandbox environment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sandboxIncomeFireWebhook({
    body: {
      itemId: "some example string",
      webhook: "some example string",
      webhookCode: SandboxIncomeWebhookFireRequestWebhookCode.IncomeVerification,
    },
  });
  // TODO: Handle 'response' of type SandboxIncomeFireWebhookResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.SandboxIncomeFireWebhookError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sandboxIncomeFireWebhook({
  body: {
    itemId: "some example string",
    webhook: "some example string",
    webhookCode: SandboxIncomeWebhookFireRequestWebhookCode.IncomeVerification,
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SandboxIncomeFireWebhookResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SandboxIncomeFireWebhookRequest](src/models/sandbox-income-fire-webhook-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sandboxIncomeFireWebhook(request)`

- **OnSuccess**: <code>[SandboxIncomeFireWebhookResponse](src/models/sandbox-income-fire-webhook-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.SandboxIncomeFireWebhookError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sandboxIncomeFireWebhook(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SandboxIncomeFireWebhookResponse, ThePlaidApiClient.SandboxIncomeFireWebhookError&gt;</code>, with `result.value` of type <code>[SandboxIncomeFireWebhookResponse](src/models/sandbox-income-fire-webhook-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sandboxItemApplicationSeed(request: ThePlaidApiClient.SandboxItemApplicationSeedRequestParams, options?: RequestOptions): ApiPromise&lt;SandboxItemApplicationSeedResponse, ThePlaidApiClient.SandboxItemApplicationSeedError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

`/sandbox/item/application/seed` creates a test connected application on an existing Permissions Manager Item's login. The seeded application will appear in subsequent calls to `/item/application/list`.

The `access_token` must belong to a Permissions Manager Item created via `/item/import` in Sandbox. The `application_id` identifies the application to seed as a connected app. To disconnect a seeded application, use `/item/application/unlink`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sandboxItemApplicationSeed({
    body: { accessToken: "some example string", applicationId: "some example string" },
  });
  // TODO: Handle 'response' of type SandboxItemApplicationSeedResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.SandboxItemApplicationSeedError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sandboxItemApplicationSeed({
  body: { accessToken: "some example string", applicationId: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SandboxItemApplicationSeedResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SandboxItemApplicationSeedRequest](src/models/sandbox-item-application-seed-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sandboxItemApplicationSeed(request)`

- **OnSuccess**: <code>[SandboxItemApplicationSeedResponse](src/models/sandbox-item-application-seed-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.SandboxItemApplicationSeedError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sandboxItemApplicationSeed(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SandboxItemApplicationSeedResponse, ThePlaidApiClient.SandboxItemApplicationSeedError&gt;</code>, with `result.value` of type <code>[SandboxItemApplicationSeedResponse](src/models/sandbox-item-application-seed-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sandboxItemFireWebhook(request: ThePlaidApiClient.SandboxItemFireWebhookRequestParams, options?: RequestOptions): ApiPromise&lt;SandboxItemFireWebhookResponse, ThePlaidApiClient.SandboxItemFireWebhookError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/sandbox/item/fire_webhook` endpoint is used to test that code correctly handles webhooks. This endpoint can trigger the following webhooks:

`DEFAULT_UPDATE`: Webhook to be fired for a given Sandbox Item simulating a default update event for the respective product as specified with the `webhook_type` in the request body. Valid Sandbox `DEFAULT_UPDATE` webhook types include: `AUTH`, `IDENTITY`, `TRANSACTIONS`, `INVESTMENTS_TRANSACTIONS`, `LIABILITIES`, `HOLDINGS`. If the Item does not support the product, a `SANDBOX_PRODUCT_NOT_ENABLED` error will result.

`NEW_ACCOUNTS_AVAILABLE`: Fired to indicate that a new account is available on the Item and you can launch update mode to request access to it.

`SMS_MICRODEPOSITS_VERIFICATION`: Fired when a given Same-Day Micro-deposit Item is verified via SMS verification.

`LOGIN_REPAIRED`: Fired when an Item recovers from the `ITEM_LOGIN_REQUIRED` without the user going through update mode in your app.

`PENDING_DISCONNECT`: Fired when an Item will stop working in the near future (e.g. due to a planned bank migration) and must be sent through update mode to continue working.

`RECURRING_TRANSACTIONS_UPDATE`: Recurring Transactions webhook to be fired for a given Sandbox Item. If the Item does not support Recurring Transactions, a `SANDBOX_PRODUCT_NOT_ENABLED` error will result.

`SYNC_UPDATES_AVAILABLE`: Transactions webhook to be fired for a given Sandbox Item.  If the Item does not support Transactions, a `SANDBOX_PRODUCT_NOT_ENABLED` error will result.

`PRODUCT_READY`: Assets webhook to be fired when a given asset report has been successfully generated. If the Item does not support Assets, a `SANDBOX_PRODUCT_NOT_ENABLED` error will result.

`ERROR`: Assets webhook to be fired when asset report generation has failed. If the Item does not support Assets, a `SANDBOX_PRODUCT_NOT_ENABLED` error will result.

`USER_PERMISSION_REVOKED`: Indicates an end user has revoked the permission that they previously granted to access an Item. May not always fire upon revocation, as some institutions' consent portals do not trigger this webhook. Upon receiving this webhook, it is recommended to delete any stored data from Plaid associated with the account or Item.

`USER_ACCOUNT_REVOKED`: Fired when an end user has revoked access to their account on the Data Provider's portal. This webhook is currently sent only for PNC Items, but may be sent in the future for other financial institutions. Upon receiving this webhook, it is recommended to delete any stored data from Plaid associated with the account or Item.

Note that this endpoint is provided for developer ease-of-use and is not required for testing webhooks; webhooks will also fire in Sandbox under the same conditions that they would in Production (except for webhooks of type `TRANSFER`).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sandboxItemFireWebhook({
    body: { accessToken: "some example string", webhookCode: WebhookCode.DefaultUpdate },
  });
  // TODO: Handle 'response' of type SandboxItemFireWebhookResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.SandboxItemFireWebhookError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sandboxItemFireWebhook({
  body: { accessToken: "some example string", webhookCode: WebhookCode.DefaultUpdate },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SandboxItemFireWebhookResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SandboxItemFireWebhookRequest](src/models/sandbox-item-fire-webhook-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sandboxItemFireWebhook(request)`

- **OnSuccess**: <code>[SandboxItemFireWebhookResponse](src/models/sandbox-item-fire-webhook-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.SandboxItemFireWebhookError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sandboxItemFireWebhook(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SandboxItemFireWebhookResponse, ThePlaidApiClient.SandboxItemFireWebhookError&gt;</code>, with `result.value` of type <code>[SandboxItemFireWebhookResponse](src/models/sandbox-item-fire-webhook-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sandboxItemResetLogin(request: ThePlaidApiClient.SandboxItemResetLoginRequestParams, options?: RequestOptions): ApiPromise&lt;SandboxItemResetLoginResponse, ThePlaidApiClient.SandboxItemResetLoginError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

`/sandbox/item/reset_login` forces an Item into an `ITEM_LOGIN_REQUIRED` state in order to simulate an Item whose login is no longer valid. This makes it easy to test Link's [update mode](https://plaid.com/docs/link/update-mode) flow in the Sandbox environment.  After calling `/sandbox/item/reset_login`, you can then use Plaid Link update mode to restore the Item to a good state. An `ITEM_LOGIN_REQUIRED` webhook will also be fired after a call to this endpoint, if one is associated with the Item.
In the Sandbox, Items will transition to an `ITEM_LOGIN_REQUIRED` error state automatically after 30 days, even if this endpoint is not called.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sandboxItemResetLogin({ body: { accessToken: "some example string" } });
  // TODO: Handle 'response' of type SandboxItemResetLoginResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.SandboxItemResetLoginError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sandboxItemResetLogin({
  body: { accessToken: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SandboxItemResetLoginResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SandboxItemResetLoginRequest](src/models/sandbox-item-reset-login-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sandboxItemResetLogin(request)`

- **OnSuccess**: <code>[SandboxItemResetLoginResponse](src/models/sandbox-item-reset-login-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.SandboxItemResetLoginError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sandboxItemResetLogin(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SandboxItemResetLoginResponse, ThePlaidApiClient.SandboxItemResetLoginError&gt;</code>, with `result.value` of type <code>[SandboxItemResetLoginResponse](src/models/sandbox-item-reset-login-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sandboxItemSetVerificationStatus(request: ThePlaidApiClient.SandboxItemSetVerificationStatusRequestParams, options?: RequestOptions): ApiPromise&lt;SandboxItemSetVerificationStatusResponse, ThePlaidApiClient.SandboxItemSetVerificationStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/sandbox/item/set_verification_status` endpoint can be used to change the verification status of an Item in the Sandbox in order to simulate the Automated Micro-deposit flow.

For more information on testing Automated Micro-deposits in Sandbox, see [Auth full coverage testing](https://plaid.com/docs/auth/coverage/testing#).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sandboxItemSetVerificationStatus({
    body: {
      accessToken: "some example string",
      accountId: "some example string",
      verificationStatus: VerificationStatus1.AutomaticallyVerified,
    },
  });
  // TODO: Handle 'response' of type SandboxItemSetVerificationStatusResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.SandboxItemSetVerificationStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sandboxItemSetVerificationStatus({
  body: {
    accessToken: "some example string",
    accountId: "some example string",
    verificationStatus: VerificationStatus1.AutomaticallyVerified,
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SandboxItemSetVerificationStatusResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SandboxItemSetVerificationStatusRequest](src/models/sandbox-item-set-verification-status-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sandboxItemSetVerificationStatus(request)`

- **OnSuccess**: <code>[SandboxItemSetVerificationStatusResponse](src/models/sandbox-item-set-verification-status-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.SandboxItemSetVerificationStatusError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sandboxItemSetVerificationStatus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SandboxItemSetVerificationStatusResponse, ThePlaidApiClient.SandboxItemSetVerificationStatusError&gt;</code>, with `result.value` of type <code>[SandboxItemSetVerificationStatusResponse](src/models/sandbox-item-set-verification-status-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sandboxOauthSelectAccounts(request: ThePlaidApiClient.SandboxOauthSelectAccountsRequestParams, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ThePlaidApiClient.SandboxOauthSelectAccountsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Save the selected accounts when connecting to the Platypus OAuth institution

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sandboxOauthSelectAccounts({
    body: { oauthStateId: "some example string", accounts: ["some example string"] },
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.SandboxOauthSelectAccountsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sandboxOauthSelectAccounts({
  body: { oauthStateId: "some example string", accounts: ["some example string"] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SandboxOauthSelectAccountsRequest](src/models/sandbox-oauth-select-accounts-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sandboxOauthSelectAccounts(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[ThePlaidApiClient.SandboxOauthSelectAccountsError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sandboxOauthSelectAccounts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, ThePlaidApiClient.SandboxOauthSelectAccountsError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sandboxPaymentProfileResetLogin(request: ThePlaidApiClient.SandboxPaymentProfileResetLoginRequestParams, options?: RequestOptions): ApiPromise&lt;SandboxPaymentProfileResetLoginResponse, ThePlaidApiClient.SandboxPaymentProfileResetLoginError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

`/sandbox/payment_profile/reset_login` forces a Payment Profile into a state where the login is no longer valid. This makes it easy to test update mode for Payment Profile in the Sandbox environment.

 After calling `/sandbox/payment_profile/reset_login`, calls to the `/transfer/authorization/create` with the Payment Profile will result in a `decision_rationale` `PAYMENT_PROFILE_LOGIN_REQUIRED`. You can then use update mode for Payment Profile to restore it into a good state.

 In order to invoke this endpoint, you must first [create a Payment Profile](https://plaid.com/docs/transfer/add-to-app/#create-a-payment-profile-optional) and [go through the Link flow](https://plaid.com/docs/transfer/add-to-app/#create-a-link-token).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sandboxPaymentProfileResetLogin({
    body: { paymentProfileToken: "some example string" },
  });
  // TODO: Handle 'response' of type SandboxPaymentProfileResetLoginResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.SandboxPaymentProfileResetLoginError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sandboxPaymentProfileResetLogin({
  body: { paymentProfileToken: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SandboxPaymentProfileResetLoginResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SandboxPaymentProfileResetLoginRequest](src/models/sandbox-payment-profile-reset-login-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sandboxPaymentProfileResetLogin(request)`

- **OnSuccess**: <code>[SandboxPaymentProfileResetLoginResponse](src/models/sandbox-payment-profile-reset-login-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.SandboxPaymentProfileResetLoginError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sandboxPaymentProfileResetLogin(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SandboxPaymentProfileResetLoginResponse, ThePlaidApiClient.SandboxPaymentProfileResetLoginError&gt;</code>, with `result.value` of type <code>[SandboxPaymentProfileResetLoginResponse](src/models/sandbox-payment-profile-reset-login-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sandboxPaymentSimulate(request: ThePlaidApiClient.SandboxPaymentSimulateRequestParams, options?: RequestOptions): ApiPromise&lt;SandboxPaymentSimulateResponse, ThePlaidApiClient.SandboxPaymentSimulateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use the `/sandbox/payment/simulate` endpoint to simulate various payment events in the Sandbox environment. This endpoint will trigger the corresponding payment status webhook.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sandboxPaymentSimulate({
    body: { paymentId: "some example string", webhook: "some example string", status: "some example string" },
  });
  // TODO: Handle 'response' of type SandboxPaymentSimulateResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.SandboxPaymentSimulateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sandboxPaymentSimulate({
  body: { paymentId: "some example string", webhook: "some example string", status: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SandboxPaymentSimulateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SandboxPaymentSimulateRequest](src/models/sandbox-payment-simulate-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sandboxPaymentSimulate(request)`

- **OnSuccess**: <code>[SandboxPaymentSimulateResponse](src/models/sandbox-payment-simulate-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.SandboxPaymentSimulateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sandboxPaymentSimulate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SandboxPaymentSimulateResponse, ThePlaidApiClient.SandboxPaymentSimulateError&gt;</code>, with `result.value` of type <code>[SandboxPaymentSimulateResponse](src/models/sandbox-payment-simulate-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sandboxProcessorTokenCreate(request: ThePlaidApiClient.SandboxProcessorTokenCreateRequestParams, options?: RequestOptions): ApiPromise&lt;SandboxProcessorTokenCreateResponse, ThePlaidApiClient.SandboxProcessorTokenCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use the `/sandbox/processor_token/create` endpoint to create a valid `processor_token` for an arbitrary institution ID and test credentials. The created `processor_token` corresponds to a new Sandbox Item. You can then use this `processor_token` with the `/processor/` API endpoints in Sandbox. You can also use `/sandbox/processor_token/create` with the [`user_custom` test username](https://plaid.com/docs/sandbox/user-custom) to generate a test account with custom data.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sandboxProcessorTokenCreate({
    body: { institutionId: "some example string" },
  });
  // TODO: Handle 'response' of type SandboxProcessorTokenCreateResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.SandboxProcessorTokenCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sandboxProcessorTokenCreate({
  body: { institutionId: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SandboxProcessorTokenCreateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SandboxProcessorTokenCreateRequest](src/models/sandbox-processor-token-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sandboxProcessorTokenCreate(request)`

- **OnSuccess**: <code>[SandboxProcessorTokenCreateResponse](src/models/sandbox-processor-token-create-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.SandboxProcessorTokenCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sandboxProcessorTokenCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SandboxProcessorTokenCreateResponse, ThePlaidApiClient.SandboxProcessorTokenCreateError&gt;</code>, with `result.value` of type <code>[SandboxProcessorTokenCreateResponse](src/models/sandbox-processor-token-create-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sandboxPublicTokenCreate(request: ThePlaidApiClient.SandboxPublicTokenCreateRequestParams, options?: RequestOptions): ApiPromise&lt;SandboxPublicTokenCreateResponse, ThePlaidApiClient.SandboxPublicTokenCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use the `/sandbox/public_token/create` endpoint to create a valid `public_token`  for an arbitrary institution ID, initial products, and test credentials. The created `public_token` maps to a new Sandbox Item. You can then call `/item/public_token/exchange` to exchange the `public_token` for an `access_token` and perform all API actions. `/sandbox/public_token/create` can also be used with the [`user_custom` test username](https://plaid.com/docs/sandbox/user-custom) to generate a test account with custom data, or with Plaid's [pre-populated Sandbox test accounts](https://plaid.com/docs/sandbox/test-credentials/).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sandboxPublicTokenCreate({
    body: { institutionId: "some example string", initialProducts: [Products.Assets] },
  });
  // TODO: Handle 'response' of type SandboxPublicTokenCreateResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.SandboxPublicTokenCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sandboxPublicTokenCreate({
  body: { institutionId: "some example string", initialProducts: [Products.Assets] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SandboxPublicTokenCreateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SandboxPublicTokenCreateRequest](src/models/sandbox-public-token-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sandboxPublicTokenCreate(request)`

- **OnSuccess**: <code>[SandboxPublicTokenCreateResponse](src/models/sandbox-public-token-create-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.SandboxPublicTokenCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sandboxPublicTokenCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SandboxPublicTokenCreateResponse, ThePlaidApiClient.SandboxPublicTokenCreateError&gt;</code>, with `result.value` of type <code>[SandboxPublicTokenCreateResponse](src/models/sandbox-public-token-create-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sandboxTransactionsCreate(request: ThePlaidApiClient.SandboxTransactionsCreateRequestParams, options?: RequestOptions): ApiPromise&lt;SandboxTransactionsCreateResponse, ThePlaidApiClient.SandboxTransactionsCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use the `/sandbox/transactions/create` endpoint to create new transactions for an existing Item. This endpoint can be used to add up to 10 transactions to any Item at a time.

This endpoint can only be used with Items that were created in the Sandbox environment using the `user_transactions_dynamic` test user. You can use this to add transactions to test the `/transactions/get` and `/transactions/sync` endpoints.

Custom transactions are only applied to the depository account. Support for per-account targeting may be added in the future.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sandboxTransactionsCreate({
    body: {
      accessToken: "some example string",
      transactions: [
        {
          dateTransacted: "2024-01-15",
          datePosted: "2024-01-15",
          amount: 1.5,
          description: "some example string",
        },
      ],
    },
  });
  // TODO: Handle 'response' of type SandboxTransactionsCreateResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.SandboxTransactionsCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sandboxTransactionsCreate({
  body: {
    accessToken: "some example string",
    transactions: [
      {
        dateTransacted: "2024-01-15",
        datePosted: "2024-01-15",
        amount: 1.5,
        description: "some example string",
      },
    ],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SandboxTransactionsCreateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SandboxTransactionsCreateRequest](src/models/sandbox-transactions-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sandboxTransactionsCreate(request)`

- **OnSuccess**: <code>[SandboxTransactionsCreateResponse](src/models/sandbox-transactions-create-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.SandboxTransactionsCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sandboxTransactionsCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SandboxTransactionsCreateResponse, ThePlaidApiClient.SandboxTransactionsCreateError&gt;</code>, with `result.value` of type <code>[SandboxTransactionsCreateResponse](src/models/sandbox-transactions-create-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sandboxTransferFireWebhook(request: ThePlaidApiClient.SandboxTransferFireWebhookRequestParams, options?: RequestOptions): ApiPromise&lt;SandboxTransferFireWebhookResponse, ThePlaidApiClient.SandboxTransferFireWebhookError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use the `/sandbox/transfer/fire_webhook` endpoint to manually trigger a `TRANSFER_EVENTS_UPDATE` webhook in the Sandbox environment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sandboxTransferFireWebhook({ body: { webhook: "some example string" } });
  // TODO: Handle 'response' of type SandboxTransferFireWebhookResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.SandboxTransferFireWebhookError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sandboxTransferFireWebhook({
  body: { webhook: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SandboxTransferFireWebhookResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SandboxTransferFireWebhookRequest](src/models/sandbox-transfer-fire-webhook-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sandboxTransferFireWebhook(request)`

- **OnSuccess**: <code>[SandboxTransferFireWebhookResponse](src/models/sandbox-transfer-fire-webhook-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.SandboxTransferFireWebhookError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sandboxTransferFireWebhook(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SandboxTransferFireWebhookResponse, ThePlaidApiClient.SandboxTransferFireWebhookError&gt;</code>, with `result.value` of type <code>[SandboxTransferFireWebhookResponse](src/models/sandbox-transfer-fire-webhook-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sandboxTransferLedgerDepositSimulate(request: ThePlaidApiClient.SandboxTransferLedgerDepositSimulateRequestParams, options?: RequestOptions): ApiPromise&lt;SandboxTransferLedgerDepositSimulateResponse, ThePlaidApiClient.SandboxTransferLedgerDepositSimulateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use the `/sandbox/transfer/ledger/deposit/simulate` endpoint to simulate a ledger deposit event in the Sandbox environment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sandboxTransferLedgerDepositSimulate({
    body: { sweepId: "some example string", eventType: TransferLedgerSweepSimulateEventType.SweepPosted },
  });
  // TODO: Handle 'response' of type SandboxTransferLedgerDepositSimulateResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.SandboxTransferLedgerDepositSimulateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sandboxTransferLedgerDepositSimulate({
  body: { sweepId: "some example string", eventType: TransferLedgerSweepSimulateEventType.SweepPosted },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SandboxTransferLedgerDepositSimulateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SandboxTransferLedgerDepositSimulateRequest](src/models/sandbox-transfer-ledger-deposit-simulate-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sandboxTransferLedgerDepositSimulate(request)`

- **OnSuccess**: <code>[SandboxTransferLedgerDepositSimulateResponse](src/models/sandbox-transfer-ledger-deposit-simulate-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.SandboxTransferLedgerDepositSimulateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sandboxTransferLedgerDepositSimulate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SandboxTransferLedgerDepositSimulateResponse, ThePlaidApiClient.SandboxTransferLedgerDepositSimulateError&gt;</code>, with `result.value` of type <code>[SandboxTransferLedgerDepositSimulateResponse](src/models/sandbox-transfer-ledger-deposit-simulate-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sandboxTransferLedgerSimulateAvailable(request: ThePlaidApiClient.SandboxTransferLedgerSimulateAvailableRequestParams, options?: RequestOptions): ApiPromise&lt;SandboxTransferLedgerSimulateAvailableResponse, ThePlaidApiClient.SandboxTransferLedgerSimulateAvailableError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use the `/sandbox/transfer/ledger/simulate_available` endpoint to simulate converting pending balance to available balance for all originators in the Sandbox environment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sandboxTransferLedgerSimulateAvailable({ body: {} });
  // TODO: Handle 'response' of type SandboxTransferLedgerSimulateAvailableResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.SandboxTransferLedgerSimulateAvailableError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sandboxTransferLedgerSimulateAvailable({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SandboxTransferLedgerSimulateAvailableResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SandboxTransferLedgerSimulateAvailableRequest](src/models/sandbox-transfer-ledger-simulate-available-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sandboxTransferLedgerSimulateAvailable(request)`

- **OnSuccess**: <code>[SandboxTransferLedgerSimulateAvailableResponse](src/models/sandbox-transfer-ledger-simulate-available-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.SandboxTransferLedgerSimulateAvailableError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sandboxTransferLedgerSimulateAvailable(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SandboxTransferLedgerSimulateAvailableResponse, ThePlaidApiClient.SandboxTransferLedgerSimulateAvailableError&gt;</code>, with `result.value` of type <code>[SandboxTransferLedgerSimulateAvailableResponse](src/models/sandbox-transfer-ledger-simulate-available-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sandboxTransferLedgerWithdrawSimulate(request: ThePlaidApiClient.SandboxTransferLedgerWithdrawSimulateRequestParams, options?: RequestOptions): ApiPromise&lt;SandboxTransferLedgerWithdrawSimulateResponse, ThePlaidApiClient.SandboxTransferLedgerWithdrawSimulateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use the `/sandbox/transfer/ledger/withdraw/simulate` endpoint to simulate a ledger withdraw event in the Sandbox environment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sandboxTransferLedgerWithdrawSimulate({
    body: { sweepId: "some example string", eventType: TransferLedgerSweepSimulateEventType.SweepPosted },
  });
  // TODO: Handle 'response' of type SandboxTransferLedgerWithdrawSimulateResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.SandboxTransferLedgerWithdrawSimulateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sandboxTransferLedgerWithdrawSimulate({
  body: { sweepId: "some example string", eventType: TransferLedgerSweepSimulateEventType.SweepPosted },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SandboxTransferLedgerWithdrawSimulateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SandboxTransferLedgerWithdrawSimulateRequest](src/models/sandbox-transfer-ledger-withdraw-simulate-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sandboxTransferLedgerWithdrawSimulate(request)`

- **OnSuccess**: <code>[SandboxTransferLedgerWithdrawSimulateResponse](src/models/sandbox-transfer-ledger-withdraw-simulate-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.SandboxTransferLedgerWithdrawSimulateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sandboxTransferLedgerWithdrawSimulate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SandboxTransferLedgerWithdrawSimulateResponse, ThePlaidApiClient.SandboxTransferLedgerWithdrawSimulateError&gt;</code>, with `result.value` of type <code>[SandboxTransferLedgerWithdrawSimulateResponse](src/models/sandbox-transfer-ledger-withdraw-simulate-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sandboxTransferRefundSimulate(request: ThePlaidApiClient.SandboxTransferRefundSimulateRequestParams, options?: RequestOptions): ApiPromise&lt;SandboxTransferRefundSimulateResponse, ThePlaidApiClient.SandboxTransferRefundSimulateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use the `/sandbox/transfer/refund/simulate` endpoint to simulate a refund event in the Sandbox environment.  Note that while an event will be simulated and will appear when using endpoints such as `/transfer/event/sync` or `/transfer/event/list`, no transactions will actually take place and funds will not move between accounts, even within the Sandbox.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sandboxTransferRefundSimulate({
    body: { refundId: "some example string", eventType: "some example string" },
  });
  // TODO: Handle 'response' of type SandboxTransferRefundSimulateResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.SandboxTransferRefundSimulateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sandboxTransferRefundSimulate({
  body: { refundId: "some example string", eventType: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SandboxTransferRefundSimulateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SandboxTransferRefundSimulateRequest](src/models/sandbox-transfer-refund-simulate-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sandboxTransferRefundSimulate(request)`

- **OnSuccess**: <code>[SandboxTransferRefundSimulateResponse](src/models/sandbox-transfer-refund-simulate-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.SandboxTransferRefundSimulateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sandboxTransferRefundSimulate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SandboxTransferRefundSimulateResponse, ThePlaidApiClient.SandboxTransferRefundSimulateError&gt;</code>, with `result.value` of type <code>[SandboxTransferRefundSimulateResponse](src/models/sandbox-transfer-refund-simulate-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sandboxTransferRepaymentSimulate(request: ThePlaidApiClient.SandboxTransferRepaymentSimulateRequestParams, options?: RequestOptions): ApiPromise&lt;SandboxTransferRepaymentSimulateResponse, ThePlaidApiClient.SandboxTransferRepaymentSimulateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use the `/sandbox/transfer/repayment/simulate` endpoint to trigger the creation of a repayment. As a side effect of calling this route, a repayment is created that includes all unreimbursed returns of guaranteed transfers. If there are no such returns, a 400 error is returned.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sandboxTransferRepaymentSimulate({ body: {} });
  // TODO: Handle 'response' of type SandboxTransferRepaymentSimulateResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.SandboxTransferRepaymentSimulateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sandboxTransferRepaymentSimulate({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SandboxTransferRepaymentSimulateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SandboxTransferRepaymentSimulateRequest](src/models/sandbox-transfer-repayment-simulate-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sandboxTransferRepaymentSimulate(request)`

- **OnSuccess**: <code>[SandboxTransferRepaymentSimulateResponse](src/models/sandbox-transfer-repayment-simulate-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.SandboxTransferRepaymentSimulateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sandboxTransferRepaymentSimulate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SandboxTransferRepaymentSimulateResponse, ThePlaidApiClient.SandboxTransferRepaymentSimulateError&gt;</code>, with `result.value` of type <code>[SandboxTransferRepaymentSimulateResponse](src/models/sandbox-transfer-repayment-simulate-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sandboxTransferSimulate(request: ThePlaidApiClient.SandboxTransferSimulateRequestParams, options?: RequestOptions): ApiPromise&lt;SandboxTransferSimulateResponse, ThePlaidApiClient.SandboxTransferSimulateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use the `/sandbox/transfer/simulate` endpoint to simulate a transfer event in the Sandbox environment.  Note that while an event will be simulated and will appear when using endpoints such as `/transfer/event/sync` or `/transfer/event/list`, no transactions will actually take place and funds will not move between accounts, even within the Sandbox.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sandboxTransferSimulate({
    body: { transferId: "some example string", eventType: "some example string" },
  });
  // TODO: Handle 'response' of type SandboxTransferSimulateResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.SandboxTransferSimulateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sandboxTransferSimulate({
  body: { transferId: "some example string", eventType: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SandboxTransferSimulateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SandboxTransferSimulateRequest](src/models/sandbox-transfer-simulate-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sandboxTransferSimulate(request)`

- **OnSuccess**: <code>[SandboxTransferSimulateResponse](src/models/sandbox-transfer-simulate-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.SandboxTransferSimulateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sandboxTransferSimulate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SandboxTransferSimulateResponse, ThePlaidApiClient.SandboxTransferSimulateError&gt;</code>, with `result.value` of type <code>[SandboxTransferSimulateResponse](src/models/sandbox-transfer-simulate-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sandboxTransferSweepSimulate(request: ThePlaidApiClient.SandboxTransferSweepSimulateRequestParams, options?: RequestOptions): ApiPromise&lt;SandboxTransferSweepSimulateResponse, ThePlaidApiClient.SandboxTransferSweepSimulateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use the `/sandbox/transfer/sweep/simulate` endpoint to create a sweep and associated events in the Sandbox environment. Upon calling this endpoint, all transfers with a sweep status of `swept` will become `swept_settled`, all `posted` or `pending` transfers with a sweep status of `unswept` will become `swept`, and all `returned` transfers with a sweep status of `swept` will become `return_swept`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sandboxTransferSweepSimulate({ body: {} });
  // TODO: Handle 'response' of type SandboxTransferSweepSimulateResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.SandboxTransferSweepSimulateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sandboxTransferSweepSimulate({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SandboxTransferSweepSimulateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SandboxTransferSweepSimulateRequest](src/models/sandbox-transfer-sweep-simulate-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sandboxTransferSweepSimulate(request)`

- **OnSuccess**: <code>[SandboxTransferSweepSimulateResponse](src/models/sandbox-transfer-sweep-simulate-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.SandboxTransferSweepSimulateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sandboxTransferSweepSimulate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SandboxTransferSweepSimulateResponse, ThePlaidApiClient.SandboxTransferSweepSimulateError&gt;</code>, with `result.value` of type <code>[SandboxTransferSweepSimulateResponse](src/models/sandbox-transfer-sweep-simulate-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sandboxTransferTestClockAdvance(request: ThePlaidApiClient.SandboxTransferTestClockAdvanceRequestParams, options?: RequestOptions): ApiPromise&lt;SandboxTransferTestClockAdvanceResponse, ThePlaidApiClient.SandboxTransferTestClockAdvanceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use the `/sandbox/transfer/test_clock/advance` endpoint to advance a `test_clock` in the Sandbox environment.

A test clock object represents an independent timeline and has a `virtual_time` field indicating the current timestamp of the timeline. A test clock can be advanced by incrementing `virtual_time`, but may never go back to a lower `virtual_time`.

If a test clock is advanced, we will simulate the changes that ought to occur during the time that elapsed.

For example, a client creates a weekly recurring transfer with a test clock set at t. When the client advances the test clock by setting `virtual_time` = t + 15 days, 2 new originations should be created, along with the webhook events.

The advancement of the test clock from its current `virtual_time` should be limited such that there are no more than 20 originations resulting from the advance operation on each `recurring_transfer` associated with the `test_clock`.

For example, if the recurring transfer associated with this test clock originates once every 4 weeks, you can advance the `virtual_time` up to 80 weeks on each API call.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sandboxTransferTestClockAdvance({
    body: { testClockId: "some example string", newVirtualTime: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)) },
  });
  // TODO: Handle 'response' of type SandboxTransferTestClockAdvanceResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.SandboxTransferTestClockAdvanceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sandboxTransferTestClockAdvance({
  body: { testClockId: "some example string", newVirtualTime: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)) },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SandboxTransferTestClockAdvanceResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SandboxTransferTestClockAdvanceRequest](src/models/sandbox-transfer-test-clock-advance-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sandboxTransferTestClockAdvance(request)`

- **OnSuccess**: <code>[SandboxTransferTestClockAdvanceResponse](src/models/sandbox-transfer-test-clock-advance-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.SandboxTransferTestClockAdvanceError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sandboxTransferTestClockAdvance(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SandboxTransferTestClockAdvanceResponse, ThePlaidApiClient.SandboxTransferTestClockAdvanceError&gt;</code>, with `result.value` of type <code>[SandboxTransferTestClockAdvanceResponse](src/models/sandbox-transfer-test-clock-advance-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sandboxTransferTestClockCreate(request: ThePlaidApiClient.SandboxTransferTestClockCreateRequestParams, options?: RequestOptions): ApiPromise&lt;SandboxTransferTestClockCreateResponse, ThePlaidApiClient.SandboxTransferTestClockCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use the `/sandbox/transfer/test_clock/create` endpoint to create a `test_clock` in the Sandbox environment.

A test clock object represents an independent timeline and has a `virtual_time` field indicating the current timestamp of the timeline. Test clocks are used for testing recurring transfers in Sandbox.

A test clock can be associated with up to 5 recurring transfers.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sandboxTransferTestClockCreate({ body: {} });
  // TODO: Handle 'response' of type SandboxTransferTestClockCreateResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.SandboxTransferTestClockCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sandboxTransferTestClockCreate({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SandboxTransferTestClockCreateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SandboxTransferTestClockCreateRequest](src/models/sandbox-transfer-test-clock-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sandboxTransferTestClockCreate(request)`

- **OnSuccess**: <code>[SandboxTransferTestClockCreateResponse](src/models/sandbox-transfer-test-clock-create-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.SandboxTransferTestClockCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sandboxTransferTestClockCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SandboxTransferTestClockCreateResponse, ThePlaidApiClient.SandboxTransferTestClockCreateError&gt;</code>, with `result.value` of type <code>[SandboxTransferTestClockCreateResponse](src/models/sandbox-transfer-test-clock-create-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sandboxTransferTestClockGet(request: ThePlaidApiClient.SandboxTransferTestClockGetRequestParams, options?: RequestOptions): ApiPromise&lt;SandboxTransferTestClockGetResponse, ThePlaidApiClient.SandboxTransferTestClockGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use the `/sandbox/transfer/test_clock/get` endpoint to get a `test_clock` in the Sandbox environment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sandboxTransferTestClockGet({ body: { testClockId: "some example string" } });
  // TODO: Handle 'response' of type SandboxTransferTestClockGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.SandboxTransferTestClockGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sandboxTransferTestClockGet({
  body: { testClockId: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SandboxTransferTestClockGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SandboxTransferTestClockGetRequest](src/models/sandbox-transfer-test-clock-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sandboxTransferTestClockGet(request)`

- **OnSuccess**: <code>[SandboxTransferTestClockGetResponse](src/models/sandbox-transfer-test-clock-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.SandboxTransferTestClockGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sandboxTransferTestClockGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SandboxTransferTestClockGetResponse, ThePlaidApiClient.SandboxTransferTestClockGetError&gt;</code>, with `result.value` of type <code>[SandboxTransferTestClockGetResponse](src/models/sandbox-transfer-test-clock-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sandboxTransferTestClockList(request: ThePlaidApiClient.SandboxTransferTestClockListRequestParams, options?: RequestOptions): ApiPromise&lt;SandboxTransferTestClockListResponse, ThePlaidApiClient.SandboxTransferTestClockListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use the `/sandbox/transfer/test_clock/list` endpoint to see a list of all your test clocks in the Sandbox environment, by ascending `virtual_time`. Results are paginated; use the `count` and `offset` query parameters to retrieve the desired test clocks.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sandboxTransferTestClockList({ body: {} });
  // TODO: Handle 'response' of type SandboxTransferTestClockListResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.SandboxTransferTestClockListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sandboxTransferTestClockList({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SandboxTransferTestClockListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SandboxTransferTestClockListRequest](src/models/sandbox-transfer-test-clock-list-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sandboxTransferTestClockList(request)`

- **OnSuccess**: <code>[SandboxTransferTestClockListResponse](src/models/sandbox-transfer-test-clock-list-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.SandboxTransferTestClockListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sandboxTransferTestClockList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SandboxTransferTestClockListResponse, ThePlaidApiClient.SandboxTransferTestClockListError&gt;</code>, with `result.value` of type <code>[SandboxTransferTestClockListResponse](src/models/sandbox-transfer-test-clock-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sandboxUserResetLogin(request: ThePlaidApiClient.SandboxUserResetLoginRequestParams, options?: RequestOptions): ApiPromise&lt;SandboxUserResetLoginResponse, ThePlaidApiClient.SandboxUserResetLoginError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

`/sandbox/user/reset_login` functions the same as `/sandbox/item/reset_login`, but will modify Items related to a User. This endpoint forces each Item into an `ITEM_LOGIN_REQUIRED` state in order to simulate an Item whose login is no longer valid. This makes it easy to test Link's [update mode](https://plaid.com/docs/link/update-mode) flow in the Sandbox environment.  After calling `/sandbox/user/reset_login`, you can then use Plaid Link update mode to restore Items associated with the User to a good state. An `ITEM_LOGIN_REQUIRED` webhook will also be fired after a call to this endpoint, if one is associated with the Item.
In the Sandbox, Items will transition to an `ITEM_LOGIN_REQUIRED` error state automatically after 30 days, even if this endpoint is not called.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sandboxUserResetLogin({ body: {} });
  // TODO: Handle 'response' of type SandboxUserResetLoginResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.SandboxUserResetLoginError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sandboxUserResetLogin({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SandboxUserResetLoginResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SandboxUserResetLoginRequest](src/models/sandbox-user-reset-login-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sandboxUserResetLogin(request)`

- **OnSuccess**: <code>[SandboxUserResetLoginResponse](src/models/sandbox-user-reset-login-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.SandboxUserResetLoginError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sandboxUserResetLogin(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SandboxUserResetLoginResponse, ThePlaidApiClient.SandboxUserResetLoginError&gt;</code>, with `result.value` of type <code>[SandboxUserResetLoginResponse](src/models/sandbox-user-reset-login-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sessionTokenCreate(request: ThePlaidApiClient.SessionTokenCreateRequestParams, options?: RequestOptions): ApiPromise&lt;SessionTokenCreateResponse, ThePlaidApiClient.SessionTokenCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

`/session/token/create` is used to create a Link token for Layer. The returned Link token is used as a parameter when initializing the Link SDK. For more details, see the [Link flow overview](https://plaid.com/docs/link/#link-flow-overview).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sessionTokenCreate({ body: { templateId: "some example string" } });
  // TODO: Handle 'response' of type SessionTokenCreateResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.SessionTokenCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sessionTokenCreate({ body: { templateId: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SessionTokenCreateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SessionTokenCreateRequest](src/models/session-token-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sessionTokenCreate(request)`

- **OnSuccess**: <code>[SessionTokenCreateResponse](src/models/session-token-create-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.SessionTokenCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sessionTokenCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SessionTokenCreateResponse, ThePlaidApiClient.SessionTokenCreateError&gt;</code>, with `result.value` of type <code>[SessionTokenCreateResponse](src/models/session-token-create-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>signalDecisionReport(request: ThePlaidApiClient.SignalDecisionReportRequestParams, options?: RequestOptions): ApiPromise&lt;SignalDecisionReportResponse, ThePlaidApiClient.SignalDecisionReportError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

After you call `/signal/evaluate`, Plaid will normally infer the outcome from your Signal Rules. However, if you are not using Signal Rules, if the Signal Rules outcome was `REVIEW`, or if you take a different action than the one determined by the Signal Rules, you will need to call `/signal/decision/report`. This helps improve Signal Transaction Score accuracy for your account and is necessary for proper functioning of the rule performance and rule tuning capabilities in the Dashboard. If your effective decision changes after calling `/signal/decision/report` (for example, you indicated that you accepted a transaction, but later on, your payment processor rejected it, so it was never initiated), call `/signal/decision/report` again for the transaction to correct Plaid's records.

If you are using Plaid Transfer as your payment processor, you also do not need to call `/signal/decision/report`, as Plaid can infer outcomes from your Transfer activity.

If using a Balance-only ruleset, this endpoint will not impact scores (Balance does not use scores), but is necessary to view accurate transaction outcomes and tune rule logic in the Dashboard.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.signalDecisionReport({
    body: { clientTransactionId: "some example string", initiated: true },
  });
  // TODO: Handle 'response' of type SignalDecisionReportResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.SignalDecisionReportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signalDecisionReport({
  body: { clientTransactionId: "some example string", initiated: true },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SignalDecisionReportResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SignalDecisionReportRequest](src/models/signal-decision-report-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signalDecisionReport(request)`

- **OnSuccess**: <code>[SignalDecisionReportResponse](src/models/signal-decision-report-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.SignalDecisionReportError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.signalDecisionReport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SignalDecisionReportResponse, ThePlaidApiClient.SignalDecisionReportError&gt;</code>, with `result.value` of type <code>[SignalDecisionReportResponse](src/models/signal-decision-report-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>signalEvaluate(request: ThePlaidApiClient.SignalEvaluateRequestParams, options?: RequestOptions): ApiPromise&lt;SignalEvaluateResponse, ThePlaidApiClient.SignalEvaluateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use `/signal/evaluate` to evaluate a planned ACH transaction to get a return risk assessment and additional risk signals.

Before using `/signal/evaluate`, you must first [create a ruleset](https://plaid.com/docs/signal/signal-rules/) in the Dashboard under [**Signal->Rules**](https://dashboard.plaid.com/signal/risk-profiles).

`/signal/evaluate` can be used with either Signal Transaction Scores or the Balance product. Which product is used will be determined by the `ruleset_key` that you provide. For more details, see [Signal Rules](https://plaid.com/docs/signal/signal-rules/).

Note: This request may have higher latency when using a Balance-only ruleset. This is because Plaid must communicate directly with the institution to request data. Balance-only rulesets may have latency of up to 30 seconds or more; if you encounter errors, you may find it necessary to adjust your timeout period when making requests.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.signalEvaluate({
    body: {
      accessToken: "some example string",
      accountId: "some example string",
      clientTransactionId: "some example string",
      amount: 1.5,
    },
  });
  // TODO: Handle 'response' of type SignalEvaluateResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.SignalEvaluateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signalEvaluate({
  body: {
    accessToken: "some example string",
    accountId: "some example string",
    clientTransactionId: "some example string",
    amount: 1.5,
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SignalEvaluateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SignalEvaluateRequest](src/models/signal-evaluate-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signalEvaluate(request)`

- **OnSuccess**: <code>[SignalEvaluateResponse](src/models/signal-evaluate-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.SignalEvaluateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.signalEvaluate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SignalEvaluateResponse, ThePlaidApiClient.SignalEvaluateError&gt;</code>, with `result.value` of type <code>[SignalEvaluateResponse](src/models/signal-evaluate-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>signalPrepare(request: ThePlaidApiClient.SignalPrepareRequestParams, options?: RequestOptions): ApiPromise&lt;SignalPrepareResponse, ThePlaidApiClient.SignalPrepareError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

When an Item is not initialized with `signal`, call `/signal/prepare` to opt-in that Item to the data collection process used to develop a Signal Transaction Score. This should be done on Items where `signal` was added in the `additional_consented_products` array but not in the `products`, `optional_products`, or `required_if_supported_products` array. If `/signal/prepare` is skipped on an Item that is not initialized with `signal`, the initial call to `/signal/evaluate` on that Item will be less accurate, because Plaid will have access to less data for computing the Signal Transaction Score.

If your integration is purely Balance-only, this endpoint will have no effect, as Balance-only rulesets do not calculate a Signal Transaction Score.

If run on an Item that is already initialized with `signal`, this endpoint will return a 200 response and will not modify the Item.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.signalPrepare({ body: { accessToken: "some example string" } });
  // TODO: Handle 'response' of type SignalPrepareResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.SignalPrepareError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signalPrepare({ body: { accessToken: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SignalPrepareResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SignalPrepareRequest](src/models/signal-prepare-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signalPrepare(request)`

- **OnSuccess**: <code>[SignalPrepareResponse](src/models/signal-prepare-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.SignalPrepareError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.signalPrepare(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SignalPrepareResponse, ThePlaidApiClient.SignalPrepareError&gt;</code>, with `result.value` of type <code>[SignalPrepareResponse](src/models/signal-prepare-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>signalReturnReport(request: ThePlaidApiClient.SignalReturnReportRequestParams, options?: RequestOptions): ApiPromise&lt;SignalReturnReportResponse, ThePlaidApiClient.SignalReturnReportError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Call the `/signal/return/report` endpoint to report a returned transaction that was previously sent to the `/signal/evaluate` endpoint. Your feedback will be used by the model to incorporate the latest risk trends into your scores and tune rule logic. If using a Balance-only ruleset, this endpoint will not impact scores (as Balance does not use scores), but is necessary to view accurate transaction outcomes and tune rule logic in the Dashboard.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.signalReturnReport({
    body: { clientTransactionId: "some example string", returnCode: "some example string" },
  });
  // TODO: Handle 'response' of type SignalReturnReportResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.SignalReturnReportError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signalReturnReport({
  body: { clientTransactionId: "some example string", returnCode: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SignalReturnReportResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SignalReturnReportRequest](src/models/signal-return-report-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signalReturnReport(request)`

- **OnSuccess**: <code>[SignalReturnReportResponse](src/models/signal-return-report-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.SignalReturnReportError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.signalReturnReport(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SignalReturnReportResponse, ThePlaidApiClient.SignalReturnReportError&gt;</code>, with `result.value` of type <code>[SignalReturnReportResponse](src/models/signal-return-report-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>signalSchedule(request: ThePlaidApiClient.SignalScheduleRequestParams, options?: RequestOptions): ApiPromise&lt;SignalScheduleResponse, ThePlaidApiClient.SignalScheduleError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use `/signal/schedule` to schedule a planned ACH transaction.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.signalSchedule({
    body: {
      accessToken: "some example string",
      accountId: "some example string",
      clientTransactionId: "some example string",
      amount: 1.5,
    },
  });
  // TODO: Handle 'response' of type SignalScheduleResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.SignalScheduleError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.signalSchedule({
  body: {
    accessToken: "some example string",
    accountId: "some example string",
    clientTransactionId: "some example string",
    amount: 1.5,
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SignalScheduleResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SignalScheduleRequest](src/models/signal-schedule-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.signalSchedule(request)`

- **OnSuccess**: <code>[SignalScheduleResponse](src/models/signal-schedule-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.SignalScheduleError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.signalSchedule(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SignalScheduleResponse, ThePlaidApiClient.SignalScheduleError&gt;</code>, with `result.value` of type <code>[SignalScheduleResponse](src/models/signal-schedule-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>statementsDownload(request: ThePlaidApiClient.StatementsDownloadRequestParams, options?: RequestOptions): ApiPromise&lt;undefined, ThePlaidApiClient.StatementsDownloadError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/statements/download` endpoint retrieves a single statement PDF in binary format.  The response will contain a `Plaid-Content-Hash` header containing a SHA 256 checksum of the statement. This can be used to verify that the file being sent by Plaid is the same file that was downloaded to your system.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.statementsDownload({
    body: { accessToken: "some example string", statementId: "some example string" },
  });
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.StatementsDownloadError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.statementsDownload({
  body: { accessToken: "some example string", statementId: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[StatementsDownloadRequest](src/models/statements-download-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.statementsDownload(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[ThePlaidApiClient.StatementsDownloadError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.statementsDownload(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, ThePlaidApiClient.StatementsDownloadError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>statementsList(request: ThePlaidApiClient.StatementsListRequestParams, options?: RequestOptions): ApiPromise&lt;StatementsListResponse, ThePlaidApiClient.StatementsListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/statements/list` endpoint retrieves a list of all statements associated with an Item.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.statementsList({ body: { accessToken: "some example string" } });
  // TODO: Handle 'response' of type StatementsListResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.StatementsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.statementsList({ body: { accessToken: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StatementsListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[StatementsListRequest](src/models/statements-list-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.statementsList(request)`

- **OnSuccess**: <code>[StatementsListResponse](src/models/statements-list-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.StatementsListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.statementsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StatementsListResponse, ThePlaidApiClient.StatementsListError&gt;</code>, with `result.value` of type <code>[StatementsListResponse](src/models/statements-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>statementsRefresh(request: ThePlaidApiClient.StatementsRefreshRequestParams, options?: RequestOptions): ApiPromise&lt;StatementsRefreshResponse, ThePlaidApiClient.StatementsRefreshError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

`/statements/refresh` initiates an on-demand extraction to fetch the statements for the provided dates.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.statementsRefresh({
    body: { accessToken: "some example string", startDate: "2024-01-15", endDate: "2024-01-15" },
  });
  // TODO: Handle 'response' of type StatementsRefreshResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.StatementsRefreshError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.statementsRefresh({
  body: { accessToken: "some example string", startDate: "2024-01-15", endDate: "2024-01-15" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StatementsRefreshResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[StatementsRefreshRequest](src/models/statements-refresh-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.statementsRefresh(request)`

- **OnSuccess**: <code>[StatementsRefreshResponse](src/models/statements-refresh-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.StatementsRefreshError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.statementsRefresh(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StatementsRefreshResponse, ThePlaidApiClient.StatementsRefreshError&gt;</code>, with `result.value` of type <code>[StatementsRefreshResponse](src/models/statements-refresh-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>transactionsEnhance(request: ThePlaidApiClient.TransactionsEnhanceRequest, options?: RequestOptions): ApiPromise&lt;TransactionsEnhanceGetResponse, ThePlaidApiClient.TransactionsEnhanceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/beta/transactions/v1/enhance` endpoint enriches raw transaction data provided directly by clients.

The product is currently in beta.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transactionsEnhance({
    body: {
      accountType: "some example string",
      transactions: [
        {
          id: "some example string",
          description: "some example string",
          amount: 1.5,
          isoCurrencyCode: "some example string",
        },
      ],
    },
  });
  // TODO: Handle 'response' of type TransactionsEnhanceGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.TransactionsEnhanceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transactionsEnhance({
  body: {
    accountType: "some example string",
    transactions: [
      {
        id: "some example string",
        description: "some example string",
        amount: 1.5,
        isoCurrencyCode: "some example string",
      },
    ],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransactionsEnhanceGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TransactionsEnhanceGetRequest](src/models/transactions-enhance-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transactionsEnhance(request)`

- **OnSuccess**: <code>[TransactionsEnhanceGetResponse](src/models/transactions-enhance-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.TransactionsEnhanceError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transactionsEnhance(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransactionsEnhanceGetResponse, ThePlaidApiClient.TransactionsEnhanceError&gt;</code>, with `result.value` of type <code>[TransactionsEnhanceGetResponse](src/models/transactions-enhance-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>transactionsEnrich(request: ThePlaidApiClient.TransactionsEnrichRequestParams, options?: RequestOptions): ApiPromise&lt;TransactionsEnrichResponse, ThePlaidApiClient.TransactionsEnrichError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/transactions/enrich` endpoint enriches raw transaction data generated by your own banking products or retrieved from other non-Plaid sources.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transactionsEnrich({
    body: {
      accountType: "some example string",
      transactions: [
        {
          id: "some example string",
          description: "some example string",
          amount: 1.5,
          direction: EnrichTransactionDirection.Inflow,
          isoCurrencyCode: "some example string",
        },
      ],
    },
  });
  // TODO: Handle 'response' of type TransactionsEnrichResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.TransactionsEnrichError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transactionsEnrich({
  body: {
    accountType: "some example string",
    transactions: [
      {
        id: "some example string",
        description: "some example string",
        amount: 1.5,
        direction: EnrichTransactionDirection.Inflow,
        isoCurrencyCode: "some example string",
      },
    ],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransactionsEnrichResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TransactionsEnrichRequest](src/models/transactions-enrich-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transactionsEnrich(request)`

- **OnSuccess**: <code>[TransactionsEnrichResponse](src/models/transactions-enrich-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.TransactionsEnrichError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transactionsEnrich(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransactionsEnrichResponse, ThePlaidApiClient.TransactionsEnrichError&gt;</code>, with `result.value` of type <code>[TransactionsEnrichResponse](src/models/transactions-enrich-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>transactionsGet(request: ThePlaidApiClient.TransactionsGetRequestParams, options?: RequestOptions): ApiPromise&lt;TransactionsGetResponse, ThePlaidApiClient.TransactionsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Note: All new implementations are encouraged to use `/transactions/sync` rather than `/transactions/get`. `/transactions/sync` provides the same functionality as `/transactions/get` and improves developer ease-of-use for handling transactions updates.
The `/transactions/get` endpoint allows developers to receive user-authorized transaction data for credit, depository, and some loan-type accounts (only those with account subtype `student` or `mortgage`; coverage may be limited). For transaction history from investment accounts, use the [Investments endpoint](https://plaid.com/docs/api/products/investments/) instead. Transaction data is standardized across financial institutions, and in many cases transactions are linked to a clean name, entity type, location, and category. Similarly, account data is standardized and returned with a clean name, number, balance, and other meta information where available.
Transactions are returned in reverse-chronological order, and the sequence of transaction ordering is stable and will not shift.  Transactions are not immutable and can also be removed altogether by the institution; a removed transaction will no longer appear in `/transactions/get`.  For more details, see [Pending and posted transactions](https://plaid.com/docs/transactions/transactions-data/#pending-and-posted-transactions).
Due to the potentially large number of transactions associated with an Item, results are paginated. Manipulate the `count` and `offset` parameters in conjunction with the `total_transactions` response body field to fetch all available transactions.
Data returned by `/transactions/get` will be the data available for the Item as of the most recent successful check for new transactions. Plaid typically checks for new data multiple times a day, but these checks may occur less frequently, such as once a day, depending on the institution. To find out when the Item was last updated, use the [Item Debugger](https://plaid.com/docs/account/activity/#troubleshooting-with-item-debugger) or call `/item/get`; the `item.status.transactions.last_successful_update` field will show the timestamp of the most recent successful update. To force Plaid to check for new transactions, you can use the `/transactions/refresh` endpoint.


Note that data may not be immediately available to `/transactions/get`. Plaid will begin to prepare transactions data upon Item link, if Link was initialized with `transactions`, or upon the first call to `/transactions/get`, if it wasn't. To be alerted when transaction data is ready to be fetched, listen for the [`INITIAL_UPDATE`](https://plaid.com/docs/api/products/transactions/#initial_update) and [`HISTORICAL_UPDATE`](https://plaid.com/docs/api/products/transactions/#historical_update) webhooks. If no transaction history is ready when `/transactions/get` is called, it will return a `PRODUCT_NOT_READY` error.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transactionsGet({
    body: { accessToken: "some example string", startDate: "2024-01-15", endDate: "2024-01-15" },
  });
  // TODO: Handle 'response' of type TransactionsGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.TransactionsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transactionsGet({
  body: { accessToken: "some example string", startDate: "2024-01-15", endDate: "2024-01-15" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransactionsGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TransactionsGetRequest](src/models/transactions-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transactionsGet(request)`

- **OnSuccess**: <code>[TransactionsGetResponse](src/models/transactions-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.TransactionsGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transactionsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransactionsGetResponse, ThePlaidApiClient.TransactionsGetError&gt;</code>, with `result.value` of type <code>[TransactionsGetResponse](src/models/transactions-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>transactionsRecurringGet(request: ThePlaidApiClient.TransactionsRecurringGetRequestParams, options?: RequestOptions): ApiPromise&lt;TransactionsRecurringGetResponse, ThePlaidApiClient.TransactionsRecurringGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/transactions/recurring/get` endpoint allows developers to receive a summary of the recurring outflow and inflow streams (expenses and deposits) from a user's checking, savings or credit card accounts. Additionally, Plaid provides key insights about each recurring stream including the category, merchant, last amount, and more. Developers can use these insights to build tools and experiences that help their users better manage cash flow, monitor subscriptions, reduce spend, and stay on track with bill payments.

This endpoint is offered as an add-on to Transactions. To request access to this endpoint, submit a [product access request](https://dashboard.plaid.com/team/products) or contact your Plaid account manager.

This endpoint can only be called on an Item that has already been initialized with Transactions (either during Link, by specifying it in `/link/token/create`; or after Link, by calling `/transactions/get` or `/transactions/sync`).

When using Recurring Transactions, for best results, make sure to use the [`days_requested`](https://plaid.com/docs/api/link/#link-token-create-request-transactions-days-requested) parameter to request at least 180 days of history when initializing Items with Transactions. Once all historical transactions have been fetched, call `/transactions/recurring/get` to receive the Recurring Transactions streams and subscribe to the [`RECURRING_TRANSACTIONS_UPDATE`](https://plaid.com/docs/api/products/transactions/#recurring_transactions_update) webhook. To know when historical transactions have been fetched, if you are using `/transactions/sync` listen for the [`SYNC_UPDATES_AVAILABLE`](https://plaid.com/docs/api/products/transactions/#SyncUpdatesAvailableWebhook-historical-update-complete) webhook and check that the `historical_update_complete` field in the payload is `true`. If using `/transactions/get`, listen for the [`HISTORICAL_UPDATE`](https://plaid.com/docs/api/products/transactions/#historical_update) webhook.

After the initial call, you can call the `/transactions/recurring/get` endpoint at any point in the future to retrieve the latest summary of recurring streams. Listen to the [`RECURRING_TRANSACTIONS_UPDATE`](https://plaid.com/docs/api/products/transactions/#recurring_transactions_update) webhook to be notified when new updates are available.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transactionsRecurringGet({ body: { accessToken: "some example string" } });
  // TODO: Handle 'response' of type TransactionsRecurringGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.TransactionsRecurringGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transactionsRecurringGet({
  body: { accessToken: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransactionsRecurringGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TransactionsRecurringGetRequest](src/models/transactions-recurring-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transactionsRecurringGet(request)`

- **OnSuccess**: <code>[TransactionsRecurringGetResponse](src/models/transactions-recurring-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.TransactionsRecurringGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transactionsRecurringGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransactionsRecurringGetResponse, ThePlaidApiClient.TransactionsRecurringGetError&gt;</code>, with `result.value` of type <code>[TransactionsRecurringGetResponse](src/models/transactions-recurring-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>transactionsRefresh(request: ThePlaidApiClient.TransactionsRefreshRequestParams, options?: RequestOptions): ApiPromise&lt;TransactionsRefreshResponse, ThePlaidApiClient.TransactionsRefreshError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

`/transactions/refresh` is an optional endpoint that initiates an on-demand extraction to fetch the newest transactions for an Item. The on-demand extraction takes place in addition to the periodic extractions that automatically occur one or more times per day for any Transactions-enabled Item. The Item must already have Transactions added as a product in order to call `/transactions/refresh`.

If changes to transactions are discovered after calling `/transactions/refresh`, Plaid will fire a webhook: for `/transactions/sync` users, [`SYNC_UPDATES_AVAILABLE`](https://plaid.com/docs/api/products/transactions/#sync_updates_available) will be fired if there are any transactions updated, added, or removed. For users of both `/transactions/sync` and `/transactions/get`, [`TRANSACTIONS_REMOVED`](https://plaid.com/docs/api/products/transactions/#transactions_removed) will be fired if any removed transactions are detected, and [`DEFAULT_UPDATE`](https://plaid.com/docs/api/products/transactions/#default_update) will be fired if any new transactions are detected. New transactions can be fetched by calling `/transactions/get` or `/transactions/sync`.

Note that the `/transactions/refresh` endpoint is not supported for Capital One (`ins_128026`) non-depository accounts and will result in a `PRODUCTS_NOT_SUPPORTED` error if called on an Item that contains only non-depository accounts from that institution.

As this endpoint triggers a synchronous request for fresh data, latency may be higher than for other Plaid endpoints (typically less than 10 seconds, but occasionally up to 30 seconds or more); if you encounter errors, you may find it necessary to adjust your timeout period when making requests.

`/transactions/refresh` is offered as an optional add-on to Transactions and has a separate [fee model](https://plaid.com/docs/account/billing/#per-request-flat-fee). To request access to this endpoint, submit a [product access request](https://dashboard.plaid.com/team/products) or contact your Plaid account manager.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transactionsRefresh({ body: { accessToken: "some example string" } });
  // TODO: Handle 'response' of type TransactionsRefreshResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.TransactionsRefreshError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transactionsRefresh({
  body: { accessToken: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransactionsRefreshResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TransactionsRefreshRequest](src/models/transactions-refresh-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transactionsRefresh(request)`

- **OnSuccess**: <code>[TransactionsRefreshResponse](src/models/transactions-refresh-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.TransactionsRefreshError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transactionsRefresh(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransactionsRefreshResponse, ThePlaidApiClient.TransactionsRefreshError&gt;</code>, with `result.value` of type <code>[TransactionsRefreshResponse](src/models/transactions-refresh-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>transactionsRulesCreate(request: ThePlaidApiClient.TransactionsRulesCreateRequestParams, options?: RequestOptions): ApiPromise&lt;TransactionsRulesCreateResponse, ThePlaidApiClient.TransactionsRulesCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/beta/transactions/rules/v1/create` endpoint creates transaction categorization rules.

Rules will be applied on the Item's transactions returned in `/transactions/get` response.

The product is currently in beta. To request access, contact transactions-feedback@plaid.com.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transactionsRulesCreate({
    body: {
      clientId: "7f57eb3d2a9j6480121fx361",
      secret: "79g03eoofwl8240v776r2h667442119",
      clientUserId: "your-client-user-id",
      pfcPrimaryCategory: "FOOD_AND_DRINK",
      pfcDetailedCategory: "FOOD_AND_DRINK_FAST_FOOD",
      ruleDetails: {
        field: TransactionsRuleField.MerchantName,
        type: TransactionsRuleType.SubstringMatch,
        query: "Burger Shack",
      },
    },
  });
  // TODO: Handle 'response' of type TransactionsRulesCreateResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.TransactionsRulesCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transactionsRulesCreate({
  body: {
    clientId: "7f57eb3d2a9j6480121fx361",
    secret: "79g03eoofwl8240v776r2h667442119",
    clientUserId: "your-client-user-id",
    pfcPrimaryCategory: "FOOD_AND_DRINK",
    pfcDetailedCategory: "FOOD_AND_DRINK_FAST_FOOD",
    ruleDetails: {
      field: TransactionsRuleField.MerchantName,
      type: TransactionsRuleType.SubstringMatch,
      query: "Burger Shack",
    },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransactionsRulesCreateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TransactionsRulesCreateRequest](src/models/transactions-rules-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transactionsRulesCreate(request)`

- **OnSuccess**: <code>[TransactionsRulesCreateResponse](src/models/transactions-rules-create-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.TransactionsRulesCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transactionsRulesCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransactionsRulesCreateResponse, ThePlaidApiClient.TransactionsRulesCreateError&gt;</code>, with `result.value` of type <code>[TransactionsRulesCreateResponse](src/models/transactions-rules-create-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>transactionsRulesList(request: ThePlaidApiClient.TransactionsRulesListRequestParams, options?: RequestOptions): ApiPromise&lt;TransactionsRulesListResponse, ThePlaidApiClient.TransactionsRulesListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/beta/transactions/rules/v1/list` returns a list of transaction rules created for the Item associated with the access token.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transactionsRulesList({
    body: {
      clientId: "7f57eb3d2a9j6480121fx361",
      secret: "79g03eoofwl8240v776r2h667442119",
      clientUserId: "your-client-user-id",
    },
  });
  // TODO: Handle 'response' of type TransactionsRulesListResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.TransactionsRulesListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transactionsRulesList({
  body: {
    clientId: "7f57eb3d2a9j6480121fx361",
    secret: "79g03eoofwl8240v776r2h667442119",
    clientUserId: "your-client-user-id",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransactionsRulesListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TransactionsRulesListRequest](src/models/transactions-rules-list-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transactionsRulesList(request)`

- **OnSuccess**: <code>[TransactionsRulesListResponse](src/models/transactions-rules-list-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.TransactionsRulesListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transactionsRulesList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransactionsRulesListResponse, ThePlaidApiClient.TransactionsRulesListError&gt;</code>, with `result.value` of type <code>[TransactionsRulesListResponse](src/models/transactions-rules-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>transactionsRulesRemove(request: ThePlaidApiClient.TransactionsRulesRemoveRequestParams, options?: RequestOptions): ApiPromise&lt;TransactionsRulesRemoveResponse, ThePlaidApiClient.TransactionsRulesRemoveError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/beta/transactions/rules/v1/remove` endpoint is used to remove a transaction rule.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transactionsRulesRemove({
    body: {
      clientId: "7f57eb3d2a9j6480121fx361",
      secret: "79g03eoofwl8240v776r2h667442119",
      clientUserId: "your-client-user-id",
      ruleId: "eVBnVMp7zdTJLkRNr33Rs6zr7KNJqBF",
    },
  });
  // TODO: Handle 'response' of type TransactionsRulesRemoveResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.TransactionsRulesRemoveError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transactionsRulesRemove({
  body: {
    clientId: "7f57eb3d2a9j6480121fx361",
    secret: "79g03eoofwl8240v776r2h667442119",
    clientUserId: "your-client-user-id",
    ruleId: "eVBnVMp7zdTJLkRNr33Rs6zr7KNJqBF",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransactionsRulesRemoveResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TransactionsRulesRemoveRequest](src/models/transactions-rules-remove-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transactionsRulesRemove(request)`

- **OnSuccess**: <code>[TransactionsRulesRemoveResponse](src/models/transactions-rules-remove-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.TransactionsRulesRemoveError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transactionsRulesRemove(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransactionsRulesRemoveResponse, ThePlaidApiClient.TransactionsRulesRemoveError&gt;</code>, with `result.value` of type <code>[TransactionsRulesRemoveResponse](src/models/transactions-rules-remove-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>transactionsSync(request: ThePlaidApiClient.TransactionsSyncRequestParams, options?: RequestOptions): ApiPromise&lt;TransactionsSyncResponse, ThePlaidApiClient.TransactionsSyncError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/transactions/sync` endpoint retrieves transactions associated with an Item and can fetch updates using a cursor to track which updates have already been seen.

For important instructions on integrating with `/transactions/sync`, see the [Transactions integration overview](https://plaid.com/docs/transactions/#integration-overview). If you are migrating from an existing integration using `/transactions/get`, see the [Transactions Sync migration guide](https://plaid.com/docs/transactions/sync-migration/).

This endpoint supports `credit`, `depository`, and some `loan`-type accounts (only those with account subtype `student` or `mortgage`). For `investments` accounts, use `/investments/transactions/get` instead.

When retrieving paginated updates, track both the `next_cursor` from the latest response and the original cursor from the first call in which `has_more` was `true`; if a call to `/transactions/sync` fails when retrieving a paginated update (e.g. due to the [`TRANSACTIONS_SYNC_MUTATION_DURING_PAGINATION`](https://plaid.com/docs/errors/transactions/#transactions_sync_mutation_during_pagination) error), the entire pagination request loop must be restarted beginning with the cursor for the first page of the update, rather than retrying only the single request that failed.

If transactions data is not yet available for the Item, which can happen if the Item was not initialized with transactions during the `/link/token/create` call or if `/transactions/sync` was called within a few seconds of Item creation, `/transactions/sync` will return empty transactions arrays.

Plaid typically checks for new transactions data between one and four times per day, depending on the institution. To find out when transactions were last updated for an Item, use the [Item Debugger](https://plaid.com/docs/account/activity/#troubleshooting-with-item-debugger) or call `/item/get`; the `item.status.transactions.last_successful_update` field will show the timestamp of the most recent successful update. To force Plaid to check for new transactions, use the `/transactions/refresh` endpoint.

To be alerted when new transactions are available, listen for the [`SYNC_UPDATES_AVAILABLE`](https://plaid.com/docs/api/products/transactions/#sync_updates_available) webhook.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transactionsSync({ body: { accessToken: "some example string" } });
  // TODO: Handle 'response' of type TransactionsSyncResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.TransactionsSyncError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transactionsSync({ body: { accessToken: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransactionsSyncResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TransactionsSyncRequest](src/models/transactions-sync-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transactionsSync(request)`

- **OnSuccess**: <code>[TransactionsSyncResponse](src/models/transactions-sync-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.TransactionsSyncError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transactionsSync(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransactionsSyncResponse, ThePlaidApiClient.TransactionsSyncError&gt;</code>, with `result.value` of type <code>[TransactionsSyncResponse](src/models/transactions-sync-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>transactionsUserInsightsGet(request: ThePlaidApiClient.TransactionsUserInsightsGetRequestParams, options?: RequestOptions): ApiPromise&lt;TransactionsUserInsightsGetResponse, ThePlaidApiClient.TransactionsUserInsightsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/beta/transactions/user_insights/v1/get` gets user insights for clients who have enriched data with `/transactions/enrich`.

The product is currently in beta.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transactionsUserInsightsGet({
    body: { clientUserId: "some example string" },
  });
  // TODO: Handle 'response' of type TransactionsUserInsightsGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.TransactionsUserInsightsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transactionsUserInsightsGet({
  body: { clientUserId: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransactionsUserInsightsGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TransactionsUserInsightsGetRequest](src/models/transactions-user-insights-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transactionsUserInsightsGet(request)`

- **OnSuccess**: <code>[TransactionsUserInsightsGetResponse](src/models/transactions-user-insights-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.TransactionsUserInsightsGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transactionsUserInsightsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransactionsUserInsightsGetResponse, ThePlaidApiClient.TransactionsUserInsightsGetError&gt;</code>, with `result.value` of type <code>[TransactionsUserInsightsGetResponse](src/models/transactions-user-insights-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>transferAuthorizationCancel(request: ThePlaidApiClient.TransferAuthorizationCancelRequestParams, options?: RequestOptions): ApiPromise&lt;TransferAuthorizationCancelResponse, ThePlaidApiClient.TransferAuthorizationCancelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use the `/transfer/authorization/cancel` endpoint to cancel a transfer authorization. A transfer authorization is eligible for cancellation if it has not yet been used to create a transfer.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transferAuthorizationCancel({
    body: { authorizationId: "some example string" },
  });
  // TODO: Handle 'response' of type TransferAuthorizationCancelResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.TransferAuthorizationCancelError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transferAuthorizationCancel({
  body: { authorizationId: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransferAuthorizationCancelResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TransferAuthorizationCancelRequest](src/models/transfer-authorization-cancel-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transferAuthorizationCancel(request)`

- **OnSuccess**: <code>[TransferAuthorizationCancelResponse](src/models/transfer-authorization-cancel-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.TransferAuthorizationCancelError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transferAuthorizationCancel(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransferAuthorizationCancelResponse, ThePlaidApiClient.TransferAuthorizationCancelError&gt;</code>, with `result.value` of type <code>[TransferAuthorizationCancelResponse](src/models/transfer-authorization-cancel-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>transferAuthorizationCreate(request: ThePlaidApiClient.TransferAuthorizationCreateRequestParams, options?: RequestOptions): ApiPromise&lt;TransferAuthorizationCreateResponse, ThePlaidApiClient.TransferAuthorizationCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use the `/transfer/authorization/create` endpoint to authorize a transfer. This endpoint must be called prior to calling `/transfer/create`. The transfer authorization will expire if not used after one hour. (You can contact your account manager to change the default authorization lifetime.)

There are four possible outcomes to calling this endpoint:

  - If the `authorization.decision` in the response is `declined`, the proposed transfer has failed the risk check and you cannot proceed with the transfer.

  - If the `authorization.decision` is `user_action_required`, additional user input is needed, usually to fix a broken bank connection, before Plaid can properly assess the risk. You need to launch Link in update mode to complete the required user action. When calling `/link/token/create` to get a new Link token, instead of providing `access_token` in the request, you should set [`transfer.authorization_id`](https://plaid.com/docs/api/link/#link-token-create-request-transfer-authorization-id) as the `authorization.id`. After the Link flow is completed, you may re-attempt the authorization.

  - If the `authorization.decision` is `approved`, and the `authorization.decision_rationale.code` is `null`, the transfer has passed the risk check and you can proceed to call `/transfer/create`.

  - If the `authorization.decision` is `approved` and the `authorization.decision_rationale.code` is non-`null`, the risk check could not be run: you may proceed with the transfer, but should perform your own risk evaluation. For more details, see the response schema.

In Plaid's Sandbox environment the decisions will be returned as follows:

  - To approve a transfer with `null` rationale code, make an authorization request with an `amount` less than the available balance in the account.

  - To approve a transfer with the rationale code `MANUALLY_VERIFIED_ITEM`, create an Item in Link through the [Same-Day Micro-deposits flow](https://plaid.com/docs/auth/coverage/testing/#testing-same-day-micro-deposits).

  - To get an authorization decision of `user_action_required`, [reset the login for an Item](https://plaid.com/docs/sandbox/#item_login_required).

  - To decline a transfer with the rationale code `NSF`, the available balance on the account must be less than the authorization `amount`. See [Create Sandbox test data](https://plaid.com/docs/sandbox/user-custom/) for details on how to customize data in Sandbox.

  - To decline a transfer with the rationale code `RISK`, the available balance on the account must be exactly $0. See [Create Sandbox test data](https://plaid.com/docs/sandbox/user-custom/) for details on how to customize data in Sandbox.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transferAuthorizationCreate({
    body: {
      accessToken: "some example string",
      accountId: "some example string",
      type: TransferType.Debit,
      network: TransferNetwork.Ach,
      amount: "some example string",
      user: { legalName: "some example string" },
    },
  });
  // TODO: Handle 'response' of type TransferAuthorizationCreateResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.TransferAuthorizationCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transferAuthorizationCreate({
  body: {
    accessToken: "some example string",
    accountId: "some example string",
    type: TransferType.Debit,
    network: TransferNetwork.Ach,
    amount: "some example string",
    user: { legalName: "some example string" },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransferAuthorizationCreateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TransferAuthorizationCreateRequest](src/models/transfer-authorization-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transferAuthorizationCreate(request)`

- **OnSuccess**: <code>[TransferAuthorizationCreateResponse](src/models/transfer-authorization-create-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.TransferAuthorizationCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transferAuthorizationCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransferAuthorizationCreateResponse, ThePlaidApiClient.TransferAuthorizationCreateError&gt;</code>, with `result.value` of type <code>[TransferAuthorizationCreateResponse](src/models/transfer-authorization-create-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>transferBalanceGet(request: ThePlaidApiClient.TransferBalanceGetRequestParams, options?: RequestOptions): ApiPromise&lt;TransferBalanceGetResponse, ThePlaidApiClient.TransferBalanceGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

(Deprecated) Use the `/transfer/ledger/get` endpoint to view a balance held with Plaid.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transferBalanceGet({ body: {} });
  // TODO: Handle 'response' of type TransferBalanceGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.TransferBalanceGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transferBalanceGet({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransferBalanceGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TransferBalanceGetRequest](src/models/transfer-balance-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transferBalanceGet(request)`

- **OnSuccess**: <code>[TransferBalanceGetResponse](src/models/transfer-balance-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.TransferBalanceGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transferBalanceGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransferBalanceGetResponse, ThePlaidApiClient.TransferBalanceGetError&gt;</code>, with `result.value` of type <code>[TransferBalanceGetResponse](src/models/transfer-balance-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>transferCancel(request: ThePlaidApiClient.TransferCancelRequestParams, options?: RequestOptions): ApiPromise&lt;TransferCancelResponse, ThePlaidApiClient.TransferCancelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use the `/transfer/cancel` endpoint to cancel a transfer.  A transfer is eligible for cancellation if the `cancellable` property returned by `/transfer/get` is `true`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transferCancel({ body: { transferId: "some example string" } });
  // TODO: Handle 'response' of type TransferCancelResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.TransferCancelError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transferCancel({ body: { transferId: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransferCancelResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TransferCancelRequest](src/models/transfer-cancel-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transferCancel(request)`

- **OnSuccess**: <code>[TransferCancelResponse](src/models/transfer-cancel-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.TransferCancelError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transferCancel(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransferCancelResponse, ThePlaidApiClient.TransferCancelError&gt;</code>, with `result.value` of type <code>[TransferCancelResponse](src/models/transfer-cancel-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>transferCapabilitiesGet(request: ThePlaidApiClient.TransferCapabilitiesGetRequestParams, options?: RequestOptions): ApiPromise&lt;TransferCapabilitiesGetResponse, ThePlaidApiClient.TransferCapabilitiesGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use the `/transfer/capabilities/get` endpoint to determine the RTP eligibility information of an account to be used with Transfer. This endpoint works on all Transfer-capable Items, including those created by `/transfer/migrate_account`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transferCapabilitiesGet({
    body: { accessToken: "some example string", accountId: "some example string" },
  });
  // TODO: Handle 'response' of type TransferCapabilitiesGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.TransferCapabilitiesGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transferCapabilitiesGet({
  body: { accessToken: "some example string", accountId: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransferCapabilitiesGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TransferCapabilitiesGetRequest](src/models/transfer-capabilities-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transferCapabilitiesGet(request)`

- **OnSuccess**: <code>[TransferCapabilitiesGetResponse](src/models/transfer-capabilities-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.TransferCapabilitiesGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transferCapabilitiesGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransferCapabilitiesGetResponse, ThePlaidApiClient.TransferCapabilitiesGetError&gt;</code>, with `result.value` of type <code>[TransferCapabilitiesGetResponse](src/models/transfer-capabilities-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>transferConfigurationGet(request: ThePlaidApiClient.TransferConfigurationGetRequestParams, options?: RequestOptions): ApiPromise&lt;TransferConfigurationGetResponse, ThePlaidApiClient.TransferConfigurationGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use the `/transfer/configuration/get` endpoint to view your transfer product configurations.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transferConfigurationGet({ body: {} });
  // TODO: Handle 'response' of type TransferConfigurationGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.TransferConfigurationGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transferConfigurationGet({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransferConfigurationGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TransferConfigurationGetRequest](src/models/transfer-configuration-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transferConfigurationGet(request)`

- **OnSuccess**: <code>[TransferConfigurationGetResponse](src/models/transfer-configuration-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.TransferConfigurationGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transferConfigurationGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransferConfigurationGetResponse, ThePlaidApiClient.TransferConfigurationGetError&gt;</code>, with `result.value` of type <code>[TransferConfigurationGetResponse](src/models/transfer-configuration-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>transferCreate(request: ThePlaidApiClient.TransferCreateRequestParams, options?: RequestOptions): ApiPromise&lt;TransferCreateResponse, ThePlaidApiClient.TransferCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use the `/transfer/create` endpoint to initiate a new transfer. This endpoint is retryable and idempotent; if a transfer with the provided `transfer_id` has already been created, it will return the transfer details without creating a new transfer. A transfer may still be created if a 500 error is returned; to detect this scenario, use [Transfer events](https://plaid.com/docs/transfer/reconciling-transfers/).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transferCreate({
    body: {
      accessToken: "some example string",
      accountId: "some example string",
      authorizationId: "some example string",
      description: "some example string",
    },
  });
  // TODO: Handle 'response' of type TransferCreateResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.TransferCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transferCreate({
  body: {
    accessToken: "some example string",
    accountId: "some example string",
    authorizationId: "some example string",
    description: "some example string",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransferCreateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TransferCreateRequest](src/models/transfer-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transferCreate(request)`

- **OnSuccess**: <code>[TransferCreateResponse](src/models/transfer-create-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.TransferCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transferCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransferCreateResponse, ThePlaidApiClient.TransferCreateError&gt;</code>, with `result.value` of type <code>[TransferCreateResponse](src/models/transfer-create-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>transferDiligenceDocumentUpload(request: ThePlaidApiClient.TransferDiligenceDocumentUploadRequestParams, options?: RequestOptions): ApiPromise&lt;TransferDiligenceDocumentUploadResponse, ThePlaidApiClient.TransferDiligenceDocumentUploadError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Third-party sender customers can use the `/transfer/diligence/document/upload` endpoint to upload a document on behalf of their end customer (i.e. originator) to Plaid. You'll need to send a request of type `multipart/form-data`.
You must provide the `client_id` in the `PLAID-CLIENT-ID` header and `secret` in the `PLAID-SECRET` header.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transferDiligenceDocumentUpload({
    body: {
      originatorClientId: "some example string",
      file: new Uint8Array(),
      purpose: Purpose.DueDiligence,
    },
  });
  // TODO: Handle 'response' of type TransferDiligenceDocumentUploadResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.TransferDiligenceDocumentUploadError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transferDiligenceDocumentUpload({
  body: { originatorClientId: "some example string", file: new Uint8Array(), purpose: Purpose.DueDiligence },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransferDiligenceDocumentUploadResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TransferDiligenceDocumentUploadRequest](src/models/transfer-diligence-document-upload-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transferDiligenceDocumentUpload(request)`

- **OnSuccess**: <code>[TransferDiligenceDocumentUploadResponse](src/models/transfer-diligence-document-upload-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.TransferDiligenceDocumentUploadError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transferDiligenceDocumentUpload(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransferDiligenceDocumentUploadResponse, ThePlaidApiClient.TransferDiligenceDocumentUploadError&gt;</code>, with `result.value` of type <code>[TransferDiligenceDocumentUploadResponse](src/models/transfer-diligence-document-upload-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>transferDiligenceSubmit(request: ThePlaidApiClient.TransferDiligenceSubmitRequestParams, options?: RequestOptions): ApiPromise&lt;TransferDiligenceSubmitResponse, ThePlaidApiClient.TransferDiligenceSubmitError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use the `/transfer/diligence/submit` endpoint to submit transfer diligence on behalf of the originator (i.e., the end customer).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transferDiligenceSubmit({
    body: {
      originatorClientId: "some example string",
      originatorDiligence: {
        dba: "some example string",
        taxId: "some example string",
        address: {
          city: "some example string",
          street: "some example string",
          region: "some example string",
          postalCode: "some example string",
          countryCode: "some example string",
        },
        website: "some example string",
        naicsCode: "some example string",
        fundingAccount: { accessToken: "some example string", accountId: "some example string" },
      },
    },
  });
  // TODO: Handle 'response' of type TransferDiligenceSubmitResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.TransferDiligenceSubmitError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transferDiligenceSubmit({
  body: {
    originatorClientId: "some example string",
    originatorDiligence: {
      dba: "some example string",
      taxId: "some example string",
      address: {
        city: "some example string",
        street: "some example string",
        region: "some example string",
        postalCode: "some example string",
        countryCode: "some example string",
      },
      website: "some example string",
      naicsCode: "some example string",
      fundingAccount: { accessToken: "some example string", accountId: "some example string" },
    },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransferDiligenceSubmitResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TransferDiligenceSubmitRequest](src/models/transfer-diligence-submit-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transferDiligenceSubmit(request)`

- **OnSuccess**: <code>[TransferDiligenceSubmitResponse](src/models/transfer-diligence-submit-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.TransferDiligenceSubmitError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transferDiligenceSubmit(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransferDiligenceSubmitResponse, ThePlaidApiClient.TransferDiligenceSubmitError&gt;</code>, with `result.value` of type <code>[TransferDiligenceSubmitResponse](src/models/transfer-diligence-submit-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>transferEventList(request: ThePlaidApiClient.TransferEventListRequestParams, options?: RequestOptions): ApiPromise&lt;TransferEventListResponse, ThePlaidApiClient.TransferEventListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use the `/transfer/event/list` endpoint to get a list of transfer events based on specified filter criteria.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transferEventList({ body: {} });
  // TODO: Handle 'response' of type TransferEventListResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.TransferEventListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transferEventList({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransferEventListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TransferEventListRequest](src/models/transfer-event-list-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transferEventList(request)`

- **OnSuccess**: <code>[TransferEventListResponse](src/models/transfer-event-list-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.TransferEventListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transferEventList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransferEventListResponse, ThePlaidApiClient.TransferEventListError&gt;</code>, with `result.value` of type <code>[TransferEventListResponse](src/models/transfer-event-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>transferEventSync(request: ThePlaidApiClient.TransferEventSyncRequestParams, options?: RequestOptions): ApiPromise&lt;TransferEventSyncResponse, ThePlaidApiClient.TransferEventSyncError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

`/transfer/event/sync` allows you to request up to the next 500 transfer events that happened after a specific `event_id`. Use the `/transfer/event/sync` endpoint to guarantee you have seen all transfer events.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transferEventSync({ body: { afterId: 1 } });
  // TODO: Handle 'response' of type TransferEventSyncResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.TransferEventSyncError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transferEventSync({ body: { afterId: 1 } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransferEventSyncResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TransferEventSyncRequest](src/models/transfer-event-sync-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transferEventSync(request)`

- **OnSuccess**: <code>[TransferEventSyncResponse](src/models/transfer-event-sync-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.TransferEventSyncError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transferEventSync(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransferEventSyncResponse, ThePlaidApiClient.TransferEventSyncError&gt;</code>, with `result.value` of type <code>[TransferEventSyncResponse](src/models/transfer-event-sync-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>transferGet(request: ThePlaidApiClient.TransferGetRequestParams, options?: RequestOptions): ApiPromise&lt;TransferGetResponse, ThePlaidApiClient.TransferGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/transfer/get` endpoint fetches information about the transfer corresponding to the given `transfer_id` or `authorization_id`. One of `transfer_id` or `authorization_id` must be populated but not both.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transferGet({ body: {} });
  // TODO: Handle 'response' of type TransferGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.TransferGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transferGet({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransferGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TransferGetRequest](src/models/transfer-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transferGet(request)`

- **OnSuccess**: <code>[TransferGetResponse](src/models/transfer-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.TransferGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transferGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransferGetResponse, ThePlaidApiClient.TransferGetError&gt;</code>, with `result.value` of type <code>[TransferGetResponse](src/models/transfer-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>transferIntentCreate(request: ThePlaidApiClient.TransferIntentCreateRequestParams, options?: RequestOptions): ApiPromise&lt;TransferIntentCreateResponse, ThePlaidApiClient.TransferIntentCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use the `/transfer/intent/create` endpoint to generate a transfer intent object and invoke the Transfer UI.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transferIntentCreate({
    body: {
      mode: TransferIntentCreateMode.Payment,
      amount: "some example string",
      description: "some example string",
      user: { legalName: "some example string" },
    },
  });
  // TODO: Handle 'response' of type TransferIntentCreateResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.TransferIntentCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transferIntentCreate({
  body: {
    mode: TransferIntentCreateMode.Payment,
    amount: "some example string",
    description: "some example string",
    user: { legalName: "some example string" },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransferIntentCreateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TransferIntentCreateRequest](src/models/transfer-intent-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transferIntentCreate(request)`

- **OnSuccess**: <code>[TransferIntentCreateResponse](src/models/transfer-intent-create-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.TransferIntentCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transferIntentCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransferIntentCreateResponse, ThePlaidApiClient.TransferIntentCreateError&gt;</code>, with `result.value` of type <code>[TransferIntentCreateResponse](src/models/transfer-intent-create-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>transferIntentGet(request: ThePlaidApiClient.TransferIntentGetRequestParams, options?: RequestOptions): ApiPromise&lt;TransferIntentGetResponse, ThePlaidApiClient.TransferIntentGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use the `/transfer/intent/get` endpoint to retrieve more information about a transfer intent.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transferIntentGet({ body: { transferIntentId: "some example string" } });
  // TODO: Handle 'response' of type TransferIntentGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.TransferIntentGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transferIntentGet({
  body: { transferIntentId: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransferIntentGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TransferIntentGetRequest](src/models/transfer-intent-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transferIntentGet(request)`

- **OnSuccess**: <code>[TransferIntentGetResponse](src/models/transfer-intent-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.TransferIntentGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transferIntentGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransferIntentGetResponse, ThePlaidApiClient.TransferIntentGetError&gt;</code>, with `result.value` of type <code>[TransferIntentGetResponse](src/models/transfer-intent-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>transferLedgerDeposit(request: ThePlaidApiClient.TransferLedgerDepositRequestParams, options?: RequestOptions): ApiPromise&lt;TransferLedgerDepositResponse, ThePlaidApiClient.TransferLedgerDepositError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use the `/transfer/ledger/deposit` endpoint to deposit funds into Plaid Ledger.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transferLedgerDeposit({
    body: {
      amount: "some example string",
      idempotencyKey: "some example string",
      network: TransferAchNetwork.Ach,
    },
  });
  // TODO: Handle 'response' of type TransferLedgerDepositResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.TransferLedgerDepositError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transferLedgerDeposit({
  body: {
    amount: "some example string",
    idempotencyKey: "some example string",
    network: TransferAchNetwork.Ach,
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransferLedgerDepositResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TransferLedgerDepositRequest](src/models/transfer-ledger-deposit-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transferLedgerDeposit(request)`

- **OnSuccess**: <code>[TransferLedgerDepositResponse](src/models/transfer-ledger-deposit-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.TransferLedgerDepositError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transferLedgerDeposit(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransferLedgerDepositResponse, ThePlaidApiClient.TransferLedgerDepositError&gt;</code>, with `result.value` of type <code>[TransferLedgerDepositResponse](src/models/transfer-ledger-deposit-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>transferLedgerDistribute(request: ThePlaidApiClient.TransferLedgerDistributeRequestParams, options?: RequestOptions): ApiPromise&lt;TransferLedgerDistributeResponse, ThePlaidApiClient.TransferLedgerDistributeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use the `/transfer/ledger/distribute` endpoint to move available balance between ledgers, if you have multiple. If you're a platform, you can move funds between one of your ledgers and one of your customer's ledgers.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transferLedgerDistribute({
    body: {
      fromLedgerId: "some example string",
      toLedgerId: "some example string",
      amount: "some example string",
      idempotencyKey: "some example string",
    },
  });
  // TODO: Handle 'response' of type TransferLedgerDistributeResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.TransferLedgerDistributeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transferLedgerDistribute({
  body: {
    fromLedgerId: "some example string",
    toLedgerId: "some example string",
    amount: "some example string",
    idempotencyKey: "some example string",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransferLedgerDistributeResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TransferLedgerDistributeRequest](src/models/transfer-ledger-distribute-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transferLedgerDistribute(request)`

- **OnSuccess**: <code>[TransferLedgerDistributeResponse](src/models/transfer-ledger-distribute-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.TransferLedgerDistributeError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transferLedgerDistribute(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransferLedgerDistributeResponse, ThePlaidApiClient.TransferLedgerDistributeError&gt;</code>, with `result.value` of type <code>[TransferLedgerDistributeResponse](src/models/transfer-ledger-distribute-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>transferLedgerEventList(request: ThePlaidApiClient.TransferLedgerEventListRequestParams, options?: RequestOptions): ApiPromise&lt;TransferLedgerEventListResponse, ThePlaidApiClient.TransferLedgerEventListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use the `/transfer/ledger/event/list` endpoint to get a list of ledger events for a specific ledger based on specified filter criteria.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transferLedgerEventList({ body: {} });
  // TODO: Handle 'response' of type TransferLedgerEventListResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.TransferLedgerEventListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transferLedgerEventList({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransferLedgerEventListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TransferLedgerEventListRequest](src/models/transfer-ledger-event-list-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transferLedgerEventList(request)`

- **OnSuccess**: <code>[TransferLedgerEventListResponse](src/models/transfer-ledger-event-list-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.TransferLedgerEventListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transferLedgerEventList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransferLedgerEventListResponse, ThePlaidApiClient.TransferLedgerEventListError&gt;</code>, with `result.value` of type <code>[TransferLedgerEventListResponse](src/models/transfer-ledger-event-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>transferLedgerGet(request: ThePlaidApiClient.TransferLedgerGetRequestParams, options?: RequestOptions): ApiPromise&lt;TransferLedgerGetResponse, ThePlaidApiClient.TransferLedgerGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use the `/transfer/ledger/get` endpoint to view a balance on the ledger held with Plaid.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transferLedgerGet({ body: {} });
  // TODO: Handle 'response' of type TransferLedgerGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.TransferLedgerGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transferLedgerGet({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransferLedgerGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TransferLedgerGetRequest](src/models/transfer-ledger-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transferLedgerGet(request)`

- **OnSuccess**: <code>[TransferLedgerGetResponse](src/models/transfer-ledger-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.TransferLedgerGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transferLedgerGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransferLedgerGetResponse, ThePlaidApiClient.TransferLedgerGetError&gt;</code>, with `result.value` of type <code>[TransferLedgerGetResponse](src/models/transfer-ledger-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>transferLedgerWithdraw(request: ThePlaidApiClient.TransferLedgerWithdrawRequestParams, options?: RequestOptions): ApiPromise&lt;TransferLedgerWithdrawResponse, ThePlaidApiClient.TransferLedgerWithdrawError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use the `/transfer/ledger/withdraw` endpoint to withdraw funds from a Plaid Ledger balance.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transferLedgerWithdraw({
    body: {
      amount: "some example string",
      idempotencyKey: "some example string",
      network: TransferNetwork.Ach,
    },
  });
  // TODO: Handle 'response' of type TransferLedgerWithdrawResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.TransferLedgerWithdrawError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transferLedgerWithdraw({
  body: {
    amount: "some example string",
    idempotencyKey: "some example string",
    network: TransferNetwork.Ach,
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransferLedgerWithdrawResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TransferLedgerWithdrawRequest](src/models/transfer-ledger-withdraw-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transferLedgerWithdraw(request)`

- **OnSuccess**: <code>[TransferLedgerWithdrawResponse](src/models/transfer-ledger-withdraw-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.TransferLedgerWithdrawError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transferLedgerWithdraw(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransferLedgerWithdrawResponse, ThePlaidApiClient.TransferLedgerWithdrawError&gt;</code>, with `result.value` of type <code>[TransferLedgerWithdrawResponse](src/models/transfer-ledger-withdraw-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>transferList(request: ThePlaidApiClient.TransferListRequestParams, options?: RequestOptions): ApiPromise&lt;TransferListResponse, ThePlaidApiClient.TransferListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use the `/transfer/list` endpoint to see a list of all your transfers and their statuses. Results are paginated; use the `count` and `offset` query parameters to retrieve the desired transfers.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transferList({ body: {} });
  // TODO: Handle 'response' of type TransferListResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.TransferListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transferList({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransferListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TransferListRequest](src/models/transfer-list-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transferList(request)`

- **OnSuccess**: <code>[TransferListResponse](src/models/transfer-list-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.TransferListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transferList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransferListResponse, ThePlaidApiClient.TransferListError&gt;</code>, with `result.value` of type <code>[TransferListResponse](src/models/transfer-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>transferMetricsGet(request: ThePlaidApiClient.TransferMetricsGetRequestParams, options?: RequestOptions): ApiPromise&lt;TransferMetricsGetResponse, ThePlaidApiClient.TransferMetricsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use the `/transfer/metrics/get` endpoint to view your transfer product usage metrics.

In the Sandbox environment, this endpoint returns static placeholder values rather than metrics computed from your Sandbox transfer activity.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transferMetricsGet({ body: {} });
  // TODO: Handle 'response' of type TransferMetricsGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.TransferMetricsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transferMetricsGet({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransferMetricsGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TransferMetricsGetRequest](src/models/transfer-metrics-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transferMetricsGet(request)`

- **OnSuccess**: <code>[TransferMetricsGetResponse](src/models/transfer-metrics-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.TransferMetricsGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transferMetricsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransferMetricsGetResponse, ThePlaidApiClient.TransferMetricsGetError&gt;</code>, with `result.value` of type <code>[TransferMetricsGetResponse](src/models/transfer-metrics-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>transferMigrateAccount(request: ThePlaidApiClient.TransferMigrateAccountRequestParams, options?: RequestOptions): ApiPromise&lt;TransferMigrateAccountResponse, ThePlaidApiClient.TransferMigrateAccountError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

As an alternative to adding Items via Link, you can also use the `/transfer/migrate_account` endpoint to migrate previously-verified account and routing numbers to Plaid Items. This endpoint is also required when adding an Item for use with wire transfers; if you intend to create wire transfers on this account, you must provide `wire_routing_number`. Note that Items created in this way are not compatible with endpoints for other products, such as `/accounts/balance/get`, and can only be used with Transfer endpoints.  If you require access to other endpoints, create the Item through Link instead.  Access to `/transfer/migrate_account` is not enabled by default; to obtain access, contact your Plaid account manager or [support](https://dashboard.plaid.com/support).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transferMigrateAccount({
    body: {
      accountNumber: "some example string",
      routingNumber: "some example string",
      accountType: "some example string",
    },
  });
  // TODO: Handle 'response' of type TransferMigrateAccountResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.TransferMigrateAccountError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transferMigrateAccount({
  body: {
    accountNumber: "some example string",
    routingNumber: "some example string",
    accountType: "some example string",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransferMigrateAccountResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TransferMigrateAccountRequest](src/models/transfer-migrate-account-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transferMigrateAccount(request)`

- **OnSuccess**: <code>[TransferMigrateAccountResponse](src/models/transfer-migrate-account-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.TransferMigrateAccountError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transferMigrateAccount(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransferMigrateAccountResponse, ThePlaidApiClient.TransferMigrateAccountError&gt;</code>, with `result.value` of type <code>[TransferMigrateAccountResponse](src/models/transfer-migrate-account-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>transferOriginatorCreate(request: ThePlaidApiClient.TransferOriginatorCreateRequestParams, options?: RequestOptions): ApiPromise&lt;TransferOriginatorCreateResponse, ThePlaidApiClient.TransferOriginatorCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use the `/transfer/originator/create` endpoint to create a new originator and return an `originator_client_id`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transferOriginatorCreate({ body: { companyName: "some example string" } });
  // TODO: Handle 'response' of type TransferOriginatorCreateResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.TransferOriginatorCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transferOriginatorCreate({
  body: { companyName: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransferOriginatorCreateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TransferOriginatorCreateRequest](src/models/transfer-originator-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transferOriginatorCreate(request)`

- **OnSuccess**: <code>[TransferOriginatorCreateResponse](src/models/transfer-originator-create-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.TransferOriginatorCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transferOriginatorCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransferOriginatorCreateResponse, ThePlaidApiClient.TransferOriginatorCreateError&gt;</code>, with `result.value` of type <code>[TransferOriginatorCreateResponse](src/models/transfer-originator-create-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>transferOriginatorFundingAccountCreate(request: ThePlaidApiClient.TransferOriginatorFundingAccountCreateRequestParams, options?: RequestOptions): ApiPromise&lt;TransferOriginatorFundingAccountCreateResponse, ThePlaidApiClient.TransferOriginatorFundingAccountCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use the `/transfer/originator/funding_account/create` endpoint to create a new funding account for the originator.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transferOriginatorFundingAccountCreate({
    body: {
      originatorClientId: "some example string",
      fundingAccount: { accessToken: "some example string", accountId: "some example string" },
    },
  });
  // TODO: Handle 'response' of type TransferOriginatorFundingAccountCreateResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.TransferOriginatorFundingAccountCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transferOriginatorFundingAccountCreate({
  body: {
    originatorClientId: "some example string",
    fundingAccount: { accessToken: "some example string", accountId: "some example string" },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransferOriginatorFundingAccountCreateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TransferOriginatorFundingAccountCreateRequest](src/models/transfer-originator-funding-account-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transferOriginatorFundingAccountCreate(request)`

- **OnSuccess**: <code>[TransferOriginatorFundingAccountCreateResponse](src/models/transfer-originator-funding-account-create-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.TransferOriginatorFundingAccountCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transferOriginatorFundingAccountCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransferOriginatorFundingAccountCreateResponse, ThePlaidApiClient.TransferOriginatorFundingAccountCreateError&gt;</code>, with `result.value` of type <code>[TransferOriginatorFundingAccountCreateResponse](src/models/transfer-originator-funding-account-create-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>transferOriginatorFundingAccountUpdate(request: ThePlaidApiClient.TransferOriginatorFundingAccountUpdateRequestParams, options?: RequestOptions): ApiPromise&lt;TransferOriginatorFundingAccountUpdateResponse, ThePlaidApiClient.TransferOriginatorFundingAccountUpdateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use the `/transfer/originator/funding_account/update` endpoint to update the funding account associated with the originator.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transferOriginatorFundingAccountUpdate({
    body: {
      originatorClientId: "some example string",
      fundingAccount: { accessToken: "some example string", accountId: "some example string" },
    },
  });
  // TODO: Handle 'response' of type TransferOriginatorFundingAccountUpdateResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.TransferOriginatorFundingAccountUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transferOriginatorFundingAccountUpdate({
  body: {
    originatorClientId: "some example string",
    fundingAccount: { accessToken: "some example string", accountId: "some example string" },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransferOriginatorFundingAccountUpdateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TransferOriginatorFundingAccountUpdateRequest](src/models/transfer-originator-funding-account-update-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transferOriginatorFundingAccountUpdate(request)`

- **OnSuccess**: <code>[TransferOriginatorFundingAccountUpdateResponse](src/models/transfer-originator-funding-account-update-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.TransferOriginatorFundingAccountUpdateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transferOriginatorFundingAccountUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransferOriginatorFundingAccountUpdateResponse, ThePlaidApiClient.TransferOriginatorFundingAccountUpdateError&gt;</code>, with `result.value` of type <code>[TransferOriginatorFundingAccountUpdateResponse](src/models/transfer-originator-funding-account-update-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>transferOriginatorGet(request: ThePlaidApiClient.TransferOriginatorGetRequestParams, options?: RequestOptions): ApiPromise&lt;TransferOriginatorGetResponse, ThePlaidApiClient.TransferOriginatorGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/transfer/originator/get` endpoint gets status updates for an originator's onboarding process. This information is also available via the Transfer page on the Plaid dashboard.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transferOriginatorGet({
    body: { originatorClientId: "some example string" },
  });
  // TODO: Handle 'response' of type TransferOriginatorGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.TransferOriginatorGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transferOriginatorGet({
  body: { originatorClientId: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransferOriginatorGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TransferOriginatorGetRequest](src/models/transfer-originator-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transferOriginatorGet(request)`

- **OnSuccess**: <code>[TransferOriginatorGetResponse](src/models/transfer-originator-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.TransferOriginatorGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transferOriginatorGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransferOriginatorGetResponse, ThePlaidApiClient.TransferOriginatorGetError&gt;</code>, with `result.value` of type <code>[TransferOriginatorGetResponse](src/models/transfer-originator-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>transferOriginatorList(request: ThePlaidApiClient.TransferOriginatorListRequestParams, options?: RequestOptions): ApiPromise&lt;TransferOriginatorListResponse, ThePlaidApiClient.TransferOriginatorListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/transfer/originator/list` endpoint gets status updates for all of your originators' onboarding. This information is also available via the Plaid dashboard.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transferOriginatorList({ body: {} });
  // TODO: Handle 'response' of type TransferOriginatorListResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.TransferOriginatorListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transferOriginatorList({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransferOriginatorListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TransferOriginatorListRequest](src/models/transfer-originator-list-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transferOriginatorList(request)`

- **OnSuccess**: <code>[TransferOriginatorListResponse](src/models/transfer-originator-list-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.TransferOriginatorListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transferOriginatorList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransferOriginatorListResponse, ThePlaidApiClient.TransferOriginatorListError&gt;</code>, with `result.value` of type <code>[TransferOriginatorListResponse](src/models/transfer-originator-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>transferPlatformOriginatorCreate(request: ThePlaidApiClient.TransferPlatformOriginatorCreateRequestParams, options?: RequestOptions): ApiPromise&lt;TransferPlatformOriginatorCreateResponse, ThePlaidApiClient.TransferPlatformOriginatorCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use the `/transfer/platform/originator/create` endpoint to submit information about the originator you are onboarding, including the originator's agreement to the required legal terms.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transferPlatformOriginatorCreate({
    body: {
      originatorClientId: "some example string",
      tosAcceptanceMetadata: {
        agreementAccepted: true,
        originatorIpAddress: "some example string",
        agreementAcceptedAt: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
      },
      originatorReviewedAt: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
    },
  });
  // TODO: Handle 'response' of type TransferPlatformOriginatorCreateResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.TransferPlatformOriginatorCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transferPlatformOriginatorCreate({
  body: {
    originatorClientId: "some example string",
    tosAcceptanceMetadata: {
      agreementAccepted: true,
      originatorIpAddress: "some example string",
      agreementAcceptedAt: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
    },
    originatorReviewedAt: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)),
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransferPlatformOriginatorCreateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TransferPlatformOriginatorCreateRequest](src/models/transfer-platform-originator-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transferPlatformOriginatorCreate(request)`

- **OnSuccess**: <code>[TransferPlatformOriginatorCreateResponse](src/models/transfer-platform-originator-create-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.TransferPlatformOriginatorCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transferPlatformOriginatorCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransferPlatformOriginatorCreateResponse, ThePlaidApiClient.TransferPlatformOriginatorCreateError&gt;</code>, with `result.value` of type <code>[TransferPlatformOriginatorCreateResponse](src/models/transfer-platform-originator-create-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>transferPlatformPersonCreate(request: ThePlaidApiClient.TransferPlatformPersonCreateRequestParams, options?: RequestOptions): ApiPromise&lt;TransferPlatformPersonCreateResponse, ThePlaidApiClient.TransferPlatformPersonCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use the `/transfer/platform/person/create` endpoint to create a person associated with an originator (e.g. beneficial owner or control person) and optionally submit personal identification information for them.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transferPlatformPersonCreate({
    body: { originatorClientId: "some example string" },
  });
  // TODO: Handle 'response' of type TransferPlatformPersonCreateResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.TransferPlatformPersonCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transferPlatformPersonCreate({
  body: { originatorClientId: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransferPlatformPersonCreateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TransferPlatformPersonCreateRequest](src/models/transfer-platform-person-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transferPlatformPersonCreate(request)`

- **OnSuccess**: <code>[TransferPlatformPersonCreateResponse](src/models/transfer-platform-person-create-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.TransferPlatformPersonCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transferPlatformPersonCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransferPlatformPersonCreateResponse, ThePlaidApiClient.TransferPlatformPersonCreateError&gt;</code>, with `result.value` of type <code>[TransferPlatformPersonCreateResponse](src/models/transfer-platform-person-create-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>transferPlatformRequirementSubmit(request: ThePlaidApiClient.TransferPlatformRequirementSubmitRequestParams, options?: RequestOptions): ApiPromise&lt;TransferPlatformRequirementSubmitResponse, ThePlaidApiClient.TransferPlatformRequirementSubmitError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use the `/transfer/platform/requirement/submit` endpoint to submit additional onboarding information that is needed by Plaid to approve or decline the originator. See [Requirement type schema documentation](https://docs.google.com/document/d/1NEQkTD0sVK50iAQi6xHigrexDUxZ4QxXqSEfV_FFTiU/) for a list of requirement types and possible values.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transferPlatformRequirementSubmit({
    body: {
      originatorClientId: "some example string",
      requirementSubmissions: [{ requirementType: "some example string", value: "some example string" }],
    },
  });
  // TODO: Handle 'response' of type TransferPlatformRequirementSubmitResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.TransferPlatformRequirementSubmitError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transferPlatformRequirementSubmit({
  body: {
    originatorClientId: "some example string",
    requirementSubmissions: [{ requirementType: "some example string", value: "some example string" }],
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransferPlatformRequirementSubmitResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TransferPlatformRequirementSubmitRequest](src/models/transfer-platform-requirement-submit-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transferPlatformRequirementSubmit(request)`

- **OnSuccess**: <code>[TransferPlatformRequirementSubmitResponse](src/models/transfer-platform-requirement-submit-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.TransferPlatformRequirementSubmitError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transferPlatformRequirementSubmit(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransferPlatformRequirementSubmitResponse, ThePlaidApiClient.TransferPlatformRequirementSubmitError&gt;</code>, with `result.value` of type <code>[TransferPlatformRequirementSubmitResponse](src/models/transfer-platform-requirement-submit-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>transferQuestionnaireCreate(request: ThePlaidApiClient.TransferQuestionnaireCreateRequestParams, options?: RequestOptions): ApiPromise&lt;TransferQuestionnaireCreateResponse, ThePlaidApiClient.TransferQuestionnaireCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/transfer/questionnaire/create` endpoint generates a Plaid-hosted onboarding UI URL. Redirect the originator to this URL to provide their due diligence information and agree to Plaid's terms for ACH money movement.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transferQuestionnaireCreate({
    body: { originatorClientId: "some example string", redirectUri: "some example string" },
  });
  // TODO: Handle 'response' of type TransferQuestionnaireCreateResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.TransferQuestionnaireCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transferQuestionnaireCreate({
  body: { originatorClientId: "some example string", redirectUri: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransferQuestionnaireCreateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TransferQuestionnaireCreateRequest](src/models/transfer-questionnaire-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transferQuestionnaireCreate(request)`

- **OnSuccess**: <code>[TransferQuestionnaireCreateResponse](src/models/transfer-questionnaire-create-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.TransferQuestionnaireCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transferQuestionnaireCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransferQuestionnaireCreateResponse, ThePlaidApiClient.TransferQuestionnaireCreateError&gt;</code>, with `result.value` of type <code>[TransferQuestionnaireCreateResponse](src/models/transfer-questionnaire-create-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>transferRecurringCancel(request: ThePlaidApiClient.TransferRecurringCancelRequestParams, options?: RequestOptions): ApiPromise&lt;TransferRecurringCancelResponse, ThePlaidApiClient.TransferRecurringCancelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use the `/transfer/recurring/cancel` endpoint to cancel a recurring transfer.  A scheduled transfer that hasn't been submitted to the bank will be cancelled.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transferRecurringCancel({
    body: { recurringTransferId: "some example string" },
  });
  // TODO: Handle 'response' of type TransferRecurringCancelResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.TransferRecurringCancelError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transferRecurringCancel({
  body: { recurringTransferId: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransferRecurringCancelResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TransferRecurringCancelRequest](src/models/transfer-recurring-cancel-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transferRecurringCancel(request)`

- **OnSuccess**: <code>[TransferRecurringCancelResponse](src/models/transfer-recurring-cancel-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.TransferRecurringCancelError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transferRecurringCancel(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransferRecurringCancelResponse, ThePlaidApiClient.TransferRecurringCancelError&gt;</code>, with `result.value` of type <code>[TransferRecurringCancelResponse](src/models/transfer-recurring-cancel-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>transferRecurringCreate(request: ThePlaidApiClient.TransferRecurringCreateRequestParams, options?: RequestOptions): ApiPromise&lt;TransferRecurringCreateResponse, ThePlaidApiClient.TransferRecurringCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use the `/transfer/recurring/create` endpoint to initiate a new recurring transfer. This capability is not currently supported for Transfer UI or Transfer for Platforms (beta) customers.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transferRecurringCreate({
    body: {
      accessToken: "some example string",
      idempotencyKey: "some example string",
      accountId: "some example string",
      type: TransferType.Debit,
      network: TransferRecurringNetwork.Ach,
      amount: "some example string",
      description: "some example string",
      schedule: {
        intervalUnit: TransferScheduleIntervalUnit.Week,
        intervalCount: 1,
        intervalExecutionDay: 1,
        startDate: "2024-01-15",
      },
      user: { legalName: "some example string" },
    },
  });
  // TODO: Handle 'response' of type TransferRecurringCreateResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.TransferRecurringCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transferRecurringCreate({
  body: {
    accessToken: "some example string",
    idempotencyKey: "some example string",
    accountId: "some example string",
    type: TransferType.Debit,
    network: TransferRecurringNetwork.Ach,
    amount: "some example string",
    description: "some example string",
    schedule: {
      intervalUnit: TransferScheduleIntervalUnit.Week,
      intervalCount: 1,
      intervalExecutionDay: 1,
      startDate: "2024-01-15",
    },
    user: { legalName: "some example string" },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransferRecurringCreateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TransferRecurringCreateRequest](src/models/transfer-recurring-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transferRecurringCreate(request)`

- **OnSuccess**: <code>[TransferRecurringCreateResponse](src/models/transfer-recurring-create-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.TransferRecurringCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transferRecurringCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransferRecurringCreateResponse, ThePlaidApiClient.TransferRecurringCreateError&gt;</code>, with `result.value` of type <code>[TransferRecurringCreateResponse](src/models/transfer-recurring-create-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>transferRecurringGet(request: ThePlaidApiClient.TransferRecurringGetRequestParams, options?: RequestOptions): ApiPromise&lt;TransferRecurringGetResponse, ThePlaidApiClient.TransferRecurringGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/transfer/recurring/get` fetches information about the recurring transfer corresponding to the given `recurring_transfer_id`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transferRecurringGet({
    body: { recurringTransferId: "some example string" },
  });
  // TODO: Handle 'response' of type TransferRecurringGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.TransferRecurringGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transferRecurringGet({
  body: { recurringTransferId: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransferRecurringGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TransferRecurringGetRequest](src/models/transfer-recurring-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transferRecurringGet(request)`

- **OnSuccess**: <code>[TransferRecurringGetResponse](src/models/transfer-recurring-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.TransferRecurringGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transferRecurringGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransferRecurringGetResponse, ThePlaidApiClient.TransferRecurringGetError&gt;</code>, with `result.value` of type <code>[TransferRecurringGetResponse](src/models/transfer-recurring-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>transferRecurringList(request: ThePlaidApiClient.TransferRecurringListRequestParams, options?: RequestOptions): ApiPromise&lt;TransferRecurringListResponse, ThePlaidApiClient.TransferRecurringListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use the `/transfer/recurring/list` endpoint to see a list of all your recurring transfers and their statuses. Results are paginated; use the `count` and `offset` query parameters to retrieve the desired recurring transfers.


</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transferRecurringList({ body: {} });
  // TODO: Handle 'response' of type TransferRecurringListResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.TransferRecurringListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transferRecurringList({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransferRecurringListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TransferRecurringListRequest](src/models/transfer-recurring-list-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transferRecurringList(request)`

- **OnSuccess**: <code>[TransferRecurringListResponse](src/models/transfer-recurring-list-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.TransferRecurringListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transferRecurringList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransferRecurringListResponse, ThePlaidApiClient.TransferRecurringListError&gt;</code>, with `result.value` of type <code>[TransferRecurringListResponse](src/models/transfer-recurring-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>transferRefundCancel(request: ThePlaidApiClient.TransferRefundCancelRequestParams, options?: RequestOptions): ApiPromise&lt;TransferRefundCancelResponse, ThePlaidApiClient.TransferRefundCancelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use the `/transfer/refund/cancel` endpoint to cancel a refund.  A refund is eligible for cancellation if it has not yet been submitted to the payment network.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transferRefundCancel({ body: { refundId: "some example string" } });
  // TODO: Handle 'response' of type TransferRefundCancelResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.TransferRefundCancelError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transferRefundCancel({ body: { refundId: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransferRefundCancelResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TransferRefundCancelRequest](src/models/transfer-refund-cancel-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transferRefundCancel(request)`

- **OnSuccess**: <code>[TransferRefundCancelResponse](src/models/transfer-refund-cancel-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.TransferRefundCancelError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transferRefundCancel(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransferRefundCancelResponse, ThePlaidApiClient.TransferRefundCancelError&gt;</code>, with `result.value` of type <code>[TransferRefundCancelResponse](src/models/transfer-refund-cancel-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>transferRefundCreate(request: ThePlaidApiClient.TransferRefundCreateRequestParams, options?: RequestOptions): ApiPromise&lt;TransferRefundCreateResponse, ThePlaidApiClient.TransferRefundCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use the `/transfer/refund/create` endpoint to create a refund for a transfer. A transfer can be refunded if the transfer was initiated in the past 180 days.

Refunds come out of the available balance of the ledger used for the original debit transfer. If there are not enough funds in the available balance to cover the refund amount, the refund will be rejected. You can create a refund at any time. Plaid does not impose any hold time on refunds.

A refund can still be issued even if the Item's `access_token` is no longer valid (e.g. if the user revoked OAuth consent or the Item was deleted via `/item/remove`), as long as the account and routing number pair used to make the original transaction is still valid. A refund cannot be issued if the Item has an [invalidated TAN](https://plaid.com/docs/auth/#tokenized-account-numbers), which can occur at Chase or PNC.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transferRefundCreate({
    body: {
      transferId: "some example string",
      amount: "some example string",
      idempotencyKey: "some example string",
    },
  });
  // TODO: Handle 'response' of type TransferRefundCreateResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.TransferRefundCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transferRefundCreate({
  body: {
    transferId: "some example string",
    amount: "some example string",
    idempotencyKey: "some example string",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransferRefundCreateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TransferRefundCreateRequest](src/models/transfer-refund-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transferRefundCreate(request)`

- **OnSuccess**: <code>[TransferRefundCreateResponse](src/models/transfer-refund-create-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.TransferRefundCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transferRefundCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransferRefundCreateResponse, ThePlaidApiClient.TransferRefundCreateError&gt;</code>, with `result.value` of type <code>[TransferRefundCreateResponse](src/models/transfer-refund-create-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>transferRefundGet(request: ThePlaidApiClient.TransferRefundGetRequestParams, options?: RequestOptions): ApiPromise&lt;TransferRefundGetResponse, ThePlaidApiClient.TransferRefundGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/transfer/refund/get` endpoint fetches information about the refund corresponding to the given `refund_id`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transferRefundGet({ body: { refundId: "some example string" } });
  // TODO: Handle 'response' of type TransferRefundGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.TransferRefundGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transferRefundGet({ body: { refundId: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransferRefundGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TransferRefundGetRequest](src/models/transfer-refund-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transferRefundGet(request)`

- **OnSuccess**: <code>[TransferRefundGetResponse](src/models/transfer-refund-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.TransferRefundGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transferRefundGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransferRefundGetResponse, ThePlaidApiClient.TransferRefundGetError&gt;</code>, with `result.value` of type <code>[TransferRefundGetResponse](src/models/transfer-refund-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>transferRepaymentList(request: ThePlaidApiClient.TransferRepaymentListRequestParams, options?: RequestOptions): ApiPromise&lt;TransferRepaymentListResponse, ThePlaidApiClient.TransferRepaymentListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/transfer/repayment/list` endpoint fetches repayments matching the given filters. Repayments are returned in reverse-chronological order (most recent first) starting at the given `start_time`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transferRepaymentList({ body: { count: 1 } });
  // TODO: Handle 'response' of type TransferRepaymentListResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.TransferRepaymentListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transferRepaymentList({ body: { count: 1 } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransferRepaymentListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TransferRepaymentListRequest](src/models/transfer-repayment-list-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transferRepaymentList(request)`

- **OnSuccess**: <code>[TransferRepaymentListResponse](src/models/transfer-repayment-list-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.TransferRepaymentListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transferRepaymentList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransferRepaymentListResponse, ThePlaidApiClient.TransferRepaymentListError&gt;</code>, with `result.value` of type <code>[TransferRepaymentListResponse](src/models/transfer-repayment-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>transferRepaymentReturnList(request: ThePlaidApiClient.TransferRepaymentReturnListRequestParams, options?: RequestOptions): ApiPromise&lt;TransferRepaymentReturnListResponse, ThePlaidApiClient.TransferRepaymentReturnListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/transfer/repayment/return/list` endpoint retrieves the set of returns that were batched together into the specified repayment. The sum of amounts of returns retrieved by this request equals the amount of the repayment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transferRepaymentReturnList({
    body: { repaymentId: "d4bfce70-2470-4298-ae87-5e9b3e18bfaf", count: 1 },
  });
  // TODO: Handle 'response' of type TransferRepaymentReturnListResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.TransferRepaymentReturnListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transferRepaymentReturnList({
  body: { repaymentId: "d4bfce70-2470-4298-ae87-5e9b3e18bfaf", count: 1 },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransferRepaymentReturnListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TransferRepaymentReturnListRequest](src/models/transfer-repayment-return-list-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transferRepaymentReturnList(request)`

- **OnSuccess**: <code>[TransferRepaymentReturnListResponse](src/models/transfer-repayment-return-list-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.TransferRepaymentReturnListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transferRepaymentReturnList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransferRepaymentReturnListResponse, ThePlaidApiClient.TransferRepaymentReturnListError&gt;</code>, with `result.value` of type <code>[TransferRepaymentReturnListResponse](src/models/transfer-repayment-return-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>transferReturnRecover(request: ThePlaidApiClient.TransferReturnRecoverRequestParams, options?: RequestOptions): ApiPromise&lt;TransferReturnRecoverResponse, ThePlaidApiClient.TransferReturnRecoverError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Use the `/transfer/return/recover` endpoint to notify Plaid that you have recovered some or all of the loss on a returned guaranteed transfer.

Recovery can be reported in full or in parts; the sum of recovered amounts across calls cannot exceed the original transfer's amount.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transferReturnRecover({
    body: {
      transferId: "some example string",
      amount: "some example string",
      idempotencyKey: "some example string",
    },
  });
  // TODO: Handle 'response' of type TransferReturnRecoverResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.TransferReturnRecoverError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transferReturnRecover({
  body: {
    transferId: "some example string",
    amount: "some example string",
    idempotencyKey: "some example string",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransferReturnRecoverResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TransferReturnRecoverRequest](src/models/transfer-return-recover-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transferReturnRecover(request)`

- **OnSuccess**: <code>[TransferReturnRecoverResponse](src/models/transfer-return-recover-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.TransferReturnRecoverError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transferReturnRecover(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransferReturnRecoverResponse, ThePlaidApiClient.TransferReturnRecoverError&gt;</code>, with `result.value` of type <code>[TransferReturnRecoverResponse](src/models/transfer-return-recover-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>transferSweepGet(request: ThePlaidApiClient.TransferSweepGetRequestParams, options?: RequestOptions): ApiPromise&lt;TransferSweepGetResponse, ThePlaidApiClient.TransferSweepGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/transfer/sweep/get` endpoint fetches a sweep corresponding to the given `sweep_id`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transferSweepGet({ body: { sweepId: "some example string" } });
  // TODO: Handle 'response' of type TransferSweepGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.TransferSweepGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transferSweepGet({ body: { sweepId: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransferSweepGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TransferSweepGetRequest](src/models/transfer-sweep-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transferSweepGet(request)`

- **OnSuccess**: <code>[TransferSweepGetResponse](src/models/transfer-sweep-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.TransferSweepGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transferSweepGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransferSweepGetResponse, ThePlaidApiClient.TransferSweepGetError&gt;</code>, with `result.value` of type <code>[TransferSweepGetResponse](src/models/transfer-sweep-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>transferSweepList(request: ThePlaidApiClient.TransferSweepListRequestParams, options?: RequestOptions): ApiPromise&lt;TransferSweepListResponse, ThePlaidApiClient.TransferSweepListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The `/transfer/sweep/list` endpoint fetches sweeps matching the given filters.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transferSweepList({ body: {} });
  // TODO: Handle 'response' of type TransferSweepListResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.TransferSweepListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transferSweepList({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TransferSweepListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TransferSweepListRequest](src/models/transfer-sweep-list-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transferSweepList(request)`

- **OnSuccess**: <code>[TransferSweepListResponse](src/models/transfer-sweep-list-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.TransferSweepListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.transferSweepList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TransferSweepListResponse, ThePlaidApiClient.TransferSweepListError&gt;</code>, with `result.value` of type <code>[TransferSweepListResponse](src/models/transfer-sweep-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>userAccountSessionEventSend(request: ThePlaidApiClient.UserAccountSessionEventSendRequestParams, options?: RequestOptions): ApiPromise&lt;UserAccountSessionEventSendResponse, ThePlaidApiClient.UserAccountSessionEventSendError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows sending client-specific events related to Layer sessions for analytics and tracking purposes.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.userAccountSessionEventSend({
    body: {
      linkSessionId: "some example string",
      event: { name: "some example string", timestamp: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)) },
    },
  });
  // TODO: Handle 'response' of type UserAccountSessionEventSendResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.UserAccountSessionEventSendError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.userAccountSessionEventSend({
  body: {
    linkSessionId: "some example string",
    event: { name: "some example string", timestamp: new Date(Date.UTC(2024, 0, 15, 9, 30, 0)) },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UserAccountSessionEventSendResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[UserAccountSessionEventSendRequest](src/models/user-account-session-event-send-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.userAccountSessionEventSend(request)`

- **OnSuccess**: <code>[UserAccountSessionEventSendResponse](src/models/user-account-session-event-send-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.UserAccountSessionEventSendError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.userAccountSessionEventSend(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UserAccountSessionEventSendResponse, ThePlaidApiClient.UserAccountSessionEventSendError&gt;</code>, with `result.value` of type <code>[UserAccountSessionEventSendResponse](src/models/user-account-session-event-send-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>userAccountSessionGet(request: ThePlaidApiClient.UserAccountSessionGetRequestParams, options?: RequestOptions): ApiPromise&lt;UserAccountSessionGetResponse, ThePlaidApiClient.UserAccountSessionGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint returns user permissioned account data, including identity and Item access tokens, for use with [Plaid Layer](https://plaid.com/docs/layer). Note that end users are permitted to edit the prefilled identity data in the Link flow before sharing it with you; you should treat any identity data returned by this endpoint as user-submitted, unverified data. For a verification layer, you can add [Identity Verification](https://plaid.com/docs/identity-verification/) to your flow, or check the submitted identity data against bank account data from linked accounts using [Identity Match](https://plaid.com/docs/identity/#identity-match).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.userAccountSessionGet({ body: { publicToken: "some example string" } });
  // TODO: Handle 'response' of type UserAccountSessionGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.UserAccountSessionGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.userAccountSessionGet({
  body: { publicToken: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UserAccountSessionGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[UserAccountSessionGetRequest](src/models/user-account-session-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.userAccountSessionGet(request)`

- **OnSuccess**: <code>[UserAccountSessionGetResponse](src/models/user-account-session-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.UserAccountSessionGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.userAccountSessionGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UserAccountSessionGetResponse, ThePlaidApiClient.UserAccountSessionGetError&gt;</code>, with `result.value` of type <code>[UserAccountSessionGetResponse](src/models/user-account-session-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>userCreate(request: ThePlaidApiClient.UserCreateRequestParams, options?: RequestOptions): ApiPromise&lt;UserCreateResponse, ThePlaidApiClient.UserCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

For Plaid products and flows that use the user object, `/user/create` provides you a single token to access all data associated with the user. You must call this endpoint before calling `/link/token/create` if you are using any of the following: Plaid Check, Income Verification, Multi-Item Link, or Plaid Protect (Identity). If you are using Plaid Protect Link session scoring, you do not need to call `/user/create` first; Plaid will resolve or create the user when `user.client_user_id` is provided in `/link/token/create`.
For customers who began using this endpoint on or after December 10, 2025, this endpoint takes a `client_user_id` and an `identity` object and will return a `user_id`. For customers who began using it before that date, the endpoint takes a `client_user_id` and a `consumer_report_user_identity` object and will return a `user_token` and `user_id`. For more details, see [New User APIs](https://plaid.com/docs/api/users/user-apis).
In order to create a Plaid Check Consumer Report for a user, the `identity` (new) or `consumer_report_user_identity` (legacy) object must be present. If it is not provided during the `/user/create` call, it can be added later by calling `/user/update`.


In order to generate a Plaid Check Consumer Report, the following `identity` fields, at minimum, are required and must be non-empty: `name`, `date_of_birth`, `emails`, `phone_numbers`, and `addresses` (with at least one email, phone number, and address designated as `primary`). Plaid Check Consumer Reports can only be created for US-based users; the user's address country must be `US`. If creating a report for sharing with a GSE such as Fannie or Freddie, the user's full SSN must be provided via the `id_numbers` field. Providing at least a partial SSN is also strongly recommended for all use cases, since it improves the accuracy of matching user records during compliance processes such as file disclosure, dispute, or security freeze requests.


When using Plaid Protect, it is highly recommended that you provide an `identity` object to better identify and block fraud across your Link sessions.


Plaid will normalize identity fields before storing them and utilize the same identity across different user-based products.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.userCreate({ body: { clientUserId: "some example string" } });
  // TODO: Handle 'response' of type UserCreateResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.UserCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.userCreate({ body: { clientUserId: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UserCreateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>plaidNewUserApiEnabled?</code> | <code>boolean</code> | The HTTP header used in API requests to determine which set of User APIs to invoke: the legacy CRA version or the new User API version.<br>**Default**: false |
| <code>body</code> | <code>[UserCreateRequest](src/models/user-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.userCreate(request)`

- **OnSuccess**: <code>[UserCreateResponse](src/models/user-create-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.UserCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.userCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UserCreateResponse, ThePlaidApiClient.UserCreateError&gt;</code>, with `result.value` of type <code>[UserCreateResponse](src/models/user-create-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>userFinancialDataRefresh(request: ThePlaidApiClient.UserFinancialDataRefreshRequestParams, options?: RequestOptions): ApiPromise&lt;UserFinancialDataRefreshResponse, ThePlaidApiClient.UserFinancialDataRefreshError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

`/user/financial_data/refresh` is an optional endpoint that initiates an on-demand extraction to fetch the newest transactions for a User using the Financial Insights bundle.
This bundle refreshes the Transactions, Investments, and Liabilities product data.
This endpoint is for clients who use the Financial Insights bundle and want to proactively update all linked Items under a user.
The refresh may succeed or fail on a per-Item basis. Use the `results` array in the response to understand the outcome for each Item.

This endpoint is distinct from `/transactions/refresh`, which triggers a refresh for a single Item. Use `/user/financial_data/refresh` to target all Items for a user instead.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.userFinancialDataRefresh({ body: { userId: "usr_8c3ZbDBYjaqUXZ" } });
  // TODO: Handle 'response' of type UserFinancialDataRefreshResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.UserFinancialDataRefreshError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.userFinancialDataRefresh({
  body: { userId: "usr_8c3ZbDBYjaqUXZ" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UserFinancialDataRefreshResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[UserFinancialDataRefreshRequest](src/models/user-financial-data-refresh-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.userFinancialDataRefresh(request)`

- **OnSuccess**: <code>[UserFinancialDataRefreshResponse](src/models/user-financial-data-refresh-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.UserFinancialDataRefreshError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.userFinancialDataRefresh(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UserFinancialDataRefreshResponse, ThePlaidApiClient.UserFinancialDataRefreshError&gt;</code>, with `result.value` of type <code>[UserFinancialDataRefreshResponse](src/models/user-financial-data-refresh-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>userGet(request: ThePlaidApiClient.UserGetRequestParams, options?: RequestOptions): ApiPromise&lt;UserGetResponse, ThePlaidApiClient.UserGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get user details using a `user_id`. This endpoint only supports users that were created on the new user API flow, without a `user_token`. For more details, see [New User APIs](https://plaid.com/docs/api/users/user-apis).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.userGet({ body: { userId: "some example string" } });
  // TODO: Handle 'response' of type UserGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.UserGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.userGet({ body: { userId: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UserGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>plaidNewUserApiEnabled?</code> | <code>boolean</code> | The HTTP header used in API requests to determine which set of User APIs to invoke: the legacy CRA version or the new User API version.<br>**Default**: false |
| <code>body</code> | <code>[UserGetRequest](src/models/user-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.userGet(request)`

- **OnSuccess**: <code>[UserGetResponse](src/models/user-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.UserGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.userGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UserGetResponse, ThePlaidApiClient.UserGetError&gt;</code>, with `result.value` of type <code>[UserGetResponse](src/models/user-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>userIdentityRemove(request: ThePlaidApiClient.UserIdentityRemoveRequestParams, options?: RequestOptions): ApiPromise&lt;UserIdentityRemoveResponse, ThePlaidApiClient.UserIdentityRemoveError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint allows customers to explicitly purge identity/PII data provided to Plaid for a given user. This is not exposed to customers by default, as it is meant for special scenarios or requests, but Plaid is obligated to enable customers to delete PII provided to us.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.userIdentityRemove({ body: { userId: "some example string" } });
  // TODO: Handle 'response' of type UserIdentityRemoveResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.UserIdentityRemoveError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.userIdentityRemove({ body: { userId: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UserIdentityRemoveResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>plaidNewUserApiEnabled?</code> | <code>boolean</code> | The HTTP header used in API requests to determine which set of User APIs to invoke: the legacy CRA version or the new User API version.<br>**Default**: false |
| <code>body</code> | <code>[UserIdentityRemoveRequest](src/models/user-identity-remove-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.userIdentityRemove(request)`

- **OnSuccess**: <code>[UserIdentityRemoveResponse](src/models/user-identity-remove-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.UserIdentityRemoveError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.userIdentityRemove(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UserIdentityRemoveResponse, ThePlaidApiClient.UserIdentityRemoveError&gt;</code>, with `result.value` of type <code>[UserIdentityRemoveResponse](src/models/user-identity-remove-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>userItemsAssociate(request: ThePlaidApiClient.UserItemsAssociateRequestParams, options?: RequestOptions): ApiPromise&lt;UserItemsAssociateResponse, ThePlaidApiClient.UserItemsAssociateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Associates Items to the target user. If an Item is already associated to another user, the Item will be disassociated with the existing user and associated to the target user. This operation supports a max of 100 Items.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.userItemsAssociate({
    body: { userId: "some example string", itemIds: ["some example string"] },
  });
  // TODO: Handle 'response' of type UserItemsAssociateResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.UserItemsAssociateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.userItemsAssociate({
  body: { userId: "some example string", itemIds: ["some example string"] },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UserItemsAssociateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[UserItemsAssociateRequest](src/models/user-items-associate-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.userItemsAssociate(request)`

- **OnSuccess**: <code>[UserItemsAssociateResponse](src/models/user-items-associate-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.UserItemsAssociateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.userItemsAssociate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UserItemsAssociateResponse, ThePlaidApiClient.UserItemsAssociateError&gt;</code>, with `result.value` of type <code>[UserItemsAssociateResponse](src/models/user-items-associate-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>userItemsGet(request: ThePlaidApiClient.UserItemsGetRequestParams, options?: RequestOptions): ApiPromise&lt;UserItemsGetResponse, ThePlaidApiClient.UserItemsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns Items associated with a `user_id`, along with their corresponding statuses. Plaid associates an Item with a User when it has been successfully connected within a Link session initialized with that `user_id`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.userItemsGet({ body: {} });
  // TODO: Handle 'response' of type UserItemsGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.UserItemsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.userItemsGet({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UserItemsGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[UserItemsGetRequest](src/models/user-items-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.userItemsGet(request)`

- **OnSuccess**: <code>[UserItemsGetResponse](src/models/user-items-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.UserItemsGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.userItemsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UserItemsGetResponse, ThePlaidApiClient.UserItemsGetError&gt;</code>, with `result.value` of type <code>[UserItemsGetResponse](src/models/user-items-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>userItemsRemove(request: ThePlaidApiClient.UserItemsRemoveRequestParams, options?: RequestOptions): ApiPromise&lt;UserItemsRemoveResponse, ThePlaidApiClient.UserItemsRemoveError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes specific Items associated with a user. It is equivalent to calling `/item/remove` on each Item individually, but supports use cases (such as Plaid Check) where access tokens are not available. All specified Items must belong to the user or the entire operation fails. Similar to `/item/remove`, this deletes Item product data and terminates billing on the Item's products. Once removed, Items cannot be reconnected without going through Link again.
This endpoint is not intended to remove all data for a user, as it will only remove Items and no other data for the user. If the user has any user-based recurring subscription products (Financial Management, Plaid Protect, or CRA Cash Flow Updates) and is deleting their account with your product, also call `/user/products/terminate` to end those subscriptions; per-Item billing is already terminated by this endpoint. For a user initiated data deletion request, see the [Consumer Service Center](https://plaid.com/check/consumer-service-center/) to revoke access to data.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.userItemsRemove({ body: { itemIds: ["some example string"] } });
  // TODO: Handle 'response' of type UserItemsRemoveResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.UserItemsRemoveError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.userItemsRemove({ body: { itemIds: ["some example string"] } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UserItemsRemoveResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[UserItemsRemoveRequest](src/models/user-items-remove-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.userItemsRemove(request)`

- **OnSuccess**: <code>[UserItemsRemoveResponse](src/models/user-items-remove-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.UserItemsRemoveError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.userItemsRemove(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UserItemsRemoveResponse, ThePlaidApiClient.UserItemsRemoveError&gt;</code>, with `result.value` of type <code>[UserItemsRemoveResponse](src/models/user-items-remove-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>userProductsTerminate(request: ThePlaidApiClient.UserProductsTerminateRequestParams, options?: RequestOptions): ApiPromise&lt;UserProductsTerminateResponse, ThePlaidApiClient.UserProductsTerminateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Terminates user-based recurring subscription bundles or products (Financial Management, Plaid Protect, and CRA Cash Flow Updates) associated with a `user_id`. After you call this endpoint, the user will no longer be billed for these products. For CRA Monitoring, the subscription is canceled but historical data remains available for future report requests.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.userProductsTerminate({
    body: {
      userId: "usr_8c3ZbDBYjaqUXZ",
      reasonCode: ProductsTerminateReasonCode.ConsumerAccountClosed,
      reasonNote: "User closed account with client.",
    },
  });
  // TODO: Handle 'response' of type UserProductsTerminateResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.UserProductsTerminateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.userProductsTerminate({
  body: {
    userId: "usr_8c3ZbDBYjaqUXZ",
    reasonCode: ProductsTerminateReasonCode.ConsumerAccountClosed,
    reasonNote: "User closed account with client.",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UserProductsTerminateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[UserProductsTerminateRequest](src/models/user-products-terminate-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.userProductsTerminate(request)`

- **OnSuccess**: <code>[UserProductsTerminateResponse](src/models/user-products-terminate-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.UserProductsTerminateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.userProductsTerminate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UserProductsTerminateResponse, ThePlaidApiClient.UserProductsTerminateError&gt;</code>, with `result.value` of type <code>[UserProductsTerminateResponse](src/models/user-products-terminate-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>userRemove(request: ThePlaidApiClient.UserRemoveRequestParams, options?: RequestOptions): ApiPromise&lt;UserRemoveResponse, ThePlaidApiClient.UserRemoveError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

`/user/remove` deletes a `user_id` or `user_token` and associated information, including any Items associated with the user.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.userRemove({ body: {} });
  // TODO: Handle 'response' of type UserRemoveResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.UserRemoveError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.userRemove({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UserRemoveResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>plaidNewUserApiEnabled?</code> | <code>boolean</code> | The HTTP header used in API requests to determine which set of User APIs to invoke: the legacy CRA version or the new User API version.<br>**Default**: false |
| <code>body</code> | <code>[UserRemoveRequest](src/models/user-remove-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.userRemove(request)`

- **OnSuccess**: <code>[UserRemoveResponse](src/models/user-remove-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.UserRemoveError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.userRemove(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UserRemoveResponse, ThePlaidApiClient.UserRemoveError&gt;</code>, with `result.value` of type <code>[UserRemoveResponse](src/models/user-remove-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>userThirdPartyTokenCreate(request: ThePlaidApiClient.UserThirdPartyTokenCreateRequestParams, options?: RequestOptions): ApiPromise&lt;UserThirdPartyTokenCreateResponse, ThePlaidApiClient.UserThirdPartyTokenCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint is used to create a third-party user token. This token can be shared with and used by a specified third-party client to access data associated with the user through supported endpoints.

Ensure you store the `third_party_user_token` along with the `user_token` and `third_party_client_id`, as it is not possible to retrieve a previously created `third_party_user_token`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.userThirdPartyTokenCreate({
    body: { thirdPartyClientId: "some example string" },
  });
  // TODO: Handle 'response' of type UserThirdPartyTokenCreateResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.UserThirdPartyTokenCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.userThirdPartyTokenCreate({
  body: { thirdPartyClientId: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UserThirdPartyTokenCreateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[UserThirdPartyTokenCreateRequest](src/models/user-third-party-token-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.userThirdPartyTokenCreate(request)`

- **OnSuccess**: <code>[UserThirdPartyTokenCreateResponse](src/models/user-third-party-token-create-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.UserThirdPartyTokenCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.userThirdPartyTokenCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UserThirdPartyTokenCreateResponse, ThePlaidApiClient.UserThirdPartyTokenCreateError&gt;</code>, with `result.value` of type <code>[UserThirdPartyTokenCreateResponse](src/models/user-third-party-token-create-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>userThirdPartyTokenRemove(request: ThePlaidApiClient.UserThirdPartyTokenRemoveRequestParams, options?: RequestOptions): ApiPromise&lt;UserThirdPartyTokenRemoveResponse, ThePlaidApiClient.UserThirdPartyTokenRemoveError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint is used to delete a third-party user token. Once removed, the token can no longer be used to access data associated with the user.

Any subsequent calls to retrieve information using the same third-party user token will result in an error stating the third-party user token does not exist.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.userThirdPartyTokenRemove({
    body: { thirdPartyUserToken: "some example string" },
  });
  // TODO: Handle 'response' of type UserThirdPartyTokenRemoveResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.UserThirdPartyTokenRemoveError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.userThirdPartyTokenRemove({
  body: { thirdPartyUserToken: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UserThirdPartyTokenRemoveResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[UserThirdPartyTokenRemoveRequest](src/models/user-third-party-token-remove-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.userThirdPartyTokenRemove(request)`

- **OnSuccess**: <code>[UserThirdPartyTokenRemoveResponse](src/models/user-third-party-token-remove-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.UserThirdPartyTokenRemoveError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.userThirdPartyTokenRemove(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UserThirdPartyTokenRemoveResponse, ThePlaidApiClient.UserThirdPartyTokenRemoveError&gt;</code>, with `result.value` of type <code>[UserThirdPartyTokenRemoveResponse](src/models/user-third-party-token-remove-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>userTransactionsRefresh(request: ThePlaidApiClient.UserTransactionsRefreshRequestParams, options?: RequestOptions): ApiPromise&lt;UserTransactionsRefreshResponse, ThePlaidApiClient.UserTransactionsRefreshError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

`/user/transactions/refresh` is an optional endpoint that initiates an on-demand extraction to fetch the newest transactions for a User using the Transactions bundle.
This bundle refreshes only the Transactions product data.
This endpoint is for clients who use the Transactions Insights bundle and want to proactively update all linked Items under a user.
The refresh may succeed or fail on a per-Item basis. Use the `results` array in the response to understand the outcome for each Item.

This endpoint is distinct from `/transactions/refresh`, which triggers a refresh for a single Item. Use `/user/transactions/refresh` to target all Items for a user instead.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.userTransactionsRefresh({ body: { userId: "usr_8c3ZbDBYjaqUXZ" } });
  // TODO: Handle 'response' of type UserTransactionsRefreshResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.UserTransactionsRefreshError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.userTransactionsRefresh({ body: { userId: "usr_8c3ZbDBYjaqUXZ" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UserTransactionsRefreshResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[UserTransactionsRefreshRequest](src/models/user-transactions-refresh-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.userTransactionsRefresh(request)`

- **OnSuccess**: <code>[UserTransactionsRefreshResponse](src/models/user-transactions-refresh-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.UserTransactionsRefreshError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.userTransactionsRefresh(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UserTransactionsRefreshResponse, ThePlaidApiClient.UserTransactionsRefreshError&gt;</code>, with `result.value` of type <code>[UserTransactionsRefreshResponse](src/models/user-transactions-refresh-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>userUpdate(request: ThePlaidApiClient.UserUpdateRequestParams, options?: RequestOptions): ApiPromise&lt;UserUpdateResponse, ThePlaidApiClient.UserUpdateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint updates user information for an existing `user_id` or `user_token`. If an existing `user_id` or `user_token` is missing fields required for a given use case (e.g. creating a Consumer Report) use `/user/update` to add values for those fields.

Identity updates use merge semantics: provided fields overwrite existing ones; omitted fields remain unchanged.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.userUpdate({ body: {} });
  // TODO: Handle 'response' of type UserUpdateResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.UserUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.userUpdate({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UserUpdateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>plaidNewUserApiEnabled?</code> | <code>boolean</code> | The HTTP header used in API requests to determine which set of User APIs to invoke: the legacy CRA version or the new User API version.<br>**Default**: false |
| <code>body</code> | <code>[UserUpdateRequest](src/models/user-update-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.userUpdate(request)`

- **OnSuccess**: <code>[UserUpdateResponse](src/models/user-update-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.UserUpdateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.userUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UserUpdateResponse, ThePlaidApiClient.UserUpdateError&gt;</code>, with `result.value` of type <code>[UserUpdateResponse](src/models/user-update-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>walletCreate(request: ThePlaidApiClient.WalletCreateRequestParams, options?: RequestOptions): ApiPromise&lt;WalletCreateResponse, ThePlaidApiClient.WalletCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create an e-wallet. The response is the newly created e-wallet object.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.walletCreate({ body: { isoCurrencyCode: IsoCurrencyCode.Gbp } });
  // TODO: Handle 'response' of type WalletCreateResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.WalletCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.walletCreate({ body: { isoCurrencyCode: IsoCurrencyCode.Gbp } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WalletCreateResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[WalletCreateRequest](src/models/wallet-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.walletCreate(request)`

- **OnSuccess**: <code>[WalletCreateResponse](src/models/wallet-create-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.WalletCreateError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.walletCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WalletCreateResponse, ThePlaidApiClient.WalletCreateError&gt;</code>, with `result.value` of type <code>[WalletCreateResponse](src/models/wallet-create-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>walletGet(request: ThePlaidApiClient.WalletGetRequestParams, options?: RequestOptions): ApiPromise&lt;WalletGetResponse, ThePlaidApiClient.WalletGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch an e-wallet. The response includes the current balance.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.walletGet({ body: { walletId: "some example string" } });
  // TODO: Handle 'response' of type WalletGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.WalletGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.walletGet({ body: { walletId: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WalletGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[WalletGetRequest](src/models/wallet-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.walletGet(request)`

- **OnSuccess**: <code>[WalletGetResponse](src/models/wallet-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.WalletGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.walletGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WalletGetResponse, ThePlaidApiClient.WalletGetError&gt;</code>, with `result.value` of type <code>[WalletGetResponse](src/models/wallet-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>walletList(request: ThePlaidApiClient.WalletListRequestParams, options?: RequestOptions): ApiPromise&lt;WalletListResponse, ThePlaidApiClient.WalletListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint lists all e-wallets in descending order of creation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.walletList({ body: {} });
  // TODO: Handle 'response' of type WalletListResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.WalletListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.walletList({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WalletListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[WalletListRequest](src/models/wallet-list-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.walletList(request)`

- **OnSuccess**: <code>[WalletListResponse](src/models/wallet-list-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.WalletListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.walletList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WalletListResponse, ThePlaidApiClient.WalletListError&gt;</code>, with `result.value` of type <code>[WalletListResponse](src/models/wallet-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>walletTransactionExecute(request: ThePlaidApiClient.WalletTransactionExecuteRequestParams, options?: RequestOptions): ApiPromise&lt;WalletTransactionExecuteResponse, ThePlaidApiClient.WalletTransactionExecuteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Execute a transaction using the specified e-wallet.
Specify the e-wallet to debit from, the counterparty to credit to, the idempotency key to prevent duplicate transactions, the amount and reference for the transaction.
Transactions will settle in seconds to several days, depending on the underlying payment rail.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.walletTransactionExecute({
    body: {
      idempotencyKey: "some example string",
      walletId: "some example string",
      counterparty: { name: "some example string", numbers: {} },
      amount: { isoCurrencyCode: IsoCurrencyCode.Gbp, value: 1.5 },
      reference: "some example string",
    },
  });
  // TODO: Handle 'response' of type WalletTransactionExecuteResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.WalletTransactionExecuteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.walletTransactionExecute({
  body: {
    idempotencyKey: "some example string",
    walletId: "some example string",
    counterparty: { name: "some example string", numbers: {} },
    amount: { isoCurrencyCode: IsoCurrencyCode.Gbp, value: 1.5 },
    reference: "some example string",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WalletTransactionExecuteResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[WalletTransactionExecuteRequest](src/models/wallet-transaction-execute-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.walletTransactionExecute(request)`

- **OnSuccess**: <code>[WalletTransactionExecuteResponse](src/models/wallet-transaction-execute-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.WalletTransactionExecuteError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.walletTransactionExecute(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WalletTransactionExecuteResponse, ThePlaidApiClient.WalletTransactionExecuteError&gt;</code>, with `result.value` of type <code>[WalletTransactionExecuteResponse](src/models/wallet-transaction-execute-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>walletTransactionGet(request: ThePlaidApiClient.WalletTransactionGetRequestParams, options?: RequestOptions): ApiPromise&lt;WalletTransactionGetResponse, ThePlaidApiClient.WalletTransactionGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch a specific e-wallet transaction

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.walletTransactionGet({ body: { transactionId: "some example string" } });
  // TODO: Handle 'response' of type WalletTransactionGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.WalletTransactionGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.walletTransactionGet({
  body: { transactionId: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WalletTransactionGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[WalletTransactionGetRequest](src/models/wallet-transaction-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.walletTransactionGet(request)`

- **OnSuccess**: <code>[WalletTransactionGetResponse](src/models/wallet-transaction-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.WalletTransactionGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.walletTransactionGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WalletTransactionGetResponse, ThePlaidApiClient.WalletTransactionGetError&gt;</code>, with `result.value` of type <code>[WalletTransactionGetResponse](src/models/wallet-transaction-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>walletTransactionList(request: ThePlaidApiClient.WalletTransactionListRequestParams, options?: RequestOptions): ApiPromise&lt;WalletTransactionListResponse, ThePlaidApiClient.WalletTransactionListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This endpoint lists the latest transactions of the specified e-wallet. Transactions are returned in descending order by the `created_at` time.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.walletTransactionList({ body: { walletId: "some example string" } });
  // TODO: Handle 'response' of type WalletTransactionListResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.WalletTransactionListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.walletTransactionList({
  body: { walletId: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WalletTransactionListResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[WalletTransactionListRequest](src/models/wallet-transaction-list-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.walletTransactionList(request)`

- **OnSuccess**: <code>[WalletTransactionListResponse](src/models/wallet-transaction-list-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.WalletTransactionListError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.walletTransactionList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WalletTransactionListResponse, ThePlaidApiClient.WalletTransactionListError&gt;</code>, with `result.value` of type <code>[WalletTransactionListResponse](src/models/wallet-transaction-list-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>watchlistScreeningEntityCreate(request: ThePlaidApiClient.WatchlistScreeningEntityCreateRequestParams, options?: RequestOptions): ApiPromise&lt;WatchlistScreeningEntityCreateResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new entity watchlist screening to check your customer against watchlists defined in the associated entity watchlist program. If your associated program has ongoing screening enabled, this is the profile information that will be used to monitor your customer over time.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.watchlistScreeningEntityCreate({
    body: {
      searchTerms: { entityWatchlistProgramId: "some example string", legalName: "some example string" },
    },
  });
  // TODO: Handle 'response' of type WatchlistScreeningEntityCreateResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.watchlistScreeningEntityCreate({
  body: {
    searchTerms: { entityWatchlistProgramId: "some example string", legalName: "some example string" },
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WatchlistScreeningEntityCreateResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[WatchlistScreeningEntityCreateRequest](src/models/watchlist-screening-entity-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.watchlistScreeningEntityCreate(request)`

- **OnSuccess**: <code>[WatchlistScreeningEntityCreateResponse](src/models/watchlist-screening-entity-create-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.watchlistScreeningEntityCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WatchlistScreeningEntityCreateResponse, ApiError&gt;</code>, with `result.value` of type <code>[WatchlistScreeningEntityCreateResponse](src/models/watchlist-screening-entity-create-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>watchlistScreeningEntityGet(request: ThePlaidApiClient.WatchlistScreeningEntityGetRequestParams, options?: RequestOptions): ApiPromise&lt;WatchlistScreeningEntityGetResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve an entity watchlist screening.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.watchlistScreeningEntityGet({
    body: { entityWatchlistScreeningId: "some example string" },
  });
  // TODO: Handle 'response' of type WatchlistScreeningEntityGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.watchlistScreeningEntityGet({
  body: { entityWatchlistScreeningId: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WatchlistScreeningEntityGetResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[WatchlistScreeningEntityGetRequest](src/models/watchlist-screening-entity-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.watchlistScreeningEntityGet(request)`

- **OnSuccess**: <code>[WatchlistScreeningEntityGetResponse](src/models/watchlist-screening-entity-get-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.watchlistScreeningEntityGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WatchlistScreeningEntityGetResponse, ApiError&gt;</code>, with `result.value` of type <code>[WatchlistScreeningEntityGetResponse](src/models/watchlist-screening-entity-get-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>watchlistScreeningEntityHistoryList(request: ThePlaidApiClient.WatchlistScreeningEntityHistoryListRequestParams, options?: RequestOptions): ApiPromise&lt;WatchlistScreeningEntityHistoryListResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all changes to the entity watchlist screening in reverse-chronological order. If the watchlist screening has not been edited, no history will be returned.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.watchlistScreeningEntityHistoryList({
    body: { entityWatchlistScreeningId: "some example string" },
  });
  // TODO: Handle 'response' of type WatchlistScreeningEntityHistoryListResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.watchlistScreeningEntityHistoryList({
  body: { entityWatchlistScreeningId: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WatchlistScreeningEntityHistoryListResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[WatchlistScreeningEntityHistoryListRequest](src/models/watchlist-screening-entity-history-list-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.watchlistScreeningEntityHistoryList(request)`

- **OnSuccess**: <code>[WatchlistScreeningEntityHistoryListResponse](src/models/watchlist-screening-entity-history-list-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.watchlistScreeningEntityHistoryList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WatchlistScreeningEntityHistoryListResponse, ApiError&gt;</code>, with `result.value` of type <code>[WatchlistScreeningEntityHistoryListResponse](src/models/watchlist-screening-entity-history-list-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>watchlistScreeningEntityHitList(request: ThePlaidApiClient.WatchlistScreeningEntityHitListRequestParams, options?: RequestOptions): ApiPromise&lt;WatchlistScreeningEntityHitListResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all hits for the entity watchlist screening.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.watchlistScreeningEntityHitList({
    body: { entityWatchlistScreeningId: "some example string" },
  });
  // TODO: Handle 'response' of type WatchlistScreeningEntityHitListResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.watchlistScreeningEntityHitList({
  body: { entityWatchlistScreeningId: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WatchlistScreeningEntityHitListResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[WatchlistScreeningEntityHitListRequest](src/models/watchlist-screening-entity-hit-list-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.watchlistScreeningEntityHitList(request)`

- **OnSuccess**: <code>[WatchlistScreeningEntityHitListResponse](src/models/watchlist-screening-entity-hit-list-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.watchlistScreeningEntityHitList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WatchlistScreeningEntityHitListResponse, ApiError&gt;</code>, with `result.value` of type <code>[WatchlistScreeningEntityHitListResponse](src/models/watchlist-screening-entity-hit-list-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>watchlistScreeningEntityList(request: ThePlaidApiClient.WatchlistScreeningEntityListRequestParams, options?: RequestOptions): ApiPromise&lt;WatchlistScreeningEntityListResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all entity screenings.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.watchlistScreeningEntityList({
    body: { entityWatchlistProgramId: "some example string" },
  });
  // TODO: Handle 'response' of type WatchlistScreeningEntityListResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.watchlistScreeningEntityList({
  body: { entityWatchlistProgramId: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WatchlistScreeningEntityListResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[WatchlistScreeningEntityListRequest](src/models/watchlist-screening-entity-list-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.watchlistScreeningEntityList(request)`

- **OnSuccess**: <code>[WatchlistScreeningEntityListResponse](src/models/watchlist-screening-entity-list-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.watchlistScreeningEntityList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WatchlistScreeningEntityListResponse, ApiError&gt;</code>, with `result.value` of type <code>[WatchlistScreeningEntityListResponse](src/models/watchlist-screening-entity-list-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>watchlistScreeningEntityProgramGet(request: ThePlaidApiClient.WatchlistScreeningEntityProgramGetRequestParams, options?: RequestOptions): ApiPromise&lt;WatchlistScreeningEntityProgramGetResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get an entity watchlist screening program

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.watchlistScreeningEntityProgramGet({
    body: { entityWatchlistProgramId: "some example string" },
  });
  // TODO: Handle 'response' of type WatchlistScreeningEntityProgramGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.watchlistScreeningEntityProgramGet({
  body: { entityWatchlistProgramId: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WatchlistScreeningEntityProgramGetResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[WatchlistScreeningEntityProgramGetRequest](src/models/watchlist-screening-entity-program-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.watchlistScreeningEntityProgramGet(request)`

- **OnSuccess**: <code>[WatchlistScreeningEntityProgramGetResponse](src/models/watchlist-screening-entity-program-get-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.watchlistScreeningEntityProgramGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WatchlistScreeningEntityProgramGetResponse, ApiError&gt;</code>, with `result.value` of type <code>[WatchlistScreeningEntityProgramGetResponse](src/models/watchlist-screening-entity-program-get-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>watchlistScreeningEntityProgramList(request: ThePlaidApiClient.WatchlistScreeningEntityProgramListRequestParams, options?: RequestOptions): ApiPromise&lt;WatchlistScreeningEntityProgramListResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all entity watchlist screening programs

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.watchlistScreeningEntityProgramList({ body: {} });
  // TODO: Handle 'response' of type WatchlistScreeningEntityProgramListResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.watchlistScreeningEntityProgramList({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WatchlistScreeningEntityProgramListResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[WatchlistScreeningEntityProgramListRequest](src/models/watchlist-screening-entity-program-list-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.watchlistScreeningEntityProgramList(request)`

- **OnSuccess**: <code>[WatchlistScreeningEntityProgramListResponse](src/models/watchlist-screening-entity-program-list-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.watchlistScreeningEntityProgramList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WatchlistScreeningEntityProgramListResponse, ApiError&gt;</code>, with `result.value` of type <code>[WatchlistScreeningEntityProgramListResponse](src/models/watchlist-screening-entity-program-list-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>watchlistScreeningEntityReviewCreate(request: ThePlaidApiClient.WatchlistScreeningEntityReviewCreateRequestParams, options?: RequestOptions): ApiPromise&lt;WatchlistScreeningEntityReviewCreateResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a review for an entity watchlist screening. Reviews are compliance reports created by users in your organization regarding the relevance of potential hits found by Plaid.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.watchlistScreeningEntityReviewCreate({
    body: {
      confirmedHits: ["some example string"],
      dismissedHits: ["some example string"],
      entityWatchlistScreeningId: "some example string",
    },
  });
  // TODO: Handle 'response' of type WatchlistScreeningEntityReviewCreateResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.watchlistScreeningEntityReviewCreate({
  body: {
    confirmedHits: ["some example string"],
    dismissedHits: ["some example string"],
    entityWatchlistScreeningId: "some example string",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WatchlistScreeningEntityReviewCreateResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[WatchlistScreeningEntityReviewCreateRequest](src/models/watchlist-screening-entity-review-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.watchlistScreeningEntityReviewCreate(request)`

- **OnSuccess**: <code>[WatchlistScreeningEntityReviewCreateResponse](src/models/watchlist-screening-entity-review-create-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.watchlistScreeningEntityReviewCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WatchlistScreeningEntityReviewCreateResponse, ApiError&gt;</code>, with `result.value` of type <code>[WatchlistScreeningEntityReviewCreateResponse](src/models/watchlist-screening-entity-review-create-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>watchlistScreeningEntityReviewList(request: ThePlaidApiClient.WatchlistScreeningEntityReviewListRequestParams, options?: RequestOptions): ApiPromise&lt;WatchlistScreeningEntityReviewListResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all reviews for a particular entity watchlist screening. Reviews are compliance reports created by users in your organization regarding the relevance of potential hits found by Plaid.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.watchlistScreeningEntityReviewList({
    body: { entityWatchlistScreeningId: "some example string" },
  });
  // TODO: Handle 'response' of type WatchlistScreeningEntityReviewListResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.watchlistScreeningEntityReviewList({
  body: { entityWatchlistScreeningId: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WatchlistScreeningEntityReviewListResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[WatchlistScreeningEntityReviewListRequest](src/models/watchlist-screening-entity-review-list-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.watchlistScreeningEntityReviewList(request)`

- **OnSuccess**: <code>[WatchlistScreeningEntityReviewListResponse](src/models/watchlist-screening-entity-review-list-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.watchlistScreeningEntityReviewList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WatchlistScreeningEntityReviewListResponse, ApiError&gt;</code>, with `result.value` of type <code>[WatchlistScreeningEntityReviewListResponse](src/models/watchlist-screening-entity-review-list-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>watchlistScreeningEntityUpdate(request: ThePlaidApiClient.WatchlistScreeningEntityUpdateRequestParams, options?: RequestOptions): ApiPromise&lt;WatchlistScreeningEntityUpdateResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an entity watchlist screening.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.watchlistScreeningEntityUpdate({
    body: { entityWatchlistScreeningId: "some example string" },
  });
  // TODO: Handle 'response' of type WatchlistScreeningEntityUpdateResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.watchlistScreeningEntityUpdate({
  body: { entityWatchlistScreeningId: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WatchlistScreeningEntityUpdateResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[WatchlistScreeningEntityUpdateRequest](src/models/watchlist-screening-entity-update-request.ts)</code> | The entity screening was successfully updated. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.watchlistScreeningEntityUpdate(request)`

- **OnSuccess**: <code>[WatchlistScreeningEntityUpdateResponse](src/models/watchlist-screening-entity-update-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.watchlistScreeningEntityUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WatchlistScreeningEntityUpdateResponse, ApiError&gt;</code>, with `result.value` of type <code>[WatchlistScreeningEntityUpdateResponse](src/models/watchlist-screening-entity-update-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>watchlistScreeningIndividualCreate(request: ThePlaidApiClient.WatchlistScreeningIndividualCreateRequestParams, options?: RequestOptions): ApiPromise&lt;WatchlistScreeningIndividualCreateResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new Watchlist Screening to check your customer against watchlists defined in the associated Watchlist Program. If your associated program has ongoing screening enabled, this is the profile information that will be used to monitor your customer over time.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.watchlistScreeningIndividualCreate({
    body: { searchTerms: { watchlistProgramId: "some example string", legalName: "some example string" } },
  });
  // TODO: Handle 'response' of type WatchlistScreeningIndividualCreateResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.watchlistScreeningIndividualCreate({
  body: { searchTerms: { watchlistProgramId: "some example string", legalName: "some example string" } },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WatchlistScreeningIndividualCreateResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[WatchlistScreeningIndividualCreateRequest](src/models/watchlist-screening-individual-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.watchlistScreeningIndividualCreate(request)`

- **OnSuccess**: <code>[WatchlistScreeningIndividualCreateResponse](src/models/watchlist-screening-individual-create-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.watchlistScreeningIndividualCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WatchlistScreeningIndividualCreateResponse, ApiError&gt;</code>, with `result.value` of type <code>[WatchlistScreeningIndividualCreateResponse](src/models/watchlist-screening-individual-create-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>watchlistScreeningIndividualGet(request: ThePlaidApiClient.WatchlistScreeningIndividualGetRequestParams, options?: RequestOptions): ApiPromise&lt;WatchlistScreeningIndividualGetResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a previously created individual watchlist screening

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.watchlistScreeningIndividualGet({
    body: { watchlistScreeningId: "some example string" },
  });
  // TODO: Handle 'response' of type WatchlistScreeningIndividualGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.watchlistScreeningIndividualGet({
  body: { watchlistScreeningId: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WatchlistScreeningIndividualGetResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[WatchlistScreeningIndividualGetRequest](src/models/watchlist-screening-individual-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.watchlistScreeningIndividualGet(request)`

- **OnSuccess**: <code>[WatchlistScreeningIndividualGetResponse](src/models/watchlist-screening-individual-get-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.watchlistScreeningIndividualGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WatchlistScreeningIndividualGetResponse, ApiError&gt;</code>, with `result.value` of type <code>[WatchlistScreeningIndividualGetResponse](src/models/watchlist-screening-individual-get-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>watchlistScreeningIndividualHistoryList(request: ThePlaidApiClient.WatchlistScreeningIndividualHistoryListRequestParams, options?: RequestOptions): ApiPromise&lt;WatchlistScreeningIndividualHistoryListResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all changes to the individual watchlist screening in reverse-chronological order. If the watchlist screening has not been edited, no history will be returned.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.watchlistScreeningIndividualHistoryList({
    body: { watchlistScreeningId: "some example string" },
  });
  // TODO: Handle 'response' of type WatchlistScreeningIndividualHistoryListResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.watchlistScreeningIndividualHistoryList({
  body: { watchlistScreeningId: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WatchlistScreeningIndividualHistoryListResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[WatchlistScreeningIndividualHistoryListRequest](src/models/watchlist-screening-individual-history-list-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.watchlistScreeningIndividualHistoryList(request)`

- **OnSuccess**: <code>[WatchlistScreeningIndividualHistoryListResponse](src/models/watchlist-screening-individual-history-list-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.watchlistScreeningIndividualHistoryList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WatchlistScreeningIndividualHistoryListResponse, ApiError&gt;</code>, with `result.value` of type <code>[WatchlistScreeningIndividualHistoryListResponse](src/models/watchlist-screening-individual-history-list-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>watchlistScreeningIndividualHitList(request: ThePlaidApiClient.WatchlistScreeningIndividualHitListRequestParams, options?: RequestOptions): ApiPromise&lt;WatchlistScreeningIndividualHitListResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all hits found by Plaid for a particular individual watchlist screening.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.watchlistScreeningIndividualHitList({
    body: { watchlistScreeningId: "some example string" },
  });
  // TODO: Handle 'response' of type WatchlistScreeningIndividualHitListResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.watchlistScreeningIndividualHitList({
  body: { watchlistScreeningId: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WatchlistScreeningIndividualHitListResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[WatchlistScreeningIndividualHitListRequest](src/models/watchlist-screening-individual-hit-list-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.watchlistScreeningIndividualHitList(request)`

- **OnSuccess**: <code>[WatchlistScreeningIndividualHitListResponse](src/models/watchlist-screening-individual-hit-list-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.watchlistScreeningIndividualHitList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WatchlistScreeningIndividualHitListResponse, ApiError&gt;</code>, with `result.value` of type <code>[WatchlistScreeningIndividualHitListResponse](src/models/watchlist-screening-individual-hit-list-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>watchlistScreeningIndividualList(request: ThePlaidApiClient.WatchlistScreeningIndividualListRequestParams, options?: RequestOptions): ApiPromise&lt;WatchlistScreeningIndividualListResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List previously created watchlist screenings for individuals

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.watchlistScreeningIndividualList({
    body: { watchlistProgramId: "some example string" },
  });
  // TODO: Handle 'response' of type WatchlistScreeningIndividualListResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.watchlistScreeningIndividualList({
  body: { watchlistProgramId: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WatchlistScreeningIndividualListResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[WatchlistScreeningIndividualListRequest](src/models/watchlist-screening-individual-list-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.watchlistScreeningIndividualList(request)`

- **OnSuccess**: <code>[WatchlistScreeningIndividualListResponse](src/models/watchlist-screening-individual-list-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.watchlistScreeningIndividualList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WatchlistScreeningIndividualListResponse, ApiError&gt;</code>, with `result.value` of type <code>[WatchlistScreeningIndividualListResponse](src/models/watchlist-screening-individual-list-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>watchlistScreeningIndividualProgramGet(request: ThePlaidApiClient.WatchlistScreeningIndividualProgramGetRequestParams, options?: RequestOptions): ApiPromise&lt;WatchlistScreeningIndividualProgramGetResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get an individual watchlist screening program

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.watchlistScreeningIndividualProgramGet({
    body: { watchlistProgramId: "some example string" },
  });
  // TODO: Handle 'response' of type WatchlistScreeningIndividualProgramGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.watchlistScreeningIndividualProgramGet({
  body: { watchlistProgramId: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WatchlistScreeningIndividualProgramGetResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[WatchlistScreeningIndividualProgramGetRequest](src/models/watchlist-screening-individual-program-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.watchlistScreeningIndividualProgramGet(request)`

- **OnSuccess**: <code>[WatchlistScreeningIndividualProgramGetResponse](src/models/watchlist-screening-individual-program-get-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.watchlistScreeningIndividualProgramGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WatchlistScreeningIndividualProgramGetResponse, ApiError&gt;</code>, with `result.value` of type <code>[WatchlistScreeningIndividualProgramGetResponse](src/models/watchlist-screening-individual-program-get-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>watchlistScreeningIndividualProgramList(request: ThePlaidApiClient.WatchlistScreeningIndividualProgramListRequestParams, options?: RequestOptions): ApiPromise&lt;WatchlistScreeningIndividualProgramListResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all individual watchlist screening programs

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.watchlistScreeningIndividualProgramList({ body: {} });
  // TODO: Handle 'response' of type WatchlistScreeningIndividualProgramListResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.watchlistScreeningIndividualProgramList({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WatchlistScreeningIndividualProgramListResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[WatchlistScreeningIndividualProgramListRequest](src/models/watchlist-screening-individual-program-list-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.watchlistScreeningIndividualProgramList(request)`

- **OnSuccess**: <code>[WatchlistScreeningIndividualProgramListResponse](src/models/watchlist-screening-individual-program-list-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.watchlistScreeningIndividualProgramList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WatchlistScreeningIndividualProgramListResponse, ApiError&gt;</code>, with `result.value` of type <code>[WatchlistScreeningIndividualProgramListResponse](src/models/watchlist-screening-individual-program-list-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>watchlistScreeningIndividualReviewCreate(request: ThePlaidApiClient.WatchlistScreeningIndividualReviewCreateRequestParams, options?: RequestOptions): ApiPromise&lt;WatchlistScreeningIndividualReviewCreateResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a review for the individual watchlist screening. Reviews are compliance reports created by users in your organization regarding the relevance of potential hits found by Plaid.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.watchlistScreeningIndividualReviewCreate({
    body: {
      confirmedHits: ["some example string"],
      dismissedHits: ["some example string"],
      watchlistScreeningId: "some example string",
    },
  });
  // TODO: Handle 'response' of type WatchlistScreeningIndividualReviewCreateResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.watchlistScreeningIndividualReviewCreate({
  body: {
    confirmedHits: ["some example string"],
    dismissedHits: ["some example string"],
    watchlistScreeningId: "some example string",
  },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WatchlistScreeningIndividualReviewCreateResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[WatchlistScreeningIndividualReviewCreateRequest](src/models/watchlist-screening-individual-review-create-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.watchlistScreeningIndividualReviewCreate(request)`

- **OnSuccess**: <code>[WatchlistScreeningIndividualReviewCreateResponse](src/models/watchlist-screening-individual-review-create-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.watchlistScreeningIndividualReviewCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WatchlistScreeningIndividualReviewCreateResponse, ApiError&gt;</code>, with `result.value` of type <code>[WatchlistScreeningIndividualReviewCreateResponse](src/models/watchlist-screening-individual-review-create-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>watchlistScreeningIndividualReviewList(request: ThePlaidApiClient.WatchlistScreeningIndividualReviewListRequestParams, options?: RequestOptions): ApiPromise&lt;WatchlistScreeningIndividualReviewListResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all reviews for the individual watchlist screening.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.watchlistScreeningIndividualReviewList({
    body: { watchlistScreeningId: "some example string" },
  });
  // TODO: Handle 'response' of type WatchlistScreeningIndividualReviewListResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.watchlistScreeningIndividualReviewList({
  body: { watchlistScreeningId: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WatchlistScreeningIndividualReviewListResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[WatchlistScreeningIndividualReviewListRequest](src/models/watchlist-screening-individual-review-list-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.watchlistScreeningIndividualReviewList(request)`

- **OnSuccess**: <code>[WatchlistScreeningIndividualReviewListResponse](src/models/watchlist-screening-individual-review-list-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.watchlistScreeningIndividualReviewList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WatchlistScreeningIndividualReviewListResponse, ApiError&gt;</code>, with `result.value` of type <code>[WatchlistScreeningIndividualReviewListResponse](src/models/watchlist-screening-individual-review-list-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>watchlistScreeningIndividualUpdate(request: ThePlaidApiClient.WatchlistScreeningIndividualUpdateRequestParams, options?: RequestOptions): ApiPromise&lt;WatchlistScreeningIndividualUpdateResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a specific individual watchlist screening. This endpoint can be used to add additional customer information, correct outdated information, add a reference id, assign the individual to a reviewer, and update which program it is associated with. Please note that you may not update `search_terms` and `status` at the same time since editing `search_terms` may trigger an automatic `status` change.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.watchlistScreeningIndividualUpdate({
    body: { watchlistScreeningId: "some example string" },
  });
  // TODO: Handle 'response' of type WatchlistScreeningIndividualUpdateResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.watchlistScreeningIndividualUpdate({
  body: { watchlistScreeningId: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WatchlistScreeningIndividualUpdateResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[WatchlistScreeningIndividualUpdateRequest](src/models/watchlist-screening-individual-update-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.watchlistScreeningIndividualUpdate(request)`

- **OnSuccess**: <code>[WatchlistScreeningIndividualUpdateResponse](src/models/watchlist-screening-individual-update-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.watchlistScreeningIndividualUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WatchlistScreeningIndividualUpdateResponse, ApiError&gt;</code>, with `result.value` of type <code>[WatchlistScreeningIndividualUpdateResponse](src/models/watchlist-screening-individual-update-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>webhookVerificationKeyGet(request: ThePlaidApiClient.WebhookVerificationKeyGetRequestParams, options?: RequestOptions): ApiPromise&lt;WebhookVerificationKeyGetResponse, ThePlaidApiClient.WebhookVerificationKeyGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Plaid signs all outgoing webhooks and provides JSON Web Tokens (JWTs) so that you can verify the authenticity of any incoming webhooks to your application. A message signature is included in the `Plaid-Verification` header.

The `/webhook_verification_key/get` endpoint provides a JSON Web Key (JWK) that can be used to verify a JWT.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhookVerificationKeyGet({ body: { keyId: "some example string" } });
  // TODO: Handle 'response' of type WebhookVerificationKeyGetResponse
} catch (err) {
  // TODO: Handle 'err' of type ThePlaidApiClient.WebhookVerificationKeyGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhookVerificationKeyGet({
  body: { keyId: "some example string" },
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type WebhookVerificationKeyGetResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[WebhookVerificationKeyGetRequest](src/models/webhook-verification-key-get-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhookVerificationKeyGet(request)`

- **OnSuccess**: <code>[WebhookVerificationKeyGetResponse](src/models/webhook-verification-key-get-response.ts)</code>
- **OnError**: throws <code>[ThePlaidApiClient.WebhookVerificationKeyGetError](src/client.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.webhookVerificationKeyGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;WebhookVerificationKeyGetResponse, ThePlaidApiClient.WebhookVerificationKeyGetError&gt;</code>, with `result.value` of type <code>[WebhookVerificationKeyGetResponse](src/models/webhook-verification-key-get-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[ThePlaidApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

