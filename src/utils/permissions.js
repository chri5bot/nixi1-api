export const isAuthedResolver = (resolver) => (obj, args, context) => {
  if (!context.user) {
    return;
  }

  return resolver(obj, args, context);
};
