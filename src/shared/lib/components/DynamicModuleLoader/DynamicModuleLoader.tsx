import {
  ReduxStoreWithManager,
  StateSchema,
} from "app/providers/StoreProvider";
import { useDispatch, useStore } from "react-redux";
import { ReactNode, useEffect } from "react";
import { Reducer } from "@reduxjs/toolkit";
import { StateSchemaKey } from "app/providers/StoreProvider/config/StateSchema";

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>;
};

interface DynamicModuleLoaderProps {
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
  children: ReactNode;
}

export const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
  const { children, reducers, removeAfterUnmount = true } = props;

  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useDispatch();

  useEffect(() => {
    const mountedReducers = store.reducerManager.getMountedReducers();
    Object.entries(reducers).forEach(([name, reducer]) => {
      const mounted = mountedReducers[name as StateSchemaKey];
      // adding a new reducer only in case it does not exist
      if (!mounted) {
        store.reducerManager.add(name as StateSchemaKey, reducer);
        dispatch({ type: `@INIT ${name}` });
      }
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name, reducer]) => {
          store.reducerManager.add(name as StateSchemaKey, reducer);
          dispatch({ type: `@destroy ${name}` });
        });
      }
    };
  }, []);

  return <>{children}</>;
};
