/**
 * @license MIT
 * Copyright (c) 2025–2026 matraic
 * See LICENSE file in the project root for full license text.
 */
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from 'tslib';
import { unsafeCSS, css, LitElement, html } from 'lit';
import { query, property } from 'lit/decorators.js';
import { DesignToken, HtmlFor, Role, AttachInternals, setCustomEnumState, hasAssignedNodes, prefersReducedMotion, customElement } from '@m3e/web/core';

/**
 * Determines whether a value is an `AppBarScrollBehavior`.
 * @param {unknown} value The value to test.
 * @returns Whether `value` is an `AppBarScrollBehavior`.
 */
function isAppBarScrollBehavior(value) {
  return value === "elevate" || value === "compress" || value === "hide" || value === "transparent";
}

/**
 * Determines whether a value is an `AppBarSize`.
 * @param {unknown} value The value to test.
 * @returns Whether `value` is an `AppBarSize`.
 */
function isAppBarSize(value) {
  return value === "small" || value === "medium" || value === "large";
}

/**
 * Component design tokens that control the `M3eAppBarElement` for all size variants.
 * @internal
 */
const AppBarSizeToken = {
  small: {
    containerHeight: unsafeCSS(`var(--m3e-app-bar-small-container-height, 64px)`),
    titleTextFontSize: unsafeCSS(`var(--m3e-app-bar-small-title-text-font-size, ${DesignToken.typescale.standard.title.large.fontSize})`),
    titleTextFontWeight: unsafeCSS(`var(--m3e-app-bar-small-title-text-font-weight, ${DesignToken.typescale.standard.title.large.fontWeight})`),
    titleTextLineHeight: unsafeCSS(`var(--m3e-app-bar-small-title-text-line-height, ${DesignToken.typescale.standard.title.large.lineHeight})`),
    titleTextTracking: unsafeCSS(`var(--m3e-app-bar-small-subtitle-text-tracking, ${DesignToken.typescale.standard.title.large.tracking})`),
    subtitleTextFontSize: unsafeCSS(`var(--m3e-app-bar-small-subtitle-text-font-size, ${DesignToken.typescale.standard.label.medium.fontSize})`),
    subtitleTextFontWeight: unsafeCSS(`var(--m3e-app-bar-small-subtitle-text-font-weight, ${DesignToken.typescale.standard.label.medium.fontWeight})`),
    subtitleTextLineHeight: unsafeCSS(`var(--m3e-app-bar-small-subtitle-text-line-height, ${DesignToken.typescale.standard.label.medium.lineHeight})`),
    subtitleTextTracking: unsafeCSS(`var(--m3e-app-bar-small-subtitle-text-tracking, ${DesignToken.typescale.standard.label.medium.tracking})`),
    headingPaddingLeft: unsafeCSS(`var(--m3e-app-bar-small-heading-padding-left, ${DesignToken.measurement.space50})`),
    headingPaddingRight: unsafeCSS(`var(--m3e-app-bar-small-heading-padding-right, ${DesignToken.measurement.space50})`)
  },
  medium: {
    containerHeight: unsafeCSS(`var(--m3e-app-bar-medium-container-height, 112px)`),
    containerHeightWithSubtitle: unsafeCSS(`var(--m3e-app-bar-medium-container-height-with-subtitle, 136px)`),
    titleTextFontSize: unsafeCSS(`var(--m3e-app-bar-medium-title-text-font-size, ${DesignToken.typescale.standard.headline.medium.fontSize})`),
    titleTextFontWeight: unsafeCSS(`var(--m3e-app-bar-medium-title-text-font-weight, ${DesignToken.typescale.standard.headline.medium.fontWeight})`),
    titleTextLineHeight: unsafeCSS(`var(--m3e-app-bar-medium-title-text-line-height, ${DesignToken.typescale.standard.headline.medium.lineHeight})`),
    titleTextTracking: unsafeCSS(`var(--m3e-app-bar-medium-subtitle-text-tracking, ${DesignToken.typescale.standard.headline.medium.tracking})`),
    subtitleTextFontSize: unsafeCSS(`var(--m3e-app-bar-medium-subtitle-text-font-size, ${DesignToken.typescale.standard.title.small.fontSize})`),
    subtitleTextFontWeight: unsafeCSS(`var(--m3e-app-bar-medium-subtitle-text-font-weight, ${DesignToken.typescale.standard.title.small.fontWeight})`),
    subtitleTextLineHeight: unsafeCSS(`var(--m3e-app-bar-medium-subtitle-text-line-height, ${DesignToken.typescale.standard.title.small.lineHeight})`),
    subtitleTextTracking: unsafeCSS(`var(--m3e-app-bar-medium-subtitle-text-tracking, ${DesignToken.typescale.standard.title.small.tracking})`),
    headingPaddingLeft: unsafeCSS(`var(--m3e-app-bar-medium-heading-padding-left, ${DesignToken.measurement.space200})`),
    headingPaddingRight: unsafeCSS(`var(--m3e-app-bar-medium-heading-padding-right, ${DesignToken.measurement.space50})`),
    paddingTop: unsafeCSS(`var(--m3e-app-bar-medium-padding-top, ${DesignToken.measurement.space100})`),
    paddingBottom: unsafeCSS(`var(--m3e-app-bar-medium-padding-bottom, ${DesignToken.measurement.space150})`),
    titleMaxLines: unsafeCSS(`var(--m3e-app-bar-medium-title-max-lines, 2)`),
    subtitleMaxLines: unsafeCSS(`var(--m3e-app-bar-medium-subtitle-max-lines, 1)`)
  },
  large: {
    containerHeight: unsafeCSS(`var(--m3e-app-bar-large-container-height, 120px)`),
    containerHeightWithSubtitle: unsafeCSS(`var(--m3e-app-bar-large-container-height-with-subtitle, 152px)`),
    titleTextFontSize: unsafeCSS(`var(--m3e-app-bar-large-title-text-font-size, ${DesignToken.typescale.standard.display.small.fontSize})`),
    titleTextFontWeight: unsafeCSS(`var(--m3e-app-bar-large-title-text-font-weight, ${DesignToken.typescale.standard.display.small.fontWeight})`),
    titleTextLineHeight: unsafeCSS(`var(--m3e-app-bar-large-title-text-line-height, ${DesignToken.typescale.standard.display.small.lineHeight})`),
    titleTextTracking: unsafeCSS(`var(--m3e-app-bar-large-subtitle-text-tracking, ${DesignToken.typescale.standard.display.small.tracking})`),
    subtitleTextFontSize: unsafeCSS(`var(--m3e-app-bar-large-subtitle-text-font-size, ${DesignToken.typescale.standard.title.medium.fontSize})`),
    subtitleTextFontWeight: unsafeCSS(`var(--m3e-app-bar-large-subtitle-text-font-weight, ${DesignToken.typescale.standard.title.medium.fontWeight})`),
    subtitleTextLineHeight: unsafeCSS(`var(--m3e-app-bar-large-subtitle-text-line-height, ${DesignToken.typescale.standard.title.medium.lineHeight})`),
    subtitleTextTracking: unsafeCSS(`var(--m3e-app-bar-large-subtitle-text-tracking, ${DesignToken.typescale.standard.title.medium.tracking})`),
    headingPaddingLeft: unsafeCSS(`var(--m3e-app-bar-large-heading-padding-left, ${DesignToken.measurement.space200})`),
    headingPaddingRight: unsafeCSS(`var(--m3e-app-bar-large-heading-padding-right, ${DesignToken.measurement.space50})`),
    paddingTop: unsafeCSS(`var(--m3e-app-bar-large-padding-top, ${DesignToken.measurement.space100})`),
    paddingBottom: unsafeCSS(`var(--m3e-app-bar-large-padding-bottom, ${DesignToken.measurement.space150})`),
    titleMaxLines: unsafeCSS(`var(--m3e-app-bar-large-title-max-lines, 2)`),
    subtitleMaxLines: unsafeCSS(`var(--m3e-app-bar-large-subtitle-max-lines, 1)`)
  }
};

/**
 * Component design tokens that control `M3eAppBarElement`.
 * @internal
 */
const AppBarToken = {
  containerColor: unsafeCSS(`var(--m3e-app-bar-container-color, ${DesignToken.color.surface})`),
  containerColorOnScroll: unsafeCSS(`var(--m3e-app-bar-container-color-on-scroll, ${DesignToken.color.surfaceContainer})`),
  containerElevation: unsafeCSS(`var(--m3e-app-bar-container-elevation, ${DesignToken.elevation.level0})`),
  containerElevationOnScroll: unsafeCSS(`var(--m3e-app-bar-container-elevation-on-scroll, ${DesignToken.elevation.level0})`),
  titleTextColor: unsafeCSS(`var(--m3e-app-bar-title-text-color, ${DesignToken.color.onSurface})`),
  subtitleTextColor: unsafeCSS(`var(--m3e-app-bar-subtitle-text-color, ${DesignToken.color.onSurfaceVariant})`),
  paddingLeft: unsafeCSS(`var(--m3e-app-bar-padding-left, ${DesignToken.measurement.space50})`),
  paddingRight: unsafeCSS(`var(--m3e-app-bar-padding-right, ${DesignToken.measurement.space50})`)
};

