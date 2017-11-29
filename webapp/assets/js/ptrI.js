var ptr;
    ptr = new PullToReload({
        'refresh-element': 'ptr', //Required
        'content-element': 'app', //Required
        'border-height': 1,
        'height': 80,
        'font-size': '30px',
        'threshold': 20,
        'pre-content': '...',
        'loading-content': 'Loading...',
        'callback-loading': function(){ setTimeout(function(){ self.loadingEnd(); }, 1000); } //Required
    });
    