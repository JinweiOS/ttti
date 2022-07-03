1.新建一个a文件夹，b文件夹
2.在a文件夹中clone远端仓库，在b文件夹中clone远端仓库
3.在a仓库中，创建aa的分支，修改一个文件，add commit 推送到远端，提pr合并到主分支
4.在b仓库中，创建bb的分支，修改一个文件，add commit 推送到远端，提pr合并到主分支（远端提示无法合并）
5.切换到b的 main 分支上，同步远端 main
6.切换到b分支上bb分支上，merge main分支，并用vscode解决冲突
7.commit解决冲突后的文件，推送到远端
8.重新merge b的分支

多人协作提PR：
1.git checkout main(主分支)
2.git pull origin main(主分支)
3.git checkout [your-branch]
4.git merge main(主分支) 有冲突解决冲突，没冲突会自动merge
5.提pr