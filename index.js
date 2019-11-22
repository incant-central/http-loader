'use strict';

const axios = require('axios');

function HttpLoader({
        spec,
        input = {}
    }) {

    const options = typeof spec === 'string'
        ? {
            url: spec
          }
        : spec;

    async function httpTarget(io) {

        if (typeof io === 'string') options.url = io;

        try {
            const {
                status,
                statusText,
                headers:responseHeaders,
                data:responseData
            } = await axios(options);

            return responseData;
        } catch (e) {
            // TODO: handle
            //throw e;
        }

    }

    return httpTarget;
}

module.exports = HttpLoader;

HttpLoader.study = () => [
    'url',
    'method',
    'headers',
    'params',
    'data',
    'timeout',
    'withCredentials',
    'auth',
    'responseType',
    'responseEncoding',
    'xsrfCookieName',
    'xsrfHeaderName',
    'maxContentLength',
    'maxRedirects',
    'socketPath',
    'proxy'
];
