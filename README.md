

# melody-template-store

集成了所有的模板，供给给@melody-core/leo脚手架使用。


## melody-plugin-template

用于开发melody-cli命令行套件的模板

## 开发注意点
+ 开局先修改package.json文件
    + name : @melody-core/xxx   必须以@melody-core开头！命名不要和其他套件重复，不然无法发布
    + bin :  将“test” 修改为你自定义的命令。 不要和已有的全局命令重复哦。

+ 愉快的开发吧！
    + 注册option => Program.option()
    + 注册命令 => Program.commander()

+ 命令参数注意
    + ccc \< arg \> 尖括号内定义必传参数！
    + ccc \[arg\] 中括号内定义可选参数！  