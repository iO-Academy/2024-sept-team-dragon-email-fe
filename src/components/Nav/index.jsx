import MenuButton from "../MenuButton"

function Nav() {
    return (
        <header className="flex md:w-full justify-between items-center
         p-4 gap-4
         font-bold text-xl bg-slate-500 text-white">
            <div className="flex md:flex-row justify-between items-center gap-4">
                <MenuButton />
                <h1>Email Client</h1>
            </div>
            <div>
                <p>User Name</p>
            </div>
        </header>
    )
}

export default Nav