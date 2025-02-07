import Image from "next/image";

export default function Footer(){
  return (
    <div>
    <div className=" bg-[#EEEFFB]  max-w-[1920px] mx-auto h-[479px] mt-[115px] flex">
        <div className="w-[98px] ml-[310px]  ">
            <h1 className="text-[34px] font-extrabold mt-[95px]">Hekto</h1>
        </div>
        <div className="text-lg ml-[309px] h-[44px] w-[377px] flex  absolute  mt-[164px]">
                <input type="text" placeholder="Enter Email Address" className=" bg-[#FFFFFF] w-[377px] h-[44px] p-2"/>
                 <div className="bg-[#FB2E86] flex justify-center w-[135px] h-[44px] text-white text-[20px] items-center ">
                <p>Sign Up</p>
            </div>
            </div>
            <div className="text-gray-500 absolute ml-[308px] mt-[262px]">
                <p>Contact info</p>
                <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
            </div>
        <div className="w-[211px] h-[22px] mt-[94px] ml-[780px] absolute">
              <div className="font-bold text-lg text-[22px] mb-[15px]">
              <h1>Catagories</h1>
              </div>
              <div>
                <ul className="text-gray-500 w-[253] h-[19] mt-16 ">
                  <li className="my-[15px]">Laptops & Computers</li>
                  <li className="my-[15px]">Cameras & Photography</li>
                  <li className="my-[15px]">Smart Phones & Tablets</li>
                  <li className="my-[15px]">Video Games & Consoles</li>
                  <li className="my-[15px]">Waterproof Headphones</li>
                </ul>
              </div>
        </div>
<div className="w-[211px] h-[22px] mt-[94px] ml-[1047px] absolute">
              <div className="font-bold text-lg text-[22px] mb-[15px]">
              <h1>Customer Care</h1>
              </div>
              <div>
                <ul className="text-gray-500 w-[253] h-[19] mt-16">
                  <li className="my-[15px]">My Account</li>
                  <li className="my-[15px]">Discount</li>
                  <li className="my-[15px]">Returns</li>
                  <li className="my-[15px]">Orders History</li>
                  <li className="my-[15px]">Order Tracking</li>
                </ul>
              </div>
</div>
      <div className="w-[211px] h-[22px] mt-[94px] ml-[1287px] absolute">
              <div className="font-bold text-lg text-[22px] mb-[15px]">
              <h1>Pages</h1>
              </div>
              <div>
                <ul className="text-gray-500 mt-16">
                  <li className="my-[15px]">Blog</li>
                  <li className="my-[15px]">Browse the Shop</li>
                  <li className="my-[15px]">Category</li>
                  <li className="my-[15px]">Pre-Built Pages</li>
                  <li className="my-[15px]">Visual Composer Elements</li>
                  <li className="my-[15px]">WooCommerce Pages</li>
                </ul>
              </div>
            </div>
  </div>
    <div className="bg-gray-400 h-12 max-w-[1920px] mx-auto">
              <div className="flex h-full items-center justify-evenly ">
                <div className="flex h-full items-center gap-1">
              <i className="fa-regular fa-copyright"></i>
                <p>HDr. Muhammad Shahid - All Rights Reserved</p>
                </div>
<div className="  search mt-2 ">
            <Image src={"/images/GroupFT.png"} alt="" width={80} height={20} className="rounded-full"/>
              </div>
                </div>
            </div>
    </div>
  );
};
