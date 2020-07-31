- [git-husky-commitlint](#git-husky-commitlint)
- [helpful commands](#helpful-commands)
  * [push changes from local repo to remote](#push-changes-from-local-repo-to-remote)
  * [revert last commit](#revert-last-commit)
  * [show last N commits](#show-last-n-commits)
  * [Squashing commits on local branch](#squashing-commits-on-local-branch)
  * [Squashing commits on remote branch](#squashing-commits-on-remote-branch)
  * [set author name and email](#set-author-name-and-email)
  * [edit git config files](#edit-git-config-files)



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
git log -n 2 origin/master

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

## Squashing commits on remote branch

1. Create 3 local commits and push them to the remote branch

```
git add .
git commit -m "docs(readme.md): my commit1"
git push
```
```
git add .
git commit -m "docs(readme.md): my commit2"
git push
```
```
git add .
git commit -m "docs(readme.md): my commit3"
git push
```

check history on remote branch:
```
PS D:\GitHub\kicaj29\git-sample> git log -n 4 origin/master
commit 845bdbb275ef4caddc4eb31df41fbbc580ef41b8 (HEAD -> master, origin/master, origin/HEAD)
Author: Jacek Kowalski <kicaj29@wp>
Date:   Fri Jul 31 08:28:22 2020 +0200

    docs(readme.md): my commit3

commit 0fe6259c019c7771f948cc5699ec62f7a111b17f
Author: Jacek Kowalski <kicaj29@wp>
Date:   Fri Jul 31 08:10:22 2020 +0200

    docs(readme.md): my commit2

commit 2375c2364c0415fb76bd7b117b824a0d201449ad
Author: Jacek Kowalski <kicaj29@wp>
Date:   Fri Jul 31 08:05:31 2020 +0200

    docs(readme.md): my commit1

commit 874ab4824ab2d0a3860a11aa3108bf081337d068
Author: Jacek Kowalski <kicaj29@wp>
Date:   Thu Jul 30 21:35:48 2020 +0200

    docs(readme.md): how to do squashing on local branch
```

![remote-history](./images/remote-history.png)

2. Squash commits locally with (to do it you cannot have any local changes)
```
git rebase -i origin/master~3 master
```

It will open GNU nano editor. Type squash for commit2 and commit3: 
![editor-squash](./images/editor-squash.png)

Next press Ctrl+o to save the changes and press Enter to confirm it.
![editor-squash-save](./images/editor-squash-save.png)

Next press Ctrl+x to close the file. It will open next editor:

![editor-commits](./images/editor-commits.png)   

Comment out commit 2 and 3 and update text for commit 1:

![editor-commits-after-change](./images/editor-commits-after-change.png)

Save and close the changes: ctrl+o, enter, ctrl + x.

```
PS D:\GitHub\kicaj29\git-sample> git rebase -i origin/master~3 master
[detached HEAD 87320cf] docs(readme.md): example how to do squash for commits from remote branch
 Date: Fri Jul 31 08:05:31 2020 +0200
 Committer: Jacek Kowalski <kicaj29@wp.pl>
Your name and email address were configured automatically based
on your username and hostname. Please check that they are accurate.
You can suppress this message by setting them explicitly. Run the
following command and follow the instructions in your editor to edit
your configuration file:

    git config --global --edit

After doing this, you may fix the identity used for this commit with:

    git commit --amend --reset-author

 2 files changed, 26 insertions(+), 3 deletions(-)
Successfully rebased and updated refs/heads/master.
```

check local barnch history, commits 1, 2, 3 are squashed into one new commit "docs(readme.md): example how to do squash for commits from remote branch":
```
PS D:\GitHub\kicaj29\git-sample> git log -n 3
commit 87320cff22ff065b3a61344dda5358711cb421c2 (HEAD -> master)
Author: Jacek Kowalski <kicaj29@wp.pl>
Date:   Fri Jul 31 08:05:31 2020 +0200

    docs(readme.md): example how to do squash for commits from remote branch

commit 874ab4824ab2d0a3860a11aa3108bf081337d068
Author: Jacek Kowalski <kicaj29@wp.pl>
Date:   Thu Jul 30 21:35:48 2020 +0200

    docs(readme.md): how to do squashing on local branch

commit e1281151435f81cde3be0be59e8bc9769f7594ca
Author: Jacek Kowalski <kicaj29@wp.pl>
Date:   Thu Jul 30 21:22:43 2020 +0200

    feat(test): commit1 and commit2
```

check history on remote branch, for now there are no changes on remote branch!:

```
PS D:\GitHub\kicaj29\git-sample> git log -n 3 origin/master
commit 845bdbb275ef4caddc4eb31df41fbbc580ef41b8 (origin/master, origin/HEAD)
Author: Jacek Kowalski <kicaj29@wp.pl>
Date:   Fri Jul 31 08:28:22 2020 +0200

    docs(readme.md): my commit3

commit 0fe6259c019c7771f948cc5699ec62f7a111b17f
Author: Jacek Kowalski <kicaj29@wp.pl>
Date:   Fri Jul 31 08:10:22 2020 +0200

    docs(readme.md): my commit2

commit 2375c2364c0415fb76bd7b117b824a0d201449ad
Author: Jacek Kowalski <kicaj29@wp.pl>
Date:   Fri Jul 31 08:05:31 2020 +0200

    docs(readme.md): my commit1
```

3. push the changes to the remote branch:

```
git push origin +master
```

![remote-history-after-squash](./images/remote-history-after-squash.png)

## set author name and email
globally:
```
git config --global user.name "John Doe"
git config --global user.email "john@doe.org"
```
for selected repo (go to the repo folder and execute it):
```
git config user.name "John Doe"
git config user.email "john@doe.org"
```

## edit git config files
```
git config --global --edit
git config --system --edit
git config --local --edit
```