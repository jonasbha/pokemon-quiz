import Link from 'next/link'

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Hjem</Link>
                </li>
                <li>
                    <Link href="/pokemon-quiz">Pokemon Quiz</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;