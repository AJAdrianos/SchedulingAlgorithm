import { Process } from "./process";
import { GantChartElement } from "./gant_chart";

class Algorithm {
    processes: Process[] = [];
    sum: number = 0;

    constructor (processes: Process[]) {
        this.processes = processes;
        processes.forEach(process => {
            this.sum += process.burstTime
        });
    }

    FCFS() : GantChartElement[]{
        let gantChart: GantChartElement[] = [];
        // let currentIndex: number = 0;
        // let current = this.processes[currentIndex];
        // let counter = 0;
        // for(let i = 0; i < this.sum;i++ ){
        //     counter++;
        //     let currentPID: string = current.pid;
        //     let element: GantChartElement = new GantChartElement(i, currentPID);
        //     gantChart.push()
        // }
        
        this.processes.forEach(process => {
            let runningCount: number = 0;
            for(let i = 0; i < process.burstTime; i++){
                runningCount++;
                let element: GantChartElement = new GantChartElement(runningCount, process.pid);
                gantChart.push(element);
            }
        });

        return gantChart;
    }
}

export { Algorithm }