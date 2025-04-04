const getBaseUrl = () => {
    if (process.env.NODE_ENV === 'production') {
        return 'https://notebook-fzfcc8czg0buhgcf.germanywestcentral-01.azurewebsites.net';
    }

    return 'http://localhost:5000';
};

export default getBaseUrl;