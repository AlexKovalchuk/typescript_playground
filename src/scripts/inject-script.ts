

const injectScript = async (src: string = '', pathElement: HTMLElement = null, isIframe: boolean = false) => {  
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
    // return result
    script.onload = () => {
      console.log('result', result);
      // return new Promise(resolve => {
      //   resolve(result);
      // })
      return result
    };
    script.onerror = () => {
      return {error: 'Can`t download resource.'}
    }
  } catch(error) {
    console.log('error:', error);
    return error;
  }
}

const injectScript2 = (src: string = '', pathElement: HTMLElement = null, isIframe: boolean = false) => {  
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
    } else if (pathElement) {
      pathElement.appendChild(script);
      result = pathElement;
    } else {
      document.getElementsByTagName('head')[0].appendChild(script);
      result = window;
    }

    script.onload = () => {
      console.log('result', result);
      resolve(result);
    };
    script.onerror = () => {
      return {error: 'Can`t download resource.'};
    }
  })
}

const injectionPlace = document.getElementById('place')
const injectionPlace2 = document.getElementById('place2')
const injectionPlace3 = document.getElementById('place3')

const element = injectScript2('../../build/hello-word.js', injectionPlace, true);
element.then(data => {
  console.log('then data', data);
}).catch(err => {
  console.log(err);
});
console.log('element =>', element);
// const element2 = injectScript('../../build/typescript.js', injectionPlace2, false);
// console.log('element2 =>', element2);
// const element3 = injectScript('../../build/learn.js', null, false);
// console.log('element3 =>', element3);
// const element4 = injectScript('/C', null, false);
// console.log('element4 =>', element4);
