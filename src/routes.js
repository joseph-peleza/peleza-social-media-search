import React from "react";
import { Navigate } from 'react-router-dom';
import SocialMediaSearchPage from "./pages/SocialMediaSearchPage.js";
import InternetSearchPage from "./pages/InternetSearchPage.js";
import InternetSearchResults from "./pages/results/InternetSearchResults";
import SocialMediaSearchResults from "./pages/results/SocialMediaSearchResults";

const routes = [
    { path: '/', element: <Navigate to="/app/social-media-search-page" /> },
    { path: '*', element: <Navigate to="/app/social-media-search-page" /> },
    { path: '/social-media-search-results', element: <Navigate to="/app/social-media-search-results" /> },
    { path: '/InternetSearchPage', element: <Navigate to="/app/InternetSearchPage" /> },


    {
        path: 'app',
        children: [
            { path: 'social-media-search-page', element: <SocialMediaSearchPage /> },
            { path: 'social-media-search-results', element: <SocialMediaSearchResults /> },
            { path: 'InternetSearchPage', element: <InternetSearchPage /> },
            { path: 'InternetSearchResults', element: <InternetSearchResults /> },
            
        ]
    },

];

export default routes;