import Image from "next/image";

export default function ProductImage() {
    return (
        <section>
            <div className="container">
                <div className="my-[100px]">
                    <div className="bg-[#FDF5DF] rounded-[20px] flex flex-wrap items-center justify-center w-full h-full">
                    <Image src='/productimages.png' alt="Product Images" width={1080} height={500} className="max-w-md md:max-w-4xl lg:max-w-none"/>
                    </div>
               
                </div>
            </div>
        </section>
    )
}