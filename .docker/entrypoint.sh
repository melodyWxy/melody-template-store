#! /bin/bash
## 需要在发布平台添加一下环境变量

echo $APP_NAME
echo $APP_REGION
echo $APP_VERSION
generate() {
  cat > "www/$TUYA_ENV.tpl" <<EOF
    <script>window.ENV="$TUYA_ENV"</script>
EOF
}
inject() {
  if [ -z $TUYA_ENV ]; then
    echo "缺少TUYA_ENV"
  else
    echo "当前需要注入的ENV: $TUYA_ENV"
    generate
    if [ -z www/$TUYA_ENV.tpl ];then
      echo "不存在当前环境的tpl"
    else
      sed -i "/<head>/r www/$TUYA_ENV.tpl" "www/index.html"
      if [ $? -ne 0 ]; then
        echo "注入失败"
      else
        echo "注入成功"
      fi
    fi
  fi
}
inject
nginx -g "daemon off;"
