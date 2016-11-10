### Git


##### Version Control System Concept
- Git is NOT GitHub, it is the tool
- GitHub is a place to store repositories using Git tool
- Ex. Git is rocketship, GitHub is Mars


- `$ git add` (moves ship to launch pad)
- `$ git commit` (moves packages onto ship)
- `$ git remote add` (set coordinates to mars "staged")
- `$ git push` (moves the files to repo)

#### Example Project

- `$ mkdir gitProject`
- `$ cd gitProject`
- `$ git init` Initialize project
- `$ git status` Verify progress
- `$ git add fileName` Ready to commit
- `$ git commit -m "This is the initial commit."` Commit with a message
- `$ git clone git@github.com:darrenhankins/cmdLineSentence.git` Clones to current directory

#### Working with GitHub 'Pull Request' from an Existing Repo

1. Fork repo (a GitHub thing, not git)
- `$ git clone git@github.com:darrenhankins/cmdLineSentence.git` Clone repo
- Make your changes
- `$ git status` Checks the status of git
- `$ git add -A` -A add all in current directory, at the root/current directory recursive down with dot `.`
- `$ git commit -m "This is the message."` Commit with a message. If you go into VIM `:Q`
- `$ git log` Show the previous commits `Q` to exit
- `$ git push origin master` Push to the master branch
- Create pull request (a GitHub thing, not git. This will pull it to the original clone for approval)

#### Making a new Git Project for a Repo
- `$ git init`
- `$ git status`
- `$ git add -A`
- `$ git remote add origin git@github.com:darrenhankins/projectName.git` Origin is the naming convention for the initial commit
- `$ git commit -m "This is the message."`
- `$ git push origin master`

#### View Git Log File
- `$ git log --oneline --graph --decorate --all` shows the commit log list
- `$ 'press Q'` to escape out of the log list

#### Pull Changes from GitHub
- `$ git pull origin master` pull down changes from GitHub
- `$ ':Q'` to escape message

#### Set up ~/.gitconfig file
- `$ git config --global user.email "hankins.darren@gmail.com"`
- `$ git config --global user.name "darrenhankins"`

### Working with GitHub Repo (2 partners)
###### Partner 1
- `$ git init`
- `$ touch index.html`
- `$ git add -A`
- `$ git remote add origin master git@github.com:darrenhankins/git-workflow.git`

###### Partner 2
- Fork the repo (on partner 2 account)
- `$ git clone git@github.com:partner2/git-workflow.git`
- `$ atom .` make changes
- `$ git status`
- `$ git push origin master`
- Pull Request from partner 2

###### Partner 1
- Get changes from the master git repo
- `$ git pull origin master`

###### Partner 2
- Give name instead of origin (partner1) for the 'master' branch
- `$ git remote add partner1 master git@github.com:partner1/git-workflow.git`
- `$ git push origin master` (up to Partner 2 repo)

##### Git Ignore

If you already have a file checked in, and you want to ignore it, Git will not ignore the file if you add a rule later. In those cases, you must untrack the file first, by running the following command in your terminal:

- `$ touch .gitignore`
- `$ git rm --cached FILENAME`


##### Other Git Commands
- `$ git status` shows any changes in local repo
- `$ git diff` shows the changes/differences
- `$ Q`


#### GIT
- stash
- branch
- checkout
- merge
- reset
- rebase
- log

#### GIT Branches (* symbolizes the HEAD)
- `$ git log` "Q" will get out of log
- `$ git branch` show the current branch
- `$ git checkout master` switch to master branch or whatever branch you specify
- `$ git pull` fetches and merges
- `$ git fetch` just fetches
##### GIT Checkout
- `$ git checkout -b about-page` creates a new branch called 'about-page'
- `$ git push origin about-page` pushes to the branch 'about-page'
- `$ git checkout master` changes head to master
- `$ git merge about-page` merges with master
- `$ git stash apply` applies the stash
- `$ git stash list` lists the stash
- `$ git stash clear` removes the stash

- `$ git reset HEAD~1` resets the head back to 1 commits
- `$ git reset HEAD~` back to previous commit

- `$ git rebase -i HEAD`
