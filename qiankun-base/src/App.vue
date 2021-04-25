<template>
    <div >
    <el-menu :router="true" mode="horizontal">
      <!-- 基座中放自己的路由 -->
      <el-menu-item index="/">home</el-menu-item>
      <!-- 引入vue应用 -->
      <el-menu-item index="/vue/about">vue</el-menu-item>
    </el-menu>
   <router-view/>
        <div id="vue"></div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
