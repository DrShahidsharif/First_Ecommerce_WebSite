import Image from "next/image";

function Hero () {
    return (
        <div>
          <div className="flex bg-red-50 mt-16 w-full h-[764x]">
            <div>
                 <Image src={"/images/image32.png"} alt="" layout="responsive" width={387} height={387} />
            </div>
            <div className="mt-8 md:mt-16 lg:mt-24 w-full md:w-1/2 lg:w-2/3" >
                <p className="text-lg md:text-xl lg:text-2xl text-red-700 w-[280px] h-[28px] ">Best Furniture For Your Castle....</p>
                <h1 className="mt-8 md:mt-16 lg:mt-24 text-3xl md:text-4xl lg:text-5xl font-bold w-full md:w-2/3 h-[140px] ">
                    THE FURNITURE PARLOR
                </h1>
                <p className="text-md md:text-lg lg:text-2xl mt-4 md:mt-8 lg:mt-16 w-full md:w-1/2 lg:w-2/3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                in phasellus non in justo.</p>
            <button className=" bg-[#FB2E86] md:mt-8 lg:mt-16 text-white text-md md:text-lg lg:text-xl mt-4 w-full md:w-1/2 lg:w-1/3 h-[50px]">Shop Now</button>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 h-[689px] mt-8 md:mt-16 lg:mt-24">
                <div className="">
                 <Image src={"/images/Pink_SofaLiving_Room1.png"} alt="" layout="responsive" width={629} height={629} />
            </div>
            </div>
        </div>
</div>

    )
};
export default Hero