
export default class UserInfo {
  constructor({userName, userInfo}, config) {
    this.userName = userName;
    this.userInfo = userInfo;
    this.config = config;
  }

  getUserInfo() {
    this.config.profileInputName.value = this.userName.textContent;
    this.config.profileInputJob.value = this.userInfo.textContent;
  }

  setUserInfo(userData) {
    this.userName.textContent = userData.name;
    this.userInfo.textContent = userData.about;
    this.config.profileAvatar.style.backgroundImage = `url(${userData.avatar})`;
    this.config.userId = userData._id;
  }
}