/** @private */
function appBarStyle(size) {
  const selector = unsafeCSS(`:is(:state(--${size}), :--${size})`);
  return css`:host(${selector}) .wrapper:not(.with-subtitle) { min-height: ${AppBarSizeToken[size].containerHeight}; } :host(${selector}) .wrapper.with-subtitle { min-height: ${AppBarSizeToken[size].containerHeightWithSubtitle ?? AppBarSizeToken[size].containerHeight}; } :host(${selector}) .title { font-size: ${AppBarSizeToken[size].titleTextFontSize}; font-weight: ${AppBarSizeToken[size].titleTextFontWeight}; line-height: ${AppBarSizeToken[size].titleTextLineHeight}; letter-spacing: ${AppBarSizeToken[size].titleTextTracking}; } :host(${selector}) .subtitle { font-size: ${AppBarSizeToken[size].subtitleTextFontSize}; font-weight: ${AppBarSizeToken[size].subtitleTextFontWeight}; line-height: ${AppBarSizeToken[size].subtitleTextLineHeight}; letter-spacing: ${AppBarSizeToken[size].subtitleTextTracking}; } :host(:not([centered])${selector}) .label { padding-inline-start: ${AppBarSizeToken[size].headingPaddingLeft}; padding-inline-end: ${AppBarSizeToken[size].headingPaddingRight}; } :host([centered]${selector}) .label { padding-inline: ${AppBarSizeToken[size].headingPaddingLeft}; } :host(${selector}) .wrapper { padding-block-start: ${AppBarSizeToken[size].paddingTop ?? unsafeCSS("unset")}; padding-block-end: ${AppBarSizeToken[size].paddingBottom ?? unsafeCSS("unset")}; } ${AppBarSizeToken[size].titleMaxLines ? css`:host(${selector}) .title { display: -webkit-box; -webkit-line-clamp: ${AppBarSizeToken[size].titleMaxLines}; -webkit-box-orient: vertical; overflow: hidden; line-clamp: ${AppBarSizeToken[size].titleMaxLines}; }` : css``} ${AppBarSizeToken[size].subtitleMaxLines ? css`:host(${selector}) .subtitle { display: -webkit-box; -webkit-line-clamp: ${AppBarSizeToken[size].subtitleMaxLines}; -webkit-box-orient: vertical; overflow: hidden; line-clamp: ${AppBarSizeToken[size].subtitleMaxLines}; }` : css``} ${size === "small" ? css`` : compressedStyle(selector)}`;
}
/** @private */
function compressedStyle(selector) {
  const small = AppBarSizeToken.small;
  return css`:host(${selector}) .wrapper.compress { min-height: 0; --_target: ${small.containerHeight}; } :host(${selector}) .wrapper.compress.with-subtitle { --_target: ${small.containerHeightWithSubtitle ?? small.containerHeight}; } :host(${selector}) .wrapper.compact { flex-direction: row; align-items: flex-start; padding-block: 0; padding-inline-start: ${AppBarToken.paddingLeft}; padding-inline-end: ${AppBarToken.paddingRight}; } :host(${selector}) .wrapper.compact .leading-icon, :host(${selector}) .wrapper.compact .trailing-icon, :host(${selector}) .wrapper.compact .label { min-height: ${small.containerHeight}; box-sizing: border-box; } :host(${selector}) .wrapper.compact .label { justify-content: center; } :host(${selector}) .wrapper.compact .heading { display: contents; } :host(${selector}) .wrapper.compact .spacer { display: none; } :host(${selector}) .wrapper.compact .leading-icon { order: 0; } :host(${selector}) .wrapper.compact .label { order: 1; flex: 1 1 auto; min-width: 0; padding-inline-start: ${small.headingPaddingLeft}; padding-inline-end: ${small.headingPaddingRight}; } :host(${selector}) .wrapper.compact .trailing-icon { order: 2; } :host(${selector}) .wrapper.compact .title, :host(${selector}) .wrapper.compact .subtitle { display: block; -webkit-line-clamp: unset; line-clamp: unset; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; text-align: start; } :host(${selector}) .wrapper.compact .title { font-size: ${small.titleTextFontSize}; font-weight: ${small.titleTextFontWeight}; line-height: ${small.titleTextLineHeight}; letter-spacing: ${small.titleTextTracking}; } :host(${selector}) .wrapper.compact .subtitle { font-size: ${small.subtitleTextFontSize}; font-weight: ${small.subtitleTextFontWeight}; line-height: ${small.subtitleTextLineHeight}; letter-spacing: ${small.subtitleTextTracking}; } :host([centered]${selector}) .wrapper.compact .label { padding-inline: ${small.headingPaddingLeft}; } :host([centered]${selector}) .wrapper.compact .title, :host([centered]${selector}) .wrapper.compact .subtitle { text-align: center; }`;
}
/**
 * Size variant styles for `M3eAppBarElement`.
 * @internal
 */
const AppBarSizeStyle = [appBarStyle("small"), appBarStyle("medium"), appBarStyle("large")];

/**
 * Baseline styles for `M3eAppBarElement`.
 * @internal
 */
const AppBarStyle = css`:host { display: block; flex: none; } :host([hidden]) { display: none; } .base { min-height: var(--_app-bar-reserved-height, 0); overflow-anchor: none; } .base:has(.wrapper.compress) { pointer-events: none; } .base > .wrapper.compress { pointer-events: auto; } :host(:is(:state(--small), :--small)) .wrapper, :host(:not(:is(:state(--small), :--small))) .heading { padding-inline-start: ${AppBarToken.paddingLeft}; padding-inline-end: ${AppBarToken.paddingRight}; } .wrapper { box-sizing: border-box; display: flex; transition: ${unsafeCSS(`background-color ${DesignToken.motion.duration.medium1} ${DesignToken.motion.easing.standard},
      box-shadow ${DesignToken.motion.duration.medium1} ${DesignToken.motion.easing.standard},
      transform ${DesignToken.motion.duration.medium1} ${DesignToken.motion.easing.standard},
      min-height ${DesignToken.motion.spring.fastSpatial}`)}; } .wrapper:not(.on-scroll) { background-color: ${AppBarToken.containerColor}; box-shadow: ${AppBarToken.containerElevation}; } .wrapper.on-scroll { background-color: ${AppBarToken.containerColorOnScroll}; box-shadow: ${AppBarToken.containerElevationOnScroll}; } .wrapper.transparent { --_button-container: color-mix( in srgb, ${unsafeCSS(DesignToken.color.surfaceContainer)} calc(var(--_transparent-progress, 0) * 100%), transparent ); --m3e-standard-icon-button-container-color: var(--_button-container); --m3e-standard-icon-button-unselected-container-color: var(--_button-container); --m3e-text-button-container-color: var(--_button-container); --m3e-text-button-unselected-container-color: var(--_button-container); background-color: color-mix( in srgb, ${AppBarToken.containerColor} calc((1 - var(--_transparent-progress, 0)) * 100%), transparent ); box-shadow: none; transition-property: min-height, transform; } .wrapper.transparent .label { opacity: calc(1 - var(--_transparent-progress, 0)); } .wrapper.hide { will-change: transform; transform: translateY(calc(var(--_hide-offset, 0px) * -1)); transition-property: background-color, box-shadow, min-height; } .wrapper.compress.on-scroll { background-color: color-mix( in srgb, ${AppBarToken.containerColorOnScroll} calc(var(--_progress, 0) * 100%), ${AppBarToken.containerColor} ); animation: shadow 1s linear paused both; animation-delay: calc(var(--_progress, 0) * -1s); transition-property: min-height; } @keyframes shadow { from { box-shadow: ${AppBarToken.containerElevation}; } to { box-shadow: ${AppBarToken.containerElevationOnScroll}; } } .wrapper.compressed { overflow: hidden; } .leading-icon, .trailing-icon { display: flex; flex: none; align-items: center; --_icon-button-size: auto; --_icon-button-min-size: 48px; } .leading-icon { min-width: var(--_leading-icon-min-width); } .trailing-icon { min-width: var(--_trailing-icon-min-width); } .heading { display: flex; align-items: center; } :host(:is(:state(--small), :--small)) .heading { flex: 1 1 auto; } .spacer { flex: 1 1 auto; } .label { display: flex; flex-direction: column; flex: none; } .title { color: ${AppBarToken.titleTextColor}; } .subtitle { color: ${AppBarToken.subtitleTextColor}; } .wrapper:not(.with-title) .title, .wrapper:not(.with-subtitle) .subtitle, .wrapper:not(.with-title):not(.with-subtitle) .label, .wrapper:not(.with-trailing-icon) .trailing-icon { display: none; } :host(:is(:state(--small), :--small)) .wrapper { align-items: center; } :host(:is(:state(--small), :--small)) .heading { min-width: 0; } :host(:is(:state(--small), :--small)) .label { flex: 1 1 auto; min-width: 0; } :host(:is(:state(--small), :--small)) .title, :host(:is(:state(--small), :--small)) .subtitle { display: block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; } :host(:not(:is(:state(--small), :--small))) .wrapper { flex-direction: column; } :host([centered]) .title, :host([centered]) .subtitle { text-align: center; } @media (prefers-reduced-motion) { .wrapper, .label { transition: none; } } @media (forced-colors: active) { .wrapper, .label { transition: none; } .wrapper:not(.on-scroll), .wrapper.transparent, .wrapper.on-scroll, .wrapper.compress.on-scroll { background-color: Canvas; box-shadow: unset; animation: none; } .title { color: CanvasText; } .subtitle { color: FieldText; } }`;

