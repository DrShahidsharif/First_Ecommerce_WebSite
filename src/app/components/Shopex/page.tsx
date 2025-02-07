import Image from "next/image";

function Shopex () {
    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
           <div >
               <h1 className="text-2xl font-bold mb-6 text-center ">What Shopex Offer!</h1>
           </div>
           <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 py-8">
           {/* 1 */}
               <div className="w-[270px] h-[320px] bg-white">
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
</div>

    )
};
export default Shopex