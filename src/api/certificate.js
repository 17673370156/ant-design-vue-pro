import request from '@/utils/request'

const certificateApi = {
  all: '/cert/all'
}

// 获取证书管理列表
export function all () {
  const token = localStorage.getItem('token') // 获取token
  return request({
    url: certificateApi.all,
    method: 'get',
    headers: {
      'Authorization': `Bearer ${token}` // 将token放入请求头
    }
  })
}
