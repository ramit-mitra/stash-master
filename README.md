# stash-master  
[![Build Status](https://travis-ci.org/ramit-mitra/stash-master.svg?branch=master)](https://travis-ci.org/ramit-mitra/stash-master)   

**StashMaster** allows you to create and host git repositories, create/manage users & access permission(s). This project has been designed with minimal dependencies and with an objective to be usable on multiple platforms(like, _local system, local/team server, cloud infrastructure and docker_).  

**StashMaster** is free and open source software, written in NodeJS, and powered by ExpressJS, AngularJS, HTML5 & Bootstrap4.  

## Repository overview
_**This repository has 4 branches -**_  _master_, _lite_, _vcs_, _vcs-with-jenkins_   
The **_master_** branch is used for _active development and should be avoided unless you want to contribute to this project_. The master branch has the lastest codebase and might be unstable due to ongoing enhancement. _I recomend using a **stable release** from the *releases page*,_ https://github.com/ramit-mitra/stash-master/releases

The **_lite_** branch hosts the **lite version** of this project and comes with :  
1. Git remote server, with user management features
2. **Doesn't require git** to run, only nodejs version 8.11 is recomended  
3. Doesn't have any repository viewer  
   
The **_vcs_** branch hosts the **standard version** of this project and comes with :  
1. Git remote server and repository viewer(that helps you view commits, raise and approve PR's) & with user management features   
2. **Requires git** to be present on the system and accesible via PATH
3. Recomended to run on nodejs version 8.11 and above
   
The **_vcs-with-jenkins_** branch hosts the **standard plus** version of this project and comes with :  
1. Git remote server and repository viewer(that helps you view commits, raise and approve PR's) & with user management features   
2. **Requires git and java(version 8+)** to be present on the system and accesible via PATH
3. Comes with Jenkins out of the box to integrate with stash master for DevOps CI/CD 
4. Recomended to run on nodejs version 8.11 and above

## Application requirements
All versions **require nodejs** to run. Additionally, **standardard** and **standard plus** versions **require git** to be installed and available via PATH. **Standard plus** version also **requires JAVA** version >= 8 to be installed and available via PATH. This project has been developed and tested on NodeJS version 8.11.3 and it is recomended to use 8.x version.

## Other available releases
**Docker image** is available for the _standard version_ of this project and can be found at docker hub, https://hub.docker.com/r/ramitmitra/stash-master
