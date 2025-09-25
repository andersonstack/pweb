// import { InputComponent } from "@/components/input"

export default function HomeLayout({
    children,
}: {children: React.ReactNode}) {
    // console.log('Montando layout da home')
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