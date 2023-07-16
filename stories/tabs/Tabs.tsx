import React from 'react';
import 'tailwindcss/tailwind.css'; 

// add a property to the interface for a dark theme
// when darkTheme is true, the tabs should have a dark background and white text as default
// when darkTheme is true, the selected tab should have a light background and blue text

export interface ITabsProps {
    tabNames: string[];
    selectedTab: number;
    onTabSelected: (tabName: string) => void;
    darkTheme?: boolean;
}

export const Tabs = ({ tabNames, selectedTab, onTabSelected, darkTheme }: ITabsProps) => {

    const light = (index: number) => `border border-blue-500 rounded-t-lg px-10 py-2 ${selectedTab === index ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'}`;
    const dark = (index: number) => `border border-blue-500 rounded-t-lg px-10 py-2 ${selectedTab === index ? 'bg-blue-500 text-white' : 'bg-gray-800 text-white'}`;	

    return (
        <div>
            {tabNames.map((tabName, index) => {
                return (
                    <button
                        key={tabName}
                        onClick={() => onTabSelected(tabName)}
                        className={darkTheme ? dark(index) : light(index)}
                    >
                        {tabName}
                    </button>
                );
            })}
        </div>
    );
}
