# git-husky-commitlint
https://remarkablemark.org/blog/2019/05/29/git-husky-commitlint/   
https://commitlint.js.org/#/
https://commitlint.io/

![commit-message](./images/commit-message.png)

Husky is a very popular npm package that allows custom scripts to be ran against your repository. It can be used to hook into typical git commands.

# helpful commands

## push changes from local repo to remote
git add .
git commit -m "sample message"
git push

## revert last commit
git reset --soft HEAD~1

## show last N commits
git log -n 5