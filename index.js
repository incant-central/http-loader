'use strict';

const axios = require('axios');

function HttpLoader({ spec } = {}) {

    const {
        url,
        method = 'get',
        headers = {},
        params = {},
        data = {},
        timeout = 0,
        withCredentials = false,
        auth = {},
        responseType = 'json',
        responseEncoding = 'utf8',
        xsrfCookieName = 'XSRF-TOKEN',
        xsrfHeaderName = 'X-XSRF-TOKEN',
        maxContentLength = 2000,
        maxRedirects = 5,
        socketPath = null,
        proxy = null
    } = spec;

    async function httpTarget(data = {}, { name:cmdPath }) {
        const requestOptions = {
            url,
            method,
            headers,
            params,
            data,
            timeout,
            withCredentials,
            auth,
            responseType,
            responseEncoding,
            xsrfCookieName,
            xsrfHeaderName,
            maxContentLength,
            maxRedirects,
            socketPath,
            proxy
        };

        const {
            status,
            statusText,
            headers,
            data
        } = await axios(requestOptions);

        return data;
    }

    return httpTarget;
}

module.exports = HttpLoader;
