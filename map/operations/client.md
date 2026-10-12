<!-- Generated file — do not edit; regenerated with the SDK. -->

# ThePlaidApiClient — ungrouped operations

Accessor: `client` (the client itself) · Source: `src/client.ts` · 335 operations · Request and error types: namespace `ThePlaidApiClient`

Operations the spec leaves untagged are methods on the client rather than on a resource, so there is no accessor property to go through. The request type still lives in a namespace merged onto the exported class, so you write `ThePlaidApiClient.AccountsBalanceGetRequestParams`.

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `the-plaid-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### accountsBalanceGet

- **Signature**: `accountsBalanceGet(request: ThePlaidApiClient.AccountsBalanceGetRequestParams, options?: RequestOptions): ApiPromise<AccountsGetResponse, ThePlaidApiClient.AccountsBalanceGetError>`
- **Wire**: `POST /accounts/balance/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AccountsGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.AccountsBalanceGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.AccountsBalanceGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `AccountsBalanceGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AccountsBalanceGetRequest` | `accountsBalanceGetRequestSchema` | `src/models/accounts-balance-get-request.ts` |
| `AccountsGetResponse` | `accountsGetResponseSchema` | `src/models/accounts-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### accountsGet

- **Signature**: `accountsGet(request: ThePlaidApiClient.AccountsGetRequestParams, options?: RequestOptions): ApiPromise<AccountsGetResponse, ThePlaidApiClient.AccountsGetError>`
- **Wire**: `POST /accounts/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AccountsGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.AccountsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.AccountsGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `AccountsGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AccountsGetRequest` | `accountsGetRequestSchema` | `src/models/accounts-get-request.ts` |
| `AccountsGetResponse` | `accountsGetResponseSchema` | `src/models/accounts-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### applicationGet

- **Signature**: `applicationGet(request: ThePlaidApiClient.ApplicationGetRequestParams, options?: RequestOptions): ApiPromise<ApplicationGetResponse, ThePlaidApiClient.ApplicationGetError>`
- **Wire**: `POST /application/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApplicationGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.ApplicationGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.ApplicationGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApplicationGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApplicationGetRequest` | `applicationGetRequestSchema` | `src/models/application-get-request.ts` |
| `ApplicationGetResponse` | `applicationGetResponseSchema` | `src/models/application-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### assetReportAuditCopyCreate

- **Signature**: `assetReportAuditCopyCreate(request: ThePlaidApiClient.AssetReportAuditCopyCreateRequestParams, options?: RequestOptions): ApiPromise<AssetReportAuditCopyCreateResponse, ThePlaidApiClient.AssetReportAuditCopyCreateError>`
- **Wire**: `POST /asset_report/audit_copy/create`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AssetReportAuditCopyCreateResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.AssetReportAuditCopyCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.AssetReportAuditCopyCreateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `AssetReportAuditCopyCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AssetReportAuditCopyCreateRequest` | `assetReportAuditCopyCreateRequestSchema` | `src/models/asset-report-audit-copy-create-request.ts` |
| `AssetReportAuditCopyCreateResponse` | `assetReportAuditCopyCreateResponseSchema` | `src/models/asset-report-audit-copy-create-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### assetReportAuditCopyGet

- **Signature**: `assetReportAuditCopyGet(request: ThePlaidApiClient.AssetReportAuditCopyGetRequestParams, options?: RequestOptions): ApiPromise<AssetReportGetResponse, ThePlaidApiClient.AssetReportAuditCopyGetError>`
- **Wire**: `POST /asset_report/audit_copy/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AssetReportGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.AssetReportAuditCopyGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.AssetReportAuditCopyGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `AssetReportAuditCopyGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AssetReportAuditCopyGetRequest` | `assetReportAuditCopyGetRequestSchema` | `src/models/asset-report-audit-copy-get-request.ts` |
| `AssetReportGetResponse` | `assetReportGetResponseSchema` | `src/models/asset-report-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### assetReportAuditCopyPdfGet

- **Signature**: `assetReportAuditCopyPdfGet(request: ThePlaidApiClient.AssetReportAuditCopyPdfGetRequestParams, options?: RequestOptions): ApiPromise<undefined, ThePlaidApiClient.AssetReportAuditCopyPdfGetError>`
- **Wire**: `POST /asset_report/audit_copy/pdf/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.AssetReportAuditCopyPdfGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.AssetReportAuditCopyPdfGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `AssetReportAuditCopyPdfGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AssetReportAuditCopyPdfGetRequest` | `assetReportAuditCopyPdfGetRequestSchema` | `src/models/asset-report-audit-copy-pdf-get-request.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### assetReportAuditCopyRemove

- **Signature**: `assetReportAuditCopyRemove(request: ThePlaidApiClient.AssetReportAuditCopyRemoveRequestParams, options?: RequestOptions): ApiPromise<AssetReportAuditCopyRemoveResponse, ThePlaidApiClient.AssetReportAuditCopyRemoveError>`
- **Wire**: `POST /asset_report/audit_copy/remove`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AssetReportAuditCopyRemoveResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.AssetReportAuditCopyRemoveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.AssetReportAuditCopyRemoveRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `AssetReportAuditCopyRemoveRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AssetReportAuditCopyRemoveRequest` | `assetReportAuditCopyRemoveRequestSchema` | `src/models/asset-report-audit-copy-remove-request.ts` |
| `AssetReportAuditCopyRemoveResponse` | `assetReportAuditCopyRemoveResponseSchema` | `src/models/asset-report-audit-copy-remove-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### assetReportCreate

- **Signature**: `assetReportCreate(request: ThePlaidApiClient.AssetReportCreateRequestParams, options?: RequestOptions): ApiPromise<AssetReportCreateResponse, ThePlaidApiClient.AssetReportCreateError>`
- **Wire**: `POST /asset_report/create`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AssetReportCreateResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.AssetReportCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.AssetReportCreateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `AssetReportCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AssetReportCreateRequest` | `assetReportCreateRequestSchema` | `src/models/asset-report-create-request.ts` |
| `AssetReportCreateResponse` | `assetReportCreateResponseSchema` | `src/models/asset-report-create-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### assetReportFilter

- **Signature**: `assetReportFilter(request: ThePlaidApiClient.AssetReportFilterRequestParams, options?: RequestOptions): ApiPromise<AssetReportFilterResponse, ThePlaidApiClient.AssetReportFilterError>`
- **Wire**: `POST /asset_report/filter`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AssetReportFilterResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.AssetReportFilterError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.AssetReportFilterRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `AssetReportFilterRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AssetReportFilterRequest` | `assetReportFilterRequestSchema` | `src/models/asset-report-filter-request.ts` |
| `AssetReportFilterResponse` | `assetReportFilterResponseSchema` | `src/models/asset-report-filter-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### assetReportGet

- **Signature**: `assetReportGet(request: ThePlaidApiClient.AssetReportGetRequestParams, options?: RequestOptions): ApiPromise<AssetReportGetResponse, ThePlaidApiClient.AssetReportGetError>`
- **Wire**: `POST /asset_report/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AssetReportGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.AssetReportGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.AssetReportGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `AssetReportGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AssetReportGetRequest` | `assetReportGetRequestSchema` | `src/models/asset-report-get-request.ts` |
| `AssetReportGetResponse` | `assetReportGetResponseSchema` | `src/models/asset-report-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### assetReportPdfGet

- **Signature**: `assetReportPdfGet(request: ThePlaidApiClient.AssetReportPdfGetRequestParams, options?: RequestOptions): ApiPromise<undefined, ThePlaidApiClient.AssetReportPdfGetError>`
- **Wire**: `POST /asset_report/pdf/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.AssetReportPdfGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.AssetReportPdfGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `AssetReportPdfGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AssetReportPdfGetRequest` | `assetReportPdfGetRequestSchema` | `src/models/asset-report-pdf-get-request.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### assetReportRefresh

- **Signature**: `assetReportRefresh(request: ThePlaidApiClient.AssetReportRefreshRequestParams, options?: RequestOptions): ApiPromise<AssetReportRefreshResponse, ThePlaidApiClient.AssetReportRefreshError>`
- **Wire**: `POST /asset_report/refresh`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AssetReportRefreshResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.AssetReportRefreshError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.AssetReportRefreshRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `AssetReportRefreshRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AssetReportRefreshRequest` | `assetReportRefreshRequestSchema` | `src/models/asset-report-refresh-request.ts` |
| `AssetReportRefreshResponse` | `assetReportRefreshResponseSchema` | `src/models/asset-report-refresh-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### assetReportRemove

- **Signature**: `assetReportRemove(request: ThePlaidApiClient.AssetReportRemoveRequestParams, options?: RequestOptions): ApiPromise<AssetReportRemoveResponse, ThePlaidApiClient.AssetReportRemoveError>`
- **Wire**: `POST /asset_report/remove`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AssetReportRemoveResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.AssetReportRemoveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.AssetReportRemoveRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `AssetReportRemoveRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AssetReportRemoveRequest` | `assetReportRemoveRequestSchema` | `src/models/asset-report-remove-request.ts` |
| `AssetReportRemoveResponse` | `assetReportRemoveResponseSchema` | `src/models/asset-report-remove-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### authGet

- **Signature**: `authGet(request: ThePlaidApiClient.AuthGetRequestParams, options?: RequestOptions): ApiPromise<AuthGetResponse, ThePlaidApiClient.AuthGetError>`
- **Wire**: `POST /auth/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AuthGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.AuthGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.AuthGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `AuthGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AuthGetRequest` | `authGetRequestSchema` | `src/models/auth-get-request.ts` |
| `AuthGetResponse` | `authGetResponseSchema` | `src/models/auth-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### authVerify

- **Signature**: `authVerify(request: ThePlaidApiClient.AuthVerifyRequestParams, options?: RequestOptions): ApiPromise<AuthVerifyResponse, ThePlaidApiClient.AuthVerifyError>`
- **Wire**: `POST /auth/verify`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AuthVerifyResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.AuthVerifyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.AuthVerifyRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `AuthVerifyRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AuthVerifyRequest` | `authVerifyRequestSchema` | `src/models/auth-verify-request.ts` |
| `AuthVerifyResponse` | `authVerifyResponseSchema` | `src/models/auth-verify-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### bankTransferBalanceGet

- **Signature**: `bankTransferBalanceGet(request: ThePlaidApiClient.BankTransferBalanceGetRequestParams, options?: RequestOptions): ApiPromise<BankTransferBalanceGetResponse, ThePlaidApiClient.BankTransferBalanceGetError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /bank_transfer/balance/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BankTransferBalanceGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.BankTransferBalanceGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.BankTransferBalanceGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BankTransferBalanceGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BankTransferBalanceGetRequest` | `bankTransferBalanceGetRequestSchema` | `src/models/bank-transfer-balance-get-request.ts` |
| `BankTransferBalanceGetResponse` | `bankTransferBalanceGetResponseSchema` | `src/models/bank-transfer-balance-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### bankTransferCancel

- **Signature**: `bankTransferCancel(request: ThePlaidApiClient.BankTransferCancelRequestParams, options?: RequestOptions): ApiPromise<BankTransferCancelResponse, ThePlaidApiClient.BankTransferCancelError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /bank_transfer/cancel`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BankTransferCancelResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.BankTransferCancelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.BankTransferCancelRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BankTransferCancelRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BankTransferCancelRequest` | `bankTransferCancelRequestSchema` | `src/models/bank-transfer-cancel-request.ts` |
| `BankTransferCancelResponse` | `bankTransferCancelResponseSchema` | `src/models/bank-transfer-cancel-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### bankTransferCreate

- **Signature**: `bankTransferCreate(request: ThePlaidApiClient.BankTransferCreateRequestParams, options?: RequestOptions): ApiPromise<BankTransferCreateResponse, ThePlaidApiClient.BankTransferCreateError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /bank_transfer/create`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BankTransferCreateResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.BankTransferCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.BankTransferCreateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BankTransferCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BankTransferCreateRequest` | `bankTransferCreateRequestSchema` | `src/models/bank-transfer-create-request.ts` |
| `BankTransferCreateResponse` | `bankTransferCreateResponseSchema` | `src/models/bank-transfer-create-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### bankTransferEventList

- **Signature**: `bankTransferEventList(request: ThePlaidApiClient.BankTransferEventListRequestParams, options?: RequestOptions): ApiPromise<BankTransferEventListResponse, ThePlaidApiClient.BankTransferEventListError>`
- **Wire**: `POST /bank_transfer/event/list`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BankTransferEventListResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.BankTransferEventListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.BankTransferEventListRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BankTransferEventListRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BankTransferEventListRequest` | `bankTransferEventListRequestSchema` | `src/models/bank-transfer-event-list-request.ts` |
| `BankTransferEventListResponse` | `bankTransferEventListResponseSchema` | `src/models/bank-transfer-event-list-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### bankTransferEventSync

- **Signature**: `bankTransferEventSync(request: ThePlaidApiClient.BankTransferEventSyncRequestParams, options?: RequestOptions): ApiPromise<BankTransferEventSyncResponse, ThePlaidApiClient.BankTransferEventSyncError>`
- **Wire**: `POST /bank_transfer/event/sync`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BankTransferEventSyncResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.BankTransferEventSyncError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.BankTransferEventSyncRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BankTransferEventSyncRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BankTransferEventSyncRequest` | `bankTransferEventSyncRequestSchema` | `src/models/bank-transfer-event-sync-request.ts` |
| `BankTransferEventSyncResponse` | `bankTransferEventSyncResponseSchema` | `src/models/bank-transfer-event-sync-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### bankTransferGet

- **Signature**: `bankTransferGet(request: ThePlaidApiClient.BankTransferGetRequestParams, options?: RequestOptions): ApiPromise<BankTransferGetResponse, ThePlaidApiClient.BankTransferGetError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /bank_transfer/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BankTransferGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.BankTransferGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.BankTransferGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BankTransferGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BankTransferGetRequest` | `bankTransferGetRequestSchema` | `src/models/bank-transfer-get-request.ts` |
| `BankTransferGetResponse` | `bankTransferGetResponseSchema` | `src/models/bank-transfer-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### bankTransferList

- **Signature**: `bankTransferList(request: ThePlaidApiClient.BankTransferListRequestParams, options?: RequestOptions): ApiPromise<BankTransferListResponse, ThePlaidApiClient.BankTransferListError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /bank_transfer/list`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BankTransferListResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.BankTransferListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.BankTransferListRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BankTransferListRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BankTransferListRequest` | `bankTransferListRequestSchema` | `src/models/bank-transfer-list-request.ts` |
| `BankTransferListResponse` | `bankTransferListResponseSchema` | `src/models/bank-transfer-list-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### bankTransferMigrateAccount

- **Signature**: `bankTransferMigrateAccount(request: ThePlaidApiClient.BankTransferMigrateAccountRequestParams, options?: RequestOptions): ApiPromise<BankTransferMigrateAccountResponse, ThePlaidApiClient.BankTransferMigrateAccountError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /bank_transfer/migrate_account`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BankTransferMigrateAccountResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.BankTransferMigrateAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.BankTransferMigrateAccountRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BankTransferMigrateAccountRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BankTransferMigrateAccountRequest` | `bankTransferMigrateAccountRequestSchema` | `src/models/bank-transfer-migrate-account-request.ts` |
| `BankTransferMigrateAccountResponse` | `bankTransferMigrateAccountResponseSchema` | `src/models/bank-transfer-migrate-account-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### bankTransferSweepGet

- **Signature**: `bankTransferSweepGet(request: ThePlaidApiClient.BankTransferSweepGetRequestParams, options?: RequestOptions): ApiPromise<BankTransferSweepGetResponse, ThePlaidApiClient.BankTransferSweepGetError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /bank_transfer/sweep/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BankTransferSweepGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.BankTransferSweepGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.BankTransferSweepGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BankTransferSweepGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BankTransferSweepGetRequest` | `bankTransferSweepGetRequestSchema` | `src/models/bank-transfer-sweep-get-request.ts` |
| `BankTransferSweepGetResponse` | `bankTransferSweepGetResponseSchema` | `src/models/bank-transfer-sweep-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### bankTransferSweepList

- **Signature**: `bankTransferSweepList(request: ThePlaidApiClient.BankTransferSweepListRequestParams, options?: RequestOptions): ApiPromise<BankTransferSweepListResponse, ThePlaidApiClient.BankTransferSweepListError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /bank_transfer/sweep/list`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BankTransferSweepListResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.BankTransferSweepListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.BankTransferSweepListRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BankTransferSweepListRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BankTransferSweepListRequest` | `bankTransferSweepListRequestSchema` | `src/models/bank-transfer-sweep-list-request.ts` |
| `BankTransferSweepListResponse` | `bankTransferSweepListResponseSchema` | `src/models/bank-transfer-sweep-list-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### beaconAccountRiskEvaluate

- **Signature**: `beaconAccountRiskEvaluate(request: ThePlaidApiClient.BeaconAccountRiskEvaluateRequestParams, options?: RequestOptions): ApiPromise<BeaconAccountRiskEvaluateResponse, ThePlaidApiClient.BeaconAccountRiskEvaluateError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /beacon/account_risk/v1/evaluate`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BeaconAccountRiskEvaluateResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.BeaconAccountRiskEvaluateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.BeaconAccountRiskEvaluateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BeaconAccountRiskEvaluateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BeaconAccountRiskEvaluateRequest` | `beaconAccountRiskEvaluateRequestSchema` | `src/models/beacon-account-risk-evaluate-request.ts` |
| `BeaconAccountRiskEvaluateResponse` | `beaconAccountRiskEvaluateResponseSchema` | `src/models/beacon-account-risk-evaluate-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### beaconDuplicateGet

- **Signature**: `beaconDuplicateGet(request: ThePlaidApiClient.BeaconDuplicateGetRequestParams, options?: RequestOptions): ApiPromise<BeaconDuplicateGetResponse, ApiError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /beacon/duplicate/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BeaconDuplicateGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ThePlaidApiClient.BeaconDuplicateGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BeaconDuplicateGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BeaconDuplicateGetRequest` | `beaconDuplicateGetRequestSchema` | `src/models/beacon-duplicate-get-request.ts` |
| `BeaconDuplicateGetResponse` | `beaconDuplicateGetResponseSchema` | `src/models/beacon-duplicate-get-response.ts` |

### beaconReportCreate

- **Signature**: `beaconReportCreate(request: ThePlaidApiClient.BeaconReportCreateRequestParams, options?: RequestOptions): ApiPromise<BeaconReportCreateResponse, ApiError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /beacon/report/create`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BeaconReportCreateResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ThePlaidApiClient.BeaconReportCreateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BeaconReportCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BeaconReportCreateRequest` | `beaconReportCreateRequestSchema` | `src/models/beacon-report-create-request.ts` |
| `BeaconReportCreateResponse` | `beaconReportCreateResponseSchema` | `src/models/beacon-report-create-response.ts` |

### beaconReportGet

- **Signature**: `beaconReportGet(request: ThePlaidApiClient.BeaconReportGetRequestParams, options?: RequestOptions): ApiPromise<BeaconReportGetResponse, ApiError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /beacon/report/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BeaconReportGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ThePlaidApiClient.BeaconReportGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BeaconReportGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BeaconReportGetRequest` | `beaconReportGetRequestSchema` | `src/models/beacon-report-get-request.ts` |
| `BeaconReportGetResponse` | `beaconReportGetResponseSchema` | `src/models/beacon-report-get-response.ts` |

### beaconReportList

- **Signature**: `beaconReportList(request: ThePlaidApiClient.BeaconReportListRequestParams, options?: RequestOptions): ApiPromise<BeaconReportListResponse, ApiError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /beacon/report/list`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BeaconReportListResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ThePlaidApiClient.BeaconReportListRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BeaconReportListRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BeaconReportListRequest` | `beaconReportListRequestSchema` | `src/models/beacon-report-list-request.ts` |
| `BeaconReportListResponse` | `beaconReportListResponseSchema` | `src/models/beacon-report-list-response.ts` |

### beaconReportSyndicationGet

- **Signature**: `beaconReportSyndicationGet(request: ThePlaidApiClient.BeaconReportSyndicationGetRequestParams, options?: RequestOptions): ApiPromise<BeaconReportSyndicationGetResponse, ApiError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /beacon/report_syndication/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BeaconReportSyndicationGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ThePlaidApiClient.BeaconReportSyndicationGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BeaconReportSyndicationGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BeaconReportSyndicationGetRequest` | `beaconReportSyndicationGetRequestSchema` | `src/models/beacon-report-syndication-get-request.ts` |
| `BeaconReportSyndicationGetResponse` | `beaconReportSyndicationGetResponseSchema` | `src/models/beacon-report-syndication-get-response.ts` |

### beaconReportSyndicationList

- **Signature**: `beaconReportSyndicationList(request: ThePlaidApiClient.BeaconReportSyndicationListRequestParams, options?: RequestOptions): ApiPromise<BeaconReportSyndicationListResponse, ApiError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /beacon/report_syndication/list`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BeaconReportSyndicationListResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ThePlaidApiClient.BeaconReportSyndicationListRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BeaconReportSyndicationListRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BeaconReportSyndicationListRequest` | `beaconReportSyndicationListRequestSchema` | `src/models/beacon-report-syndication-list-request.ts` |
| `BeaconReportSyndicationListResponse` | `beaconReportSyndicationListResponseSchema` | `src/models/beacon-report-syndication-list-response.ts` |

### beaconUserAccountInsightsGet

- **Signature**: `beaconUserAccountInsightsGet(request: ThePlaidApiClient.BeaconUserAccountInsightsGetRequestParams, options?: RequestOptions): ApiPromise<BeaconUserAccountInsightsGetResponse, ApiError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /beacon/user/account_insights/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BeaconUserAccountInsightsGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ThePlaidApiClient.BeaconUserAccountInsightsGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BeaconUserAccountInsightsGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BeaconUserAccountInsightsGetRequest` | `beaconUserAccountInsightsGetRequestSchema` | `src/models/beacon-user-account-insights-get-request.ts` |
| `BeaconUserAccountInsightsGetResponse` | `beaconUserAccountInsightsGetResponseSchema` | `src/models/beacon-user-account-insights-get-response.ts` |

### beaconUserCreate

- **Signature**: `beaconUserCreate(request: ThePlaidApiClient.BeaconUserCreateRequestParams, options?: RequestOptions): ApiPromise<BeaconUserCreateResponse, ApiError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /beacon/user/create`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BeaconUserCreateResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ThePlaidApiClient.BeaconUserCreateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BeaconUserCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BeaconUserCreateRequest` | `beaconUserCreateRequestSchema` | `src/models/beacon-user-create-request.ts` |
| `BeaconUserCreateResponse` | `beaconUserCreateResponseSchema` | `src/models/beacon-user-create-response.ts` |

### beaconUserGet

- **Signature**: `beaconUserGet(request: ThePlaidApiClient.BeaconUserGetRequestParams, options?: RequestOptions): ApiPromise<BeaconUserGetResponse, ApiError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /beacon/user/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BeaconUserGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ThePlaidApiClient.BeaconUserGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BeaconUserGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BeaconUserGetRequest` | `beaconUserGetRequestSchema` | `src/models/beacon-user-get-request.ts` |
| `BeaconUserGetResponse` | `beaconUserGetResponseSchema` | `src/models/beacon-user-get-response.ts` |

### beaconUserHistoryList

- **Signature**: `beaconUserHistoryList(request: ThePlaidApiClient.BeaconUserHistoryListRequestParams, options?: RequestOptions): ApiPromise<BeaconUserHistoryListResponse, ApiError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /beacon/user/history/list`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BeaconUserHistoryListResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ThePlaidApiClient.BeaconUserHistoryListRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BeaconUserHistoryListRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BeaconUserHistoryListRequest` | `beaconUserHistoryListRequestSchema` | `src/models/beacon-user-history-list-request.ts` |
| `BeaconUserHistoryListResponse` | `beaconUserHistoryListResponseSchema` | `src/models/beacon-user-history-list-response.ts` |

### beaconUserReview

- **Signature**: `beaconUserReview(request: ThePlaidApiClient.BeaconUserReviewRequestParams, options?: RequestOptions): ApiPromise<BeaconUserGetResponse, ApiError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /beacon/user/review`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BeaconUserGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ThePlaidApiClient.BeaconUserReviewRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BeaconUserReviewRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BeaconUserReviewRequest` | `beaconUserReviewRequestSchema` | `src/models/beacon-user-review-request.ts` |
| `BeaconUserGetResponse` | `beaconUserGetResponseSchema` | `src/models/beacon-user-get-response.ts` |

### beaconUserUpdate

- **Signature**: `beaconUserUpdate(request: ThePlaidApiClient.BeaconUserUpdateRequestParams, options?: RequestOptions): ApiPromise<BeaconUserUpdateResponse, ApiError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /beacon/user/update`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BeaconUserUpdateResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ThePlaidApiClient.BeaconUserUpdateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BeaconUserUpdateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BeaconUserUpdateRequest` | `beaconUserUpdateRequestSchema` | `src/models/beacon-user-update-request.ts` |
| `BeaconUserUpdateResponse` | `beaconUserUpdateResponseSchema` | `src/models/beacon-user-update-response.ts` |

### betaEwaReportV1Get

- **Signature**: `betaEwaReportV1Get(request: ThePlaidApiClient.BetaEwaReportV1GetRequestParams, options?: RequestOptions): ApiPromise<BetaEwaReportV1GetResponse, ThePlaidApiClient.BetaEwaReportV1GetError>`
- **Wire**: `POST /beta/ewa_report/v1/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BetaEwaReportV1GetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.BetaEwaReportV1GetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.BetaEwaReportV1GetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BetaEwaReportV1GetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BetaEwaReportV1GetRequest` | `betaEwaReportV1GetRequestSchema` | `src/models/beta-ewa-report-v1-get-request.ts` |
| `BetaEwaReportV1GetResponse` | `betaEwaReportV1GetResponseSchema` | `src/models/beta-ewa-report-v1-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### betaPartnerCustomerV1Create

- **Signature**: `betaPartnerCustomerV1Create(request: ThePlaidApiClient.BetaPartnerCustomerV1CreateRequestParams, options?: RequestOptions): ApiPromise<BetaPartnerCustomerV1CreateResponse, ThePlaidApiClient.BetaPartnerCustomerV1CreateError>`
- **Wire**: `POST /beta/partner/customer/v1/create`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BetaPartnerCustomerV1CreateResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.BetaPartnerCustomerV1CreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.BetaPartnerCustomerV1CreateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BetaPartnerCustomerV1CreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BetaPartnerCustomerV1CreateRequest` | `betaPartnerCustomerV1CreateRequestSchema` | `src/models/beta-partner-customer-v1-create-request.ts` |
| `BetaPartnerCustomerV1CreateResponse` | `betaPartnerCustomerV1CreateResponseSchema` | `src/models/beta-partner-customer-v1-create-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### betaPartnerCustomerV1Enable

- **Signature**: `betaPartnerCustomerV1Enable(request: ThePlaidApiClient.BetaPartnerCustomerV1EnableRequestParams, options?: RequestOptions): ApiPromise<BetaPartnerCustomerV1EnableResponse, ThePlaidApiClient.BetaPartnerCustomerV1EnableError>`
- **Wire**: `POST /beta/partner/customer/v1/enable`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BetaPartnerCustomerV1EnableResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.BetaPartnerCustomerV1EnableError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.BetaPartnerCustomerV1EnableRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BetaPartnerCustomerV1EnableRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BetaPartnerCustomerV1EnableRequest` | `betaPartnerCustomerV1EnableRequestSchema` | `src/models/beta-partner-customer-v1-enable-request.ts` |
| `BetaPartnerCustomerV1EnableResponse` | `betaPartnerCustomerV1EnableResponseSchema` | `src/models/beta-partner-customer-v1-enable-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### betaPartnerCustomerV1Get

- **Signature**: `betaPartnerCustomerV1Get(request: ThePlaidApiClient.BetaPartnerCustomerV1GetRequestParams, options?: RequestOptions): ApiPromise<BetaPartnerCustomerV1GetResponse, ThePlaidApiClient.BetaPartnerCustomerV1GetError>`
- **Wire**: `POST /beta/partner/customer/v1/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BetaPartnerCustomerV1GetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.BetaPartnerCustomerV1GetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.BetaPartnerCustomerV1GetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BetaPartnerCustomerV1GetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BetaPartnerCustomerV1GetRequest` | `betaPartnerCustomerV1GetRequestSchema` | `src/models/beta-partner-customer-v1-get-request.ts` |
| `BetaPartnerCustomerV1GetResponse` | `betaPartnerCustomerV1GetResponseSchema` | `src/models/beta-partner-customer-v1-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### betaPartnerCustomerV1Update

- **Signature**: `betaPartnerCustomerV1Update(request: ThePlaidApiClient.BetaPartnerCustomerV1UpdateRequestParams, options?: RequestOptions): ApiPromise<BetaPartnerCustomerV1UpdateResponse, ThePlaidApiClient.BetaPartnerCustomerV1UpdateError>`
- **Wire**: `POST /beta/partner/customer/v1/update`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BetaPartnerCustomerV1UpdateResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.BetaPartnerCustomerV1UpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.BetaPartnerCustomerV1UpdateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BetaPartnerCustomerV1UpdateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BetaPartnerCustomerV1UpdateRequest` | `betaPartnerCustomerV1UpdateRequestSchema` | `src/models/beta-partner-customer-v1-update-request.ts` |
| `BetaPartnerCustomerV1UpdateResponse` | `betaPartnerCustomerV1UpdateResponseSchema` | `src/models/beta-partner-customer-v1-update-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### businessVerificationCreate

- **Signature**: `businessVerificationCreate(request: ThePlaidApiClient.BusinessVerificationCreateRequestParams, options?: RequestOptions): ApiPromise<BusinessVerificationCreateResponse, ApiError>`
- **Wire**: `POST /business_verification/create`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BusinessVerificationCreateResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ThePlaidApiClient.BusinessVerificationCreateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BusinessVerificationCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BusinessVerificationCreateRequest` | `businessVerificationCreateRequestSchema` | `src/models/business-verification-create-request.ts` |
| `BusinessVerificationCreateResponse` | `businessVerificationCreateResponseSchema` | `src/models/business-verification-create-response.ts` |

### businessVerificationGet

- **Signature**: `businessVerificationGet(request: ThePlaidApiClient.BusinessVerificationGetRequestParams, options?: RequestOptions): ApiPromise<BusinessVerificationGetResponse, ApiError>`
- **Wire**: `POST /business_verification/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BusinessVerificationGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ThePlaidApiClient.BusinessVerificationGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BusinessVerificationGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BusinessVerificationGetRequest` | `businessVerificationGetRequestSchema` | `src/models/business-verification-get-request.ts` |
| `BusinessVerificationGetResponse` | `businessVerificationGetResponseSchema` | `src/models/business-verification-get-response.ts` |

### cashflowReportGet

