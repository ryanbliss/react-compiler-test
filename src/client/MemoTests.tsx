"use client";

import { FC, useEffect, useState } from "react";
import { RenderLogger } from "./RenderLogger";
import { MemoButton, NoMemoButton, StatelessButton } from "./ButtonTests";
import { ConsoleProvider } from "./ConsoleProvider";

export function MyApp(): JSX.Element {
  useEffect(() => {
    console.log("App render");
  });
  return (
    <ConsoleProvider>
      <RenderLogger logText="App">
        <MemoTests />
      </RenderLogger>
    </ConsoleProvider>
  );
}

export const MemoTests: FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("MemoTests render");
  });
  return (
    <RenderLogger logText="MemoTests">
      <StatelessButton id="Stateless" count={count} setCount={setCount} />
      <NoMemoButton id="No Memo A" />
      <NoMemoButton id="No Memo B" />
      <MemoButton id="Memo A" />
      <MemoButton id="Memo B" />
    </RenderLogger>
  );
};
