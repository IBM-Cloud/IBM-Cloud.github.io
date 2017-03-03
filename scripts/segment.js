/*
window._analytics =
    {
        "segment_key" : '34Q2oApcF5UJE03NgXwTY6A7f6MTs3kx'
    };
*/
!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t){var e=document.createElement("script");e.type="text/javascript";e.async=!0;e.src=("https:"===document.location.protocol?"https://":"http://")+"cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n)};analytics.SNIPPET_VERSION="4.0.0";
    analytics.load("34Q2oApcF5UJE03NgXwTY6A7f6MTs3kx");
    analytics.page();
}}();

analytics.track('{ GitHub.io - Home}', {
    URL: 'https://ibm-bluemix.github.io/'
});

var Footer01 = document.getElementById('IBMBluemix');
var Footer02 = document.getElementById('IBMBluemixGitHub');


analytics.trackLink(Footer01, 'Footer | IBM Bluemix.', {
    Direct: 'https://www.ibm.com/cloud-computing/bluemix'
});
analytics.trackLink(Footer02, 'Footer | GitHub', {
    Direct: 'https://github.com/IBM-Bluemix'
});