- **Signature**: `cashflowReportGet(request: ThePlaidApiClient.CashflowReportGetRequestParams, options?: RequestOptions): ApiPromise<CashflowReportGetResponse, ThePlaidApiClient.CashflowReportGetError>`
- **Wire**: `POST /cashflow_report/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CashflowReportGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.CashflowReportGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.CashflowReportGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CashflowReportGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CashflowReportGetRequest` | `cashflowReportGetRequestSchema` | `src/models/cashflow-report-get-request.ts` |
| `CashflowReportGetResponse` | `cashflowReportGetResponseSchema` | `src/models/cashflow-report-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### cashflowReportInsightsGet

- **Signature**: `cashflowReportInsightsGet(request: ThePlaidApiClient.CashflowReportInsightsGetRequestParams, options?: RequestOptions): ApiPromise<CashflowReportInsightsGetResponse, ThePlaidApiClient.CashflowReportInsightsGetError>`
- **Wire**: `POST /cashflow_report/insights/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CashflowReportInsightsGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.CashflowReportInsightsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.CashflowReportInsightsGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CashflowReportInsightsGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CashflowReportInsightsGetRequest` | `cashflowReportInsightsGetRequestSchema` | `src/models/cashflow-report-insights-get-request.ts` |
| `CashflowReportInsightsGetResponse` | `cashflowReportInsightsGetResponseSchema` | `src/models/cashflow-report-insights-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### cashflowReportRefresh

- **Signature**: `cashflowReportRefresh(request: ThePlaidApiClient.CashflowReportRefreshRequestParams, options?: RequestOptions): ApiPromise<CashflowReportRefreshResponse, ThePlaidApiClient.CashflowReportRefreshError>`
- **Wire**: `POST /cashflow_report/refresh`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CashflowReportRefreshResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.CashflowReportRefreshError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.CashflowReportRefreshRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CashflowReportRefreshRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CashflowReportRefreshRequest` | `cashflowReportRefreshRequestSchema` | `src/models/cashflow-report-refresh-request.ts` |
| `CashflowReportRefreshResponse` | `cashflowReportRefreshResponseSchema` | `src/models/cashflow-report-refresh-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### cashflowReportTransactionsGet

- **Signature**: `cashflowReportTransactionsGet(request: ThePlaidApiClient.CashflowReportTransactionsGetRequestParams, options?: RequestOptions): ApiPromise<CashflowReportTransactionsGetResponse, ThePlaidApiClient.CashflowReportTransactionsGetError>`
- **Wire**: `POST /cashflow_report/transactions/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CashflowReportTransactionsGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.CashflowReportTransactionsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.CashflowReportTransactionsGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CashflowReportTransactionsGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CashflowReportTransactionsGetRequest` | `cashflowReportTransactionsGetRequestSchema` | `src/models/cashflow-report-transactions-get-request.ts` |
| `CashflowReportTransactionsGetResponse` | `cashflowReportTransactionsGetResponseSchema` | `src/models/cashflow-report-transactions-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### categoriesGet

- **Signature**: `categoriesGet(request: ThePlaidApiClient.CategoriesGetRequest, options?: RequestOptions): ApiPromise<CategoriesGetResponse, ThePlaidApiClient.CategoriesGetError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /categories/get`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CategoriesGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.CategoriesGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.CategoriesGetRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `Record<string, unknown>` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CategoriesGetResponse` | `categoriesGetResponseSchema` | `src/models/categories-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### consentEventsGet

- **Signature**: `consentEventsGet(request: ThePlaidApiClient.ConsentEventsGetRequestParams, options?: RequestOptions): ApiPromise<ConsentEventsGetResponse, ThePlaidApiClient.ConsentEventsGetError>`
- **Wire**: `POST /consent/events/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ConsentEventsGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.ConsentEventsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.ConsentEventsGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ConsentEventsGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConsentEventsGetRequest` | `consentEventsGetRequestSchema` | `src/models/consent-events-get-request.ts` |
| `ConsentEventsGetResponse` | `consentEventsGetResponseSchema` | `src/models/consent-events-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### consumerReportPdfGet

- **Signature**: `consumerReportPdfGet(request: ThePlaidApiClient.ConsumerReportPdfGetRequestParams, options?: RequestOptions): ApiPromise<undefined, ThePlaidApiClient.ConsumerReportPdfGetError>`
- **Wire**: `POST /consumer_report/pdf/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.ConsumerReportPdfGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.ConsumerReportPdfGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ConsumerReportPdfGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConsumerReportPdfGetRequest` | `consumerReportPdfGetRequestSchema` | `src/models/consumer-report-pdf-get-request.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### craCheckReportBaseReportGet

- **Signature**: `craCheckReportBaseReportGet(request: ThePlaidApiClient.CraCheckReportBaseReportGetRequestParams, options?: RequestOptions): ApiPromise<CraCheckReportBaseReportGetResponse, ThePlaidApiClient.CraCheckReportBaseReportGetError>`
- **Wire**: `POST /cra/check_report/base_report/get`
- **Auth**: any of (all of `clientId`, `secret`, `plaidVersion`), `oauth2` — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CraCheckReportBaseReportGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.CraCheckReportBaseReportGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.CraCheckReportBaseReportGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CraCheckReportBaseReportGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CraCheckReportBaseReportGetRequest` | `craCheckReportBaseReportGetRequestSchema` | `src/models/cra-check-report-base-report-get-request.ts` |
| `CraCheckReportBaseReportGetResponse` | `craCheckReportBaseReportGetResponseSchema` | `src/models/cra-check-report-base-report-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### craCheckReportCashflowInsightsGet

- **Signature**: `craCheckReportCashflowInsightsGet(request: ThePlaidApiClient.CraCheckReportCashflowInsightsGetRequestParams, options?: RequestOptions): ApiPromise<CraCheckReportCashflowInsightsGetResponse, ThePlaidApiClient.CraCheckReportCashflowInsightsGetError>`
- **Wire**: `POST /cra/check_report/cashflow_insights/get`
- **Auth**: any of (all of `clientId`, `secret`, `plaidVersion`), `oauth2` — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CraCheckReportCashflowInsightsGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.CraCheckReportCashflowInsightsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.CraCheckReportCashflowInsightsGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CraCheckReportCashflowInsightsGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CraCheckReportCashflowInsightsGetRequest` | `craCheckReportCashflowInsightsGetRequestSchema` | `src/models/cra-check-report-cashflow-insights-get-request.ts` |
| `CraCheckReportCashflowInsightsGetResponse` | `craCheckReportCashflowInsightsGetResponseSchema` | `src/models/cra-check-report-cashflow-insights-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### craCheckReportCreate

- **Signature**: `craCheckReportCreate(request: ThePlaidApiClient.CraCheckReportCreateRequestParams, options?: RequestOptions): ApiPromise<CraCheckReportCreateResponse, ThePlaidApiClient.CraCheckReportCreateError>`
- **Wire**: `POST /cra/check_report/create`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CraCheckReportCreateResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.CraCheckReportCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.CraCheckReportCreateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CraCheckReportCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CraCheckReportCreateRequest` | `craCheckReportCreateRequestSchema` | `src/models/cra-check-report-create-request.ts` |
| `CraCheckReportCreateResponse` | `craCheckReportCreateResponseSchema` | `src/models/cra-check-report-create-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### craCheckReportIncomeInsightsGet

- **Signature**: `craCheckReportIncomeInsightsGet(request: ThePlaidApiClient.CraCheckReportIncomeInsightsGetRequestParams, options?: RequestOptions): ApiPromise<CraCheckReportIncomeInsightsGetResponse, ThePlaidApiClient.CraCheckReportIncomeInsightsGetError>`
- **Wire**: `POST /cra/check_report/income_insights/get`
- **Auth**: any of (all of `clientId`, `secret`, `plaidVersion`), `oauth2` — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CraCheckReportIncomeInsightsGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.CraCheckReportIncomeInsightsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.CraCheckReportIncomeInsightsGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CraCheckReportIncomeInsightsGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CraCheckReportIncomeInsightsGetRequest` | `craCheckReportIncomeInsightsGetRequestSchema` | `src/models/cra-check-report-income-insights-get-request.ts` |
| `CraCheckReportIncomeInsightsGetResponse` | `craCheckReportIncomeInsightsGetResponseSchema` | `src/models/cra-check-report-income-insights-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### craCheckReportLendScoreGet

- **Signature**: `craCheckReportLendScoreGet(request: ThePlaidApiClient.CraCheckReportLendScoreGetRequestParams, options?: RequestOptions): ApiPromise<CraCheckReportLendScoreGetResponse, ThePlaidApiClient.CraCheckReportLendScoreGetError>`
- **Wire**: `POST /cra/check_report/lend_score/get`
- **Auth**: any of (all of `clientId`, `secret`, `plaidVersion`), `oauth2` — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CraCheckReportLendScoreGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.CraCheckReportLendScoreGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.CraCheckReportLendScoreGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CraCheckReportLendScoreGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CraCheckReportLendScoreGetRequest` | `craCheckReportLendScoreGetRequestSchema` | `src/models/cra-check-report-lend-score-get-request.ts` |
| `CraCheckReportLendScoreGetResponse` | `craCheckReportLendScoreGetResponseSchema` | `src/models/cra-check-report-lend-score-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### craCheckReportNetworkInsightsGet

- **Signature**: `craCheckReportNetworkInsightsGet(request: ThePlaidApiClient.CraCheckReportNetworkInsightsGetRequestParams, options?: RequestOptions): ApiPromise<CraCheckReportNetworkInsightsGetResponse, ThePlaidApiClient.CraCheckReportNetworkInsightsGetError>`
- **Wire**: `POST /cra/check_report/network_insights/get`
- **Auth**: any of (all of `clientId`, `secret`, `plaidVersion`), `oauth2` — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CraCheckReportNetworkInsightsGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.CraCheckReportNetworkInsightsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.CraCheckReportNetworkInsightsGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CraCheckReportNetworkInsightsGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CraCheckReportNetworkInsightsGetRequest` | `craCheckReportNetworkInsightsGetRequestSchema` | `src/models/cra-check-report-network-insights-get-request.ts` |
| `CraCheckReportNetworkInsightsGetResponse` | `craCheckReportNetworkInsightsGetResponseSchema` | `src/models/cra-check-report-network-insights-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### craCheckReportPartnerInsightsGet

- **Signature**: `craCheckReportPartnerInsightsGet(request: ThePlaidApiClient.CraCheckReportPartnerInsightsGetRequestParams, options?: RequestOptions): ApiPromise<CraCheckReportPartnerInsightsGetResponse, ThePlaidApiClient.CraCheckReportPartnerInsightsGetError>`
- **Wire**: `POST /cra/check_report/partner_insights/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CraCheckReportPartnerInsightsGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.CraCheckReportPartnerInsightsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.CraCheckReportPartnerInsightsGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CraCheckReportPartnerInsightsGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CraCheckReportPartnerInsightsGetRequest` | `craCheckReportPartnerInsightsGetRequestSchema` | `src/models/cra-check-report-partner-insights-get-request.ts` |
| `CraCheckReportPartnerInsightsGetResponse` | `craCheckReportPartnerInsightsGetResponseSchema` | `src/models/cra-check-report-partner-insights-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### craCheckReportPdfGet

- **Signature**: `craCheckReportPdfGet(request: ThePlaidApiClient.CraCheckReportPdfGetRequestParams, options?: RequestOptions): ApiPromise<undefined, ThePlaidApiClient.CraCheckReportPdfGetError>`
- **Wire**: `POST /cra/check_report/pdf/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.CraCheckReportPdfGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.CraCheckReportPdfGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CraCheckReportPdfGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CraCheckReportPdfGetRequest` | `craCheckReportPdfGetRequestSchema` | `src/models/cra-check-report-pdf-get-request.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### craCheckReportVerificationGet

- **Signature**: `craCheckReportVerificationGet(request: ThePlaidApiClient.CraCheckReportVerificationGetRequestParams, options?: RequestOptions): ApiPromise<CraCheckReportVerificationGetResponse, ThePlaidApiClient.CraCheckReportVerificationGetError>`
- **Wire**: `POST /cra/check_report/verification/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CraCheckReportVerificationGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.CraCheckReportVerificationGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.CraCheckReportVerificationGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CraCheckReportVerificationGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CraCheckReportVerificationGetRequest` | `craCheckReportVerificationGetRequestSchema` | `src/models/cra-check-report-verification-get-request.ts` |
| `CraCheckReportVerificationGetResponse` | `craCheckReportVerificationGetResponseSchema` | `src/models/cra-check-report-verification-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### craCheckReportVerificationPdfGet

- **Signature**: `craCheckReportVerificationPdfGet(request: ThePlaidApiClient.CraCheckReportVerificationPdfGetRequestParams, options?: RequestOptions): ApiPromise<undefined, ThePlaidApiClient.CraCheckReportVerificationPdfGetError>`
- **Wire**: `POST /cra/check_report/verification/pdf/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.CraCheckReportVerificationPdfGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.CraCheckReportVerificationPdfGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CraCheckReportVerificationPdfGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CraCheckReportVerificationPdfGetRequest` | `craCheckReportVerificationPdfGetRequestSchema` | `src/models/cra-check-report-verification-pdf-get-request.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### craCreditProfileReportGet

- **Signature**: `craCreditProfileReportGet(request: ThePlaidApiClient.CraCreditProfileReportGetRequestParams, options?: RequestOptions): ApiPromise<CraCreditProfileReportGetResponse, ThePlaidApiClient.CraCreditProfileReportGetError>`
- **Wire**: `POST /cra/credit_profile/report/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CraCreditProfileReportGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.CraCreditProfileReportGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.CraCreditProfileReportGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CraCreditProfileReportGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CraCreditProfileReportGetRequest` | `craCreditProfileReportGetRequestSchema` | `src/models/cra-credit-profile-report-get-request.ts` |
| `CraCreditProfileReportGetResponse` | `craCreditProfileReportGetResponseSchema` | `src/models/cra-credit-profile-report-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### craLoansApplicationsRegister

- **Signature**: `craLoansApplicationsRegister(request: ThePlaidApiClient.CraLoansApplicationsRegisterRequestParams, options?: RequestOptions): ApiPromise<CraLoansApplicationsRegisterResponse, ThePlaidApiClient.CraLoansApplicationsRegisterError>`
- **Wire**: `POST /cra/loans/applications/register`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CraLoansApplicationsRegisterResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.CraLoansApplicationsRegisterError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.CraLoansApplicationsRegisterRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CraLoansApplicationsRegisterRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CraLoansApplicationsRegisterRequest` | `craLoansApplicationsRegisterRequestSchema` | `src/models/cra-loans-applications-register-request.ts` |
| `CraLoansApplicationsRegisterResponse` | `craLoansApplicationsRegisterResponseSchema` | `src/models/cra-loans-applications-register-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### craLoansRegister

- **Signature**: `craLoansRegister(request: ThePlaidApiClient.CraLoansRegisterRequestParams, options?: RequestOptions): ApiPromise<CraLoansRegisterResponse, ThePlaidApiClient.CraLoansRegisterError>`
- **Wire**: `POST /cra/loans/register`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CraLoansRegisterResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.CraLoansRegisterError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.CraLoansRegisterRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CraLoansRegisterRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CraLoansRegisterRequest` | `craLoansRegisterRequestSchema` | `src/models/cra-loans-register-request.ts` |
| `CraLoansRegisterResponse` | `craLoansRegisterResponseSchema` | `src/models/cra-loans-register-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### craLoansUnregister

- **Signature**: `craLoansUnregister(request: ThePlaidApiClient.CraLoansUnregisterRequestParams, options?: RequestOptions): ApiPromise<CraLoanUnregisterResponse, ThePlaidApiClient.CraLoansUnregisterError>`
- **Wire**: `POST /cra/loans/unregister`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CraLoanUnregisterResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.CraLoansUnregisterError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.CraLoansUnregisterRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CraLoansUnregisterRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CraLoansUnregisterRequest` | `craLoansUnregisterRequestSchema` | `src/models/cra-loans-unregister-request.ts` |
| `CraLoanUnregisterResponse` | `craLoanUnregisterResponseSchema` | `src/models/cra-loan-unregister-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### craLoansUpdate

- **Signature**: `craLoansUpdate(request: ThePlaidApiClient.CraLoansUpdateRequestParams, options?: RequestOptions): ApiPromise<CraLoansUpdateResponse, ThePlaidApiClient.CraLoansUpdateError>`
- **Wire**: `POST /cra/loans/update`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CraLoansUpdateResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.CraLoansUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.CraLoansUpdateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CraLoansUpdateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CraLoansUpdateRequest` | `craLoansUpdateRequestSchema` | `src/models/cra-loans-update-request.ts` |
| `CraLoansUpdateResponse` | `craLoansUpdateResponseSchema` | `src/models/cra-loans-update-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### craMonitoringInsightsGet

- **Signature**: `craMonitoringInsightsGet(request: ThePlaidApiClient.CraMonitoringInsightsGetRequestParams, options?: RequestOptions): ApiPromise<CraMonitoringInsightsGetResponse, ThePlaidApiClient.CraMonitoringInsightsGetError>`
- **Wire**: `POST /cra/monitoring_insights/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CraMonitoringInsightsGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.CraMonitoringInsightsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.CraMonitoringInsightsGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CraMonitoringInsightsGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CraMonitoringInsightsGetRequest` | `craMonitoringInsightsGetRequestSchema` | `src/models/cra-monitoring-insights-get-request.ts` |
| `CraMonitoringInsightsGetResponse` | `craMonitoringInsightsGetResponseSchema` | `src/models/cra-monitoring-insights-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### craMonitoringInsightsSubscribe

- **Signature**: `craMonitoringInsightsSubscribe(request: ThePlaidApiClient.CraMonitoringInsightsSubscribeRequestParams, options?: RequestOptions): ApiPromise<CraMonitoringInsightsSubscribeResponse, ThePlaidApiClient.CraMonitoringInsightsSubscribeError>`
- **Wire**: `POST /cra/monitoring_insights/subscribe`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CraMonitoringInsightsSubscribeResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.CraMonitoringInsightsSubscribeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.CraMonitoringInsightsSubscribeRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CraMonitoringInsightsSubscribeRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CraMonitoringInsightsSubscribeRequest` | `craMonitoringInsightsSubscribeRequestSchema` | `src/models/cra-monitoring-insights-subscribe-request.ts` |
| `CraMonitoringInsightsSubscribeResponse` | `craMonitoringInsightsSubscribeResponseSchema` | `src/models/cra-monitoring-insights-subscribe-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### craMonitoringInsightsUnsubscribe

- **Signature**: `craMonitoringInsightsUnsubscribe(request: ThePlaidApiClient.CraMonitoringInsightsUnsubscribeRequestParams, options?: RequestOptions): ApiPromise<CraMonitoringInsightsUnsubscribeResponse, ThePlaidApiClient.CraMonitoringInsightsUnsubscribeError>`
- **Wire**: `POST /cra/monitoring_insights/unsubscribe`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CraMonitoringInsightsUnsubscribeResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.CraMonitoringInsightsUnsubscribeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.CraMonitoringInsightsUnsubscribeRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CraMonitoringInsightsUnsubscribeRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CraMonitoringInsightsUnsubscribeRequest` | `craMonitoringInsightsUnsubscribeRequestSchema` | `src/models/cra-monitoring-insights-unsubscribe-request.ts` |
| `CraMonitoringInsightsUnsubscribeResponse` | `craMonitoringInsightsUnsubscribeResponseSchema` | `src/models/cra-monitoring-insights-unsubscribe-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### craPartnerInsightsGet

- **Signature**: `craPartnerInsightsGet(request: ThePlaidApiClient.CraPartnerInsightsGetRequestParams, options?: RequestOptions): ApiPromise<CraPartnerInsightsGetResponse, ThePlaidApiClient.CraPartnerInsightsGetError>`
- **Wire**: `POST /cra/partner_insights/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CraPartnerInsightsGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.CraPartnerInsightsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.CraPartnerInsightsGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CraPartnerInsightsGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CraPartnerInsightsGetRequest` | `craPartnerInsightsGetRequestSchema` | `src/models/cra-partner-insights-get-request.ts` |
| `CraPartnerInsightsGetResponse` | `craPartnerInsightsGetResponseSchema` | `src/models/cra-partner-insights-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### craReportGet

- **Signature**: `craReportGet(request: ThePlaidApiClient.CraReportGetRequestParams, options?: RequestOptions): ApiPromise<CraReportGetResponse, ThePlaidApiClient.CraReportGetError>`
- **Wire**: `POST /cra/report/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CraReportGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.CraReportGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.CraReportGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CraReportGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CraReportGetRequest` | `craReportGetRequestSchema` | `src/models/cra-report-get-request.ts` |
| `CraReportGetResponse` | `craReportGetResponseSchema` | `src/models/cra-report-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### createPaymentToken

- **Signature**: `createPaymentToken(request: ThePlaidApiClient.CreatePaymentTokenRequest, options?: RequestOptions): ApiPromise<PaymentInitiationPaymentTokenCreateResponse, ThePlaidApiClient.CreatePaymentTokenError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /payment_initiation/payment/token/create`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PaymentInitiationPaymentTokenCreateResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.CreatePaymentTokenError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.CreatePaymentTokenRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PaymentInitiationPaymentTokenCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentInitiationPaymentTokenCreateRequest` | `paymentInitiationPaymentTokenCreateRequestSchema` | `src/models/payment-initiation-payment-token-create-request.ts` |
| `PaymentInitiationPaymentTokenCreateResponse` | `paymentInitiationPaymentTokenCreateResponseSchema` | `src/models/payment-initiation-payment-token-create-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### creditAssetReportFreddieMacGet

- **Signature**: `creditAssetReportFreddieMacGet(request: ThePlaidApiClient.CreditAssetReportFreddieMacGetRequest, options?: RequestOptions): ApiPromise<AssetReportFreddieGetResponse, ThePlaidApiClient.CreditAssetReportFreddieMacGetError>`
- **Wire**: `POST /credit/asset_report/freddie_mac/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AssetReportFreddieGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.CreditAssetReportFreddieMacGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.CreditAssetReportFreddieMacGetRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `AssetReportFreddieGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AssetReportFreddieGetRequest` | `assetReportFreddieGetRequestSchema` | `src/models/asset-report-freddie-get-request.ts` |
| `AssetReportFreddieGetResponse` | `assetReportFreddieGetResponseSchema` | `src/models/asset-report-freddie-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### creditAuditCopyTokenCreate

- **Signature**: `creditAuditCopyTokenCreate(request: ThePlaidApiClient.CreditAuditCopyTokenCreateRequestParams, options?: RequestOptions): ApiPromise<CreditAuditCopyTokenCreateResponse, ThePlaidApiClient.CreditAuditCopyTokenCreateError>`
- **Wire**: `POST /credit/audit_copy_token/create`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreditAuditCopyTokenCreateResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.CreditAuditCopyTokenCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.CreditAuditCopyTokenCreateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreditAuditCopyTokenCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreditAuditCopyTokenCreateRequest` | `creditAuditCopyTokenCreateRequestSchema` | `src/models/credit-audit-copy-token-create-request.ts` |
| `CreditAuditCopyTokenCreateResponse` | `creditAuditCopyTokenCreateResponseSchema` | `src/models/credit-audit-copy-token-create-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### creditAuditCopyTokenUpdate

- **Signature**: `creditAuditCopyTokenUpdate(request: ThePlaidApiClient.CreditAuditCopyTokenUpdateRequestParams, options?: RequestOptions): ApiPromise<CreditAuditCopyTokenUpdateResponse, ThePlaidApiClient.CreditAuditCopyTokenUpdateError>`
- **Wire**: `POST /credit/audit_copy_token/update`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreditAuditCopyTokenUpdateResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.CreditAuditCopyTokenUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.CreditAuditCopyTokenUpdateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreditAuditCopyTokenUpdateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreditAuditCopyTokenUpdateRequest` | `creditAuditCopyTokenUpdateRequestSchema` | `src/models/credit-audit-copy-token-update-request.ts` |
| `CreditAuditCopyTokenUpdateResponse` | `creditAuditCopyTokenUpdateResponseSchema` | `src/models/credit-audit-copy-token-update-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### creditBankEmploymentGet

- **Signature**: `creditBankEmploymentGet(request: ThePlaidApiClient.CreditBankEmploymentGetRequestParams, options?: RequestOptions): ApiPromise<CreditBankEmploymentGetResponse, ThePlaidApiClient.CreditBankEmploymentGetError>`
- **Wire**: `POST /beta/credit/v1/bank_employment/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreditBankEmploymentGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.CreditBankEmploymentGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.CreditBankEmploymentGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreditBankEmploymentGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreditBankEmploymentGetRequest` | `creditBankEmploymentGetRequestSchema` | `src/models/credit-bank-employment-get-request.ts` |
| `CreditBankEmploymentGetResponse` | `creditBankEmploymentGetResponseSchema` | `src/models/credit-bank-employment-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### creditBankIncomeGet

- **Signature**: `creditBankIncomeGet(request: ThePlaidApiClient.CreditBankIncomeGetRequestParams, options?: RequestOptions): ApiPromise<CreditBankIncomeGetResponse, ThePlaidApiClient.CreditBankIncomeGetError>`
- **Wire**: `POST /credit/bank_income/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreditBankIncomeGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.CreditBankIncomeGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.CreditBankIncomeGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreditBankIncomeGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreditBankIncomeGetRequest` | `creditBankIncomeGetRequestSchema` | `src/models/credit-bank-income-get-request.ts` |
| `CreditBankIncomeGetResponse` | `creditBankIncomeGetResponseSchema` | `src/models/credit-bank-income-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### creditBankIncomePdfGet

- **Signature**: `creditBankIncomePdfGet(request: ThePlaidApiClient.CreditBankIncomePdfGetRequestParams, options?: RequestOptions): ApiPromise<undefined, ThePlaidApiClient.CreditBankIncomePdfGetError>`
- **Wire**: `POST /credit/bank_income/pdf/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.CreditBankIncomePdfGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.CreditBankIncomePdfGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreditBankIncomePdfGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreditBankIncomePdfGetRequest` | `creditBankIncomePdfGetRequestSchema` | `src/models/credit-bank-income-pdf-get-request.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### creditBankIncomeRefresh

- **Signature**: `creditBankIncomeRefresh(request: ThePlaidApiClient.CreditBankIncomeRefreshRequestParams, options?: RequestOptions): ApiPromise<CreditBankIncomeRefreshResponse, ThePlaidApiClient.CreditBankIncomeRefreshError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /credit/bank_income/refresh`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreditBankIncomeRefreshResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.CreditBankIncomeRefreshError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.CreditBankIncomeRefreshRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreditBankIncomeRefreshRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreditBankIncomeRefreshRequest` | `creditBankIncomeRefreshRequestSchema` | `src/models/credit-bank-income-refresh-request.ts` |
| `CreditBankIncomeRefreshResponse` | `creditBankIncomeRefreshResponseSchema` | `src/models/credit-bank-income-refresh-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### creditBankIncomeWebhookUpdate

- **Signature**: `creditBankIncomeWebhookUpdate(request: ThePlaidApiClient.CreditBankIncomeWebhookUpdateRequestParams, options?: RequestOptions): ApiPromise<CreditBankIncomeWebhookUpdateResponse, ThePlaidApiClient.CreditBankIncomeWebhookUpdateError>`
- **Wire**: `POST /credit/bank_income/webhook/update`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreditBankIncomeWebhookUpdateResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.CreditBankIncomeWebhookUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.CreditBankIncomeWebhookUpdateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreditBankIncomeWebhookUpdateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreditBankIncomeWebhookUpdateRequest` | `creditBankIncomeWebhookUpdateRequestSchema` | `src/models/credit-bank-income-webhook-update-request.ts` |
| `CreditBankIncomeWebhookUpdateResponse` | `creditBankIncomeWebhookUpdateResponseSchema` | `src/models/credit-bank-income-webhook-update-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### creditBankStatementsUploadsGet

- **Signature**: `creditBankStatementsUploadsGet(request: ThePlaidApiClient.CreditBankStatementsUploadsGetRequestParams, options?: RequestOptions): ApiPromise<CreditBankStatementsUploadsGetResponse, ThePlaidApiClient.CreditBankStatementsUploadsGetError>`
- **Wire**: `POST /credit/bank_statements/uploads/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreditBankStatementsUploadsGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.CreditBankStatementsUploadsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.CreditBankStatementsUploadsGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreditBankStatementsUploadsGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreditBankStatementsUploadsGetRequest` | `creditBankStatementsUploadsGetRequestSchema` | `src/models/credit-bank-statements-uploads-get-request.ts` |
| `CreditBankStatementsUploadsGetResponse` | `creditBankStatementsUploadsGetResponseSchema` | `src/models/credit-bank-statements-uploads-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### creditEmploymentGet

- **Signature**: `creditEmploymentGet(request: ThePlaidApiClient.CreditEmploymentGetRequestParams, options?: RequestOptions): ApiPromise<CreditEmploymentGetResponse, ThePlaidApiClient.CreditEmploymentGetError>`
- **Wire**: `POST /credit/employment/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreditEmploymentGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.CreditEmploymentGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.CreditEmploymentGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreditEmploymentGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreditEmploymentGetRequest` | `creditEmploymentGetRequestSchema` | `src/models/credit-employment-get-request.ts` |
| `CreditEmploymentGetResponse` | `creditEmploymentGetResponseSchema` | `src/models/credit-employment-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### creditFreddieMacReportsGet

- **Signature**: `creditFreddieMacReportsGet(request: ThePlaidApiClient.CreditFreddieMacReportsGetRequestParams, options?: RequestOptions): ApiPromise<CreditFreddieMacReportsGetResponse, ThePlaidApiClient.CreditFreddieMacReportsGetError>`
- **Wire**: `POST /credit/freddie_mac/reports/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreditFreddieMacReportsGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.CreditFreddieMacReportsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.CreditFreddieMacReportsGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreditFreddieMacReportsGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreditFreddieMacReportsGetRequest` | `creditFreddieMacReportsGetRequestSchema` | `src/models/credit-freddie-mac-reports-get-request.ts` |
| `CreditFreddieMacReportsGetResponse` | `creditFreddieMacReportsGetResponseSchema` | `src/models/credit-freddie-mac-reports-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### creditPayrollIncomeGet

- **Signature**: `creditPayrollIncomeGet(request: ThePlaidApiClient.CreditPayrollIncomeGetRequestParams, options?: RequestOptions): ApiPromise<CreditPayrollIncomeGetResponse, ThePlaidApiClient.CreditPayrollIncomeGetError>`
- **Wire**: `POST /credit/payroll_income/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreditPayrollIncomeGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.CreditPayrollIncomeGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.CreditPayrollIncomeGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreditPayrollIncomeGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreditPayrollIncomeGetRequest` | `creditPayrollIncomeGetRequestSchema` | `src/models/credit-payroll-income-get-request.ts` |
| `CreditPayrollIncomeGetResponse` | `creditPayrollIncomeGetResponseSchema` | `src/models/credit-payroll-income-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### creditPayrollIncomeParsingConfigUpdate

