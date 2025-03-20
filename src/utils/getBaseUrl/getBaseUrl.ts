const getBaseUrl = () => {
    if (process.env.NODE_ENV === 'production') {
        return 'https://notebook-fzfcc8czg0buhgcf.germanywestcentral-01.azurewebsites.net';
    }

    return 'http://localhost:5090';
};

export default getBaseUrl;