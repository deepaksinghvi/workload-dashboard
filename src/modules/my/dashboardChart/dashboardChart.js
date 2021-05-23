import { LightningElement } from 'lwc';
import Chart from 'chart.js/auto';
import {  } from 'data/workloadService';
import { getWorkloads } from '../../data/workloadService/workloadService';

const generateRandomNumber = () => {
    return Math.round(Math.random() * 100);
};


export default class DashboardChart extends LightningElement {
    chart;
    chartjsInitialized = false;

    config = {
        type: 'doughnut',
        data: {
            datasets: [
                {
                    data : this.getCloudCount(),
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(255, 159, 64)',
                        'rgb(255, 205, 86)',
                        'rgb(75, 192, 192)',
                        'rgb(54, 162, 235)'
                    ],
                    label: 'Dataset 1'
                }
            ],
            labels : this.getLabels()
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top'
                }
            },
            animation: {
                animateScale: true,
                animateRotate: true,
            }
        }
    };

    renderedCallback() {
        if (this.chartjsInitialized) {
            return;
        }
        this.chartjsInitialized = true;
        this.loadChartJs();
    }

    loadChartJs() {
        const ctx = this.template
            .querySelector('canvas.donut')
            .getContext('2d');
            console.log(this.getLabels())
        this.chart = new Chart(ctx, this.config);
    }
    getLabels() {
        var result = [];
        var clouds = [];
        getWorkloads.reduce(function(res, value) {
        if (!res[value.cloud]) {
            res[value.cloud] = { cloud: value.cloud, qty: 0 };
            result.push(res[value.cloud])
        }
        res[value.cloud].qty += 1;
        return res;
        }, {});
        
        result.forEach(cloud => {
            clouds.push(cloud.cloud)
        });
        return clouds
    }

    getCloudCount () {
        var result = [];
        var count = [];
        getWorkloads.reduce(function(res, value) {
        if (!res[value.cloud]) {
            res[value.cloud] = { cloud: value.cloud, qty: 0 };
            result.push(res[value.cloud])
        }
        res[value.cloud].qty += 1;
        return res;
        }, {});
        
        result.forEach(cloud => {
            count.push(cloud.qty)
        });
        return count;
    }
}