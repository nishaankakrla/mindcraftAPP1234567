import React from 'react';
import { Application } from '../types';
import { ChevronRight, Calendar, Sparkles } from 'lucide-react';

interface ApplicationRowProps {
    app: Application;
}

const ApplicationRow: React.FC<ApplicationRowProps> = ({ app }) => {
    
    const getStatusColor = (status: string) => {
        switch(status) {
            case 'Offer': return 'bg-emerald-100 text-emerald-700 border-emerald-200';
            case 'Interview': return 'bg-purple-100 text-purple-700 border-purple-200';
            case 'Rejected': return 'bg-red-50 text-red-600 border-red-100 opacity-60';
            default: return 'bg-blue-50 text-blue-700 border-blue-100';
        }
    };

    return (
        <div className="bg-white border border-mc-border rounded-xl p-4 flex items-center gap-4 hover:shadow-sm transition-shadow cursor-pointer">
            <div className="w-10 h-10 rounded-lg border border-gray-100 overflow-hidden shrink-0">
                <img src={app.companyLogo} alt={app.companyName} className="w-full h-full object-cover" />
            </div>
            
            <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-0.5">
                    <h4 className="text-sm font-bold text-mc-text truncate">{app.jobTitle}</h4>
                    <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wide border ${getStatusColor(app.status)}`}>
                        {app.status}
                    </span>
                </div>
                <div className="flex items-center gap-3 text-[10px] text-mc-muted font-medium">
                    <span>{app.companyName}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                    <span className="flex items-center gap-1"><Calendar size={10} /> {app.appliedDate}</span>
                </div>
                {app.nextStep && (
                     <div className="mt-2 text-[10px] font-bold text-mc-text bg-gray-50 px-2 py-1 rounded-md inline-block">
                        👉 Next: {app.nextStep}
                     </div>
                )}
            </div>

            <div className="text-right hidden sm:block">
                 <div className="flex items-center justify-end gap-1 text-[10px] font-bold text-mc-text mb-1">
                     <Sparkles size={10} className="text-purple-600" /> {app.matchScore}% Match
                 </div>
                 <div className="w-20 h-1.5 bg-gray-100 rounded-full overflow-hidden ml-auto">
                     <div className="h-full bg-black rounded-full" style={{ width: `${app.matchScore}%` }}></div>
                 </div>
            </div>

            <ChevronRight size={16} className="text-mc-muted" />
        </div>
    );
};

export default ApplicationRow;