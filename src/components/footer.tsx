export default function Footer() {
  return (
    <footer className="">
      <div className="container">
        <hr className="w-full text-[#333333]" />
        <div className="flex flex-col justify-between gap-16 px-4 py-12 lg:flex-row">
          <div>
            <h1 className="text-2xl font-bold leading-6 text-white">Wallet</h1>
            <nav
              className="mt-[44px] flex flex-col gap-[30px] text-nowrap text-white lg:flex-row "
              aria-label="Footer navigation"
            >
              <p>&copy; Wallet 2022</p>
              <a href="/privacy-policy" className="hover:underline">Privacy policy</a>
              <a href="/cookies-policy" className="hover:underline">Cookies policy</a>
              <a href="/terms-of-use" className="hover:underline">Terms of use</a>
            </nav>
          </div>
          <div className="text-white">
            <h2 className="text-md">Updates right to your Inbox</h2>
            <form className="mt-[15px] flex flex-col  gap-[25px] lg:flex-row">
              <input
                type="email"
                placeholder="Email Address"
                className="h-[50px] w-[301px] rounded-[15px] bg-[#333333] p-4 focus-visible:outline-2"
                aria-label="Email address"
                required
              />
              <button
                type="submit"
                className="h-[50px] w-[175px] rounded-[15px] bg-[#BFAFF2] px-4 py-2 text-[#333333]"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
