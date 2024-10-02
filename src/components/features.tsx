import Image from "next/image";

const featuresCard = [
  {
    image: "/cardsIcon.png",
    title: "Customizable card",
    subtitle: "Custom your own card for your exact incomes and expenses needs.",
  },
  {
    image: "/coinIcon.png",
    title: "No Payment Fee",
    subtitle: "Transfer your payment all over the world with no payment fee.",
  },
  {
    image: "/walletIcon.png",
    title: "All in one place",
    subtitle: "The right place to keep your credit and debit cards, boarding passes & more.  ",
  },
];
export default function Features() {
  return (
    <section>
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-center gap-[50px] py-[50px]">
          {featuresCard.map((features) => (
            <div key={features.title} className="flex flex-col items-center w-[311px] h-[300px]">
              <Image
                src={features.image}
                alt="Features Image"
                width={70}
                height={70}
                className="max-w-none"
              />
              <h1 className="text-white mt-8 text-lg font-semibold leading-8">{features.title}</h1>
              <p className="text-white text-center text-lg leading-8 mt-[10px] max-w-xs">{features.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
