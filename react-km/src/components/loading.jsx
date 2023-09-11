import React from "react";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/lottie/animation_lmelqsmx.json";

function LoadingSpinner() {
  return <Lottie animationData={loadingAnimation} className="w-36" />;
}

function LoadingSkeleton() {
  return (
    <div class="p-3 w-full mx-auto border-b mb-3">
      <div class="animate-pulse flex-1 space-y-6 py-1">
        <div class="h-2 bg-slate-700 rounded"></div>
        <div class="space-y-3">
          <div class="h-2 bg-slate-700 rounded"></div>
          <div class="h-2 bg-slate-700 rounded"></div>
        </div>
      </div>
    </div>
  );
}

export { LoadingSpinner, LoadingSkeleton };
