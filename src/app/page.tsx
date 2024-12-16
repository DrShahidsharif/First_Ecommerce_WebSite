import Image from "next/image";
import Link from "next/link"

export default function Home() {
    return(
        <div className="w-[1920px] h-[7263px] mt-[19px] bg-gray-50">
        <div className="flex bg-red-50 mt-[19px] w-[1920px] h-[764x]">
            <div>
                 <Image src={"/images/image32.png"} alt="" width={387} height={387} />
            </div>
            <div className="mt-[203px]" >
                <p className="text-[20px] text-red-700 w-[280px] h-[28px] ">Best Furniture For Your Castle....</p>
                <h1 className="text-[53px] font-bold w-[644px] h-[140px] ">
                    New Furniture Collection
                    Trends in 2020
                </h1>
                <p className="text-[16] w-[570px] h-[56px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                in phasellus non in justo.</p>
            <button className=" bg-[#FB2E86]  text-white text-[17] mt-8 w-[163px] h-[50px]">Shop Now</button>
            </div>
            <div className="w-[706px] h-[689px] mt-40">
                <div className="">
                 <Image src={"/images/Pink_SofaLiving_Room1.png"} alt="" width={629} height={629} />
            </div>
            </div>
        </div>
{/* Feature Products */}
<div className="w-[1920px] mt-[129px] text-[35px] font-semibold flex justify-center">
    <h1>Featured Products</h1>
</div>
<section className="flex w-[1920px] h-[361] ">
{/*Chair 1 */}
    <div className="w-[270px] h-[261px] mt-[48px] ml-[376px]">
        <div className="bg-gray-100 justify-items-center">
             <Image src={"/images/image1168.png"} alt="" width={178} height={178} />
        </div>
        <div className="justify-items-center bg-gray-50">
            <p className="text-[18px] font-bold mb-6 text-red-600">Cantilever chair</p>
             <Image src={"/images/Group141.png"} alt="" width={65} height={65} />
             <p className="text-[14px] mt-6 text-blue-900">Code - Y523201</p>
             <p className="text-[14px] mt-6 text-blue-900">$42.00</p>
        </div>
    </div>
{/* Chair 2 */}
    <div className="w-[270px] h-[261px] ml-[29px] mt-[48px]">
         <div className="bg-gray-100 justify-items-center ">
             <Image src={"/images/image1.png"} alt="" width={130} height={150} />
             <div className="bg-green-500 w-[94px] h-[29px]">
                <p className="text-white">View Details</p>
             </div>
        </div>
        <div className="justify-items-center bg-blue-700">
            <p className="text-[18px] font-bold mb-6 text-white">Cantilever chair</p>
             <Image src={"/images/Group141.png"} alt="" width={65} height={65} />
             <p className="text-[14px] mt-6 text-white">Code - Y523201</p>
             <p className="text-[14px] mt-6 text-white">$42.00</p>
        </div>
    </div>
{/*Chair 3 */}
    <div className="w-[270px] h-[261px] mt-[48px] ml-[29px]">
        <div className="bg-gray-100 justify-items-center">
             <Image src={"/images/image1169.png"} alt="" width={178} height={178} />
        </div>
        <div className="justify-items-center bg-gray-50">
            <p className="text-[18px] font-bold mb-6 text-red-600">Cantilever chair</p>
             <Image src={"/images/Group141.png"} alt="" width={65} height={65} />
             <p className="text-[14px] mt-6 text-blue-900">Code - Y523201</p>
             <p className="text-[14px] mt-6 text-blue-900">$42.00</p>
        </div>
    </div>
{/*Chair 4 */}
    <div className="w-[270px] h-[361px] mt-[48px] ml-[29px]">
        <div className="bg-gray-100 justify-items-center">
             <Image src={"/images/image3.png"} alt="" width={216} height={151} />
        </div>
        <div className="justify-items-center bg-gray-50">
            <p className="text-[18px] font-bold mb-6 text-red-600">Cantilever chair</p>
             <Image src={"/images/Group141.png"} alt="" width={65} height={65} />
             <p className="text-[14px] mt-6 text-blue-900">Code - Y523201</p>
             <p className="text-[14px] mt-6 text-blue-900">$42.00</p>
        </div>
    </div>
</section>
{/* Latest Products */}
<div className="w-[1920px] mt-[129px] text-[35px] font-semibold flex justify-center">
    <h1>Latest Products</h1>
</div>
    <div>
        <ul className=" w-[1920px] flex justify-center  gap-x-12 text-[18px] mt-[19px] ml-[35px]">
                    <li className="text-red-500">
                        <Link href="/">New Arrival</Link>
                    </li>
                    <li>
                        <Link href="/">Best Seller</Link>
                    </li>
                    <li>
                        <Link href="/">Featured</Link>
                    </li>
                    <li>
                        <Link href="/">Special Offer</Link>
                    </li>
        </ul>
    </div>
{/* Raw one */}
<section className="flex w-[1920px] mt-[58px]">
{/*Chair 1 */}
    <div className="w-[360px] h-[306px] ml-[376px]">
        <div className="bg-gray-100 justify-items-center">
             <Image src={"/images/image1166.png"} alt="" width={223} height={229} />
        </div>
        <div className="flex gap-[99px] mt-[24px] bg-gray-50">
            <p className="text-[16px] font-bold mb-6 text-red-600">Comfort Handy Craft</p>
             <div className="flex gap-3">
             <p className="text-[14px]  text-blue-900">$42.00</p>
             <p className="text-[14px]  text-blue-900">$65.00</p>
             </div>
        </div>
    </div>
{/* Chair 2 */}
    <div className="w-[370px] h-[314px] ml-[37px] ">
        <div className="flex">
            <div>
            <div>
                <Image src={"/images/Group27.png"} alt="" width={85} height={57} />
            </div>
            <div className="justify-items-center">
                <Image src={"/images/fluent_cart_24_.png"} alt="" width={19} height={19} className="mt-16"/> 
                <Image src={"/images/uil_heart.png"} alt="" width={17} height={17} className="my-[15px] " />
                <Image src={"/images/uil_search_plus1.png"} alt="" width={15} height={15} />
            </div>
            </div>
            <div className="bg-gray-100 justify-items-center ">
                <Image src={"/images/image15.png"} alt="" width={230} height={230} />
             </div>
        </div>
        <div className="flex gap-[99px] mt-[24px] bg-gray-50">
            <p className="text-[16px] font-bold mb-6 text-red-600">Comfort Handy Craft</p>
             <div className="flex gap-3">
             <p className="text-[14px]  text-blue-900">$42.00</p>
             <p className="text-[14px]  text-blue-900">$65.00</p>
             </div>
        </div>
    </div>
{/*Chair 3 */}
    <div className="w-[360px] h-[314px] ml-[37px]">
        <div className="bg-gray-100 justify-items-center">
             <Image src={"/images/image1168.png"} alt="" width={222} height={222} />
        </div>
         <div className="flex gap-[99px] mt-[24px] bg-gray-50">
            <p className="text-[16px] font-bold mb-6 text-red-600">Comfort Handy Craft</p>
             <div className="flex gap-3">
             <p className="text-[14px]  text-blue-900">$42.00</p>
             <p className="text-[14px]  text-blue-900">$65.00</p>
             </div>
        </div>
    </div>
</section>
{/* Raw Two */}
<section className="flex w-[1920px] mt-[120px] ml-[58px] ">
{/*Chair 1 */}
    <div className="w-[365px] h-[306px] ml-[306px]">
        <div className="bg-gray-100 justify-items-center">
             <Image src={"/images/image23.png"} alt="" width={250} height={277} />
        </div>
        <div className="flex gap-[99px] mt-[24px] bg-gray-50">
            <p className="text-[16px] font-bold mb-6 text-red-600">Comfort Handy Craft</p>
             <div className="flex gap-3">
             <p className="text-[14px]  text-blue-900">$42.00</p>
             <p className="text-[14px]  text-blue-900">$65.00</p>
             </div>
        </div>
    </div>
{/* Chair 2 */}
    <div className="w-[365px] h-[306px] ml-[37px]">
        <div className="bg-gray-100 justify-items-center">
             <Image src={"/images/image32_3.png"} alt="" width={303} height={264} />
        </div>
         <div className="flex gap-[99px] mt-[24px] bg-gray-50">
            <p className="text-[16px] font-bold mb-6 text-red-600">Comfort Handy Craft</p>
             <div className="flex gap-3">
             <p className="text-[14px]  text-blue-900">$42.00</p>
             <p className="text-[14px]  text-blue-900">$65.00</p>
             </div>
        </div>
    </div>
{/*Chair 3 */}
    <div className="w-[365px] h-[306px] ml-[37px]">
        <div className="bg-gray-100 justify-items-center">
             <Image src={"/images/image3.png"} alt="" width={360} height={261} />
        </div>
         <div className="flex gap-[99px] mt-[24px] bg-gray-50">
            <p className="text-[16px] font-bold mb-6 text-red-600">Comfort Handy Craft</p>
             <div className="flex gap-3">
             <p className="text-[14px]  text-blue-900">$42.00</p>
             <p className="text-[14px]  text-blue-900">$65.00</p>
             </div>
        </div>
    </div>
</section>
{/* What Shopex Offer! */}
<div className="w-[1920px] mt-[58px] text-[42px] flex justify-center">
    <h1>What Shopex Offer!</h1>
</div>
<section className="flex w-[1920px] mt-[55px]">
{/* 1 */}
    <div className="w-[270px] h-[320px]  ml-[376px] bg-white">
        <div className=" place-items-center mt-[67px] ">
             <Image src={"/images/free_delivery1.png"} alt="" width={65} height={43} />
        </div>
        <div className="justify-items-center bg-gray-50">
            <h1 className="text-[22px] font-semibold mt-[27px] text-red-600">24/7 Support</h1>
             <p className="text-[16px] mt-[20px] mx-[27px] text-blue-900">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
        </div>
    </div>
{/* Chair 2 */}
    <div className="w-[270px] h-[320px] ml-[29px] bg-white">
         <div className=" place-items-center mt-[67px] ">
             <Image src={"/images/cashback1.png"} alt="" width={65} height={43} />
        </div>
        <div className="justify-items-center bg-gray-50">
            <h1 className="text-[22px] font-semibold mt-[22px] text-red-600">24/7 Support</h1>
             <p className="text-[16px] mt-[20px] mx-[27px] text-blue-900">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
        </div>
    </div>
{/*Chair 3 */}
    <div className="w-[270px] h-[320px] ml-[29px] bg-white">
        <div className=" place-items-center mt-[61px]">
             <Image src={"/images/premium_quality1.png"} alt="" width={49} height={65} />
        </div>
        <div className="justify-items-center bg-gray-50">
            <h1 className="text-[22px] font-semibold mt-[22px] text-red-600">24/7 Support</h1>
             <p className="text-[16px] mt-[20px] mx-[27px] text-blue-900">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
        </div>
    </div>
{/*Chair 4 */}
    <div className="w-[270px] h-[320px] ml-[29px] bg-white">
        <div className=" place-items-center mt-[61px] ">
             <Image src={"/images/Group.png"} alt="" width={65} height={65} />
        </div>
        <div className="justify-items-center bg-gray-50">
            <h1 className="text-[22px] font-semibold mt-[22px] text-red-600">24/7 Support</h1>
             <p className="text-[16px] mt-[20px] mx-[27px] text-blue-900">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
        </div>
    </div>
</section>
{/* Unique Features */}
<div className="flex bg-[#F1F0FF]  w-[1920px] h-[580x]">
<div className="w-[1050px] h-[550px] ml-[435px] flex">
            <div className="">
                <div className="">
                 <Image src={"/images/Home_Stylish.png"} alt="" width={509} height={550} />
                </div>
            </div>
            <div className="mt-[82px]" >
                <p className="text-[35px] font-semibold w-[507px] h-[92px] ">Unique Features Of leatest & Trending Poducts</p>
                <div className="text-[#ACABC3] flex mt-[22px] gap-[4px]">
                    <Image src={"/images/Ellipse65.png"} alt="" width={11} height={11} className=" mt-[6px] mr-[6px] w-[11px] h-[11px]"/>
                    <p className="text-[16] w-[570px] h-[56px]">All frames constructed with hardwood solids and laminates</p>
                </div>
                <div className="text-[#ACABC3] flex mt-[13px] gap-[4px]">
                    <Image src={"/images/Ellipse65.png"} alt="" width={11} height={11} className=" mt-[6px] mr-[6px] w-[11px] h-[11px]"/>
                    <p className="text-[16] w-[570px] h-[56px]">Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails</p>
                </div>
                <div className="text-[#ACABC3] flex mt-[13px] gap-[4px]">
                    <Image src={"/images/Ellipse65.png"} alt="" width={11} height={11} className=" mt-[6px] mr-[6px] w-[11px] h-[11px]"/>
                    <p className="text-[16] w-[570px] h-[56px]">All frames constructed with hardwood solids and laminates</p>
                </div>
                <div className="flex gap-[19px] mt-[23px]">
                    <button className=" bg-[#FB2E86]  text-white text-[17]  w-[163px] h-[50px]">Add to Cart</button>
                    <div className="">
                        <p>B&B Italian Sofa </p>
                        <p>$32.00</p>
                    </div>
                </div>
            </div>
</div>
        </div>
{/* Trending Products */}
<div className="w-[1920px] mt-[129px] text-[35px] font-semibold flex justify-center">
    <h1>Trending Products</h1>
</div>
<section className=" bg-white flex w-[1920px] h-[361px] ">
{/*Chair 1 */}
    <div className="w-[270px] h-[350px] mt-[48px] ml-[376px]">
        <div className="bg-gray-100 justify-items-center">
             <Image src={"/images/image1171.png"} alt="" width={227} height={224} />
        </div>
        <div className="justify-items-center mt-[15px] bg-gray-50">
            <p className="text-[16px] font-bold mb-6">Cantilever chair</p>
        <div className="w-[92px] h-[14px] mt-[8px]  flex justify-between">
            <p className="text-[14px] ">$26.00 </p>
            <p className="text-[14px] text-gray-400">$42.00</p>
        </div>
        </div>
    </div>
{/* Chair 2 */}
    <div className="w-[270px] h-[261px] ml-[29px] mt-[48px]">
         <div className="bg-gray-100 justify-items-center">
             <Image src={"/images/image1170.png"} alt="" width={227} height={224} />
        </div>
        <div className="justify-items-center mt-[15px] bg-gray-50">
            <p className="text-[16px] font-bold mb-6">Cantilever chair</p>
        <div className="w-[92px] h-[14px] mt-[8px]  flex justify-between">
            <p className="text-[14px] ">$26.00 </p>
            <p className="text-[14px] text-gray-400">$42.00</p>
        </div>
        </div>
    </div>
{/*Chair 3 */}
    <div className="w-[270px] h-[350px] mt-[48px] ml-[29px]">
        <div className="bg-gray-100 justify-items-center">
             <Image src={"/images/image31.png"} alt="" width={237} height={234} />
        </div>
        <div className="justify-items-center mt-[15px] bg-gray-50">
            <p className="text-[16px] font-bold mb-6">Cantilever chair</p>
        <div className="w-[92px] h-[14px] mt-[8px]  flex justify-between">
            <p className="text-[14px] ">$26.00 </p>
            <p className="text-[14px] text-gray-400">$42.00</p>
        </div>
        </div>
    </div>
{/*Chair 4 */}
    <div className="w-[270px] h-[350px] mt-[48px] ml-[29px]">
        <div className="bg-gray-100 justify-items-center">
             <Image src={"/images/image32_3.png"} alt="" width={267} height={264} />
        </div>
        <div className="justify-items-center mt-[15px] bg-gray-50">
            <p className="text-[16px] font-bold mb-6">Cantilever chair</p>
        <div className="w-[92px] h-[14px] mt-[8px]  flex justify-between">
            <p className="text-[14px] ">$26.00 </p>
            <p className="text-[14px] text-gray-400">$42.00</p>
        </div>
        </div>
    </div>
</section>
{/* Trending Raw 2 */}
<section className="flex mt-[39px] ml-[375px] ">
    <div className="bg-[#FFF6FB] w-[420px] h-[270px] ">
        <div className="  ml-[25px] ">
            <p className="text-[26px] mt-[34px] font-semibold">23% off in all products</p>
            <p className=" h-[1px] text-[16px] text-red-400 font-semibold">Shop Now</p>
        </div>
        <div className="ml-[201px] mt-[1px]">
            <Image src="/images/image1162.png" alt="" width={213} height={207} />
        </div>
    </div>
    <div className="bg-[#EEEFFB] ml-[29px] w-[420px] h-[270px] ">
        <div className="ml-[25px] ">
            <p className="text-[26px] mt-[34px] font-semibold">23% off in all products</p>
            <p className="text-[16px] text-red-400 font-semibold">View Collection</p>
        </div>
        <div className="ml-[102px] mt-[5px] ">
            <Image src="/images/image1161.png" alt="" width={312} height={173} />
        </div>
    </div>
    <div className="w-[267px] h-[74px] ml-[24px]">
        <div className="flex ">
            <div className=" bg-gray-200 ml-[21px]">
                <Image src="/images/image30.png" alt="" width={64} height={71} />
            </div>
            <div className="bg-white mt-[21px]">
                <p className="ml-[9px] text-[12px] font-semibold ">Executive Seat Chair</p>
                <p className="ml-[9px] text-[12px] font-semibold ">$32.00</p>
            </div>
        </div>
        <div className="flex mt-[20px]">
            <div className=" bg-gray-200 ml-[21px]">
                <Image src="/images/image19.png" alt="" width={64} height={71} />
            </div>
            <div className="bg-white mt-[21px] ml-[9px]">
                <p className="text-[12px] font-semibold ">Executive Seat Chair</p>
                <p className="text-[12px] font-semibold ">$32.00</p>
            </div>
        </div>
        <div className="flex mt-[20px]">
            <div className=" bg-gray-200 ml-[21px]">
                <Image src="/images/image28.png" alt="" width={64} height={71} />
            </div>
            <div className="bg-white mt-[21px] ml-[9px]">
                <p className="text-[12px] font-semibold ">Executive Seat Chair</p>
                <p className="text-[12px] font-semibold ">$32.00</p>
            </div>
        </div>
    </div>
</section>
{/* Discount Item */}
<div className="w-[1920px] mt-[126px] text-[35px] font-semibold flex justify-center">
    <h1>Discount Item</h1>
</div>
    <div>
        <ul className=" w-[1920px] flex justify-center  gap-x-12 text-[18px] mt-[33px] ml-[35px]">
                    <li className="text-red-500">
                        <Link href="/">Wood Chair</Link>
                    </li>
                    <li>
                        <Link href="/">Plastic Chair</Link>
                    </li>
                    <li>
                        <Link href="/">Sofa Collection</Link>
                    </li>
        </ul>
        <div className="flex">
            <div className="">
                <div>
                    <h1 className="mt-[140px] text-[35px] font-bold ml-[390px] ">20% Discount Of All Products</h1>
                    <p className="mt-[21px] text-[21px]  text-[#FB2E86] ml-[390px] ">Eams Sofa Compact</p>
                    <p className="w-[523px] h-[49px] mt-[20px] text-[17px]  text-[#B7BACB] ml-[390px] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</p>
                </div>
                <div className="flex ">
                <div className="flex w-[238px] h-[20px] mt-[20px] ml-[390px]">
                    <Image src="/images/Vector1.png" alt="" width={16} height={11} />
                    <p className=" text-[16px] ml-[8px] text-[#B7BACB] ">Material expose like metals</p>
                </div>
                <div className="flex w-[260px] h-[20px] mt-[20px] ml-[44px]">
                    <Image src="/images/Vector1.png" alt="" width={16} height={11} />          
                    <p className=" text-[16px] ml-[8px] text-[#B7BACB] ">Clear lines and geomatric figures</p>
                </div>
                </div>
                <div className="flex ">
                    <div className="flex w-[260px] h-[20px] mt-[20px] ml-[390px]">
                    <Image src="/images/Vector1.png" alt="" width={16} height={11} />
                    <p className=" text-[16px] ml-[8px] text-[#B7BACB] ">Simple neutral colours.</p>
                </div>
                    <div className="flex w-[260px] h-[20px] mt-[20px] ml-[22px]">
                    <Image src="/images/Vector1.png" alt="" width={16} height={11} />
                    <p className=" text-[16px] ml-[8px] text-[#B7BACB] ">Material expose like metals</p>
                </div>
                </div>
                <button className=" bg-[#FB2E86] ml-[390px] text-white text-[17px] mt-[37px] w-[163px] h-[50px]">Shop Now</button>
            </div>
            <div>
                <Image src="/images/discount_Sofa.png" alt="" width={699} height={597} />
            </div>
        </div>
    </div>
{/* Top Categories */}
<div className="w-[1920px] mt-[129px] text-[35px] font-semibold flex justify-center">
    <h1>Top Categories</h1>
</div>
<section className=" bg-white flex w-[1920px] h-[361px] ">
{/*Chair 1 */}
        <div className="w-[269px] h-[345px]  ml-[376px] mt-[48px] ">
            <div className="bg-gray-50 flex flex-col items-center justify-center w-[269px] h-[269px] rounded-full shadow-blue-600 shadow-lg">
                 <Image src={"/images/image20.png"} alt="" width={178} height={178}  />
         <div><button  className=" bg-[#08D15F]  text-white text-[12px] w-[94px] h-[29px]">View Shop</button></div>  
        </div>
        <div className="justify-items-center mt-[15px] bg-gray-50">
            <p className="text-[20px]">Mini LCW chair</p>
            <p className="text-[14px] ">$56.00 </p>
        </div>
    </div>
{/* Chair 2 */}
    <div className="w-[270px] h-[261px] ml-[29px] mt-[48px]">
         <div className="bg-gray-50 flex flex-col items-center justify-center w-[269px] h-[269px] rounded-full">
             <Image src={"/images/image1168.png"} alt="" width={158} height={157}  />
        </div>
        <div className="justify-items-center mt-[15px] bg-gray-50">
            <p className="text-[20px]">Mini LCW chair</p>
            <p className="text-[14px] ">$56.00 </p>
        </div>
    </div>
{/*Chair 3 */}
    <div className="w-[270px] h-[261px] ml-[29px] mt-[48px]">
         <div className="bg-gray-50 flex flex-col items-center justify-center w-[269px] h-[269px] rounded-full">
             <Image src={"/images/image1171.png"} alt="" width={158} height={157}  />
        </div>
        <div className="justify-items-center mt-[15px] bg-gray-50">
            <p className="text-[20px]">Mini LCW chair</p>
            <p className="text-[14px] ">$56.00 </p>
        </div>
    </div>
{/*Chair 4 */}
    <div className="w-[270px] h-[261px] ml-[29px] mt-[48px]">
         <div className="bg-gray-50 flex flex-col items-center justify-center w-[269px] h-[269px] rounded-full">
             <Image src={"/images/image20.png"} alt="" width={158} height={157}  />
        </div>
        <div className="justify-items-center mt-[15px] bg-gray-50">
            <p className="text-[20px]">Mini LCW chair</p>
            <p className="text-[14px] ">$56.00 </p>
        </div>
    </div>
</section>
    <div className="relative mt-[178px] ">
        <Image src="/images/Rectangle102.png" alt="background image" width={1920} height={462} />
        <div className=" text-center absolute inset-0 w-[574px] h-[108px] text-[35px] font-bold mt-[174px] mx-[673px] ">Get Latest Update By Subscribe Our Newslater</div>
        <button className=" bg-[#FB2E86] absolute inset-0 mx-[878px] text-white text-[17px] mt-[310px] w-[173px] h-[49px]">Shop Now</button>
    </div>
    <div className="mt-[96px] flex justify-center">
     <Image src="/images/image1174.png" alt="background image" width={904} height={93} />
    </div>
{/* Latest Blog */}
<div className="w-[1920px] mt-[96px] text-[35px] font-semibold flex justify-center">
    <h1>Latest Blog</h1>
</div>
<div className=" flex justify-center mt-[80px]">
    <div className="">
        <div>
             <Image src="/images/Frame1.png" alt="title image" width={370} height={255} />
        </div>
        <div className="flex ml-[14px]">
            <div className="flex  ">
                <Image src="/images/Vector2.png" alt="Vector image" width={11} height={8} />
                <p className="text-[14px] ml-[7.67px]">Sabir Ali</p>
            </div>
            <div className="flex ml-[44px] ">
                <Image src="/images/Vector3.png" alt="Vector image" width={9} height={6} />
                <p className="text-[14px] ml-[7.67px]">21 August, 2020</p>
            </div>
        </div>
        <div className="ml-[14px] mt-[31px]">
            <h1 className="text-[18px] font-bold">Top essential Trends in 2021</h1>
            <p className="w-[301px] h-[60px] text-[15px] text-[#72718F] mt-[17px]">More off this less hello samlande lied much over tightly circa horse taped mightly</p>
            <ul className="mt-[14px]">
                    <li className="text-red-500">
                        <Link href="/">Read More</Link>
                    </li>
        </ul>

        </div>
    </div>
    <div className="mx-[56px]">
        <div>
             <Image src="/images/Frame1.png" alt="title image" width={370} height={255} />
        </div>
        <div className="flex ml-[14px]">
            <div className="flex  ">
                <Image src="/images/Vector2.png" alt="Vector image" width={11} height={8} />
                <p className="text-[14px] ml-[7.67px]">Sabir Ali</p>
            </div>
            <div className="flex ml-[44px] ">
                <Image src="/images/Vector3.png" alt="Vector image" width={9} height={6} />
                <p className="text-[14px] ml-[7.67px]">21 August, 2020</p>
            </div>
        </div>
        <div className="ml-[14px] mt-[31px]">
            <h1 className="text-[18px] text-[#FB2E86] font-bold">Top essential Trends in 2021</h1>
            <p className="w-[301px] h-[60px] text-[15px] text-[#72718F] mt-[17px]">More off this less hello samlande lied much over tightly circa horse taped mightly</p>
            <ul className="mt-[14px]">
                    <li className="text-red-500">
                        <Link href="/">Read More</Link>
                    </li>
        </ul>
        </div>
    </div>
    <div className="">
        <div>
             <Image src="/images/Frame1.png" alt="title image" width={370} height={255} />
        </div>
        <div className="flex ml-[14px]">
            <div className="flex  ">
                <Image src="/images/Vector2.png" alt="Vector image" width={11} height={8} />
                <p className="text-[14px] ml-[7.67px]">Sabir Ali</p>
            </div>
            <div className="flex ml-[44px] ">
                <Image src="/images/Vector3.png" alt="Vector image" width={9} height={6} />
                <p className="text-[14px] ml-[7.67px]">21 August, 2020</p>
            </div>
        </div>
        <div className="ml-[14px] mt-[31px]">
            <h1 className="text-[18px] font-bold">Top essential Trends in 2021</h1>
            <p className="w-[301px] h-[60px] text-[15px] text-[#72718F] mt-[17px]">More off this less hello samlande lied much over tightly circa horse taped mightly</p>
            <ul className="mt-[14px]">
                    <li className="text-red-500">
                        <Link href="/">Read More</Link>
                    </li>
        </ul>
        </div>
    </div>
</div>
</div>
    )
}
