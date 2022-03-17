(() => {
    function customCss() {
        let s = document.createElement('style');
        let h = document.getElementsByTagName('head')[0];
        s.innerHTML = '*.focus{position: static!important; width:auto!important; height:auto!important; font-size:16px!important; display:block!important; border:5px solid green!important; color:#fff!important; background-color:#000!important; border-radius: 8px }'
        h.parentNode.insertBefore(s, h);
    }

    function rootFocus(value, list, counter) {
        if (value % list.length === 0) {
            setFocus(list[list.length - 1])
        } else {
            if ((value > 0) && (value <= list.length)) {
                setFocus(list[value - 1]);
            } else if (value <= 0) {
                value = list.length;
                counter.a = list.length;
            } else if (value > list.length) {
                setFocus(list[(value % list.length) - 1])
            }
        }
    }

    function setFocus(element) {
        [...document.querySelectorAll('.focus')].forEach(element => element.classList.remove('focus'));
        element.classList.add('focus');
        element.scrollIntoView({ block: "center", behavior: "smooth" });
    }

    function getElList() {
        return [...document.querySelectorAll([...arguments])];
    }

    function keyLog(e) {
        switch (e.code) {
            case 'KeyH':
                searchDirection === 'DOWN' ? hCounter.a += 1 : hCounter.a -= 1;
                break;
            case 'KeyL':
                searchDirection === 'DOWN' ? lCounter.a += 1 : lCounter.a -= 1;
                break;
            case 'KeyM':
                searchDirection === 'DOWN' ? mCounter.a += 1 : mCounter.a -= 1;
                break;
            case 'ArrowDown':
                searchDirection = 'DOWN';
                break;
            case 'ArrowUp':
                searchDirection = 'TOP';
                break;
            default:
                e.code;
        }
    }

    customCss();

    let searchDirection = 'DOWN';

    let hCounter = {
        aInternal: 0,
        aListener: function () { },
        set a(value) {
            this.aInternal = value;
            this.aListener(value);
        },
        get a() {
            return this.aInternal;
        },
        registerListener: function (listener) {
            this.aListener = listener;
        }
    };

    let lCounter = {
        aInternal: 0,
        aListener: function () { },
        set a(value) {
            this.aInternal = value;
            this.aListener(value);
        },
        get a() {
            return this.aInternal;
        },
        registerListener: function (listener) {
            this.aListener = listener;
        }
    };
    let mCounter = {
        aInternal: 0,
        aListener: function () { },
        set a(value) {
            this.aInternal = value;
            this.aListener(value);
        },
        get a() {
            return this.aInternal;
        },
        registerListener: function (listener) {
            this.aListener = listener;
        }
    };

    hCounter.registerListener(function (value) {
        let list = getElList('h1', 'h2', 'h3', 'h4', 'h5', 'h6');
        rootFocus(value, list, this)
    });

    lCounter.registerListener(function (value) {
        let list = getElList('a');
        rootFocus(value, list, this)
    });

    mCounter.registerListener(function (value) {
        let list = getElList('header', 'main', 'footer', 'article', 'aside', 'section');
        rootFocus(value, list, this)
    });

    document.addEventListener('keyup', keyLog);
})();