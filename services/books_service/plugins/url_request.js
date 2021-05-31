const url = require('url');

const getRequestUrl = (request) => {
    const { protocol } = request;
    const host = request.get('host');

    const formatHostByPort = (servicePort) => {
        const [ base, ] = host.split(':');
        const serviceHost = [base, servicePort].join(':');
        return serviceHost;
    };

    const formatUrl = (port, apiPart) => {
        const targetHost = formatHostByPort(port);
        const targetUrl = url.format({
            protocol,
            host: targetHost,
            pathname: `${apiPart}`,
        });
        return targetUrl;
    };

    return {
        formatUrl,
        formatHostByPort,
        host,
        protocol,
    };
};

module.exports = {
    getRequestUrl,
};