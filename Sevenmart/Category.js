class Category
{
    constructor(page)
    {
        this.page=page;

        this.cat=page.locator(".small-box-footer");

        this.new=page.locator('a[onclick="click_button(1)"]');

        this.newcat=page.locator('#category');

        this.group=page.locator(".ms-elem-selectable");

        this.save=page.getByRole('button',{name:'Save'});

        this.back=page.getByRole('link',{name:'Category'});

        this.searchcat=page.locator('a[onclick="click_button(2)"]');

        this.catname=page.locator(".form-control");

        this.searchbtn=page.getByRole('button',{name:'Search'});

        this.dash=page.getByText("Dashboard",{exact:true});

        this.cancelbtn=page.locator(".btn.btn-default.btn-fix");

        this.update=page.getByRole('button',{name:'Update'});

        this.image=page.locator('#main_img');


    }


                async addcategory(categoryname,path)
                        {
                                await this.cat.nth(2).click();

                                await this.new.click();

                                await this.newcat.fill(categoryname);

                                await this.group.filter({hasText:'Vegan'}).click();

                                await this.image.setInputFiles(path);

                                await this.save.click();

                                //await this.dash.click();

                                //await this.cat.nth(2).click();
                        }


                async searchcategory(categoryname)

                        {
                                await this.page.mouse.wheel(0,1000);

                                await this.cancelbtn.click();

                                await this.searchcat.click();

                                await this.catname.fill(categoryname);

                                await this.searchbtn.click();

                        }

                async editstatus(categoryname)

                        {
                                //await this.searchcategory(categoryname);

                                await this.searchcat.click();

                                await this.catname.fill(categoryname);

                                await this.searchbtn.click();

                                const resultrow=this.page.locator('tr').filter({has:this.page.locator('td').filter({hasText:categoryname})});

                                const statuslink=resultrow.locator('a:has(span.badge)');

                                await statuslink.click();  

                        }

                async editcategory(categoryname)

                        {
                                //await this.searchcategory(categoryname);

                                await this.searchcat.click();

                                await this.catname.fill(categoryname);

                                await this.searchbtn.click();

                                const row=this.page.locator("tr").filter({hasText:categoryname}).first();

                                await row.locator(".btn.btn-sm.btn.btn-primary.btncss").click();
                                
                                await this.newcat.fill(categoryname);

                                //await this.group.filter({hasText:'Organic'}).click();

                                await this.update.click();
                             
                             
                        }

                async deletecategory(categoryname)
                        {

                            
                                await this.searchcat.click();

                                await this.catname.fill(categoryname);

                                await this.searchbtn.click();

                                const row=this.page.locator("tr").filter({hasText:categoryname}).first();

                                while(await row.count()>0)
                                                {
                                                    this.page.once('dialog',async dialog=>{
            
                                                            console.log(dialog.message());
            
                                                            await dialog.accept();

                                                        });
                                                        
                                                        await row.locator(".btn.btn-sm.btn.btn-danger.btncss").click();
                                                }
                        
                        }

}
module.exports=Category;