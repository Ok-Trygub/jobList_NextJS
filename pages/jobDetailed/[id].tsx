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
import Head from "next/head";
import Image from "next/image";
import {GetServerSideProps} from 'next';
import jobPost from "../../interfaces/jobPost";
import JobDetailedText from '../../components/jobDetailedText';


interface currentJobData {
    jobData: jobPost
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const {id} = context.query;


    let responce = await fetch(API_BASE_URL, {
        method: 'GET',
        headers: {
            'Authorization': Bearer_Token,
        },
    });

    let data: jobPost[] = await responce.json();
    if (!data.length) throw new Error('no data');

    let currentJobData = data.find((user: jobPost) => user.id === id);

    return {
        props: {
            jobData: currentJobData
        }
    }
}


const Job = ({jobData}: currentJobData) => {

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
                            <JobDetailedText
                                createdAt={jobData.createdAt}
                                title={jobData.title}
                                salary={jobData.salary}
                                description={jobData.description}
                            />

                            <div className='pt-9 pb-[135px] lg:pb-[86px] flex justify-center lg:justify-start'>
                                <ApplyButton/>
                            </div>

                        </main>

                        <div className='lg:hidden'>
                            <h3 className='sectionTitle border-b-2 border-[#3A4562] pb-3 mb-3'>Attached images</h3>

                            <div className='flex gap-2 lg:gap-3 justify-center lg:justify-start pb-[60px]'>

                                {jobData.pictures.map((item, index) => (
                                    <Image key={index} width={200} height={133} src={item} alt="job_image"
                                           className='w-2/6 h-[133px] rounded-lg'/>
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
                                    <Image key={index} src={item} alt="job_image" width={200}
                                           height={133}
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
                            location={jobData.location}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Job;
