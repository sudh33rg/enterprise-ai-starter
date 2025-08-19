import { _ as __rest } from './_tslib.esm.js';
import { mergeProps } from '@react-aria/utils';
import PropTypes__default from 'prop-types';
import * as React from 'react';
import { forwardRef } from 'react';
import { s as styleInject } from './style-inject.es.esm.js';
import clsx from 'clsx';

var css_248z$6 = ":host,\n.uxa-card {\n  display: flex;\n  flex-direction: column;\n  row-gap: var(--uxa-card__gap);\n  background-color: var(--uxa-card__background-color);\n  box-shadow: var(--uxa-card__box-shadow);\n  padding-inline: var(--uxa-card__padding-inline);\n  padding-block: var(--uxa-card__padding-block);\n  border-radius: var(--uxa-card__border-radius);\n  box-sizing: border-box;\n  transition: box-shadow 0.1s ease-out;\n}\n:host:hover,\n.uxa-card:hover {\n  --uxa-card__box-shadow: var(--uxa-card__box-shadow--basic-hover);\n}\n:host:active,\n.uxa-card:active {\n  --uxa-card__box-shadow: var(--uxa-card__box-shadow--basic-active);\n}\n:host:focus,\n.uxa-card:focus {\n  outline: none;\n}\n:host:focus-visible,\n.uxa-card:focus-visible {\n  outline: var(--uxa-card__outline--focus);\n  outline-offset: var(--uxa-card__outline-offset--focus);\n}\n\n.uxa-card:active:has(.uxa-card-header .uxa-card-thumbnail) {\n  --uxa-card__box-shadow: var(--uxa-card__box-shadow--thumbnail-active);\n}\n\n.uxa-card:active:has(.uxa-card-image) {\n  --uxa-card__box-shadow: var(--uxa-card__box-shadow--preview-active);\n}\n\n::ng-deep uxa-card:active:has(uxa-card-header [uxa-card-thumbnail]) {\n  --uxa-card__box-shadow: var(--uxa-card__box-shadow--thumbnail-active);\n}\n\n::ng-deep uxa-card:active:has([uxa-card-image]) {\n  --uxa-card__box-shadow: var(--uxa-card__box-shadow--preview-active);\n}\n\n.uxa-card-body {\n  display: flex;\n  flex-direction: column;\n  row-gap: var(--uxa-card-body__gap);\n}\n.uxa-card-body:empty {\n  display: none;\n}\n\n:host,\n.uxa-card-image {\n  display: block;\n  width: var(--uxa-card-image__width);\n  height: var(--uxa-card-image__height);\n  margin-inline: var(--uxa-card-image__margin-inline);\n  margin-block-start: var(--uxa-card-image__margin-block-start);\n  margin-block-end: var(--uxa-card-image__margin-block-end);\n  box-sizing: border-box;\n  border-top-left-radius: inherit;\n  border-top-right-radius: inherit;\n  -o-object-fit: cover;\n     object-fit: cover;\n  align-self: center;\n  max-width: none;\n}";
styleInject(css_248z$6);

const Card = forwardRef((_a, ref) => {
  var {
      image,
      children
    } = _a,
    props = __rest(_a, ["image", "children"]);
  return React.createElement("div", Object.assign({
    ref: ref
  }, mergeProps({
    className: 'uxa-card'
  }, props)), image && React.cloneElement(image, {
    className: 'uxa-card-image'
  }), React.createElement("div", {
    className: "uxa-card-body"
  }, children));
});
/** Define the Prop Type information */
Card.propTypes = {
  /** The image to present in the card */
  image: PropTypes__default.element
};

var css_248z$5 = ":host,\n.uxa-card-header {\n  display: flex;\n  -moz-column-gap: var(--uxa-card-header__gap);\n       column-gap: var(--uxa-card-header__gap);\n}\n\n.uxa-card-header-content {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n\n:host:has([uxa-card-thumbnail]),\n.uxa-card-header:has(.uxa-card-thumbnail) {\n  --uxa-card-title__font-weight: var(--uxa-card-title__font-weight--thumbnail);\n  --uxa-card-title__font-size: var(--uxa-card-title__font-size--thumbnail);\n  --uxa-card-title__line-height: var(--uxa-card-title__line-height--thumbnail);\n}\n\n:host,\n.uxa-card-avatar {\n  width: var(--uxa-card-avatar__size);\n  height: var(--uxa-card-avatar__size);\n  flex: none;\n  box-sizing: border-box;\n}\n\n:host,\n.uxa-card-thumbnail {\n  width: var(--uxa-card-thumbnail__size);\n  height: var(--uxa-card-thumbnail__size);\n  flex: none;\n  box-sizing: border-box;\n}";
styleInject(css_248z$5);

