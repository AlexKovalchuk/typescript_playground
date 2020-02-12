var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const injectScript = (src = '', pathElement = null, isIframe = false) => __awaiter(this, void 0, void 0, function* () {
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
            pathElement.appendChild(script);
            result = pathElement;
        }
        else {
            document.getElementsByTagName('head')[0].appendChild(script);
            result = window;
        }
        script.onload = () => {
            console.log('result', result);
            return result;
        };
        script.onerror = () => {
            return { error: 'Can`t download resource.' };
        };
    }
    catch (error) {
        console.log('error:', error);
        return error;
    }
});
const injectScript2 = (src = '', pathElement = null, isIframe = false) => {
    return new Promise((resolve, reject) => {
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
            pathElement.appendChild(script);
            result = pathElement;
        }
        else {
            document.getElementsByTagName('head')[0].appendChild(script);
            result = window;
        }
        script.onload = () => {
            console.log('result', result);
            resolve(result);
        };
        script.onerror = () => {
            return { error: 'Can`t download resource.' };
        };
    });
};
const injectionPlace = document.getElementById('place');
const injectionPlace2 = document.getElementById('place2');
const injectionPlace3 = document.getElementById('place3');
const element = injectScript2('../../build/hello-word.js', injectionPlace, true);
element.then(data => {
    console.log('then data', data);
}).catch(err => {
    console.log(err);
});
console.log('element =>', element);
//# sourceMappingURL=inject-script.js.map