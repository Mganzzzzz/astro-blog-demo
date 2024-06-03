<template>
  <Carousel :after-change="onChange">
    <div><h3>1</h3></div>
    <div><h3>2</h3></div>
    <div><h3>3</h3></div>
    <div><h3>4</h3></div>
  </Carousel>
  <Space>
    <Button type="primary" danger @click="onBtnClick">Primary</Button>
    <Button type="primary" danger @click="onBtnClick">Primary</Button>
  </Space>
</template>
<script lang="ts" setup>
import { Button, Carousel, Space } from "ant-design-vue";
const onChange = (current: number) => {
  console.log(current);
};

const onBtnClick = () => {
  console.log("debug onBtnClick");
};
</script>
<style scoped lang="less">
/* For demo */
:deep(.slick-slide) {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

:deep(.slick-slide h3) {
  color: #fff;
}
</style>