- **Signature**: `creditPayrollIncomeParsingConfigUpdate(request: ThePlaidApiClient.CreditPayrollIncomeParsingConfigUpdateRequestParams, options?: RequestOptions): ApiPromise<CreditPayrollIncomeParsingConfigUpdateResponse, ThePlaidApiClient.CreditPayrollIncomeParsingConfigUpdateError>`
- **Wire**: `POST /credit/payroll_income/parsing_config/update`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreditPayrollIncomeParsingConfigUpdateResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.CreditPayrollIncomeParsingConfigUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.CreditPayrollIncomeParsingConfigUpdateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreditPayrollIncomeParsingConfigUpdateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreditPayrollIncomeParsingConfigUpdateRequest` | `creditPayrollIncomeParsingConfigUpdateRequestSchema` | `src/models/credit-payroll-income-parsing-config-update-request.ts` |
| `CreditPayrollIncomeParsingConfigUpdateResponse` | `creditPayrollIncomeParsingConfigUpdateResponseSchema` | `src/models/credit-payroll-income-parsing-config-update-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### creditPayrollIncomePrecheck

- **Signature**: `creditPayrollIncomePrecheck(request: ThePlaidApiClient.CreditPayrollIncomePrecheckRequestParams, options?: RequestOptions): ApiPromise<CreditPayrollIncomePrecheckResponse, ThePlaidApiClient.CreditPayrollIncomePrecheckError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /credit/payroll_income/precheck`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreditPayrollIncomePrecheckResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.CreditPayrollIncomePrecheckError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.CreditPayrollIncomePrecheckRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreditPayrollIncomePrecheckRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreditPayrollIncomePrecheckRequest` | `creditPayrollIncomePrecheckRequestSchema` | `src/models/credit-payroll-income-precheck-request.ts` |
| `CreditPayrollIncomePrecheckResponse` | `creditPayrollIncomePrecheckResponseSchema` | `src/models/credit-payroll-income-precheck-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### creditPayrollIncomeRefresh

- **Signature**: `creditPayrollIncomeRefresh(request: ThePlaidApiClient.CreditPayrollIncomeRefreshRequestParams, options?: RequestOptions): ApiPromise<CreditPayrollIncomeRefreshResponse, ThePlaidApiClient.CreditPayrollIncomeRefreshError>`
- **Wire**: `POST /credit/payroll_income/refresh`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreditPayrollIncomeRefreshResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.CreditPayrollIncomeRefreshError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.CreditPayrollIncomeRefreshRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreditPayrollIncomeRefreshRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreditPayrollIncomeRefreshRequest` | `creditPayrollIncomeRefreshRequestSchema` | `src/models/credit-payroll-income-refresh-request.ts` |
| `CreditPayrollIncomeRefreshResponse` | `creditPayrollIncomeRefreshResponseSchema` | `src/models/credit-payroll-income-refresh-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### creditPayrollIncomeRiskSignalsGet

- **Signature**: `creditPayrollIncomeRiskSignalsGet(request: ThePlaidApiClient.CreditPayrollIncomeRiskSignalsGetRequestParams, options?: RequestOptions): ApiPromise<CreditPayrollIncomeRiskSignalsGetResponse, ThePlaidApiClient.CreditPayrollIncomeRiskSignalsGetError>`
- **Wire**: `POST /credit/payroll_income/risk_signals/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreditPayrollIncomeRiskSignalsGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.CreditPayrollIncomeRiskSignalsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.CreditPayrollIncomeRiskSignalsGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreditPayrollIncomeRiskSignalsGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreditPayrollIncomeRiskSignalsGetRequest` | `creditPayrollIncomeRiskSignalsGetRequestSchema` | `src/models/credit-payroll-income-risk-signals-get-request.ts` |
| `CreditPayrollIncomeRiskSignalsGetResponse` | `creditPayrollIncomeRiskSignalsGetResponseSchema` | `src/models/credit-payroll-income-risk-signals-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### creditRelayCreate

- **Signature**: `creditRelayCreate(request: ThePlaidApiClient.CreditRelayCreateRequestParams, options?: RequestOptions): ApiPromise<CreditRelayCreateResponse, ThePlaidApiClient.CreditRelayCreateError>`
- **Wire**: `POST /credit/relay/create`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreditRelayCreateResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.CreditRelayCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.CreditRelayCreateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreditRelayCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreditRelayCreateRequest` | `creditRelayCreateRequestSchema` | `src/models/credit-relay-create-request.ts` |
| `CreditRelayCreateResponse` | `creditRelayCreateResponseSchema` | `src/models/credit-relay-create-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### creditRelayGet

- **Signature**: `creditRelayGet(request: ThePlaidApiClient.CreditRelayGetRequestParams, options?: RequestOptions): ApiPromise<AssetReportGetResponse, ThePlaidApiClient.CreditRelayGetError>`
- **Wire**: `POST /credit/relay/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AssetReportGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.CreditRelayGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.CreditRelayGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreditRelayGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreditRelayGetRequest` | `creditRelayGetRequestSchema` | `src/models/credit-relay-get-request.ts` |
| `AssetReportGetResponse` | `assetReportGetResponseSchema` | `src/models/asset-report-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### creditRelayPdfGet

- **Signature**: `creditRelayPdfGet(request: ThePlaidApiClient.CreditRelayPdfGetRequestParams, options?: RequestOptions): ApiPromise<undefined, ThePlaidApiClient.CreditRelayPdfGetError>`
- **Wire**: `POST /credit/relay/pdf/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.CreditRelayPdfGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.CreditRelayPdfGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreditRelayPdfGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreditRelayPdfGetRequest` | `creditRelayPdfGetRequestSchema` | `src/models/credit-relay-pdf-get-request.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### creditRelayRefresh

- **Signature**: `creditRelayRefresh(request: ThePlaidApiClient.CreditRelayRefreshRequestParams, options?: RequestOptions): ApiPromise<CreditRelayRefreshResponse, ThePlaidApiClient.CreditRelayRefreshError>`
- **Wire**: `POST /credit/relay/refresh`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreditRelayRefreshResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.CreditRelayRefreshError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.CreditRelayRefreshRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreditRelayRefreshRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreditRelayRefreshRequest` | `creditRelayRefreshRequestSchema` | `src/models/credit-relay-refresh-request.ts` |
| `CreditRelayRefreshResponse` | `creditRelayRefreshResponseSchema` | `src/models/credit-relay-refresh-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### creditRelayRemove

- **Signature**: `creditRelayRemove(request: ThePlaidApiClient.CreditRelayRemoveRequestParams, options?: RequestOptions): ApiPromise<CreditRelayRemoveResponse, ThePlaidApiClient.CreditRelayRemoveError>`
- **Wire**: `POST /credit/relay/remove`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreditRelayRemoveResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.CreditRelayRemoveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.CreditRelayRemoveRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreditRelayRemoveRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreditRelayRemoveRequest` | `creditRelayRemoveRequestSchema` | `src/models/credit-relay-remove-request.ts` |
| `CreditRelayRemoveResponse` | `creditRelayRemoveResponseSchema` | `src/models/credit-relay-remove-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### creditReportAuditCopyRemove

- **Signature**: `creditReportAuditCopyRemove(request: ThePlaidApiClient.CreditReportAuditCopyRemoveRequest, options?: RequestOptions): ApiPromise<CreditAuditCopyTokenRemoveResponse, ThePlaidApiClient.CreditReportAuditCopyRemoveError>`
- **Wire**: `POST /credit/audit_copy_token/remove`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreditAuditCopyTokenRemoveResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.CreditReportAuditCopyRemoveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.CreditReportAuditCopyRemoveRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreditAuditCopyTokenRemoveRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreditAuditCopyTokenRemoveRequest` | `creditAuditCopyTokenRemoveRequestSchema` | `src/models/credit-audit-copy-token-remove-request.ts` |
| `CreditAuditCopyTokenRemoveResponse` | `creditAuditCopyTokenRemoveResponseSchema` | `src/models/credit-audit-copy-token-remove-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### creditSessionsGet

- **Signature**: `creditSessionsGet(request: ThePlaidApiClient.CreditSessionsGetRequestParams, options?: RequestOptions): ApiPromise<CreditSessionsGetResponse, ThePlaidApiClient.CreditSessionsGetError>`
- **Wire**: `POST /credit/sessions/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreditSessionsGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.CreditSessionsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.CreditSessionsGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreditSessionsGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreditSessionsGetRequest` | `creditSessionsGetRequestSchema` | `src/models/credit-sessions-get-request.ts` |
| `CreditSessionsGetResponse` | `creditSessionsGetResponseSchema` | `src/models/credit-sessions-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### dashboardUserGet

- **Signature**: `dashboardUserGet(request: ThePlaidApiClient.DashboardUserGetRequestParams, options?: RequestOptions): ApiPromise<DashboardUserGetResponse, ApiError>`
- **Wire**: `POST /dashboard_user/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DashboardUserGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ThePlaidApiClient.DashboardUserGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DashboardUserGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DashboardUserGetRequest` | `dashboardUserGetRequestSchema` | `src/models/dashboard-user-get-request.ts` |
| `DashboardUserGetResponse` | `dashboardUserGetResponseSchema` | `src/models/dashboard-user-get-response.ts` |

### dashboardUserList

- **Signature**: `dashboardUserList(request: ThePlaidApiClient.DashboardUserListRequestParams, options?: RequestOptions): ApiPromise<DashboardUserListResponse, ApiError>`
- **Wire**: `POST /dashboard_user/list`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DashboardUserListResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ThePlaidApiClient.DashboardUserListRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DashboardUserListRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DashboardUserListRequest` | `dashboardUserListRequestSchema` | `src/models/dashboard-user-list-request.ts` |
| `DashboardUserListResponse` | `dashboardUserListResponseSchema` | `src/models/dashboard-user-list-response.ts` |

### employersSearch

- **Signature**: `employersSearch(request: ThePlaidApiClient.EmployersSearchRequestParams, options?: RequestOptions): ApiPromise<EmployersSearchResponse, ThePlaidApiClient.EmployersSearchError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /employers/search`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EmployersSearchResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.EmployersSearchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.EmployersSearchRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `EmployersSearchRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `EmployersSearchRequest` | `employersSearchRequestSchema` | `src/models/employers-search-request.ts` |
| `EmployersSearchResponse` | `employersSearchResponseSchema` | `src/models/employers-search-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### employmentVerificationGet

- **Signature**: `employmentVerificationGet(request: ThePlaidApiClient.EmploymentVerificationGetRequestParams, options?: RequestOptions): ApiPromise<EmploymentVerificationGetResponse, ThePlaidApiClient.EmploymentVerificationGetError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /employment/verification/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EmploymentVerificationGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.EmploymentVerificationGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.EmploymentVerificationGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `EmploymentVerificationGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `EmploymentVerificationGetRequest` | `employmentVerificationGetRequestSchema` | `src/models/employment-verification-get-request.ts` |
| `EmploymentVerificationGetResponse` | `employmentVerificationGetResponseSchema` | `src/models/employment-verification-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### fdxConsentsGet

- **Signature**: `fdxConsentsGet(request: ThePlaidApiClient.FdxConsentsGetRequest, options?: RequestOptions): ApiPromise<FdxConsentGrant, ThePlaidApiClient.FdxConsentsGetError>`
- **Wire**: `GET /fdx/consents/{consentId}`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FdxConsentGrant`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.FdxConsentsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.FdxConsentsGetRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `consentId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FdxConsentGrant` | `fdxConsentGrantSchema` | `src/models/fdx-consent-grant.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### fdxConsentsList

- **Signature**: `fdxConsentsList(request: ThePlaidApiClient.FdxConsentsListRequest, options?: RequestOptions): ApiPromise<GetConsentsResponse, ThePlaidApiClient.FdxConsentsListError>`
- **Wire**: `GET /fdx/consents`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetConsentsResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.FdxConsentsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.FdxConsentsListRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `customerId` | `query` | `string` | yes |
| `status` | `query` | `FdxConsentGrantStatus` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FdxConsentGrantStatus` | `fdxConsentGrantStatusSchema` | `src/models/fdx-consent-grant-status.ts` |
| `GetConsentsResponse` | `getConsentsResponseSchema` | `src/models/get-consents-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### fdxConsentsRevocationGet

- **Signature**: `fdxConsentsRevocationGet(request: ThePlaidApiClient.FdxConsentsRevocationGetRequest, options?: RequestOptions): ApiPromise<FdxConsentRevocations, ThePlaidApiClient.FdxConsentsRevocationGetError>`
- **Wire**: `GET /fdx/consents/{consentId}/revocation`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FdxConsentRevocations`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.FdxConsentsRevocationGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.FdxConsentsRevocationGetRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `consentId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FdxConsentRevocations` | `fdxConsentRevocationsSchema` | `src/models/fdx-consent-revocations.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### fdxConsentsRevoke

- **Signature**: `fdxConsentsRevoke(request: ThePlaidApiClient.FdxConsentsRevokeRequest, options?: RequestOptions): ApiPromise<undefined, ThePlaidApiClient.FdxConsentsRevokeError>`
- **Wire**: `PUT /fdx/consents/{consentId}/revocation`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.FdxConsentsRevokeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.FdxConsentsRevokeRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `consentId` | `path` | `string` | yes |
| `body` | `body` | `FdxConsentRevocation` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FdxConsentRevocation` | `fdxConsentRevocationSchema` | `src/models/fdx-consent-revocation.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### fdxNotifications

- **Signature**: `fdxNotifications(request: ThePlaidApiClient.FdxNotificationsRequest, options?: RequestOptions): ApiPromise<undefined, ThePlaidApiClient.FdxNotificationsError>`
- **Wire**: `POST /fdx/notifications`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.FdxNotificationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.FdxNotificationsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `FdxNotificationEntity` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FdxNotificationEntity` | `fdxNotificationEntitySchema` | `src/models/fdx-notification-entity.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getRecipient

- **Signature**: `getRecipient(request: ThePlaidApiClient.GetRecipientRequest, options?: RequestOptions): ApiPromise<FdxRecipientMetadata, ThePlaidApiClient.GetRecipientError>`
- **Wire**: `GET /fdx/recipient/{recipientId}`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FdxRecipientMetadata`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.GetRecipientError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.GetRecipientRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `recipientId` | `path` | — | `string` | yes |
| `oauthStateId` | `header` | `OAUTH-STATE-ID` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FdxRecipientMetadata` | `fdxRecipientMetadataSchema` | `src/models/fdx-recipient-metadata.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getRecipients

- **Signature**: `getRecipients(options?: RequestOptions): ApiPromise<GetRecipientsResponse, ThePlaidApiClient.GetRecipientsError>`
- **Wire**: `GET /fdx/recipients`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetRecipientsResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.GetRecipientsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `GetRecipientsResponse` | `getRecipientsResponseSchema` | `src/models/get-recipients-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### identityDocumentsUploadsGet

- **Signature**: `identityDocumentsUploadsGet(request: ThePlaidApiClient.IdentityDocumentsUploadsGetRequestParams, options?: RequestOptions): ApiPromise<IdentityDocumentsUploadsGetResponse, ThePlaidApiClient.IdentityDocumentsUploadsGetError>`
- **Wire**: `POST /identity/documents/uploads/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `IdentityDocumentsUploadsGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.IdentityDocumentsUploadsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.IdentityDocumentsUploadsGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `IdentityDocumentsUploadsGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `IdentityDocumentsUploadsGetRequest` | `identityDocumentsUploadsGetRequestSchema` | `src/models/identity-documents-uploads-get-request.ts` |
| `IdentityDocumentsUploadsGetResponse` | `identityDocumentsUploadsGetResponseSchema` | `src/models/identity-documents-uploads-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### identityGet

- **Signature**: `identityGet(request: ThePlaidApiClient.IdentityGetRequestParams, options?: RequestOptions): ApiPromise<IdentityGetResponse, ThePlaidApiClient.IdentityGetError>`
- **Wire**: `POST /identity/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `IdentityGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.IdentityGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.IdentityGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `IdentityGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `IdentityGetRequest` | `identityGetRequestSchema` | `src/models/identity-get-request.ts` |
| `IdentityGetResponse` | `identityGetResponseSchema` | `src/models/identity-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### identityMatch

- **Signature**: `identityMatch(request: ThePlaidApiClient.IdentityMatchRequestParams, options?: RequestOptions): ApiPromise<IdentityMatchResponse, ThePlaidApiClient.IdentityMatchError>`
- **Wire**: `POST /identity/match`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `IdentityMatchResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.IdentityMatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.IdentityMatchRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `IdentityMatchRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `IdentityMatchRequest` | `identityMatchRequestSchema` | `src/models/identity-match-request.ts` |
| `IdentityMatchResponse` | `identityMatchResponseSchema` | `src/models/identity-match-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### identityRefresh

- **Signature**: `identityRefresh(request: ThePlaidApiClient.IdentityRefreshRequestParams, options?: RequestOptions): ApiPromise<IdentityRefreshResponse, ThePlaidApiClient.IdentityRefreshError>`
- **Wire**: `POST /identity/refresh`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `IdentityRefreshResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.IdentityRefreshError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.IdentityRefreshRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `IdentityRefreshRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `IdentityRefreshRequest` | `identityRefreshRequestSchema` | `src/models/identity-refresh-request.ts` |
| `IdentityRefreshResponse` | `identityRefreshResponseSchema` | `src/models/identity-refresh-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### identityVerificationAutofillCreate

- **Signature**: `identityVerificationAutofillCreate(request: ThePlaidApiClient.IdentityVerificationAutofillCreateRequestParams, options?: RequestOptions): ApiPromise<IdentityVerificationAutofillCreateResponse, ApiError>`
- **Wire**: `POST /identity_verification/autofill/create`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `IdentityVerificationAutofillCreateResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ThePlaidApiClient.IdentityVerificationAutofillCreateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `IdentityVerificationAutofillCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `IdentityVerificationAutofillCreateRequest` | `identityVerificationAutofillCreateRequestSchema` | `src/models/identity-verification-autofill-create-request.ts` |
| `IdentityVerificationAutofillCreateResponse` | `identityVerificationAutofillCreateResponseSchema` | `src/models/identity-verification-autofill-create-response.ts` |

### identityVerificationCreate

- **Signature**: `identityVerificationCreate(request: ThePlaidApiClient.IdentityVerificationCreateRequestParams, options?: RequestOptions): ApiPromise<IdentityVerificationCreateResponse, ApiError>`
- **Wire**: `POST /identity_verification/create`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `IdentityVerificationCreateResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ThePlaidApiClient.IdentityVerificationCreateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `IdentityVerificationCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `IdentityVerificationCreateRequest` | `identityVerificationCreateRequestSchema` | `src/models/identity-verification-create-request.ts` |
| `IdentityVerificationCreateResponse` | `identityVerificationCreateResponseSchema` | `src/models/identity-verification-create-response.ts` |

### identityVerificationGet

- **Signature**: `identityVerificationGet(request: ThePlaidApiClient.IdentityVerificationGetRequestParams, options?: RequestOptions): ApiPromise<IdentityVerificationGetResponse, ApiError>`
- **Wire**: `POST /identity_verification/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `IdentityVerificationGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ThePlaidApiClient.IdentityVerificationGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `IdentityVerificationGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `IdentityVerificationGetRequest` | `identityVerificationGetRequestSchema` | `src/models/identity-verification-get-request.ts` |
| `IdentityVerificationGetResponse` | `identityVerificationGetResponseSchema` | `src/models/identity-verification-get-response.ts` |

### identityVerificationList

- **Signature**: `identityVerificationList(request: ThePlaidApiClient.IdentityVerificationListRequestParams, options?: RequestOptions): ApiPromise<IdentityVerificationListResponse, ApiError>`
- **Wire**: `POST /identity_verification/list`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `IdentityVerificationListResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ThePlaidApiClient.IdentityVerificationListRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `IdentityVerificationListRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `IdentityVerificationListRequest` | `identityVerificationListRequestSchema` | `src/models/identity-verification-list-request.ts` |
| `IdentityVerificationListResponse` | `identityVerificationListResponseSchema` | `src/models/identity-verification-list-response.ts` |

### identityVerificationRetry

- **Signature**: `identityVerificationRetry(request: ThePlaidApiClient.IdentityVerificationRetryRequestParams, options?: RequestOptions): ApiPromise<IdentityVerificationRetryResponse, ApiError>`
- **Wire**: `POST /identity_verification/retry`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `IdentityVerificationRetryResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ThePlaidApiClient.IdentityVerificationRetryRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `IdentityVerificationRetryRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `IdentityVerificationRetryRequest` | `identityVerificationRetryRequestSchema` | `src/models/identity-verification-retry-request.ts` |
| `IdentityVerificationRetryResponse` | `identityVerificationRetryResponseSchema` | `src/models/identity-verification-retry-response.ts` |

### incomeVerificationCreate

- **Signature**: `incomeVerificationCreate(request: ThePlaidApiClient.IncomeVerificationCreateRequestParams, options?: RequestOptions): ApiPromise<IncomeVerificationCreateResponse, ThePlaidApiClient.IncomeVerificationCreateError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /income/verification/create`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `IncomeVerificationCreateResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.IncomeVerificationCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.IncomeVerificationCreateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `IncomeVerificationCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `IncomeVerificationCreateRequest` | `incomeVerificationCreateRequestSchema` | `src/models/income-verification-create-request.ts` |
| `IncomeVerificationCreateResponse` | `incomeVerificationCreateResponseSchema` | `src/models/income-verification-create-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### incomeVerificationDocumentsDownload

- **Signature**: `incomeVerificationDocumentsDownload(request: ThePlaidApiClient.IncomeVerificationDocumentsDownloadRequestParams, options?: RequestOptions): ApiPromise<undefined, ThePlaidApiClient.IncomeVerificationDocumentsDownloadError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /income/verification/documents/download`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.IncomeVerificationDocumentsDownloadError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.IncomeVerificationDocumentsDownloadRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `IncomeVerificationDocumentsDownloadRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `IncomeVerificationDocumentsDownloadRequest` | `incomeVerificationDocumentsDownloadRequestSchema` | `src/models/income-verification-documents-download-request.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### incomeVerificationPaystubsGet

- **Signature**: `incomeVerificationPaystubsGet(request: ThePlaidApiClient.IncomeVerificationPaystubsGetRequestParams, options?: RequestOptions): ApiPromise<IncomeVerificationPaystubsGetResponse, ThePlaidApiClient.IncomeVerificationPaystubsGetError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /income/verification/paystubs/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `IncomeVerificationPaystubsGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.IncomeVerificationPaystubsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.IncomeVerificationPaystubsGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `IncomeVerificationPaystubsGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `IncomeVerificationPaystubsGetRequest` | `incomeVerificationPaystubsGetRequestSchema` | `src/models/income-verification-paystubs-get-request.ts` |
| `IncomeVerificationPaystubsGetResponse` | `incomeVerificationPaystubsGetResponseSchema` | `src/models/income-verification-paystubs-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### incomeVerificationPrecheck

- **Signature**: `incomeVerificationPrecheck(request: ThePlaidApiClient.IncomeVerificationPrecheckRequestParams, options?: RequestOptions): ApiPromise<IncomeVerificationPrecheckResponse, ThePlaidApiClient.IncomeVerificationPrecheckError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /income/verification/precheck`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `IncomeVerificationPrecheckResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.IncomeVerificationPrecheckError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.IncomeVerificationPrecheckRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `IncomeVerificationPrecheckRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `IncomeVerificationPrecheckRequest` | `incomeVerificationPrecheckRequestSchema` | `src/models/income-verification-precheck-request.ts` |
| `IncomeVerificationPrecheckResponse` | `incomeVerificationPrecheckResponseSchema` | `src/models/income-verification-precheck-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### incomeVerificationTaxformsGet

- **Signature**: `incomeVerificationTaxformsGet(request: ThePlaidApiClient.IncomeVerificationTaxformsGetRequestParams, options?: RequestOptions): ApiPromise<IncomeVerificationTaxformsGetResponse, ThePlaidApiClient.IncomeVerificationTaxformsGetError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /income/verification/taxforms/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `IncomeVerificationTaxformsGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.IncomeVerificationTaxformsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.IncomeVerificationTaxformsGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `IncomeVerificationTaxformsGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `IncomeVerificationTaxformsGetRequest` | `incomeVerificationTaxformsGetRequestSchema` | `src/models/income-verification-taxforms-get-request.ts` |
| `IncomeVerificationTaxformsGetResponse` | `incomeVerificationTaxformsGetResponseSchema` | `src/models/income-verification-taxforms-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### institutionsGet

- **Signature**: `institutionsGet(request: ThePlaidApiClient.InstitutionsGetRequestParams, options?: RequestOptions): ApiPromise<InstitutionsGetResponse, ThePlaidApiClient.InstitutionsGetError>`
- **Wire**: `POST /institutions/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `InstitutionsGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.InstitutionsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.InstitutionsGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `InstitutionsGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InstitutionsGetRequest` | `institutionsGetRequestSchema` | `src/models/institutions-get-request.ts` |
| `InstitutionsGetResponse` | `institutionsGetResponseSchema` | `src/models/institutions-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### institutionsGetById

- **Signature**: `institutionsGetById(request: ThePlaidApiClient.InstitutionsGetByIdRequestParams, options?: RequestOptions): ApiPromise<InstitutionsGetByIdResponse, ThePlaidApiClient.InstitutionsGetByIdError>`
- **Wire**: `POST /institutions/get_by_id`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `InstitutionsGetByIdResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.InstitutionsGetByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.InstitutionsGetByIdRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `InstitutionsGetByIdRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InstitutionsGetByIdRequest` | `institutionsGetByIdRequestSchema` | `src/models/institutions-get-by-id-request.ts` |
| `InstitutionsGetByIdResponse` | `institutionsGetByIdResponseSchema` | `src/models/institutions-get-by-id-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### institutionsSearch

- **Signature**: `institutionsSearch(request: ThePlaidApiClient.InstitutionsSearchRequestParams, options?: RequestOptions): ApiPromise<InstitutionsSearchResponse, ThePlaidApiClient.InstitutionsSearchError>`
- **Wire**: `POST /institutions/search`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `InstitutionsSearchResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.InstitutionsSearchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.InstitutionsSearchRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `InstitutionsSearchRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InstitutionsSearchRequest` | `institutionsSearchRequestSchema` | `src/models/institutions-search-request.ts` |
| `InstitutionsSearchResponse` | `institutionsSearchResponseSchema` | `src/models/institutions-search-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### investmentsAuthGet

- **Signature**: `investmentsAuthGet(request: ThePlaidApiClient.InvestmentsAuthGetRequestParams, options?: RequestOptions): ApiPromise<InvestmentsAuthGetResponse, ThePlaidApiClient.InvestmentsAuthGetError>`
- **Wire**: `POST /investments/auth/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `InvestmentsAuthGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.InvestmentsAuthGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.InvestmentsAuthGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `InvestmentsAuthGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InvestmentsAuthGetRequest` | `investmentsAuthGetRequestSchema` | `src/models/investments-auth-get-request.ts` |
| `InvestmentsAuthGetResponse` | `investmentsAuthGetResponseSchema` | `src/models/investments-auth-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### investmentsHoldingsGet

- **Signature**: `investmentsHoldingsGet(request: ThePlaidApiClient.InvestmentsHoldingsGetRequestParams, options?: RequestOptions): ApiPromise<InvestmentsHoldingsGetResponse, ThePlaidApiClient.InvestmentsHoldingsGetError>`
- **Wire**: `POST /investments/holdings/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `InvestmentsHoldingsGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.InvestmentsHoldingsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.InvestmentsHoldingsGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `InvestmentsHoldingsGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InvestmentsHoldingsGetRequest` | `investmentsHoldingsGetRequestSchema` | `src/models/investments-holdings-get-request.ts` |
| `InvestmentsHoldingsGetResponse` | `investmentsHoldingsGetResponseSchema` | `src/models/investments-holdings-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### investmentsRefresh

- **Signature**: `investmentsRefresh(request: ThePlaidApiClient.InvestmentsRefreshRequestParams, options?: RequestOptions): ApiPromise<InvestmentsRefreshResponse, ThePlaidApiClient.InvestmentsRefreshError>`
- **Wire**: `POST /investments/refresh`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `InvestmentsRefreshResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.InvestmentsRefreshError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.InvestmentsRefreshRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `InvestmentsRefreshRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InvestmentsRefreshRequest` | `investmentsRefreshRequestSchema` | `src/models/investments-refresh-request.ts` |
| `InvestmentsRefreshResponse` | `investmentsRefreshResponseSchema` | `src/models/investments-refresh-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### investmentsTransactionsGet

- **Signature**: `investmentsTransactionsGet(request: ThePlaidApiClient.InvestmentsTransactionsGetRequestParams, options?: RequestOptions): ApiPromise<InvestmentsTransactionsGetResponse, ThePlaidApiClient.InvestmentsTransactionsGetError>`
- **Wire**: `POST /investments/transactions/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `InvestmentsTransactionsGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.InvestmentsTransactionsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.InvestmentsTransactionsGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `InvestmentsTransactionsGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InvestmentsTransactionsGetRequest` | `investmentsTransactionsGetRequestSchema` | `src/models/investments-transactions-get-request.ts` |
| `InvestmentsTransactionsGetResponse` | `investmentsTransactionsGetResponseSchema` | `src/models/investments-transactions-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### issuesGet

- **Signature**: `issuesGet(request: ThePlaidApiClient.IssuesGetRequestParams, options?: RequestOptions): ApiPromise<IssuesGetResponse, ThePlaidApiClient.IssuesGetError>`
- **Wire**: `POST /issues/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `IssuesGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.IssuesGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.IssuesGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `IssuesGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `IssuesGetRequest` | `issuesGetRequestSchema` | `src/models/issues-get-request.ts` |
| `IssuesGetResponse` | `issuesGetResponseSchema` | `src/models/issues-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### issuesSearch

- **Signature**: `issuesSearch(request: ThePlaidApiClient.IssuesSearchRequestParams, options?: RequestOptions): ApiPromise<IssuesSearchResponse, ThePlaidApiClient.IssuesSearchError>`
- **Wire**: `POST /issues/search`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `IssuesSearchResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.IssuesSearchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.IssuesSearchRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `IssuesSearchRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `IssuesSearchRequest` | `issuesSearchRequestSchema` | `src/models/issues-search-request.ts` |
| `IssuesSearchResponse` | `issuesSearchResponseSchema` | `src/models/issues-search-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### issuesSubscribe

