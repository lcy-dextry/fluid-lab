import React, { memo, Suspense } from 'react'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// 数据
import store from '@/redux/store';
import { email, password } from '@/common/local';
// 组件
import Header from 'c/header';
import Footer from 'c/footer';
import RoutesMap from '@/utils/routes.js';
import { Spin } from 'antd';
import { auth } from '@/utils/cloudBase';

const App = memo(() => {
  useEffect(() => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('登陆成功')
      })
  }, auth.hasLoginState());
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Suspense fallback={<Spin className='loading' />}>
          <RoutesMap />
        </Suspense>
        <Footer />
      </BrowserRouter>
    </Provider>
  )
})
export default App;
