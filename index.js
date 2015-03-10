(function(global) {
    var BrowserVenderIgnore = [
        "0","name","status","closed","length","opener",
        "scrollX","pageXOffset","scrollY",
        "pageYOffset","screenX","scrollMaxX",
        "scrollMaxY","fullScreen","mozPaintCount",
        "onwheel","ondevicemotion",
        "ondeviceorientation","ondeviceproximity",
        "onuserproximity","ondevicelight","onabort",
        "onblur","onfocus","oncanplay","oncanplaythrough",
        "onchange","onclick","oncontextmenu","ondblclick",
        "ondrag","ondragend","ondragenter","ondragleave",
        "ondragover","ondragstart","ondrop","ondurationchange",
        "onemptied","onended","oninput","oninvalid","onkeydown",
        "onkeypress","onkeyup","onload","onloadeddata",
        "onloadedmetadata","onloadstart","onmousedown",
        "onmouseenter","onmouseleave","onmousemove",
        "onmouseout","onmouseover","onmouseup",
        "onpause","onplay","onplaying","onprogress",
        "onratechange","onreset","onscroll","onseeked",
        "onseeking","onselect","onshow","onstalled","onsubmit",
        "onsuspend","ontimeupdate","onvolumechange","onwaiting",
        "onmozfullscreenchange","onmozfullscreenerror",
        "onmozpointerlockchange","onmozpointerlockerror",
        "onerror","onafterprint","onbeforeprint",
        "onbeforeunload","onhashchange","onlanguagechange",
        "onmessage","onoffline","ononline","onpagehide",
        "onpageshow","onpopstate","onresize","onunload",
        "defaultstatus","defaultStatus","screenLeft"
    ];

    var util = {
        key: 'customkey',
        getName: function(prop) {
            return prop + this.key;
        },
        getObj: function(pro) {
            return global[this.getName(pro)];
        }
    };
    var rst = [];
    global[util.getName('el')] = document.createElement('iframe');
    document.body.appendChild(util.getObj('el'));
    global[util.getName('reference')] = this.frames[this.frames.length - 1];

    for (var pro in window) {
        if (
            window.hasOwnProperty(pro) &&
            !util.getObj('reference')[pro] &&
            pro.indexOf(util.key) === -1 &&
            BrowserVenderIgnore.indexOf(pro) === -1
        ) {
            rst.push(pro);
        }
    }

    document.body.removeChild(util.getObj('el'));
    console.log(rst, rst.length);
}(this));
