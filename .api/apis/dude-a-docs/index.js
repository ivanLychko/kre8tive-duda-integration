"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var oas_1 = __importDefault(require("oas"));
var core_1 = __importDefault(require("api/dist/core"));
var openapi_json_1 = __importDefault(require("./openapi.json"));
var SDK = /** @class */ (function () {
    function SDK() {
        this.spec = oas_1.default.init(openapi_json_1.default);
        this.core = new core_1.default(this.spec, 'dude-a-docs/unknown (api/6.1.2)');
    }
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    SDK.prototype.config = function (config) {
        this.core.setConfig(config);
    };
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
    SDK.prototype.auth = function () {
        var _a;
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        (_a = this.core).setAuth.apply(_a, values);
        return this;
    };
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
    SDK.prototype.server = function (url, variables) {
        if (variables === void 0) { variables = {}; }
        this.core.setServer(url, variables);
    };
    /**
     * Get all collections that exist on this website.
     *
     * @summary List Collections
     * @throws FetchError<400, types.ListCollectionsV2Response400> 400
     */
    SDK.prototype.listCollectionsV2 = function (metadata) {
        return this.core.fetch('/site/{site_name}/collections', 'get', metadata);
    };
    /**
     * Delete an existing field of a collection
     *
     * @summary Delete Fields
     * @throws FetchError<400, types.DeleteFieldsResponse400> 400
     */
    SDK.prototype.deleteFields = function (metadata) {
        return this.core.fetch('/site/{site_name}/collection/{collection_name}/field/{field_name}', 'delete', metadata);
    };
    SDK.prototype.updateFieldsApp = function (body, metadata) {
        return this.core.fetch('/site/{site_name}/collection/{collection_name}/field/{field_name}', 'put', body, metadata);
    };
    /**
     * Get the fields and data of an existing collection
     *
     * @summary Get Collection
     * @throws FetchError<400, types.GetCollectionAppstoreResponse400> 400
     * @throws FetchError<401, types.GetCollectionAppstoreResponse401> 401
     */
    SDK.prototype.getCollectionAppstore = function (metadata) {
        return this.core.fetch('/site/{site_name}/collection/{collection_name}', 'get', metadata);
    };
    /**
     * Delete an existing collection
     *
     * @summary Delete Collection
     * @throws FetchError<400, types.DeleteCollectionAppResponse400> 400
     * @throws FetchError<401, types.DeleteCollectionAppResponse401> 401
     */
    SDK.prototype.deleteCollectionApp = function (metadata) {
        return this.core.fetch('/site/{site_name}/collection/{collection_name}', 'delete', metadata);
    };
    /**
     * Create a new collection within a site
     *
     * @summary Create Collection
     * @throws FetchError<400, types.CreateCollectionAppResponse400> 400
     */
    SDK.prototype.createCollectionApp = function (body, metadata) {
        return this.core.fetch('/site/{site_name}/collection', 'post', body, metadata);
    };
    /**
     * Update an existing collection
     *
     * @summary Update Collection
     * @throws FetchError<400, types.UpdateCollectionAppResponse400> 400
     */
    SDK.prototype.updateCollectionApp = function (body, metadata) {
        return this.core.fetch('/site/{site_name}/collection/{current_collection_name}', 'put', body, metadata);
    };
    /**
     * Force Duda to refresh the data from an external URL for a given collection.
     *
     * @summary Clear Cache
     * @throws FetchError<400, types.ClearCacheAppResponse400> 400
     */
    SDK.prototype.clearCacheApp = function (metadata) {
        return this.core.fetch('/site/{site_name}/collection/{collection_name}/revalidate', 'post', metadata);
    };
    /**
     * Revalidate all collections in all sites under the same account that use the provided
     * external id
     *
     * @summary Clear Cache by External ID
     * @throws FetchError<400, types.ClearCacheByExternalIdAppResponse400> 400
     */
    SDK.prototype.clearCacheByExternalIdApp = function (metadata) {
        return this.core.fetch('/site/collections/revalidate/{external_id}', 'post', metadata);
    };
    SDK.prototype.createRowsApp = function (body, metadata) {
        return this.core.fetch('/site/{site_name}/collection/{collection_name}/row', 'post', body, metadata);
    };
    SDK.prototype.updateRowsApp = function (body, metadata) {
        return this.core.fetch('/site/{site_name}/collection/{collection_name}/row', 'put', body, metadata);
    };
    SDK.prototype.deleteRowsApp = function (body, metadata) {
        return this.core.fetch('/site/{site_name}/collection/{collection_name}/row', 'delete', body, metadata);
    };
    SDK.prototype.createFieldsApp = function (body, metadata) {
        return this.core.fetch('/site/{site_name}/collection/{collection_name}/field', 'post', body, metadata);
    };
    /**
     * Getting a site via App Store APIs
     *
     * @summary Get Site
     */
    SDK.prototype.appStoreGetSite = function (metadata) {
        return this.core.fetch('/site/{site_name}', 'get', metadata);
    };
    SDK.prototype.appUpdateSite = function (body, metadata) {
        return this.core.fetch('/site/{site_name}', 'post', body, metadata);
    };
    /**
     * Getting a site via App Store APIs
     *
     * @summary Get Account Brand
     */
    SDK.prototype.appGetAccountBranding = function (metadata) {
        return this.core.fetch('/site/{site_name}/branding', 'get', metadata);
    };
    /**
     * Republish a website via App Store APIs
     *
     * @summary Republish Website
     */
    SDK.prototype.appSiteRepublish = function (metadata) {
        return this.core.fetch('/site/{site_name}/republish', 'post', metadata);
    };
    SDK.prototype.appSiteUpload = function (body, metadata) {
        return this.core.fetch('/site/{site_name}/resources/upload', 'post', body, metadata);
    };
    /**
     * Get Account Details of the account owner who installed the App.
     *
     * @summary Get Account Details
     */
    SDK.prototype.getAccountDetails = function (metadata) {
        return this.core.fetch('/site/{site_name}/account/details', 'get', metadata);
    };
    /**
     * Get the data that exists within the content library of a website.
     *
     * @summary Get Content Library
     * @throws FetchError<400, types.GetContentLibraryResponse400> 400
     */
    SDK.prototype.getContentLibrary = function (metadata) {
        return this.core.fetch('/site/{site_name}/content', 'get', metadata);
    };
    /**
     * Update the data that exists within the content library. Once updated the data is ready
     * for immediate use within the editor.
     *
     * @summary Update Content Library
     * @throws FetchError<400, types.UpdateContentLibraryResponse400> 400
     */
    SDK.prototype.updateContentLibrary = function (metadata) {
        return this.core.fetch('/sites/multiscreen/{site_name}/content', 'post', metadata);
    };
    /**
     * Push updates already within the content library directly to the live version of the
     * website. This pushes the data that exists within the content library to the
     * live/published version of the website.
     *
     * @summary Publish Content Library
     * @throws FetchError<400, types.PublishContentLibraryResponse400> 400
     */
    SDK.prototype.publishContentLibrary = function (metadata) {
        return this.core.fetch('/site/{site_name}/content/publish', 'post', metadata);
    };
    /**
     * Get data for a specific location.
     *
     * @summary Get Location
     * @throws FetchError<400, types.GetLocationResponse400> 400
     */
    SDK.prototype.getLocation = function (metadata) {
        return this.core.fetch('/site/{site_name}/content/location/{location_id}', 'get', metadata);
    };
    /**
     * Update an existing location within the content library. You can only update
     * `additional_locations` that exist as part of the content library.
     *
     * @summary Update Location
     * @throws FetchError<400, types.UpdateLocation1Response400> 400
     */
    SDK.prototype.updateLocation1 = function (metadata) {
        return this.core.fetch('/site/{site_name}/content/location/{location_id}', 'post', metadata);
    };
    /**
     * Delete an existing location
     *
     * @summary Delete Location
     * @throws FetchError<400, types.DeleteLocation1Response400> 400
     */
    SDK.prototype.deleteLocation1 = function (metadata) {
        return this.core.fetch('/site/{site_name}/content/location/{location_id}', 'delete', metadata);
    };
    /**
     * Create a new location for a website. This location will be apart of the
     * `additional_locations` object that is returned from a site's content library.
     *
     * @summary Create Location
     * @throws FetchError<400, types.CreateLocationResponse400> 400
     */
    SDK.prototype.createLocation = function (metadata) {
        return this.core.fetch('/site/{site_name}/content/location', 'post', metadata);
    };
    /**
     * Getting a site via App Store APIs
     *
     * @summary Get Pages
     */
    SDK.prototype.appGetPages = function (metadata) {
        return this.core.fetch('/site/{site_name}/v2/pages', 'get', metadata);
    };
    SDK.prototype.appUpdatePage = function (body, metadata) {
        return this.core.fetch('/site/{site_name}/v2/pages/{page_uuid}', 'put', body, metadata);
    };
    SDK.prototype.appCreateSiteWideHtml = function (body, metadata) {
        return this.core.fetch('/site/{site_name}/sitewidehtml', 'post', body, metadata);
    };
    /**
     * View all site-wide HTML codes your app has installed.
     *
     * @summary List all
     */
    SDK.prototype.appListAllSwh = function (metadata) {
        return this.core.fetch('/site/{site_name}/sitewidehtml/list', 'get', metadata);
    };
    /**
     * Get a specific site-wide HTML embed.
     *
     * @summary Get
     */
    SDK.prototype.appGetSwh = function (metadata) {
        return this.core.fetch('/site/{site_name}/sitewidehtml/{uuid}', 'get', metadata);
    };
    SDK.prototype.appUpdateSwh = function (body, metadata) {
        return this.core.fetch('/site/{site_name}/sitewidehtml/{uuid}', 'put', body, metadata);
    };
    /**
     * Delete a specific SWH Install
     *
     * @summary Delete
     */
    SDK.prototype.appDeleteSwh = function (metadata) {
        return this.core.fetch('/site/{site_name}/sitewidehtml/{uuid}', 'delete', metadata);
    };
    /**
     * Get the manifest of an App.
     *
     * @summary Get
     */
    SDK.prototype.appGetManifest = function (metadata) {
        return this.core.fetch('/{app_uuid}', 'get', metadata);
    };
    SDK.prototype.appUpdateManifest = function (body, metadata) {
        return this.core.fetch('/{app_uuid}', 'post', body, metadata);
    };
    SDK.prototype.appCreateAccessToken = function (body, metadata) {
        return this.core.fetch('/{app_uuid}/token/refresh', 'post', body, metadata);
    };
    /**
     * Check if the Duda App Store service is running!
     *
     * @summary Check App Store Health
     */
    SDK.prototype.checkAppStoreHealth = function (metadata) {
        return this.core.fetch('/health', 'get', metadata);
    };
    /**
     * Get products page. Default page response size is 50, max requested page size is 100.
     *
     * @summary List Products
     * @throws FetchError<400, types.AppListProductsResponse400> 400
     */
    SDK.prototype.appListProducts = function (metadata) {
        return this.core.fetch('/site/{site_name}/ecommerce/products', 'get', metadata);
    };
    /**
     * Creates new product for referenced catalog
     *
     * @summary Create Product
     * @throws FetchError<400, types.AppCreateProductResponse400> 400
     */
    SDK.prototype.appCreateProduct = function (body, metadata) {
        return this.core.fetch('/site/{site_name}/ecommerce/products', 'post', body, metadata);
    };
    /**
     * Update an existing product in a catalog.
     *
     * @summary Update Product
     * @throws FetchError<400, types.AppUpdateProductResponse400> 400
     */
    SDK.prototype.appUpdateProduct = function (body, metadata) {
        return this.core.fetch('/site/{site_name}/ecommerce/products/{id}', 'patch', body, metadata);
    };
    /**
     * Delete an existing product from a product catalog.
     *
     * @summary Delete Product
     * @throws FetchError<400, types.AppDeleteProductResponse400> 400
     */
    SDK.prototype.appDeleteProduct = function (body, metadata) {
        return this.core.fetch('/site/{site_name}/ecommerce/products/{id}', 'delete', body, metadata);
    };
    /**
     * Get an individual product.
     *
     * @summary Get Product
     * @throws FetchError<400, types.AppGetProductResponse400> 400
     */
    SDK.prototype.appGetProduct = function (metadata) {
        return this.core.fetch('/site/{site_name}/ecommerce/products/{id}', 'get', metadata);
    };
    /**
     * List Carts
     *
     * @throws FetchError<400, types.AppListCartsResponse400> 400
     */
    SDK.prototype.appListCarts = function (metadata) {
        return this.core.fetch('/site/{site_name}/ecommerce/carts', 'get', metadata);
    };
    /**
     * Get Cart
     *
     * @throws FetchError<400, types.AppGetCartResponse400> 400
     */
    SDK.prototype.appGetCart = function (metadata) {
        return this.core.fetch('/site/{site_name}/ecommerce/carts/{cart_id}', 'get', metadata);
    };
    /**
     * List Payment Gateways
     *
     * @throws FetchError<400, types.AppListPaymentGatewaysResponse400> 400
     * @throws FetchError<401, types.AppListPaymentGatewaysResponse401> 401
     * @throws FetchError<403, types.AppListPaymentGatewaysResponse403> 403
     * @throws FetchError<404, types.AppListPaymentGatewaysResponse404> 404
     */
    SDK.prototype.appListPaymentGateways = function (metadata) {
        return this.core.fetch('/site/{site_name}/ecommerce/payment-gateways', 'get', metadata);
    };
    SDK.prototype.appCreatePaymentGateway = function (body, metadata) {
        return this.core.fetch('/site/{site_name}/ecommerce/payment-gateways', 'post', body, metadata);
    };
    /**
     * Get Payment Gateway
     *
     */
    SDK.prototype.appGetPaymentGateway = function (metadata) {
        return this.core.fetch('/site/{site_name}/ecommerce/payment-gateways/{id}', 'get', metadata);
    };
    SDK.prototype.appDeletePaymentGateway = function (body, metadata) {
        return this.core.fetch('/site/{site_name}/ecommerce/payment-gateways/{id}', 'delete', body, metadata);
    };
    SDK.prototype.appUpdatePaymentGateway = function (body, metadata) {
        return this.core.fetch('/site/{site_name}/ecommerce/payment-gateways/{id}', 'patch', body, metadata);
    };
    /**
     * Get Payment Session
     *
     * @throws FetchError<400, types.AppGetPaymentSessionResponse400> 400
     */
    SDK.prototype.appGetPaymentSession = function (metadata) {
        return this.core.fetch('/site/{site_name}/ecommerce/payment-sessions/{session_id}', 'get', metadata);
    };
    SDK.prototype.appConfirmPayment = function (body, metadata) {
        return this.core.fetch('/site/{site_name}/ecommerce/payment-sessions/{session_id}/confirm', 'post', body, metadata);
    };
    /**
     * List Orders
     *
     * @throws FetchError<400, types.AppListOrdersResponse400> 400
     * @throws FetchError<401, types.AppListOrdersResponse401> 401
     * @throws FetchError<403, types.AppListOrdersResponse403> 403
     * @throws FetchError<404, types.AppListOrdersResponse404> 404
     */
    SDK.prototype.appListOrders = function (metadata) {
        return this.core.fetch('/site/{site_name}/ecommerce/orders', 'get', metadata);
    };
    /**
     * Get Order
     *
     * @throws FetchError<400, types.AppGetOrderResponse400> 400
     * @throws FetchError<401, types.AppGetOrderResponse401> 401
     * @throws FetchError<403, types.AppGetOrderResponse403> 403
     * @throws FetchError<404, types.AppGetOrderResponse404> 404
     */
    SDK.prototype.appGetOrder = function (metadata) {
        return this.core.fetch('/site/{site_name}/ecommerce/orders/{order_id}', 'get', metadata);
    };
    SDK.prototype.appUpdateOrder = function (body, metadata) {
        return this.core.fetch('/site/{site_name}/ecommerce/orders/{order_id}', 'patch', body, metadata);
    };
    /**
     * List Product Options
     *
     * @throws FetchError<400, types.AppEcommerceListProductOptionsResponse400> 400
     */
    SDK.prototype.appEcommerceListProductOptions = function (metadata) {
        return this.core.fetch('/site/{site_name}/ecommerce/options', 'get', metadata);
    };
    /**
     * Create Product Option
     *
     * @throws FetchError<400, types.AppEcommerceCreateProductOptionResponse400> 400
     */
    SDK.prototype.appEcommerceCreateProductOption = function (body, metadata) {
        return this.core.fetch('/site/multiscreen/{site_name}/ecommerce/options', 'post', body, metadata);
    };
    /**
     * Get Product Option
     *
     * @throws FetchError<400, types.AppEcommerceGetProductOptionResponse400> 400
     */
    SDK.prototype.appEcommerceGetProductOption = function (metadata) {
        return this.core.fetch('/site/{site_name}/ecommerce/options/{option_id}', 'get', metadata);
    };
    /**
     * Delete Product Option
     *
     * @throws FetchError<400, types.AppEcommerceDeleteProductOptionResponse400> 400
     */
    SDK.prototype.appEcommerceDeleteProductOption = function (metadata) {
        return this.core.fetch('/site/{site_name}/ecommerce/options/{option_id}', 'delete', metadata);
    };
    /**
     * Update Product Option
     *
     * @throws FetchError<400, types.AppEcommerceUpdateProductOptionResponse400> 400
     */
    SDK.prototype.appEcommerceUpdateProductOption = function (body, metadata) {
        return this.core.fetch('/site/{site_name}/ecommerce/options/{option_id}', 'put', body, metadata);
    };
    /**
     * Create Product Option Choice
     *
     * @throws FetchError<400, types.AppEcommerceCreateProductOptionChoiceResponse400> 400
     */
    SDK.prototype.appEcommerceCreateProductOptionChoice = function (body, metadata) {
        return this.core.fetch('/site/{site_name}/ecommerce/options/{option_id}/choices', 'post', body, metadata);
    };
    /**
     * Delete Product Option Choice
     *
     * @throws FetchError<400, types.AppEcommerceDeleteProductOptionChoiceResponse400> 400
     */
    SDK.prototype.appEcommerceDeleteProductOptionChoice = function (metadata) {
        return this.core.fetch('/site/{site_name}/ecommerce/options/{option_id}/choices/{choice_id}', 'delete', metadata);
    };
    /**
     * Update Product Option Choice
     *
     * @throws FetchError<400, types.AppEcommerceUpdateProductOptionChoiceResponse400> 400
     */
    SDK.prototype.appEcommerceUpdateProductOptionChoice = function (body, metadata) {
        return this.core.fetch('/site/{site_name}/ecommerce/options/{option_id}/choices/{choice_id}', 'put', body, metadata);
    };
    /**
     * Get Refund
     *
     * @throws FetchError<400, types.AppGetRefundResponse400> 400
     * @throws FetchError<401, types.AppGetRefundResponse401> 401
     * @throws FetchError<403, types.AppGetRefundResponse403> 403
     * @throws FetchError<404, types.AppGetRefundResponse404> 404
     */
    SDK.prototype.appGetRefund = function (metadata) {
        return this.core.fetch('/site/{site_name}/ecommerce/orders/{order_id}/refunds/{refund_id}', 'get', metadata);
    };
    /**
     * List Refunds
     *
     * @throws FetchError<400, types.AppListRefundsResponse400> 400
     * @throws FetchError<401, types.AppListRefundsResponse401> 401
     * @throws FetchError<403, types.AppListRefundsResponse403> 403
     * @throws FetchError<404, types.AppListRefundsResponse404> 404
     */
    SDK.prototype.appListRefunds = function (metadata) {
        return this.core.fetch('/site/{site_name}/ecommerce/orders/{order_id}/refunds', 'get', metadata);
    };
    /**
     * Get Settings
     *
     * @throws FetchError<400, types.AppGetEcommSettingsResponse400> 400
     */
    SDK.prototype.appGetEcommSettings = function (metadata) {
        return this.core.fetch('/site/{site_name}/ecommerce', 'get', metadata);
    };
    SDK.prototype.appEcommUpdateSettings = function (body, metadata) {
        return this.core.fetch('/site/{site_name}/ecommerce', 'patch', body, metadata);
    };
    /**
     * Publish the site-wide code to the live version of the website, without republishing the
     * entire website.
     *
     * @summary Publish
     */
    SDK.prototype.appPublishSiteWide = function (metadata) {
        return this.core.fetch('/site/{site_name}/sitewidehtml/{uuid}/publish', 'post', metadata);
    };
    /**
     * Get catalog product variation by id
     *
     * @summary Get Product Variation
     * @throws FetchError<400, types.AppGetProductVariationResponse400> 400
     */
    SDK.prototype.appGetProductVariation = function (metadata) {
        return this.core.fetch('/sites/multiscreen/{site_name}/ecommerce/products/{product_id}/variations/{variation_id}', 'get', metadata);
    };
    SDK.prototype.appUpdateProductVariation = function (body, metadata) {
        return this.core.fetch('/sites/multiscreen/{site_name}/ecommerce/products/{product_id}/variations/{variation_id}', 'patch', body, metadata);
    };
    /**
     * List Shipping Providers
     *
     * @throws FetchError<400, types.AppListShippingProvidersResponse400> 400
     * @throws FetchError<401, types.AppListShippingProvidersResponse401> 401
     * @throws FetchError<403, types.AppListShippingProvidersResponse403> 403
     * @throws FetchError<404, types.AppListShippingProvidersResponse404> 404
     */
    SDK.prototype.appListShippingProviders = function (metadata) {
        return this.core.fetch('/site/{site_name}/ecommerce/shipping-providers', 'get', metadata);
    };
    /**
     * Create Shipping Provider
     *
     * @throws FetchError<400, types.AppCreateShippingProviderResponse400> 400
     * @throws FetchError<401, types.AppCreateShippingProviderResponse401> 401
     * @throws FetchError<403, types.AppCreateShippingProviderResponse403> 403
     * @throws FetchError<404, types.AppCreateShippingProviderResponse404> 404
     */
    SDK.prototype.appCreateShippingProvider = function (body, metadata) {
        return this.core.fetch('/site/{site_name}/ecommerce/shipping-providers', 'post', body, metadata);
    };
    /**
     * Get Shipping Provider
     *
     * @throws FetchError<400, types.AppGetShippingProviderResponse400> 400
     * @throws FetchError<401, types.AppGetShippingProviderResponse401> 401
     * @throws FetchError<403, types.AppGetShippingProviderResponse403> 403
     * @throws FetchError<404, types.AppGetShippingProviderResponse404> 404
     */
    SDK.prototype.appGetShippingProvider = function (metadata) {
        return this.core.fetch('/site/{site_name}/ecommerce/shipping-providers/{id}', 'get', metadata);
    };
    SDK.prototype.appUpdateShippingProvider = function (body, metadata) {
        return this.core.fetch('/site/{site_name}/ecommerce/shipping-providers/{id}', 'patch', body, metadata);
    };
    /**
     * Delete Shipping Provider
     *
     * @throws FetchError<400, types.AppDeleteShippingProviderResponse400> 400
     * @throws FetchError<401, types.AppDeleteShippingProviderResponse401> 401
     * @throws FetchError<403, types.AppDeleteShippingProviderResponse403> 403
     * @throws FetchError<404, types.AppDeleteShippingProviderResponse404> 404
     */
    SDK.prototype.appDeleteShippingProvider = function (metadata) {
        return this.core.fetch('/site/{site_name}/ecommerce/shipping-providers/{id}', 'delete', metadata);
    };
    /**
     * Get Members
     *
     * @throws FetchError<400, types.AppGetMembersResponse400> 400
     */
    SDK.prototype.appGetMembers = function (metadata) {
        return this.core.fetch('/sites/{site_name}/membership/members', 'get', metadata);
    };
    /**
     * Get Member by Id
     *
     * @throws FetchError<400, types.AppGetMemberByIdResponse400> 400
     */
    SDK.prototype.appGetMemberById = function (metadata) {
        return this.core.fetch('/sites/{site_name}/membership/members/{id}', 'get', metadata);
    };
    SDK.prototype.appUpdateMember = function (body, metadata) {
        return this.core.fetch('/sites/{site_name}/membership/members/{id}', 'patch', body, metadata);
    };
    /**
     * Delete Members
     *
     * @throws FetchError<400, types.AppDeleteMembersResponse400> 400
     */
    SDK.prototype.appDeleteMembers = function (metadata) {
        return this.core.fetch('/sites/{site_name}/membership/members/{id}', 'post', metadata);
    };
    /**
     * Member Password Reset
     *
     * @throws FetchError<400, types.AppMemberPasswordResetResponse400> 400
     */
    SDK.prototype.appMemberPasswordReset = function (metadata) {
        return this.core.fetch('/sites/{site_name}/membership/members/{id}/change-password', 'post', metadata);
    };
    /**
     * Get Membership Invitations
     *
     * @throws FetchError<400, types.AppGetMembershipInvitationsResponse400> 400
     */
    SDK.prototype.appGetMembershipInvitations = function (metadata) {
        return this.core.fetch('/sites/{site_name}/membership/invitations', 'get', metadata);
    };
    SDK.prototype.appCreateMembershipInvitation = function (body, metadata) {
        return this.core.fetch('/sites/{site_name}/membership/invitations', 'post', body, metadata);
    };
    SDK.prototype.appCreateBatchMembershipInvitations = function (body, metadata) {
        return this.core.fetch('/sites/{site_name}/membership/invitations/batch', 'post', body, metadata);
    };
    /**
     * Delete Membership Invitation
     *
     * @throws FetchError<400, types.AppDeleteMembershipInvitationResponse400> 400
     */
    SDK.prototype.appDeleteMembershipInvitation = function (metadata) {
        return this.core.fetch('/sites/{site_name}/membership/invitations/{id}', 'delete', metadata);
    };
    /**
     * Get Groups
     *
     * @throws FetchError<400, types.AppGetGroupsResponse400> 400
     */
    SDK.prototype.appGetGroups = function (metadata) {
        return this.core.fetch('/sites/{site_name}/membership/groups', 'get', metadata);
    };
    SDK.prototype.appCreateMembershipGroup = function (body, metadata) {
        return this.core.fetch('/sites/{site_name}/membership/groups', 'post', body, metadata);
    };
    /**
     * Get Membership Group
     *
     * @throws FetchError<400, types.AppGetMembershipGroupResponse400> 400
     */
    SDK.prototype.appGetMembershipGroup = function (metadata) {
        return this.core.fetch('/sites/{site_name}/membership/groups/{id}', 'get', metadata);
    };
    SDK.prototype.appUpdateMembershipGroup = function (body, metadata) {
        return this.core.fetch('/sites/{site_name}/membership/groups/{id}', 'patch', body, metadata);
    };
    /**
     * Delete Membership Group
     *
     * @throws FetchError<400, types.AppDeleteMembershipGroupResponse400> 400
     */
    SDK.prototype.appDeleteMembershipGroup = function (metadata) {
        return this.core.fetch('/sites/{site_name}/membership/groups/{id}', 'delete', metadata);
    };
    /**
     * Understand the features and limits that exist in a store. Today, this is limited to
     * product level limits, but in the future, there will be more features.
     *
     * @summary Get Store
     * @throws FetchError<400, types.AppGetStoreResponse400> 400
     */
    SDK.prototype.appGetStore = function (metadata) {
        return this.core.fetch('/site/multiscreen/{site_name}/ecommerce/store', 'get', metadata);
    };
    return SDK;
}());
var createSDK = (function () { return new SDK(); })();
module.exports = createSDK;
