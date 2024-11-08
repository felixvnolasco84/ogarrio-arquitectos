import React from "react";
import { ContactFormOnlyEmail } from "../Forms/ContactFormOnlyEmail";

export default function CTAContactSection() {
  return (
    <div className="grid grid-cols-1 items-center justify-center justify-items-center rounded-lg bg-[#F7F7F7] px-4 py-8 shadow-sm lg:gap-6 lg:px-6 lg:py-10 xl:gap-12 xl:px-8 xl:py-12">
      <div className="flex flex-col gap-12 lg:w-8/12 xl:w-10/12">
        <h3 className="text-center lg:text-xl xl:text-2xl">
          Schedule a consultation with our expert team today and let us help you
          bring your dream project to life. Whether you’re planning a luxury
          home or a commercial development, we’re here to guide you every step
          of the way.
        </h3>
        <ContactFormOnlyEmail />
      </div>
    </div>
  );
}
