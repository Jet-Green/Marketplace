<script setup>
let activeKey = ref(1)
</script>
<template>
    <a-row class="actions">
        <a-tabs v-model:activeKey="activeKey">
            <a-tab-pane key="1" tab="Добавить товар">Content of Tab Pane 1</a-tab-pane>
            <a-tab-pane key="2" tab="Заказы" force-render>Content of Tab Pane 2</a-tab-pane>
            <a-tab-pane key="3" tab="Мой магазин">Content of Tab Pane 3</a-tab-pane>
        </a-tabs>
    </a-row>
</template>