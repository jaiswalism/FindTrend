function Navbar() {
    return (
      <>
      <div className="w-full bg-black">
        <div className="max-w-7xl w-10/12 h-[99px] left-0 right-0 mx-auto flex flex-row justify-between items-center font-effra text-lg absolute text-white">
          <div className="h-min">
            <img src="./logo.png" alt="Logo" />
          </div>
          <div>
            <ul className="flex flex-row gap-10">
              <li>About</li>
              <li>How it work</li>
              <li>Pricing</li>
              <li>Solutions</li>
              <li>Features</li>
            </ul>
          </div>
          <div>
            <a className="mr-10" href="#">Login</a>
            <a className="px-8 py-3 text-black bg-white rounded-full" href="#">Register</a>
          </div>
        </div>
        </div>
      </>
    )
  }
  
  export default Navbar