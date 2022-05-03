<script>
    import Cookies from 'js-cookie'
    export default {
        data() {
            return{
                SignUpForm: {
                    username: '',
                    password: '',
                    token: ''
                },
                Citylists:[
                    {item:'臺北市'},
                    {item:'新北市'},
                    {item:'桃園市'},
                    {item:'臺中市'},
                    {item:'臺南市'},
                    {item:'高雄市'},
                    {item:'新竹縣'},
                    {item:'苗栗縣'},
                    {item:'彰化縣'},
                    {item:'南投縣'},
                    {item:'雲林縣'},
                    {item:'嘉義縣'},
                    {item:'屏東縣'},
                    {item:'宜蘭縣'},
                    {item:'花蓮縣'},
                    {item:'臺東縣'},
                    {item:'澎湖縣'},
                    {item:'金門縣'},
                    {item:'連江縣'},
                    {item:'基隆市'},
                    {item:'新竹市'},
                    {item:'嘉義市'},
                ]
            }
        },
        // methods
    }
</script>
<template>
    <div class="form_box main">
        <form id="signup_form" class="form_class" action="login/login-access.php" method="post">
            <div class="form_div">
                <div class="row">
                    <h1>Sign Up</h1>
                </div>
                <div class="row mt-3">              
                    <div class="col-6">
                        <input class="field_class" name="email_txt" type="text" placeholder="Email">
                    </div>
                    <div class="col-6">
                        <input class="field_class" name="password_txt" type="text" placeholder="Password">
                    </div>
                </div>
                <div class="row">              
                    <div class="col-3">
                        <input class="field_class" name="firstname_txt" type="text" placeholder="FirstName" autofocus>
                    </div>
                    <div class="col-3">
                        <input class="field_class" name="lastname_txt" type="text" placeholder="LastName">
                    </div>
                    <div class="col-6">
                        <input class="field_class" name="phone_txt" type="text" placeholder="Phone">
                    </div>
                </div>
                
                <div class="row">              
                    <div class="col-4">
                       <select class="form-select form-select-sm field_class" aria-label="Default select example">
                            <option v-for="city in Citylists" :value="city.item">
                                {{ city.item }}
                            </option>
                        </select>
                    </div>
                    <div class="col-8">
                        <input class="field_class" name="address_txt" type="text" placeholder="Address">
                    </div>
                </div>
                
            
                <button class="submit_class" type="submit" form="signup_form" onclick="return validarLogin()">Sign Up</button>
            </div>
        </form>
    </div>
</template>
<style>
* {
    padding: 0px;
    margin: 0px;
}
body {
    background-color: lightgreen;
}
h1 {
    letter-spacing: 1.5vw;
    font-family: 'system-ui';
    text-transform: uppercase;
    text-align: center;
}
.main {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90.5vh;
    width: 100%;
    background: url(https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Mountains-1412683.svg/1280px-Mountains-1412683.svg.png) no-repeat center center;
    background-size: cover;
}

.form_box {
    display: flex;
    justify-content: center;
}
.form_class {
    width: 700px;
    padding: 40px;
    border-radius: 8px;
    background-color: white;
    font-family: 'system-ui';
    box-shadow: 5px 5px 10px rgb(0,0,0,0.3);
}
.form_div {
    text-transform: uppercase;
}
.form_div > label {
    letter-spacing: 3px;
    font-size: 1rem;
}
.info_div {
    text-align: center;
    margin-top: 20px;
}
.info_div {
    letter-spacing: 1px;
}
.field_class {
    width: 100%;
    border-radius: 6px;
    border-style: solid;
    border-width: 1px;
    padding: 5px 0px;
    text-indent: 6px;
    margin-top: 10px;
    margin-bottom: 20px;
    font-family: 'system-ui';
    font-size: 0.9rem;
    letter-spacing: 2px;
}
.submit_class {
    border-style: none;
    border-radius: 5px;
    background-color: #FFE6D4;
    padding: 8px 20px;
    font-family: 'system-ui';
    text-transform: uppercase;
    letter-spacing: .8px;
    display: block;
    margin: auto;
    margin-top: 10px;
    box-shadow: 2px 2px 5px rgb(0,0,0,0.2);
    cursor: pointer;
}
footer {
    height: 10vh;
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: -5px -5px 10px rgb(0,0,0,0.3);
}
footer > p {
    text-align: center;
    font-family: 'system-ui';
    letter-spacing: 3px;
}
footer > p > a {
    text-decoration: none;
    color: white;
    font-weight: bold;
}
</style>
