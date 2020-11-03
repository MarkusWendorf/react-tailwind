import React from "react";
import cn from "classnames";
import "./icons.css";

// tslint:disable:max-line-length
// tslint:disable:jsx-alignment

interface IconProps {
    className?: string;
}

const baseClasses = "icon";

export const SettingsIcon = (props: IconProps) => (
    <svg className={cn(baseClasses, props.className)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none"
         stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <path
            d="M13 2 L13 6 11 7 8 4 4 8 7 11 6 13 2 13 2 19 6 19 7 21 4 24 8 28 11 25 13 26 13 30 19 30 19 26 21 25 24 28 28 24 25 21 26 19 30 19 30 13 26 13 25 11 28 8 24 4 21 7 19 6 19 2 Z"/>
        <circle cx="16" cy="16" r="4"/>
    </svg>
);

export const BoardIcon = (props: IconProps) => (
    <svg className={cn(baseClasses, props.className)} xmlns="http://www.w3.org/2000/svg" width="24" height="24"
         viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
        <rect x="7" y="7" width="3" height="9"/>
        <rect x="14" y="7" width="3" height="5"/>
    </svg>
);

export const DashboardIcon = (props: IconProps) => (
    <svg className={cn(baseClasses, props.className)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/>
        <line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="14"/>
    </svg>
);
