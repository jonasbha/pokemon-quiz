import Link from 'next/link'

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/" passHref>
                        <a className="first">Hjem</a>
                    </Link>
                </li>
                <li>
                    <Link href="/quiz">Get</Link>
                </li>
                <li>
                    <Link href="/quiz/create">Post</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;