import * as LucideIcons from 'lucide-react';

export default function ContactPage() {
    return (
        <div className="container mx-auto px-4 py-20">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <div className="w-20 h-20 bg-orange-100 rounded-[2.5rem] flex items-center justify-center text-orange-600 mx-auto mb-8">
                        <LucideIcons.Mail size={40} />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tighter leading-none">
                        ¡Estamos para <span className="text-orange-500">ayudarte!</span>
                    </h1>
                    <p className="text-xl text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
                        ¿Tienes dudas sobre cómo registrar tu negocio, reportar un error o simplemente quieres decir hola? Escríbenos.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div className="bg-white p-10 rounded-[3rem] border border-orange-100 shadow-xl shadow-orange-100/50">
                            <h2 className="text-2xl font-black text-slate-900 mb-8 tracking-tighter uppercase">Canales de Atención</h2>
                            <div className="space-y-8">
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 flex-shrink-0 shadow-lg shadow-emerald-100">
                                        <LucideIcons.MessageCircle size={24} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">WhatsApp</p>
                                        <a href="https://wa.me/526563230397" className="text-slate-900 font-bold text-xl hover:text-orange-600 transition-colors">951 199 95 53</a>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600 flex-shrink-0 shadow-lg shadow-orange-100">
                                        <LucideIcons.Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Email</p>
                                        <p className="text-slate-900 font-bold text-lg">hola@mascotasoaxaca.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-orange-500 p-10 rounded-[3rem] text-white">
                            <h3 className="text-xl font-black mb-4">¿Quieres sumar tu negocio?</h3>
                            <p className="text-orange-50 mb-8 font-medium italic">"Mascotas Oaxaca es el lugar ideal para que los dueños de peluditos te encuentren en segundos."</p>
                            <a
                                href="https://wa.me/526563230397?text=Hola! Quiero registrar mi negocio en Mascotas Oaxaca"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-white text-orange-600 px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-orange-50 transition-all shadow-xl"
                            >
                                Enviar Mensaje Ahora
                            </a>
                        </div>
                    </div>

                    <div className="bg-white p-10 rounded-[3rem] border border-orange-100 shadow-xl shadow-orange-100/50">
                        <h2 className="text-2xl font-black text-slate-900 mb-8 tracking-tighter uppercase">Formulario Rápido</h2>
                        <form className="space-y-6">
                            <div>
                                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Nombre Completo</label>
                                <input type="text" className="w-full px-6 py-4 rounded-2xl border border-slate-100 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-slate-50 transition-all" placeholder="Ej. Juan Pérez" />
                            </div>
                            <div>
                                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Email</label>
                                <input type="email" className="w-full px-6 py-4 rounded-2xl border border-slate-100 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-slate-50 transition-all" placeholder="juan@ejemplo.com" />
                            </div>
                            <div>
                                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Mensaje</label>
                                <textarea rows={4} className="w-full px-6 py-4 rounded-2xl border border-slate-100 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-slate-50 transition-all resize-none" placeholder="¿En qué podemos ayudarte?" />
                            </div>
                            <button className="w-full py-5 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-800 transition-all shadow-xl">
                                Enviar Formulario
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
