<template>
  <div>
    <div>Hola como estas?</div>
    <router-link to="/">Back</router-link>
    <router-link to="/view1/view12">child view</router-link>
    <router-link to="/view1/view1view2">child view2</router-link>
    <pre class="child">
      <router-view></router-view>
    </pre>
  </div>
</template>

<style>
.child {
  border: 2px solid green;
}
</style>
