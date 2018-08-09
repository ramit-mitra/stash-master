/** Stash Master Angular App */
var app = angular.module('home', []);

/** Home App */
app.controller('default', function ($scope, $http, $interval) {
    $scope.stashlist = [];
    $scope.host;
    $scope.permstack = {};
    // for manage user feature
    $scope.usrs = [];
    $scope.readP = [];
    $scope.writeP = [];

    $scope.getRepoDetails = function () {
        $http.get('/api/get-repo-details').then(function (res) {
            $scope.stashlist = res.data.stashlist;
            $scope.host = res.data.host;
        });
    }

    $scope.createNewRepository = function () {
        bootbox.prompt({
            size: "medium",
            title: "Name your repository",
            inputType: "text",
            onEscape: true,
            backdrop: true,
            closeButton: false,
            callback: function (result) {
                if (result.length) {
                    $http.get('/rapi/create-repository/' + result).then(function (res) {
                        if (res.status != 500) {
                            bootbox.alert("<h3 class='font-weight-light text-center'>Your empty git repository has been created</h3><br><h4 class='font-weight-bold'>What's next ?</h4><p class='text-primary'> <i class='fa fa-bullseye' aria-hidden='true'></i> Add/Remove user and password from the User Management page <br><i class='fa fa-bullseye' aria-hidden='true'></i> Use the button 'Manage UA' to provide user access to this repository <br><i class='fa fa-bullseye' aria-hidden='true'></i> Clone the repository to your system using the clone URL provided on the repository card <br></p>");
                            toastr.success("New repository added to stash");
                        }
                    });
                }
            }
        })
    }

    $scope.deleteRepo = function (reponame) {
        bootbox.confirm("<h4 class='text-danger'>Are you sure ?</h4><br><p class='text-dark font-weight-bold'>THIS ACTION CANNOT BE UNDONE AND WILL PERMANENTLY REMOVE THE GIT REPOSITORY FROM STASH</p>", function (result) {
            if (result) {
                $http.post('/api/delete', {
                    data: reponame
                }).then(function (response) {
                    toastr.success("GIT Repository <kbd>" + reponame + "</kbd> deleted");
                });
            }
        });
    }

    $scope.userRepoMgmnt = function (reponame) {
        // fetch user vs repo permissions
        $http.get('/api/get-user-repo-perm/' + reponame).then(function (response) {
            $scope.usrs = [];
            $scope.readP = [];
            $scope.writeP = [];
            $scope.permstack = response.data;
        });
    }

    $scope.submitUserRepoMgmnt = function (reponame) {
        // purify the user choices
        let perms = [];
        for (let i in $scope.usrs) {
            let item = {};
            item.username = $scope.usrs[i];
            item.readP = $scope.readP[i] ? true : false;
            item.writeP = $scope.writeP[i] ? true : false;
            perms.push(item);
        }
        // invoke save via API
        $http.post('/api/set-user-repo-perm', {
            reponame: reponame,
            perms: JSON.stringify(perms)
        }).then(function (res) {
            toastr.success("Repository permissions updated");
        });
    }

    $scope.showAbout = function () {
        bootbox.dialog({
            message: '<div class="container text-justify"> <div class="row"> <div class="col-12"> <h1 class="display-4">About Stash Master</h1> <br><p class="font-weight-light">A concept standalone GIT Stash to create and store your GIT repositories, built entirely on NodeJS. <kbd>Stash Master</kbd> helps you manage user access and permission(s) for repositories.</p><hr> <h2 class="display-4">Credits</h2> <br><p class="font-weight-normal">Icons used on this app have been provided by <a href="https://icons8.com/">icons8.com</a>. <br>This app has been built using NodeJS v8.11, AngularJS v1.7, Bootstrap 4 & PUG. <br>Special credits to NPM package <a href="https://www.npmjs.com/package/node-git-server">node-git-server</a>.</p><hr> <h2 class="display-4">Coded and Designed by</h2> <br><h4 class="font-weight-light">Ramit Mitra, 2018</h4> </div></div></div>',
            onEscape: true,
            backdrop: true,
            closeButton: true,
            size: 'large'
        });
    }

    // scheduling tasks
    $interval($scope.getRepoDetails, 2323);
});

