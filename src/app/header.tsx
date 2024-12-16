import Link from "next/link";
import Image from "next/image";

export default function Header(){
    return(
    <div className="mt-4">
        {/* Top Bar */}
    <div className=" bg-[#7E33E0] w-[1920px] h-[44px] flex items-center">
        <div className="flex ml-[377px]">          
            <div className="flex">
                <Image src={"/images/email1.png"} alt="" width={16} height={16} />
                <div className=" w-[171px] h-[16px] text-white text-[16px] ml-[10px] mr-[43px]" >hdr.mshahid24@gmail.com</div>
            </div>
            <div className="flex">
                <Image src={"/images/email1.png"} alt="" width={16} height={16} />
                <div className=" w-[120px] h-[16px] text-white text-[16px] ml-[10px] mr-[43px]" >+92 3212250349</div>
            </div>
            <div className="ml-[270px]">
                <ul className=" flex text-white gap-x-3 text-[16px]  ml-[35px]">
                    <li className="">
                        <Link href="/" className="flex">English <Image src={"/images/icons_down.png"} alt="" width={16} height={16}/></Link>
                    </li>
                    <li>
                        <Link href="/" className="flex">USD <Image src={"/images/icons_down.png"} alt="" width={16} height={16}/></Link>
                    </li>
                    <li>
                        <Link href="/" className="flex">Login <Image src={"/images/login.png"} alt="" width={16} height={16}/></Link>
                    </li>
                    <li>
                        <Link href="/" className="flex">Whishlist <Image src={"/images/heart.png"} alt="" width={16} height={16}/></Link>
                    </li>
                    <li>
                        <Link href="/" className="flex ml-[26px]"> <Image src={"/images/fluent_cart_24_white.png"} alt="" width={24} height={24}/></Link>
                    </li>    
        </ul>
        </div>
    </div>
</div>
<nav className="w-[1920px] h-[44px]">
    <div className="flex w-[19201177px] h-[40px]">
        <div className=" w-[98px] h-[34px] text-[34px] font-bold ml-[371px] mr-[43px]" >Hekto</div>
            <div>
                <ul className=" flex  gap-x-12 text-[13px] mt-4 ml-[35px]">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/">Products</Link>
                    </li>
                    <li>
                        <Link href="/">Blog</Link>
                    </li>
                    <li>
                        <Link href="/">Shop</Link>
                    </li>
                    <li>
                        <Link href="/">Contact</Link>
                    </li>
        </ul>
    </div>
    <div className=" ml-[226px] w-[317px] h-[40px] mt-2 border">
        <div className=" flex border solid-black rounded text-[12px]">
        <input placeholder=""/>
        <div className=" w-[151px] ml-[145px] ">
        <div className="bg-[#FB2E86] h-[40px] flex items-center search ">
            <Image src={"/images/uil_search.png"} alt="" width={24} height={24} className="rounded-full"/>
        </div>
        </div>
        </div>      
    </div>
    </div>
</nav>
</div>
    )
}