- **Signature**: `issuesSubscribe(request: ThePlaidApiClient.IssuesSubscribeRequestParams, options?: RequestOptions): ApiPromise<IssuesSubscribeResponse, ThePlaidApiClient.IssuesSubscribeError>`
- **Wire**: `POST /issues/subscribe`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `IssuesSubscribeResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.IssuesSubscribeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.IssuesSubscribeRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `IssuesSubscribeRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `IssuesSubscribeRequest` | `issuesSubscribeRequestSchema` | `src/models/issues-subscribe-request.ts` |
| `IssuesSubscribeResponse` | `issuesSubscribeResponseSchema` | `src/models/issues-subscribe-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### itemAccessTokenInvalidate

- **Signature**: `itemAccessTokenInvalidate(request: ThePlaidApiClient.ItemAccessTokenInvalidateRequestParams, options?: RequestOptions): ApiPromise<ItemAccessTokenInvalidateResponse, ThePlaidApiClient.ItemAccessTokenInvalidateError>`
- **Wire**: `POST /item/access_token/invalidate`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ItemAccessTokenInvalidateResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.ItemAccessTokenInvalidateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.ItemAccessTokenInvalidateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ItemAccessTokenInvalidateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ItemAccessTokenInvalidateRequest` | `itemAccessTokenInvalidateRequestSchema` | `src/models/item-access-token-invalidate-request.ts` |
| `ItemAccessTokenInvalidateResponse` | `itemAccessTokenInvalidateResponseSchema` | `src/models/item-access-token-invalidate-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### itemActivityList

- **Signature**: `itemActivityList(request: ThePlaidApiClient.ItemActivityListRequestParams, options?: RequestOptions): ApiPromise<ItemActivityListResponse, ThePlaidApiClient.ItemActivityListError>`
- **Wire**: `POST /item/activity/list`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ItemActivityListResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.ItemActivityListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.ItemActivityListRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ItemActivityListRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ItemActivityListRequest` | `itemActivityListRequestSchema` | `src/models/item-activity-list-request.ts` |
| `ItemActivityListResponse` | `itemActivityListResponseSchema` | `src/models/item-activity-list-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### itemApplicationList

- **Signature**: `itemApplicationList(request: ThePlaidApiClient.ItemApplicationListRequestParams, options?: RequestOptions): ApiPromise<ItemApplicationListResponse, ThePlaidApiClient.ItemApplicationListError>`
- **Wire**: `POST /item/application/list`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ItemApplicationListResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.ItemApplicationListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.ItemApplicationListRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ItemApplicationListRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ItemApplicationListRequest` | `itemApplicationListRequestSchema` | `src/models/item-application-list-request.ts` |
| `ItemApplicationListResponse` | `itemApplicationListResponseSchema` | `src/models/item-application-list-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### itemApplicationScopesUpdate

- **Signature**: `itemApplicationScopesUpdate(request: ThePlaidApiClient.ItemApplicationScopesUpdateRequestParams, options?: RequestOptions): ApiPromise<ItemApplicationScopesUpdateResponse, ThePlaidApiClient.ItemApplicationScopesUpdateError>`
- **Wire**: `POST /item/application/scopes/update`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ItemApplicationScopesUpdateResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.ItemApplicationScopesUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.ItemApplicationScopesUpdateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ItemApplicationScopesUpdateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ItemApplicationScopesUpdateRequest` | `itemApplicationScopesUpdateRequestSchema` | `src/models/item-application-scopes-update-request.ts` |
| `ItemApplicationScopesUpdateResponse` | `itemApplicationScopesUpdateResponseSchema` | `src/models/item-application-scopes-update-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### itemApplicationUnlink

- **Signature**: `itemApplicationUnlink(request: ThePlaidApiClient.ItemApplicationUnlinkRequestParams, options?: RequestOptions): ApiPromise<ItemApplicationUnlinkResponse, ThePlaidApiClient.ItemApplicationUnlinkError>`
- **Wire**: `POST /item/application/unlink`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ItemApplicationUnlinkResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.ItemApplicationUnlinkError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.ItemApplicationUnlinkRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ItemApplicationUnlinkRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ItemApplicationUnlinkRequest` | `itemApplicationUnlinkRequestSchema` | `src/models/item-application-unlink-request.ts` |
| `ItemApplicationUnlinkResponse` | `itemApplicationUnlinkResponseSchema` | `src/models/item-application-unlink-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### itemCreatePublicToken

- **Signature**: `itemCreatePublicToken(request: ThePlaidApiClient.ItemCreatePublicTokenRequest, options?: RequestOptions): ApiPromise<ItemPublicTokenCreateResponse, ThePlaidApiClient.ItemCreatePublicTokenError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /item/public_token/create`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ItemPublicTokenCreateResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.ItemCreatePublicTokenError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.ItemCreatePublicTokenRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ItemPublicTokenCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ItemPublicTokenCreateRequest` | `itemPublicTokenCreateRequestSchema` | `src/models/item-public-token-create-request.ts` |
| `ItemPublicTokenCreateResponse` | `itemPublicTokenCreateResponseSchema` | `src/models/item-public-token-create-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### itemGet

- **Signature**: `itemGet(request: ThePlaidApiClient.ItemGetRequestParams, options?: RequestOptions): ApiPromise<ItemGetResponse, ThePlaidApiClient.ItemGetError>`
- **Wire**: `POST /item/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ItemGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.ItemGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.ItemGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ItemGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ItemGetRequest` | `itemGetRequestSchema` | `src/models/item-get-request.ts` |
| `ItemGetResponse` | `itemGetResponseSchema` | `src/models/item-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### itemImport

- **Signature**: `itemImport(request: ThePlaidApiClient.ItemImportRequestParams, options?: RequestOptions): ApiPromise<ItemImportResponse, ThePlaidApiClient.ItemImportError>`
- **Wire**: `POST /item/import`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ItemImportResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.ItemImportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.ItemImportRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ItemImportRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ItemImportRequest` | `itemImportRequestSchema` | `src/models/item-import-request.ts` |
| `ItemImportResponse` | `itemImportResponseSchema` | `src/models/item-import-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### itemProductsTerminate

- **Signature**: `itemProductsTerminate(request: ThePlaidApiClient.ItemProductsTerminateRequestParams, options?: RequestOptions): ApiPromise<ItemProductsTerminateResponse, ThePlaidApiClient.ItemProductsTerminateError>`
- **Wire**: `POST /item/products/terminate`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ItemProductsTerminateResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.ItemProductsTerminateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.ItemProductsTerminateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ItemProductsTerminateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ItemProductsTerminateRequest` | `itemProductsTerminateRequestSchema` | `src/models/item-products-terminate-request.ts` |
| `ItemProductsTerminateResponse` | `itemProductsTerminateResponseSchema` | `src/models/item-products-terminate-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### itemPublicTokenExchange

- **Signature**: `itemPublicTokenExchange(request: ThePlaidApiClient.ItemPublicTokenExchangeRequestParams, options?: RequestOptions): ApiPromise<ItemPublicTokenExchangeResponse, ThePlaidApiClient.ItemPublicTokenExchangeError>`
- **Wire**: `POST /item/public_token/exchange`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ItemPublicTokenExchangeResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.ItemPublicTokenExchangeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.ItemPublicTokenExchangeRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ItemPublicTokenExchangeRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ItemPublicTokenExchangeRequest` | `itemPublicTokenExchangeRequestSchema` | `src/models/item-public-token-exchange-request.ts` |
| `ItemPublicTokenExchangeResponse` | `itemPublicTokenExchangeResponseSchema` | `src/models/item-public-token-exchange-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### itemRemove

- **Signature**: `itemRemove(request: ThePlaidApiClient.ItemRemoveRequestParams, options?: RequestOptions): ApiPromise<ItemRemoveResponse, ThePlaidApiClient.ItemRemoveError>`
- **Wire**: `POST /item/remove`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ItemRemoveResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.ItemRemoveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.ItemRemoveRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ItemRemoveRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ItemRemoveRequest` | `itemRemoveRequestSchema` | `src/models/item-remove-request.ts` |
| `ItemRemoveResponse` | `itemRemoveResponseSchema` | `src/models/item-remove-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### itemWebhookUpdate

- **Signature**: `itemWebhookUpdate(request: ThePlaidApiClient.ItemWebhookUpdateRequestParams, options?: RequestOptions): ApiPromise<ItemWebhookUpdateResponse, ThePlaidApiClient.ItemWebhookUpdateError>`
- **Wire**: `POST /item/webhook/update`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ItemWebhookUpdateResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.ItemWebhookUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.ItemWebhookUpdateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ItemWebhookUpdateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ItemWebhookUpdateRequest` | `itemWebhookUpdateRequestSchema` | `src/models/item-webhook-update-request.ts` |
| `ItemWebhookUpdateResponse` | `itemWebhookUpdateResponseSchema` | `src/models/item-webhook-update-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### liabilitiesGet

- **Signature**: `liabilitiesGet(request: ThePlaidApiClient.LiabilitiesGetRequestParams, options?: RequestOptions): ApiPromise<LiabilitiesGetResponse, ThePlaidApiClient.LiabilitiesGetError>`
- **Wire**: `POST /liabilities/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `LiabilitiesGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.LiabilitiesGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.LiabilitiesGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `LiabilitiesGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LiabilitiesGetRequest` | `liabilitiesGetRequestSchema` | `src/models/liabilities-get-request.ts` |
| `LiabilitiesGetResponse` | `liabilitiesGetResponseSchema` | `src/models/liabilities-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### linkDeliveryCreate

- **Signature**: `linkDeliveryCreate(request: ThePlaidApiClient.LinkDeliveryCreateRequestParams, options?: RequestOptions): ApiPromise<LinkDeliveryCreateResponse, ThePlaidApiClient.LinkDeliveryCreateError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /link_delivery/create`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `LinkDeliveryCreateResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.LinkDeliveryCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.LinkDeliveryCreateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `LinkDeliveryCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LinkDeliveryCreateRequest` | `linkDeliveryCreateRequestSchema` | `src/models/link-delivery-create-request.ts` |
| `LinkDeliveryCreateResponse` | `linkDeliveryCreateResponseSchema` | `src/models/link-delivery-create-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### linkDeliveryGet

- **Signature**: `linkDeliveryGet(request: ThePlaidApiClient.LinkDeliveryGetRequestParams, options?: RequestOptions): ApiPromise<LinkDeliveryGetResponse, ThePlaidApiClient.LinkDeliveryGetError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /link_delivery/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `LinkDeliveryGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.LinkDeliveryGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.LinkDeliveryGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `LinkDeliveryGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LinkDeliveryGetRequest` | `linkDeliveryGetRequestSchema` | `src/models/link-delivery-get-request.ts` |
| `LinkDeliveryGetResponse` | `linkDeliveryGetResponseSchema` | `src/models/link-delivery-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### linkOauthCorrelationIdExchange

- **Signature**: `linkOauthCorrelationIdExchange(request: ThePlaidApiClient.LinkOauthCorrelationIdExchangeRequest, options?: RequestOptions): ApiPromise<LinkOAuthCorrelationIdExchangeResponse, ThePlaidApiClient.LinkOauthCorrelationIdExchangeError>`
- **Wire**: `POST /link/oauth/correlation_id/exchange`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `LinkOAuthCorrelationIdExchangeResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.LinkOauthCorrelationIdExchangeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.LinkOauthCorrelationIdExchangeRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `LinkOAuthCorrelationIdExchangeRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LinkOAuthCorrelationIdExchangeRequest` | `linkOAuthCorrelationIdExchangeRequestSchema` | `src/models/link-oauth-correlation-id-exchange-request.ts` |
| `LinkOAuthCorrelationIdExchangeResponse` | `linkOAuthCorrelationIdExchangeResponseSchema` | `src/models/link-oauth-correlation-id-exchange-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### linkTokenCreate

- **Signature**: `linkTokenCreate(request: ThePlaidApiClient.LinkTokenCreateRequestParams, options?: RequestOptions): ApiPromise<LinkTokenCreateResponse, ThePlaidApiClient.LinkTokenCreateError>`
- **Wire**: `POST /link/token/create`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `LinkTokenCreateResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.LinkTokenCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.LinkTokenCreateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `LinkTokenCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LinkTokenCreateRequest` | `linkTokenCreateRequestSchema` | `src/models/link-token-create-request.ts` |
| `LinkTokenCreateResponse` | `linkTokenCreateResponseSchema` | `src/models/link-token-create-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### linkTokenGet

- **Signature**: `linkTokenGet(request: ThePlaidApiClient.LinkTokenGetRequestParams, options?: RequestOptions): ApiPromise<LinkTokenGetResponse, ThePlaidApiClient.LinkTokenGetError>`
- **Wire**: `POST /link/token/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `LinkTokenGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.LinkTokenGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.LinkTokenGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `LinkTokenGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LinkTokenGetRequest` | `linkTokenGetRequestSchema` | `src/models/link-token-get-request.ts` |
| `LinkTokenGetResponse` | `linkTokenGetResponseSchema` | `src/models/link-token-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### networkStatusGet

- **Signature**: `networkStatusGet(request: ThePlaidApiClient.NetworkStatusGetRequestParams, options?: RequestOptions): ApiPromise<NetworkStatusGetResponse, ThePlaidApiClient.NetworkStatusGetError>`
- **Wire**: `POST /network/status/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `NetworkStatusGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.NetworkStatusGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.NetworkStatusGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `NetworkStatusGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `NetworkStatusGetRequest` | `networkStatusGetRequestSchema` | `src/models/network-status-get-request.ts` |
| `NetworkStatusGetResponse` | `networkStatusGetResponseSchema` | `src/models/network-status-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### oauthIntrospect

- **Signature**: `oauthIntrospect(request: ThePlaidApiClient.OauthIntrospectRequest, options?: RequestOptions): ApiPromise<OAuthIntrospectResponse, ThePlaidApiClient.OauthIntrospectError>`
- **Wire**: `POST /oauth/introspect`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `OAuthIntrospectResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.OauthIntrospectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"oAuthErrorResponse"` [default — any status no arm above covers] `OAuthErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `OAuthErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.OauthIntrospectRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `OAuthIntrospectRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OAuthIntrospectRequest` | `oAuthIntrospectRequestSchema` | `src/models/oauth-introspect-request.ts` |
| `OAuthIntrospectResponse` | `oAuthIntrospectResponseSchema` | `src/models/oauth-introspect-response.ts` |
| `OAuthErrorResponse` | `oAuthErrorResponseSchema` | `src/models/oauth-error-response.ts` |

### oauthRevoke

- **Signature**: `oauthRevoke(request: ThePlaidApiClient.OauthRevokeRequest, options?: RequestOptions): ApiPromise<OAuthRevokeResponse, ThePlaidApiClient.OauthRevokeError>`
- **Wire**: `POST /oauth/revoke`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `OAuthRevokeResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.OauthRevokeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"oAuthErrorResponse"` [default — any status no arm above covers] `OAuthErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `OAuthErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.OauthRevokeRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `OAuthRevokeRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OAuthRevokeRequest` | `oAuthRevokeRequestSchema` | `src/models/oauth-revoke-request.ts` |
| `OAuthRevokeResponse` | `oAuthRevokeResponseSchema` | `src/models/oauth-revoke-response.ts` |
| `OAuthErrorResponse` | `oAuthErrorResponseSchema` | `src/models/oauth-error-response.ts` |

### oauthToken

- **Signature**: `oauthToken(request: ThePlaidApiClient.OauthTokenRequest, options?: RequestOptions): ApiPromise<OAuthTokenResponse, ThePlaidApiClient.OauthTokenError>`
- **Wire**: `POST /oauth/token`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `OAuthTokenResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.OauthTokenError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"oAuthErrorResponse"` [default — any status no arm above covers] `OAuthErrorResponse` · `"undeclared"` [a `default`-matched body that did not fit `OAuthErrorResponse`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.OauthTokenRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `OAuthTokenRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OAuthTokenRequest` | `oAuthTokenRequestSchema` | `src/models/oauth-token-request.ts` |
| `OAuthTokenResponse` | `oAuthTokenResponseSchema` | `src/models/oauth-token-response.ts` |
| `OAuthErrorResponse` | `oAuthErrorResponseSchema` | `src/models/oauth-error-response.ts` |

### partnerCustomerCreate

- **Signature**: `partnerCustomerCreate(request: ThePlaidApiClient.PartnerCustomerCreateRequestParams, options?: RequestOptions): ApiPromise<PartnerCustomerCreateResponse, ThePlaidApiClient.PartnerCustomerCreateError>`
- **Wire**: `POST /partner/customer/create`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PartnerCustomerCreateResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.PartnerCustomerCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.PartnerCustomerCreateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PartnerCustomerCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PartnerCustomerCreateRequest` | `partnerCustomerCreateRequestSchema` | `src/models/partner-customer-create-request.ts` |
| `PartnerCustomerCreateResponse` | `partnerCustomerCreateResponseSchema` | `src/models/partner-customer-create-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### partnerCustomerEnable

- **Signature**: `partnerCustomerEnable(request: ThePlaidApiClient.PartnerCustomerEnableRequestParams, options?: RequestOptions): ApiPromise<PartnerCustomerEnableResponse, ThePlaidApiClient.PartnerCustomerEnableError>`
- **Wire**: `POST /partner/customer/enable`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PartnerCustomerEnableResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.PartnerCustomerEnableError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.PartnerCustomerEnableRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PartnerCustomerEnableRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PartnerCustomerEnableRequest` | `partnerCustomerEnableRequestSchema` | `src/models/partner-customer-enable-request.ts` |
| `PartnerCustomerEnableResponse` | `partnerCustomerEnableResponseSchema` | `src/models/partner-customer-enable-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### partnerCustomerGet

- **Signature**: `partnerCustomerGet(request: ThePlaidApiClient.PartnerCustomerGetRequestParams, options?: RequestOptions): ApiPromise<PartnerCustomerGetResponse, ThePlaidApiClient.PartnerCustomerGetError>`
- **Wire**: `POST /partner/customer/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PartnerCustomerGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.PartnerCustomerGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.PartnerCustomerGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PartnerCustomerGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PartnerCustomerGetRequest` | `partnerCustomerGetRequestSchema` | `src/models/partner-customer-get-request.ts` |
| `PartnerCustomerGetResponse` | `partnerCustomerGetResponseSchema` | `src/models/partner-customer-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### partnerCustomerOauthInstitutionsGet

- **Signature**: `partnerCustomerOauthInstitutionsGet(request: ThePlaidApiClient.PartnerCustomerOauthInstitutionsGetRequest, options?: RequestOptions): ApiPromise<PartnerCustomerOAuthInstitutionsGetResponse, ThePlaidApiClient.PartnerCustomerOauthInstitutionsGetError>`
- **Wire**: `POST /partner/customer/oauth_institutions/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PartnerCustomerOAuthInstitutionsGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.PartnerCustomerOauthInstitutionsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.PartnerCustomerOauthInstitutionsGetRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PartnerCustomerOAuthInstitutionsGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PartnerCustomerOAuthInstitutionsGetRequest` | `partnerCustomerOAuthInstitutionsGetRequestSchema` | `src/models/partner-customer-oauth-institutions-get-request.ts` |
| `PartnerCustomerOAuthInstitutionsGetResponse` | `partnerCustomerOAuthInstitutionsGetResponseSchema` | `src/models/partner-customer-oauth-institutions-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### partnerCustomerRemove

- **Signature**: `partnerCustomerRemove(request: ThePlaidApiClient.PartnerCustomerRemoveRequestParams, options?: RequestOptions): ApiPromise<PartnerCustomerRemoveResponse, ThePlaidApiClient.PartnerCustomerRemoveError>`
- **Wire**: `POST /partner/customer/remove`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PartnerCustomerRemoveResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.PartnerCustomerRemoveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.PartnerCustomerRemoveRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PartnerCustomerRemoveRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PartnerCustomerRemoveRequest` | `partnerCustomerRemoveRequestSchema` | `src/models/partner-customer-remove-request.ts` |
| `PartnerCustomerRemoveResponse` | `partnerCustomerRemoveResponseSchema` | `src/models/partner-customer-remove-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### paymentInitiationConsentCreate

- **Signature**: `paymentInitiationConsentCreate(request: ThePlaidApiClient.PaymentInitiationConsentCreateRequestParams, options?: RequestOptions): ApiPromise<PaymentInitiationConsentCreateResponse, ThePlaidApiClient.PaymentInitiationConsentCreateError>`
- **Wire**: `POST /payment_initiation/consent/create`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PaymentInitiationConsentCreateResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.PaymentInitiationConsentCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.PaymentInitiationConsentCreateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PaymentInitiationConsentCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentInitiationConsentCreateRequest` | `paymentInitiationConsentCreateRequestSchema` | `src/models/payment-initiation-consent-create-request.ts` |
| `PaymentInitiationConsentCreateResponse` | `paymentInitiationConsentCreateResponseSchema` | `src/models/payment-initiation-consent-create-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### paymentInitiationConsentGet

- **Signature**: `paymentInitiationConsentGet(request: ThePlaidApiClient.PaymentInitiationConsentGetRequestParams, options?: RequestOptions): ApiPromise<PaymentInitiationConsentGetResponse, ThePlaidApiClient.PaymentInitiationConsentGetError>`
- **Wire**: `POST /payment_initiation/consent/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PaymentInitiationConsentGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.PaymentInitiationConsentGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.PaymentInitiationConsentGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PaymentInitiationConsentGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentInitiationConsentGetRequest` | `paymentInitiationConsentGetRequestSchema` | `src/models/payment-initiation-consent-get-request.ts` |
| `PaymentInitiationConsentGetResponse` | `paymentInitiationConsentGetResponseSchema` | `src/models/payment-initiation-consent-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### paymentInitiationConsentPaymentExecute

- **Signature**: `paymentInitiationConsentPaymentExecute(request: ThePlaidApiClient.PaymentInitiationConsentPaymentExecuteRequestParams, options?: RequestOptions): ApiPromise<PaymentInitiationConsentPaymentExecuteResponse, ThePlaidApiClient.PaymentInitiationConsentPaymentExecuteError>`
- **Wire**: `POST /payment_initiation/consent/payment/execute`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PaymentInitiationConsentPaymentExecuteResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.PaymentInitiationConsentPaymentExecuteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.PaymentInitiationConsentPaymentExecuteRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PaymentInitiationConsentPaymentExecuteRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentInitiationConsentPaymentExecuteRequest` | `paymentInitiationConsentPaymentExecuteRequestSchema` | `src/models/payment-initiation-consent-payment-execute-request.ts` |
| `PaymentInitiationConsentPaymentExecuteResponse` | `paymentInitiationConsentPaymentExecuteResponseSchema` | `src/models/payment-initiation-consent-payment-execute-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### paymentInitiationConsentRevoke

- **Signature**: `paymentInitiationConsentRevoke(request: ThePlaidApiClient.PaymentInitiationConsentRevokeRequestParams, options?: RequestOptions): ApiPromise<PaymentInitiationConsentRevokeResponse, ThePlaidApiClient.PaymentInitiationConsentRevokeError>`
- **Wire**: `POST /payment_initiation/consent/revoke`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PaymentInitiationConsentRevokeResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.PaymentInitiationConsentRevokeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.PaymentInitiationConsentRevokeRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PaymentInitiationConsentRevokeRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentInitiationConsentRevokeRequest` | `paymentInitiationConsentRevokeRequestSchema` | `src/models/payment-initiation-consent-revoke-request.ts` |
| `PaymentInitiationConsentRevokeResponse` | `paymentInitiationConsentRevokeResponseSchema` | `src/models/payment-initiation-consent-revoke-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### paymentInitiationPaymentCreate

- **Signature**: `paymentInitiationPaymentCreate(request: ThePlaidApiClient.PaymentInitiationPaymentCreateRequestParams, options?: RequestOptions): ApiPromise<PaymentInitiationPaymentCreateResponse, ThePlaidApiClient.PaymentInitiationPaymentCreateError>`
- **Wire**: `POST /payment_initiation/payment/create`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PaymentInitiationPaymentCreateResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.PaymentInitiationPaymentCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.PaymentInitiationPaymentCreateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PaymentInitiationPaymentCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentInitiationPaymentCreateRequest` | `paymentInitiationPaymentCreateRequestSchema` | `src/models/payment-initiation-payment-create-request.ts` |
| `PaymentInitiationPaymentCreateResponse` | `paymentInitiationPaymentCreateResponseSchema` | `src/models/payment-initiation-payment-create-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### paymentInitiationPaymentGet

- **Signature**: `paymentInitiationPaymentGet(request: ThePlaidApiClient.PaymentInitiationPaymentGetRequestParams, options?: RequestOptions): ApiPromise<PaymentInitiationPaymentGetResponse, ThePlaidApiClient.PaymentInitiationPaymentGetError>`
- **Wire**: `POST /payment_initiation/payment/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PaymentInitiationPaymentGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.PaymentInitiationPaymentGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.PaymentInitiationPaymentGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PaymentInitiationPaymentGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentInitiationPaymentGetRequest` | `paymentInitiationPaymentGetRequestSchema` | `src/models/payment-initiation-payment-get-request.ts` |
| `PaymentInitiationPaymentGetResponse` | `paymentInitiationPaymentGetResponseSchema` | `src/models/payment-initiation-payment-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### paymentInitiationPaymentList

- **Signature**: `paymentInitiationPaymentList(request: ThePlaidApiClient.PaymentInitiationPaymentListRequestParams, options?: RequestOptions): ApiPromise<PaymentInitiationPaymentListResponse, ThePlaidApiClient.PaymentInitiationPaymentListError>`
- **Wire**: `POST /payment_initiation/payment/list`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PaymentInitiationPaymentListResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.PaymentInitiationPaymentListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.PaymentInitiationPaymentListRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PaymentInitiationPaymentListRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentInitiationPaymentListRequest` | `paymentInitiationPaymentListRequestSchema` | `src/models/payment-initiation-payment-list-request.ts` |
| `PaymentInitiationPaymentListResponse` | `paymentInitiationPaymentListResponseSchema` | `src/models/payment-initiation-payment-list-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### paymentInitiationPaymentReverse

- **Signature**: `paymentInitiationPaymentReverse(request: ThePlaidApiClient.PaymentInitiationPaymentReverseRequestParams, options?: RequestOptions): ApiPromise<PaymentInitiationPaymentReverseResponse, ThePlaidApiClient.PaymentInitiationPaymentReverseError>`
- **Wire**: `POST /payment_initiation/payment/reverse`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PaymentInitiationPaymentReverseResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.PaymentInitiationPaymentReverseError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.PaymentInitiationPaymentReverseRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PaymentInitiationPaymentReverseRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentInitiationPaymentReverseRequest` | `paymentInitiationPaymentReverseRequestSchema` | `src/models/payment-initiation-payment-reverse-request.ts` |
| `PaymentInitiationPaymentReverseResponse` | `paymentInitiationPaymentReverseResponseSchema` | `src/models/payment-initiation-payment-reverse-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### paymentInitiationRecipientCreate

- **Signature**: `paymentInitiationRecipientCreate(request: ThePlaidApiClient.PaymentInitiationRecipientCreateRequestParams, options?: RequestOptions): ApiPromise<PaymentInitiationRecipientCreateResponse, ThePlaidApiClient.PaymentInitiationRecipientCreateError>`
- **Wire**: `POST /payment_initiation/recipient/create`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PaymentInitiationRecipientCreateResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.PaymentInitiationRecipientCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.PaymentInitiationRecipientCreateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PaymentInitiationRecipientCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentInitiationRecipientCreateRequest` | `paymentInitiationRecipientCreateRequestSchema` | `src/models/payment-initiation-recipient-create-request.ts` |
| `PaymentInitiationRecipientCreateResponse` | `paymentInitiationRecipientCreateResponseSchema` | `src/models/payment-initiation-recipient-create-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### paymentInitiationRecipientGet

- **Signature**: `paymentInitiationRecipientGet(request: ThePlaidApiClient.PaymentInitiationRecipientGetRequestParams, options?: RequestOptions): ApiPromise<PaymentInitiationRecipientGetResponse, ThePlaidApiClient.PaymentInitiationRecipientGetError>`
- **Wire**: `POST /payment_initiation/recipient/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PaymentInitiationRecipientGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.PaymentInitiationRecipientGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.PaymentInitiationRecipientGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PaymentInitiationRecipientGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentInitiationRecipientGetRequest` | `paymentInitiationRecipientGetRequestSchema` | `src/models/payment-initiation-recipient-get-request.ts` |
| `PaymentInitiationRecipientGetResponse` | `paymentInitiationRecipientGetResponseSchema` | `src/models/payment-initiation-recipient-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### paymentInitiationRecipientList

- **Signature**: `paymentInitiationRecipientList(request: ThePlaidApiClient.PaymentInitiationRecipientListRequestParams, options?: RequestOptions): ApiPromise<PaymentInitiationRecipientListResponse, ThePlaidApiClient.PaymentInitiationRecipientListError>`
- **Wire**: `POST /payment_initiation/recipient/list`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PaymentInitiationRecipientListResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.PaymentInitiationRecipientListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.PaymentInitiationRecipientListRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PaymentInitiationRecipientListRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentInitiationRecipientListRequest` | `paymentInitiationRecipientListRequestSchema` | `src/models/payment-initiation-recipient-list-request.ts` |
| `PaymentInitiationRecipientListResponse` | `paymentInitiationRecipientListResponseSchema` | `src/models/payment-initiation-recipient-list-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### paymentProfileCreate

- **Signature**: `paymentProfileCreate(request: ThePlaidApiClient.PaymentProfileCreateRequestParams, options?: RequestOptions): ApiPromise<PaymentProfileCreateResponse, ThePlaidApiClient.PaymentProfileCreateError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /payment_profile/create`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PaymentProfileCreateResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.PaymentProfileCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.PaymentProfileCreateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PaymentProfileCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentProfileCreateRequest` | `paymentProfileCreateRequestSchema` | `src/models/payment-profile-create-request.ts` |
| `PaymentProfileCreateResponse` | `paymentProfileCreateResponseSchema` | `src/models/payment-profile-create-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### paymentProfileGet

- **Signature**: `paymentProfileGet(request: ThePlaidApiClient.PaymentProfileGetRequestParams, options?: RequestOptions): ApiPromise<PaymentProfileGetResponse, ThePlaidApiClient.PaymentProfileGetError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /payment_profile/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PaymentProfileGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.PaymentProfileGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.PaymentProfileGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PaymentProfileGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentProfileGetRequest` | `paymentProfileGetRequestSchema` | `src/models/payment-profile-get-request.ts` |
| `PaymentProfileGetResponse` | `paymentProfileGetResponseSchema` | `src/models/payment-profile-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### paymentProfileRemove

- **Signature**: `paymentProfileRemove(request: ThePlaidApiClient.PaymentProfileRemoveRequestParams, options?: RequestOptions): ApiPromise<PaymentProfileRemoveResponse, ThePlaidApiClient.PaymentProfileRemoveError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /payment_profile/remove`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PaymentProfileRemoveResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.PaymentProfileRemoveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.PaymentProfileRemoveRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PaymentProfileRemoveRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentProfileRemoveRequest` | `paymentProfileRemoveRequestSchema` | `src/models/payment-profile-remove-request.ts` |
| `PaymentProfileRemoveResponse` | `paymentProfileRemoveResponseSchema` | `src/models/payment-profile-remove-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### processorAccountGet

- **Signature**: `processorAccountGet(request: ThePlaidApiClient.ProcessorAccountGetRequestParams, options?: RequestOptions): ApiPromise<ProcessorAccountGetResponse, ThePlaidApiClient.ProcessorAccountGetError>`
- **Wire**: `POST /processor/account/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProcessorAccountGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.ProcessorAccountGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.ProcessorAccountGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ProcessorAccountGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProcessorAccountGetRequest` | `processorAccountGetRequestSchema` | `src/models/processor-account-get-request.ts` |
| `ProcessorAccountGetResponse` | `processorAccountGetResponseSchema` | `src/models/processor-account-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### processorApexProcessorTokenCreate

