export function apolloClientBeforeCreate (
  /** @type {{
   *   apolloClientConfigObj: {
   *     link:import('@apollo/client/core').ApolloLink,
   *   },
   * }}*/ {
    apolloClientConfigObj/*, app, router, store, ssrContext, urlPath, redirect*/
  }
) {
  // if needed you can modify here the config object used for apollo client
  // instantiation
}

export function apolloClientAfterCreate (/* { apolloClient, app, router, store, ssrContext, urlPath, redirect } */) {
  // if needed you can modify here the created apollo client
}
