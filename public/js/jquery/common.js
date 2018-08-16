$('document').ready(function () {
    // enable all tooltips
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });
    //toaster configuration
    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": true,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "2000",
        "hideDuration": "1423",
        "timeOut": "5555",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }

    var pathname = window.location.pathname;
    // splash screen
    if (pathname == '/') {
        $('footer').remove();
        toastr.success('Welcome to Stash Master');
        toastr.success('A concept GIT server paired with a repository explorer that allows you to create and manage repositories and user permission.');
    } else if (pathname == '/home') { // for home only
        // copy clone command
        new ClipboardJS('#cpyCloneCmd');
        toastr.success('Fetching your awesome repositories');
    } else if (pathname == '/manage-users') { // for manage-users only
        toastr.success('Fetching active users');
    }
});

function cloneCommandCopied() {
    toastr.success('Repository URL copied');
}