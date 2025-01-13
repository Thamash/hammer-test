'use client';

import React from 'react';
import { MenuItem } from 'react-pro-sidebar';
import Image from 'next/image';
import { SideMenuItemProps } from './SideMenuItem.types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SideMenuItem = ({
  isOpen,
  title,
  href,
  iconSettings,
}: SideMenuItemProps) => {
  const BOTTOM_MARGIN = '5px';
  const pathname = usePathname();

  return (
    <Link href={href}>
      <MenuItem
        component="div"
        className={`${pathname === href ? 'bg-purple-550' : ''}`}
      >
        <div
          className={`${
            isOpen ? 'menu-item-opened ' : 'menu-item-collapsed '
          } menu-label gap-6`}
        >
          <Image
            src={iconSettings.src}
            alt={iconSettings.alt}
            height={iconSettings.height}
            width={iconSettings.width}
            style={{
              height: `${iconSettings.height}px`,
              width: `${iconSettings.width}px`,
              margin: 'auto',
              marginBottom: BOTTOM_MARGIN,
            }}
          />
          <span>{title}</span>
        </div>
      </MenuItem>
    </Link>
  );
};

export default SideMenuItem;
