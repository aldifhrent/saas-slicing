import Image from "next/image";

export default function Projects() {
  return (
    <section>
      <div className="container">
        <div className="flex flex-col items-center justify-center">
        <hr className="w-full text-[#333333]" />
        <div className="p-12 ">
          <Image src="/projects.png" alt="Projects" width={931} height={35} className="max-w-xs md:max-w-2xl lg:max-w-3xl xl:max-w-none" />
        </div>

        <hr className="w-full text-[#333333]" />
        </div>
       
      </div>
    </section>
  );
}
