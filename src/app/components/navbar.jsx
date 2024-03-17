const Navbar = () => {
    return (
        <>
            {/* mobile display */}
            <div className="navbar bg-transparent md:hidden">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow shadow-white bg-accent rounded-box w-52">
                        <li><a className="hover:text-secondary">Homepage</a></li>
                        <li><a className="hover:text-secondary">Portfolio</a></li>
                        <li><a className="hover:text-secondary">Blog</a></li>
                        <li><a className="hover:text-secondary">Contact</a></li>
                    </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <a className="btn btn-ghost text-xl">Rio Sofhaniel Bush</a>
                </div>
                <div className="navbar-end"></div>
            </div>

            {/* pc display  */}
            <div className="navbar bg-transparent hidden md:block">
                <div>
                    <a className="btn btn-ghost text-xl mr-8 hover:text-secondary">Home</a>
                    <a className="btn btn-ghost text-xl mr-8 hover:text-secondary">Portofolio</a>
                    <a className="btn btn-ghost text-xl mr-8 hover:text-secondary">Blog</a>
                    <a className="btn btn-ghost text-xl mr-8 hover:text-secondary">Contact</a>
                </div>
            </div>
        </>
    )
}

export default Navbar