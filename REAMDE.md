### 搭建hexo

默认安装了
"hexo": "^3.2.0",
"hexo-generator-archive": "^0.1.4",
"hexo-generator-category": "^0.1.3",
"hexo-generator-index": "^0.2.0",
"hexo-generator-tag": "^0.2.0",
"hexo-renderer-ejs": "^0.3.0",
"hexo-renderer-jade": "^0.3.0",
"hexo-renderer-marked": "^0.3.0",
"hexo-renderer-sass": "^0.3.2",
"hexo-renderer-stylus": "^0.3.1",
"hexo-server": "^0.2.0"

### 使用hexo
* hexo new "postName" #新建文章
* hexo new page "pageName"  生成新页
* hexo g 生成静态文件
* hexo s 开启虚拟主机，进入调试
* hexo c 关闭虚拟主机
* hexo d 开始上传推送


标题#号的右侧一定要有一个空格
一级标题#，二级标题##只允许一个  
一般从三级标题开始编写


### 如何更换hexo主题
1. 下载主题  
    通过Git直接下载（推荐）`$ git clone https://github.com/chaooo/hexo-theme-BlueLake.git themes/BlueLake`  
    也可以手动将你想要安装的主题文件夹下载至你的站点目录的themes目录下

2. 启用主题  
    修改站点配置文件（hexo/_config.yml），将themes字段的值改为你刚下载的主题。在切换主题之后、验证之前， 我们最好使用 hexo clean 来清除 Hexo 的缓存。
3. 验证主题  
    启动hexo本地站点，开启调试模式，整个命令是`hexo s --debug`
    使用浏览器访问http://localhost:4000 ，检查站点是否运行正确
4. 主题设定

查看当前目录下已经安装了那些包
$ npm list --depth=0
查看全局目录下已经安装了那些包
$ npm list -g --depth=0

安装插件命令
$ npm install hexo-generator-sitemap -save-dev


卸载插件命令
 $ npm uninstall hexo-generator-sitemap -save-dev

### 命令使用顺序
#### 改变样式或js文件时

1. hexo clean
2. hexo g
3. gulp change
4. hexo s
5. hexo d

#### 未改变样式或js文件时

1. hexo g
2. gulp
3. hexo s
4. hexo d


### 需要改进的地方
 
 3. 最近评论列表
 4. 首页显示评论数
 5. 性能优化 gulp
 6. 添加图书页面，微博，Github follow
 7. 侧边标题栏默认折叠
 8. 将首页分类改为点击量



