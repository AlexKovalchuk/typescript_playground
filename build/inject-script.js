const injectScript = (src = '', pathElement = null, isIframe = false) => {
    try {
        const script = document.createElement('script');
        script.src = src;
        script.type = 'text/javascript';
        let result = null;
        if (isIframe && pathElement) {
            const iframe = document.createElement('iframe');
            pathElement.appendChild(iframe);
            iframe.contentWindow.document.getElementsByTagName('head')[0].appendChild(script);
            result = iframe.contentWindow;
        }
        else if (pathElement) {
            console.log(2);
            pathElement.appendChild(script);
            result = pathElement;
        }
        else {
            console.log(3);
            document.getElementsByTagName('head')[0].appendChild(script);
            result = Window;
        }
        return result;
    }
    catch (error) {
        console.log('error:', error);
        return error;
    }
};
const injectionPlace = document.getElementById('place');
console.log('injectionPlace', injectionPlace);
const element = injectScript('../../build/hello-word.js', injectionPlace, true);
console.log('element =>', element);
//# sourceMappingURL=inject-script.js.map