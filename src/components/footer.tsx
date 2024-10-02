export default function Footer() {
  return (
    <footer className="container">
      <hr className="w-full text-[#333333]" />
      <div className="flex items-center justify-between px-4 py-12">
        <div>
          <h1 className="text-2xl font-bold leading-6 text-white">Wallet</h1>
          <nav
            className="mt-[44px] flex gap-[30px] text-white"
            aria-label="Footer navigation"
          >
            <p>&copy; Wallet 2022</p>
            <a href="/privacy-policy">Privacy policy</a>
            <a href="/cookies-policy">Cookies policy</a>
            <a href="/terms-of-use">Terms of use</a>
          </nav>
        </div>
        <div className="text-white">
          <h2 className="text-lg">Updates right to your Inbox</h2>
          <form className="mt-[15px] flex items-center gap-[25px]">
            <input
              type="email"
              placeholder="Email Address"
              className="h-[50px] w-[301px] rounded-[15px] bg-[#333333] p-4"
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
    </footer>
  );
}
