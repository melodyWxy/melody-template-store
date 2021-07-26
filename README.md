

# melody-template-store

集成了所有的模板，供给给@melody-core/leo脚手架使用。


## 重要-模板开发与维护须知

### publish命令即可

+ 如果你想发布一个模板？
```shell
    # 在你的模板项目根目录下，运行此命令即可。
    # 注意运行此命令需要@六弦提供给你权限。
    leo publish <template-name>
```
+ 迭代一个模板？
同样的命令！
```shell
    # 在你的模板项目根目录下，运行此命令即可。
    leo publish <template-name>
    # template-name仍然是你之前填的name
    # 这时候leo会提示你 远端存在同名模板，是否覆盖
    # 覆盖即更新！
    # 当然，你也可以在template-name后面添加版本数字，以保留之前的远端模板。
    # 例如：  leo publish react-spa-template@1.0.2
```
