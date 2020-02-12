const injectScript = (src = '', pathElement = null, isIframe = false) => {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.type = 'text/javascript';
        let result = window;
        if (isIframe && pathElement) {
            const iframe = document.createElement('iframe');
            pathElement.appendChild(iframe);
            iframe.contentWindow.document.getElementsByTagName('head')[0].appendChild(script);
            result = iframe.contentWindow;
        }
        else if (pathElement) {
            pathElement.appendChild(script);
        }
        else {
            document.getElementsByTagName('head')[0].appendChild(script);
        }
        script.onload = () => {
            console.log('result2', result);
            resolve(result);
        };
        script.onerror = () => {
            reject({ error: 'Can`t download resource.' });
        };
    });
};
const injectionPlace = document.getElementById('place');
const element = injectScript('../../build/hello-word.js', injectionPlace, true);
element.then(data => {
    console.log('then2 data', data);
}).catch(err => {
    console.log(err);
});
//# sourceMappingURL=inject-script.js.map