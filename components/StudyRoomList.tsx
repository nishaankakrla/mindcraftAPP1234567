import React from 'react';
import { STUDY_ROOMS } from '../constants';
import { Video, Mic, Users, Clock } from 'lucide-react';

const StudyRoomList: React.FC = () => {
    return (
        <div className="flex flex-col h-full bg-mc-bg p-6 overflow-y-auto no-scrollbar">
            <div className="max-w-4xl mx-auto w-full">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h1 className="text-2xl font-bold text-mc-text">Study Rooms</h1>
                        <p className="text-sm text-mc-muted mt-1">Join live sessions to study together with focus timers and whiteboards.</p>
                    </div>
                    <button className="px-4 py-2 bg-mc-text text-white rounded-lg text-sm font-bold hover:bg-black transition-colors flex items-center gap-2">
                        <Video size={16} /> Create Room
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {STUDY_ROOMS.map(room => (
                        <div key={room.id} className="bg-white border-1.5 border-mc-border rounded-xl p-5 hover:border-mc-text/50 transition-all group cursor-pointer">
                            <div className="flex justify-between items-start mb-3">
                                <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border ${room.isActive ? 'bg-red-50 text-red-600 border-red-100' : 'bg-gray-100 text-gray-500 border-gray-200'}`}>
                                    {room.isActive ? 'Live Now' : 'Ended'}
                                </span>
                                <div className="flex -space-x-2">
                                    {[1,2,3].map(i => (
                                        <div key={i} className="w-6 h-6 rounded-full border border-white bg-gray-200"></div>
                                    ))}
                                </div>
                            </div>
                            
                            <h3 className="text-lg font-bold text-mc-text mb-1 group-hover:underline">{room.name}</h3>
                            <p className="text-sm text-mc-muted mb-4">{room.subject}</p>
                            
                            <div className="flex items-center justify-between pt-4 border-t border-mc-border/10">
                                <div className="flex items-center gap-3 text-xs text-mc-muted font-medium">
                                    <span className="flex items-center gap-1"><Users size={14} /> {room.participants}</span>
                                    <span className="flex items-center gap-1"><Clock size={14} /> 45m session</span>
                                </div>
                                <button className="px-3 py-1.5 rounded-lg border border-mc-border/20 hover:bg-mc-bg text-xs font-bold text-mc-text transition-colors">
                                    Join Room
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StudyRoomList;