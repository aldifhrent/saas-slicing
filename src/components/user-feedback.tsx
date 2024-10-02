'use client'

import Image from "next/image";

export default function UserFeedback() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="mt-[30px] w-full rounded-[20px] bg-[#BFAFF2] px-4 py-[83px] lg:px-[162px]">
          <div className="flex flex-col items-center lg:items-start">
            <p className="text-center text-[24px] font-semibold leading-[40px] lg:text-left">
              “Wallet is a great product! All of my most important information
              is there - credit cards, transit cards, boarding passes, tickets,
              and more. And I don&apos;t need to worry because it&apos;s all in
              one place! thanks!”
            </p>
            <div>
              <div className="mt-[50px] flex items-center gap-5">
                <Image
                  src="/userFeedback.png"
                  width={80}
                  height={83.3}
                  alt="User Feedback Image"
                  className="max-w-none"
                />
                <div className="flex flex-col">
                  <p>Johnny Owens</p>
                  <div className="flex">
                    {Array(5)
                      .fill(0)
                      .map((i) => (
                        <Image
                        key={i}
                          src="/Star.png"
                          width={20}
                          height={20}
                          alt="Star"
                        />
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
