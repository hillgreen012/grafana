import { GrafanaTheme } from '../types';

export const lightThemeVarsTemplate = (theme: GrafanaTheme) => `
  // Global values
  // --------------------------------------------------

  $theme-name: light;

  // Grays
  // -------------------------
  $black: ${theme.colors.black};
  $dark-1: ${theme.colors.dark1};
  $dark-2: ${theme.colors.dark2};
  $dark-3: ${theme.colors.dark3};
  $dark-4: ${theme.colors.dark4};
  $dark-5: ${theme.colors.dark5};
  $gray-1: ${theme.colors.gray1};
  $gray-2: ${theme.colors.gray2};
  $gray-3: ${theme.colors.gray3};
  $gray-4: ${theme.colors.gray4};
  $gray-5: ${theme.colors.gray5};
  $gray-6: ${theme.colors.gray6};
  $gray-7: ${theme.colors.gray7};

  $white: ${theme.colors.white};

  // Accent colors
  // -------------------------
  $blue: ${theme.colors.blue};
  $blue-light: #00a8e6;
  $green: #3aa655;
  $red: #d44939;
  $yellow: #ff851b;
  $orange: #ff7941;
  $purple: #9954bb;
  $variable: $blue;

  $brand-primary: $orange;
  $brand-success: $green;
  $brand-warning: $orange;
  $brand-danger: $red;

  $query-red: $red;
  $query-green: $green;
  $query-purple: $purple;
  $query-orange: $orange;
  $query-keyword: $blue;

  // Status colors
  // -------------------------
  $online: #01a64f;
  $warn: #f79520;
  $critical: #ec2128;

  // Scaffolding
  // -------------------------
  $body-bg: $gray-7;
  $page-bg: $gray-7;

  $body-color: $gray-1;
  $text-color: $gray-1;
  $text-color-strong: $dark-2;
  $text-color-weak: $gray-2;
  $text-color-faint: $gray-4;
  $text-color-emphasis: $dark-5;

  $text-shadow-faint: none;
  $textShadow: none;

  // gradients
  $brand-gradient: linear-gradient(
    to right,
    rgba(255, 213, 0, 1) 0%,
    rgba(255, 68, 0, 1) 99%,
    rgba(255, 68, 0, 1) 100%
  );

  $page-gradient: linear-gradient(180deg, $white 10px, $gray-7 100px);
  $edit-gradient: linear-gradient(-60deg, $gray-7, #f5f6f9 70%, $gray-7 98%);

  // Links
  // -------------------------
  $link-color: $gray-1;
  $link-color-disabled: lighten($link-color, 30%);
  $link-hover-color: darken($link-color, 20%);
  $external-link-color: $blue-light;

  // Typography
  // -------------------------
  $headings-color: $text-color;
  $abbr-border-color: $gray-2 !default;
  $text-muted: $text-color-weak;

  $hr-border-color: $dark-3 !default;

  // Panel
  // -------------------------
  $panel-bg: $white;
  $panel-border: solid 1px $gray-5;
  $panel-header-hover-bg: $gray-6;
  $panel-corner: $gray-4;

  // Page header
  $page-header-bg: linear-gradient(90deg, $white, $gray-7);
  $page-header-shadow: inset 0px -3px 10px $gray-6;
  $page-header-border-color: $gray-4;

  $divider-border-color: $gray-2;

  // Graphite Target Editor
  $tight-form-bg: #eaebee;
  $tight-form-func-bg: $gray-5;
  $tight-form-func-highlight-bg: $gray-6;

  $modal-backdrop-bg: $body-bg;
  $code-tag-bg: $gray-6;
  $code-tag-border: darken($code-tag-bg, 3%);

  // cards
  $card-background: linear-gradient(135deg, $gray-6, $gray-5);
  $card-background-hover: linear-gradient(135deg, $gray-5, $gray-6);
  $card-shadow: -1px -1px 0 0 hsla(0, 0%, 100%, 0.1), 1px 1px 0 0 rgba(0, 0, 0, 0.1);

  // Lists
  $list-item-bg: linear-gradient(135deg, $gray-5, $gray-6); //$card-background;
  $list-item-hover-bg: darken($gray-5, 5%);
  $list-item-link-color: $text-color;
  $list-item-shadow: $card-shadow;

  $empty-list-cta-bg: $gray-6;

  // Scrollbars
  $scrollbarBackground: $gray-5;
  $scrollbarBackground2: $gray-5;
  $scrollbarBorder: $gray-4;

  // Tables
  // -------------------------
  $table-bg: transparent; // overall background-color
  $table-bg-accent: $gray-5; // for striping
  $table-border: $gray-3; // table and cell border

  $table-bg-odd: $gray-6;
  $table-bg-hover: $gray-5;

  // Buttons
  // -------------------------
  $btn-primary-bg: $brand-primary;
  $btn-primary-bg-hl: lighten($brand-primary, 8%);

  $btn-secondary-bg: $blue;
  $btn-secondary-bg-hl: lighten($blue, 4%);

  $btn-success-bg: lighten($green, 3%);
  $btn-success-bg-hl: darken($green, 3%);

  $btn-warning-bg: lighten($orange, 3%);
  $btn-warning-bg-hl: darken($orange, 3%);

  $btn-danger-bg: lighten($red, 3%);
  $btn-danger-bg-hl: darken($red, 3%);

  $btn-inverse-bg: $gray-6;
  $btn-inverse-bg-hl: darken($gray-6, 5%);
  $btn-inverse-text-color: $gray-1;
  $btn-inverse-text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);

  $btn-link-color: $gray-1;

  $iconContainerBackground: $white;

  $btn-divider-left: $gray-4;
  $btn-divider-right: $gray-7;

  $btn-drag-image: '../img/grab_light.svg';

  // Forms
  // -------------------------
  $input-bg: $white;
  $input-bg-disabled: $gray-5;

  $input-color: $dark-3;
  $input-border-color: $gray-5;
  $input-box-shadow: none;
  $input-border-focus: $blue !default;
  $input-box-shadow-focus: $blue !default;
  $input-color-placeholder: $gray-4 !default;
  $input-label-bg: $gray-5;
  $input-label-border-color: $gray-5;
  $input-color-select-arrow: $gray-1;

  // Input placeholder text color
  $placeholderText: $gray-2;

  // search
  $search-shadow: 0 5px 30px 0 $gray-4;
  $search-filter-box-bg: $gray-7;

  // Typeahead
  $typeahead-shadow: 0 5px 10px 0 $gray-5;
  $typeahead-selected-bg: $gray-6;
  $typeahead-selected-color: $yellow;

  // Dropdowns
  // -------------------------
  $dropdownBackground: $white;
  $dropdownBorder: $gray-4;
  $dropdownDividerTop: $gray-6;
  $dropdownDividerBottom: $white;

  $dropdownLinkColor: $dark-3;
  $dropdownLinkColorHover: $link-color;
  $dropdownLinkColorActive: $link-color;

  $dropdownLinkBackgroundHover: $gray-6;

  // Horizontal forms & lists
  // -------------------------
  $horizontalComponentOffset: 180px;

  // Navbar
  // -------------------------
  $navbarHeight: 52px;

  $navbarBackground: $white;
  $navbarBorder: 1px solid $gray-4;
  $navbarShadow: 0 0 3px #c1c1c1;

  $navbarLinkColor: #444;

  $navbarButtonBackground: lighten($navbarBackground, 3%);
  $navbarButtonBackgroundHighlight: lighten($navbarBackground, 5%);

  $navbar-button-border: $gray-4;

  // Sidemenu
  // -------------------------
  $side-menu-bg: $dark-2;
  $side-menu-bg-mobile: rgba(0, 0, 0, 0); //$gray-6;
  $side-menu-item-hover-bg: $gray-1;
  $side-menu-shadow: 5px 0px 10px -5px $gray-1;
  $side-menu-link-color: $gray-6;

  // Menu dropdowns
  // -------------------------
  $menu-dropdown-bg: $gray-7;
  $menu-dropdown-hover-bg: $gray-6;
  $menu-dropdown-shadow: 5px 5px 10px -5px $gray-1;

  // Tabs
  // -------------------------
  $tab-border-color: $gray-5;

  // Toolbar
  $toolbar-bg: white;

  // Form states and alerts
  // -------------------------
  $warning-text-color: lighten($orange, 10%);
  $error-text-color: lighten($red, 10%);
  $success-text-color: lighten($green, 10%);
  $info-text-color: $blue;

  $alert-error-bg: linear-gradient(90deg, #d44939, #e04d3d);
  $alert-success-bg: linear-gradient(90deg, #3aa655, #47b274);
  $alert-warning-bg: linear-gradient(90deg, #d44939, #e04d3d);
  $alert-info-bg: $blue;

  // popover
  $popover-bg: $page-bg;
  $popover-color: $text-color;
  $popover-border-color: $gray-5;
  $popover-shadow: 0 0 20px $white;

  $popover-help-bg: $blue;
  $popover-help-color: $gray-6;

  $popover-error-bg: $btn-danger-bg;

  // Tooltips and popovers
  // -------------------------
  $tooltipColor: $popover-help-color;
  $tooltipArrowWidth: 5px;
  $tooltipLinkColor: lighten($popover-help-color, 5%);
  $graph-tooltip-bg: $gray-5;

  $tooltipBackground: $gray-1;
  $tooltipColor: $gray-7;
  $tooltipArrowColor: $tooltipBackground; // Used by Angular tooltip
  $tooltipBackgroundError: $brand-danger;

  // images
  $checkboxImageUrl: '../img/checkbox_white.png';

  // info box
  $info-box-border-color: lighten($blue, 20%);

  // footer
  $footer-link-color: $gray-3;
  $footer-link-hover: $dark-5;

  // json explorer
  $json-explorer-default-color: black;
  $json-explorer-string-color: green;
  $json-explorer-number-color: blue;
  $json-explorer-boolean-color: red;
  $json-explorer-null-color: #855a00;
  $json-explorer-undefined-color: rgb(202, 11, 105);
  $json-explorer-function-color: #ff20ed;
  $json-explorer-rotate-time: 100ms;
  $json-explorer-toggler-opacity: 0.6;
  $json-explorer-bracket-color: blue;
  $json-explorer-key-color: #00008b;
  $json-explorer-url-color: blue;

  // Changelog and diff
  // -------------------------
  $diff-label-bg: $gray-5;
  $diff-label-fg: $gray-2;

  $diff-arrow-color: $dark-3;
  $diff-group-bg: $gray-7;

  $diff-json-bg: $gray-5;
  $diff-json-fg: $gray-2;

  $diff-json-added: lighten(desaturate($green, 30%), 10%);
  $diff-json-deleted: desaturate($red, 35%);

  $diff-json-old: #5a372a;
  $diff-json-new: #664e33;

  $diff-json-changed-fg: $gray-6;
  $diff-json-changed-num: $gray-4;

  $diff-json-icon: $gray-4;

  //Submenu
  $variable-option-bg: $blue-light;

  //Switch Slider
  // -------------------------
  $switch-bg: $white;
  $switch-slider-color: $gray-7;
  $switch-slider-off-bg: $gray-5;
  $switch-slider-on-bg: linear-gradient(90deg, $yellow, $red);
  $switch-slider-shadow: 0 0 3px $dark-5;

  //Checkbox
  // -------------------------
  $checkbox-bg: $gray-6;
  $checkbox-border: 1px solid $gray-3;
  $checkbox-checked-bg: linear-gradient(0deg, $yellow, $red);
  $checkbox-color: $gray-7;

  //Panel Edit
  // -------------------------
  $panel-editor-shadow: 0px 0px 8px $gray-3;
  $panel-editor-side-menu-shadow: drop-shadow(0 0 2px $gray-3);
  $panel-editor-viz-item-shadow: 0 0 4px $gray-3;
  $panel-editor-viz-item-border: 1px solid $gray-3;
  $panel-editor-viz-item-shadow-hover: 0 0 4px $blue-light;
  $panel-editor-viz-item-border-hover: 1px solid $blue-light;
  $panel-editor-viz-item-bg: $white;
  $panel-editor-tabs-line-color: $dark-5;
  $panel-editor-viz-item-bg-hover: lighten($blue, 62%);

  $panel-options-group-border: none;
  $panel-options-group-header-bg: $gray-5;

  $panel-grid-placeholder-bg: lighten($blue, 62%);
  $panel-grid-placeholder-shadow: 0 0 4px $blue-light;

  // logs
  $logs-color-unkown: $gray-5;

  // toggle-group
  $button-toggle-group-btn-active-bg: $brand-primary;
  $button-toggle-group-btn-active-shadow: inset 0 0 4px $white;
  $button-toggle-group-btn-seperator-border: 1px solid $gray-6;

  $vertical-resize-handle-bg: $gray-4;
  $vertical-resize-handle-dots: $gray-3;
  $vertical-resize-handle-dots-hover: $gray-2;
`;
