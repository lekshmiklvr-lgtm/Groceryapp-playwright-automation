const { expect, chromium } = require("@playwright/test");

const config=({
  testdir:'./tests',
  workers:4,
  timeout:40*1000,
  expect:{
    timeout:5000,
  },
  reporter:[
    ['html'],
   ['allure-playwright']
  ],
  use:{
    browsername:'chromium',
    headless:false,
    screenshot:'only-on-failure',
    video:'retain-on-failure',
    trace:'retain-on-failure',
  },
})
module.exports=config;

