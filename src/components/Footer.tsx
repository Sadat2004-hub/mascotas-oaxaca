import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 py-12 mt-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="col-span-1 md:col-span-2">
                        <h2 className="text-xl font-bold text-gray-900 mb-4">Mascotas Oaxaca</h2>
                        <p className="text-gray-500 max-w-sm mb-6">
                            El directorio más completo de servicios para mascotas en Oaxaca. Conecta con profesionales y servicios locales con confianza.
                        </p>
                        <div className="flex gap-4">
                            {/* Social icons placeholders */}
                            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-indigo-50 hover:text-indigo-600 transition-colors cursor-pointer">FB</div>
                            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-indigo-50 hover:text-indigo-600 transition-colors cursor-pointer">IG</div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Municipios</h3>
                        <ul className="space-y-2">
                            <li><Link href="/oaxaca-centro" className="text-gray-500 hover:text-indigo-600 transition-colors">Oaxaca Centro</Link></li>
                            <li><Link href="/xoxocotlan" className="text-gray-500 hover:text-indigo-600 transition-colors">Santa Cruz Xoxocotlán</Link></li>
                            <li><Link href="/santa-lucia" className="text-gray-500 hover:text-indigo-600 transition-colors">Santa Lucía del Camino</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Servicios</h3>
                        <ul className="space-y-2">
                            <li><Link href="/oaxaca-centro/veterinarias" className="text-gray-500 hover:text-indigo-600 transition-colors">Veterinarias</Link></li>
                            <li><Link href="/oaxaca-centro/esteticas" className="text-gray-500 hover:text-indigo-600 transition-colors">Estéticas</Link></li>
                            <li><Link href="/oaxaca-centro/adopcion" className="text-gray-500 hover:text-indigo-600 transition-colors">Adopción</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-400">© {new Date().getFullYear()} Mascotas Oaxaca. Todos los derechos reservados.</p>
                    <div className="flex gap-8 text-sm text-gray-400">
                        <Link href="/privacidad" className="hover:text-gray-600 transition-colors">Privacidad</Link>
                        <Link href="/terminos" className="hover:text-gray-600 transition-colors">Términos</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
