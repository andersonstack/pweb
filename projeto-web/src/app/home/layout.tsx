import Link from "next/link"

export default function HomeLayout({
    children,
}: {children: React.ReactNode}) {
    // console.log('Montando layout da home')
    return (
        <div className="home-container">
            <nav>
                <p>PWEB</p>
                <Link href={"./mint"}>Ir para mint</Link>
            </nav>
            <main>{children}</main>
        </div>
    )
}