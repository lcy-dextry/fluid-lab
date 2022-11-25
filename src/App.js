import React, { memo } from 'react'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// 自定义工具
import store from '@/store';
// 自定义组件
import Header from 'c/header';
import Footer from 'c/footer';
import RoutesMap from '@/utils/routes.js';

const App = memo(() => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <RoutesMap />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
})
export default App;
