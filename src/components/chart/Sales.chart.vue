<script setup>
import { onMounted } from 'vue';
import ApexCharts from 'apexcharts';

onMounted(() => {
  var options1 = {
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
	colors: ["#28256d"],
	markers: {
		size: 0,
		opacity: 0.3,
		colors: ["#28256d"],
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
  var chart = new ApexCharts(document.querySelector("#revenue"), options1);
  chart.render();
});
</script>

<template>
<div class="card mb-4">
            <div class="card-header">
              <h5 class="card-title">Sales</h5>
            </div>
            <div class="card-body p-4">
              <div id="revenue"></div>
              <div class="text-center my-4">
                <h1>
                  689
                  <i class="bi bi-arrow-up-right-circle-fill text-success"></i>
                </h1>
                <p class="fw-light m-0">18% higher than last month</p>
              </div>
            </div>
          </div>
</template>

<style scoped>
</style>