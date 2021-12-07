export const isAllowedToWatch = (accessModel, isLoggedIn, itemRequiresSubscription, hasSubscription) => accessModel === "AVOD" || accessModel === "AUTHVOD" && (isLoggedIn || !itemRequiresSubscription) || accessModel === "SVOD" && (hasSubscription || !itemRequiresSubscription);
