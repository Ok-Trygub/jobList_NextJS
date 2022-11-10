import PostedDaysAgo from '../functions/postedDaysAgo';

interface TextProps {
    createdAt: string,
    title: string,
    salary: string,
    description: string,
}


const JobDetailedText = ({createdAt, title, salary, description}: TextProps) => {

    const postedDays: number = PostedDaysAgo(createdAt);
    const descriptionText: string[] = description.split('\n');
    const compensationList: string[] = descriptionText[7].split('. ');

    return (
        <>
            <div className='lg:flex shrink-0 justify-between items-start  lg:pb-2'>
                <h2 className='font-bold text-[24px] leading-[1.25] tracking-[-0.75px] text-darkBlue
                                pb-1 lg:max-w-[501px] lg:p-0'>{title}</h2>

                <div className='flex items-center justify-between pb-3.5 lg:p-0'>
                    <p className='lg:hidden postCreatedAt'>Posted {postedDays} days ago</p>

                    <div className='flex flex-col items-end lg:items-start'>
                        <p className='lg:hidden text-[18px]
                                    tracking-[-0.5625px] text-darkBlue'>Brutto, per year</p>
                        <p className='font-bold text-darkBlue tracking-[-0.625px] text-[20px] leading-[1.25]
                                        pt-1 lg:pt-0 lg:pb-1'>{salary}</p>

                        <p className='hidden lg:block roboto text-darkBlue tracking-[-0.5625px] text-[18px]'>
                            Brutto, per year</p>
                    </div>
                </div>
            </div>

            <p className='hidden lg:block postCreatedAt'>Posted {postedDays} days ago</p>

            <div>
                {descriptionText.map((item, index) => {
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
            </div>
        </>
    );
};

export default JobDetailedText;
