import * as React from 'react';
export interface IconProps extends React.SVGProps<SVGSVGElement> {
    size?: string;
    mirror?: boolean;
    label?: string;
    role?: string;
    mirrorInRtl?: boolean;
}
