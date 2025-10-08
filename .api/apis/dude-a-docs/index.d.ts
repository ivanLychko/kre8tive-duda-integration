import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core';
import Oas from 'oas';
import APICore from 'api/dist/core';
declare class SDK {
    spec: Oas;
    core: APICore;
    constructor();
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    config(config: ConfigOptions): void;
    /**
     * If the API you're using requires authentication you can supply the required credentials
     * through this method and the library will magically determine how they should be used
     * within your API request.
     *
     * With the exception of OpenID and MutualTLS, it supports all forms of authentication
     * supported by the OpenAPI specification.
     *
     * @example <caption>HTTP Basic auth</caption>
     * sdk.auth('username', 'password');
     *
     * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
     * sdk.auth('myBearerToken');
     *
     * @example <caption>API Keys</caption>
     * sdk.auth('myApiKey');
     *
     * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
     * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
     * @param values Your auth credentials for the API; can specify up to two strings or numbers.
     */
    auth(...values: string[] | number[]): this;
    /**
     * If the API you're using offers alternate server URLs, and server variables, you can tell
     * the SDK which one to use with this method. To use it you can supply either one of the
     * server URLs that are contained within the OpenAPI definition (along with any server
     * variables), or you can pass it a fully qualified URL to use (that may or may not exist
     * within the OpenAPI definition).
     *
     * @example <caption>Server URL with server variables</caption>
     * sdk.server('https://{region}.api.example.com/{basePath}', {
     *   name: 'eu',
     *   basePath: 'v14',
     * });
     *
     * @example <caption>Fully qualified server URL</caption>
     * sdk.server('https://eu.api.example.com/v14');
     *
     * @param url Server URL
     * @param variables An object of variables to replace into the server URL.
     */
    server(url: string, variables?: {}): void;
    /**
     * Get all collections that exist on this website.
     *
     * @summary List Collections
     * @throws FetchError<400, types.ListCollectionsV2Response400> 400
     */
    listCollectionsV2(metadata: types.ListCollectionsV2MetadataParam): Promise<FetchResponse<200, types.ListCollectionsV2Response200>>;
    /**
     * Delete an existing field of a collection
     *
     * @summary Delete Fields
     * @throws FetchError<400, types.DeleteFieldsResponse400> 400
     */
    deleteFields(metadata: types.DeleteFieldsMetadataParam): Promise<FetchResponse<204, types.DeleteFieldsResponse204>>;
    /**
     * Update existing field of a collection
     *
     * @summary Update Fields
     * @throws FetchError<400, types.UpdateFieldsAppResponse400> 400
     */
    updateFieldsApp(body: types.UpdateFieldsAppBodyParam, metadata: types.UpdateFieldsAppMetadataParam): Promise<FetchResponse<204, types.UpdateFieldsAppResponse204>>;
    updateFieldsApp(metadata: types.UpdateFieldsAppMetadataParam): Promise<FetchResponse<204, types.UpdateFieldsAppResponse204>>;
    /**
     * Get the fields and data of an existing collection
     *
     * @summary Get Collection
     * @throws FetchError<400, types.GetCollectionAppstoreResponse400> 400
     * @throws FetchError<401, types.GetCollectionAppstoreResponse401> 401
     */
    getCollectionAppstore(metadata: types.GetCollectionAppstoreMetadataParam): Promise<FetchResponse<200, types.GetCollectionAppstoreResponse200>>;
    /**
     * Delete an existing collection
     *
     * @summary Delete Collection
     * @throws FetchError<400, types.DeleteCollectionAppResponse400> 400
     * @throws FetchError<401, types.DeleteCollectionAppResponse401> 401
     */
    deleteCollectionApp(metadata: types.DeleteCollectionAppMetadataParam): Promise<FetchResponse<204, types.DeleteCollectionAppResponse204>>;
    /**
     * Create a new collection within a site
     *
     * @summary Create Collection
     * @throws FetchError<400, types.CreateCollectionAppResponse400> 400
     */
    createCollectionApp(body: types.CreateCollectionAppBodyParam, metadata: types.CreateCollectionAppMetadataParam): Promise<FetchResponse<204, types.CreateCollectionAppResponse204>>;
    /**
     * Update an existing collection
     *
     * @summary Update Collection
     * @throws FetchError<400, types.UpdateCollectionAppResponse400> 400
     */
    updateCollectionApp(body: types.UpdateCollectionAppBodyParam, metadata: types.UpdateCollectionAppMetadataParam): Promise<FetchResponse<204, types.UpdateCollectionAppResponse204>>;
    /**
     * Force Duda to refresh the data from an external URL for a given collection.
     *
     * @summary Clear Cache
     * @throws FetchError<400, types.ClearCacheAppResponse400> 400
     */
    clearCacheApp(metadata: types.ClearCacheAppMetadataParam): Promise<FetchResponse<200, types.ClearCacheAppResponse200>>;
    /**
     * Revalidate all collections in all sites under the same account that use the provided
     * external id
     *
     * @summary Clear Cache by External ID
     * @throws FetchError<400, types.ClearCacheByExternalIdAppResponse400> 400
     */
    clearCacheByExternalIdApp(metadata: types.ClearCacheByExternalIdAppMetadataParam): Promise<FetchResponse<200, types.ClearCacheByExternalIdAppResponse200>>;
    /**
     * Add new row(s) of data into an existing collection. This accepts multiple row values if
     * you'd like to insert more than one.
     *
     * @summary Create Rows
     * @throws FetchError<400, types.CreateRowsAppResponse400> 400
     */
    createRowsApp(body: types.CreateRowsAppBodyParam, metadata: types.CreateRowsAppMetadataParam): Promise<FetchResponse<200, types.CreateRowsAppResponse200>>;
    createRowsApp(metadata: types.CreateRowsAppMetadataParam): Promise<FetchResponse<200, types.CreateRowsAppResponse200>>;
    /**
     * Update existing collection rows.
     *
     * @summary Update Rows
     * @throws FetchError<400, types.UpdateRowsAppResponse400> 400
     */
    updateRowsApp(body: types.UpdateRowsAppBodyParam, metadata: types.UpdateRowsAppMetadataParam): Promise<FetchResponse<204, types.UpdateRowsAppResponse204>>;
    updateRowsApp(metadata: types.UpdateRowsAppMetadataParam): Promise<FetchResponse<204, types.UpdateRowsAppResponse204>>;
    /**
     * Delete existing rows of data that exist within the collection.
     *
     * @summary Delete Rows
     * @throws FetchError<400, types.DeleteRowsAppResponse400> 400
     */
    deleteRowsApp(body: types.DeleteRowsAppBodyParam, metadata: types.DeleteRowsAppMetadataParam): Promise<FetchResponse<204, types.DeleteRowsAppResponse204>>;
    deleteRowsApp(metadata: types.DeleteRowsAppMetadataParam): Promise<FetchResponse<204, types.DeleteRowsAppResponse204>>;
    /**
     * Add a new field(s) to an existing collection.
     *
     * @summary Create Fields
     * @throws FetchError<400, types.CreateFieldsAppResponse400> 400
     */
    createFieldsApp(body: types.CreateFieldsAppBodyParam, metadata: types.CreateFieldsAppMetadataParam): Promise<FetchResponse<204, types.CreateFieldsAppResponse204>>;
    createFieldsApp(metadata: types.CreateFieldsAppMetadataParam): Promise<FetchResponse<204, types.CreateFieldsAppResponse204>>;
    /**
     * Getting a site via App Store APIs
     *
     * @summary Get Site
     */
    appStoreGetSite(metadata: types.AppStoreGetSiteMetadataParam): Promise<FetchResponse<200, types.AppStoreGetSiteResponse200>>;
    /**
     * Updating a site via App Store APIs
     *
     * @summary Update Site
     */
    appUpdateSite(body: types.AppUpdateSiteBodyParam, metadata: types.AppUpdateSiteMetadataParam): Promise<FetchResponse<200, types.AppUpdateSiteResponse200>>;
    appUpdateSite(metadata: types.AppUpdateSiteMetadataParam): Promise<FetchResponse<200, types.AppUpdateSiteResponse200>>;
    /**
     * Getting a site via App Store APIs
     *
     * @summary Get Account Brand
     */
    appGetAccountBranding(metadata: types.AppGetAccountBrandingMetadataParam): Promise<FetchResponse<200, types.AppGetAccountBrandingResponse200>>;
    /**
     * Republish a website via App Store APIs
     *
     * @summary Republish Website
     */
    appSiteRepublish(metadata: types.AppSiteRepublishMetadataParam): Promise<FetchResponse<204, types.AppSiteRepublishResponse204>>;
    /**
     * Upload images to the content library of the website.
     *
     * @summary Upload Resources (images)
     */
    appSiteUpload(body: types.AppSiteUploadBodyParam, metadata: types.AppSiteUploadMetadataParam): Promise<FetchResponse<201, types.AppSiteUploadResponse201>>;
    appSiteUpload(metadata: types.AppSiteUploadMetadataParam): Promise<FetchResponse<201, types.AppSiteUploadResponse201>>;
    /**
     * Get Account Details of the account owner who installed the App.
     *
     * @summary Get Account Details
     */
    getAccountDetails(metadata: types.GetAccountDetailsMetadataParam): Promise<FetchResponse<200, types.GetAccountDetailsResponse200>>;
    /**
     * Get the data that exists within the content library of a website.
     *
     * @summary Get Content Library
     * @throws FetchError<400, types.GetContentLibraryResponse400> 400
     */
    getContentLibrary(metadata: types.GetContentLibraryMetadataParam): Promise<FetchResponse<200, types.GetContentLibraryResponse200>>;
    /**
     * Update the data that exists within the content library. Once updated the data is ready
     * for immediate use within the editor.
     *
     * @summary Update Content Library
     * @throws FetchError<400, types.UpdateContentLibraryResponse400> 400
     */
    updateContentLibrary(metadata: types.UpdateContentLibraryMetadataParam): Promise<FetchResponse<204, types.UpdateContentLibraryResponse204>>;
    /**
     * Push updates already within the content library directly to the live version of the
     * website. This pushes the data that exists within the content library to the
     * live/published version of the website.
     *
     * @summary Publish Content Library
     * @throws FetchError<400, types.PublishContentLibraryResponse400> 400
     */
    publishContentLibrary(metadata: types.PublishContentLibraryMetadataParam): Promise<FetchResponse<200, types.PublishContentLibraryResponse200>>;
    /**
     * Get data for a specific location.
     *
     * @summary Get Location
     * @throws FetchError<400, types.GetLocationResponse400> 400
     */
    getLocation(metadata: types.GetLocationMetadataParam): Promise<FetchResponse<200, types.GetLocationResponse200>>;
    /**
     * Update an existing location within the content library. You can only update
     * `additional_locations` that exist as part of the content library.
     *
     * @summary Update Location
     * @throws FetchError<400, types.UpdateLocation1Response400> 400
     */
    updateLocation1(metadata: types.UpdateLocation1MetadataParam): Promise<FetchResponse<204, types.UpdateLocation1Response204>>;
    /**
     * Delete an existing location
     *
     * @summary Delete Location
     * @throws FetchError<400, types.DeleteLocation1Response400> 400
     */
    deleteLocation1(metadata: types.DeleteLocation1MetadataParam): Promise<FetchResponse<200, types.DeleteLocation1Response200>>;
    /**
     * Create a new location for a website. This location will be apart of the
     * `additional_locations` object that is returned from a site's content library.
     *
     * @summary Create Location
     * @throws FetchError<400, types.CreateLocationResponse400> 400
     */
    createLocation(metadata: types.CreateLocationMetadataParam): Promise<FetchResponse<200, types.CreateLocationResponse200>>;
    /**
     * Getting a site via App Store APIs
     *
     * @summary Get Pages
     */
    appGetPages(metadata: types.AppGetPagesMetadataParam): Promise<FetchResponse<200, types.AppGetPagesResponse200>>;
    /**
     * Getting a page via App Store APIs
     *
     * @summary Update Page
     */
    appUpdatePage(body: types.AppUpdatePageBodyParam, metadata: types.AppUpdatePageMetadataParam): Promise<FetchResponse<200, types.AppUpdatePageResponse200>>;
    appUpdatePage(metadata: types.AppUpdatePageMetadataParam): Promise<FetchResponse<200, types.AppUpdatePageResponse200>>;
    /**
     * Create a site-wide HTML embed.
     *
     * @summary Create
     */
    appCreateSiteWideHtml(body: types.AppCreateSiteWideHtmlBodyParam, metadata: types.AppCreateSiteWideHtmlMetadataParam): Promise<FetchResponse<200, types.AppCreateSiteWideHtmlResponse200>>;
    appCreateSiteWideHtml(metadata: types.AppCreateSiteWideHtmlMetadataParam): Promise<FetchResponse<200, types.AppCreateSiteWideHtmlResponse200>>;
    /**
     * View all site-wide HTML codes your app has installed.
     *
     * @summary List all
     */
    appListAllSwh(metadata: types.AppListAllSwhMetadataParam): Promise<FetchResponse<200, types.AppListAllSwhResponse200>>;
    /**
     * Get a specific site-wide HTML embed.
     *
     * @summary Get
     */
    appGetSwh(metadata: types.AppGetSwhMetadataParam): Promise<FetchResponse<200, types.AppGetSwhResponse200>>;
    /**
     * Update a specific SWH Install
     *
     * @summary Update
     */
    appUpdateSwh(body: types.AppUpdateSwhBodyParam, metadata: types.AppUpdateSwhMetadataParam): Promise<FetchResponse<200, types.AppUpdateSwhResponse200>>;
    appUpdateSwh(metadata: types.AppUpdateSwhMetadataParam): Promise<FetchResponse<200, types.AppUpdateSwhResponse200>>;
    /**
     * Delete a specific SWH Install
     *
     * @summary Delete
     */
    appDeleteSwh(metadata: types.AppDeleteSwhMetadataParam): Promise<FetchResponse<200, types.AppDeleteSwhResponse200>>;
    /**
     * Get the manifest of an App.
     *
     * @summary Get
     */
    appGetManifest(metadata: types.AppGetManifestMetadataParam): Promise<FetchResponse<200, types.AppGetManifestResponse200>>;
    /**
     * Update the manifest of an App.
     *
     * @summary Update
     */
    appUpdateManifest(body: types.AppUpdateManifestBodyParam, metadata: types.AppUpdateManifestMetadataParam): Promise<FetchResponse<200, types.AppUpdateManifestResponse200>>;
    appUpdateManifest(metadata: types.AppUpdateManifestMetadataParam): Promise<FetchResponse<200, types.AppUpdateManifestResponse200>>;
    /**
     * Create a new access token with an existing refresh token, from an App Install
     *
     * @summary Create New Access Token
     */
    appCreateAccessToken(body: types.AppCreateAccessTokenBodyParam, metadata: types.AppCreateAccessTokenMetadataParam): Promise<FetchResponse<200, types.AppCreateAccessTokenResponse200>>;
    appCreateAccessToken(metadata: types.AppCreateAccessTokenMetadataParam): Promise<FetchResponse<200, types.AppCreateAccessTokenResponse200>>;
    /**
     * Check if the Duda App Store service is running!
     *
     * @summary Check App Store Health
     */
    checkAppStoreHealth(metadata?: types.CheckAppStoreHealthMetadataParam): Promise<FetchResponse<200, types.CheckAppStoreHealthResponse200>>;
    /**
     * Get products page. Default page response size is 50, max requested page size is 100.
     *
     * @summary List Products
     * @throws FetchError<400, types.AppListProductsResponse400> 400
     */
    appListProducts(metadata: types.AppListProductsMetadataParam): Promise<FetchResponse<200, types.AppListProductsResponse200>>;
    /**
     * Creates new product for referenced catalog
     *
     * @summary Create Product
     * @throws FetchError<400, types.AppCreateProductResponse400> 400
     */
    appCreateProduct(body: types.AppCreateProductBodyParam, metadata: types.AppCreateProductMetadataParam): Promise<FetchResponse<200, types.AppCreateProductResponse200>>;
    /**
     * Update an existing product in a catalog.
     *
     * @summary Update Product
     * @throws FetchError<400, types.AppUpdateProductResponse400> 400
     */
    appUpdateProduct(body: types.AppUpdateProductBodyParam, metadata: types.AppUpdateProductMetadataParam): Promise<FetchResponse<200, types.AppUpdateProductResponse200>>;
    /**
     * Delete an existing product from a product catalog.
     *
     * @summary Delete Product
     * @throws FetchError<400, types.AppDeleteProductResponse400> 400
     */
    appDeleteProduct(body: types.AppDeleteProductBodyParam, metadata: types.AppDeleteProductMetadataParam): Promise<FetchResponse<200, types.AppDeleteProductResponse200>>;
    /**
     * Get an individual product.
     *
     * @summary Get Product
     * @throws FetchError<400, types.AppGetProductResponse400> 400
     */
    appGetProduct(metadata: types.AppGetProductMetadataParam): Promise<FetchResponse<200, types.AppGetProductResponse200>>;
    /**
     * List Carts
     *
     * @throws FetchError<400, types.AppListCartsResponse400> 400
     */
    appListCarts(metadata: types.AppListCartsMetadataParam): Promise<FetchResponse<200, types.AppListCartsResponse200>>;
    /**
     * Get Cart
     *
     * @throws FetchError<400, types.AppGetCartResponse400> 400
     */
    appGetCart(metadata: types.AppGetCartMetadataParam): Promise<FetchResponse<200, types.AppGetCartResponse200>>;
    /**
     * List Payment Gateways
     *
     * @throws FetchError<400, types.AppListPaymentGatewaysResponse400> 400
     * @throws FetchError<401, types.AppListPaymentGatewaysResponse401> 401
     * @throws FetchError<403, types.AppListPaymentGatewaysResponse403> 403
     * @throws FetchError<404, types.AppListPaymentGatewaysResponse404> 404
     */
    appListPaymentGateways(metadata: types.AppListPaymentGatewaysMetadataParam): Promise<FetchResponse<200, types.AppListPaymentGatewaysResponse200>>;
    /**
     * Create Payment Gateway
     *
     */
    appCreatePaymentGateway(body: types.AppCreatePaymentGatewayBodyParam, metadata: types.AppCreatePaymentGatewayMetadataParam): Promise<FetchResponse<200, types.AppCreatePaymentGatewayResponse200>>;
    appCreatePaymentGateway(metadata: types.AppCreatePaymentGatewayMetadataParam): Promise<FetchResponse<200, types.AppCreatePaymentGatewayResponse200>>;
    /**
     * Get Payment Gateway
     *
     */
    appGetPaymentGateway(metadata: types.AppGetPaymentGatewayMetadataParam): Promise<FetchResponse<200, types.AppGetPaymentGatewayResponse200>>;
    /**
     * Delete Payment Gateway
     *
     */
    appDeletePaymentGateway(body: types.AppDeletePaymentGatewayBodyParam, metadata: types.AppDeletePaymentGatewayMetadataParam): Promise<FetchResponse<200, types.AppDeletePaymentGatewayResponse200>>;
    appDeletePaymentGateway(metadata: types.AppDeletePaymentGatewayMetadataParam): Promise<FetchResponse<200, types.AppDeletePaymentGatewayResponse200>>;
    /**
     * Update Payment Gateway
     *
     */
    appUpdatePaymentGateway(body: types.AppUpdatePaymentGatewayBodyParam, metadata: types.AppUpdatePaymentGatewayMetadataParam): Promise<FetchResponse<200, types.AppUpdatePaymentGatewayResponse200>>;
    appUpdatePaymentGateway(metadata: types.AppUpdatePaymentGatewayMetadataParam): Promise<FetchResponse<200, types.AppUpdatePaymentGatewayResponse200>>;
    /**
     * Get Payment Session
     *
     * @throws FetchError<400, types.AppGetPaymentSessionResponse400> 400
     */
    appGetPaymentSession(metadata: types.AppGetPaymentSessionMetadataParam): Promise<FetchResponse<200, types.AppGetPaymentSessionResponse200>>;
    /**
     * Verify that the payment is a success and Duda can properly save that it is created.
     *
     * @summary Confirm Payment
     * @throws FetchError<400, types.AppConfirmPaymentResponse400> 400
     */
    appConfirmPayment(body: types.AppConfirmPaymentBodyParam, metadata: types.AppConfirmPaymentMetadataParam): Promise<FetchResponse<200, types.AppConfirmPaymentResponse200>>;
    appConfirmPayment(metadata: types.AppConfirmPaymentMetadataParam): Promise<FetchResponse<200, types.AppConfirmPaymentResponse200>>;
    /**
     * List Orders
     *
     * @throws FetchError<400, types.AppListOrdersResponse400> 400
     * @throws FetchError<401, types.AppListOrdersResponse401> 401
     * @throws FetchError<403, types.AppListOrdersResponse403> 403
     * @throws FetchError<404, types.AppListOrdersResponse404> 404
     */
    appListOrders(metadata: types.AppListOrdersMetadataParam): Promise<FetchResponse<200, types.AppListOrdersResponse200>>;
    /**
     * Get Order
     *
     * @throws FetchError<400, types.AppGetOrderResponse400> 400
     * @throws FetchError<401, types.AppGetOrderResponse401> 401
     * @throws FetchError<403, types.AppGetOrderResponse403> 403
     * @throws FetchError<404, types.AppGetOrderResponse404> 404
     */
    appGetOrder(metadata: types.AppGetOrderMetadataParam): Promise<FetchResponse<200, types.AppGetOrderResponse200>>;
    /**
     * Update Order
     *
     * @throws FetchError<401, types.AppUpdateOrderResponse401> 401
     */
    appUpdateOrder(body: types.AppUpdateOrderBodyParam, metadata: types.AppUpdateOrderMetadataParam): Promise<FetchResponse<200, types.AppUpdateOrderResponse200>>;
    appUpdateOrder(metadata: types.AppUpdateOrderMetadataParam): Promise<FetchResponse<200, types.AppUpdateOrderResponse200>>;
    /**
     * List Product Options
     *
     * @throws FetchError<400, types.AppEcommerceListProductOptionsResponse400> 400
     */
    appEcommerceListProductOptions(metadata: types.AppEcommerceListProductOptionsMetadataParam): Promise<FetchResponse<200, types.AppEcommerceListProductOptionsResponse200>>;
    /**
     * Create Product Option
     *
     * @throws FetchError<400, types.AppEcommerceCreateProductOptionResponse400> 400
     */
    appEcommerceCreateProductOption(body: types.AppEcommerceCreateProductOptionBodyParam, metadata: types.AppEcommerceCreateProductOptionMetadataParam): Promise<FetchResponse<200, types.AppEcommerceCreateProductOptionResponse200>>;
    /**
     * Get Product Option
     *
     * @throws FetchError<400, types.AppEcommerceGetProductOptionResponse400> 400
     */
    appEcommerceGetProductOption(metadata: types.AppEcommerceGetProductOptionMetadataParam): Promise<FetchResponse<200, types.AppEcommerceGetProductOptionResponse200>>;
    /**
     * Delete Product Option
     *
     * @throws FetchError<400, types.AppEcommerceDeleteProductOptionResponse400> 400
     */
    appEcommerceDeleteProductOption(metadata: types.AppEcommerceDeleteProductOptionMetadataParam): Promise<FetchResponse<204, types.AppEcommerceDeleteProductOptionResponse204>>;
    /**
     * Update Product Option
     *
     * @throws FetchError<400, types.AppEcommerceUpdateProductOptionResponse400> 400
     */
    appEcommerceUpdateProductOption(body: types.AppEcommerceUpdateProductOptionBodyParam, metadata: types.AppEcommerceUpdateProductOptionMetadataParam): Promise<FetchResponse<200, types.AppEcommerceUpdateProductOptionResponse200>>;
    /**
     * Create Product Option Choice
     *
     * @throws FetchError<400, types.AppEcommerceCreateProductOptionChoiceResponse400> 400
     */
    appEcommerceCreateProductOptionChoice(body: types.AppEcommerceCreateProductOptionChoiceBodyParam, metadata: types.AppEcommerceCreateProductOptionChoiceMetadataParam): Promise<FetchResponse<200, types.AppEcommerceCreateProductOptionChoiceResponse200>>;
    /**
     * Delete Product Option Choice
     *
     * @throws FetchError<400, types.AppEcommerceDeleteProductOptionChoiceResponse400> 400
     */
    appEcommerceDeleteProductOptionChoice(metadata: types.AppEcommerceDeleteProductOptionChoiceMetadataParam): Promise<FetchResponse<204, types.AppEcommerceDeleteProductOptionChoiceResponse204>>;
    /**
     * Update Product Option Choice
     *
     * @throws FetchError<400, types.AppEcommerceUpdateProductOptionChoiceResponse400> 400
     */
    appEcommerceUpdateProductOptionChoice(body: types.AppEcommerceUpdateProductOptionChoiceBodyParam, metadata: types.AppEcommerceUpdateProductOptionChoiceMetadataParam): Promise<FetchResponse<200, types.AppEcommerceUpdateProductOptionChoiceResponse200>>;
    /**
     * Get Refund
     *
     * @throws FetchError<400, types.AppGetRefundResponse400> 400
     * @throws FetchError<401, types.AppGetRefundResponse401> 401
     * @throws FetchError<403, types.AppGetRefundResponse403> 403
     * @throws FetchError<404, types.AppGetRefundResponse404> 404
     */
    appGetRefund(metadata: types.AppGetRefundMetadataParam): Promise<FetchResponse<200, types.AppGetRefundResponse200>>;
    /**
     * List Refunds
     *
     * @throws FetchError<400, types.AppListRefundsResponse400> 400
     * @throws FetchError<401, types.AppListRefundsResponse401> 401
     * @throws FetchError<403, types.AppListRefundsResponse403> 403
     * @throws FetchError<404, types.AppListRefundsResponse404> 404
     */
    appListRefunds(metadata: types.AppListRefundsMetadataParam): Promise<FetchResponse<200, types.AppListRefundsResponse200>>;
    /**
     * Get Settings
     *
     * @throws FetchError<400, types.AppGetEcommSettingsResponse400> 400
     */
    appGetEcommSettings(metadata: types.AppGetEcommSettingsMetadataParam): Promise<FetchResponse<200, types.AppGetEcommSettingsResponse200>>;
    /**
     * Update Settings
     *
     * @throws FetchError<400, types.AppEcommUpdateSettingsResponse400> 400
     * @throws FetchError<401, types.AppEcommUpdateSettingsResponse401> 401
     * @throws FetchError<403, types.AppEcommUpdateSettingsResponse403> 403
     * @throws FetchError<404, types.AppEcommUpdateSettingsResponse404> 404
     */
    appEcommUpdateSettings(body: types.AppEcommUpdateSettingsBodyParam, metadata: types.AppEcommUpdateSettingsMetadataParam): Promise<FetchResponse<200, types.AppEcommUpdateSettingsResponse200>>;
    appEcommUpdateSettings(metadata: types.AppEcommUpdateSettingsMetadataParam): Promise<FetchResponse<200, types.AppEcommUpdateSettingsResponse200>>;
    /**
     * Publish the site-wide code to the live version of the website, without republishing the
     * entire website.
     *
     * @summary Publish
     */
    appPublishSiteWide(metadata: types.AppPublishSiteWideMetadataParam): Promise<FetchResponse<200, types.AppPublishSiteWideResponse200>>;
    /**
     * Get catalog product variation by id
     *
     * @summary Get Product Variation
     * @throws FetchError<400, types.AppGetProductVariationResponse400> 400
     */
    appGetProductVariation(metadata: types.AppGetProductVariationMetadataParam): Promise<FetchResponse<200, types.AppGetProductVariationResponse200>>;
    /**
     * Update catalog product variation by id
     *
     * @summary Update Product Variation
     * @throws FetchError<400, types.AppUpdateProductVariationResponse400> 400
     */
    appUpdateProductVariation(body: types.AppUpdateProductVariationBodyParam, metadata: types.AppUpdateProductVariationMetadataParam): Promise<FetchResponse<200, types.AppUpdateProductVariationResponse200>>;
    appUpdateProductVariation(metadata: types.AppUpdateProductVariationMetadataParam): Promise<FetchResponse<200, types.AppUpdateProductVariationResponse200>>;
    /**
     * List Shipping Providers
     *
     * @throws FetchError<400, types.AppListShippingProvidersResponse400> 400
     * @throws FetchError<401, types.AppListShippingProvidersResponse401> 401
     * @throws FetchError<403, types.AppListShippingProvidersResponse403> 403
     * @throws FetchError<404, types.AppListShippingProvidersResponse404> 404
     */
    appListShippingProviders(metadata: types.AppListShippingProvidersMetadataParam): Promise<FetchResponse<200, types.AppListShippingProvidersResponse200>>;
    /**
     * Create Shipping Provider
     *
     * @throws FetchError<400, types.AppCreateShippingProviderResponse400> 400
     * @throws FetchError<401, types.AppCreateShippingProviderResponse401> 401
     * @throws FetchError<403, types.AppCreateShippingProviderResponse403> 403
     * @throws FetchError<404, types.AppCreateShippingProviderResponse404> 404
     */
    appCreateShippingProvider(body: types.AppCreateShippingProviderBodyParam, metadata: types.AppCreateShippingProviderMetadataParam): Promise<FetchResponse<201, types.AppCreateShippingProviderResponse201>>;
    /**
     * Get Shipping Provider
     *
     * @throws FetchError<400, types.AppGetShippingProviderResponse400> 400
     * @throws FetchError<401, types.AppGetShippingProviderResponse401> 401
     * @throws FetchError<403, types.AppGetShippingProviderResponse403> 403
     * @throws FetchError<404, types.AppGetShippingProviderResponse404> 404
     */
    appGetShippingProvider(metadata: types.AppGetShippingProviderMetadataParam): Promise<FetchResponse<200, types.AppGetShippingProviderResponse200>>;
    /**
     * Update Shipping Provider
     *
     * @throws FetchError<400, types.AppUpdateShippingProviderResponse400> 400
     * @throws FetchError<401, types.AppUpdateShippingProviderResponse401> 401
     * @throws FetchError<403, types.AppUpdateShippingProviderResponse403> 403
     * @throws FetchError<404, types.AppUpdateShippingProviderResponse404> 404
     */
    appUpdateShippingProvider(body: types.AppUpdateShippingProviderBodyParam, metadata: types.AppUpdateShippingProviderMetadataParam): Promise<FetchResponse<200, types.AppUpdateShippingProviderResponse200>>;
    appUpdateShippingProvider(metadata: types.AppUpdateShippingProviderMetadataParam): Promise<FetchResponse<200, types.AppUpdateShippingProviderResponse200>>;
    /**
     * Delete Shipping Provider
     *
     * @throws FetchError<400, types.AppDeleteShippingProviderResponse400> 400
     * @throws FetchError<401, types.AppDeleteShippingProviderResponse401> 401
     * @throws FetchError<403, types.AppDeleteShippingProviderResponse403> 403
     * @throws FetchError<404, types.AppDeleteShippingProviderResponse404> 404
     */
    appDeleteShippingProvider(metadata: types.AppDeleteShippingProviderMetadataParam): Promise<FetchResponse<204, types.AppDeleteShippingProviderResponse204>>;
    /**
     * Get Members
     *
     * @throws FetchError<400, types.AppGetMembersResponse400> 400
     */
    appGetMembers(metadata: types.AppGetMembersMetadataParam): Promise<FetchResponse<200, types.AppGetMembersResponse200>>;
    /**
     * Get Member by Id
     *
     * @throws FetchError<400, types.AppGetMemberByIdResponse400> 400
     */
    appGetMemberById(metadata: types.AppGetMemberByIdMetadataParam): Promise<FetchResponse<200, types.AppGetMemberByIdResponse200>>;
    /**
     * Update Member
     *
     * @throws FetchError<400, types.AppUpdateMemberResponse400> 400
     */
    appUpdateMember(body: types.AppUpdateMemberBodyParam, metadata: types.AppUpdateMemberMetadataParam): Promise<FetchResponse<200, types.AppUpdateMemberResponse200>>;
    appUpdateMember(metadata: types.AppUpdateMemberMetadataParam): Promise<FetchResponse<200, types.AppUpdateMemberResponse200>>;
    /**
     * Delete Members
     *
     * @throws FetchError<400, types.AppDeleteMembersResponse400> 400
     */
    appDeleteMembers(metadata: types.AppDeleteMembersMetadataParam): Promise<FetchResponse<204, types.AppDeleteMembersResponse204>>;
    /**
     * Member Password Reset
     *
     * @throws FetchError<400, types.AppMemberPasswordResetResponse400> 400
     */
    appMemberPasswordReset(metadata: types.AppMemberPasswordResetMetadataParam): Promise<FetchResponse<200, types.AppMemberPasswordResetResponse200>>;
    /**
     * Get Membership Invitations
     *
     * @throws FetchError<400, types.AppGetMembershipInvitationsResponse400> 400
     */
    appGetMembershipInvitations(metadata: types.AppGetMembershipInvitationsMetadataParam): Promise<FetchResponse<200, types.AppGetMembershipInvitationsResponse200>>;
    /**
     * Create Membership Invitation
     *
     * @throws FetchError<400, types.AppCreateMembershipInvitationResponse400> 400
     */
    appCreateMembershipInvitation(body: types.AppCreateMembershipInvitationBodyParam, metadata: types.AppCreateMembershipInvitationMetadataParam): Promise<FetchResponse<200, types.AppCreateMembershipInvitationResponse200>>;
    appCreateMembershipInvitation(metadata: types.AppCreateMembershipInvitationMetadataParam): Promise<FetchResponse<200, types.AppCreateMembershipInvitationResponse200>>;
    /**
     * Create Batch Membership Invitations
     *
     * @throws FetchError<400, types.AppCreateBatchMembershipInvitationsResponse400> 400
     */
    appCreateBatchMembershipInvitations(body: types.AppCreateBatchMembershipInvitationsBodyParam, metadata: types.AppCreateBatchMembershipInvitationsMetadataParam): Promise<FetchResponse<200, types.AppCreateBatchMembershipInvitationsResponse200>>;
    appCreateBatchMembershipInvitations(metadata: types.AppCreateBatchMembershipInvitationsMetadataParam): Promise<FetchResponse<200, types.AppCreateBatchMembershipInvitationsResponse200>>;
    /**
     * Delete Membership Invitation
     *
     * @throws FetchError<400, types.AppDeleteMembershipInvitationResponse400> 400
     */
    appDeleteMembershipInvitation(metadata: types.AppDeleteMembershipInvitationMetadataParam): Promise<FetchResponse<204, types.AppDeleteMembershipInvitationResponse204>>;
    /**
     * Get Groups
     *
     * @throws FetchError<400, types.AppGetGroupsResponse400> 400
     */
    appGetGroups(metadata: types.AppGetGroupsMetadataParam): Promise<FetchResponse<200, types.AppGetGroupsResponse200>>;
    /**
     * Create Membership Group
     *
     * @throws FetchError<400, types.AppCreateMembershipGroupResponse400> 400
     */
    appCreateMembershipGroup(body: types.AppCreateMembershipGroupBodyParam, metadata: types.AppCreateMembershipGroupMetadataParam): Promise<FetchResponse<200, types.AppCreateMembershipGroupResponse200>>;
    appCreateMembershipGroup(metadata: types.AppCreateMembershipGroupMetadataParam): Promise<FetchResponse<200, types.AppCreateMembershipGroupResponse200>>;
    /**
     * Get Membership Group
     *
     * @throws FetchError<400, types.AppGetMembershipGroupResponse400> 400
     */
    appGetMembershipGroup(metadata: types.AppGetMembershipGroupMetadataParam): Promise<FetchResponse<200, types.AppGetMembershipGroupResponse200>>;
    /**
     * Update Membership Group
     *
     * @throws FetchError<400, types.AppUpdateMembershipGroupResponse400> 400
     */
    appUpdateMembershipGroup(body: types.AppUpdateMembershipGroupBodyParam, metadata: types.AppUpdateMembershipGroupMetadataParam): Promise<FetchResponse<200, types.AppUpdateMembershipGroupResponse200>>;
    appUpdateMembershipGroup(metadata: types.AppUpdateMembershipGroupMetadataParam): Promise<FetchResponse<200, types.AppUpdateMembershipGroupResponse200>>;
    /**
     * Delete Membership Group
     *
     * @throws FetchError<400, types.AppDeleteMembershipGroupResponse400> 400
     */
    appDeleteMembershipGroup(metadata: types.AppDeleteMembershipGroupMetadataParam): Promise<FetchResponse<204, types.AppDeleteMembershipGroupResponse204>>;
    /**
     * Understand the features and limits that exist in a store. Today, this is limited to
     * product level limits, but in the future, there will be more features.
     *
     * @summary Get Store
     * @throws FetchError<400, types.AppGetStoreResponse400> 400
     */
    appGetStore(metadata: types.AppGetStoreMetadataParam): Promise<FetchResponse<200, types.AppGetStoreResponse200>>;
}
declare const createSDK: SDK;
export = createSDK;
