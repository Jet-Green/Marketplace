<script setup>
let loading = ref(true)
let orders = ref([])
// let showingOrderId = ref()
// let showingOrder = ref()


// async function showOrderItems(orderId) {
//     console.log(orderId);
//     showingOrder.value = orders.value.find((order) => order.id = orderId)
//     if (!showingOrderId.value) {
//         showingOrderId.value = orderId;
//     } else {
//         showingOrderId.value = null;
//         showingOrder.value = null;
//     }
// }
const mainColumns = [
    { title: 'Время', dataIndex: 'time' },
    { title: 'Контакты', dataIndex: 'contacts' },
    { title: 'Адрес', dataIndex: 'adress' },
    { title: 'Время доставки', dataIndex: 'finalTime' },
];

const orderColumns = [
    { title: 'Наименование', dataIndex: 'name' },
    { title: 'Количество', dataIndex: 'count' },
    { title: 'Цена', dataIndex: 'price' },
    { title: 'Сумма', dataIndex: 'amount' },
]


onMounted(() => {
    useFetch('/api/orders/get-by-user-id', {
        method: 'POST',
        body: {
            userId: '1'
        }
    }).then((response) => {
        loading.value = false;
        console.log(response.data._rawValue);
        // for expandable a-table
        for (let v of response.data._rawValue) {
            v.key = v.id
            v.time = new Date(v.time).toLocaleString()
            orders.value.push(v)
        }
    })
})
</script>
<template>
    <div>
        <a-row v-if="loading" type="flex" justify=center>
            <a-col class="ma-16">
                <a-spin size="large" />
            </a-col>
        </a-row>

        <div v-else-if="orders[0]">
            <a-table :data-source="orders" :columns="mainColumns" :scroll="{ x: 100 }">
                <!-- <template #bodyCell="{ column }">
                    <template v-if="column.dataIndex === 'time'">
                        {{ column }}
                    </template>
                </template> -->
                <template #expandedRowRender="{ record }">
                    <a-table :columns="orderColumns" :data-source="record.goods">

                    </a-table>
                    <!-- <p style="margin: 0">
                        {{ record.goods }}
                    </p> -->
                </template>
            </a-table>
        </div>
    </div>
</template >