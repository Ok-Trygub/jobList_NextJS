import {API_BASE_URL, Bearer_Token} from "../../utils/API_CONFIG";
import InactiveStar from "../../public/InactiveStar";
import ActiveStar from "../../public/ActiveStar";
import Bookmark from "../../components/Bookmark";
import ActiveBookmark from "../../public/ActiveBookmark";
import InactiveBookmark from "../../public/InactiveBookmark";
import Share from "../../public/Share";
import ApplyButton from "../../components/ApplyButton";
import Previous from "../../public/Previous";
import Contacts from '../../components/Contacts';
import Link from "next/link";
import PostedDaysAgo from '../../functions/postedDaysAgo';
import Head from "next/head";
import Image from "next/image";
import {GetServerSideProps, NextPageContext} from 'next';
import jobPost from "../../interfaces/jobPost";


interface currentJobData {
    jobData: jobPost
}



export const getServerSideProps: GetServerSideProps = async (context) => {
    console.log(context)

    const {id} = context.params;


    let responce = await fetch(API_BASE_URL, {
        method: 'GET',
        headers: {
            'Authorization': Bearer_Token,
        },
    });

    let data:jobPost[]  = await responce.json();;

    if (!data) return {
        notFound: true,
    }

    let currentJobData = data.find((user: jobPost) => user.id === id);

    return {
        props: {
            jobData: currentJobData
        }
    }
}


const Job = ({jobData}: currentJobData) => {

    const postedDays = PostedDaysAgo(jobData.createdAt);
    const description = jobData.description.split('\n');
    const compensationList = description[7].split('. ');

    return (
        <div className='bg-white'>
            <Head>
                <title>Job Detailed</title>
            </Head>
            <div className="container px-4 pt-6 pb-6 lg:pt-14 lg:pb-40">

                <div className='lg:flex lg:gap-x-8 xl:gap-x-[134px] max-w-[1257px] m-auto'>
                    <div>
                        <div
                            className='lg:border-b-2 lg:border-[#3A4562] lg:pb-2 lg:flex lg:items-center lg:justify-between'>
                            <div className='border-b-2 border-[#3A4562] lg:border-none'>
                                <h1 className='sectionTitle pb-3 lg:pb-0'
                                >Job Details</h1>
                            </div>

                            <div className='pt-6 pb-8 lg:p-0 leading-[1.44] tracking-[-0.5px] text-darkGray flex
                            lg:text-[18px] lg:leading-[1.33] tracking-[-0.5625px]'>

                                <span className='pr-4 flex gap-x-2 items-center'>
                                    <span className='hidden lg:inline'>
                                        <Bookmark
                                            activeIcon={<ActiveBookmark/>}
                                            inActiveIcon={<InactiveBookmark/>}
                                        />
                                    </span>
                                    <span className='lg:hidden'>
                                        <Bookmark
                                            activeIcon={<ActiveStar/>}
                                            inActiveIcon={<InactiveStar/>}
                                        />
                                    </span>
                                    Save to my list</span>

                                <div className='flex items-center gap-x-2'><Share/>Share</div>
                            </div>
                        </div>

                        <div className='hidden lg:block pt-10 pb-8'>
                            <ApplyButton/>
                        </div>

                        <main>
                            <div className='lg:flex shrink-0 justify-between items-start  lg:pb-2'>
                                <h2 className='font-bold text-[24px] leading-[1.25] tracking-[-0.75px] text-darkBlue
                                pb-1 lg:max-w-[501px] lg:p-0'>{jobData.title}</h2>

                                <div className='flex items-center justify-between pb-3.5 lg:p-0'>
                                    <p className='lg:hidden postCreatedAt'>Posted {postedDays} days ago</p>

                                    <div className='flex flex-col items-end lg:items-start'>
                                        <p className='lg:hidden text-[18px]
                                    tracking-[-0.5625px] text-darkBlue'>Brutto, per year</p>
                                        <p className='font-bold text-darkBlue tracking-[-0.625px] text-[20px] leading-[1.25]
                                        pt-1 lg:pt-0 lg:pb-1'>{jobData.salary}</p>

                                        <p className='hidden lg:block roboto text-darkBlue tracking-[-0.5625px] text-[18px]'>
                                            Brutto, per year</p>
                                    </div>
                                </div>
                            </div>

                            <p className='hidden lg:block postCreatedAt'>Posted {postedDays} days ago</p>

                            <div>
                                {description.map((item, index) => {
                                    if (item.trim() === '') return null;

                                    if (item.includes('Responsopilities') || item.includes('Compensation & Benefits')) return (
                                        <h4 key={index} className='jobDetails-textTile pb-3'>{item}</h4>
                                    )

                                    if (index === 7) return (
                                        <ul key={index} className='jobDetails-text list-square pl-4 lg:pl-4 lg:pl-1'>
                                            {compensationList.map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                        </ul>
                                    )

                                    return <p key={index} className='jobDetails-text pb-7'>{item}</p>
                                })}

                                <div className='pt-9 pb-[135px] lg:pb-[86px] flex justify-center lg:justify-start'>
                                    <ApplyButton/>
                                </div>
                            </div>
                        </main>

                        <div className='lg:hidden'>
                            <h3 className='sectionTitle border-b-2 border-[#3A4562] pb-3 mb-3'>Attached images</h3>

                            <div className='flex gap-2 lg:gap-3 justify-center lg:justify-start pb-[60px]'>
                                {jobData.pictures.map((item, index) => (
                                    // <Image key={index} src={item} width={2/6} height={133} alt="job_image" className='rounded-lg'/>
                                    <img key={index} src={item} alt="job_image" className='w-2/6 h-[133px] rounded-lg'/>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className='sectionTitle border-b-2 border-[#3A4562] pb-2.5 mb-4'>Additional info</h3>
                            <p className='text-[18px] tracking-[-0.5625px] pb-2.5'>Employment type</p>

                            <div className='flex gap-2 pb-6'>
                                {jobData.employment_type.map((item, index) => (
                                    <div key={index}
                                         className='additionalInfoUnit text-blueCalm bg-[#e1e6f4] border-[#ccd2e2]'>
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>

                            <p className='text-[18px] tracking-[-0.5625px] pb-2.5'>Benefits</p>

                            <div className='flex gap-2 pb-16'>
                                {jobData.benefits.map((item, index) => (
                                    <div
                                        key={index}
                                        className='additionalInfoUnit w-[170px] md:w-[222px] text-gold bg-[#fff8d9] border-[#FFCF00]'>
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className='hidden lg:block pb-94'>
                            <h3 className='sectionTitle border-b-2 border-[#3A4562] pb-3 mb-4'>Attached images</h3>

                            <div className='flex gap-2 lg:gap-3 justify-center lg:justify-start pb-[60px]'>
                                {jobData.pictures.map((item, index) => (
                                    <img key={index} src={item} alt="job_image"
                                         className='w-2/6 lg:w-[200px] lg:h-[133px] rounded-lg'/>
                                ))}
                            </div>
                        </div>

                        <div className='hidden lg:block'>

                            <Link href='/'>
                                <button
                                    className='w-[213px] h-[50px] bg-jobCard_bg_color_mob border rounded-lg text-[#3A4562] text-[12px] font-semibold flex items-center justify-center'>
                                <span className='pr-5'>
                                    <Previous/>
                                </span>
                                    RETURN TO JOB BOARD
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className='lg:hidden sectionTitle border-b-2 border-[#3A4562] pb-2.5 mb-5'>Contacts</h3>
                        <Contacts
                            name={jobData.name}
                            address={jobData.address}
                            phone={jobData.phone}
                            email={jobData.email}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Job;
