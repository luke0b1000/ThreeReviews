import React from 'react';

export const Header = () => (
    <div className="header">
        <div>
            <a href="/">Home</a>
        </div>
        <div className="dropdown">
            <span>Categories</span>
            <div className="dropdown-content">
                <div>
                    <a href="/laptops">Laptops</a>
                </div>
                <div>
                    <a href="/phones">Phones</a>
                </div>
                <div>
                    <a href="/browsers">Browsers</a>
                </div>
            </div>
        </div>
        <div>
            <a href="/coronavirus">CORONAVIRUS</a>
        </div>
        <div>
            <a href="/about">About</a>
        </div>
    </div>
);
