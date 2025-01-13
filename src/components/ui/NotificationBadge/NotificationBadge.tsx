import React from 'react';
import Image from 'next/image';

const NotificationBadge = () => {
  return (
    <div className="flex items-center w-30px h-30px rounded-full overflow-hidden bg-purple-900 mix-blend-plus-lighter">
      <button className="w-3.5 h-4 m-auto">
        <Image
          src="/icons/notification.svg"
          alt="notification icon"
          width={14}
          height={16}
          className="w-3.5 h-4 m-auto"
        />
      </button>
    </div>
  );
};

export default NotificationBadge;
