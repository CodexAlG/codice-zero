import { TriangleAlert } from "lucide-react";

const BetaWarning = () => {
    return (
        <div className="w-full max-w-7xl mx-auto mb-6 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl flex items-center gap-3 text-yellow-500">
            <TriangleAlert className="w-6 h-6 flex-shrink-0" />
            <p className="text-sm md:text-base font-medium">
                El contenido mostrado a continuación proviene de la Beta y no es oficial. Puede estar sujeto a cambios.
            </p>
        </div>
    );
};

export default BetaWarning;
