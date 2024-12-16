import Image from "next/image";

function ShopLeftSidebar () {
    return (
        <div className="w-[1920px] h-[2108px] ">
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
<div className="flex mt-[100px] w-[1920px] h-[386px] ml-[383px]">
    <div>
        <div>
            <div>
                <h1 className="text-[20px] font-bold ">Product Brand</h1>
            </div>
            <div className="flex mt-[15px]">
                <div className="mt-[7px] w-[10px] h-[10px]">
                    <Image src={"/images/Vector_1.png"} alt="" width={24} height={24}/>
                </div >
                <div className="ml-[9px] text-[16px]">
                    <p>Coaster Furniture</p>
                </div>    
            </div>
            <div className="flex mt-[15px]">
                <div className="mt-[7px] w-[10px] h-[10px]">
                    <Image src={"/images/Vector_1.png"} alt="" width={24} height={24}/>
                </div >
                <div className="ml-[9px] text-[16px]">
                    <p>Fusion Dot High Fashion</p>
                </div>    
            </div>
            <div className="flex mt-[15px]">
                <div className="mt-[7px] w-[10px] h-[10px]">
                    <Image src={"/images/Vector_1.png"} alt="" width={24} height={24}/>
                </div >
                <div className="ml-[9px] text-[16px]">
                    <p>Unique Furnitture Restor</p>
                </div>    
            </div>
            <div className="flex mt-[15px]">
                <div className="mt-[7px] w-[10px] h-[10px]">
                    <Image src={"/images/Vector_1.png"} alt="" width={24} height={24}/>
                </div >
                <div className="ml-[9px] text-[16px]">
                    <p>Dream Furnitture Flipping</p>
                </div>    
            </div>
            <div className="flex mt-[15px]">
                <div className="mt-[7px] w-[10px] h-[10px]">
                    <Image src={"/images/Vector_1.png"} alt="" width={24} height={24}/>
                </div >
                <div className="ml-[9px] text-[16px]">
                    <p>Young Repurposed</p>
                </div>    
            </div>
            <div className="flex mt-[15px]">
                <div className="mt-[7px] w-[10px] h-[10px]">
                    <Image src={"/images/Vector_1.png"} alt="" width={24} height={24}/>
                </div >
                <div className="ml-[9px] text-[16px]">
                    <p>Green DIY furniture</p>
                </div>    
            </div>
{/* Heading 2 */}
    <div className="text-[20px] font-bold mt-[70px] ">
            <h1 >Discount Offer</h1>
            </div>
            <div className="flex mt-[15px]">
                <div className="mt-[7px] w-[10px] h-[10px]">
                    <Image src={"/images/Vector_1.png"} alt="" width={24} height={24}/>
                </div >
                <div className="ml-[9px] text-[16px]">
                    <p>20% Cashback</p>
                </div>    
            </div>
            <div className="flex mt-[15px]">
                <div className="mt-[7px] w-[10px] h-[10px]">
                    <Image src={"/images/Vector_1.png"} alt="" width={24} height={24}/>
                </div >
                <div className="ml-[9px] text-[16px]">
                    <p>5% Cashback Offer</p>
                </div>    
            </div>
            <div className="flex mt-[15px]">
                <div className="mt-[7px] w-[10px] h-[10px]">
                    <Image src={"/images/Vector_1.png"} alt="" width={24} height={24}/>
                </div >
                <div className="ml-[9px] text-[16px]">
                    <p>25% Discount Offer</p>
                </div>    
            </div>
    </div>
</div>
{/* Picture 1 */}
    <div className="w-[921px] h-[230px]">
        <div className="flex">
            <div className="w-[284px] h-[197px] mt-[16px] ml-[25px]">
                <Image src="/images/Rectangle_1.png" alt="background image" width={313} height={217} />
            </div>
            <div className="ml-[32px]">
                <div className="flex gap-[18px] mt-[33.8px]">
                    <h1 className="font-bold text-[19.88px] ">Dictum morbi</h1>
            <div className="mt-[12px]">
                <Image src={"/images/7.png"} alt="" width={40} height={40} />
            </div>
        </div>
        <div className="flex  gap-[9.94px] mt-[14.23px]">
            <p className="text-[14px]  ">$26.00</p>
            <p className="text-[14px]  text-[#FB2E86] mr-[17.67px]">$52.00</p>
            <Image src={"/images/star.png"} alt="" width={13.25} height={13.25} />
            <Image src={"/images/star.png"} alt="" width={13.25} height={13.25} />
            <Image src={"/images/star.png"} alt="" width={13.25} height={13.25} />
            <Image src={"/images/star.png"} alt="" width={13.25} height={13.25} />
            <Image src={"/images/star.png"} alt="" width={13.25} height={13.25} />
        </div>
        <div className="mt-[11.04]">
            <p className="w-[591.93px] h-[46.38px] text-[17.67px] text-[#9295AA] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
        </div>
        <div className="flex gap-[37.73px] w-[144.67px] h-[20.23px] mt-[30px] bg-white full-rounded">
            <Image src={"/images/fluent_cart_24_.png"} alt="" width={20.98} height={20.98}/>
            <Image src={"/images/uil_heart.png"} alt="" width={19.88} height={19.88}/>
            <Image src={"/images/uil_search_plus1.png"} alt="" width={14.72} height={14.73}/>
        </div>
    </div>
</div>
    {/* Picture 2 */}
<div className="flex">
            <div className="w-[284px] h-[197px] mt-[16px] ml-[25px]">
                <Image src="/images/Rectangle_2.png" alt="background image" width={313} height={217} />
            </div>
            <div className="ml-[32px]">
                <div className="flex gap-[18px] mt-[33.8px]">
                    <h1 className="font-bold text-[19.88px] ">Sodales sit</h1>
            <div className="mt-[12px]">
                <Image src={"/images/7.png"} alt="" width={40} height={40} />
            </div>
        </div>
        <div className="flex  gap-[9.94px] mt-[14.23px]">
            <p className="text-[14px]  ">$26.00</p>
            <p className="text-[14px]  text-[#FB2E86] mr-[17.67px]">$52.00</p>
            <Image src={"/images/star.png"} alt="" width={13.25} height={13.25} />
            <Image src={"/images/star.png"} alt="" width={13.25} height={13.25} />
            <Image src={"/images/star.png"} alt="" width={13.25} height={13.25} />
            <Image src={"/images/star.png"} alt="" width={13.25} height={13.25} />
            <Image src={"/images/star.png"} alt="" width={13.25} height={13.25} />
        </div>
        <div className="mt-[11.04]">
            <p className="w-[591.93px] h-[46.38px] text-[17.67px] text-[#9295AA] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
        </div>
        <div className="flex gap-[37.73px] w-[144.67px] h-[20.23px] mt-[30px] bg-white full-rounded">
            <Image src={"/images/fluent_cart_24_.png"} alt="" width={20.98} height={20.98}/>
            <Image src={"/images/uil_heart.png"} alt="" width={19.88} height={19.88}/>
            <Image src={"/images/uil_search_plus1.png"} alt="" width={14.72} height={14.73}/>
        </div>
        </div>
    </div>
    {/* Picture 3 */}
    <div className="flex">
            <div className="w-[284px] h-[197px] mt-[16px] ml-[25px]">
                <Image src="/images/Rectangle_3.png" alt="background image" width={313} height={217} />
            </div>
            <div className="ml-[32px]">
                <div className="flex gap-[18px] mt-[33.8px]">
                    <h1 className="font-bold text-[19.88px] ">Nibh varius</h1>
            <div className="mt-[12px]">
                <Image src={"/images/7.png"} alt="" width={40} height={40} />
            </div>
        </div>
        <div className="flex  gap-[9.94px] mt-[14.23px]">
            <p className="text-[14px]  ">$26.00</p>
            <p className="text-[14px]  text-[#FB2E86] mr-[17.67px]">$52.00</p>
            <Image src={"/images/star.png"} alt="" width={13.25} height={13.25} />
            <Image src={"/images/star.png"} alt="" width={13.25} height={13.25} />
            <Image src={"/images/star.png"} alt="" width={13.25} height={13.25} />
            <Image src={"/images/star.png"} alt="" width={13.25} height={13.25} />
            <Image src={"/images/star.png"} alt="" width={13.25} height={13.25} />
        </div>
        <div className="mt-[11.04]">
            <p className="w-[591.93px] h-[46.38px] text-[17.67px] text-[#9295AA] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
        </div>
        <div className="flex gap-[37.73px] w-[144.67px] h-[20.23px] mt-[30px] bg-white full-rounded">
            <Image src={"/images/fluent_cart_24_.png"} alt="" width={20.98} height={20.98}/>
            <Image src={"/images/uil_heart.png"} alt="" width={19.88} height={19.88}/>
            <Image src={"/images/uil_search_plus1.png"} alt="" width={14.72} height={14.73}/>
        </div>
        </div>
    </div>
    {/* Picture 4 */}
    <div className="flex">
            <div className="w-[284px] h-[197px] mt-[16px] ml-[25px]">
                <Image src="/images/Rectangle_4.png" alt="background image" width={313} height={217} />
            </div>
            <div className="ml-[32px]">
                <div className="flex gap-[18px] mt-[33.8px]">
                    <h1 className="font-bold text-[19.88px] ">Mauris quis</h1>
            <div className="mt-[12px]">
                <Image src={"/images/7.png"} alt="" width={40} height={40} />
            </div>
        </div>
        <div className="flex  gap-[9.94px] mt-[14.23px]">
            <p className="text-[14px]  ">$26.00</p>
            <p className="text-[14px]  text-[#FB2E86] mr-[17.67px]">$52.00</p>
            <Image src={"/images/star.png"} alt="" width={13.25} height={13.25} />
            <Image src={"/images/star.png"} alt="" width={13.25} height={13.25} />
            <Image src={"/images/star.png"} alt="" width={13.25} height={13.25} />
            <Image src={"/images/star.png"} alt="" width={13.25} height={13.25} />
            <Image src={"/images/star.png"} alt="" width={13.25} height={13.25} />
        </div>
        <div className="mt-[11.04]">
            <p className="w-[591.93px] h-[46.38px] text-[17.67px] text-[#9295AA] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
        </div>
        <div className="flex gap-[37.73px] w-[144.67px] h-[20.23px] mt-[30px] bg-white full-rounded">
            <Image src={"/images/fluent_cart_24_.png"} alt="" width={20.98} height={20.98}/>
            <Image src={"/images/uil_heart.png"} alt="" width={19.88} height={19.88}/>
            <Image src={"/images/uil_search_plus1.png"} alt="" width={14.72} height={14.73}/>
        </div>
        </div>
    </div>
    {/* Picture 5 */}
    <div className="flex">
            <div className="w-[284px] h-[197px] mt-[16px] ml-[25px]">
                <Image src="/images/Rectangle_5.png" alt="background image" width={313} height={217} />
            </div>
            <div className="ml-[32px]">
                <div className="flex gap-[18px] mt-[33.8px]">
                    <h1 className="font-bold text-[19.88px] ">Morbi sagittis</h1>
            <div className="mt-[12px]">
                <Image src={"/images/7.png"} alt="" width={40} height={40} />
            </div>
        </div>
        <div className="flex  gap-[9.94px] mt-[14.23px]">
            <p className="text-[14px]  ">$26.00</p>
            <p className="text-[14px]  text-[#FB2E86] mr-[17.67px]">$52.00</p>
            <Image src={"/images/star.png"} alt="" width={13.25} height={13.25} />
            <Image src={"/images/star.png"} alt="" width={13.25} height={13.25} />
            <Image src={"/images/star.png"} alt="" width={13.25} height={13.25} />
            <Image src={"/images/star.png"} alt="" width={13.25} height={13.25} />
            <Image src={"/images/star.png"} alt="" width={13.25} height={13.25} />
        </div>
        <div className="mt-[11.04]">
            <p className="w-[591.93px] h-[46.38px] text-[17.67px] text-[#9295AA] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
        </div>
        <div className="flex gap-[37.73px] w-[144.67px] h-[20.23px] mt-[30px] bg-white full-rounded">
            <Image src={"/images/fluent_cart_24_.png"} alt="" width={20.98} height={20.98}/>
            <Image src={"/images/uil_heart.png"} alt="" width={19.88} height={19.88}/>
            <Image src={"/images/uil_search_plus1.png"} alt="" width={14.72} height={14.73}/>
        </div>
        </div>
    </div>
    {/* Picture 6 */}
    <div className="flex">
            <div className="w-[284px] h-[197px] mt-[16px] ml-[25px]">
                <Image src="/images/Rectangle_6.png" alt="background image" width={313} height={217} />
            </div>
            <div className="ml-[32px]">
                <div className="flex gap-[18px] mt-[33.8px]">
                    <h1 className="font-bold text-[19.88px] ">Ultricies venenatis</h1>
            <div className="mt-[12px]">
                <Image src={"/images/7.png"} alt="" width={40} height={40} />
            </div>
        </div>
        <div className="flex  gap-[9.94px] mt-[14.23px]">
            <p className="text-[14px]  ">$26.00</p>
            <p className="text-[14px]  text-[#FB2E86] mr-[17.67px]">$52.00</p>
            <Image src={"/images/star.png"} alt="" width={13.25} height={13.25} />
            <Image src={"/images/star.png"} alt="" width={13.25} height={13.25} />
            <Image src={"/images/star.png"} alt="" width={13.25} height={13.25} />
            <Image src={"/images/star.png"} alt="" width={13.25} height={13.25} />
            <Image src={"/images/star.png"} alt="" width={13.25} height={13.25} />
        </div>
        <div className="mt-[11.04]">
            <p className="w-[591.93px] h-[46.38px] text-[17.67px] text-[#9295AA] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
        </div>
        <div className="flex gap-[37.73px] w-[144.67px] h-[20.23px] mt-[30px] bg-white full-rounded">
            <Image src={"/images/fluent_cart_24_.png"} alt="" width={20.98} height={20.98}/>
            <Image src={"/images/uil_heart.png"} alt="" width={19.88} height={19.88}/>
            <Image src={"/images/uil_search_plus1.png"} alt="" width={14.72} height={14.73}/>
        </div>
        </div>
    </div>
    {/* Picture 7 */}
    <div className="flex">
            <div className="w-[284px] h-[197px] mt-[16px] ml-[25px]">
                <Image src="/images/Rectangle_7.png" alt="background image" width={313} height={217} />
            </div>
            <div className="ml-[32px]">
                <div className="flex gap-[18px] mt-[33.8px]">
                    <h1 className="font-bold text-[19.88px] ">Scelerisque dignissim</h1>
            <div className="mt-[12px]">
                <Image src={"/images/7.png"} alt="" width={40} height={40} />
            </div>
        </div>
        <div className="flex  gap-[9.94px] mt-[14.23px]">
            <p className="text-[14px]  ">$26.00</p>
            <p className="text-[14px]  text-[#FB2E86] mr-[17.67px]">$52.00</p>
            <Image src={"/images/star.png"} alt="" width={13.25} height={13.25} />
            <Image src={"/images/star.png"} alt="" width={13.25} height={13.25} />
            <Image src={"/images/star.png"} alt="" width={13.25} height={13.25} />
            <Image src={"/images/star.png"} alt="" width={13.25} height={13.25} />
            <Image src={"/images/star.png"} alt="" width={13.25} height={13.25} />
        </div>
        <div className="mt-[11.04]">
            <p className="w-[591.93px] h-[46.38px] text-[17.67px] text-[#9295AA] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
        </div>
        <div className="flex gap-[37.73px] w-[144.67px] h-[20.23px] mt-[30px] bg-white full-rounded">
            <Image src={"/images/fluent_cart_24_.png"} alt="" width={20.98} height={20.98}/>
            <Image src={"/images/uil_heart.png"} alt="" width={19.88} height={19.88}/>
            <Image src={"/images/uil_search_plus1.png"} alt="" width={14.72} height={14.73}/>
        </div>
        </div>
    </div>
    </div>
</div>
</div>
</div>
    )
};
export default ShopLeftSidebar