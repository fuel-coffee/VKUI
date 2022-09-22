import * as React from "react";
import {
  Icon24Chevron,
  Icon24ChevronCompactLeft,
  Icon16Chevron,
  Icon16ChevronLeft,
} from "@vkontakte/icons";
import { classNames } from "../../lib/classNames";
import { Tappable } from "../Tappable/Tappable";
import "./HorizontalScrollArrow.css";

export interface HorizontalScrollArrowProps {
  direction: "left" | "right";
  size?: "m" | "l";
  onClick(): void;
}

export const HorizontalScrollArrow = ({
  size = "l",
  direction,
  onClick,
  ...restProps
}: HorizontalScrollArrowProps) => {
  let ArrowIcon: React.ComponentType<unknown>;

  if (size === "m") {
    ArrowIcon = direction === "left" ? Icon16ChevronLeft : Icon16Chevron;
  } else {
    ArrowIcon = direction === "left" ? Icon24ChevronCompactLeft : Icon24Chevron;
  }

  return (
    <Tappable
      {...restProps}
      Component="button"
      hasHover={false}
      hasActive={false}
      vkuiClass={classNames(
        "HorizontalScrollArrow",
        `HorizontalScrollArrow--size-${size}`,
        `HorizontalScrollArrow--direction-${direction}`
      )}
      onClick={onClick}
    >
      <span vkuiClass="HorizontalScrollArrow__icon">
        <ArrowIcon />
      </span>
    </Tappable>
  );
};
