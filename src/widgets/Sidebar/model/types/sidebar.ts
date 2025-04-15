import React from 'react';

export interface TSidebarItem {
    path: string,
    Icon: React.FC<React.SVGProps<SVGSVGElement>>,
    text: string,
}
