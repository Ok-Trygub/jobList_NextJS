export default interface ContactsProps {
    address: string;
    email: string;
    name: string;
    phone: string;
    location: { lat: number, long: number };
}
