// 配置文件
module.exports = {
  config: [{  // 基础配置项
    file: './package.json',
    prompts: [{ // 遵循inquirer的问题配置
      type: 'input',
      name: 'name',
      message: '请输入包名',
      default: '@tuya-fe/'
    }, {
      type: 'input',
      name: 'author',
      message: '请输入开发者',
      default: 'tuya'
    }, {
      type: 'input',
      name: 'description',
      message: '请输入项目描述'
    }]
  }],
	summary: // 最后项目总结内容
		'\n--------------------\nTo get started:\n  cd {{dist}}\n  yarn install\n  yarn run dev\n--------------------\n',
};
