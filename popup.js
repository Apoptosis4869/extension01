
// document is ready not jquery
document.addEventListener('DOMContentLoaded', function() {
    // get url param and set to selection0
    var url = window.location.href;
    var urlParam = url.split('?')[1];
    var selectionText = urlParam.split('=')[1];
    document.getElementById('selection0').innerHTML = decodeURIComponent(selectionText);
    // window.location.href = decodeURIComponent(selectionText);
});