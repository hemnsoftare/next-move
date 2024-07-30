import Link from "next/link";
import React from "react";

import { IconBaseProps, IconType } from "react-icons";

type CustomIconType = IconType & React.ComponentType<IconBaseProps>;

interface MenuProps {
  title: string;
  address: string;
  Icon: CustomIconType;
}

const MenuItem: React.FC<MenuProps> = ({ title, address, Icon }) => {
  return (
    <Link
      href={address}
      className="hover:text-amber-500 flex items-center gap-2"
    >
      <p className="text-2xl sm:hidden">
        <Icon />
      </p>
      <p className="uppercase hidden sm:inline text-sm">{title}</p>
    </Link>
  );
};

export default MenuItem;
