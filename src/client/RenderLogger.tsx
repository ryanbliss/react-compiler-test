"use client"

import {
  FC,
  useEffect,
  ReactNode,
} from "react";
import { useConsoleContext } from "./ConsoleProvider";

interface IRenderLoggerProps {
  logText: string;
  children?: ReactNode;
}

export const RenderLogger: FC<IRenderLoggerProps> = ({ logText, children }) => {
  const { log } = useConsoleContext();
  useEffect(() => {
    log(logText + " render");
  });
  return <div>{children}</div>;
};
