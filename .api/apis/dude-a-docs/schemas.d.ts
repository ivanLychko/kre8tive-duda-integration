declare const AppConfirmPayment: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly session_id: {
                readonly type: "string";
                readonly description: "The unique Session ID being confirmed/saved.";
            };
            readonly state: {
                readonly type: "string";
                readonly enum: readonly ["PROCESSED", "PENDING", "FAILED"];
            };
            readonly links: {
                readonly type: "object";
                readonly properties: {};
            };
            readonly transaction_id: {
                readonly type: "string";
                readonly description: "Required only if state is PROCESSED. Unique identifier from your payment gateway to assign to the order";
            };
            readonly instructions: {
                readonly type: "string";
                readonly description: "Optionally define if state is PROCESSED. Information text diplayed in the checkout confirmation screen";
            };
            readonly icon: {
                readonly type: "string";
                readonly description: "URL to the icon representing the payment gateway.";
            };
            readonly error: {
                readonly type: "object";
                readonly description: "If the state is failed, then you can also pass detailed error messages to help the merchant understand why the payment failed.";
                readonly properties: {};
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Unique site for which the payment is taking place.";
                };
                readonly session_id: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The payment session ID being confirmed";
                };
            };
            readonly required: readonly ["site_name", "session_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const AppCreateAccessToken: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly refreshToken: {
                readonly type: "string";
                readonly description: "A refresh token you received when the App was installed.";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly app_uuid: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "UUID of the App";
                };
            };
            readonly required: readonly ["app_uuid"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly authorization: {
                    readonly type: "string";
                    readonly default: "Basic ZXhhbXBsZVVzZXI6bmljZXRyeQ==";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Your App Account's username and password, base64'd.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly authorization_code: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly expiration_date: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly refresh_token: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const AppCreateBatchMembershipInvitations: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly invitations: {
                readonly type: "array";
                readonly description: "List of invitations to create";
                readonly items: {
                    readonly properties: {
                        readonly email: {
                            readonly type: "string";
                            readonly description: "Email of the user to invite to the site. This email will be notified about the invitation to join the site. User should log in to the site with this email to be added to the groups.";
                        };
                        readonly groups: {
                            readonly type: "array";
                            readonly description: "Groups ids, to which the user will be added after logging in.";
                            readonly items: {
                                readonly properties: {
                                    readonly id: {
                                        readonly type: "string";
                                        readonly description: "The unique identifier of the member group.";
                                    };
                                };
                                readonly type: "object";
                            };
                        };
                    };
                    readonly type: "object";
                };
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The unique identifier of the target site.";
                };
            };
            readonly required: readonly ["site_name"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "Basic {base64User:Pass}";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly "x-duda-access-token": {
                    readonly type: "string";
                    readonly default: "Bearer {access_token}";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly invitations: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly created: {
                                readonly type: "string";
                                readonly examples: readonly ["2024-08-01T00:00:00Z"];
                            };
                            readonly email: {
                                readonly type: "string";
                                readonly examples: readonly ["user-email@example.com"];
                            };
                            readonly groups: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly id: {
                                            readonly type: "string";
                                            readonly examples: readonly ["15f4b3b4e-4b3b-4b3b-4b3b-4b3b4e4b3b4e"];
                                        };
                                        readonly name: {
                                            readonly type: "string";
                                            readonly examples: readonly ["Premium users"];
                                        };
                                    };
                                };
                            };
                            readonly id: {
                                readonly type: "string";
                                readonly examples: readonly ["5f4b3b4e-4b3b-4b3b-4b3b-4b3b4e4b3b4e"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const AppCreateMembershipGroup: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly name: {
                readonly type: "string";
                readonly description: "The name of the group.";
            };
            readonly pages: {
                readonly type: "array";
                readonly description: "The list of page uuids to be protected by this group.";
                readonly items: {
                    readonly type: "string";
                };
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The unique identifier of the target site.";
                };
            };
            readonly required: readonly ["site_name"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "Basic {base64User:Pass}";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly "x-duda-access-token": {
                    readonly type: "string";
                    readonly default: "Bearer {access_token}";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["90f33a1b-27bb-4020-9f7d-99d6026547f0"];
                };
                readonly name: {
                    readonly type: "string";
                    readonly examples: readonly ["Premium site members"];
                };
                readonly pages: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly examples: readonly ["7b31a091a92049bba02315a3c718ecb1"];
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const AppCreateMembershipInvitation: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly email: {
                readonly type: "string";
                readonly description: "Email of the user to invite to the site. This email will be notified about the invitation to join the site. User should log in to the site with this email to be added to the groups.";
            };
            readonly groups: {
                readonly type: "array";
                readonly description: "Groups ids, to which the user will be added after logging in.";
                readonly items: {
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly description: "The unique identifier of the member group.";
                        };
                    };
                    readonly type: "object";
                };
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The unique identifier of the target site.";
                };
            };
            readonly required: readonly ["site_name"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "Basic {base64User:Pass}";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly "x-duda-access-token": {
                    readonly type: "string";
                    readonly default: "Bearer {access_token}";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["90f33a1b-27bb-4020-9f7d-99d6026547f0"];
                };
                readonly name: {
                    readonly type: "string";
                    readonly examples: readonly ["Premium site members"];
                };
                readonly pages: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly examples: readonly ["7b31a091a92049bba02315a3c718ecb1"];
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const AppCreatePaymentGateway: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly live_payment_methods_url: {
                readonly type: "string";
                readonly description: "URL where we will send a request to get availalbe payment methods for the customer.";
            };
            readonly test_payment_methods_url: {
                readonly type: "string";
                readonly description: "URL where we will send a request to get availalbe payment methods for the customer, for test orders.";
            };
            readonly name: {
                readonly type: "string";
            };
            readonly description: {
                readonly type: "string";
            };
            readonly image: {
                readonly type: "string";
            };
            readonly icons: {
                readonly type: "array";
                readonly items: {
                    readonly type: "string";
                };
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The unique identifier for the target Site.";
                };
            };
            readonly required: readonly ["site_name"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "x-duda-access-token": {
                    readonly type: "string";
                    readonly default: "Bearer tefDCCAKciewk6FLmMjfC0cg1d4";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The specific access token to access this site API.";
                };
                readonly authorization: {
                    readonly type: "string";
                    readonly default: "Basic cnVzc1dhczpoZXJlIQ==";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Your App Account's username and password, base64'd.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly live_payment_methods_url: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly test_payment_methods_url: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly name: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly description: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly image: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly icons: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly examples: readonly ["string"];
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const AppCreateProduct: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["name"];
        readonly properties: {
            readonly name: {
                readonly type: "string";
                readonly description: "Name of the product.";
            };
            readonly sku: {
                readonly type: "string";
                readonly description: "Stock Keeping Unit. A unique ID that identifies the product in your inventory.";
            };
            readonly description: {
                readonly type: "string";
                readonly description: "A description of the product which gets displayed on the product page. Can be HTML format.";
            };
            readonly images: {
                readonly type: "array";
                readonly description: "Product Images. First image in array is primary.";
                readonly items: {
                    readonly properties: {
                        readonly alt: {
                            readonly type: "string";
                            readonly description: "Alt text for the image";
                        };
                        readonly url: {
                            readonly type: "string";
                            readonly description: "A URL directly to where the image is. Should be publically available.";
                        };
                    };
                    readonly type: "object";
                };
            };
            readonly seo: {
                readonly type: "object";
                readonly description: "SEO settings for the product.";
                readonly properties: {
                    readonly title: {
                        readonly type: "string";
                        readonly description: "Title of the prodcut page.";
                    };
                    readonly product_url: {
                        readonly type: "string";
                        readonly description: "The slug/path to the product.";
                    };
                    readonly description: {
                        readonly type: "string";
                        readonly description: "The meta description applied to the product.";
                    };
                };
            };
            readonly prices: {
                readonly type: "array";
                readonly description: "Product Prices. Today, we only support a single currency per product. We will extend this in the future.";
                readonly items: {
                    readonly properties: {
                        readonly compare_at_price: {
                            readonly type: "string";
                            readonly description: "The price at which the product is compared to.";
                        };
                        readonly price: {
                            readonly type: "string";
                            readonly description: "Price of the product.";
                        };
                        readonly currency: {
                            readonly type: "string";
                            readonly description: "The currency of the product.";
                            readonly enum: readonly ["USD", "CAD"];
                        };
                    };
                    readonly type: "object";
                };
            };
            readonly status: {
                readonly type: "string";
                readonly description: "If the product is available on the store.";
                readonly enum: readonly ["ACTIVE", "DRAFT"];
            };
            readonly options: {
                readonly type: "array";
                readonly description: "List of options and values to chose from, will be used to create the product variations";
                readonly items: {
                    readonly properties: {
                        readonly name: {
                            readonly type: "string";
                            readonly description: "Displayed option name";
                        };
                        readonly choices: {
                            readonly type: "array";
                            readonly description: "Values available for the given option";
                            readonly default: readonly [];
                            readonly items: {
                                readonly type: "string";
                            };
                        };
                    };
                    readonly required: readonly ["name", "choices"];
                    readonly type: "object";
                };
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The unique identifier for the target Site.";
                };
            };
            readonly required: readonly ["site_name"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "x-duda-access-token": {
                    readonly type: "string";
                    readonly default: "Bearer tefDCCAKciewk6FLmMjfC0cg1d4";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "This sites specific access token.";
                };
                readonly authorization: {
                    readonly type: "string";
                    readonly default: "Basic ZXhhbXBsZVVzZXI6bmljZXRyeQ==";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Your App Account's username and password, base64'd.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly description: {
                    readonly type: "string";
                    readonly examples: readonly ["The most amazing t shirt ever sold"];
                };
                readonly external_id: {
                    readonly type: "string";
                    readonly examples: readonly ["KTP9XGbSg2"];
                };
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["IakdKbiUiK"];
                };
                readonly images: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly alt: {
                                readonly type: "string";
                                readonly examples: readonly ["Image of fancy shirt"];
                            };
                            readonly url: {
                                readonly type: "string";
                                readonly examples: readonly ["https://images.pexels.com/photos/1020585/pexels-photo-1020585.jpeg"];
                            };
                        };
                    };
                };
                readonly name: {
                    readonly type: "string";
                    readonly examples: readonly ["Amazing T-shirt"];
                };
                readonly options: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly choices: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly id: {
                                            readonly type: "string";
                                            readonly examples: readonly ["db3je27rg7"];
                                        };
                                        readonly value: {
                                            readonly type: "string";
                                            readonly examples: readonly ["45"];
                                        };
                                    };
                                };
                            };
                            readonly id: {
                                readonly type: "string";
                                readonly examples: readonly ["WMd1xylGrp"];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly examples: readonly ["Shirt size"];
                            };
                        };
                    };
                };
                readonly prices: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly compare_at_price: {
                                readonly type: "string";
                                readonly examples: readonly ["19.99"];
                            };
                            readonly currency: {
                                readonly type: "string";
                                readonly examples: readonly ["USD"];
                            };
                            readonly price: {
                                readonly type: "string";
                                readonly examples: readonly ["12.34"];
                            };
                        };
                    };
                };
                readonly seo: {
                    readonly type: "object";
                    readonly properties: {
                        readonly description: {
                            readonly type: "string";
                            readonly examples: readonly ["Amazing T-shirt made with 100% biologic cotton"];
                        };
                        readonly product_url: {
                            readonly type: "string";
                            readonly examples: readonly ["amazing-t-shirt"];
                        };
                        readonly title: {
                            readonly type: "string";
                            readonly examples: readonly ["Amazing T-shirt"];
                        };
                    };
                };
                readonly sku: {
                    readonly type: "string";
                    readonly examples: readonly ["UGG-BB-PUR-06"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["ACTIVE"];
                };
                readonly variations: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly external_id: {
                                readonly type: "string";
                                readonly examples: readonly ["KTP9XGbSg2"];
                            };
                            readonly id: {
                                readonly type: "string";
                                readonly examples: readonly ["KTP9XGbSg2"];
                            };
                            readonly images: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly alt: {
                                            readonly type: "string";
                                            readonly examples: readonly ["Image of fancy shirt"];
                                        };
                                        readonly url: {
                                            readonly type: "string";
                                            readonly examples: readonly ["https://images.pexels.com/photos/1020585/pexels-photo-1020585.jpeg"];
                                        };
                                    };
                                };
                            };
                            readonly options: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly choice_id: {
                                            readonly type: "string";
                                            readonly examples: readonly ["db3je27rg7"];
                                        };
                                        readonly choice_value: {
                                            readonly type: "string";
                                            readonly examples: readonly ["45"];
                                        };
                                        readonly option_id: {
                                            readonly type: "string";
                                            readonly examples: readonly ["WMd1xylGrp"];
                                        };
                                        readonly option_name: {
                                            readonly type: "string";
                                            readonly examples: readonly ["Shirt size"];
                                        };
                                    };
                                };
                            };
                            readonly price_difference: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                            readonly quantity: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [25];
                            };
                            readonly sku: {
                                readonly type: "string";
                                readonly examples: readonly ["UGG-BB-PUR-06"];
                            };
                            readonly status: {
                                readonly type: "string";
                                readonly examples: readonly ["ACTIVE"];
                            };
                            readonly stock_status: {
                                readonly type: "string";
                                readonly examples: readonly ["IN_STOCK, OUT_OF_STOCK"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const AppCreateShippingProvider: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["live_shipping_rates_url"];
        readonly properties: {
            readonly live_shipping_rates_url: {
                readonly type: "string";
            };
            readonly test_shipping_rates_url: {
                readonly type: "string";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The unique identifier for the target Site.";
                };
            };
            readonly required: readonly ["site_name"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "Basic {base64User:Pass}";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly "x-duda-access-token": {
                    readonly type: "string";
                    readonly default: "Bearer {access_token}";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "201": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly live_shipping_methods_url: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly test_shipping_methods_url: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly title: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly status: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly detail: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly instance: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp1: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp2: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp3: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly title: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly status: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly detail: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly instance: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp1: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp2: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp3: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly title: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly status: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly detail: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly instance: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp1: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp2: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp3: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly title: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly status: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly detail: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly instance: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp1: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp2: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp3: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const AppCreateSiteWideHtml: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly location: {
                readonly type: "string";
                readonly description: "Location of where the code will be added in the website.\n\nDefault: `CONTENT_END`";
                readonly default: "CONTENT_END";
                readonly enum: readonly ["BODY", "HEAD", "CONTENT_END", "BEFORE_SCRIPTS"];
            };
            readonly markup: {
                readonly type: "string";
                readonly description: "The raw HTML you want to embed into the site.";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly ["site_name"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "x-duda-access-token": {
                    readonly type: "string";
                    readonly default: "Bearer tefDCCAKciewk6FLmMjfC0cg1d4";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The specific access token to access this site API.";
                };
                readonly authorization: {
                    readonly type: "string";
                    readonly default: "Basic ZXhhbXBsZVVzZXI6bmljZXRyeQ==";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Your App Account's username and password, base64'd.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly location: {
                    readonly type: "string";
                    readonly examples: readonly ["BODY"];
                };
                readonly markup: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly uuid: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const AppDeleteMembers: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The unique identifier of the target site.";
                };
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The unique identifier of the member.";
                };
            };
            readonly required: readonly ["site_name", "id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "Basic {base64User:Pass}";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly "x-duda-access-token": {
                    readonly type: "string";
                    readonly default: "Bearer {access_token}";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "204": {
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const AppDeleteMembershipGroup: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The unique identifier of the target site.";
                };
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The unique identifier of the target group.";
                };
            };
            readonly required: readonly ["site_name", "id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "Basic {base64User:Pass}";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly "x-duda-access-token": {
                    readonly type: "string";
                    readonly default: "Bearer {access_token}";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "204": {
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const AppDeleteMembershipInvitation: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The unique identifier of the target site.";
                };
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The unique identifier of the member.";
                };
            };
            readonly required: readonly ["site_name", "id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "Basic {base64User:Pass}";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly "x-duda-access-token": {
                    readonly type: "string";
                    readonly default: "Bearer {access_token}";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "204": {
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const AppDeletePaymentGateway: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly live_payment_methods_url: {
                readonly type: "string";
                readonly description: "URL where we will send a request to get availalbe payment methods for the customer.";
            };
            readonly test_payment_methods_url: {
                readonly type: "string";
                readonly description: "URL where we will send a request to get availalbe payment methods for the customer, for test orders.";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The unique identifier for the target Site.";
                };
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The ID of the existing payment gateway.";
                };
            };
            readonly required: readonly ["site_name", "id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "x-duda-access-token": {
                    readonly type: "string";
                    readonly default: "Bearer tefDCCAKciewk6FLmMjfC0cg1d4";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The specific access token to access this site API.";
                };
                readonly authorization: {
                    readonly type: "string";
                    readonly default: "Basic cnVzc1dhczpoZXJlIQ==";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Your App Account's username and password, base64'd.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const AppDeleteProduct: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["name"];
        readonly properties: {
            readonly name: {
                readonly type: "string";
                readonly description: "Name of the product.";
            };
            readonly sku: {
                readonly type: "string";
                readonly description: "Stock Keeping Unit. A unique ID that identifies the product in your inventory.";
            };
            readonly description: {
                readonly type: "string";
                readonly description: "A description of the product which gets displayed on the product page. Can be HTML format.";
            };
            readonly images: {
                readonly type: "array";
                readonly description: "Product Images. First image in array is primary.";
                readonly items: {
                    readonly properties: {
                        readonly alt: {
                            readonly type: "string";
                            readonly description: "Alt text for the image";
                        };
                        readonly url: {
                            readonly type: "string";
                            readonly description: "A URL directly to where the image is. Should be publically available.";
                        };
                    };
                    readonly type: "object";
                };
            };
            readonly seo: {
                readonly type: "object";
                readonly description: "SEO settings for the product.";
                readonly properties: {
                    readonly title: {
                        readonly type: "string";
                        readonly description: "Title of the prodcut page.";
                    };
                    readonly product_url: {
                        readonly type: "string";
                        readonly description: "The slug/path to the product.";
                    };
                    readonly description: {
                        readonly type: "string";
                        readonly description: "The meta description applied to the product.";
                    };
                };
            };
            readonly prices: {
                readonly type: "array";
                readonly description: "Product Prices. Today, we only support a single currency per product. We will extend this in the future.";
                readonly items: {
                    readonly properties: {
                        readonly compare_at_price: {
                            readonly type: "string";
                            readonly description: "The price at which the product is compared to.";
                        };
                        readonly price: {
                            readonly type: "string";
                            readonly description: "Price of the product.";
                        };
                        readonly currency: {
                            readonly type: "string";
                            readonly description: "The currency of the product.";
                            readonly enum: readonly ["USD", "CAD"];
                        };
                    };
                    readonly type: "object";
                };
            };
            readonly status: {
                readonly type: "string";
                readonly description: "If the product is available on the store.";
                readonly enum: readonly ["ACTIVE", "DRAFT"];
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The unique identifier for the target Site.";
                };
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Existing product ID you want to update.";
                };
            };
            readonly required: readonly ["site_name", "id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "x-duda-access-token": {
                    readonly type: "string";
                    readonly default: "Bearer tefDCCAKciewk6FLmMjfC0cg1d4";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "This sites specific access token.";
                };
                readonly authorization: {
                    readonly type: "string";
                    readonly default: "Basic ZXhhbXBsZVVzZXI6bmljZXRyeQ==";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Your App Account's username and password, base64'd.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly description: {
                    readonly type: "string";
                    readonly examples: readonly ["The most amazing t shirt ever sold"];
                };
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["IakdKbiUiK"];
                };
                readonly images: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly alt: {
                                readonly type: "string";
                                readonly examples: readonly ["Image of fancy shirt"];
                            };
                            readonly url: {
                                readonly type: "string";
                                readonly examples: readonly ["https://images.pexels.com/photos/1020585/pexels-photo-1020585.jpeg"];
                            };
                        };
                    };
                };
                readonly name: {
                    readonly type: "string";
                    readonly examples: readonly ["Amazing T-shirt"];
                };
                readonly prices: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly compare_at_price: {
                                readonly type: "number";
                                readonly default: 0;
                                readonly examples: readonly [19.99];
                            };
                            readonly currency: {
                                readonly type: "string";
                                readonly examples: readonly ["USD"];
                            };
                            readonly price: {
                                readonly type: "number";
                                readonly default: 0;
                                readonly examples: readonly [12.34];
                            };
                        };
                    };
                };
                readonly seo: {
                    readonly type: "object";
                    readonly properties: {
                        readonly description: {
                            readonly type: "string";
                            readonly examples: readonly ["Amazing T-shirt made with 100% biologic cotton"];
                        };
                        readonly product_url: {
                            readonly type: "string";
                            readonly examples: readonly ["amazing-t-shirt"];
                        };
                        readonly title: {
                            readonly type: "string";
                            readonly examples: readonly ["Amazing T-shirt"];
                        };
                    };
                };
                readonly sku: {
                    readonly type: "string";
                    readonly examples: readonly ["UGG-BB-PUR-06"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["ACTIVE"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const AppDeleteShippingProvider: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The unique identifier for the target Site.";
                };
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The unique identifier for the target Shipping Rate.";
                };
            };
            readonly required: readonly ["site_name", "id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "Basic {base64User:Pass}";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly "x-duda-access-token": {
                    readonly type: "string";
                    readonly default: "Bearer {access_token}";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "204": {
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly title: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly status: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly detail: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly instance: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp1: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp2: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp3: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly title: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly status: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly detail: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly instance: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp1: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp2: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp3: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly title: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly status: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly detail: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly instance: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp1: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp2: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp3: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly title: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly status: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly detail: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly instance: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp1: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp2: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp3: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const AppDeleteSwh: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly uuid: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "An already existing site wide HTML UUID.";
                };
            };
            readonly required: readonly ["site_name", "uuid"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "x-duda-access-token": {
                    readonly type: "string";
                    readonly default: "Bearer tefDCCAKciewk6FLmMjfC0cg1d4";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The specific access token to access this site API.";
                };
                readonly authorization: {
                    readonly type: "string";
                    readonly default: "Basic ZXhhbXBsZVVzZXI6bmljZXRyeQ==";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Your App Account's username and password, base64'd.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const AppEcommUpdateSettings: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly default_currency: {
                readonly type: "string";
            };
            readonly business_name: {
                readonly type: "string";
            };
            readonly business_address: {
                readonly type: "object";
                readonly properties: {};
            };
            readonly time_zone: {
                readonly type: "string";
            };
            readonly enabled_countries: {
                readonly type: "array";
                readonly items: {
                    readonly type: "string";
                };
            };
            readonly send_email_notifications: {
                readonly type: "boolean";
            };
            readonly cart_settings: {
                readonly type: "object";
                readonly properties: {};
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The unique identifier for the target Site.";
                };
            };
            readonly required: readonly ["site_name"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "Basic ${user:passBase64}";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly "x-duda-access-token": {
                    readonly type: "string";
                    readonly default: "Bearer ${access_token}";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly default_currency: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly business_name: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly business_address: {
                    readonly type: "object";
                    readonly properties: {
                        readonly name: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly address_1: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly address_2: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly city: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly region: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly sub_locality: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly country: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly postal_code: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                    };
                };
                readonly time_zone: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly enabled_countries: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly examples: readonly ["string"];
                    };
                };
                readonly send_email_notifications: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [true];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly title: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly status: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly detail: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly instance: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp1: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp2: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp3: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly title: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly status: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly detail: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly instance: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp1: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp2: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp3: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly title: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly status: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly detail: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly instance: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp1: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp2: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp3: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly title: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly status: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly detail: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly instance: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp1: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp2: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp3: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const AppEcommerceCreateProductOption: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["name", "choices"];
        readonly properties: {
            readonly name: {
                readonly type: "string";
                readonly description: "Name of the option";
            };
            readonly choices: {
                readonly type: "array";
                readonly description: "List of possible values for the option";
                readonly items: {
                    readonly type: "string";
                };
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The unique identifier for the target site.";
                };
            };
            readonly required: readonly ["site_name"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "x-duda-access-token": {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The specific access token to access this site API.";
                };
            };
            readonly required: readonly ["x-duda-access-token"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly choices: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly examples: readonly ["db3je27rg7"];
                            };
                            readonly value: {
                                readonly type: "string";
                                readonly examples: readonly ["45"];
                            };
                        };
                    };
                };
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["WMd1xylGrp"];
                };
                readonly name: {
                    readonly type: "string";
                    readonly examples: readonly ["Shirt size"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const AppEcommerceCreateProductOptionChoice: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["value"];
        readonly properties: {
            readonly value: {
                readonly type: "string";
                readonly description: "The value of the new option choice";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The unique identifier for the target site";
                };
                readonly option_id: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The unique identifier for the target option";
                };
            };
            readonly required: readonly ["site_name", "option_id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "x-duda-access-token": {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The specific access token to access this site API.";
                };
            };
            readonly required: readonly ["x-duda-access-token"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly choices: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly examples: readonly ["db3je27rg7"];
                            };
                            readonly value: {
                                readonly type: "string";
                                readonly examples: readonly ["45"];
                            };
                        };
                    };
                };
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["WMd1xylGrp"];
                };
                readonly name: {
                    readonly type: "string";
                    readonly examples: readonly ["Shirt size"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const AppEcommerceDeleteProductOption: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The unique identifier for the target site";
                };
                readonly option_id: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The unique identifier for the target option";
                };
            };
            readonly required: readonly ["site_name", "option_id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "x-duda-access-token": {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The specific access token to access this site API.";
                };
            };
            readonly required: readonly ["x-duda-access-token"];
        }];
    };
    readonly response: {
        readonly "204": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const AppEcommerceDeleteProductOptionChoice: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The unique identifier for the target site";
                };
                readonly option_id: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The unique identifier for the target option";
                };
                readonly choice_id: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The unique identifier for the target choice";
                };
            };
            readonly required: readonly ["site_name", "option_id", "choice_id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "x-duda-access-token": {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The specific access token to access this site API.";
                };
            };
            readonly required: readonly ["x-duda-access-token"];
        }];
    };
    readonly response: {
        readonly "204": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const AppEcommerceGetProductOption: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Unique identifier for the target site";
                };
                readonly option_id: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Unique identifier for the target option";
                };
            };
            readonly required: readonly ["site_name", "option_id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "x-duda-access-token": {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The specific access token to access this site API.";
                };
            };
            readonly required: readonly ["x-duda-access-token"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly choices: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly examples: readonly ["db3je27rg7"];
                            };
                            readonly value: {
                                readonly type: "string";
                                readonly examples: readonly ["45"];
                            };
                        };
                    };
                };
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["WMd1xylGrp"];
                };
                readonly name: {
                    readonly type: "string";
                    readonly examples: readonly ["Shirt size"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const AppEcommerceListProductOptions: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The unique identifier for the target site.";
                };
            };
            readonly required: readonly ["site_name"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly offset: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly default: 0;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Zero-based offset for elements (0..N)";
                };
                readonly limit: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly default: 20;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The size of the page to be returned";
                };
                readonly sort: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Property on which to sort results";
                };
                readonly direction: {
                    readonly type: "string";
                    readonly default: "asc";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "[asc,desc] Order direction for the property specified in sort.";
                };
            };
            readonly required: readonly [];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "x-duda-access-token": {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The specific access token to access this site API.";
                };
            };
            readonly required: readonly ["x-duda-access-token"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly limit: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly offset: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly results: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly choices: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly id: {
                                            readonly type: "string";
                                            readonly examples: readonly ["db3je27rg7"];
                                        };
                                        readonly value: {
                                            readonly type: "string";
                                            readonly examples: readonly ["45"];
                                        };
                                    };
                                };
                            };
                            readonly id: {
                                readonly type: "string";
                                readonly examples: readonly ["WMd1xylGrp"];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly examples: readonly ["Shirt size"];
                            };
                        };
                    };
                };
                readonly site_name: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly total_responses: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const AppEcommerceUpdateProductOption: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["name"];
        readonly properties: {
            readonly name: {
                readonly type: "string";
                readonly description: "Name of the option";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The unique identifier for the target site";
                };
                readonly option_id: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The unique identifier for the target option";
                };
            };
            readonly required: readonly ["site_name", "option_id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "x-duda-access-token": {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The specific access token to access this site API.";
                };
            };
            readonly required: readonly ["x-duda-access-token"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly choices: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly examples: readonly ["db3je27rg7"];
                            };
                            readonly value: {
                                readonly type: "string";
                                readonly examples: readonly ["45"];
                            };
                        };
                    };
                };
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["WMd1xylGrp"];
                };
                readonly name: {
                    readonly type: "string";
                    readonly examples: readonly ["Shirt size"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const AppEcommerceUpdateProductOptionChoice: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["value"];
        readonly properties: {
            readonly value: {
                readonly type: "string";
                readonly description: "The updated value for the choice";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The unique identifier for the target site";
                };
                readonly option_id: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The unique identifier for the target option";
                };
                readonly choice_id: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The unique identifier for the target choice";
                };
            };
            readonly required: readonly ["site_name", "option_id", "choice_id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "x-duda-access-token": {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The specific access token to access this site API.";
                };
            };
            readonly required: readonly ["x-duda-access-token"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly choices: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly examples: readonly ["db3je27rg7"];
                            };
                            readonly value: {
                                readonly type: "string";
                                readonly examples: readonly ["45"];
                            };
                        };
                    };
                };
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["WMd1xylGrp"];
                };
                readonly name: {
                    readonly type: "string";
                    readonly examples: readonly ["Shirt size"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const AppGetAccountBranding: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly ["site_name"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "x-duda-access-token": {
                    readonly type: "string";
                    readonly default: "Bearer tefDCCAKciewk6FLmMjfC0cg1d4";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The specific access token to access this site API.";
                };
                readonly authorization: {
                    readonly type: "string";
                    readonly default: "Basic ZXhhbXBsZVVzZXI6bmljZXRyeQ==";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Your App Account's username and password, based64'd.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly logo: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly color: {
                    readonly type: "object";
                    readonly properties: {
                        readonly links: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly button_background: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly button_text: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly text_on_light: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly text_on_dark: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly header_background: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly preview_background: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                    };
                };
                readonly preview_background_image: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly dashboard_domain: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const AppGetCart: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The unique identifier for the target site.";
                };
                readonly cart_id: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The unique identifier for the target site.";
                };
            };
            readonly required: readonly ["site_name", "cart_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["e40b1abb-af80-4a4e-b6f0-4746c0e8a90a"];
                };
                readonly mode: {
                    readonly type: "string";
                    readonly examples: readonly ["LIVE"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["IN_PROGRESS"];
                };
                readonly language: {
                    readonly type: "string";
                    readonly examples: readonly ["en"];
                };
                readonly email: {
                    readonly type: "string";
                    readonly examples: readonly ["john.doe@example.org"];
                };
                readonly currency: {
                    readonly type: "string";
                    readonly examples: readonly ["USD"];
                };
                readonly items: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly examples: readonly ["e40b1abb-af80-4a4e-b6f0-4746c0e8a90a"];
                            };
                            readonly added: {
                                readonly type: "string";
                                readonly examples: readonly ["2023-02-01T18:24:26.700Z"];
                            };
                            readonly product_id: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                            readonly variation_id: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                            readonly external_product_id: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                            readonly external_variation_id: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly examples: readonly ["My product name"];
                            };
                            readonly image: {
                                readonly type: "string";
                                readonly examples: readonly ["https://example.org/image.jpg"];
                            };
                            readonly options: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly name: {
                                            readonly type: "string";
                                            readonly examples: readonly ["Color"];
                                        };
                                        readonly value: {
                                            readonly type: "string";
                                            readonly examples: readonly ["Red"];
                                        };
                                    };
                                };
                            };
                            readonly shippable: {
                                readonly type: "boolean";
                                readonly default: true;
                                readonly examples: readonly [true];
                            };
                            readonly quantity: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [3];
                            };
                            readonly unit_price: {
                                readonly type: "number";
                                readonly default: 0;
                                readonly examples: readonly [25.35];
                            };
                            readonly unit_weight: {
                                readonly type: "number";
                                readonly default: 0;
                                readonly examples: readonly [20.16];
                            };
                            readonly unit_dimensions: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly height: {
                                        readonly type: "integer";
                                        readonly default: 0;
                                        readonly examples: readonly [20];
                                    };
                                    readonly width: {
                                        readonly type: "integer";
                                        readonly default: 0;
                                        readonly examples: readonly [30];
                                    };
                                    readonly length: {
                                        readonly type: "integer";
                                        readonly default: 0;
                                        readonly examples: readonly [30];
                                    };
                                };
                            };
                            readonly discounts: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly id: {
                                            readonly type: "string";
                                            readonly examples: readonly ["e40b1abb-af80-4a4e-b6f0-4746c0e8a90a"];
                                        };
                                        readonly name: {
                                            readonly type: "string";
                                            readonly examples: readonly ["My discount"];
                                        };
                                        readonly savings: {
                                            readonly type: "number";
                                            readonly default: 0;
                                            readonly examples: readonly [10.25];
                                        };
                                        readonly type: {
                                            readonly type: "string";
                                            readonly examples: readonly ["RATE"];
                                        };
                                    };
                                };
                            };
                            readonly taxes: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly name: {
                                            readonly type: "string";
                                            readonly examples: readonly ["Federal tax"];
                                        };
                                        readonly rate: {
                                            readonly type: "number";
                                            readonly default: 0;
                                            readonly examples: readonly [0.15];
                                        };
                                        readonly amount: {
                                            readonly type: "number";
                                            readonly default: 0;
                                            readonly examples: readonly [10.25];
                                        };
                                    };
                                };
                            };
                            readonly total: {
                                readonly type: "number";
                                readonly default: 0;
                                readonly examples: readonly [75.96];
                            };
                            readonly combined_weight: {
                                readonly type: "number";
                                readonly default: 0;
                                readonly examples: readonly [60.48];
                            };
                            readonly metadata: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                        };
                    };
                };
                readonly billing_address: {
                    readonly type: "object";
                    readonly properties: {
                        readonly first_name: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly last_name: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly full_name: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly address_1: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly address_2: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly street_number: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly street_name: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly city: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly sub_locality: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly region: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly country: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly postal_code: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly phone: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                    };
                };
                readonly shipping_address: {
                    readonly type: "object";
                    readonly properties: {
                        readonly first_name: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly last_name: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly full_name: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly address_1: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly address_2: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly street_number: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly street_name: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly city: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly sub_locality: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly region: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly country: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly postal_code: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly phone: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                    };
                };
                readonly shipping_method: {
                    readonly type: "object";
                    readonly properties: {
                        readonly name: {
                            readonly type: "string";
                            readonly examples: readonly ["Express shipping"];
                        };
                        readonly cost: {
                            readonly type: "number";
                            readonly default: 0;
                            readonly examples: readonly [12.45];
                        };
                    };
                };
                readonly shipping_instructions: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly discounts: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly examples: readonly ["e40b1abb-af80-4a4e-b6f0-4746c0e8a90a"];
                            };
                            readonly savings: {
                                readonly type: "number";
                                readonly default: 0;
                                readonly examples: readonly [42.36];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly examples: readonly ["15OFF"];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly examples: readonly ["RATE"];
                            };
                        };
                    };
                };
                readonly taxes: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly name: {
                                readonly type: "string";
                                readonly examples: readonly ["Federal tax"];
                            };
                            readonly amount: {
                                readonly type: "number";
                                readonly default: 0;
                                readonly examples: readonly [10.23];
                            };
                            readonly rate: {
                                readonly type: "number";
                                readonly default: 0;
                                readonly examples: readonly [0.15];
                            };
                        };
                    };
                };
                readonly subtotal: {
                    readonly type: "number";
                    readonly default: 0;
                    readonly examples: readonly [10.54];
                };
                readonly total: {
                    readonly type: "number";
                    readonly default: 0;
                    readonly examples: readonly [10.54];
                };
                readonly created: {
                    readonly type: "string";
                    readonly examples: readonly ["2023-02-01T18:24:26.700Z"];
                };
                readonly updated: {
                    readonly type: "string";
                    readonly examples: readonly ["2023-02-01T18:24:26.700Z"];
                };
                readonly user_agent: {
                    readonly type: "string";
                    readonly examples: readonly ["Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (HTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"];
                };
                readonly ip_address: {
                    readonly type: "string";
                    readonly examples: readonly ["1.1.1.1"];
                };
                readonly metadata: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const AppGetEcommSettings: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The unique identifier for the target Site.";
                };
            };
            readonly required: readonly ["site_name"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "Basic {base64User:Pass}";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly "x-duda-access-token": {
                    readonly type: "string";
                    readonly default: "Bearer {access_token}";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly default_currency: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly business_name: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly business_address: {
                    readonly type: "object";
                    readonly properties: {
                        readonly address_1: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly address_2: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly city: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly sub_locality: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly region: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly country: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly postal_code: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                    };
                };
                readonly time_zone: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly enabled_countries: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly examples: readonly ["string"];
                    };
                };
                readonly send_email_notifications: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [true];
                };
                readonly cart_settings: {
                    readonly type: "object";
                    readonly properties: {
                        readonly split_name_field: {
                            readonly type: "boolean";
                            readonly default: true;
                            readonly examples: readonly [true];
                        };
                        readonly split_address_1_field: {
                            readonly type: "boolean";
                            readonly default: true;
                            readonly examples: readonly [true];
                        };
                        readonly display_instruction_field: {
                            readonly type: "boolean";
                            readonly default: true;
                            readonly examples: readonly [true];
                        };
                        readonly display_phone_field: {
                            readonly type: "boolean";
                            readonly default: true;
                            readonly examples: readonly [true];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const AppGetGroups: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The unique identifier of the target site.";
                };
            };
            readonly required: readonly ["site_name"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly cursor: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Cursor-based offset provided in previous page response. Can be used to collect next page of data";
                };
                readonly limit: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Page size (number of elements per page). Default is 50.";
                };
            };
            readonly required: readonly [];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "Basic {base64User:Pass}";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly "x-duda-access-token": {
                    readonly type: "string";
                    readonly default: "Bearer {access_token}";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly cursor: {
                    readonly type: "string";
                    readonly examples: readonly ["eyJjdXJzb3IiOiJjdXJzb3IiLCAiY3JlYXRpb25faWQiOiIxNWY0YjNiNGUtNGIzYi00YjNiLTRiM2ItNGIzYi00YjNiNGU0YjNiNGUifQ=="];
                };
                readonly limit: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [50];
                };
                readonly next_page: {
                    readonly type: "string";
                    readonly examples: readonly ["eyJjcmVhdGlvbl9pZCI6IjE1ZjRiM2I0ZS00YjNiLTRiM2ItNGIzYi00YjNiLTRiM2I0ZTRiM2I0ZSIsImN1cnNvciI6ImN1cnNvciJ9"];
                };
                readonly results: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly examples: readonly ["90f33a1b-27bb-4020-9f7d-99d6026547f0"];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly examples: readonly ["Premium site members"];
                            };
                            readonly pages: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "string";
                                    readonly examples: readonly ["7b31a091a92049bba02315a3c718ecb1"];
                                };
                            };
                        };
                    };
                };
                readonly site_name: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly total_responses: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const AppGetManifest: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly app_uuid: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "UUID of the App";
                };
            };
            readonly required: readonly ["app_uuid"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "x-duda-access-token": {
                    readonly type: "string";
                    readonly default: "Bearer tefDCCAKciewk6FLmMjfC0cg1d4";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The specific access token to access this site API.";
                };
                readonly authorization: {
                    readonly type: "string";
                    readonly default: "Basic ZXhhbXBsZVVzZXI6bmljZXRyeQ==";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Your App Account's username and password, base64'd.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly uuid: {
                    readonly type: "string";
                    readonly examples: readonly ["2257f749-03a7-45c2-9e8a-ae5f5e6e072c"];
                };
                readonly webhooks: {
                    readonly type: "object";
                    readonly properties: {
                        readonly endpoint: {
                            readonly type: "string";
                            readonly examples: readonly ["https://temporary.com/endpoint"];
                        };
                        readonly events: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly examples: readonly ["CONTENT_LIB_CHANGED"];
                            };
                        };
                    };
                };
                readonly scopes: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly examples: readonly ["GET_WEBSITE"];
                    };
                };
                readonly public_key: {
                    readonly type: "string";
                    readonly examples: readonly ["MIIBI..."];
                };
                readonly installation_endpoint: {
                    readonly type: "string";
                    readonly examples: readonly ["https://temporary.com/endpoint"];
                };
                readonly uninstallation_endpoint: {
                    readonly type: "string";
                    readonly examples: readonly ["https://temporary.com/endpoint"];
                };
                readonly updowngrade_installation_endpoint: {
                    readonly type: "string";
                    readonly examples: readonly ["https://temporary.com/endpoint"];
                };
                readonly base_sso_url: {
                    readonly type: "string";
                    readonly examples: readonly ["https://temporary.com/sso"];
                };
                readonly supported_locales: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly examples: readonly ["en"];
                    };
                };
                readonly app_profile: {
                    readonly type: "object";
                    readonly properties: {
                        readonly en: {
                            readonly type: "object";
                            readonly properties: {
                                readonly app_name: {
                                    readonly type: "string";
                                    readonly examples: readonly ["Display name"];
                                };
                                readonly app_logo: {
                                    readonly type: "string";
                                    readonly examples: readonly ["https://temporary.com/imageLogo.png"];
                                };
                                readonly app_short_description: {
                                    readonly type: "string";
                                    readonly examples: readonly ["A short description goes here."];
                                };
                                readonly app_long_description: {
                                    readonly type: "string";
                                    readonly examples: readonly ["This app can do this a that"];
                                };
                                readonly public_page: {
                                    readonly type: "string";
                                    readonly examples: readonly ["https://temporary.com/ourproduct"];
                                };
                                readonly terms_of_service_page: {
                                    readonly type: "string";
                                    readonly examples: readonly ["https://temporary.com/terms_en"];
                                };
                                readonly privacy_note_page: {
                                    readonly type: "string";
                                    readonly examples: readonly ["https://temporary.com/privacy_en"];
                                };
                                readonly app_screenshots: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly image_url: {
                                                readonly type: "string";
                                                readonly examples: readonly ["https://temporary.com/image.jpg"];
                                            };
                                            readonly alt_text: {
                                                readonly type: "string";
                                                readonly examples: readonly ["Description of image above"];
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
                readonly wl_app_profile: {
                    readonly type: "object";
                    readonly properties: {
                        readonly en: {
                            readonly type: "object";
                            readonly properties: {
                                readonly app_name: {
                                    readonly type: "string";
                                    readonly examples: readonly ["White Labeled display name"];
                                };
                                readonly app_logo: {
                                    readonly type: "string";
                                    readonly examples: readonly ["https://temporary.com/imageLogo.png"];
                                };
                                readonly app_short_description: {
                                    readonly type: "string";
                                    readonly examples: readonly ["A short description goes here."];
                                };
                                readonly app_long_description: {
                                    readonly type: "string";
                                    readonly examples: readonly ["This app can do this a that"];
                                };
                                readonly app_screenshots: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly image_url: {
                                                readonly type: "string";
                                                readonly examples: readonly ["https://temporary.com/image.jpg"];
                                            };
                                            readonly alt_text: {
                                                readonly type: "string";
                                                readonly examples: readonly ["Description of image above"];
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
                readonly app_plans: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly plan_uuid: {
                                readonly type: "string";
                                readonly examples: readonly ["332653a3-df51-45ce-a873-fbb0b1ccb49f"];
                            };
                            readonly plan_type: {
                                readonly type: "string";
                                readonly examples: readonly ["free"];
                            };
                            readonly is_hidden: {
                                readonly type: "boolean";
                                readonly default: true;
                                readonly examples: readonly [false];
                            };
                            readonly plan_grade: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [0];
                            };
                            readonly plan_profiles: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly en: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly plan_name: {
                                                readonly type: "string";
                                                readonly examples: readonly ["First"];
                                            };
                                            readonly plan_subtitle: {
                                                readonly type: "string";
                                                readonly examples: readonly ["Start..."];
                                            };
                                            readonly plan_features: {
                                                readonly type: "array";
                                                readonly items: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["My first feature"];
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
                readonly default_plan_uuid: {
                    readonly type: "string";
                    readonly examples: readonly ["332653a3-df51-45ce-a873-fbb0b1ccb49f"];
                };
                readonly required_fields: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly examples: readonly ["EMAIL"];
                    };
                };
                readonly is_in_beta: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [false];
                };
                readonly visible_to_clients: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [true];
                };
                readonly window_type: {
                    readonly type: "string";
                    readonly examples: readonly ["IFRAME|NEW_TAB"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const AppGetMemberById: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The unique identifier of the target site.";
                };
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The unique identifier of the member.";
                };
            };
            readonly required: readonly ["site_name", "id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "Basic {base64User:Pass}";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly "x-duda-access-token": {
                    readonly type: "string";
                    readonly default: "Bearer {access_token}";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly email: {
                    readonly type: "string";
                    readonly examples: readonly ["john.doe@example.com"];
                };
                readonly first_name: {
                    readonly type: "string";
                    readonly examples: readonly ["John"];
                };
                readonly groups: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly examples: readonly ["15f4b3b4e-4b3b-4b3b-4b3b-4b3b4e4b3b4e"];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly examples: readonly ["Premium users"];
                            };
                        };
                    };
                };
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["123e4567-e89b-12d3-a456-426614174000"];
                };
                readonly last_login: {
                    readonly type: "string";
                    readonly examples: readonly ["2024-08-01T00:00:00Z"];
                };
                readonly last_name: {
                    readonly type: "string";
                    readonly examples: readonly ["Doe"];
                };
                readonly registered: {
                    readonly type: "string";
                    readonly examples: readonly ["2024-08-01T00:00:00Z"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["ACTIVE"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const AppGetMembers: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The unique identifier of the target site.";
                };
            };
            readonly required: readonly ["site_name"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly email: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Member email to filter by.";
                };
                readonly group_id: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Member Group id to filter by";
                };
                readonly status: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Status of Member to filter by. ACTIVE, PENDING, UNAUTHORIZED";
                };
                readonly cursor: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Cursor-based offset provided in previous page response. Can be used to collect next page of data";
                };
                readonly limit: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Page size (number of elements per page). Default is 50.";
                };
            };
            readonly required: readonly [];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "Basic {base64User:Pass}";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly "x-duda-access-token": {
                    readonly type: "string";
                    readonly default: "Bearer {access_token}";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly cursor: {
                    readonly type: "string";
                    readonly examples: readonly ["eyJjdXJzb3IiOiJjdXJzb3IiLCAiY3JlYXRpb25faWQiOiIxNWY0YjNiNGUtNGIzYi00YjNiLTRiM2ItNGIzYi00YjNiNGU0YjNiNGUifQ=="];
                };
                readonly limit: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [50];
                };
                readonly next_page: {
                    readonly type: "string";
                    readonly examples: readonly ["eyJjcmVhdGlvbl9pZCI6IjE1ZjRiM2I0ZS00YjNiLTRiM2ItNGIzYi00YjNiLTRiM2I0ZTRiM2I0ZSIsImN1cnNvciI6ImN1cnNvciJ9"];
                };
                readonly results: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly email: {
                                readonly type: "string";
                                readonly examples: readonly ["john.doe@example.com"];
                            };
                            readonly first_name: {
                                readonly type: "string";
                                readonly examples: readonly ["John"];
                            };
                            readonly groups: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly id: {
                                            readonly type: "string";
                                            readonly examples: readonly ["15f4b3b4e-4b3b-4b3b-4b3b-4b3b4e4b3b4e"];
                                        };
                                        readonly name: {
                                            readonly type: "string";
                                            readonly examples: readonly ["Premium users"];
                                        };
                                    };
                                };
                            };
                            readonly id: {
                                readonly type: "string";
                                readonly examples: readonly ["123e4567-e89b-12d3-a456-426614174000"];
                            };
                            readonly last_login: {
                                readonly type: "string";
                                readonly examples: readonly ["2024-08-01T00:00:00Z"];
                            };
                            readonly last_name: {
                                readonly type: "string";
                                readonly examples: readonly ["Doe"];
                            };
                            readonly registered: {
                                readonly type: "string";
                                readonly examples: readonly ["2024-08-01T00:00:00Z"];
                            };
                            readonly status: {
                                readonly type: "string";
                                readonly examples: readonly ["ACTIVE"];
                            };
                        };
                    };
                };
                readonly site_name: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly total_responses: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const AppGetMembershipGroup: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The unique identifier of the target site.";
                };
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The unique identifier of the target group.";
                };
            };
            readonly required: readonly ["site_name", "id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "Basic {base64User:Pass}";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly "x-duda-access-token": {
                    readonly type: "string";
                    readonly default: "Bearer {access_token}";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["90f33a1b-27bb-4020-9f7d-99d6026547f0"];
                };
                readonly name: {
                    readonly type: "string";
                    readonly examples: readonly ["Premium site members"];
                };
                readonly pages: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly examples: readonly ["7b31a091a92049bba02315a3c718ecb1"];
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const AppGetMembershipInvitations: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The unique identifier of the target site.";
                };
            };
            readonly required: readonly ["site_name"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly email: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Email address to filter by.";
                };
                readonly cursor: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Cursor-based offset provided in previous page response. Can be used to collect next page of data";
                };
                readonly limit: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Page size (number of elements per page). Default is 50.";
                };
            };
            readonly required: readonly [];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "Basic {base64User:Pass}";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly "x-duda-access-token": {
                    readonly type: "string";
                    readonly default: "Bearer {access_token}";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly cursor: {
                    readonly type: "string";
                    readonly examples: readonly ["eyJjdXJzb3IiOiJjdXJzb3IiLCAiY3JlYXRpb25faWQiOiIxNWY0YjNiNGUtNGIzYi00YjNiLTRiM2ItNGIzYi00YjNiNGU0YjNiNGUifQ=="];
                };
                readonly limit: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [50];
                };
                readonly next_page: {
                    readonly type: "string";
                    readonly examples: readonly ["eyJjcmVhdGlvbl9pZCI6IjE1ZjRiM2I0ZS00YjNiLTRiM2ItNGIzYi00YjNiLTRiM2I0ZTRiM2I0ZSIsImN1cnNvciI6ImN1cnNvciJ9"];
                };
                readonly results: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly created: {
                                readonly type: "string";
                                readonly examples: readonly ["2024-08-01T00:00:00Z"];
                            };
                            readonly email: {
                                readonly type: "string";
                                readonly examples: readonly ["user-email@example.com"];
                            };
                            readonly groups: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly id: {
                                            readonly type: "string";
                                            readonly examples: readonly ["15f4b3b4e-4b3b-4b3b-4b3b-4b3b4e4b3b4e"];
                                        };
                                        readonly name: {
                                            readonly type: "string";
                                            readonly examples: readonly ["Premium users"];
                                        };
                                    };
                                };
                            };
                            readonly id: {
                                readonly type: "string";
                                readonly examples: readonly ["5f4b3b4e-4b3b-4b3b-4b3b-4b3b4e4b3b4e"];
                            };
                        };
                    };
                };
                readonly site_name: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly total_responses: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const AppGetOrder: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The unique identifier for the target Site.";
                };
                readonly order_id: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The unique identifier for the target Order.";
                };
            };
            readonly required: readonly ["site_name", "order_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly source: {
                    readonly type: "string";
                    readonly examples: readonly ["CHECKOUT"];
                };
                readonly mode: {
                    readonly type: "string";
                    readonly examples: readonly ["LIVE"];
                };
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly external_id: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["IN_PROGRESS"];
                };
                readonly email: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly invoice_number: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly items: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                            readonly product_id: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                            readonly variation_id: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                            readonly external_product_id: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                            readonly external_variation_id: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                            readonly image: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                            readonly sku: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                            readonly options: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly name: {
                                            readonly type: "string";
                                            readonly examples: readonly ["string"];
                                        };
                                        readonly value: {
                                            readonly type: "string";
                                            readonly examples: readonly ["string"];
                                        };
                                    };
                                };
                            };
                            readonly quantity: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [0];
                            };
                            readonly shippable: {
                                readonly type: "boolean";
                                readonly default: true;
                                readonly examples: readonly [true];
                            };
                            readonly unit_price: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [0];
                            };
                            readonly unit_weight: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [0];
                            };
                            readonly unit_dimensions: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly height: {
                                        readonly type: "integer";
                                        readonly default: 0;
                                        readonly examples: readonly [0];
                                    };
                                    readonly width: {
                                        readonly type: "integer";
                                        readonly default: 0;
                                        readonly examples: readonly [0];
                                    };
                                    readonly length: {
                                        readonly type: "integer";
                                        readonly default: 0;
                                        readonly examples: readonly [0];
                                    };
                                };
                            };
                            readonly total: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [0];
                            };
                            readonly combined_weight: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [0];
                            };
                            readonly metadata: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                        };
                    };
                };
                readonly billing_address: {
                    readonly type: "object";
                    readonly properties: {
                        readonly first_name: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly last_name: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly full_name: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly address_1: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly address_2: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly street_number: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly street_name: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly city: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly sub_locality: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly region: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly country: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly postal_code: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly phone: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                    };
                };
                readonly shipping_address: {
                    readonly type: "object";
                    readonly properties: {
                        readonly first_name: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly last_name: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly full_name: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly address_1: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly address_2: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly street_number: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly street_name: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly city: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly sub_locality: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly region: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly country: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly postal_code: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly phone: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                    };
                };
                readonly shipping_method: {
                    readonly type: "object";
                    readonly properties: {
                        readonly name: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly cost: {
                            readonly type: "integer";
                            readonly default: 0;
                            readonly examples: readonly [0];
                        };
                    };
                };
                readonly shipping_instructions: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly discounts: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                            readonly savings: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [0];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                        };
                    };
                };
                readonly taxes: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly name: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                            readonly amount: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [0];
                            };
                            readonly rate: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [0];
                            };
                        };
                    };
                };
                readonly subtotal: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly total: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly payment: {
                    readonly type: "object";
                    readonly properties: {
                        readonly transaction_id: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly status: {
                            readonly type: "string";
                            readonly examples: readonly ["PAID"];
                        };
                        readonly currency: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly card_brand: {
                            readonly type: "string";
                            readonly examples: readonly ["NULL"];
                        };
                        readonly confirmed_method: {
                            readonly type: "object";
                            readonly properties: {
                                readonly gateway: {
                                    readonly type: "string";
                                    readonly examples: readonly ["NONE"];
                                };
                                readonly name: {
                                    readonly type: "string";
                                    readonly examples: readonly ["UNKNOWN"];
                                };
                                readonly display_name: {
                                    readonly type: "string";
                                    readonly examples: readonly ["string"];
                                };
                                readonly icon: {
                                    readonly type: "string";
                                    readonly examples: readonly ["string"];
                                };
                                readonly details: {
                                    readonly type: "string";
                                    readonly examples: readonly ["string"];
                                };
                                readonly instructions: {
                                    readonly type: "string";
                                    readonly examples: readonly ["string"];
                                };
                            };
                        };
                    };
                };
                readonly refunds: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                            readonly order_id: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                            readonly transaction_id: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                            readonly reason: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                            readonly items: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly id: {
                                            readonly type: "string";
                                            readonly examples: readonly ["string"];
                                        };
                                        readonly quantity: {
                                            readonly type: "integer";
                                            readonly default: 0;
                                            readonly examples: readonly [0];
                                        };
                                        readonly amount: {
                                            readonly type: "integer";
                                            readonly default: 0;
                                            readonly examples: readonly [0];
                                        };
                                        readonly taxes: {
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly id: {
                                                        readonly type: "string";
                                                        readonly examples: readonly ["string"];
                                                    };
                                                    readonly name: {
                                                        readonly type: "string";
                                                        readonly examples: readonly ["string"];
                                                    };
                                                    readonly rate: {
                                                        readonly type: "integer";
                                                        readonly default: 0;
                                                        readonly examples: readonly [0];
                                                    };
                                                    readonly amount: {
                                                        readonly type: "integer";
                                                        readonly default: 0;
                                                        readonly examples: readonly [0];
                                                    };
                                                    readonly provider: {
                                                        readonly type: "string";
                                                        readonly examples: readonly ["BUILT_IN"];
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                            readonly currency: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                            readonly tax_provider: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly provider: {
                                        readonly type: "string";
                                        readonly examples: readonly ["BUILT_IN"];
                                    };
                                    readonly avalara_reference_id: {
                                        readonly type: "string";
                                        readonly examples: readonly ["string"];
                                    };
                                };
                            };
                            readonly subtotal: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [0];
                            };
                            readonly taxes: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly id: {
                                            readonly type: "string";
                                            readonly examples: readonly ["string"];
                                        };
                                        readonly name: {
                                            readonly type: "string";
                                            readonly examples: readonly ["string"];
                                        };
                                        readonly rate: {
                                            readonly type: "integer";
                                            readonly default: 0;
                                            readonly examples: readonly [0];
                                        };
                                        readonly amount: {
                                            readonly type: "integer";
                                            readonly default: 0;
                                            readonly examples: readonly [0];
                                        };
                                        readonly provider: {
                                            readonly type: "string";
                                            readonly examples: readonly ["BUILT_IN"];
                                        };
                                    };
                                };
                            };
                            readonly total: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [0];
                            };
                            readonly created: {
                                readonly type: "string";
                                readonly examples: readonly ["2024-12-11T18:44:33.714Z"];
                            };
                        };
                    };
                };
                readonly tracking_url: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly tracking_number: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly created: {
                    readonly type: "string";
                    readonly examples: readonly ["2024-12-11T18:44:33.714Z"];
                };
                readonly user_agent: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly customer_accepts_marketing: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [true];
                };
                readonly ip_address: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly cancellation_reason: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly cancelled: {
                    readonly type: "string";
                    readonly examples: readonly ["2024-12-11T18:44:33.714Z"];
                };
                readonly metadata: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly title: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly status: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly detail: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly instance: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp1: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp2: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp3: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly title: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly status: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly detail: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly instance: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp1: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp2: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp3: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly title: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly status: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly detail: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly instance: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp1: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp2: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp3: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly title: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly status: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly detail: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly instance: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp1: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp2: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp3: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const AppGetPages: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly ["site_name"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "x-duda-access-token": {
                    readonly type: "string";
                    readonly default: "Bearer tefDCCAKciewk6FLmMjfC0cg1d4";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The specific access token to access this site API.";
                };
                readonly authorization: {
                    readonly type: "string";
                    readonly default: "Basic ZXhhbXBsZVVzZXI6bmljZXRyeQ==";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Your App Account's username and password, base64'd.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly results: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly uuid: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly examples: readonly ["ABOUT"];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly examples: readonly ["REGULAR"];
                            };
                            readonly path: {
                                readonly type: "string";
                                readonly examples: readonly ["about/abab"];
                            };
                            readonly seo: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly title: {
                                        readonly type: "string";
                                        readonly examples: readonly ["About Page"];
                                    };
                                    readonly description: {};
                                    readonly no_index: {
                                        readonly type: "boolean";
                                        readonly default: true;
                                        readonly examples: readonly [false];
                                    };
                                    readonly og_image: {
                                        readonly type: "string";
                                        readonly examples: readonly ["https://example.org/path/to/image.png"];
                                    };
                                };
                            };
                            readonly header_html: {
                                readonly type: "string";
                                readonly examples: readonly ["<script>console.log('woo')</script>"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const AppGetPaymentGateway: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The unique identifier for the target Site.";
                };
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The ID of the existing payment gateway.";
                };
            };
            readonly required: readonly ["site_name", "id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "x-duda-access-token": {
                    readonly type: "string";
                    readonly default: "Bearer tefDCCAKciewk6FLmMjfC0cg1d4";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The specific access token to access this site API.";
                };
                readonly authorization: {
                    readonly type: "string";
                    readonly default: "Basic cnVzc1dhczpoZXJlIQ==";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Your App Account's username and password, base64'd.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly live_payment_methods_url: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly test_payment_methods_url: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly name: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly description: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly image: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly icons: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly examples: readonly ["string"];
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const AppGetPaymentSession: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The unique site which you're calling the API for.";
                };
                readonly session_id: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Payment Session ID. Retrieved during checkout when handling a payment gateway flow.";
                };
            };
            readonly required: readonly ["site_name", "session_id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "Basic ZXhhbXBsZVVzZXI6bmljZXRyeQ==";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly "x-duda-access-token": {
                    readonly type: "string";
                    readonly default: "Bearer tefDCCAKciewk6FLmMjfC0cg1d4";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly mode: {
                    readonly type: "string";
                    readonly examples: readonly ["LIVE"];
                };
                readonly cancel_url: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly invoice: {
                    readonly type: "object";
                    readonly properties: {
                        readonly purchase_id: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly purchase_type: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly email: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly language: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly currency: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly total: {
                            readonly type: "integer";
                            readonly default: 0;
                            readonly examples: readonly [0];
                        };
                        readonly shipping_address: {
                            readonly type: "object";
                            readonly properties: {
                                readonly first_name: {
                                    readonly type: "string";
                                    readonly examples: readonly ["string"];
                                };
                                readonly last_name: {
                                    readonly type: "string";
                                    readonly examples: readonly ["string"];
                                };
                                readonly full_name: {
                                    readonly type: "string";
                                    readonly examples: readonly ["string"];
                                };
                                readonly address_1: {
                                    readonly type: "string";
                                    readonly examples: readonly ["string"];
                                };
                                readonly address_2: {
                                    readonly type: "string";
                                    readonly examples: readonly ["string"];
                                };
                                readonly street_number: {
                                    readonly type: "string";
                                    readonly examples: readonly ["string"];
                                };
                                readonly street_name: {
                                    readonly type: "string";
                                    readonly examples: readonly ["string"];
                                };
                                readonly city: {
                                    readonly type: "string";
                                    readonly examples: readonly ["string"];
                                };
                                readonly sub_locality: {
                                    readonly type: "string";
                                    readonly examples: readonly ["string"];
                                };
                                readonly region: {
                                    readonly type: "string";
                                    readonly examples: readonly ["string"];
                                };
                                readonly country: {
                                    readonly type: "string";
                                    readonly examples: readonly ["string"];
                                };
                                readonly postal_code: {
                                    readonly type: "string";
                                    readonly examples: readonly ["string"];
                                };
                                readonly phone: {
                                    readonly type: "string";
                                    readonly examples: readonly ["string"];
                                };
                            };
                        };
                        readonly billing_address: {
                            readonly type: "object";
                            readonly properties: {
                                readonly first_name: {
                                    readonly type: "string";
                                    readonly examples: readonly ["string"];
                                };
                                readonly last_name: {
                                    readonly type: "string";
                                    readonly examples: readonly ["string"];
                                };
                                readonly full_name: {
                                    readonly type: "string";
                                    readonly examples: readonly ["string"];
                                };
                                readonly address_1: {
                                    readonly type: "string";
                                    readonly examples: readonly ["string"];
                                };
                                readonly address_2: {
                                    readonly type: "string";
                                    readonly examples: readonly ["string"];
                                };
                                readonly street_number: {
                                    readonly type: "string";
                                    readonly examples: readonly ["string"];
                                };
                                readonly street_name: {
                                    readonly type: "string";
                                    readonly examples: readonly ["string"];
                                };
                                readonly city: {
                                    readonly type: "string";
                                    readonly examples: readonly ["string"];
                                };
                                readonly sub_locality: {
                                    readonly type: "string";
                                    readonly examples: readonly ["string"];
                                };
                                readonly region: {
                                    readonly type: "string";
                                    readonly examples: readonly ["string"];
                                };
                                readonly country: {
                                    readonly type: "string";
                                    readonly examples: readonly ["string"];
                                };
                                readonly postal_code: {
                                    readonly type: "string";
                                    readonly examples: readonly ["string"];
                                };
                                readonly phone: {
                                    readonly type: "string";
                                    readonly examples: readonly ["string"];
                                };
                            };
                        };
                        readonly items: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly type: {
                                        readonly type: "string";
                                        readonly examples: readonly ["PHYSICAL"];
                                    };
                                    readonly name: {
                                        readonly type: "string";
                                        readonly examples: readonly ["string"];
                                    };
                                    readonly unit_price: {
                                        readonly type: "integer";
                                        readonly default: 0;
                                        readonly examples: readonly [0];
                                    };
                                    readonly quantity: {
                                        readonly type: "integer";
                                        readonly default: 0;
                                        readonly examples: readonly [0];
                                    };
                                    readonly discount_amount: {
                                        readonly type: "integer";
                                        readonly default: 0;
                                        readonly examples: readonly [0];
                                    };
                                    readonly total: {
                                        readonly type: "integer";
                                        readonly default: 0;
                                        readonly examples: readonly [0];
                                    };
                                };
                            };
                        };
                    };
                };
                readonly site_name: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly site_external_id: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const AppGetProduct: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The unique identifier for the target Site.";
                };
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "An existing product ID.";
                };
            };
            readonly required: readonly ["site_name", "id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly offset: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly default: 0;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Zero-based offset for elements (0..N)";
                };
                readonly limit: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The size of the page to be returned";
                };
                readonly sort: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Sorting criteria in the format: property(asc|desc). Sort order is optional, default sort order is ascending. Multiple sort criteria are supported.";
                };
            };
            readonly required: readonly [];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "x-duda-access-token": {
                    readonly type: "string";
                    readonly default: "Bearer tefDCCAKciewk6FLmMjfC0cg1d4";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The specific access token to access this site API.";
                };
                readonly authorization: {
                    readonly type: "string";
                    readonly default: "Basic ZXhhbXBsZVVzZXI6bmljZXRyeQ==";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Your App Account's username and password, base64'd.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly description: {
                    readonly type: "string";
                    readonly examples: readonly ["The most amazing t shirt ever sold"];
                };
                readonly external_id: {
                    readonly type: "string";
                    readonly examples: readonly ["KTP9XGbSg2"];
                };
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["IakdKbiUiK"];
                };
                readonly images: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly alt: {
                                readonly type: "string";
                                readonly examples: readonly ["Image of fancy shirt"];
                            };
                            readonly url: {
                                readonly type: "string";
                                readonly examples: readonly ["https://images.pexels.com/photos/1020585/pexels-photo-1020585.jpeg"];
                            };
                        };
                    };
                };
                readonly name: {
                    readonly type: "string";
                    readonly examples: readonly ["Amazing T-shirt"];
                };
                readonly options: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly choices: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly id: {
                                            readonly type: "string";
                                            readonly examples: readonly ["db3je27rg7"];
                                        };
                                        readonly value: {
                                            readonly type: "string";
                                            readonly examples: readonly ["45"];
                                        };
                                    };
                                };
                            };
                            readonly id: {
                                readonly type: "string";
                                readonly examples: readonly ["WMd1xylGrp"];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly examples: readonly ["Shirt size"];
                            };
                        };
                    };
                };
                readonly prices: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly compare_at_price: {
                                readonly type: "string";
                                readonly examples: readonly ["19.99"];
                            };
                            readonly currency: {
                                readonly type: "string";
                                readonly examples: readonly ["USD"];
                            };
                            readonly price: {
                                readonly type: "string";
                                readonly examples: readonly ["12.34"];
                            };
                        };
                    };
                };
                readonly seo: {
                    readonly type: "object";
                    readonly properties: {
                        readonly description: {
                            readonly type: "string";
                            readonly examples: readonly ["Amazing T-shirt made with 100% biologic cotton"];
                        };
                        readonly product_url: {
                            readonly type: "string";
                            readonly examples: readonly ["amazing-t-shirt"];
                        };
                        readonly title: {
                            readonly type: "string";
                            readonly examples: readonly ["Amazing T-shirt"];
                        };
                    };
                };
                readonly sku: {
                    readonly type: "string";
                    readonly examples: readonly ["UGG-BB-PUR-06"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["ACTIVE"];
                };
                readonly variations: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly external_id: {
                                readonly type: "string";
                                readonly examples: readonly ["KTP9XGbSg2"];
                            };
                            readonly id: {
                                readonly type: "string";
                                readonly examples: readonly ["KTP9XGbSg2"];
                            };
                            readonly images: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly alt: {
                                            readonly type: "string";
                                            readonly examples: readonly ["Image of fancy shirt"];
                                        };
                                        readonly url: {
                                            readonly type: "string";
                                            readonly examples: readonly ["https://images.pexels.com/photos/1020585/pexels-photo-1020585.jpeg"];
                                        };
                                    };
                                };
                            };
                            readonly options: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly choice_id: {
                                            readonly type: "string";
                                            readonly examples: readonly ["db3je27rg7"];
                                        };
                                        readonly choice_value: {
                                            readonly type: "string";
                                            readonly examples: readonly ["45"];
                                        };
                                        readonly option_id: {
                                            readonly type: "string";
                                            readonly examples: readonly ["WMd1xylGrp"];
                                        };
                                        readonly option_name: {
                                            readonly type: "string";
                                            readonly examples: readonly ["Shirt size"];
                                        };
                                    };
                                };
                            };
                            readonly price_difference: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                            readonly quantity: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [25];
                            };
                            readonly sku: {
                                readonly type: "string";
                                readonly examples: readonly ["UGG-BB-PUR-06"];
                            };
                            readonly status: {
                                readonly type: "string";
                                readonly examples: readonly ["ACTIVE"];
                            };
                            readonly stock_status: {
                                readonly type: "string";
                                readonly examples: readonly ["IN_STOCK, OUT_OF_STOCK"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const AppGetProductVariation: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The unique identifier for the target Site.";
                };
                readonly product_id: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The unique identifier for the target Product.";
                };
                readonly variation_id: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The unique identifier for the target Variation.";
                };
            };
            readonly required: readonly ["site_name", "product_id", "variation_id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "x-duda-access-token": {
                    readonly type: "string";
                    readonly default: "Bearer tefDCCAKciewk6FLmMjfC0cg1d4";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The specific access token to access this site API.";
                };
                readonly authorization: {
                    readonly type: "string";
                    readonly default: "Basic ZXhhbXBsZVVzZXI6bmljZXRyeQ==";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Your App Account's username and password, base64'd.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly external_id: {
                    readonly type: "string";
                    readonly examples: readonly ["KTP9XGbSg2"];
                };
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["KTP9XGbSg2"];
                };
                readonly images: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly alt: {
                                readonly type: "string";
                                readonly examples: readonly ["Image of fancy shirt"];
                            };
                            readonly url: {
                                readonly type: "string";
                                readonly examples: readonly ["https://images.pexels.com/photos/1020585/pexels-photo-1020585.jpeg"];
                            };
                        };
                    };
                };
                readonly options: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly choice_id: {
                                readonly type: "string";
                                readonly examples: readonly ["db3je27rg7"];
                            };
                            readonly choice_value: {
                                readonly type: "string";
                                readonly examples: readonly ["45"];
                            };
                            readonly option_id: {
                                readonly type: "string";
                                readonly examples: readonly ["WMd1xylGrp"];
                            };
                            readonly option_name: {
                                readonly type: "string";
                                readonly examples: readonly ["Shirt size"];
                            };
                        };
                    };
                };
                readonly price_difference: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly quantity: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [25];
                };
                readonly sku: {
                    readonly type: "string";
                    readonly examples: readonly ["UGG-BB-PUR-06"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["HIDDEN"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const AppGetRefund: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The unique identifier for the target Site.";
                };
                readonly order_id: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The unique identifier for the target Order.";
                };
                readonly refund_id: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The unique identifier for the target Refund.";
                };
            };
            readonly required: readonly ["site_name", "order_id", "refund_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly order_id: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly transaction_id: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly reason: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly items: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                            readonly quantity: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [0];
                            };
                            readonly amount: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [0];
                            };
                            readonly taxes: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly id: {
                                            readonly type: "string";
                                            readonly examples: readonly ["string"];
                                        };
                                        readonly name: {
                                            readonly type: "string";
                                            readonly examples: readonly ["string"];
                                        };
                                        readonly rate: {
                                            readonly type: "integer";
                                            readonly default: 0;
                                            readonly examples: readonly [0];
                                        };
                                        readonly amount: {
                                            readonly type: "integer";
                                            readonly default: 0;
                                            readonly examples: readonly [0];
                                        };
                                        readonly provider: {
                                            readonly type: "string";
                                            readonly examples: readonly ["BUILT_IN"];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
                readonly currency: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly tax_provider: {
                    readonly type: "object";
                    readonly properties: {
                        readonly provider: {
                            readonly type: "string";
                            readonly examples: readonly ["BUILT_IN"];
                        };
                        readonly avalara_reference_id: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                    };
                };
                readonly subtotal: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly taxes: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                            readonly rate: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [0];
                            };
                            readonly amount: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [0];
                            };
                            readonly provider: {
                                readonly type: "string";
                                readonly examples: readonly ["BUILT_IN"];
                            };
                        };
                    };
                };
                readonly total: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly created: {
                    readonly type: "string";
                    readonly examples: readonly ["2024-03-15T18:00:06.934Z"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly title: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly status: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly detail: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly instance: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp1: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp2: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp3: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly title: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly status: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly detail: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly instance: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp1: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp2: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp3: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly title: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly status: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly detail: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly instance: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp1: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp2: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp3: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly title: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly status: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly detail: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly instance: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp1: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp2: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp3: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const AppGetShippingProvider: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The unique identifier for the target Site.";
                };
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The unique identifier for the target Shipping Rate.";
                };
            };
            readonly required: readonly ["site_name", "id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "Basic {base64User:Pass}";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly "x-duda-access-token": {
                    readonly type: "string";
                    readonly default: "Bearer {access_token}";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly live_shipping_methods_url: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly test_shipping_methods_url: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly title: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly status: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly detail: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly instance: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp1: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp2: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp3: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly title: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly status: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly detail: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly instance: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp1: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp2: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp3: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly title: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly status: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly detail: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly instance: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp1: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp2: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp3: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly title: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly status: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly detail: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly instance: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp1: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp2: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp3: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const AppGetStore: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The unique identifier for the target Site.";
                };
            };
            readonly required: readonly ["site_name"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly "X-DUDA-ACCESS-TOKEN": {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly features: {
                    readonly type: "object";
                    readonly properties: {
                        readonly max_choices_per_option: {
                            readonly type: "integer";
                            readonly default: 0;
                            readonly examples: readonly [20];
                        };
                        readonly max_options: {
                            readonly type: "integer";
                            readonly default: 0;
                            readonly examples: readonly [10];
                        };
                        readonly max_products: {
                            readonly type: "integer";
                            readonly default: 0;
                            readonly examples: readonly [100];
                        };
                        readonly max_variations_per_product: {
                            readonly type: "integer";
                            readonly default: 0;
                            readonly examples: readonly [8];
                        };
                    };
                };
                readonly site_name: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const AppGetSwh: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly uuid: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "An existing site wide HTML UUID.";
                };
            };
            readonly required: readonly ["site_name", "uuid"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "x-duda-access-token": {
                    readonly type: "string";
                    readonly default: "Bearer tefDCCAKciewk6FLmMjfC0cg1d4";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The specific access token to access this site API.";
                };
                readonly authorization: {
                    readonly type: "string";
                    readonly default: "Basic ZXhhbXBsZVVzZXI6bmljZXRyeQ==";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Your App Account's username and password, base64'd.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly location: {
                    readonly type: "string";
                    readonly examples: readonly ["BODY"];
                };
                readonly markup: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly uuid: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const AppListAllSwh: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly ["site_name"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "x-duda-access-token": {
                    readonly type: "string";
                    readonly default: "Bearer tefDCCAKciewk6FLmMjfC0cg1d4";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The specific access token to access this site API.";
                };
                readonly authorization: {
                    readonly type: "string";
                    readonly default: "Basic ZXhhbXBsZVVzZXI6bmljZXRyeQ==";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Your App Account's username and password, base64'd.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly siteWides: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly location: {
                                readonly type: "string";
                                readonly examples: readonly ["BODY"];
                            };
                            readonly markup: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                            readonly uuid: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const AppListCarts: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The unique identifier for the target site.";
                };
            };
            readonly required: readonly ["site_name"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "One of IN_PROGRESS or ABANDONED";
                };
                readonly mode: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "One of LIVE or TEST";
                };
                readonly cursor: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Valid cart id. This value will be used for cursor pagination to return all items in the sort order after this id.";
                };
                readonly limit: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Number of results to be returned";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const AppListOrders: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The unique identifier for the target Site.";
                };
            };
            readonly required: readonly ["site_name"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly offset: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly default: 0;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Zero-based offset for elements (0..N)";
                };
                readonly limit: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The size of the page to be returned";
                };
                readonly sort: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Property used to sort orders";
                };
                readonly direction: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The sort direction, either \"asc\" or \"desc\"";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly offset: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly limit: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly total_responses: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly results: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly source: {
                                readonly type: "string";
                                readonly examples: readonly ["CHECKOUT"];
                            };
                            readonly mode: {
                                readonly type: "string";
                                readonly examples: readonly ["LIVE"];
                            };
                            readonly id: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                            readonly external_id: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                            readonly status: {
                                readonly type: "string";
                                readonly examples: readonly ["IN_PROGRESS"];
                            };
                            readonly email: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                            readonly invoice_number: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                            readonly items: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly id: {
                                            readonly type: "string";
                                            readonly examples: readonly ["string"];
                                        };
                                        readonly product_id: {
                                            readonly type: "string";
                                            readonly examples: readonly ["string"];
                                        };
                                        readonly variation_id: {
                                            readonly type: "string";
                                            readonly examples: readonly ["string"];
                                        };
                                        readonly external_product_id: {
                                            readonly type: "string";
                                            readonly examples: readonly ["string"];
                                        };
                                        readonly external_variation_id: {
                                            readonly type: "string";
                                            readonly examples: readonly ["string"];
                                        };
                                        readonly name: {
                                            readonly type: "string";
                                            readonly examples: readonly ["string"];
                                        };
                                        readonly image: {
                                            readonly type: "string";
                                            readonly examples: readonly ["string"];
                                        };
                                        readonly sku: {
                                            readonly type: "string";
                                            readonly examples: readonly ["string"];
                                        };
                                        readonly options: {
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly name: {
                                                        readonly type: "string";
                                                        readonly examples: readonly ["string"];
                                                    };
                                                    readonly value: {
                                                        readonly type: "string";
                                                        readonly examples: readonly ["string"];
                                                    };
                                                };
                                            };
                                        };
                                        readonly quantity: {
                                            readonly type: "integer";
                                            readonly default: 0;
                                            readonly examples: readonly [0];
                                        };
                                        readonly shippable: {
                                            readonly type: "boolean";
                                            readonly default: true;
                                            readonly examples: readonly [true];
                                        };
                                        readonly unit_price: {
                                            readonly type: "integer";
                                            readonly default: 0;
                                            readonly examples: readonly [0];
                                        };
                                        readonly unit_weight: {
                                            readonly type: "integer";
                                            readonly default: 0;
                                            readonly examples: readonly [0];
                                        };
                                        readonly unit_dimensions: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly height: {
                                                    readonly type: "integer";
                                                    readonly default: 0;
                                                    readonly examples: readonly [0];
                                                };
                                                readonly width: {
                                                    readonly type: "integer";
                                                    readonly default: 0;
                                                    readonly examples: readonly [0];
                                                };
                                                readonly length: {
                                                    readonly type: "integer";
                                                    readonly default: 0;
                                                    readonly examples: readonly [0];
                                                };
                                            };
                                        };
                                        readonly total: {
                                            readonly type: "integer";
                                            readonly default: 0;
                                            readonly examples: readonly [0];
                                        };
                                        readonly combined_weight: {
                                            readonly type: "integer";
                                            readonly default: 0;
                                            readonly examples: readonly [0];
                                        };
                                        readonly metadata: {
                                            readonly type: "string";
                                            readonly examples: readonly ["string"];
                                        };
                                    };
                                };
                            };
                            readonly billing_address: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly first_name: {
                                        readonly type: "string";
                                        readonly examples: readonly ["string"];
                                    };
                                    readonly last_name: {
                                        readonly type: "string";
                                        readonly examples: readonly ["string"];
                                    };
                                    readonly full_name: {
                                        readonly type: "string";
                                        readonly examples: readonly ["string"];
                                    };
                                    readonly address_1: {
                                        readonly type: "string";
                                        readonly examples: readonly ["string"];
                                    };
                                    readonly address_2: {
                                        readonly type: "string";
                                        readonly examples: readonly ["string"];
                                    };
                                    readonly street_number: {
                                        readonly type: "string";
                                        readonly examples: readonly ["string"];
                                    };
                                    readonly street_name: {
                                        readonly type: "string";
                                        readonly examples: readonly ["string"];
                                    };
                                    readonly city: {
                                        readonly type: "string";
                                        readonly examples: readonly ["string"];
                                    };
                                    readonly sub_locality: {
                                        readonly type: "string";
                                        readonly examples: readonly ["string"];
                                    };
                                    readonly region: {
                                        readonly type: "string";
                                        readonly examples: readonly ["string"];
                                    };
                                    readonly country: {
                                        readonly type: "string";
                                        readonly examples: readonly ["string"];
                                    };
                                    readonly postal_code: {
                                        readonly type: "string";
                                        readonly examples: readonly ["string"];
                                    };
                                    readonly phone: {
                                        readonly type: "string";
                                        readonly examples: readonly ["string"];
                                    };
                                };
                            };
                            readonly shipping_address: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly first_name: {
                                        readonly type: "string";
                                        readonly examples: readonly ["string"];
                                    };
                                    readonly last_name: {
                                        readonly type: "string";
                                        readonly examples: readonly ["string"];
                                    };
                                    readonly full_name: {
                                        readonly type: "string";
                                        readonly examples: readonly ["string"];
                                    };
                                    readonly address_1: {
                                        readonly type: "string";
                                        readonly examples: readonly ["string"];
                                    };
                                    readonly address_2: {
                                        readonly type: "string";
                                        readonly examples: readonly ["string"];
                                    };
                                    readonly street_number: {
                                        readonly type: "string";
                                        readonly examples: readonly ["string"];
                                    };
                                    readonly street_name: {
                                        readonly type: "string";
                                        readonly examples: readonly ["string"];
                                    };
                                    readonly city: {
                                        readonly type: "string";
                                        readonly examples: readonly ["string"];
                                    };
                                    readonly sub_locality: {
                                        readonly type: "string";
                                        readonly examples: readonly ["string"];
                                    };
                                    readonly region: {
                                        readonly type: "string";
                                        readonly examples: readonly ["string"];
                                    };
                                    readonly country: {
                                        readonly type: "string";
                                        readonly examples: readonly ["string"];
                                    };
                                    readonly postal_code: {
                                        readonly type: "string";
                                        readonly examples: readonly ["string"];
                                    };
                                    readonly phone: {
                                        readonly type: "string";
                                        readonly examples: readonly ["string"];
                                    };
                                };
                            };
                            readonly shipping_method: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly name: {
                                        readonly type: "string";
                                        readonly examples: readonly ["string"];
                                    };
                                    readonly cost: {
                                        readonly type: "integer";
                                        readonly default: 0;
                                        readonly examples: readonly [0];
                                    };
                                };
                            };
                            readonly shipping_instructions: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                            readonly discounts: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly id: {
                                            readonly type: "string";
                                            readonly examples: readonly ["string"];
                                        };
                                        readonly savings: {
                                            readonly type: "integer";
                                            readonly default: 0;
                                            readonly examples: readonly [0];
                                        };
                                        readonly name: {
                                            readonly type: "string";
                                            readonly examples: readonly ["string"];
                                        };
                                        readonly type: {
                                            readonly type: "string";
                                            readonly examples: readonly ["string"];
                                        };
                                    };
                                };
                            };
                            readonly taxes: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly name: {
                                            readonly type: "string";
                                            readonly examples: readonly ["string"];
                                        };
                                        readonly amount: {
                                            readonly type: "integer";
                                            readonly default: 0;
                                            readonly examples: readonly [0];
                                        };
                                        readonly rate: {
                                            readonly type: "integer";
                                            readonly default: 0;
                                            readonly examples: readonly [0];
                                        };
                                    };
                                };
                            };
                            readonly subtotal: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [0];
                            };
                            readonly total: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [0];
                            };
                            readonly payment: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly transaction_id: {
                                        readonly type: "string";
                                        readonly examples: readonly ["string"];
                                    };
                                    readonly status: {
                                        readonly type: "string";
                                        readonly examples: readonly ["PAID"];
                                    };
                                    readonly currency: {
                                        readonly type: "string";
                                        readonly examples: readonly ["string"];
                                    };
                                    readonly card_brand: {
                                        readonly type: "string";
                                        readonly examples: readonly ["NULL"];
                                    };
                                    readonly confirmed_method: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly gateway: {
                                                readonly type: "string";
                                                readonly examples: readonly ["NONE"];
                                            };
                                            readonly name: {
                                                readonly type: "string";
                                                readonly examples: readonly ["UNKNOWN"];
                                            };
                                            readonly display_name: {
                                                readonly type: "string";
                                                readonly examples: readonly ["string"];
                                            };
                                            readonly icon: {
                                                readonly type: "string";
                                                readonly examples: readonly ["string"];
                                            };
                                            readonly details: {
                                                readonly type: "string";
                                                readonly examples: readonly ["string"];
                                            };
                                            readonly instructions: {
                                                readonly type: "string";
                                                readonly examples: readonly ["string"];
                                            };
                                        };
                                    };
                                };
                            };
                            readonly refunds: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly id: {
                                            readonly type: "string";
                                            readonly examples: readonly ["string"];
                                        };
                                        readonly order_id: {
                                            readonly type: "string";
                                            readonly examples: readonly ["string"];
                                        };
                                        readonly transaction_id: {
                                            readonly type: "string";
                                            readonly examples: readonly ["string"];
                                        };
                                        readonly reason: {
                                            readonly type: "string";
                                            readonly examples: readonly ["string"];
                                        };
                                        readonly items: {
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly id: {
                                                        readonly type: "string";
                                                        readonly examples: readonly ["string"];
                                                    };
                                                    readonly quantity: {
                                                        readonly type: "integer";
                                                        readonly default: 0;
                                                        readonly examples: readonly [0];
                                                    };
                                                    readonly amount: {
                                                        readonly type: "integer";
                                                        readonly default: 0;
                                                        readonly examples: readonly [0];
                                                    };
                                                    readonly taxes: {
                                                        readonly type: "array";
                                                        readonly items: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly id: {
                                                                    readonly type: "string";
                                                                    readonly examples: readonly ["string"];
                                                                };
                                                                readonly name: {
                                                                    readonly type: "string";
                                                                    readonly examples: readonly ["string"];
                                                                };
                                                                readonly rate: {
                                                                    readonly type: "integer";
                                                                    readonly default: 0;
                                                                    readonly examples: readonly [0];
                                                                };
                                                                readonly amount: {
                                                                    readonly type: "integer";
                                                                    readonly default: 0;
                                                                    readonly examples: readonly [0];
                                                                };
                                                                readonly provider: {
                                                                    readonly type: "string";
                                                                    readonly examples: readonly ["BUILT_IN"];
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                        readonly currency: {
                                            readonly type: "string";
                                            readonly examples: readonly ["string"];
                                        };
                                        readonly tax_provider: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly provider: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["BUILT_IN"];
                                                };
                                                readonly avalara_reference_id: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["string"];
                                                };
                                            };
                                        };
                                        readonly subtotal: {
                                            readonly type: "integer";
                                            readonly default: 0;
                                            readonly examples: readonly [0];
                                        };
                                        readonly taxes: {
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly id: {
                                                        readonly type: "string";
                                                        readonly examples: readonly ["string"];
                                                    };
                                                    readonly name: {
                                                        readonly type: "string";
                                                        readonly examples: readonly ["string"];
                                                    };
                                                    readonly rate: {
                                                        readonly type: "integer";
                                                        readonly default: 0;
                                                        readonly examples: readonly [0];
                                                    };
                                                    readonly amount: {
                                                        readonly type: "integer";
                                                        readonly default: 0;
                                                        readonly examples: readonly [0];
                                                    };
                                                    readonly provider: {
                                                        readonly type: "string";
                                                        readonly examples: readonly ["BUILT_IN"];
                                                    };
                                                };
                                            };
                                        };
                                        readonly total: {
                                            readonly type: "integer";
                                            readonly default: 0;
                                            readonly examples: readonly [0];
                                        };
                                        readonly created: {
                                            readonly type: "string";
                                            readonly examples: readonly ["2024-12-11T18:28:17.853Z"];
                                        };
                                    };
                                };
                            };
                            readonly tracking_url: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                            readonly tracking_number: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                            readonly created: {
                                readonly type: "string";
                                readonly examples: readonly ["2024-12-11T18:28:17.853Z"];
                            };
                            readonly user_agent: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                            readonly customer_accepts_marketing: {
                                readonly type: "boolean";
                                readonly default: true;
                                readonly examples: readonly [true];
                            };
                            readonly ip_address: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                            readonly cancellation_reason: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                            readonly cancelled: {
                                readonly type: "string";
                                readonly examples: readonly ["2024-12-11T18:28:17.853Z"];
                            };
                            readonly metadata: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly title: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly status: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly detail: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly instance: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp1: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp2: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp3: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly title: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly status: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly detail: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly instance: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp1: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp2: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp3: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly title: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly status: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly detail: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly instance: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp1: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp2: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp3: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly title: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly status: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly detail: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly instance: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp1: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp2: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp3: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const AppListPaymentGateways: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The unique identifier for the target Site.";
                };
            };
            readonly required: readonly ["site_name"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly offset: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly default: 0;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly limit: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly default: 50;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly [];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "x-duda-access-token": {
                    readonly type: "string";
                    readonly default: "Bearer tefDCCAKciewk6FLmMjfC0cg1d4";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The specific access token to access this site API.";
                };
                readonly authorization: {
                    readonly type: "string";
                    readonly default: "Basic cnVzc1dhczpoZXJlIQ==";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Your App Account's username and password, base64'd.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly offset: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly limit: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly total_responses: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly results: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                            readonly live_payment_methods_url: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                            readonly test_payment_methods_url: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                            readonly description: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                            readonly image: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                            readonly icons: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "string";
                                    readonly examples: readonly ["string"];
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly title: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly status: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly detail: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly instance: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp1: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp2: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp3: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly title: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly status: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly detail: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly instance: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp1: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp2: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp3: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly title: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly status: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly detail: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly instance: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp1: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp2: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp3: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly title: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly status: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly detail: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly instance: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp1: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp2: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp3: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const AppListProducts: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The unique identifier for the target Site.";
                };
            };
            readonly required: readonly ["site_name"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly offset: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly default: 0;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Zero-based offset for elements (0..N)";
                };
                readonly limit: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The size of the page to be returned";
                };
                readonly sort: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Sorting criteria in the format: property(asc|desc). Sort order is optional, default sort order is ascending. Multiple sort criteria are supported.";
                };
            };
            readonly required: readonly [];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "x-duda-access-token": {
                    readonly type: "string";
                    readonly default: "Bearer tefDCCAKciewk6FLmMjfC0cg1d4";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The specific access token to access this site API.";
                };
                readonly authorization: {
                    readonly type: "string";
                    readonly default: "Basic ZXhhbXBsZVVzZXI6bmljZXRyeQ==";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Your App Account's username and password, base64'd.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly limit: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly offset: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly results: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly description: {
                                readonly type: "string";
                                readonly examples: readonly ["The most amazing t shirt ever sold"];
                            };
                            readonly external_id: {
                                readonly type: "string";
                                readonly examples: readonly ["KTP9XGbSg2"];
                            };
                            readonly id: {
                                readonly type: "string";
                                readonly examples: readonly ["IakdKbiUiK"];
                            };
                            readonly images: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly alt: {
                                            readonly type: "string";
                                            readonly examples: readonly ["Image of fancy shirt"];
                                        };
                                        readonly url: {
                                            readonly type: "string";
                                            readonly examples: readonly ["https://images.pexels.com/photos/1020585/pexels-photo-1020585.jpeg"];
                                        };
                                    };
                                };
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly examples: readonly ["Amazing T-shirt"];
                            };
                            readonly options: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly choices: {
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly id: {
                                                        readonly type: "string";
                                                        readonly examples: readonly ["db3je27rg7"];
                                                    };
                                                    readonly value: {
                                                        readonly type: "string";
                                                        readonly examples: readonly ["45"];
                                                    };
                                                };
                                            };
                                        };
                                        readonly id: {
                                            readonly type: "string";
                                            readonly examples: readonly ["WMd1xylGrp"];
                                        };
                                        readonly name: {
                                            readonly type: "string";
                                            readonly examples: readonly ["Shirt size"];
                                        };
                                    };
                                };
                            };
                            readonly prices: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly compare_at_price: {
                                            readonly type: "string";
                                            readonly examples: readonly ["19.99"];
                                        };
                                        readonly currency: {
                                            readonly type: "string";
                                            readonly examples: readonly ["USD"];
                                        };
                                        readonly price: {
                                            readonly type: "string";
                                            readonly examples: readonly ["12.34"];
                                        };
                                    };
                                };
                            };
                            readonly seo: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly description: {
                                        readonly type: "string";
                                        readonly examples: readonly ["Amazing T-shirt made with 100% biologic cotton"];
                                    };
                                    readonly product_url: {
                                        readonly type: "string";
                                        readonly examples: readonly ["amazing-t-shirt"];
                                    };
                                    readonly title: {
                                        readonly type: "string";
                                        readonly examples: readonly ["Amazing T-shirt"];
                                    };
                                };
                            };
                            readonly sku: {
                                readonly type: "string";
                                readonly examples: readonly ["UGG-BB-PUR-06"];
                            };
                            readonly status: {
                                readonly type: "string";
                                readonly examples: readonly ["ACTIVE"];
                            };
                            readonly variations: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly external_id: {
                                            readonly type: "string";
                                            readonly examples: readonly ["KTP9XGbSg2"];
                                        };
                                        readonly id: {
                                            readonly type: "string";
                                            readonly examples: readonly ["KTP9XGbSg2"];
                                        };
                                        readonly images: {
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly alt: {
                                                        readonly type: "string";
                                                        readonly examples: readonly ["Image of fancy shirt"];
                                                    };
                                                    readonly url: {
                                                        readonly type: "string";
                                                        readonly examples: readonly ["https://images.pexels.com/photos/1020585/pexels-photo-1020585.jpeg"];
                                                    };
                                                };
                                            };
                                        };
                                        readonly options: {
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly choice_id: {
                                                        readonly type: "string";
                                                        readonly examples: readonly ["db3je27rg7"];
                                                    };
                                                    readonly choice_value: {
                                                        readonly type: "string";
                                                        readonly examples: readonly ["45"];
                                                    };
                                                    readonly option_id: {
                                                        readonly type: "string";
                                                        readonly examples: readonly ["WMd1xylGrp"];
                                                    };
                                                    readonly option_name: {
                                                        readonly type: "string";
                                                        readonly examples: readonly ["Shirt size"];
                                                    };
                                                };
                                            };
                                        };
                                        readonly price_difference: {
                                            readonly type: "string";
                                            readonly examples: readonly ["string"];
                                        };
                                        readonly quantity: {
                                            readonly type: "integer";
                                            readonly default: 0;
                                            readonly examples: readonly [25];
                                        };
                                        readonly sku: {
                                            readonly type: "string";
                                            readonly examples: readonly ["UGG-BB-PUR-06"];
                                        };
                                        readonly status: {
                                            readonly type: "string";
                                            readonly examples: readonly ["ACTIVE"];
                                        };
                                        readonly stock_status: {
                                            readonly type: "string";
                                            readonly examples: readonly ["IN_STOCK, OUT_OF_STOCK"];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
                readonly site_name: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly total_responses: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const AppListRefunds: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The unique identifier for the target site.";
                };
                readonly order_id: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The unique identifier for the target Order.";
                };
            };
            readonly required: readonly ["site_name", "order_id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly offset: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly default: 0;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Zero-based offset for elements (0..N)";
                };
                readonly limit: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The size of the page to be returned";
                };
                readonly sort: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Property used to sort orders";
                };
                readonly direction: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The sort direction, either \"asc\" or \"desc\"";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly offset: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly limit: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly total_responses: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly results: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                            readonly order_id: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                            readonly transaction_id: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                            readonly reason: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                            readonly items: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly id: {
                                            readonly type: "string";
                                            readonly examples: readonly ["string"];
                                        };
                                        readonly quantity: {
                                            readonly type: "integer";
                                            readonly default: 0;
                                            readonly examples: readonly [0];
                                        };
                                        readonly amount: {
                                            readonly type: "integer";
                                            readonly default: 0;
                                            readonly examples: readonly [0];
                                        };
                                        readonly taxes: {
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly id: {
                                                        readonly type: "string";
                                                        readonly examples: readonly ["string"];
                                                    };
                                                    readonly name: {
                                                        readonly type: "string";
                                                        readonly examples: readonly ["string"];
                                                    };
                                                    readonly rate: {
                                                        readonly type: "integer";
                                                        readonly default: 0;
                                                        readonly examples: readonly [0];
                                                    };
                                                    readonly amount: {
                                                        readonly type: "integer";
                                                        readonly default: 0;
                                                        readonly examples: readonly [0];
                                                    };
                                                    readonly provider: {
                                                        readonly type: "string";
                                                        readonly examples: readonly ["BUILT_IN"];
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                            readonly currency: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                            readonly tax_provider: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly provider: {
                                        readonly type: "string";
                                        readonly examples: readonly ["BUILT_IN"];
                                    };
                                    readonly avalara_reference_id: {
                                        readonly type: "string";
                                        readonly examples: readonly ["string"];
                                    };
                                };
                            };
                            readonly subtotal: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [0];
                            };
                            readonly taxes: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly id: {
                                            readonly type: "string";
                                            readonly examples: readonly ["string"];
                                        };
                                        readonly name: {
                                            readonly type: "string";
                                            readonly examples: readonly ["string"];
                                        };
                                        readonly rate: {
                                            readonly type: "integer";
                                            readonly default: 0;
                                            readonly examples: readonly [0];
                                        };
                                        readonly amount: {
                                            readonly type: "integer";
                                            readonly default: 0;
                                            readonly examples: readonly [0];
                                        };
                                        readonly provider: {
                                            readonly type: "string";
                                            readonly examples: readonly ["BUILT_IN"];
                                        };
                                    };
                                };
                            };
                            readonly total: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [0];
                            };
                            readonly created: {
                                readonly type: "string";
                                readonly examples: readonly ["2024-03-15T18:06:31.226Z"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly title: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly status: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly detail: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly instance: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp1: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp2: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp3: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly title: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly status: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly detail: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly instance: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp1: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp2: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp3: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly title: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly status: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly detail: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly instance: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp1: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp2: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp3: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly title: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly status: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly detail: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly instance: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp1: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp2: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp3: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const AppListShippingProviders: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The unique identifier for the target Site.";
                };
            };
            readonly required: readonly ["site_name"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "Basic {base64User:Pass}";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly "x-duda-access-token": {
                    readonly type: "string";
                    readonly default: "Bearer {access_token}";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly offset: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly limit: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly total_responses: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly results: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                            readonly live_shipping_methods_url: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                            readonly test_shipping_methods_url: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly title: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly status: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly detail: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly instance: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp1: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp2: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp3: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly title: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly status: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly detail: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly instance: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp1: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp2: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp3: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly title: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly status: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly detail: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly instance: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp1: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp2: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp3: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly title: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly status: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly detail: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly instance: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp1: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp2: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp3: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const AppMemberPasswordReset: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The unique identifier of the target site.";
                };
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The unique identifier of the member.";
                };
            };
            readonly required: readonly ["site_name", "id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "Basic {base64User:Pass}";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly "x-duda-access-token": {
                    readonly type: "string";
                    readonly default: "Bearer {access_token}";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly link: {
                    readonly type: "string";
                    readonly examples: readonly ["https://members-site.multiscreensite.com/rts/auth/public/users/password/redirect?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MjUxMzM4MDA4MzcsInVzZXJuYW1lIjoic29maWEuM0BkdWRhLmNvIiwidHlwZSI6IlJFU0VUX1BBU1NXT1JEIiwic2l0ZUFsaWFzIjoiNzVhMjk1YjIifQ.IeRbzv4vrB2ZnrMcCgnBOWTPTDuwA-FU_vUkQEIQPTY"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const AppPublishSiteWide: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly uuid: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "An already existing site wide HTML UUID.";
                };
            };
            readonly required: readonly ["site_name", "uuid"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "x-duda-access-token": {
                    readonly type: "string";
                    readonly default: "Bearer tefDCCAKciewk6FLmMjfC0cg1d4";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The specific access token to access this site API.";
                };
                readonly authorization: {
                    readonly type: "string";
                    readonly default: "Basic ZXhhbXBsZVVzZXI6bmljZXRyeQ==";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Your App Account's username and password, base64'd.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly location: {
                    readonly type: "string";
                    readonly examples: readonly ["BODY"];
                };
                readonly markup: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly uuid: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const AppSiteRepublish: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly ["site_name"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "x-duda-access-token": {
                    readonly type: "string";
                    readonly default: "Bearer tefDCCAKciewk6FLmMjfC0cg1d4";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The specific access token to access this site API.";
                };
                readonly authorization: {
                    readonly type: "string";
                    readonly default: "Basic ZXhhbXBsZVVzZXI6bmljZXRyeQ==";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Your App Account's username and password, based64'd.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "204": {
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const AppSiteUpload: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly RAW_BODY: {
                readonly type: "array";
                readonly items: {
                    readonly properties: {
                        readonly resource_type: {
                            readonly type: "string";
                            readonly default: "image";
                            readonly enum: readonly ["image"];
                            readonly description: "Default: image";
                        };
                        readonly src: {
                            readonly type: "string";
                            readonly description: "The location where Duda copies content from. Must be publically available.";
                        };
                    };
                    readonly type: "object";
                };
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly ["site_name"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "x-duda-access-token": {
                    readonly type: "string";
                    readonly default: "Bearer tefDCCAKciewk6FLmMjfC0cg1d4";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The specific access token to access this site API.";
                };
                readonly authorization: {
                    readonly type: "string";
                    readonly default: "Basic ZXhhbXBsZVVzZXI6bmljZXRyeQ==";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Your App Account's username and password, based64'd.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "201": {
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const AppStoreGetSite: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly ["site_name"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "x-duda-access-token": {
                    readonly type: "string";
                    readonly default: "Bearer tefDCCAKciewk6FLmMjfC0cg1d4";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The specific access token to access this site API.";
                };
                readonly authorization: {
                    readonly type: "string";
                    readonly default: "Basic ZXhhbXBsZVVzZXI6bmljZXRyeQ==";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Your App Account's username and password, based64'd.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly account_name: {
                    readonly type: "string";
                    readonly examples: readonly ["russ@duda.co"];
                };
                readonly site_seo: {
                    readonly type: "object";
                    readonly properties: {
                        readonly og_image: {};
                        readonly title: {};
                        readonly description: {};
                    };
                };
                readonly schemas: {
                    readonly type: "object";
                    readonly properties: {
                        readonly local_business: {
                            readonly type: "object";
                            readonly properties: {
                                readonly enabled: {
                                    readonly type: "boolean";
                                    readonly default: true;
                                    readonly examples: readonly [false];
                                };
                                readonly status: {};
                                readonly missing_required_fields: {};
                                readonly missing_recommended_fields: {};
                            };
                        };
                    };
                };
                readonly site_business_info: {
                    readonly type: "object";
                    readonly properties: {
                        readonly email: {
                            readonly type: "string";
                            readonly examples: readonly ["mymail@mailservice.com"];
                        };
                        readonly opentable_info: {
                            readonly type: "array";
                            readonly items: {};
                        };
                    };
                };
                readonly site_name: {
                    readonly type: "string";
                    readonly examples: readonly ["6198d674fe924478a3f1e0b2adc2ee3a"];
                };
                readonly template_id: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [1041972];
                };
                readonly site_default_domain: {
                    readonly type: "string";
                    readonly examples: readonly ["russ18408d87.sandbox.multiscreensite.com"];
                };
                readonly preview_site_url: {
                    readonly type: "string";
                    readonly examples: readonly ["http://russ.editor-sandbox.multiscreensite.com/preview/6198d674fe924478a3f1e0b2adc2ee3a"];
                };
                readonly edit_site_url: {
                    readonly type: "string";
                    readonly examples: readonly ["http://russ.editor-sandbox.multiscreensite.com/home/site/6198d674fe924478a3f1e0b2adc2ee3a"];
                };
                readonly overview_site_url: {
                    readonly type: "string";
                    readonly examples: readonly ["http://russ.editor-sandbox.multiscreensite.com/home/dashboard/overview/6198d674fe924478a3f1e0b2adc2ee3a"];
                };
                readonly force_https: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [false];
                };
                readonly lang: {
                    readonly type: "string";
                    readonly examples: readonly ["en"];
                };
                readonly modification_date: {
                    readonly type: "string";
                    readonly examples: readonly ["2022-11-18T23:43:23"];
                };
                readonly creation_date: {
                    readonly type: "string";
                    readonly examples: readonly ["2022-11-18T23:43:11"];
                };
                readonly publish_status: {
                    readonly type: "string";
                    readonly examples: readonly ["NOT_PUBLISHED_YET"];
                };
                readonly store_status: {
                    readonly type: "string";
                    readonly examples: readonly ["NONE"];
                };
                readonly cookie_notification: {
                    readonly type: "object";
                    readonly properties: {
                        readonly enabled: {
                            readonly type: "boolean";
                            readonly default: true;
                            readonly examples: readonly [false];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const AppUpdateManifest: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly UUID: {
                readonly type: "string";
                readonly description: "UUID of the App";
            };
            readonly webhooks: {
                readonly type: "object";
                readonly properties: {
                    readonly endpoint: {
                        readonly type: "string";
                        readonly description: "Endpoint where all webhooks are sent.";
                    };
                    readonly events: {
                        readonly type: "array";
                        readonly description: "An array of strings for webhooks you want sent. See documentation about what's allowed.";
                        readonly items: {
                            readonly type: "string";
                        };
                    };
                };
            };
            readonly scopes: {
                readonly type: "array";
                readonly description: "An array of strings of supported scopes. See documentation for all supported scopes.";
                readonly items: {
                    readonly type: "string";
                };
            };
            readonly public_key: {
                readonly type: "string";
                readonly description: "Your Apps public key, generated at time of App creation. Will never change.";
            };
            readonly installation_endpoint: {
                readonly type: "string";
                readonly description: "URL Where Duda will notify when a website installs your App.";
            };
            readonly uninstallation_endpoint: {
                readonly type: "string";
                readonly description: "URL Where Duda will notify when someone uninstalls your App.";
            };
            readonly updowngrade_installation_endpoint: {
                readonly type: "string";
                readonly description: "URL Where Duda will notify upon plan upgrade or change of state for your App.";
            };
            readonly base_sso_url: {
                readonly type: "string";
                readonly description: "URL of your App UI where Duda should SSO users into.";
            };
            readonly supported_locales: {
                readonly type: "array";
                readonly description: "Two character language codes your App supports.";
                readonly items: {
                    readonly type: "string";
                };
            };
            readonly app_profile: {
                readonly type: "object";
                readonly description: "An object containing language key that points to the profile for that language.";
                readonly properties: {
                    readonly app_name: {
                        readonly type: "string";
                        readonly description: "Name of your App.";
                    };
                    readonly app_logo: {
                        readonly type: "string";
                        readonly description: "Absolute URL to the logo of your App.";
                    };
                    readonly app_short_description: {
                        readonly type: "string";
                        readonly description: "A short description of your App.";
                    };
                    readonly app_long_description: {
                        readonly type: "string";
                        readonly description: "A long description of your App";
                    };
                    readonly public_page: {
                        readonly type: "string";
                        readonly description: "The URL to the home page for your app or company.";
                    };
                    readonly terms_of_service_page: {
                        readonly type: "string";
                        readonly description: "A URL to your terms of service.";
                    };
                    readonly privacy_note_page: {
                        readonly type: "string";
                        readonly description: "A URL to your privacy policy.";
                    };
                    readonly app_screenshots: {
                        readonly type: "array";
                        readonly items: {};
                    };
                };
            };
            readonly wl_app_profile: {
                readonly type: "object";
                readonly description: "The white labeled version of your App profile, keyed with a language code.";
                readonly properties: {
                    readonly app_name: {
                        readonly type: "string";
                        readonly description: "Name of your App.";
                    };
                    readonly app_logo: {
                        readonly type: "string";
                        readonly description: "Absolute URL to the logo of your App.";
                    };
                    readonly app_short_description: {
                        readonly type: "string";
                        readonly description: "A short description of your App.";
                    };
                    readonly app_long_description: {
                        readonly type: "string";
                        readonly description: "A long description of your App";
                    };
                    readonly public_page: {
                        readonly type: "string";
                        readonly description: "The URL to the home page for your app or company.";
                    };
                    readonly terms_of_service_page: {
                        readonly type: "string";
                        readonly description: "A URL to your terms of service.";
                    };
                    readonly privacy_note_page: {
                        readonly type: "string";
                        readonly description: "A URL to your privacy policy.";
                    };
                    readonly app_screenshots: {
                        readonly type: "array";
                        readonly items: {};
                    };
                };
            };
            readonly app_plans: {
                readonly type: "array";
                readonly items: {
                    readonly properties: {
                        readonly plan_uuid: {
                            readonly type: "string";
                            readonly description: "UUID of the plan.";
                        };
                        readonly plan_type: {
                            readonly type: "string";
                            readonly description: "The type of plan.";
                            readonly enum: readonly ["FREE", "TRIAL", "PAID"];
                        };
                        readonly is_hidden: {
                            readonly type: "boolean";
                            readonly description: "If the plan is shown to customers or not.";
                            readonly default: true;
                        };
                        readonly plan_grade: {
                            readonly type: "integer";
                            readonly description: "The order of the plan as it will show in the UI.";
                            readonly default: 0;
                            readonly format: "int32";
                            readonly minimum: -2147483648;
                            readonly maximum: 2147483647;
                        };
                        readonly plan_profiles: {
                            readonly type: "object";
                            readonly additionalProperties: true;
                        };
                    };
                    readonly type: "object";
                };
            };
            readonly default_plan_uuid: {
                readonly type: "string";
                readonly description: "Skips the select plan selection page and allows users to install only a specific starting plan. Plan must be free or trial.";
            };
            readonly required_fields: {
                readonly type: "array";
                readonly description: "Required fields that must exist in the content library before installing. Can be \"EMAIL\" and \"LOCATION\".";
                readonly items: {
                    readonly type: "string";
                };
            };
            readonly window_type: {
                readonly type: "string";
                readonly description: "How your App SSO is opened from Duda. IFRAME strongly recommended.";
                readonly enum: readonly ["IFRAME", "NEW_TAB"];
            };
            readonly visible_to_clients: {
                readonly type: "boolean";
                readonly description: "If the App will be shown to end clients (customers of an agency)";
                readonly default: true;
            };
            readonly is_in_beta: {
                readonly type: "boolean";
                readonly description: "If the App should be shown as 'coming soon' in the App Store.";
                readonly default: false;
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly app_uuid: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "UUID of the App";
                };
            };
            readonly required: readonly ["app_uuid"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly authorization: {
                    readonly type: "string";
                    readonly default: "Basic ZXhhbXBsZVVzZXI6bmljZXRyeQ==";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Your App Account's username and password, base64'd.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly uuid: {
                    readonly type: "string";
                    readonly examples: readonly ["2257f749-03a7-45c2-9e8a-ae5f5e6e072c"];
                };
                readonly webhooks: {
                    readonly type: "object";
                    readonly properties: {
                        readonly endpoint: {
                            readonly type: "string";
                            readonly examples: readonly ["https://temporary.com/endpoint"];
                        };
                        readonly events: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly examples: readonly ["CONTENT_LIB_CHANGED"];
                            };
                        };
                    };
                };
                readonly scopes: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly examples: readonly ["GET_WEBSITE"];
                    };
                };
                readonly public_key: {
                    readonly type: "string";
                    readonly examples: readonly ["MIIBI..."];
                };
                readonly installation_endpoint: {
                    readonly type: "string";
                    readonly examples: readonly ["https://temporary.com/endpoint"];
                };
                readonly uninstallation_endpoint: {
                    readonly type: "string";
                    readonly examples: readonly ["https://temporary.com/endpoint"];
                };
                readonly updowngrade_installation_endpoint: {
                    readonly type: "string";
                    readonly examples: readonly ["https://temporary.com/endpoint"];
                };
                readonly base_sso_url: {
                    readonly type: "string";
                    readonly examples: readonly ["https://temporary.com/sso"];
                };
                readonly supported_locales: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly examples: readonly ["en"];
                    };
                };
                readonly app_profile: {
                    readonly type: "object";
                    readonly properties: {
                        readonly en: {
                            readonly type: "object";
                            readonly properties: {
                                readonly app_name: {
                                    readonly type: "string";
                                    readonly examples: readonly ["Display name"];
                                };
                                readonly app_logo: {
                                    readonly type: "string";
                                    readonly examples: readonly ["https://temporary.com/imageLogo.png"];
                                };
                                readonly app_short_description: {
                                    readonly type: "string";
                                    readonly examples: readonly ["A short description goes here."];
                                };
                                readonly app_long_description: {
                                    readonly type: "string";
                                    readonly examples: readonly ["This app can do this a that"];
                                };
                                readonly public_page: {
                                    readonly type: "string";
                                    readonly examples: readonly ["https://temporary.com/ourproduct"];
                                };
                                readonly terms_of_service_page: {
                                    readonly type: "string";
                                    readonly examples: readonly ["https://temporary.com/terms_en"];
                                };
                                readonly privacy_note_page: {
                                    readonly type: "string";
                                    readonly examples: readonly ["https://temporary.com/privacy_en"];
                                };
                                readonly app_screenshots: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly image_url: {
                                                readonly type: "string";
                                                readonly examples: readonly ["https://temporary.com/image.jpg"];
                                            };
                                            readonly alt_text: {
                                                readonly type: "string";
                                                readonly examples: readonly ["Description of image above"];
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
                readonly wl_app_profile: {
                    readonly type: "object";
                    readonly properties: {
                        readonly en: {
                            readonly type: "object";
                            readonly properties: {
                                readonly app_name: {
                                    readonly type: "string";
                                    readonly examples: readonly ["White Labeled display name"];
                                };
                                readonly app_logo: {
                                    readonly type: "string";
                                    readonly examples: readonly ["https://temporary.com/imageLogo.png"];
                                };
                                readonly app_short_description: {
                                    readonly type: "string";
                                    readonly examples: readonly ["A short description goes here."];
                                };
                                readonly app_long_description: {
                                    readonly type: "string";
                                    readonly examples: readonly ["This app can do this a that"];
                                };
                                readonly app_screenshots: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly image_url: {
                                                readonly type: "string";
                                                readonly examples: readonly ["https://temporary.com/image.jpg"];
                                            };
                                            readonly alt_text: {
                                                readonly type: "string";
                                                readonly examples: readonly ["Description of image above"];
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
                readonly app_plans: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly plan_uuid: {
                                readonly type: "string";
                                readonly examples: readonly ["332653a3-df51-45ce-a873-fbb0b1ccb49f"];
                            };
                            readonly plan_type: {
                                readonly type: "string";
                                readonly examples: readonly ["free"];
                            };
                            readonly is_hidden: {
                                readonly type: "boolean";
                                readonly default: true;
                                readonly examples: readonly [false];
                            };
                            readonly plan_grade: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [0];
                            };
                            readonly plan_profiles: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly en: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly plan_name: {
                                                readonly type: "string";
                                                readonly examples: readonly ["First"];
                                            };
                                            readonly plan_subtitle: {
                                                readonly type: "string";
                                                readonly examples: readonly ["Start..."];
                                            };
                                            readonly plan_features: {
                                                readonly type: "array";
                                                readonly items: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["My first feature"];
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
                readonly default_plan_uuid: {
                    readonly type: "string";
                    readonly examples: readonly ["332653a3-df51-45ce-a873-fbb0b1ccb49f"];
                };
                readonly required_fields: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly examples: readonly ["EMAIL"];
                    };
                };
                readonly is_in_beta: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [false];
                };
                readonly visible_to_clients: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly examples: readonly [true];
                };
                readonly window_type: {
                    readonly type: "string";
                    readonly examples: readonly ["IFRAME|NEW_TAB"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const AppUpdateMember: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly groups: {
                readonly type: "array";
                readonly items: {
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly description: "The unique identifier of the member group.";
                        };
                    };
                    readonly type: "object";
                };
            };
            readonly status: {
                readonly type: "string";
                readonly description: "\"ACTIVE\", \"PENDING\", or \"UNAUTHORIZED\"";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The unique identifier of the target site.";
                };
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The unique identifier of the member.";
                };
            };
            readonly required: readonly ["site_name", "id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "Basic {base64User:Pass}";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly "x-duda-access-token": {
                    readonly type: "string";
                    readonly default: "Bearer {access_token}";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly email: {
                    readonly type: "string";
                    readonly examples: readonly ["john.doe@example.com"];
                };
                readonly first_name: {
                    readonly type: "string";
                    readonly examples: readonly ["John"];
                };
                readonly groups: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly examples: readonly ["15f4b3b4e-4b3b-4b3b-4b3b-4b3b4e4b3b4e"];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly examples: readonly ["Premium users"];
                            };
                        };
                    };
                };
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["123e4567-e89b-12d3-a456-426614174000"];
                };
                readonly last_login: {
                    readonly type: "string";
                    readonly examples: readonly ["2024-08-01T00:00:00Z"];
                };
                readonly last_name: {
                    readonly type: "string";
                    readonly examples: readonly ["Doe"];
                };
                readonly registered: {
                    readonly type: "string";
                    readonly examples: readonly ["2024-08-01T00:00:00Z"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["ACTIVE"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const AppUpdateMembershipGroup: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly name: {
                readonly type: "string";
                readonly description: "The name of the group.";
            };
            readonly pages: {
                readonly type: "array";
                readonly description: "The list of page uuids to be protected by this group.";
                readonly items: {
                    readonly type: "string";
                };
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The unique identifier of the target site.";
                };
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The unique identifier of the target group.";
                };
            };
            readonly required: readonly ["site_name", "id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "Basic {base64User:Pass}";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly "x-duda-access-token": {
                    readonly type: "string";
                    readonly default: "Bearer {access_token}";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["90f33a1b-27bb-4020-9f7d-99d6026547f0"];
                };
                readonly name: {
                    readonly type: "string";
                    readonly examples: readonly ["Premium site members"];
                };
                readonly pages: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly examples: readonly ["7b31a091a92049bba02315a3c718ecb1"];
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const AppUpdateOrder: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly status: {
                readonly type: "string";
                readonly enum: readonly ["IN_PROGRESS", "PROCESSED", "DISPUTED", "SHIPPED", "DELIVERED", "PENDING", "CANCELLED", "DISPATCHED"];
            };
            readonly email: {
                readonly type: "string";
                readonly description: "Email address of the shopper";
            };
            readonly items: {
                readonly type: "array";
                readonly items: {
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly description: "ID that references the item you want to update.";
                        };
                        readonly metadata: {
                            readonly type: "string";
                            readonly description: "This is the only updateable item in the items object. A metadata field related to the product that was sold.";
                        };
                    };
                    readonly required: readonly ["id"];
                    readonly type: "object";
                };
            };
            readonly billing_address: {
                readonly type: "object";
                readonly required: readonly ["address_1", "city", "postal_code"];
                readonly properties: {
                    readonly first_name: {
                        readonly type: "string";
                        readonly description: "First name of the shopper's billing address/details.";
                    };
                    readonly last_name: {
                        readonly type: "string";
                        readonly description: "Last name of the shopper's billing address/details.";
                    };
                    readonly full_name: {
                        readonly type: "string";
                        readonly description: "Full name name of the shopper's billing address/details.";
                    };
                    readonly address_1: {
                        readonly type: "string";
                        readonly description: "Line 1 of the address for billing details.";
                    };
                    readonly address_2: {
                        readonly type: "string";
                        readonly description: "Line 2 of the address for billing details. This is not always set.";
                    };
                    readonly city: {
                        readonly type: "string";
                        readonly description: "City of the billing address";
                    };
                    readonly region: {
                        readonly type: "string";
                        readonly description: "Region, state or other area for the billing address.";
                    };
                    readonly sub_locality: {
                        readonly type: "string";
                        readonly description: "The related sub_locality of the billing address. Often empty.";
                    };
                    readonly street_number: {
                        readonly type: "string";
                        readonly description: "The street number for the address.";
                    };
                    readonly street_name: {
                        readonly type: "string";
                        readonly description: "Street name for the billing address";
                    };
                    readonly country: {
                        readonly type: "string";
                        readonly description: "Country where the order took place.";
                    };
                    readonly postal_code: {
                        readonly type: "string";
                    };
                    readonly phone: {
                        readonly type: "string";
                    };
                };
            };
            readonly shipping_address: {
                readonly type: "object";
                readonly required: readonly ["address_1", "city", "postal_code"];
                readonly properties: {
                    readonly first_name: {
                        readonly type: "string";
                        readonly description: "First name of the shopper's billing address/details.";
                    };
                    readonly last_name: {
                        readonly type: "string";
                        readonly description: "Last name of the shopper's billing address/details.";
                    };
                    readonly full_name: {
                        readonly type: "string";
                        readonly description: "Full name name of the shopper's billing address/details.";
                    };
                    readonly address_1: {
                        readonly type: "string";
                        readonly description: "Line 1 of the address for billing details.";
                    };
                    readonly address_2: {
                        readonly type: "string";
                        readonly description: "Line 2 of the address for billing details. This is not always set.";
                    };
                    readonly city: {
                        readonly type: "string";
                        readonly description: "City of the billing address";
                    };
                    readonly region: {
                        readonly type: "string";
                        readonly description: "Region, state or other area for the billing address.";
                    };
                    readonly sub_locality: {
                        readonly type: "string";
                        readonly description: "The related sub_locality of the billing address. Often empty.";
                    };
                    readonly street_number: {
                        readonly type: "string";
                        readonly description: "The street number for the address.";
                    };
                    readonly street_name: {
                        readonly type: "string";
                        readonly description: "Street name for the billing address";
                    };
                    readonly country: {
                        readonly type: "string";
                        readonly description: "Country where the order took place.";
                    };
                    readonly postal_code: {
                        readonly type: "string";
                    };
                    readonly phone: {
                        readonly type: "string";
                    };
                };
            };
            readonly shipping_instructions: {
                readonly type: "string";
                readonly description: "A detailed description of shipping instructions for the merchant.";
            };
            readonly metadata: {
                readonly type: "object";
                readonly properties: {
                    readonly key: {
                        readonly type: "string";
                        readonly description: "Add/edit the key:value pairs.";
                    };
                };
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The unique identifier for the target Site.";
                };
                readonly order_id: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The unique identifier for the target Order.";
                };
            };
            readonly required: readonly ["site_name", "order_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly mode: {
                    readonly type: "string";
                    readonly examples: readonly ["TEST"];
                };
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["IN_PROGRESS"];
                };
                readonly email: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly invoice_number: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly items: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                            readonly product_id: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                            readonly variation_id: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                            readonly external_product_id: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                            readonly external_variation_id: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                            readonly image: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                            readonly options: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly name: {
                                            readonly type: "string";
                                            readonly examples: readonly ["string"];
                                        };
                                        readonly value: {
                                            readonly type: "string";
                                            readonly examples: readonly ["string"];
                                        };
                                    };
                                };
                            };
                            readonly quantity: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [0];
                            };
                            readonly shippable: {
                                readonly type: "boolean";
                                readonly default: true;
                                readonly examples: readonly [true];
                            };
                            readonly unit_price: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [0];
                            };
                            readonly unit_weight: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [0];
                            };
                            readonly unit_dimensions: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly height: {
                                        readonly type: "integer";
                                        readonly default: 0;
                                        readonly examples: readonly [0];
                                    };
                                    readonly width: {
                                        readonly type: "integer";
                                        readonly default: 0;
                                        readonly examples: readonly [0];
                                    };
                                    readonly length: {
                                        readonly type: "integer";
                                        readonly default: 0;
                                        readonly examples: readonly [0];
                                    };
                                };
                            };
                            readonly total: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [0];
                            };
                            readonly combined_weight: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [0];
                            };
                            readonly metadata: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                        };
                    };
                };
                readonly billing_address: {
                    readonly type: "object";
                    readonly properties: {
                        readonly first_name: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly last_name: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly full_name: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly address_1: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly address_2: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly street_number: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly street_name: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly city: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly sub_locality: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly region: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly country: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly postal_code: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly phone: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                    };
                };
                readonly shipping_address: {
                    readonly type: "object";
                    readonly properties: {
                        readonly first_name: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly last_name: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly full_name: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly address_1: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly address_2: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly street_number: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly street_name: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly city: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly sub_locality: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly region: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly country: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly postal_code: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly phone: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                    };
                };
                readonly shipping_method: {
                    readonly type: "object";
                    readonly properties: {
                        readonly name: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly cost: {
                            readonly type: "integer";
                            readonly default: 0;
                            readonly examples: readonly [0];
                        };
                    };
                };
                readonly shipping_instructions: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly discounts: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                            readonly savings: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [0];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                        };
                    };
                };
                readonly taxes: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly name: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                            readonly amount: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [0];
                            };
                            readonly rate: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [0];
                            };
                        };
                    };
                };
                readonly subtotal: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly total: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly payment: {
                    readonly type: "object";
                    readonly properties: {
                        readonly transaction_id: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly status: {
                            readonly type: "string";
                            readonly examples: readonly ["PAID"];
                        };
                        readonly currency: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly method: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                        readonly card_brand: {
                            readonly type: "string";
                            readonly examples: readonly ["NULL"];
                        };
                        readonly card_last_4: {
                            readonly type: "string";
                            readonly examples: readonly ["string"];
                        };
                    };
                };
                readonly refunds: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                            readonly amount: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [0];
                            };
                            readonly reason: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                            readonly created: {
                                readonly type: "string";
                                readonly examples: readonly ["2023-02-17T19:01:36.318Z"];
                            };
                        };
                    };
                };
                readonly tracking_url: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly tracking_number: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly created: {
                    readonly type: "string";
                    readonly examples: readonly ["2023-02-17T19:01:36.318Z"];
                };
                readonly user_agent: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly ip_address: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly metadata: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly title: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly status: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly detail: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly instance: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp1: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp2: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp3: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const AppUpdatePage: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly path: {
                readonly type: "string";
            };
            readonly header_html: {
                readonly type: "string";
            };
            readonly title: {
                readonly type: "string";
            };
            readonly seo: {
                readonly type: "object";
                readonly properties: {
                    readonly og_image: {
                        readonly type: "string";
                        readonly description: "Open Graph & Twitter Images";
                    };
                    readonly title: {
                        readonly type: "string";
                        readonly description: "Default title for pages which does not have one.";
                    };
                    readonly description: {
                        readonly type: "string";
                        readonly description: "Default description for pages which don't have them.";
                    };
                    readonly no_index: {
                        readonly type: "boolean";
                    };
                };
            };
            readonly draft_status: {
                readonly type: "string";
                readonly description: "If marked as STAGED_DRAFT, the page will be published alongside the next publish of the site. If DRAFT, then the page will not be published and a currently published page will be unpublished. You cannot set the home page as draft.";
                readonly enum: readonly ["STAGED_DRAFT", "DRAFT"];
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly page_uuid: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "UUID of the page you want to update";
                };
            };
            readonly required: readonly ["site_name", "page_uuid"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "x-duda-access-token": {
                    readonly type: "string";
                    readonly default: "Bearer tefDCCAKciewk6FLmMjfC0cg1d4";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The specific access token to access this site API.";
                };
                readonly authorization: {
                    readonly type: "string";
                    readonly default: "Basic ZXhhbXBsZVVzZXI6bmljZXRyeQ==";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Your App Account's username and password, base64'd.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly uuid: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly title: {
                    readonly type: "string";
                    readonly examples: readonly ["ABOUT"];
                };
                readonly path: {
                    readonly type: "string";
                    readonly examples: readonly ["about/abab"];
                };
                readonly seo: {
                    readonly type: "object";
                    readonly properties: {
                        readonly title: {
                            readonly type: "string";
                            readonly examples: readonly ["About Page"];
                        };
                        readonly description: {};
                        readonly no_index: {
                            readonly type: "boolean";
                            readonly default: true;
                            readonly examples: readonly [false];
                        };
                        readonly og_image: {
                            readonly type: "string";
                            readonly examples: readonly ["https://example.org/path/to/image.png"];
                        };
                    };
                };
                readonly header_html: {
                    readonly type: "string";
                    readonly examples: readonly ["<script>console.log('woo')</script>"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const AppUpdatePaymentGateway: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly live_payment_methods_url: {
                readonly type: "string";
                readonly description: "URL where we will send a request to get availalbe payment methods for the customer.";
            };
            readonly test_payment_methods_url: {
                readonly type: "string";
                readonly description: "URL where we will send a request to get availalbe payment methods for the customer, for test orders.";
            };
            readonly name: {
                readonly type: "string";
            };
            readonly description: {
                readonly type: "string";
            };
            readonly image: {
                readonly type: "string";
            };
            readonly icons: {
                readonly type: "array";
                readonly items: {
                    readonly type: "string";
                };
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The unique identifier for the target Site.";
                };
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The ID of the existing payment gateway.";
                };
            };
            readonly required: readonly ["site_name", "id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "x-duda-access-token": {
                    readonly type: "string";
                    readonly default: "Bearer tefDCCAKciewk6FLmMjfC0cg1d4";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The specific access token to access this site API.";
                };
                readonly authorization: {
                    readonly type: "string";
                    readonly default: "Basic cnVzc1dhczpoZXJlIQ==";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Your App Account's username and password, base64'd.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly live_payment_methods_url: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly test_payment_methods_url: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly name: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly description: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly image: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly icons: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly examples: readonly ["string"];
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const AppUpdateProduct: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["name"];
        readonly properties: {
            readonly name: {
                readonly type: "string";
                readonly description: "Name of the product.";
            };
            readonly sku: {
                readonly type: "string";
                readonly description: "Stock Keeping Unit. A unique ID that identifies the product in your inventory.";
            };
            readonly description: {
                readonly type: "string";
                readonly description: "A description of the product which gets displayed on the product page. Can be HTML format.";
            };
            readonly images: {
                readonly type: "array";
                readonly description: "Product Images. First image in array is primary.";
                readonly items: {
                    readonly properties: {
                        readonly alt: {
                            readonly type: "string";
                            readonly description: "Alt text for the image";
                        };
                        readonly url: {
                            readonly type: "string";
                            readonly description: "A URL directly to where the image is. Should be publically available.";
                        };
                    };
                    readonly type: "object";
                };
            };
            readonly seo: {
                readonly type: "object";
                readonly description: "SEO settings for the product.";
                readonly properties: {
                    readonly title: {
                        readonly type: "string";
                        readonly description: "Title of the prodcut page.";
                    };
                    readonly product_url: {
                        readonly type: "string";
                        readonly description: "The slug/path to the product.";
                    };
                    readonly description: {
                        readonly type: "string";
                        readonly description: "The meta description applied to the product.";
                    };
                };
            };
            readonly prices: {
                readonly type: "array";
                readonly description: "Product Prices. Today, we only support a single currency per product. We will extend this in the future.";
                readonly items: {
                    readonly properties: {
                        readonly compare_at_price: {
                            readonly type: "string";
                            readonly description: "The price at which the product is compared to.";
                        };
                        readonly price: {
                            readonly type: "string";
                            readonly description: "Price of the product.";
                        };
                        readonly currency: {
                            readonly type: "string";
                            readonly description: "The currency of the product.";
                            readonly enum: readonly ["USD", "CAD"];
                        };
                    };
                    readonly type: "object";
                };
            };
            readonly status: {
                readonly type: "string";
                readonly description: "If the product is available on the store.";
                readonly enum: readonly ["ACTIVE", "DRAFT"];
            };
            readonly options: {
                readonly type: "array";
                readonly description: "List of options and values to chose from, will be used to create the product variations";
                readonly items: {
                    readonly properties: {
                        readonly name: {
                            readonly type: "string";
                            readonly description: "Displayed option name";
                        };
                        readonly choices: {
                            readonly type: "array";
                            readonly description: "Values available for the given option";
                            readonly default: readonly [];
                            readonly items: {
                                readonly type: "string";
                            };
                        };
                    };
                    readonly required: readonly ["name", "choices"];
                    readonly type: "object";
                };
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The unique identifier for the target Site.";
                };
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Existing product ID you want to update.";
                };
            };
            readonly required: readonly ["site_name", "id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "x-duda-access-token": {
                    readonly type: "string";
                    readonly default: "Bearer tefDCCAKciewk6FLmMjfC0cg1d4";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "This sites specific access token.";
                };
                readonly authorization: {
                    readonly type: "string";
                    readonly default: "Basic ZXhhbXBsZVVzZXI6bmljZXRyeQ==";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Your App Account's username and password, base64'd.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly description: {
                    readonly type: "string";
                    readonly examples: readonly ["The most amazing t shirt ever sold"];
                };
                readonly external_id: {
                    readonly type: "string";
                    readonly examples: readonly ["KTP9XGbSg2"];
                };
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["IakdKbiUiK"];
                };
                readonly images: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly alt: {
                                readonly type: "string";
                                readonly examples: readonly ["Image of fancy shirt"];
                            };
                            readonly url: {
                                readonly type: "string";
                                readonly examples: readonly ["https://images.pexels.com/photos/1020585/pexels-photo-1020585.jpeg"];
                            };
                        };
                    };
                };
                readonly name: {
                    readonly type: "string";
                    readonly examples: readonly ["Amazing T-shirt"];
                };
                readonly options: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly choices: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly id: {
                                            readonly type: "string";
                                            readonly examples: readonly ["db3je27rg7"];
                                        };
                                        readonly value: {
                                            readonly type: "string";
                                            readonly examples: readonly ["45"];
                                        };
                                    };
                                };
                            };
                            readonly id: {
                                readonly type: "string";
                                readonly examples: readonly ["WMd1xylGrp"];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly examples: readonly ["Shirt size"];
                            };
                        };
                    };
                };
                readonly prices: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly compare_at_price: {
                                readonly type: "string";
                                readonly examples: readonly ["19.99"];
                            };
                            readonly currency: {
                                readonly type: "string";
                                readonly examples: readonly ["USD"];
                            };
                            readonly price: {
                                readonly type: "string";
                                readonly examples: readonly ["12.34"];
                            };
                        };
                    };
                };
                readonly seo: {
                    readonly type: "object";
                    readonly properties: {
                        readonly description: {
                            readonly type: "string";
                            readonly examples: readonly ["Amazing T-shirt made with 100% biologic cotton"];
                        };
                        readonly product_url: {
                            readonly type: "string";
                            readonly examples: readonly ["amazing-t-shirt"];
                        };
                        readonly title: {
                            readonly type: "string";
                            readonly examples: readonly ["Amazing T-shirt"];
                        };
                    };
                };
                readonly sku: {
                    readonly type: "string";
                    readonly examples: readonly ["UGG-BB-PUR-06"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["ACTIVE"];
                };
                readonly variations: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly external_id: {
                                readonly type: "string";
                                readonly examples: readonly ["KTP9XGbSg2"];
                            };
                            readonly id: {
                                readonly type: "string";
                                readonly examples: readonly ["KTP9XGbSg2"];
                            };
                            readonly images: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly alt: {
                                            readonly type: "string";
                                            readonly examples: readonly ["Image of fancy shirt"];
                                        };
                                        readonly url: {
                                            readonly type: "string";
                                            readonly examples: readonly ["https://images.pexels.com/photos/1020585/pexels-photo-1020585.jpeg"];
                                        };
                                    };
                                };
                            };
                            readonly options: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly choice_id: {
                                            readonly type: "string";
                                            readonly examples: readonly ["db3je27rg7"];
                                        };
                                        readonly choice_value: {
                                            readonly type: "string";
                                            readonly examples: readonly ["45"];
                                        };
                                        readonly option_id: {
                                            readonly type: "string";
                                            readonly examples: readonly ["WMd1xylGrp"];
                                        };
                                        readonly option_name: {
                                            readonly type: "string";
                                            readonly examples: readonly ["Shirt size"];
                                        };
                                    };
                                };
                            };
                            readonly price_difference: {
                                readonly type: "string";
                                readonly examples: readonly ["string"];
                            };
                            readonly quantity: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [25];
                            };
                            readonly sku: {
                                readonly type: "string";
                                readonly examples: readonly ["UGG-BB-PUR-06"];
                            };
                            readonly status: {
                                readonly type: "string";
                                readonly examples: readonly ["ACTIVE"];
                            };
                            readonly stock_status: {
                                readonly type: "string";
                                readonly examples: readonly ["IN_STOCK, OUT_OF_STOCK"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const AppUpdateProductVariation: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly external_id: {
                readonly type: "string";
                readonly description: "External id for variation";
            };
            readonly images: {
                readonly type: "array";
                readonly items: {
                    readonly properties: {
                        readonly alt: {
                            readonly type: "string";
                            readonly description: "Alt text for the image";
                        };
                        readonly url: {
                            readonly type: "string";
                            readonly description: "A URL directly to where the image is. Should be publically available.";
                        };
                    };
                    readonly type: "object";
                };
            };
            readonly price_difference: {
                readonly type: "string";
                readonly description: "Price difference from product price";
            };
            readonly quantity: {
                readonly type: "string";
                readonly description: "Available inventory, relevant only if setting on the product is managed inventory as true";
            };
            readonly sku: {
                readonly type: "string";
                readonly description: "Stock keeping unit of given variation";
            };
            readonly status: {
                readonly type: "string";
                readonly description: "[ HIDDEN, ACTIVE ]";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The unique identifier for the target Site.";
                };
                readonly product_id: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The unique identifier for the target Product.";
                };
                readonly variation_id: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The unique identifier for the target Variation.";
                };
            };
            readonly required: readonly ["site_name", "product_id", "variation_id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "x-duda-access-token": {
                    readonly type: "string";
                    readonly default: "Bearer tefDCCAKciewk6FLmMjfC0cg1d4";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The specific access token to access this site API.";
                };
                readonly authorization: {
                    readonly type: "string";
                    readonly default: "Basic ZXhhbXBsZVVzZXI6bmljZXRyeQ==";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Your App Account's username and password, base64'd.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly external_id: {
                    readonly type: "string";
                    readonly examples: readonly ["KTP9XGbSg2"];
                };
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["KTP9XGbSg2"];
                };
                readonly images: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly alt: {
                                readonly type: "string";
                                readonly examples: readonly ["Image of fancy shirt"];
                            };
                            readonly url: {
                                readonly type: "string";
                                readonly examples: readonly ["https://images.pexels.com/photos/1020585/pexels-photo-1020585.jpeg"];
                            };
                        };
                    };
                };
                readonly options: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly choice_id: {
                                readonly type: "string";
                                readonly examples: readonly ["db3je27rg7"];
                            };
                            readonly choice_value: {
                                readonly type: "string";
                                readonly examples: readonly ["45"];
                            };
                            readonly option_id: {
                                readonly type: "string";
                                readonly examples: readonly ["WMd1xylGrp"];
                            };
                            readonly option_name: {
                                readonly type: "string";
                                readonly examples: readonly ["Shirt size"];
                            };
                        };
                    };
                };
                readonly price_difference: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly quantity: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [25];
                };
                readonly sku: {
                    readonly type: "string";
                    readonly examples: readonly ["UGG-BB-PUR-06"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["HIDDEN"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const AppUpdateShippingProvider: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly "Shipping Provider": {
                readonly type: "object";
                readonly required: readonly ["live_shipping_rates_url"];
                readonly properties: {
                    readonly live_shipping_rates_url: {
                        readonly type: "string";
                    };
                    readonly test_shipping_rates_url: {
                        readonly type: "string";
                    };
                };
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The unique identifier for the target Site.";
                };
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The unique identifier for the target Shipping Rate.";
                };
            };
            readonly required: readonly ["site_name", "id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "Basic {base64User:Pass}";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly "x-duda-access-token": {
                    readonly type: "string";
                    readonly default: "Bearer {access_token}";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly live_shipping_methods_url: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly test_shipping_methods_url: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly title: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly status: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly detail: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly instance: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp1: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp2: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp3: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly title: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly status: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly detail: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly instance: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp1: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp2: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp3: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly title: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly status: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly detail: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly instance: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp1: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp2: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp3: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly title: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly status: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly examples: readonly [0];
                };
                readonly detail: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly instance: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp1: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp2: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly additionalProp3: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const AppUpdateSite: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly site_domain: {
                readonly type: "string";
                readonly description: "The primary domain of the website. Change this with extreme caution.";
                readonly default: "www.example.com";
            };
            readonly default_domain_prefix: {
                readonly type: "string";
                readonly description: "The prefix of the sub-domain or alternate the site first renders under.";
                readonly default: "example-website";
            };
            readonly external_uid: {
                readonly type: "string";
                readonly description: "Referrs to the owner of the website and some external reference of the website.";
                readonly default: "abcdefg";
            };
            readonly lang: {
                readonly type: "string";
                readonly description: "Two char lang code for the website default language.";
            };
            readonly additionalLanguages: {
                readonly type: "array";
                readonly description: "An array of secondary languages for the website, in two character format.";
                readonly items: {
                    readonly type: "string";
                };
            };
            readonly fav_icon: {
                readonly type: "string";
                readonly default: "https://someurl.com/icon.png";
            };
            readonly force_https: {
                readonly type: "boolean";
                readonly description: "If the website always redirect visitors to https or not.";
                readonly default: true;
            };
            readonly site_seo: {
                readonly type: "object";
                readonly properties: {
                    readonly og_image: {
                        readonly type: "string";
                        readonly description: "Open Graph & Twitter Images";
                    };
                    readonly title: {
                        readonly type: "string";
                        readonly description: "Default title for pages which does not have one.";
                    };
                    readonly description: {
                        readonly type: "string";
                        readonly description: "Default description for pages which don't have them.";
                    };
                    readonly no_index: {
                        readonly type: "boolean";
                    };
                };
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly ["site_name"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "x-duda-access-token": {
                    readonly type: "string";
                    readonly default: "Bearer tefDCCAKciewk6FLmMjfC0cg1d4";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The specific access token to access this site API.";
                };
                readonly authorization: {
                    readonly type: "string";
                    readonly default: "Basic ZXhhbXBsZVVzZXI6bmljZXRyeQ==";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Your App Account's username and password, based64'd.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const AppUpdateSwh: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly location: {
                readonly type: "string";
                readonly enum: readonly ["BODY", "HEAD", "CONTENT_END", "BEFORE_SCRIPTS"];
            };
            readonly markup: {
                readonly type: "string";
                readonly description: "HTML Markup to update";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
                readonly uuid: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "An already existing site wide HTML UUID.";
                };
            };
            readonly required: readonly ["site_name", "uuid"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "x-duda-access-token": {
                    readonly type: "string";
                    readonly default: "Bearer tefDCCAKciewk6FLmMjfC0cg1d4";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The specific access token to access this site API.";
                };
                readonly authorization: {
                    readonly type: "string";
                    readonly default: "Basic ZXhhbXBsZVVzZXI6bmljZXRyeQ==";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Your App Account's username and password, base64'd.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly location: {
                    readonly type: "string";
                    readonly examples: readonly ["BODY"];
                };
                readonly markup: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly uuid: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const CheckAppStoreHealth: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly authorization: {
                    readonly type: "string";
                    readonly default: "Basic ZXhhbXBsZVVzZXI6bmljZXRyeQ==";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Your App Account's username and password, base64'd.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const ClearCacheApp: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "A valid site name of an existing website";
                };
                readonly collection_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Name of the current collection";
                };
            };
            readonly required: readonly ["site_name", "collection_name"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const ClearCacheByExternalIdApp: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly external_id: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The external ID for the collections";
                };
            };
            readonly required: readonly ["external_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const CreateCollectionApp: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["name"];
        readonly properties: {
            readonly name: {
                readonly type: "string";
                readonly description: "The name of the collection (must not start with $)";
            };
            readonly customer_lock: {
                readonly type: "string";
                readonly description: "The lock state of the collection. Must be one of `unlocked`, `structure_locked` or `locked`";
                readonly default: "unlocked";
            };
            readonly static_page_bindable: {
                readonly type: "boolean";
                readonly description: "Allows collection data to be connected to widgets on a non-dynamic page.";
                readonly default: false;
            };
            readonly fields: {
                readonly type: "array";
                readonly description: "You must define at least one field when creating an internal collection (when `external_details.enabled` is set to false).";
                readonly items: {};
            };
            readonly external_details: {
                readonly type: "object";
                readonly properties: {};
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "A valid site name of an existing website";
                };
            };
            readonly required: readonly ["site_name"];
        }];
    };
    readonly response: {
        readonly "204": {
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const CreateFieldsApp: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly RAW_BODY: {
                readonly type: "array";
                readonly description: "Array of new fields to add to the collection";
                readonly items: {};
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "A valid site name of an existing website";
                };
                readonly collection_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Name of the collection to add the row(s)";
                };
            };
            readonly required: readonly ["site_name", "collection_name"];
        }];
    };
    readonly response: {
        readonly "204": {
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const CreateLocation: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "A valid site name of an existing website";
                };
            };
            readonly required: readonly ["site_name"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly authorization: {
                    readonly type: "string";
                    readonly default: "Basic ZXhhbXBsZVVzZXI6bmljZXRyeQ==";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Your App Account's username and password, base64'd.";
                };
                readonly "x-duda-access-token": {
                    readonly type: "string";
                    readonly default: "Bearer tefDCCAKciewk6FLmMjfC0cg1d4";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The specific access token to access this site API.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly uuid: {
                    readonly type: "string";
                    readonly examples: readonly ["367163873"];
                };
                readonly phones: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly phoneNumber: {
                                readonly type: "string";
                                readonly examples: readonly ["123-123-4321"];
                            };
                            readonly label: {
                                readonly type: "string";
                                readonly examples: readonly ["Main Phone"];
                            };
                        };
                    };
                };
                readonly emails: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly emailAddress: {
                                readonly type: "string";
                                readonly examples: readonly ["colorado@duda.co"];
                            };
                            readonly label: {
                                readonly type: "string";
                                readonly examples: readonly ["Colorado Office Email"];
                            };
                        };
                    };
                };
                readonly label: {
                    readonly type: "string";
                    readonly examples: readonly ["Duda Colorado - Goosetail Labs"];
                };
                readonly social_accounts: {
                    readonly type: "object";
                    readonly properties: {
                        readonly twitter: {
                            readonly type: "string";
                            readonly examples: readonly ["dudamobile"];
                        };
                        readonly facebook: {
                            readonly type: "string";
                            readonly examples: readonly ["duda"];
                        };
                    };
                };
                readonly address: {
                    readonly type: "object";
                    readonly properties: {
                        readonly streetAddress: {
                            readonly type: "string";
                            readonly examples: readonly ["197 S 104th St C"];
                        };
                        readonly postalCode: {
                            readonly type: "string";
                            readonly examples: readonly ["80027"];
                        };
                        readonly region: {
                            readonly type: "string";
                            readonly examples: readonly ["CO"];
                        };
                        readonly city: {
                            readonly type: "string";
                            readonly examples: readonly ["Louisville"];
                        };
                        readonly country: {
                            readonly type: "string";
                            readonly examples: readonly ["USA"];
                        };
                    };
                };
                readonly geo: {};
                readonly logo_url: {
                    readonly type: "string";
                    readonly examples: readonly ["https://www.duda.co/developers/REST-API-Reference/images/duda.svg"];
                };
                readonly business_hours: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly days: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "string";
                                    readonly examples: readonly ["MON"];
                                };
                            };
                            readonly open: {
                                readonly type: "string";
                                readonly examples: readonly ["09:00"];
                            };
                            readonly close: {
                                readonly type: "string";
                                readonly examples: readonly ["18:00"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const CreateRowsApp: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly RAW_BODY: {
                readonly type: "string";
                readonly format: "json";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "A valid site name of an existing website";
                };
                readonly collection_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Name of the collection to add the row(s)";
                };
            };
            readonly required: readonly ["site_name", "collection_name"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly type: "string";
                        readonly examples: readonly ["233"];
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const DeleteCollectionApp: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "A valid site name of an existing website";
                };
                readonly collection_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Name of the collection";
                };
            };
            readonly required: readonly ["site_name", "collection_name"];
        }];
    };
    readonly response: {
        readonly "204": {
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "401": {
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const DeleteFields: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "A valid site name of an existing website";
                };
                readonly collection_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Name of the collection to add the row(s)";
                };
                readonly field_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Name of the field in the collection";
                };
            };
            readonly required: readonly ["site_name", "collection_name", "field_name"];
        }];
    };
    readonly response: {
        readonly "204": {
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const DeleteLocation1: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "A valid site name of an existing website";
                };
                readonly location_id: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The `uuid` of the location";
                };
            };
            readonly required: readonly ["site_name", "location_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const DeleteRowsApp: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly RAW_BODY: {
                readonly type: "string";
                readonly description: "Array of row ids to delete";
                readonly default: "[\"146\", \"324\"]";
                readonly format: "json";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "A valid site name of an existing website";
                };
                readonly collection_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Name of the collection to add the row(s)";
                };
            };
            readonly required: readonly ["site_name", "collection_name"];
        }];
    };
    readonly response: {
        readonly "204": {
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const GetAccountDetails: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly ["site_name"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "x-duda-access-token": {
                    readonly type: "string";
                    readonly default: "Bearer tefDCCAKciewk6FLmMjfC0cg1d4";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The specific access token to access this site API.";
                };
                readonly authorization: {
                    readonly type: "string";
                    readonly default: "Basic ZXhhbXBsZVVzZXI6bmljZXRyeQ==";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Your App Account's username and password, based64'd.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly email: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly first_name: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly last_name: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly uuid: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const GetCollectionAppstore: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "A valid site name of an existing website";
                };
                readonly collection_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Name of the current collection";
                };
            };
            readonly required: readonly ["site_name", "collection_name"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "401": {
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const GetContentLibrary: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "A valid site name of an existing website";
                };
            };
            readonly required: readonly ["site_name"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly location_data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly phones: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly phoneNumber: {
                                        readonly type: "string";
                                        readonly examples: readonly ["123-123-1234"];
                                    };
                                    readonly label: {
                                        readonly type: "string";
                                        readonly examples: readonly ["Russ Phone"];
                                    };
                                };
                            };
                        };
                        readonly emails: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly emailAddress: {
                                        readonly type: "string";
                                        readonly examples: readonly ["api@duda.co"];
                                    };
                                    readonly label: {
                                        readonly type: "string";
                                        readonly examples: readonly ["API Email"];
                                    };
                                };
                            };
                        };
                        readonly label: {
                            readonly type: "string";
                            readonly examples: readonly ["Duda HQ"];
                        };
                        readonly social_accounts: {
                            readonly type: "object";
                            readonly properties: {
                                readonly tripadvisor: {
                                    readonly type: "string";
                                    readonly examples: readonly ["Restaurant_Review-g32849-d2394400-Reviews-Oren_s_Hummus_Shop-Palo_Alto_California.html"];
                                };
                                readonly youtube: {
                                    readonly type: "string";
                                    readonly examples: readonly ["UCPMwzOc1Su-s2z-J1xiU9ig"];
                                };
                                readonly facebook: {
                                    readonly type: "string";
                                    readonly examples: readonly ["duda"];
                                };
                                readonly yelp: {
                                    readonly type: "string";
                                    readonly examples: readonly ["orens-hummus-shop-palo-alto"];
                                };
                                readonly pinterest: {
                                    readonly type: "string";
                                    readonly examples: readonly ["michelleobama"];
                                };
                                readonly google_plus: {
                                    readonly type: "string";
                                    readonly examples: readonly ["+Dudamobile577"];
                                };
                                readonly linkedin: {
                                    readonly type: "string";
                                    readonly examples: readonly ["duda"];
                                };
                                readonly instagram: {
                                    readonly type: "string";
                                    readonly examples: readonly ["orenshummus"];
                                };
                                readonly snapchat: {
                                    readonly type: "string";
                                    readonly examples: readonly ["michelleobama"];
                                };
                                readonly twitter: {
                                    readonly type: "string";
                                    readonly examples: readonly ["dudamobile"];
                                };
                                readonly rss: {
                                    readonly type: "string";
                                    readonly examples: readonly ["https://www.duda.co/blog/feed/"];
                                };
                                readonly vimeo: {
                                    readonly type: "string";
                                    readonly examples: readonly ["dudamobile"];
                                };
                                readonly reddit: {
                                    readonly type: "string";
                                    readonly examples: readonly ["duda"];
                                };
                            };
                        };
                        readonly address: {
                            readonly type: "object";
                            readonly properties: {
                                readonly streetAddress: {
                                    readonly type: "string";
                                    readonly examples: readonly ["577 College Ave"];
                                };
                                readonly postalCode: {
                                    readonly type: "string";
                                    readonly examples: readonly ["94306"];
                                };
                                readonly region: {
                                    readonly type: "string";
                                    readonly examples: readonly ["CA"];
                                };
                                readonly city: {
                                    readonly type: "string";
                                    readonly examples: readonly ["Palo Alto"];
                                };
                                readonly country: {
                                    readonly type: "string";
                                    readonly examples: readonly ["US"];
                                };
                            };
                        };
                        readonly address_geolocation: {
                            readonly type: "string";
                            readonly examples: readonly ["1833 Harvard St NW, Washington, DC 20009, USA"];
                        };
                        readonly geo: {
                            readonly type: "object";
                            readonly properties: {
                                readonly longitude: {
                                    readonly type: "string";
                                    readonly examples: readonly ["-122.4757527166"];
                                };
                                readonly latitude: {
                                    readonly type: "string";
                                    readonly examples: readonly ["37.502439189002"];
                                };
                            };
                        };
                        readonly logo_url: {
                            readonly type: "string";
                            readonly examples: readonly ["https://du-cdn.multiscreensite.com/duda_website/img/home/agencies.svg"];
                        };
                        readonly business_hours: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly days: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "string";
                                            readonly examples: readonly ["SAT"];
                                        };
                                    };
                                    readonly open: {
                                        readonly type: "string";
                                        readonly examples: readonly ["00:00"];
                                    };
                                    readonly close: {
                                        readonly type: "string";
                                        readonly examples: readonly ["00:00"];
                                    };
                                };
                            };
                        };
                    };
                };
                readonly additional_locations: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly uuid: {
                                readonly type: "string";
                                readonly examples: readonly ["276169839"];
                            };
                            readonly phones: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly phoneNumber: {
                                            readonly type: "string";
                                            readonly examples: readonly ["123-123-1234"];
                                        };
                                        readonly label: {
                                            readonly type: "string";
                                            readonly examples: readonly [""];
                                        };
                                    };
                                };
                            };
                            readonly emails: {
                                readonly type: "array";
                                readonly items: {};
                            };
                            readonly label: {
                                readonly type: "string";
                                readonly examples: readonly ["Duda Tel Aviv"];
                            };
                            readonly social_accounts: {
                                readonly type: "object";
                                readonly properties: {};
                            };
                            readonly address: {
                                readonly type: "object";
                                readonly properties: {};
                            };
                            readonly geo: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly longitude: {
                                        readonly type: "string";
                                        readonly examples: readonly ["34.78337"];
                                    };
                                    readonly latitude: {
                                        readonly type: "string";
                                        readonly examples: readonly ["32.07605"];
                                    };
                                };
                            };
                            readonly logo_url: {};
                            readonly business_hours: {};
                        };
                    };
                };
                readonly site_texts: {
                    readonly type: "object";
                    readonly properties: {
                        readonly overview: {
                            readonly type: "string";
                            readonly examples: readonly ["Oh, Duda? Duda is a variation of \"Dude\", who just happens to be the main character in one of our favorite movies of all time: The Big Lebowski. You should watch it some time. Look out for that ferret!"];
                        };
                        readonly services: {
                            readonly type: "string";
                            readonly examples: readonly ["- Responsive Website Builder"];
                        };
                        readonly custom: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly label: {
                                        readonly type: "string";
                                        readonly examples: readonly ["Example CTA 1"];
                                    };
                                    readonly text: {
                                        readonly type: "string";
                                        readonly examples: readonly ["THE WEB DESIGN PLATFORM FOR Scaling Your Agency"];
                                    };
                                };
                            };
                        };
                        readonly about_us: {
                            readonly type: "string";
                            readonly examples: readonly ["Duda is a leading website builder for web professionals and agencies of all sizes. Our website builder enables you to build amazing, feature-rich websites that are perfectly suited to desktop, tablet and mobile. Our mobile builder enables you to build mobile-only sites from scratch, or based on an existing desktop site or Facebook business page. Duda allows professionals and agencies to build high-converting, personalized websites at scale. Duda optimizes each and every site for Google PageSpeed."];
                        };
                    };
                };
                readonly business_data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly name: {
                            readonly type: "string";
                            readonly examples: readonly ["Duda"];
                        };
                        readonly logo_url: {
                            readonly type: "string";
                            readonly examples: readonly ["https://www.duda.co/developers/REST-API-Reference/images/duda.svg"];
                        };
                    };
                };
                readonly site_images: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly label: {
                                readonly type: "string";
                                readonly examples: readonly ["Example Store Logo"];
                            };
                            readonly url: {
                                readonly type: "string";
                                readonly examples: readonly ["https://irt-cdn.multiscreensite.com/7536fe2010ed4f7ea68e21d0cb868e01/dms3rep/multi/ice_cream_logo_b_w-18-300x300.svg"];
                            };
                            readonly alt: {
                                readonly type: "string";
                                readonly examples: readonly ["Example Store Logo"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const GetLocation: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "A valid site name of an existing website";
                };
                readonly location_id: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The `id` of the location";
                };
            };
            readonly required: readonly ["site_name", "location_id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly authorization: {
                    readonly type: "string";
                    readonly default: "Basic ZXhhbXBsZVVzZXI6bmljZXRyeQ==";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Your App Account's username and password, based64'd.";
                };
                readonly "x-duda-access-token": {
                    readonly type: "string";
                    readonly default: "Bearer tefDCCAKciewk6FLmMjfC0cg1d4";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The specific access token to access this site API.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly uuid: {
                    readonly type: "string";
                    readonly examples: readonly ["367163873"];
                };
                readonly phones: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly phoneNumber: {
                                readonly type: "string";
                                readonly examples: readonly ["123-123-4321"];
                            };
                            readonly label: {
                                readonly type: "string";
                                readonly examples: readonly ["Main Phone"];
                            };
                        };
                    };
                };
                readonly emails: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly emailAddress: {
                                readonly type: "string";
                                readonly examples: readonly ["colorado@duda.co"];
                            };
                            readonly label: {
                                readonly type: "string";
                                readonly examples: readonly ["Colorado Office Email"];
                            };
                        };
                    };
                };
                readonly label: {
                    readonly type: "string";
                    readonly examples: readonly ["Duda Colorado - Goosetail Labs"];
                };
                readonly social_accounts: {
                    readonly type: "object";
                    readonly properties: {
                        readonly twitter: {
                            readonly type: "string";
                            readonly examples: readonly ["dudamobile"];
                        };
                        readonly facebook: {
                            readonly type: "string";
                            readonly examples: readonly ["duda"];
                        };
                    };
                };
                readonly address: {
                    readonly type: "object";
                    readonly properties: {
                        readonly streetAddress: {
                            readonly type: "string";
                            readonly examples: readonly ["197 S 104th St C"];
                        };
                        readonly postalCode: {
                            readonly type: "string";
                            readonly examples: readonly ["80027"];
                        };
                        readonly city: {
                            readonly type: "string";
                            readonly examples: readonly ["Louisville"];
                        };
                        readonly country: {
                            readonly type: "string";
                            readonly examples: readonly ["US"];
                        };
                    };
                };
                readonly address_geolocation: {
                    readonly type: "string";
                    readonly examples: readonly ["197 S 104th St C Louisville 80027 US"];
                };
                readonly geo: {
                    readonly type: "object";
                    readonly properties: {
                        readonly longitude: {};
                        readonly latitude: {};
                    };
                };
                readonly logo_url: {
                    readonly type: "string";
                    readonly examples: readonly ["https://www.duda.co/developers/REST-API-Reference/images/duda.svg"];
                };
                readonly business_hours: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly days: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "string";
                                    readonly examples: readonly ["MON"];
                                };
                            };
                            readonly open: {
                                readonly type: "string";
                                readonly examples: readonly ["09:00"];
                            };
                            readonly close: {
                                readonly type: "string";
                                readonly examples: readonly ["18:00"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const ListCollectionsV2: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "A valid site name of an existing website";
                };
            };
            readonly required: readonly ["site_name"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly name: {
                        readonly type: "string";
                        readonly examples: readonly ["events"];
                    };
                    readonly customer_lock: {
                        readonly type: "string";
                        readonly examples: readonly ["unlocked"];
                    };
                    readonly static_page_bindable: {
                        readonly type: "boolean";
                        readonly default: true;
                        readonly examples: readonly [false];
                    };
                    readonly item_count: {
                        readonly type: "integer";
                        readonly default: 0;
                        readonly examples: readonly [4];
                    };
                    readonly fields: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "object";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                    readonly examples: readonly ["date"];
                                };
                                readonly type: {
                                    readonly type: "string";
                                    readonly examples: readonly ["text"];
                                };
                            };
                        };
                    };
                    readonly values: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "object";
                            readonly properties: {
                                readonly id: {
                                    readonly type: "string";
                                    readonly examples: readonly ["144"];
                                };
                                readonly data: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly date: {
                                            readonly type: "string";
                                            readonly examples: readonly ["01/01/2019"];
                                        };
                                        readonly "entry-price": {
                                            readonly type: "string";
                                            readonly examples: readonly ["$40"];
                                        };
                                        readonly "event-image": {
                                            readonly type: "string";
                                            readonly examples: readonly ["https://irt-cdn.multiscreensite.com/md/dmip/dms3rep/multi/young-woman-portrait-blue-eyes.jpg"];
                                        };
                                        readonly location: {
                                            readonly type: "string";
                                            readonly examples: readonly ["San Francisco"];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const PublishContentLibrary: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "A valid site name of an existing website";
                };
            };
            readonly required: readonly ["site_name"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly authorization: {
                    readonly type: "string";
                    readonly default: "Basic ZXhhbXBsZVVzZXI6bmljZXRyeQ==";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Your App Account's username and password, base64'd.";
                };
                readonly "x-duda-access-token": {
                    readonly type: "string";
                    readonly default: "Bearer tefDCCAKciewk6FLmMjfC0cg1d4";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The specific access token to access this site API.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const UpdateCollectionApp: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["name"];
        readonly properties: {
            readonly name: {
                readonly type: "string";
                readonly description: "The new name of the collection (must not start with $)";
            };
            readonly customer_lock: {
                readonly type: "string";
                readonly description: "The lock state of the collection. Must be one of `unlocked`, `structure_locked` or `locked`";
                readonly default: "unlocked";
            };
            readonly static_page_bindable: {
                readonly type: "boolean";
                readonly description: "Allows collection data to be connected to widgets on a non-dynamic page.";
                readonly default: false;
            };
            readonly external_details: {
                readonly type: "object";
                readonly properties: {};
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "A valid site name of an existing website";
                };
                readonly current_collection_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Name of the current collection";
                };
            };
            readonly required: readonly ["site_name", "current_collection_name"];
        }];
    };
    readonly response: {
        readonly "204": {
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const UpdateContentLibrary: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "A valid site name of an existing website";
                };
            };
            readonly required: readonly ["site_name"];
        }];
    };
    readonly response: {
        readonly "204": {
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const UpdateFieldsApp: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly name: {
                readonly type: "string";
                readonly description: "The new field name (must not start with $)";
                readonly default: "new-field-name";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "A valid site name of an existing website";
                };
                readonly collection_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Name of the collection to add the row(s)";
                };
                readonly field_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Name of the field in the collection. (must not start with $)";
                };
            };
            readonly required: readonly ["site_name", "collection_name", "field_name"];
        }];
    };
    readonly response: {
        readonly "204": {
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const UpdateLocation1: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "A valid site name of an existing website";
                };
                readonly location_id: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The `id` of the location";
                };
            };
            readonly required: readonly ["site_name", "location_id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly authorization: {
                    readonly type: "string";
                    readonly default: "Basic ZXhhbXBsZVVzZXI6bmljZXRyeQ==";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Your App Account's username and password, base64'd.";
                };
                readonly "x-duda-access-token": {
                    readonly type: "string";
                    readonly default: "Bearer tefDCCAKciewk6FLmMjfC0cg1d4";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "The specific access token to access this site API.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "204": {
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const UpdateRowsApp: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly RAW_BODY: {
                readonly type: "string";
                readonly format: "json";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly site_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "A valid site name of an existing website";
                };
                readonly collection_name: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Name of the collection to add the row(s)";
                };
            };
            readonly required: readonly ["site_name", "collection_name"];
        }];
    };
    readonly response: {
        readonly "204": {
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
export { AppConfirmPayment, AppCreateAccessToken, AppCreateBatchMembershipInvitations, AppCreateMembershipGroup, AppCreateMembershipInvitation, AppCreatePaymentGateway, AppCreateProduct, AppCreateShippingProvider, AppCreateSiteWideHtml, AppDeleteMembers, AppDeleteMembershipGroup, AppDeleteMembershipInvitation, AppDeletePaymentGateway, AppDeleteProduct, AppDeleteShippingProvider, AppDeleteSwh, AppEcommUpdateSettings, AppEcommerceCreateProductOption, AppEcommerceCreateProductOptionChoice, AppEcommerceDeleteProductOption, AppEcommerceDeleteProductOptionChoice, AppEcommerceGetProductOption, AppEcommerceListProductOptions, AppEcommerceUpdateProductOption, AppEcommerceUpdateProductOptionChoice, AppGetAccountBranding, AppGetCart, AppGetEcommSettings, AppGetGroups, AppGetManifest, AppGetMemberById, AppGetMembers, AppGetMembershipGroup, AppGetMembershipInvitations, AppGetOrder, AppGetPages, AppGetPaymentGateway, AppGetPaymentSession, AppGetProduct, AppGetProductVariation, AppGetRefund, AppGetShippingProvider, AppGetStore, AppGetSwh, AppListAllSwh, AppListCarts, AppListOrders, AppListPaymentGateways, AppListProducts, AppListRefunds, AppListShippingProviders, AppMemberPasswordReset, AppPublishSiteWide, AppSiteRepublish, AppSiteUpload, AppStoreGetSite, AppUpdateManifest, AppUpdateMember, AppUpdateMembershipGroup, AppUpdateOrder, AppUpdatePage, AppUpdatePaymentGateway, AppUpdateProduct, AppUpdateProductVariation, AppUpdateShippingProvider, AppUpdateSite, AppUpdateSwh, CheckAppStoreHealth, ClearCacheApp, ClearCacheByExternalIdApp, CreateCollectionApp, CreateFieldsApp, CreateLocation, CreateRowsApp, DeleteCollectionApp, DeleteFields, DeleteLocation1, DeleteRowsApp, GetAccountDetails, GetCollectionAppstore, GetContentLibrary, GetLocation, ListCollectionsV2, PublishContentLibrary, UpdateCollectionApp, UpdateContentLibrary, UpdateFieldsApp, UpdateLocation1, UpdateRowsApp };
