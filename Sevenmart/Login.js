import dotenv from 'dotenv';
dotenv.config();

class Login
    {
         constructor(page)
            {
                this.page=page;

                this.username=page.getByPlaceholder('Username');
                
                this.password=page.getByPlaceholder('Password');
                
                this.btn=page.getByRole('button',{name:"Sign In"});
                
                this.errorMessage=page.locator(".alert.alert-danger.alert-dismissible");
            }

                async goto()
                    {
                    
                            await this.page.goto(process.env.BASE_URL);
                    }

                async adminLogin(username,password)
                    {
       
                            await this.username.fill(username);
                     
                            await this.password.fill(password);
                    
                            await this.btn.click();

                    }
    }

module.exports=Login;