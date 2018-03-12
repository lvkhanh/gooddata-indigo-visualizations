import cloneDeep from 'lodash/cloneDeep';

const LINE_WIDTH = 3;

const AREA_TEMPLATE = {
    chart: {
        type: 'area'
    },
    plotOptions: {
        area: {
            lineColor: '#666666',
            lineWidth: 1,
            marker: {
                lineWidth: 1,
                lineColor: '#666666'
            }
        },
        series: {
            marker: {
                symbol: 'circle',
                radius: 4.5
            },
            lineWidth: LINE_WIDTH,
            fillOpacity: 0.3,
            states: {
                hover: {
                    lineWidth: LINE_WIDTH + 1
                }
            },
            dataLabels: {
                style: {
                    fontWeight: 'normal'
                }
            }
        },
        column: {
            dataLabels: {}
        }
    },
    xAxis: {
        categories: []
    },
    yAxis: {
        stackLabels: {
            enabled: false
        }
    }
};

export function getAreaConfiguration() {
    return cloneDeep(AREA_TEMPLATE);
}
