'use client';

import { useState } from 'react';
import { Sidebar, Menu } from 'react-pro-sidebar';
import Image from 'next/image';
import SideMenuItem from './SideMenuItem/SideMenuItem';
import { ToggleButton } from './ToggleButton/ToggleButton';
import { CLIENT_ROUTES } from '@/config/routes';

export const SideMenu = () => {
  const COLLAPSED_WIDTH = 82;
  const EXPANDED_WIDTH = 150;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="fixed top-0 left-0 h-screen z-50">
      <ToggleButton
        handleClick={() => setIsOpen((prev) => !prev)}
        expandedPosition={EXPANDED_WIDTH - 12}
        collapsedPosition={COLLAPSED_WIDTH - 12}
        isOpen={isOpen}
      />

      <Sidebar
        collapsed={!isOpen}
        width={`${EXPANDED_WIDTH}px`}
        collapsedWidth={`${COLLAPSED_WIDTH}px`}
        backgroundColor="rgb(88, 28, 135)"
        className="bg-purple-900 opacity-70 h-screen transition-all duration-300"
        rootStyles={{}}
      >
        <div className="h-16">
          <Image
            src="/icons/menu/aigency-logo.svg"
            alt="aigency logo"
            width={62}
            height={62}
            className="m-auto"
          />
        </div>
        <div className="m-auto border-hammer-gray border-t w-44px pb-4"></div>
        <Menu
          renderExpandIcon={() => null}
          menuItemStyles={{
            button: () => ({
              color: '#fff',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: isOpen ? 'flex-start' : 'center',
              gap: isOpen ? '8px' : '12px',
              height: 'fit-content',
              '&:hover': {
                backgroundColor: '#8A38F5',
              },
            }),
          }}
        >
          <SideMenuItem
            isOpen={isOpen}
            title="My projects"
            href={CLIENT_ROUTES.MY_PROJECTS}
            iconSettings={{
              width: 14,
              height: 14,
              src: '/icons/menu/my-projects.svg',
              alt: 'my projects icon',
            }}
          />
          <SideMenuItem
            isOpen={isOpen}
            title="All projects"
            href={CLIENT_ROUTES.ALL_PROJECTS}
            iconSettings={{
              width: 22,
              height: 14,
              src: '/icons/menu/all-projects.svg',
              alt: 'all projects icon',
            }}
          />
          <SideMenuItem
            isOpen={isOpen}
            title="Messages"
            href={CLIENT_ROUTES.MESSAGES}
            iconSettings={{
              width: 22,
              height: 14,
              src: '/icons/menu/messages.svg',
              alt: 'messages icon',
            }}
          />
          <SideMenuItem
            isOpen={isOpen}
            title="All contacts"
            href={CLIENT_ROUTES.ALL_CONTACTS}
            iconSettings={{
              width: 16,
              height: 19,
              src: '/icons/menu/all-contacts.svg',
              alt: 'all contacts icon',
            }}
          />
        </Menu>
      </Sidebar>
    </div>
  );
};
