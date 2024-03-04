import { UserRequestLogin } from '@/types/api/user-api.type';
import { UserType } from '@/types/user.type';
import { throwErrorByType } from '@/utils/throwErrorByType';

import { baseUrl } from './_fetch';

const login = async (data: UserRequestLogin): Promise<UserType> => {
  try {
    const params = new URLSearchParams(data);

    console.log('baseUrl', baseUrl);
    const res = await fetch(`${baseUrl}/users?${params}`);

    const userData = await res.json();
    return userData;
  } catch (e) {
    throw throwErrorByType('not-current-login-or-pass');
  }
};

export const userServices = { login };
