'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">Conga Digital Commerce September &#x27;22</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter additional">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#additional-pages"'
                            : 'data-target="#xs-additional-pages"' }>
                            <span class="icon ion-ios-book"></span>
                            <span>Upgrade Information</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="additional-pages"' : 'id="xs-additional-pages"' }>
                                    <li class="link ">
                                        <a href="additional-documentation/upgrading-the-digital-commerce-template-from-december-&#x27;21-to-may-&#x27;22.html" data-type="entity-link" data-context-id="additional">Upgrading the Digital Commerce Template from December &#x27;21 to May &#x27;22</a>
                                    </li>
                                    <li class="link ">
                                        <a href="additional-documentation/upgrading-the-partner-commerce-template-from-december-&#x27;21-to-may-&#x27;22.html" data-type="entity-link" data-context-id="additional">Upgrading the Partner Commerce Template from December &#x27;21 to May &#x27;22</a>
                                    </li>
                                    <li class="link ">
                                        <a href="additional-documentation/upgrading-the-digital-commerce-template-from-spring-&#x27;21-to-may-&#x27;22.html" data-type="entity-link" data-context-id="additional">Upgrading the Digital Commerce Template from Spring &#x27;21 to May &#x27;22</a>
                                    </li>
                                    <li class="link ">
                                        <a href="additional-documentation/upgrading-the-partner-commerce-template-from-spring-&#x27;21-to-may-&#x27;22.html" data-type="entity-link" data-context-id="additional">Upgrading the Partner Commerce Template from Spring &#x27;21 to May &#x27;22</a>
                                    </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/AdditionalInformationComponent.html" data-type="entity-link" >AdditionalInformationComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AddressComponent.html" data-type="entity-link" >AddressComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AddToCartComponent.html" data-type="entity-link" >AddToCartComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AlertComponent.html" data-type="entity-link" >AlertComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AssetDropdownButtonComponent.html" data-type="entity-link" >AssetDropdownButtonComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AssetListComponent.html" data-type="entity-link" >AssetListComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BreadcrumbComponent.html" data-type="entity-link" >BreadcrumbComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CategoryFilterComponent.html" data-type="entity-link" >CategoryFilterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ChartComponent.html" data-type="entity-link" >ChartComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ConstraintRuleAlertComponent.html" data-type="entity-link" >ConstraintRuleAlertComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ConstraintRuleSidebarComponent.html" data-type="entity-link" >ConstraintRuleSidebarComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CRIconComponent.html" data-type="entity-link" >CRIconComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CRRecommendedProductsComponent.html" data-type="entity-link" >CRRecommendedProductsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DataFilterComponent.html" data-type="entity-link" >DataFilterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DotsComponent.html" data-type="entity-link" >DotsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FavoriteModalComponent.html" data-type="entity-link" >FavoriteModalComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FilesComponent.html" data-type="entity-link" >FilesComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/GenerateDocumentComponent.html" data-type="entity-link" >GenerateDocumentComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/InputDateComponent.html" data-type="entity-link" >InputDateComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/InputFieldComponent.html" data-type="entity-link" >InputFieldComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/InputSelectComponent.html" data-type="entity-link" >InputSelectComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/JumbotronComponent.html" data-type="entity-link" >JumbotronComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LineitemCardComponent.html" data-type="entity-link" >LineitemCardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LineItemMenuComponent.html" data-type="entity-link" >LineItemMenuComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LineItemTableRowComponent.html" data-type="entity-link" >LineItemTableRowComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LoginFormComponent.html" data-type="entity-link" >LoginFormComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MiniCartComponent.html" data-type="entity-link" >MiniCartComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MiniProfileComponent.html" data-type="entity-link" >MiniProfileComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/OutputFieldComponent.html" data-type="entity-link" >OutputFieldComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PaymentComponent.html" data-type="entity-link" >PaymentComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PaymentIFrameComponent.html" data-type="entity-link" >PaymentIFrameComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PresentDocumentComponent.html" data-type="entity-link" >PresentDocumentComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PriceComponent.html" data-type="entity-link" >PriceComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PriceModalComponent.html" data-type="entity-link" >PriceModalComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PriceSummaryComponent.html" data-type="entity-link" >PriceSummaryComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProductCardComponent.html" data-type="entity-link" >ProductCardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProductCarouselComponent.html" data-type="entity-link" >ProductCarouselComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProductCompareComponent.html" data-type="entity-link" >ProductCompareComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProductConfigurationComponent.html" data-type="entity-link" >ProductConfigurationComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProductConfigurationSummaryComponent.html" data-type="entity-link" >ProductConfigurationSummaryComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProductDrawerComponent.html" data-type="entity-link" >ProductDrawerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProductImagesComponent.html" data-type="entity-link" >ProductImagesComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProductSearchComponent.html" data-type="entity-link" >ProductSearchComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProductTypeFilterComponent.html" data-type="entity-link" >ProductTypeFilterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PromotionComponent.html" data-type="entity-link" >PromotionComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PromotionModalComponent.html" data-type="entity-link" >PromotionModalComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RevalidateCartModalComponent.html" data-type="entity-link" >RevalidateCartModalComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SelectAllComponent.html" data-type="entity-link" >SelectAllComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SpinnerComponent.html" data-type="entity-link" >SpinnerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TableComponent.html" data-type="entity-link" >TableComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TaxPopHoverComponent.html" data-type="entity-link" >TaxPopHoverComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#directives-links"' :
                                'data-target="#xs-directives-links"' }>
                                <span class="icon ion-md-code-working"></span>
                                <span>Directives</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="directives-links"' : 'id="xs-directives-links"' }>
                                <li class="link">
                                    <a href="directives/AutoFocusDirective.html" data-type="entity-link" >AutoFocusDirective</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Account.html" data-type="entity-link" >Account</a>
                            </li>
                            <li class="link">
                                <a href="classes/AccountBase.html" data-type="entity-link" >AccountBase</a>
                            </li>
                            <li class="link">
                                <a href="classes/AccountLocation.html" data-type="entity-link" >AccountLocation</a>
                            </li>
                            <li class="link">
                                <a href="classes/AdjustmentItem.html" data-type="entity-link" >AdjustmentItem</a>
                            </li>
                            <li class="link">
                                <a href="classes/AppliedRuleActionInfo.html" data-type="entity-link" >AppliedRuleActionInfo</a>
                            </li>
                            <li class="link">
                                <a href="classes/AppliedRuleInfo.html" data-type="entity-link" >AppliedRuleInfo</a>
                            </li>
                            <li class="link">
                                <a href="classes/ApprovalRequest.html" data-type="entity-link" >ApprovalRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/AptValueMatrixNode.html" data-type="entity-link" >AptValueMatrixNode</a>
                            </li>
                            <li class="link">
                                <a href="classes/AssetAttributeValue.html" data-type="entity-link" >AssetAttributeValue</a>
                            </li>
                            <li class="link">
                                <a href="classes/AssetLineItem.html" data-type="entity-link" >AssetLineItem</a>
                            </li>
                            <li class="link">
                                <a href="classes/AssetLineItemExtended.html" data-type="entity-link" >AssetLineItemExtended</a>
                            </li>
                            <li class="link">
                                <a href="classes/Attachment.html" data-type="entity-link" >Attachment</a>
                            </li>
                            <li class="link">
                                <a href="classes/AttributeGroupTranslation.html" data-type="entity-link" >AttributeGroupTranslation</a>
                            </li>
                            <li class="link">
                                <a href="classes/AttributeValueMatrix.html" data-type="entity-link" >AttributeValueMatrix</a>
                            </li>
                            <li class="link">
                                <a href="classes/AttributeValueMatrixEntry.html" data-type="entity-link" >AttributeValueMatrixEntry</a>
                            </li>
                            <li class="link">
                                <a href="classes/AuthConfig.html" data-type="entity-link" >AuthConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/AuthConfigProviders.html" data-type="entity-link" >AuthConfigProviders</a>
                            </li>
                            <li class="link">
                                <a href="classes/BatchAction.html" data-type="entity-link" >BatchAction</a>
                            </li>
                            <li class="link">
                                <a href="classes/BitString.html" data-type="entity-link" >BitString</a>
                            </li>
                            <li class="link">
                                <a href="classes/Cart.html" data-type="entity-link" >Cart</a>
                            </li>
                            <li class="link">
                                <a href="classes/CartItem.html" data-type="entity-link" >CartItem</a>
                            </li>
                            <li class="link">
                                <a href="classes/Category.html" data-type="entity-link" >Category</a>
                            </li>
                            <li class="link">
                                <a href="classes/CategoryData.html" data-type="entity-link" >CategoryData</a>
                            </li>
                            <li class="link">
                                <a href="classes/CategoryTranslation.html" data-type="entity-link" >CategoryTranslation</a>
                            </li>
                            <li class="link">
                                <a href="classes/Classification.html" data-type="entity-link" >Classification</a>
                            </li>
                            <li class="link">
                                <a href="classes/ConfigCustomDisplayColumns.html" data-type="entity-link" >ConfigCustomDisplayColumns</a>
                            </li>
                            <li class="link">
                                <a href="classes/ConstraintRule.html" data-type="entity-link" >ConstraintRule</a>
                            </li>
                            <li class="link">
                                <a href="classes/ConstraintRuleAction.html" data-type="entity-link" >ConstraintRuleAction</a>
                            </li>
                            <li class="link">
                                <a href="classes/ConstraintRuleCondition.html" data-type="entity-link" >ConstraintRuleCondition</a>
                            </li>
                            <li class="link">
                                <a href="classes/Contact.html" data-type="entity-link" >Contact</a>
                            </li>
                            <li class="link">
                                <a href="classes/CurrencyType.html" data-type="entity-link" >CurrencyType</a>
                            </li>
                            <li class="link">
                                <a href="classes/FakeAppLoader.html" data-type="entity-link" >FakeAppLoader</a>
                            </li>
                            <li class="link">
                                <a href="classes/Favorite.html" data-type="entity-link" >Favorite</a>
                            </li>
                            <li class="link">
                                <a href="classes/Feature.html" data-type="entity-link" >Feature</a>
                            </li>
                            <li class="link">
                                <a href="classes/FeatureSet.html" data-type="entity-link" >FeatureSet</a>
                            </li>
                            <li class="link">
                                <a href="classes/File.html" data-type="entity-link" >File</a>
                            </li>
                            <li class="link">
                                <a href="classes/GatewayCommunication.html" data-type="entity-link" >GatewayCommunication</a>
                            </li>
                            <li class="link">
                                <a href="classes/GatewayTransaction.html" data-type="entity-link" >GatewayTransaction</a>
                            </li>
                            <li class="link">
                                <a href="classes/GuestMockUserService.html" data-type="entity-link" >GuestMockUserService</a>
                            </li>
                            <li class="link">
                                <a href="classes/Incentive.html" data-type="entity-link" >Incentive</a>
                            </li>
                            <li class="link">
                                <a href="classes/MockPlatformService.html" data-type="entity-link" >MockPlatformService</a>
                            </li>
                            <li class="link">
                                <a href="classes/Note.html" data-type="entity-link" >Note</a>
                            </li>
                            <li class="link">
                                <a href="classes/Opportunity.html" data-type="entity-link" >Opportunity</a>
                            </li>
                            <li class="link">
                                <a href="classes/Order.html" data-type="entity-link" >Order</a>
                            </li>
                            <li class="link">
                                <a href="classes/OrderAdjustmentItem.html" data-type="entity-link" >OrderAdjustmentItem</a>
                            </li>
                            <li class="link">
                                <a href="classes/OrderAttributeValue.html" data-type="entity-link" >OrderAttributeValue</a>
                            </li>
                            <li class="link">
                                <a href="classes/OrderLineItem.html" data-type="entity-link" >OrderLineItem</a>
                            </li>
                            <li class="link">
                                <a href="classes/OrderTaxBreakup.html" data-type="entity-link" >OrderTaxBreakup</a>
                            </li>
                            <li class="link">
                                <a href="classes/PartnerMockUserService.html" data-type="entity-link" >PartnerMockUserService</a>
                            </li>
                            <li class="link">
                                <a href="classes/PaymentMethod.html" data-type="entity-link" >PaymentMethod</a>
                            </li>
                            <li class="link">
                                <a href="classes/PaymentTransaction.html" data-type="entity-link" >PaymentTransaction</a>
                            </li>
                            <li class="link">
                                <a href="classes/Price.html" data-type="entity-link" >Price</a>
                            </li>
                            <li class="link">
                                <a href="classes/PriceDimension.html" data-type="entity-link" >PriceDimension</a>
                            </li>
                            <li class="link">
                                <a href="classes/PriceDimensionBase.html" data-type="entity-link" >PriceDimensionBase</a>
                            </li>
                            <li class="link">
                                <a href="classes/PriceList.html" data-type="entity-link" >PriceList</a>
                            </li>
                            <li class="link">
                                <a href="classes/PriceListBase.html" data-type="entity-link" >PriceListBase</a>
                            </li>
                            <li class="link">
                                <a href="classes/PriceListCategory.html" data-type="entity-link" >PriceListCategory</a>
                            </li>
                            <li class="link">
                                <a href="classes/PriceListData.html" data-type="entity-link" >PriceListData</a>
                            </li>
                            <li class="link">
                                <a href="classes/PriceListItem.html" data-type="entity-link" >PriceListItem</a>
                            </li>
                            <li class="link">
                                <a href="classes/PriceMatrix.html" data-type="entity-link" >PriceMatrix</a>
                            </li>
                            <li class="link">
                                <a href="classes/PriceMatrixEntry.html" data-type="entity-link" >PriceMatrixEntry</a>
                            </li>
                            <li class="link">
                                <a href="classes/PriceRule.html" data-type="entity-link" >PriceRule</a>
                            </li>
                            <li class="link">
                                <a href="classes/PriceRuleEntry.html" data-type="entity-link" >PriceRuleEntry</a>
                            </li>
                            <li class="link">
                                <a href="classes/PriceRuleSet.html" data-type="entity-link" >PriceRuleSet</a>
                            </li>
                            <li class="link">
                                <a href="classes/Product.html" data-type="entity-link" >Product</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductAttribute.html" data-type="entity-link" >ProductAttribute</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductAttributeGroup.html" data-type="entity-link" >ProductAttributeGroup</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductAttributeGroupMember.html" data-type="entity-link" >ProductAttributeGroupMember</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductAttributeMatrixView.html" data-type="entity-link" >ProductAttributeMatrixView</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductAttributeRule.html" data-type="entity-link" >ProductAttributeRule</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductAttributeRule-1.html" data-type="entity-link" >ProductAttributeRule</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductAttributeRuleAction.html" data-type="entity-link" >ProductAttributeRuleAction</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductAttributeRuleAction-1.html" data-type="entity-link" >ProductAttributeRuleAction</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductAttributeRuleView.html" data-type="entity-link" >ProductAttributeRuleView</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductAttributeRuleView-1.html" data-type="entity-link" >ProductAttributeRuleView</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductAttributeValue.html" data-type="entity-link" >ProductAttributeValue</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductCategory.html" data-type="entity-link" >ProductCategory</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductData.html" data-type="entity-link" >ProductData</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductFeatureValue.html" data-type="entity-link" >ProductFeatureValue</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductGroup.html" data-type="entity-link" >ProductGroup</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductGroupMember.html" data-type="entity-link" >ProductGroupMember</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductInformation.html" data-type="entity-link" >ProductInformation</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductOptionComponent.html" data-type="entity-link" >ProductOptionComponent</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductOptionGroup.html" data-type="entity-link" >ProductOptionGroup</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductOptionPrice.html" data-type="entity-link" >ProductOptionPrice</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductResult.html" data-type="entity-link" >ProductResult</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductTranslation.html" data-type="entity-link" >ProductTranslation</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProposalTaxBreakup.html" data-type="entity-link" >ProposalTaxBreakup</a>
                            </li>
                            <li class="link">
                                <a href="classes/Quote.html" data-type="entity-link" >Quote</a>
                            </li>
                            <li class="link">
                                <a href="classes/QuoteAdjustmentItem.html" data-type="entity-link" >QuoteAdjustmentItem</a>
                            </li>
                            <li class="link">
                                <a href="classes/QuoteAttachment.html" data-type="entity-link" >QuoteAttachment</a>
                            </li>
                            <li class="link">
                                <a href="classes/QuoteAttributeValue.html" data-type="entity-link" >QuoteAttributeValue</a>
                            </li>
                            <li class="link">
                                <a href="classes/QuoteLineItem.html" data-type="entity-link" >QuoteLineItem</a>
                            </li>
                            <li class="link">
                                <a href="classes/SamlSSOConfig.html" data-type="entity-link" >SamlSSOConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/StoreBanner.html" data-type="entity-link" >StoreBanner</a>
                            </li>
                            <li class="link">
                                <a href="classes/Storefront.html" data-type="entity-link" >Storefront</a>
                            </li>
                            <li class="link">
                                <a href="classes/StorefrontData.html" data-type="entity-link" >StorefrontData</a>
                            </li>
                            <li class="link">
                                <a href="classes/SummaryGroup.html" data-type="entity-link" >SummaryGroup</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaxBreakup.html" data-type="entity-link" >TaxBreakup</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaxCertificate.html" data-type="entity-link" >TaxCertificate</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaxCode.html" data-type="entity-link" >TaxCode</a>
                            </li>
                            <li class="link">
                                <a href="classes/Template.html" data-type="entity-link" >Template</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserBase.html" data-type="entity-link" >UserBase</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AccountLocationService.html" data-type="entity-link" >AccountLocationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AccountService.html" data-type="entity-link" >AccountService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AppliedRuleActionInfoService.html" data-type="entity-link" >AppliedRuleActionInfoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AssetSelectionService.html" data-type="entity-link" >AssetSelectionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AssetService.html" data-type="entity-link" >AssetService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AttributeRuleService.html" data-type="entity-link" >AttributeRuleService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AttributeTranslationService.html" data-type="entity-link" >AttributeTranslationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BatchSelectionService.html" data-type="entity-link" >BatchSelectionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CartItemService.html" data-type="entity-link" >CartItemService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CartService.html" data-type="entity-link" >CartService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CategoryService.html" data-type="entity-link" >CategoryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConstraintRuleConditionService.html" data-type="entity-link" >ConstraintRuleConditionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConstraintRuleService.html" data-type="entity-link" >ConstraintRuleService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ContactService.html" data-type="entity-link" >ContactService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConversionService.html" data-type="entity-link" >ConversionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EmailService.html" data-type="entity-link" >EmailService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ExceptionService.html" data-type="entity-link" >ExceptionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FavoriteService.html" data-type="entity-link" >FavoriteService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FileService.html" data-type="entity-link" >FileService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GatewayCommunicationService.html" data-type="entity-link" >GatewayCommunicationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GatewayTransactionService.html" data-type="entity-link" >GatewayTransactionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LineItemService.html" data-type="entity-link" >LineItemService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NoteService.html" data-type="entity-link" >NoteService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OrderLineItemService.html" data-type="entity-link" >OrderLineItemService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OrderService.html" data-type="entity-link" >OrderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OrderTaxBreakupService.html" data-type="entity-link" >OrderTaxBreakupService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OrderTaxService.html" data-type="entity-link" >OrderTaxService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PaymentService.html" data-type="entity-link" >PaymentService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PriceListItemService.html" data-type="entity-link" >PriceListItemService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PriceListService.html" data-type="entity-link" >PriceListService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PriceMatrixService.html" data-type="entity-link" >PriceMatrixService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PriceService.html" data-type="entity-link" >PriceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductAttributeGroupMemberService.html" data-type="entity-link" >ProductAttributeGroupMemberService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductAttributeGroupService.html" data-type="entity-link" >ProductAttributeGroupService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductAttributeRuleService.html" data-type="entity-link" >ProductAttributeRuleService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductAttributeRuleViewService.html" data-type="entity-link" >ProductAttributeRuleViewService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductAttributeService.html" data-type="entity-link" >ProductAttributeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductCategoryService.html" data-type="entity-link" >ProductCategoryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductConfigurationService.html" data-type="entity-link" >ProductConfigurationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductDrawerService.html" data-type="entity-link" >ProductDrawerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductFeatureValueService.html" data-type="entity-link" >ProductFeatureValueService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductInformationService.html" data-type="entity-link" >ProductInformationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductOptionComponentService.html" data-type="entity-link" >ProductOptionComponentService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductOptionGroupService.html" data-type="entity-link" >ProductOptionGroupService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductOptionService.html" data-type="entity-link" >ProductOptionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductService.html" data-type="entity-link" >ProductService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductTranslationService.html" data-type="entity-link" >ProductTranslationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PromotionService.html" data-type="entity-link" >PromotionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProposalTaxBreakupService.html" data-type="entity-link" >ProposalTaxBreakupService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProposalTaxService.html" data-type="entity-link" >ProposalTaxService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/QuoteLineItemService.html" data-type="entity-link" >QuoteLineItemService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/QuoteService.html" data-type="entity-link" >QuoteService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StorefrontService.html" data-type="entity-link" >StorefrontService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TaxService.html" data-type="entity-link" >TaxService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TemplateService.html" data-type="entity-link" >TemplateService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TranslatorLoaderService.html" data-type="entity-link" >TranslatorLoaderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TurboApiService.html" data-type="entity-link" >TurboApiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserViewMappingService.html" data-type="entity-link" >UserViewMappingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserViewService.html" data-type="entity-link" >UserViewService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/DetailsGuard.html" data-type="entity-link" >DetailsGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/GuestGuard.html" data-type="entity-link" >GuestGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/LoginGuard.html" data-type="entity-link" >LoginGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/OrderDetailsGuard.html" data-type="entity-link" >OrderDetailsGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/PartnerDetailsGuard.html" data-type="entity-link" >PartnerDetailsGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/SessionGuard.html" data-type="entity-link" >SessionGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AccordionRows.html" data-type="entity-link" >AccordionRows</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AccountInfo.html" data-type="entity-link" >AccountInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ActionItem.html" data-type="entity-link" >ActionItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ActionToPerform.html" data-type="entity-link" >ActionToPerform</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BreadcrumbLink.html" data-type="entity-link" >BreadcrumbLink</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CartItemView.html" data-type="entity-link" >CartItemView</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CartProductForm.html" data-type="entity-link" >CartProductForm</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CartRequest.html" data-type="entity-link" >CartRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Carts.html" data-type="entity-link" >Carts</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChildRecordOptions.html" data-type="entity-link" >ChildRecordOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ConfigurationFlags.html" data-type="entity-link" >ConfigurationFlags</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ConfigurationState.html" data-type="entity-link" >ConfigurationState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ConfigurationView.html" data-type="entity-link" >ConfigurationView</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ConstraintRuleDetail.html" data-type="entity-link" >ConstraintRuleDetail</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ConstraintRuleGroups.html" data-type="entity-link" >ConstraintRuleGroups</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ConstraintRuleInfoDetail.html" data-type="entity-link" >ConstraintRuleInfoDetail</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ConstraintRuleSuccessDetail.html" data-type="entity-link" >ConstraintRuleSuccessDetail</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CrIconView.html" data-type="entity-link" >CrIconView</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CustomFilterView.html" data-type="entity-link" >CustomFilterView</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FavoriteItemRequest.html" data-type="entity-link" >FavoriteItemRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FavoriteRequest.html" data-type="entity-link" >FavoriteRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FieldWithOperators.html" data-type="entity-link" >FieldWithOperators</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FilterOptions.html" data-type="entity-link" >FilterOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ItemGroup.html" data-type="entity-link" >ItemGroup</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PerformAction.html" data-type="entity-link" >PerformAction</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SearchResults.html" data-type="entity-link" >SearchResults</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SortInfo.html" data-type="entity-link" >SortInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TableAction.html" data-type="entity-link" >TableAction</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TableColumn.html" data-type="entity-link" >TableColumn</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TableOptions.html" data-type="entity-link" >TableOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserView.html" data-type="entity-link" >UserView</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#pipes-links"' :
                                'data-target="#xs-pipes-links"' }>
                                <span class="icon ion-md-add"></span>
                                <span>Pipes</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="pipes-links"' : 'id="xs-pipes-links"' }>
                                <li class="link">
                                    <a href="pipes/AttributeValuePricePipe.html" data-type="entity-link" >AttributeValuePricePipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/CartItemPricePipe.html" data-type="entity-link" >CartItemPricePipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/CartPricePipe.html" data-type="entity-link" >CartPricePipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/ConvertCurrencyPipe.html" data-type="entity-link" >ConvertCurrencyPipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/LineItemPricePipe.html" data-type="entity-link" >LineItemPricePipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/LocalCurrencyPipe.html" data-type="entity-link" >LocalCurrencyPipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/OptionPricePipe.html" data-type="entity-link" >OptionPricePipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/OrderLineItemPricePipe.html" data-type="entity-link" >OrderLineItemPricePipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/OrderPricePipe.html" data-type="entity-link" >OrderPricePipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/ProductPricePipe.html" data-type="entity-link" >ProductPricePipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/QuotePricePipe.html" data-type="entity-link" >QuotePricePipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/SplitPascalCasePipe.html" data-type="entity-link" >SplitPascalCasePipe</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});