- **Signature**: `processorApexProcessorTokenCreate(request: ThePlaidApiClient.ProcessorApexProcessorTokenCreateRequestParams, options?: RequestOptions): ApiPromise<ProcessorTokenCreateResponse, ThePlaidApiClient.ProcessorApexProcessorTokenCreateError>`
- **Wire**: `POST /processor/apex/processor_token/create`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProcessorTokenCreateResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.ProcessorApexProcessorTokenCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.ProcessorApexProcessorTokenCreateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ProcessorApexProcessorTokenCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProcessorApexProcessorTokenCreateRequest` | `processorApexProcessorTokenCreateRequestSchema` | `src/models/processor-apex-processor-token-create-request.ts` |
| `ProcessorTokenCreateResponse` | `processorTokenCreateResponseSchema` | `src/models/processor-token-create-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### processorAuthGet

- **Signature**: `processorAuthGet(request: ThePlaidApiClient.ProcessorAuthGetRequestParams, options?: RequestOptions): ApiPromise<ProcessorAuthGetResponse, ThePlaidApiClient.ProcessorAuthGetError>`
- **Wire**: `POST /processor/auth/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProcessorAuthGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.ProcessorAuthGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.ProcessorAuthGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ProcessorAuthGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProcessorAuthGetRequest` | `processorAuthGetRequestSchema` | `src/models/processor-auth-get-request.ts` |
| `ProcessorAuthGetResponse` | `processorAuthGetResponseSchema` | `src/models/processor-auth-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### processorBalanceGet

- **Signature**: `processorBalanceGet(request: ThePlaidApiClient.ProcessorBalanceGetRequestParams, options?: RequestOptions): ApiPromise<ProcessorBalanceGetResponse, ThePlaidApiClient.ProcessorBalanceGetError>`
- **Wire**: `POST /processor/balance/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProcessorBalanceGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.ProcessorBalanceGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.ProcessorBalanceGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ProcessorBalanceGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProcessorBalanceGetRequest` | `processorBalanceGetRequestSchema` | `src/models/processor-balance-get-request.ts` |
| `ProcessorBalanceGetResponse` | `processorBalanceGetResponseSchema` | `src/models/processor-balance-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### processorBankTransferCreate

- **Signature**: `processorBankTransferCreate(request: ThePlaidApiClient.ProcessorBankTransferCreateRequestParams, options?: RequestOptions): ApiPromise<ProcessorBankTransferCreateResponse, ThePlaidApiClient.ProcessorBankTransferCreateError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /processor/bank_transfer/create`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProcessorBankTransferCreateResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.ProcessorBankTransferCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.ProcessorBankTransferCreateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ProcessorBankTransferCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProcessorBankTransferCreateRequest` | `processorBankTransferCreateRequestSchema` | `src/models/processor-bank-transfer-create-request.ts` |
| `ProcessorBankTransferCreateResponse` | `processorBankTransferCreateResponseSchema` | `src/models/processor-bank-transfer-create-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### processorIdentityGet

- **Signature**: `processorIdentityGet(request: ThePlaidApiClient.ProcessorIdentityGetRequestParams, options?: RequestOptions): ApiPromise<ProcessorIdentityGetResponse, ThePlaidApiClient.ProcessorIdentityGetError>`
- **Wire**: `POST /processor/identity/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProcessorIdentityGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.ProcessorIdentityGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.ProcessorIdentityGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ProcessorIdentityGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProcessorIdentityGetRequest` | `processorIdentityGetRequestSchema` | `src/models/processor-identity-get-request.ts` |
| `ProcessorIdentityGetResponse` | `processorIdentityGetResponseSchema` | `src/models/processor-identity-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### processorIdentityMatch

- **Signature**: `processorIdentityMatch(request: ThePlaidApiClient.ProcessorIdentityMatchRequestParams, options?: RequestOptions): ApiPromise<ProcessorIdentityMatchResponse, ThePlaidApiClient.ProcessorIdentityMatchError>`
- **Wire**: `POST /processor/identity/match`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProcessorIdentityMatchResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.ProcessorIdentityMatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.ProcessorIdentityMatchRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ProcessorIdentityMatchRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProcessorIdentityMatchRequest` | `processorIdentityMatchRequestSchema` | `src/models/processor-identity-match-request.ts` |
| `ProcessorIdentityMatchResponse` | `processorIdentityMatchResponseSchema` | `src/models/processor-identity-match-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### processorInvestmentsAuthGet

- **Signature**: `processorInvestmentsAuthGet(request: ThePlaidApiClient.ProcessorInvestmentsAuthGetRequestParams, options?: RequestOptions): ApiPromise<ProcessorInvestmentsAuthGetResponse, ThePlaidApiClient.ProcessorInvestmentsAuthGetError>`
- **Wire**: `POST /processor/investments/auth/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProcessorInvestmentsAuthGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.ProcessorInvestmentsAuthGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.ProcessorInvestmentsAuthGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ProcessorInvestmentsAuthGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProcessorInvestmentsAuthGetRequest` | `processorInvestmentsAuthGetRequestSchema` | `src/models/processor-investments-auth-get-request.ts` |
| `ProcessorInvestmentsAuthGetResponse` | `processorInvestmentsAuthGetResponseSchema` | `src/models/processor-investments-auth-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### processorInvestmentsHoldingsGet

- **Signature**: `processorInvestmentsHoldingsGet(request: ThePlaidApiClient.ProcessorInvestmentsHoldingsGetRequestParams, options?: RequestOptions): ApiPromise<ProcessorInvestmentsHoldingsGetResponse, ThePlaidApiClient.ProcessorInvestmentsHoldingsGetError>`
- **Wire**: `POST /processor/investments/holdings/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProcessorInvestmentsHoldingsGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.ProcessorInvestmentsHoldingsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.ProcessorInvestmentsHoldingsGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ProcessorInvestmentsHoldingsGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProcessorInvestmentsHoldingsGetRequest` | `processorInvestmentsHoldingsGetRequestSchema` | `src/models/processor-investments-holdings-get-request.ts` |
| `ProcessorInvestmentsHoldingsGetResponse` | `processorInvestmentsHoldingsGetResponseSchema` | `src/models/processor-investments-holdings-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### processorInvestmentsTransactionsGet

- **Signature**: `processorInvestmentsTransactionsGet(request: ThePlaidApiClient.ProcessorInvestmentsTransactionsGetRequestParams, options?: RequestOptions): ApiPromise<ProcessorInvestmentsTransactionsGetResponse, ThePlaidApiClient.ProcessorInvestmentsTransactionsGetError>`
- **Wire**: `POST /processor/investments/transactions/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProcessorInvestmentsTransactionsGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.ProcessorInvestmentsTransactionsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.ProcessorInvestmentsTransactionsGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ProcessorInvestmentsTransactionsGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProcessorInvestmentsTransactionsGetRequest` | `processorInvestmentsTransactionsGetRequestSchema` | `src/models/processor-investments-transactions-get-request.ts` |
| `ProcessorInvestmentsTransactionsGetResponse` | `processorInvestmentsTransactionsGetResponseSchema` | `src/models/processor-investments-transactions-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### processorLiabilitiesGet

- **Signature**: `processorLiabilitiesGet(request: ThePlaidApiClient.ProcessorLiabilitiesGetRequestParams, options?: RequestOptions): ApiPromise<ProcessorLiabilitiesGetResponse, ThePlaidApiClient.ProcessorLiabilitiesGetError>`
- **Wire**: `POST /processor/liabilities/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProcessorLiabilitiesGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.ProcessorLiabilitiesGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.ProcessorLiabilitiesGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ProcessorLiabilitiesGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProcessorLiabilitiesGetRequest` | `processorLiabilitiesGetRequestSchema` | `src/models/processor-liabilities-get-request.ts` |
| `ProcessorLiabilitiesGetResponse` | `processorLiabilitiesGetResponseSchema` | `src/models/processor-liabilities-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### processorSignalDecisionReport

- **Signature**: `processorSignalDecisionReport(request: ThePlaidApiClient.ProcessorSignalDecisionReportRequestParams, options?: RequestOptions): ApiPromise<ProcessorSignalDecisionReportResponse, ThePlaidApiClient.ProcessorSignalDecisionReportError>`
- **Wire**: `POST /processor/signal/decision/report`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProcessorSignalDecisionReportResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.ProcessorSignalDecisionReportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.ProcessorSignalDecisionReportRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ProcessorSignalDecisionReportRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProcessorSignalDecisionReportRequest` | `processorSignalDecisionReportRequestSchema` | `src/models/processor-signal-decision-report-request.ts` |
| `ProcessorSignalDecisionReportResponse` | `processorSignalDecisionReportResponseSchema` | `src/models/processor-signal-decision-report-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### processorSignalEvaluate

- **Signature**: `processorSignalEvaluate(request: ThePlaidApiClient.ProcessorSignalEvaluateRequestParams, options?: RequestOptions): ApiPromise<ProcessorSignalEvaluateResponse, ThePlaidApiClient.ProcessorSignalEvaluateError>`
- **Wire**: `POST /processor/signal/evaluate`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProcessorSignalEvaluateResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.ProcessorSignalEvaluateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.ProcessorSignalEvaluateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ProcessorSignalEvaluateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProcessorSignalEvaluateRequest` | `processorSignalEvaluateRequestSchema` | `src/models/processor-signal-evaluate-request.ts` |
| `ProcessorSignalEvaluateResponse` | `processorSignalEvaluateResponseSchema` | `src/models/processor-signal-evaluate-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### processorSignalPrepare

- **Signature**: `processorSignalPrepare(request: ThePlaidApiClient.ProcessorSignalPrepareRequestParams, options?: RequestOptions): ApiPromise<ProcessorSignalPrepareResponse, ThePlaidApiClient.ProcessorSignalPrepareError>`
- **Wire**: `POST /processor/signal/prepare`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProcessorSignalPrepareResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.ProcessorSignalPrepareError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.ProcessorSignalPrepareRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ProcessorSignalPrepareRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProcessorSignalPrepareRequest` | `processorSignalPrepareRequestSchema` | `src/models/processor-signal-prepare-request.ts` |
| `ProcessorSignalPrepareResponse` | `processorSignalPrepareResponseSchema` | `src/models/processor-signal-prepare-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### processorSignalReturnReport

- **Signature**: `processorSignalReturnReport(request: ThePlaidApiClient.ProcessorSignalReturnReportRequestParams, options?: RequestOptions): ApiPromise<ProcessorSignalReturnReportResponse, ThePlaidApiClient.ProcessorSignalReturnReportError>`
- **Wire**: `POST /processor/signal/return/report`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProcessorSignalReturnReportResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.ProcessorSignalReturnReportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.ProcessorSignalReturnReportRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ProcessorSignalReturnReportRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProcessorSignalReturnReportRequest` | `processorSignalReturnReportRequestSchema` | `src/models/processor-signal-return-report-request.ts` |
| `ProcessorSignalReturnReportResponse` | `processorSignalReturnReportResponseSchema` | `src/models/processor-signal-return-report-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### processorStripeBankAccountTokenCreate

- **Signature**: `processorStripeBankAccountTokenCreate(request: ThePlaidApiClient.ProcessorStripeBankAccountTokenCreateRequestParams, options?: RequestOptions): ApiPromise<ProcessorStripeBankAccountTokenCreateResponse, ThePlaidApiClient.ProcessorStripeBankAccountTokenCreateError>`
- **Wire**: `POST /processor/stripe/bank_account_token/create`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProcessorStripeBankAccountTokenCreateResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.ProcessorStripeBankAccountTokenCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.ProcessorStripeBankAccountTokenCreateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ProcessorStripeBankAccountTokenCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProcessorStripeBankAccountTokenCreateRequest` | `processorStripeBankAccountTokenCreateRequestSchema` | `src/models/processor-stripe-bank-account-token-create-request.ts` |
| `ProcessorStripeBankAccountTokenCreateResponse` | `processorStripeBankAccountTokenCreateResponseSchema` | `src/models/processor-stripe-bank-account-token-create-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### processorTokenCreate

- **Signature**: `processorTokenCreate(request: ThePlaidApiClient.ProcessorTokenCreateRequestParams, options?: RequestOptions): ApiPromise<ProcessorTokenCreateResponse, ThePlaidApiClient.ProcessorTokenCreateError>`
- **Wire**: `POST /processor/token/create`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProcessorTokenCreateResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.ProcessorTokenCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.ProcessorTokenCreateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ProcessorTokenCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProcessorTokenCreateRequest` | `processorTokenCreateRequestSchema` | `src/models/processor-token-create-request.ts` |
| `ProcessorTokenCreateResponse` | `processorTokenCreateResponseSchema` | `src/models/processor-token-create-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### processorTokenPermissionsGet

- **Signature**: `processorTokenPermissionsGet(request: ThePlaidApiClient.ProcessorTokenPermissionsGetRequestParams, options?: RequestOptions): ApiPromise<ProcessorTokenPermissionsGetResponse, ThePlaidApiClient.ProcessorTokenPermissionsGetError>`
- **Wire**: `POST /processor/token/permissions/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProcessorTokenPermissionsGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.ProcessorTokenPermissionsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.ProcessorTokenPermissionsGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ProcessorTokenPermissionsGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProcessorTokenPermissionsGetRequest` | `processorTokenPermissionsGetRequestSchema` | `src/models/processor-token-permissions-get-request.ts` |
| `ProcessorTokenPermissionsGetResponse` | `processorTokenPermissionsGetResponseSchema` | `src/models/processor-token-permissions-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### processorTokenPermissionsSet

- **Signature**: `processorTokenPermissionsSet(request: ThePlaidApiClient.ProcessorTokenPermissionsSetRequestParams, options?: RequestOptions): ApiPromise<ProcessorTokenPermissionsSetResponse, ThePlaidApiClient.ProcessorTokenPermissionsSetError>`
- **Wire**: `POST /processor/token/permissions/set`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProcessorTokenPermissionsSetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.ProcessorTokenPermissionsSetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.ProcessorTokenPermissionsSetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ProcessorTokenPermissionsSetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProcessorTokenPermissionsSetRequest` | `processorTokenPermissionsSetRequestSchema` | `src/models/processor-token-permissions-set-request.ts` |
| `ProcessorTokenPermissionsSetResponse` | `processorTokenPermissionsSetResponseSchema` | `src/models/processor-token-permissions-set-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### processorTokenWebhookUpdate

- **Signature**: `processorTokenWebhookUpdate(request: ThePlaidApiClient.ProcessorTokenWebhookUpdateRequestParams, options?: RequestOptions): ApiPromise<ProcessorTokenWebhookUpdateResponse, ThePlaidApiClient.ProcessorTokenWebhookUpdateError>`
- **Wire**: `POST /processor/token/webhook/update`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProcessorTokenWebhookUpdateResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.ProcessorTokenWebhookUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.ProcessorTokenWebhookUpdateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ProcessorTokenWebhookUpdateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProcessorTokenWebhookUpdateRequest` | `processorTokenWebhookUpdateRequestSchema` | `src/models/processor-token-webhook-update-request.ts` |
| `ProcessorTokenWebhookUpdateResponse` | `processorTokenWebhookUpdateResponseSchema` | `src/models/processor-token-webhook-update-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### processorTransactionsGet

- **Signature**: `processorTransactionsGet(request: ThePlaidApiClient.ProcessorTransactionsGetRequestParams, options?: RequestOptions): ApiPromise<ProcessorTransactionsGetResponse, ThePlaidApiClient.ProcessorTransactionsGetError>`
- **Wire**: `POST /processor/transactions/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProcessorTransactionsGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.ProcessorTransactionsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.ProcessorTransactionsGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ProcessorTransactionsGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProcessorTransactionsGetRequest` | `processorTransactionsGetRequestSchema` | `src/models/processor-transactions-get-request.ts` |
| `ProcessorTransactionsGetResponse` | `processorTransactionsGetResponseSchema` | `src/models/processor-transactions-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### processorTransactionsRecurringGet

- **Signature**: `processorTransactionsRecurringGet(request: ThePlaidApiClient.ProcessorTransactionsRecurringGetRequestParams, options?: RequestOptions): ApiPromise<ProcessorTransactionsRecurringGetResponse, ThePlaidApiClient.ProcessorTransactionsRecurringGetError>`
- **Wire**: `POST /processor/transactions/recurring/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProcessorTransactionsRecurringGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.ProcessorTransactionsRecurringGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.ProcessorTransactionsRecurringGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ProcessorTransactionsRecurringGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProcessorTransactionsRecurringGetRequest` | `processorTransactionsRecurringGetRequestSchema` | `src/models/processor-transactions-recurring-get-request.ts` |
| `ProcessorTransactionsRecurringGetResponse` | `processorTransactionsRecurringGetResponseSchema` | `src/models/processor-transactions-recurring-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### processorTransactionsRefresh

- **Signature**: `processorTransactionsRefresh(request: ThePlaidApiClient.ProcessorTransactionsRefreshRequestParams, options?: RequestOptions): ApiPromise<ProcessorTransactionsRefreshResponse, ThePlaidApiClient.ProcessorTransactionsRefreshError>`
- **Wire**: `POST /processor/transactions/refresh`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProcessorTransactionsRefreshResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.ProcessorTransactionsRefreshError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.ProcessorTransactionsRefreshRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ProcessorTransactionsRefreshRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProcessorTransactionsRefreshRequest` | `processorTransactionsRefreshRequestSchema` | `src/models/processor-transactions-refresh-request.ts` |
| `ProcessorTransactionsRefreshResponse` | `processorTransactionsRefreshResponseSchema` | `src/models/processor-transactions-refresh-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### processorTransactionsSync

- **Signature**: `processorTransactionsSync(request: ThePlaidApiClient.ProcessorTransactionsSyncRequestParams, options?: RequestOptions): ApiPromise<ProcessorTransactionsSyncResponse, ThePlaidApiClient.ProcessorTransactionsSyncError>`
- **Wire**: `POST /processor/transactions/sync`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProcessorTransactionsSyncResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.ProcessorTransactionsSyncError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.ProcessorTransactionsSyncRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ProcessorTransactionsSyncRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProcessorTransactionsSyncRequest` | `processorTransactionsSyncRequestSchema` | `src/models/processor-transactions-sync-request.ts` |
| `ProcessorTransactionsSyncResponse` | `processorTransactionsSyncResponseSchema` | `src/models/processor-transactions-sync-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### profileNetworkStatusGet

- **Signature**: `profileNetworkStatusGet(request: ThePlaidApiClient.ProfileNetworkStatusGetRequestParams, options?: RequestOptions): ApiPromise<ProfileNetworkStatusGetResponse, ThePlaidApiClient.ProfileNetworkStatusGetError>`
- **Wire**: `POST /profile/network_status/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProfileNetworkStatusGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.ProfileNetworkStatusGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.ProfileNetworkStatusGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ProfileNetworkStatusGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProfileNetworkStatusGetRequest` | `profileNetworkStatusGetRequestSchema` | `src/models/profile-network-status-get-request.ts` |
| `ProfileNetworkStatusGetResponse` | `profileNetworkStatusGetResponseSchema` | `src/models/profile-network-status-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### protectCompute

- **Signature**: `protectCompute(request: ThePlaidApiClient.ProtectComputeRequestParams, options?: RequestOptions): ApiPromise<ProtectComputeResponse, ApiError>`
- **Wire**: `POST /protect/compute`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProtectComputeResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ThePlaidApiClient.ProtectComputeRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ProtectComputeRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProtectComputeRequest` | `protectComputeRequestSchema` | `src/models/protect-compute-request.ts` |
| `ProtectComputeResponse` | `protectComputeResponseSchema` | `src/models/protect-compute-response.ts` |

### protectEventGet

- **Signature**: `protectEventGet(request: ThePlaidApiClient.ProtectEventGetRequestParams, options?: RequestOptions): ApiPromise<ProtectEventGetResponse, ApiError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /protect/event/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProtectEventGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ThePlaidApiClient.ProtectEventGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ProtectEventGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProtectEventGetRequest` | `protectEventGetRequestSchema` | `src/models/protect-event-get-request.ts` |
| `ProtectEventGetResponse` | `protectEventGetResponseSchema` | `src/models/protect-event-get-response.ts` |

### protectEventSend

- **Signature**: `protectEventSend(request: ThePlaidApiClient.ProtectEventSendRequestParams, options?: RequestOptions): ApiPromise<ProtectEventSendResponse, ApiError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /protect/event/send`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProtectEventSendResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ThePlaidApiClient.ProtectEventSendRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ProtectEventSendRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProtectEventSendRequest` | `protectEventSendRequestSchema` | `src/models/protect-event-send-request.ts` |
| `ProtectEventSendResponse` | `protectEventSendResponseSchema` | `src/models/protect-event-send-response.ts` |

### protectReportCreate

- **Signature**: `protectReportCreate(request: ThePlaidApiClient.ProtectReportCreateRequestParams, options?: RequestOptions): ApiPromise<ProtectReportCreateResponse, ApiError>`
- **Wire**: `POST /protect/report/create`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProtectReportCreateResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ThePlaidApiClient.ProtectReportCreateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ProtectReportCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProtectReportCreateRequest` | `protectReportCreateRequestSchema` | `src/models/protect-report-create-request.ts` |
| `ProtectReportCreateResponse` | `protectReportCreateResponseSchema` | `src/models/protect-report-create-response.ts` |

### protectUserInsightsGet

- **Signature**: `protectUserInsightsGet(request: ThePlaidApiClient.ProtectUserInsightsGetRequestParams, options?: RequestOptions): ApiPromise<ProtectUserInsightsGetResponse, ApiError>`
- **Wire**: `POST /protect/user/insights/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ProtectUserInsightsGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ThePlaidApiClient.ProtectUserInsightsGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ProtectUserInsightsGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProtectUserInsightsGetRequest` | `protectUserInsightsGetRequestSchema` | `src/models/protect-user-insights-get-request.ts` |
| `ProtectUserInsightsGetResponse` | `protectUserInsightsGetResponseSchema` | `src/models/protect-user-insights-get-response.ts` |

### sandboxBankIncomeFireWebhook

- **Signature**: `sandboxBankIncomeFireWebhook(request: ThePlaidApiClient.SandboxBankIncomeFireWebhookRequestParams, options?: RequestOptions): ApiPromise<SandboxBankIncomeFireWebhookResponse, ThePlaidApiClient.SandboxBankIncomeFireWebhookError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /sandbox/bank_income/fire_webhook`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SandboxBankIncomeFireWebhookResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.SandboxBankIncomeFireWebhookError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.SandboxBankIncomeFireWebhookRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SandboxBankIncomeFireWebhookRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SandboxBankIncomeFireWebhookRequest` | `sandboxBankIncomeFireWebhookRequestSchema` | `src/models/sandbox-bank-income-fire-webhook-request.ts` |
| `SandboxBankIncomeFireWebhookResponse` | `sandboxBankIncomeFireWebhookResponseSchema` | `src/models/sandbox-bank-income-fire-webhook-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### sandboxBankTransferFireWebhook

- **Signature**: `sandboxBankTransferFireWebhook(request: ThePlaidApiClient.SandboxBankTransferFireWebhookRequestParams, options?: RequestOptions): ApiPromise<SandboxBankTransferFireWebhookResponse, ThePlaidApiClient.SandboxBankTransferFireWebhookError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /sandbox/bank_transfer/fire_webhook`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SandboxBankTransferFireWebhookResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.SandboxBankTransferFireWebhookError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.SandboxBankTransferFireWebhookRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SandboxBankTransferFireWebhookRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SandboxBankTransferFireWebhookRequest` | `sandboxBankTransferFireWebhookRequestSchema` | `src/models/sandbox-bank-transfer-fire-webhook-request.ts` |
| `SandboxBankTransferFireWebhookResponse` | `sandboxBankTransferFireWebhookResponseSchema` | `src/models/sandbox-bank-transfer-fire-webhook-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### sandboxBankTransferSimulate

- **Signature**: `sandboxBankTransferSimulate(request: ThePlaidApiClient.SandboxBankTransferSimulateRequestParams, options?: RequestOptions): ApiPromise<SandboxBankTransferSimulateResponse, ThePlaidApiClient.SandboxBankTransferSimulateError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /sandbox/bank_transfer/simulate`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SandboxBankTransferSimulateResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.SandboxBankTransferSimulateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.SandboxBankTransferSimulateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SandboxBankTransferSimulateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SandboxBankTransferSimulateRequest` | `sandboxBankTransferSimulateRequestSchema` | `src/models/sandbox-bank-transfer-simulate-request.ts` |
| `SandboxBankTransferSimulateResponse` | `sandboxBankTransferSimulateResponseSchema` | `src/models/sandbox-bank-transfer-simulate-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### sandboxCraCashflowUpdatesUpdate

- **Signature**: `sandboxCraCashflowUpdatesUpdate(request: ThePlaidApiClient.SandboxCraCashflowUpdatesUpdateRequestParams, options?: RequestOptions): ApiPromise<SandboxCraCashflowUpdatesUpdateResponse, ThePlaidApiClient.SandboxCraCashflowUpdatesUpdateError>`
- **Wire**: `POST /sandbox/cra/cashflow_updates/update`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SandboxCraCashflowUpdatesUpdateResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.SandboxCraCashflowUpdatesUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.SandboxCraCashflowUpdatesUpdateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SandboxCraCashflowUpdatesUpdateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SandboxCraCashflowUpdatesUpdateRequest` | `sandboxCraCashflowUpdatesUpdateRequestSchema` | `src/models/sandbox-cra-cashflow-updates-update-request.ts` |
| `SandboxCraCashflowUpdatesUpdateResponse` | `sandboxCraCashflowUpdatesUpdateResponseSchema` | `src/models/sandbox-cra-cashflow-updates-update-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### sandboxFdxConsentSeed

- **Signature**: `sandboxFdxConsentSeed(request: ThePlaidApiClient.SandboxFdxConsentSeedRequestParams, options?: RequestOptions): ApiPromise<SandboxFdxConsentSeedResponse, ThePlaidApiClient.SandboxFdxConsentSeedError>`
- **Wire**: `POST /sandbox/fdx/consent/seed`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SandboxFdxConsentSeedResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.SandboxFdxConsentSeedError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.SandboxFdxConsentSeedRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SandboxFdxConsentSeedRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SandboxFdxConsentSeedRequest` | `sandboxFdxConsentSeedRequestSchema` | `src/models/sandbox-fdx-consent-seed-request.ts` |
| `SandboxFdxConsentSeedResponse` | `sandboxFdxConsentSeedResponseSchema` | `src/models/sandbox-fdx-consent-seed-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### sandboxIncomeFireWebhook

- **Signature**: `sandboxIncomeFireWebhook(request: ThePlaidApiClient.SandboxIncomeFireWebhookRequestParams, options?: RequestOptions): ApiPromise<SandboxIncomeFireWebhookResponse, ThePlaidApiClient.SandboxIncomeFireWebhookError>`
- **Wire**: `POST /sandbox/income/fire_webhook`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SandboxIncomeFireWebhookResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.SandboxIncomeFireWebhookError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.SandboxIncomeFireWebhookRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SandboxIncomeFireWebhookRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SandboxIncomeFireWebhookRequest` | `sandboxIncomeFireWebhookRequestSchema` | `src/models/sandbox-income-fire-webhook-request.ts` |
| `SandboxIncomeFireWebhookResponse` | `sandboxIncomeFireWebhookResponseSchema` | `src/models/sandbox-income-fire-webhook-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### sandboxItemApplicationSeed

- **Signature**: `sandboxItemApplicationSeed(request: ThePlaidApiClient.SandboxItemApplicationSeedRequestParams, options?: RequestOptions): ApiPromise<SandboxItemApplicationSeedResponse, ThePlaidApiClient.SandboxItemApplicationSeedError>`
- **Wire**: `POST /sandbox/item/application/seed`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SandboxItemApplicationSeedResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.SandboxItemApplicationSeedError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.SandboxItemApplicationSeedRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SandboxItemApplicationSeedRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SandboxItemApplicationSeedRequest` | `sandboxItemApplicationSeedRequestSchema` | `src/models/sandbox-item-application-seed-request.ts` |
| `SandboxItemApplicationSeedResponse` | `sandboxItemApplicationSeedResponseSchema` | `src/models/sandbox-item-application-seed-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### sandboxItemFireWebhook

- **Signature**: `sandboxItemFireWebhook(request: ThePlaidApiClient.SandboxItemFireWebhookRequestParams, options?: RequestOptions): ApiPromise<SandboxItemFireWebhookResponse, ThePlaidApiClient.SandboxItemFireWebhookError>`
- **Wire**: `POST /sandbox/item/fire_webhook`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SandboxItemFireWebhookResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.SandboxItemFireWebhookError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.SandboxItemFireWebhookRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SandboxItemFireWebhookRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SandboxItemFireWebhookRequest` | `sandboxItemFireWebhookRequestSchema` | `src/models/sandbox-item-fire-webhook-request.ts` |
| `SandboxItemFireWebhookResponse` | `sandboxItemFireWebhookResponseSchema` | `src/models/sandbox-item-fire-webhook-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### sandboxItemResetLogin

- **Signature**: `sandboxItemResetLogin(request: ThePlaidApiClient.SandboxItemResetLoginRequestParams, options?: RequestOptions): ApiPromise<SandboxItemResetLoginResponse, ThePlaidApiClient.SandboxItemResetLoginError>`
- **Wire**: `POST /sandbox/item/reset_login`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SandboxItemResetLoginResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.SandboxItemResetLoginError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.SandboxItemResetLoginRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SandboxItemResetLoginRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SandboxItemResetLoginRequest` | `sandboxItemResetLoginRequestSchema` | `src/models/sandbox-item-reset-login-request.ts` |
| `SandboxItemResetLoginResponse` | `sandboxItemResetLoginResponseSchema` | `src/models/sandbox-item-reset-login-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### sandboxItemSetVerificationStatus

