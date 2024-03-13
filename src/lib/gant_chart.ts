export class GantChartElement {
    timeIndex: number = 0;
    pid: string = '';

    constructor(timeIndex:number, pid:string) {
        this.timeIndex = timeIndex;
        this.pid = pid;
    }
}
