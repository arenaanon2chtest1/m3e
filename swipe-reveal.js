/**
 * @license MIT
 * Copyright (c) 2025–2026 matraic
 * See LICENSE file in the project root for full license text.
 */
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from 'tslib';
import { LitElement, html, css } from 'lit';
import { state, query, property } from 'lit/decorators.js';
import { AttachInternals, Role, setCustomState, hasAssignedNodes, DesignToken, addCustomState, deleteCustomState, spaceSeparatedStringConverter, customElement } from '@m3e/web/core';
import { SupportsDirectionality, M3eDirectionality } from '@m3e/web/core/bidi';
import '@m3e/web/gestures/swipe';
import '@m3e/web/gestures/tap';
import '@m3e/web/gestures/repeat';
import '@m3e/web/gestures/long-press';

/** Specifies default values for swipe-reveal and swipe-reveal-group properties. */
const SwipeRevealDefaults = {
  stagger: 0,
  staggerCount: 3,
  threshold: 0.5,
  overshoot: 8,
  triggers: ["swipe"],
  dismissible: "none",
  dismissThreshold: 0.5,
  elastic: "both"
};

/* eslint-disable @typescript-eslint/no-unsafe-declaration-merging */
var _M3eSwipeRevealElement_instances, _M3eSwipeRevealElement_group, _M3eSwipeRevealElement_stagger, _M3eSwipeRevealElement_staggerCount, _M3eSwipeRevealElement_threshold, _M3eSwipeRevealElement_overshoot, _M3eSwipeRevealElement_triggers, _M3eSwipeRevealElement_dismissible, _M3eSwipeRevealElement_elastic, _M3eSwipeRevealElement_dismissThreshold, _M3eSwipeRevealElement_armed, _M3eSwipeRevealElement_released, _M3eSwipeRevealElement_snapOffset, _M3eSwipeRevealElement_snapStart, _M3eSwipeRevealElement_snapFrame, _M3eSwipeRevealElement_shown, _M3eSwipeRevealElement_reached, _M3eSwipeRevealElement_outermost, _M3eSwipeRevealElement_squished, _M3eSwipeRevealElement_actionWidths, _M3eSwipeRevealElement_underlaps, _M3eSwipeRevealElement_fallbackWidths, _M3eSwipeRevealElement_measuredActions, _M3eSwipeRevealElement_contentWidth, _M3eSwipeRevealElement_staggered, _M3eSwipeRevealElement_finishStagger, _M3eSwipeRevealElement_dragging, _M3eSwipeRevealElement_x, _M3eSwipeRevealElement_base, _M3eSwipeRevealElement_side, _M3eSwipeRevealElement_restSide, _M3eSwipeRevealElement_suppressedClick, _M3eSwipeRevealElement_touch, _M3eSwipeRevealElement_cancelSettle, _M3eSwipeRevealElement_isGone_get, _M3eSwipeRevealElement_isElastic, _M3eSwipeRevealElement_canDismiss, _M3eSwipeRevealElement_dismissAt, _M3eSwipeRevealElement_setArmed, _M3eSwipeRevealElement_whenTransitioned, _M3eSwipeRevealElement_dismiss, _M3eSwipeRevealElement_directionalitySubscription, _M3eSwipeRevealElement_dir_get, _M3eSwipeRevealElement_leadingDirection_get, _M3eSwipeRevealElement_handleDirectionChange, _M3eSwipeRevealElement_renderTriggers, _M3eSwipeRevealElement_handleTouchStart, _M3eSwipeRevealElement_handleTouchMove, _M3eSwipeRevealElement_handleTouchEnd, _M3eSwipeRevealElement_handleTriggerGesture, _M3eSwipeRevealElement_suppressReleaseClick, _M3eSwipeRevealElement_clearSuppressedClick, _M3eSwipeRevealElement_handleSlotChange, _M3eSwipeRevealElement_handleSwipeGesture, _M3eSwipeRevealElement_resolveReveals, _M3eSwipeRevealElement_drag, _M3eSwipeRevealElement_closeSiblings, _M3eSwipeRevealElement_settle, _M3eSwipeRevealElement_createEvent, _M3eSwipeRevealElement_setDragging, _M3eSwipeRevealElement_setState, _M3eSwipeRevealElement_handleContentClick, _M3eSwipeRevealElement_resetContent, _M3eSwipeRevealElement_beginStagger, _M3eSwipeRevealElement_restoreStagger, _M3eSwipeRevealElement_actionWidth, _M3eSwipeRevealElement_underlap, _M3eSwipeRevealElement_getContentWidth, _M3eSwipeRevealElement_rubberBand, _M3eSwipeRevealElement_measureActions, _M3eSwipeRevealElement_lockActions, _M3eSwipeRevealElement_unlockActions, _M3eSwipeRevealElement_setProgress, _M3eSwipeRevealElement_progressOf, _M3eSwipeRevealElement_shapeGrowth, _M3eSwipeRevealElement_renderDrag, _M3eSwipeRevealElement_animateSnap, _M3eSwipeRevealElement_stopSnap, _M3eSwipeRevealElement_inSnapZone, _M3eSwipeRevealElement_applyStagger, _M3eSwipeRevealElement_staggerOffset, _M3eSwipeRevealElement_endStagger;
/** @private */
const SHAPE_GROWTH = "--m3e-swipe-reveal-shape-growth";
/** @private */
const SNAP_DURATION = 150; // ms, matching the fast effects motion token
/** @private */
const SNAP_ZONE = 0.1; // fraction of the content's width before the dismiss threshold at which the content snaps onto it
/**
 * Reveals contextual actions behind content when swiped, and optionally dismisses the item.
 *
 * @description
 * The `m3e-swipe-reveal` component uncovers leading and trailing actions as its content is dragged.
 * Content and staggered siblings stay in the scrolling container, which may clip them. Actions fade, clip and squish as they are
 * uncovered. Reveal can also be triggered by tap, double tap or long press. When `dismissible`, continuing a swipe
 * past the actions dismisses the item, using the outermost action as the dismiss action. Direction is
 * mirrored for right-to-left layouts. Wrap items in an `m3e-swipe-reveal-group` to coordinate them.
 *
 * @example
 * Showcase: Basic usage. Import `@m3e/web/swipe-reveal`. Also import `@m3e/web/list`, `@m3e/web/icon-button`, `@m3e/web/icon`. Load a matching Material Symbols font or register the icons. Give icon-only buttons accessible names.
 *
 * ```html
 * <m3e-list variant="segmented">
 *   <m3e-swipe-reveal>
 *     <m3e-icon-button slot="leading" aria-label="Pin" variant="tonal">
 *       <m3e-icon name="keep" filled></m3e-icon>
 *     </m3e-icon-button>
 *     <m3e-list-item>Item 1</m3e-list-item>
 *     <m3e-icon-button slot="trailing" aria-label="Bookmark" variant="tonal">
 *       <m3e-icon name="bookmark" filled></m3e-icon>
 *     </m3e-icon-button>
 *   </m3e-swipe-reveal>
 *   <!-- Additional items omitted for brevity -->
 * </m3e-list>
 * ```
 *
 * ```css
 * m3e-list {
 *   overflow: visible;
 * }
 * ```
 *
 * @example
 * Showcase: Triggers. Import `@m3e/web/swipe-reveal`. Also import `@m3e/web/list`, `@m3e/web/icon-button`, `@m3e/web/icon`. Load a matching Material Symbols font or register the icons. Give icon-only buttons accessible names.
 *
 * ```html
 * <m3e-swipe-reveal-group triggers="swipe long-press">
 *   <m3e-list variant="segmented">
 *     <m3e-swipe-reveal>
 *       <m3e-list-item>Item 1</m3e-list-item>
 *       <m3e-icon-button slot="trailing" aria-label="Share" variant="tonal">
 *         <m3e-icon name="share" filled></m3e-icon>
 *       </m3e-icon-button>
 *     </m3e-swipe-reveal>
 *     <!-- Additional items omitted for brevity -->
 *   </m3e-list>
 * </m3e-swipe-reveal-group>
 * ```
 *
 * @example
 * Showcase: Stagger. Import `@m3e/web/swipe-reveal`. Also import `@m3e/web/list`, `@m3e/web/icon-button`, `@m3e/web/icon`. Load a matching Material Symbols font or register the icons. Give icon-only buttons accessible names.
 *
 * ```html
 * <m3e-swipe-reveal-group stagger="0.05">
 *   <m3e-list variant="segmented">
 *     <m3e-swipe-reveal>
 *       <m3e-list-item>Item 1</m3e-list-item>
 *       <m3e-icon-button slot="trailing" aria-label="Archive" variant="tonal">
 *         <m3e-icon name="archive" filled></m3e-icon>
 *       </m3e-icon-button>
 *     </m3e-swipe-reveal>
 *     <!-- Additional items omitted for brevity -->
 *   </m3e-list>
 * </m3e-swipe-reveal-group>
 * ```
 *
 * @example
 * Showcase: Dismissible. Import `@m3e/web/swipe-reveal`. Also import `@m3e/web/list`, `@m3e/web/icon-button`, `@m3e/web/icon`. Load a matching Material Symbols font or register the icons. Give icon-only buttons accessible names.
 *
 * ```html
 * <m3e-swipe-reveal-group dismissible="trailing">
 *   <m3e-list variant="segmented">
 *     <m3e-swipe-reveal>
 *       <m3e-list-item>Item 1</m3e-list-item>
 *       <m3e-icon-button slot="trailing" aria-label="Delete" variant="tonal">
 *         <m3e-icon name="delete" filled></m3e-icon>
 *       </m3e-icon-button>
 *     </m3e-swipe-reveal>
 *     <!-- Additional items omitted for brevity -->
 *   </m3e-list>
 * </m3e-swipe-reveal-group>
 * ```
 *
 * @example
 * Showcase: Card Header. Import `@m3e/web/swipe-reveal`. Also import `@m3e/web/icon-button`, `@m3e/web/icon`, `@m3e/web/card`. Load a matching Material Symbols font or register the icons. Give icon-only buttons accessible names. Apply the required styling for the illustrated classes in your application.
 *
 * ```html
 * <m3e-swipe-reveal class="card-reveal" elastic="none">
 *   <m3e-icon-button slot="leading" aria-label="Favorite" toggle variant="filled">
 *     <m3e-icon name="favorite"></m3e-icon>
 *   </m3e-icon-button>
 *   <m3e-card>…</m3e-card>
 * </m3e-swipe-reveal>
 * ```
 *
 * ```css
 * .card-reveal {
 *   --m3e-swipe-reveal-actions-padding: 0px;
 *   --m3e-swipe-reveal-actions-underlap: var(--md-sys-shape-corner-value-medium);
 *   --m3e-icon-button-container-height: 100%;
 *   --m3e-icon-button-start-start-shape: var(--md-sys-shape-corner-value-medium);
 *   --m3e-icon-button-end-start-shape: var(--md-sys-shape-corner-value-medium);
 *   --m3e-icon-button-start-end-shape: 0px;
 *   --m3e-icon-button-end-end-shape: 0px;
 * }
 * .card-reveal m3e-icon-button[slot="leading"] {
 *   width: 64px;
 * }
 * .card-reveal m3e-icon-button[slot="leading"] m3e-icon {
 *   position: absolute;
 *   top: 16px;
 *   margin-inline-start: -8px;
 * }
 * ```
 *
 * @tag m3e-swipe-reveal
 *
 * @slot - Renders the content which is dragged to reveal actions.
 * @slot leading - Renders the actions revealed at the leading edge.
 * @slot trailing - Renders the actions revealed at the trailing edge.
 *
 * @attr dismissible - Which side, if any, can be swiped past its actions to dismiss the item.
 * @attr elastic - Which sides' actions squish and grow as the content is dragged.
 * @attr dismiss-threshold - The baseline fraction of content width for dismissal; the snap zone starts after full reveal.
 * @attr overshoot - The distance, in pixels, content can be dragged past the actions.
 * @attr stagger - How far (0 to 1) the nearest sibling follows a dragged item.
 * @attr stagger-count - The number of siblings on each side that are staggered.
 * @attr threshold - The fraction of the actions' width at which a release reveals or covers.
 * @attr triggers - Space separated interactions that reveal actions.
 *
 * @fires revealing - Emitted when the item begins to reveal actions.
 * @fires revealed - Emitted when actions are revealed.
 * @fires covered - Emitted when actions are covered.
 * @fires dismiss - Emitted, cancelable, before the item is dismissed.
 * @fires dismissed - Emitted after the item has been dismissed.
 *
 * @cssprop --m3e-swipe-reveal-actions-padding - The inline padding around the leading and trailing actions.
 * @cssprop --m3e-swipe-reveal-actions-gap - The gap between adjacent actions.
 * @cssprop --m3e-swipe-reveal-actions-container-color - The background color of the leading and trailing actions.
 * @cssprop --m3e-swipe-reveal-actions-container-shape - The corner shape of the leading and trailing actions.
 * @cssprop --m3e-swipe-reveal-actions-underlap - How far the actions' container extends beneath the content.
 * @cssprop --m3e-swipe-reveal-leading-actions-underlap - How far the leading actions' container extends beneath the content.
 * @cssprop --m3e-swipe-reveal-trailing-actions-underlap - How far the trailing actions' container extends beneath the content.
 * @cssprop --m3e-swipe-reveal-leading-actions-padding - The inline padding around the leading actions.
 * @cssprop --m3e-swipe-reveal-leading-actions-gap - The gap between adjacent leading actions.
 * @cssprop --m3e-swipe-reveal-leading-actions-container-color - The background color of the leading actions.
 * @cssprop --m3e-swipe-reveal-leading-actions-container-shape - The corner shape of the leading actions.
 * @cssprop --m3e-swipe-reveal-trailing-actions-padding - The inline padding around the trailing actions.
 * @cssprop --m3e-swipe-reveal-trailing-actions-gap - The gap between adjacent trailing actions.
 * @cssprop --m3e-swipe-reveal-trailing-actions-container-color - The background color of the trailing actions.
 * @cssprop --m3e-swipe-reveal-trailing-actions-container-shape - The corner shape of the trailing actions.
 * @cssprop --m3e-swipe-reveal-shape-growth - Set while dragging on the active item and any staggered siblings, indicates the amount by which content may increase its border radius.
 */
