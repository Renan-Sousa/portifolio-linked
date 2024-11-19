import Link from 'next/link';
import "./navlinks.css"

export interface NavLinkInterface {
    href: string;
    label: string;
}

export default function NavLinks(props: NavLinkInterface) {
    return (
        <li className='nav-item'>
            <Link href={props.href} className='nav-link'>
                {props.label}
            </Link>
        </li>
    )
}
