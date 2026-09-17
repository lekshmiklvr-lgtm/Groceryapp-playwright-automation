const Dashboard = require("./Dashboard");

class Offercode
{
    constructor(page)
    {
        this.page=page;

        this.manageoffer=new Dashboard(page);

        this.manage=page.locator(".small-box-footer");

        this.addnew=page.locator(".btn.btn-rounded.btn-danger");

        this.code=page.getByPlaceholder("Enter the Offer Code");

        this.usertype=page.getByRole('radio',{name:'Yes'});

        this.percentage=page.locator('#offer_per');

        this.price=page.locator('#offer_price');

        this.save=page.getByRole('button',{name:'Save'});

        this.searchbtn=page.locator(".btn.btn-rounded.btn-primary");

        this.ofrcode=page.getByPlaceholder("Offer Code");

        this.search=page.locator(".btn.btn-danger.btn-fix");

        this.dash=page.getByText("Dashboard",{exact:true});

        this.photo=page.locator('#main_img');

        this.homebtn=page.getByRole('link',{name:'Home'});

         this.update=page.getByRole('button',{name:'Update'});
    }


            async commonsearch(code)
                {
                        await this.searchbtn.click();

                        await this.ofrcode.fill(code);

                        await this.search.click();
                }

            async commonadd(code,percent,price,path)
                {
                        await this.code.fill(code);

                        await this.usertype.check();

                        await this.percentage.fill(percent);

                        await this.price.fill(price);

                        await this.photo.setInputFiles(path);

                }
            
            
            async newoffer(code,percent,price,path)
                {
                
                        await this.manage.nth(4).click();

                        await this.addnew.click();

                        await this.commonadd(code,percent,price,path);

                        await this.save.click();
                }

            async searchcode(code)
                {
                
                    await this.dash.click();

                    await this.manage.nth(4).click();

                    await this.commonsearch(code);

                }

            async status(code)
                {

                    await this.commonsearch(code);

                    const resultrow=this.page.locator('tr').filter({has:this.page.locator('td').filter({hasText:code})});

                    const statuslink=resultrow.locator('a:has(span.badge)');

                    await statuslink.click();  

                }

            async edit(code,percent,price,path)
                {
                    await this.commonsearch(code);

                    const row=this.page.locator("tr").filter({hasText:code}).first();

                    await row.locator(".btn.btn-sm.btn.btn-primary.btncss").click();

                    await this.commonadd(code,percent,price,path);

                    await this.update.click();

                }

            async delete(code)
                {
                    await this.searchcode(code);

                    const row=this.page.locator("tr").filter({hasText:code}).first();

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

module.exports=Offercode;