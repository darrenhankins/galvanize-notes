### Git Commands

```terminal

$ npm install gitignore -g
$ gitignore -types

$ touch .gitignore
$ echo "node_modules" >> .gitignore
$ echo "Icon?" >> .gitignore
$ echo "*/Icon?" >> .gitignore

$ echo "# repo-name" >> README.md
$ git init
$ git remote add origin git@github.com:darrenhankins/repo-name.git

$ git add -A  // add all
$ git commit -m "message here"
$ git push origin master
$ git push origin branch-name-here



// add a
$ git remote add branch-name git@github.com:darrenhankins/warmup-exercise.git

$ git branch  // shows all branches
$ git checkout branch-name-here  // switch branch
$ git checkout -b branch-name  // creates a branch
$ git branch -d branch-name  // deletes a branch
$ git branch -D branch-name  // forces a branch delete

$ git status
$ git remote -v  // show all remotes
$ git reset  // removes any adds prior to commit
$ git reset HEAD // undoes the add

$ git clean -n  // shows untracked files that will be deleted
$ git clean -f  // removes untracked files

// remove node_modules from github account
#add 'node_modules' to .gitignore file
$ git rm -r --cached node_modules
$ git commit -m 'Remove the now ignored directory node_modules'
$ git push origin master


```
