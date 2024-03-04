import { makeAutoObservable, runInAction } from 'mobx';
import { toast } from 'react-toastify';

import { userServices } from '@/services/userServices';
import type { UserRequestLogin } from '@/types/api/user-api.type';
import type { UserType } from '@/types/user.type';

class UserStore {
  user: UserType | null = null;
  loadingUser: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  login = async (data: UserRequestLogin) => {
    this.loadingUser = true;

    try {
      const user = await userServices.login(data);
      runInAction(() => {
        this.user = user;
        this.loadingUser = false;
      });
    } catch (err) {
      const typedError = err as Error;
      toast.error(typedError?.message);
      this.loadingUser = false;
    }
  };
}

export const userStore = new UserStore();
