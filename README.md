## 利用hexo搭建属于自己的博客
如何利用hexo搭建博客网上有很多相关教程，我这里就不重复造轮子了，不懂得地方可以参照[hexo官网](https://hexo.io/zh-cn/docs/)的介绍，这里主要介绍一下如何将一个大众的hexo博客打造成自己喜欢的样子。如有问题欢迎提出Issues

#### hexo博客常用命令
* hexo new "postName" #新建文章
* hexo new page "pageName"  生成新页
* hexo g 生成静态文件
* hexo s 开启虚拟主机，进入调试
* hexo c 关闭虚拟主机
* hexo d 开始上传推送
* hexo clean 清除缓存文件 (db.json) 和已生成的静态文件 (public)。


#### 如何更换hexo主题
1. 下载主题  
    在官网的Themes中下载自己喜欢的主题，推荐通过Git直接下载`$ git clone https://github.com/chaooo/hexo-theme-BlueLake.git themes/BlueLake`,我这里选用的主题是BlueLake，以下内容都以BlueLake主题为例  
    也可以手动将你想要安装的主题文件夹下载至你的站点目录的themes目录下
2. 启用主题  
    修改站点配置文件（hexo/_config.yml），将themes字段的值改为你刚下载的主题。在切换主题之后、验证之前， 我们最好使用 hexo clean 来清除 Hexo 的缓存。
3. 验证主题  
    启动hexo本地站点，开启调试模式，整个命令是`hexo s`
    使用浏览器访问http://localhost:4000 ，检查站点是否运行正确
4. 主题设定
    主题配置完成后，使用`hexo d`发布即可



#### 添加公共尾部标识
##### 编写common_bottom.jade模板文件
```
.common-bottom
  p 如需转载请保留此段声明
  p 作者：
    a(href=config.root + "about/")= (config.author) 
  p 出处：
    a(href=config.root)= (config.url)
  p 如果您对本文有什么疑问，欢迎在下方提出评论，您的建议是我写优质文章的动力。

```
#### 在post.jade中引用common_bottom.jade
在post.jade中添加合适位置添加以下内容  
`include _partial/common_bottom`

#### 将样式文件改为SCSS

1. 将主题自带的styl样式文件改为scss格式的，这俩种格式的文件还是有点区别的，只因为自己习惯使用scss了  
2. 在node_modules中安装hexo-renderer-scss插件，执行: `npm i hexo-renderer-scss --save-dev`
3. 在主题配置文件_config.yml中添加以下内容：
```
node_sass:
  outputStyle: expanded
  precision: 5
  sourceComments: false
```
主要作用是规定scss文件编译后生成的css文件的格式

#### 优化提速
##### 使用gulp优化
安装gulp及所用到的插件，以下是博客中用到的依赖包
```
"del": "^3.0.0", 
"gulp": "^3.9.1",
"gulp-changed": "^3.1.0",
"gulp-clean-css": "^3.2.0",
"gulp-concat": "^2.6.1",
"gulp-htmlmin": "^3.0.0",
"gulp-if": "^2.0.2",
"gulp-imagemin": "^3.3.0",
"gulp-rev": "^8.0.0",
"gulp-rev-collector": "^1.2.2",
"gulp-uglify": "^2.1.2",
"run-sequence": "^2.1.0",
"vinyl-paths": "^2.1.0"
```
这里的优化提速主要体现在以下几个方面：

1. 压缩html,css,js及图片文件
2. 合并多个css文件为一个style.css，合并多个js文件为一个bundle.js
3. 给生成的css和js文件添加版本号(与提速无关，主要是做个实验)

详细内容可参考[jesse131.cn](https://github.com/Jesse121/blog)仓库中的gulpfile.js文件

##### 其他优化措施
1.添加对移动端友好的视口
```
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">
```
2.添加网站关键词和描述，有利于seo
```
<meta name="description" content="专注前端开发，前端开发技术博客">
<meta name="keywords" content="前端开发，PHP开发，Javascript，前端开发博客">
```
3.添加预解析 
```
<link rel="dns-prefetch" href="www.jesse131.cn">
```
4.添加icon文件,在分享网站链接时能显示的图片
```
<link rel="shortcut icon" href="/favicon.ico">
<link rel="bookmark" href="/favicon.ico">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="apple-touch-icon-precomposed" href="/apple-touch-icon.png">
```
5.将网站中用到的字体文件上传到七牛云存储，通过CDN加速提高访问速度  
6.调整js文件的位置，尽可能的放在后面，较少首页白屏时间

### 添加gulp优化后发布博客常用命令使用顺序
#### 改变css或js文件时

1. hexo clean
2. hexo g
3. gulp change
4. hexo s
5. hexo d

#### 未改变cs或js文件时

1. hexo g
2. gulp
3. hexo s
4. hexo d

#### 添加gitment评论
##### 注册oAuth application
在github中注册oAuth application，可以点击[这里](https://github.com/settings/applications/new)进入  
这里需要注意Authorization callback URL需填写博客所在仓库的访问链接，我这里是[http://www.jesse131.cn](http://www.jesse131.cn),点击register application后即可生成Client ID和Client Secret,这俩后面要用到

##### 修改主题文件
这里需要修改主题文件夹中的以下文件  
_config.yml--这里主题配置文件,在comment中追加以下内容
```js
gitment:
gitment_owner: Jesse121 //你的github的名称
gitment_repo: 'https://jesse121.github.io/blog' //你的博客所在仓库的访问链接
gitment_oauth:
  client_id: ******** //这里填写刚才生成的Client ID
  client_secret: **********  //这里填写刚才生成的Client Secret
```
comment_js.jade--这是评论的js文件，在此文件的末尾追加以下内容
```
//gitment
if theme.comment.gitment
  script(src="//imsun.github.io/gitment/dist/gitment.browser.js")
  script.
    var gitment = new Gitment({
      owner: '#{theme.comment.gitment.gitment_owner}',
      repo: '#{theme.comment.gitment.gitment_repo}',
      oauth: {
        client_id: '#{theme.comment.gitment.gitment_oauth.client_id}',
        client_secret: '#{theme.comment.gitment.gitment_oauth.client_secret}',
      },
    })
    gitment.render('gitment-ctn')
```
comment.jade--这是评论的jade模板文件，在此文件的末尾追加以下内容
```
if theme.comment.gitment
  link(type="text/css",rel="stylesheet",href="//imsun.github.io/gitment/style/default.css")
  #gitment-ctn 
```

#### 添加关于我
创建abutme.jade
```
.widget
  .widget-title
    i(class='fa fa-user')= ' ' + __('aboutme')
  .avatar
    img(src="http://o8l2fza1x.bkt.clouddn.com/apple-touch-icon.png")
  .author
    p
      //- i(class="fa fa-user")
      span(class="name")= '姓名：杨冬'
    p
      //- i(class="fa fa-email")
      a(href="mailto:jesse152@163.com")= '邮箱：jesse152@163.com'
    p.github
      //- i(class="fa fa-github")
      a(href="https://github.com/Jesse121",target="_blank")

```
在theme/_config.yml文件中修改如下配置
```
# Sidebar
widgets:
  - aboutme
  - recent_posts
  - category
  - tag
  - archive
  - links
```
在语言文件中添加`aboutme: 关于我`
在样式文件中添加必要的样式

#### 使用自己购买的域名
##### 域名解析
在域名解析记录中添加以下两条记录

1. 先添加一个CNAME，子域名为空，后面记录值写上你的http://xxxx.github.io
2. 再添加一个CNAME，子域名写www，后面记录值也是http://xxxx.github.io

这样用www和不用www都能访问你的网站
##### 添加CNAME文件
在source文件夹中添加名称为CNAME的文件，里面填写你的域名例如：jesse131.cn  
如果希望你的博客默认使用带www的链接，可以在这里只填写带www的 例如：www.jesse131.cn  
##### 为github pages选定source
在博客所在的github仓库中点击setting，在GitHub pages的source中选择你要使用的哪个分支，一般选择master分支，点击save即可看到绑定成功

#### 常用的几个npm命令
查看当前目录下已经安装了那些包  
$ npm list --depth=0  
查看全局目录下已经安装了那些包  
$ npm list -g --depth=0  
安装插件命令  
$ npm install hexo-generator-sitemap -S  
卸载插件命令  
$ npm uninstall hexo-generator-sitemap -S  

### 需要改进的地方
 3. 最近评论列表
 4. 首页显示评论数
 5. 性能优化 gulp
 6. 添加图书页面，微博
 7. 侧边标题栏默认折叠
 8. 将首页分类改为点击量
