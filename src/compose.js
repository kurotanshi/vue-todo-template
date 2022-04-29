import { reactive, ref } from 'vue';
import apis from './apis';

// 封裝所有與 user 相關的邏輯
export const useUserInfo = () => {
  const userInfo = reactive({
    isLogin: false,
    nickname: '',
    email: '',
  });

  // 顯示錯誤訊息
  const errorMessage = ref('');
  
  // 更新
  const updateInfo = member => {
    userInfo.isLogin = member.isLogin;
    userInfo.nickname = member.nickname;
    userInfo.email = member.email;
  }

  // 登入
  const login = async (email = '', password = '') => {
    try { 
      const res = await apis.userLogin({ email, password });
      userInfo.email = res.email;
      userInfo.nickname = res.nickname;
      userInfo.isLogin = true;
    }
    catch (error) {
      errorMessage.value = error.response.data.message;
      window.setTimeout(() => errorMessage.value = '', 5000);
    }
  };

  // 註冊
  const userReg = async (nickname = '', email = '', password = '') => {
    try { 
      const res = await apis.userReg({ nickname, email, password });
      userInfo.email = res.email;
      userInfo.nickname = res.nickname;
      userInfo.isLogin = true;
    }
    catch (error) {
      errorMessage.value = error.response.data.message;
      window.setTimeout(() => errorMessage.value = '', 5000);
    }
  }

  // 登出
  const logout = async () => {
    await apis.userLogout()
    window.localStorage.removeItem('token');
    userInfo.isLogin = false;
  };

  return {
    userInfo,
    errorMessage,
    updateInfo,
    login,
    logout,
    userReg
  }
};

// 封裝所有與 list 相關的邏輯
export const usetodoList = () => {
  const list = ref([]);
  const content = ref('');

  // 取得列表
  const getList = async () => {
    const { todos } = await apis.getList();
    list.value = todos.map(d => ({ ...d, isEdit: false }));
  };

  // 新增
  const addItem = async () => {
    await apis.addItem(content.value);
    await getList();
    content.value = '';
  };

  // 編輯
  const editItem = async (item) => { 
    const { id, content } = item;
    await apis.editItem({ id, content })
    await getList();
  };

  // 刪除
  const removeItem = async (id) => {
    await apis.removeItem(id);
    await getList();
  };

  // 切換完成狀態
  const toggleItem = async (item) => {
    await apis.toggleItem(item.id)
    await getList();
  };

  return {
    list,
    content,
    getList,
    addItem,
    editItem,
    removeItem,
    toggleItem
  }
};