var _M3eAppBarElement_instances, _M3eAppBarElement_scrollHandler, _M3eAppBarElement_scrollEndHandler, _M3eAppBarElement_touchStartHandler, _M3eAppBarElement_touchEndHandler, _M3eAppBarElement_pointerDownHandler, _M3eAppBarElement_pointerUpHandler, _M3eAppBarElement_keyDownHandler, _M3eAppBarElement_keyUpHandler, _M3eAppBarElement_interruptHandler, _M3eAppBarElement_frameLoadHandler, _M3eAppBarElement_snapTimer, _M3eAppBarElement_snapFrame, _M3eAppBarElement_snapping, _M3eAppBarElement_touching, _M3eAppBarElement_direction, _M3eAppBarElement_collapse, _M3eAppBarElement_lastScrollTop, _M3eAppBarElement_scrollTop, _M3eAppBarElement_hideLastScrollTop, _M3eAppBarElement_hideOffset, _M3eAppBarElement_expanded, _M3eAppBarElement_range, _M3eAppBarElement_applySize, _M3eAppBarElement_handleTitleSlotChange, _M3eAppBarElement_handleSubtitleSlotChange, _M3eAppBarElement_handleLeadingIconSlotChange, _M3eAppBarElement_handleTrailingIconsSlotChange, _M3eAppBarElement_handleDeprecatedSlotChange, _M3eAppBarElement_handleScroll, _M3eAppBarElement_handleScrollEnd, _M3eAppBarElement_handleTouchStart, _M3eAppBarElement_handleTouchEnd, _M3eAppBarElement_handlePointerDown, _M3eAppBarElement_handlePointerUp, _M3eAppBarElement_handleKeyDown, _M3eAppBarElement_handleKeyUp, _M3eAppBarElement_handleFrameLoad, _M3eAppBarElement_syncCentered, _M3eAppBarElement_clearCentered, _M3eAppBarElement_computeCentered, _M3eAppBarElement_getReleaseView, _M3eAppBarElement_listen, _M3eAppBarElement_unlisten, _M3eAppBarElement_scheduleSnap, _M3eAppBarElement_cancelSnap, _M3eAppBarElement_snap, _M3eAppBarElement_releaseCompress, _M3eAppBarElement_syncScroll, _M3eAppBarElement_applyCollapse, _M3eAppBarElement_setCompact, _M3eAppBarElement_getFrameScrollTop;
/** The keys that scroll a container, which hold the snap off for as long as they are pressed. */
const SCROLL_KEYS = new Set(["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "]);
/**
 * A bar, placed a the top of a screen, used to help users navigate through an application.
 *
 * @description
 * The `m3e-app-bar` component is a prominent user interface component that provides consistent
 * access to key actions, navigation, and contextual information at the top of an application screen.
 * Designed according to Material 3 principles, it organizes content with clear hierarchy, supports
 * dynamic color, elevation, and shape, and adapts to scrolling behavior.
 *
 * @example
 * Use the `leading`, `title`, `subtitle`, and `trailing` slots to arrange navigation and actions.
 * ```html
 * <m3e-app-bar>
 *   <m3e-icon-button slot="leading" aria-label="Back">
 *     <m3e-icon name="arrow_back"></m3e-icon>
 *   </m3e-icon-button>
 *   <span slot="title">Top 10 hiking trails</span>
 *   <span slot="subtitle">Discover popular trails</span>
 *   <m3e-icon-button slot="trailing" aria-label="Bookmark" variant="tonal">
 *     <m3e-icon name="bookmark" filled></m3e-icon>
 *   </m3e-icon-button>
 * </m3e-app-bar>
 * ```
 *
 * @example
 * Use `size` to choose a medium or large app bar. The default size is `small`.
 * ```html
 * <m3e-app-bar size="medium">
 *   <!-- Content omitted for brevity -->
 * </m3e-app-bar>
 * <m3e-app-bar size="large">
 *   <!-- Content omitted for brevity -->
 * </m3e-app-bar>
 * ```
 *
 * @example
 * Use `centered` to keep the title and subtitle centered even when the leading and trailing content
 * differ in width.
 * ```html
 * <m3e-app-bar centered>
 *   <!-- Content omitted for brevity -->
 * </m3e-app-bar>
 * ```
 *
 * @example
 * Attach a sticky app bar to a scroll container with `for`. The default `elevate` behavior changes
 * its appearance when the container is scrolled. Supply the app bar content shown in the first
 * example where the placeholder appears.
 * ```html
 * <div id="scrollContainer">
 *   <m3e-app-bar for="scrollContainer">
 *     <!-- Content omitted for brevity -->
 *   </m3e-app-bar>
 *   <div class="scroll-item">Scroll down to see the elevation behavior</div>
 * </div>
 * <style>
 *   #scrollContainer {
 *     overflow-y: auto;
 *     height: 300px;
 *   }
 *   m3e-app-bar[for="scrollContainer"] {
 *     position: sticky;
 *     top: 0;
 *   }
 *   .scroll-item {
 *     height: 400px;
 *     display: flex;
 *     align-items: center;
 *     justify-content: center;
 *   }
 * </style>
 * ```
 *
 * @example
 * Use `scroll-behavior="transparent"` to fade the container color, title, and subtitle as the
 * container scrolls, while the leading and trailing content remains visible. Supply the app bar
 * content shown in the first example and use the CSS below.
 * ```html
 * <div id="scrollContainer">
 *   <m3e-app-bar for="scrollContainer" scroll-behavior="transparent">
 *     <!-- Content omitted for brevity -->
 *   </m3e-app-bar>
 *   <div class="scroll-item">Scroll down to see the transparent behavior</div>
 * </div>
 * ```
 * ```css
 * #scrollContainer {
 *   overflow-y: auto;
 *   height: 300px;
 * }
 * m3e-app-bar[for="scrollContainer"] {
 *   position: sticky;
 *   top: 0;
 * }
 * .scroll-item {
 *   height: 400px;
 *   display: flex;
 *   align-items: center;
 *   justify-content: center;
 * }
 * ```
 *
 * @example
 * Use `scroll-behavior="hide"` to slide the app bar out of view as the container scrolls down;
 * it returns as the scroll position nears the top. Supply the app bar content shown in the first
 * example and use the CSS below.
 * ```html
 * <div id="scrollContainer">
 *   <m3e-app-bar for="scrollContainer" scroll-behavior="hide">
 *     <!-- Content omitted for brevity -->
 *   </m3e-app-bar>
 *   <div class="scroll-item">Scroll down to hide, up to reveal</div>
 * </div>
 * ```
 * ```css
 * #scrollContainer {
 *   overflow-y: auto;
 *   height: 300px;
 * }
 * m3e-app-bar[for="scrollContainer"] {
 *   position: sticky;
 *   top: 0;
 * }
 * .scroll-item {
 *   height: 400px;
 *   display: flex;
 *   align-items: center;
 *   justify-content: center;
 * }
 * ```
 *
 * @example
 * Use `scroll-behavior="compress"` with a medium or large app bar to collapse it to a small bar
 * as its attached container scrolls. Supply the app bar content shown in the first example and use
 * the CSS below.
 * ```html
 * <div id="scrollContainer">
 *   <m3e-app-bar for="scrollContainer" size="large" scroll-behavior="compress">
 *     <!-- Content omitted for brevity -->
 *   </m3e-app-bar>
 *   <div class="scroll-item">Scroll down to compress the app bar</div>
 * </div>
 * ```
 * ```css
 * #scrollContainer {
 *   overflow-y: auto;
 *   height: 300px;
 * }
 * m3e-app-bar[for="scrollContainer"] {
 *   position: sticky;
 *   top: 0;
 * }
 * .scroll-item {
 *   height: 400px;
 *   display: flex;
 *   align-items: center;
 *   justify-content: center;
 * }
 * ```
 *
 * @tag m3e-app-bar
 *
 * @slot leading - Renders content positioned at the start of the bar.
 * @slot subtitle - Renders the subtitle of the bar.
 * @slot title - Renders the title of the bar.
 * @slot trailing - Renders one or more action buttons aligned to the end of the bar.
 * @slot leading-icon - Deprecated: use the `leading` slot.
 * @slot trailing-icon - Deprecated: use the `trailing` slot.
 *
 * @attr centered - Whether the title and subtitle are centered.
 * @attr for - The identifier of the interactive control to which this element is attached.
 * @attr scroll-behavior - The behavior applied when the attached scroll container is scrolled.
 * @attr size - The size of the bar.
 *
 * @cssprop --m3e-app-bar-container-color - Background color of the app bar container.
 * @cssprop --m3e-app-bar-container-color-on-scroll - Background color of the app bar container when scrolled.
 * @cssprop --m3e-app-bar-container-elevation - Elevation (shadow) of the app bar container.
 * @cssprop --m3e-app-bar-container-elevation-on-scroll - Elevation (shadow) of the app bar container when scrolled.
 * @cssprop --m3e-app-bar-title-text-color - Color of the app bar title text.
 * @cssprop --m3e-app-bar-subtitle-text-color - Color of the app bar subtitle text.
 * @cssprop --m3e-app-bar-padding-left - Left padding for the app bar container.
 * @cssprop --m3e-app-bar-padding-right - Right padding for the app bar container.
 * @cssprop --m3e-app-bar-small-container-height - Height of the small app bar container.
 * @cssprop --m3e-app-bar-small-title-text-font-size - Font size for the small app bar title text.
 * @cssprop --m3e-app-bar-small-title-text-font-weight - Font weight for the small app bar title text.
 * @cssprop --m3e-app-bar-small-title-text-line-height - Line height for the small app bar title text.
 * @cssprop --m3e-app-bar-small-subtitle-text-tracking - Letter spacing (tracking) for the small app bar title text.
 * @cssprop --m3e-app-bar-small-subtitle-text-font-size - Font size for the small app bar subtitle text.
 * @cssprop --m3e-app-bar-small-subtitle-text-font-weight - Font weight for the small app bar subtitle text.
 * @cssprop --m3e-app-bar-small-subtitle-text-line-height - Line height for the small app bar subtitle text.
 * @cssprop --m3e-app-bar-small-subtitle-text-tracking - Letter spacing (tracking) for the small app bar subtitle text.
 * @cssprop --m3e-app-bar-small-heading-padding-left - Left padding for the small app bar heading.
 * @cssprop --m3e-app-bar-small-heading-padding-right - Right padding for the small app bar heading.
 * @cssprop --m3e-app-bar-medium-container-height - Height of the medium app bar container.
 * @cssprop --m3e-app-bar-medium-container-height-with-subtitle - Height of the medium app bar container with subtitle.
 * @cssprop --m3e-app-bar-medium-title-text-font-size - Font size for the medium app bar title text.
 * @cssprop --m3e-app-bar-medium-title-text-font-weight - Font weight for the medium app bar title text.
 * @cssprop --m3e-app-bar-medium-title-text-line-height - Line height for the medium app bar title text.
 * @cssprop --m3e-app-bar-medium-subtitle-text-tracking - Letter spacing (tracking) for the medium app bar title text.
 * @cssprop --m3e-app-bar-medium-subtitle-text-font-size - Font size for the medium app bar subtitle text.
 * @cssprop --m3e-app-bar-medium-subtitle-text-font-weight - Font weight for the medium app bar subtitle text.
 * @cssprop --m3e-app-bar-medium-subtitle-text-line-height - Line height for the medium app bar subtitle text.
 * @cssprop --m3e-app-bar-medium-subtitle-text-tracking - Letter spacing (tracking) for the medium app bar subtitle text.
 * @cssprop --m3e-app-bar-medium-heading-padding-left - Left padding for the medium app bar heading.
 * @cssprop --m3e-app-bar-medium-heading-padding-right - Right padding for the medium app bar heading.
 * @cssprop --m3e-app-bar-medium-padding-top - Top padding for the medium app bar.
 * @cssprop --m3e-app-bar-medium-padding-bottom - Bottom padding for the medium app bar.
 * @cssprop --m3e-app-bar-medium-title-max-lines - Maximum number of lines for the medium app bar title.
 * @cssprop --m3e-app-bar-medium-subtitle-max-lines - Maximum number of lines for the medium app bar subtitle.
 * @cssprop --m3e-app-bar-large-container-height - Height of the large app bar container.
 * @cssprop --m3e-app-bar-large-container-height-with-subtitle - Height of the large app bar container with subtitle.
 * @cssprop --m3e-app-bar-large-title-text-font-size - Font size for the large app bar title text.
 * @cssprop --m3e-app-bar-large-title-text-font-weight - Font weight for the large app bar title text.
 * @cssprop --m3e-app-bar-large-title-text-line-height - Line height for the large app bar title text.
 * @cssprop --m3e-app-bar-large-subtitle-text-tracking - Letter spacing (tracking) for the large app bar title text.
 * @cssprop --m3e-app-bar-large-subtitle-text-font-size - Font size for the large app bar subtitle text.
 * @cssprop --m3e-app-bar-large-subtitle-text-font-weight - Font weight for the large app bar subtitle text.
 * @cssprop --m3e-app-bar-large-subtitle-text-line-height - Line height for the large app bar subtitle text.
 * @cssprop --m3e-app-bar-large-subtitle-text-tracking - Letter spacing (tracking) for the large app bar subtitle text.
 * @cssprop --m3e-app-bar-large-heading-padding-left - Left padding for the large app bar heading.
 * @cssprop --m3e-app-bar-large-heading-padding-right - Right padding for the large app bar heading.
 * @cssprop --m3e-app-bar-large-padding-top - Top padding for the large app bar.
 * @cssprop --m3e-app-bar-large-padding-bottom - Bottom padding for the large app bar.
 * @cssprop --m3e-app-bar-large-title-max-lines - Maximum number of lines for the large app bar title.
 * @cssprop --m3e-app-bar-large-subtitle-max-lines - Maximum number of lines for the large app bar subtitle.
 */
