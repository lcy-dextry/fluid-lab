import React, { memo, Suspense } from 'react'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// 数据
import store from '@/redux/store';
// 组件
import Header from 'c/header';
import Footer from 'c/footer';
import RoutesMap from '@/utils/routes.js';
import { Spin } from 'antd';

const App = memo(() => {
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
