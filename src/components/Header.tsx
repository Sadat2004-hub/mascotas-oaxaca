import Link from 'next/link';

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-emerald-600 bg-clip-text text-transparent">
                        Mascotas Oaxaca
                    </span>
                </Link>
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
                    <Link href="/" className="hover:text-indigo-600 transition-colors">Inicio</Link>
                    <Link href="/oaxaca-centro/veterinarias" className="hover:text-indigo-600 transition-colors">Veterinarias</Link>
                    <Link href="/oaxaca-centro/esteticas" className="hover:text-indigo-600 transition-colors">Estéticas</Link>
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-shadow shadow-sm">
                        Registrar Negocio
                    </button>
                </nav>
                <button className="md:hidden p-2 text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
                </button>
            </div>
        </header>
    );
}
