read -p "请输入Git注释：" comment
git add .
git commit -m $comment
git push
ssh root@118.31.67.149 > /dev/null 2>&1 << eeooff
    # 云端命令
    cd /root/beltandroad
    git pull
    beltandroad_log="/root/logs/beltandroad_logs/"
    gunicorn --error-logfile=${beltandroad_log}'error.log' --access-logfile=${beltandroad_log}'access.log' -b 127.0.0.1:5000 -D app:app
    exit
eeooff
echo beltandroad部署完毕