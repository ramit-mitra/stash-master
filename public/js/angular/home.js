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

    $scope.deleteRepo = function (reponame) {
        bootbox.confirm("<h4 class='text-danger'>Are you sure ?</h4><br><p class='text-dark font-weight-bold'>THIS ACTION CANNOT BE UNDONE AND WILL PERMANENTLY REMOVE THE GIT REPOSITORY FROM STASH</p>", function (result) {
            if (result) {
                $http.post('/api/delete', {
                    data: reponame
                }).then(function (response) {
                    bootbox.alert("GIT Repository <kbd>" + reponame + "</kbd> deleted");
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
            bootbox.alert("Repository user access updated !");
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
                            bootbox.alert('Enter valid username and password to create a new user.');
                        } else {
                            $http.post('/api/create-user', {
                                username: username,
                                password: password
                            }).then(function (res) {
                                bootbox.alert('New user with username ' + username + ' added !');
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
                    bootbox.alert('User with username ' + username + ' deleted !');
                });
            }
        });
    }

    $scope.updatePassword = function (username) {
        $http.get('/api/get-user-password/' + username).then(function (res) {
            let oldpwd = res.data;
            bootbox.prompt("Enter existing password", function (result) {
                if (result === oldpwd) {
                    bootbox.prompt("Enter new password", function (result) {
                        $http.post('/api/set-user-password', {
                            data: {
                                username: username,
                                newpwd: result,
                            }
                        }).then(function (res) {
                            bootbox.alert("Password updated !");
                        });
                    });
                } else {
                    bootbox.alert("The password you entered doesnot match the existing password, please try again later !");
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

    $scope.init = function (reponame) {
        $scope.reponame = reponame;
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
                            bootbox.alert("Branch <kbd>" + result + "</kbd> created");
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
                    $scope.prcreatebtn = true;
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
                    bootbox.alert("New PR created !");
            });
        }
    }

    $scope.approvePR = function (token) {
        $scope.prmwip = $sce.trustAsHtml('<br><p class="text-center"><i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i><br><br>Your PR is being merged, please wait...</p>');
        $http.get('/rapi/approve-pr/' + $scope.reponame + '/' + token).then(function (res) {
            if (res.status = 200 || res.status == 304) {
                bootbox.alert("PR approved and merged to taget branch !");
            } else {
                bootbox.alert("PR merge failed !!!");
            }
        });
    }

    $scope.discardPR = function (token) {
        $http.get('/rapi/discard-pr/' + $scope.reponame + '/' + token).then(function (res) {
            if (res.status = 200 || res.status == 304) {
                bootbox.alert("PR discarded !");
            }
        });
    }

    // scheduling tasks
    $interval($scope.getRepositoryDetails, 5555);
    $interval($scope.getPRs, 5555);
});