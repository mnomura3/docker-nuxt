<template>
  <a-table
    :columns="columns"
    :rowKey="data.data.id"
    :data-source="data.data"
    :loading="loading"
    :bordered=true
  >
  </a-table>
</template>
<script>
  import axios from 'axios'
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            width: '20%',
        },
        {
            title: 'Memo',
            dataIndex: 'memo',
            width: '20%',
        },
        {
            title: 'Created',
            dataIndex: 'created_at',
        },
        {
            title: 'Updated',
            dataIndex: 'updated_at',
        },
    ];

    export default {
        async asyncData () {
            var data = await axios.get('http://laravel7.test/api/tests')
            return {
                data,
                columns,
                loading: false,
            }
        },
    };
</script>