let M3eSwipeRevealElement = class M3eSwipeRevealElement extends SupportsDirectionality(AttachInternals(Role(LitElement, "none"))) {
  constructor() {
    super(...arguments);
    _M3eSwipeRevealElement_instances.add(this);
    /** @private */
    _M3eSwipeRevealElement_group.set(this, null);
    /** @private */
    _M3eSwipeRevealElement_stagger.set(this, void 0);
    /** @private */
    _M3eSwipeRevealElement_staggerCount.set(this, void 0);
    /** @private */
    _M3eSwipeRevealElement_threshold.set(this, void 0);
    /** @private */
    _M3eSwipeRevealElement_overshoot.set(this, void 0);
    /** @private */
    _M3eSwipeRevealElement_triggers.set(this, void 0);
    /** @private */
    _M3eSwipeRevealElement_dismissible.set(this, void 0);
    /** @private */
    _M3eSwipeRevealElement_elastic.set(this, void 0);
    /** @private */
    _M3eSwipeRevealElement_dismissThreshold.set(this, void 0);
    /** @private */
    _M3eSwipeRevealElement_armed.set(this, false);
    /** @private */
    _M3eSwipeRevealElement_released.set(this, false);
    /** @private */
    _M3eSwipeRevealElement_snapOffset.set(this, 0);
    /** @private */
    _M3eSwipeRevealElement_snapStart.set(this, 0);
    /** @private */
    _M3eSwipeRevealElement_snapFrame.set(this, 0);
    /** @private */
    _M3eSwipeRevealElement_shown.set(this, 0);
    /** @private */
    _M3eSwipeRevealElement_reached.set(this, false);
    /** @private */
    _M3eSwipeRevealElement_outermost.set(this, new Map());
    /** @private */
    _M3eSwipeRevealElement_squished.set(this, new Set());
    /** @private */
    _M3eSwipeRevealElement_actionWidths.set(this, new Map());
    /** @private */
    _M3eSwipeRevealElement_underlaps.set(this, new Map());
    /** @private */
    _M3eSwipeRevealElement_fallbackWidths.set(this, new Map());
    /** @private */
    _M3eSwipeRevealElement_measuredActions.set(this, null);
    /** @private */
    _M3eSwipeRevealElement_contentWidth.set(this, void 0);
    /** @private */
    _M3eSwipeRevealElement_staggered.set(this, []);
    /** @private */
    _M3eSwipeRevealElement_finishStagger.set(this, void 0);
    /** @private */
    _M3eSwipeRevealElement_dragging.set(this, false);
    /** @private */
    _M3eSwipeRevealElement_x.set(this, 0);
    /** @private */
    _M3eSwipeRevealElement_base.set(this, 0);
    /** @private */
    _M3eSwipeRevealElement_side.set(this, null);
    /** @private */
    _M3eSwipeRevealElement_restSide.set(this, null);
    /** @private */
    _M3eSwipeRevealElement_suppressedClick.set(this, void 0);
    /** @private */
    _M3eSwipeRevealElement_touch.set(this, void 0);
    /** @private */
    _M3eSwipeRevealElement_cancelSettle.set(this, void 0);
    /** @private */
    this._state = "covered";
    /** @private */
    this._hasLeading = false;
    /** @private */
    this._hasTrailing = false;
    /** @private */
    _M3eSwipeRevealElement_directionalitySubscription.set(this, void 0);
    /** @private */
    _M3eSwipeRevealElement_handleTouchMove.set(this, e => {
      const touch = __classPrivateFieldGet(this, _M3eSwipeRevealElement_touch, "f");
      if (!touch || e.touches.length !== 1 || ![...e.changedTouches].some(x => x.identifier === touch.id)) {
        return;
      }
      // Keep ownership through the touch sequence, even if the pointer gesture is subsequently cancelled.
      touch.dragging ||= __classPrivateFieldGet(this, _M3eSwipeRevealElement_dragging, "f");
      if (touch.dragging && e.cancelable) {
        e.preventDefault();
      }
    });
    /** @private */
    _M3eSwipeRevealElement_handleContentClick.set(this, e => {
      const suppression = __classPrivateFieldGet(this, _M3eSwipeRevealElement_suppressedClick, "f");
      if (suppression && e instanceof MouseEvent && e.detail > 0 && (!(e instanceof PointerEvent) || e.pointerId === suppression.pointerId)) {
        __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_clearSuppressedClick).call(this);
        e.preventDefault();
        e.stopImmediatePropagation();
        return;
      }
      if (this._state !== "revealed") return;
      e.preventDefault();
      e.stopImmediatePropagation();
      this.close();
    });
  }
  /**
   * How far (0 to 1) a nearest sibling follows a dragged item. Each further sibling
   * follows by half as much as the previous. A value of `0` disables staggering.
   * @default 0
   */
  get stagger() {
    return __classPrivateFieldGet(this, _M3eSwipeRevealElement_stagger, "f") ?? __classPrivateFieldGet(this, _M3eSwipeRevealElement_group, "f")?.stagger ?? SwipeRevealDefaults.stagger;
  }
  set stagger(value) {
    __classPrivateFieldSet(this, _M3eSwipeRevealElement_stagger, value, "f");
  }
  /**
   * The maximum number of siblings, on each side, to stagger.
   * @default 3
   */
  get staggerCount() {
    return __classPrivateFieldGet(this, _M3eSwipeRevealElement_staggerCount, "f") ?? __classPrivateFieldGet(this, _M3eSwipeRevealElement_group, "f")?.staggerCount ?? SwipeRevealDefaults.staggerCount;
  }
  set staggerCount(value) {
    __classPrivateFieldSet(this, _M3eSwipeRevealElement_staggerCount, value, "f");
  }
  /**
   * The fraction (0 to 1) of an actions' width content must be dragged to reveal.
   * Closing a revealed item uses the same fraction in reverse.
   * @default 0.5
   */
  get threshold() {
    return __classPrivateFieldGet(this, _M3eSwipeRevealElement_threshold, "f") ?? __classPrivateFieldGet(this, _M3eSwipeRevealElement_group, "f")?.threshold ?? SwipeRevealDefaults.threshold;
  }
  set threshold(value) {
    __classPrivateFieldSet(this, _M3eSwipeRevealElement_threshold, value, "f");
  }
  /**
   * The maximum distance (px) content can be dragged past fully revealing its actions.
   * Buttons grow with the overshoot. Set to `0` to disable.
   * @default 8
   */
  get overshoot() {
    return __classPrivateFieldGet(this, _M3eSwipeRevealElement_overshoot, "f") ?? __classPrivateFieldGet(this, _M3eSwipeRevealElement_group, "f")?.overshoot ?? SwipeRevealDefaults.overshoot;
  }
  set overshoot(value) {
    __classPrivateFieldSet(this, _M3eSwipeRevealElement_overshoot, value, "f");
  }
  /**
   * The gestures used to reveal actions.
   * @default ["swipe"]
   */
  get triggers() {
    return __classPrivateFieldGet(this, _M3eSwipeRevealElement_triggers, "f") ?? __classPrivateFieldGet(this, _M3eSwipeRevealElement_group, "f")?.triggers ?? [...SwipeRevealDefaults.triggers];
  }
  set triggers(value) {
    __classPrivateFieldSet(this, _M3eSwipeRevealElement_triggers, value, "f");
  }
  /**
   * The sides whose swipe can continue past the actions to dismiss the item. The outermost
   * action on a side grows to fill the space as the item is dragged toward dismissal.
   * @default "none"
   */
  get dismissible() {
    return __classPrivateFieldGet(this, _M3eSwipeRevealElement_dismissible, "f") ?? __classPrivateFieldGet(this, _M3eSwipeRevealElement_group, "f")?.dismissible ?? SwipeRevealDefaults.dismissible;
  }
  set dismissible(value) {
    __classPrivateFieldSet(this, _M3eSwipeRevealElement_dismissible, value, "f");
  }
  /**
   * The sides whose actions squish and grow as the content is dragged. When a side is not
   * elastic, its actions keep their size and its container does not grow with overshoot.
   * @default "both"
   */
  get elastic() {
    return __classPrivateFieldGet(this, _M3eSwipeRevealElement_elastic, "f") ?? __classPrivateFieldGet(this, _M3eSwipeRevealElement_group, "f")?.elastic ?? SwipeRevealDefaults.elastic;
  }
  set elastic(value) {
    __classPrivateFieldSet(this, _M3eSwipeRevealElement_elastic, value, "f");
  }
  /**
   * The baseline fraction (0 to 1) of the item's width for dismissal. The snap zone starts after full reveal.
   * @default 0.5
   */
  get dismissThreshold() {
    return __classPrivateFieldGet(this, _M3eSwipeRevealElement_dismissThreshold, "f") ?? __classPrivateFieldGet(this, _M3eSwipeRevealElement_group, "f")?.dismissThreshold ?? SwipeRevealDefaults.dismissThreshold;
  }
  set dismissThreshold(value) {
    __classPrivateFieldSet(this, _M3eSwipeRevealElement_dismissThreshold, value, "f");
  }
  /** The side currently revealed or `null` when covered. */
  get side() {
    return __classPrivateFieldGet(this, _M3eSwipeRevealElement_side, "f");
  }
  /** The current reveal state. */
  get state() {
    return this._state;
  }
  /**
   * Reveals actions without dragging.
   * @param {SwipeRevealSide | undefined} side The side to reveal; defaults to `"leading"`, or `"trailing"` when there are no leading actions.
   */
  reveal(side) {
    const content = this._content;
    if (!content || __classPrivateFieldGet(this, _M3eSwipeRevealElement_dragging, "f") || __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "a", _M3eSwipeRevealElement_isGone_get)) return;
    side ??= this._hasLeading ? "leading" : "trailing";
    if (!(side === "leading" ? this._hasLeading : this._hasTrailing) || __classPrivateFieldGet(this, _M3eSwipeRevealElement_side, "f") === side) return;
    __classPrivateFieldGet(this, _M3eSwipeRevealElement_cancelSettle, "f")?.call(this);
    __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_closeSiblings).call(this);
    __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_lockActions).call(this);
    __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_setProgress).call(this, 0, false);
    void content.offsetWidth; // force reflow
    __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_settle).call(this, side);
  }
  /** Covers the content, hiding any revealed actions. */
  close() {
    if (__classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "a", _M3eSwipeRevealElement_isGone_get)) return;
    // Also covers an item that is still settling toward a revealed position.
    if (__classPrivateFieldGet(this, _M3eSwipeRevealElement_side, "f") || __classPrivateFieldGet(this, _M3eSwipeRevealElement_x, "f") !== 0) {
      __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_settle).call(this, null);
      __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_endStagger).call(this);
    }
  }
  /**
   * Dismisses the item by sliding it out and collapsing the space it occupied. A cancelable `dismiss`
   * event is fired first, and `dismissed` once the item is gone. Removing the element is up to the consumer.
   * @param {SwipeRevealSide | undefined} side The side to dismiss toward; defaults to the revealed side.
   */
  dismiss(side) {
    if (__classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "a", _M3eSwipeRevealElement_isGone_get) || __classPrivateFieldGet(this, _M3eSwipeRevealElement_dragging, "f")) return;
    side ??= __classPrivateFieldGet(this, _M3eSwipeRevealElement_side, "f") ?? (__classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_canDismiss).call(this, "leading") ? "leading" : "trailing");
    if (__classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_canDismiss).call(this, side)) {
      __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_dismiss).call(this, side);
    }
  }
  /** Brings back an item that was dismissed, for example when the user chooses to undo. */
  restore() {
    if (!__classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "a", _M3eSwipeRevealElement_isGone_get)) return;
    __classPrivateFieldGet(this, _M3eSwipeRevealElement_cancelSettle, "f")?.call(this);
    __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_unlockActions).call(this);
    const content = this._content;
    const placeholder = this._placeholder;
    if (content && placeholder) {
      __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_resetContent).call(this, content, placeholder);
    }
    __classPrivateFieldSet(this, _M3eSwipeRevealElement_x, 0, "f");
    __classPrivateFieldSet(this, _M3eSwipeRevealElement_side, __classPrivateFieldSet(this, _M3eSwipeRevealElement_restSide, null, "f"), "f");
    __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_setState).call(this, "covered");
  }
  /** @inheritdoc */
  connectedCallback() {
    super.connectedCallback();
    setCustomState(this, "--covered", this._state === "covered");
    __classPrivateFieldSet(this, _M3eSwipeRevealElement_group, this.closest("m3e-swipe-reveal-group"), "f");
    __classPrivateFieldGet(this, _M3eSwipeRevealElement_directionalitySubscription, "f")?.call(this);
    __classPrivateFieldSet(this, _M3eSwipeRevealElement_directionalitySubscription, M3eDirectionality.observe(() => __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_handleDirectionChange).call(this)), "f");
  }
  /** @inheritdoc */
  disconnectedCallback() {
    super.disconnectedCallback();
    __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_clearSuppressedClick).call(this);
    __classPrivateFieldSet(this, _M3eSwipeRevealElement_touch, undefined, "f");
    __classPrivateFieldGet(this, _M3eSwipeRevealElement_directionalitySubscription, "f")?.call(this);
    __classPrivateFieldSet(this, _M3eSwipeRevealElement_directionalitySubscription, undefined, "f");
    __classPrivateFieldGet(this, _M3eSwipeRevealElement_cancelSettle, "f")?.call(this);
    __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_setArmed).call(this, false);
    __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_unlockActions).call(this);
    __classPrivateFieldGet(this, _M3eSwipeRevealElement_finishStagger, "f")?.call(this);
    __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_endStagger).call(this);
    __classPrivateFieldGet(this, _M3eSwipeRevealElement_finishStagger, "f")?.call(this);
    const content = this._content;
    const placeholder = this._placeholder;
    if (content && placeholder) {
      __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_resetContent).call(this, content, placeholder);
    }
    __classPrivateFieldSet(this, _M3eSwipeRevealElement_side, __classPrivateFieldSet(this, _M3eSwipeRevealElement_restSide, null, "f"), "f");
    __classPrivateFieldSet(this, _M3eSwipeRevealElement_x, 0, "f");
    __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_setState).call(this, "covered");
    __classPrivateFieldSet(this, _M3eSwipeRevealElement_group, null, "f");
  }
  /** @inheritdoc */
  render() {
    return html`<div class="leading" role="none"><slot name="leading" @slotchange="${__classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_handleSlotChange)}"></slot></div><div class="content ${this.triggers.includes("long-press") ? "long-press-enabled" : ""}" role="none" id="content" @click="${{
      handleEvent: __classPrivateFieldGet(this, _M3eSwipeRevealElement_handleContentClick, "f"),
      capture: true
    }}" @touchstart="${__classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_handleTouchStart)}" @touchmove="${{
      handleEvent: __classPrivateFieldGet(this, _M3eSwipeRevealElement_handleTouchMove, "f"),
      passive: false
    }}" @touchend="${__classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_handleTouchEnd)}" @touchcancel="${__classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_handleTouchEnd)}"><slot></slot></div><div class="placeholder" aria-hidden="true"></div><div class="trailing" role="none"><slot name="trailing" @slotchange="${__classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_handleSlotChange)}"></slot></div>${__classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_renderTriggers).call(this)}`;
  }
};
_M3eSwipeRevealElement_group = new WeakMap();
_M3eSwipeRevealElement_stagger = new WeakMap();
_M3eSwipeRevealElement_staggerCount = new WeakMap();
_M3eSwipeRevealElement_threshold = new WeakMap();
_M3eSwipeRevealElement_overshoot = new WeakMap();
_M3eSwipeRevealElement_triggers = new WeakMap();
_M3eSwipeRevealElement_dismissible = new WeakMap();
_M3eSwipeRevealElement_elastic = new WeakMap();
_M3eSwipeRevealElement_dismissThreshold = new WeakMap();
_M3eSwipeRevealElement_armed = new WeakMap();
_M3eSwipeRevealElement_released = new WeakMap();
_M3eSwipeRevealElement_snapOffset = new WeakMap();
_M3eSwipeRevealElement_snapStart = new WeakMap();
_M3eSwipeRevealElement_snapFrame = new WeakMap();
_M3eSwipeRevealElement_shown = new WeakMap();
_M3eSwipeRevealElement_reached = new WeakMap();
_M3eSwipeRevealElement_outermost = new WeakMap();
_M3eSwipeRevealElement_squished = new WeakMap();
_M3eSwipeRevealElement_actionWidths = new WeakMap();
_M3eSwipeRevealElement_underlaps = new WeakMap();
_M3eSwipeRevealElement_fallbackWidths = new WeakMap();
_M3eSwipeRevealElement_measuredActions = new WeakMap();
_M3eSwipeRevealElement_contentWidth = new WeakMap();
_M3eSwipeRevealElement_staggered = new WeakMap();
_M3eSwipeRevealElement_finishStagger = new WeakMap();
_M3eSwipeRevealElement_dragging = new WeakMap();
_M3eSwipeRevealElement_x = new WeakMap();
_M3eSwipeRevealElement_base = new WeakMap();
_M3eSwipeRevealElement_side = new WeakMap();
_M3eSwipeRevealElement_restSide = new WeakMap();
_M3eSwipeRevealElement_suppressedClick = new WeakMap();
_M3eSwipeRevealElement_touch = new WeakMap();
_M3eSwipeRevealElement_cancelSettle = new WeakMap();
_M3eSwipeRevealElement_directionalitySubscription = new WeakMap();
_M3eSwipeRevealElement_handleTouchMove = new WeakMap();
_M3eSwipeRevealElement_handleContentClick = new WeakMap();
_M3eSwipeRevealElement_instances = new WeakSet();
_M3eSwipeRevealElement_isGone_get = function _M3eSwipeRevealElement_isGone_get() {
  return this._state === "dismissing" || this._state === "dismissed";
};
_M3eSwipeRevealElement_isElastic = function _M3eSwipeRevealElement_isElastic(side) {
  return this.elastic === "both" || this.elastic === side;
};
_M3eSwipeRevealElement_canDismiss = function _M3eSwipeRevealElement_canDismiss(side) {
  const dismissible = this.dismissible;
  return (dismissible === "both" || dismissible === side) && (side === "leading" ? this._hasLeading : this._hasTrailing);
};
_M3eSwipeRevealElement_dismissAt = function _M3eSwipeRevealElement_dismissAt(side) {
  // Dismissing must take a clearly deliberate drag, beyond the point where the actions are fully revealed.
  return Math.max(this.dismissThreshold * __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_getContentWidth).call(this), __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_actionWidth).call(this, side) * 1.2);
};
_M3eSwipeRevealElement_setArmed = function _M3eSwipeRevealElement_setArmed(armed) {
  if (__classPrivateFieldGet(this, _M3eSwipeRevealElement_armed, "f") === armed) return;
  __classPrivateFieldSet(this, _M3eSwipeRevealElement_armed, armed, "f");
  setCustomState(this, "--armed", armed);
};
_M3eSwipeRevealElement_whenTransitioned = function _M3eSwipeRevealElement_whenTransitioned(target, property, timeout, done) {
  let timer = 0;
  const cleanup = () => {
    target.removeEventListener("transitionend", onEnd);
    clearTimeout(timer);
    if (__classPrivateFieldGet(this, _M3eSwipeRevealElement_cancelSettle, "f") === cleanup) __classPrivateFieldSet(this, _M3eSwipeRevealElement_cancelSettle, undefined, "f");
  };
  const onEnd = e => {
    if (e.target === target && e.propertyName === property) {
      cleanup();
      done();
    }
  };
  __classPrivateFieldGet(this, _M3eSwipeRevealElement_cancelSettle, "f")?.call(this);
  target.addEventListener("transitionend", onEnd);
  timer = window.setTimeout(() => {
    cleanup();
    done();
  }, timeout);
  __classPrivateFieldSet(this, _M3eSwipeRevealElement_cancelSettle, cleanup, "f");
};
_M3eSwipeRevealElement_dismiss = function _M3eSwipeRevealElement_dismiss(side) {
  const content = this._content;
  const placeholder = this._placeholder;
  if (!content || !placeholder) return;
  const event = __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_createEvent).call(this, "dismiss", side, {
    bubbles: true,
    composed: true,
    cancelable: true
  });
  const accepted = this.dispatchEvent(event);
  if (!this.isConnected) return;
  if (!accepted) {
    // The consumer declined, so spring back to where the item was resting.
    __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_setArmed).call(this, false);
    if (__classPrivateFieldGet(this, _M3eSwipeRevealElement_x, "f") !== 0 || __classPrivateFieldGet(this, _M3eSwipeRevealElement_side, "f")) __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_settle).call(this, __classPrivateFieldGet(this, _M3eSwipeRevealElement_side, "f"));
    return;
  }
  __classPrivateFieldGet(this, _M3eSwipeRevealElement_cancelSettle, "f")?.call(this);
  __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_setArmed).call(this, false);
  __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_closeSiblings).call(this);
  __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_lockActions).call(this);
  __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_setState).call(this, "dismissing");
  // Slide fully out of the viewport, or until a scrolling ancestor clips the content.
  const width = content.offsetWidth;
  const bounds = this.getBoundingClientRect();
  const sign = __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "a", _M3eSwipeRevealElement_dir_get) * (side === "leading" ? 1 : -1);
  const to = sign > 0 ? window.innerWidth - bounds.left : -(bounds.left + width);
  __classPrivateFieldSet(this, _M3eSwipeRevealElement_x, to, "f");
  __classPrivateFieldSet(this, _M3eSwipeRevealElement_side, side, "f");
  __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_setProgress).call(this, sign * width, true);
  content.style.transition = "";
  content.style.transform = `translateX(${to}px)`;
  __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_whenTransitioned).call(this, content, "transform", 600, () => {
    // Collapse the space so siblings close the gap.
    placeholder.style.height = `${content.offsetHeight}px`;
    content.style.display = "none";
    for (const side of ["leading", "trailing"]) {
      this.shadowRoot?.querySelector(`.${side}`)?.style.setProperty("display", "none");
    }
    placeholder.style.transition = "height 250ms cubic-bezier(0.2, 0, 0, 1)";
    void placeholder.offsetHeight; // force reflow
    placeholder.style.height = "0px";
    __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_whenTransitioned).call(this, placeholder, "height", 400, () => {
      __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_setState).call(this, "dismissed");
      this.dispatchEvent(__classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_createEvent).call(this, "dismissed", side, {
        bubbles: true,
        composed: true
      }));
    });
  });
};
_M3eSwipeRevealElement_dir_get = function _M3eSwipeRevealElement_dir_get() {
  return M3eDirectionality.current === "rtl" ? -1 : 1;
};
_M3eSwipeRevealElement_leadingDirection_get = function _M3eSwipeRevealElement_leadingDirection_get() {
  return __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "a", _M3eSwipeRevealElement_dir_get) === 1 ? "right" : "left";
};
_M3eSwipeRevealElement_handleDirectionChange = function _M3eSwipeRevealElement_handleDirectionChange() {
  // Close without animation, as the physical offset no longer matches the new direction.
  this.close();
  this.requestUpdate();
};
_M3eSwipeRevealElement_renderTriggers = function _M3eSwipeRevealElement_renderTriggers() {
  const disabled = !this._hasLeading && !this._hasTrailing;
  const swipeDirections = [];
  // While revealed, the opposite swipe direction is needed to close.
  const revealed = this._state !== "covered";
  const leading = __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "a", _M3eSwipeRevealElement_leadingDirection_get);
  const trailing = leading === "right" ? "left" : "right";
  if (this._hasLeading || revealed && this._hasTrailing) {
    swipeDirections.push(leading);
  }
  if (this._hasTrailing || revealed && this._hasLeading) {
    swipeDirections.push(trailing);
  }
  return html`<m3e-swipe-gesture for="content" .directions="${swipeDirections}" ?disabled="${!this.triggers.includes("swipe") || swipeDirections.length == 0}" @gesture="${__classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_handleSwipeGesture)}"></m3e-swipe-gesture><m3e-tap-gesture for="content" ?disabled="${!this.triggers.includes("tap") || disabled}" @gesture="${__classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_handleTriggerGesture)}"></m3e-tap-gesture><m3e-repeat-gesture for="content" ?disabled="${!this.triggers.includes("double-tap") || disabled}" @gesture="${__classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_handleTriggerGesture)}"><m3e-tap-gesture></m3e-tap-gesture></m3e-repeat-gesture><m3e-long-press-gesture for="content" ?disabled="${!this.triggers.includes("long-press") || disabled}" @gesture="${__classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_handleTriggerGesture)}"></m3e-long-press-gesture>`;
};
_M3eSwipeRevealElement_handleTouchStart = function _M3eSwipeRevealElement_handleTouchStart(e) {
  if (!__classPrivateFieldGet(this, _M3eSwipeRevealElement_touch, "f") && e.touches.length === 1) {
    __classPrivateFieldSet(this, _M3eSwipeRevealElement_touch, {
      id: e.changedTouches[0].identifier,
      dragging: false
    }, "f");
  }
};
_M3eSwipeRevealElement_handleTouchEnd = function _M3eSwipeRevealElement_handleTouchEnd(e) {
  const touch = __classPrivateFieldGet(this, _M3eSwipeRevealElement_touch, "f");
  if (touch && [...e.changedTouches].some(x => x.identifier === touch.id)) {
    __classPrivateFieldSet(this, _M3eSwipeRevealElement_touch, undefined, "f");
  }
};
_M3eSwipeRevealElement_handleTriggerGesture = function _M3eSwipeRevealElement_handleTriggerGesture(e) {
  if (e.detail.phase !== "end") return;
  switch (this.state) {
    case "revealed":
      this.close();
      break;
    case "covered":
      this.reveal();
      if (e.detail.gestureName === "long-press") {
        const inputId = e.detail.inputId;
        __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_suppressReleaseClick).call(this, typeof inputId === "number" ? inputId : inputId[0]);
      }
      break;
  }
};
_M3eSwipeRevealElement_suppressReleaseClick = function _M3eSwipeRevealElement_suppressReleaseClick(pointerId) {
  __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_clearSuppressedClick).call(this);
  // Touch compatibility clicks can arrive after pointerup, so keep suppression until the click or the next press.
  const suppression = {
    pointerId,
    released: false,
    abort: new AbortController()
  };
  __classPrivateFieldSet(this, _M3eSwipeRevealElement_suppressedClick, suppression, "f");
  const options = {
    capture: true,
    signal: suppression.abort.signal
  };
  window.addEventListener("pointerup", event => {
    if (event.pointerId === pointerId) suppression.released = true;
  }, options);
  window.addEventListener("pointercancel", event => {
    if (event.pointerId === pointerId) __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_clearSuppressedClick).call(this);
  }, options);
  window.addEventListener("pointerdown", () => {
    if (suppression.released) __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_clearSuppressedClick).call(this);
  }, options);
};
_M3eSwipeRevealElement_clearSuppressedClick = function _M3eSwipeRevealElement_clearSuppressedClick() {
  __classPrivateFieldGet(this, _M3eSwipeRevealElement_suppressedClick, "f")?.abort.abort();
  __classPrivateFieldSet(this, _M3eSwipeRevealElement_suppressedClick, undefined, "f");
};
_M3eSwipeRevealElement_handleSlotChange = function _M3eSwipeRevealElement_handleSlotChange(e) {
  const slot = e.target;
  const hasSlot = hasAssignedNodes(slot);
  setCustomState(this, `--has-${slot.name}`, hasSlot);
  switch (slot.name) {
    case "leading":
      this._hasLeading = hasSlot;
      break;
    case "trailing":
      this._hasTrailing = hasSlot;
      break;
  }
};
_M3eSwipeRevealElement_handleSwipeGesture = function _M3eSwipeRevealElement_handleSwipeGesture(e) {
  const content = this._content;
  if (!content || __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "a", _M3eSwipeRevealElement_isGone_get)) return;
  if (e.detail.phase === "start") {
    // Drop cached measurements so each drag starts from current layout, before any drag writes.
    __classPrivateFieldGet(this, _M3eSwipeRevealElement_underlaps, "f").clear();
    __classPrivateFieldGet(this, _M3eSwipeRevealElement_fallbackWidths, "f").clear();
    __classPrivateFieldSet(this, _M3eSwipeRevealElement_contentWidth, undefined, "f");
  }
  const leadingWidth = __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_actionWidth).call(this, "leading");
  const trailingWidth = __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_actionWidth).call(this, "trailing");
  switch (e.detail.phase) {
    case "start":
    case "update":
      {
        if (e.detail.phase === "start") {
          // Measure everything the drag will need now, before any of its style writes, so no later read forces layout.
          __classPrivateFieldSet(this, _M3eSwipeRevealElement_measuredActions, __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_measureActions).call(this), "f");
          __classPrivateFieldGet(this, _M3eSwipeRevealElement_cancelSettle, "f")?.call(this);
          __classPrivateFieldSet(this, _M3eSwipeRevealElement_released, false, "f");
          __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_setDragging).call(this, false);
          // Resume from wherever the content visually is, including mid-transition.
          __classPrivateFieldSet(this, _M3eSwipeRevealElement_base, __classPrivateFieldSet(this, _M3eSwipeRevealElement_x, new DOMMatrixReadOnly(getComputedStyle(content).transform).m41, "f"), "f");
        }
        if (!__classPrivateFieldGet(this, _M3eSwipeRevealElement_dragging, "f") && (e.detail.axis !== "x" || !(e.detail.direction === __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "a", _M3eSwipeRevealElement_leadingDirection_get) ? this._hasLeading || __classPrivateFieldGet(this, _M3eSwipeRevealElement_base, "f") !== 0 : this._hasTrailing || __classPrivateFieldGet(this, _M3eSwipeRevealElement_base, "f") !== 0))) {
          break;
        }
        // The first movement can be the only touchmove in a quick swipe.
        const wasArmed = __classPrivateFieldGet(this, _M3eSwipeRevealElement_armed, "f");
        // Computed in logical space (positive reveals leading), then mapped back to physical.
        const raw = (__classPrivateFieldGet(this, _M3eSwipeRevealElement_base, "f") + e.detail.translationX) * __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "a", _M3eSwipeRevealElement_dir_get);
        const x = __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "a", _M3eSwipeRevealElement_dir_get) * (raw >= 0 ? this._hasLeading ? __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_drag).call(this, raw, "leading", leadingWidth) : 0 : this._hasTrailing ? -__classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_drag).call(this, -raw, "trailing", trailingWidth) : 0);
        __classPrivateFieldSet(this, _M3eSwipeRevealElement_x, x, "f");
        const logicalX = x * __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "a", _M3eSwipeRevealElement_dir_get);
        if (logicalX === 0 || !__classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_canDismiss).call(this, logicalX > 0 ? "leading" : "trailing")) __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_setArmed).call(this, false);
        const begin = !__classPrivateFieldGet(this, _M3eSwipeRevealElement_dragging, "f");
        let displaced = 0;
        if (begin) {
          __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_setDragging).call(this, true);
          __classPrivateFieldSet(this, _M3eSwipeRevealElement_snapOffset, 0, "f");
          displaced = __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_closeSiblings).call(this);
        }
        if (begin && displaced !== 0) {
          // Start visually where the stagger left this element, then ease onto the pointer.
          content.style.transition = "none";
          content.style.translate = `${displaced}px`;
          void content.offsetWidth; // force reflow
        }
        // The content's transform is not eased by CSS, so it stays in lockstep with the actions, whose growth tracks it.
        content.style.transition = `translate ${DesignToken.motion.spring.fastSpatial}`;
        content.style.translate = "0px";
        if (begin) {
          __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_setState).call(this, "revealing", x * __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "a", _M3eSwipeRevealElement_dir_get) > 0 ? "leading" : "trailing");
          __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_lockActions).call(this);
          __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_beginStagger).call(this);
        } else if (wasArmed !== __classPrivateFieldGet(this, _M3eSwipeRevealElement_armed, "f")) {
          // Ease the snap by animating the jump away, so content and actions animate together.
          __classPrivateFieldSet(this, _M3eSwipeRevealElement_snapOffset, __classPrivateFieldGet(this, _M3eSwipeRevealElement_shown, "f") - x, "f");
          __classPrivateFieldSet(this, _M3eSwipeRevealElement_snapStart, performance.now(), "f");
          __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_animateSnap).call(this);
        }
        __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_renderDrag).call(this);
        break;
      }
    default:
      {
        if (!__classPrivateFieldGet(this, _M3eSwipeRevealElement_dragging, "f")) break;
        __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_stopSnap).call(this);
        __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_setDragging).call(this, false);
        // A swipe that is too slow to be recognized is cancelled, so position decides in that case.
        const x = __classPrivateFieldGet(this, _M3eSwipeRevealElement_x, "f") * __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "a", _M3eSwipeRevealElement_dir_get);
        const side = x > 0 ? "leading" : x < 0 ? "trailing" : null;
        let target = null;
        let dismiss = false;
        if (side) {
          const leading = __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "a", _M3eSwipeRevealElement_leadingDirection_get);
          const sideDirection = side === "leading" ? leading : leading === "right" ? "left" : "right";
          if (e.detail.phase === "end") {
            target = e.detail.direction === sideDirection ? side : null;
            // A fling dismisses only from a revealed or armed item, so a quick swipe from rest still just reveals.
            dismiss = !!target && __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_canDismiss).call(this, side) && (__classPrivateFieldGet(this, _M3eSwipeRevealElement_armed, "f") || __classPrivateFieldGet(this, _M3eSwipeRevealElement_side, "f") === side || Math.abs(x) > __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_actionWidth).call(this, side) + 1);
          } else {
            const progress = Math.abs(x) / ((side === "leading" ? leadingWidth : trailingWidth) || Infinity);
            const threshold = __classPrivateFieldGet(this, _M3eSwipeRevealElement_side, "f") === side ? 1 - this.threshold : this.threshold;
            target = progress >= threshold ? side : null;
            dismiss = __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_canDismiss).call(this, side) && __classPrivateFieldGet(this, _M3eSwipeRevealElement_armed, "f");
          }
        }
        if (dismiss && side) {
          __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_endStagger).call(this);
          __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_dismiss).call(this, side);
        } else {
          __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_setArmed).call(this, false);
          __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_settle).call(this, target);
          __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_endStagger).call(this);
        }
        break;
      }
  }
};
_M3eSwipeRevealElement_resolveReveals = function _M3eSwipeRevealElement_resolveReveals() {
  const reveals = __classPrivateFieldGet(this, _M3eSwipeRevealElement_group, "f")?.reveals ?? [...(this.parentElement?.querySelectorAll("m3e-swipe-reveal") ?? [])];
  // Dismissed items are only awaiting removal, so they take no part in staggering or closing.
  return reveals.filter(x => !__classPrivateFieldGet(x, _M3eSwipeRevealElement_instances, "a", _M3eSwipeRevealElement_isGone_get));
};
_M3eSwipeRevealElement_drag = function _M3eSwipeRevealElement_drag(distance, side, actionWidth) {
  if (!__classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_canDismiss).call(this, side)) {
    return __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_rubberBand).call(this, distance, actionWidth);
  }
  // The snap zone (zone, at) lies beyond full reveal and before the threshold.
  // Once the pointer has reached the threshold, the snap holds until it crosses back below it, and the content
  // then snaps back to the zone's edge. If the pointer never reached the threshold, the snap holds until the
  // pointer retreats below the zone's entry. It cannot re-snap until the pointer leaves the zone below.
  const at = __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_dismissAt).call(this, side);
  const zone = Math.max(actionWidth, at - SNAP_ZONE * __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_getContentWidth).call(this));
  if (distance < zone) __classPrivateFieldSet(this, _M3eSwipeRevealElement_released, false, "f");
  if (__classPrivateFieldGet(this, _M3eSwipeRevealElement_armed, "f")) {
    __classPrivateFieldSet(this, _M3eSwipeRevealElement_reached, __classPrivateFieldGet(this, _M3eSwipeRevealElement_reached, "f") || distance >= at, "f");
    if (distance < (__classPrivateFieldGet(this, _M3eSwipeRevealElement_reached, "f") ? at : zone)) {
      __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_setArmed).call(this, false);
      __classPrivateFieldSet(this, _M3eSwipeRevealElement_released, true, "f");
    }
  } else if (distance >= at || !__classPrivateFieldGet(this, _M3eSwipeRevealElement_released, "f") && distance > zone) {
    __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_setArmed).call(this, true);
    __classPrivateFieldSet(this, _M3eSwipeRevealElement_released, false, "f");
    __classPrivateFieldSet(this, _M3eSwipeRevealElement_reached, distance >= at, "f");
  }
  let visual = distance;
  if (__classPrivateFieldGet(this, _M3eSwipeRevealElement_armed, "f")) visual = Math.max(at, distance);else if (__classPrivateFieldGet(this, _M3eSwipeRevealElement_released, "f")) visual = Math.min(distance, zone);
  return Math.min(visual, __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_getContentWidth).call(this) || visual);
};
_M3eSwipeRevealElement_closeSiblings = function _M3eSwipeRevealElement_closeSiblings() {
  // Cover revealed or revealing siblings in the same container (only one item is open at a time) and
  // return how far this element was displaced by their stagger.
  let displaced = 0;
  const siblings = __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_resolveReveals).call(this).filter(x => x !== this);
  siblings.forEach(x => __classPrivateFieldGet(x, _M3eSwipeRevealElement_finishStagger, "f")?.call(x));
  for (const sibling of siblings) {
    if (sibling._state === "covered" || __classPrivateFieldGet(sibling, _M3eSwipeRevealElement_dragging, "f")) continue;
    const index = __classPrivateFieldGet(sibling, _M3eSwipeRevealElement_staggered, "f").findIndex(item => item.el === this);
    if (index >= 0) {
      const [item] = __classPrivateFieldGet(sibling, _M3eSwipeRevealElement_staggered, "f").splice(index, 1);
      displaced = new DOMMatrixReadOnly(getComputedStyle(this).transform).m41 - (item.baseTransform === "none" ? 0 : new DOMMatrixReadOnly(item.baseTransform).m41);
      __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_restoreStagger).call(this, item);
    }
    sibling.close();
  }
  return displaced;
};
_M3eSwipeRevealElement_settle = function _M3eSwipeRevealElement_settle(target) {
  const content = this._content;
  const placeholder = this._placeholder;
  if (!content || !placeholder) return;
  __classPrivateFieldGet(this, _M3eSwipeRevealElement_cancelSettle, "f")?.call(this);
  const width = __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_actionWidth).call(this, target ?? "leading");
  const to = __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "a", _M3eSwipeRevealElement_dir_get) * (target === "leading" ? width : target === "trailing" ? -width : 0);
  __classPrivateFieldSet(this, _M3eSwipeRevealElement_x, to, "f");
  __classPrivateFieldSet(this, _M3eSwipeRevealElement_side, target, "f");
  __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_setProgress).call(this, to, true);
  __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_setState).call(this, "revealing");
  let timer = 0;
  const cleanup = () => {
    content.removeEventListener("transitionend", onEnd);
    clearTimeout(timer);
    __classPrivateFieldSet(this, _M3eSwipeRevealElement_cancelSettle, undefined, "f");
  };
  const finish = () => {
    cleanup();
    content.style.removeProperty("transition");
    __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_unlockActions).call(this);
    if (!target) {
      __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_resetContent).call(this, content, placeholder);
    }
    const state = target ? "revealed" : "covered";
    const previous = __classPrivateFieldGet(this, _M3eSwipeRevealElement_restSide, "f");
    __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_setState).call(this, state);
    if (previous !== target) {
      __classPrivateFieldSet(this, _M3eSwipeRevealElement_restSide, target, "f");
      const side = target ?? previous;
      if (side) this.dispatchEvent(__classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_createEvent).call(this, state, side));
    }
  };
  const onEnd = e => {
    if (e.target === content && e.propertyName === "transform") {
      finish();
    }
  };
  content.addEventListener("transitionend", onEnd);
  timer = window.setTimeout(finish, 600);
  __classPrivateFieldSet(this, _M3eSwipeRevealElement_cancelSettle, cleanup, "f");
  content.style.transition = "";
  content.style.transform = `translateX(${to}px)`;
};
_M3eSwipeRevealElement_createEvent = function _M3eSwipeRevealElement_createEvent(type, side, init = {}) {
  return new CustomEvent(type, {
    ...init,
    detail: {
      side
    }
  });
};
_M3eSwipeRevealElement_setDragging = function _M3eSwipeRevealElement_setDragging(dragging) {
  if (__classPrivateFieldGet(this, _M3eSwipeRevealElement_dragging, "f") === dragging) return;
  __classPrivateFieldSet(this, _M3eSwipeRevealElement_dragging, dragging, "f");
  setCustomState(this, "--dragging", dragging);
  // Selection may have begun before the swipe was recognized.
  if (dragging) getSelection()?.removeAllRanges();
};
_M3eSwipeRevealElement_setState = function _M3eSwipeRevealElement_setState(state, side = __classPrivateFieldGet(this, _M3eSwipeRevealElement_side, "f")) {
  if (this._state === state) return;
  const previous = this._state;
  this._state = state;
  setCustomState(this, "--covered", state === "covered");
  setCustomState(this, "--revealing", state === "revealing");
  setCustomState(this, "--revealed", state === "revealed");
  setCustomState(this, "--dismissing", state === "dismissing");
  setCustomState(this, "--dismissed", state === "dismissed");
  if (state === "revealing" && previous === "covered" && side) {
    this.dispatchEvent(__classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_createEvent).call(this, "revealing", side));
  }
};
_M3eSwipeRevealElement_resetContent = function _M3eSwipeRevealElement_resetContent(content, placeholder) {
  for (const p of ["transition", "transform", "translate", "display"]) {
    content.style.removeProperty(p);
  }
  for (const side of ["leading", "trailing"]) {
    this.shadowRoot?.querySelector(`.${side}`)?.style.removeProperty("display");
  }
  placeholder.style.height = "";
  placeholder.style.removeProperty("transition");
};
_M3eSwipeRevealElement_beginStagger = function _M3eSwipeRevealElement_beginStagger() {
  __classPrivateFieldGet(this, _M3eSwipeRevealElement_finishStagger, "f")?.call(this);
  const list = __classPrivateFieldSet(this, _M3eSwipeRevealElement_staggered, [], "f");
  if (this.stagger <= 0) return;
  const reveals = __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_resolveReveals).call(this);
  const index = reveals.indexOf(this);
  if (index < 0) return;
  for (const step of [-1, 1]) {
    for (let i = 1; i <= this.staggerCount; i++) {
      const sibling = reveals[index + step * i];
      if (!sibling) break;
      list.push({
        el: sibling,
        distance: i,
        transform: sibling.style.getPropertyValue("transform"),
        transformPriority: sibling.style.getPropertyPriority("transform"),
        baseTransform: getComputedStyle(sibling).transform,
        transition: sibling.style.getPropertyValue("transition"),
        transitionPriority: sibling.style.getPropertyPriority("transition")
      });
    }
  }
};
_M3eSwipeRevealElement_restoreStagger = function _M3eSwipeRevealElement_restoreStagger(item) {
  const {
    el,
    transform,
    transformPriority,
    transition,
    transitionPriority
  } = item;
  el.style.removeProperty(SHAPE_GROWTH);
  if (transform) el.style.setProperty("transform", transform, transformPriority);else el.style.removeProperty("transform");
  if (transition) el.style.setProperty("transition", transition, transitionPriority);else el.style.removeProperty("transition");
};
_M3eSwipeRevealElement_actionWidth = function _M3eSwipeRevealElement_actionWidth(name) {
  // The actions' natural width, which stays stable while buttons grow or shrink during a drag.
  const container = this.shadowRoot?.querySelector(`.${name}`);
  let width = __classPrivateFieldGet(this, _M3eSwipeRevealElement_actionWidths, "f").get(name);
  if (width === undefined) {
    // Sides without locked actions are cached too, so drag updates never measure layout.
    width = __classPrivateFieldGet(this, _M3eSwipeRevealElement_fallbackWidths, "f").get(name);
    if (width === undefined) __classPrivateFieldGet(this, _M3eSwipeRevealElement_fallbackWidths, "f").set(name, width = container?.offsetWidth ?? 0);
  }
  return Math.max(0, width - __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_underlap).call(this, name));
};
_M3eSwipeRevealElement_underlap = function _M3eSwipeRevealElement_underlap(name) {
  // The underlap is an inner-edge margin, so it resolves to pixels and marks how much of the container lies
  // beneath the content, which is not part of the reveal distance.
  const container = this.shadowRoot?.querySelector(`.${name}`);
  if (!container) return 0;
  const cached = __classPrivateFieldGet(this, _M3eSwipeRevealElement_underlaps, "f").get(name);
  if (cached !== undefined) return cached;
  const value = parseFloat(getComputedStyle(container)[name === "leading" ? "marginInlineEnd" : "marginInlineStart"]) || 0;
  __classPrivateFieldGet(this, _M3eSwipeRevealElement_underlaps, "f").set(name, value);
  return value;
};
_M3eSwipeRevealElement_getContentWidth = function _M3eSwipeRevealElement_getContentWidth() {
  return __classPrivateFieldSet(this, _M3eSwipeRevealElement_contentWidth, __classPrivateFieldGet(this, _M3eSwipeRevealElement_contentWidth, "f") ?? this._content?.offsetWidth ?? 0, "f");
};
_M3eSwipeRevealElement_rubberBand = function _M3eSwipeRevealElement_rubberBand(distance, width) {
  // Resist dragging past the actions' width, easing toward a maximum overshoot.
  if (distance <= width || !(this.overshoot > 0)) {
    return Math.min(distance, width);
  }
  // Content moves at only a fraction of the pointer's speed past full reveal, tapering to overshoot.
  const friction = 0.4;
  return width + this.overshoot * (1 - Math.exp(-(distance - width) * friction / this.overshoot));
};
_M3eSwipeRevealElement_measureActions = function _M3eSwipeRevealElement_measureActions() {
  // Reads only, so it can run before any of the drag's style writes.
  const result = new Map();
  for (const name of ["leading", "trailing"]) {
    const container = this.shadowRoot?.querySelector(`.${name}`);
    if (!container || container.style.width) continue;
    const assigned = container.querySelector("slot")?.assignedElements({
      flatten: true
    }) ?? [];
    const widths = new Map();
    if (__classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_isElastic).call(this, name)) {
      const buttons = assigned.flatMap(x => [x, ...x.querySelectorAll("m3e-button, m3e-icon-button")]);
      for (const button of buttons) {
        if (!(button instanceof HTMLElement) || !/^m3e-(icon-)?button$/.test(button.localName)) continue;
        if (__classPrivateFieldGet(this, _M3eSwipeRevealElement_squished, "f").has(button) || button.style.getPropertyValue("--_button-width")) continue;
        widths.set(button, button.getBoundingClientRect().width);
      }
    }
    result.set(name, {
      width: container.getBoundingClientRect().width,
      assigned,
      widths
    });
  }
  return result;
};
_M3eSwipeRevealElement_lockActions = function _M3eSwipeRevealElement_lockActions() {
  // Freeze the actions' size, then squish slotted buttons using their `--squished` state.
  // The container width is frozen so squishing doesn't shrink the distance the content can be dragged.
  const measured = __classPrivateFieldGet(this, _M3eSwipeRevealElement_measuredActions, "f") ?? __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_measureActions).call(this);
  __classPrivateFieldSet(this, _M3eSwipeRevealElement_measuredActions, null, "f");
  for (const [name, {
    width,
    assigned,
    widths
  }] of measured) {
    const container = this.shadowRoot?.querySelector(`.${name}`);
    if (!container || container.style.width) continue;
    if (width > 0) {
      container.style.width = `${width}px`;
      __classPrivateFieldGet(this, _M3eSwipeRevealElement_actionWidths, "f").set(name, width);
    }
    if (!__classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_isElastic).call(this, name)) continue;
    for (const [button, natural] of widths) {
      if (__classPrivateFieldGet(this, _M3eSwipeRevealElement_squished, "f").has(button) || button.style.getPropertyValue("--_button-width")) continue;
      // Measured before the state is applied, so this is the button's natural width.
      button.style.setProperty("--_button-width", `${natural}px`);
      addCustomState(button, "--squished");
      __classPrivateFieldGet(this, _M3eSwipeRevealElement_squished, "f").add(button);
    }
    // The outermost action (nearest the edge) fills the space as the item is dragged toward dismissal.
    const edge = assigned[name === "leading" ? 0 : assigned.length - 1];
    const edgeWidth = edge instanceof HTMLElement ? parseFloat(edge.style.getPropertyValue("--_button-width")) : 0;
    if (edge instanceof HTMLElement && __classPrivateFieldGet(this, _M3eSwipeRevealElement_squished, "f").has(edge) && edgeWidth > 0) {
      __classPrivateFieldGet(this, _M3eSwipeRevealElement_outermost, "f").set(name, {
        el: edge,
        width: edgeWidth
      });
    }
  }
};
_M3eSwipeRevealElement_unlockActions = function _M3eSwipeRevealElement_unlockActions() {
  for (const {
    el
  } of __classPrivateFieldGet(this, _M3eSwipeRevealElement_outermost, "f").values()) {
    el.style.removeProperty("--_squish-progress");
  }
  __classPrivateFieldGet(this, _M3eSwipeRevealElement_outermost, "f").clear();
  for (const button of __classPrivateFieldGet(this, _M3eSwipeRevealElement_squished, "f")) {
    button.style.removeProperty("--_button-width");
    deleteCustomState(button, "--squished");
  }
  __classPrivateFieldGet(this, _M3eSwipeRevealElement_squished, "f").clear();
  __classPrivateFieldGet(this, _M3eSwipeRevealElement_actionWidths, "f").clear();
  __classPrivateFieldGet(this, _M3eSwipeRevealElement_underlaps, "f").clear();
  __classPrivateFieldGet(this, _M3eSwipeRevealElement_fallbackWidths, "f").clear();
  __classPrivateFieldSet(this, _M3eSwipeRevealElement_contentWidth, undefined, "f");
  for (const name of ["leading", "trailing"]) {
    this.shadowRoot?.querySelector(`.${name}`)?.style.removeProperty("width");
  }
};
_M3eSwipeRevealElement_setProgress = function _M3eSwipeRevealElement_setProgress(x, animate) {
  // Drive the actions' fade, clip and scale from how far the content has uncovered them.
  const motion = animate ? `${DesignToken.motion.spring.fastSpatial}` : "0s";
  // Shape growth only applies while dragging.
  if (animate || !__classPrivateFieldGet(this, _M3eSwipeRevealElement_dragging, "f")) this.style.removeProperty(SHAPE_GROWTH);else this.style.setProperty(SHAPE_GROWTH, __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_shapeGrowth).call(this, __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_progressOf).call(this, x)));
  for (const [name, sign] of [["leading", 1], ["trailing", -1]]) {
    const el = this.shadowRoot?.querySelector(`.${name}`);
    if (!el) continue;
    const natural = __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_actionWidth).call(this, name);
    const ratio = sign * __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "a", _M3eSwipeRevealElement_dir_get) * x / (natural || Infinity);
    const progress = Math.max(0, Math.min(1, ratio));
    el.inert = ratio <= 0;
    // Past 1, buttons grow with the overshoot, and the container grows to hold them.
    const squish = __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_isElastic).call(this, name) ? Math.max(0, ratio) : progress;
    // On a dismissible side only the outermost action grows past full reveal, to fill the freed space.
    const outer = __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_canDismiss).call(this, name) ? __classPrivateFieldGet(this, _M3eSwipeRevealElement_outermost, "f").get(name) : undefined;
    el.style.setProperty("--_swipe-reveal-progress", String(progress));
    el.style.setProperty("--_swipe-reveal-opacity", __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_isElastic).call(this, name) ? String(progress) : "1");
    el.style.setProperty("--_squish-progress", String(outer ? Math.min(squish, 1) : squish));
    if (outer) {
      if (ratio > 1) {
        outer.el.style.setProperty("--_squish-progress", String(1 + natural * (ratio - 1) / outer.width));
      } else {
        outer.el.style.removeProperty("--_squish-progress");
      }
    }
    // Overshoot extends the container on elastic sides, adding to the underlap beneath the content.
    if (el.style.width) {
      el.style.width = `${natural * Math.max(1, squish) + __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_underlap).call(this, name)}px`;
    }
    el.style.setProperty("--_swipe-reveal-motion", motion);
  }
};
_M3eSwipeRevealElement_progressOf = function _M3eSwipeRevealElement_progressOf(x) {
  // Growth reaches its maximum at half the item's width, or at the dismiss threshold when dismissible.
  const side = x * __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "a", _M3eSwipeRevealElement_dir_get) > 0 ? "leading" : "trailing";
  const reach = __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_canDismiss).call(this, side) ? __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_dismissAt).call(this, side) : __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_getContentWidth).call(this) * 0.5;
  return Math.min(1, Math.abs(x) / (reach || Infinity));
};
_M3eSwipeRevealElement_shapeGrowth = function _M3eSwipeRevealElement_shapeGrowth(progress) {
  return `calc(${DesignToken.shape.corner.value.large} * ${progress})`;
};
_M3eSwipeRevealElement_renderDrag = function _M3eSwipeRevealElement_renderDrag() {
  const content = this._content;
  if (!content) return;
  const t = Math.min(1, (performance.now() - __classPrivateFieldGet(this, _M3eSwipeRevealElement_snapStart, "f")) / SNAP_DURATION);
  const x = __classPrivateFieldGet(this, _M3eSwipeRevealElement_x, "f") + __classPrivateFieldGet(this, _M3eSwipeRevealElement_snapOffset, "f") * Math.pow(1 - t, 3);
  __classPrivateFieldSet(this, _M3eSwipeRevealElement_shown, x, "f");
  content.style.transform = `translateX(${x}px)`;
  __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_setProgress).call(this, x, false);
  // Stagger is removed while armed for dismissal and restored when the drag leaves the threshold.
  __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_applyStagger).call(this, __classPrivateFieldGet(this, _M3eSwipeRevealElement_armed, "f") ? 0 : x, __classPrivateFieldGet(this, _M3eSwipeRevealElement_armed, "f") || __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_inSnapZone).call(this, x));
};
_M3eSwipeRevealElement_animateSnap = function _M3eSwipeRevealElement_animateSnap() {
  cancelAnimationFrame(__classPrivateFieldGet(this, _M3eSwipeRevealElement_snapFrame, "f"));
  const step = () => {
    __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_renderDrag).call(this);
    if (performance.now() - __classPrivateFieldGet(this, _M3eSwipeRevealElement_snapStart, "f") < SNAP_DURATION) {
      __classPrivateFieldSet(this, _M3eSwipeRevealElement_snapFrame, requestAnimationFrame(step), "f");
    } else {
      __classPrivateFieldSet(this, _M3eSwipeRevealElement_snapOffset, 0, "f");
    }
  };
  __classPrivateFieldSet(this, _M3eSwipeRevealElement_snapFrame, requestAnimationFrame(step), "f");
};
_M3eSwipeRevealElement_stopSnap = function _M3eSwipeRevealElement_stopSnap() {
  cancelAnimationFrame(__classPrivateFieldGet(this, _M3eSwipeRevealElement_snapFrame, "f"));
  __classPrivateFieldSet(this, _M3eSwipeRevealElement_snapOffset, 0, "f");
};
_M3eSwipeRevealElement_inSnapZone = function _M3eSwipeRevealElement_inSnapZone(x) {
  const side = x * __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "a", _M3eSwipeRevealElement_dir_get) > 0 ? "leading" : "trailing";
  return x !== 0 && __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_canDismiss).call(this, side) && Math.abs(x) > Math.max(__classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_actionWidth).call(this, side), __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_dismissAt).call(this, side) - SNAP_ZONE * 1.5 * __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_getContentWidth).call(this));
};
_M3eSwipeRevealElement_applyStagger = function _M3eSwipeRevealElement_applyStagger(x, animate = false) {
  for (const {
    el,
    distance,
    baseTransform
  } of __classPrivateFieldGet(this, _M3eSwipeRevealElement_staggered, "f")) {
    const offset = __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_staggerOffset).call(this, x, distance);
    el.style.setProperty(SHAPE_GROWTH, __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_shapeGrowth).call(this, __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_staggerOffset).call(this, __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_progressOf).call(this, x), distance)));
    el.style.transition = animate ? `transform ${DesignToken.motion.spring.fastEffects}` : "none";
    el.style.transform = `translateX(${offset}px) ${baseTransform === "none" ? "" : baseTransform}`;
  }
};
_M3eSwipeRevealElement_staggerOffset = function _M3eSwipeRevealElement_staggerOffset(x, distance) {
  return x * this.stagger * Math.pow(0.5, distance - 1);
};
_M3eSwipeRevealElement_endStagger = function _M3eSwipeRevealElement_endStagger() {
  // Spring staggered siblings back to rest and releases them (only lasts while dragging).
  const staggered = __classPrivateFieldGet(this, _M3eSwipeRevealElement_staggered, "f");
  if (staggered.length === 0) return;
  // Growth ends with the drag, so corners relax as siblings spring back.
  for (const {
    el
  } of staggered) el.style.removeProperty(SHAPE_GROWTH);
  let timer = 0;
  const finish = () => {
    clearTimeout(timer);
    __classPrivateFieldSet(this, _M3eSwipeRevealElement_finishStagger, undefined, "f");
    for (const item of staggered) {
      const {
        el
      } = item;
      el.removeEventListener("transitionend", onEnd);
      __classPrivateFieldGet(this, _M3eSwipeRevealElement_instances, "m", _M3eSwipeRevealElement_restoreStagger).call(this, item);
    }
    if (__classPrivateFieldGet(this, _M3eSwipeRevealElement_staggered, "f") === staggered) {
      __classPrivateFieldSet(this, _M3eSwipeRevealElement_staggered, [], "f");
    }
  };
  const onEnd = e => {
    if (e.target === e.currentTarget && e.propertyName === "transform") finish();
  };
  for (const {
    el,
    baseTransform
  } of staggered) {
    el.addEventListener("transitionend", onEnd);
    el.style.transition = `transform ${DesignToken.motion.spring.fastSpatial}`;
    el.style.transform = `translateX(0px) ${baseTransform === "none" ? "" : baseTransform}`;
  }
  timer = window.setTimeout(finish, 600);
  __classPrivateFieldSet(this, _M3eSwipeRevealElement_finishStagger, finish, "f");
};
/** The styles of the element. */
M3eSwipeRevealElement.styles = css`:host { display: block; position: relative; } .content { position: relative; touch-action: pan-y; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); z-index: 1; transition: transform ${DesignToken.motion.spring.fastSpatial}; transform: translateX(0px); will-change: transform; } .content.long-press-enabled { user-select: none; -webkit-user-select: none; } :host(:state(--dragging)) .content { user-select: none; -webkit-user-select: none; } .leading, .trailing { display: flex; position: absolute; box-sizing: border-box; --_actions-padding: var(--m3e-swipe-reveal-actions-padding, ${DesignToken.measurement.space100}); --_actions-gap: var(--m3e-swipe-reveal-actions-gap, ${DesignToken.measurement.space50}); --_actions-container-color: var(--m3e-swipe-reveal-actions-container-color, transparent); --_actions-container-shape: var(--m3e-swipe-reveal-actions-container-shape, ${DesignToken.shape.corner.none}); --_actions-underlap: var(--m3e-swipe-reveal-actions-underlap, 0px); inset-block: 0; background-color: var(--_container-color); border-radius: var(--_container-shape); inset-inline: 0 auto; visibility: var(--_swipe-reveal-actions-visibility, hidden); opacity: var(--_swipe-reveal-opacity, 0); transition: opacity var(--_swipe-reveal-motion, 0s), width var(--_swipe-reveal-motion, 0s); } .leading { --_padding: var(--m3e-swipe-reveal-leading-actions-padding, var(--_actions-padding)); padding-inline: var(--_padding); gap: var(--m3e-swipe-reveal-leading-actions-gap, var(--_actions-gap)); --_container-color: var(--m3e-swipe-reveal-leading-actions-container-color, var(--_actions-container-color)); --_container-shape: var(--m3e-swipe-reveal-leading-actions-container-shape, var(--_actions-container-shape)); --_underlap: var(--m3e-swipe-reveal-leading-actions-underlap, var(--_actions-underlap)); margin-inline-end: var(--_underlap); } .trailing { --_padding: var(--m3e-swipe-reveal-trailing-actions-padding, var(--_actions-padding)); padding-inline: var(--_padding); gap: var(--m3e-swipe-reveal-trailing-actions-gap, var(--_actions-gap)); --_container-color: var(--m3e-swipe-reveal-trailing-actions-container-color, var(--_actions-container-color)); --_container-shape: var(--m3e-swipe-reveal-trailing-actions-container-shape, var(--_actions-container-shape)); --_underlap: var(--m3e-swipe-reveal-trailing-actions-underlap, var(--_actions-underlap)); inset-inline: auto 0; justify-content: flex-end; margin-inline-start: var(--_underlap); } :host(:is(:state(--revealing), :--revealing, :state(--revealed), :--revealed, :state(--dismissing), :--dismissing)) .leading, :host(:is(:state(--revealing), :--revealing, :state(--revealed), :--revealed, :state(--dismissing), :--dismissing)) .trailing { --_swipe-reveal-actions-visibility: visible; } :host(:is(:state(--dismissed), :--dismissed)) .content { visibility: hidden; } :host(:is(:state(--revealed), :--revealed)) .content { cursor: pointer; } :host(:not(:is(:state(--has-leading), :--has-leading))) .leading, :host(:not(:is(:state(--has-trailing), :--has-trailing))) .trailing { display: none; }`;
__decorate([state()], M3eSwipeRevealElement.prototype, "_state", void 0);
__decorate([state()], M3eSwipeRevealElement.prototype, "_hasLeading", void 0);
__decorate([state()], M3eSwipeRevealElement.prototype, "_hasTrailing", void 0);
__decorate([query(".content")], M3eSwipeRevealElement.prototype, "_content", void 0);
__decorate([query(".placeholder")], M3eSwipeRevealElement.prototype, "_placeholder", void 0);
__decorate([property({
  type: Number
})], M3eSwipeRevealElement.prototype, "stagger", null);
__decorate([property({
  type: Number,
  attribute: "stagger-count"
})], M3eSwipeRevealElement.prototype, "staggerCount", null);
__decorate([property({
  type: Number
})], M3eSwipeRevealElement.prototype, "threshold", null);
__decorate([property({
  type: Number
})], M3eSwipeRevealElement.prototype, "overshoot", null);
__decorate([property({
  converter: spaceSeparatedStringConverter
})], M3eSwipeRevealElement.prototype, "triggers", null);
__decorate([property()], M3eSwipeRevealElement.prototype, "dismissible", null);
__decorate([property()], M3eSwipeRevealElement.prototype, "elastic", null);
__decorate([property({
  type: Number,
  attribute: "dismiss-threshold"
})], M3eSwipeRevealElement.prototype, "dismissThreshold", null);
M3eSwipeRevealElement = __decorate([customElement("m3e-swipe-reveal")], M3eSwipeRevealElement);