const CardHeader = forwardRef((_a, ref) => {
  var {
      avatar,
      thumbnail,
      children
    } = _a,
    props = __rest(_a, ["avatar", "thumbnail", "children"]);
  return React.createElement("div", Object.assign({
    ref: ref
  }, mergeProps({
    className: 'uxa-card-header'
  }, props)), avatar && React.cloneElement(avatar, {
    className: 'uxa-card-avatar'
  }), React.createElement("div", {
    className: "uxa-card-header-content"
  }, children), thumbnail && React.cloneElement(thumbnail, {
    className: 'uxa-card-thumbnail'
  }));
});
/** Define the Prop Type information */
CardHeader.propTypes = {
  /** The avatar to present in the card header */
  avatar: PropTypes__default.element,
  /** The thumbnail to present in the card header */
  thumbnail: PropTypes__default.element
};

var css_248z$4 = ":host,\n.uxa-card-title {\n  font-size: var(--uxa-card-title__font-size);\n  font-weight: var(--uxa-card-title__font-weight);\n  line-height: var(--uxa-card-title__line-height);\n  color: var(--uxa-card-title__color);\n  margin-inline: 0;\n  margin-block: 0;\n}";
styleInject(css_248z$4);

const CardTitle = forwardRef((props, ref) => {
  return React.createElement("div", Object.assign({
    ref: ref
  }, mergeProps({
    className: 'uxa-card-title'
  }, props)));
});

var css_248z$3 = ":host,\n.uxa-card-subtitle {\n  font-size: var(--uxa-card-subtitle__font-size);\n  font-weight: var(--uxa-card-subtitle__font-weight);\n  line-height: var(--uxa-card-subtitle__line-height);\n  color: var(--uxa-card-subtitle__color);\n  margin-inline: 0;\n  margin-block: 0;\n}";
styleInject(css_248z$3);

const CardSubtitle = forwardRef((props, ref) => {
  return React.createElement("div", Object.assign({
    ref: ref
  }, mergeProps({
    className: 'uxa-card-subtitle'
  }, props)));
});

var css_248z$2 = ":host,\n.uxa-card-content {\n  font-size: var(--uxa-card-content__font-size);\n  font-weight: var(--uxa-card-content__font-weight);\n  line-height: var(--uxa-card-content__line-height);\n  color: var(--uxa-card-content__color);\n}\n:host.uxa-small,\n.uxa-card-content.uxa-small {\n  font-size: var(--uxa-card-content__font-size--small);\n  color: var(--uxa-card-content__color--small);\n}";
styleInject(css_248z$2);

const CardContent = forwardRef((_a, ref) => {
  var {
      size
    } = _a,
    props = __rest(_a, ["size"]);
  return React.createElement("div", Object.assign({
    ref: ref
  }, mergeProps({
    className: clsx('uxa-card-content', {
      'uxa-small': size === 'small'
    })
  }, props)));
});
/** Define the Prop Type information */
CardContent.propTypes = {
  /** The size of the content */
  size: PropTypes__default.oneOf(['small', 'medium'])
};

var css_248z$1 = ":host,\n.uxa-card-chip-list {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--uxa-card-chip-list__gap);\n}";
styleInject(css_248z$1);

const CardChipList = forwardRef((props, ref) => {
  return React.createElement("div", Object.assign({
    ref: ref
  }, mergeProps({
    className: 'uxa-card-chip-list'
  }, props)));
});

var css_248z = ":host,\n.uxa-card-footer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n:host.uxa-stacked,\n.uxa-card-footer.uxa-stacked {\n  flex-direction: column;\n  gap: var(--uxa-card-footer__gap--stacked);\n}\n:host.uxa-stacked .uxa-card-footer-leading,\n:host.uxa-stacked .uxa-card-footer-trailing,\n.uxa-card-footer.uxa-stacked .uxa-card-footer-leading,\n.uxa-card-footer.uxa-stacked .uxa-card-footer-trailing {\n  width: 100%;\n}\n:host.uxa-stacked .uxa-card-footer-trailing,\n.uxa-card-footer.uxa-stacked .uxa-card-footer-trailing {\n  justify-content: flex-end;\n}\n\n.uxa-card-footer-leading {\n  display: flex;\n  gap: var(--uxa-card-footer-leading__gap);\n}\n\n.uxa-card-footer-trailing {\n  display: flex;\n  gap: var(--uxa-card-footer-trailing__gap);\n}";
styleInject(css_248z);

const CardFooter = forwardRef((_a, ref) => {
  var {
      isStacked,
      leading,
      trailing
    } = _a,
    props = __rest(_a, ["isStacked", "leading", "trailing"]);
  return React.createElement("div", Object.assign({
    ref: ref
  }, mergeProps({
    className: clsx('uxa-card-footer', {
      'uxa-stacked': isStacked
    })
  }, props)), React.createElement("div", {
    className: "uxa-card-footer-leading"
  }, leading), React.createElement("div", {
    className: "uxa-card-footer-trailing"
  }, trailing));
});
/** Define the Prop Type information */
CardFooter.propTypes = {
  /** Whether the footer should appear stacked. */
  isStacked: PropTypes__default.bool,
  /** The leading footer content. */
  leading: PropTypes__default.element,
  /** The trailing footer content. */
  trailing: PropTypes__default.element
};

export { Card, CardChipList, CardContent, CardFooter, CardHeader, CardSubtitle, CardTitle };