/** Manage User App */
app.controller('manageusers', function ($scope, $http, $interval) {
    $scope.users = [];

    $scope.getUsers = function () {
        $http.get('/api/get-users').then(function (res) {
            $scope.users = res.data;
        });
    }

    $scope.addUser = function () {
        bootbox.dialog({
            title: 'Create new stash user',
            message: '<p class="text-justify font-weight-light">Create a new stash user by filling up the form below. Once you"ve created an user, you can go ahead and provide repository specific permission from homepage.</p><br><form> <div class="form-group"> <label for="username">Username</label> <input required type="text" class="form-control" id="username" aria-describedby="username" placeholder="Enter Username"> </div><div class="form-group"> <label for="password">Password</label> <input required type="password" class="form-control" id="password" placeholder="Password"> </div></form><br>',
            onEscape: true,
            backdrop: true,
            closeButton: false,
            size: 'large',
            buttons: {
                ok: {
                    label: "Create",
                    className: 'btn-success',
                    callback: function () {
                        let username = $('#username').val().trim();
                        let password = $('#password').val().trim();
                        if (username.length == 0 || password.length == 0) {
                            toastr.error("Cannot create a user with empty username and/or, password !");
                        } else {
                            $http.post('/api/create-user', {
                                username: username,
                                password: password
                            }).then(function (res) {
                                toastr.success('New user ' + username + ' added');
                            });
                        }
                    }
                }
            }
        });
    }

    $scope.deleteUser = function (username) {
        bootbox.confirm("<h4 class='text-danger'>Are you sure ?</h4><br><p class='text-dark font-weight-bold'>THIS ACTION CANNOT BE UNDONE AND WILL PERMANENTLY REMOVE THIS USER FROM STASH</p>", function (result) {
            if (result) {
                $http.get('/api/delete-user/' + username).then(function (res) {
                    toastr.success('User with username ' + username + ' deleted !');
                });
            }
        });
    }

    $scope.updatePassword = function (username) {
        $http.get('/api/get-user-password/' + username).then(function (res) {
            let oldpwd = res.data;
            bootbox.prompt({
                size: "medium",
                inputType: "password",
                title: "Enter existing password",
                onEscape: true,
                closeButton: false,
                callback: function (result) {
                    if (result === oldpwd) {
                        bootbox.prompt({
                            size: "medium",
                            inputType: "password",
                            title: "Enter new password",
                            onEscape: true,
                            closeButton: false,
                            callback: function (result) {
                                if (result.length > 0) {
                                    $http.post('/api/set-user-password', {
                                        data: {
                                            username: username,
                                            newpwd: result,
                                        }
                                    }).then(function (res) {
                                        toastr.success("Password updated !");
                                    });
                                } else {
                                    toastr.error("Password cannot be blank, please try again !");
                                }
                            }
                        });
                    } else {
                        toastr.error("The password you entered doesnot match the existing password, please try again later !");
                    }
                }
            });
        });
    }

    $scope.showAbout = function () {
        bootbox.dialog({
            message: '<div class="container text-justify"> <div class="row"> <div class="col-12"> <h1 class="display-4">About Stash Master</h1> <br><p class="font-weight-light">A concept standalone GIT Stash to create and store your GIT repositories, built entirely on NodeJS. <kbd>Stash Master</kbd> helps you manage user access and permission(s) for repositories.</p><hr> <h2 class="display-4">Credits</h2> <br><p class="font-weight-normal">Icons used on this app have been provided by <a href="https://icons8.com/">icons8.com</a>. <br>This app has been built using NodeJS v8.11, AngularJS v1.7, Bootstrap 4 & PUG. <br>Special credits to NPM package <a href="https://www.npmjs.com/package/node-git-server">node-git-server</a>.</p><hr> <h2 class="display-4">Coded and Designed by</h2> <br><h4 class="font-weight-light"><img src="https://png.icons8.com/ios-glyphs/64/000000/source-code.png">&nbsp;&nbsp;Ramit Mitra, 2018</h4></div></div></div>',
            onEscape: true,
            backdrop: true,
            closeButton: true,
            size: 'large'
        });
    }

    // scheduling tasks
    $interval($scope.getUsers, 2323);
});

