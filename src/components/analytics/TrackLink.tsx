"use client";

import type { ComponentProps } from "react";
import { trackEvent, type GaEvent } from "@/lib/analytics";

type Props = ComponentProps<"a"> & {
  event: GaEvent;
  eventParams?: Record<string, string | number | boolean>;
};

export function TrackLink({
  event,
  eventParams,
  onClick,
  children,
  ...props
}: Props) {
  return (
    <a
      {...props}
      onClick={(e) => {
        trackEvent(event, eventParams);
        onClick?.(e);
      }}
    >
      {children}
    </a>
  );
}
