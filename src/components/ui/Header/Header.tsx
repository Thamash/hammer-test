import React from 'react';
import NotificationBadge from '../NotificationBadge/NotificationBadge';
import UserAvatar from '../UserAvatar/UserAvatar';

const Header = () => {
  return (
    <div className="flex flex-row justify-end w-full pr-31px pt-29px pb-15px text-right">
      <div className="flex flex-row items-center gap-5">
        <NotificationBadge />
        <span className="leading-none">Teszt Etelka</span>
        <UserAvatar src="/images/user-avatar.jpeg" />
      </div>
    </div>
  );
};

export default Header;
