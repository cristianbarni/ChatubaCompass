import styles from '../components/plot.module.css'
import useSWR from 'swr'
import { Bubble, Chart } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels'

Chart.register(ChartDataLabels)

function compare(a, b) {
    if (a.Name < b.Name) {
        return -1;
    }
    if (a.Name > b.Name) {
        return 1;
    }
    return 0;
}

const fetcher = (url) => fetch(url).then((res) => res.json())
function getDataFromDB() {

    const { data, error } = useSWR('/api/getMembers', fetcher, { refreshInterval: 10000 })

    if (!data) return {}

    var dataSet = {
        datasets: data.filter(
            (member) => member.Votes > 0 ? true : false
        ).sort(compare)
            .map((member) => {
                return ({
                    label: member.Name,
                    backgroundColor: member.backgroundColor,
                    borderColor: member.borderColor,
                    data: [{
                        x: member.SG,
                        y: member.LP,
                        r: member.Votes
                    }]
                })
            }),
        labels: data.filter(
            (member) => member.Votes > 0 ? true : false
        ).sort(compare)
        .map((member) => member.Name)
    }
    return dataSet

}

export default function Plot() {

    var data = getDataFromDB()

    const plotOptions = {
        maintainAspectRatio: true,
        plugins: {
            datalabels: {
                labels: {
                    title: {
                        font: {
                            family: 'Exo'
                        }
                    }
                },
                formatter: function (value, context) {
                    console.log(context.chart.data.labels)
                    console.log(context)
                    return context.chart.data.labels[context.datasetIndex]
                }
            },
            legend: {
                display: false,
            }
        },
        scales: {
            xAxis: {
                title: {
                    display: true,
                    text: "Schons-Gonini",
                    font: {
                        family: "Exo",
                        size: 16
                    }
                },
                max: 10,
                min: -10,
                ticks: {
                    display: false,
                },
                scaleLabel: {
                    display: true,
                    labelString: "Schons-Gonini"
                }
            },
            yAxis: {
                title: {
                    display: true,
                    text: "Lara-Pierri",
                    font: {
                        family: "Exo",
                        size: 16
                    }
                },
                max: 10,
                min: -10,
                ticks: {
                    display: false,
                },
            },
        }
    }

    const plugins = ChartDataLabels
    console.log(plugins)

    return (
        <div className={styles.plot}>
            <Bubble
                data={data}
                width={1500}
                height={600}
                options={plotOptions}
                plugins={plugins}
            />
        </div>
    )
}