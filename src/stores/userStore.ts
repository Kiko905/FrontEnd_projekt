import { defineStore } from 'pinia';

interface User {
  name: string;
  age: number;
  weight: number;
  height: number;
  progress: {
    completedDays: number;
    totalDays: number;
  };
}

export const useUserStore = defineStore('user', {
  state: () => ({
    users: [] as User[],
  }),
  actions: {
    updateUser(index: number, newName: string, newAge: number, newWeight: number, newHeight: number) {
      if (index >= 0 && index < this.users.length) {
        this.users[index].name = newName;
        this.users[index].age = newAge;
        this.users[index].weight = newWeight;
        this.users[index].height = newHeight;
      }
    },
    incrementProgress(index: number) {
      if (index >= 0 && index < this.users.length) {
        if (this.users[index].progress.completedDays < this.users[index].progress.totalDays) {
          this.users[index].progress.completedDays++;
        }
      }
    },
    addUser(name: string, age: number, weight: number, height: number) {
      this.users.push({
        name,
        age,
        weight,
        height,
        progress: {
          completedDays: 0,
          totalDays: 30,
        },
      });
    },
  },
});