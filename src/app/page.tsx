import Image from "next/image";
import Link from "next/link";
import FeaturedProduct from "./components/FeaturedProduct/page";
import LatestProducts from "./components/LatestProducts/page";
import Shopex from "./components/Shopex/page";
import Unique from "./components/Unique/page";
import TrendingProducts from "./components/TrendingProducts/page";
import DiscountItem from "./components/DiscountItem/page";
import TopCategories from "./components/TopCategories/page";
import Hero from "./components/Hero/page";



export default function Home() {
    return(
        <div className="max-w-[1920px] mx-auto h-[7263px] mt-[19px] bg-gray-50">
      
<Hero />
<div id="featured-products" className="scroll-mt-20"><FeaturedProduct /></div>
<div id="latest-products" className="scroll-mt-20"><LatestProducts /></div>
<div id="shopex" className="scroll-mt-20"><Shopex /></div>
<div id="unique" className="scroll-mt-20"><Unique /></div>
<div id="trending-products" className="scroll-mt-20"><TrendingProducts /></div>
<div id="discount-item" className="scroll-mt-20"><DiscountItem /></div>
<div id="top-categories" className="scroll-mt-20"><TopCategories /></div>



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
