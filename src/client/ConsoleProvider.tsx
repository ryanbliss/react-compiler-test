"use client"

import {
  FC,
  useState,
  ReactNode,
  createContext,
  useContext,
} from "react";

interface IComponentProps {
  // Enter your types here
  children?: ReactNode;
}

export const ConsoleProvider: FC<IComponentProps> = (props) => {
  const [consoleText, setConsoleText] = useState("");
  const log = (text: string) => {
    setConsoleText((prevText) => {
        return prevText + text + "\n";
    });
  };
  const contextValue = {
    log,
  };
  return (
    <ConsoleContext.Provider value={contextValue}>
      {props.children}
      <div
        style={{
          whiteSpace: "pre",
          padding: "8px",
          backgroundColor: "black",
          color: "white",
          overflowX: "auto",
          overflowY: "auto",
          height: "520px",
          lineHeight: "200%",
          marginTop: "24px",
        }}
      >
        {consoleText}
      </div>
      <button
        onClick={() => {
          setConsoleText("");
        }}
      >
        Clear
      </button>
    </ConsoleContext.Provider>
  );
};

interface IConsoleContext {
  log: (text: string) => void;
}

export const ConsoleContext = createContext<IConsoleContext>({
  log: (text: string) => {
    throw new Error("ConsoleContext: not implemented exception");
  },
});

export const useConsoleContext = (): IConsoleContext =>
  useContext(ConsoleContext);
