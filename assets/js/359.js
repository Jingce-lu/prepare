(window.webpackJsonp=window.webpackJsonp||[]).push([[359],{486:function(s,a,e){"use strict";e.r(a);var n=e(1),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"node项目服务器部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#node项目服务器部署","aria-hidden":"true"}},[s._v("#")]),s._v(" node项目服务器部署")]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#node%E9%A1%B9%E7%9B%AE%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%83%A8%E7%BD%B2"}},[s._v("node项目服务器部署")]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#1linux%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%AE%89%E8%A3%85node"}},[s._v("1.linux服务器安装node")])]),s._v(" "),e("li",[e("a",{attrs:{href:"#2%E5%AE%89%E8%A3%85pm2"}},[s._v("2.安装pm2")])]),s._v(" "),e("li",[e("a",{attrs:{href:"#3%E5%AE%89%E8%A3%85mysql"}},[s._v("3.安装mysql")])]),s._v(" "),e("li",[e("a",{attrs:{href:"#4%E5%AE%89%E8%A3%85nginx"}},[s._v("4.安装nginx")])]),s._v(" "),e("li",[e("a",{attrs:{href:"#5%E4%BD%BF%E7%94%A8pm2%E5%90%AF%E5%8A%A8node%E9%A1%B9%E7%9B%AE"}},[s._v("5.使用pm2启动node项目")])]),s._v(" "),e("li",[e("a",{attrs:{href:"#6nginx%E9%85%8D%E7%BD%AE"}},[s._v("6.nginx配置")])])])])]),s._v(" "),e("h2",{attrs:{id:"_1-linux服务器安装node"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-linux服务器安装node","aria-hidden":"true"}},[s._v("#")]),s._v(" 1.linux服务器安装node")]),s._v(" "),e("p",[s._v("首先")]),s._v(" "),e("p",[s._v("下载node包")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://npm.taobao.org/mirrors/node/latest-v8.x/node-v8.1.0-linux-x64.tar.gz\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("解压")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("tar xvf node-v8.1.0-linux-x64.tar.gz\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("ln -s ~/node-v8.1.0-linux-x64/bin/node /usr/local/bin/node\nln -s ~/node-v8.1.0-linux-x64/bin/npm /usr/local/bin/npm\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("最后"),e("code",[s._v("node -v")]),s._v("查看node版本，如果出现以下就表示安装成功了")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("v8.1.0\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("如果你需要升级node版本，执行以下命令即可")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("sudo npm i -g n\nn stable\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h2",{attrs:{id:"_2-安装pm2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装pm2","aria-hidden":"true"}},[s._v("#")]),s._v(" 2.安装pm2")]),s._v(" "),e("p",[s._v("pm2是一个进程守护工具,类似的还有forever")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("sudo npm i pm2 -g\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("然后执行，如果不映射的话，会出现"),e("code",[s._v("pm2")]),s._v("不是内部指令的错误")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("ln -s ~/node-v8.1.0-linux-x64/bin/pm2 /usr/local/bin/pm2\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("我们顺便把"),e("code",[s._v("git")]),s._v("和"),e("code",[s._v("cnpm")]),s._v("也安装了")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("yum "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i -g cnpm\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s ~/node-v8.1.0-linux-x64/bin/cnpm /usr/bin/cnpm\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h2",{attrs:{id:"_3-安装mysql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-安装mysql","aria-hidden":"true"}},[s._v("#")]),s._v(" 3.安装mysql")]),s._v(" "),e("p",[s._v("卸载已有的mysql")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("rpm -qa|grep -i mysql\nyum remove 'mysql'\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("下载mysql的repo源")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("wget http://repo.mysql.com//mysql57-community-release-el7-7.noarch.rpm\nrpm -ivh mysql57-community-release-el7-7.noarch.rpm\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("安装")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("yum install mysql-server\nyum install mysql-devel\nyum install mysql\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("然后查看刚刚安装的mysql")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("rpm -qa|grep -i mysql\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("登录")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("service mysqld status     查看mysql当前的状态\nservice mysqld stop       停止mysql\nservice mysqld restart    重启mysql\nservice mysqld start      启动mysql\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("在完成上述步骤之后登陆时可能遇到"),e("code",[s._v("ERROR 2002 (HY000): Can‘t connect to local MySQL server through socket ‘/var/lib/mysql/mysql.sock‘ (2)")]),s._v("错误")]),s._v(" "),e("blockquote",[e("p",[s._v("这个错误的原因是"),e("code",[s._v("/var/lib/mysql")]),s._v("的访问权限问题。下面的命令把"),e("code",[s._v("/var/lib/mysql")]),s._v("的拥有者改为当前用户。")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("chown -R openscanner:openscanner /var/lib/mysql\nchown -R root:root /var/lib/mysql\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("于是乎接下来就是查看一下"),e("code",[s._v("/var/lib/mysql/mysql.sock")]),s._v("文件是否存在，第一次查看时该文件不存在，后来在"),e("code",[s._v("/etc/my.cnf")]),s._v("文件中添加了"),e("code",[s._v("user=mysql")])]),s._v(" "),e("p",[s._v("然后尝试登录")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("mysql -u root\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("会出现"),e("code",[s._v("ERROR 1045 (28000): Access denied for user 'root'@'localhost' (using password: NO)")]),s._v(" 登录root帐号需要密码，现在我们没有设置密码，哪来的密码。\n于是乎我们开始忘记密码的操作"),e("br"),s._v("\n第一步，在/etc/my.cnf文件中添加skip-grant-tables"),e("br"),s._v("\n第二步，重启mysql，service mysqld restart"),e("br"),s._v("\n第三步，登录mysql，mysql -u root"),e("br"),s._v("\n第四步，修改密码：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("mysql"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("use mysql"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nmysql"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("update mysql.user "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("authentication_string")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("password"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'你的密码'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" where "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("user")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nmysql"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("flush privileges"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nmysql"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("exit"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("第五步，恢复/etc/my.cnf，将skip-grant-tables删除或者注释掉 "),e("br"),s._v("\n第六步，重启mysql，service mysqld restart")]),s._v(" "),e("p",[s._v("分配用户")]),s._v(" "),e("blockquote",[e("p",[s._v("host指定该用户在哪个主机上可以登陆，此处的”localhost”，是指该用户只能在本地登录，不能在另外一台机器上远程登录，如果想远程登录的话，将”localhost”改为”%”，表示在任何一台电脑上都可以登录;也可以指定某台机器可以远程登录;")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("CREATE USER 'username'@'host' IDENTIFIED BY 'password';\nCREATE USER 'test'@'%' IDENTIFIED BY '密码';\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("给创建的用户权限")]),s._v(" "),e("blockquote",[e("p",[s._v("privileges：用户的操作权限,如SELECT，INSERT，UPDATE等.如果要授予所的权限则使用ALL;\ndatabasename：数据库名。"),e("br"),s._v("\ntablename：表名,如果要授予该用户对所有数据库和表的相应操作权限则可用表示, 如.*.")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("GRANT privileges ON databasename.tablename TO 'username'@'host'\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("下面表示给test用户所有数据库和表的权限")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("mysql>GRANT ALL ON . TO ‘test‘@’%’;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"_4-安装nginx"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-安装nginx","aria-hidden":"true"}},[s._v("#")]),s._v(" 4.安装nginx")]),s._v(" "),e("p",[s._v("安装")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("yum -y install nginx\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("启动")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("service nginx start\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("查找nginx安装在哪，我这里是"),e("code",[s._v("/etc/nginx/conf.d")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("whereis nginx\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("进入文件夹")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("cd /etc/nginx/conf.d\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("然后新建文件，这里以我的域名为例")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("vi www.wclimb.site.conf\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("然后里面的文件内容我们先不写，我们先把node项目部署一下")]),s._v(" "),e("h2",{attrs:{id:"_5-使用pm2启动node项目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-使用pm2启动node项目","aria-hidden":"true"}},[s._v("#")]),s._v(" 5.使用pm2启动node项目")]),s._v(" "),e("p",[s._v("这里以我的项目为例koa2-blog "),e("br"),s._v("\n我们先找到合适的文件夹存放我们得项目，然后"),e("code",[s._v("git clone")]),s._v("一下（git我们之前安装过了）")]),s._v(" "),e("blockquote",[e("p",[s._v("该项目的数据库名叫nodeSql，使用运行之前得先建立好数据库，然后再运行项目，登录数据库执行 create database nodesql;")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("git clone https://github.com/wclimb/Koa2-blog.git\ncd Koa2-blog\ncnpm i \npm2 start index.js\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("上面pm2我们也安装过，该项目监听的是3000端口，项目已经运行起来了"),e("br"),s._v("\n可以使用"),e("code",[s._v("pm2 list")]),s._v("查看进程列表，使用"),e("code",[s._v("pm2 log")]),s._v("打印日志")]),s._v(" "),e("h2",{attrs:{id:"_6-nginx配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-nginx配置","aria-hidden":"true"}},[s._v("#")]),s._v(" 6.nginx配置")]),s._v(" "),e("p",[s._v("记得刚刚我们没有编写"),e("code",[s._v("www.wclimb.site.conf")]),s._v("文件"),e("br"),s._v("\n现在开始写入以下内容，"),e("code",[s._v("blog.wclimb.site")]),s._v("是我的域名，你可以在你的服务器平台去解析一下，目前我们监听的是"),e("code",[s._v("3000")]),s._v("端口，所以代理到"),e("code",[s._v("3000")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("server {\n    listen 80;\n    server_name blog.wclimb.site;\n    location / {\n        proxy_pass http://127.0.0.1:3000;\n    }\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[s._v("检验nginx是否正确配置")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("nginx -t\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("重启nginx")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("service nginx restart\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("如果不成功，可能还需执行一下命令")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("systemctl stop httpd\nsystemctl disable httpd\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);