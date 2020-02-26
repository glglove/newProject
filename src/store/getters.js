export const sidebar = state => state.app.sidebar

export const visitedViews = state => state.app.visitedViews



export const permissionRouters = state => state.permission.routers

export const addRouters = state => state.permission.addRouters


//---------------directive---------------------------
export const isPublic = state => state.directives.isPublic

export const isPublic_params = state => state.directives.tableCodeCustomer

export const flowRuleScanFlag = state => state.directives.flowRuleScanFlag

export const currentActiveNameStr = state => state.directives.currentActiveNameStr


//---------------------------

export const token = state => state.user.token 

export const isLogin = state => state.user.isLogin

export const userInfo = state => state.user.userInfo

export const netWorkStatus = state => state.app.online
