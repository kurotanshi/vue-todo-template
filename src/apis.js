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
const getList = () => {
  return request({
    method: 'get',
    url: `/todos`,
  });
};

// 新增 TODO
const addItem = (content) => {
  return request({
    method: 'post',
    url: `/todos`,
    data: {
      content
    }
  });
}

// 修改 TODO
const editItem = ({ id, content }) => {
  return request({
    method: 'put',
    url: `/todos/${id}`,
    data: {
      content
    }
  });
};

// 刪除 TODO
const removeItem = (id) => {
  return request({
    method: 'delete',
    url: `/todos/${id}`,
  });
};

// 完成狀態切換
const toggleItem = (id) => {
  return request({
    method: 'patch',
    url: `/todos/${id}/toggle`,
  });
};


export default {
  userReg,
  userLogin,
  userLogout,
  authCheck,
  getList,
  addItem,
  editItem,
  removeItem,
  toggleItem
}