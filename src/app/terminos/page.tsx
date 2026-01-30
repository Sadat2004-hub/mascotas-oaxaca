import * as LucideIcons from 'lucide-react';

export default function TermsPage() {
    return (
        <div className="container mx-auto px-4 py-20">
            <div className="max-w-4xl mx-auto bg-white p-12 md:p-20 rounded-[3rem] border border-orange-100 shadow-xl shadow-orange-100/50">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-10">
                    <LucideIcons.Scale size={32} />
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-12 tracking-tighter leading-none italic">
                    Términos y <span className="text-orange-500">Condiciones</span>
                </h1>

                <div className="prose prose-lg prose-orange max-w-none text-slate-600 leading-relaxed space-y-8 font-medium">
                    <section>
                        <h2 className="text-2xl font-black text-slate-900 tracking-tight uppercase text-sm mb-4">1. Uso del Directorio</h2>
                        <p>Mascotas Oaxaca es una plataforma informativa gratuita para usuarios. No nos hacemos responsables por la calidad de los servicios prestados por los negocios listados, actuando únicamente como un puente de conexión.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-slate-900 tracking-tight uppercase text-sm mb-4">2. Registro de Negocios</h2>
                        <p>Los negocios que decidan registrarse aceptan proporcionar información verídica y actualizada. Mascotas Oaxaca se reserva el derecho de eliminar cualquier registro que infrinja normas éticas o proporcione información falsa.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-slate-900 tracking-tight uppercase text-sm mb-4">3. Limitación de Responsabilidad</h2>
                        <p>Bajo ninguna circunstancia Mascotas Oaxaca será responsable por daños directos o indirectos derivados del uso del sitio o del contacto con los prestadores de servicios mencionados.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-slate-900 tracking-tight uppercase text-sm mb-4">4. Propiedad Intelectual</h2>
                        <p>Todo el contenido visual, diseño y código de este sitio es propiedad de Mascotas Oaxaca. Queda prohibida su reproducción sin consentimiento previo.</p>
                    </section>

                    <p className="pt-10 border-t border-slate-100 text-xs text-slate-400 italic">Última actualización: 30 de enero de 2026.</p>
                </div>
            </div>
        </div>
    );
}