/**
 * Coordinates a set of `m3e-swipe-reveal` elements.
 *
 * @description
 * The `m3e-swipe-reveal-group` component ensures only one contained item is revealed at a time, staggers
 * neighboring items by their position within the group, and supplies default settings to its items.
 * Items may override any setting.
 *
 * @example
 * Showcase: Triggers. Import `@m3e/web/swipe-reveal`. Also import `@m3e/web/list`, `@m3e/web/icon-button`, `@m3e/web/icon`. Load a matching Material Symbols font or register the icons. Give icon-only buttons accessible names.
 *
 * ```html
 * <m3e-swipe-reveal-group triggers="swipe long-press">
 *   <m3e-list variant="segmented">
 *     <m3e-swipe-reveal>
 *       <m3e-list-item>Item 1</m3e-list-item>
 *       <m3e-icon-button slot="trailing" aria-label="Share" variant="tonal">
 *         <m3e-icon name="share" filled></m3e-icon>
 *       </m3e-icon-button>
 *     </m3e-swipe-reveal>
 *     <!-- Additional items omitted for brevity -->
 *   </m3e-list>
 * </m3e-swipe-reveal-group>
 * ```
 *
 * @example
 * Showcase: Stagger. Import `@m3e/web/swipe-reveal`. Also import `@m3e/web/list`, `@m3e/web/icon-button`, `@m3e/web/icon`. Load a matching Material Symbols font or register the icons. Give icon-only buttons accessible names.
 *
 * ```html
 * <m3e-swipe-reveal-group stagger="0.05">
 *   <m3e-list variant="segmented">
 *     <m3e-swipe-reveal>
 *       <m3e-list-item>Item 1</m3e-list-item>
 *       <m3e-icon-button slot="trailing" aria-label="Archive" variant="tonal">
 *         <m3e-icon name="archive" filled></m3e-icon>
 *       </m3e-icon-button>
 *     </m3e-swipe-reveal>
 *     <!-- Additional items omitted for brevity -->
 *   </m3e-list>
 * </m3e-swipe-reveal-group>
 * ```
 *
 * @example
 * Showcase: Dismissible. Import `@m3e/web/swipe-reveal`. Also import `@m3e/web/list`, `@m3e/web/icon-button`, `@m3e/web/icon`. Load a matching Material Symbols font or register the icons. Give icon-only buttons accessible names.
 *
 * ```html
 * <m3e-swipe-reveal-group dismissible="trailing">
 *   <m3e-list variant="segmented">
 *     <m3e-swipe-reveal>
 *       <m3e-list-item>Item 1</m3e-list-item>
 *       <m3e-icon-button slot="trailing" aria-label="Delete" variant="tonal">
 *         <m3e-icon name="delete" filled></m3e-icon>
 *       </m3e-icon-button>
 *     </m3e-swipe-reveal>
 *     <!-- Additional items omitted for brevity -->
 *   </m3e-list>
 * </m3e-swipe-reveal-group>
 * ```
 *
 * @tag m3e-swipe-reveal-group
 *
 * @slot - Renders the swipe-reveal elements to coordinate.
 *
 * @attr dismissible - The default side, if any, on which items can be dismissed.
 * @attr dismiss-threshold - The default baseline fraction of an item's width for dismissal.
 * @attr elastic - The default sides whose actions squish and grow as content is dragged.
 * @attr overshoot - The default distance, in pixels, content can be dragged past the actions.
 * @attr stagger - The default fraction (0 to 1) the nearest sibling follows a dragged item.
 * @attr stagger-count - The default number of siblings on each side that are staggered.
 * @attr threshold - The default fraction of the actions' width at which a release reveals or covers.
 * @attr triggers - The default space separated interactions that reveal actions.
 */
