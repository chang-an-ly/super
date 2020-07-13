# vue-supermall

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


##  一、新项目链接github厂库

### 在左上角设置添加公钥
    设置中的 SSh 和 GPS里面添加

### 生成公钥
    ssh-keygen
    期间会提示你输入邮箱、密码（邮箱密码）直接输入就ok ，成功之后会在一个文件夹下生成一个私钥 id_rsa和个公     钥 id_rsa.pub(放在服务器上)

### 查看公钥
$ cd ~/.ssh //如果该命令无效的话，则本地没有ssh-key公钥，需要创建本地公钥
$ ls
$ cat id_rsa.pub


### 提交git
git remote add origin git@github.com:chang-an-ly/supermall.git
git push -u origin master

##  二、新项目进行结构划分
    2.1 初步划分模块及组件的存放位置
    2.2 用 normalize.css 初始化样式
            网址： https://github.com/necolas/normalize.css


