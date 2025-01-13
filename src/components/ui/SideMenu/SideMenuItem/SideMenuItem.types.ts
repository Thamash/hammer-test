interface iconSettings {
  width: number;
  height: number;
  src: string;
  alt: string;
}

export interface SideMenuItemProps {
  isOpen: boolean;
  title: string;
  href: string;
  iconSettings: iconSettings;
}
