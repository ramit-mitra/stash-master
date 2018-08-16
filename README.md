# stash-master  
**StashMaster** allows you to create and host git repositories, create/manage users & access permission(s). This project has been designed with minimal dependencies and with an objective to be usable on multiple platforms(like, _local system, cloud infrastructure and docker_).  

**StashMaster** is free and open source software, written in NodeJS, and powered by ExpressJS, AngularJS, HTML5 & Bootstrap4.  


## Basic guidelines
This repository has 4 branches.  
The **_master_** branch is used for _active development and should be avoided unless you want to contribute to this project_.

The **_lite_** branch hosts the lite version of this project and comes with :  
1. Git remote server, with user management features
2. **Doesn't require git** to run, only nodejs version 8.11 is recomended  
3. Doesn't have any repository viewer  
   
The **_vcs_** branch hosts the standard version of this project and comes with :  
1. Git remote server and repository viewer(that helps you view commits, raise and approve PR's) & with user management features   
2. **Requires git** to be present on the system and accesible via PATH
3. Recomended to run on nodejs version 8.11 and above
   
The **_vcs-with-jenkins_** branch hosts the standard plus version of this project and comes with :  
1. Git remote server and repository viewer(that helps you view commits, raise and approve PR's) & with user management features   
2. **Requires git** to be present on the system and accesible via PATH
3. Recomended to run on nodejs version 8.11 and above