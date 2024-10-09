import Link from 'next/link'

export default function Show() {
    return (
        <div>
            <h1>Show страница</h1>
            <div><Link href='/'>Главная</Link></div>
            <div><Link href='/client/12345'>Клиент 12345</Link></div>
        </div>
    );
}
