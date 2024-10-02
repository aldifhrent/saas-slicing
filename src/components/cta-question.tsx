import Image from "next/image";

export default function CTAQuestion() {
    return (
        <section className="py-[113px]">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-[30px]">
                    <div className="w-full lg:w-1/2">
                        <h1 className="text-white text-3xl md:text-6xl lg:text-[60px] leading-[90px] max-w-sm font-semibold">
                            Questions? Let&apos;s Talk
                        </h1>
                        <p className="text-white max-w-xs">
                            Contact us through our 24/7 live chat. We&apos;re always happy to help!
                        </p>
                        <button className="mt-[22px] rounded-[15px] bg-[#F8D57E] px-9 py-[9px] text-[#333333] hover:bg-[#f3c75d]">
                            Get Started
                        </button>
                    </div>
                    <div>
                        <Image src='/cta-image.gif' width={500} height={400} alt="CTA" className="max-w-xs lg:max-w-none object-contain rounded-lg"/>
                    </div>
                </div>
            </div>
        </section>
    )
}
