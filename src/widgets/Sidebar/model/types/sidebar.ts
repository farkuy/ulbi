import React from 'react';
import { AppRoutes } from '@/shared/config/routeConfig/routeConfig';

export interface TSidebarItem {
    path: string,
    Icon: React.FC<React.SVGProps<SVGSVGElement>>,
    text: string,
}
