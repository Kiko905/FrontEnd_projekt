import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    name: 'Guest',
    progress: {
      completedDays: 0,
      totalDays: 30,
    },
  }),
  actions: {
    updateName(newName: string) {
      this.name = newName;
    },
    incrementProgress() {
      if (this.progress.completedDays < this.progress.totalDays) {
        this.progress.completedDays++;
      }
    },
  },
});
