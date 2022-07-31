import { CSSProperties, useMemo } from "react";
import { t } from "../lib/typecheck";

const usePropsDimensions = (width?: string, height?: string) => {
  return useMemo(() => {
    if (t(width, "undefined") && t(height, "undefined")) return undefined;
    const base = {} as CSSProperties;
    width && (base.width = width);
    height && (base.height = height);
    return base;
  }, [height, width]);
};

export default usePropsDimensions;
