# What it does?

It simple checks what are the foreign Javascript Object of a page.

# How to use?

Just copy the content of `index.js` and past into the console

# Example

Run the code on `yahoo.de` will generate the following output

```javascript
// Yahoo uses YUI
[
"setJSCookie", "rtTop", "OnloadCache", "blurInput", "DARLA", "$sf", "Y", "TL1_rendered",
"url", "rtAdStart", "fpad_fdb", "FPAD_rendered", "YAD", "FPAD", "placeAlenty", "i",
"rtAdDone", "FOOT_rendered", "szmvars", "iom", "iam_data", "AdblockPlus", "check1", "check2",
"D", "_adLT", "DARLA_CONF", "YUI", "rtJSLoad", "moduleList", "postLoadConf", "_comscore",
"viewPlus", "udm_", "ns_p", "COMSCORE", "YAHOO", "YModules", "transportEval", "MORE_MENU_CLASS",
"MENU_EXPOSED_CLASS", "MOUSEOVER", "MOUSEOUT", "FP_SCROLL_EVENT",
"FP_RESIZE_EVENT", "yasearch", "fxsearch", "_yuid", "RequestBlackboard",
"lastApvTime", "defaultstatus", "defaultStatus", "screenLeft"
]
```

# TODO

* check how deep an object is defined
