"use client";

import React, {
  FC,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  memo,
} from "react";
import styles from "../app/page.module.css";
import { RenderLogger } from "./RenderLogger";

interface IButtonProps {
  id: string;
}

// memo is not needed here due to compiler
// using here just to see the compiled output for curiosity sake
export const MemoButton: FC<IButtonProps> = memo(({ id }) => {
  return <NoMemoButton id={id} />;
});
MemoButton.displayName = "MemoButton";

export const NoMemoButton: FC<IButtonProps> = ({ id }) => {
  const [count, setCount] = useState(0);
  return (
    <StatelessButton
      id={id}
      count={count}
      setCount={setCount}
    ></StatelessButton>
  );
};

interface IStatelessButtonProps extends IButtonProps {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}

export const StatelessButton: FC<IStatelessButtonProps> = ({
  id,
  count,
  setCount,
}) => {
  useEffect(() => {
    console.log(id, "render");
  });
  return (
    <RenderLogger logText={id}>
      <h4 className={styles.h4}>{id}</h4>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <p
          className={styles.p}
          style={{
            marginRight: "12px",
          }}
        >
          {count}
        </p>
        <div>
          <button
            className={styles.button}
            onClick={() => {
              setCount(count + 1);
            }}
          >
            {"+1"}
          </button>
        </div>
      </div>
    </RenderLogger>
  );
};
