### Shell - Bash Commands/Script

Run multiples commands in a shell script file
```shell
#!/bin/sh

git checkout master
git fetch upstream
git rebase upstream/master
git checkout -b $1
git push -u origin $1

```

$1 is equal to the variable_name when the command below is run
```bash
$ bash script_name.sh variable_name

```
