import Link from 'next/link';
import Menu from '@/components/Menu'

export default function Sidebar(){
    return(
        <aside>
            <Link href = '/' className="text-3xl font-bold tracking-tight">
            Steven Zhang
            </Link>
            <Menu></Menu>

        </aside>
    )
}