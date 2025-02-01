import { AppRoutes } from 'shared/config/routeConfig/routeConfig';
import React from 'react';

export interface TSidebarItem {
    path: string,
    Icon: React.SFC<React.SVGProps<SVGSVGElement>>,
    text: string,
}
