"use client";

import React from "react";
import Desktop from "./Desktop";
import { useAppContext } from "@/app/hooks/Context";

const Index = () => {
  const { navOpen } = useAppContext(); // Destructure navOpen from context

  return (
    <div className="">
        <Desktop />
    </div>
  );
};

export default Index;
