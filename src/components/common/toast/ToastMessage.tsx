import React from 'react';

interface ToastMessageProps {
    message: string;
}

const ToastMessage = ({ message }: ToastMessageProps) => (
    <div className="animate-slideup rounded-lg bg-gray-800 p-3 text-white shadow-lg">{message}</div>
);

export default React.memo(ToastMessage);
