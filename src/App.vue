<!--
 * @Descripttion:
 * @version:
 * @Author: shaokuitao <76320025@qq.com>
 * @Date: 2020-04-26 17:27:05
 * @LastEditors: shaokuitao
 * @LastEditTime: 2020-04-26 17:32:04
 -->
<template>
  <div id="app">
    <router-view />
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
