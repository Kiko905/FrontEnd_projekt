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
    users: JSON.parse(localStorage.getItem('users') || '[]') as User[],
  }),
  actions: {
    updateUser(index: number, newName: string, newAge: number, newWeight: number, newHeight: number) {
      if (index >= 0 && index < this.users.length) {
        this.users[index].name = newName;
        this.users[index].age = newAge;
        this.users[index].weight = newWeight;
        this.users[index].height = newHeight;
        this.saveUsers();
      }
    },
    incrementProgress(index: number) {
      if (index >= 0 && index < this.users.length) {
        if (this.users[index].progress.completedDays < this.users[index].progress.totalDays) {
          this.users[index].progress.completedDays++;
          this.saveUsers();
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
      this.saveUsers();
    },
    removeUser(index: number) {
      if (index >= 0 && index < this.users.length) {
        this.users.splice(index, 1);
        this.saveUsers();
      }
    },
    saveUsers() {
      localStorage.setItem('users', JSON.stringify(this.users));
    },
  },
});