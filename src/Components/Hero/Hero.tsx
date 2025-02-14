function Hero() {
    return (
      <>
        <div className="w-auto pt-48 pb-12 px-6 font-effra text-white bg-black bg-hero-bg bg-cover">
          <div className="max-w-[700px] mx-auto text-center">{/*Hero Content*/}
            <h1 className="font-extrabold text-6xl">Minimize your tabs.</h1>
            <h1 className="font-extrabold text-6xl">Find the trends!</h1>
            <p className="text-lg text-[#8B8B8B] mt-6">Don’t let your computer memories consumes all of those browser tabs.<br/>
            Findtrend  let you gathers all of your favorite website into one place.</p>
            
            <div className="mb-20 mt-10 flex justify-center ml-10 mr-[-92px]">
              <button className="px-8 py-4 mt-4 my-4 font-bold text-black bg-[#A8FF35] rounded-full">Get Started 🔥</button>
              <img className="h-20 mt-[-8px] ml-4" src="../src/assets/img/img-hero.svg" alt="" />
            </div>
           </div>
           <img className="h-44 mx-auto" src="../src/assets/img/hero-socmed.svg" alt="" />

        </div>
      </>
    )
  }
  
  export default Hero