let M3eSwipeRevealGroupElement = class M3eSwipeRevealGroupElement extends Role(LitElement, "none") {
  constructor() {
    super(...arguments);
    /**
     * How far (0 to 1) a nearest sibling follows a dragged item. Each further sibling
     * follows by half as much as the previous. A value of `0` disables staggering.
     * @default 0
     */
    this.stagger = SwipeRevealDefaults.stagger;
    /**
     * The maximum number of siblings, on each side, to stagger.
     * @default 3
     */
    this.staggerCount = SwipeRevealDefaults.staggerCount;
    /**
     * The fraction (0 to 1) of an actions' width content must be dragged to reveal.
     * Closing a revealed item uses the same fraction in reverse.
     * @default 0.5
     */
    this.threshold = SwipeRevealDefaults.threshold;
    /**
     * The maximum distance (px) content can be dragged past fully revealing its actions.
     * Buttons grow with the overshoot. Set to `0` to disable.
     * @default 8
     */
    this.overshoot = SwipeRevealDefaults.overshoot;
    /**
     * The gestures used to reveal actions.
     * @default ["swipe"]
     */
    this.triggers = [...SwipeRevealDefaults.triggers];
    /**
     * The sides whose swipe can continue past the actions to dismiss the item.
     * @default "none"
     */
    this.dismissible = SwipeRevealDefaults.dismissible;
    /**
     * The sides whose actions squish and grow as content is dragged.
     * @default "both"
     */
    this.elastic = SwipeRevealDefaults.elastic;
    /**
     * The baseline fraction (0 to 1) of an item's width for dismissal. The snap zone starts after full reveal.
     * @default 0.5
     */
    this.dismissThreshold = SwipeRevealDefaults.dismissThreshold;
  }
  /** The swipe-reveal elements contained in the group. */
  get reveals() {
    return [...this.querySelectorAll("m3e-swipe-reveal")];
  }
  /** The revealed swipe-reveal in the group or `null` if none are revealed. */
  get revealed() {
    return this.reveals.find(x => x.state === "revealed") ?? null;
  }
  /** @inheritdoc */
  updated(changedProperties) {
    super.updated(changedProperties);
    // Reveals read inherited values while rendering, so they must re-render when the group's change.
    if (changedProperties.has("triggers")) {
      for (const reveal of this.reveals) {
        reveal.requestUpdate();
      }
    }
  }
  /** @inheritdoc */
  render() {
    return html`<slot></slot>`;
  }
};
/** The styles of the element. */
M3eSwipeRevealGroupElement.styles = css`:host { display: contents; }`;
__decorate([property({
  type: Number
})], M3eSwipeRevealGroupElement.prototype, "stagger", void 0);
__decorate([property({
  type: Number,
  attribute: "stagger-count"
})], M3eSwipeRevealGroupElement.prototype, "staggerCount", void 0);
__decorate([property({
  type: Number
})], M3eSwipeRevealGroupElement.prototype, "threshold", void 0);
__decorate([property({
  type: Number
})], M3eSwipeRevealGroupElement.prototype, "overshoot", void 0);
__decorate([property({
  converter: spaceSeparatedStringConverter
})], M3eSwipeRevealGroupElement.prototype, "triggers", void 0);
__decorate([property()], M3eSwipeRevealGroupElement.prototype, "dismissible", void 0);
__decorate([property()], M3eSwipeRevealGroupElement.prototype, "elastic", void 0);
__decorate([property({
  type: Number,
  attribute: "dismiss-threshold"
})], M3eSwipeRevealGroupElement.prototype, "dismissThreshold", void 0);
M3eSwipeRevealGroupElement = __decorate([customElement("m3e-swipe-reveal-group")], M3eSwipeRevealGroupElement);

export { M3eSwipeRevealElement, M3eSwipeRevealGroupElement };
//# sourceMappingURL=swipe-reveal.js.map