- **Signature**: `sandboxItemSetVerificationStatus(request: ThePlaidApiClient.SandboxItemSetVerificationStatusRequestParams, options?: RequestOptions): ApiPromise<SandboxItemSetVerificationStatusResponse, ThePlaidApiClient.SandboxItemSetVerificationStatusError>`
- **Wire**: `POST /sandbox/item/set_verification_status`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SandboxItemSetVerificationStatusResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.SandboxItemSetVerificationStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.SandboxItemSetVerificationStatusRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SandboxItemSetVerificationStatusRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SandboxItemSetVerificationStatusRequest` | `sandboxItemSetVerificationStatusRequestSchema` | `src/models/sandbox-item-set-verification-status-request.ts` |
| `SandboxItemSetVerificationStatusResponse` | `sandboxItemSetVerificationStatusResponseSchema` | `src/models/sandbox-item-set-verification-status-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### sandboxOauthSelectAccounts

- **Signature**: `sandboxOauthSelectAccounts(request: ThePlaidApiClient.SandboxOauthSelectAccountsRequestParams, options?: RequestOptions): ApiPromise<Record<string, unknown>, ThePlaidApiClient.SandboxOauthSelectAccountsError>`
- **Wire**: `POST /sandbox/oauth/select_accounts`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.SandboxOauthSelectAccountsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.SandboxOauthSelectAccountsRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SandboxOauthSelectAccountsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SandboxOauthSelectAccountsRequest` | `sandboxOauthSelectAccountsRequestSchema` | `src/models/sandbox-oauth-select-accounts-request.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### sandboxPaymentProfileResetLogin

- **Signature**: `sandboxPaymentProfileResetLogin(request: ThePlaidApiClient.SandboxPaymentProfileResetLoginRequestParams, options?: RequestOptions): ApiPromise<SandboxPaymentProfileResetLoginResponse, ThePlaidApiClient.SandboxPaymentProfileResetLoginError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /sandbox/payment_profile/reset_login`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SandboxPaymentProfileResetLoginResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.SandboxPaymentProfileResetLoginError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.SandboxPaymentProfileResetLoginRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SandboxPaymentProfileResetLoginRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SandboxPaymentProfileResetLoginRequest` | `sandboxPaymentProfileResetLoginRequestSchema` | `src/models/sandbox-payment-profile-reset-login-request.ts` |
| `SandboxPaymentProfileResetLoginResponse` | `sandboxPaymentProfileResetLoginResponseSchema` | `src/models/sandbox-payment-profile-reset-login-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### sandboxPaymentSimulate

- **Signature**: `sandboxPaymentSimulate(request: ThePlaidApiClient.SandboxPaymentSimulateRequestParams, options?: RequestOptions): ApiPromise<SandboxPaymentSimulateResponse, ThePlaidApiClient.SandboxPaymentSimulateError>`
- **Wire**: `POST /sandbox/payment/simulate`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SandboxPaymentSimulateResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.SandboxPaymentSimulateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.SandboxPaymentSimulateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SandboxPaymentSimulateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SandboxPaymentSimulateRequest` | `sandboxPaymentSimulateRequestSchema` | `src/models/sandbox-payment-simulate-request.ts` |
| `SandboxPaymentSimulateResponse` | `sandboxPaymentSimulateResponseSchema` | `src/models/sandbox-payment-simulate-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### sandboxProcessorTokenCreate

- **Signature**: `sandboxProcessorTokenCreate(request: ThePlaidApiClient.SandboxProcessorTokenCreateRequestParams, options?: RequestOptions): ApiPromise<SandboxProcessorTokenCreateResponse, ThePlaidApiClient.SandboxProcessorTokenCreateError>`
- **Wire**: `POST /sandbox/processor_token/create`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SandboxProcessorTokenCreateResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.SandboxProcessorTokenCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.SandboxProcessorTokenCreateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SandboxProcessorTokenCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SandboxProcessorTokenCreateRequest` | `sandboxProcessorTokenCreateRequestSchema` | `src/models/sandbox-processor-token-create-request.ts` |
| `SandboxProcessorTokenCreateResponse` | `sandboxProcessorTokenCreateResponseSchema` | `src/models/sandbox-processor-token-create-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### sandboxPublicTokenCreate

- **Signature**: `sandboxPublicTokenCreate(request: ThePlaidApiClient.SandboxPublicTokenCreateRequestParams, options?: RequestOptions): ApiPromise<SandboxPublicTokenCreateResponse, ThePlaidApiClient.SandboxPublicTokenCreateError>`
- **Wire**: `POST /sandbox/public_token/create`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SandboxPublicTokenCreateResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.SandboxPublicTokenCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.SandboxPublicTokenCreateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SandboxPublicTokenCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SandboxPublicTokenCreateRequest` | `sandboxPublicTokenCreateRequestSchema` | `src/models/sandbox-public-token-create-request.ts` |
| `SandboxPublicTokenCreateResponse` | `sandboxPublicTokenCreateResponseSchema` | `src/models/sandbox-public-token-create-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### sandboxTransactionsCreate

- **Signature**: `sandboxTransactionsCreate(request: ThePlaidApiClient.SandboxTransactionsCreateRequestParams, options?: RequestOptions): ApiPromise<SandboxTransactionsCreateResponse, ThePlaidApiClient.SandboxTransactionsCreateError>`
- **Wire**: `POST /sandbox/transactions/create`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SandboxTransactionsCreateResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.SandboxTransactionsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.SandboxTransactionsCreateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SandboxTransactionsCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SandboxTransactionsCreateRequest` | `sandboxTransactionsCreateRequestSchema` | `src/models/sandbox-transactions-create-request.ts` |
| `SandboxTransactionsCreateResponse` | `sandboxTransactionsCreateResponseSchema` | `src/models/sandbox-transactions-create-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### sandboxTransferFireWebhook

- **Signature**: `sandboxTransferFireWebhook(request: ThePlaidApiClient.SandboxTransferFireWebhookRequestParams, options?: RequestOptions): ApiPromise<SandboxTransferFireWebhookResponse, ThePlaidApiClient.SandboxTransferFireWebhookError>`
- **Wire**: `POST /sandbox/transfer/fire_webhook`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SandboxTransferFireWebhookResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.SandboxTransferFireWebhookError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.SandboxTransferFireWebhookRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SandboxTransferFireWebhookRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SandboxTransferFireWebhookRequest` | `sandboxTransferFireWebhookRequestSchema` | `src/models/sandbox-transfer-fire-webhook-request.ts` |
| `SandboxTransferFireWebhookResponse` | `sandboxTransferFireWebhookResponseSchema` | `src/models/sandbox-transfer-fire-webhook-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### sandboxTransferLedgerDepositSimulate

- **Signature**: `sandboxTransferLedgerDepositSimulate(request: ThePlaidApiClient.SandboxTransferLedgerDepositSimulateRequestParams, options?: RequestOptions): ApiPromise<SandboxTransferLedgerDepositSimulateResponse, ThePlaidApiClient.SandboxTransferLedgerDepositSimulateError>`
- **Wire**: `POST /sandbox/transfer/ledger/deposit/simulate`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SandboxTransferLedgerDepositSimulateResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.SandboxTransferLedgerDepositSimulateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.SandboxTransferLedgerDepositSimulateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SandboxTransferLedgerDepositSimulateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SandboxTransferLedgerDepositSimulateRequest` | `sandboxTransferLedgerDepositSimulateRequestSchema` | `src/models/sandbox-transfer-ledger-deposit-simulate-request.ts` |
| `SandboxTransferLedgerDepositSimulateResponse` | `sandboxTransferLedgerDepositSimulateResponseSchema` | `src/models/sandbox-transfer-ledger-deposit-simulate-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### sandboxTransferLedgerSimulateAvailable

- **Signature**: `sandboxTransferLedgerSimulateAvailable(request: ThePlaidApiClient.SandboxTransferLedgerSimulateAvailableRequestParams, options?: RequestOptions): ApiPromise<SandboxTransferLedgerSimulateAvailableResponse, ThePlaidApiClient.SandboxTransferLedgerSimulateAvailableError>`
- **Wire**: `POST /sandbox/transfer/ledger/simulate_available`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SandboxTransferLedgerSimulateAvailableResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.SandboxTransferLedgerSimulateAvailableError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.SandboxTransferLedgerSimulateAvailableRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SandboxTransferLedgerSimulateAvailableRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SandboxTransferLedgerSimulateAvailableRequest` | `sandboxTransferLedgerSimulateAvailableRequestSchema` | `src/models/sandbox-transfer-ledger-simulate-available-request.ts` |
| `SandboxTransferLedgerSimulateAvailableResponse` | `sandboxTransferLedgerSimulateAvailableResponseSchema` | `src/models/sandbox-transfer-ledger-simulate-available-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### sandboxTransferLedgerWithdrawSimulate

- **Signature**: `sandboxTransferLedgerWithdrawSimulate(request: ThePlaidApiClient.SandboxTransferLedgerWithdrawSimulateRequestParams, options?: RequestOptions): ApiPromise<SandboxTransferLedgerWithdrawSimulateResponse, ThePlaidApiClient.SandboxTransferLedgerWithdrawSimulateError>`
- **Wire**: `POST /sandbox/transfer/ledger/withdraw/simulate`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SandboxTransferLedgerWithdrawSimulateResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.SandboxTransferLedgerWithdrawSimulateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.SandboxTransferLedgerWithdrawSimulateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SandboxTransferLedgerWithdrawSimulateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SandboxTransferLedgerWithdrawSimulateRequest` | `sandboxTransferLedgerWithdrawSimulateRequestSchema` | `src/models/sandbox-transfer-ledger-withdraw-simulate-request.ts` |
| `SandboxTransferLedgerWithdrawSimulateResponse` | `sandboxTransferLedgerWithdrawSimulateResponseSchema` | `src/models/sandbox-transfer-ledger-withdraw-simulate-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### sandboxTransferRefundSimulate

- **Signature**: `sandboxTransferRefundSimulate(request: ThePlaidApiClient.SandboxTransferRefundSimulateRequestParams, options?: RequestOptions): ApiPromise<SandboxTransferRefundSimulateResponse, ThePlaidApiClient.SandboxTransferRefundSimulateError>`
- **Wire**: `POST /sandbox/transfer/refund/simulate`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SandboxTransferRefundSimulateResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.SandboxTransferRefundSimulateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.SandboxTransferRefundSimulateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SandboxTransferRefundSimulateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SandboxTransferRefundSimulateRequest` | `sandboxTransferRefundSimulateRequestSchema` | `src/models/sandbox-transfer-refund-simulate-request.ts` |
| `SandboxTransferRefundSimulateResponse` | `sandboxTransferRefundSimulateResponseSchema` | `src/models/sandbox-transfer-refund-simulate-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### sandboxTransferRepaymentSimulate

- **Signature**: `sandboxTransferRepaymentSimulate(request: ThePlaidApiClient.SandboxTransferRepaymentSimulateRequestParams, options?: RequestOptions): ApiPromise<SandboxTransferRepaymentSimulateResponse, ThePlaidApiClient.SandboxTransferRepaymentSimulateError>`
- **Wire**: `POST /sandbox/transfer/repayment/simulate`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SandboxTransferRepaymentSimulateResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.SandboxTransferRepaymentSimulateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.SandboxTransferRepaymentSimulateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SandboxTransferRepaymentSimulateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SandboxTransferRepaymentSimulateRequest` | `sandboxTransferRepaymentSimulateRequestSchema` | `src/models/sandbox-transfer-repayment-simulate-request.ts` |
| `SandboxTransferRepaymentSimulateResponse` | `sandboxTransferRepaymentSimulateResponseSchema` | `src/models/sandbox-transfer-repayment-simulate-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### sandboxTransferSimulate

- **Signature**: `sandboxTransferSimulate(request: ThePlaidApiClient.SandboxTransferSimulateRequestParams, options?: RequestOptions): ApiPromise<SandboxTransferSimulateResponse, ThePlaidApiClient.SandboxTransferSimulateError>`
- **Wire**: `POST /sandbox/transfer/simulate`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SandboxTransferSimulateResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.SandboxTransferSimulateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.SandboxTransferSimulateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SandboxTransferSimulateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SandboxTransferSimulateRequest` | `sandboxTransferSimulateRequestSchema` | `src/models/sandbox-transfer-simulate-request.ts` |
| `SandboxTransferSimulateResponse` | `sandboxTransferSimulateResponseSchema` | `src/models/sandbox-transfer-simulate-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### sandboxTransferSweepSimulate

- **Signature**: `sandboxTransferSweepSimulate(request: ThePlaidApiClient.SandboxTransferSweepSimulateRequestParams, options?: RequestOptions): ApiPromise<SandboxTransferSweepSimulateResponse, ThePlaidApiClient.SandboxTransferSweepSimulateError>`
- **Wire**: `POST /sandbox/transfer/sweep/simulate`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SandboxTransferSweepSimulateResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.SandboxTransferSweepSimulateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.SandboxTransferSweepSimulateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SandboxTransferSweepSimulateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SandboxTransferSweepSimulateRequest` | `sandboxTransferSweepSimulateRequestSchema` | `src/models/sandbox-transfer-sweep-simulate-request.ts` |
| `SandboxTransferSweepSimulateResponse` | `sandboxTransferSweepSimulateResponseSchema` | `src/models/sandbox-transfer-sweep-simulate-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### sandboxTransferTestClockAdvance

- **Signature**: `sandboxTransferTestClockAdvance(request: ThePlaidApiClient.SandboxTransferTestClockAdvanceRequestParams, options?: RequestOptions): ApiPromise<SandboxTransferTestClockAdvanceResponse, ThePlaidApiClient.SandboxTransferTestClockAdvanceError>`
- **Wire**: `POST /sandbox/transfer/test_clock/advance`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SandboxTransferTestClockAdvanceResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.SandboxTransferTestClockAdvanceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.SandboxTransferTestClockAdvanceRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SandboxTransferTestClockAdvanceRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SandboxTransferTestClockAdvanceRequest` | `sandboxTransferTestClockAdvanceRequestSchema` | `src/models/sandbox-transfer-test-clock-advance-request.ts` |
| `SandboxTransferTestClockAdvanceResponse` | `sandboxTransferTestClockAdvanceResponseSchema` | `src/models/sandbox-transfer-test-clock-advance-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### sandboxTransferTestClockCreate

- **Signature**: `sandboxTransferTestClockCreate(request: ThePlaidApiClient.SandboxTransferTestClockCreateRequestParams, options?: RequestOptions): ApiPromise<SandboxTransferTestClockCreateResponse, ThePlaidApiClient.SandboxTransferTestClockCreateError>`
- **Wire**: `POST /sandbox/transfer/test_clock/create`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SandboxTransferTestClockCreateResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.SandboxTransferTestClockCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.SandboxTransferTestClockCreateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SandboxTransferTestClockCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SandboxTransferTestClockCreateRequest` | `sandboxTransferTestClockCreateRequestSchema` | `src/models/sandbox-transfer-test-clock-create-request.ts` |
| `SandboxTransferTestClockCreateResponse` | `sandboxTransferTestClockCreateResponseSchema` | `src/models/sandbox-transfer-test-clock-create-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### sandboxTransferTestClockGet

- **Signature**: `sandboxTransferTestClockGet(request: ThePlaidApiClient.SandboxTransferTestClockGetRequestParams, options?: RequestOptions): ApiPromise<SandboxTransferTestClockGetResponse, ThePlaidApiClient.SandboxTransferTestClockGetError>`
- **Wire**: `POST /sandbox/transfer/test_clock/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SandboxTransferTestClockGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.SandboxTransferTestClockGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.SandboxTransferTestClockGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SandboxTransferTestClockGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SandboxTransferTestClockGetRequest` | `sandboxTransferTestClockGetRequestSchema` | `src/models/sandbox-transfer-test-clock-get-request.ts` |
| `SandboxTransferTestClockGetResponse` | `sandboxTransferTestClockGetResponseSchema` | `src/models/sandbox-transfer-test-clock-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### sandboxTransferTestClockList

- **Signature**: `sandboxTransferTestClockList(request: ThePlaidApiClient.SandboxTransferTestClockListRequestParams, options?: RequestOptions): ApiPromise<SandboxTransferTestClockListResponse, ThePlaidApiClient.SandboxTransferTestClockListError>`
- **Wire**: `POST /sandbox/transfer/test_clock/list`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SandboxTransferTestClockListResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.SandboxTransferTestClockListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.SandboxTransferTestClockListRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SandboxTransferTestClockListRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SandboxTransferTestClockListRequest` | `sandboxTransferTestClockListRequestSchema` | `src/models/sandbox-transfer-test-clock-list-request.ts` |
| `SandboxTransferTestClockListResponse` | `sandboxTransferTestClockListResponseSchema` | `src/models/sandbox-transfer-test-clock-list-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### sandboxUserResetLogin

- **Signature**: `sandboxUserResetLogin(request: ThePlaidApiClient.SandboxUserResetLoginRequestParams, options?: RequestOptions): ApiPromise<SandboxUserResetLoginResponse, ThePlaidApiClient.SandboxUserResetLoginError>`
- **Wire**: `POST /sandbox/user/reset_login`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SandboxUserResetLoginResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.SandboxUserResetLoginError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.SandboxUserResetLoginRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SandboxUserResetLoginRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SandboxUserResetLoginRequest` | `sandboxUserResetLoginRequestSchema` | `src/models/sandbox-user-reset-login-request.ts` |
| `SandboxUserResetLoginResponse` | `sandboxUserResetLoginResponseSchema` | `src/models/sandbox-user-reset-login-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### sessionTokenCreate

- **Signature**: `sessionTokenCreate(request: ThePlaidApiClient.SessionTokenCreateRequestParams, options?: RequestOptions): ApiPromise<SessionTokenCreateResponse, ThePlaidApiClient.SessionTokenCreateError>`
- **Wire**: `POST /session/token/create`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SessionTokenCreateResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.SessionTokenCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.SessionTokenCreateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SessionTokenCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SessionTokenCreateRequest` | `sessionTokenCreateRequestSchema` | `src/models/session-token-create-request.ts` |
| `SessionTokenCreateResponse` | `sessionTokenCreateResponseSchema` | `src/models/session-token-create-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### signalDecisionReport

- **Signature**: `signalDecisionReport(request: ThePlaidApiClient.SignalDecisionReportRequestParams, options?: RequestOptions): ApiPromise<SignalDecisionReportResponse, ThePlaidApiClient.SignalDecisionReportError>`
- **Wire**: `POST /signal/decision/report`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SignalDecisionReportResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.SignalDecisionReportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.SignalDecisionReportRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SignalDecisionReportRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SignalDecisionReportRequest` | `signalDecisionReportRequestSchema` | `src/models/signal-decision-report-request.ts` |
| `SignalDecisionReportResponse` | `signalDecisionReportResponseSchema` | `src/models/signal-decision-report-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### signalEvaluate

- **Signature**: `signalEvaluate(request: ThePlaidApiClient.SignalEvaluateRequestParams, options?: RequestOptions): ApiPromise<SignalEvaluateResponse, ThePlaidApiClient.SignalEvaluateError>`
- **Wire**: `POST /signal/evaluate`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SignalEvaluateResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.SignalEvaluateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.SignalEvaluateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SignalEvaluateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SignalEvaluateRequest` | `signalEvaluateRequestSchema` | `src/models/signal-evaluate-request.ts` |
| `SignalEvaluateResponse` | `signalEvaluateResponseSchema` | `src/models/signal-evaluate-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### signalPrepare

- **Signature**: `signalPrepare(request: ThePlaidApiClient.SignalPrepareRequestParams, options?: RequestOptions): ApiPromise<SignalPrepareResponse, ThePlaidApiClient.SignalPrepareError>`
- **Wire**: `POST /signal/prepare`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SignalPrepareResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.SignalPrepareError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.SignalPrepareRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SignalPrepareRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SignalPrepareRequest` | `signalPrepareRequestSchema` | `src/models/signal-prepare-request.ts` |
| `SignalPrepareResponse` | `signalPrepareResponseSchema` | `src/models/signal-prepare-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### signalReturnReport

- **Signature**: `signalReturnReport(request: ThePlaidApiClient.SignalReturnReportRequestParams, options?: RequestOptions): ApiPromise<SignalReturnReportResponse, ThePlaidApiClient.SignalReturnReportError>`
- **Wire**: `POST /signal/return/report`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SignalReturnReportResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.SignalReturnReportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.SignalReturnReportRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SignalReturnReportRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SignalReturnReportRequest` | `signalReturnReportRequestSchema` | `src/models/signal-return-report-request.ts` |
| `SignalReturnReportResponse` | `signalReturnReportResponseSchema` | `src/models/signal-return-report-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### signalSchedule

- **Signature**: `signalSchedule(request: ThePlaidApiClient.SignalScheduleRequestParams, options?: RequestOptions): ApiPromise<SignalScheduleResponse, ThePlaidApiClient.SignalScheduleError>`
- **Wire**: `POST /signal/schedule`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SignalScheduleResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.SignalScheduleError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.SignalScheduleRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SignalScheduleRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SignalScheduleRequest` | `signalScheduleRequestSchema` | `src/models/signal-schedule-request.ts` |
| `SignalScheduleResponse` | `signalScheduleResponseSchema` | `src/models/signal-schedule-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### statementsDownload

- **Signature**: `statementsDownload(request: ThePlaidApiClient.StatementsDownloadRequestParams, options?: RequestOptions): ApiPromise<undefined, ThePlaidApiClient.StatementsDownloadError>`
- **Wire**: `POST /statements/download`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.StatementsDownloadError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.StatementsDownloadRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `StatementsDownloadRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `StatementsDownloadRequest` | `statementsDownloadRequestSchema` | `src/models/statements-download-request.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### statementsList

- **Signature**: `statementsList(request: ThePlaidApiClient.StatementsListRequestParams, options?: RequestOptions): ApiPromise<StatementsListResponse, ThePlaidApiClient.StatementsListError>`
- **Wire**: `POST /statements/list`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StatementsListResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.StatementsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.StatementsListRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `StatementsListRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `StatementsListRequest` | `statementsListRequestSchema` | `src/models/statements-list-request.ts` |
| `StatementsListResponse` | `statementsListResponseSchema` | `src/models/statements-list-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### statementsRefresh

- **Signature**: `statementsRefresh(request: ThePlaidApiClient.StatementsRefreshRequestParams, options?: RequestOptions): ApiPromise<StatementsRefreshResponse, ThePlaidApiClient.StatementsRefreshError>`
- **Wire**: `POST /statements/refresh`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StatementsRefreshResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.StatementsRefreshError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.StatementsRefreshRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `StatementsRefreshRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `StatementsRefreshRequest` | `statementsRefreshRequestSchema` | `src/models/statements-refresh-request.ts` |
| `StatementsRefreshResponse` | `statementsRefreshResponseSchema` | `src/models/statements-refresh-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### transactionsEnhance

- **Signature**: `transactionsEnhance(request: ThePlaidApiClient.TransactionsEnhanceRequest, options?: RequestOptions): ApiPromise<TransactionsEnhanceGetResponse, ThePlaidApiClient.TransactionsEnhanceError>`
- **Wire**: `POST /beta/transactions/v1/enhance`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TransactionsEnhanceGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.TransactionsEnhanceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.TransactionsEnhanceRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TransactionsEnhanceGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransactionsEnhanceGetRequest` | `transactionsEnhanceGetRequestSchema` | `src/models/transactions-enhance-get-request.ts` |
| `TransactionsEnhanceGetResponse` | `transactionsEnhanceGetResponseSchema` | `src/models/transactions-enhance-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### transactionsEnrich

- **Signature**: `transactionsEnrich(request: ThePlaidApiClient.TransactionsEnrichRequestParams, options?: RequestOptions): ApiPromise<TransactionsEnrichResponse, ThePlaidApiClient.TransactionsEnrichError>`
- **Wire**: `POST /transactions/enrich`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TransactionsEnrichResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.TransactionsEnrichError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.TransactionsEnrichRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TransactionsEnrichRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransactionsEnrichRequest` | `transactionsEnrichRequestSchema` | `src/models/transactions-enrich-request.ts` |
| `TransactionsEnrichResponse` | `transactionsEnrichResponseSchema` | `src/models/transactions-enrich-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### transactionsGet

- **Signature**: `transactionsGet(request: ThePlaidApiClient.TransactionsGetRequestParams, options?: RequestOptions): ApiPromise<TransactionsGetResponse, ThePlaidApiClient.TransactionsGetError>`
- **Wire**: `POST /transactions/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TransactionsGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.TransactionsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.TransactionsGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TransactionsGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransactionsGetRequest` | `transactionsGetRequestSchema` | `src/models/transactions-get-request.ts` |
| `TransactionsGetResponse` | `transactionsGetResponseSchema` | `src/models/transactions-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### transactionsRecurringGet

- **Signature**: `transactionsRecurringGet(request: ThePlaidApiClient.TransactionsRecurringGetRequestParams, options?: RequestOptions): ApiPromise<TransactionsRecurringGetResponse, ThePlaidApiClient.TransactionsRecurringGetError>`
- **Wire**: `POST /transactions/recurring/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TransactionsRecurringGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.TransactionsRecurringGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.TransactionsRecurringGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TransactionsRecurringGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransactionsRecurringGetRequest` | `transactionsRecurringGetRequestSchema` | `src/models/transactions-recurring-get-request.ts` |
| `TransactionsRecurringGetResponse` | `transactionsRecurringGetResponseSchema` | `src/models/transactions-recurring-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### transactionsRefresh

- **Signature**: `transactionsRefresh(request: ThePlaidApiClient.TransactionsRefreshRequestParams, options?: RequestOptions): ApiPromise<TransactionsRefreshResponse, ThePlaidApiClient.TransactionsRefreshError>`
- **Wire**: `POST /transactions/refresh`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TransactionsRefreshResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.TransactionsRefreshError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.TransactionsRefreshRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TransactionsRefreshRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransactionsRefreshRequest` | `transactionsRefreshRequestSchema` | `src/models/transactions-refresh-request.ts` |
| `TransactionsRefreshResponse` | `transactionsRefreshResponseSchema` | `src/models/transactions-refresh-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### transactionsRulesCreate

- **Signature**: `transactionsRulesCreate(request: ThePlaidApiClient.TransactionsRulesCreateRequestParams, options?: RequestOptions): ApiPromise<TransactionsRulesCreateResponse, ThePlaidApiClient.TransactionsRulesCreateError>`
- **Wire**: `POST /beta/transactions/rules/v1/create`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TransactionsRulesCreateResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.TransactionsRulesCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.TransactionsRulesCreateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TransactionsRulesCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransactionsRulesCreateRequest` | `transactionsRulesCreateRequestSchema` | `src/models/transactions-rules-create-request.ts` |
| `TransactionsRulesCreateResponse` | `transactionsRulesCreateResponseSchema` | `src/models/transactions-rules-create-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### transactionsRulesList

- **Signature**: `transactionsRulesList(request: ThePlaidApiClient.TransactionsRulesListRequestParams, options?: RequestOptions): ApiPromise<TransactionsRulesListResponse, ThePlaidApiClient.TransactionsRulesListError>`
- **Wire**: `POST /beta/transactions/rules/v1/list`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TransactionsRulesListResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.TransactionsRulesListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.TransactionsRulesListRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TransactionsRulesListRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransactionsRulesListRequest` | `transactionsRulesListRequestSchema` | `src/models/transactions-rules-list-request.ts` |
| `TransactionsRulesListResponse` | `transactionsRulesListResponseSchema` | `src/models/transactions-rules-list-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### transactionsRulesRemove

- **Signature**: `transactionsRulesRemove(request: ThePlaidApiClient.TransactionsRulesRemoveRequestParams, options?: RequestOptions): ApiPromise<TransactionsRulesRemoveResponse, ThePlaidApiClient.TransactionsRulesRemoveError>`
- **Wire**: `POST /beta/transactions/rules/v1/remove`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TransactionsRulesRemoveResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.TransactionsRulesRemoveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.TransactionsRulesRemoveRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TransactionsRulesRemoveRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransactionsRulesRemoveRequest` | `transactionsRulesRemoveRequestSchema` | `src/models/transactions-rules-remove-request.ts` |
| `TransactionsRulesRemoveResponse` | `transactionsRulesRemoveResponseSchema` | `src/models/transactions-rules-remove-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### transactionsSync

- **Signature**: `transactionsSync(request: ThePlaidApiClient.TransactionsSyncRequestParams, options?: RequestOptions): ApiPromise<TransactionsSyncResponse, ThePlaidApiClient.TransactionsSyncError>`
- **Wire**: `POST /transactions/sync`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TransactionsSyncResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.TransactionsSyncError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.TransactionsSyncRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TransactionsSyncRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransactionsSyncRequest` | `transactionsSyncRequestSchema` | `src/models/transactions-sync-request.ts` |
| `TransactionsSyncResponse` | `transactionsSyncResponseSchema` | `src/models/transactions-sync-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### transactionsUserInsightsGet

- **Signature**: `transactionsUserInsightsGet(request: ThePlaidApiClient.TransactionsUserInsightsGetRequestParams, options?: RequestOptions): ApiPromise<TransactionsUserInsightsGetResponse, ThePlaidApiClient.TransactionsUserInsightsGetError>`
- **Wire**: `POST /beta/transactions/user_insights/v1/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TransactionsUserInsightsGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.TransactionsUserInsightsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.TransactionsUserInsightsGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TransactionsUserInsightsGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransactionsUserInsightsGetRequest` | `transactionsUserInsightsGetRequestSchema` | `src/models/transactions-user-insights-get-request.ts` |
| `TransactionsUserInsightsGetResponse` | `transactionsUserInsightsGetResponseSchema` | `src/models/transactions-user-insights-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### transferAuthorizationCancel

- **Signature**: `transferAuthorizationCancel(request: ThePlaidApiClient.TransferAuthorizationCancelRequestParams, options?: RequestOptions): ApiPromise<TransferAuthorizationCancelResponse, ThePlaidApiClient.TransferAuthorizationCancelError>`
- **Wire**: `POST /transfer/authorization/cancel`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TransferAuthorizationCancelResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.TransferAuthorizationCancelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.TransferAuthorizationCancelRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TransferAuthorizationCancelRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransferAuthorizationCancelRequest` | `transferAuthorizationCancelRequestSchema` | `src/models/transfer-authorization-cancel-request.ts` |
| `TransferAuthorizationCancelResponse` | `transferAuthorizationCancelResponseSchema` | `src/models/transfer-authorization-cancel-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### transferAuthorizationCreate

- **Signature**: `transferAuthorizationCreate(request: ThePlaidApiClient.TransferAuthorizationCreateRequestParams, options?: RequestOptions): ApiPromise<TransferAuthorizationCreateResponse, ThePlaidApiClient.TransferAuthorizationCreateError>`
- **Wire**: `POST /transfer/authorization/create`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TransferAuthorizationCreateResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.TransferAuthorizationCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.TransferAuthorizationCreateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TransferAuthorizationCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransferAuthorizationCreateRequest` | `transferAuthorizationCreateRequestSchema` | `src/models/transfer-authorization-create-request.ts` |
| `TransferAuthorizationCreateResponse` | `transferAuthorizationCreateResponseSchema` | `src/models/transfer-authorization-create-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### transferBalanceGet

