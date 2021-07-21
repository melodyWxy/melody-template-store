#!/usr/bin/env node

const { Command } = require("commander");
const program = new Command();
class Main {
   start() {
    // 版本
    program
      .version(require("./package.json").version)
      .option("-v, --version", "查看当前版本");

    // 注册命令test1
    program.command("test <arg>")
        .description('测试命令1')
        .action(async (pk)=>{
             // todosth
            console.log('test1命令的参数:', pk);
        })

    // 注册命令 test2
    program.command("test2 [arg]")
        .description( "测试命令2")
        .action(async (arg)=>{
            // todosth
            console.log(arg);
        })

    // 解析环境参数，不要删除
    program.parse(process.argv);
  }
}


new Main().start();
