/** Stash Master Angular App */
var app = angular.module('home', []);

/** Home App */
app.controller('default', function ($scope, $http, $interval) {
    $scope.stashlist = [];
    $scope.host;

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
            console.log(response.data);
            bootbox.dialog({
                title: 'Manage User Access',
                message: '<p class="text-justify font-weight-light">Create a new stash user by filling up the form below. Once you"ve created an user, you can go ahead and provide repository specific permission from homepage.</p><br><form> <div class="form-group"> <label for="username">Username</label> <input required type="text" class="form-control" id="username" aria-describedby="username" placeholder="Enter Username"> </div><div class="form-group"> <label for="password">Password</label> <input required type="password" class="form-control" id="password" placeholder="Password"> </div></form><br>',
                onEscape: true,
                backdrop: true,
                closeButton: false,
                size: 'large',
                buttons: {
                    ok: {
                        label: "Update",
                        className: 'btn-secondary',
                        callback: function () {
                            alert(555);
                        }
                    }
                }
            });
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
    $interval($scope.getUsers, 2323);
});