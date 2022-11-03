import MainLayout from "../components/MainLayout";
import {API_BASE_URL, Bearer_Token} from '../utils/API_CONFIG';
import JobCard from "../components/JobCard";
import Head from "next/head";
import Pagination from "../components/Pagination";


export const getStaticProps = async () => {
    let responce = await fetch(API_BASE_URL, {
        method: 'GET',
        headers: {
            'Authorization': Bearer_Token,
        },
    });

    let data = await responce.json()

    if (!data) return {
        notFound: true,
    }

    return {
        props: {
            jobs: data
        }
    }
}


export default function Home({jobs}) {
    return (
        <>
            <MainLayout>
                <Head>
                    <title>Job Board</title>
                </Head>

                <div className='container px-2 pt-2 pb-4 xl:px-0 lg:pt-7 lg:pb-16'>
                    <div className='pb-4'>
                        {jobs.map((jobItem) => (
                            <div className='mb-2' key={jobItem.id}>
                                <JobCard jobData={jobItem}/>
                            </div>
                        ))}
                    </div>

                    <div className='flex justify-center'>
                        <Pagination/>
                    </div>

                </div>
            </MainLayout>
        </>
    )
}
