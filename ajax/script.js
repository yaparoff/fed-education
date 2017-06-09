var userName = document.querySelector('#userName');
var publicReposCount = document.querySelector('#publicRepos');
var repoName = document.querySelector('#repoName');
var avatar = document.querySelector('.user-info__avatar');
var issuesCount = document.querySelector('#issuesCount');

function showUserInfo(user) {
    var xhr = new XMLHttpRequest();
    var path = 'https://api.github.com/users/' + user;
    xhr.open('GET', path, true);
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState != 4) return;
        if (xhr.status != 200) {
            alert( xhr.status + ': ' + xhr.statusText );
        } else {
            var obj = JSON.parse(xhr.responseText);
            userName.innerHTML = obj.login;
            publicReposCount.innerHTML = obj.public_repos;
            avatar.src = obj.avatar_url;
        }
    }
}
showUserInfo('yaparoff');

function showRepositoryInfo(user, repo) {
    var xhr = new XMLHttpRequest();
    var path = 'https://api.github.com/repos/' + user + '/' + repo;
    xhr.open('GET', path, true);
    
    xhr.onreadystatechange = function() {
    if (xhr.readyState != 4) return;
        if (xhr.status != 200) {
            alert( xhr.status + ': ' + xhr.statusText );
        } else {
            var obj = JSON.parse(xhr.responseText);
            repoName.innerHTML = obj.name;
            issuesCount.innerHTML = obj.open_issues_count;
        }
    } 
    xhr.send();
}
showRepositoryInfo('yaparoff', 'fed-education');


var submit = document.querySelector('.form__submit');
var issueTitle = document.querySelector('#issueTitle');
var issueBody = document.querySelector('#issueBody');

submit.addEventListener('click', function(event) {
    event.preventDefault();
    createIssue('yaparoff', 'fed-education');
});

function createIssue(user, repo) {
    if (issueTitle.value.trim == '') {
        alert('Error! Issue title is empty!');
    } else {
        console.log(123);
        //var token = '5b6d480daf6e887060d0d71fa107f3db0a8ffc13';
        var token = 'a02ee412474124dec452c29a2468888b4bb64924';
        params = {
            "title": issueTitle.value,
            "body": issueBody.value
        }
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://api.github.com/repos/' + user + '/' + repo + '/issues', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.setRequestHeader('Authorization', 'token ' + token);
        xhr.send(JSON.stringify(params));
        xhr.onerror = function(e) {

            console.log(e.target.status);
            console.log('str');
        },
        xhr.onload = function() {

            showRepositoryInfo(user, repo);
            
        }
        //location.reload();
    }
}