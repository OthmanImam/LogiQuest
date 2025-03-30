 feat/RecentGameActivity
 feat/RecentGameActivity
// routes/AppRoutes.jsx
import { createBrowserRouter, Outlet } from "react-router-dom";
import Layout from "../layout/Layout";
// import PrivateRoutes from './PrivateRoutes'
 feat/RecentGameActivity
import NotFound from "../pages/NotFound";
import UnauthorizedResource from "../pages/UnauthorizedResource";
import Home from "../pages/Home";
// import ProtectedRoutes from "./ProtectedRoutes"
// import Account from "../pages/Account"

const router = createBrowserRouter([
  // /post/new -> add new post (protected, admin layout)
  {
    path: "/*",
    element: <NotFound />,
  },
  {
    path: "/unauthorized",
    element: <UnauthorizedResource />,
  },
  {
    path: "/",
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      // {
      //     element: <PrivateRoutes />,
      //     children: [
      //         {
      //             path: 'account',
      //             element: <Account />
      //         },
      //         {
      //             element: <ProtectedRoutes requiredRole={''} />,
      //             children: [
      //                 // {
      //                 //     path: 'home',
      //                 //     element: <Home />
      //                 // }
      //             ]
      //         }
      //     ]
      // },
    ],
  },

// import ProtectedRoutes from "./ProtectedRoutes"
import NotFound from "../pages/NotFound"
import UnauthorizedResource from "../pages/UnauthorizedResource"
import Home from '../pages/Home'
import Login from "../pages/Login"
// import Account from "../pages/Account"

const router = createBrowserRouter([
    // /post/new -> add new post (protected, admin layout)
    {
        path: '/*',
        element: <NotFound />
    },
    {
        path: '/unauthorized',
        element: <UnauthorizedResource />
    },
    {
        path: '/sign-in',
        element: <Login />
    },
    {
        path: '/',
        element: <Layout><Outlet /></Layout>,
        children: [
            {
                index: true,
                element: <Home />
            },
            // {
            //     element: <PrivateRoutes />,
            //     children: [
            //         {
            //             path: 'account',
            //             element: <Account />
            //         },
            //         {
            //             element: <ProtectedRoutes requiredRole={''} />,
            //             children: [
            //                 // {
            //                 //     path: 'home',
            //                 //     element: <Home />
            //                 // }
            //             ]
            //         }
            //     ]
            // },
        ]
    },
 main

import { createBrowserRouter, Outlet } from "react-router-dom";
import Layout from "../layout/Layout";
import NotFound from "../pages/NotFound";
import UnauthorizedResource from "../pages/UnauthorizedResource";
import Home from "../pages/Home";

// routes/AppRoutes.jsx  
import { createBrowserRouter, Outlet } from "react-router-dom"
import Layout from "../layout/Layout"
// import ProtectedRoutes from "./ProtectedRoutes"
// import Account from "../pages/Account"
import NotFound from "../pages/NotFound"
import UnauthorizedResource from "../pages/UnauthorizedResource"
import SignIn from "../pages/SignIn";
import Home from '../pages/Home'
 feat/RecentGameActivity
import LeaderboardPage from "../pages/LeaderboardPage" // Import the LeaderboardPage component
// import ProtectedRoutes from "./ProtectedRoutes"
// import Account from "../pages/Account"
 main
import GameModesPage from "../pages/GameModesPage";
import Login from "../pages/Login";

const router = createBrowserRouter([
 feat/RecentGameActivity
  {
    path: "/*",
    element: <NotFound />,
  },
  {
    path: "/unauthorized",
    element: <UnauthorizedResource />,
  },
  {
    path: "/sign-in",
    element: <Login />,
  },
  {
    path: "/",
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "game-modes",
        element: <GameModesPage />,
      },
    ],
  },
 main
]);

    // /post/new -> add new post (protected, admin layout)
    {
        path: '/*',
        element: <NotFound />
    },
    {
        path: '/unauthorized',
        element: <UnauthorizedResource />
    },
    {
        path: "/sign-in",
        element: <Login />,
    },
    {
        path: '/',
        element: <Layout><Outlet /></Layout>,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'leaderboard',
                element: <LeaderboardPage />
            },
           {
              path: "game-modes",
              element: <GameModesPage />,
            },
            // {
            //     element: <PrivateRoutes />,
            //     children: [
            //         {
            //             path: 'account',
            //             element: <Account />
            //         },
            //         {
            //             element: <ProtectedRoutes requiredRole={''} />,
            //             children: [
            //                 // {
            //                 //     path: 'home',
            //                 //     element: <Home />
            //                 // }
            //             ]
            //         }
            //     ]
            // },
        ]
    },
 main

import GameModes from "../pages/GameModes";
import GameActivity from "../pages/GameActivity"
import Dashboard from "../pages/Dashboard"

const router = createBrowserRouter([
  {
    path: '/*',
    element: <NotFound />
  },
  {
    path: '/unauthorized',
    element: <UnauthorizedResource />
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: '/app',
    element: <Layout><Outlet /></Layout>,
    children: [
      {
        index: true,
        element: <Home />   //default mode
      },
      {
        path: "get-started",
        element: <GameModes />,
      },
      {
        path: "game-activity",
        element: <GameActivity />,
      },
      // FOR TESTING PURPOSES ONLY, THESE ARE PRIVATES/PROTECTED ROUTES
      {
        path: 'dashboard',
        element: <Dashboard />
      },
      // FOR TESTING PURPOSES ONLY, THESE ARE PRIVATES/PROTECTED ROUTES

      // {
      //     element: <PrivateRoutes />,
      //     children: [
      //         {
      //             path: 'account',
      //             element: <Account />
      //         },
      //         {
      //             element: <ProtectedRoutes requiredRole={''} />,
      //             children: [
      //                 // {
      //                 //     path: 'home',
      //                 //     element: <Home />
      //                 // }
      //             ]
      //         }
      //     ]
      // },
    ]
  },

])
 main

export default router;
