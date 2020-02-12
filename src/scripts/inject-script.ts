
const injectScript = (src: string = '', pathElement: HTMLElement = null, isIframe: boolean = false): object => {  
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
    } else if (pathElement) {
      pathElement.appendChild(script);
      result = pathElement;
    } else {
      document.getElementsByTagName('head')[0].appendChild(script);
      result = window;
    }
    return result;
  } catch(error) {
    console.log('error:', error);
    return error;
  }
}
const injectionPlace = document.getElementById('place')
const injectionPlace2 = document.getElementById('place2')
const injectionPlace3 = document.getElementById('place3')

const element = injectScript('../../build/hello-word.js', injectionPlace, true);
console.log('element =>', element);
const element2 = injectScript('../../build/typescript.js', injectionPlace2, false);
console.log('element2 =>', element2);
const element3 = injectScript('../../build/learn.js', null, false);
console.log('element3 =>', element3);
