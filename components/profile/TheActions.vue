<script setup>
let activeKey = ref(1)
</script>
<template>
    <a-row class="actions">
        <a-tabs v-model:activeKey="activeKey">
            <a-tab-pane key="1" tab="Мой магазин" force-render>
                <ProfileMyStore />
            </a-tab-pane>
            <a-tab-pane key="2" tab="Заказы">
                <ProfileOrdersList />
            </a-tab-pane>
            <a-tab-pane key="3" tab="Настройки">
                <ProfileStoreSettings />
            </a-tab-pane>
        </a-tabs>
    </a-row>
</template>