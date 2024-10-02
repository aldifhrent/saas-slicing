export default function Header() {
    return (
        <header>
            <div className="flex justify-between p-8 items-center h-[100px]" >
                <div>
                <h1 className="text-white text-2xl font-bold leading-6">Wallet</h1>
                </div>

                <div className="hidden lg:flex items-center gap-x-[30px]">
                    <button className="px-3 py-1 text-white text-lg leading-8">Sign up</button>
                    <button className="bg-[#BFAFF2] text-[#333333] px-4 py-2 rounded-[15px] w-[175px] h-[50px]">Log in</button>
                </div>
            </div>
        </header>
    )
}