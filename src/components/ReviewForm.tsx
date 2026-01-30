'use client';

import { useState } from 'react';

export default function ReviewForm({ businessId }: { businessId: string }) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [comment, setComment] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (rating === 0) {
            alert('Por favor selecciona una calificación');
            return;
        }
        // Here you would typically send data to an API
        console.log({ businessId, rating, comment });
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="bg-emerald-50 p-8 rounded-3xl border border-emerald-100 text-center">
                <span className="text-4xl mb-4 block">✅</span>
                <h3 className="text-xl font-bold text-emerald-900 mb-2">¡Gracias por tu reseña!</h3>
                <p className="text-emerald-700">Tu opinión ayuda a otros dueños de mascotas a elegir lo mejor.</p>
            </div>
        );
    }

    return (
        <section className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
            <h3 className="text-2xl font-bold mb-6">Deja una reseña</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Calificación</label>
                    <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                type="button"
                                className={`text-3xl transition-all ${(hover || rating) >= star ? 'text-yellow-400 scale-110' : 'text-gray-300'
                                    }`}
                                onClick={() => setRating(star)}
                                onMouseEnter={() => setHover(star)}
                                onMouseLeave={() => setHover(0)}
                            >
                                ★
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <label htmlFor="comment" className="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Comentario</label>
                    <textarea
                        id="comment"
                        rows={4}
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                        placeholder="Comparte tu experiencia..."
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="bg-gray-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-gray-800 transition-all shadow-lg"
                >
                    Enviar Reseña
                </button>
            </form>
        </section>
    );
}
