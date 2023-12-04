import React, { memo, Suspense, useCallback } from "react";
import { Route, Routes } from "react-router-dom";
// import { PageLoader } from 'shared/ui/PageLoader/PageLoader';
import { RequireAuth } from "app/providers/router/ui/RequireAuth";
import { Loader } from "shared/ui/Loader/Loader";
import { AppRoutesProps } from "shared/types/router";
import { routeConfig } from "../config/routeConfig";

const AppRouter = () => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const element = <Suspense fallback={<Loader />}>{route.element}</Suspense>;
    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          route.authOnly ? (
            <RequireAuth roles={route.roles}>{element}</RequireAuth>
          ) : (
            element
          )
        }
      />
    );
  }, []);

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};

export default memo(AppRouter);

// const routes = useMemo(
//   () =>
//     Object.values(routeConfig).filter((route) => {
//       if (route.authOnly && !isAuth) {
//         return false;
//       }
//       return true;
//     }),
//   [isAuth]
// );
