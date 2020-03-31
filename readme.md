整体思路是用express监听请求，用view文件夹来存储html文件，返回的也是这个html文件。然后通过路由来选择挂载的js文件，js文件控制具体的渲染逻辑，通过react框架的render和mountNode来控制挂载的节点。这些逻辑打包后成为一个js文件，发回浏览器，浏览器再执行。  
js文件怎么下载到本地呢？在html文件里面用`<script>`标签引入打包好的文件  
flag项目其实是用js做本地路由，借助`react-router-dom`，其实是spa,通过路由换渲染的组件，express分发的html和js其实都是同一份。  
前端渲染是直接返回html,然后在html里面通过script或者style标签再加载脚本并添加，而后端渲染则是把组件渲染好，以字符串的形式插入模板的某个位置，然后将这个成品返还回来。server端的入口文件就是纯组件不再需要写挂载方法  
***
项目启动步骤:   

安装依赖  
npm i  

打包client端渲染所需内容：  
npm run build  

打包server端渲染所需内容：  
npm run sBuild  

开启服务：  
npm run start

浏览器打开：  
client端渲染  
http://localhost:3001/   

server端渲染  
http://localhost:3001/?useServer=1   
