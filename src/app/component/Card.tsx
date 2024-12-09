import React from "react";
import Image from "next/image";
import ad from "../../../Public/ad.jpg";
import ad1 from "../../../Public/ad1.jpg";

export default function Cards() {
  return (
    <div>
      <div className="container mx-auto p-5 flex flex-wrap justify-center">
        <div className="w-full sm:w-1/2 lg:w-2/5 p-2">
          <Image
            src={ad}
            width={640}
            height={360}
            alt="Ad 1"
            className="rounded-lg"
          />
        </div>
        <div className="w-full sm:w-1/2 lg:w-2/5 p-2">
          <Image
            src={ad1}
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
