import { Globe2Icon } from "lucide-react";
import React from "react";

const BrandLogo = () => {
  return (
    <div className="flex items-center gap-2 font-semibold flex-shrink-0 text-lg">
      <Globe2Icon className="size-8" />
      <span>Pretty Deals</span>
    </div>
  );
};

export default BrandLogo;
