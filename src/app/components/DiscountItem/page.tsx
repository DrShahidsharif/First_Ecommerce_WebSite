import Image from "next/image";
import Link from "next/link";

function DiscountItem () {
    return (
        <div>
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
</div>

    )
};
export default DiscountItem