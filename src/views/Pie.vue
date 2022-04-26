<template>
    <div id="myChart" style="width: 1000px;height: 500px;margin: 60px 60px"></div>
</template>

<script>
    export default {
        name: "Pie",
        mounted(){
            this.drawLine();
        },
        methods: {
            drawLine(){
                const _this = this
                axios.get('http://localhost:8181/product/bar').then(function (resp) {
                    //基于准备好的dom，初始化echarts实例
                    let myChart = _this.$echarts.init(document.getElementById('myChart'))
                    // 绘制图表
                    myChart.setOption({
                        xAxis: {
                            type: 'category',
                            data: resp.data.name
                        },
                        yAxis: {
                            type: 'value'
                        },
                        series: [
                            {
                                data: resp.data.values,
                                type: 'bar',
                                showBackground: true,
                                backgroundStyle: {
                                    color: 'rgba(180, 180, 180, 0.2)'
                                }
                            }
                        ]
                    });
                })

            }
        }
    }
</script>

<style scoped>

</style>