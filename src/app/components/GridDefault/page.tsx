import Image from "next/image";

function GridDefault () {
    return (
        <div className="w-[1920px] h-[2108px] ">
           <div className="flex mt-[19px] w-[1920px] h-[386px] bg-[#F6F5FF]">

            <div className="mt-[96px] ml-[374px]" >
                <h1 className="text-[36px] font-bold w-[314px] h-[36px] ">
                    Shop Grid Default
                </h1>
                <div className="flex text-[16px]">
                    <p className=" mt-[9px]  w-[105px] h-[28px] ">Home . Pages </p>
                    <button className="mt-[9px] text-red-700  ">Shop Grid Default </button>
                </div>
            </div>
        </div>
<div className="w-[1171px] h-[44px] ml-[374px] ">
    <div className="flex mt-[124px]">
        <div>
            <h1 className="w-[317px] h-[23px] text-[18px]  font-bold">Ecommerce Acceories & Fashion item </h1>
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
<section className="flex w-[1920px] h-[361px] mt-[144px]  ">
{/*Chair 1 */}
    <div className="w-[270px] h-[363px]  ml-[376px]">
        <div className="bg-gray-100 flex justify-center items-center w-[270px] h-[280px]">
             <Image src={"/images/3.png"} alt="" width={201} height={201} />
        </div>
        <div className="justify-items-center bg-gray-50">
            <p className="text-[18px] font-bold mb-6 text-red-600">Vel elit euismod</p>
             <Image src={"/images/7.png"} alt="" width={65} height={65} />
        </div>
        <div className="flex justify-center items-center gap-3 mt-[6px]">
            <p className="text-[14px]  ">$26.00</p>
            <p className="text-[14px]  text-[#FB2E86]">$42.00</p>
        </div> 
    </div>
{/*Chair 2 */}
<div className="w-[270px] h-[363px] ml-[47px]   ">
    <div className="flex justify-center items-center bg-[#EBF4F3]">
        <div>     
            <div className="justify-items-center mt-[104px] ml-[11px]">
                <Image src={"/images/fluent_cart_24_.png"} alt="" width={19} height={19} className="mt-16"/> 
                <Image src={"/images/uil_heart.png"} alt="" width={17} height={17} className="my-[15px] " />
                <Image src={"/images/uil_search_plus1.png"} alt="" width={15} height={15} />
            </div>
        </div>
            <div className="bg-gray-100 flex justify-center items-center w-[270px] h-[280px]">
                <Image src={"/images/4.png"} alt="" width={169} height={169} />
             </div>
        </div>
                <div className="justify-items-center bg-gray-50">
            <p className="text-[18px] font-bold mb-6 text-red-600">Vel elit euismod</p>
             <Image src={"/images/7.png"} alt="" width={65} height={65} />
        </div>
        <div className="flex justify-center items-center gap-3 mt-[6px]">
            <p className="text-[14px]  ">$26.00</p>
            <p className="text-[14px]  text-[#FB2E86]">$42.00</p>
        </div>
    </div>
    {/*Chair 3 */}
    <div className="w-[270px] h-[363px] ml-[47px]">
        <div className="bg-gray-100 flex justify-center items-center w-[270px] h-[280px]">
             <Image src={"/images/5.png"} alt="" width={201} height={201} />
        </div>
        <div className="justify-items-center bg-gray-50">
            <p className="text-[18px] font-bold mb-6 text-red-600">Vitae suspendisse sed</p>
             <Image src={"/images/7.png"} alt="" width={65} height={65} />
        </div>
        <div className="flex justify-center items-center gap-3 mt-[6px]">
            <p className="text-[14px]  ">$26.00</p>
            <p className="text-[14px]  text-[#FB2E86]">$42.00</p>
        </div>
    </div>
        {/*Chair 4 */}
    <div className="w-[270px] h-[363px] ml-[47px]">
        <div className="bg-gray-100 flex justify-center items-center w-[270px] h-[280px]">
             <Image src={"/images/6.png"} alt="" width={188} height={188} />
        </div>
        <div className="justify-items-center bg-gray-50">
            <p className="text-[18px] font-bold mb-6 text-red-600">Sed at fermentum</p>
             <Image src={"/images/7.png"} alt="" width={65} height={65} />
        </div>
        <div className="flex justify-center items-center gap-3 mt-[6px]">
            <p className="text-[14px]  ">$26.00</p>
            <p className="text-[14px]  text-[#FB2E86]">$42.00</p>
        </div>
    </div>
</section>
{/* Raw Two */}
<section className="flex w-[1920px] h-[361px] mt-[81px]">
{/*Chair 1 */}
    <div className="w-[270px] h-[363px] mt-[48px] ml-[376px]">
        <div className="bg-gray-100 flex justify-center items-center w-[270px] h-[280px]">
             <Image src={"/images/8.png"} alt="" width={128} height={139} />
        </div>
        <div className="justify-items-center bg-gray-50">
            <p className="text-[18px] font-bold mb-6 text-red-600">Fusce pellentesque at</p>
             <Image src={"/images/7.png"} alt="" width={65} height={65} />
        </div>
        <div className="flex justify-center items-center gap-3 mt-[6px]">
            <p className="text-[14px]  ">$26.00</p>
            <p className="text-[14px]  text-[#FB2E86]">$42.00</p>
        </div>
    </div>
{/*Chair 2 */}
    <div className="w-[270px] h-[363px] mt-[48px] ml-[47px]">
        <div className="bg-gray-100 flex justify-center items-center w-[270px] h-[280px]">
             <Image src={"/images/9.png"} alt="" width={114} height={144} />
        </div>
        <div className="justify-items-center bg-gray-50">
            <p className="text-[18px] font-bold mb-6 text-red-600">Vestibulum magna laoreet</p>
             <Image src={"/images/7.png"} alt="" width={65} height={65} />
        </div>
        <div className="flex justify-center items-center gap-3 mt-[6px]">
            <p className="text-[14px]  ">$26.00</p>
            <p className="text-[14px]  text-[#FB2E86]">$42.00</p>
        </div>
    </div>
    {/*Chair 3 */}
    <div className="w-[270px] h-[363px] mt-[48px] ml-[47px]">
        <div className="bg-gray-100 flex justify-center items-center w-[270px] h-[280px]">
             <Image src={"/images/10.png"} alt="" width={114} height={144} />
        </div>
        <div className="justify-items-center bg-gray-50">
            <p className="text-[18px] font-bold mb-6 text-red-600">Sollicitudin amet orci</p>
             <Image src={"/images/7.png"} alt="" width={65} height={65} />
        </div>
        <div className="flex justify-center items-center gap-3 mt-[6px]">
            <p className="text-[14px]  ">$26.00</p>
            <p className="text-[14px]  text-[#FB2E86]">$42.00</p>
        </div>
    </div>
        {/*Chair 4 */}
    <div className="w-[270px] h-[363px] mt-[48px] ml-[47px]">
        <div className="bg-gray-100 flex justify-center items-center w-[270px] h-[280px]">
             <Image src={"/images/11.png"} alt="" width={167} height={167} />
        </div>
        <div className="justify-items-center bg-gray-50">
            <p className="text-[18px] font-bold mb-6 text-red-600">Ultrices mauris sit</p>
             <Image src={"/images/7.png"} alt="" width={65} height={65} />
        </div>
        <div className="flex justify-center items-center gap-3 mt-[6px]">
            <p className="text-[14px]  ">$26.00</p>
            <p className="text-[14px]  text-[#FB2E86]">$42.00</p>
        </div>
    </div>
</section>
{/* Raw Thiree */}
<section className="flex w-[1920px] h-[361px] mt-[81px]">
{/*Chair 1 */}
    <div className="w-[270px] h-[363px] mt-[48px] ml-[376px]">
        <div className="bg-gray-100 flex justify-center items-center w-[270px] h-[280px]">
             <Image src={"/images/8.png"} alt="" width={128} height={139} />
        </div>
        <div className="justify-items-center bg-gray-50">
            <p className="text-[18px] font-bold mb-6 text-red-600">Pellentesque condimentum ac</p>
             <Image src={"/images/7.png"} alt="" width={65} height={65} />
        </div>
        <div className="flex justify-center items-center gap-3 mt-[6px]">
            <p className="text-[14px]  ">$26.00</p>
            <p className="text-[14px]  text-[#FB2E86]">$42.00</p>
        </div>
    </div>
{/*Chair 2 */}
    <div className="w-[270px] h-[363px] mt-[48px] ml-[47px]">
        <div className="bg-gray-100 flex justify-center items-center w-[270px] h-[280px]">
             <Image src={"/images/9.png"} alt="" width={114} height={144} />
        </div>
        <div className="justify-items-center bg-gray-50">
            <p className="text-[18px] font-bold mb-6 text-red-600">Cras scelerisque velit</p>
             <Image src={"/images/7.png"} alt="" width={65} height={65} />
        </div>
        <div className="flex justify-center items-center gap-3 mt-[6px]">
            <p className="text-[14px]  ">$26.00</p>
            <p className="text-[14px]  text-[#FB2E86]">$42.00</p>
        </div>
    </div>
    {/*Chair 3 */}
    <div className="w-[270px] h-[363px] mt-[48px] ml-[47px]">
        <div className="bg-gray-100 flex justify-center items-center w-[270px] h-[280px]">
             <Image src={"/images/10.png"} alt="" width={114} height={144} />
        </div>
        <div className="justify-items-center bg-gray-50">
            <p className="text-[18px] font-bold mb-6 text-red-600">Lectus vulputate faucibus</p>
             <Image src={"/images/7.png"} alt="" width={65} height={65} />
        </div>
        <div className="flex justify-center items-center gap-3 mt-[6px]">
            <p className="text-[14px]  ">$26.00</p>
            <p className="text-[14px]  text-[#FB2E86]">$42.00</p>
        </div>
    </div>
        {/*Chair 4 */}
    <div className="w-[270px] h-[363px] mt-[48px] ml-[47px]">
        <div className="bg-gray-100 flex justify-center items-center w-[270px] h-[280px]">
             <Image src={"/images/11.png"} alt="" width={167} height={167} />
        </div>
        <div className="justify-items-center bg-gray-50">
            <p className="text-[18px] font-bold mb-6 text-red-600">Purus risus, ut</p>
             <Image src={"/images/7.png"} alt="" width={65} height={65} />
        </div>
        <div className="flex justify-center items-center gap-3 mt-[6px]">
            <p className="text-[14px]  ">$26.00</p>
            <p className="text-[14px]  text-[#FB2E86]">$42.00</p>
        </div>
    </div>
</section>
    <div className="mt-[96px] flex justify-center">
     <Image src="/images/image1174.png" alt="background image" width={904} height={93} />
    </div>
</div>
    )
};
export default GridDefault