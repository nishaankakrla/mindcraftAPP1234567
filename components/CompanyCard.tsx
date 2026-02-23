import React from 'react';
import { Company } from '../types';
import { MapPin, Briefcase, Plus, CheckCircle2 } from 'lucide-react';

interface CompanyCardProps {
    company: Company;
}

const CompanyCard: React.FC<CompanyCardProps> = ({ company }) => {
    return (
        <div className="bg-white border border-mc-border rounded-[22px] p-5 hover:shadow-float transition-all cursor-pointer group flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-2xl border-2 border-gray-50 shadow-sm overflow-hidden mb-3">
                <img src={company.logo} alt={company.name} className="w-full h-full object-cover" />
            </div>
            
            <h3 className="text-sm font-bold text-mc-text flex items-center gap-1">
                {company.name} {company.isVerified && <CheckCircle2 size={12} className="text-blue-500" />}
            </h3>
            <p className="text-[10px] text-mc-muted font-medium mb-3">{company.industry}</p>

            <div className="flex items-center gap-3 mb-4 text-[10px] text-mc-muted font-bold">
                 <span className="flex items-center gap-1"><MapPin size={10} /> {company.location}</span>
                 <span className="flex items-center gap-1"><Briefcase size={10} /> {company.openJobs} Jobs</span>
            </div>

            <button className="px-6 py-2 rounded-full border border-mc-border text-xs font-bold text-mc-text hover:bg-black hover:text-white transition-colors flex items-center gap-1.5">
                <Plus size={12} /> Follow
            </button>
        </div>
    );
};

export default CompanyCard;