import { TriangleAlert } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const BetaWarning = () => {
    const { language } = useLanguage();

    return (
        <div className="w-full max-w-7xl mx-auto mb-6 p-4 bg-red-500/10 border-l-4 border-red-500 rounded-r-xl flex items-center gap-4 shadow-[0_0_20px_rgba(239,68,68,0.15)] backdrop-blur-sm">
            <div className="p-2 bg-red-500/20 rounded-full animate-pulse">
                <TriangleAlert className="w-6 h-6 text-red-500 flex-shrink-0" />
            </div>
            <div className="flex flex-col">
                <h4 className="text-red-400 font-bold uppercase tracking-wider text-xs mb-0.5">
                    {language === 'en' ? 'Content Warning' : 'Advertencia de Contenido'}
                </h4>
                <p className="text-sm md:text-base font-medium text-red-200">
                    {language === 'en' 
                        ? 'The content shown below comes from the Beta and is not official. It may be subject to change.'
                        : 'El contenido mostrado a continuación proviene de la Beta y no es oficial. Puede estar sujeto a cambios.'
                    }
                </p>
            </div>
        </div>
    );
};

export default BetaWarning;
