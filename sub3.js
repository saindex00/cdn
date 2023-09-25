class CustomeStripePricingTable extends HTMLElement {
    constructor() {
        super();
        // Your custom element's initialization code here
        // You can access attributes and content inside this constructor
        const pricingTableId = this.getAttribute('pricing-table-id');
        const publishableKey = this.getAttribute('publishable-key');

        // Create the HTML content for your custom element
        const htmlContent = `
        <div>
    <div class="PricingTable is-whiteButtonText is-lightColorBackground has-fourItems flex-container direction-column justify-content-center align-items-center"
        data-testid="pricing-table-container"
        style="--pt-color-primary: #ec5424; background-color: rgb(255, 255, 255);">
        <div class="IntervalTabs-refContainer">
            <div class="Tabs IntervalTabs is-insettabs is-desktop">
                <div class="Tabs-Container">
                    <div role="tablist" aria-orientation="horizontal" aria-label="Billing intervals"
                        class="Tabs-TabList">
                        <div role="presentation"
                            class="Tabs-TabListItemContainer Tabs-TabListItemContainer--is-selected"><button
                                class="Tabs-TabListItem Tabs-TabListItem--is-selected" id="1-month-tab"
                                data-testid="1-month-tab-button" role="tab" type="button"
                                aria-controls="1-month-tab-panel" aria-label="Monthly" aria-selected="true" tabindex="0"
                                title="Monthly">
                                <div class="Tabs-TabListItemContent">
                                    <div class="Tabs-TabListPaymentMethod">
                                        <div class="Tabs-TabListPaymentLabel" data-text="Monthly">Monthly</div>
                                    </div>
                                </div>
                            </button></div>
                        <div role="presentation" class="Tabs-TabListItemContainer"><button class="Tabs-TabListItem"
                                id="1-year-tab" data-testid="1-year-tab-button" role="tab" type="button"
                                aria-controls="1-year-tab-panel" aria-label="Yearly" aria-selected="false" tabindex="-1"
                                title="Yearly">
                                <div class="Tabs-TabListItemContent">
                                    <div class="Tabs-TabListPaymentMethod">
                                        <div class="Tabs-TabListPaymentLabel" data-text="Yearly">Yearly</div>
                                    </div>
                                </div>
                            </button></div><span class="IntervalTabs-glider"
                            style="background-color: rgb(236, 84, 36); --offset: 2px; height: 36px; width: 117px;"></span>
                    </div>
                </div>
            </div>
        </div>
        <div class="PricingTable-grid">
            <div class="PriceColumn flex-container direction-column justify-content-flex-start align-items-center"
                data-testid="price-column" style="--pt-animate-in-order: 0;">
                <div
                    class="PriceColumn-content flex-container direction-column justify-content-flex-start align-items-center">
                    <div class="PriceColumn-aboutProduct flex-container direction-column">
                        <div class="PriceColumn-textAndProductImage flex-container">
                            <div class="PriceColumn-textContainerHeightAligner" style="height: 68px;">
                                <div class="PriceColumn-textContainer flex-container direction-column">
                                    <div class="PriceColumn-name flex-container"><span
                                            class="Text Text-color--default Text-fontSize--20 Text-fontWeight--600">Micro</span>
                                    </div><span
                                        class="PriceColumn-description Text Text-color--default Text-fontSize--14">Annual
                                        turnover: Up toS$5 million</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="PriceColumn-priceAndButton flex-container direction-column">
                        <div class="PriceColumn-priceContainerHeightAligner" style="height: 45px;">
                            <div class="PriceColumn-priceContainer">
                                <div class="flex-container spacing-4 direction-column align-items-flex-start">
                                    <div class="flex-container align-items-center"><span
                                            class="PriceColumn-price Text Text-color--default Text-fontSize--36 Text-fontWeight--700"><span>SGD&nbsp;500</span></span><span
                                            class="PriceColumn-interval Text Text-color--default Text-fontSize--13">per
                                            <br>month</span></div>
                                </div>
                            </div>
                        </div><button class="Button PriceColumn-button Button--primary Button--lg" type="button"
                            style="background-color: rgb(236, 84, 36); border-color: rgb(236, 84, 36);">
                            <div class="flex-container justify-content-center align-items-center"><span
                                    class="Text Text-color--default Text-fontWeight--500 Text--truncate">Subscribe</span>
                            </div>
                        </button>
                    </div>
                </div>
                <div class="PriceColumn-featureListContainer flex-container direction-column"><span
                        class="PriceColumn-featureListHeader Text Text-color--default Text-fontSize--14">This
                        includes:</span>
                    <div class="PriceColumn-featureList flex-container direction-column align-items-flex-start">
                        <div class="PriceColumn-feature flex-container align-items-flex-start">
                            <div class="PriceColumn-checkContainer flex-container"><svg
                                    class="InlineSVG Icon PriceColumn-check Icon--sm" focusable="false" fill="#1a1a1a"
                                    color="#1a1a1a" fill-opacity="0.5" height="16" viewBox="0 0 16 16" width="16">
                                    <path
                                        d="m8 16c-4.418278 0-8-3.581722-8-8s3.581722-8 8-8 8 3.581722 8 8-3.581722 8-8 8zm3.0832728-11.00479172-4.0832728 4.09057816-1.79289322-1.79289322c-.39052429-.39052429-1.02368927-.39052429-1.41421356 0s-.39052429 1.02368927 0 1.41421356l2.5 2.50000002c.39052429.3905243 1.02368927.3905243 1.41421356 0l4.79037962-4.79768495c.3905243-.3905243.3905243-1.02368927 0-1.41421357-.3905243-.39052429-1.0236893-.39052429-1.4142136 0z"
                                        fill-rule="evenodd"></path>
                                </svg></div><span
                                class="PriceColumn-featureText Text Text-color--default Text-fontSize--14">Essential
                                features and insights</span>
                        </div>
                        <div class="PriceColumn-feature flex-container align-items-flex-start">
                            <div class="PriceColumn-checkContainer flex-container"><svg
                                    class="InlineSVG Icon PriceColumn-check Icon--sm" focusable="false" fill="#1a1a1a"
                                    color="#1a1a1a" fill-opacity="0.5" height="16" viewBox="0 0 16 16" width="16">
                                    <path
                                        d="m8 16c-4.418278 0-8-3.581722-8-8s3.581722-8 8-8 8 3.581722 8 8-3.581722 8-8 8zm3.0832728-11.00479172-4.0832728 4.09057816-1.79289322-1.79289322c-.39052429-.39052429-1.02368927-.39052429-1.41421356 0s-.39052429 1.02368927 0 1.41421356l2.5 2.50000002c.39052429.3905243 1.02368927.3905243 1.41421356 0l4.79037962-4.79768495c.3905243-.3905243.3905243-1.02368927 0-1.41421357-.3905243-.39052429-1.0236893-.39052429-1.4142136 0z"
                                        fill-rule="evenodd"></path>
                                </svg></div><span
                                class="PriceColumn-featureText Text Text-color--default Text-fontSize--14">Unlimited
                                usage per month*</span>
                        </div>
                        <div class="PriceColumn-feature flex-container align-items-flex-start">
                            <div class="PriceColumn-checkContainer flex-container"><svg
                                    class="InlineSVG Icon PriceColumn-check Icon--sm" focusable="false" fill="#1a1a1a"
                                    color="#1a1a1a" fill-opacity="0.5" height="16" viewBox="0 0 16 16" width="16">
                                    <path
                                        d="m8 16c-4.418278 0-8-3.581722-8-8s3.581722-8 8-8 8 3.581722 8 8-3.581722 8-8 8zm3.0832728-11.00479172-4.0832728 4.09057816-1.79289322-1.79289322c-.39052429-.39052429-1.02368927-.39052429-1.41421356 0s-.39052429 1.02368927 0 1.41421356l2.5 2.50000002c.39052429.3905243 1.02368927.3905243 1.41421356 0l4.79037962-4.79768495c.3905243-.3905243.3905243-1.02368927 0-1.41421357-.3905243-.39052429-1.0236893-.39052429-1.4142136 0z"
                                        fill-rule="evenodd"></path>
                                </svg></div><span
                                class="PriceColumn-featureText Text Text-color--default Text-fontSize--14">Expression
                                Choices (Writing, Speech, Music, Images)</span>
                        </div>
                        <div class="PriceColumn-feature flex-container align-items-flex-start">
                            <div class="PriceColumn-checkContainer flex-container"><svg
                                    class="InlineSVG Icon PriceColumn-check Icon--sm" focusable="false" fill="#1a1a1a"
                                    color="#1a1a1a" fill-opacity="0.5" height="16" viewBox="0 0 16 16" width="16">
                                    <path
                                        d="m8 16c-4.418278 0-8-3.581722-8-8s3.581722-8 8-8 8 3.581722 8 8-3.581722 8-8 8zm3.0832728-11.00479172-4.0832728 4.09057816-1.79289322-1.79289322c-.39052429-.39052429-1.02368927-.39052429-1.41421356 0s-.39052429 1.02368927 0 1.41421356l2.5 2.50000002c.39052429.3905243 1.02368927.3905243 1.41421356 0l4.79037962-4.79768495c.3905243-.3905243.3905243-1.02368927 0-1.41421357-.3905243-.39052429-1.0236893-.39052429-1.4142136 0z"
                                        fill-rule="evenodd"></path>
                                </svg></div><span
                                class="PriceColumn-featureText Text Text-color--default Text-fontSize--14"> Business
                                hours email &amp; phone support</span>
                        </div>
                        <div class="PriceColumn-feature flex-container align-items-flex-start">
                            <div class="PriceColumn-checkContainer flex-container"><svg
                                    class="InlineSVG Icon PriceColumn-check Icon--sm" focusable="false" fill="#1a1a1a"
                                    color="#1a1a1a" fill-opacity="0.5" height="16" viewBox="0 0 16 16" width="16">
                                    <path
                                        d="m8 16c-4.418278 0-8-3.581722-8-8s3.581722-8 8-8 8 3.581722 8 8-3.581722 8-8 8zm3.0832728-11.00479172-4.0832728 4.09057816-1.79289322-1.79289322c-.39052429-.39052429-1.02368927-.39052429-1.41421356 0s-.39052429 1.02368927 0 1.41421356l2.5 2.50000002c.39052429.3905243 1.02368927.3905243 1.41421356 0l4.79037962-4.79768495c.3905243-.3905243.3905243-1.02368927 0-1.41421357-.3905243-.39052429-1.0236893-.39052429-1.4142136 0z"
                                        fill-rule="evenodd"></path>
                                </svg></div><span
                                class="PriceColumn-featureText Text Text-color--default Text-fontSize--14">15 mins
                                Dedicated Result Consultation (3 blocks/ month)</span>
                        </div>
                        <div class="PriceColumn-feature flex-container align-items-flex-start">
                            <div class="PriceColumn-checkContainer flex-container"><svg
                                    class="InlineSVG Icon PriceColumn-check Icon--sm" focusable="false" fill="#1a1a1a"
                                    color="#1a1a1a" fill-opacity="0.5" height="16" viewBox="0 0 16 16" width="16">
                                    <path
                                        d="m8 16c-4.418278 0-8-3.581722-8-8s3.581722-8 8-8 8 3.581722 8 8-3.581722 8-8 8zm3.0832728-11.00479172-4.0832728 4.09057816-1.79289322-1.79289322c-.39052429-.39052429-1.02368927-.39052429-1.41421356 0s-.39052429 1.02368927 0 1.41421356l2.5 2.50000002c.39052429.3905243 1.02368927.3905243 1.41421356 0l4.79037962-4.79768495c.3905243-.3905243.3905243-1.02368927 0-1.41421357-.3905243-.39052429-1.0236893-.39052429-1.4142136 0z"
                                        fill-rule="evenodd"></path>
                                </svg></div><span
                                class="PriceColumn-featureText Text Text-color--default Text-fontSize--14">Including One
                                Time Tuning Setup</span>
                        </div>
                        <div class="PriceColumn-feature flex-container align-items-flex-start">
                            <div class="PriceColumn-checkContainer flex-container"><svg
                                    class="InlineSVG Icon PriceColumn-check Icon--sm" focusable="false" fill="#1a1a1a"
                                    color="#1a1a1a" fill-opacity="0.5" height="16" viewBox="0 0 16 16" width="16">
                                    <path
                                        d="m8 16c-4.418278 0-8-3.581722-8-8s3.581722-8 8-8 8 3.581722 8 8-3.581722 8-8 8zm3.0832728-11.00479172-4.0832728 4.09057816-1.79289322-1.79289322c-.39052429-.39052429-1.02368927-.39052429-1.41421356 0s-.39052429 1.02368927 0 1.41421356l2.5 2.50000002c.39052429.3905243 1.02368927.3905243 1.41421356 0l4.79037962-4.79768495c.3905243-.3905243.3905243-1.02368927 0-1.41421357-.3905243-.39052429-1.0236893-.39052429-1.4142136 0z"
                                        fill-rule="evenodd"></path>
                                </svg></div><span
                                class="PriceColumn-featureText Text Text-color--default Text-fontSize--14">Subscription
                                excluding One Time Setup Fee of S$199</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="PriceColumn flex-container direction-column justify-content-flex-start align-items-center"
                data-testid="price-column" style="--pt-animate-in-order: 1;">
                <div
                    class="PriceColumn-content flex-container direction-column justify-content-flex-start align-items-center">
                    <div class="PriceColumn-aboutProduct flex-container direction-column">
                        <div class="PriceColumn-textAndProductImage flex-container">
                            <div class="PriceColumn-textContainerHeightAligner" style="height: 68px;">
                                <div class="PriceColumn-textContainer flex-container direction-column">
                                    <div class="PriceColumn-name flex-container"><span
                                            class="Text Text-color--default Text-fontSize--20 Text-fontWeight--600">Small</span>
                                    </div><span
                                        class="PriceColumn-description Text Text-color--default Text-fontSize--14">Annual
                                        turnover: Up toS$25 million</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="PriceColumn-priceAndButton flex-container direction-column">
                        <div class="PriceColumn-priceContainerHeightAligner" style="height: 45px;">
                            <div class="PriceColumn-priceContainer">
                                <div class="flex-container spacing-4 direction-column align-items-flex-start">
                                    <div class="flex-container align-items-center"><span
                                            class="PriceColumn-price Text Text-color--default Text-fontSize--36 Text-fontWeight--700"><span>SGD&nbsp;2,000</span></span><span
                                            class="PriceColumn-interval Text Text-color--default Text-fontSize--13">per
                                            <br>month</span></div>
                                </div>
                            </div>
                        </div><button class="Button PriceColumn-button Button--primary Button--lg" type="button"
                            style="background-color: rgb(236, 84, 36); border-color: rgb(236, 84, 36);">
                            <div class="flex-container justify-content-center align-items-center"><span
                                    class="Text Text-color--default Text-fontWeight--500 Text--truncate">Subscribe</span>
                            </div>
                        </button>
                    </div>
                </div>
                <div class="PriceColumn-featureListContainer flex-container direction-column"><span
                        class="PriceColumn-featureListHeader Text Text-color--default Text-fontSize--14">This
                        includes:</span>
                    <div class="PriceColumn-featureList flex-container direction-column align-items-flex-start">
                        <div class="PriceColumn-feature flex-container align-items-flex-start">
                            <div class="PriceColumn-checkContainer flex-container"><svg
                                    class="InlineSVG Icon PriceColumn-check Icon--sm" focusable="false" fill="#1a1a1a"
                                    color="#1a1a1a" fill-opacity="0.5" height="16" viewBox="0 0 16 16" width="16">
                                    <path
                                        d="m8 16c-4.418278 0-8-3.581722-8-8s3.581722-8 8-8 8 3.581722 8 8-3.581722 8-8 8zm3.0832728-11.00479172-4.0832728 4.09057816-1.79289322-1.79289322c-.39052429-.39052429-1.02368927-.39052429-1.41421356 0s-.39052429 1.02368927 0 1.41421356l2.5 2.50000002c.39052429.3905243 1.02368927.3905243 1.41421356 0l4.79037962-4.79768495c.3905243-.3905243.3905243-1.02368927 0-1.41421357-.3905243-.39052429-1.0236893-.39052429-1.4142136 0z"
                                        fill-rule="evenodd"></path>
                                </svg></div><span
                                class="PriceColumn-featureText Text Text-color--default Text-fontSize--14">
                                Comprehensive features and insights</span>
                        </div>
                        <div class="PriceColumn-feature flex-container align-items-flex-start">
                            <div class="PriceColumn-checkContainer flex-container"><svg
                                    class="InlineSVG Icon PriceColumn-check Icon--sm" focusable="false" fill="#1a1a1a"
                                    color="#1a1a1a" fill-opacity="0.5" height="16" viewBox="0 0 16 16" width="16">
                                    <path
                                        d="m8 16c-4.418278 0-8-3.581722-8-8s3.581722-8 8-8 8 3.581722 8 8-3.581722 8-8 8zm3.0832728-11.00479172-4.0832728 4.09057816-1.79289322-1.79289322c-.39052429-.39052429-1.02368927-.39052429-1.41421356 0s-.39052429 1.02368927 0 1.41421356l2.5 2.50000002c.39052429.3905243 1.02368927.3905243 1.41421356 0l4.79037962-4.79768495c.3905243-.3905243.3905243-1.02368927 0-1.41421357-.3905243-.39052429-1.0236893-.39052429-1.4142136 0z"
                                        fill-rule="evenodd"></path>
                                </svg></div><span
                                class="PriceColumn-featureText Text Text-color--default Text-fontSize--14">Unlimited
                                usage per month*</span>
                        </div>
                        <div class="PriceColumn-feature flex-container align-items-flex-start">
                            <div class="PriceColumn-checkContainer flex-container"><svg
                                    class="InlineSVG Icon PriceColumn-check Icon--sm" focusable="false" fill="#1a1a1a"
                                    color="#1a1a1a" fill-opacity="0.5" height="16" viewBox="0 0 16 16" width="16">
                                    <path
                                        d="m8 16c-4.418278 0-8-3.581722-8-8s3.581722-8 8-8 8 3.581722 8 8-3.581722 8-8 8zm3.0832728-11.00479172-4.0832728 4.09057816-1.79289322-1.79289322c-.39052429-.39052429-1.02368927-.39052429-1.41421356 0s-.39052429 1.02368927 0 1.41421356l2.5 2.50000002c.39052429.3905243 1.02368927.3905243 1.41421356 0l4.79037962-4.79768495c.3905243-.3905243.3905243-1.02368927 0-1.41421357-.3905243-.39052429-1.0236893-.39052429-1.4142136 0z"
                                        fill-rule="evenodd"></path>
                                </svg></div><span
                                class="PriceColumn-featureText Text Text-color--default Text-fontSize--14">Expression
                                Choices (Writing, Speech, Music, Images)</span>
                        </div>
                        <div class="PriceColumn-feature flex-container align-items-flex-start">
                            <div class="PriceColumn-checkContainer flex-container"><svg
                                    class="InlineSVG Icon PriceColumn-check Icon--sm" focusable="false" fill="#1a1a1a"
                                    color="#1a1a1a" fill-opacity="0.5" height="16" viewBox="0 0 16 16" width="16">
                                    <path
                                        d="m8 16c-4.418278 0-8-3.581722-8-8s3.581722-8 8-8 8 3.581722 8 8-3.581722 8-8 8zm3.0832728-11.00479172-4.0832728 4.09057816-1.79289322-1.79289322c-.39052429-.39052429-1.02368927-.39052429-1.41421356 0s-.39052429 1.02368927 0 1.41421356l2.5 2.50000002c.39052429.3905243 1.02368927.3905243 1.41421356 0l4.79037962-4.79768495c.3905243-.3905243.3905243-1.02368927 0-1.41421357-.3905243-.39052429-1.0236893-.39052429-1.4142136 0z"
                                        fill-rule="evenodd"></path>
                                </svg></div><span
                                class="PriceColumn-featureText Text Text-color--default Text-fontSize--14">Business
                                hours email &amp; phone support</span>
                        </div>
                        <div class="PriceColumn-feature flex-container align-items-flex-start">
                            <div class="PriceColumn-checkContainer flex-container"><svg
                                    class="InlineSVG Icon PriceColumn-check Icon--sm" focusable="false" fill="#1a1a1a"
                                    color="#1a1a1a" fill-opacity="0.5" height="16" viewBox="0 0 16 16" width="16">
                                    <path
                                        d="m8 16c-4.418278 0-8-3.581722-8-8s3.581722-8 8-8 8 3.581722 8 8-3.581722 8-8 8zm3.0832728-11.00479172-4.0832728 4.09057816-1.79289322-1.79289322c-.39052429-.39052429-1.02368927-.39052429-1.41421356 0s-.39052429 1.02368927 0 1.41421356l2.5 2.50000002c.39052429.3905243 1.02368927.3905243 1.41421356 0l4.79037962-4.79768495c.3905243-.3905243.3905243-1.02368927 0-1.41421357-.3905243-.39052429-1.0236893-.39052429-1.4142136 0z"
                                        fill-rule="evenodd"></path>
                                </svg></div><span
                                class="PriceColumn-featureText Text Text-color--default Text-fontSize--14">15 mins
                                Dedicated Result Consultation (10 blocks/month)</span>
                        </div>
                        <div class="PriceColumn-feature flex-container align-items-flex-start">
                            <div class="PriceColumn-checkContainer flex-container"><svg
                                    class="InlineSVG Icon PriceColumn-check Icon--sm" focusable="false" fill="#1a1a1a"
                                    color="#1a1a1a" fill-opacity="0.5" height="16" viewBox="0 0 16 16" width="16">
                                    <path
                                        d="m8 16c-4.418278 0-8-3.581722-8-8s3.581722-8 8-8 8 3.581722 8 8-3.581722 8-8 8zm3.0832728-11.00479172-4.0832728 4.09057816-1.79289322-1.79289322c-.39052429-.39052429-1.02368927-.39052429-1.41421356 0s-.39052429 1.02368927 0 1.41421356l2.5 2.50000002c.39052429.3905243 1.02368927.3905243 1.41421356 0l4.79037962-4.79768495c.3905243-.3905243.3905243-1.02368927 0-1.41421357-.3905243-.39052429-1.0236893-.39052429-1.4142136 0z"
                                        fill-rule="evenodd"></path>
                                </svg></div><span
                                class="PriceColumn-featureText Text Text-color--default Text-fontSize--14">2 Department
                                Head Access</span>
                        </div>
                        <div class="PriceColumn-feature flex-container align-items-flex-start">
                            <div class="PriceColumn-checkContainer flex-container"><svg
                                    class="InlineSVG Icon PriceColumn-check Icon--sm" focusable="false" fill="#1a1a1a"
                                    color="#1a1a1a" fill-opacity="0.5" height="16" viewBox="0 0 16 16" width="16">
                                    <path
                                        d="m8 16c-4.418278 0-8-3.581722-8-8s3.581722-8 8-8 8 3.581722 8 8-3.581722 8-8 8zm3.0832728-11.00479172-4.0832728 4.09057816-1.79289322-1.79289322c-.39052429-.39052429-1.02368927-.39052429-1.41421356 0s-.39052429 1.02368927 0 1.41421356l2.5 2.50000002c.39052429.3905243 1.02368927.3905243 1.41421356 0l4.79037962-4.79768495c.3905243-.3905243.3905243-1.02368927 0-1.41421357-.3905243-.39052429-1.0236893-.39052429-1.4142136 0z"
                                        fill-rule="evenodd"></path>
                                </svg></div><span
                                class="PriceColumn-featureText Text Text-color--default Text-fontSize--14">Including One
                                Time Tuning Setup</span>
                        </div>
                        <div class="PriceColumn-feature flex-container align-items-flex-start">
                            <div class="PriceColumn-checkContainer flex-container"><svg
                                    class="InlineSVG Icon PriceColumn-check Icon--sm" focusable="false" fill="#1a1a1a"
                                    color="#1a1a1a" fill-opacity="0.5" height="16" viewBox="0 0 16 16" width="16">
                                    <path
                                        d="m8 16c-4.418278 0-8-3.581722-8-8s3.581722-8 8-8 8 3.581722 8 8-3.581722 8-8 8zm3.0832728-11.00479172-4.0832728 4.09057816-1.79289322-1.79289322c-.39052429-.39052429-1.02368927-.39052429-1.41421356 0s-.39052429 1.02368927 0 1.41421356l2.5 2.50000002c.39052429.3905243 1.02368927.3905243 1.41421356 0l4.79037962-4.79768495c.3905243-.3905243.3905243-1.02368927 0-1.41421357-.3905243-.39052429-1.0236893-.39052429-1.4142136 0z"
                                        fill-rule="evenodd"></path>
                                </svg></div><span
                                class="PriceColumn-featureText Text Text-color--default Text-fontSize--14">Subscription
                                excluding One Time Setup Fee of S$599</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="PriceColumn flex-container direction-column justify-content-flex-start align-items-center"
                data-testid="price-column" style="--pt-animate-in-order: 2;">
                <div
                    class="PriceColumn-content flex-container direction-column justify-content-flex-start align-items-center">
                    <div class="PriceColumn-aboutProduct flex-container direction-column">
                        <div class="PriceColumn-textAndProductImage flex-container">
                            <div class="PriceColumn-textContainerHeightAligner" style="height: 68px;">
                                <div class="PriceColumn-textContainer flex-container direction-column">
                                    <div class="PriceColumn-name flex-container"><span
                                            class="Text Text-color--default Text-fontSize--20 Text-fontWeight--600">Medium</span>
                                    </div><span
                                        class="PriceColumn-description Text Text-color--default Text-fontSize--14">Annual
                                        turnover: Up toS$100 million</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="PriceColumn-priceAndButton flex-container direction-column">
                        <div class="PriceColumn-priceContainerHeightAligner" style="height: 45px;">
                            <div class="PriceColumn-priceContainer">
                                <div class="flex-container spacing-4 direction-column align-items-flex-start">
                                    <div class="flex-container align-items-center"><span
                                            class="PriceColumn-price Text Text-color--default Text-fontSize--32 Text-fontWeight--700"><span>SGD&nbsp;10,000</span></span><span
                                            class="PriceColumn-interval Text Text-color--default Text-fontSize--13">per
                                            <br>month</span></div>
                                </div>
                            </div>
                        </div><button class="Button PriceColumn-button Button--primary Button--lg" type="button"
                            style="background-color: rgb(236, 84, 36); border-color: rgb(236, 84, 36);">
                            <div class="flex-container justify-content-center align-items-center"><span
                                    class="Text Text-color--default Text-fontWeight--500 Text--truncate">Subscribe</span>
                            </div>
                        </button>
                    </div>
                </div>
                <div class="PriceColumn-featureListContainer flex-container direction-column"><span
                        class="PriceColumn-featureListHeader Text Text-color--default Text-fontSize--14">This
                        includes:</span>
                    <div class="PriceColumn-featureList flex-container direction-column align-items-flex-start">
                        <div class="PriceColumn-feature flex-container align-items-flex-start">
                            <div class="PriceColumn-checkContainer flex-container"><svg
                                    class="InlineSVG Icon PriceColumn-check Icon--sm" focusable="false" fill="#1a1a1a"
                                    color="#1a1a1a" fill-opacity="0.5" height="16" viewBox="0 0 16 16" width="16">
                                    <path
                                        d="m8 16c-4.418278 0-8-3.581722-8-8s3.581722-8 8-8 8 3.581722 8 8-3.581722 8-8 8zm3.0832728-11.00479172-4.0832728 4.09057816-1.79289322-1.79289322c-.39052429-.39052429-1.02368927-.39052429-1.41421356 0s-.39052429 1.02368927 0 1.41421356l2.5 2.50000002c.39052429.3905243 1.02368927.3905243 1.41421356 0l4.79037962-4.79768495c.3905243-.3905243.3905243-1.02368927 0-1.41421357-.3905243-.39052429-1.0236893-.39052429-1.4142136 0z"
                                        fill-rule="evenodd"></path>
                                </svg></div><span
                                class="PriceColumn-featureText Text Text-color--default Text-fontSize--14"> In-depth
                                features, more insights</span>
                        </div>
                        <div class="PriceColumn-feature flex-container align-items-flex-start">
                            <div class="PriceColumn-checkContainer flex-container"><svg
                                    class="InlineSVG Icon PriceColumn-check Icon--sm" focusable="false" fill="#1a1a1a"
                                    color="#1a1a1a" fill-opacity="0.5" height="16" viewBox="0 0 16 16" width="16">
                                    <path
                                        d="m8 16c-4.418278 0-8-3.581722-8-8s3.581722-8 8-8 8 3.581722 8 8-3.581722 8-8 8zm3.0832728-11.00479172-4.0832728 4.09057816-1.79289322-1.79289322c-.39052429-.39052429-1.02368927-.39052429-1.41421356 0s-.39052429 1.02368927 0 1.41421356l2.5 2.50000002c.39052429.3905243 1.02368927.3905243 1.41421356 0l4.79037962-4.79768495c.3905243-.3905243.3905243-1.02368927 0-1.41421357-.3905243-.39052429-1.0236893-.39052429-1.4142136 0z"
                                        fill-rule="evenodd"></path>
                                </svg></div><span
                                class="PriceColumn-featureText Text Text-color--default Text-fontSize--14">Unlimited
                                usage per month*</span>
                        </div>
                        <div class="PriceColumn-feature flex-container align-items-flex-start">
                            <div class="PriceColumn-checkContainer flex-container"><svg
                                    class="InlineSVG Icon PriceColumn-check Icon--sm" focusable="false" fill="#1a1a1a"
                                    color="#1a1a1a" fill-opacity="0.5" height="16" viewBox="0 0 16 16" width="16">
                                    <path
                                        d="m8 16c-4.418278 0-8-3.581722-8-8s3.581722-8 8-8 8 3.581722 8 8-3.581722 8-8 8zm3.0832728-11.00479172-4.0832728 4.09057816-1.79289322-1.79289322c-.39052429-.39052429-1.02368927-.39052429-1.41421356 0s-.39052429 1.02368927 0 1.41421356l2.5 2.50000002c.39052429.3905243 1.02368927.3905243 1.41421356 0l4.79037962-4.79768495c.3905243-.3905243.3905243-1.02368927 0-1.41421357-.3905243-.39052429-1.0236893-.39052429-1.4142136 0z"
                                        fill-rule="evenodd"></path>
                                </svg></div><span
                                class="PriceColumn-featureText Text Text-color--default Text-fontSize--14">Expression
                                Choices (Writing, Speech, Music, Images)</span>
                        </div>
                        <div class="PriceColumn-feature flex-container align-items-flex-start">
                            <div class="PriceColumn-checkContainer flex-container"><svg
                                    class="InlineSVG Icon PriceColumn-check Icon--sm" focusable="false" fill="#1a1a1a"
                                    color="#1a1a1a" fill-opacity="0.5" height="16" viewBox="0 0 16 16" width="16">
                                    <path
                                        d="m8 16c-4.418278 0-8-3.581722-8-8s3.581722-8 8-8 8 3.581722 8 8-3.581722 8-8 8zm3.0832728-11.00479172-4.0832728 4.09057816-1.79289322-1.79289322c-.39052429-.39052429-1.02368927-.39052429-1.41421356 0s-.39052429 1.02368927 0 1.41421356l2.5 2.50000002c.39052429.3905243 1.02368927.3905243 1.41421356 0l4.79037962-4.79768495c.3905243-.3905243.3905243-1.02368927 0-1.41421357-.3905243-.39052429-1.0236893-.39052429-1.4142136 0z"
                                        fill-rule="evenodd"></path>
                                </svg></div><span
                                class="PriceColumn-featureText Text Text-color--default Text-fontSize--14">Business
                                hours email &amp; phone support</span>
                        </div>
                        <div class="PriceColumn-feature flex-container align-items-flex-start">
                            <div class="PriceColumn-checkContainer flex-container"><svg
                                    class="InlineSVG Icon PriceColumn-check Icon--sm" focusable="false" fill="#1a1a1a"
                                    color="#1a1a1a" fill-opacity="0.5" height="16" viewBox="0 0 16 16" width="16">
                                    <path
                                        d="m8 16c-4.418278 0-8-3.581722-8-8s3.581722-8 8-8 8 3.581722 8 8-3.581722 8-8 8zm3.0832728-11.00479172-4.0832728 4.09057816-1.79289322-1.79289322c-.39052429-.39052429-1.02368927-.39052429-1.41421356 0s-.39052429 1.02368927 0 1.41421356l2.5 2.50000002c.39052429.3905243 1.02368927.3905243 1.41421356 0l4.79037962-4.79768495c.3905243-.3905243.3905243-1.02368927 0-1.41421357-.3905243-.39052429-1.0236893-.39052429-1.4142136 0z"
                                        fill-rule="evenodd"></path>
                                </svg></div><span
                                class="PriceColumn-featureText Text Text-color--default Text-fontSize--14">15 mins
                                Dedicated Result Consultation (20 blocks/ month)</span>
                        </div>
                        <div class="PriceColumn-feature flex-container align-items-flex-start">
                            <div class="PriceColumn-checkContainer flex-container"><svg
                                    class="InlineSVG Icon PriceColumn-check Icon--sm" focusable="false" fill="#1a1a1a"
                                    color="#1a1a1a" fill-opacity="0.5" height="16" viewBox="0 0 16 16" width="16">
                                    <path
                                        d="m8 16c-4.418278 0-8-3.581722-8-8s3.581722-8 8-8 8 3.581722 8 8-3.581722 8-8 8zm3.0832728-11.00479172-4.0832728 4.09057816-1.79289322-1.79289322c-.39052429-.39052429-1.02368927-.39052429-1.41421356 0s-.39052429 1.02368927 0 1.41421356l2.5 2.50000002c.39052429.3905243 1.02368927.3905243 1.41421356 0l4.79037962-4.79768495c.3905243-.3905243.3905243-1.02368927 0-1.41421357-.3905243-.39052429-1.0236893-.39052429-1.4142136 0z"
                                        fill-rule="evenodd"></path>
                                </svg></div><span
                                class="PriceColumn-featureText Text Text-color--default Text-fontSize--14">Up to 10
                                Department Head Access</span>
                        </div>
                        <div class="PriceColumn-feature flex-container align-items-flex-start">
                            <div class="PriceColumn-checkContainer flex-container"><svg
                                    class="InlineSVG Icon PriceColumn-check Icon--sm" focusable="false" fill="#1a1a1a"
                                    color="#1a1a1a" fill-opacity="0.5" height="16" viewBox="0 0 16 16" width="16">
                                    <path
                                        d="m8 16c-4.418278 0-8-3.581722-8-8s3.581722-8 8-8 8 3.581722 8 8-3.581722 8-8 8zm3.0832728-11.00479172-4.0832728 4.09057816-1.79289322-1.79289322c-.39052429-.39052429-1.02368927-.39052429-1.41421356 0s-.39052429 1.02368927 0 1.41421356l2.5 2.50000002c.39052429.3905243 1.02368927.3905243 1.41421356 0l4.79037962-4.79768495c.3905243-.3905243.3905243-1.02368927 0-1.41421357-.3905243-.39052429-1.0236893-.39052429-1.4142136 0z"
                                        fill-rule="evenodd"></path>
                                </svg></div><span
                                class="PriceColumn-featureText Text Text-color--default Text-fontSize--14">Including One
                                Time Tuning Setup</span>
                        </div>
                        <div class="PriceColumn-feature flex-container align-items-flex-start">
                            <div class="PriceColumn-checkContainer flex-container"><svg
                                    class="InlineSVG Icon PriceColumn-check Icon--sm" focusable="false" fill="#1a1a1a"
                                    color="#1a1a1a" fill-opacity="0.5" height="16" viewBox="0 0 16 16" width="16">
                                    <path
                                        d="m8 16c-4.418278 0-8-3.581722-8-8s3.581722-8 8-8 8 3.581722 8 8-3.581722 8-8 8zm3.0832728-11.00479172-4.0832728 4.09057816-1.79289322-1.79289322c-.39052429-.39052429-1.02368927-.39052429-1.41421356 0s-.39052429 1.02368927 0 1.41421356l2.5 2.50000002c.39052429.3905243 1.02368927.3905243 1.41421356 0l4.79037962-4.79768495c.3905243-.3905243.3905243-1.02368927 0-1.41421357-.3905243-.39052429-1.0236893-.39052429-1.4142136 0z"
                                        fill-rule="evenodd"></path>
                                </svg></div><span
                                class="PriceColumn-featureText Text Text-color--default Text-fontSize--14">Subscription
                                excluding One Time Setup Fee of S$3999</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="PriceColumn flex-container direction-column justify-content-flex-start align-items-center"
                data-testid="price-column" style="--pt-animate-in-order: 3;">
                <div
                    class="PriceColumn-content flex-container direction-column justify-content-flex-start align-items-center">
                    <div class="PriceColumn-aboutProduct flex-container direction-column">
                        <div class="PriceColumn-textAndProductImage flex-container">
                            <div class="PriceColumn-textContainerHeightAligner" style="height: 68px;">
                                <div class="PriceColumn-textContainer flex-container direction-column">
                                    <div class="PriceColumn-name flex-container"><span
                                            class="Text Text-color--default Text-fontSize--20 Text-fontWeight--600">Large</span>
                                    </div><span
                                        class="PriceColumn-description Text Text-color--default Text-fontSize--14">Annual
                                        turnover: More than S$100 million</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="PriceColumn-priceAndButton flex-container direction-column">
                        <div class="PriceColumn-priceContainerHeightAligner" style="height: 45px;"></div><button
                            class="Button PriceColumn-button Button--primary Button--lg" type="button"
                            style="background-color: rgb(236, 84, 36); border-color: rgb(236, 84, 36);">
                            <div class="flex-container justify-content-center align-items-center"><span
                                    class="Text Text-color--default Text-fontWeight--500 Text--truncate">Contact
                                    us</span></div>
                        </button>
                    </div>
                </div>
                <div class="PriceColumn-featureListContainer flex-container direction-column"><span
                        class="PriceColumn-featureListHeader Text Text-color--default Text-fontSize--14">This
                        includes:</span>
                    <div class="PriceColumn-featureList flex-container direction-column align-items-flex-start">
                        <div class="PriceColumn-feature flex-container align-items-flex-start">
                            <div class="PriceColumn-checkContainer flex-container"><svg
                                    class="InlineSVG Icon PriceColumn-check Icon--sm" focusable="false" fill="#1a1a1a"
                                    color="#1a1a1a" fill-opacity="0.5" height="16" viewBox="0 0 16 16" width="16">
                                    <path
                                        d="m8 16c-4.418278 0-8-3.581722-8-8s3.581722-8 8-8 8 3.581722 8 8-3.581722 8-8 8zm3.0832728-11.00479172-4.0832728 4.09057816-1.79289322-1.79289322c-.39052429-.39052429-1.02368927-.39052429-1.41421356 0s-.39052429 1.02368927 0 1.41421356l2.5 2.50000002c.39052429.3905243 1.02368927.3905243 1.41421356 0l4.79037962-4.79768495c.3905243-.3905243.3905243-1.02368927 0-1.41421357-.3905243-.39052429-1.0236893-.39052429-1.4142136 0z"
                                        fill-rule="evenodd"></path>
                                </svg></div><span
                                class="PriceColumn-featureText Text Text-color--default Text-fontSize--14">Complete
                                feature suite, deepest level of insights</span>
                        </div>
                        <div class="PriceColumn-feature flex-container align-items-flex-start">
                            <div class="PriceColumn-checkContainer flex-container"><svg
                                    class="InlineSVG Icon PriceColumn-check Icon--sm" focusable="false" fill="#1a1a1a"
                                    color="#1a1a1a" fill-opacity="0.5" height="16" viewBox="0 0 16 16" width="16">
                                    <path
                                        d="m8 16c-4.418278 0-8-3.581722-8-8s3.581722-8 8-8 8 3.581722 8 8-3.581722 8-8 8zm3.0832728-11.00479172-4.0832728 4.09057816-1.79289322-1.79289322c-.39052429-.39052429-1.02368927-.39052429-1.41421356 0s-.39052429 1.02368927 0 1.41421356l2.5 2.50000002c.39052429.3905243 1.02368927.3905243 1.41421356 0l4.79037962-4.79768495c.3905243-.3905243.3905243-1.02368927 0-1.41421357-.3905243-.39052429-1.0236893-.39052429-1.4142136 0z"
                                        fill-rule="evenodd"></path>
                                </svg></div><span
                                class="PriceColumn-featureText Text Text-color--default Text-fontSize--14">Unlimited
                                usage per month*</span>
                        </div>
                        <div class="PriceColumn-feature flex-container align-items-flex-start">
                            <div class="PriceColumn-checkContainer flex-container"><svg
                                    class="InlineSVG Icon PriceColumn-check Icon--sm" focusable="false" fill="#1a1a1a"
                                    color="#1a1a1a" fill-opacity="0.5" height="16" viewBox="0 0 16 16" width="16">
                                    <path
                                        d="m8 16c-4.418278 0-8-3.581722-8-8s3.581722-8 8-8 8 3.581722 8 8-3.581722 8-8 8zm3.0832728-11.00479172-4.0832728 4.09057816-1.79289322-1.79289322c-.39052429-.39052429-1.02368927-.39052429-1.41421356 0s-.39052429 1.02368927 0 1.41421356l2.5 2.50000002c.39052429.3905243 1.02368927.3905243 1.41421356 0l4.79037962-4.79768495c.3905243-.3905243.3905243-1.02368927 0-1.41421357-.3905243-.39052429-1.0236893-.39052429-1.4142136 0z"
                                        fill-rule="evenodd"></path>
                                </svg></div><span
                                class="PriceColumn-featureText Text Text-color--default Text-fontSize--14">Expression
                                Choice (Writing, Speech, Music, Images)</span>
                        </div>
                        <div class="PriceColumn-feature flex-container align-items-flex-start">
                            <div class="PriceColumn-checkContainer flex-container"><svg
                                    class="InlineSVG Icon PriceColumn-check Icon--sm" focusable="false" fill="#1a1a1a"
                                    color="#1a1a1a" fill-opacity="0.5" height="16" viewBox="0 0 16 16" width="16">
                                    <path
                                        d="m8 16c-4.418278 0-8-3.581722-8-8s3.581722-8 8-8 8 3.581722 8 8-3.581722 8-8 8zm3.0832728-11.00479172-4.0832728 4.09057816-1.79289322-1.79289322c-.39052429-.39052429-1.02368927-.39052429-1.41421356 0s-.39052429 1.02368927 0 1.41421356l2.5 2.50000002c.39052429.3905243 1.02368927.3905243 1.41421356 0l4.79037962-4.79768495c.3905243-.3905243.3905243-1.02368927 0-1.41421357-.3905243-.39052429-1.0236893-.39052429-1.4142136 0z"
                                        fill-rule="evenodd"></path>
                                </svg></div><span
                                class="PriceColumn-featureText Text Text-color--default Text-fontSize--14">Business
                                hours email &amp; phone support</span>
                        </div>
                        <div class="PriceColumn-feature flex-container align-items-flex-start">
                            <div class="PriceColumn-checkContainer flex-container"><svg
                                    class="InlineSVG Icon PriceColumn-check Icon--sm" focusable="false" fill="#1a1a1a"
                                    color="#1a1a1a" fill-opacity="0.5" height="16" viewBox="0 0 16 16" width="16">
                                    <path
                                        d="m8 16c-4.418278 0-8-3.581722-8-8s3.581722-8 8-8 8 3.581722 8 8-3.581722 8-8 8zm3.0832728-11.00479172-4.0832728 4.09057816-1.79289322-1.79289322c-.39052429-.39052429-1.02368927-.39052429-1.41421356 0s-.39052429 1.02368927 0 1.41421356l2.5 2.50000002c.39052429.3905243 1.02368927.3905243 1.41421356 0l4.79037962-4.79768495c.3905243-.3905243.3905243-1.02368927 0-1.41421357-.3905243-.39052429-1.0236893-.39052429-1.4142136 0z"
                                        fill-rule="evenodd"></path>
                                </svg></div><span
                                class="PriceColumn-featureText Text Text-color--default Text-fontSize--14">15 mins
                                Dedicated Result Consultation</span>
                        </div>
                        <div class="PriceColumn-feature flex-container align-items-flex-start">
                            <div class="PriceColumn-checkContainer flex-container"><svg
                                    class="InlineSVG Icon PriceColumn-check Icon--sm" focusable="false" fill="#1a1a1a"
                                    color="#1a1a1a" fill-opacity="0.5" height="16" viewBox="0 0 16 16" width="16">
                                    <path
                                        d="m8 16c-4.418278 0-8-3.581722-8-8s3.581722-8 8-8 8 3.581722 8 8-3.581722 8-8 8zm3.0832728-11.00479172-4.0832728 4.09057816-1.79289322-1.79289322c-.39052429-.39052429-1.02368927-.39052429-1.41421356 0s-.39052429 1.02368927 0 1.41421356l2.5 2.50000002c.39052429.3905243 1.02368927.3905243 1.41421356 0l4.79037962-4.79768495c.3905243-.3905243.3905243-1.02368927 0-1.41421357-.3905243-.39052429-1.0236893-.39052429-1.4142136 0z"
                                        fill-rule="evenodd"></path>
                                </svg></div><span
                                class="PriceColumn-featureText Text Text-color--default Text-fontSize--14">Up to 20
                                Department Head Access</span>
                        </div>
                        <div class="PriceColumn-feature flex-container align-items-flex-start">
                            <div class="PriceColumn-checkContainer flex-container"><svg
                                    class="InlineSVG Icon PriceColumn-check Icon--sm" focusable="false" fill="#1a1a1a"
                                    color="#1a1a1a" fill-opacity="0.5" height="16" viewBox="0 0 16 16" width="16">
                                    <path
                                        d="m8 16c-4.418278 0-8-3.581722-8-8s3.581722-8 8-8 8 3.581722 8 8-3.581722 8-8 8zm3.0832728-11.00479172-4.0832728 4.09057816-1.79289322-1.79289322c-.39052429-.39052429-1.02368927-.39052429-1.41421356 0s-.39052429 1.02368927 0 1.41421356l2.5 2.50000002c.39052429.3905243 1.02368927.3905243 1.41421356 0l4.79037962-4.79768495c.3905243-.3905243.3905243-1.02368927 0-1.41421357-.3905243-.39052429-1.0236893-.39052429-1.4142136 0z"
                                        fill-rule="evenodd"></path>
                                </svg></div><span
                                class="PriceColumn-featureText Text Text-color--default Text-fontSize--14">Including One
                                Time Tuning Setup</span>
                        </div>
                        <div class="PriceColumn-feature flex-container align-items-flex-start">
                            <div class="PriceColumn-checkContainer flex-container"><svg
                                    class="InlineSVG Icon PriceColumn-check Icon--sm" focusable="false" fill="#1a1a1a"
                                    color="#1a1a1a" fill-opacity="0.5" height="16" viewBox="0 0 16 16" width="16">
                                    <path
                                        d="m8 16c-4.418278 0-8-3.581722-8-8s3.581722-8 8-8 8 3.581722 8 8-3.581722 8-8 8zm3.0832728-11.00479172-4.0832728 4.09057816-1.79289322-1.79289322c-.39052429-.39052429-1.02368927-.39052429-1.41421356 0s-.39052429 1.02368927 0 1.41421356l2.5 2.50000002c.39052429.3905243 1.02368927.3905243 1.41421356 0l4.79037962-4.79768495c.3905243-.3905243.3905243-1.02368927 0-1.41421357-.3905243-.39052429-1.0236893-.39052429-1.4142136 0z"
                                        fill-rule="evenodd"></path>
                                </svg></div><span
                                class="PriceColumn-featureText Text Text-color--default Text-fontSize--14">Subscription
                                excluding One Time Setup Fee</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
      `;

        // Attach the HTML content to the shadow DOM of the custom element
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = htmlContent;
    }

    // Other methods and event handlers can be defined here
}

// Register the custom element with the browser
customElements.define('custome-stripe-pricing-table', CustomeStripePricingTable);