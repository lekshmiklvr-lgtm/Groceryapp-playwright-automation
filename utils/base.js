const Pomanage = require("../Sevenmart/Pomanage");
const {test:base,expect}=require("@playwright/test");
const testData=require("./Data.json");


exports.test=base.extend({

                 testDataForGrocery:async({},use)=>{
                                                    await use(testData);
                                                   },


                 poManager:async({page},use)=>{
                                                const poManager=new Pomanage(page);
                                                await use(poManager);
                                              },


                 loginPage:async({poManager},use)=>{
                                                     const login=poManager.getLogin();
                                                     await login.goto();
                                                     await use(login);
                                                   },


                 adminlogin:async({poManager,testDataForGrocery},use)=>{
                                                                         const loginp=poManager.getLogin();
                                                                         await loginp.goto();
                                                                         await loginp.adminLogin(testDataForGrocery.admin.username,testDataForGrocery.admin.password);
                                                                         await use(loginp);
                                                                        },


                 manage:async({poManager,adminlogin},use)=>{
                                                             const manageproduct=poManager.getManage(adminlogin.page);
                                                             await use(manageproduct);
                                                            },


                 managepages:async({poManager,adminlogin},use)=>{
                                                                 const managepage=poManager.getManagepages(adminlogin.page);
                                                                 await use(managepage);
                                                                },


                 category:async({poManager,adminlogin},use)=>{
                                                                const cat=poManager.getCategory(adminlogin.page);
                                                                await use(cat);
                                                             },


                 user:async({poManager,adminlogin},use)=>{
                                                            const adminuser=poManager.getusers(adminlogin.page);
                                                            await use(adminuser);
                                                         },


                 deliveryboy:async({poManager,adminlogin},use)=>{
                                                                    const dboy=poManager.getdeliveryboy(adminlogin.page);
                                                                    await use(dboy);
                                                                 },


                offercode:async({poManager,adminlogin},use)=>{

                                                               const ofr=poManager.getoffercode(adminlogin.page);
                                                               await use(ofr);

                                                               },

                slider:async({poManager,adminlogin},use)=>{

                                                            const slide=poManager.getslider(adminlogin.page);
                                                            await use(slide);

                                                          },


                verifyuser:async({poManager,adminlogin},use)=>{

                                                            const verify=poManager.getverify(adminlogin.page);
                                                            await use(verify);
                                                          },


                manageuser:async({poManager,adminlogin},use)=>{

                                                            const user=poManager.getmanageuser(adminlogin.page);
                                                            await use(user);


                                                              },

                manageorder:async({poManager,adminlogin},use)=>{

                                                            const order=poManager.getorder(adminlogin.page);
                                                            await use(order);
                                                            
                                                                }


               




});
exports.expect=base.expect;