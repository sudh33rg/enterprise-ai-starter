import { _ as __rest } from './_tslib.esm.js';
import * as React from 'react';
import { isValidElement, Children, useState, useCallback, useEffect, createContext, useContext, useRef, useMemo, createElement } from 'react';
import { u as useControlled } from './use-controllable.esm.js';
import { mergeProps } from '@react-aria/utils';
import clsx from 'clsx';
import './reducer-provider.esm.js';
import PropTypes__default from 'prop-types';
import { c as FocusKeyManager } from './focus-key-manager.esm.js';
import { useFocusRing } from '@react-aria/focus';
import '@react-aria/interactions';
import { b as useTabbable } from './use-tabbable.esm.js';
import { E as ErrorCircleFilledIcon, J as AlertFilledIcon, G as SuccessCircleFilledIcon } from './zoom-out.esm.js';
import { S as Spinner } from './spinner.esm2.js';
import { UxaDefaultWizardI18n } from '@ux-aspects-universal/core/i18n';
import { s as styleInject } from './style-inject.es.esm.js';
import { B as Button } from './split-button-group.esm.js';
import './use-unique-id.esm.js';
import 'react-dom';
import './direction.esm.js';
import './use-mutation-observer.esm.js';
import './prop-types.esm.js';
import '@ux-aspects-universal/core/theming';
import './theme-region.esm.js';

