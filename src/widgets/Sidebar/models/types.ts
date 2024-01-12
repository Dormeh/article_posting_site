import React from 'react';
import { User } from 'entities/User';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
    pathModify?: (authData: User) => void;
}
