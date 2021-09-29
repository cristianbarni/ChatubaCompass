import styles from '../components/plot.module.css'
import useSWR from 'swr'
import { Bubble } from 'react-chartjs-2';

const fetcher = (url) => fetch(url).then((res) => res.json())
function getDataFromDB() {

    const { data, error } = useSWR('/api/getMembers', fetcher, { refreshInterval: 1000 })

    if (!data) return {}

    var dataSet = {
        datasets:
            data.filter(
                (member) => member.Votes > 0 ? true : false
            ).map((member) => {
                return ({
                    label: member.Name,
                    data: [{
                        x: member.SG,
                        y: member.LP,
                        r: member.Votes
                    }]
                })
            })
    }
    return dataSet

}

export default function Plot() {

    var data = getDataFromDB()

    const plotOptions = {
        maintainAspectRatio: true,
        plugins: {
            legend: {
                display: true,
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

    return (
        <div className={styles.plot}>
            <Bubble
                data={data}
                width={1500}
                height={600}
                options={plotOptions}
            />
        </div>
    )
}