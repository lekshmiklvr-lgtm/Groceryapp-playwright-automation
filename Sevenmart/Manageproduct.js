class Manageproduct
{
    constructor(page)
    {
        this.page=page;

        this.manage=page.locator(".small-box-footer");

        this.add=page.locator(".btn.btn-rounded.btn-danger");

        this.productname=page.locator('#title');

        this.type=page.getByRole("radio",{name:'Veg',exact:true}); 

        this.category=page.locator("#cat_id");

        this.subcategory=page.locator('select#sub_id');

        this.group=page.locator("#grp_id");

        this.pricetype=page.locator("#purpose");

        this.weightvalue=page.getByPlaceholder("Enter the Weight Value");

        this.weightunit=page.locator("#w_unit");

        this.maxorder=page.locator("#max_weight");

        this.price=page.locator("#w_price");

        this.mrp=page.locator("#w_mrp");

        this.stock=page.locator("#w_stock");

        this.cost=page.locator("#w_pp");

        this.save=page.getByRole('button',{name:'Save'});

        this.back=page.getByText("Manage Product",{exact:true });

        this.search=page.locator('a[onclick="click_button(2)"]');

        this.title=page.getByPlaceholder("Title");

        this.sub=page.locator('select#sb');

        this.submit=page.locator('button[name="Search"]');

        //this.dash=page.getByText("Dashboard",{exact:true});

        this.delete=page.locator("a.btn-danger");

        this.success=page.locator('.alert-success');

        this.edit=page.locator(".btn.btn-sm.btn.btn-primary.btncss");

        this.stockyes=page.locator(".badge.bg-warning");

        this.update=page.getByRole('button',{name:'Update'});

        this.home=page.getByRole('link',{name:'Home'});
    }


            async productpage()
                {
                        await this.home.click();
        
                        await this.manage.nth(3).click();
                    
                }

            async addProduct(pname,wvalue,maxorder,price,mrp,stock,cost)
                {

                        await this.productpage();

                        await this.add.click();

                        await this.productname.fill(pname);

                        await this.type.isChecked();

                        await this.category.selectOption({value:'2'});

                        await this.category.selectOption({value:'8'});

                        await this.category.selectOption({value:'2'});

                        await this.category.selectOption({value:'8'});
        
                        await this.subcategory.selectOption({value:'26'});
        
                        await this.group.selectOption({value:'1'});
        
                        await this.pricetype.isChecked();
        
                        await this.weightvalue.fill(wvalue);
        
                        await this.weightunit.selectOption({value:'kg'});
        
                        await this.maxorder.fill(maxorder);
        
                        await this.price.fill(price);
        
                        await this.mrp.fill(mrp);
        
                        await this.stock.fill(stock);
        
                        await this.cost.fill(cost);

                        await this.save.click();
        
                }
    
    
            async searchProduct(pname)

                {
                        await this.productpage();

                        await this.search.click();
        
                        await this.title.fill(pname);
        
                        await this.submit.click();
        
                }
    
    
            async deleteproduct(pname)
                {

                        await this.productpage();
        
                        await this.search.click();
        
                        await this.title.fill(pname);

                        const row=this.page.locator("tr").filter({hasText:pname}).first();
        
                        while(await row.count()>0)
                                        {
                                            this.page.once('dialog',async dialog=>{
            
                                                    console.log(dialog.message());
            
                                                    await dialog.accept();

                                                });
                                            await row.locator('a.btn-danger').click();

                                        }
                }


            async editproduct(pname,wvalue,maxorder,price,mrp,stock,cost)
                {

                        await this.searchProduct(pname);

                        const row=this.page.locator("tr").filter({hasText:pname}).first();

                        await row.locator(".btn.btn-sm.btn.btn-primary.btncss").click();

                        await this.productname.fill(pname);

                        await this.type.isChecked();

                        await this.category.selectOption({value:'2'});

                        await this.category.selectOption({value:'8'});

                        await this.category.selectOption({value:'2'});

                        await this.category.selectOption({value:'8'});
        
                        await this.subcategory.selectOption({value:'26'});
        
                        await this.group.selectOption({value:'1'});
        
                        await this.pricetype.isChecked();
        
                        await this.weightvalue.fill(wvalue);
        
                        await this.weightunit.selectOption({value:'kg'});
        
                        await this.maxorder.fill(maxorder);
        
                        await this.price.fill(price);
        
                        await this.mrp.fill(mrp);
        
                        await this.stock.fill(stock);
        
                        await this.cost.fill(cost);

                        await this.update.click();
                }

            async stockupdate(pname)
                {
                                            
                        await this.productpage();

                        await this.search.click();
        
                        await this.title.fill(pname);

                        await this.submit.click();

                        const row=this.page.locator("tr").filter({hasText:pname}).first();

                        await row.locator('a[href*="/Product/stock?id="]').click();

                }
                                    
    
}
module.exports=Manageproduct;