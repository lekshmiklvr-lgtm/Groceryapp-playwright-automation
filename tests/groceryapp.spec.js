const { test,expect } = require("../utils/base");

test.describe('grocery shopping application',()=>{

                test('login with valid credentials and navigate to dashboard',async({loginPage,testDataForGrocery})=>{

                         await loginPage.adminLogin(testDataForGrocery.admin.username,testDataForGrocery.admin.password);

                         await expect(loginPage.page).toHaveURL(/admin/);

                 });


                test('login using invalid credentials leads to an error message',async({loginPage,testDataForGrocery})=>{

                         await loginPage.adminLogin(testDataForGrocery.invalidlogin.username,testDataForGrocery.invalidlogin.password);
                    
                         await expect(loginPage.errorMessage).toBeVisible();

                 });

               test('Manage products ',async({testDataForGrocery,manage})=>{


                         await manage.addProduct(       testDataForGrocery.product.pname,
                                                        testDataForGrocery.product.weightvalue,
                                                        testDataForGrocery.product.MaxQty,
                                                        testDataForGrocery.product.price,
                                                        testDataForGrocery.product.mrp,
                                                        testDataForGrocery.product.stockavailable,
                                                        testDataForGrocery.product.purchaseprice
                                                );

                
                         await expect(manage.page.getByText('Alert!')).toBeVisible();
        
                         await manage.searchProduct(testDataForGrocery.product.pname);

                         const row=manage.page.locator("tr").filter({hasText:testDataForGrocery.product.pname}).first();

                         await expect(row).toBeVisible();

                         await manage.editproduct(
                                                        testDataForGrocery.product.pname,
                                                        testDataForGrocery.product.weightvalue,
                                                        testDataForGrocery.product.MaxQty,
                                                        testDataForGrocery.product.price,
                                                        testDataForGrocery.product.mrp,
                                                        testDataForGrocery.product.stockavailable,
                                                        testDataForGrocery.product.purchaseprice
                                                 );

                         await expect(manage.page.getByText('Alert!')).toBeVisible();

                         await manage.stockupdate(testDataForGrocery.product.pname);

                         await expect(manage.page.getByText('Alert!')).toBeVisible();

                         await manage.deleteproduct(testDataForGrocery.product.pname);

                         await expect(manage.page.getByText('Alert!')).toBeVisible();

                 });


                test('manage pages',async({testDataForGrocery,managepages})=>{
  
                         await managepages.addpage(       testDataForGrocery.addpage.name,
                                                          testDataForGrocery.addpage.pagename,
                                                          testDataForGrocery.addpage.filepath
                                                 );

                         await expect(managepages.page.getByText('Alert!')).toBeVisible();

                         await managepages.searchpage(testDataForGrocery.searchpage.name);

                         const row=managepages.page.locator("tr").filter({hasText:testDataForGrocery.searchpage.pname}).first();

                         await expect(row).toBeVisible();
                         
                         await managepages.editpage(testDataForGrocery.addpage.name,testDataForGrocery.addpage.pagename,testDataForGrocery.addpage.filepath);
                        
                         await expect(managepages.page.getByText('Alert!')).toBeVisible();
                         
                         await managepages.deletepage(testDataForGrocery.searchpage.name);

                         await expect(managepages.page.getByText('Alert!')).toBeVisible();

                 });


                 test('category',async({category,testDataForGrocery})=>{

                            await category.addcategory(testDataForGrocery.category.categoryname,testDataForGrocery.category.image);

                            await expect(category.page.getByText('Alert!')).toBeVisible();

                            await category.searchcategory(testDataForGrocery.category.categoryname);

                            await category.editstatus(testDataForGrocery.category.categoryname);

                            await expect(category.page.getByText('Alert!')).toBeVisible();

                            await category.editcategory(testDataForGrocery.category.categoryname);

                            await expect(category.page.getByText('Alert!')).toBeVisible();

                            await category.deletecategory(testDataForGrocery.category.categoryname);

                            await expect(category.page.getByText('Alert!')).toBeVisible();

                 });


                 test('Admin user',async({user,testDataForGrocery})=>{

                                   await user.adduser(testDataForGrocery.staff.username,testDataForGrocery.staff.pass);

                                   await expect(user.page.getByText('Alert!')).toBeVisible();

                                   await user.searchuser(testDataForGrocery.staff.username);

                                   const row=user.page.locator("tr").filter({hasText:testDataForGrocery.staff.username}).first();

                                   await expect(row).toBeVisible();

                                   await user.updateuser(testDataForGrocery.staff.username,testDataForGrocery.staff.pass);

                                   await expect(user.page.getByText('Alert!')).toBeVisible();

                                   await user.statusofuser(testDataForGrocery.staff.username);

                                   await expect(user.page.getByText('Alert!')).toBeVisible();
                                   
                                   await user.deleteuser(testDataForGrocery.staff.username);

                                   await expect(user.page.getByText('Alert!')).toBeVisible();

                 });

                 test('Manage delivery boy',async({deliveryboy,testDataForGrocery})=>{

                        await deliveryboy.adddeliveryboy(       testDataForGrocery.newdb.dbname,
                                                                testDataForGrocery.newdb.email,
                                                                testDataForGrocery.newdb.ph,
                                                                testDataForGrocery.newdb.adrs,
                                                                testDataForGrocery.newdb.username,
                                                                testDataForGrocery.newdb.pass
                                                        );

                        await expect(deliveryboy.page.getByText('Alert!')).toBeVisible();


                        await deliveryboy.searchdb(             testDataForGrocery.newdb.dbname,
                                                                testDataForGrocery.newdb.email,
                                                                testDataForGrocery.newdb.ph
                                                        );

                        const row=deliveryboy.page.locator("tr").filter({hasText:testDataForGrocery.newdb.dbname}).first();

                        await expect(row).toBeVisible();

                        await deliveryboy.status(testDataForGrocery.newdb.dbname);

                        await expect(deliveryboy.page.getByText('Alert!')).toBeVisible();

                        await deliveryboy.edit(                 testDataForGrocery.newdb.dbname,
                                                                testDataForGrocery.newdb.email,
                                                                testDataForGrocery.newdb.ph,
                                                                testDataForGrocery.newdb.adrs,
                                                                testDataForGrocery.newdb.username,
                                                                testDataForGrocery.newdb.pass);

                        await expect(deliveryboy.page.getByText('Alert!')).toBeVisible();

                        await deliveryboy.delete(testDataForGrocery.newdb.dbname);

                        await expect(deliveryboy.page.getByText('Alert!')).toBeVisible();


                        

                 });

                 test('@regression Manage offercode',async({offercode,testDataForGrocery})=>{

                        await offercode.newoffer(               testDataForGrocery.offer.code,
                                                                testDataForGrocery.offer.percent,
                                                                testDataForGrocery.offer.price,
                                                                testDataForGrocery.offer.path

                                                );

                        await expect(offercode.page.getByText('Alert!')).toBeVisible();


                        await offercode.searchcode(testDataForGrocery.offer.code);

                        const row=offercode.page.locator("tr").filter({hasText:testDataForGrocery.offer.code}).first();

                        await expect(row).toBeVisible();

                        await offercode.status(testDataForGrocery.offer.code);

                        await expect(offercode.page.getByText('Alert!')).toBeVisible();

                        await offercode.edit(testDataForGrocery.offer.code,testDataForGrocery.offer.percent,
                                                                testDataForGrocery.offer.price,
                                                                testDataForGrocery.offer.path);

                        await expect(offercode.page.getByText('Alert!')).toBeVisible();

                        await offercode.delete(testDataForGrocery.offer.code);

                        await expect(offercode.page.getByText('Alert!')).toBeVisible();



                 });

                 test('Manage slider',async({slider,testDataForGrocery})=>{

                        await slider.newslider(testDataForGrocery.slider.path,testDataForGrocery.slider.link);

                        await expect(slider.page.getByText('Alert!')).toBeVisible();


                 });

                 test('Verify user',async({verifyuser,testDataForGrocery})=>{

                        await verifyuser.search(testDataForGrocery.verify.username);

                        const row=verifyuser.page.locator("tr").filter({hasText:testDataForGrocery.verify.username}).first();

                        await expect(row).toBeVisible();

                        await verifyuser.verify(testDataForGrocery.verify.username);

                        await expect(verifyuser.page.getByText('Alert!')).toBeVisible();

                        //await verifyuser.delete(testDataForGrocery.verify.username);

                        //await expect(verifyuser.page.getByText('Alert!')).toBeVisible();


                 });

                 test('Manage user',async({manageuser,testDataForGrocery})=>{

                            await manageuser.search(testDataForGrocery.verify.username);

                            const row=manageuser.page.locator("tr").filter({hasText:testDataForGrocery.verify.username}).first();

                            await expect(row).toBeVisible();
                            
                            await manageuser.status(testDataForGrocery.verify.username);
                            
                            await expect(manageuser.page.getByText('Alert!')).toBeVisible();

                 });

                 test('@smoke Manage order',async({manageorder,testDataForGrocery})=>{

                     await manageorder.searchorder(testDataForGrocery.order.id);

                     const row=manageorder.page.locator("tr").filter({hasText:testDataForGrocery.order.id}).first();

                     await expect(row).toBeVisible();

                     //await manageorder.changestatus(testDataForGrocery.order.id,testDataForGrocery.order.status);

                     //await expect(manageorder.page.getByText('Alert!')).toBeVisible();  //bug 

                     await manageorder.changedeliverydate     (       testDataForGrocery.order.id,
                                                                      testDataForGrocery.order.date,
                                                                      testDataForGrocery.order.time1,
                                                                      testDataForGrocery.order.time2
                                                               );

                     await expect(manageorder.page.getByText('Alert!')).toBeVisible();

                     await manageorder.assigndb(testDataForGrocery.order.id,testDataForGrocery.order.db);

                     await expect(manageorder.page.getByText('Alert!')).toBeVisible();

                     await manageorder.vieworder();

                     await expect(manageorder.page.locator('tr').filter({hasText:'Grant Total :'}).locator('td h4')).toHaveText('£ 1.7');




                 });
        
      
});

