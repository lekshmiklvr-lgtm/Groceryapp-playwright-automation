class Verifyuser
{
    constructor(page)
    {
        this.page=page;

        this.verifyuser=page.getByRole('link',{name:'Verify Users'});

        this.searchbtn=page.locator(".btn.btn-rounded.btn-primary");

        this.name=page.locator('#un');

        this.find=page.locator(".btn.btn-block-sm.btn-danger");


    }


            async search(name)
                    {

                            await this.verifyuser.click();

                            await this.searchbtn.click();

                            await this.name.fill(name);

                            await this.find.click();
                    }
    
    
    
            async verify(name)
                    {

                            const row=this.page.locator("tr").filter({hasText:name}).first();

                            await row.locator(".badge.bg-warning").click();

                    }


            async delete(name)
                    {

                            const row=this.page.locator("tr").filter({hasText:name}).first();
                
                            this.page.once('dialog',async dialog=>{
            
                                                            console.log(dialog.message());
            
                                                            await dialog.accept();

                                                        });
                            await row.locator(".btn.btn-sm.btn.btn-danger.btncss").click();

                    }
}

module.exports=Verifyuser;