import Link from "next/link";
import Dot from '../public/Dot';
import Location from '../public/Location';
import StarRating from "./StarRating";
import Bookmark from "./Bookmark";
import ActiveBookmark from "../public/ActiveBookmark";
import InactiveBookmark from "../public/InactiveBookmark";


const JobCard = (props) => {
    console.log(props.jobData)

    const {title, name, address, pictures, location, id, createdAt} = props.jobData;

    // let res= (new Date() - new Date(createdAt)) / 86400000
    // console.log(res)


    return (
        <div className='border px-4 pt-3 pb-7 lg:py-6 rounded-lg bg-jobCard_bg_color_mob lg:bg-white cardShadow'>

            <div className='flex justify-between'>
                <div className='flex'>
                    <div>
                        <img src={pictures[0]} alt="job_logo"
                             className='w-[66px] h-[66px] lg:w-[85px] lg:h-[85px] rounded-full mr-5 mt-10 lg:mt-0 lg:mr-[26px]'/>
                    </div>
                    <div>

                        <div className='flex justify-between place-content-stretch font-light text-sm lg:hidden'>
                            <StarRating/>
                            <p className='font-light text=[14px] leading-[1.21] tracking-[0.206667px] text-textGray'>Posted
                                2 days ago</p>
                        </div>

                        <div>
                            <Link href={'/jobDetailed/' + id}>
                                <h2 className='font-medium tracking-[-0.5625px] text-[18px] lg:text-[20px] pt-4 lg:pt-0 pb-1 lg:pb-2'>{title}</h2>
                            </Link>

                            <div className="text-textGray  pb-2 leading-[1.56] tracking-[0.23619px]">
                                <p className='flex items-center'>{name}
                                    <span className='px-1.5'>
                                     <Dot/>
                                </span>
                                    {address}
                                </p>
                            </div>

                            <div className='flex text-textGray'>
                                <Location/>
                                <span className='tracking-[0.23619px] pl-2'>{location.lat + ' ' + location.long}</span>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='hidden lg:flex shrink-0'>
                    <div className='flex items-center pr-8'>
                        <StarRating size='19px'/>
                    </div>

                    <div className='flex flex-col justify-between items-end'>
                        <Bookmark
                            activeIcon={<ActiveBookmark/>}
                            inActiveIcon={<InactiveBookmark/>}
                        />
                        <p className='tracking-[0.23619px] text-textGray'>Posted 2 days ago</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobCard;