- **Signature**: `transferBalanceGet(request: ThePlaidApiClient.TransferBalanceGetRequestParams, options?: RequestOptions): ApiPromise<TransferBalanceGetResponse, ThePlaidApiClient.TransferBalanceGetError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /transfer/balance/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TransferBalanceGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.TransferBalanceGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.TransferBalanceGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TransferBalanceGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransferBalanceGetRequest` | `transferBalanceGetRequestSchema` | `src/models/transfer-balance-get-request.ts` |
| `TransferBalanceGetResponse` | `transferBalanceGetResponseSchema` | `src/models/transfer-balance-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### transferCancel

- **Signature**: `transferCancel(request: ThePlaidApiClient.TransferCancelRequestParams, options?: RequestOptions): ApiPromise<TransferCancelResponse, ThePlaidApiClient.TransferCancelError>`
- **Wire**: `POST /transfer/cancel`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TransferCancelResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.TransferCancelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.TransferCancelRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TransferCancelRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransferCancelRequest` | `transferCancelRequestSchema` | `src/models/transfer-cancel-request.ts` |
| `TransferCancelResponse` | `transferCancelResponseSchema` | `src/models/transfer-cancel-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### transferCapabilitiesGet

- **Signature**: `transferCapabilitiesGet(request: ThePlaidApiClient.TransferCapabilitiesGetRequestParams, options?: RequestOptions): ApiPromise<TransferCapabilitiesGetResponse, ThePlaidApiClient.TransferCapabilitiesGetError>`
- **Wire**: `POST /transfer/capabilities/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TransferCapabilitiesGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.TransferCapabilitiesGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.TransferCapabilitiesGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TransferCapabilitiesGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransferCapabilitiesGetRequest` | `transferCapabilitiesGetRequestSchema` | `src/models/transfer-capabilities-get-request.ts` |
| `TransferCapabilitiesGetResponse` | `transferCapabilitiesGetResponseSchema` | `src/models/transfer-capabilities-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### transferConfigurationGet

- **Signature**: `transferConfigurationGet(request: ThePlaidApiClient.TransferConfigurationGetRequestParams, options?: RequestOptions): ApiPromise<TransferConfigurationGetResponse, ThePlaidApiClient.TransferConfigurationGetError>`
- **Wire**: `POST /transfer/configuration/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TransferConfigurationGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.TransferConfigurationGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.TransferConfigurationGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TransferConfigurationGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransferConfigurationGetRequest` | `transferConfigurationGetRequestSchema` | `src/models/transfer-configuration-get-request.ts` |
| `TransferConfigurationGetResponse` | `transferConfigurationGetResponseSchema` | `src/models/transfer-configuration-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### transferCreate

- **Signature**: `transferCreate(request: ThePlaidApiClient.TransferCreateRequestParams, options?: RequestOptions): ApiPromise<TransferCreateResponse, ThePlaidApiClient.TransferCreateError>`
- **Wire**: `POST /transfer/create`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TransferCreateResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.TransferCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.TransferCreateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TransferCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransferCreateRequest` | `transferCreateRequestSchema` | `src/models/transfer-create-request.ts` |
| `TransferCreateResponse` | `transferCreateResponseSchema` | `src/models/transfer-create-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### transferDiligenceDocumentUpload

- **Signature**: `transferDiligenceDocumentUpload(request: ThePlaidApiClient.TransferDiligenceDocumentUploadRequestParams, options?: RequestOptions): ApiPromise<TransferDiligenceDocumentUploadResponse, ThePlaidApiClient.TransferDiligenceDocumentUploadError>`
- **Wire**: `POST /transfer/diligence/document/upload`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TransferDiligenceDocumentUploadResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.TransferDiligenceDocumentUploadError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.TransferDiligenceDocumentUploadRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TransferDiligenceDocumentUploadRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransferDiligenceDocumentUploadRequest` | `transferDiligenceDocumentUploadRequestSchema` | `src/models/transfer-diligence-document-upload-request.ts` |
| `TransferDiligenceDocumentUploadResponse` | `transferDiligenceDocumentUploadResponseSchema` | `src/models/transfer-diligence-document-upload-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### transferDiligenceSubmit

- **Signature**: `transferDiligenceSubmit(request: ThePlaidApiClient.TransferDiligenceSubmitRequestParams, options?: RequestOptions): ApiPromise<TransferDiligenceSubmitResponse, ThePlaidApiClient.TransferDiligenceSubmitError>`
- **Wire**: `POST /transfer/diligence/submit`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TransferDiligenceSubmitResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.TransferDiligenceSubmitError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.TransferDiligenceSubmitRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TransferDiligenceSubmitRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransferDiligenceSubmitRequest` | `transferDiligenceSubmitRequestSchema` | `src/models/transfer-diligence-submit-request.ts` |
| `TransferDiligenceSubmitResponse` | `transferDiligenceSubmitResponseSchema` | `src/models/transfer-diligence-submit-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### transferEventList

- **Signature**: `transferEventList(request: ThePlaidApiClient.TransferEventListRequestParams, options?: RequestOptions): ApiPromise<TransferEventListResponse, ThePlaidApiClient.TransferEventListError>`
- **Wire**: `POST /transfer/event/list`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TransferEventListResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.TransferEventListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.TransferEventListRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TransferEventListRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransferEventListRequest` | `transferEventListRequestSchema` | `src/models/transfer-event-list-request.ts` |
| `TransferEventListResponse` | `transferEventListResponseSchema` | `src/models/transfer-event-list-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### transferEventSync

- **Signature**: `transferEventSync(request: ThePlaidApiClient.TransferEventSyncRequestParams, options?: RequestOptions): ApiPromise<TransferEventSyncResponse, ThePlaidApiClient.TransferEventSyncError>`
- **Wire**: `POST /transfer/event/sync`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TransferEventSyncResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.TransferEventSyncError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.TransferEventSyncRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TransferEventSyncRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransferEventSyncRequest` | `transferEventSyncRequestSchema` | `src/models/transfer-event-sync-request.ts` |
| `TransferEventSyncResponse` | `transferEventSyncResponseSchema` | `src/models/transfer-event-sync-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### transferGet

- **Signature**: `transferGet(request: ThePlaidApiClient.TransferGetRequestParams, options?: RequestOptions): ApiPromise<TransferGetResponse, ThePlaidApiClient.TransferGetError>`
- **Wire**: `POST /transfer/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TransferGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.TransferGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.TransferGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TransferGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransferGetRequest` | `transferGetRequestSchema` | `src/models/transfer-get-request.ts` |
| `TransferGetResponse` | `transferGetResponseSchema` | `src/models/transfer-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### transferIntentCreate

- **Signature**: `transferIntentCreate(request: ThePlaidApiClient.TransferIntentCreateRequestParams, options?: RequestOptions): ApiPromise<TransferIntentCreateResponse, ThePlaidApiClient.TransferIntentCreateError>`
- **Wire**: `POST /transfer/intent/create`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TransferIntentCreateResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.TransferIntentCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.TransferIntentCreateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TransferIntentCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransferIntentCreateRequest` | `transferIntentCreateRequestSchema` | `src/models/transfer-intent-create-request.ts` |
| `TransferIntentCreateResponse` | `transferIntentCreateResponseSchema` | `src/models/transfer-intent-create-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### transferIntentGet

- **Signature**: `transferIntentGet(request: ThePlaidApiClient.TransferIntentGetRequestParams, options?: RequestOptions): ApiPromise<TransferIntentGetResponse, ThePlaidApiClient.TransferIntentGetError>`
- **Wire**: `POST /transfer/intent/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TransferIntentGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.TransferIntentGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.TransferIntentGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TransferIntentGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransferIntentGetRequest` | `transferIntentGetRequestSchema` | `src/models/transfer-intent-get-request.ts` |
| `TransferIntentGetResponse` | `transferIntentGetResponseSchema` | `src/models/transfer-intent-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### transferLedgerDeposit

- **Signature**: `transferLedgerDeposit(request: ThePlaidApiClient.TransferLedgerDepositRequestParams, options?: RequestOptions): ApiPromise<TransferLedgerDepositResponse, ThePlaidApiClient.TransferLedgerDepositError>`
- **Wire**: `POST /transfer/ledger/deposit`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TransferLedgerDepositResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.TransferLedgerDepositError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.TransferLedgerDepositRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TransferLedgerDepositRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransferLedgerDepositRequest` | `transferLedgerDepositRequestSchema` | `src/models/transfer-ledger-deposit-request.ts` |
| `TransferLedgerDepositResponse` | `transferLedgerDepositResponseSchema` | `src/models/transfer-ledger-deposit-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### transferLedgerDistribute

- **Signature**: `transferLedgerDistribute(request: ThePlaidApiClient.TransferLedgerDistributeRequestParams, options?: RequestOptions): ApiPromise<TransferLedgerDistributeResponse, ThePlaidApiClient.TransferLedgerDistributeError>`
- **Wire**: `POST /transfer/ledger/distribute`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TransferLedgerDistributeResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.TransferLedgerDistributeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.TransferLedgerDistributeRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TransferLedgerDistributeRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransferLedgerDistributeRequest` | `transferLedgerDistributeRequestSchema` | `src/models/transfer-ledger-distribute-request.ts` |
| `TransferLedgerDistributeResponse` | `transferLedgerDistributeResponseSchema` | `src/models/transfer-ledger-distribute-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### transferLedgerEventList

- **Signature**: `transferLedgerEventList(request: ThePlaidApiClient.TransferLedgerEventListRequestParams, options?: RequestOptions): ApiPromise<TransferLedgerEventListResponse, ThePlaidApiClient.TransferLedgerEventListError>`
- **Wire**: `POST /transfer/ledger/event/list`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TransferLedgerEventListResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.TransferLedgerEventListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.TransferLedgerEventListRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TransferLedgerEventListRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransferLedgerEventListRequest` | `transferLedgerEventListRequestSchema` | `src/models/transfer-ledger-event-list-request.ts` |
| `TransferLedgerEventListResponse` | `transferLedgerEventListResponseSchema` | `src/models/transfer-ledger-event-list-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### transferLedgerGet

- **Signature**: `transferLedgerGet(request: ThePlaidApiClient.TransferLedgerGetRequestParams, options?: RequestOptions): ApiPromise<TransferLedgerGetResponse, ThePlaidApiClient.TransferLedgerGetError>`
- **Wire**: `POST /transfer/ledger/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TransferLedgerGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.TransferLedgerGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.TransferLedgerGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TransferLedgerGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransferLedgerGetRequest` | `transferLedgerGetRequestSchema` | `src/models/transfer-ledger-get-request.ts` |
| `TransferLedgerGetResponse` | `transferLedgerGetResponseSchema` | `src/models/transfer-ledger-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### transferLedgerWithdraw

- **Signature**: `transferLedgerWithdraw(request: ThePlaidApiClient.TransferLedgerWithdrawRequestParams, options?: RequestOptions): ApiPromise<TransferLedgerWithdrawResponse, ThePlaidApiClient.TransferLedgerWithdrawError>`
- **Wire**: `POST /transfer/ledger/withdraw`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TransferLedgerWithdrawResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.TransferLedgerWithdrawError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.TransferLedgerWithdrawRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TransferLedgerWithdrawRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransferLedgerWithdrawRequest` | `transferLedgerWithdrawRequestSchema` | `src/models/transfer-ledger-withdraw-request.ts` |
| `TransferLedgerWithdrawResponse` | `transferLedgerWithdrawResponseSchema` | `src/models/transfer-ledger-withdraw-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### transferList

- **Signature**: `transferList(request: ThePlaidApiClient.TransferListRequestParams, options?: RequestOptions): ApiPromise<TransferListResponse, ThePlaidApiClient.TransferListError>`
- **Wire**: `POST /transfer/list`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TransferListResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.TransferListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.TransferListRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TransferListRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransferListRequest` | `transferListRequestSchema` | `src/models/transfer-list-request.ts` |
| `TransferListResponse` | `transferListResponseSchema` | `src/models/transfer-list-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### transferMetricsGet

- **Signature**: `transferMetricsGet(request: ThePlaidApiClient.TransferMetricsGetRequestParams, options?: RequestOptions): ApiPromise<TransferMetricsGetResponse, ThePlaidApiClient.TransferMetricsGetError>`
- **Wire**: `POST /transfer/metrics/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TransferMetricsGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.TransferMetricsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.TransferMetricsGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TransferMetricsGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransferMetricsGetRequest` | `transferMetricsGetRequestSchema` | `src/models/transfer-metrics-get-request.ts` |
| `TransferMetricsGetResponse` | `transferMetricsGetResponseSchema` | `src/models/transfer-metrics-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### transferMigrateAccount

- **Signature**: `transferMigrateAccount(request: ThePlaidApiClient.TransferMigrateAccountRequestParams, options?: RequestOptions): ApiPromise<TransferMigrateAccountResponse, ThePlaidApiClient.TransferMigrateAccountError>`
- **Wire**: `POST /transfer/migrate_account`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TransferMigrateAccountResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.TransferMigrateAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.TransferMigrateAccountRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TransferMigrateAccountRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransferMigrateAccountRequest` | `transferMigrateAccountRequestSchema` | `src/models/transfer-migrate-account-request.ts` |
| `TransferMigrateAccountResponse` | `transferMigrateAccountResponseSchema` | `src/models/transfer-migrate-account-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### transferOriginatorCreate

- **Signature**: `transferOriginatorCreate(request: ThePlaidApiClient.TransferOriginatorCreateRequestParams, options?: RequestOptions): ApiPromise<TransferOriginatorCreateResponse, ThePlaidApiClient.TransferOriginatorCreateError>`
- **Wire**: `POST /transfer/originator/create`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TransferOriginatorCreateResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.TransferOriginatorCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.TransferOriginatorCreateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TransferOriginatorCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransferOriginatorCreateRequest` | `transferOriginatorCreateRequestSchema` | `src/models/transfer-originator-create-request.ts` |
| `TransferOriginatorCreateResponse` | `transferOriginatorCreateResponseSchema` | `src/models/transfer-originator-create-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### transferOriginatorFundingAccountCreate

- **Signature**: `transferOriginatorFundingAccountCreate(request: ThePlaidApiClient.TransferOriginatorFundingAccountCreateRequestParams, options?: RequestOptions): ApiPromise<TransferOriginatorFundingAccountCreateResponse, ThePlaidApiClient.TransferOriginatorFundingAccountCreateError>`
- **Wire**: `POST /transfer/originator/funding_account/create`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TransferOriginatorFundingAccountCreateResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.TransferOriginatorFundingAccountCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.TransferOriginatorFundingAccountCreateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TransferOriginatorFundingAccountCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransferOriginatorFundingAccountCreateRequest` | `transferOriginatorFundingAccountCreateRequestSchema` | `src/models/transfer-originator-funding-account-create-request.ts` |
| `TransferOriginatorFundingAccountCreateResponse` | `transferOriginatorFundingAccountCreateResponseSchema` | `src/models/transfer-originator-funding-account-create-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### transferOriginatorFundingAccountUpdate

- **Signature**: `transferOriginatorFundingAccountUpdate(request: ThePlaidApiClient.TransferOriginatorFundingAccountUpdateRequestParams, options?: RequestOptions): ApiPromise<TransferOriginatorFundingAccountUpdateResponse, ThePlaidApiClient.TransferOriginatorFundingAccountUpdateError>`
- **Wire**: `POST /transfer/originator/funding_account/update`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TransferOriginatorFundingAccountUpdateResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.TransferOriginatorFundingAccountUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.TransferOriginatorFundingAccountUpdateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TransferOriginatorFundingAccountUpdateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransferOriginatorFundingAccountUpdateRequest` | `transferOriginatorFundingAccountUpdateRequestSchema` | `src/models/transfer-originator-funding-account-update-request.ts` |
| `TransferOriginatorFundingAccountUpdateResponse` | `transferOriginatorFundingAccountUpdateResponseSchema` | `src/models/transfer-originator-funding-account-update-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### transferOriginatorGet

- **Signature**: `transferOriginatorGet(request: ThePlaidApiClient.TransferOriginatorGetRequestParams, options?: RequestOptions): ApiPromise<TransferOriginatorGetResponse, ThePlaidApiClient.TransferOriginatorGetError>`
- **Wire**: `POST /transfer/originator/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TransferOriginatorGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.TransferOriginatorGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.TransferOriginatorGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TransferOriginatorGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransferOriginatorGetRequest` | `transferOriginatorGetRequestSchema` | `src/models/transfer-originator-get-request.ts` |
| `TransferOriginatorGetResponse` | `transferOriginatorGetResponseSchema` | `src/models/transfer-originator-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### transferOriginatorList

- **Signature**: `transferOriginatorList(request: ThePlaidApiClient.TransferOriginatorListRequestParams, options?: RequestOptions): ApiPromise<TransferOriginatorListResponse, ThePlaidApiClient.TransferOriginatorListError>`
- **Wire**: `POST /transfer/originator/list`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TransferOriginatorListResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.TransferOriginatorListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.TransferOriginatorListRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TransferOriginatorListRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransferOriginatorListRequest` | `transferOriginatorListRequestSchema` | `src/models/transfer-originator-list-request.ts` |
| `TransferOriginatorListResponse` | `transferOriginatorListResponseSchema` | `src/models/transfer-originator-list-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### transferPlatformOriginatorCreate

- **Signature**: `transferPlatformOriginatorCreate(request: ThePlaidApiClient.TransferPlatformOriginatorCreateRequestParams, options?: RequestOptions): ApiPromise<TransferPlatformOriginatorCreateResponse, ThePlaidApiClient.TransferPlatformOriginatorCreateError>`
- **Wire**: `POST /transfer/platform/originator/create`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TransferPlatformOriginatorCreateResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.TransferPlatformOriginatorCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.TransferPlatformOriginatorCreateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TransferPlatformOriginatorCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransferPlatformOriginatorCreateRequest` | `transferPlatformOriginatorCreateRequestSchema` | `src/models/transfer-platform-originator-create-request.ts` |
| `TransferPlatformOriginatorCreateResponse` | `transferPlatformOriginatorCreateResponseSchema` | `src/models/transfer-platform-originator-create-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### transferPlatformPersonCreate

- **Signature**: `transferPlatformPersonCreate(request: ThePlaidApiClient.TransferPlatformPersonCreateRequestParams, options?: RequestOptions): ApiPromise<TransferPlatformPersonCreateResponse, ThePlaidApiClient.TransferPlatformPersonCreateError>`
- **Wire**: `POST /transfer/platform/person/create`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TransferPlatformPersonCreateResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.TransferPlatformPersonCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.TransferPlatformPersonCreateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TransferPlatformPersonCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransferPlatformPersonCreateRequest` | `transferPlatformPersonCreateRequestSchema` | `src/models/transfer-platform-person-create-request.ts` |
| `TransferPlatformPersonCreateResponse` | `transferPlatformPersonCreateResponseSchema` | `src/models/transfer-platform-person-create-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### transferPlatformRequirementSubmit

- **Signature**: `transferPlatformRequirementSubmit(request: ThePlaidApiClient.TransferPlatformRequirementSubmitRequestParams, options?: RequestOptions): ApiPromise<TransferPlatformRequirementSubmitResponse, ThePlaidApiClient.TransferPlatformRequirementSubmitError>`
- **Wire**: `POST /transfer/platform/requirement/submit`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TransferPlatformRequirementSubmitResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.TransferPlatformRequirementSubmitError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.TransferPlatformRequirementSubmitRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TransferPlatformRequirementSubmitRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransferPlatformRequirementSubmitRequest` | `transferPlatformRequirementSubmitRequestSchema` | `src/models/transfer-platform-requirement-submit-request.ts` |
| `TransferPlatformRequirementSubmitResponse` | `transferPlatformRequirementSubmitResponseSchema` | `src/models/transfer-platform-requirement-submit-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### transferQuestionnaireCreate

- **Signature**: `transferQuestionnaireCreate(request: ThePlaidApiClient.TransferQuestionnaireCreateRequestParams, options?: RequestOptions): ApiPromise<TransferQuestionnaireCreateResponse, ThePlaidApiClient.TransferQuestionnaireCreateError>`
- **Wire**: `POST /transfer/questionnaire/create`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TransferQuestionnaireCreateResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.TransferQuestionnaireCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.TransferQuestionnaireCreateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TransferQuestionnaireCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransferQuestionnaireCreateRequest` | `transferQuestionnaireCreateRequestSchema` | `src/models/transfer-questionnaire-create-request.ts` |
| `TransferQuestionnaireCreateResponse` | `transferQuestionnaireCreateResponseSchema` | `src/models/transfer-questionnaire-create-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### transferRecurringCancel

- **Signature**: `transferRecurringCancel(request: ThePlaidApiClient.TransferRecurringCancelRequestParams, options?: RequestOptions): ApiPromise<TransferRecurringCancelResponse, ThePlaidApiClient.TransferRecurringCancelError>`
- **Wire**: `POST /transfer/recurring/cancel`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TransferRecurringCancelResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.TransferRecurringCancelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.TransferRecurringCancelRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TransferRecurringCancelRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransferRecurringCancelRequest` | `transferRecurringCancelRequestSchema` | `src/models/transfer-recurring-cancel-request.ts` |
| `TransferRecurringCancelResponse` | `transferRecurringCancelResponseSchema` | `src/models/transfer-recurring-cancel-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### transferRecurringCreate

- **Signature**: `transferRecurringCreate(request: ThePlaidApiClient.TransferRecurringCreateRequestParams, options?: RequestOptions): ApiPromise<TransferRecurringCreateResponse, ThePlaidApiClient.TransferRecurringCreateError>`
- **Wire**: `POST /transfer/recurring/create`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TransferRecurringCreateResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.TransferRecurringCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.TransferRecurringCreateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TransferRecurringCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransferRecurringCreateRequest` | `transferRecurringCreateRequestSchema` | `src/models/transfer-recurring-create-request.ts` |
| `TransferRecurringCreateResponse` | `transferRecurringCreateResponseSchema` | `src/models/transfer-recurring-create-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### transferRecurringGet

- **Signature**: `transferRecurringGet(request: ThePlaidApiClient.TransferRecurringGetRequestParams, options?: RequestOptions): ApiPromise<TransferRecurringGetResponse, ThePlaidApiClient.TransferRecurringGetError>`
- **Wire**: `POST /transfer/recurring/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TransferRecurringGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.TransferRecurringGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.TransferRecurringGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TransferRecurringGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransferRecurringGetRequest` | `transferRecurringGetRequestSchema` | `src/models/transfer-recurring-get-request.ts` |
| `TransferRecurringGetResponse` | `transferRecurringGetResponseSchema` | `src/models/transfer-recurring-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### transferRecurringList

- **Signature**: `transferRecurringList(request: ThePlaidApiClient.TransferRecurringListRequestParams, options?: RequestOptions): ApiPromise<TransferRecurringListResponse, ThePlaidApiClient.TransferRecurringListError>`
- **Wire**: `POST /transfer/recurring/list`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TransferRecurringListResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.TransferRecurringListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.TransferRecurringListRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TransferRecurringListRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransferRecurringListRequest` | `transferRecurringListRequestSchema` | `src/models/transfer-recurring-list-request.ts` |
| `TransferRecurringListResponse` | `transferRecurringListResponseSchema` | `src/models/transfer-recurring-list-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### transferRefundCancel

- **Signature**: `transferRefundCancel(request: ThePlaidApiClient.TransferRefundCancelRequestParams, options?: RequestOptions): ApiPromise<TransferRefundCancelResponse, ThePlaidApiClient.TransferRefundCancelError>`
- **Wire**: `POST /transfer/refund/cancel`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TransferRefundCancelResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.TransferRefundCancelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.TransferRefundCancelRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TransferRefundCancelRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransferRefundCancelRequest` | `transferRefundCancelRequestSchema` | `src/models/transfer-refund-cancel-request.ts` |
| `TransferRefundCancelResponse` | `transferRefundCancelResponseSchema` | `src/models/transfer-refund-cancel-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### transferRefundCreate

- **Signature**: `transferRefundCreate(request: ThePlaidApiClient.TransferRefundCreateRequestParams, options?: RequestOptions): ApiPromise<TransferRefundCreateResponse, ThePlaidApiClient.TransferRefundCreateError>`
- **Wire**: `POST /transfer/refund/create`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TransferRefundCreateResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.TransferRefundCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.TransferRefundCreateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TransferRefundCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransferRefundCreateRequest` | `transferRefundCreateRequestSchema` | `src/models/transfer-refund-create-request.ts` |
| `TransferRefundCreateResponse` | `transferRefundCreateResponseSchema` | `src/models/transfer-refund-create-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### transferRefundGet

- **Signature**: `transferRefundGet(request: ThePlaidApiClient.TransferRefundGetRequestParams, options?: RequestOptions): ApiPromise<TransferRefundGetResponse, ThePlaidApiClient.TransferRefundGetError>`
- **Wire**: `POST /transfer/refund/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TransferRefundGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.TransferRefundGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.TransferRefundGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TransferRefundGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransferRefundGetRequest` | `transferRefundGetRequestSchema` | `src/models/transfer-refund-get-request.ts` |
| `TransferRefundGetResponse` | `transferRefundGetResponseSchema` | `src/models/transfer-refund-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### transferRepaymentList

- **Signature**: `transferRepaymentList(request: ThePlaidApiClient.TransferRepaymentListRequestParams, options?: RequestOptions): ApiPromise<TransferRepaymentListResponse, ThePlaidApiClient.TransferRepaymentListError>`
- **Wire**: `POST /transfer/repayment/list`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TransferRepaymentListResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.TransferRepaymentListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.TransferRepaymentListRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TransferRepaymentListRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransferRepaymentListRequest` | `transferRepaymentListRequestSchema` | `src/models/transfer-repayment-list-request.ts` |
| `TransferRepaymentListResponse` | `transferRepaymentListResponseSchema` | `src/models/transfer-repayment-list-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### transferRepaymentReturnList

- **Signature**: `transferRepaymentReturnList(request: ThePlaidApiClient.TransferRepaymentReturnListRequestParams, options?: RequestOptions): ApiPromise<TransferRepaymentReturnListResponse, ThePlaidApiClient.TransferRepaymentReturnListError>`
- **Wire**: `POST /transfer/repayment/return/list`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TransferRepaymentReturnListResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.TransferRepaymentReturnListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.TransferRepaymentReturnListRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TransferRepaymentReturnListRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransferRepaymentReturnListRequest` | `transferRepaymentReturnListRequestSchema` | `src/models/transfer-repayment-return-list-request.ts` |
| `TransferRepaymentReturnListResponse` | `transferRepaymentReturnListResponseSchema` | `src/models/transfer-repayment-return-list-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### transferReturnRecover

- **Signature**: `transferReturnRecover(request: ThePlaidApiClient.TransferReturnRecoverRequestParams, options?: RequestOptions): ApiPromise<TransferReturnRecoverResponse, ThePlaidApiClient.TransferReturnRecoverError>`
- **Wire**: `POST /transfer/return/recover`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TransferReturnRecoverResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.TransferReturnRecoverError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.TransferReturnRecoverRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TransferReturnRecoverRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransferReturnRecoverRequest` | `transferReturnRecoverRequestSchema` | `src/models/transfer-return-recover-request.ts` |
| `TransferReturnRecoverResponse` | `transferReturnRecoverResponseSchema` | `src/models/transfer-return-recover-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### transferSweepGet

- **Signature**: `transferSweepGet(request: ThePlaidApiClient.TransferSweepGetRequestParams, options?: RequestOptions): ApiPromise<TransferSweepGetResponse, ThePlaidApiClient.TransferSweepGetError>`
- **Wire**: `POST /transfer/sweep/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TransferSweepGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.TransferSweepGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.TransferSweepGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TransferSweepGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransferSweepGetRequest` | `transferSweepGetRequestSchema` | `src/models/transfer-sweep-get-request.ts` |
| `TransferSweepGetResponse` | `transferSweepGetResponseSchema` | `src/models/transfer-sweep-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### transferSweepList

- **Signature**: `transferSweepList(request: ThePlaidApiClient.TransferSweepListRequestParams, options?: RequestOptions): ApiPromise<TransferSweepListResponse, ThePlaidApiClient.TransferSweepListError>`
- **Wire**: `POST /transfer/sweep/list`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TransferSweepListResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.TransferSweepListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.TransferSweepListRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TransferSweepListRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransferSweepListRequest` | `transferSweepListRequestSchema` | `src/models/transfer-sweep-list-request.ts` |
| `TransferSweepListResponse` | `transferSweepListResponseSchema` | `src/models/transfer-sweep-list-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### userAccountSessionEventSend

- **Signature**: `userAccountSessionEventSend(request: ThePlaidApiClient.UserAccountSessionEventSendRequestParams, options?: RequestOptions): ApiPromise<UserAccountSessionEventSendResponse, ThePlaidApiClient.UserAccountSessionEventSendError>`
- **Wire**: `POST /user_account/session/event/send`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UserAccountSessionEventSendResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.UserAccountSessionEventSendError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.UserAccountSessionEventSendRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `UserAccountSessionEventSendRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UserAccountSessionEventSendRequest` | `userAccountSessionEventSendRequestSchema` | `src/models/user-account-session-event-send-request.ts` |
| `UserAccountSessionEventSendResponse` | `userAccountSessionEventSendResponseSchema` | `src/models/user-account-session-event-send-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### userAccountSessionGet

- **Signature**: `userAccountSessionGet(request: ThePlaidApiClient.UserAccountSessionGetRequestParams, options?: RequestOptions): ApiPromise<UserAccountSessionGetResponse, ThePlaidApiClient.UserAccountSessionGetError>`
- **Wire**: `POST /user_account/session/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UserAccountSessionGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.UserAccountSessionGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.UserAccountSessionGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `UserAccountSessionGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UserAccountSessionGetRequest` | `userAccountSessionGetRequestSchema` | `src/models/user-account-session-get-request.ts` |
| `UserAccountSessionGetResponse` | `userAccountSessionGetResponseSchema` | `src/models/user-account-session-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### userCreate

