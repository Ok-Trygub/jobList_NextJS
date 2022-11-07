import ArrowLeft from "../public/ArrowLeft.png";
import ArrowRight from "../public/ArrowRight.png";
import Image from "next/image";

const Pagination = () => {

    return (
        <div className='px-5 h-[40px] lg:h-[52px] flex bg-white items-center border cardShadow rounded-lg justify-center
        text-[#70778B] font-bold text-[16px] leading-[1.19] lg:text-[21px] tracking-[1.33333px]
        lg:tracking-[1.73333px] gap-4 lg:w-[515px]'>
            <span>
                <Image src={ArrowLeft} width={14} height={18} alt="arrow_left" className='w-auto h-auto'/>
            </span>
            <div className="pl-[42.5px] lg:pl-14 ml-2 lg:ml-8 border-l border-[#DEE3EF]">
                <span className='paginationItem'>1</span>
            </div>
            <span className='paginationItem'>2</span>
            <span className='paginationItem'>3</span>
            <span className='paginationItem'>4</span>
            <span className='paginationItem'>5</span>
            <span>...</span>
            <div className='pr-[42.5px] lg:pr-14 mr-2 lg:mr-8 border-r border-[#DEE3EF]'>
                <span className='paginationItem'>18</span>
            </div>
            <span>
                <Image src={ArrowRight} width={14} height={18} alt="arrow_right" className='w-auto h-auto'/>
            </span>
        </div>
    );
};

export default Pagination;
