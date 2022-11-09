import AddressLocation from "../public/AddressLocation";
import BgImg from '../public/contacts_bg_round.png';
import Image from "next/image";
import Map from './Map/Map';
import {GOOGLE_MAP_KEY} from '../utils/API_CONFIG';
import {useJsApiLoader} from '@react-google-maps/api';
import {useState} from "react";
import ContactsProps from '../interfaces/ContactsProps'


interface CenterProps {
    lat: number,
    lng: number,
}


const Contacts = (props: ContactsProps) => {
    const {name, address, phone, email, location} = props;


    const [center, setCenter] = useState<CenterProps>(
        {
            lat: location.lat,
            lng: location.long,
        }
    );


    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        language: 'de',
        googleMapsApiKey: GOOGLE_MAP_KEY,
    });


    return (
        <div className='w-full lg:w-[330px] xl:w-[402px]'>
            <div
                className='bg-[#2A3047] border rounded-t-lg text-[#E8EBF3] py-8 h-[215px] w-full flex justify-center relative overflow-hidden'>
                <Image src={BgImg} alt='bg_img' className='absolute top-0 left-0 h-[273px] w-2/4 hidden lg:block'/>
                <div className='z-10'>
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
            </div>

            <div>
                {isLoaded ? <Map center={center}/> : <h2>Loading...</h2>}
            </div>
        </div>
    );

};

export default Contacts;
