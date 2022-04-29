import request from './request';

// 註冊
const userReg = ({ email, nickname, password }) => {
  return request({
    method: 'post',
    url: `/users`,
    data: {
      user: {
        email,
        nickname,
        password
      },
    },
  });
};

// 登入
const userLogin = ({ email, password }) => {
  return request({
    method: 'post',
    url: `/users/sign_in`,
    data: {
      user: {
        email,
        password
      },
    },
  });
};

// 登出
const userLogout = () => {
  return request({
    method: 'delete',
    url: `/users/sign_out`,
  });
};

// 認證 check
const authCheck = () => {
  return request({
    method: 'get',
    url: `/check`,
  });
};

// ======== 以下待完成 ========

// 取得 TODO 列表


// 新增 TODO


// 修改 TODO


// 刪除 TODO


// 完成狀態切換



export default {  
  userReg,
  userLogin,
  userLogout,
  authCheck,
}