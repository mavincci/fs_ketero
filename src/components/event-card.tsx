import { UUID } from 'crypto';
import React from 'react';

interface EventCardProps {
    id: UUID,
    name: string;
    startTime: string;
    type: string;
    endTime: string;
    status: 'pending' | 'completed' | 'cancelled' | 'in-progress';
}

export const EventCard: React.FC<EventCardProps> = ({ name, type, startTime, endTime, status }) => {
    const getStatusColor = (status: string) => {
        switch (status) {
            case 'pending':
                return 'bg-yellow-100 text-yellow-800';
            case 'completed':
                return 'bg-green-100 text-green-800';
            case 'cancelled':
                return 'bg-red-100 text-red-800';
            case 'in-progress':
                return 'bg-blue-100 text-blue-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const formatTime = (time: string) => {
        return new Date(`1970-01-01T${time}`).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    return (
        <div className="cursor-pointer bg-[var(--primary-background)] rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-[var(--primary)]">{name}</h3>
                <span
                    className={`px-3 py-1 rounded-full text-sm font-medium capitalize ${getStatusColor(status)}`}
                >
                    {status}
                </span>
            </div>

            <div className='mb-3'>
                <span>{type}</span>
            </div>

            <div className="flex items-center text-gray-600">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
                <div className="flex gap-2">
                    <span>Starting</span>
                    <span>@</span>
                    <span>{formatTime(startTime)}</span>
                </div>
            </div>

            <div className="flex items-center text-gray-600">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
                <div className="flex gap-2">
                    <span>Ending</span>
                    <span>@</span>
                    <span>{formatTime(endTime)}</span>
                </div>
            </div>
        </div>
    );
};

