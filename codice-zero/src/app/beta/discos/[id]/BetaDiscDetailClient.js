'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, TriangleAlert } from 'lucide-react';
import { driveDiscs } from '@/data/discs';
import HighlightText from '@/components/ui/HighlightText';
import { useLanguage } from '@/context/LanguageContext';

export default function BetaDiscDetailClient() {
    const params = useParams();
    const router = useRouter();
    const { language, translateText } = useLanguage();

    const discIdParam = params.id;
    const disc = driveDiscs.find(d => d.id.toString() === discIdParam);

    const [imageLoaded, setImageLoaded] = useState(false);
    const [translatedTexts, setTranslatedTexts] = useState({});

    useEffect(() => {
        if (language === 'es' || !disc) return;
        let isActive = true;

        async function loadTranslations() {
            const stringsToTranslate = new Set();
            if (disc.name) stringsToTranslate.add(disc.name);
            if (disc.twoPiece) stringsToTranslate.add(disc.twoPiece);
            if (disc.fourPiece) stringsToTranslate.add(disc.fourPiece);

            const arr = Array.from(stringsToTranslate);
            const translations = [];
            for (const t of arr) {
                let res = await translateText(t);
                if (res && typeof res === 'string') {
                    // Match the same logic as others
                    res = res.replace(/(^|[^0-9])(?:0\.\s*|1\s*)(\{VALOR_\d+\})/g, '$1$2');
                    res = res.replace(/([a-zA-Z]+(?:\s+[a-zA-Z]+)*)\s*\(\s*\)/g, '($1)');
                }
                translations.push(res);
            }

            if (!isActive || arr.length === 0) return;
            const map = {};
            arr.forEach((str, i) => { map[str] = translations[i]; });
            setTranslatedTexts(prev => ({ ...prev, ...map }));
        }

        loadTranslations();
        return () => { isActive = false; };
    }, [disc, language, translateText]);

    if (!disc) {
        return (
            <div className="min-h-screen bg-[#09090b] flex flex-col items-center justify-center text-white p-8">
                <TriangleAlert className="w-16 h-16 text-yellow-500 mb-6 opacity-50" />
                <h1 className="text-3xl font-display font-black text-gray-300 mb-2">Disco no encontrado</h1>
                <p className="text-gray-500 mb-8">El disco de la versión Beta no existe o ha sido retirado.</p>
                <button onClick={() => router.back()} className="px-6 py-2 bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-500 border border-yellow-500/30 rounded-xl transition-all">
                    Volver atrás
                </button>
            </div>
        );
    }

    const themeColor = '#eab308';

    return (
        <div className="min-h-screen bg-[#0f0f12] text-white selection:bg-yellow-500/30 overflow-x-hidden font-sans pb-32">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-50"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-24 relative z-10">
                {/* Back Link */}
                <Link
                    href={`/${language}/beta`}
                    className="inline-flex items-center text-gray-400 hover:text-yellow-500 transition-colors mb-8 group bg-white/5 px-4 py-2 rounded-full border border-white/5 hover:border-yellow-500/30 backdrop-blur-sm"
                >
                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    <span className="text-sm font-bold tracking-wide">NOVEDADES BETA</span>
                </Link>

                {/* Header Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
                    {/* Disc Image */}
                    <div className="lg:col-span-4 xl:col-span-3">
                        <div className="relative aspect-square w-full max-w-[280px] mx-auto group">
                            <div className="absolute inset-0 bg-yellow-500/5 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
                            
                            {/* Beta Warning Icon */}
                            <div className="absolute top-0 right-0 z-30 filter drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]">
                                <div className="px-4 py-2 bg-red-500/10 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-red-400 border border-red-500/30 flex items-center gap-2">
                                    <TriangleAlert className="w-4 h-4 animate-pulse" />
                                    BETA DATA
                                </div>
                            </div>

                            <div className="relative w-full h-full p-8 flex items-center justify-center">
                                {!imageLoaded && disc.image && (
                                    <div className="absolute inset-0 z-10 flex items-center justify-center">
                                        <div className="w-32 h-32 bg-white/5 rounded-full animate-pulse" />
                                    </div>
                                )}
                                {disc.image ? (
                                    <Image
                                        src={disc.image}
                                        alt={disc.name}
                                        fill
                                        className={`object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                                        onLoad={() => setImageLoaded(true)}
                                        priority
                                        unoptimized
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-white/5 rounded-full border border-white/10 shadow-[inset_0_0_50px_rgba(0,0,0,0.5)]">
                                        <span className="text-gray-600 font-display font-black text-2xl tracking-widest opacity-50">NO ASSET</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Disc Info */}
                    <div className="lg:col-span-8 xl:col-span-9 flex flex-col justify-center gap-6">
                        <div>
                            <h1 className="text-4xl md:text-6xl font-display italic font-black text-white mb-4 tracking-wider uppercase drop-shadow-xl" style={{ textShadow: `0 0 40px ${themeColor}40` }}>
                                {translatedTexts[disc.name] || disc.name}
                            </h1>
                        </div>
                    </div>
                </div>

                {/* Disc Effects Section */}
                <div className="mb-8 flex flex-col items-center">
                    <h2 className="text-2xl md:text-4xl font-display italic font-black text-center tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600">
                        DISC EFFECTS (BETA)
                    </h2>
                    <div className="h-[2px] w-24 md:w-48 bg-gradient-to-l from-transparent to-yellow-500/50"></div>
                </div>

                <div className="flex flex-col gap-6 animate-fadeIn max-w-4xl mx-auto">
                    {/* 2 PIECE SET */}
                    <div className="bg-black/40 backdrop-blur-md border border-white/5 rounded-3xl p-6 relative overflow-hidden group hover:border-white/10 hover:shadow-[0_15px_40px_rgba(0,0,0,0.5)] transition-all duration-500 flex flex-col">
                        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-yellow-500 shadow-[0_0_15px_#eab308] rounded-l-3xl opacity-80"></div>
                        <div className="flex items-center gap-4 mb-4 pl-4 border-b border-white/5 pb-4">
                            <span className="text-sm font-black uppercase text-yellow-500 tracking-widest">CONJUNTO DE 2 PIEZAS</span>
                        </div>
                        <div className="pl-4 text-gray-300 text-sm md:text-base leading-relaxed font-sans relative z-10">
                            <HighlightText text={translatedTexts[disc.twoPiece] || disc.twoPiece} elementColor={themeColor} />
                        </div>
                    </div>

                    {/* 4 PIECE SET */}
                    <div className="bg-black/40 backdrop-blur-md border border-white/5 rounded-3xl p-6 relative overflow-hidden group hover:border-white/10 hover:shadow-[0_15px_40px_rgba(0,0,0,0.5)] transition-all duration-500 flex flex-col">
                        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-yellow-500 shadow-[0_0_15px_#eab308] rounded-l-3xl opacity-80"></div>
                        <div className="flex items-center gap-4 mb-4 pl-4 border-b border-white/5 pb-4">
                            <span className="text-sm font-black uppercase text-yellow-500 tracking-widest">CONJUNTO DE 4 PIEZAS</span>
                        </div>
                        <div className="pl-4 text-gray-300 text-sm md:text-base leading-relaxed space-y-3 font-sans relative z-10">
                            <HighlightText text={translatedTexts[disc.fourPiece] || disc.fourPiece} elementColor={themeColor} />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
