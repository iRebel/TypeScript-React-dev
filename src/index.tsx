
import React from 'react'
import { render } from 'react-dom'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'

import reportWebVitals from './reportWebVitals'
import HomePage from './pages/homePage'

const { createBrowserHistory } = require('history')
const { BrowserRouter, Switch, Route } = require('react-router-dom')

const history = createBrowserHistory()

render(
  <React.StrictMode>
    <ConfigProvider locale={zhCN}>
      <BrowserRouter history={history}>
        <Switch>
          <Route key="home" exact path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