let M3eAppBarElement = class M3eAppBarElement extends HtmlFor(Role(AttachInternals(LitElement), "banner")) {
  constructor() {
    super(...arguments);
    _M3eAppBarElement_instances.add(this);
    /** @private */
    _M3eAppBarElement_scrollHandler.set(this, e => __classPrivateFieldGet(this, _M3eAppBarElement_instances, "m", _M3eAppBarElement_handleScroll).call(this, e));
    /** @private */
    _M3eAppBarElement_scrollEndHandler.set(this, () => __classPrivateFieldGet(this, _M3eAppBarElement_instances, "m", _M3eAppBarElement_handleScrollEnd).call(this));
    /** @private */
    _M3eAppBarElement_touchStartHandler.set(this, () => __classPrivateFieldGet(this, _M3eAppBarElement_instances, "m", _M3eAppBarElement_handleTouchStart).call(this));
    /** @private */
    _M3eAppBarElement_touchEndHandler.set(this, () => __classPrivateFieldGet(this, _M3eAppBarElement_instances, "m", _M3eAppBarElement_handleTouchEnd).call(this));
    /** @private */
    _M3eAppBarElement_pointerDownHandler.set(this, e => __classPrivateFieldGet(this, _M3eAppBarElement_instances, "m", _M3eAppBarElement_handlePointerDown).call(this, e));
    /** @private */
    _M3eAppBarElement_pointerUpHandler.set(this, e => __classPrivateFieldGet(this, _M3eAppBarElement_instances, "m", _M3eAppBarElement_handlePointerUp).call(this, e));
    /** @private */
    _M3eAppBarElement_keyDownHandler.set(this, e => __classPrivateFieldGet(this, _M3eAppBarElement_instances, "m", _M3eAppBarElement_handleKeyDown).call(this, e));
    /** @private */
    _M3eAppBarElement_keyUpHandler.set(this, e => __classPrivateFieldGet(this, _M3eAppBarElement_instances, "m", _M3eAppBarElement_handleKeyUp).call(this, e));
    /** @private */
    _M3eAppBarElement_interruptHandler.set(this, () => __classPrivateFieldGet(this, _M3eAppBarElement_instances, "m", _M3eAppBarElement_cancelSnap).call(this));
    /** @private */
    _M3eAppBarElement_frameLoadHandler.set(this, () => __classPrivateFieldGet(this, _M3eAppBarElement_instances, "m", _M3eAppBarElement_handleFrameLoad).call(this));
    /** @private */
    _M3eAppBarElement_snapTimer.set(this, void 0);
    /** @private */
    _M3eAppBarElement_snapFrame.set(this, 0);
    /** @private */
    _M3eAppBarElement_snapping.set(this, false);
    /** @private */
    _M3eAppBarElement_touching.set(this, false);
    /** @private */
    _M3eAppBarElement_direction.set(this, 0);
    /** @private */
    _M3eAppBarElement_collapse.set(this, 0);
    /** @private */
    _M3eAppBarElement_lastScrollTop.set(this, 0);
    /** @private */
    _M3eAppBarElement_scrollTop.set(this, 0);
    /** @private */
    _M3eAppBarElement_hideLastScrollTop.set(this, 0);
    /** @private */
    _M3eAppBarElement_hideOffset.set(this, 0);
    /** @private */
    _M3eAppBarElement_expanded.set(this, 0);
    /** @private */
    _M3eAppBarElement_range.set(this, 0);
    /**
     * Whether the title and subtitle are centered.
     * @default false
     */
    this.centered = false;
    /**
     * The behavior applied when the attached scroll container is scrolled.
     * @default "elevate"
     */
    this.scrollBehavior = "elevate";
    /**
     * The size of the bar.
     * @default "small"
     */
    this.size = "small";
  }
  /** @inheritdoc */
  attach(control) {
    super.attach(control);
    if (control instanceof HTMLIFrameElement) {
      control.addEventListener("load", __classPrivateFieldGet(this, _M3eAppBarElement_frameLoadHandler, "f"));
      __classPrivateFieldGet(this, _M3eAppBarElement_instances, "m", _M3eAppBarElement_handleFrameLoad).call(this);
    } else {
      __classPrivateFieldGet(this, _M3eAppBarElement_instances, "m", _M3eAppBarElement_listen).call(this, control);
    }
  }
  /** @inheritdoc */
  detach() {
    if (this.control instanceof HTMLIFrameElement) {
      this.control.removeEventListener("load", __classPrivateFieldGet(this, _M3eAppBarElement_frameLoadHandler, "f"));
      __classPrivateFieldGet(this, _M3eAppBarElement_instances, "m", _M3eAppBarElement_unlisten).call(this, this.control.contentDocument);
    }
    if (this.control) {
      __classPrivateFieldGet(this, _M3eAppBarElement_instances, "m", _M3eAppBarElement_unlisten).call(this, this.control);
    }
    __classPrivateFieldGet(this, _M3eAppBarElement_instances, "m", _M3eAppBarElement_cancelSnap).call(this);
    super.detach();
  }
  /** @inheritdoc */
  connectedCallback() {
    super.connectedCallback();
    __classPrivateFieldGet(this, _M3eAppBarElement_instances, "m", _M3eAppBarElement_applySize).call(this);
    // Automatically remove banner role when it is nested inside any element with a disallowed role.
    if (this.role === "banner") {
      const allowed = ["document", "application", "main"];
      const ancestorWithRole = this.parentElement?.closest("[role]");
      if (ancestorWithRole && ancestorWithRole.role && !allowed.includes(ancestorWithRole.role)) {
        this.removeAttribute("role");
      }
    }
  }
  /** @inheritdoc */
  willUpdate(_changedProperties) {
    super.willUpdate(_changedProperties);
    if (_changedProperties.has("size")) {
      __classPrivateFieldGet(this, _M3eAppBarElement_instances, "m", _M3eAppBarElement_applySize).call(this);
    }
    if (_changedProperties.has("scrollBehavior") && !isAppBarScrollBehavior(this.scrollBehavior)) {
      this.scrollBehavior = "elevate";
    }
  }
  /** @inheritdoc */
  updated(_changedProperties) {
    super.updated(_changedProperties);
    if (_changedProperties.has("size") || _changedProperties.has("scrollBehavior")) {
      __classPrivateFieldGet(this, _M3eAppBarElement_instances, "m", _M3eAppBarElement_syncScroll).call(this);
    }
    if (_changedProperties.has("centered") || _changedProperties.has("size")) {
      __classPrivateFieldGet(this, _M3eAppBarElement_instances, "m", _M3eAppBarElement_syncCentered).call(this);
    }
  }
  /** @inheritdoc */
  render() {
    switch (this.size) {
      case "small":
        return html`<div class="base"><div class="wrapper"><div class="leading-icon"><slot name="leading" @slotchange="${__classPrivateFieldGet(this, _M3eAppBarElement_instances, "m", _M3eAppBarElement_handleLeadingIconSlotChange)}"><slot name="leading-icon" @slotchange="${__classPrivateFieldGet(this, _M3eAppBarElement_instances, "m", _M3eAppBarElement_handleDeprecatedSlotChange)}"></slot></slot></div><div class="heading"><div class="label"><div class="title"><slot name="title" @slotchange="${__classPrivateFieldGet(this, _M3eAppBarElement_instances, "m", _M3eAppBarElement_handleTitleSlotChange)}"></slot></div><div class="subtitle"><slot name="subtitle" @slotchange="${__classPrivateFieldGet(this, _M3eAppBarElement_instances, "m", _M3eAppBarElement_handleSubtitleSlotChange)}"></slot></div></div></div><div class="trailing-icon"><slot name="trailing" @slotchange="${__classPrivateFieldGet(this, _M3eAppBarElement_instances, "m", _M3eAppBarElement_handleTrailingIconsSlotChange)}"><slot name="trailing-icon" @slotchange="${__classPrivateFieldGet(this, _M3eAppBarElement_instances, "m", _M3eAppBarElement_handleDeprecatedSlotChange)}"></slot></slot></div></div></div>`;
      default:
        return html`<div class="base"><div class="wrapper"><div class="heading"><div class="leading-icon"><slot name="leading" @slotchange="${__classPrivateFieldGet(this, _M3eAppBarElement_instances, "m", _M3eAppBarElement_handleLeadingIconSlotChange)}"><slot name="leading-icon" @slotchange="${__classPrivateFieldGet(this, _M3eAppBarElement_instances, "m", _M3eAppBarElement_handleDeprecatedSlotChange)}"></slot></slot></div><div class="spacer"></div><div class="trailing-icon"><slot name="trailing" @slotchange="${__classPrivateFieldGet(this, _M3eAppBarElement_instances, "m", _M3eAppBarElement_handleTrailingIconsSlotChange)}"><slot name="trailing-icon" @slotchange="${__classPrivateFieldGet(this, _M3eAppBarElement_instances, "m", _M3eAppBarElement_handleDeprecatedSlotChange)}"></slot></slot></div></div><div class="spacer"></div><div class="label"><div class="title"><slot name="title" @slotchange="${__classPrivateFieldGet(this, _M3eAppBarElement_instances, "m", _M3eAppBarElement_handleTitleSlotChange)}"></slot></div><div class="subtitle"><slot name="subtitle" @slotchange="${__classPrivateFieldGet(this, _M3eAppBarElement_instances, "m", _M3eAppBarElement_handleSubtitleSlotChange)}"></slot></div></div></div></div>`;
    }
  }
};
_M3eAppBarElement_scrollHandler = new WeakMap();
_M3eAppBarElement_scrollEndHandler = new WeakMap();
_M3eAppBarElement_touchStartHandler = new WeakMap();
_M3eAppBarElement_touchEndHandler = new WeakMap();
_M3eAppBarElement_pointerDownHandler = new WeakMap();
_M3eAppBarElement_pointerUpHandler = new WeakMap();
_M3eAppBarElement_keyDownHandler = new WeakMap();
_M3eAppBarElement_keyUpHandler = new WeakMap();
_M3eAppBarElement_interruptHandler = new WeakMap();
_M3eAppBarElement_frameLoadHandler = new WeakMap();
_M3eAppBarElement_snapTimer = new WeakMap();
_M3eAppBarElement_snapFrame = new WeakMap();
_M3eAppBarElement_snapping = new WeakMap();
_M3eAppBarElement_touching = new WeakMap();
_M3eAppBarElement_direction = new WeakMap();
_M3eAppBarElement_collapse = new WeakMap();
_M3eAppBarElement_lastScrollTop = new WeakMap();
_M3eAppBarElement_scrollTop = new WeakMap();
_M3eAppBarElement_hideLastScrollTop = new WeakMap();
_M3eAppBarElement_hideOffset = new WeakMap();
_M3eAppBarElement_expanded = new WeakMap();
_M3eAppBarElement_range = new WeakMap();
_M3eAppBarElement_instances = new WeakSet();
_M3eAppBarElement_applySize = function _M3eAppBarElement_applySize() {
  if (!isAppBarSize(this.size)) {
    this.size = "small";
  }
  setCustomEnumState(this, this.size, "small", "medium", "large");
};
_M3eAppBarElement_handleTitleSlotChange = function _M3eAppBarElement_handleTitleSlotChange(e) {
  this._wrapper?.classList.toggle("with-title", hasAssignedNodes(e.target));
};
_M3eAppBarElement_handleSubtitleSlotChange = function _M3eAppBarElement_handleSubtitleSlotChange(e) {
  this._wrapper?.classList.toggle("with-subtitle", hasAssignedNodes(e.target));
};
_M3eAppBarElement_handleLeadingIconSlotChange = function _M3eAppBarElement_handleLeadingIconSlotChange(e) {
  this._wrapper?.classList.toggle("with-leading-icon", hasAssignedNodes(e.target));
  setTimeout(() => __classPrivateFieldGet(this, _M3eAppBarElement_instances, "m", _M3eAppBarElement_syncCentered).call(this), 40);
};
_M3eAppBarElement_handleTrailingIconsSlotChange = function _M3eAppBarElement_handleTrailingIconsSlotChange(e) {
  this._wrapper?.classList.toggle("with-trailing-icon", hasAssignedNodes(e.target));
  setTimeout(() => __classPrivateFieldGet(this, _M3eAppBarElement_instances, "m", _M3eAppBarElement_syncCentered).call(this), 40);
};
_M3eAppBarElement_handleDeprecatedSlotChange = function _M3eAppBarElement_handleDeprecatedSlotChange(e) {
  const deprecatedSlot = e.target.name;
  const useSlot = deprecatedSlot.replace("-icon", "");
  console.warn(`[m3e-app-bar] Slot "${deprecatedSlot}" is deprecated and will be removed in a future release. Use "${useSlot}" instead.`);
};
_M3eAppBarElement_handleScroll = function _M3eAppBarElement_handleScroll(e) {
  let scrollTop = 0;
  if (this.control instanceof HTMLIFrameElement) {
    scrollTop = __classPrivateFieldGet(this, _M3eAppBarElement_instances, "m", _M3eAppBarElement_getFrameScrollTop).call(this, this.control);
  } else if (e.target instanceof HTMLElement) {
    scrollTop = e.target.scrollTop;
  }
  __classPrivateFieldSet(this, _M3eAppBarElement_scrollTop, scrollTop, "f");
  // Scroll events caused by the snap itself must not feed back into the collapse.
  if (__classPrivateFieldGet(this, _M3eAppBarElement_snapping, "f")) return;
  __classPrivateFieldGet(this, _M3eAppBarElement_instances, "m", _M3eAppBarElement_syncScroll).call(this);
  // If the browser reports when scrolling has finished, no need to guess with a timer.
  // A pending release timer must not snap while momentum or a drag is still scrolling; `scrollend` will.
  if ("onscrollend" in window) {
    clearTimeout(__classPrivateFieldGet(this, _M3eAppBarElement_snapTimer, "f"));
  } else {
    __classPrivateFieldGet(this, _M3eAppBarElement_instances, "m", _M3eAppBarElement_scheduleSnap).call(this);
  }
};
_M3eAppBarElement_handleScrollEnd = function _M3eAppBarElement_handleScrollEnd() {
  if (__classPrivateFieldGet(this, _M3eAppBarElement_snapping, "f") || __classPrivateFieldGet(this, _M3eAppBarElement_touching, "f")) return;
  clearTimeout(__classPrivateFieldGet(this, _M3eAppBarElement_snapTimer, "f"));
  __classPrivateFieldGet(this, _M3eAppBarElement_instances, "m", _M3eAppBarElement_snap).call(this);
};
_M3eAppBarElement_handleTouchStart = function _M3eAppBarElement_handleTouchStart() {
  __classPrivateFieldSet(this, _M3eAppBarElement_touching, true, "f");
  __classPrivateFieldGet(this, _M3eAppBarElement_instances, "m", _M3eAppBarElement_cancelSnap).call(this);
};
_M3eAppBarElement_handleTouchEnd = function _M3eAppBarElement_handleTouchEnd() {
  __classPrivateFieldSet(this, _M3eAppBarElement_touching, false, "f");
  __classPrivateFieldGet(this, _M3eAppBarElement_instances, "m", _M3eAppBarElement_scheduleSnap).call(this);
};
_M3eAppBarElement_handlePointerDown = function _M3eAppBarElement_handlePointerDown(e) {
  if (e.pointerType !== "touch") {
    __classPrivateFieldGet(this, _M3eAppBarElement_instances, "m", _M3eAppBarElement_handleTouchStart).call(this);
  }
};
_M3eAppBarElement_handlePointerUp = function _M3eAppBarElement_handlePointerUp(e) {
  if (e.pointerType !== "touch") {
    __classPrivateFieldGet(this, _M3eAppBarElement_instances, "m", _M3eAppBarElement_handleTouchEnd).call(this);
  }
};
_M3eAppBarElement_handleKeyDown = function _M3eAppBarElement_handleKeyDown(e) {
  if (SCROLL_KEYS.has(e.key)) {
    __classPrivateFieldGet(this, _M3eAppBarElement_instances, "m", _M3eAppBarElement_handleTouchStart).call(this);
  }
};
_M3eAppBarElement_handleKeyUp = function _M3eAppBarElement_handleKeyUp(e) {
  if (SCROLL_KEYS.has(e.key)) {
    __classPrivateFieldGet(this, _M3eAppBarElement_instances, "m", _M3eAppBarElement_handleTouchEnd).call(this);
  }
};
_M3eAppBarElement_handleFrameLoad = function _M3eAppBarElement_handleFrameLoad() {
  if (this.control instanceof HTMLIFrameElement) {
    __classPrivateFieldGet(this, _M3eAppBarElement_instances, "m", _M3eAppBarElement_listen).call(this, this.control.contentDocument);
    __classPrivateFieldSet(this, _M3eAppBarElement_scrollTop, __classPrivateFieldGet(this, _M3eAppBarElement_instances, "m", _M3eAppBarElement_getFrameScrollTop).call(this, this.control), "f");
    __classPrivateFieldGet(this, _M3eAppBarElement_instances, "m", _M3eAppBarElement_syncScroll).call(this);
  }
};
_M3eAppBarElement_syncCentered = function _M3eAppBarElement_syncCentered() {
  // Centering balances the icon widths, which applies to a small bar and to a compressed (compact) row.
  if (this.centered && (this.size === "small" || this._wrapper?.classList.contains("compact"))) {
    __classPrivateFieldGet(this, _M3eAppBarElement_instances, "m", _M3eAppBarElement_computeCentered).call(this);
  } else {
    __classPrivateFieldGet(this, _M3eAppBarElement_instances, "m", _M3eAppBarElement_clearCentered).call(this);
  }
};
_M3eAppBarElement_clearCentered = function _M3eAppBarElement_clearCentered() {
  this._wrapper?.style.removeProperty("--_leading-icon-min-width");
  this._wrapper?.style.removeProperty("--_trailing-icon-min-width");
};
_M3eAppBarElement_computeCentered = function _M3eAppBarElement_computeCentered() {
  __classPrivateFieldGet(this, _M3eAppBarElement_instances, "m", _M3eAppBarElement_clearCentered).call(this);
  const leadingWidth = this._leadingIcon?.getBoundingClientRect().width ?? 0;
  const trailingWidth = this._trailingIcon?.getBoundingClientRect().width ?? 0;
  if (leadingWidth < trailingWidth) {
    this._wrapper?.style.setProperty("--_leading-icon-min-width", `${trailingWidth}px`);
  } else if (leadingWidth > trailingWidth) {
    this._wrapper?.style.setProperty("--_trailing-icon-min-width", `${leadingWidth}px`);
  }
};
_M3eAppBarElement_getReleaseView = function _M3eAppBarElement_getReleaseView(target) {
  if (target instanceof Document) return target.defaultView;
  return target instanceof Node ? target.ownerDocument?.defaultView ?? null : null;
};
_M3eAppBarElement_listen = function _M3eAppBarElement_listen(target) {
  const passiveOptions = {
    passive: true
  };
  target?.addEventListener("scroll", __classPrivateFieldGet(this, _M3eAppBarElement_scrollHandler, "f"), passiveOptions);
  target?.addEventListener("scrollend", __classPrivateFieldGet(this, _M3eAppBarElement_scrollEndHandler, "f"), passiveOptions);
  target?.addEventListener("wheel", __classPrivateFieldGet(this, _M3eAppBarElement_interruptHandler, "f"), passiveOptions);
  target?.addEventListener("touchstart", __classPrivateFieldGet(this, _M3eAppBarElement_touchStartHandler, "f"), passiveOptions);
  target?.addEventListener("touchend", __classPrivateFieldGet(this, _M3eAppBarElement_touchEndHandler, "f"), passiveOptions);
  target?.addEventListener("touchcancel", __classPrivateFieldGet(this, _M3eAppBarElement_touchEndHandler, "f"), passiveOptions);
  target?.addEventListener("pointerdown", __classPrivateFieldGet(this, _M3eAppBarElement_pointerDownHandler, "f"), passiveOptions);
  target?.addEventListener("keydown", __classPrivateFieldGet(this, _M3eAppBarElement_keyDownHandler, "f"), passiveOptions);
  // A drag that began on the scroll container (such as on its scrollbar) can be released anywhere.
  const view = __classPrivateFieldGet(this, _M3eAppBarElement_instances, "m", _M3eAppBarElement_getReleaseView).call(this, target);
  view?.addEventListener("keyup", __classPrivateFieldGet(this, _M3eAppBarElement_keyUpHandler, "f"), passiveOptions);
  view?.addEventListener("pointerup", __classPrivateFieldGet(this, _M3eAppBarElement_pointerUpHandler, "f"), passiveOptions);
  view?.addEventListener("pointercancel", __classPrivateFieldGet(this, _M3eAppBarElement_pointerUpHandler, "f"), passiveOptions);
};
_M3eAppBarElement_unlisten = function _M3eAppBarElement_unlisten(target) {
  target?.removeEventListener("scroll", __classPrivateFieldGet(this, _M3eAppBarElement_scrollHandler, "f"));
  target?.removeEventListener("scrollend", __classPrivateFieldGet(this, _M3eAppBarElement_scrollEndHandler, "f"));
  target?.removeEventListener("wheel", __classPrivateFieldGet(this, _M3eAppBarElement_interruptHandler, "f"));
  target?.removeEventListener("touchstart", __classPrivateFieldGet(this, _M3eAppBarElement_touchStartHandler, "f"));
  target?.removeEventListener("touchend", __classPrivateFieldGet(this, _M3eAppBarElement_touchEndHandler, "f"));
  target?.removeEventListener("touchcancel", __classPrivateFieldGet(this, _M3eAppBarElement_touchEndHandler, "f"));
  target?.removeEventListener("pointerdown", __classPrivateFieldGet(this, _M3eAppBarElement_pointerDownHandler, "f"));
  target?.removeEventListener("keydown", __classPrivateFieldGet(this, _M3eAppBarElement_keyDownHandler, "f"));
  const view = __classPrivateFieldGet(this, _M3eAppBarElement_instances, "m", _M3eAppBarElement_getReleaseView).call(this, target);
  view?.removeEventListener("keyup", __classPrivateFieldGet(this, _M3eAppBarElement_keyUpHandler, "f"));
  view?.removeEventListener("pointerup", __classPrivateFieldGet(this, _M3eAppBarElement_pointerUpHandler, "f"));
  view?.removeEventListener("pointercancel", __classPrivateFieldGet(this, _M3eAppBarElement_pointerUpHandler, "f"));
};
_M3eAppBarElement_scheduleSnap = function _M3eAppBarElement_scheduleSnap() {
  // Snaps once scrolling has been idle (no scroll events and no finger down) for a short period.
  clearTimeout(__classPrivateFieldGet(this, _M3eAppBarElement_snapTimer, "f"));
  if (__classPrivateFieldGet(this, _M3eAppBarElement_touching, "f")) return;
  __classPrivateFieldSet(this, _M3eAppBarElement_snapTimer, setTimeout(() => __classPrivateFieldGet(this, _M3eAppBarElement_instances, "m", _M3eAppBarElement_snap).call(this), 150), "f");
};
_M3eAppBarElement_cancelSnap = function _M3eAppBarElement_cancelSnap() {
  clearTimeout(__classPrivateFieldGet(this, _M3eAppBarElement_snapTimer, "f"));
  cancelAnimationFrame(__classPrivateFieldGet(this, _M3eAppBarElement_snapFrame, "f"));
  __classPrivateFieldSet(this, _M3eAppBarElement_snapping, false, "f");
};
_M3eAppBarElement_snap = function _M3eAppBarElement_snap() {
  // Once scrolling is idle part way through a collapse, finishes the collapse in the direction of the last scroll.
  // The scroll position moves by the same amount, so the content stays in step with the bar.
  if (this.scrollBehavior !== "compress" || this.size === "small" || __classPrivateFieldGet(this, _M3eAppBarElement_touching, "f")) return;
  if (__classPrivateFieldGet(this, _M3eAppBarElement_range, "f") <= 0 || __classPrivateFieldGet(this, _M3eAppBarElement_scrollTop, "f") <= 0) return;
  if (__classPrivateFieldGet(this, _M3eAppBarElement_collapse, "f") <= 0 || __classPrivateFieldGet(this, _M3eAppBarElement_collapse, "f") >= __classPrivateFieldGet(this, _M3eAppBarElement_range, "f")) return;
  const scroller = this.control instanceof HTMLIFrameElement ? this.control.contentDocument?.scrollingElement : this.control;
  if (!scroller) return;
  const fromCollapse = __classPrivateFieldGet(this, _M3eAppBarElement_collapse, "f");
  const toCollapse = __classPrivateFieldGet(this, _M3eAppBarElement_direction, "f") >= 0 ? __classPrivateFieldGet(this, _M3eAppBarElement_range, "f") : 0;
  const fromTop = scroller.scrollTop;
  const maxTop = scroller.scrollHeight - scroller.clientHeight;
  const toTop = Math.min(maxTop, Math.max(0, fromTop + (toCollapse - fromCollapse)));
  const distance = toTop - fromTop;
  if (distance === 0) return;
  const duration = prefersReducedMotion() ? 0 : 200;
  const start = performance.now();
  __classPrivateFieldSet(this, _M3eAppBarElement_snapping, true, "f");
  const step = now => {
    const t = duration === 0 ? 1 : Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - t, 3);
    scroller.scrollTop = fromTop + distance * eased;
    __classPrivateFieldSet(this, _M3eAppBarElement_scrollTop, scroller.scrollTop, "f");
    __classPrivateFieldSet(this, _M3eAppBarElement_lastScrollTop, __classPrivateFieldGet(this, _M3eAppBarElement_scrollTop, "f"), "f");
    __classPrivateFieldSet(this, _M3eAppBarElement_collapse, Math.min(__classPrivateFieldGet(this, _M3eAppBarElement_range, "f"), Math.max(0, fromCollapse + distance * eased)), "f");
    __classPrivateFieldGet(this, _M3eAppBarElement_instances, "m", _M3eAppBarElement_applyCollapse).call(this);
    if (t < 1) {
      __classPrivateFieldSet(this, _M3eAppBarElement_snapFrame, requestAnimationFrame(step), "f");
    } else {
      __classPrivateFieldSet(this, _M3eAppBarElement_snapping, false, "f");
    }
  };
  __classPrivateFieldSet(this, _M3eAppBarElement_snapFrame, requestAnimationFrame(step), "f");
};
_M3eAppBarElement_releaseCompress = function _M3eAppBarElement_releaseCompress() {
  __classPrivateFieldGet(this, _M3eAppBarElement_instances, "m", _M3eAppBarElement_cancelSnap).call(this);
  __classPrivateFieldSet(this, _M3eAppBarElement_direction, 0, "f");
  this._base?.style.removeProperty("--_app-bar-reserved-height");
  this._wrapper?.style.removeProperty("height");
  this._wrapper?.style.removeProperty("--_progress");
  const label = this._wrapper?.querySelector(".label");
  label?.style.removeProperty("opacity");
  label?.style.removeProperty("transform");
  this._wrapper?.classList.remove("compressed");
  __classPrivateFieldSet(this, _M3eAppBarElement_range, 0, "f");
  __classPrivateFieldSet(this, _M3eAppBarElement_collapse, 0, "f");
  __classPrivateFieldSet(this, _M3eAppBarElement_lastScrollTop, 0, "f");
};
_M3eAppBarElement_syncScroll = function _M3eAppBarElement_syncScroll() {
  const base = this._base;
  const wrapper = this._wrapper;
  if (!wrapper || !base) return;
  const scrolled = __classPrivateFieldGet(this, _M3eAppBarElement_scrollTop, "f") > 0;
  const compress = this.scrollBehavior === "compress";
  const collapses = compress && this.size !== "small";
  // A small bar with the compress behavior has nothing to collapse, so it does not react to scrolling.
  wrapper.classList.toggle("on-scroll", scrolled && this.scrollBehavior !== "hide" && (!compress || collapses));
  wrapper.classList.toggle("compress", collapses);
  const transparent = this.scrollBehavior === "transparent";
  wrapper.classList.toggle("transparent", transparent);
  if (transparent) {
    wrapper.style.setProperty("--_transparent-progress", `${Math.min(1, __classPrivateFieldGet(this, _M3eAppBarElement_scrollTop, "f") / 64)}`);
  } else {
    wrapper.style.removeProperty("--_transparent-progress");
  }
  // The bar slides out of view by the distance scrolled down, up to its own height. It only slides
  // back in once the scroll position is within its height of the top.
  const hideDelta = __classPrivateFieldGet(this, _M3eAppBarElement_scrollTop, "f") - __classPrivateFieldGet(this, _M3eAppBarElement_hideLastScrollTop, "f");
  __classPrivateFieldSet(this, _M3eAppBarElement_hideLastScrollTop, __classPrivateFieldGet(this, _M3eAppBarElement_scrollTop, "f"), "f");
  if (this.scrollBehavior !== "hide" || !scrolled) {
    __classPrivateFieldSet(this, _M3eAppBarElement_hideOffset, 0, "f");
    wrapper.style.removeProperty("--_hide-offset");
  } else if (hideDelta !== 0) {
    __classPrivateFieldSet(this, _M3eAppBarElement_hideOffset, Math.min(wrapper.offsetHeight, __classPrivateFieldGet(this, _M3eAppBarElement_scrollTop, "f"), __classPrivateFieldGet(this, _M3eAppBarElement_hideOffset, "f") + Math.max(0, hideDelta)), "f");
    wrapper.style.setProperty("--_hide-offset", `${__classPrivateFieldGet(this, _M3eAppBarElement_hideOffset, "f")}px`);
  }
  wrapper.classList.toggle("hide", this.scrollBehavior === "hide");
  if (!collapses || !scrolled) {
    if (__classPrivateFieldGet(this, _M3eAppBarElement_range, "f") > 0 || base.style.getPropertyValue("--_app-bar-reserved-height")) {
      __classPrivateFieldGet(this, _M3eAppBarElement_instances, "m", _M3eAppBarElement_releaseCompress).call(this);
    }
    __classPrivateFieldGet(this, _M3eAppBarElement_instances, "m", _M3eAppBarElement_setCompact).call(this, wrapper, false);
    return;
  }
  // The expanded height is reserved so the shrinking bar never shifts the scrolling content. It is
  // measured only while the bar is unconstrained (before collapsing begins).
  if (!base.style.getPropertyValue("--_app-bar-reserved-height")) {
    __classPrivateFieldSet(this, _M3eAppBarElement_expanded, wrapper.offsetHeight, "f");
    base.style.setProperty("--_app-bar-reserved-height", `${__classPrivateFieldGet(this, _M3eAppBarElement_expanded, "f")}px`);
    wrapper.style.height = "var(--_target)";
    const target = wrapper.offsetHeight;
    wrapper.style.removeProperty("height");
    __classPrivateFieldSet(this, _M3eAppBarElement_range, Math.max(0, __classPrivateFieldGet(this, _M3eAppBarElement_expanded, "f") - target), "f");
  }
  // The collapse amount follows scroll deltas rather than the scroll position. Scrolling up releases it
  // only once within the collapse range of the top, so it is fully expanded exactly at the top.
  const delta = __classPrivateFieldGet(this, _M3eAppBarElement_scrollTop, "f") - __classPrivateFieldGet(this, _M3eAppBarElement_lastScrollTop, "f");
  if (delta !== 0) {
    __classPrivateFieldSet(this, _M3eAppBarElement_direction, Math.sign(delta), "f");
    if (delta > 0) {
      __classPrivateFieldSet(this, _M3eAppBarElement_collapse, __classPrivateFieldGet(this, _M3eAppBarElement_collapse, "f") + delta, "f");
    } else {
      // Stays collapsed until the scroll position comes within the collapsed amount of the top.
      __classPrivateFieldSet(this, _M3eAppBarElement_collapse, Math.min(__classPrivateFieldGet(this, _M3eAppBarElement_collapse, "f"), __classPrivateFieldGet(this, _M3eAppBarElement_scrollTop, "f")), "f");
    }
    __classPrivateFieldSet(this, _M3eAppBarElement_collapse, Math.min(__classPrivateFieldGet(this, _M3eAppBarElement_range, "f"), Math.max(0, __classPrivateFieldGet(this, _M3eAppBarElement_collapse, "f"))), "f");
  }
  __classPrivateFieldSet(this, _M3eAppBarElement_lastScrollTop, __classPrivateFieldGet(this, _M3eAppBarElement_scrollTop, "f"), "f");
  __classPrivateFieldGet(this, _M3eAppBarElement_instances, "m", _M3eAppBarElement_applyCollapse).call(this);
};
_M3eAppBarElement_applyCollapse = function _M3eAppBarElement_applyCollapse() {
  const wrapper = this._wrapper;
  if (!wrapper) return;
  const progress = __classPrivateFieldGet(this, _M3eAppBarElement_range, "f") > 0 ? __classPrivateFieldGet(this, _M3eAppBarElement_collapse, "f") / __classPrivateFieldGet(this, _M3eAppBarElement_range, "f") : 0;
  wrapper.style.setProperty("--_progress", `${progress}`);
  wrapper.style.height = `${__classPrivateFieldGet(this, _M3eAppBarElement_expanded, "f") - __classPrivateFieldGet(this, _M3eAppBarElement_collapse, "f")}px`;
  wrapper.classList.add("compressed");
  // The title and subtitle fade out while the bar is still expanded, the layout switches while
  // they are invisible, and they fade back in as the bar reaches the small size. They also move in
  // lockstep with the collapse (up while collapsing and down while expanding). Before the switch the
  // label stays attached to the rising bottom edge. After it, the label rises into its resting place.
  const label = wrapper.querySelector(".label");
  if (label) {
    // The label is fully hidden before it travels far enough to overlap the icon buttons.
    const fadeOut = Math.max(0, 1 - progress / 0.4);
    const fadeIn = Math.max(0, (progress - 0.6) / 0.4);
    label.style.opacity = `${progress < 0.5 ? fadeOut : fadeIn}`;
    const offset = progress < 0.5 ? -__classPrivateFieldGet(this, _M3eAppBarElement_collapse, "f") : __classPrivateFieldGet(this, _M3eAppBarElement_range, "f") - __classPrivateFieldGet(this, _M3eAppBarElement_collapse, "f");
    label.style.transform = `translateY(${offset}px)`;
  }
  __classPrivateFieldGet(this, _M3eAppBarElement_instances, "m", _M3eAppBarElement_setCompact).call(this, wrapper, progress >= 0.5);
};
_M3eAppBarElement_setCompact = function _M3eAppBarElement_setCompact(wrapper, compact) {
  if (wrapper.classList.contains("compact") === compact) return;
  wrapper.classList.toggle("compact", compact);
  __classPrivateFieldGet(this, _M3eAppBarElement_instances, "m", _M3eAppBarElement_syncCentered).call(this);
};
_M3eAppBarElement_getFrameScrollTop = function _M3eAppBarElement_getFrameScrollTop(frame) {
  // Both document element (<html>) and body are tested for scroll top, taking the maximum.
  return Math.max(frame.contentDocument?.documentElement?.scrollTop ?? 0, frame.contentDocument?.body?.scrollTop ?? 0);
};
/** The styles of the element. */
M3eAppBarElement.styles = [AppBarStyle, AppBarSizeStyle];
__decorate([query(".base")], M3eAppBarElement.prototype, "_base", void 0);
__decorate([query(".wrapper")], M3eAppBarElement.prototype, "_wrapper", void 0);
__decorate([query(".leading-icon")], M3eAppBarElement.prototype, "_leadingIcon", void 0);
__decorate([query(".trailing-icon")], M3eAppBarElement.prototype, "_trailingIcon", void 0);
__decorate([property({
  type: Boolean,
  reflect: true
})], M3eAppBarElement.prototype, "centered", void 0);
__decorate([property({
  attribute: "scroll-behavior",
  reflect: true,
  useDefault: true
})], M3eAppBarElement.prototype, "scrollBehavior", void 0);
__decorate([property({
  reflect: true,
  useDefault: true
})], M3eAppBarElement.prototype, "size", void 0);
M3eAppBarElement = __decorate([customElement("m3e-app-bar")], M3eAppBarElement);

export { M3eAppBarElement, isAppBarScrollBehavior, isAppBarSize };
//# sourceMappingURL=app-bar.js.map