- **Signature**: `userCreate(request: ThePlaidApiClient.UserCreateRequestParams, options?: RequestOptions): ApiPromise<UserCreateResponse, ThePlaidApiClient.UserCreateError>`
- **Wire**: `POST /user/create`
- **Auth**: any of (all of `clientId`, `secret`, `plaidVersion`), `oauth2` — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UserCreateResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.UserCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.UserCreateRequestParams` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `plaidNewUserApiEnabled` | `header` | `Plaid-New-User-API-Enabled` | `boolean` | no | `false` |
| `body` | `body` | — | `UserCreateRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `UserCreateRequest` | `userCreateRequestSchema` | `src/models/user-create-request.ts` |
| `UserCreateResponse` | `userCreateResponseSchema` | `src/models/user-create-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### userFinancialDataRefresh

- **Signature**: `userFinancialDataRefresh(request: ThePlaidApiClient.UserFinancialDataRefreshRequestParams, options?: RequestOptions): ApiPromise<UserFinancialDataRefreshResponse, ThePlaidApiClient.UserFinancialDataRefreshError>`
- **Wire**: `POST /user/financial_data/refresh`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UserFinancialDataRefreshResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.UserFinancialDataRefreshError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.UserFinancialDataRefreshRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `UserFinancialDataRefreshRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UserFinancialDataRefreshRequest` | `userFinancialDataRefreshRequestSchema` | `src/models/user-financial-data-refresh-request.ts` |
| `UserFinancialDataRefreshResponse` | `userFinancialDataRefreshResponseSchema` | `src/models/user-financial-data-refresh-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### userGet

- **Signature**: `userGet(request: ThePlaidApiClient.UserGetRequestParams, options?: RequestOptions): ApiPromise<UserGetResponse, ThePlaidApiClient.UserGetError>`
- **Wire**: `POST /user/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UserGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.UserGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.UserGetRequestParams` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `plaidNewUserApiEnabled` | `header` | `Plaid-New-User-API-Enabled` | `boolean` | no | `false` |
| `body` | `body` | — | `UserGetRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `UserGetRequest` | `userGetRequestSchema` | `src/models/user-get-request.ts` |
| `UserGetResponse` | `userGetResponseSchema` | `src/models/user-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### userIdentityRemove

- **Signature**: `userIdentityRemove(request: ThePlaidApiClient.UserIdentityRemoveRequestParams, options?: RequestOptions): ApiPromise<UserIdentityRemoveResponse, ThePlaidApiClient.UserIdentityRemoveError>`
- **Wire**: `POST /user/identity/remove`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UserIdentityRemoveResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.UserIdentityRemoveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.UserIdentityRemoveRequestParams` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `plaidNewUserApiEnabled` | `header` | `Plaid-New-User-API-Enabled` | `boolean` | no | `false` |
| `body` | `body` | — | `UserIdentityRemoveRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `UserIdentityRemoveRequest` | `userIdentityRemoveRequestSchema` | `src/models/user-identity-remove-request.ts` |
| `UserIdentityRemoveResponse` | `userIdentityRemoveResponseSchema` | `src/models/user-identity-remove-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### userItemsAssociate

- **Signature**: `userItemsAssociate(request: ThePlaidApiClient.UserItemsAssociateRequestParams, options?: RequestOptions): ApiPromise<UserItemsAssociateResponse, ThePlaidApiClient.UserItemsAssociateError>`
- **Wire**: `POST /user/items/associate`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UserItemsAssociateResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.UserItemsAssociateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.UserItemsAssociateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `UserItemsAssociateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UserItemsAssociateRequest` | `userItemsAssociateRequestSchema` | `src/models/user-items-associate-request.ts` |
| `UserItemsAssociateResponse` | `userItemsAssociateResponseSchema` | `src/models/user-items-associate-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### userItemsGet

- **Signature**: `userItemsGet(request: ThePlaidApiClient.UserItemsGetRequestParams, options?: RequestOptions): ApiPromise<UserItemsGetResponse, ThePlaidApiClient.UserItemsGetError>`
- **Wire**: `POST /user/items/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UserItemsGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.UserItemsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.UserItemsGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `UserItemsGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UserItemsGetRequest` | `userItemsGetRequestSchema` | `src/models/user-items-get-request.ts` |
| `UserItemsGetResponse` | `userItemsGetResponseSchema` | `src/models/user-items-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### userItemsRemove

- **Signature**: `userItemsRemove(request: ThePlaidApiClient.UserItemsRemoveRequestParams, options?: RequestOptions): ApiPromise<UserItemsRemoveResponse, ThePlaidApiClient.UserItemsRemoveError>`
- **Wire**: `POST /user/items/remove`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UserItemsRemoveResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.UserItemsRemoveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.UserItemsRemoveRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `UserItemsRemoveRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UserItemsRemoveRequest` | `userItemsRemoveRequestSchema` | `src/models/user-items-remove-request.ts` |
| `UserItemsRemoveResponse` | `userItemsRemoveResponseSchema` | `src/models/user-items-remove-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### userProductsTerminate

- **Signature**: `userProductsTerminate(request: ThePlaidApiClient.UserProductsTerminateRequestParams, options?: RequestOptions): ApiPromise<UserProductsTerminateResponse, ThePlaidApiClient.UserProductsTerminateError>`
- **Wire**: `POST /user/products/terminate`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UserProductsTerminateResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.UserProductsTerminateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.UserProductsTerminateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `UserProductsTerminateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UserProductsTerminateRequest` | `userProductsTerminateRequestSchema` | `src/models/user-products-terminate-request.ts` |
| `UserProductsTerminateResponse` | `userProductsTerminateResponseSchema` | `src/models/user-products-terminate-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### userRemove

- **Signature**: `userRemove(request: ThePlaidApiClient.UserRemoveRequestParams, options?: RequestOptions): ApiPromise<UserRemoveResponse, ThePlaidApiClient.UserRemoveError>`
- **Wire**: `POST /user/remove`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UserRemoveResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.UserRemoveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.UserRemoveRequestParams` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `plaidNewUserApiEnabled` | `header` | `Plaid-New-User-API-Enabled` | `boolean` | no | `false` |
| `body` | `body` | — | `UserRemoveRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `UserRemoveRequest` | `userRemoveRequestSchema` | `src/models/user-remove-request.ts` |
| `UserRemoveResponse` | `userRemoveResponseSchema` | `src/models/user-remove-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### userThirdPartyTokenCreate

- **Signature**: `userThirdPartyTokenCreate(request: ThePlaidApiClient.UserThirdPartyTokenCreateRequestParams, options?: RequestOptions): ApiPromise<UserThirdPartyTokenCreateResponse, ThePlaidApiClient.UserThirdPartyTokenCreateError>`
- **Wire**: `POST /user/third_party_token/create`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UserThirdPartyTokenCreateResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.UserThirdPartyTokenCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.UserThirdPartyTokenCreateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `UserThirdPartyTokenCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UserThirdPartyTokenCreateRequest` | `userThirdPartyTokenCreateRequestSchema` | `src/models/user-third-party-token-create-request.ts` |
| `UserThirdPartyTokenCreateResponse` | `userThirdPartyTokenCreateResponseSchema` | `src/models/user-third-party-token-create-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### userThirdPartyTokenRemove

- **Signature**: `userThirdPartyTokenRemove(request: ThePlaidApiClient.UserThirdPartyTokenRemoveRequestParams, options?: RequestOptions): ApiPromise<UserThirdPartyTokenRemoveResponse, ThePlaidApiClient.UserThirdPartyTokenRemoveError>`
- **Wire**: `POST /user/third_party_token/remove`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UserThirdPartyTokenRemoveResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.UserThirdPartyTokenRemoveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.UserThirdPartyTokenRemoveRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `UserThirdPartyTokenRemoveRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UserThirdPartyTokenRemoveRequest` | `userThirdPartyTokenRemoveRequestSchema` | `src/models/user-third-party-token-remove-request.ts` |
| `UserThirdPartyTokenRemoveResponse` | `userThirdPartyTokenRemoveResponseSchema` | `src/models/user-third-party-token-remove-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### userTransactionsRefresh

- **Signature**: `userTransactionsRefresh(request: ThePlaidApiClient.UserTransactionsRefreshRequestParams, options?: RequestOptions): ApiPromise<UserTransactionsRefreshResponse, ThePlaidApiClient.UserTransactionsRefreshError>`
- **Wire**: `POST /user/transactions/refresh`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UserTransactionsRefreshResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.UserTransactionsRefreshError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.UserTransactionsRefreshRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `UserTransactionsRefreshRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UserTransactionsRefreshRequest` | `userTransactionsRefreshRequestSchema` | `src/models/user-transactions-refresh-request.ts` |
| `UserTransactionsRefreshResponse` | `userTransactionsRefreshResponseSchema` | `src/models/user-transactions-refresh-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### userUpdate

- **Signature**: `userUpdate(request: ThePlaidApiClient.UserUpdateRequestParams, options?: RequestOptions): ApiPromise<UserUpdateResponse, ThePlaidApiClient.UserUpdateError>`
- **Wire**: `POST /user/update`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UserUpdateResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.UserUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.UserUpdateRequestParams` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `plaidNewUserApiEnabled` | `header` | `Plaid-New-User-API-Enabled` | `boolean` | no | `false` |
| `body` | `body` | — | `UserUpdateRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `UserUpdateRequest` | `userUpdateRequestSchema` | `src/models/user-update-request.ts` |
| `UserUpdateResponse` | `userUpdateResponseSchema` | `src/models/user-update-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### walletCreate

- **Signature**: `walletCreate(request: ThePlaidApiClient.WalletCreateRequestParams, options?: RequestOptions): ApiPromise<WalletCreateResponse, ThePlaidApiClient.WalletCreateError>`
- **Wire**: `POST /wallet/create`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WalletCreateResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.WalletCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.WalletCreateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `WalletCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WalletCreateRequest` | `walletCreateRequestSchema` | `src/models/wallet-create-request.ts` |
| `WalletCreateResponse` | `walletCreateResponseSchema` | `src/models/wallet-create-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### walletGet

- **Signature**: `walletGet(request: ThePlaidApiClient.WalletGetRequestParams, options?: RequestOptions): ApiPromise<WalletGetResponse, ThePlaidApiClient.WalletGetError>`
- **Wire**: `POST /wallet/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WalletGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.WalletGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.WalletGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `WalletGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WalletGetRequest` | `walletGetRequestSchema` | `src/models/wallet-get-request.ts` |
| `WalletGetResponse` | `walletGetResponseSchema` | `src/models/wallet-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### walletList

- **Signature**: `walletList(request: ThePlaidApiClient.WalletListRequestParams, options?: RequestOptions): ApiPromise<WalletListResponse, ThePlaidApiClient.WalletListError>`
- **Wire**: `POST /wallet/list`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WalletListResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.WalletListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.WalletListRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `WalletListRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WalletListRequest` | `walletListRequestSchema` | `src/models/wallet-list-request.ts` |
| `WalletListResponse` | `walletListResponseSchema` | `src/models/wallet-list-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### walletTransactionExecute

- **Signature**: `walletTransactionExecute(request: ThePlaidApiClient.WalletTransactionExecuteRequestParams, options?: RequestOptions): ApiPromise<WalletTransactionExecuteResponse, ThePlaidApiClient.WalletTransactionExecuteError>`
- **Wire**: `POST /wallet/transaction/execute`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WalletTransactionExecuteResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.WalletTransactionExecuteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.WalletTransactionExecuteRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `WalletTransactionExecuteRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WalletTransactionExecuteRequest` | `walletTransactionExecuteRequestSchema` | `src/models/wallet-transaction-execute-request.ts` |
| `WalletTransactionExecuteResponse` | `walletTransactionExecuteResponseSchema` | `src/models/wallet-transaction-execute-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### walletTransactionGet

- **Signature**: `walletTransactionGet(request: ThePlaidApiClient.WalletTransactionGetRequestParams, options?: RequestOptions): ApiPromise<WalletTransactionGetResponse, ThePlaidApiClient.WalletTransactionGetError>`
- **Wire**: `POST /wallet/transaction/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WalletTransactionGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.WalletTransactionGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.WalletTransactionGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `WalletTransactionGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WalletTransactionGetRequest` | `walletTransactionGetRequestSchema` | `src/models/wallet-transaction-get-request.ts` |
| `WalletTransactionGetResponse` | `walletTransactionGetResponseSchema` | `src/models/wallet-transaction-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### walletTransactionList

- **Signature**: `walletTransactionList(request: ThePlaidApiClient.WalletTransactionListRequestParams, options?: RequestOptions): ApiPromise<WalletTransactionListResponse, ThePlaidApiClient.WalletTransactionListError>`
- **Wire**: `POST /wallet/transaction/list`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WalletTransactionListResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.WalletTransactionListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.WalletTransactionListRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `WalletTransactionListRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WalletTransactionListRequest` | `walletTransactionListRequestSchema` | `src/models/wallet-transaction-list-request.ts` |
| `WalletTransactionListResponse` | `walletTransactionListResponseSchema` | `src/models/wallet-transaction-list-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### watchlistScreeningEntityCreate

- **Signature**: `watchlistScreeningEntityCreate(request: ThePlaidApiClient.WatchlistScreeningEntityCreateRequestParams, options?: RequestOptions): ApiPromise<WatchlistScreeningEntityCreateResponse, ApiError>`
- **Wire**: `POST /watchlist_screening/entity/create`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WatchlistScreeningEntityCreateResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ThePlaidApiClient.WatchlistScreeningEntityCreateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `WatchlistScreeningEntityCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WatchlistScreeningEntityCreateRequest` | `watchlistScreeningEntityCreateRequestSchema` | `src/models/watchlist-screening-entity-create-request.ts` |
| `WatchlistScreeningEntityCreateResponse` | `watchlistScreeningEntityCreateResponseSchema` | `src/models/watchlist-screening-entity-create-response.ts` |

### watchlistScreeningEntityGet

- **Signature**: `watchlistScreeningEntityGet(request: ThePlaidApiClient.WatchlistScreeningEntityGetRequestParams, options?: RequestOptions): ApiPromise<WatchlistScreeningEntityGetResponse, ApiError>`
- **Wire**: `POST /watchlist_screening/entity/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WatchlistScreeningEntityGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ThePlaidApiClient.WatchlistScreeningEntityGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `WatchlistScreeningEntityGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WatchlistScreeningEntityGetRequest` | `watchlistScreeningEntityGetRequestSchema` | `src/models/watchlist-screening-entity-get-request.ts` |
| `WatchlistScreeningEntityGetResponse` | `watchlistScreeningEntityGetResponseSchema` | `src/models/watchlist-screening-entity-get-response.ts` |

### watchlistScreeningEntityHistoryList

- **Signature**: `watchlistScreeningEntityHistoryList(request: ThePlaidApiClient.WatchlistScreeningEntityHistoryListRequestParams, options?: RequestOptions): ApiPromise<WatchlistScreeningEntityHistoryListResponse, ApiError>`
- **Wire**: `POST /watchlist_screening/entity/history/list`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WatchlistScreeningEntityHistoryListResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ThePlaidApiClient.WatchlistScreeningEntityHistoryListRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `WatchlistScreeningEntityHistoryListRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WatchlistScreeningEntityHistoryListRequest` | `watchlistScreeningEntityHistoryListRequestSchema` | `src/models/watchlist-screening-entity-history-list-request.ts` |
| `WatchlistScreeningEntityHistoryListResponse` | `watchlistScreeningEntityHistoryListResponseSchema` | `src/models/watchlist-screening-entity-history-list-response.ts` |

### watchlistScreeningEntityHitList

- **Signature**: `watchlistScreeningEntityHitList(request: ThePlaidApiClient.WatchlistScreeningEntityHitListRequestParams, options?: RequestOptions): ApiPromise<WatchlistScreeningEntityHitListResponse, ApiError>`
- **Wire**: `POST /watchlist_screening/entity/hit/list`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WatchlistScreeningEntityHitListResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ThePlaidApiClient.WatchlistScreeningEntityHitListRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `WatchlistScreeningEntityHitListRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WatchlistScreeningEntityHitListRequest` | `watchlistScreeningEntityHitListRequestSchema` | `src/models/watchlist-screening-entity-hit-list-request.ts` |
| `WatchlistScreeningEntityHitListResponse` | `watchlistScreeningEntityHitListResponseSchema` | `src/models/watchlist-screening-entity-hit-list-response.ts` |

### watchlistScreeningEntityList

- **Signature**: `watchlistScreeningEntityList(request: ThePlaidApiClient.WatchlistScreeningEntityListRequestParams, options?: RequestOptions): ApiPromise<WatchlistScreeningEntityListResponse, ApiError>`
- **Wire**: `POST /watchlist_screening/entity/list`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WatchlistScreeningEntityListResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ThePlaidApiClient.WatchlistScreeningEntityListRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `WatchlistScreeningEntityListRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WatchlistScreeningEntityListRequest` | `watchlistScreeningEntityListRequestSchema` | `src/models/watchlist-screening-entity-list-request.ts` |
| `WatchlistScreeningEntityListResponse` | `watchlistScreeningEntityListResponseSchema` | `src/models/watchlist-screening-entity-list-response.ts` |

### watchlistScreeningEntityProgramGet

- **Signature**: `watchlistScreeningEntityProgramGet(request: ThePlaidApiClient.WatchlistScreeningEntityProgramGetRequestParams, options?: RequestOptions): ApiPromise<WatchlistScreeningEntityProgramGetResponse, ApiError>`
- **Wire**: `POST /watchlist_screening/entity/program/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WatchlistScreeningEntityProgramGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ThePlaidApiClient.WatchlistScreeningEntityProgramGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `WatchlistScreeningEntityProgramGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WatchlistScreeningEntityProgramGetRequest` | `watchlistScreeningEntityProgramGetRequestSchema` | `src/models/watchlist-screening-entity-program-get-request.ts` |
| `WatchlistScreeningEntityProgramGetResponse` | `watchlistScreeningEntityProgramGetResponseSchema` | `src/models/watchlist-screening-entity-program-get-response.ts` |

### watchlistScreeningEntityProgramList

- **Signature**: `watchlistScreeningEntityProgramList(request: ThePlaidApiClient.WatchlistScreeningEntityProgramListRequestParams, options?: RequestOptions): ApiPromise<WatchlistScreeningEntityProgramListResponse, ApiError>`
- **Wire**: `POST /watchlist_screening/entity/program/list`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WatchlistScreeningEntityProgramListResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ThePlaidApiClient.WatchlistScreeningEntityProgramListRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `WatchlistScreeningEntityProgramListRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WatchlistScreeningEntityProgramListRequest` | `watchlistScreeningEntityProgramListRequestSchema` | `src/models/watchlist-screening-entity-program-list-request.ts` |
| `WatchlistScreeningEntityProgramListResponse` | `watchlistScreeningEntityProgramListResponseSchema` | `src/models/watchlist-screening-entity-program-list-response.ts` |

### watchlistScreeningEntityReviewCreate

- **Signature**: `watchlistScreeningEntityReviewCreate(request: ThePlaidApiClient.WatchlistScreeningEntityReviewCreateRequestParams, options?: RequestOptions): ApiPromise<WatchlistScreeningEntityReviewCreateResponse, ApiError>`
- **Wire**: `POST /watchlist_screening/entity/review/create`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WatchlistScreeningEntityReviewCreateResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ThePlaidApiClient.WatchlistScreeningEntityReviewCreateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `WatchlistScreeningEntityReviewCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WatchlistScreeningEntityReviewCreateRequest` | `watchlistScreeningEntityReviewCreateRequestSchema` | `src/models/watchlist-screening-entity-review-create-request.ts` |
| `WatchlistScreeningEntityReviewCreateResponse` | `watchlistScreeningEntityReviewCreateResponseSchema` | `src/models/watchlist-screening-entity-review-create-response.ts` |

### watchlistScreeningEntityReviewList

- **Signature**: `watchlistScreeningEntityReviewList(request: ThePlaidApiClient.WatchlistScreeningEntityReviewListRequestParams, options?: RequestOptions): ApiPromise<WatchlistScreeningEntityReviewListResponse, ApiError>`
- **Wire**: `POST /watchlist_screening/entity/review/list`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WatchlistScreeningEntityReviewListResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ThePlaidApiClient.WatchlistScreeningEntityReviewListRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `WatchlistScreeningEntityReviewListRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WatchlistScreeningEntityReviewListRequest` | `watchlistScreeningEntityReviewListRequestSchema` | `src/models/watchlist-screening-entity-review-list-request.ts` |
| `WatchlistScreeningEntityReviewListResponse` | `watchlistScreeningEntityReviewListResponseSchema` | `src/models/watchlist-screening-entity-review-list-response.ts` |

### watchlistScreeningEntityUpdate

- **Signature**: `watchlistScreeningEntityUpdate(request: ThePlaidApiClient.WatchlistScreeningEntityUpdateRequestParams, options?: RequestOptions): ApiPromise<WatchlistScreeningEntityUpdateResponse, ApiError>`
- **Wire**: `POST /watchlist_screening/entity/update`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WatchlistScreeningEntityUpdateResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ThePlaidApiClient.WatchlistScreeningEntityUpdateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `WatchlistScreeningEntityUpdateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WatchlistScreeningEntityUpdateRequest` | `watchlistScreeningEntityUpdateRequestSchema` | `src/models/watchlist-screening-entity-update-request.ts` |
| `WatchlistScreeningEntityUpdateResponse` | `watchlistScreeningEntityUpdateResponseSchema` | `src/models/watchlist-screening-entity-update-response.ts` |

### watchlistScreeningIndividualCreate

- **Signature**: `watchlistScreeningIndividualCreate(request: ThePlaidApiClient.WatchlistScreeningIndividualCreateRequestParams, options?: RequestOptions): ApiPromise<WatchlistScreeningIndividualCreateResponse, ApiError>`
- **Wire**: `POST /watchlist_screening/individual/create`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WatchlistScreeningIndividualCreateResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ThePlaidApiClient.WatchlistScreeningIndividualCreateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `WatchlistScreeningIndividualCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WatchlistScreeningIndividualCreateRequest` | `watchlistScreeningIndividualCreateRequestSchema` | `src/models/watchlist-screening-individual-create-request.ts` |
| `WatchlistScreeningIndividualCreateResponse` | `watchlistScreeningIndividualCreateResponseSchema` | `src/models/watchlist-screening-individual-create-response.ts` |

### watchlistScreeningIndividualGet

- **Signature**: `watchlistScreeningIndividualGet(request: ThePlaidApiClient.WatchlistScreeningIndividualGetRequestParams, options?: RequestOptions): ApiPromise<WatchlistScreeningIndividualGetResponse, ApiError>`
- **Wire**: `POST /watchlist_screening/individual/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WatchlistScreeningIndividualGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ThePlaidApiClient.WatchlistScreeningIndividualGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `WatchlistScreeningIndividualGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WatchlistScreeningIndividualGetRequest` | `watchlistScreeningIndividualGetRequestSchema` | `src/models/watchlist-screening-individual-get-request.ts` |
| `WatchlistScreeningIndividualGetResponse` | `watchlistScreeningIndividualGetResponseSchema` | `src/models/watchlist-screening-individual-get-response.ts` |

### watchlistScreeningIndividualHistoryList

- **Signature**: `watchlistScreeningIndividualHistoryList(request: ThePlaidApiClient.WatchlistScreeningIndividualHistoryListRequestParams, options?: RequestOptions): ApiPromise<WatchlistScreeningIndividualHistoryListResponse, ApiError>`
- **Wire**: `POST /watchlist_screening/individual/history/list`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WatchlistScreeningIndividualHistoryListResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ThePlaidApiClient.WatchlistScreeningIndividualHistoryListRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `WatchlistScreeningIndividualHistoryListRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WatchlistScreeningIndividualHistoryListRequest` | `watchlistScreeningIndividualHistoryListRequestSchema` | `src/models/watchlist-screening-individual-history-list-request.ts` |
| `WatchlistScreeningIndividualHistoryListResponse` | `watchlistScreeningIndividualHistoryListResponseSchema` | `src/models/watchlist-screening-individual-history-list-response.ts` |

### watchlistScreeningIndividualHitList

- **Signature**: `watchlistScreeningIndividualHitList(request: ThePlaidApiClient.WatchlistScreeningIndividualHitListRequestParams, options?: RequestOptions): ApiPromise<WatchlistScreeningIndividualHitListResponse, ApiError>`
- **Wire**: `POST /watchlist_screening/individual/hit/list`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WatchlistScreeningIndividualHitListResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ThePlaidApiClient.WatchlistScreeningIndividualHitListRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `WatchlistScreeningIndividualHitListRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WatchlistScreeningIndividualHitListRequest` | `watchlistScreeningIndividualHitListRequestSchema` | `src/models/watchlist-screening-individual-hit-list-request.ts` |
| `WatchlistScreeningIndividualHitListResponse` | `watchlistScreeningIndividualHitListResponseSchema` | `src/models/watchlist-screening-individual-hit-list-response.ts` |

### watchlistScreeningIndividualList

- **Signature**: `watchlistScreeningIndividualList(request: ThePlaidApiClient.WatchlistScreeningIndividualListRequestParams, options?: RequestOptions): ApiPromise<WatchlistScreeningIndividualListResponse, ApiError>`
- **Wire**: `POST /watchlist_screening/individual/list`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WatchlistScreeningIndividualListResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ThePlaidApiClient.WatchlistScreeningIndividualListRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `WatchlistScreeningIndividualListRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WatchlistScreeningIndividualListRequest` | `watchlistScreeningIndividualListRequestSchema` | `src/models/watchlist-screening-individual-list-request.ts` |
| `WatchlistScreeningIndividualListResponse` | `watchlistScreeningIndividualListResponseSchema` | `src/models/watchlist-screening-individual-list-response.ts` |

### watchlistScreeningIndividualProgramGet

- **Signature**: `watchlistScreeningIndividualProgramGet(request: ThePlaidApiClient.WatchlistScreeningIndividualProgramGetRequestParams, options?: RequestOptions): ApiPromise<WatchlistScreeningIndividualProgramGetResponse, ApiError>`
- **Wire**: `POST /watchlist_screening/individual/program/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WatchlistScreeningIndividualProgramGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ThePlaidApiClient.WatchlistScreeningIndividualProgramGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `WatchlistScreeningIndividualProgramGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WatchlistScreeningIndividualProgramGetRequest` | `watchlistScreeningIndividualProgramGetRequestSchema` | `src/models/watchlist-screening-individual-program-get-request.ts` |
| `WatchlistScreeningIndividualProgramGetResponse` | `watchlistScreeningIndividualProgramGetResponseSchema` | `src/models/watchlist-screening-individual-program-get-response.ts` |

### watchlistScreeningIndividualProgramList

- **Signature**: `watchlistScreeningIndividualProgramList(request: ThePlaidApiClient.WatchlistScreeningIndividualProgramListRequestParams, options?: RequestOptions): ApiPromise<WatchlistScreeningIndividualProgramListResponse, ApiError>`
- **Wire**: `POST /watchlist_screening/individual/program/list`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WatchlistScreeningIndividualProgramListResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ThePlaidApiClient.WatchlistScreeningIndividualProgramListRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `WatchlistScreeningIndividualProgramListRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WatchlistScreeningIndividualProgramListRequest` | `watchlistScreeningIndividualProgramListRequestSchema` | `src/models/watchlist-screening-individual-program-list-request.ts` |
| `WatchlistScreeningIndividualProgramListResponse` | `watchlistScreeningIndividualProgramListResponseSchema` | `src/models/watchlist-screening-individual-program-list-response.ts` |

### watchlistScreeningIndividualReviewCreate

- **Signature**: `watchlistScreeningIndividualReviewCreate(request: ThePlaidApiClient.WatchlistScreeningIndividualReviewCreateRequestParams, options?: RequestOptions): ApiPromise<WatchlistScreeningIndividualReviewCreateResponse, ApiError>`
- **Wire**: `POST /watchlist_screening/individual/review/create`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WatchlistScreeningIndividualReviewCreateResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ThePlaidApiClient.WatchlistScreeningIndividualReviewCreateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `WatchlistScreeningIndividualReviewCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WatchlistScreeningIndividualReviewCreateRequest` | `watchlistScreeningIndividualReviewCreateRequestSchema` | `src/models/watchlist-screening-individual-review-create-request.ts` |
| `WatchlistScreeningIndividualReviewCreateResponse` | `watchlistScreeningIndividualReviewCreateResponseSchema` | `src/models/watchlist-screening-individual-review-create-response.ts` |

### watchlistScreeningIndividualReviewList

- **Signature**: `watchlistScreeningIndividualReviewList(request: ThePlaidApiClient.WatchlistScreeningIndividualReviewListRequestParams, options?: RequestOptions): ApiPromise<WatchlistScreeningIndividualReviewListResponse, ApiError>`
- **Wire**: `POST /watchlist_screening/individual/review/list`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WatchlistScreeningIndividualReviewListResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ThePlaidApiClient.WatchlistScreeningIndividualReviewListRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `WatchlistScreeningIndividualReviewListRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WatchlistScreeningIndividualReviewListRequest` | `watchlistScreeningIndividualReviewListRequestSchema` | `src/models/watchlist-screening-individual-review-list-request.ts` |
| `WatchlistScreeningIndividualReviewListResponse` | `watchlistScreeningIndividualReviewListResponseSchema` | `src/models/watchlist-screening-individual-review-list-response.ts` |

### watchlistScreeningIndividualUpdate

- **Signature**: `watchlistScreeningIndividualUpdate(request: ThePlaidApiClient.WatchlistScreeningIndividualUpdateRequestParams, options?: RequestOptions): ApiPromise<WatchlistScreeningIndividualUpdateResponse, ApiError>`
- **Wire**: `POST /watchlist_screening/individual/update`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WatchlistScreeningIndividualUpdateResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ThePlaidApiClient.WatchlistScreeningIndividualUpdateRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `WatchlistScreeningIndividualUpdateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WatchlistScreeningIndividualUpdateRequest` | `watchlistScreeningIndividualUpdateRequestSchema` | `src/models/watchlist-screening-individual-update-request.ts` |
| `WatchlistScreeningIndividualUpdateResponse` | `watchlistScreeningIndividualUpdateResponseSchema` | `src/models/watchlist-screening-individual-update-response.ts` |

### webhookVerificationKeyGet

- **Signature**: `webhookVerificationKeyGet(request: ThePlaidApiClient.WebhookVerificationKeyGetRequestParams, options?: RequestOptions): ApiPromise<WebhookVerificationKeyGetResponse, ThePlaidApiClient.WebhookVerificationKeyGetError>`
- **Wire**: `POST /webhook_verification_key/get`
- **Auth**: all of `clientId`, `secret`, `plaidVersion` — all are sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WebhookVerificationKeyGetResponse`
- **Error**: `ThePlaidApiError` with `kind: "api"`, an instance of `ThePlaidApiClient.WebhookVerificationKeyGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [default — any status no arm above covers] `Error` · `"undeclared"` [a `default`-matched body that did not fit `Error`] `rawBody: ArrayBuffer`

**Fields** — `ThePlaidApiClient.WebhookVerificationKeyGetRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `WebhookVerificationKeyGetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WebhookVerificationKeyGetRequest` | `webhookVerificationKeyGetRequestSchema` | `src/models/webhook-verification-key-get-request.ts` |
| `WebhookVerificationKeyGetResponse` | `webhookVerificationKeyGetResponseSchema` | `src/models/webhook-verification-key-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

