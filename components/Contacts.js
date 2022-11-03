import AddressLocation from "../public/AddressLocation";


const Contacts = (props) => {
    const {name, address, phone, email} = props;

    return (
        <div>
            <div className='bg-[#2A3047] border rounded-lg text-[#E8EBF3] py-8 pl-16'>
                <p className='font-bold tracking-[0.23619px] leading-[1.18] text-[#E7EAF0] lg:text-[20px]
                 leading-[1.25] tracking-[-0.625px] pb-2 lg:pb-4'>{name}</p>

                <div className="flex">
                           <span className='pr-2'>
                           <AddressLocation/>
                           </span>
                    <p className='addressInfo text-[#E7EAF0] lg:text-[#E8EBF3]'>{address}</p>
                </div>

                <p className='addressInfo pb-2 text-[#E7EAF0] lg:text-[#E8EBF3]'>Gürtel 18-20</p>
                <p className='addressInfo text-textGray lg:text-[#E8EBF3]'>{phone},</p>
                <p className='addressInfo text-textGray lg:text-[#E8EBF3]'>{email}</p>
            </div>

            <div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2747.454072500228!2d30.745722615591774!3d46.47932057912614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c6319e4e946bef%3A0x9e6a86ee545f4d30!2z0YPQuy4g0JrQsNC90LDRgtC90LDRjywgMjIsINCe0LTQtdGB0YHQsCwg0J7QtNC10YHRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwgNjUwMDA!5e0!3m2!1sru!2sua!4v1630500403216!5m2!1sru!2sua"
                    allowFullScreen="" loading="lazy"></iframe>
            </div>
        </div>
    );
};

export default Contacts;
