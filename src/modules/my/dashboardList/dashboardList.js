import { LightningElement } from 'lwc';
import { getWorkloads } from 'data/workloadService';

export default class DashboardList extends LightningElement {
  workloads = [];
  connectedCallback() {

      this.workloads = this.allWorkloads = getWorkloads;
  }

  handleSearchKeyInput(event) {
    const searchKey = event.target.value.toLowerCase();
    this.workloads = this.allSessions.filter(
      workload => workload.testsuite.toLowerCase().includes(searchKey)
    );
  }
}