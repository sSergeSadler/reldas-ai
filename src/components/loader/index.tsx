import React from "react";
import { Spinner } from "../spinner";
import { cn } from "@/lib/utils";

type Props = {
  loading: boolean;
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
};

export const Loader = ({ loading, children, className, noPadding }: Props) => {
  return loading ? (
    <div className={cn(className || "w-full py-5 flex justify-center")}>
      <Spinner noPadding={noPadding} />
    </div>
  ) : (
    children
  );
};
