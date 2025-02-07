import Image from "next/image";

function ProductDetails () {
    return (
        <div className="w-[1920px] h-[2760px] ">
            <div>
           <div className="flex mt-[19px] w-[1920px] h-[386px] bg-[#F6F5FF]">

            <div className="mt-[96px] ml-[374px]" >
                <h1 className="text-[36px] font-bold w-[314px] h-[36px] ">
                    Shop Left Sidebar
                </h1>
                <div className="flex text-[16px]">
                    <p className=" mt-[9px]  w-[105px] h-[28px] ">Home . Pages </p>
                    <button className="mt-[9px] text-red-700  ">Shop Left Sidebar</button>
                </div>
            </div>
        </div>
<div className="w-[1171px] h-[44px] ml-[374px] ">
    <div className="flex mt-[124px]">
        <div>
            <h1 className="w-[389px] h-[23px] text-[22px]  font-bold">Ecommerce Acceories & Fashion item </h1>
            <p className="w-[183px] h-[14px] text-[12px] mt-[7px] text-[#8A8FB9]">About 9,620 results (0.62 seconds)</p>
        </div>
        <div className="flex ml-[180px] ">
            <p className="mt-[5px]">Per Page:</p>
            <div className=" w-[55px] h-[25px] mt-2 border">
            </div>
        </div>
        <div className="flex ml-[27px] ">
            <p className="mt-[5px]">Sort By:</p>
            <div className=" w-[65px] h-[25px] mt-2 border text-[#8A8FB9] text-[12px] ">
                <input placeholder="Best Match " /> 
            </div>
        </div>
        <div className="flex ml-[27px] ">
            <p className="mt-[5px]">View:</p>
            <Image src={"/images/1.png"} alt="" width={12} height={10} className="ml-[5px]"/>
            <Image src={"/images/2.png"} alt="" width={12} height={10} className="ml-[5px]"/>
            <div className=" ml-[27px] w-[162px] h-[30px] mt-2 border text-[#8A8FB9] text-[12px] ">
                <input placeholder=" " /> 
            </div>
        </div>
    </div>
</div>
{/* Side Bar */}

</div>
    <div className="mt-[1600px] flex justify-center">
     <Image src="/images/image1174.png" alt="background image" width={904} height={93} />
    </div>
</div>

    )
};
export default ProductDetails