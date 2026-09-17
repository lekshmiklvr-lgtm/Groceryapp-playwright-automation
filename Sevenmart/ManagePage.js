const Module = require("node:module");

class ManagePage
{
    constructor(page)
    {
        this.page=page;

        this.moreinfo=page.locator(".small-box-footer");

        this.new=page.locator('a[onclick="click_button(1)"]');

        this.title=page.locator('#title');

        this.pagename=page.locator('#page');

        this.image=page.locator('#main_img');

        this.savepage=page.getByRole('button',{name:'Save'});

        this.back=page.getByText("Manage Pages");

        this.searchbtn=page.locator('a[onclick="click_button(2)"]');

        this.searchtitle=page.locator(".form-control");

        this.submit=page.getByRole('button',{name:'Search'});

        this.dash=page.getByText("Dashboard",{exact:true});

        this.update=page.getByRole('button',{name:'Update'});

        this.editbtn=page.locator(".btn.btn-sm.btn.btn-primary.btncss");


    }
    
    
            async addpage(name,pagename,filepath)
                        {
                            await this.moreinfo.nth(0).click();

                            await this.new.click();

                            await this.title.fill(name);

                            await this.pagename.fill(pagename);

                            await this.image.setInputFiles(filepath);

                            await this.savepage.click();

                            //bug

                            
                        }


            async searchpage(name)
                        {

                            await this.back.click();

                            await this.searchbtn.click();

                            await this.searchtitle.fill(name);

                            await this.submit.click();

                        }

            async deletepage(name)
                        {
                            
                            await this.back.click();

                            await this.searchbtn.click();

                            await this.searchtitle.fill(name);

                            await this.submit.click();

                            const row=this.page.locator("tr").filter({hasText:name}).first();
            
                            while(await row.count()>0)
                                    {
                                        this.page.once('dialog',async dialog=>{
                                        
                                                console.log(dialog.message());
                
                                                await dialog.accept();

                                            });

                                        await row.locator('a.btn-danger').click();

                                     }

                        }

            async editpage(name,pagename,filepath)
                        {

                            await this.editbtn.click();

                            await this.title.fill(name);

                            await this.pagename.fill(pagename);

                            await this.image.setInputFiles(filepath);

                            await this.update.click();

                        }
}
module.exports=ManagePage;