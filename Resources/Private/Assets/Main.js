import lazySizes from "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";
import "lazysizes/plugins/aspectratio/ls.aspectratio";
import "lazysizes/plugins/native-loading/ls.native-loading";

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
