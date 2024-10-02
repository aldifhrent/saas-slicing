import Image from "next/image";

export default function Hero() {
  return (
    <section>
      <div className="container">
        <div className="mx-auto flex flex-col items-center justify-between gap-[30px] py-[70px] lg:py-[77px] md:flex-row">
          <div className="w-full md:w-1/2 flex flex-col">
            <h1 className="max-w-screen-lg text-[40px] font-semibold text-white lg:max-w-md lg:text-7xl xl:leading-[90px] text-center md:text-left">
              SaaS Landing Page Template
            </h1>
            <p className="text-white md:max-w-sm text-center md:text-left mt-[30px]">
              This is a template Figma file, turned into code using Anima. Learn
              more at AnimaApp.com
            </p>
            <div className="flex items-center justify-center md:justify-normal">
            <button className="mt-[72px] rounded-[15px] bg-[#F8D57E] px-9 py-[9px] text-[#333333]">
              Get Started
            </button>
            </div>

          </div>
          <div className="rounded-[20px] bg-[#333333]">
            <Image
              src="/hero.gif"
              alt="Hero Image"
              width={500}
              height={446}
              className="max-w-xs lg:max-w-none rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
