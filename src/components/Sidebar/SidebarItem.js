import React from 'react';

export const SidebarItem = [
    {
        path : "/",
        exact : true,
        sidebar : () => <div>Home</div>,
        main : () => <div>Home content</div>
    },
    {
        path : "/about",
        sidebar : () => <div>About</div>,
        main : () => <div>About content</div>
    },
    {
        path : "/services",
        sidebar : () => <div>Services</div>,
        main : () => <div>Services content</div>
    },
    {
        path : "/blog",
        sidebar : () => <div>Blog</div>,
        main : () => <div>Blog content</div>
    },
    {
        path : "/contact",
        sidebar : () => <div>Contact</div>,
        main : () => <div>Contact content</div>
    }
]