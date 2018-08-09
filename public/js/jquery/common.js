$('document').ready(function () {
    // enable all tooltips
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });

    var pathname = window.location.pathname;
    // splash screen
    if (pathname == '/') {
        $('footer').remove();
        toastr.success('Welcome to Stash Master');
    } else if (pathname == '/home') { // for home only
        // copy clone command
        new ClipboardJS('#cpyCloneCmd');
    }
});

function cloneCommandCopied() {
    toastr.success('Repository URL copied');
}