import React from 'react';
import { UserAvatarProps } from './UserAvatar.types';
import Image from 'next/image';

const UserAvatar = ({ src }: UserAvatarProps) => {
  return (
    <div className="relative w-45px h-45px rounded-full overflow-hidden border-2 border-white">
      <Image
        src={src}
        alt="user avatar"
        width={45}
        height={45}
        className="object-cover"
      />
    </div>
  );
};

export default UserAvatar;
