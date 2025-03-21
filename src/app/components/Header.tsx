'use client';

import React from 'react';

interface HeaderProps {
    setActiveTab: (tab: string) => void; // Définir le type pour setActiveTab
}

const Header: React.FC<HeaderProps> = ({ setActiveTab }) => {
    return (
        <header className="bg-primary text-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center mb-4 md:mb-0">
                    <i className="ri-calendar-line text-2xl mr-2"></i>
                    <h1 className="text-xl font-bold">Progitek Planning</h1>
                </div>
                <nav className="w-full md:w-auto">
                    <ul className="flex flex-wrap justify-center md:justify-end space-x-1 md:space-x-4">
                        <li><button onClick={() => setActiveTab('calendar')} className="nav-btn">Calendrier</button></li>
                        <li><button onClick={() => setActiveTab('missions')} className="nav-btn">Missions</button></li>
                        <li><button onClick={() => setActiveTab('reports')} className="nav-btn">Rapports</button></li>
                        <li><button onClick={() => setActiveTab('validations')} className="nav-btn">Validations</button></li>
                        <li><button onClick={() => setActiveTab('settings')} className="nav-btn">Paramètres</button></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;