<template>
  <div id="components-layout-demo-basic">
    <a-layout>
      <a-layout-header>No-Title</a-layout-header>
      <a-layout-content><nuxt /></a-layout-content>
      <a-layout-footer>Copyright © 2020 〇〇 Inc. All Rights Reserved.</a-layout-footer>
    </a-layout>
  </div>
</template>

<style>
  #components-layout-demo-basic {
    text-align: center;
  }
  #components-layout-demo-basic .ant-layout-header {
    font-size: 30px;
    background: #fff;
    color: #000;
  }
  #components-layout-demo-basic .ant-layout-footer {
    background: #fff;
    color: #000;
  }
  #components-layout-demo-basic .ant-layout-footer {
    line-height: 1.5;
  }
  #components-layout-demo-basic .ant-layout-sider {
    background: #3ba0e9;
    color: #fff;
    line-height: 120px;
  }
  #components-layout-demo-basic .ant-layout-content {
    background: #fff;
    color: #fff;
    min-height: 120px;
    line-height: 120px;
  }
  #components-layout-demo-basic > .ant-layout {
    margin-bottom: 48px;
  }
  #components-layout-demo-basic > .ant-layout:last-child {
    margin: 0;
  }
</style>
