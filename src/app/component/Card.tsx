import React from "react";
import Image from "next/image";

export default function Cards() {
  return (
    <div>
      <div className="container mx-auto p-5 flex flex-wrap justify-center">
        <div className="w-full sm:w-1/2 lg:w-2/5 p-2">
          <img
            src="/ad.jpg"
            width={640}
            height={360}
            alt="Ad 1"
            className="rounded-lg"
          />
        </div>
        <div className="w-full sm:w-1/2 lg:w-2/5 p-2">
          <img
            src="/ad1.jpg"
            width={640}
            height={360}
            alt="Ad 2"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
