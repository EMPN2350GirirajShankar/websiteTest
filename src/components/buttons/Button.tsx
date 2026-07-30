import type { AnchorHTMLAttributes, CSSProperties, MouseEventHandler, ReactElement, ReactNode } from "react";
import {
  Button as FluentButton,
  makeStyles,
  mergeClasses,
  useButtonStyles_unstable,
  useButton_unstable,
} from "@fluentui/react-components";
import { Link } from "react-router-dom";
import { isInternalPath } from "../../lib/links";
import type { ButtonSize } from "./tokens";

export type ButtonVariant = "primary" | "secondary" | "tertiary" | "text" | "icon" | "card";

export interface ButtonProps {
  children?: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  target?: "_blank" | "_self";
  rel?: string;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  iconBefore?: ReactElement;
  iconAfter?: ReactElement;
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
  style?: CSSProperties;
  ariaLabel?: string;
  /**
   * Native button type. Only meaningful for the plain <button> rendering (no
   * href); Fluent defaults to "button", so a form submit button must opt in.
   */
  type?: "button" | "submit" | "reset";
}

const useStyles = makeStyles({
  fullWidth: {
    width: "100%",
  },
  card: {
    justifyContent: "space-between",
  },
});

const appearanceMap: Record<ButtonVariant, "primary" | "secondary" | "outline" | "subtle" | "transparent"> = {
  primary: "primary",
  secondary: "secondary",
  tertiary: "outline",
  text: "subtle",
  icon: "subtle",
  card: "secondary",
};

interface InternalLinkButtonProps {
  children?: ReactNode;
  to: string;
  appearance: "primary" | "secondary" | "outline" | "subtle" | "transparent";
  size: ButtonSize;
  icon?: ReactElement;
  iconPosition: "before" | "after";
  disabled?: boolean;
  target?: "_blank" | "_self";
  rel?: string;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  className?: string;
  style?: CSSProperties;
  ariaLabel?: string;
}

function InternalLinkButton({
  children,
  to,
  appearance,
  size,
  icon,
  iconPosition,
  disabled,
  target,
  rel,
  onClick,
  className,
  style,
  ariaLabel,
}: InternalLinkButtonProps) {
  const state = useButton_unstable({
    as: "a",
    href: to,
    appearance,
    size,
    icon,
    iconPosition,
    disabled,
    target,
    rel,
    onClick,
    className,
    style,
    "aria-label": ariaLabel,
    children,
  }, null);
  useButtonStyles_unstable(state);
  const { as: _as, href: _href, children: linkChildren, ...linkProps } = state.root as
    AnchorHTMLAttributes<HTMLAnchorElement> & { as?: "a" };

  return (
    <Link {...linkProps} to={to}>
      {iconPosition === "before" && state.icon ? (
        <span className={state.icon.className}>{state.icon.children}</span>
      ) : null}
      {!state.iconOnly ? linkChildren : null}
      {iconPosition === "after" && state.icon ? (
        <span className={state.icon.className}>{state.icon.children}</span>
      ) : null}
    </Link>
  );
}

export function Button({
  children,
  variant = "primary",
  size = "large",
  href,
  target,
  rel,
  onClick,
  iconBefore,
  iconAfter,
  disabled,
  fullWidth,
  className,
  style,
  ariaLabel,
  type,
}: ButtonProps) {
  const s = useStyles();
  const icon = iconAfter ?? iconBefore;
  const iconPosition = iconAfter ? "after" : "before";

  const resolvedClassName = mergeClasses(
    variant === "card" ? s.card : undefined,
    fullWidth ? s.fullWidth : undefined,
    className,
  );

  if (href) {
    if (isInternalPath(href)) {
      return (
        <InternalLinkButton
          to={href}
          appearance={appearanceMap[variant]}
          size={size}
          icon={icon}
          iconPosition={iconPosition}
          disabled={disabled}
          target={target}
          rel={rel}
          onClick={onClick}
          className={resolvedClassName}
          style={style}
          ariaLabel={ariaLabel}
        >
          {children}
        </InternalLinkButton>
      );
    }

    return (
      <FluentButton
        as="a"
        href={href}
        target={target}
        rel={rel}
        appearance={appearanceMap[variant]}
        size={size}
        icon={icon}
        iconPosition={iconPosition}
        disabled={disabled}
        onClick={onClick}
        className={resolvedClassName}
        style={style}
        aria-label={ariaLabel}
      >
        {children}
      </FluentButton>
    );
  }

  return (
    <FluentButton
      appearance={appearanceMap[variant]}
      size={size}
      icon={icon}
      iconPosition={iconPosition}
      disabled={disabled}
      onClick={onClick}
      className={resolvedClassName}
      style={style}
      aria-label={ariaLabel}
      type={type}
    >
      {children}
    </FluentButton>
  );
}
