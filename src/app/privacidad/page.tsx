import * as LucideIcons from 'lucide-react';

export default function PrivacyPage() {
    return (
        <div className="container mx-auto px-4 py-20">
            <div className="max-w-4xl mx-auto bg-white p-12 md:p-20 rounded-[3rem] border border-orange-100 shadow-xl shadow-orange-100/50">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-10">
                    <LucideIcons.ShieldCheck size={32} />
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-12 tracking-tighter leading-none italic">
                    Aviso de <span className="text-orange-500">Privacidad</span>
                </h1>

                <div className="prose prose-lg prose-orange max-w-none text-slate-600 leading-relaxed space-y-8 font-medium">
                    <section>
                        <h2 className="text-2xl font-black text-slate-900 tracking-tight uppercase text-sm mb-4">1. Responsable</h2>
                        <p>Mascotas Oaxaca es responsable del tratamiento de sus datos personales, con el compromiso de proteger su privacidad y asegurar el uso correcto de la información proporcionada a través de nuestro sitio web.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-slate-900 tracking-tight uppercase text-sm mb-4">2. Datos Recabados</h2>
                        <p>Los datos que podemos solicitar incluyen: Nombre, correo electrónico, teléfono y datos de ubicación de su negocio (en caso de ser prestador de servicios). Estos datos se utilizan únicamente para mejorar su experiencia y conectar negocios con dueños de mascotas.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-slate-900 tracking-tight uppercase text-sm mb-4">3. Finalidad</h2>
                        <p>Sus datos personales son utilizados para: proveer los servicios solicitados, notificar sobre cambios en el sitio, realizar evaluaciones de calidad y responder a sus consultas vía WhatsApp o email.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-slate-900 tracking-tight uppercase text-sm mb-4">4. Seguridad</h2>
                        <p>Implementamos medidas de seguridad administrativas y técnicas para proteger sus datos personales contra daño, pérdida, alteración o uso no autorizado.</p>
                    </section>

                    <p className="pt-10 border-t border-slate-100 text-xs text-slate-400 italic">Última actualización: 30 de enero de 2026.</p>
                </div>
            </div>
        </div>
    );
}
