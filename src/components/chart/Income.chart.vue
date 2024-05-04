<script setup>
import { onMounted } from 'vue';
import ApexCharts from 'apexcharts';

onMounted(() => {
  var options4 = {
	chart: {
		height: 110,
		width: "100%",
		type: "area",
		toolbar: {
			show: false,
		},
	},
	dataLabels: {
		enabled: false,
	},
	stroke: {
		curve: "smooth",
		width: 2,
	},
	series: [
		{
			name: "Off Shore",
			data: [10, 40, 15, 40, 35, 96, 69],
		},
	],
	grid: {
		borderColor: "#dae1ea",
		strokeDashArray: 5,
		xaxis: {
			lines: {
				show: true,
			},
		},
		yaxis: {
			lines: {
				show: false,
			},
		},
		padding: {
			top: -20,
			right: 0,
			bottom: 0,
			left: 0,
		},
	},
	xaxis: {
		labels: {
			show: false,
		},
	},
	yaxis: {
		labels: {
			show: false,
		},
	},
	colors: ["#c01d1d"],
	markers: {
		size: 0,
		opacity: 0.3,
		colors: ["#c01d1d"],
		strokeColor: "#ffffff",
		strokeWidth: 2,
		hover: {
			size: 7,
		},
	},
	tooltip: {
		y: {
			formatter: function (val) {
				return +val + "k";
			},
		},
	},
  };
  var chart = new ApexCharts(document.querySelector("#revenue4"), options4);
  chart.render();
});
</script>

<template>
<div class="card mb-4">
            <div class="card-header">
              <h5 class="card-title">Income</h5>
            </div>
            <div class="card-body p-4">
              <div id="revenue4"></div>
              <div class="text-center my-4">
                <h1>
                  598
                  <i class="bi bi-arrow-down-right-circle-fill text-danger"></i>
                </h1>
                <p class="fw-light m-0">24% higher than last month</p>
              </div>
            </div>
          </div>
</template>

<style scoped>
</style>