# git-husky-commitlint
https://remarkablemark.org/blog/2019/05/29/git-husky-commitlint/   
https://commitlint.js.org/#/   
https://commitlint.io/   
https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit

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

## Squashing commits on local branch
Sample:   
1. Create commit 1
```
git add .
git commit -m "feat(test): commit1"
```
check history:
```
PS D:\GitHub\kicaj29\git-sample> git log -n 1
commit d77621cbf8691ffc2a3205df356739b717406c16 (HEAD -> master)
Author: Jacek Kowalski <kicaj29@wp.pl>
Date:   Thu Jul 30 21:18:36 2020 +0200

    feat(test): commit1
```

2. Create commit 2
```
git add .
git commit -m "feat(test): commit2"
```
check history:
```
PS D:\GitHub\kicaj29\git-sample> git log -n 2
commit d47008029e955706d4edbc87ae8963d57d8ee6db (HEAD -> master)
Author: Jacek Kowalski <kicaj29@wp.pl>
Date:   Thu Jul 30 21:21:01 2020 +0200

    feat(test): commit2

commit d77621cbf8691ffc2a3205df356739b717406c16
Author: Jacek Kowalski <kicaj29@wp.pl>
Date:   Thu Jul 30 21:18:36 2020 +0200

    feat(test): commit1
```

3. Revert last 2 commits (your local changes will stay)
```
git reset --soft HEAD~2
```
check history (commit1 and commit2 are not there):
```
PS D:\GitHub\kicaj29\git-sample> git log -n 2
commit c9c9447b6ce510fcec9a5e028b53a0ad221a4dfb (HEAD -> master, origin/master, origin/HEAD)
Author: Jacek Kowalski <kicaj29@wp.pl>
Date:   Thu Jul 30 21:17:29 2020 +0200

    test(test): normal change

commit 33cd19c19450de621e08adf6e0cef0abe8c48f2b
Author: Jacek Kowalski <kicaj29@wp.pl>
Date:   Thu Jul 30 20:55:21 2020 +0200

    test(test): normal change
```

4. Commit local changes as one commit
```
git commit -m "feat(test): commit1 and commit2"
```
check history:
```
PS D:\GitHub\kicaj29\git-sample> git log -n 2
commit e1281151435f81cde3be0be59e8bc9769f7594ca (HEAD -> master)
Author: Jacek Kowalski <kicaj29@wp.pl>
Date:   Thu Jul 30 21:22:43 2020 +0200

    feat(test): commit1 and commit2

commit c9c9447b6ce510fcec9a5e028b53a0ad221a4dfb (origin/master, origin/HEAD)
Author: Jacek Kowalski <kicaj29@wp.pl>
Date:   Thu Jul 30 21:17:29 2020 +0200

    test(test): normal change
```

5. Now you can push the changes to remote branch.