"use client";

import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import React from "react";
import { createContext } from "react";

type PrintContext = {
  componentRef: React.MutableRefObject<null> | null;
  handlePrint: () => void;
};

const PrintContext = createContext<PrintContext>({
  componentRef: null,
  handlePrint: () => {},
});

export default function PrintProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    // wait animation or image loading for a while before printing?
    // onBeforePrint: () => {
    //   return new Promise<void>((resolve) => {
    //     setTimeout(() => {
    //       resolve();
    //     }, 500);
    //   });
    // },
    onPrintError: (error) => console.log(error),

    content: () => componentRef.current,
  });

  return (
    <PrintContext.Provider value={{ componentRef, handlePrint }}>
      {children}
    </PrintContext.Provider>
  );
}

export const usePrint = () => {
  const { componentRef, handlePrint } = React.useContext(PrintContext);
  if (!componentRef) {
    throw new Error("usePrint must be used within a PrintProvider");
  }
  if (!handlePrint) {
    throw new Error("usePrint must be used within a PrintProvider");
  }
  return { componentRef, handlePrint };
};
