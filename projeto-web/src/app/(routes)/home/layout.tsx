export default function HomeLayout({
    children,
}: {children: React.ReactNode}) {
    return (
        <div className="home-container">
            <nav>
                <h1 className="py-4 text-3xl font-bold mb-6 text-center">Filmes</h1>
            </nav>
            <main>
                {children}
            </main>
        </div>
    )
}