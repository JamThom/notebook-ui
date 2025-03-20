const getRouteUrl = (route: string, params: Record<string, string | number>) => {
    let url = route;
    Object.keys(params).forEach(key => {
        url = url.replace(`:${key}`, params[key].toString());
    });
    return url;
}

export default getRouteUrl;