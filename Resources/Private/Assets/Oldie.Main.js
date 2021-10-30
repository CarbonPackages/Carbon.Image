import lazySizes from "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";
import "lazysizes/plugins/aspectratio/ls.aspectratio";
import "lazysizes/plugins/native-loading/ls.native-loading";

function loadJS(url) {
    let script = document.createElement("script");
    script.src = url;
    script.defer = true;
    document.head.appendChild(script);
}

if ("objectFit" in document.documentElement.style === false) {
    loadJS("/_Resources/Static/Packages/Carbon.Image/Scripts/Pollyfill.ObjectFit.js");
}

if (!window.HTMLPictureElement) {
    document.createElement("picture");
    loadJS("/_Resources/Static/Packages/Carbon.Image/Scripts/Pollyfill.Picture.js");
}

lazySizes.cfg.nativeLoading = {
    setLoadingAttribute: true,
    disableListeners: {
        focus: true,
        mouseover: true,
        click: true,
        transitionend: true,
        animationend: true,
        scroll: true,
        // load: true,
        // resize: true,
    },
};