function useWizard({
  steps,
  activeStep,
  onFinish,
  onActiveStepChange
}) {
  // determine the index of the active step
  const activeStepIndex = steps === null || steps === void 0 ? void 0 : steps.findIndex(step => isValidElement(step) && step.props.id === activeStep);
  const isFirstStep = activeStepIndex === 0;
  const isLastStep = activeStepIndex === Children.count(steps) - 1;
  // keep an internal list of visited steps - this is used to when no visited prop is provided to a step (i.e. it is uncontrolled)
  // if the prop is provided then we use that instead
  const [visitedSteps, setVisitedSteps] = useState({});
  // determine if a step has been visited - if a prop is provided then use that, otherwise use the internal list
  const isStepVisited = useCallback(id => {
    var _a, _b;
    const visited = (_a = steps === null || steps === void 0 ? void 0 : steps.find(step => step.props.id === id)) === null || _a === void 0 ? void 0 : _a.props.visited;
    // if the prop is set to true then it is visited
    if (visited === true) {
      return true;
    }
    // if the step is before the active step then it is considered visited
    if (activeStepIndex !== undefined && steps) {
      const stepIndex = steps.findIndex(step => step.props.id === id);
      if (stepIndex !== -1 && stepIndex < activeStepIndex) {
        return true;
      }
    }
    return (_b = visitedSteps[id]) !== null && _b !== void 0 ? _b : false;
  }, [steps, visitedSteps, activeStepIndex]);
  // validate the active step
  const isActiveStepValid = useCallback(() => {
    var _a, _b, _c;
    // if there are no steps then return false as we shoudn't be able to navigate
    if (!steps || steps.length === 0) {
      return false;
    }
    // get the props of the active step
    const activeStepProps = (_a = steps === null || steps === void 0 ? void 0 : steps[activeStepIndex !== null && activeStepIndex !== void 0 ? activeStepIndex : 0]) === null || _a === void 0 ? void 0 : _a.props;
    return (_c = (_b = activeStepProps === null || activeStepProps === void 0 ? void 0 : activeStepProps.validate) === null || _b === void 0 ? void 0 : _b.call(activeStepProps)) !== null && _c !== void 0 ? _c : true;
  }, [activeStepIndex, steps]);
  const markStepAsVisited = useCallback(id => {
    var _a, _b;
    // if the step has already been visited then return
    if (isStepVisited(id)) {
      return;
    }
    // find the corresponding step
    const step = steps === null || steps === void 0 ? void 0 : steps.find(stp => stp.props.id === id);
    // call the onVisitedChange callback if provided
    (_b = step === null || step === void 0 ? void 0 : (_a = step.props).onVisitedChange) === null || _b === void 0 ? void 0 : _b.call(_a);
    // update the internal list of visited steps
    setVisitedSteps(prev => Object.assign(Object.assign({}, prev), {
      [id]: true
    }));
  }, [isStepVisited, steps]);
  // activate the step - this will call the onActiveStepChange callback and update the internal list of visited steps
  const activateStep = useCallback(id => {
    var _a;
    // iterate through all the steps up until and including the target step and mark them as visited
    const targetStepIndex = (_a = steps === null || steps === void 0 ? void 0 : steps.findIndex(step => step.props.id === id)) !== null && _a !== void 0 ? _a : 0;
    steps === null || steps === void 0 ? void 0 : steps.slice(0, targetStepIndex + 1).forEach(step => markStepAsVisited(step.props.id));
    onActiveStepChange === null || onActiveStepChange === void 0 ? void 0 : onActiveStepChange(id);
  }, [onActiveStepChange, steps, markStepAsVisited]);
  // navigate to a step at a given index
  const goToStepAtIndex = useCallback(index => {
    // get the step at the given index
    const nextStep = steps === null || steps === void 0 ? void 0 : steps[index];
    // if there is no step at the given index then throw
    if (!nextStep) {
      throw new Error(`No step found at index ${index}`);
    }
    // validate the active step
    const isValid = isActiveStepValid();
    // determine if the target step has been visited
    const isVisited = isStepVisited(nextStep.props.id);
    // Prevent navigation from an invalid step to an unvisited step
    if (!isValid && !isVisited) {
      return;
    }
    if (nextStep) {
      activateStep(nextStep.props.id);
    }
  }, [steps, isActiveStepValid, isStepVisited, activateStep]);
  // navigate to a given step
  const goToStep = useCallback(id => {
    var _a;
    // find the index of the step
    const index = (_a = steps === null || steps === void 0 ? void 0 : steps.findIndex(step => step.props.id === id)) !== null && _a !== void 0 ? _a : -1;
    goToStepAtIndex(index);
  }, [steps, goToStepAtIndex]);
  const setActiveStepByOffset = useCallback(offset => {
    if (activeStepIndex !== undefined) {
      const nextStepIndex = activeStepIndex + offset;
      if (nextStepIndex >= 0 && nextStepIndex < Children.count(steps)) {
        goToStepAtIndex(nextStepIndex);
      }
    }
  }, [activeStepIndex, steps, goToStepAtIndex]);
  // navigate to the previous step
  const goToPreviousStep = useCallback(() => {
    setActiveStepByOffset(-1);
  }, [setActiveStepByOffset]);
  // navigate to the next step
  const goToNextStep = useCallback(() => {
    setActiveStepByOffset(1);
  }, [setActiveStepByOffset]);
  // we can only finish if the active step is valid
  const didFinish = useCallback(() => {
    if (isActiveStepValid()) {
      onFinish === null || onFinish === void 0 ? void 0 : onFinish();
    }
  }, [isActiveStepValid, onFinish]);
  // on mount if there are steps but no active step, set the first step as active
  useEffect(() => {
    if (steps && steps.length > 0 && !activeStep) {
      activateStep(steps[0].props.id);
    } else if (activeStep) {
      // if the step is not the first step when the component is mounted, set all preceding steps to visited.
      if (activeStep !== (steps === null || steps === void 0 ? void 0 : steps[0].props.id)) {
        // get the current step index.
        const currentStepIndex = steps === null || steps === void 0 ? void 0 : steps.findIndex(step => step.props.id === activeStep);
        // set the initial visitedSteps state for all preceding steps to visited.
        steps === null || steps === void 0 ? void 0 : steps.forEach((step, index) => index <= currentStepIndex && setVisitedSteps(prev => Object.assign(Object.assign({}, prev), {
          [step.props.id]: true
        })));
      }
      markStepAsVisited(activeStep);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {
    isFirstStep,
    isLastStep,
    activeStep,
    goToPreviousStep,
    goToNextStep,
    onFinish: didFinish,
    isStepVisited,
    goToStep
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const WizardContext = createContext(undefined);
function useWizardContext() {
  return useContext(WizardContext);
}

const WizardI18nContext = createContext(new UxaDefaultWizardI18n());
function useWizardI18nContext() {
  return useContext(WizardI18nContext);
}

function WizardStepButton({
  step
}) {
  const ref = useRef(null);
  const {
    id,
    label,
    status,
    statusIndicator
  } = step.props;
  const {
    activeStep,
    isStepVisited,
    goToStep
  } = useWizardContext();
  const {
    focusProps,
    isFocusVisible
  } = useFocusRing();
  const {
    tabIndex,
    tabbableProps
  } = useTabbable(ref);
  const {
    successStatusLabel,
    warningStatusLabel,
    errorStatusLabel,
    activeStatusLabel,
    pendingStatusLabel
  } = useWizardI18nContext();
  const isActive = activeStep === id;
  const isVisited = isStepVisited(id);
  // store the current active state so we can use it in the effect below
  const activeState = useRef(isActive);
  // when the active state changes scroll the button into view
  useEffect(() => {
    var _a, _b;
    if (activeState.current !== isActive) {
      activeState.current = isActive;
      if (isActive && typeof ((_a = ref.current) === null || _a === void 0 ? void 0 : _a.scrollIntoView) === 'function') {
        (_b = ref.current) === null || _b === void 0 ? void 0 : _b.scrollIntoView({
          block: 'nearest'
        });
      }
    }
  }, [isActive]);
  const icon = useMemo(() => {
    switch (status) {
      case 'success':
        return React.createElement(SuccessCircleFilledIcon, {
          "aria-label": successStatusLabel,
          name: "statusApprovedFilled"
        });
      case 'warning':
        return React.createElement(AlertFilledIcon, {
          "aria-label": warningStatusLabel,
          name: "statusWarningFilled"
        });
      case 'error':
        return React.createElement(ErrorCircleFilledIcon, {
          "aria-label": errorStatusLabel,
          name: "statusErrorFilled"
        });
      case 'pending':
        return React.createElement(Spinner, {
          "aria-label": pendingStatusLabel,
          size: "12px"
        });
    }
    return isActive ? React.createElement("div", {
      role: "img",
      className: "uxa-wizard-step-status-icon",
      "aria-label": activeStatusLabel
    }) : null;
  }, [status, isActive, errorStatusLabel, successStatusLabel, warningStatusLabel, activeStatusLabel, pendingStatusLabel]);
  const onKeyDown = event => {
    switch (event.key) {
      case 'Enter':
        goToStep(id);
        break;
    }
  };
  return React.createElement("button", Object.assign({
    ref: ref,
    role: "tab",
    type: "button",
    className: clsx('uxa-wizard-step-button', {
      'uxa-visited': isVisited,
      'uxa-active': isActive,
      'uxa-status-success': status === 'success',
      'uxa-status-warning': status === 'warning',
      'uxa-status-error': status === 'error',
      'uxa-focused': isFocusVisible
    }),
    disabled: !isVisited && !isActive,
    tabIndex: tabIndex
  }, mergeProps(tabbableProps, focusProps, {
    onKeyDown,
    onClick: () => goToStep(id)
  })), typeof label === 'string' ? React.createElement("span", {
    className: "uxa-wizard-step-label"
  }, label) : label, !statusIndicator ? React.createElement("div", {
    className: "uxa-wizard-step-status"
  }, icon) : statusIndicator);
}

var css_248z$3 = "/** Wire up variables for the four sides of `margin`. Uses logical properties for the inline dimension. */\n/** Wire up variables for the inline dimension of `margin`, using logical properties. */\n/** Wire up variables for the four sides of `padding`. Uses logical properties for the inline dimension. */\n/** Wire up variables for the inline dimension of `padding`, using logical properties. */\n/** Wire up segments for the logical dimensions of `border-radius`. */\n/* Add focus outline and offset to an element */\n:host,\n.uxa-wizard-step-list {\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  gap: var(--uxa-wizard-step-list__gap);\n  margin-inline: var(--uxa-wizard-step-list__margin-inline);\n  padding-inline: var(--uxa-wizard-step-list__padding-inline);\n  padding-block: var(--uxa-wizard-step-list__padding-block);\n}\n\n.uxa-wizard-step-button {\n  flex: none;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: var(--uxa-wizard-step-button__height);\n  border: var(--uxa-wizard-step-button__border);\n  border-radius: var(--uxa-wizard-step-button__border-radius);\n  padding-inline: var(--uxa-wizard-step-button__padding-inline);\n  background-color: var(--uxa-wizard-step-button__background-color);\n  cursor: var(--uxa-wizard-step-button__cursor);\n}\n.uxa-wizard-step-button:disabled {\n  cursor: var(--uxa-wizard-step-button__cursor--disabled);\n  --uxa-wizard-step-label__color: var(--uxa-wizard-step-label__color--disabled);\n}\n.uxa-wizard-step-button:focus:not(.uxa-focused) {\n  outline: none;\n}\n.uxa-wizard-step-button.uxa-focused {\n  z-index: 1;\n  outline-offset: var(--uxa-wizard-step-button__outline-offset--focus);\n  outline: var(--uxa-focus-outline__color) var(--uxa-focus-outline__style) var(--uxa-focus-outline__width);\n}\n.uxa-wizard-step-button.uxa-visited:not(.uxa-active):hover {\n  background-color: var(--uxa-wizard-step-button__background-color--hover);\n}\n.uxa-wizard-step-button.uxa-active {\n  box-shadow: var(--uxa-wizard-step-button__box-shadow--active);\n  background-color: var(--uxa-wizard-step-button__background-color--active);\n  --uxa-wizard-step-label__font-weight: var(--uxa-wizard-step-label__font-weight--active);\n  --uxa-wizard-step-label__color: var(--uxa-wizard-step-label__color--active);\n  --uxa-wizard-step-status-icon__fill: var(--uxa-wizard-step-status-icon__fill--active);\n}\n.uxa-wizard-step-button.uxa-status-info {\n  --uxa-wizard-step-status-icon__fill: var(--uxa-color__status-info);\n}\n.uxa-wizard-step-button.uxa-status-error {\n  --uxa-wizard-step-status-icon__fill: var(--uxa-color__status-error);\n}\n.uxa-wizard-step-button.uxa-status-success {\n  --uxa-wizard-step-status-icon__fill: var(--uxa-color__status-success);\n}\n.uxa-wizard-step-button.uxa-status-warning {\n  --uxa-wizard-step-status-icon__fill: var(--uxa-color__status-warning);\n}\n.uxa-wizard-step-button .uxa-wizard-step-status {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  --uxa-icon__size: var(--uxa-wizard-step-status-icon__size);\n  --uxa-icon__fill: var(--uxa-wizard-step-status-icon__fill);\n}\n\n.uxa-wizard-step-status-icon {\n  width: var(--uxa-wizard-step-status-icon__size);\n  height: var(--uxa-wizard-step-status-icon__size);\n  border-radius: 50%;\n  background-color: var(--uxa-wizard-step-status-icon__fill, transparent);\n}";
styleInject(css_248z$3);

function WizardStepList({
  steps
}) {
  return React.createElement("div", {
    className: "uxa-wizard-step-list",
    role: "tablist",
    "aria-orientation": "vertical"
  }, React.createElement(FocusKeyManager, {
    orientation: "vertical"
  }, steps === null || steps === void 0 ? void 0 : steps.map(step => React.createElement(WizardStepButton, {
    key: step.props.id,
    step: step
  }))));
}

var css_248z$2 = "/** Wire up variables for the four sides of `margin`. Uses logical properties for the inline dimension. */\n/** Wire up variables for the inline dimension of `margin`, using logical properties. */\n/** Wire up variables for the four sides of `padding`. Uses logical properties for the inline dimension. */\n/** Wire up variables for the inline dimension of `padding`, using logical properties. */\n/** Wire up segments for the logical dimensions of `border-radius`. */\n:host,\n.uxa-wizard {\n  display: flex;\n  width: var(--uxa-wizard__width);\n  height: var(--uxa-wizard__height);\n  background-color: var(--uxa-wizard__background-color);\n}\n\n.uxa-wizard-side-panel {\n  flex: none;\n  display: flex;\n  flex-direction: column;\n  gap: var(--uxa-wizard-side-panel__gap);\n  width: var(--uxa-wizard-side-panel__width);\n  padding-inline: var(--uxa-wizard-side-panel__padding-inline);\n  padding-block: var(--uxa-wizard-side-panel__padding-block);\n  background-color: var(--uxa-wizard-side-panel__background-color);\n}\n\n.uxa-wizard-content-panel {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  padding-inline: var(--uxa-wizard-content-panel__padding-inline);\n  padding-block: var(--uxa-wizard-content-panel__padding-block);\n}\n\n.uxa-wizard-step-header-panel {\n  flex: none;\n  display: flex;\n  justify-content: space-between;\n  margin-inline: var(--uxa-wizard-step-header-panel__margin-inline);\n  margin-block: var(--uxa-wizard-step-header-panel__margin-block);\n}\n\n.uxa-wizard-step-header {\n  --uxa-typography-heading-6__color: var(--uxa-wizard-step-header-title__color);\n  --uxa-typography-body__color: var(--uxa-wizard-step-header-description__color);\n}\n\n.uxa-wizard-step-content {\n  flex: 1;\n  overflow: auto;\n  padding-inline: var(--uxa-wizard-step-content__padding-inline);\n  padding-block: var(--uxa-wizard-step-content__padding-block);\n}\n\n.uxa-wizard-footer {\n  flex: none;\n  display: flex;\n  justify-content: space-between;\n  margin-inline: var(--uxa-wizard-footer__margin-inline);\n  margin-block: var(--uxa-wizard-footer__margin-block);\n}\n\n:host,\n.uxa-wizard-header {\n  flex: none;\n  margin-inline: var(--uxa-wizard-header__margin-inline);\n  margin-block: var(--uxa-wizard-header__margin-block);\n  border-bottom-width: var(--uxa-wizard-header__border-bottom-width);\n  border-bottom-style: solid;\n  border-bottom-color: var(--uxa-wizard-header__border-bottom-color);\n}";
styleInject(css_248z$2);

function Wizard(_a) {
  var {
      activeStep: activeStepProp,
      header,
      closeButton,
      footerStart,
      footerEnd,
      onActiveStepChange: onActiveStepChangeProp,
      onFinish,
      children
    } = _a,
    props = __rest(_a, ["activeStep", "header", "closeButton", "footerStart", "footerEnd", "onActiveStepChange", "onFinish", "children"]);
  const [activeStep, onActiveStepChange] = useControlled(activeStepProp, onActiveStepChangeProp);
  // derive the header from the active step
  const stepHeader = useMemo(() => {
    var _a;
    return (_a = children === null || children === void 0 ? void 0 : children.find(step => step.props.id === activeStep)) === null || _a === void 0 ? void 0 : _a.props.header;
  }, [activeStep, children]);
  // derive the main content from the active step
  const stepContent = useMemo(() => {
    var _a;
    return (_a = children === null || children === void 0 ? void 0 : children.find(step => step.props.id === activeStep)) === null || _a === void 0 ? void 0 : _a.props.children;
  }, [activeStep, children]);
  const context = useWizard({
    steps: children,
    activeStep,
    onActiveStepChange,
    onFinish
  });
  return React.createElement(WizardContext.Provider, {
    value: context
  }, React.createElement("div", Object.assign({
    className: "uxa-wizard"
  }, props), React.createElement("div", {
    className: "uxa-wizard-side-panel"
  }, React.createElement("div", {
    className: "uxa-wizard-header"
  }, header), React.createElement(WizardStepList, {
    steps: children
  })), React.createElement("div", {
    className: "uxa-wizard-content-panel",
    role: "tabpanel"
  }, React.createElement("div", {
    className: "uxa-wizard-step-header-panel"
  }, React.createElement("div", {
    className: "uxa-wizard-step-header"
  }, stepHeader), React.createElement("div", {
    className: "uxa-wizard-close-button"
  }, closeButton)), React.createElement("div", {
    className: "uxa-wizard-step-content"
  }, stepContent), React.createElement("div", {
    className: "uxa-wizard-footer"
  }, React.createElement("span", null, footerStart), React.createElement("span", null, footerEnd)))));
}
/** Define the Prop Type information */
Wizard.propTypes = {
  /** The id of the active step.*/
  activeStep: PropTypes__default.oneOfType([PropTypes__default.string, PropTypes__default.number]),
  /** Emits the id of the active step when it changes. */
  onActiveStepChange: PropTypes__default.func,
  /** Optional header content above the step list. */
  header: PropTypes__default.node,
  /** Optional close/cancel button within the step header. */
  closeButton: PropTypes__default.node,
  /** Start-aligned content in the wizard footer. */
  footerStart: PropTypes__default.node,
  /** End-aligned content in the wizard footer. */
  footerEnd: PropTypes__default.node,
  /** Emits when the "Finish" button has been clicked on a valid step. */
  onFinish: PropTypes__default.func
};

const WizardStep = () => {
  // this component is not rendered, it is used to allow definition of the props and content of each step only,
  // these are extracted by the Wizard component and rendered in the correct place
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return React.createElement(React.Fragment, null);
};
/** Define the Prop Type information */
WizardStep.propTypes = {
  /** A unique identifier for the step. Required. */
  id: PropTypes__default.string.isRequired,
  /** The label to display for the step in the step list. */
  label: PropTypes__default.oneOfType([PropTypes__default.string, PropTypes__default.element]),
  /** The status of the step. */
  status: PropTypes__default.oneOf(['success', 'warning', 'error', 'pending']),
  /** Custom content to display instead of the default status indicator. */
  statusIndicator: PropTypes__default.element,
  /** Whether the step has been visited by the user. */
  visited: PropTypes__default.bool,
  /* A function which is called when the user clicks the "Next" or "Finish" buttons. This should return true if the user is allowed to proceed to the next step. */
  validate: PropTypes__default.func,
  /** Emits when the visited state of the step changes. */
  onVisitedChange: PropTypes__default.func,
  /** The title and description of the step, which appear when the step is active. */
  header: PropTypes__default.element
};

var css_248z$1 = "/* Add focus outline and offset to an element */\n:host,\n.uxa-wizard-title {\n  margin-inline: var(--uxa-wizard-title__margin-inline);\n  margin-block: var(--uxa-wizard-title__margin-block);\n  font-family: var(--uxa-typography-heading-6__font-family, var(--uxa-typography__font-family));\n  font-weight: var(--uxa-typography-heading-6__font-weight);\n  font-size: var(--uxa-typography-heading-6__font-size);\n  text-transform: var(--uxa-typography-heading-6__text-transform);\n  color: var(--uxa-typography-heading-6__color);\n  line-height: var(--uxa-typography-heading-6__line-height);\n}";
styleInject(css_248z$1);

const WizardTitle = _a => {
  var {
      is = 'h1',
      children
    } = _a,
    htmlProps = __rest(_a, ["is", "children"]);
  return createElement(is !== null && is !== void 0 ? is : 'h1', mergeProps({
    className: 'uxa-wizard-title'
  }, htmlProps), children);
};
/** Define the Prop Type information */
WizardTitle.propTypes = {
  /** Name of the element type to render the text with (default: "h1"). */
  is: PropTypes__default.string
};

const WizardNextButton = ({
  children,
  visible
}) => {
  const {
    isLastStep,
    goToNextStep
  } = useWizardContext();
  // if the button has been explicitly hidden, or if it's the last step and the button is not explicitly shown, don't render
  if (visible === false || isLastStep && !visible) {
    return null;
  }
  return React.createElement(Button, {
    onClick: goToNextStep,
    primary: true,
    size: "medium"
  }, children);
};
/** Define the Prop Type information */
WizardNextButton.propTypes = {
  /** Whether to show the button. This overrides the default behavior. */
  visible: PropTypes__default.bool
};

const WizardPreviousButton = _a => {
  var {
      children,
      visible
    } = _a,
    props = __rest(_a, ["children", "visible"]);
  const {
    isFirstStep,
    goToPreviousStep
  } = useWizardContext();
  // if the button has been explicitly hidden, or if it's the first step and the button is not explicitly shown, don't render
  if (visible === false || isFirstStep && !visible) {
    return null;
  }
  return React.createElement(Button, Object.assign({
    onClick: goToPreviousStep,
    secondary: true,
    size: "medium"
  }, props), children);
};
/** Define the Prop Type information */
WizardPreviousButton.propTypes = {
  /** Whether to show the button. This overrides the default behavior. */
  visible: PropTypes__default.bool
};

const WizardFinishButton = _a => {
  var {
      children,
      visible
    } = _a,
    props = __rest(_a, ["children", "visible"]);
  const {
    isLastStep,
    onFinish
  } = useWizardContext();
  // if the button has been explicitly hidden, or if this is the last step and the button is explicitly hidden, don't render
  if (visible === false || !isLastStep && !visible) {
    return null;
  }
  return React.createElement(Button, Object.assign({
    onClick: onFinish,
    primary: true,
    size: "medium"
  }, props), children);
};
/** Define the Prop Type information */
WizardFinishButton.propTypes = {
  /** Whether to show the button. This overrides the default behavior. */
  visible: PropTypes__default.bool
};

var css_248z = "/* Add focus outline and offset to an element */\n:host,\n.uxa-wizard-step-label {\n  font-family: var(--uxa-typography-body__font-family, var(--uxa-typography__font-family));\n  font-weight: var(--uxa-typography-body__font-weight);\n  font-size: var(--uxa-typography-body__font-size);\n  text-transform: var(--uxa-typography-body__text-transform);\n  color: var(--uxa-typography-body__color);\n  line-height: var(--uxa-typography-body__line-height);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  --uxa-typography-body__font-weight: var(--uxa-wizard-step-label__font-weight);\n  --uxa-typography-body__color: var(--uxa-wizard-step-label__color);\n}";
styleInject(css_248z);

const WizardStepLabel = ({
  children
}) => {
  return React.createElement("span", {
    className: "uxa-wizard-step-label"
  }, children);
};
/** Define the Prop Type information */
WizardStepLabel.propTypes = {};

export { Wizard, WizardFinishButton, WizardNextButton, WizardPreviousButton, WizardStep, WizardStepLabel, WizardTitle };