/** Service Integration App */
app.controller('svcintgn', function ($scope, $http, $interval) {

    $scope.message = '<div class="text-center"><i class="fa fa-spin fa-spinner"></i> Loading...</div>';

    $scope.getJenkinsOutput = function () {
        $http.get('/api/get-output/jenkins').then(function (res) {
            $scope.message = res.data;
        });
    }

    $scope.showJenkinsOutput = function () {
        bootbox.dialog({
            title: "Jenkins Console",
            message: $scope.message + '<br>',
            onEscape: true,
            backdrop: true,
            closeButton: false,
            size: 'large'
        });
    }

    // scheduling tasks
    $interval($scope.getJenkinsOutput, 5555);
});

/** Repository Dashboard Integration App */
app.controller('repodashboard', function ($scope, $http, $interval, $sce) {

    $scope.repohistory = [$sce.trustAsHtml('<br><div class="text-center"><i class="fa fa-spin fa-spinner fa-4x"></i></div><br>')];
    $scope.prdiff = $sce.trustAsHtml('<br>');
    $scope.selectedBranch = '';
    $scope.prmwip = '';
    $scope.webhooks = '';
    //store the hookname being created for tracking
    $scope.hookname = '';

    $scope.init = function (reponame) {
        $scope.reponame = reponame;
        toastr.success('Fetching repository details');
    }

    $scope.getRepositoryDetails = function () {
        $http.get('/rapi/get-repository-details/' + $scope.reponame).then(function (res) {
            $scope.repodetails = res.data;
        });
    }

    $scope.getPRs = function () {
        $http.get('/rapi/get-prs/' + $scope.reponame).then(function (res) {
            $scope.prlist = res.data;
        });
    }

    $scope.createNewBranch = function () {
        bootbox.prompt({
            size: "small",
            title: "Create a branch",
            onEscape: true,
            closeButton: false,
            callback: function (result) {
                if (result) {
                    $http.get("/rapi/create-branch/" + $scope.reponame + "/" + result).then(
                        function () {
                            toastr.success("Branch <kbd>" + result + "</kbd> created");
                        }
                    );
                }
            }
        });
    }

    $scope.fetchView = function (branchname) {
        $http.get('/rapi/get-commit-history/' + $scope.reponame + '/' + branchname).then(function (res) {
            if (res.status = 200 || res.status == 304) {
                $scope.repohistory = [];
                for (x in res.data.data) {
                    $scope.repohistory.push($sce.trustAsHtml(res.data.data[x]));
                }
            }
        });
    }

    $scope.getPRDiff = function () {
        $scope.prcreatebtn = false;
        if ($scope.prfrom && $scope.prto) {
            $scope.prdiff = $sce.trustAsHtml('<br><p class="text-center"><i class="fa fa-spin fa-spinner fa-2x"></i><br>Fetching changes between branches...</p>');
            $http.get('/rapi/get-pr-diff/' + $scope.reponame + '/' + $scope.prfrom + '/' + $scope.prto).then(function (res) {
                if (res.status = 200 || res.status == 304) {
                    $scope.prdiff = $sce.trustAsHtml(res.data.data);
                    if ($scope.prdiff.length > 0) {
                        $scope.prcreatebtn = true;
                    } else {
                        toastr.warning('Nothing to merge. Please try with a different set of branches.');
                    }
                }
            });
        }
    }

    $scope.raisePR = function () {
        if ($scope.prfrom && $scope.prto) {
            $http.post('/rapi/raise-pr', {
                reponame: $scope.reponame,
                prfrom: $scope.prfrom,
                prto: $scope.prto
            }).then(function (res) {
                if (res.status == 200)
                    toastr.success("New PR created");
            });
        }
    }

    $scope.approvePR = function (token) {
        $scope.prmwip = $sce.trustAsHtml('<br><p class="text-center"><i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i><br><br>Your PR is being merged, please wait...</p>');
        $http.get('/rapi/approve-pr/' + $scope.reponame + '/' + token).then(function (res) {
            if (res.status = 200 || res.status == 304) {
                $scope.prmwip = '';
                toastr.success("PR approved and merged to taget branch");
            } else {
                $scope.prmwip = '';
                toastr.error("PR merge failed. Please try again later !");
            }
        });
    }

    $scope.discardPR = function (token) {
        $http.get('/rapi/discard-pr/' + $scope.reponame + '/' + token).then(function (res) {
            if (res.status = 200 || res.status == 304) {
                toastr.success("PR discarded");
            }
        });
    }

    $scope.fetchWebhooks = function () {
        $http.get('/rapi/fetch-sample-webhooks/' + $scope.reponame).then(function (res) {
            if (res.status = 200 || res.status == 304) {
                $scope.webhooks = res.data.files;
            }
        });
    }

    $scope.loadSampleWebhookData = function () {
        if ($scope.selectedSampleWebhook.filename) {
            $scope.webhookcontent = $scope.selectedSampleWebhook.content;
            //since you're cloning the content, you need to save it as a different hook, hence name is blank
            $scope.hookname = '';
        }
    }

    $scope.createNewHook = function () {
        bootbox.prompt({
            closeButton: false,
            size: "medium",
            title: "Name new webhook as",
            callback: function (result) {
                if (result) {
                    $scope.hookname = result;
                    $http.get('/rapi/create-webhook/' + $scope.reponame + '/' + result).then(function (res) {
                        if (res.status == 500) {
                            toastr.success('Cannot create file, possibly this file already exists, please review and try again later !!!');
                        } else {
                            $scope.webhookcontent = res.data.data;
                        }
                    });
                }
            }
        });
    }

    $scope.saveWebhookContent = function () {
        if (!$scope.hookname.length > 0) {
            //filename is missing, hence ask user to provide it
            bootbox.prompt({
                closeButton: false,
                size: "medium",
                title: "Name new webhook as",
                callback: function (result) {
                    if (result) {
                        $scope.hookname = result;
                        $http.get('/rapi/create-webhook/' + $scope.reponame + '/' + result).then(function (res) {
                            if (res.status == 500) {
                                toastr.success('Cannot create file, possibly this file already exists, please review and try again later !!!');
                            } else {
                                //finally...
                                $http.post('/rapi/save-webhook', {
                                    reponame: $scope.reponame,
                                    hookname: $scope.hookname,
                                    content: $scope.webhookcontent
                                }).then(function (res) {
                                    toastr.success("Webhook saved !");
                                });
                            }
                        });
                    }
                }
            });
            //hook created, good to proceed saving
        } else {
            //then...
            $http.post('/rapi/save-webhook', {
                reponame: $scope.reponame,
                hookname: $scope.hookname,
                content: $scope.webhookcontent
            }).then(function (res) {
                toastr.success("Webhook saved !");
            });
        }
    }

    $scope.showAbout = function () {
        bootbox.dialog({
            message: '<div class="container text-justify"> <div class="row"> <div class="col-12"> <h1 class="display-4">About Stash Master</h1> <br><p class="font-weight-light">A concept standalone GIT Stash to create and store your GIT repositories, built entirely on NodeJS. <kbd>Stash Master</kbd> helps you manage user access and permission(s) for repositories.</p><hr> <h2 class="display-4">Credits</h2> <br><p class="font-weight-normal">Icons used on this app have been provided by <a href="https://icons8.com/">icons8.com</a>. <br>This app has been built using NodeJS v8.11, AngularJS v1.7, Bootstrap 4 & PUG. <br>Special credits to NPM package <a href="https://www.npmjs.com/package/node-git-server">node-git-server</a>.</p><hr> <h2 class="display-4">Coded and Designed by</h2> <br><h4 class="font-weight-light"><img src="https://png.icons8.com/ios-glyphs/64/000000/source-code.png">&nbsp;&nbsp;Ramit Mitra, 2018</h4></div></div></div>',
            onEscape: true,
            backdrop: true,
            closeButton: true,
            size: 'large'
        });
    }

    // scheduling tasks
    $interval($scope.getRepositoryDetails, 5555);
    $interval($scope.getPRs, 5555);
});